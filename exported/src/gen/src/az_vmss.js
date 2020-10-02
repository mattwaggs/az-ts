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
/** Configure the Azure Virtual Machine Scale Set diagnostics extension. */
var az_vmss_diagnostics = /** @class */ (function () {
    function az_vmss_diagnostics() {
    }
    /**
     * Show the default config file which defines data to be collected.
     *
     * Syntax:
     * ```
     * az vmss diagnostics get-default-config [--is-windows-os]
     *                                        [--subscription]
     * ```
     */
    az_vmss_diagnostics.get_default_config = function () {
        return new az_vmss_diagnostics_get_default_config_command_builder("az vmss diagnostics get-default-config", 'az_vmss_diagnostics_get_default_config_command_result');
    };
    /**
     * Enable diagnostics on a VMSS.
     *
     * Syntax:
     * ```
     * az vmss diagnostics set --resource-group
     *                         --settings
     *                         --vmss-name
     *                         [--no-auto-upgrade {false, true}]
     *                         [--protected-settings]
     *                         [--subscription]
     *                         [--version]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} settings Json string or a file path, which defines data to be collected.
     * @param {string} vmssName Scale set name.
     */
    az_vmss_diagnostics.set = function (resourceGroup, settings, vmssName) {
        return new az_vmss_diagnostics_set_command_builder("az vmss diagnostics set", 'az_vmss_diagnostics_set_command_result', resourceGroup, settings, vmssName);
    };
    return az_vmss_diagnostics;
}());
exports.az_vmss_diagnostics = az_vmss_diagnostics;
/** Manage data disks of a VMSS. */
var az_vmss_disk = /** @class */ (function () {
    function az_vmss_disk() {
    }
    /**
     * Attach managed data disks to a scale set or its instances.
     *
     * Syntax:
     * ```
     * az vmss disk attach [--caching {None, ReadOnly, ReadWrite}]
     *                     [--disk]
     *                     [--ids]
     *                     [--instance-id]
     *                     [--lun]
     *                     [--resource-group]
     *                     [--size-gb]
     *                     [--sku {Premium_LRS, StandardSSD_LRS, Standard_LRS, UltraSSD_LRS}]
     *                     [--subscription]
     *                     [--vmss-name]
     * ```
     */
    az_vmss_disk.attach = function () {
        return new az_vmss_disk_attach_command_builder("az vmss disk attach", 'az_vmss_disk_attach_command_result');
    };
    /**
     * Detach managed data disks from a scale set or its instances.
     *
     * Syntax:
     * ```
     * az vmss disk detach --lun
     *                     [--ids]
     *                     [--instance-id]
     *                     [--resource-group]
     *                     [--subscription]
     *                     [--vmss-name]
     * ```
     *
     * @param {string} lun 0-based logical unit number (LUN). Max value depends on the Virtual Machine instance size.
     */
    az_vmss_disk.detach = function (lun) {
        return new az_vmss_disk_detach_command_builder("az vmss disk detach", 'az_vmss_disk_detach_command_result', lun);
    };
    return az_vmss_disk;
}());
exports.az_vmss_disk = az_vmss_disk;
/** Manage encryption of VMSS. */
var az_vmss_encryption = /** @class */ (function () {
    function az_vmss_encryption() {
    }
    /**
     * Disable the encryption on a VMSS with managed disks.
     *
     * Syntax:
     * ```
     * az vmss encryption disable [--force]
     *                            [--ids]
     *                            [--name]
     *                            [--resource-group]
     *                            [--subscription]
     *                            [--volume-type {ALL, DATA, OS}]
     * ```
     */
    az_vmss_encryption.disable = function () {
        return new az_vmss_encryption_disable_command_builder("az vmss encryption disable", 'az_vmss_encryption_disable_command_result');
    };
    /**
     * Encrypt a VMSS with managed disks.
     *
     * Syntax:
     * ```
     * az vmss encryption enable --disk-encryption-keyvault
     *                           [--force]
     *                           [--ids]
     *                           [--key-encryption-algorithm]
     *                           [--key-encryption-key]
     *                           [--key-encryption-keyvault]
     *                           [--name]
     *                           [--resource-group]
     *                           [--subscription]
     *                           [--volume-type {ALL, DATA, OS}]
     * ```
     *
     * @param {string} diskEncryptionKeyvault Name or ID of the key vault where the generated encryption key will be placed.
     */
    az_vmss_encryption.enable = function (diskEncryptionKeyvault) {
        return new az_vmss_encryption_enable_command_builder("az vmss encryption enable", 'az_vmss_encryption_enable_command_result', diskEncryptionKeyvault);
    };
    /**
     * Show encryption status.
     *
     * Syntax:
     * ```
     * az vmss encryption show [--ids]
     *                         [--name]
     *                         [--query-examples]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    az_vmss_encryption.show = function () {
        return new az_vmss_encryption_show_command_builder("az vmss encryption show", 'az_vmss_encryption_show_command_result');
    };
    return az_vmss_encryption;
}());
exports.az_vmss_encryption = az_vmss_encryption;
/** Find the available VM extensions for a subscription and region. */
var az_vmss_extension_image = /** @class */ (function () {
    function az_vmss_extension_image() {
    }
    /**
     * List the information on available extensions.
     *
     * Syntax:
     * ```
     * az vmss extension image list [--latest]
     *                              [--location]
     *                              [--name]
     *                              [--publisher]
     *                              [--query-examples]
     *                              [--subscription]
     *                              [--version]
     * ```
     */
    az_vmss_extension_image.list = function () {
        return new az_vmss_extension_image_list_command_builder("az vmss extension image list", 'az_vmss_extension_image_list_command_result');
    };
    /**
     * Gets a list of virtual machine extension image types.
     *
     * Syntax:
     * ```
     * az vmss extension image list-names --location
     *                                    --publisher
     *                                    [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} publisher Image publisher name.
     */
    az_vmss_extension_image.list_names = function (location, publisher) {
        return new az_vmss_extension_image_list_names_command_builder("az vmss extension image list-names", 'az_vmss_extension_image_list_names_command_result', location, publisher);
    };
    /**
     * Gets a list of virtual machine extension image versions.
     *
     * Syntax:
     * ```
     * az vmss extension image list-versions --location
     *                                       --name
     *                                       --publisher
     *                                       [--filter]
     *                                       [--orderby]
     *                                       [--subscription]
     *                                       [--top]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name Name of the extension.
     * @param {string} publisher Image publisher name.
     */
    az_vmss_extension_image.list_versions = function (location, name, publisher) {
        return new az_vmss_extension_image_list_versions_command_builder("az vmss extension image list-versions", 'az_vmss_extension_image_list_versions_command_result', location, name, publisher);
    };
    /**
     * Gets a virtual machine extension image.
     *
     * Syntax:
     * ```
     * az vmss extension image show --location
     *                              --name
     *                              --publisher
     *                              --version
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name Name of the extension.
     * @param {string} publisher Image publisher name.
     * @param {string} version Extension version.
     */
    az_vmss_extension_image.show = function (location, name, publisher, version) {
        return new az_vmss_extension_image_show_command_builder("az vmss extension image show", 'az_vmss_extension_image_show_command_result', location, name, publisher, version);
    };
    return az_vmss_extension_image;
}());
exports.az_vmss_extension_image = az_vmss_extension_image;
/** Manage extensions on a VM scale set. */
var az_vmss_extension = /** @class */ (function () {
    function az_vmss_extension() {
    }
    /**
     * Delete an extension from a VMSS.
     *
     * Syntax:
     * ```
     * az vmss extension delete --name
     *                          --resource-group
     *                          --vmss-name
     *                          [--no-wait]
     *                          [--subscription]
     * ```
     *
     * @param {string} name Name of the extension.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vmssName Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
     */
    az_vmss_extension["delete"] = function (name, resourceGroup, vmssName) {
        return new az_vmss_extension_delete_command_builder("az vmss extension delete", 'az_vmss_extension_delete_command_result', name, resourceGroup, vmssName);
    };
    /**
     * List extensions associated with a VMSS.
     *
     * Syntax:
     * ```
     * az vmss extension list --resource-group
     *                        --vmss-name
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vmssName Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
     */
    az_vmss_extension.list = function (resourceGroup, vmssName) {
        return new az_vmss_extension_list_command_builder("az vmss extension list", 'az_vmss_extension_list_command_result', resourceGroup, vmssName);
    };
    /**
     * Add an extension to a VMSS or update an existing extension.
     *
     * Syntax:
     * ```
     * az vmss extension set --name
     *                       --publisher
     *                       --resource-group
     *                       --vmss-name
     *                       [--extension-instance-name]
     *                       [--force-update]
     *                       [--no-auto-upgrade {false, true}]
     *                       [--no-wait]
     *                       [--protected-settings]
     *                       [--provision-after-extensions]
     *                       [--settings]
     *                       [--subscription]
     *                       [--version]
     * ```
     *
     * @param {string} name Name of the extension.
     * @param {string} publisher The name of the extension publisher.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vmssName Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
     */
    az_vmss_extension.set = function (name, publisher, resourceGroup, vmssName) {
        return new az_vmss_extension_set_command_builder("az vmss extension set", 'az_vmss_extension_set_command_result', name, publisher, resourceGroup, vmssName);
    };
    /**
     * Show details on a VMSS extension.
     *
     * Syntax:
     * ```
     * az vmss extension show --name
     *                        --resource-group
     *                        --vmss-name
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} name Name of the extension.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vmssName Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
     */
    az_vmss_extension.show = function (name, resourceGroup, vmssName) {
        return new az_vmss_extension_show_command_builder("az vmss extension show", 'az_vmss_extension_show_command_result', name, resourceGroup, vmssName);
    };
    return az_vmss_extension;
}());
exports.az_vmss_extension = az_vmss_extension;
/** Manage service identities of a VM scaleset. */
var az_vmss_identity = /** @class */ (function () {
    function az_vmss_identity() {
    }
    /**
     * Enable managed service identity on a VMSS.
     *
     * Syntax:
     * ```
     * az vmss identity assign [--identities]
     *                         [--ids]
     *                         [--name]
     *                         [--resource-group]
     *                         [--role]
     *                         [--scope]
     *                         [--subscription]
     * ```
     */
    az_vmss_identity.assign = function () {
        return new az_vmss_identity_assign_command_builder("az vmss identity assign", 'az_vmss_identity_assign_command_result');
    };
    /**
     * Remove user assigned identities from a VM scaleset.
     *
     * Syntax:
     * ```
     * az vmss identity remove [--identities]
     *                         [--ids]
     *                         [--name]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    az_vmss_identity.remove = function () {
        return new az_vmss_identity_remove_command_builder("az vmss identity remove", 'az_vmss_identity_remove_command_result');
    };
    /**
     * Display VM scaleset's managed identity info.
     *
     * Syntax:
     * ```
     * az vmss identity show [--ids]
     *                       [--name]
     *                       [--query-examples]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    az_vmss_identity.show = function () {
        return new az_vmss_identity_show_command_builder("az vmss identity show", 'az_vmss_identity_show_command_result');
    };
    return az_vmss_identity;
}());
exports.az_vmss_identity = az_vmss_identity;
/** Manage network interfaces of a VMSS. */
var az_vmss_nic = /** @class */ (function () {
    function az_vmss_nic() {
    }
    /**
     * Gets all network interfaces in a virtual machine scale set.
     *
     * Syntax:
     * ```
     * az vmss nic list --resource-group
     *                  --vmss-name
     *                  [--query-examples]
     *                  [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vmssName Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
     */
    az_vmss_nic.list = function (resourceGroup, vmssName) {
        return new az_vmss_nic_list_command_builder("az vmss nic list", 'az_vmss_nic_list_command_result', resourceGroup, vmssName);
    };
    /**
     * Gets information about all network interfaces in a virtual machine in a virtual machine scale set.
     *
     * Syntax:
     * ```
     * az vmss nic list-vm-nics [--ids]
     *                          [--instance-id]
     *                          [--resource-group]
     *                          [--subscription]
     *                          [--vmss-name]
     * ```
     */
    az_vmss_nic.list_vm_nics = function () {
        return new az_vmss_nic_list_vm_nics_command_builder("az vmss nic list-vm-nics", 'az_vmss_nic_list_vm_nics_command_result');
    };
    /**
     * Get the specified network interface in a virtual machine scale set.
     *
     * Syntax:
     * ```
     * az vmss nic show [--expand]
     *                  [--ids]
     *                  [--instance-id]
     *                  [--name]
     *                  [--query-examples]
     *                  [--resource-group]
     *                  [--subscription]
     *                  [--vmss-name]
     * ```
     */
    az_vmss_nic.show = function () {
        return new az_vmss_nic_show_command_builder("az vmss nic show", 'az_vmss_nic_show_command_result');
    };
    return az_vmss_nic;
}());
exports.az_vmss_nic = az_vmss_nic;
/** Manage rolling upgrades. */
var az_vmss_rolling_upgrade = /** @class */ (function () {
    function az_vmss_rolling_upgrade() {
    }
    /**
     * Cancels the current virtual machine scale set rolling upgrade.
     *
     * Syntax:
     * ```
     * az vmss rolling-upgrade cancel [--ids]
     *                                [--name]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     */
    az_vmss_rolling_upgrade.cancel = function () {
        return new az_vmss_rolling_upgrade_cancel_command_builder("az vmss rolling-upgrade cancel", 'az_vmss_rolling_upgrade_cancel_command_result');
    };
    /**
     * Gets the status of the latest virtual machine scale set rolling upgrade.
     *
     * Syntax:
     * ```
     * az vmss rolling-upgrade get-latest [--ids]
     *                                    [--name]
     *                                    [--resource-group]
     *                                    [--subscription]
     * ```
     */
    az_vmss_rolling_upgrade.get_latest = function () {
        return new az_vmss_rolling_upgrade_get_latest_command_builder("az vmss rolling-upgrade get-latest", 'az_vmss_rolling_upgrade_get_latest_command_result');
    };
    /**
     * Starts a rolling upgrade to move all virtual machine scale set instances to the latest available Platform Image OS version.
     *
     * Syntax:
     * ```
     * az vmss rolling-upgrade start [--ids]
     *                               [--name]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     */
    az_vmss_rolling_upgrade.start = function () {
        return new az_vmss_rolling_upgrade_start_command_builder("az vmss rolling-upgrade start", 'az_vmss_rolling_upgrade_start_command_result');
    };
    return az_vmss_rolling_upgrade;
}());
exports.az_vmss_rolling_upgrade = az_vmss_rolling_upgrade;
/** Manage run commands on a Virtual Machine Scale Set. */
var az_vmss_run_command = /** @class */ (function () {
    function az_vmss_run_command() {
    }
    /**
     * Execute a specific run command on a Virtual Machine Scale Set instance.
     *
     * Syntax:
     * ```
     * az vmss run-command invoke --command-id
     *                            [--ids]
     *                            [--instance-id]
     *                            [--name]
     *                            [--parameters]
     *                            [--resource-group]
     *                            [--scripts]
     *                            [--subscription]
     * ```
     *
     * @param {string} commandId The command id.
     */
    az_vmss_run_command.invoke = function (commandId) {
        return new az_vmss_run_command_invoke_command_builder("az vmss run-command invoke", 'az_vmss_run_command_invoke_command_result', commandId);
    };
    /**
     * Lists all available run commands for a subscription in a location.
     *
     * Syntax:
     * ```
     * az vmss run-command list --location
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     */
    az_vmss_run_command.list = function (location) {
        return new az_vmss_run_command_list_command_builder("az vmss run-command list", 'az_vmss_run_command_list_command_result', location);
    };
    /**
     * Gets specific run command for a subscription in a location.
     *
     * Syntax:
     * ```
     * az vmss run-command show --command-id
     *                          --location
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} commandId The command id.
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     */
    az_vmss_run_command.show = function (commandId, location) {
        return new az_vmss_run_command_show_command_builder("az vmss run-command show", 'az_vmss_run_command_show_command_result', commandId, location);
    };
    return az_vmss_run_command;
}());
exports.az_vmss_run_command = az_vmss_run_command;
/** Manage groupings of virtual machines in an Azure Virtual Machine Scale Set (VMSS). */
var az_vmss = /** @class */ (function () {
    function az_vmss() {
    }
    /**
     * Create an Azure Virtual Machine Scale Set.
     *
     * Syntax:
     * ```
     * az vmss create --name
     *                --resource-group
     *                [--accelerated-networking {false, true}]
     *                [--admin-password]
     *                [--admin-username]
     *                [--app-gateway]
     *                [--app-gateway-capacity]
     *                [--app-gateway-sku]
     *                [--app-gateway-subnet-address-prefix]
     *                [--asgs]
     *                [--assign-identity]
     *                [--authentication-type {all, password, ssh}]
     *                [--automatic-repairs-grace-period]
     *                [--backend-pool-name]
     *                [--backend-port]
     *                [--computer-name-prefix]
     *                [--custom-data]
     *                [--data-disk-caching]
     *                [--data-disk-encryption-sets]
     *                [--data-disk-iops]
     *                [--data-disk-mbps]
     *                [--data-disk-sizes-gb]
     *                [--disable-overprovision]
     *                [--dns-servers]
     *                [--encryption-at-host {false, true}]
     *                [--ephemeral-os-disk {false, true}]
     *                [--eviction-policy {Deallocate, Delete}]
     *                [--generate-ssh-keys]
     *                [--health-probe]
     *                [--host-group]
     *                [--image]
     *                [--instance-count]
     *                [--lb]
     *                [--lb-nat-pool-name]
     *                [--lb-sku {Basic, Standard}]
     *                [--license-type {None, RHEL_BYOS, SLES_BYOS, Windows_Client, Windows_Server}]
     *                [--location]
     *                [--max-price]
     *                [--no-wait]
     *                [--nsg]
     *                [--orchestration-mode {ScaleSetVM, VM}]
     *                [--os-disk-caching {None, ReadOnly, ReadWrite}]
     *                [--os-disk-encryption-set]
     *                [--os-disk-name]
     *                [--os-disk-size-gb]
     *                [--os-type {linux, windows}]
     *                [--plan-name]
     *                [--plan-product]
     *                [--plan-promotion-code]
     *                [--plan-publisher]
     *                [--platform-fault-domain-count]
     *                [--ppg]
     *                [--priority {Low, Regular, Spot}]
     *                [--public-ip-address]
     *                [--public-ip-address-allocation {dynamic, static}]
     *                [--public-ip-address-dns-name]
     *                [--public-ip-per-vm]
     *                [--role]
     *                [--scale-in-policy {Default, NewestVM, OldestVM}]
     *                [--scope]
     *                [--secrets]
     *                [--single-placement-group {false, true}]
     *                [--specialized {false, true}]
     *                [--ssh-dest-key-path]
     *                [--ssh-key-values]
     *                [--storage-container-name]
     *                [--storage-sku]
     *                [--subnet]
     *                [--subnet-address-prefix]
     *                [--subscription]
     *                [--tags]
     *                [--terminate-notification-time]
     *                [--ultra-ssd-enabled {false, true}]
     *                [--upgrade-policy-mode {Automatic, Manual, Rolling}]
     *                [--use-unmanaged-disk]
     *                [--validate]
     *                [--vm-domain-name]
     *                [--vm-sku]
     *                [--vnet-address-prefix]
     *                [--vnet-name]
     *                [--zones {1, 2, 3}]
     * ```
     *
     * @param {string} name Name of the virtual machine scale set.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_vmss.create = function (name, resourceGroup) {
        return new az_vmss_create_command_builder("az vmss create", 'az_vmss_create_command_result', name, resourceGroup);
    };
    /**
     * Deallocate VMs within a VMSS.
     *
     * Syntax:
     * ```
     * az vmss deallocate --name
     *                    --resource-group
     *                    [--instance-ids]
     *                    [--no-wait]
     *                    [--subscription]
     * ```
     *
     * @param {string} name Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_vmss.deallocate = function (name, resourceGroup) {
        return new az_vmss_deallocate_command_builder("az vmss deallocate", 'az_vmss_deallocate_command_result', name, resourceGroup);
    };
    /**
     * Deletes a VM scale set.
     *
     * Syntax:
     * ```
     * az vmss delete [--ids]
     *                [--name]
     *                [--no-wait]
     *                [--resource-group]
     *                [--subscription]
     * ```
     */
    az_vmss["delete"] = function () {
        return new az_vmss_delete_command_builder("az vmss delete", 'az_vmss_delete_command_result');
    };
    /**
     * Delete VMs within a VMSS.
     *
     * Syntax:
     * ```
     * az vmss delete-instances --instance-ids
     *                          --name
     *                          --resource-group
     *                          [--no-wait]
     *                          [--subscription]
     * ```
     *
     * @param {string} instanceIds Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances.
     * @param {string} name Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_vmss.delete_instances = function (instanceIds, name, resourceGroup) {
        return new az_vmss_delete_instances_command_builder("az vmss delete-instances", 'az_vmss_delete_instances_command_result', instanceIds, name, resourceGroup);
    };
    /**
     * View an instance of a VMSS.
     *
     * Syntax:
     * ```
     * az vmss get-instance-view [--ids]
     *                           [--instance-id]
     *                           [--name]
     *                           [--resource-group]
     *                           [--subscription]
     * ```
     */
    az_vmss.get_instance_view = function () {
        return new az_vmss_get_instance_view_command_builder("az vmss get-instance-view", 'az_vmss_get_instance_view_command_result');
    };
    /**
     * Gets list of OS upgrades on a VM scale set instance.
     *
     * Syntax:
     * ```
     * az vmss get-os-upgrade-history [--ids]
     *                                [--name]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     */
    az_vmss.get_os_upgrade_history = function () {
        return new az_vmss_get_os_upgrade_history_command_builder("az vmss get-os-upgrade-history", 'az_vmss_get_os_upgrade_history_command_result');
    };
    /**
     * List VMSS.
     *
     * Syntax:
     * ```
     * az vmss list [--query-examples]
     *              [--resource-group]
     *              [--subscription]
     * ```
     */
    az_vmss.list = function () {
        return new az_vmss_list_command_builder("az vmss list", 'az_vmss_list_command_result');
    };
    /**
     * Get the IP address and port number used to connect to individual VM instances within a set.
     *
     * Syntax:
     * ```
     * az vmss list-instance-connection-info [--ids]
     *                                       [--name]
     *                                       [--resource-group]
     *                                       [--subscription]
     * ```
     */
    az_vmss.list_instance_connection_info = function () {
        return new az_vmss_list_instance_connection_info_command_builder("az vmss list-instance-connection-info", 'az_vmss_list_instance_connection_info_command_result');
    };
    /**
     * List public IP addresses of VM instances within a set.
     *
     * Syntax:
     * ```
     * az vmss list-instance-public-ips [--ids]
     *                                  [--name]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     */
    az_vmss.list_instance_public_ips = function () {
        return new az_vmss_list_instance_public_ips_command_builder("az vmss list-instance-public-ips", 'az_vmss_list_instance_public_ips_command_result');
    };
    /**
     * Gets a list of all virtual machines in a VM scale sets.
     *
     * Syntax:
     * ```
     * az vmss list-instances [--expand]
     *                        [--filter]
     *                        [--ids]
     *                        [--name]
     *                        [--resource-group]
     *                        [--select]
     *                        [--subscription]
     * ```
     */
    az_vmss.list_instances = function () {
        return new az_vmss_list_instances_command_builder("az vmss list-instances", 'az_vmss_list_instances_command_result');
    };
    /**
     * Gets a list of SKUs available for your VM scale set, including the minimum and maximum VM instances allowed for each SKU.
     *
     * Syntax:
     * ```
     * az vmss list-skus [--ids]
     *                   [--name]
     *                   [--resource-group]
     *                   [--subscription]
     * ```
     */
    az_vmss.list_skus = function () {
        return new az_vmss_list_skus_command_builder("az vmss list-skus", 'az_vmss_list_skus_command_result');
    };
    /**
     * Perform maintenance on one or more virtual machines in a VM scale set.
     *
     * Syntax:
     * ```
     * az vmss perform-maintenance [--ids]
     *                             [--instance-ids]
     *                             [--name]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     */
    az_vmss.perform_maintenance = function () {
        return new az_vmss_perform_maintenance_command_builder("az vmss perform-maintenance", 'az_vmss_perform_maintenance_command_result');
    };
    /**
     * Reimage VMs within a VMSS.
     *
     * Syntax:
     * ```
     * az vmss reimage [--ids]
     *                 [--instance-id]
     *                 [--name]
     *                 [--no-wait]
     *                 [--resource-group]
     *                 [--subscription]
     * ```
     */
    az_vmss.reimage = function () {
        return new az_vmss_reimage_command_builder("az vmss reimage", 'az_vmss_reimage_command_result');
    };
    /**
     * Restart VMs within a VMSS.
     *
     * Syntax:
     * ```
     * az vmss restart --name
     *                 --resource-group
     *                 [--instance-ids]
     *                 [--no-wait]
     *                 [--subscription]
     * ```
     *
     * @param {string} name Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_vmss.restart = function (name, resourceGroup) {
        return new az_vmss_restart_command_builder("az vmss restart", 'az_vmss_restart_command_result', name, resourceGroup);
    };
    /**
     * Change the number of VMs within a VMSS.
     *
     * Syntax:
     * ```
     * az vmss scale --new-capacity
     *               [--ids]
     *               [--name]
     *               [--no-wait]
     *               [--resource-group]
     *               [--subscription]
     * ```
     *
     * @param {string} newCapacity Number of VMs in the VMSS.
     */
    az_vmss.scale = function (newCapacity) {
        return new az_vmss_scale_command_builder("az vmss scale", 'az_vmss_scale_command_result', newCapacity);
    };
    /**
     * Change ServiceState property for a given service within a VMSS.
     *
     * Syntax:
     * ```
     * az vmss set-orchestration-service-state --action {Resume, Suspend}
     *                                         --service-name {AutomaticRepairs}
     *                                         [--ids]
     *                                         [--name]
     *                                         [--no-wait]
     *                                         [--resource-group]
     *                                         [--subscription]
     * ```
     *
     * @param {'Resume' | 'Suspend'} action The action to be performed.
     * @param {'AutomaticRepairs'} serviceName The name of the orchestration service.
     */
    az_vmss.set_orchestration_service_state = function (action, serviceName) {
        return new az_vmss_set_orchestration_service_state_command_builder("az vmss set-orchestration-service-state", 'az_vmss_set_orchestration_service_state_command_result', action, serviceName);
    };
    /**
     * Get details on VMs within a VMSS.
     *
     * Syntax:
     * ```
     * az vmss show --name
     *              --resource-group
     *              [--instance-id]
     *              [--query-examples]
     *              [--subscription]
     * ```
     *
     * @param {string} name Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_vmss.show = function (name, resourceGroup) {
        return new az_vmss_show_command_builder("az vmss show", 'az_vmss_show_command_result', name, resourceGroup);
    };
    /**
     * Simulate the eviction of a Spot virtual machine in a VM scale set.
     *
     * Syntax:
     * ```
     * az vmss simulate-eviction --instance-id
     *                           --name
     *                           --resource-group
     *                           [--subscription]
     * ```
     *
     * @param {string} instanceId The instance ID of the virtual machine.
     * @param {string} name Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_vmss.simulate_eviction = function (instanceId, name, resourceGroup) {
        return new az_vmss_simulate_eviction_command_builder("az vmss simulate-eviction", 'az_vmss_simulate_eviction_command_result', instanceId, name, resourceGroup);
    };
    /**
     * Start VMs within a VMSS.
     *
     * Syntax:
     * ```
     * az vmss start --name
     *               --resource-group
     *               [--instance-ids]
     *               [--no-wait]
     *               [--subscription]
     * ```
     *
     * @param {string} name Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_vmss.start = function (name, resourceGroup) {
        return new az_vmss_start_command_builder("az vmss start", 'az_vmss_start_command_result', name, resourceGroup);
    };
    /**
     * Power off (stop) VMs within a VMSS.
     *
     * Syntax:
     * ```
     * az vmss stop --name
     *              --resource-group
     *              [--instance-ids]
     *              [--no-wait]
     *              [--skip-shutdown]
     *              [--subscription]
     * ```
     *
     * @param {string} name Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_vmss.stop = function (name, resourceGroup) {
        return new az_vmss_stop_command_builder("az vmss stop", 'az_vmss_stop_command_result', name, resourceGroup);
    };
    /**
     * Update a VMSS.
     *
     * Syntax:
     * ```
     * az vmss update [--add]
     *                [--automatic-repairs-grace-period]
     *                [--enable-automatic-repairs {false, true}]
     *                [--enable-terminate-notification {false, true}]
     *                [--force-string]
     *                [--ids]
     *                [--instance-id]
     *                [--license-type {None, RHEL_BYOS, SLES_BYOS, Windows_Client, Windows_Server}]
     *                [--max-price]
     *                [--name]
     *                [--no-wait]
     *                [--ppg]
     *                [--priority {Low, Regular, Spot}]
     *                [--protect-from-scale-in {false, true}]
     *                [--protect-from-scale-set-actions {false, true}]
     *                [--remove]
     *                [--resource-group]
     *                [--scale-in-policy {Default, NewestVM, OldestVM}]
     *                [--set]
     *                [--subscription]
     *                [--terminate-notification-time]
     *                [--ultra-ssd-enabled {false, true}]
     * ```
     */
    az_vmss.update = function () {
        return new az_vmss_update_command_builder("az vmss update", 'az_vmss_update_command_result');
    };
    /**
     * Upgrade VMs within a VMSS.
     *
     * Syntax:
     * ```
     * az vmss update-instances --instance-ids
     *                          --name
     *                          --resource-group
     *                          [--no-wait]
     *                          [--subscription]
     * ```
     *
     * @param {string} instanceIds Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances.
     * @param {string} name Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_vmss.update_instances = function (instanceIds, name, resourceGroup) {
        return new az_vmss_update_instances_command_builder("az vmss update-instances", 'az_vmss_update_instances_command_result', instanceIds, name, resourceGroup);
    };
    /**
     * Place the CLI in a waiting state until a condition of a scale set is met.
     *
     * Syntax:
     * ```
     * az vmss wait [--created]
     *              [--custom]
     *              [--deleted]
     *              [--exists]
     *              [--ids]
     *              [--instance-id]
     *              [--interval]
     *              [--name]
     *              [--resource-group]
     *              [--subscription]
     *              [--timeout]
     *              [--updated]
     * ```
     */
    az_vmss.wait = function () {
        return new az_vmss_wait_command_builder("az vmss wait", 'az_vmss_wait_command_result');
    };
    return az_vmss;
}());
exports.az_vmss = az_vmss;
/**
 * Show the default config file which defines data to be collected.
 *
 * Syntax:
 * ```
 * az vmss diagnostics get-default-config [--is-windows-os]
 *                                        [--subscription]
 * ```
 */
var az_vmss_diagnostics_get_default_config_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_diagnostics_get_default_config_command_builder, _super);
    function az_vmss_diagnostics_get_default_config_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** For Windows VMs. */
    az_vmss_diagnostics_get_default_config_command_builder.prototype.isWindowsOs = function (value) {
        this.setFlag("--is-windows-os", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_diagnostics_get_default_config_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_diagnostics_get_default_config_command_builder;
}(base_1.CommandBuilder));
/**
 * Enable diagnostics on a VMSS.
 *
 * Syntax:
 * ```
 * az vmss diagnostics set --resource-group
 *                         --settings
 *                         --vmss-name
 *                         [--no-auto-upgrade {false, true}]
 *                         [--protected-settings]
 *                         [--subscription]
 *                         [--version]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} settings Json string or a file path, which defines data to be collected.
 * @param {string} vmssName Scale set name.
 */
var az_vmss_diagnostics_set_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_diagnostics_set_command_builder, _super);
    function az_vmss_diagnostics_set_command_builder(commandPath, resultDataTypeName, resourceGroup, settings, vmssName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.settings(settings);
        _this.vmssName(vmssName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_diagnostics_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Json string or a file path, which defines data to be collected. */
    az_vmss_diagnostics_set_command_builder.prototype.settings = function (value) {
        this.setFlag("--settings", value);
        return this;
    };
    /** Scale set name. */
    az_vmss_diagnostics_set_command_builder.prototype.vmssName = function (value) {
        this.setFlag("--vmss-name", value);
        return this;
    };
    /** If set, the extension service will not automatically pick or upgrade to the latest minor version, even if the extension is redeployed. */
    az_vmss_diagnostics_set_command_builder.prototype.noAutoUpgrade = function (value) {
        this.setFlag("--no-auto-upgrade", value.toString());
        return this;
    };
    /** Json string or a file path containing private configurations such as storage account keys, etc. */
    az_vmss_diagnostics_set_command_builder.prototype.protectedSettings = function (value) {
        this.setFlag("--protected-settings", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_diagnostics_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Version of the diagnostics extension. Will use the latest if not specfied. */
    az_vmss_diagnostics_set_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_vmss_diagnostics_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Attach managed data disks to a scale set or its instances.
 *
 * Syntax:
 * ```
 * az vmss disk attach [--caching {None, ReadOnly, ReadWrite}]
 *                     [--disk]
 *                     [--ids]
 *                     [--instance-id]
 *                     [--lun]
 *                     [--resource-group]
 *                     [--size-gb]
 *                     [--sku {Premium_LRS, StandardSSD_LRS, Standard_LRS, UltraSSD_LRS}]
 *                     [--subscription]
 *                     [--vmss-name]
 * ```
 */
var az_vmss_disk_attach_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_disk_attach_command_builder, _super);
    function az_vmss_disk_attach_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Disk caching policy. */
    az_vmss_disk_attach_command_builder.prototype.caching = function (value) {
        this.setFlag("--caching", value);
        return this;
    };
    /** Existing disk name or ID to attach or detach from VM instances. */
    az_vmss_disk_attach_command_builder.prototype.disk = function (value) {
        this.setFlag("--disk", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_disk_attach_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Scale set VM instance id. */
    az_vmss_disk_attach_command_builder.prototype.instanceId = function (value) {
        this.setFlag("--instance-id", value);
        return this;
    };
    /** 0-based logical unit number (LUN). Max value depends on the Virtual Machine instance size. */
    az_vmss_disk_attach_command_builder.prototype.lun = function (value) {
        this.setFlag("--lun", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_disk_attach_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Size in GB. Max size: 4095 GB (certain preview disks can be larger). */
    az_vmss_disk_attach_command_builder.prototype.sizeGb = function (value) {
        this.setFlag("--size-gb", value);
        return this;
    };
    /** Underlying storage SKU. */
    az_vmss_disk_attach_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_disk_attach_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_disk_attach_command_builder.prototype.vmssName = function (value) {
        this.setFlag("--vmss-name", value);
        return this;
    };
    return az_vmss_disk_attach_command_builder;
}(base_1.CommandBuilder));
/**
 * Detach managed data disks from a scale set or its instances.
 *
 * Syntax:
 * ```
 * az vmss disk detach --lun
 *                     [--ids]
 *                     [--instance-id]
 *                     [--resource-group]
 *                     [--subscription]
 *                     [--vmss-name]
 * ```
 *
 * @param {string} lun 0-based logical unit number (LUN). Max value depends on the Virtual Machine instance size.
 */
var az_vmss_disk_detach_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_disk_detach_command_builder, _super);
    function az_vmss_disk_detach_command_builder(commandPath, resultDataTypeName, lun) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.lun(lun);
        return _this;
    }
    /** 0-based logical unit number (LUN). Max value depends on the Virtual Machine instance size. */
    az_vmss_disk_detach_command_builder.prototype.lun = function (value) {
        this.setFlag("--lun", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_disk_detach_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Scale set VM instance id. */
    az_vmss_disk_detach_command_builder.prototype.instanceId = function (value) {
        this.setFlag("--instance-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_disk_detach_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_disk_detach_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_disk_detach_command_builder.prototype.vmssName = function (value) {
        this.setFlag("--vmss-name", value);
        return this;
    };
    return az_vmss_disk_detach_command_builder;
}(base_1.CommandBuilder));
/**
 * Disable the encryption on a VMSS with managed disks.
 *
 * Syntax:
 * ```
 * az vmss encryption disable [--force]
 *                            [--ids]
 *                            [--name]
 *                            [--resource-group]
 *                            [--subscription]
 *                            [--volume-type {ALL, DATA, OS}]
 * ```
 */
var az_vmss_encryption_disable_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_encryption_disable_command_builder, _super);
    function az_vmss_encryption_disable_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Continue by ignoring client side validation errors. */
    az_vmss_encryption_disable_command_builder.prototype.force = function (value) {
        this.setFlag("--force", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_encryption_disable_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_encryption_disable_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_encryption_disable_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_encryption_disable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Type of volume that the encryption operation is performed on. */
    az_vmss_encryption_disable_command_builder.prototype.volumeType = function (value) {
        this.setFlag("--volume-type", value);
        return this;
    };
    return az_vmss_encryption_disable_command_builder;
}(base_1.CommandBuilder));
/**
 * Encrypt a VMSS with managed disks.
 *
 * Syntax:
 * ```
 * az vmss encryption enable --disk-encryption-keyvault
 *                           [--force]
 *                           [--ids]
 *                           [--key-encryption-algorithm]
 *                           [--key-encryption-key]
 *                           [--key-encryption-keyvault]
 *                           [--name]
 *                           [--resource-group]
 *                           [--subscription]
 *                           [--volume-type {ALL, DATA, OS}]
 * ```
 *
 * @param {string} diskEncryptionKeyvault Name or ID of the key vault where the generated encryption key will be placed.
 */
var az_vmss_encryption_enable_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_encryption_enable_command_builder, _super);
    function az_vmss_encryption_enable_command_builder(commandPath, resultDataTypeName, diskEncryptionKeyvault) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.diskEncryptionKeyvault(diskEncryptionKeyvault);
        return _this;
    }
    /** Name or ID of the key vault where the generated encryption key will be placed. */
    az_vmss_encryption_enable_command_builder.prototype.diskEncryptionKeyvault = function (value) {
        this.setFlag("--disk-encryption-keyvault", value);
        return this;
    };
    /** Continue by ignoring client side validation errors. */
    az_vmss_encryption_enable_command_builder.prototype.force = function (value) {
        this.setFlag("--force", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_encryption_enable_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** */
    az_vmss_encryption_enable_command_builder.prototype.keyEncryptionAlgorithm = function (value) {
        this.setFlag("--key-encryption-algorithm", value);
        return this;
    };
    /** Key vault key name or URL used to encrypt the disk encryption key. */
    az_vmss_encryption_enable_command_builder.prototype.keyEncryptionKey = function (value) {
        this.setFlag("--key-encryption-key", value);
        return this;
    };
    /** Name or ID of the key vault containing the key encryption key used to encrypt the disk encryption key. If missing, CLI will use `--disk-encryption-keyvault`. */
    az_vmss_encryption_enable_command_builder.prototype.keyEncryptionKeyvault = function (value) {
        this.setFlag("--key-encryption-keyvault", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_encryption_enable_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_encryption_enable_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_encryption_enable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Type of volume that the encryption operation is performed on. */
    az_vmss_encryption_enable_command_builder.prototype.volumeType = function (value) {
        this.setFlag("--volume-type", value);
        return this;
    };
    return az_vmss_encryption_enable_command_builder;
}(base_1.CommandBuilder));
/**
 * Show encryption status.
 *
 * Syntax:
 * ```
 * az vmss encryption show [--ids]
 *                         [--name]
 *                         [--query-examples]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
var az_vmss_encryption_show_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_encryption_show_command_builder, _super);
    function az_vmss_encryption_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_encryption_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_encryption_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vmss_encryption_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_encryption_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_encryption_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_encryption_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List the information on available extensions.
 *
 * Syntax:
 * ```
 * az vmss extension image list [--latest]
 *                              [--location]
 *                              [--name]
 *                              [--publisher]
 *                              [--query-examples]
 *                              [--subscription]
 *                              [--version]
 * ```
 */
var az_vmss_extension_image_list_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_extension_image_list_command_builder, _super);
    function az_vmss_extension_image_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Show the latest version only. */
    az_vmss_extension_image_list_command_builder.prototype.latest = function (value) {
        this.setFlag("--latest", value);
        return this;
    };
    /** Image location. */
    az_vmss_extension_image_list_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Image name. */
    az_vmss_extension_image_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Image publisher name. */
    az_vmss_extension_image_list_command_builder.prototype.publisher = function (value) {
        this.setFlag("--publisher", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vmss_extension_image_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_extension_image_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Extension version. */
    az_vmss_extension_image_list_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_vmss_extension_image_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a list of virtual machine extension image types.
 *
 * Syntax:
 * ```
 * az vmss extension image list-names --location
 *                                    --publisher
 *                                    [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} publisher Image publisher name.
 */
var az_vmss_extension_image_list_names_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_extension_image_list_names_command_builder, _super);
    function az_vmss_extension_image_list_names_command_builder(commandPath, resultDataTypeName, location, publisher) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.publisher(publisher);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_vmss_extension_image_list_names_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Image publisher name. */
    az_vmss_extension_image_list_names_command_builder.prototype.publisher = function (value) {
        this.setFlag("--publisher", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_extension_image_list_names_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_extension_image_list_names_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a list of virtual machine extension image versions.
 *
 * Syntax:
 * ```
 * az vmss extension image list-versions --location
 *                                       --name
 *                                       --publisher
 *                                       [--filter]
 *                                       [--orderby]
 *                                       [--subscription]
 *                                       [--top]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name Name of the extension.
 * @param {string} publisher Image publisher name.
 */
var az_vmss_extension_image_list_versions_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_extension_image_list_versions_command_builder, _super);
    function az_vmss_extension_image_list_versions_command_builder(commandPath, resultDataTypeName, location, name, publisher) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.name(name);
        _this.publisher(publisher);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_vmss_extension_image_list_versions_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the extension. */
    az_vmss_extension_image_list_versions_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Image publisher name. */
    az_vmss_extension_image_list_versions_command_builder.prototype.publisher = function (value) {
        this.setFlag("--publisher", value);
        return this;
    };
    /** The filter to apply on the operation. */
    az_vmss_extension_image_list_versions_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** The $orderby odata query option. */
    az_vmss_extension_image_list_versions_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_extension_image_list_versions_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The $top odata query option. */
    az_vmss_extension_image_list_versions_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_vmss_extension_image_list_versions_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a virtual machine extension image.
 *
 * Syntax:
 * ```
 * az vmss extension image show --location
 *                              --name
 *                              --publisher
 *                              --version
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name Name of the extension.
 * @param {string} publisher Image publisher name.
 * @param {string} version Extension version.
 */
var az_vmss_extension_image_show_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_extension_image_show_command_builder, _super);
    function az_vmss_extension_image_show_command_builder(commandPath, resultDataTypeName, location, name, publisher, version) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.name(name);
        _this.publisher(publisher);
        _this.version(version);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_vmss_extension_image_show_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the extension. */
    az_vmss_extension_image_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Image publisher name. */
    az_vmss_extension_image_show_command_builder.prototype.publisher = function (value) {
        this.setFlag("--publisher", value);
        return this;
    };
    /** Extension version. */
    az_vmss_extension_image_show_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vmss_extension_image_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_extension_image_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_extension_image_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an extension from a VMSS.
 *
 * Syntax:
 * ```
 * az vmss extension delete --name
 *                          --resource-group
 *                          --vmss-name
 *                          [--no-wait]
 *                          [--subscription]
 * ```
 *
 * @param {string} name Name of the extension.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vmssName Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
 */
var az_vmss_extension_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_extension_delete_command_builder, _super);
    function az_vmss_extension_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup, vmssName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.vmssName(vmssName);
        return _this;
    }
    /** Name of the extension. */
    az_vmss_extension_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_extension_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_extension_delete_command_builder.prototype.vmssName = function (value) {
        this.setFlag("--vmss-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vmss_extension_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_extension_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_extension_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List extensions associated with a VMSS.
 *
 * Syntax:
 * ```
 * az vmss extension list --resource-group
 *                        --vmss-name
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vmssName Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
 */
var az_vmss_extension_list_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_extension_list_command_builder, _super);
    function az_vmss_extension_list_command_builder(commandPath, resultDataTypeName, resourceGroup, vmssName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.vmssName(vmssName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_extension_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_extension_list_command_builder.prototype.vmssName = function (value) {
        this.setFlag("--vmss-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vmss_extension_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_extension_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_extension_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Add an extension to a VMSS or update an existing extension.
 *
 * Syntax:
 * ```
 * az vmss extension set --name
 *                       --publisher
 *                       --resource-group
 *                       --vmss-name
 *                       [--extension-instance-name]
 *                       [--force-update]
 *                       [--no-auto-upgrade {false, true}]
 *                       [--no-wait]
 *                       [--protected-settings]
 *                       [--provision-after-extensions]
 *                       [--settings]
 *                       [--subscription]
 *                       [--version]
 * ```
 *
 * @param {string} name Name of the extension.
 * @param {string} publisher The name of the extension publisher.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vmssName Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
 */
var az_vmss_extension_set_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_extension_set_command_builder, _super);
    function az_vmss_extension_set_command_builder(commandPath, resultDataTypeName, name, publisher, resourceGroup, vmssName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.publisher(publisher);
        _this.resourceGroup(resourceGroup);
        _this.vmssName(vmssName);
        return _this;
    }
    /** Name of the extension. */
    az_vmss_extension_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the extension publisher. */
    az_vmss_extension_set_command_builder.prototype.publisher = function (value) {
        this.setFlag("--publisher", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_extension_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_extension_set_command_builder.prototype.vmssName = function (value) {
        this.setFlag("--vmss-name", value);
        return this;
    };
    /** Name of extension instance, which can be customized. Default: name of the extension. */
    az_vmss_extension_set_command_builder.prototype.extensionInstanceName = function (value) {
        this.setFlag("--extension-instance-name", value);
        return this;
    };
    /** Force to update even if the extension configuration has not changed. */
    az_vmss_extension_set_command_builder.prototype.forceUpdate = function (value) {
        this.setFlag("--force-update", value);
        return this;
    };
    /** If set, the extension service will not automatically pick or upgrade to the latest minor version, even if the extension is redeployed. */
    az_vmss_extension_set_command_builder.prototype.noAutoUpgrade = function (value) {
        this.setFlag("--no-auto-upgrade", value.toString());
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vmss_extension_set_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Protected settings in JSON format for sensitive information like credentials. A JSON file path is also accepted. */
    az_vmss_extension_set_command_builder.prototype.protectedSettings = function (value) {
        this.setFlag("--protected-settings", value);
        return this;
    };
    /** Space-separated list of extension names after which this extension should be provisioned. These extensions must already be set on the vm. */
    az_vmss_extension_set_command_builder.prototype.provisionAfterExtensions = function (value) {
        this.setFlag("--provision-after-extensions", value);
        return this;
    };
    /** Extension settings in JSON format. A JSON file path is also accepted. */
    az_vmss_extension_set_command_builder.prototype.settings = function (value) {
        this.setFlag("--settings", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_extension_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The version of the extension. To pin extension version to this value, please specify --no-auto-upgrade. */
    az_vmss_extension_set_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_vmss_extension_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Show details on a VMSS extension.
 *
 * Syntax:
 * ```
 * az vmss extension show --name
 *                        --resource-group
 *                        --vmss-name
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} name Name of the extension.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vmssName Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
 */
var az_vmss_extension_show_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_extension_show_command_builder, _super);
    function az_vmss_extension_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup, vmssName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.vmssName(vmssName);
        return _this;
    }
    /** Name of the extension. */
    az_vmss_extension_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_extension_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_extension_show_command_builder.prototype.vmssName = function (value) {
        this.setFlag("--vmss-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vmss_extension_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_extension_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_extension_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Enable managed service identity on a VMSS.
 *
 * Syntax:
 * ```
 * az vmss identity assign [--identities]
 *                         [--ids]
 *                         [--name]
 *                         [--resource-group]
 *                         [--role]
 *                         [--scope]
 *                         [--subscription]
 * ```
 */
var az_vmss_identity_assign_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_identity_assign_command_builder, _super);
    function az_vmss_identity_assign_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'. */
    az_vmss_identity_assign_command_builder.prototype.identities = function (value) {
        this.setFlag("--identities", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_identity_assign_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_identity_assign_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_identity_assign_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Role name or id the system assigned identity will have. */
    az_vmss_identity_assign_command_builder.prototype.role = function (value) {
        this.setFlag("--role", value);
        return this;
    };
    /** Scope that the system assigned identity can access. */
    az_vmss_identity_assign_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_identity_assign_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_identity_assign_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove user assigned identities from a VM scaleset.
 *
 * Syntax:
 * ```
 * az vmss identity remove [--identities]
 *                         [--ids]
 *                         [--name]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
var az_vmss_identity_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_identity_remove_command_builder, _super);
    function az_vmss_identity_remove_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Space-separated identities to remove. Use '[system]' to refer to the system assigned identity. Default: '[system]'. */
    az_vmss_identity_remove_command_builder.prototype.identities = function (value) {
        this.setFlag("--identities", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_identity_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_identity_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_identity_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_identity_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_identity_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Display VM scaleset's managed identity info.
 *
 * Syntax:
 * ```
 * az vmss identity show [--ids]
 *                       [--name]
 *                       [--query-examples]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
var az_vmss_identity_show_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_identity_show_command_builder, _super);
    function az_vmss_identity_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_identity_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vmss_identity_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vmss_identity_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_identity_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_identity_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_identity_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets all network interfaces in a virtual machine scale set.
 *
 * Syntax:
 * ```
 * az vmss nic list --resource-group
 *                  --vmss-name
 *                  [--query-examples]
 *                  [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vmssName Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
 */
var az_vmss_nic_list_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_nic_list_command_builder, _super);
    function az_vmss_nic_list_command_builder(commandPath, resultDataTypeName, resourceGroup, vmssName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.vmssName(vmssName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_nic_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_nic_list_command_builder.prototype.vmssName = function (value) {
        this.setFlag("--vmss-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vmss_nic_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_nic_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_nic_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets information about all network interfaces in a virtual machine in a virtual machine scale set.
 *
 * Syntax:
 * ```
 * az vmss nic list-vm-nics [--ids]
 *                          [--instance-id]
 *                          [--resource-group]
 *                          [--subscription]
 *                          [--vmss-name]
 * ```
 */
var az_vmss_nic_list_vm_nics_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_nic_list_vm_nics_command_builder, _super);
    function az_vmss_nic_list_vm_nics_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_nic_list_vm_nics_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The virtual machine index. */
    az_vmss_nic_list_vm_nics_command_builder.prototype.instanceId = function (value) {
        this.setFlag("--instance-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_nic_list_vm_nics_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_nic_list_vm_nics_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Scale set name. */
    az_vmss_nic_list_vm_nics_command_builder.prototype.vmssName = function (value) {
        this.setFlag("--vmss-name", value);
        return this;
    };
    return az_vmss_nic_list_vm_nics_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the specified network interface in a virtual machine scale set.
 *
 * Syntax:
 * ```
 * az vmss nic show [--expand]
 *                  [--ids]
 *                  [--instance-id]
 *                  [--name]
 *                  [--query-examples]
 *                  [--resource-group]
 *                  [--subscription]
 *                  [--vmss-name]
 * ```
 */
var az_vmss_nic_show_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_nic_show_command_builder, _super);
    function az_vmss_nic_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Expands referenced resources. */
    az_vmss_nic_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_nic_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The virtual machine index. */
    az_vmss_nic_show_command_builder.prototype.instanceId = function (value) {
        this.setFlag("--instance-id", value);
        return this;
    };
    /** The network interface (NIC). */
    az_vmss_nic_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vmss_nic_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_nic_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_nic_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Scale set name. */
    az_vmss_nic_show_command_builder.prototype.vmssName = function (value) {
        this.setFlag("--vmss-name", value);
        return this;
    };
    return az_vmss_nic_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Cancels the current virtual machine scale set rolling upgrade.
 *
 * Syntax:
 * ```
 * az vmss rolling-upgrade cancel [--ids]
 *                                [--name]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 */
var az_vmss_rolling_upgrade_cancel_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_rolling_upgrade_cancel_command_builder, _super);
    function az_vmss_rolling_upgrade_cancel_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_rolling_upgrade_cancel_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_rolling_upgrade_cancel_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_rolling_upgrade_cancel_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_rolling_upgrade_cancel_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_rolling_upgrade_cancel_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets the status of the latest virtual machine scale set rolling upgrade.
 *
 * Syntax:
 * ```
 * az vmss rolling-upgrade get-latest [--ids]
 *                                    [--name]
 *                                    [--resource-group]
 *                                    [--subscription]
 * ```
 */
var az_vmss_rolling_upgrade_get_latest_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_rolling_upgrade_get_latest_command_builder, _super);
    function az_vmss_rolling_upgrade_get_latest_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_rolling_upgrade_get_latest_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_rolling_upgrade_get_latest_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_rolling_upgrade_get_latest_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_rolling_upgrade_get_latest_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_rolling_upgrade_get_latest_command_builder;
}(base_1.CommandBuilder));
/**
 * Starts a rolling upgrade to move all virtual machine scale set instances to the latest available Platform Image OS version.
 *
 * Syntax:
 * ```
 * az vmss rolling-upgrade start [--ids]
 *                               [--name]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 */
var az_vmss_rolling_upgrade_start_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_rolling_upgrade_start_command_builder, _super);
    function az_vmss_rolling_upgrade_start_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_rolling_upgrade_start_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_rolling_upgrade_start_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_rolling_upgrade_start_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_rolling_upgrade_start_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_rolling_upgrade_start_command_builder;
}(base_1.CommandBuilder));
/**
 * Execute a specific run command on a Virtual Machine Scale Set instance.
 *
 * Syntax:
 * ```
 * az vmss run-command invoke --command-id
 *                            [--ids]
 *                            [--instance-id]
 *                            [--name]
 *                            [--parameters]
 *                            [--resource-group]
 *                            [--scripts]
 *                            [--subscription]
 * ```
 *
 * @param {string} commandId The command id.
 */
var az_vmss_run_command_invoke_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_run_command_invoke_command_builder, _super);
    function az_vmss_run_command_invoke_command_builder(commandPath, resultDataTypeName, commandId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.commandId(commandId);
        return _this;
    }
    /** The command id. */
    az_vmss_run_command_invoke_command_builder.prototype.commandId = function (value) {
        this.setFlag("--command-id", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_run_command_invoke_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Scale set VM instance id. */
    az_vmss_run_command_invoke_command_builder.prototype.instanceId = function (value) {
        this.setFlag("--instance-id", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_run_command_invoke_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Space-separated parameters in the format of '[name=]value'. */
    az_vmss_run_command_invoke_command_builder.prototype.parameters = function (value) {
        this.setFlag("--parameters", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_run_command_invoke_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated script lines. Use @{file} to load script from a file. */
    az_vmss_run_command_invoke_command_builder.prototype.scripts = function (value) {
        this.setFlag("--scripts", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_run_command_invoke_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_run_command_invoke_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists all available run commands for a subscription in a location.
 *
 * Syntax:
 * ```
 * az vmss run-command list --location
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 */
var az_vmss_run_command_list_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_run_command_list_command_builder, _super);
    function az_vmss_run_command_list_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_vmss_run_command_list_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vmss_run_command_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_run_command_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_run_command_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets specific run command for a subscription in a location.
 *
 * Syntax:
 * ```
 * az vmss run-command show --command-id
 *                          --location
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} commandId The command id.
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 */
var az_vmss_run_command_show_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_run_command_show_command_builder, _super);
    function az_vmss_run_command_show_command_builder(commandPath, resultDataTypeName, commandId, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.commandId(commandId);
        _this.location(location);
        return _this;
    }
    /** The command id. */
    az_vmss_run_command_show_command_builder.prototype.commandId = function (value) {
        this.setFlag("--command-id", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_vmss_run_command_show_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vmss_run_command_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_run_command_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_run_command_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create an Azure Virtual Machine Scale Set.
 *
 * Syntax:
 * ```
 * az vmss create --name
 *                --resource-group
 *                [--accelerated-networking {false, true}]
 *                [--admin-password]
 *                [--admin-username]
 *                [--app-gateway]
 *                [--app-gateway-capacity]
 *                [--app-gateway-sku]
 *                [--app-gateway-subnet-address-prefix]
 *                [--asgs]
 *                [--assign-identity]
 *                [--authentication-type {all, password, ssh}]
 *                [--automatic-repairs-grace-period]
 *                [--backend-pool-name]
 *                [--backend-port]
 *                [--computer-name-prefix]
 *                [--custom-data]
 *                [--data-disk-caching]
 *                [--data-disk-encryption-sets]
 *                [--data-disk-iops]
 *                [--data-disk-mbps]
 *                [--data-disk-sizes-gb]
 *                [--disable-overprovision]
 *                [--dns-servers]
 *                [--encryption-at-host {false, true}]
 *                [--ephemeral-os-disk {false, true}]
 *                [--eviction-policy {Deallocate, Delete}]
 *                [--generate-ssh-keys]
 *                [--health-probe]
 *                [--host-group]
 *                [--image]
 *                [--instance-count]
 *                [--lb]
 *                [--lb-nat-pool-name]
 *                [--lb-sku {Basic, Standard}]
 *                [--license-type {None, RHEL_BYOS, SLES_BYOS, Windows_Client, Windows_Server}]
 *                [--location]
 *                [--max-price]
 *                [--no-wait]
 *                [--nsg]
 *                [--orchestration-mode {ScaleSetVM, VM}]
 *                [--os-disk-caching {None, ReadOnly, ReadWrite}]
 *                [--os-disk-encryption-set]
 *                [--os-disk-name]
 *                [--os-disk-size-gb]
 *                [--os-type {linux, windows}]
 *                [--plan-name]
 *                [--plan-product]
 *                [--plan-promotion-code]
 *                [--plan-publisher]
 *                [--platform-fault-domain-count]
 *                [--ppg]
 *                [--priority {Low, Regular, Spot}]
 *                [--public-ip-address]
 *                [--public-ip-address-allocation {dynamic, static}]
 *                [--public-ip-address-dns-name]
 *                [--public-ip-per-vm]
 *                [--role]
 *                [--scale-in-policy {Default, NewestVM, OldestVM}]
 *                [--scope]
 *                [--secrets]
 *                [--single-placement-group {false, true}]
 *                [--specialized {false, true}]
 *                [--ssh-dest-key-path]
 *                [--ssh-key-values]
 *                [--storage-container-name]
 *                [--storage-sku]
 *                [--subnet]
 *                [--subnet-address-prefix]
 *                [--subscription]
 *                [--tags]
 *                [--terminate-notification-time]
 *                [--ultra-ssd-enabled {false, true}]
 *                [--upgrade-policy-mode {Automatic, Manual, Rolling}]
 *                [--use-unmanaged-disk]
 *                [--validate]
 *                [--vm-domain-name]
 *                [--vm-sku]
 *                [--vnet-address-prefix]
 *                [--vnet-name]
 *                [--zones {1, 2, 3}]
 * ```
 *
 * @param {string} name Name of the virtual machine scale set.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_vmss_create_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_create_command_builder, _super);
    function az_vmss_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the virtual machine scale set. */
    az_vmss_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Enable accelerated networking. Unless specified, CLI will enable it based on machine image and size. */
    az_vmss_create_command_builder.prototype.acceleratedNetworking = function (value) {
        this.setFlag("--accelerated-networking", value.toString());
        return this;
    };
    /** Password for the VM if authentication type is 'Password'. */
    az_vmss_create_command_builder.prototype.adminPassword = function (value) {
        this.setFlag("--admin-password", value);
        return this;
    };
    /** Username for the VM. Default value is current username of OS. If the default value is system reserved, then default value will be set to azureuser. Please refer to <a href="https://docs.microsoft.com/en-us/rest/api/compute/virtualmachines/createorupdate#osprofile">https://docs.microsoft.com/en-us/rest/api/compute/virtualmachines/createorupdate#osprofile</a> to get a full list of reserved values. */
    az_vmss_create_command_builder.prototype.adminUsername = function (value) {
        this.setFlag("--admin-username", value);
        return this;
    };
    /** Name to use when creating a new application gateway (default) or referencing an existing one. Can also reference an existing application gateway by ID or specify "" for none. */
    az_vmss_create_command_builder.prototype.appGateway = function (value) {
        this.setFlag("--app-gateway", value);
        return this;
    };
    /** The number of instances to use when creating a new application gateway. */
    az_vmss_create_command_builder.prototype.appGatewayCapacity = function (value) {
        this.setFlag("--app-gateway-capacity", value);
        return this;
    };
    /** SKU when creating a new application gateway. */
    az_vmss_create_command_builder.prototype.appGatewaySku = function (value) {
        this.setFlag("--app-gateway-sku", value);
        return this;
    };
    /** The subnet IP address prefix to use when creating a new application gateway in CIDR format. */
    az_vmss_create_command_builder.prototype.appGatewaySubnetAddressPrefix = function (value) {
        this.setFlag("--app-gateway-subnet-address-prefix", value);
        return this;
    };
    /** Space-separated list of existing application security groups to associate with the VM. */
    az_vmss_create_command_builder.prototype.asgs = function (value) {
        this.setFlag("--asgs", value);
        return this;
    };
    /** Accept system or user assigned identities separated by spaces. Use '[system]' to refer system assigned identity, or a resource id to refer user assigned identity. Check out help for more examples. */
    az_vmss_create_command_builder.prototype.assignIdentity = function (value) {
        this.setFlag("--assign-identity", value);
        return this;
    };
    /** Type of authentication to use with the VM. Defaults to password for Windows and SSH public key for Linux. "all" enables both ssh and password authentication. */
    az_vmss_create_command_builder.prototype.authenticationType = function (value) {
        this.setFlag("--authentication-type", value);
        return this;
    };
    /** The amount of time (in minutes, between 30 and 90) for which automatic repairs are suspended due to a state change on VM. */
    az_vmss_create_command_builder.prototype.automaticRepairsGracePeriod = function (value) {
        this.setFlag("--automatic-repairs-grace-period", value);
        return this;
    };
    /** Name to use for the backend pool when creating a new load balancer or application gateway. */
    az_vmss_create_command_builder.prototype.backendPoolName = function (value) {
        this.setFlag("--backend-pool-name", value);
        return this;
    };
    /** When creating a new load balancer, backend port to open with NAT rules (Defaults to 22 on Linux and 3389 on Windows). When creating an application gateway, the backend port to use for the backend HTTP settings. */
    az_vmss_create_command_builder.prototype.backendPort = function (value) {
        this.setFlag("--backend-port", value);
        return this;
    };
    /** Computer name prefix for all of the virtual machines in the scale set. Computer name prefixes must be 1 to 15 characters long. */
    az_vmss_create_command_builder.prototype.computerNamePrefix = function (value) {
        this.setFlag("--computer-name-prefix", value);
        return this;
    };
    /** Custom init script file or text (cloud-init, cloud-config, etc..). */
    az_vmss_create_command_builder.prototype.customData = function (value) {
        this.setFlag("--custom-data", value);
        return this;
    };
    /** Storage caching type for data disk(s), including 'None', 'ReadOnly', 'ReadWrite', etc. Use a singular value to apply on all disks, or use `<lun>=<vaule1> <lun>=<value2>` to configure individual disk. */
    az_vmss_create_command_builder.prototype.dataDiskCaching = function (value) {
        this.setFlag("--data-disk-caching", value);
        return this;
    };
    /** Names or IDs (space delimited) of disk encryption sets for data disks. */
    az_vmss_create_command_builder.prototype.dataDiskEncryptionSets = function (value) {
        this.setFlag("--data-disk-encryption-sets", value);
        return this;
    };
    /** Specify the Read-Write IOPS (space delimited) for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB. */
    az_vmss_create_command_builder.prototype.dataDiskIops = function (value) {
        this.setFlag("--data-disk-iops", value);
        return this;
    };
    /** Specify the bandwidth in MB per second (space delimited) for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB. */
    az_vmss_create_command_builder.prototype.dataDiskMbps = function (value) {
        this.setFlag("--data-disk-mbps", value);
        return this;
    };
    /** Space-separated empty managed data disk sizes in GB to create. */
    az_vmss_create_command_builder.prototype.dataDiskSizesGb = function (value) {
        this.setFlag("--data-disk-sizes-gb", value);
        return this;
    };
    /** Overprovision option (see <a href="https://azure.microsoft.com/documentation/articles/virtual-machine-scale-sets-overview/">https://azure.microsoft.com/documentation/articles/virtual-machine-scale-sets-overview/</a> for details). */
    az_vmss_create_command_builder.prototype.disableOverprovision = function (value) {
        this.setFlag("--disable-overprovision", value);
        return this;
    };
    /** Space-separated IP addresses of DNS servers, e.g. 10.0.0.5 10.0.0.6. */
    az_vmss_create_command_builder.prototype.dnsServers = function (value) {
        this.setFlag("--dns-servers", value);
        return this;
    };
    /** Enable Host Encryption for the VM or VMSS. This will enable the encryption for all the disks including Resource/Temp disk at host itself. */
    az_vmss_create_command_builder.prototype.encryptionAtHost = function (value) {
        this.setFlag("--encryption-at-host", value.toString());
        return this;
    };
    /** Allows you to create an OS disk directly on the host node, providing local disk performance and faster VM/VMSS reimage time. */
    az_vmss_create_command_builder.prototype.ephemeralOsDisk = function (value) {
        this.setFlag("--ephemeral-os-disk", value.toString());
        return this;
    };
    /** The eviction policy for virtual machines in a Spot priority scale set. Default eviction policy is Deallocate for a Spot priority scale set. */
    az_vmss_create_command_builder.prototype.evictionPolicy = function (value) {
        this.setFlag("--eviction-policy", value);
        return this;
    };
    /** Generate SSH public and private key files if missing. The keys will be stored in the ~/.ssh directory. */
    az_vmss_create_command_builder.prototype.generateSshKeys = function (value) {
        this.setFlag("--generate-ssh-keys", value);
        return this;
    };
    /** Probe name from the existing load balancer, mainly used for rolling upgrade or automatic repairs. */
    az_vmss_create_command_builder.prototype.healthProbe = function (value) {
        this.setFlag("--health-probe", value);
        return this;
    };
    /** Name or ID of dedicated host group that the virtual machine scale set resides in. */
    az_vmss_create_command_builder.prototype.hostGroup = function (value) {
        this.setFlag("--host-group", value);
        return this;
    };
    /** The name of the operating system image as a URN alias, URN, custom image name or ID, or VHD blob URI. Valid URN format: "Publisher:Offer:Sku:Version". */
    az_vmss_create_command_builder.prototype.image = function (value) {
        this.setFlag("--image", value);
        return this;
    };
    /** Number of VMs in the scale set. */
    az_vmss_create_command_builder.prototype.instanceCount = function (value) {
        this.setFlag("--instance-count", value);
        return this;
    };
    /** Name to use when creating a new load balancer (default) or referencing an existing one. Can also reference an existing load balancer by ID or specify "" for none. */
    az_vmss_create_command_builder.prototype.loadBalancer = function (value) {
        this.setFlag("--load-balancer", value);
        return this;
    };
    /** Name to use for the NAT pool when creating a new load balancer. */
    az_vmss_create_command_builder.prototype.lbNatPoolName = function (value) {
        this.setFlag("--lb-nat-pool-name", value);
        return this;
    };
    /** Sku of the Load Balancer to create. Default to 'Standard' when single placement group is turned off; otherwise, default to 'Basic'. */
    az_vmss_create_command_builder.prototype.lbSku = function (value) {
        this.setFlag("--lb-sku", value);
        return this;
    };
    /** Specifies that the Windows image or disk was licensed on-premises. To enable Azure Hybrid Benefit for Windows Server, use 'Windows_Server'. To enable Multitenant Hosting Rights for Windows 10, use 'Windows_Client'. For more information see the Azure Windows VM online docs. */
    az_vmss_create_command_builder.prototype.licenseType = function (value) {
        this.setFlag("--license-type", value);
        return this;
    };
    /** Location in which to create VM and related resources. If default location is not configured, will default to the resource group's location. */
    az_vmss_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The maximum price (in US Dollars) you are willing to pay for a Spot VM/VMSS. -1 indicates that the Spot VM/VMSS should not be evicted for price reasons. */
    az_vmss_create_command_builder.prototype.maxPrice = function (value) {
        this.setFlag("--max-price", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vmss_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of an existing Network Security Group. */
    az_vmss_create_command_builder.prototype.nsg = function (value) {
        this.setFlag("--nsg", value);
        return this;
    };
    /** Choose how virtual machines are managed by the scale set. In VM mode, you manually create and add a virtual machine of any configuration to the scale set. In ScaleSetVM mode, you define a virtual machine model and Azure will generate identical instances based on that model. */
    az_vmss_create_command_builder.prototype.orchestrationMode = function (value) {
        this.setFlag("--orchestration-mode", value);
        return this;
    };
    /** Storage caching type for the VM OS disk. Default: ReadWrite. */
    az_vmss_create_command_builder.prototype.osDiskCaching = function (value) {
        this.setFlag("--os-disk-caching", value);
        return this;
    };
    /** Name or ID of disk encryption set for OS disk. */
    az_vmss_create_command_builder.prototype.osDiskEncryptionSet = function (value) {
        this.setFlag("--os-disk-encryption-set", value);
        return this;
    };
    /** The name of the new VM OS disk. */
    az_vmss_create_command_builder.prototype.osDiskName = function (value) {
        this.setFlag("--os-disk-name", value);
        return this;
    };
    /** OS disk size in GB to create. */
    az_vmss_create_command_builder.prototype.osDiskSizeGb = function (value) {
        this.setFlag("--os-disk-size-gb", value);
        return this;
    };
    /** Type of OS installed on a custom VHD. Do not use when specifying an URN or URN alias. */
    az_vmss_create_command_builder.prototype.osType = function (value) {
        this.setFlag("--os-type", value);
        return this;
    };
    /** Plan name. */
    az_vmss_create_command_builder.prototype.planName = function (value) {
        this.setFlag("--plan-name", value);
        return this;
    };
    /** Plan product. */
    az_vmss_create_command_builder.prototype.planProduct = function (value) {
        this.setFlag("--plan-product", value);
        return this;
    };
    /** Plan promotion code. */
    az_vmss_create_command_builder.prototype.planPromotionCode = function (value) {
        this.setFlag("--plan-promotion-code", value);
        return this;
    };
    /** Plan publisher. */
    az_vmss_create_command_builder.prototype.planPublisher = function (value) {
        this.setFlag("--plan-publisher", value);
        return this;
    };
    /** Fault Domain count for each placement group in the availability zone. */
    az_vmss_create_command_builder.prototype.platformFaultDomainCount = function (value) {
        this.setFlag("--platform-fault-domain-count", value);
        return this;
    };
    /** The name or ID of the proximity placement group the VMSS should be associated with. */
    az_vmss_create_command_builder.prototype.ppg = function (value) {
        this.setFlag("--ppg", value);
        return this;
    };
    /** Priority. Use 'Spot' to run short-lived workloads in a cost-effective way. 'Low' enum will be deprecated in the future. Please use 'Spot' to deploy Azure spot VM and/or VMSS. Default to Regular. */
    az_vmss_create_command_builder.prototype.priority = function (value) {
        this.setFlag("--priority", value);
        return this;
    };
    /** Name of the public IP address when creating one (default) or referencing an existing one. Can also reference an existing public IP by ID or specify "" for None ('""' in Azure CLI using PowerShell or --% operator). */
    az_vmss_create_command_builder.prototype.publicIpAddress = function (value) {
        this.setFlag("--public-ip-address", value);
        return this;
    };
    /** */
    az_vmss_create_command_builder.prototype.publicIpAddressAllocation = function (value) {
        this.setFlag("--public-ip-address-allocation", value);
        return this;
    };
    /** Globally unique DNS name for a newly created public IP. */
    az_vmss_create_command_builder.prototype.publicIpAddressDnsName = function (value) {
        this.setFlag("--public-ip-address-dns-name", value);
        return this;
    };
    /** Each VM instance will have a public ip. For security, you can use '--nsg' to apply appropriate rules. */
    az_vmss_create_command_builder.prototype.publicIpPerVm = function (value) {
        this.setFlag("--public-ip-per-vm", value);
        return this;
    };
    /** Role name or id the system assigned identity will have. */
    az_vmss_create_command_builder.prototype.role = function (value) {
        this.setFlag("--role", value);
        return this;
    };
    /** Specify the scale-in policy (space delimited) that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled-in. */
    az_vmss_create_command_builder.prototype.scaleInPolicy = function (value) {
        this.setFlag("--scale-in-policy", value);
        return this;
    };
    /** Scope that the system assigned identity can access. */
    az_vmss_create_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** One or many Key Vault secrets as JSON strings or files via `@{path}` containing `[{ "sourceVault": { "id": "value" }, "vaultCertificates": [{ "certificateUrl": "value", "certificateStore": "cert store name (only on windows)"}] }]`. */
    az_vmss_create_command_builder.prototype.secrets = function (value) {
        this.setFlag("--secrets", value);
        return this;
    };
    /** Limit the scale set to a single placement group. See <a href="https://docs.microsoft.com/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups">https://docs.microsoft.com/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups</a> for details. */
    az_vmss_create_command_builder.prototype.singlePlacementGroup = function (value) {
        this.setFlag("--single-placement-group", value.toString());
        return this;
    };
    /** Indicate whether the source image is specialized. */
    az_vmss_create_command_builder.prototype.specialized = function (value) {
        this.setFlag("--specialized", value.toString());
        return this;
    };
    /** Destination file path on the VM for the SSH key. If the file already exists, the specified key(s) are appended to the file. Destination path for SSH public keys is currently limited to its default value "/home/username/.ssh/authorized_keys" due to a known issue in Linux provisioning agent. */
    az_vmss_create_command_builder.prototype.sshDestKeyPath = function (value) {
        this.setFlag("--ssh-dest-key-path", value);
        return this;
    };
    /** Space-separated list of SSH public keys or public key file paths. */
    az_vmss_create_command_builder.prototype.sshKeyValues = function (value) {
        this.setFlag("--ssh-key-values", value);
        return this;
    };
    /** Only applicable when used with `--use-unmanaged-disk`. Name of the storage container for the VM OS disk. Default: vhds. */
    az_vmss_create_command_builder.prototype.storageContainerName = function (value) {
        this.setFlag("--storage-container-name", value);
        return this;
    };
    /** The SKU of the storage account with which to persist VM. Use a singular sku that would be applied across all disks, or specify individual disks. Usage: [--storage-sku SKU | --storage-sku ID=SKU ID=SKU ID=SKU...], where each ID is "os" or a 0-indexed lun. Allowed values: Standard_LRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS. */
    az_vmss_create_command_builder.prototype.storageSku = function (value) {
        this.setFlag("--storage-sku", value);
        return this;
    };
    /** The name of the subnet when creating a new VNet or referencing an existing one. Can also reference an existing subnet by ID. If both vnet-name and subnet are omitted, an appropriate VNet and subnet will be selected automatically, or a new one will be created. */
    az_vmss_create_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** The subnet IP address prefix to use when creating a new VNet in CIDR format. */
    az_vmss_create_command_builder.prototype.subnetAddressPrefix = function (value) {
        this.setFlag("--subnet-address-prefix", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_vmss_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Length of time (in minutes, between 5 and 15) a notification to be sent to the VM on the instance metadata server till the VM gets deleted. */
    az_vmss_create_command_builder.prototype.terminateNotificationTime = function (value) {
        this.setFlag("--terminate-notification-time", value);
        return this;
    };
    /** Enables or disables the capability to have 1 or more managed data disks with UltraSSD_LRS storage account. */
    az_vmss_create_command_builder.prototype.ultraSsdEnabled = function (value) {
        this.setFlag("--ultra-ssd-enabled", value.toString());
        return this;
    };
    /** */
    az_vmss_create_command_builder.prototype.upgradePolicyMode = function (value) {
        this.setFlag("--upgrade-policy-mode", value);
        return this;
    };
    /** Do not use managed disk to persist VM. */
    az_vmss_create_command_builder.prototype.useUnmanagedDisk = function (value) {
        this.setFlag("--use-unmanaged-disk", value);
        return this;
    };
    /** Generate and validate the ARM template without creating any resources. */
    az_vmss_create_command_builder.prototype.validate = function (value) {
        this.setFlag("--validate", value);
        return this;
    };
    /** Domain name of VM instances, once configured, the FQDN is `vm<vm-index>.<vm-domain-name>.<..rest..>`. */
    az_vmss_create_command_builder.prototype.vmDomainName = function (value) {
        this.setFlag("--vm-domain-name", value);
        return this;
    };
    /** Size of VMs in the scale set. Default to "Standard_DS1_v2". See <a href="https://azure.microsoft.com/pricing/details/virtual-machines/">https://azure.microsoft.com/pricing/details/virtual-machines/</a> for size info. */
    az_vmss_create_command_builder.prototype.vmSku = function (value) {
        this.setFlag("--vm-sku", value);
        return this;
    };
    /** The IP address prefix to use when creating a new VNet in CIDR format. */
    az_vmss_create_command_builder.prototype.vnetAddressPrefix = function (value) {
        this.setFlag("--vnet-address-prefix", value);
        return this;
    };
    /** Name of the virtual network when creating a new one or referencing an existing one. */
    az_vmss_create_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    /** Space-separated list of availability zones into which to provision the resource. */
    az_vmss_create_command_builder.prototype.zones = function (value) {
        this.setFlag("--zones", value);
        return this;
    };
    return az_vmss_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deallocate VMs within a VMSS.
 *
 * Syntax:
 * ```
 * az vmss deallocate --name
 *                    --resource-group
 *                    [--instance-ids]
 *                    [--no-wait]
 *                    [--subscription]
 * ```
 *
 * @param {string} name Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_vmss_deallocate_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_deallocate_command_builder, _super);
    function az_vmss_deallocate_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_deallocate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_deallocate_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances. If not provided, the action will be applied on the scaleset itself. */
    az_vmss_deallocate_command_builder.prototype.instanceIds = function (value) {
        this.setFlag("--instance-ids", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vmss_deallocate_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_deallocate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_deallocate_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes a VM scale set.
 *
 * Syntax:
 * ```
 * az vmss delete [--ids]
 *                [--name]
 *                [--no-wait]
 *                [--resource-group]
 *                [--subscription]
 * ```
 */
var az_vmss_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_delete_command_builder, _super);
    function az_vmss_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vmss_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete VMs within a VMSS.
 *
 * Syntax:
 * ```
 * az vmss delete-instances --instance-ids
 *                          --name
 *                          --resource-group
 *                          [--no-wait]
 *                          [--subscription]
 * ```
 *
 * @param {string} instanceIds Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances.
 * @param {string} name Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_vmss_delete_instances_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_delete_instances_command_builder, _super);
    function az_vmss_delete_instances_command_builder(commandPath, resultDataTypeName, instanceIds, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.instanceIds(instanceIds);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances. */
    az_vmss_delete_instances_command_builder.prototype.instanceIds = function (value) {
        this.setFlag("--instance-ids", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_delete_instances_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_delete_instances_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vmss_delete_instances_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_delete_instances_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_delete_instances_command_builder;
}(base_1.CommandBuilder));
/**
 * View an instance of a VMSS.
 *
 * Syntax:
 * ```
 * az vmss get-instance-view [--ids]
 *                           [--instance-id]
 *                           [--name]
 *                           [--resource-group]
 *                           [--subscription]
 * ```
 */
var az_vmss_get_instance_view_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_get_instance_view_command_builder, _super);
    function az_vmss_get_instance_view_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_get_instance_view_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** A VM instance ID or "\*" to list instance view for all VMs in a scale set. */
    az_vmss_get_instance_view_command_builder.prototype.instanceId = function (value) {
        this.setFlag("--instance-id", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_get_instance_view_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_get_instance_view_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_get_instance_view_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_get_instance_view_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets list of OS upgrades on a VM scale set instance.
 *
 * Syntax:
 * ```
 * az vmss get-os-upgrade-history [--ids]
 *                                [--name]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 */
var az_vmss_get_os_upgrade_history_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_get_os_upgrade_history_command_builder, _super);
    function az_vmss_get_os_upgrade_history_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_get_os_upgrade_history_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_get_os_upgrade_history_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_get_os_upgrade_history_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_get_os_upgrade_history_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_get_os_upgrade_history_command_builder;
}(base_1.CommandBuilder));
/**
 * List VMSS.
 *
 * Syntax:
 * ```
 * az vmss list [--query-examples]
 *              [--resource-group]
 *              [--subscription]
 * ```
 */
var az_vmss_list_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_list_command_builder, _super);
    function az_vmss_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vmss_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the IP address and port number used to connect to individual VM instances within a set.
 *
 * Syntax:
 * ```
 * az vmss list-instance-connection-info [--ids]
 *                                       [--name]
 *                                       [--resource-group]
 *                                       [--subscription]
 * ```
 */
var az_vmss_list_instance_connection_info_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_list_instance_connection_info_command_builder, _super);
    function az_vmss_list_instance_connection_info_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_list_instance_connection_info_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_list_instance_connection_info_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_list_instance_connection_info_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_list_instance_connection_info_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_list_instance_connection_info_command_builder;
}(base_1.CommandBuilder));
/**
 * List public IP addresses of VM instances within a set.
 *
 * Syntax:
 * ```
 * az vmss list-instance-public-ips [--ids]
 *                                  [--name]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 */
var az_vmss_list_instance_public_ips_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_list_instance_public_ips_command_builder, _super);
    function az_vmss_list_instance_public_ips_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_list_instance_public_ips_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_list_instance_public_ips_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_list_instance_public_ips_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_list_instance_public_ips_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_list_instance_public_ips_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a list of all virtual machines in a VM scale sets.
 *
 * Syntax:
 * ```
 * az vmss list-instances [--expand]
 *                        [--filter]
 *                        [--ids]
 *                        [--name]
 *                        [--resource-group]
 *                        [--select]
 *                        [--subscription]
 * ```
 */
var az_vmss_list_instances_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_list_instances_command_builder, _super);
    function az_vmss_list_instances_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The expand expression to apply to the operation. Allowed values are 'instanceView'. */
    az_vmss_list_instances_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** The filter to apply to the operation. Allowed values are 'startswith(instanceView/statuses/code, 'PowerState') eq true', 'properties/latestModelApplied eq true', 'properties/latestModelApplied eq false'. */
    az_vmss_list_instances_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_list_instances_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_list_instances_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_list_instances_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The list parameters. Allowed values are 'instanceView', 'instanceView/statuses'. */
    az_vmss_list_instances_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_list_instances_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_list_instances_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a list of SKUs available for your VM scale set, including the minimum and maximum VM instances allowed for each SKU.
 *
 * Syntax:
 * ```
 * az vmss list-skus [--ids]
 *                   [--name]
 *                   [--resource-group]
 *                   [--subscription]
 * ```
 */
var az_vmss_list_skus_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_list_skus_command_builder, _super);
    function az_vmss_list_skus_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_list_skus_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_list_skus_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_list_skus_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_list_skus_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_list_skus_command_builder;
}(base_1.CommandBuilder));
/**
 * Perform maintenance on one or more virtual machines in a VM scale set.
 *
 * Syntax:
 * ```
 * az vmss perform-maintenance [--ids]
 *                             [--instance-ids]
 *                             [--name]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 */
var az_vmss_perform_maintenance_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_perform_maintenance_command_builder, _super);
    function az_vmss_perform_maintenance_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_perform_maintenance_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances. If not provided, the action will be applied on the scaleset itself. */
    az_vmss_perform_maintenance_command_builder.prototype.instanceIds = function (value) {
        this.setFlag("--instance-ids", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_perform_maintenance_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_perform_maintenance_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_perform_maintenance_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_perform_maintenance_command_builder;
}(base_1.CommandBuilder));
/**
 * Reimage VMs within a VMSS.
 *
 * Syntax:
 * ```
 * az vmss reimage [--ids]
 *                 [--instance-id]
 *                 [--name]
 *                 [--no-wait]
 *                 [--resource-group]
 *                 [--subscription]
 * ```
 */
var az_vmss_reimage_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_reimage_command_builder, _super);
    function az_vmss_reimage_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_reimage_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** VM instance ID. If missing, reimage all instances. */
    az_vmss_reimage_command_builder.prototype.instanceId = function (value) {
        this.setFlag("--instance-id", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_reimage_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vmss_reimage_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_reimage_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_reimage_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_reimage_command_builder;
}(base_1.CommandBuilder));
/**
 * Restart VMs within a VMSS.
 *
 * Syntax:
 * ```
 * az vmss restart --name
 *                 --resource-group
 *                 [--instance-ids]
 *                 [--no-wait]
 *                 [--subscription]
 * ```
 *
 * @param {string} name Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_vmss_restart_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_restart_command_builder, _super);
    function az_vmss_restart_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_restart_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_restart_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances. If not provided, the action will be applied on the scaleset itself. */
    az_vmss_restart_command_builder.prototype.instanceIds = function (value) {
        this.setFlag("--instance-ids", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vmss_restart_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_restart_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_restart_command_builder;
}(base_1.CommandBuilder));
/**
 * Change the number of VMs within a VMSS.
 *
 * Syntax:
 * ```
 * az vmss scale --new-capacity
 *               [--ids]
 *               [--name]
 *               [--no-wait]
 *               [--resource-group]
 *               [--subscription]
 * ```
 *
 * @param {string} newCapacity Number of VMs in the VMSS.
 */
var az_vmss_scale_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_scale_command_builder, _super);
    function az_vmss_scale_command_builder(commandPath, resultDataTypeName, newCapacity) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.newCapacity(newCapacity);
        return _this;
    }
    /** Number of VMs in the VMSS. */
    az_vmss_scale_command_builder.prototype.newCapacity = function (value) {
        this.setFlag("--new-capacity", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_scale_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_scale_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vmss_scale_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_scale_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_scale_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_scale_command_builder;
}(base_1.CommandBuilder));
/**
 * Change ServiceState property for a given service within a VMSS.
 *
 * Syntax:
 * ```
 * az vmss set-orchestration-service-state --action {Resume, Suspend}
 *                                         --service-name {AutomaticRepairs}
 *                                         [--ids]
 *                                         [--name]
 *                                         [--no-wait]
 *                                         [--resource-group]
 *                                         [--subscription]
 * ```
 *
 * @param {'Resume' | 'Suspend'} action The action to be performed.
 * @param {'AutomaticRepairs'} serviceName The name of the orchestration service.
 */
var az_vmss_set_orchestration_service_state_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_set_orchestration_service_state_command_builder, _super);
    function az_vmss_set_orchestration_service_state_command_builder(commandPath, resultDataTypeName, action, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.action(action);
        _this.serviceName(serviceName);
        return _this;
    }
    /** The action to be performed. */
    az_vmss_set_orchestration_service_state_command_builder.prototype.action = function (value) {
        this.setFlag("--action", value);
        return this;
    };
    /** The name of the orchestration service. */
    az_vmss_set_orchestration_service_state_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_set_orchestration_service_state_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_set_orchestration_service_state_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vmss_set_orchestration_service_state_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_set_orchestration_service_state_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_set_orchestration_service_state_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_set_orchestration_service_state_command_builder;
}(base_1.CommandBuilder));
/**
 * Get details on VMs within a VMSS.
 *
 * Syntax:
 * ```
 * az vmss show --name
 *              --resource-group
 *              [--instance-id]
 *              [--query-examples]
 *              [--subscription]
 * ```
 *
 * @param {string} name Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_vmss_show_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_show_command_builder, _super);
    function az_vmss_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** VM instance ID. If missing, show the VMSS. */
    az_vmss_show_command_builder.prototype.instanceId = function (value) {
        this.setFlag("--instance-id", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vmss_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Simulate the eviction of a Spot virtual machine in a VM scale set.
 *
 * Syntax:
 * ```
 * az vmss simulate-eviction --instance-id
 *                           --name
 *                           --resource-group
 *                           [--subscription]
 * ```
 *
 * @param {string} instanceId The instance ID of the virtual machine.
 * @param {string} name Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_vmss_simulate_eviction_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_simulate_eviction_command_builder, _super);
    function az_vmss_simulate_eviction_command_builder(commandPath, resultDataTypeName, instanceId, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.instanceId(instanceId);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The instance ID of the virtual machine. */
    az_vmss_simulate_eviction_command_builder.prototype.instanceId = function (value) {
        this.setFlag("--instance-id", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_simulate_eviction_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_simulate_eviction_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_simulate_eviction_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_simulate_eviction_command_builder;
}(base_1.CommandBuilder));
/**
 * Start VMs within a VMSS.
 *
 * Syntax:
 * ```
 * az vmss start --name
 *               --resource-group
 *               [--instance-ids]
 *               [--no-wait]
 *               [--subscription]
 * ```
 *
 * @param {string} name Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_vmss_start_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_start_command_builder, _super);
    function az_vmss_start_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_start_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_start_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances. If not provided, the action will be applied on the scaleset itself. */
    az_vmss_start_command_builder.prototype.instanceIds = function (value) {
        this.setFlag("--instance-ids", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vmss_start_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_start_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_start_command_builder;
}(base_1.CommandBuilder));
/**
 * Power off (stop) VMs within a VMSS.
 *
 * Syntax:
 * ```
 * az vmss stop --name
 *              --resource-group
 *              [--instance-ids]
 *              [--no-wait]
 *              [--skip-shutdown]
 *              [--subscription]
 * ```
 *
 * @param {string} name Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_vmss_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_stop_command_builder, _super);
    function az_vmss_stop_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_stop_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_stop_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances. If not provided, the action will be applied on the scaleset itself. */
    az_vmss_stop_command_builder.prototype.instanceIds = function (value) {
        this.setFlag("--instance-ids", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vmss_stop_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Skip shutdown and power-off immediately. */
    az_vmss_stop_command_builder.prototype.skipShutdown = function (value) {
        this.setFlag("--skip-shutdown", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_stop_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a VMSS.
 *
 * Syntax:
 * ```
 * az vmss update [--add]
 *                [--automatic-repairs-grace-period]
 *                [--enable-automatic-repairs {false, true}]
 *                [--enable-terminate-notification {false, true}]
 *                [--force-string]
 *                [--ids]
 *                [--instance-id]
 *                [--license-type {None, RHEL_BYOS, SLES_BYOS, Windows_Client, Windows_Server}]
 *                [--max-price]
 *                [--name]
 *                [--no-wait]
 *                [--ppg]
 *                [--priority {Low, Regular, Spot}]
 *                [--protect-from-scale-in {false, true}]
 *                [--protect-from-scale-set-actions {false, true}]
 *                [--remove]
 *                [--resource-group]
 *                [--scale-in-policy {Default, NewestVM, OldestVM}]
 *                [--set]
 *                [--subscription]
 *                [--terminate-notification-time]
 *                [--ultra-ssd-enabled {false, true}]
 * ```
 */
var az_vmss_update_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_update_command_builder, _super);
    function az_vmss_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_vmss_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The amount of time (in minutes, between 30 and 90) for which automatic repairs are suspended due to a state change on VM. */
    az_vmss_update_command_builder.prototype.automaticRepairsGracePeriod = function (value) {
        this.setFlag("--automatic-repairs-grace-period", value);
        return this;
    };
    /** Enable automatic repairs. */
    az_vmss_update_command_builder.prototype.enableAutomaticRepairs = function (value) {
        this.setFlag("--enable-automatic-repairs", value.toString());
        return this;
    };
    /** Enable terminate notification. */
    az_vmss_update_command_builder.prototype.enableTerminateNotification = function (value) {
        this.setFlag("--enable-terminate-notification", value.toString());
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_vmss_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Update the VM instance with this ID. If missing, Update the VMSS. */
    az_vmss_update_command_builder.prototype.instanceId = function (value) {
        this.setFlag("--instance-id", value);
        return this;
    };
    /** Specifies that the Windows image or disk was licensed on-premises. To enable Azure Hybrid Benefit for Windows Server, use 'Windows_Server'. To enable Multitenant Hosting Rights for Windows 10, use 'Windows_Client'. For more information see the Azure Windows VM online docs. */
    az_vmss_update_command_builder.prototype.licenseType = function (value) {
        this.setFlag("--license-type", value);
        return this;
    };
    /** The maximum price (in US Dollars) you are willing to pay for a Spot VM/VMSS. -1 indicates that the Spot VM/VMSS should not be evicted for price reasons. */
    az_vmss_update_command_builder.prototype.maxPrice = function (value) {
        this.setFlag("--max-price", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vmss_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The name or ID of the proximity placement group the VMSS should be associated with. */
    az_vmss_update_command_builder.prototype.ppg = function (value) {
        this.setFlag("--ppg", value);
        return this;
    };
    /** Priority. Use 'Spot' to run short-lived workloads in a cost-effective way. 'Low' enum will be deprecated in the future. Please use 'Spot' to deploy Azure spot VM and/or VMSS. Default to Regular. */
    az_vmss_update_command_builder.prototype.priority = function (value) {
        this.setFlag("--priority", value);
        return this;
    };
    /** Protect the VM instance from scale-in operations. */
    az_vmss_update_command_builder.prototype.protectFromScaleIn = function (value) {
        this.setFlag("--protect-from-scale-in", value.toString());
        return this;
    };
    /** Protect the VM instance from scale set actions (including scale-in). */
    az_vmss_update_command_builder.prototype.protectFromScaleSetActions = function (value) {
        this.setFlag("--protect-from-scale-set-actions", value.toString());
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_vmss_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify the scale-in policy (space delimited) that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled-in. */
    az_vmss_update_command_builder.prototype.scaleInPolicy = function (value) {
        this.setFlag("--scale-in-policy", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_vmss_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Length of time (in minutes, between 5 and 15) a notification to be sent to the VM on the instance metadata server till the VM gets deleted. */
    az_vmss_update_command_builder.prototype.terminateNotificationTime = function (value) {
        this.setFlag("--terminate-notification-time", value);
        return this;
    };
    /** Enables or disables the capability to have 1 or more managed data disks with UltraSSD_LRS storage account. */
    az_vmss_update_command_builder.prototype.ultraSsdEnabled = function (value) {
        this.setFlag("--ultra-ssd-enabled", value.toString());
        return this;
    };
    return az_vmss_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Upgrade VMs within a VMSS.
 *
 * Syntax:
 * ```
 * az vmss update-instances --instance-ids
 *                          --name
 *                          --resource-group
 *                          [--no-wait]
 *                          [--subscription]
 * ```
 *
 * @param {string} instanceIds Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances.
 * @param {string} name Scale set name. You can configure the default using `az configure --defaults vmss=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_vmss_update_instances_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_update_instances_command_builder, _super);
    function az_vmss_update_instances_command_builder(commandPath, resultDataTypeName, instanceIds, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.instanceIds(instanceIds);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances. */
    az_vmss_update_instances_command_builder.prototype.instanceIds = function (value) {
        this.setFlag("--instance-ids", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_update_instances_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_update_instances_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vmss_update_instances_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_update_instances_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vmss_update_instances_command_builder;
}(base_1.CommandBuilder));
/**
 * Place the CLI in a waiting state until a condition of a scale set is met.
 *
 * Syntax:
 * ```
 * az vmss wait [--created]
 *              [--custom]
 *              [--deleted]
 *              [--exists]
 *              [--ids]
 *              [--instance-id]
 *              [--interval]
 *              [--name]
 *              [--resource-group]
 *              [--subscription]
 *              [--timeout]
 *              [--updated]
 * ```
 */
var az_vmss_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_vmss_wait_command_builder, _super);
    function az_vmss_wait_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_vmss_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_vmss_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_vmss_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_vmss_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vmss_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Wait on the VM instance with this ID. If missing, Wait on the VMSS. */
    az_vmss_wait_command_builder.prototype.instanceId = function (value) {
        this.setFlag("--instance-id", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_vmss_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    az_vmss_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vmss_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vmss_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_vmss_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_vmss_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_vmss_wait_command_builder;
}(base_1.CommandBuilder));
