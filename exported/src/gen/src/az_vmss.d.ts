import { CommandBuilder } from '../base';
import { az_vmss_diagnostics_get_default_config_command_result } from './models/az_vmss_diagnostics_get_default_config_command_result';
import { az_vmss_diagnostics_set_command_result } from './models/az_vmss_diagnostics_set_command_result';
import { az_vmss_disk_attach_command_result } from './models/az_vmss_disk_attach_command_result';
import { az_vmss_disk_detach_command_result } from './models/az_vmss_disk_detach_command_result';
import { az_vmss_encryption_disable_command_result } from './models/az_vmss_encryption_disable_command_result';
import { az_vmss_encryption_enable_command_result } from './models/az_vmss_encryption_enable_command_result';
import { az_vmss_encryption_show_command_result } from './models/az_vmss_encryption_show_command_result';
import { az_vmss_extension_image_list_command_result } from './models/az_vmss_extension_image_list_command_result';
import { az_vmss_extension_image_list_names_command_result } from './models/az_vmss_extension_image_list_names_command_result';
import { az_vmss_extension_image_list_versions_command_result } from './models/az_vmss_extension_image_list_versions_command_result';
import { az_vmss_extension_image_show_command_result } from './models/az_vmss_extension_image_show_command_result';
import { az_vmss_extension_delete_command_result } from './models/az_vmss_extension_delete_command_result';
import { az_vmss_extension_list_command_result } from './models/az_vmss_extension_list_command_result';
import { az_vmss_extension_set_command_result } from './models/az_vmss_extension_set_command_result';
import { az_vmss_extension_show_command_result } from './models/az_vmss_extension_show_command_result';
import { az_vmss_extension_upgrade_command_result } from './models/az_vmss_extension_upgrade_command_result';
import { az_vmss_identity_assign_command_result } from './models/az_vmss_identity_assign_command_result';
import { az_vmss_identity_remove_command_result } from './models/az_vmss_identity_remove_command_result';
import { az_vmss_identity_show_command_result } from './models/az_vmss_identity_show_command_result';
import { az_vmss_nic_list_command_result } from './models/az_vmss_nic_list_command_result';
import { az_vmss_nic_list_vm_nics_command_result } from './models/az_vmss_nic_list_vm_nics_command_result';
import { az_vmss_nic_show_command_result } from './models/az_vmss_nic_show_command_result';
import { az_vmss_rolling_upgrade_cancel_command_result } from './models/az_vmss_rolling_upgrade_cancel_command_result';
import { az_vmss_rolling_upgrade_get_latest_command_result } from './models/az_vmss_rolling_upgrade_get_latest_command_result';
import { az_vmss_rolling_upgrade_start_command_result } from './models/az_vmss_rolling_upgrade_start_command_result';
import { az_vmss_run_command_invoke_command_result } from './models/az_vmss_run_command_invoke_command_result';
import { az_vmss_run_command_list_command_result } from './models/az_vmss_run_command_list_command_result';
import { az_vmss_run_command_show_command_result } from './models/az_vmss_run_command_show_command_result';
import { az_vmss_create_command_result } from './models/az_vmss_create_command_result';
import { az_vmss_deallocate_command_result } from './models/az_vmss_deallocate_command_result';
import { az_vmss_delete_command_result } from './models/az_vmss_delete_command_result';
import { az_vmss_delete_instances_command_result } from './models/az_vmss_delete_instances_command_result';
import { az_vmss_get_instance_view_command_result } from './models/az_vmss_get_instance_view_command_result';
import { az_vmss_get_os_upgrade_history_command_result } from './models/az_vmss_get_os_upgrade_history_command_result';
import { az_vmss_list_command_result } from './models/az_vmss_list_command_result';
import { az_vmss_list_instance_connection_info_command_result } from './models/az_vmss_list_instance_connection_info_command_result';
import { az_vmss_list_instance_public_ips_command_result } from './models/az_vmss_list_instance_public_ips_command_result';
import { az_vmss_list_instances_command_result } from './models/az_vmss_list_instances_command_result';
import { az_vmss_list_skus_command_result } from './models/az_vmss_list_skus_command_result';
import { az_vmss_perform_maintenance_command_result } from './models/az_vmss_perform_maintenance_command_result';
import { az_vmss_reimage_command_result } from './models/az_vmss_reimage_command_result';
import { az_vmss_restart_command_result } from './models/az_vmss_restart_command_result';
import { az_vmss_scale_command_result } from './models/az_vmss_scale_command_result';
import { az_vmss_set_orchestration_service_state_command_result } from './models/az_vmss_set_orchestration_service_state_command_result';
import { az_vmss_show_command_result } from './models/az_vmss_show_command_result';
import { az_vmss_simulate_eviction_command_result } from './models/az_vmss_simulate_eviction_command_result';
import { az_vmss_start_command_result } from './models/az_vmss_start_command_result';
import { az_vmss_stop_command_result } from './models/az_vmss_stop_command_result';
import { az_vmss_update_command_result } from './models/az_vmss_update_command_result';
import { az_vmss_update_instances_command_result } from './models/az_vmss_update_instances_command_result';
import { az_vmss_wait_command_result } from './models/az_vmss_wait_command_result';
/** Configure the Azure Virtual Machine Scale Set diagnostics extension. */
export declare class az_vmss_diagnostics {
    /**
     * Show the default config file which defines data to be collected.
     *
     * Syntax:
     * ```
     * az vmss diagnostics get-default-config [--is-windows-os]
     *                                        [--subscription]
     * ```
     */
    static get_default_config(): az_vmss_diagnostics_get_default_config_command_builder;
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
    static set(resourceGroup: string, settings: string, vmssName: string): az_vmss_diagnostics_set_command_builder;
}
/** Manage data disks of a VMSS. */
export declare class az_vmss_disk {
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
    static attach(): az_vmss_disk_attach_command_builder;
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
    static detach(lun: string): az_vmss_disk_detach_command_builder;
}
/** Manage encryption of VMSS. */
export declare class az_vmss_encryption {
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
    static disable(): az_vmss_encryption_disable_command_builder;
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
    static enable(diskEncryptionKeyvault: string): az_vmss_encryption_enable_command_builder;
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
    static show(): az_vmss_encryption_show_command_builder;
}
/** Find the available VM extensions for a subscription and region. */
export declare class az_vmss_extension_image {
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
    static list(): az_vmss_extension_image_list_command_builder;
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
    static list_names(location: string, publisher: string): az_vmss_extension_image_list_names_command_builder;
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
    static list_versions(location: string, name: string, publisher: string): az_vmss_extension_image_list_versions_command_builder;
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
    static show(location: string, name: string, publisher: string, version: string): az_vmss_extension_image_show_command_builder;
}
/** Manage extensions on a VM scale set. */
export declare class az_vmss_extension {
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
    static delete(name: string, resourceGroup: string, vmssName: string): az_vmss_extension_delete_command_builder;
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
    static list(resourceGroup: string, vmssName: string): az_vmss_extension_list_command_builder;
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
    static set(name: string, publisher: string, resourceGroup: string, vmssName: string): az_vmss_extension_set_command_builder;
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
    static show(name: string, resourceGroup: string, vmssName: string): az_vmss_extension_show_command_builder;
    /**
     * Upgrade all extensions for all VMSS instances to the latest version.
     *
     * Syntax:
     * ```
     * az vmss extension upgrade [--ids]
     *                           [--name]
     *                           [--no-wait]
     *                           [--resource-group]
     *                           [--subscription]
     * ```
     */
    static upgrade(): az_vmss_extension_upgrade_command_builder;
}
/** Manage service identities of a VM scaleset. */
export declare class az_vmss_identity {
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
    static assign(): az_vmss_identity_assign_command_builder;
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
    static remove(): az_vmss_identity_remove_command_builder;
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
    static show(): az_vmss_identity_show_command_builder;
}
/** Manage network interfaces of a VMSS. */
export declare class az_vmss_nic {
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
    static list(resourceGroup: string, vmssName: string): az_vmss_nic_list_command_builder;
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
    static list_vm_nics(): az_vmss_nic_list_vm_nics_command_builder;
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
    static show(): az_vmss_nic_show_command_builder;
}
/** Manage rolling upgrades. */
export declare class az_vmss_rolling_upgrade {
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
    static cancel(): az_vmss_rolling_upgrade_cancel_command_builder;
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
    static get_latest(): az_vmss_rolling_upgrade_get_latest_command_builder;
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
    static start(): az_vmss_rolling_upgrade_start_command_builder;
}
/** Manage run commands on a Virtual Machine Scale Set. */
export declare class az_vmss_run_command {
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
    static invoke(commandId: string): az_vmss_run_command_invoke_command_builder;
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
    static list(location: string): az_vmss_run_command_list_command_builder;
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
    static show(commandId: string, location: string): az_vmss_run_command_show_command_builder;
}
/** Manage groupings of virtual machines in an Azure Virtual Machine Scale Set (VMSS). */
export declare class az_vmss {
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
    static create(name: string, resourceGroup: string): az_vmss_create_command_builder;
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
    static deallocate(name: string, resourceGroup: string): az_vmss_deallocate_command_builder;
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
    static delete(): az_vmss_delete_command_builder;
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
    static delete_instances(instanceIds: string, name: string, resourceGroup: string): az_vmss_delete_instances_command_builder;
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
    static get_instance_view(): az_vmss_get_instance_view_command_builder;
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
    static get_os_upgrade_history(): az_vmss_get_os_upgrade_history_command_builder;
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
    static list(): az_vmss_list_command_builder;
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
    static list_instance_connection_info(): az_vmss_list_instance_connection_info_command_builder;
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
    static list_instance_public_ips(): az_vmss_list_instance_public_ips_command_builder;
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
    static list_instances(): az_vmss_list_instances_command_builder;
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
    static list_skus(): az_vmss_list_skus_command_builder;
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
    static perform_maintenance(): az_vmss_perform_maintenance_command_builder;
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
    static reimage(): az_vmss_reimage_command_builder;
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
    static restart(name: string, resourceGroup: string): az_vmss_restart_command_builder;
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
    static scale(newCapacity: string): az_vmss_scale_command_builder;
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
    static set_orchestration_service_state(action: 'Resume' | 'Suspend', serviceName: 'AutomaticRepairs'): az_vmss_set_orchestration_service_state_command_builder;
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
    static show(name: string, resourceGroup: string): az_vmss_show_command_builder;
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
    static simulate_eviction(instanceId: string, name: string, resourceGroup: string): az_vmss_simulate_eviction_command_builder;
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
    static start(name: string, resourceGroup: string): az_vmss_start_command_builder;
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
    static stop(name: string, resourceGroup: string): az_vmss_stop_command_builder;
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
    static update(): az_vmss_update_command_builder;
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
    static update_instances(instanceIds: string, name: string, resourceGroup: string): az_vmss_update_instances_command_builder;
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
    static wait(): az_vmss_wait_command_builder;
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
declare class az_vmss_diagnostics_get_default_config_command_builder extends CommandBuilder<az_vmss_diagnostics_get_default_config_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** For Windows VMs. */
    isWindowsOs(value: string): az_vmss_diagnostics_get_default_config_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_diagnostics_get_default_config_command_builder;
}
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
declare class az_vmss_diagnostics_set_command_builder extends CommandBuilder<az_vmss_diagnostics_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, settings: string, vmssName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_diagnostics_set_command_builder;
    /** Json string or a file path, which defines data to be collected. */
    settings(value: string): az_vmss_diagnostics_set_command_builder;
    /** Scale set name. */
    vmssName(value: string): az_vmss_diagnostics_set_command_builder;
    /** If set, the extension service will not automatically pick or upgrade to the latest minor version, even if the extension is redeployed. */
    noAutoUpgrade(value: boolean): az_vmss_diagnostics_set_command_builder;
    /** Json string or a file path containing private configurations such as storage account keys, etc. */
    protectedSettings(value: string): az_vmss_diagnostics_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_diagnostics_set_command_builder;
    /** Version of the diagnostics extension. Will use the latest if not specfied. */
    version(value: string): az_vmss_diagnostics_set_command_builder;
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
declare class az_vmss_disk_attach_command_builder extends CommandBuilder<az_vmss_disk_attach_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Disk caching policy. */
    caching(value: 'None' | 'ReadOnly' | 'ReadWrite'): az_vmss_disk_attach_command_builder;
    /** Existing disk name or ID to attach or detach from VM instances. */
    disk(value: string): az_vmss_disk_attach_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_disk_attach_command_builder;
    /** Scale set VM instance id. */
    instanceId(value: string): az_vmss_disk_attach_command_builder;
    /** 0-based logical unit number (LUN). Max value depends on the Virtual Machine instance size. */
    lun(value: string): az_vmss_disk_attach_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_disk_attach_command_builder;
    /** Size in GB. Max size: 4095 GB (certain preview disks can be larger). */
    sizeGb(value: string): az_vmss_disk_attach_command_builder;
    /** Underlying storage SKU. */
    sku(value: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'UltraSSD_LRS'): az_vmss_disk_attach_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_disk_attach_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    vmssName(value: string): az_vmss_disk_attach_command_builder;
}
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
declare class az_vmss_disk_detach_command_builder extends CommandBuilder<az_vmss_disk_detach_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, lun: string);
    /** 0-based logical unit number (LUN). Max value depends on the Virtual Machine instance size. */
    lun(value: string): az_vmss_disk_detach_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_disk_detach_command_builder;
    /** Scale set VM instance id. */
    instanceId(value: string): az_vmss_disk_detach_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_disk_detach_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_disk_detach_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    vmssName(value: string): az_vmss_disk_detach_command_builder;
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
declare class az_vmss_encryption_disable_command_builder extends CommandBuilder<az_vmss_encryption_disable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Continue by ignoring client side validation errors. */
    force(value: string): az_vmss_encryption_disable_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_encryption_disable_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_encryption_disable_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_encryption_disable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_encryption_disable_command_builder;
    /** Type of volume that the encryption operation is performed on. */
    volumeType(value: 'ALL' | 'DATA' | 'OS'): az_vmss_encryption_disable_command_builder;
}
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
declare class az_vmss_encryption_enable_command_builder extends CommandBuilder<az_vmss_encryption_enable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, diskEncryptionKeyvault: string);
    /** Name or ID of the key vault where the generated encryption key will be placed. */
    diskEncryptionKeyvault(value: string): az_vmss_encryption_enable_command_builder;
    /** Continue by ignoring client side validation errors. */
    force(value: string): az_vmss_encryption_enable_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_encryption_enable_command_builder;
    /** */
    keyEncryptionAlgorithm(value: string): az_vmss_encryption_enable_command_builder;
    /** Key vault key name or URL used to encrypt the disk encryption key. */
    keyEncryptionKey(value: string): az_vmss_encryption_enable_command_builder;
    /** Name or ID of the key vault containing the key encryption key used to encrypt the disk encryption key. If missing, CLI will use `--disk-encryption-keyvault`. */
    keyEncryptionKeyvault(value: string): az_vmss_encryption_enable_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_encryption_enable_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_encryption_enable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_encryption_enable_command_builder;
    /** Type of volume that the encryption operation is performed on. */
    volumeType(value: 'ALL' | 'DATA' | 'OS'): az_vmss_encryption_enable_command_builder;
}
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
declare class az_vmss_encryption_show_command_builder extends CommandBuilder<az_vmss_encryption_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_encryption_show_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_encryption_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vmss_encryption_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_encryption_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_encryption_show_command_builder;
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
declare class az_vmss_extension_image_list_command_builder extends CommandBuilder<az_vmss_extension_image_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Show the latest version only. */
    latest(value: string): az_vmss_extension_image_list_command_builder;
    /** Image location. */
    location(value: string): az_vmss_extension_image_list_command_builder;
    /** Image name. */
    name(value: string): az_vmss_extension_image_list_command_builder;
    /** Image publisher name. */
    publisher(value: string): az_vmss_extension_image_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vmss_extension_image_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_extension_image_list_command_builder;
    /** Extension version. */
    version(value: string): az_vmss_extension_image_list_command_builder;
}
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
declare class az_vmss_extension_image_list_names_command_builder extends CommandBuilder<az_vmss_extension_image_list_names_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string, publisher: string);
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vmss_extension_image_list_names_command_builder;
    /** Image publisher name. */
    publisher(value: string): az_vmss_extension_image_list_names_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_extension_image_list_names_command_builder;
}
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
declare class az_vmss_extension_image_list_versions_command_builder extends CommandBuilder<az_vmss_extension_image_list_versions_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string, name: string, publisher: string);
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vmss_extension_image_list_versions_command_builder;
    /** Name of the extension. */
    name(value: string): az_vmss_extension_image_list_versions_command_builder;
    /** Image publisher name. */
    publisher(value: string): az_vmss_extension_image_list_versions_command_builder;
    /** The filter to apply on the operation. */
    filter(value: string): az_vmss_extension_image_list_versions_command_builder;
    /** The $orderby odata query option. */
    orderby(value: string): az_vmss_extension_image_list_versions_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_extension_image_list_versions_command_builder;
    /** The $top odata query option. */
    top(value: string): az_vmss_extension_image_list_versions_command_builder;
}
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
declare class az_vmss_extension_image_show_command_builder extends CommandBuilder<az_vmss_extension_image_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string, name: string, publisher: string, version: string);
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vmss_extension_image_show_command_builder;
    /** Name of the extension. */
    name(value: string): az_vmss_extension_image_show_command_builder;
    /** Image publisher name. */
    publisher(value: string): az_vmss_extension_image_show_command_builder;
    /** Extension version. */
    version(value: string): az_vmss_extension_image_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vmss_extension_image_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_extension_image_show_command_builder;
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
declare class az_vmss_extension_delete_command_builder extends CommandBuilder<az_vmss_extension_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, vmssName: string);
    /** Name of the extension. */
    name(value: string): az_vmss_extension_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_extension_delete_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    vmssName(value: string): az_vmss_extension_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_extension_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_extension_delete_command_builder;
}
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
declare class az_vmss_extension_list_command_builder extends CommandBuilder<az_vmss_extension_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, vmssName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_extension_list_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    vmssName(value: string): az_vmss_extension_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vmss_extension_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_extension_list_command_builder;
}
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
declare class az_vmss_extension_set_command_builder extends CommandBuilder<az_vmss_extension_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, publisher: string, resourceGroup: string, vmssName: string);
    /** Name of the extension. */
    name(value: string): az_vmss_extension_set_command_builder;
    /** The name of the extension publisher. */
    publisher(value: string): az_vmss_extension_set_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_extension_set_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    vmssName(value: string): az_vmss_extension_set_command_builder;
    /** Name of extension instance, which can be customized. Default: name of the extension. */
    extensionInstanceName(value: string): az_vmss_extension_set_command_builder;
    /** Force to update even if the extension configuration has not changed. */
    forceUpdate(value: string): az_vmss_extension_set_command_builder;
    /** If set, the extension service will not automatically pick or upgrade to the latest minor version, even if the extension is redeployed. */
    noAutoUpgrade(value: boolean): az_vmss_extension_set_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_extension_set_command_builder;
    /** Protected settings in JSON format for sensitive information like credentials. A JSON file path is also accepted. */
    protectedSettings(value: string): az_vmss_extension_set_command_builder;
    /** Space-separated list of extension names after which this extension should be provisioned. These extensions must already be set on the vm. */
    provisionAfterExtensions(value: string): az_vmss_extension_set_command_builder;
    /** Extension settings in JSON format. A JSON file path is also accepted. */
    settings(value: string): az_vmss_extension_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_extension_set_command_builder;
    /** The version of the extension. To pin extension version to this value, please specify --no-auto-upgrade. */
    version(value: string): az_vmss_extension_set_command_builder;
}
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
declare class az_vmss_extension_show_command_builder extends CommandBuilder<az_vmss_extension_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, vmssName: string);
    /** Name of the extension. */
    name(value: string): az_vmss_extension_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_extension_show_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    vmssName(value: string): az_vmss_extension_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vmss_extension_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_extension_show_command_builder;
}
/**
 * Upgrade all extensions for all VMSS instances to the latest version.
 *
 * Syntax:
 * ```
 * az vmss extension upgrade [--ids]
 *                           [--name]
 *                           [--no-wait]
 *                           [--resource-group]
 *                           [--subscription]
 * ```
 */
declare class az_vmss_extension_upgrade_command_builder extends CommandBuilder<az_vmss_extension_upgrade_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_extension_upgrade_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_extension_upgrade_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_extension_upgrade_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_extension_upgrade_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_extension_upgrade_command_builder;
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
declare class az_vmss_identity_assign_command_builder extends CommandBuilder<az_vmss_identity_assign_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'. */
    identities(value: string): az_vmss_identity_assign_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_identity_assign_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_identity_assign_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_identity_assign_command_builder;
    /** Role name or id the system assigned identity will have. */
    role(value: string): az_vmss_identity_assign_command_builder;
    /** Scope that the system assigned identity can access. */
    scope(value: string): az_vmss_identity_assign_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_identity_assign_command_builder;
}
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
declare class az_vmss_identity_remove_command_builder extends CommandBuilder<az_vmss_identity_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Space-separated identities to remove. Use '[system]' to refer to the system assigned identity. Default: '[system]'. */
    identities(value: string): az_vmss_identity_remove_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_identity_remove_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_identity_remove_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_identity_remove_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_identity_remove_command_builder;
}
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
declare class az_vmss_identity_show_command_builder extends CommandBuilder<az_vmss_identity_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_identity_show_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vmss_identity_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vmss_identity_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_identity_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_identity_show_command_builder;
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
declare class az_vmss_nic_list_command_builder extends CommandBuilder<az_vmss_nic_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, vmssName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_nic_list_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    vmssName(value: string): az_vmss_nic_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vmss_nic_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_nic_list_command_builder;
}
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
declare class az_vmss_nic_list_vm_nics_command_builder extends CommandBuilder<az_vmss_nic_list_vm_nics_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_nic_list_vm_nics_command_builder;
    /** The virtual machine index. */
    instanceId(value: string): az_vmss_nic_list_vm_nics_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_nic_list_vm_nics_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_nic_list_vm_nics_command_builder;
    /** Scale set name. */
    vmssName(value: string): az_vmss_nic_list_vm_nics_command_builder;
}
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
declare class az_vmss_nic_show_command_builder extends CommandBuilder<az_vmss_nic_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Expands referenced resources. */
    expand(value: string): az_vmss_nic_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_nic_show_command_builder;
    /** The virtual machine index. */
    instanceId(value: string): az_vmss_nic_show_command_builder;
    /** The network interface (NIC). */
    name(value: string): az_vmss_nic_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vmss_nic_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_nic_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_nic_show_command_builder;
    /** Scale set name. */
    vmssName(value: string): az_vmss_nic_show_command_builder;
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
declare class az_vmss_rolling_upgrade_cancel_command_builder extends CommandBuilder<az_vmss_rolling_upgrade_cancel_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_rolling_upgrade_cancel_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_rolling_upgrade_cancel_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_rolling_upgrade_cancel_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_rolling_upgrade_cancel_command_builder;
}
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
declare class az_vmss_rolling_upgrade_get_latest_command_builder extends CommandBuilder<az_vmss_rolling_upgrade_get_latest_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_rolling_upgrade_get_latest_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_rolling_upgrade_get_latest_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_rolling_upgrade_get_latest_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_rolling_upgrade_get_latest_command_builder;
}
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
declare class az_vmss_rolling_upgrade_start_command_builder extends CommandBuilder<az_vmss_rolling_upgrade_start_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_rolling_upgrade_start_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_rolling_upgrade_start_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_rolling_upgrade_start_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_rolling_upgrade_start_command_builder;
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
declare class az_vmss_run_command_invoke_command_builder extends CommandBuilder<az_vmss_run_command_invoke_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, commandId: string);
    /** The command id. */
    commandId(value: string): az_vmss_run_command_invoke_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_run_command_invoke_command_builder;
    /** Scale set VM instance id. */
    instanceId(value: string): az_vmss_run_command_invoke_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_run_command_invoke_command_builder;
    /** Space-separated parameters in the format of '[name=]value'. */
    parameters(value: string): az_vmss_run_command_invoke_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_run_command_invoke_command_builder;
    /** Space-separated script lines. Use @{file} to load script from a file. */
    scripts(value: string): az_vmss_run_command_invoke_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_run_command_invoke_command_builder;
}
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
declare class az_vmss_run_command_list_command_builder extends CommandBuilder<az_vmss_run_command_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string);
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vmss_run_command_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vmss_run_command_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_run_command_list_command_builder;
}
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
declare class az_vmss_run_command_show_command_builder extends CommandBuilder<az_vmss_run_command_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, commandId: string, location: string);
    /** The command id. */
    commandId(value: string): az_vmss_run_command_show_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vmss_run_command_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vmss_run_command_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_run_command_show_command_builder;
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
declare class az_vmss_create_command_builder extends CommandBuilder<az_vmss_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the virtual machine scale set. */
    name(value: string): az_vmss_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_create_command_builder;
    /** Enable accelerated networking. Unless specified, CLI will enable it based on machine image and size. */
    acceleratedNetworking(value: boolean): az_vmss_create_command_builder;
    /** Password for the VM if authentication type is 'Password'. */
    adminPassword(value: string): az_vmss_create_command_builder;
    /** Username for the VM. Default value is current username of OS. If the default value is system reserved, then default value will be set to azureuser. Please refer to <a href="https://docs.microsoft.com/en-us/rest/api/compute/virtualmachines/createorupdate#osprofile">https://docs.microsoft.com/en-us/rest/api/compute/virtualmachines/createorupdate#osprofile</a> to get a full list of reserved values. */
    adminUsername(value: string): az_vmss_create_command_builder;
    /** Name to use when creating a new application gateway (default) or referencing an existing one. Can also reference an existing application gateway by ID or specify "" for none. */
    appGateway(value: string): az_vmss_create_command_builder;
    /** The number of instances to use when creating a new application gateway. */
    appGatewayCapacity(value: string): az_vmss_create_command_builder;
    /** SKU when creating a new application gateway. */
    appGatewaySku(value: string): az_vmss_create_command_builder;
    /** The subnet IP address prefix to use when creating a new application gateway in CIDR format. */
    appGatewaySubnetAddressPrefix(value: string): az_vmss_create_command_builder;
    /** Space-separated list of existing application security groups to associate with the VM. */
    asgs(value: string): az_vmss_create_command_builder;
    /** Accept system or user assigned identities separated by spaces. Use '[system]' to refer system assigned identity, or a resource id to refer user assigned identity. Check out help for more examples. */
    assignIdentity(value: string): az_vmss_create_command_builder;
    /** Type of authentication to use with the VM. Defaults to password for Windows and SSH public key for Linux. "all" enables both ssh and password authentication. */
    authenticationType(value: 'all' | 'password' | 'ssh'): az_vmss_create_command_builder;
    /** The amount of time (in minutes, between 30 and 90) for which automatic repairs are suspended due to a state change on VM. */
    automaticRepairsGracePeriod(value: string): az_vmss_create_command_builder;
    /** Name to use for the backend pool when creating a new load balancer or application gateway. */
    backendPoolName(value: string): az_vmss_create_command_builder;
    /** When creating a new load balancer, backend port to open with NAT rules (Defaults to 22 on Linux and 3389 on Windows). When creating an application gateway, the backend port to use for the backend HTTP settings. */
    backendPort(value: string): az_vmss_create_command_builder;
    /** Computer name prefix for all of the virtual machines in the scale set. Computer name prefixes must be 1 to 15 characters long. */
    computerNamePrefix(value: string): az_vmss_create_command_builder;
    /** Custom init script file or text (cloud-init, cloud-config, etc..). */
    customData(value: string): az_vmss_create_command_builder;
    /** Storage caching type for data disk(s), including 'None', 'ReadOnly', 'ReadWrite', etc. Use a singular value to apply on all disks, or use `<lun>=<vaule1> <lun>=<value2>` to configure individual disk. */
    dataDiskCaching(value: string): az_vmss_create_command_builder;
    /** Names or IDs (space delimited) of disk encryption sets for data disks. */
    dataDiskEncryptionSets(value: string): az_vmss_create_command_builder;
    /** Specify the Read-Write IOPS (space delimited) for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB. */
    dataDiskIops(value: string): az_vmss_create_command_builder;
    /** Specify the bandwidth in MB per second (space delimited) for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB. */
    dataDiskMbps(value: string): az_vmss_create_command_builder;
    /** Space-separated empty managed data disk sizes in GB to create. */
    dataDiskSizesGb(value: string): az_vmss_create_command_builder;
    /** Overprovision option (see <a href="https://azure.microsoft.com/documentation/articles/virtual-machine-scale-sets-overview/">https://azure.microsoft.com/documentation/articles/virtual-machine-scale-sets-overview/</a> for details). */
    disableOverprovision(value: string): az_vmss_create_command_builder;
    /** Space-separated IP addresses of DNS servers, e.g. 10.0.0.5 10.0.0.6. */
    dnsServers(value: string): az_vmss_create_command_builder;
    /** Enable Host Encryption for the VM or VMSS. This will enable the encryption for all the disks including Resource/Temp disk at host itself. */
    encryptionAtHost(value: boolean): az_vmss_create_command_builder;
    /** Allows you to create an OS disk directly on the host node, providing local disk performance and faster VM/VMSS reimage time. */
    ephemeralOsDisk(value: boolean): az_vmss_create_command_builder;
    /** The eviction policy for virtual machines in a Spot priority scale set. Default eviction policy is Deallocate for a Spot priority scale set. */
    evictionPolicy(value: 'Deallocate' | 'Delete'): az_vmss_create_command_builder;
    /** Generate SSH public and private key files if missing. The keys will be stored in the ~/.ssh directory. */
    generateSshKeys(value: string): az_vmss_create_command_builder;
    /** Probe name from the existing load balancer, mainly used for rolling upgrade or automatic repairs. */
    healthProbe(value: string): az_vmss_create_command_builder;
    /** Name or ID of dedicated host group that the virtual machine scale set resides in. */
    hostGroup(value: string): az_vmss_create_command_builder;
    /** The name of the operating system image as a URN alias, URN, custom image name or ID, or VHD blob URI. Valid URN format: "Publisher:Offer:Sku:Version". */
    image(value: string): az_vmss_create_command_builder;
    /** Number of VMs in the scale set. */
    instanceCount(value: string): az_vmss_create_command_builder;
    /** Name to use when creating a new load balancer (default) or referencing an existing one. Can also reference an existing load balancer by ID or specify "" for none. */
    loadBalancer(value: string): az_vmss_create_command_builder;
    /** Name to use for the NAT pool when creating a new load balancer. */
    lbNatPoolName(value: string): az_vmss_create_command_builder;
    /** Sku of the Load Balancer to create. Default to 'Standard' when single placement group is turned off; otherwise, default to 'Basic'. */
    lbSku(value: 'Basic' | 'Standard'): az_vmss_create_command_builder;
    /** Specifies that the Windows image or disk was licensed on-premises. To enable Azure Hybrid Benefit for Windows Server, use 'Windows_Server'. To enable Multitenant Hosting Rights for Windows 10, use 'Windows_Client'. For more information see the Azure Windows VM online docs. */
    licenseType(value: 'None' | 'RHEL_BYOS' | 'SLES_BYOS' | 'Windows_Client' | 'Windows_Server'): az_vmss_create_command_builder;
    /** Location in which to create VM and related resources. If default location is not configured, will default to the resource group's location. */
    location(value: string): az_vmss_create_command_builder;
    /** The maximum price (in US Dollars) you are willing to pay for a Spot VM/VMSS. -1 indicates that the Spot VM/VMSS should not be evicted for price reasons. */
    maxPrice(value: string): az_vmss_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_create_command_builder;
    /** Name or ID of an existing Network Security Group. */
    nsg(value: string): az_vmss_create_command_builder;
    /** Choose how virtual machines are managed by the scale set. In VM mode, you manually create and add a virtual machine of any configuration to the scale set. In ScaleSetVM mode, you define a virtual machine model and Azure will generate identical instances based on that model. */
    orchestrationMode(value: 'ScaleSetVM' | 'VM'): az_vmss_create_command_builder;
    /** Storage caching type for the VM OS disk. Default: ReadWrite. */
    osDiskCaching(value: 'None' | 'ReadOnly' | 'ReadWrite'): az_vmss_create_command_builder;
    /** Name or ID of disk encryption set for OS disk. */
    osDiskEncryptionSet(value: string): az_vmss_create_command_builder;
    /** The name of the new VM OS disk. */
    osDiskName(value: string): az_vmss_create_command_builder;
    /** OS disk size in GB to create. */
    osDiskSizeGb(value: string): az_vmss_create_command_builder;
    /** Type of OS installed on a custom VHD. Do not use when specifying an URN or URN alias. */
    osType(value: 'linux' | 'windows'): az_vmss_create_command_builder;
    /** Plan name. */
    planName(value: string): az_vmss_create_command_builder;
    /** Plan product. */
    planProduct(value: string): az_vmss_create_command_builder;
    /** Plan promotion code. */
    planPromotionCode(value: string): az_vmss_create_command_builder;
    /** Plan publisher. */
    planPublisher(value: string): az_vmss_create_command_builder;
    /** Fault Domain count for each placement group in the availability zone. */
    platformFaultDomainCount(value: string): az_vmss_create_command_builder;
    /** The name or ID of the proximity placement group the VMSS should be associated with. */
    ppg(value: string): az_vmss_create_command_builder;
    /** Priority. Use 'Spot' to run short-lived workloads in a cost-effective way. 'Low' enum will be deprecated in the future. Please use 'Spot' to deploy Azure spot VM and/or VMSS. Default to Regular. */
    priority(value: 'Low' | 'Regular' | 'Spot'): az_vmss_create_command_builder;
    /** Name of the public IP address when creating one (default) or referencing an existing one. Can also reference an existing public IP by ID or specify "" for None ('""' in Azure CLI using PowerShell or --% operator). */
    publicIpAddress(value: string): az_vmss_create_command_builder;
    /** */
    publicIpAddressAllocation(value: 'dynamic' | 'static'): az_vmss_create_command_builder;
    /** Globally unique DNS name for a newly created public IP. */
    publicIpAddressDnsName(value: string): az_vmss_create_command_builder;
    /** Each VM instance will have a public ip. For security, you can use '--nsg' to apply appropriate rules. */
    publicIpPerVm(value: string): az_vmss_create_command_builder;
    /** Role name or id the system assigned identity will have. */
    role(value: string): az_vmss_create_command_builder;
    /** Specify the scale-in policy (space delimited) that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled-in. */
    scaleInPolicy(value: 'Default' | 'NewestVM' | 'OldestVM'): az_vmss_create_command_builder;
    /** Scope that the system assigned identity can access. */
    scope(value: string): az_vmss_create_command_builder;
    /** One or many Key Vault secrets as JSON strings or files via `@{path}` containing `[{ "sourceVault": { "id": "value" }, "vaultCertificates": [{ "certificateUrl": "value", "certificateStore": "cert store name (only on windows)"}] }]`. */
    secrets(value: string): az_vmss_create_command_builder;
    /** Limit the scale set to a single placement group. See <a href="https://docs.microsoft.com/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups">https://docs.microsoft.com/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups</a> for details. */
    singlePlacementGroup(value: boolean): az_vmss_create_command_builder;
    /** Indicate whether the source image is specialized. */
    specialized(value: boolean): az_vmss_create_command_builder;
    /** Destination file path on the VM for the SSH key. If the file already exists, the specified key(s) are appended to the file. Destination path for SSH public keys is currently limited to its default value "/home/username/.ssh/authorized_keys" due to a known issue in Linux provisioning agent. */
    sshDestKeyPath(value: string): az_vmss_create_command_builder;
    /** Space-separated list of SSH public keys or public key file paths. */
    sshKeyValues(value: string): az_vmss_create_command_builder;
    /** Only applicable when used with `--use-unmanaged-disk`. Name of the storage container for the VM OS disk. Default: vhds. */
    storageContainerName(value: string): az_vmss_create_command_builder;
    /** The SKU of the storage account with which to persist VM. Use a singular sku that would be applied across all disks, or specify individual disks. Usage: [--storage-sku SKU | --storage-sku ID=SKU ID=SKU ID=SKU...], where each ID is "os" or a 0-indexed lun. Allowed values: Standard_LRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS. */
    storageSku(value: string): az_vmss_create_command_builder;
    /** The name of the subnet when creating a new VNet or referencing an existing one. Can also reference an existing subnet by ID. If both vnet-name and subnet are omitted, an appropriate VNet and subnet will be selected automatically, or a new one will be created. */
    subnet(value: string): az_vmss_create_command_builder;
    /** The subnet IP address prefix to use when creating a new VNet in CIDR format. */
    subnetAddressPrefix(value: string): az_vmss_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_vmss_create_command_builder;
    /** Length of time (in minutes, between 5 and 15) a notification to be sent to the VM on the instance metadata server till the VM gets deleted. */
    terminateNotificationTime(value: string): az_vmss_create_command_builder;
    /** Enables or disables the capability to have 1 or more managed data disks with UltraSSD_LRS storage account. */
    ultraSsdEnabled(value: boolean): az_vmss_create_command_builder;
    /** */
    upgradePolicyMode(value: 'Automatic' | 'Manual' | 'Rolling'): az_vmss_create_command_builder;
    /** Do not use managed disk to persist VM. */
    useUnmanagedDisk(value: string): az_vmss_create_command_builder;
    /** Generate and validate the ARM template without creating any resources. */
    validate(value: string): az_vmss_create_command_builder;
    /** Domain name of VM instances, once configured, the FQDN is `vm<vm-index>.<vm-domain-name>.<..rest..>`. */
    vmDomainName(value: string): az_vmss_create_command_builder;
    /** Size of VMs in the scale set. Default to "Standard_DS1_v2". See <a href="https://azure.microsoft.com/pricing/details/virtual-machines/">https://azure.microsoft.com/pricing/details/virtual-machines/</a> for size info. */
    vmSku(value: string): az_vmss_create_command_builder;
    /** The IP address prefix to use when creating a new VNet in CIDR format. */
    vnetAddressPrefix(value: string): az_vmss_create_command_builder;
    /** Name of the virtual network when creating a new one or referencing an existing one. */
    vnetName(value: string): az_vmss_create_command_builder;
    /** Space-separated list of availability zones into which to provision the resource. */
    zones(value: '1' | '2' | '3'): az_vmss_create_command_builder;
}
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
declare class az_vmss_deallocate_command_builder extends CommandBuilder<az_vmss_deallocate_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_deallocate_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_deallocate_command_builder;
    /** Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances. If not provided, the action will be applied on the scaleset itself. */
    instanceIds(value: string): az_vmss_deallocate_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_deallocate_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_deallocate_command_builder;
}
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
declare class az_vmss_delete_command_builder extends CommandBuilder<az_vmss_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_delete_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_delete_command_builder;
}
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
declare class az_vmss_delete_instances_command_builder extends CommandBuilder<az_vmss_delete_instances_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, instanceIds: string, name: string, resourceGroup: string);
    /** Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances. */
    instanceIds(value: string): az_vmss_delete_instances_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_delete_instances_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_delete_instances_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_delete_instances_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_delete_instances_command_builder;
}
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
declare class az_vmss_get_instance_view_command_builder extends CommandBuilder<az_vmss_get_instance_view_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_get_instance_view_command_builder;
    /** A VM instance ID or "\*" to list instance view for all VMs in a scale set. */
    instanceId(value: string): az_vmss_get_instance_view_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_get_instance_view_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_get_instance_view_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_get_instance_view_command_builder;
}
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
declare class az_vmss_get_os_upgrade_history_command_builder extends CommandBuilder<az_vmss_get_os_upgrade_history_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_get_os_upgrade_history_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_get_os_upgrade_history_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_get_os_upgrade_history_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_get_os_upgrade_history_command_builder;
}
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
declare class az_vmss_list_command_builder extends CommandBuilder<az_vmss_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vmss_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_list_command_builder;
}
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
declare class az_vmss_list_instance_connection_info_command_builder extends CommandBuilder<az_vmss_list_instance_connection_info_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_list_instance_connection_info_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_list_instance_connection_info_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_list_instance_connection_info_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_list_instance_connection_info_command_builder;
}
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
declare class az_vmss_list_instance_public_ips_command_builder extends CommandBuilder<az_vmss_list_instance_public_ips_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_list_instance_public_ips_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_list_instance_public_ips_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_list_instance_public_ips_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_list_instance_public_ips_command_builder;
}
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
declare class az_vmss_list_instances_command_builder extends CommandBuilder<az_vmss_list_instances_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The expand expression to apply to the operation. Allowed values are 'instanceView'. */
    expand(value: string): az_vmss_list_instances_command_builder;
    /** The filter to apply to the operation. Allowed values are 'startswith(instanceView/statuses/code, 'PowerState') eq true', 'properties/latestModelApplied eq true', 'properties/latestModelApplied eq false'. */
    filter(value: string): az_vmss_list_instances_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_list_instances_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_list_instances_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_list_instances_command_builder;
    /** The list parameters. Allowed values are 'instanceView', 'instanceView/statuses'. */
    select(value: string): az_vmss_list_instances_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_list_instances_command_builder;
}
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
declare class az_vmss_list_skus_command_builder extends CommandBuilder<az_vmss_list_skus_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_list_skus_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_list_skus_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_list_skus_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_list_skus_command_builder;
}
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
declare class az_vmss_perform_maintenance_command_builder extends CommandBuilder<az_vmss_perform_maintenance_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_perform_maintenance_command_builder;
    /** Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances. If not provided, the action will be applied on the scaleset itself. */
    instanceIds(value: string): az_vmss_perform_maintenance_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_perform_maintenance_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_perform_maintenance_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_perform_maintenance_command_builder;
}
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
declare class az_vmss_reimage_command_builder extends CommandBuilder<az_vmss_reimage_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_reimage_command_builder;
    /** VM instance ID. If missing, reimage all instances. */
    instanceId(value: string): az_vmss_reimage_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_reimage_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_reimage_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_reimage_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_reimage_command_builder;
}
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
declare class az_vmss_restart_command_builder extends CommandBuilder<az_vmss_restart_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_restart_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_restart_command_builder;
    /** Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances. If not provided, the action will be applied on the scaleset itself. */
    instanceIds(value: string): az_vmss_restart_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_restart_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_restart_command_builder;
}
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
declare class az_vmss_scale_command_builder extends CommandBuilder<az_vmss_scale_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, newCapacity: string);
    /** Number of VMs in the VMSS. */
    newCapacity(value: string): az_vmss_scale_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_scale_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_scale_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_scale_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_scale_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_scale_command_builder;
}
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
declare class az_vmss_set_orchestration_service_state_command_builder extends CommandBuilder<az_vmss_set_orchestration_service_state_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, action: 'Resume' | 'Suspend', serviceName: 'AutomaticRepairs');
    /** The action to be performed. */
    action(value: 'Resume' | 'Suspend'): az_vmss_set_orchestration_service_state_command_builder;
    /** The name of the orchestration service. */
    serviceName(value: 'AutomaticRepairs'): az_vmss_set_orchestration_service_state_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_set_orchestration_service_state_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_set_orchestration_service_state_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_set_orchestration_service_state_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_set_orchestration_service_state_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_set_orchestration_service_state_command_builder;
}
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
declare class az_vmss_show_command_builder extends CommandBuilder<az_vmss_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_show_command_builder;
    /** VM instance ID. If missing, show the VMSS. */
    instanceId(value: string): az_vmss_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vmss_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_show_command_builder;
}
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
declare class az_vmss_simulate_eviction_command_builder extends CommandBuilder<az_vmss_simulate_eviction_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, instanceId: string, name: string, resourceGroup: string);
    /** The instance ID of the virtual machine. */
    instanceId(value: string): az_vmss_simulate_eviction_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_simulate_eviction_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_simulate_eviction_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_simulate_eviction_command_builder;
}
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
declare class az_vmss_start_command_builder extends CommandBuilder<az_vmss_start_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_start_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_start_command_builder;
    /** Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances. If not provided, the action will be applied on the scaleset itself. */
    instanceIds(value: string): az_vmss_start_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_start_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_start_command_builder;
}
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
declare class az_vmss_stop_command_builder extends CommandBuilder<az_vmss_stop_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_stop_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_stop_command_builder;
    /** Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances. If not provided, the action will be applied on the scaleset itself. */
    instanceIds(value: string): az_vmss_stop_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_stop_command_builder;
    /** Skip shutdown and power-off immediately. */
    skipShutdown(value: string): az_vmss_stop_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_stop_command_builder;
}
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
declare class az_vmss_update_command_builder extends CommandBuilder<az_vmss_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_vmss_update_command_builder;
    /** The amount of time (in minutes, between 30 and 90) for which automatic repairs are suspended due to a state change on VM. */
    automaticRepairsGracePeriod(value: string): az_vmss_update_command_builder;
    /** Enable automatic repairs. */
    enableAutomaticRepairs(value: boolean): az_vmss_update_command_builder;
    /** Enable terminate notification. */
    enableTerminateNotification(value: boolean): az_vmss_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_vmss_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_update_command_builder;
    /** Update the VM instance with this ID. If missing, Update the VMSS. */
    instanceId(value: string): az_vmss_update_command_builder;
    /** Specifies that the Windows image or disk was licensed on-premises. To enable Azure Hybrid Benefit for Windows Server, use 'Windows_Server'. To enable Multitenant Hosting Rights for Windows 10, use 'Windows_Client'. For more information see the Azure Windows VM online docs. */
    licenseType(value: 'None' | 'RHEL_BYOS' | 'SLES_BYOS' | 'Windows_Client' | 'Windows_Server'): az_vmss_update_command_builder;
    /** The maximum price (in US Dollars) you are willing to pay for a Spot VM/VMSS. -1 indicates that the Spot VM/VMSS should not be evicted for price reasons. */
    maxPrice(value: string): az_vmss_update_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_update_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_update_command_builder;
    /** The name or ID of the proximity placement group the VMSS should be associated with. */
    ppg(value: string): az_vmss_update_command_builder;
    /** Priority. Use 'Spot' to run short-lived workloads in a cost-effective way. 'Low' enum will be deprecated in the future. Please use 'Spot' to deploy Azure spot VM and/or VMSS. Default to Regular. */
    priority(value: 'Low' | 'Regular' | 'Spot'): az_vmss_update_command_builder;
    /** Protect the VM instance from scale-in operations. */
    protectFromScaleIn(value: boolean): az_vmss_update_command_builder;
    /** Protect the VM instance from scale set actions (including scale-in). */
    protectFromScaleSetActions(value: boolean): az_vmss_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_vmss_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_update_command_builder;
    /** Specify the scale-in policy (space delimited) that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled-in. */
    scaleInPolicy(value: 'Default' | 'NewestVM' | 'OldestVM'): az_vmss_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_vmss_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_update_command_builder;
    /** Length of time (in minutes, between 5 and 15) a notification to be sent to the VM on the instance metadata server till the VM gets deleted. */
    terminateNotificationTime(value: string): az_vmss_update_command_builder;
    /** Enables or disables the capability to have 1 or more managed data disks with UltraSSD_LRS storage account. */
    ultraSsdEnabled(value: boolean): az_vmss_update_command_builder;
}
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
declare class az_vmss_update_instances_command_builder extends CommandBuilder<az_vmss_update_instances_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, instanceIds: string, name: string, resourceGroup: string);
    /** Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances. */
    instanceIds(value: string): az_vmss_update_instances_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_update_instances_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_update_instances_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_update_instances_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_update_instances_command_builder;
}
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
declare class az_vmss_wait_command_builder extends CommandBuilder<az_vmss_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_vmss_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_vmss_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_vmss_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_vmss_wait_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_wait_command_builder;
    /** Wait on the VM instance with this ID. If missing, Wait on the VMSS. */
    instanceId(value: string): az_vmss_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_vmss_wait_command_builder;
    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_vmss_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_vmss_wait_command_builder;
}
export {};
