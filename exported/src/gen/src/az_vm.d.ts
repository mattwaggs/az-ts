import { CommandBuilder } from '../base';
import { az_vm_availability_set_convert_command_result } from './models/az_vm_availability_set_convert_command_result';
import { az_vm_availability_set_create_command_result } from './models/az_vm_availability_set_create_command_result';
import { az_vm_availability_set_delete_command_result } from './models/az_vm_availability_set_delete_command_result';
import { az_vm_availability_set_list_command_result } from './models/az_vm_availability_set_list_command_result';
import { az_vm_availability_set_list_sizes_command_result } from './models/az_vm_availability_set_list_sizes_command_result';
import { az_vm_availability_set_show_command_result } from './models/az_vm_availability_set_show_command_result';
import { az_vm_availability_set_update_command_result } from './models/az_vm_availability_set_update_command_result';
import { az_vm_boot_diagnostics_disable_command_result } from './models/az_vm_boot_diagnostics_disable_command_result';
import { az_vm_boot_diagnostics_enable_command_result } from './models/az_vm_boot_diagnostics_enable_command_result';
import { az_vm_boot_diagnostics_get_boot_log_command_result } from './models/az_vm_boot_diagnostics_get_boot_log_command_result';
import { az_vm_boot_diagnostics_get_boot_log_uris_command_result } from './models/az_vm_boot_diagnostics_get_boot_log_uris_command_result';
import { az_vm_diagnostics_get_default_config_command_result } from './models/az_vm_diagnostics_get_default_config_command_result';
import { az_vm_diagnostics_set_command_result } from './models/az_vm_diagnostics_set_command_result';
import { az_vm_disk_attach_command_result } from './models/az_vm_disk_attach_command_result';
import { az_vm_disk_detach_command_result } from './models/az_vm_disk_detach_command_result';
import { az_vm_encryption_disable_command_result } from './models/az_vm_encryption_disable_command_result';
import { az_vm_encryption_enable_command_result } from './models/az_vm_encryption_enable_command_result';
import { az_vm_encryption_show_command_result } from './models/az_vm_encryption_show_command_result';
import { az_vm_extension_image_list_command_result } from './models/az_vm_extension_image_list_command_result';
import { az_vm_extension_image_list_names_command_result } from './models/az_vm_extension_image_list_names_command_result';
import { az_vm_extension_image_list_versions_command_result } from './models/az_vm_extension_image_list_versions_command_result';
import { az_vm_extension_image_show_command_result } from './models/az_vm_extension_image_show_command_result';
import { az_vm_extension_delete_command_result } from './models/az_vm_extension_delete_command_result';
import { az_vm_extension_list_command_result } from './models/az_vm_extension_list_command_result';
import { az_vm_extension_set_command_result } from './models/az_vm_extension_set_command_result';
import { az_vm_extension_show_command_result } from './models/az_vm_extension_show_command_result';
import { az_vm_extension_wait_command_result } from './models/az_vm_extension_wait_command_result';
import { az_vm_host_group_create_command_result } from './models/az_vm_host_group_create_command_result';
import { az_vm_host_group_delete_command_result } from './models/az_vm_host_group_delete_command_result';
import { az_vm_host_group_get_instance_view_command_result } from './models/az_vm_host_group_get_instance_view_command_result';
import { az_vm_host_group_list_command_result } from './models/az_vm_host_group_list_command_result';
import { az_vm_host_group_show_command_result } from './models/az_vm_host_group_show_command_result';
import { az_vm_host_group_update_command_result } from './models/az_vm_host_group_update_command_result';
import { az_vm_host_create_command_result } from './models/az_vm_host_create_command_result';
import { az_vm_host_delete_command_result } from './models/az_vm_host_delete_command_result';
import { az_vm_host_get_instance_view_command_result } from './models/az_vm_host_get_instance_view_command_result';
import { az_vm_host_list_command_result } from './models/az_vm_host_list_command_result';
import { az_vm_host_show_command_result } from './models/az_vm_host_show_command_result';
import { az_vm_host_update_command_result } from './models/az_vm_host_update_command_result';
import { az_vm_identity_assign_command_result } from './models/az_vm_identity_assign_command_result';
import { az_vm_identity_remove_command_result } from './models/az_vm_identity_remove_command_result';
import { az_vm_identity_show_command_result } from './models/az_vm_identity_show_command_result';
import { az_vm_image_terms_accept_command_result } from './models/az_vm_image_terms_accept_command_result';
import { az_vm_image_terms_cancel_command_result } from './models/az_vm_image_terms_cancel_command_result';
import { az_vm_image_terms_show_command_result } from './models/az_vm_image_terms_show_command_result';
import { az_vm_image_accept_terms_command_result } from './models/az_vm_image_accept_terms_command_result';
import { az_vm_image_list_command_result } from './models/az_vm_image_list_command_result';
import { az_vm_image_list_offers_command_result } from './models/az_vm_image_list_offers_command_result';
import { az_vm_image_list_publishers_command_result } from './models/az_vm_image_list_publishers_command_result';
import { az_vm_image_list_skus_command_result } from './models/az_vm_image_list_skus_command_result';
import { az_vm_image_show_command_result } from './models/az_vm_image_show_command_result';
import { az_vm_monitor_log_show_command_result } from './models/az_vm_monitor_log_show_command_result';
import { az_vm_monitor_metrics_list_definitions_command_result } from './models/az_vm_monitor_metrics_list_definitions_command_result';
import { az_vm_monitor_metrics_tail_command_result } from './models/az_vm_monitor_metrics_tail_command_result';
import { az_vm_nic_add_command_result } from './models/az_vm_nic_add_command_result';
import { az_vm_nic_list_command_result } from './models/az_vm_nic_list_command_result';
import { az_vm_nic_remove_command_result } from './models/az_vm_nic_remove_command_result';
import { az_vm_nic_set_command_result } from './models/az_vm_nic_set_command_result';
import { az_vm_nic_show_command_result } from './models/az_vm_nic_show_command_result';
import { az_vm_run_command_invoke_command_result } from './models/az_vm_run_command_invoke_command_result';
import { az_vm_run_command_list_command_result } from './models/az_vm_run_command_list_command_result';
import { az_vm_run_command_show_command_result } from './models/az_vm_run_command_show_command_result';
import { az_vm_secret_add_command_result } from './models/az_vm_secret_add_command_result';
import { az_vm_secret_format_command_result } from './models/az_vm_secret_format_command_result';
import { az_vm_secret_list_command_result } from './models/az_vm_secret_list_command_result';
import { az_vm_secret_remove_command_result } from './models/az_vm_secret_remove_command_result';
import { az_vm_unmanaged_disk_attach_command_result } from './models/az_vm_unmanaged_disk_attach_command_result';
import { az_vm_unmanaged_disk_detach_command_result } from './models/az_vm_unmanaged_disk_detach_command_result';
import { az_vm_unmanaged_disk_list_command_result } from './models/az_vm_unmanaged_disk_list_command_result';
import { az_vm_user_delete_command_result } from './models/az_vm_user_delete_command_result';
import { az_vm_user_reset_ssh_command_result } from './models/az_vm_user_reset_ssh_command_result';
import { az_vm_user_update_command_result } from './models/az_vm_user_update_command_result';
import { az_vm_assess_patches_command_result } from './models/az_vm_assess_patches_command_result';
import { az_vm_auto_shutdown_command_result } from './models/az_vm_auto_shutdown_command_result';
import { az_vm_capture_command_result } from './models/az_vm_capture_command_result';
import { az_vm_convert_command_result } from './models/az_vm_convert_command_result';
import { az_vm_create_command_result } from './models/az_vm_create_command_result';
import { az_vm_deallocate_command_result } from './models/az_vm_deallocate_command_result';
import { az_vm_delete_command_result } from './models/az_vm_delete_command_result';
import { az_vm_generalize_command_result } from './models/az_vm_generalize_command_result';
import { az_vm_get_instance_view_command_result } from './models/az_vm_get_instance_view_command_result';
import { az_vm_list_command_result } from './models/az_vm_list_command_result';
import { az_vm_list_ip_addresses_command_result } from './models/az_vm_list_ip_addresses_command_result';
import { az_vm_list_sizes_command_result } from './models/az_vm_list_sizes_command_result';
import { az_vm_list_skus_command_result } from './models/az_vm_list_skus_command_result';
import { az_vm_list_usage_command_result } from './models/az_vm_list_usage_command_result';
import { az_vm_list_vm_resize_options_command_result } from './models/az_vm_list_vm_resize_options_command_result';
import { az_vm_open_port_command_result } from './models/az_vm_open_port_command_result';
import { az_vm_perform_maintenance_command_result } from './models/az_vm_perform_maintenance_command_result';
import { az_vm_reapply_command_result } from './models/az_vm_reapply_command_result';
import { az_vm_redeploy_command_result } from './models/az_vm_redeploy_command_result';
import { az_vm_resize_command_result } from './models/az_vm_resize_command_result';
import { az_vm_restart_command_result } from './models/az_vm_restart_command_result';
import { az_vm_show_command_result } from './models/az_vm_show_command_result';
import { az_vm_simulate_eviction_command_result } from './models/az_vm_simulate_eviction_command_result';
import { az_vm_start_command_result } from './models/az_vm_start_command_result';
import { az_vm_stop_command_result } from './models/az_vm_stop_command_result';
import { az_vm_update_command_result } from './models/az_vm_update_command_result';
import { az_vm_wait_command_result } from './models/az_vm_wait_command_result';
/** Group resources into availability sets. */
export declare class az_vm_availability_set {
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
    static convert(): az_vm_availability_set_convert_command_builder;
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
    static create(name: string, resourceGroup: string): az_vm_availability_set_create_command_builder;
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
    static delete(): az_vm_availability_set_delete_command_builder;
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
    static list(): az_vm_availability_set_list_command_builder;
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
    static list_sizes(): az_vm_availability_set_list_sizes_command_builder;
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
    static show(): az_vm_availability_set_show_command_builder;
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
    static update(): az_vm_availability_set_update_command_builder;
}
/** Troubleshoot the startup of an Azure Virtual Machine. */
export declare class az_vm_boot_diagnostics {
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
    static disable(): az_vm_boot_diagnostics_disable_command_builder;
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
    static enable(): az_vm_boot_diagnostics_enable_command_builder;
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
    static get_boot_log(): az_vm_boot_diagnostics_get_boot_log_command_builder;
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
    static get_boot_log_uris(): az_vm_boot_diagnostics_get_boot_log_uris_command_builder;
}
/** Configure the Azure Virtual Machine diagnostics extension. */
export declare class az_vm_diagnostics {
    /**
     * Get the default configuration settings for a VM.
     *
     * Syntax:
     * ```
     * az vm diagnostics get-default-config [--is-windows-os]
     *                                      [--subscription]
     * ```
     */
    static get_default_config(): az_vm_diagnostics_get_default_config_command_builder;
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
    static set(settings: string): az_vm_diagnostics_set_command_builder;
}
/** Manage the managed data disks attached to a VM. */
export declare class az_vm_disk {
    /**
     * Attach a managed persistent disk to a VM. Please note that --ids only supports one disk.
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
    static attach(vmName: string): az_vm_disk_attach_command_builder;
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
    static detach(name: string, resourceGroup: string, vmName: string): az_vm_disk_detach_command_builder;
}
/** Manage encryption of VM disks. */
export declare class az_vm_encryption {
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
    static disable(): az_vm_encryption_disable_command_builder;
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
    static enable(diskEncryptionKeyvault: string): az_vm_encryption_enable_command_builder;
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
    static show(): az_vm_encryption_show_command_builder;
}
/** Find the available VM extensions for a subscription and region. */
export declare class az_vm_extension_image {
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
    static list(): az_vm_extension_image_list_command_builder;
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
    static list_names(location: string, publisher: string): az_vm_extension_image_list_names_command_builder;
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
    static list_versions(location: string, name: string, publisher: string): az_vm_extension_image_list_versions_command_builder;
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
    static show(location: string, name: string, publisher: string, version: string): az_vm_extension_image_show_command_builder;
}
/** Manage extensions on VMs. */
export declare class az_vm_extension {
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
    static delete(): az_vm_extension_delete_command_builder;
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
    static list(resourceGroup: string, vmName: string): az_vm_extension_list_command_builder;
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
    static set(name: string, publisher: string): az_vm_extension_set_command_builder;
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
    static show(): az_vm_extension_show_command_builder;
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
    static wait(): az_vm_extension_wait_command_builder;
}
/** Manage Dedicated Host Groups. */
export declare class az_vm_host_group {
    /**
     * Create a dedicated host group.
     *
     * Syntax:
     * ```
     * az vm host group create --name
     *                         --platform-fault-domain-count
     *                         --resource-group
     *                         [--automatic-placement {false, true}]
     *                         [--location]
     *                         [--subscription]
     *                         [--tags]
     *                         [--zone {1, 2, 3}]
     * ```
     *
     * @param {string} name Name of the Dedicated Host Group.
     * @param {string} platformFaultDomainCount Number of fault domains that the host group can span.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(name: string, platformFaultDomainCount: string, resourceGroup: string): az_vm_host_group_create_command_builder;
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
    static delete(): az_vm_host_group_delete_command_builder;
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
    static get_instance_view(): az_vm_host_group_get_instance_view_command_builder;
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
    static list(): az_vm_host_group_list_command_builder;
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
    static show(): az_vm_host_group_show_command_builder;
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
    static update(): az_vm_host_group_update_command_builder;
}
/** Manage Dedicated Hosts for Virtual Machines. */
export declare class az_vm_host {
    /**
     * Create a dedicated host.
     *
     * Syntax:
     * ```
     * az vm host create --host-group
     *                   --name
     *                   --resource-group
     *                   --sku
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
     * @param {string} sku SKU of the dedicated host. Available SKUs: <a href="https://azure.microsoft.com/en-us/pricing/details/virtual-machines/dedicated-host/">https://azure.microsoft.com/en-us/pricing/details/virtual-machines/dedicated-host/</a>.
     */
    static create(hostGroup: string, name: string, resourceGroup: string, sku: string): az_vm_host_create_command_builder;
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
    static delete(): az_vm_host_delete_command_builder;
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
    static get_instance_view(): az_vm_host_get_instance_view_command_builder;
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
    static list(hostGroup: string, resourceGroup: string): az_vm_host_list_command_builder;
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
    static show(): az_vm_host_show_command_builder;
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
    static update(): az_vm_host_update_command_builder;
}
/** Manage service identities of a VM. */
export declare class az_vm_identity {
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
    static assign(): az_vm_identity_assign_command_builder;
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
    static remove(): az_vm_identity_remove_command_builder;
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
    static show(): az_vm_identity_show_command_builder;
}
/** Manage Azure Marketplace image terms. */
export declare class az_vm_image_terms {
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
    static accept(): az_vm_image_terms_accept_command_builder;
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
    static cancel(): az_vm_image_terms_cancel_command_builder;
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
    static show(): az_vm_image_terms_show_command_builder;
}
/** Information on available virtual machine images. */
export declare class az_vm_image {
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
    static accept_terms(): az_vm_image_accept_terms_command_builder;
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
    static list(): az_vm_image_list_command_builder;
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
    static list_offers(location: string, publisher: string): az_vm_image_list_offers_command_builder;
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
    static list_publishers(location: string): az_vm_image_list_publishers_command_builder;
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
    static list_skus(location: string, offer: string, publisher: string): az_vm_image_list_skus_command_builder;
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
    static show(): az_vm_image_show_command_builder;
}
/** Manage log analytics workspace for a vm. */
export declare class az_vm_monitor_log {
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
    static show(analyticsQuery: string): az_vm_monitor_log_show_command_builder;
}
/** Manage metrics for a vm. */
export declare class az_vm_monitor_metrics {
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
    static list_definitions(name: string, resourceGroup: string): az_vm_monitor_metrics_list_definitions_command_builder;
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
    static tail(name: string, resourceGroup: string): az_vm_monitor_metrics_tail_command_builder;
}
/** Manage monitor aspect for a vm. */
export declare class az_vm_monitor {
}
/** Manage network interfaces. See also `az network nic`. */
export declare class az_vm_nic {
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
    static add(nics: string, resourceGroup: string, vmName: string): az_vm_nic_add_command_builder;
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
    static list(resourceGroup: string, vmName: string): az_vm_nic_list_command_builder;
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
    static remove(nics: string, resourceGroup: string, vmName: string): az_vm_nic_remove_command_builder;
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
    static set(nics: string, resourceGroup: string, vmName: string): az_vm_nic_set_command_builder;
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
    static show(nic: string, resourceGroup: string, vmName: string): az_vm_nic_show_command_builder;
}
/** Manage run commands on a Virtual Machine. */
export declare class az_vm_run_command {
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
    static invoke(commandId: string): az_vm_run_command_invoke_command_builder;
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
    static list(location: string): az_vm_run_command_list_command_builder;
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
    static show(commandId: string, location: string): az_vm_run_command_show_command_builder;
}
/** Manage VM secrets. */
export declare class az_vm_secret {
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
    static add(certificate: string, keyvault: string): az_vm_secret_add_command_builder;
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
    static format(secrets: string): az_vm_secret_format_command_builder;
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
    static list(name: string, resourceGroup: string): az_vm_secret_list_command_builder;
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
    static remove(keyvault: string): az_vm_secret_remove_command_builder;
}
/** Manage the unmanaged data disks attached to a VM. */
export declare class az_vm_unmanaged_disk {
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
    static attach(resourceGroup: string, vmName: string): az_vm_unmanaged_disk_attach_command_builder;
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
    static detach(name: string, resourceGroup: string, vmName: string): az_vm_unmanaged_disk_detach_command_builder;
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
    static list(vmName: string, resourceGroup: string): az_vm_unmanaged_disk_list_command_builder;
}
/** Manage user accounts for a VM. */
export declare class az_vm_user {
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
    static delete(username: string): az_vm_user_delete_command_builder;
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
    static reset_ssh(): az_vm_user_reset_ssh_command_builder;
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
    static update(username: string): az_vm_user_update_command_builder;
}
/** Manage Linux or Windows virtual machines. */
export declare class az_vm {
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
    static assess_patches(): az_vm_assess_patches_command_builder;
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
    static auto_shutdown(): az_vm_auto_shutdown_command_builder;
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
    static capture(vhdNamePrefix: string): az_vm_capture_command_builder;
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
    static convert(): az_vm_convert_command_builder;
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
    static create(name: string, resourceGroup: string): az_vm_create_command_builder;
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
    static deallocate(): az_vm_deallocate_command_builder;
    /**
     * Delete a VM.
     *
     * Syntax:
     * ```
     * az vm delete [--force-deletion]
     *              [--ids]
     *              [--name]
     *              [--no-wait]
     *              [--resource-group]
     *              [--subscription]
     *              [--yes]
     * ```
     */
    static delete(): az_vm_delete_command_builder;
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
    static generalize(): az_vm_generalize_command_builder;
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
    static get_instance_view(): az_vm_get_instance_view_command_builder;
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
    static list(): az_vm_list_command_builder;
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
    static list_ip_addresses(): az_vm_list_ip_addresses_command_builder;
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
    static list_sizes(location: string): az_vm_list_sizes_command_builder;
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
    static list_skus(): az_vm_list_skus_command_builder;
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
    static list_usage(location: string): az_vm_list_usage_command_builder;
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
    static list_vm_resize_options(): az_vm_list_vm_resize_options_command_builder;
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
    static open_port(port: string): az_vm_open_port_command_builder;
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
    static perform_maintenance(): az_vm_perform_maintenance_command_builder;
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
    static reapply(): az_vm_reapply_command_builder;
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
    static redeploy(): az_vm_redeploy_command_builder;
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
    static resize(size: string): az_vm_resize_command_builder;
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
    static restart(): az_vm_restart_command_builder;
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
    static show(): az_vm_show_command_builder;
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
    static simulate_eviction(): az_vm_simulate_eviction_command_builder;
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
    static start(): az_vm_start_command_builder;
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
    static stop(): az_vm_stop_command_builder;
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
    static update(): az_vm_update_command_builder;
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
    static wait(): az_vm_wait_command_builder;
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
declare class az_vm_availability_set_convert_command_builder extends CommandBuilder<az_vm_availability_set_convert_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_availability_set_convert_command_builder;
    /** Name of the availability set. */
    name(value: string): az_vm_availability_set_convert_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_availability_set_convert_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_availability_set_convert_command_builder;
}
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
declare class az_vm_availability_set_create_command_builder extends CommandBuilder<az_vm_availability_set_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the availability set. */
    name(value: string): az_vm_availability_set_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_availability_set_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_availability_set_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_availability_set_create_command_builder;
    /** Fault Domain count. */
    platformFaultDomainCount(value: string): az_vm_availability_set_create_command_builder;
    /** Update Domain count. If unspecified, the server will pick the most optimal number like 5. */
    platformUpdateDomainCount(value: string): az_vm_availability_set_create_command_builder;
    /** The name or ID of the proximity placement group the availability set should be associated with. */
    ppg(value: string): az_vm_availability_set_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_availability_set_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_vm_availability_set_create_command_builder;
    /** Contained VMs should use unmanaged disks. */
    unmanaged(value: string): az_vm_availability_set_create_command_builder;
    /** Generate and validate the ARM template without creating any resources. */
    validate(value: string): az_vm_availability_set_create_command_builder;
}
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
declare class az_vm_availability_set_delete_command_builder extends CommandBuilder<az_vm_availability_set_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_availability_set_delete_command_builder;
    /** Name of the availability set. */
    name(value: string): az_vm_availability_set_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_availability_set_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_availability_set_delete_command_builder;
}
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
declare class az_vm_availability_set_list_command_builder extends CommandBuilder<az_vm_availability_set_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_availability_set_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_availability_set_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_availability_set_list_command_builder;
}
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
declare class az_vm_availability_set_list_sizes_command_builder extends CommandBuilder<az_vm_availability_set_list_sizes_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_availability_set_list_sizes_command_builder;
    /** Name of the availability set. */
    name(value: string): az_vm_availability_set_list_sizes_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_availability_set_list_sizes_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_availability_set_list_sizes_command_builder;
}
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
declare class az_vm_availability_set_show_command_builder extends CommandBuilder<az_vm_availability_set_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_availability_set_show_command_builder;
    /** Name of the availability set. */
    name(value: string): az_vm_availability_set_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_availability_set_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_availability_set_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_availability_set_show_command_builder;
}
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
declare class az_vm_availability_set_update_command_builder extends CommandBuilder<az_vm_availability_set_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_vm_availability_set_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_vm_availability_set_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_availability_set_update_command_builder;
    /** Name of the availability set. */
    name(value: string): az_vm_availability_set_update_command_builder;
    /** The name or ID of the proximity placement group the availability set should be associated with. */
    ppg(value: string): az_vm_availability_set_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_vm_availability_set_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_availability_set_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_vm_availability_set_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_availability_set_update_command_builder;
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
declare class az_vm_boot_diagnostics_disable_command_builder extends CommandBuilder<az_vm_boot_diagnostics_disable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_boot_diagnostics_disable_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_boot_diagnostics_disable_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_boot_diagnostics_disable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_boot_diagnostics_disable_command_builder;
}
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
declare class az_vm_boot_diagnostics_enable_command_builder extends CommandBuilder<az_vm_boot_diagnostics_enable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_boot_diagnostics_enable_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_boot_diagnostics_enable_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_boot_diagnostics_enable_command_builder;
    /** Name or URI of a storage account (e.g. <a href="https://your_storage_account_name.blob.core.windows.net/">https://your_storage_account_name.blob.core.windows.net/</a>). If it's not specified, managed storage will be used. */
    storage(value: string): az_vm_boot_diagnostics_enable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_boot_diagnostics_enable_command_builder;
}
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
declare class az_vm_boot_diagnostics_get_boot_log_command_builder extends CommandBuilder<az_vm_boot_diagnostics_get_boot_log_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_boot_diagnostics_get_boot_log_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_boot_diagnostics_get_boot_log_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_boot_diagnostics_get_boot_log_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_boot_diagnostics_get_boot_log_command_builder;
}
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
declare class az_vm_boot_diagnostics_get_boot_log_uris_command_builder extends CommandBuilder<az_vm_boot_diagnostics_get_boot_log_uris_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Expiration duration in minutes for the SAS URIs with a value between 1 to 1440 minutes. If not specified, SAS URIs will be generated with a default expiration duration of 120 minutes. */
    expire(value: string): az_vm_boot_diagnostics_get_boot_log_uris_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_boot_diagnostics_get_boot_log_uris_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_boot_diagnostics_get_boot_log_uris_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_boot_diagnostics_get_boot_log_uris_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_boot_diagnostics_get_boot_log_uris_command_builder;
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
declare class az_vm_diagnostics_get_default_config_command_builder extends CommandBuilder<az_vm_diagnostics_get_default_config_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** For Windows VMs. */
    isWindowsOs(value: string): az_vm_diagnostics_get_default_config_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_diagnostics_get_default_config_command_builder;
}
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
declare class az_vm_diagnostics_set_command_builder extends CommandBuilder<az_vm_diagnostics_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, settings: string);
    /** Json string or a file path, which defines data to be collected. */
    settings(value: string): az_vm_diagnostics_set_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_diagnostics_set_command_builder;
    /** If set, the extension service will not automatically pick or upgrade to the latest minor version, even if the extension is redeployed. */
    noAutoUpgrade(value: boolean): az_vm_diagnostics_set_command_builder;
    /** Json string or a file path containing private configurations such as storage account keys, etc. */
    protectedSettings(value: string): az_vm_diagnostics_set_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_diagnostics_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_diagnostics_set_command_builder;
    /** Version of the diagnostics extension. Will use the latest if not specfied. */
    version(value: string): az_vm_diagnostics_set_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_diagnostics_set_command_builder;
}
/**
 * Attach a managed persistent disk to a VM. Please note that --ids only supports one disk.
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
declare class az_vm_disk_attach_command_builder extends CommandBuilder<az_vm_disk_attach_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, vmName: string);
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_disk_attach_command_builder;
    /** Disk caching policy. */
    caching(value: 'None' | 'ReadOnly' | 'ReadWrite'): az_vm_disk_attach_command_builder;
    /** Enable write accelerator. */
    enableWriteAccelerator(value: string): az_vm_disk_attach_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_disk_attach_command_builder;
    /** 0-based logical unit number (LUN). Max value depends on the Virtual Machine size. */
    lun(value: string): az_vm_disk_attach_command_builder;
    /** The name or ID of the managed disk. */
    name(value: string): az_vm_disk_attach_command_builder;
    /** Create a new disk. */
    new(value: string): az_vm_disk_attach_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_disk_attach_command_builder;
    /** Size in GB. Max size: 4095 GB (certain preview disks can be larger). */
    sizeGb(value: string): az_vm_disk_attach_command_builder;
    /** Underlying storage SKU. */
    sku(value: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'UltraSSD_LRS'): az_vm_disk_attach_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_disk_attach_command_builder;
}
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
declare class az_vm_disk_detach_command_builder extends CommandBuilder<az_vm_disk_detach_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, vmName: string);
    /** The data disk name. */
    name(value: string): az_vm_disk_detach_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_disk_detach_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_disk_detach_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_disk_detach_command_builder;
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
declare class az_vm_encryption_disable_command_builder extends CommandBuilder<az_vm_encryption_disable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Continue by ignoring client side validation errors. */
    force(value: string): az_vm_encryption_disable_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_encryption_disable_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_encryption_disable_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_encryption_disable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_encryption_disable_command_builder;
    /** Type of volume that the encryption operation is performed on. */
    volumeType(value: 'ALL' | 'DATA' | 'OS'): az_vm_encryption_disable_command_builder;
}
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
declare class az_vm_encryption_enable_command_builder extends CommandBuilder<az_vm_encryption_enable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, diskEncryptionKeyvault: string);
    /** Name or ID of the key vault where the generated encryption key will be placed. */
    diskEncryptionKeyvault(value: string): az_vm_encryption_enable_command_builder;
    /** Thumbprint of the AAD app certificate with permissions to write secrets to the key vault. */
    aadClientCertThumbprint(value: string): az_vm_encryption_enable_command_builder;
    /** Client ID of an AAD app with permissions to write secrets to the key vault. */
    aadClientId(value: string): az_vm_encryption_enable_command_builder;
    /** Client secret of the AAD app with permissions to write secrets to the key vault. */
    aadClientSecret(value: string): az_vm_encryption_enable_command_builder;
    /** Encrypts-formats data disks instead of encrypting them. Encrypt-formatting is a lot faster than in-place encryption but wipes out the partition getting encrypt-formatted. */
    encryptFormatAll(value: string): az_vm_encryption_enable_command_builder;
    /** Continue by ignoring client side validation errors. */
    force(value: string): az_vm_encryption_enable_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_encryption_enable_command_builder;
    /** */
    keyEncryptionAlgorithm(value: string): az_vm_encryption_enable_command_builder;
    /** Key vault key name or URL used to encrypt the disk encryption key. */
    keyEncryptionKey(value: string): az_vm_encryption_enable_command_builder;
    /** Name or ID of the key vault containing the key encryption key used to encrypt the disk encryption key. If missing, CLI will use `--disk-encryption-keyvault`. */
    keyEncryptionKeyvault(value: string): az_vm_encryption_enable_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_encryption_enable_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_encryption_enable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_encryption_enable_command_builder;
    /** Type of volume that the encryption operation is performed on. */
    volumeType(value: 'ALL' | 'DATA' | 'OS'): az_vm_encryption_enable_command_builder;
}
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
declare class az_vm_encryption_show_command_builder extends CommandBuilder<az_vm_encryption_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_encryption_show_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_encryption_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_encryption_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_encryption_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_encryption_show_command_builder;
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
declare class az_vm_extension_image_list_command_builder extends CommandBuilder<az_vm_extension_image_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Show the latest version only. */
    latest(value: string): az_vm_extension_image_list_command_builder;
    /** Image location. */
    location(value: string): az_vm_extension_image_list_command_builder;
    /** Image name. */
    name(value: string): az_vm_extension_image_list_command_builder;
    /** Image publisher name. */
    publisher(value: string): az_vm_extension_image_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_extension_image_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_extension_image_list_command_builder;
    /** Extension version. */
    version(value: string): az_vm_extension_image_list_command_builder;
}
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
declare class az_vm_extension_image_list_names_command_builder extends CommandBuilder<az_vm_extension_image_list_names_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string, publisher: string);
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_extension_image_list_names_command_builder;
    /** Image publisher name. */
    publisher(value: string): az_vm_extension_image_list_names_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_extension_image_list_names_command_builder;
}
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
declare class az_vm_extension_image_list_versions_command_builder extends CommandBuilder<az_vm_extension_image_list_versions_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string, name: string, publisher: string);
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_extension_image_list_versions_command_builder;
    /** Name of the extension. */
    name(value: string): az_vm_extension_image_list_versions_command_builder;
    /** Image publisher name. */
    publisher(value: string): az_vm_extension_image_list_versions_command_builder;
    /** The filter to apply on the operation. */
    filter(value: string): az_vm_extension_image_list_versions_command_builder;
    /** The $orderby odata query option. */
    orderby(value: string): az_vm_extension_image_list_versions_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_extension_image_list_versions_command_builder;
    /** The $top odata query option. */
    top(value: string): az_vm_extension_image_list_versions_command_builder;
}
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
declare class az_vm_extension_image_show_command_builder extends CommandBuilder<az_vm_extension_image_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string, name: string, publisher: string, version: string);
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_extension_image_show_command_builder;
    /** Name of the extension. */
    name(value: string): az_vm_extension_image_show_command_builder;
    /** Image publisher name. */
    publisher(value: string): az_vm_extension_image_show_command_builder;
    /** Extension version. */
    version(value: string): az_vm_extension_image_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_extension_image_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_extension_image_show_command_builder;
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
declare class az_vm_extension_delete_command_builder extends CommandBuilder<az_vm_extension_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_extension_delete_command_builder;
    /** Name of the extension. */
    name(value: string): az_vm_extension_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_extension_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_extension_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_extension_delete_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_extension_delete_command_builder;
}
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
declare class az_vm_extension_list_command_builder extends CommandBuilder<az_vm_extension_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, vmName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_extension_list_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_extension_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_extension_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_extension_list_command_builder;
}
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
declare class az_vm_extension_set_command_builder extends CommandBuilder<az_vm_extension_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, publisher: string);
    /** Name of the extension. */
    name(value: string): az_vm_extension_set_command_builder;
    /** The name of the extension publisher. */
    publisher(value: string): az_vm_extension_set_command_builder;
    /** Name of extension instance, which can be customized. Default: name of the extension. */
    extensionInstanceName(value: string): az_vm_extension_set_command_builder;
    /** Force to update even if the extension configuration has not changed. */
    forceUpdate(value: string): az_vm_extension_set_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_extension_set_command_builder;
    /** If set, the extension service will not automatically pick or upgrade to the latest minor version, even if the extension is redeployed. */
    noAutoUpgrade(value: boolean): az_vm_extension_set_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_extension_set_command_builder;
    /** Protected settings in JSON format for sensitive information like credentials. A JSON file path is also accepted. */
    protectedSettings(value: string): az_vm_extension_set_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_extension_set_command_builder;
    /** Extension settings in JSON format. A JSON file path is also accepted. */
    settings(value: string): az_vm_extension_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_extension_set_command_builder;
    /** The version of the extension. To pin extension version to this value, please specify --no-auto-upgrade. */
    version(value: string): az_vm_extension_set_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_extension_set_command_builder;
}
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
declare class az_vm_extension_show_command_builder extends CommandBuilder<az_vm_extension_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The expand expression to apply on the operation. */
    expand(value: string): az_vm_extension_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_extension_show_command_builder;
    /** Name of the extension. */
    name(value: string): az_vm_extension_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_extension_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_extension_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_extension_show_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_extension_show_command_builder;
}
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
declare class az_vm_extension_wait_command_builder extends CommandBuilder<az_vm_extension_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_vm_extension_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_vm_extension_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_vm_extension_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_vm_extension_wait_command_builder;
    /** The expand expression to apply on the operation. */
    expand(value: string): az_vm_extension_wait_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_extension_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_vm_extension_wait_command_builder;
    /** Name of the extension. */
    name(value: string): az_vm_extension_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_extension_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_extension_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_vm_extension_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_vm_extension_wait_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_extension_wait_command_builder;
}
/**
 * Create a dedicated host group.
 *
 * Syntax:
 * ```
 * az vm host group create --name
 *                         --platform-fault-domain-count
 *                         --resource-group
 *                         [--automatic-placement {false, true}]
 *                         [--location]
 *                         [--subscription]
 *                         [--tags]
 *                         [--zone {1, 2, 3}]
 * ```
 *
 * @param {string} name Name of the Dedicated Host Group.
 * @param {string} platformFaultDomainCount Number of fault domains that the host group can span.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_vm_host_group_create_command_builder extends CommandBuilder<az_vm_host_group_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, platformFaultDomainCount: string, resourceGroup: string);
    /** Name of the Dedicated Host Group. */
    name(value: string): az_vm_host_group_create_command_builder;
    /** Number of fault domains that the host group can span. */
    platformFaultDomainCount(value: string): az_vm_host_group_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_host_group_create_command_builder;
    /** Specify whether virtual machines or virtual machine scale sets can be placed automatically on the dedicated host group. Automatic placement means resources are allocated on dedicated hosts, that are chosen by Azure, under the dedicated host group. The value is defaulted to true when not provided. */
    automaticPlacement(value: boolean): az_vm_host_group_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. Otherwise, location will default to the resource group's location. */
    location(value: string): az_vm_host_group_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_host_group_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_vm_host_group_create_command_builder;
    /** Availability zone into which to provision the resource. */
    zone(value: '1' | '2' | '3'): az_vm_host_group_create_command_builder;
}
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
declare class az_vm_host_group_delete_command_builder extends CommandBuilder<az_vm_host_group_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_host_group_delete_command_builder;
    /** Name of the Dedicated Host Group. */
    name(value: string): az_vm_host_group_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_host_group_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_host_group_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_vm_host_group_delete_command_builder;
}
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
declare class az_vm_host_group_get_instance_view_command_builder extends CommandBuilder<az_vm_host_group_get_instance_view_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_host_group_get_instance_view_command_builder;
    /** Name of the Dedicated Host Group. */
    name(value: string): az_vm_host_group_get_instance_view_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_host_group_get_instance_view_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_host_group_get_instance_view_command_builder;
}
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
declare class az_vm_host_group_list_command_builder extends CommandBuilder<az_vm_host_group_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_host_group_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_host_group_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_host_group_list_command_builder;
}
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
declare class az_vm_host_group_show_command_builder extends CommandBuilder<az_vm_host_group_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_host_group_show_command_builder;
    /** Name of the Dedicated Host Group. */
    name(value: string): az_vm_host_group_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_host_group_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_host_group_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_host_group_show_command_builder;
}
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
declare class az_vm_host_group_update_command_builder extends CommandBuilder<az_vm_host_group_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_vm_host_group_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_vm_host_group_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_host_group_update_command_builder;
    /** Name of the Dedicated Host Group. */
    name(value: string): az_vm_host_group_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_vm_host_group_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_host_group_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_vm_host_group_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_host_group_update_command_builder;
}
/**
 * Create a dedicated host.
 *
 * Syntax:
 * ```
 * az vm host create --host-group
 *                   --name
 *                   --resource-group
 *                   --sku
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
 * @param {string} sku SKU of the dedicated host. Available SKUs: <a href="https://azure.microsoft.com/en-us/pricing/details/virtual-machines/dedicated-host/">https://azure.microsoft.com/en-us/pricing/details/virtual-machines/dedicated-host/</a>.
 */
declare class az_vm_host_create_command_builder extends CommandBuilder<az_vm_host_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, hostGroup: string, name: string, resourceGroup: string, sku: string);
    /** Name of the Dedicated Host Group. */
    hostGroup(value: string): az_vm_host_create_command_builder;
    /** Name of the Dedicated Host. */
    name(value: string): az_vm_host_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_host_create_command_builder;
    /** SKU of the dedicated host. Available SKUs: <a href="https://azure.microsoft.com/en-us/pricing/details/virtual-machines/dedicated-host/">https://azure.microsoft.com/en-us/pricing/details/virtual-machines/dedicated-host/</a>. */
    sku(value: string): az_vm_host_create_command_builder;
    /** Replace the host automatically if a failure occurs. */
    autoReplace(value: boolean): az_vm_host_create_command_builder;
    /** The software license type that will be applied to the VMs deployed on the dedicated host. */
    licenseType(value: 'None' | 'Windows_Server_Hybrid' | 'Windows_Server_Perpetual'): az_vm_host_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. Otherwise, location will default to the resource group's location. */
    location(value: string): az_vm_host_create_command_builder;
    /** Fault domain of the host within a group. Allowed values: 0, 1, 2. */
    platformFaultDomain(value: string): az_vm_host_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_host_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_vm_host_create_command_builder;
}
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
declare class az_vm_host_delete_command_builder extends CommandBuilder<az_vm_host_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of the Dedicated Host Group. */
    hostGroup(value: string): az_vm_host_delete_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_host_delete_command_builder;
    /** Name of the Dedicated Host. */
    name(value: string): az_vm_host_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_host_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_host_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_vm_host_delete_command_builder;
}
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
declare class az_vm_host_get_instance_view_command_builder extends CommandBuilder<az_vm_host_get_instance_view_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of the Dedicated Host Group. */
    hostGroup(value: string): az_vm_host_get_instance_view_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_host_get_instance_view_command_builder;
    /** Name of the Dedicated Host. */
    name(value: string): az_vm_host_get_instance_view_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_host_get_instance_view_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_host_get_instance_view_command_builder;
}
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
declare class az_vm_host_list_command_builder extends CommandBuilder<az_vm_host_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, hostGroup: string, resourceGroup: string);
    /** Name of the Dedicated Host Group. */
    hostGroup(value: string): az_vm_host_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_host_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_host_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_host_list_command_builder;
}
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
declare class az_vm_host_show_command_builder extends CommandBuilder<az_vm_host_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of the Dedicated Host Group. */
    hostGroup(value: string): az_vm_host_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_host_show_command_builder;
    /** Name of the Dedicated Host. */
    name(value: string): az_vm_host_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_host_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_host_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_host_show_command_builder;
}
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
declare class az_vm_host_update_command_builder extends CommandBuilder<az_vm_host_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_vm_host_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_vm_host_update_command_builder;
    /** Name of the Dedicated Host Group. */
    hostGroup(value: string): az_vm_host_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_host_update_command_builder;
    /** Name of the Dedicated Host. */
    name(value: string): az_vm_host_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_vm_host_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_host_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_vm_host_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_host_update_command_builder;
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
declare class az_vm_identity_assign_command_builder extends CommandBuilder<az_vm_identity_assign_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'. */
    identities(value: string): az_vm_identity_assign_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_identity_assign_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_identity_assign_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_identity_assign_command_builder;
    /** Role name or id the system assigned identity will have. */
    role(value: string): az_vm_identity_assign_command_builder;
    /** Scope that the system assigned identity can access. */
    scope(value: string): az_vm_identity_assign_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_identity_assign_command_builder;
}
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
declare class az_vm_identity_remove_command_builder extends CommandBuilder<az_vm_identity_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Space-separated identities to remove. Use '[system]' to refer to the system assigned identity. Default: '[system]'. */
    identities(value: string): az_vm_identity_remove_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_identity_remove_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_identity_remove_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_identity_remove_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_identity_remove_command_builder;
}
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
declare class az_vm_identity_show_command_builder extends CommandBuilder<az_vm_identity_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_identity_show_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_identity_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_identity_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_identity_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_identity_show_command_builder;
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
declare class az_vm_image_terms_accept_command_builder extends CommandBuilder<az_vm_image_terms_accept_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Image offer. */
    offer(value: string): az_vm_image_terms_accept_command_builder;
    /** Image billing plan. */
    plan(value: string): az_vm_image_terms_accept_command_builder;
    /** Image publisher. */
    publisher(value: string): az_vm_image_terms_accept_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_image_terms_accept_command_builder;
    /** URN, in the format of 'publisher:offer:sku:version'. If specified, other argument values can be omitted. */
    urn(value: string): az_vm_image_terms_accept_command_builder;
}
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
declare class az_vm_image_terms_cancel_command_builder extends CommandBuilder<az_vm_image_terms_cancel_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Image offer. */
    offer(value: string): az_vm_image_terms_cancel_command_builder;
    /** Image billing plan. */
    plan(value: string): az_vm_image_terms_cancel_command_builder;
    /** Image publisher. */
    publisher(value: string): az_vm_image_terms_cancel_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_image_terms_cancel_command_builder;
    /** URN, in the format of 'publisher:offer:sku:version'. If specified, other argument values can be omitted. */
    urn(value: string): az_vm_image_terms_cancel_command_builder;
}
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
declare class az_vm_image_terms_show_command_builder extends CommandBuilder<az_vm_image_terms_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Image offer. */
    offer(value: string): az_vm_image_terms_show_command_builder;
    /** Image billing plan. */
    plan(value: string): az_vm_image_terms_show_command_builder;
    /** Image publisher. */
    publisher(value: string): az_vm_image_terms_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_image_terms_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_image_terms_show_command_builder;
    /** URN, in the format of 'publisher:offer:sku:version'. If specified, other argument values can be omitted. */
    urn(value: string): az_vm_image_terms_show_command_builder;
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
declare class az_vm_image_accept_terms_command_builder extends CommandBuilder<az_vm_image_accept_terms_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Image offer. */
    offer(value: string): az_vm_image_accept_terms_command_builder;
    /** Image billing plan. */
    plan(value: string): az_vm_image_accept_terms_command_builder;
    /** Image publisher. */
    publisher(value: string): az_vm_image_accept_terms_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_image_accept_terms_command_builder;
    /** URN, in format of 'publisher:offer:sku:version'. If specified, other argument values can be omitted. */
    urn(value: string): az_vm_image_accept_terms_command_builder;
}
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
declare class az_vm_image_list_command_builder extends CommandBuilder<az_vm_image_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Retrieve image list from live Azure service rather using an offline image list. */
    all(value: string): az_vm_image_list_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_image_list_command_builder;
    /** Image offer name, partial name is accepted. */
    offer(value: string): az_vm_image_list_command_builder;
    /** Image publisher name, partial name is accepted. */
    publisher(value: string): az_vm_image_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_image_list_command_builder;
    /** Image sku name, partial name is accepted. */
    sku(value: string): az_vm_image_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_image_list_command_builder;
}
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
declare class az_vm_image_list_offers_command_builder extends CommandBuilder<az_vm_image_list_offers_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string, publisher: string);
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_image_list_offers_command_builder;
    /** A valid image publisher. */
    publisher(value: string): az_vm_image_list_offers_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_image_list_offers_command_builder;
}
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
declare class az_vm_image_list_publishers_command_builder extends CommandBuilder<az_vm_image_list_publishers_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string);
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_image_list_publishers_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_image_list_publishers_command_builder;
}
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
declare class az_vm_image_list_skus_command_builder extends CommandBuilder<az_vm_image_list_skus_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string, offer: string, publisher: string);
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_image_list_skus_command_builder;
    /** Image offer. */
    offer(value: string): az_vm_image_list_skus_command_builder;
    /** A valid image publisher. */
    publisher(value: string): az_vm_image_list_skus_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_image_list_skus_command_builder;
}
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
declare class az_vm_image_show_command_builder extends CommandBuilder<az_vm_image_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_image_show_command_builder;
    /** Image offer. */
    offer(value: string): az_vm_image_show_command_builder;
    /** Image publisher. */
    publisher(value: string): az_vm_image_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_image_show_command_builder;
    /** Image sku. */
    sku(value: string): az_vm_image_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_image_show_command_builder;
    /** URN, in format of 'publisher:offer:sku:version'. If specified, other argument values can be omitted. */
    urn(value: string): az_vm_image_show_command_builder;
    /** Image sku's version. */
    version(value: string): az_vm_image_show_command_builder;
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
declare class az_vm_monitor_log_show_command_builder extends CommandBuilder<az_vm_monitor_log_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, analyticsQuery: string);
    /** Query to execute over Log Analytics data. */
    analyticsQuery(value: string): az_vm_monitor_log_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_monitor_log_show_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_monitor_log_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_monitor_log_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_monitor_log_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_monitor_log_show_command_builder;
    /** Timespan over which to query. Defaults to querying all available data. */
    timespan(value: string): az_vm_monitor_log_show_command_builder;
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
declare class az_vm_monitor_metrics_list_definitions_command_builder extends CommandBuilder<az_vm_monitor_metrics_list_definitions_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name or ID of a virtual machine. */
    name(value: string): az_vm_monitor_metrics_list_definitions_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_monitor_metrics_list_definitions_command_builder;
    /** Namespace to query metric definitions for. */
    namespace(value: string): az_vm_monitor_metrics_list_definitions_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_monitor_metrics_list_definitions_command_builder;
}
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
declare class az_vm_monitor_metrics_tail_command_builder extends CommandBuilder<az_vm_monitor_metrics_tail_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name or ID of a virtual machine. */
    name(value: string): az_vm_monitor_metrics_tail_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_monitor_metrics_tail_command_builder;
    /** The list of aggregation types (space-separated) to retrieve. */
    aggregation(value: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'Total'): az_vm_monitor_metrics_tail_command_builder;
    /** The list of dimensions (space-separated) the metrics are queried into. */
    dimension(value: string): az_vm_monitor_metrics_tail_command_builder;
    /** End time of the query. Defaults to the current time. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm). */
    endTime(value: string): az_vm_monitor_metrics_tail_command_builder;
    /** A string used to reduce the set of metric data returned. eg. "LUN eq '\*'". */
    filter(value: string): az_vm_monitor_metrics_tail_command_builder;
    /** The interval over which to aggregate metrics, in ##h##m format. */
    interval(value: string): az_vm_monitor_metrics_tail_command_builder;
    /** Return the metadata values instead of metric data. */
    metadata(value: string): az_vm_monitor_metrics_tail_command_builder;
    /** Space-separated list of metric names to retrieve. */
    metrics(value: string): az_vm_monitor_metrics_tail_command_builder;
    /** Namespace to query metric definitions for. */
    namespace(value: string): az_vm_monitor_metrics_tail_command_builder;
    /** Time offset of the query range, in ##d##h format. */
    offset(value: string): az_vm_monitor_metrics_tail_command_builder;
    /** Aggregation to use for sorting results and the direction of the sort. Only one order can be specificed. Examples: sum asc. */
    orderby(value: string): az_vm_monitor_metrics_tail_command_builder;
    /** Start time of the query. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm). */
    startTime(value: string): az_vm_monitor_metrics_tail_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_monitor_metrics_tail_command_builder;
    /** Max number of records to retrieve. Valid only if --filter used. */
    top(value: string): az_vm_monitor_metrics_tail_command_builder;
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
declare class az_vm_nic_add_command_builder extends CommandBuilder<az_vm_nic_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, nics: string, resourceGroup: string, vmName: string);
    /** Names or IDs of NICs. */
    nics(value: string): az_vm_nic_add_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_nic_add_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_nic_add_command_builder;
    /** Name or ID of the primary NIC. If missing, the first NIC in the list will be the primary. */
    primaryNic(value: string): az_vm_nic_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_nic_add_command_builder;
}
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
declare class az_vm_nic_list_command_builder extends CommandBuilder<az_vm_nic_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, vmName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_nic_list_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_nic_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_nic_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_nic_list_command_builder;
}
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
declare class az_vm_nic_remove_command_builder extends CommandBuilder<az_vm_nic_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, nics: string, resourceGroup: string, vmName: string);
    /** Names or IDs of NICs. */
    nics(value: string): az_vm_nic_remove_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_nic_remove_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_nic_remove_command_builder;
    /** Name or ID of the primary NIC. If missing, the first NIC in the list will be the primary. */
    primaryNic(value: string): az_vm_nic_remove_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_nic_remove_command_builder;
}
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
declare class az_vm_nic_set_command_builder extends CommandBuilder<az_vm_nic_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, nics: string, resourceGroup: string, vmName: string);
    /** Names or IDs of NICs. */
    nics(value: string): az_vm_nic_set_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_nic_set_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_nic_set_command_builder;
    /** Name or ID of the primary NIC. If missing, the first NIC in the list will be the primary. */
    primaryNic(value: string): az_vm_nic_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_nic_set_command_builder;
}
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
declare class az_vm_nic_show_command_builder extends CommandBuilder<az_vm_nic_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, nic: string, resourceGroup: string, vmName: string);
    /** NIC name or ID. */
    nic(value: string): az_vm_nic_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_nic_show_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_nic_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_nic_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_nic_show_command_builder;
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
declare class az_vm_run_command_invoke_command_builder extends CommandBuilder<az_vm_run_command_invoke_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, commandId: string);
    /** The command id. */
    commandId(value: string): az_vm_run_command_invoke_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_run_command_invoke_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_run_command_invoke_command_builder;
    /** Space-separated parameters in the format of '[name=]value'. */
    parameters(value: string): az_vm_run_command_invoke_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_run_command_invoke_command_builder;
    /** Space-separated script lines. Use @{file} to load script from a file. */
    scripts(value: string): az_vm_run_command_invoke_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_run_command_invoke_command_builder;
}
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
declare class az_vm_run_command_list_command_builder extends CommandBuilder<az_vm_run_command_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string);
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_run_command_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_run_command_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_run_command_list_command_builder;
}
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
declare class az_vm_run_command_show_command_builder extends CommandBuilder<az_vm_run_command_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, commandId: string, location: string);
    /** The command id. */
    commandId(value: string): az_vm_run_command_show_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_run_command_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_run_command_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_run_command_show_command_builder;
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
declare class az_vm_secret_add_command_builder extends CommandBuilder<az_vm_secret_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, certificate: string, keyvault: string);
    /** Key vault certificate name or its full secret URL. */
    certificate(value: string): az_vm_secret_add_command_builder;
    /** Name or ID of the key vault. */
    keyvault(value: string): az_vm_secret_add_command_builder;
    /** Windows certificate store names. Default: My. */
    certificateStore(value: string): az_vm_secret_add_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_secret_add_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_secret_add_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_secret_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_secret_add_command_builder;
}
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
declare class az_vm_secret_format_command_builder extends CommandBuilder<az_vm_secret_format_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, secrets: string);
    /** Space-separated list of key vault secret URIs. Perhaps, produced by 'az keyvault secret list-versions --vault-name vaultname -n cert1 --query "[?attributes.enabled].id" -o tsv'. */
    secrets(value: string): az_vm_secret_format_command_builder;
    /** Windows certificate store names. Default: My. */
    certificateStore(value: string): az_vm_secret_format_command_builder;
    /** Name or ID of the key vault. */
    keyvault(value: string): az_vm_secret_format_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_secret_format_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_secret_format_command_builder;
}
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
declare class az_vm_secret_list_command_builder extends CommandBuilder<az_vm_secret_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_secret_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_secret_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_secret_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_secret_list_command_builder;
}
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
declare class az_vm_secret_remove_command_builder extends CommandBuilder<az_vm_secret_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, keyvault: string);
    /** Name or ID of the key vault. */
    keyvault(value: string): az_vm_secret_remove_command_builder;
    /** Key vault certificate name or its full secret URL. */
    certificate(value: string): az_vm_secret_remove_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_secret_remove_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_secret_remove_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_secret_remove_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_secret_remove_command_builder;
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
declare class az_vm_unmanaged_disk_attach_command_builder extends CommandBuilder<az_vm_unmanaged_disk_attach_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, vmName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_unmanaged_disk_attach_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_unmanaged_disk_attach_command_builder;
    /** Disk caching policy. */
    caching(value: 'None' | 'ReadOnly' | 'ReadWrite'): az_vm_unmanaged_disk_attach_command_builder;
    /** 0-based logical unit number (LUN). Max value depends on the Virtual Machine size. */
    lun(value: string): az_vm_unmanaged_disk_attach_command_builder;
    /** The data disk name. */
    name(value: string): az_vm_unmanaged_disk_attach_command_builder;
    /** Create a new disk. */
    new(value: string): az_vm_unmanaged_disk_attach_command_builder;
    /** Size in GB. Max size: 4095 GB (certain preview disks can be larger). */
    sizeGb(value: string): az_vm_unmanaged_disk_attach_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_unmanaged_disk_attach_command_builder;
    /** Virtual hard disk URI. For example: <a href="https://mystorage.blob.core.windows.net/vhds/d1.vhd">https://mystorage.blob.core.windows.net/vhds/d1.vhd</a>. */
    vhdUri(value: string): az_vm_unmanaged_disk_attach_command_builder;
}
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
declare class az_vm_unmanaged_disk_detach_command_builder extends CommandBuilder<az_vm_unmanaged_disk_detach_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, vmName: string);
    /** The data disk name. */
    name(value: string): az_vm_unmanaged_disk_detach_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_unmanaged_disk_detach_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_unmanaged_disk_detach_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_unmanaged_disk_detach_command_builder;
}
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
declare class az_vm_unmanaged_disk_list_command_builder extends CommandBuilder<az_vm_unmanaged_disk_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, vmName: string, resourceGroup: string);
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_unmanaged_disk_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_unmanaged_disk_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_unmanaged_disk_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_unmanaged_disk_list_command_builder;
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
declare class az_vm_user_delete_command_builder extends CommandBuilder<az_vm_user_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, username: string);
    /** The user name. */
    username(value: string): az_vm_user_delete_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_user_delete_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_user_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_user_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_user_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_user_delete_command_builder;
}
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
declare class az_vm_user_reset_ssh_command_builder extends CommandBuilder<az_vm_user_reset_ssh_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_user_reset_ssh_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_user_reset_ssh_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_user_reset_ssh_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_user_reset_ssh_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_user_reset_ssh_command_builder;
}
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
declare class az_vm_user_update_command_builder extends CommandBuilder<az_vm_user_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, username: string);
    /** The user name. */
    username(value: string): az_vm_user_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_user_update_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_user_update_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_user_update_command_builder;
    /** The user password. */
    password(value: string): az_vm_user_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_user_update_command_builder;
    /** SSH public key file value or public key file path. This command appends the new public key text to the ~/.ssh/authorized_keys file for the admin user on the VM. This does not replace or remove any existing SSH keys. */
    sshKeyValue(value: string): az_vm_user_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_user_update_command_builder;
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
declare class az_vm_assess_patches_command_builder extends CommandBuilder<az_vm_assess_patches_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_assess_patches_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_assess_patches_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_assess_patches_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_assess_patches_command_builder;
}
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
declare class az_vm_auto_shutdown_command_builder extends CommandBuilder<az_vm_auto_shutdown_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The email recipient to send notifications to (can be a list of semi-colon separated email addresses). */
    email(value: string): az_vm_auto_shutdown_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_auto_shutdown_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_auto_shutdown_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_auto_shutdown_command_builder;
    /** Turn off auto-shutdown for VM. Configuration will be cleared. */
    off(value: string): az_vm_auto_shutdown_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_auto_shutdown_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_auto_shutdown_command_builder;
    /** The UTC time of day the schedule will occur every day. Format: hhmm. Example: 1730. */
    time(value: string): az_vm_auto_shutdown_command_builder;
    /** The webhook URL to which the notification will be sent. */
    webhook(value: string): az_vm_auto_shutdown_command_builder;
}
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
declare class az_vm_capture_command_builder extends CommandBuilder<az_vm_capture_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, vhdNamePrefix: string);
    /** The VHD name prefix specify for the VM disks. */
    vhdNamePrefix(value: string): az_vm_capture_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_capture_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_capture_command_builder;
    /** Overwrite the existing disk file. */
    overwrite(value: string): az_vm_capture_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_capture_command_builder;
    /** The storage account container name in which to save the disks. */
    storageContainer(value: string): az_vm_capture_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_capture_command_builder;
}
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
declare class az_vm_convert_command_builder extends CommandBuilder<az_vm_convert_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_convert_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_convert_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_convert_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_convert_command_builder;
}
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
declare class az_vm_create_command_builder extends CommandBuilder<az_vm_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the virtual machine. */
    name(value: string): az_vm_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_create_command_builder;
    /** Enable accelerated networking. Unless specified, CLI will enable it based on machine image and size. */
    acceleratedNetworking(value: boolean): az_vm_create_command_builder;
    /** Password for the VM if authentication type is 'Password'. */
    adminPassword(value: string): az_vm_create_command_builder;
    /** Username for the VM. Default value is current username of OS. If the default value is system reserved, then default value will be set to azureuser. Please refer to <a href="https://docs.microsoft.com/en-us/rest/api/compute/virtualmachines/createorupdate#osprofile">https://docs.microsoft.com/en-us/rest/api/compute/virtualmachines/createorupdate#osprofile</a> to get a full list of reserved values. */
    adminUsername(value: string): az_vm_create_command_builder;
    /** Space-separated list of existing application security groups to associate with the VM. */
    asgs(value: string): az_vm_create_command_builder;
    /** Accept system or user assigned identities separated by spaces. Use '[system]' to refer system assigned identity, or a resource id to refer user assigned identity. Check out help for more examples. */
    assignIdentity(value: string): az_vm_create_command_builder;
    /** Attach existing data disks to the VM. Can use the name or ID of a managed disk or the URI to an unmanaged disk VHD. */
    attachDataDisks(value: string): az_vm_create_command_builder;
    /** Attach an existing OS disk to the VM. Can use the name or ID of a managed disk or the URI to an unmanaged disk VHD. */
    attachOsDisk(value: string): az_vm_create_command_builder;
    /** Type of authentication to use with the VM. Defaults to password for Windows and SSH public key for Linux. "all" enables both ssh and password authentication. */
    authenticationType(value: 'all' | 'password' | 'ssh'): az_vm_create_command_builder;
    /** Name or ID of an existing availability set to add the VM to. None by default. */
    availabilitySet(value: string): az_vm_create_command_builder;
    /** Pre-existing storage account name or its blob uri to capture boot diagnostics. Its sku should be one of Standard_GRS, Standard_LRS and Standard_RAGRS. */
    bootDiagnosticsStorage(value: string): az_vm_create_command_builder;
    /** The host OS name of the virtual machine. Defaults to the name of the VM. */
    computerName(value: string): az_vm_create_command_builder;
    /** Custom init script file or text (cloud-init, cloud-config, etc..). */
    customData(value: string): az_vm_create_command_builder;
    /** Storage caching type for data disk(s), including 'None', 'ReadOnly', 'ReadWrite', etc. Use a singular value to apply on all disks, or use `<lun>=<vaule1> <lun>=<value2>` to configure individual disk. */
    dataDiskCaching(value: string): az_vm_create_command_builder;
    /** Names or IDs (space delimited) of disk encryption sets for data disks. */
    dataDiskEncryptionSets(value: string): az_vm_create_command_builder;
    /** Space-separated empty managed data disk sizes in GB to create. */
    dataDiskSizesGb(value: string): az_vm_create_command_builder;
    /** Indicates whether virtual machine agent should be provisioned on the virtual machine. When this property is not specified, default behavior is to set it to true. This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later. */
    enableAgent(value: boolean): az_vm_create_command_builder;
    /** Indicate whether Automatic Updates is enabled for the Windows virtual machine. */
    enableAutoUpdate(value: boolean): az_vm_create_command_builder;
    /** Enable Host Encryption for the VM or VMSS. This will enable the encryption for all the disks including Resource/Temp disk at host itself. */
    encryptionAtHost(value: boolean): az_vm_create_command_builder;
    /** Allows you to create an OS disk directly on the host node, providing local disk performance and faster VM/VMSS reimage time. */
    ephemeralOsDisk(value: boolean): az_vm_create_command_builder;
    /** The eviction policy for the Spot priority virtual machine. Default eviction policy is Deallocate for a Spot priority virtual machine. */
    evictionPolicy(value: 'Deallocate' | 'Delete'): az_vm_create_command_builder;
    /** Generate SSH public and private key files if missing. The keys will be stored in the ~/.ssh directory. */
    generateSshKeys(value: string): az_vm_create_command_builder;
    /** ID of the dedicated host that the VM will reside in. --host and --host-group can't be used together. */
    host(value: string): az_vm_create_command_builder;
    /** Name or ID of the dedicated host group that the VM will reside in. --host and --host-group can't be used together. */
    hostGroup(value: string): az_vm_create_command_builder;
    /** The name of the operating system image as a URN alias, URN, custom image name or ID, custom image version ID, or VHD blob URI. This parameter is required unless using `--attach-os-disk.` Valid URN format: "Publisher:Offer:Sku:Version". */
    image(value: string): az_vm_create_command_builder;
    /** Specifies that the Windows image or disk was licensed on-premises. To enable Azure Hybrid Benefit for Windows Server, use 'Windows_Server'. To enable Multitenant Hosting Rights for Windows 10, use 'Windows_Client'. For more information see the Azure Windows VM online docs. */
    licenseType(value: 'None' | 'RHEL_BYOS' | 'SLES_BYOS' | 'Windows_Client' | 'Windows_Server'): az_vm_create_command_builder;
    /** Location in which to create VM and related resources. If default location is not configured, will default to the resource group's location. */
    location(value: string): az_vm_create_command_builder;
    /** The maximum price (in US Dollars) you are willing to pay for a Spot VM/VMSS. -1 indicates that the Spot VM/VMSS should not be evicted for price reasons. */
    maxPrice(value: string): az_vm_create_command_builder;
    /** Names or IDs of existing NICs to attach to the VM. The first NIC will be designated as primary. If omitted, a new NIC will be created. If an existing NIC is specified, do not specify subnet, VNet, public IP or NSG. */
    nics(value: string): az_vm_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_create_command_builder;
    /** The name to use when creating a new Network Security Group (default) or referencing an existing one. Can also reference an existing NSG by ID or specify "" for none ('""' in Azure CLI using PowerShell or --% operator). */
    nsg(value: string): az_vm_create_command_builder;
    /** NSG rule to create when creating a new NSG. Defaults to open ports for allowing RDP on Windows and allowing SSH on Linux. NONE represents no NSG rule. */
    nsgRule(value: 'NONE' | 'RDP' | 'SSH'): az_vm_create_command_builder;
    /** Storage caching type for the VM OS disk. Default: ReadWrite. */
    osDiskCaching(value: 'None' | 'ReadOnly' | 'ReadWrite'): az_vm_create_command_builder;
    /** Name or ID of disk encryption set for OS disk. */
    osDiskEncryptionSet(value: string): az_vm_create_command_builder;
    /** The name of the new VM OS disk. */
    osDiskName(value: string): az_vm_create_command_builder;
    /** OS disk size in GB to create. */
    osDiskSizeGb(value: string): az_vm_create_command_builder;
    /** Type of OS installed on a custom VHD. Do not use when specifying an URN or URN alias. */
    osType(value: 'linux' | 'windows'): az_vm_create_command_builder;
    /** Mode of in-guest patching to IaaS virtual machine. Possible values are: Manual - You  control the application of patches to a virtual machine. You do this by applying patches manually inside the VM. In this mode, automatic updates are disabled; the paramater --enable-auto-update must be false. AutomaticByOS - The virtual machine will automatically be updated by the OS. The parameter --enable-auto-update must be true. AutomaticByPlatform - the virtual machine will automatically updated by the OS. The parameter --enable-agent and --enable-auto-update must be true. */
    patchMode(value: 'AutomaticByOS' | 'AutomaticByPlatform' | 'Manual'): az_vm_create_command_builder;
    /** Plan name. */
    planName(value: string): az_vm_create_command_builder;
    /** Plan product. */
    planProduct(value: string): az_vm_create_command_builder;
    /** Plan promotion code. */
    planPromotionCode(value: string): az_vm_create_command_builder;
    /** Plan publisher. */
    planPublisher(value: string): az_vm_create_command_builder;
    /** The name or ID of the proximity placement group the VM should be associated with. */
    ppg(value: string): az_vm_create_command_builder;
    /** Priority. Use 'Spot' to run short-lived workloads in a cost-effective way. 'Low' enum will be deprecated in the future. Please use 'Spot' to deploy Azure spot VM and/or VMSS. Default to Regular. */
    priority(value: 'Low' | 'Regular' | 'Spot'): az_vm_create_command_builder;
    /** Static private IP address (e.g. 10.0.0.5). */
    privateIpAddress(value: string): az_vm_create_command_builder;
    /** Name of the public IP address when creating one (default) or referencing an existing one. Can also reference an existing public IP by ID or specify "" for None ('""' in Azure CLI using PowerShell or --% operator). */
    publicIpAddress(value: string): az_vm_create_command_builder;
    /** */
    publicIpAddressAllocation(value: 'dynamic' | 'static'): az_vm_create_command_builder;
    /** Globally unique DNS name for a newly created public IP. */
    publicIpAddressDnsName(value: string): az_vm_create_command_builder;
    /** Public IP SKU. It is set to Basic by default. */
    publicIpSku(value: 'Basic' | 'Standard'): az_vm_create_command_builder;
    /** Role name or id the system assigned identity will have. */
    role(value: string): az_vm_create_command_builder;
    /** Scope that the system assigned identity can access. */
    scope(value: string): az_vm_create_command_builder;
    /** One or many Key Vault secrets as JSON strings or files via `@{path}` containing `[{ "sourceVault": { "id": "value" }, "vaultCertificates": [{ "certificateUrl": "value", "certificateStore": "cert store name (only on windows)"}] }]`. */
    secrets(value: string): az_vm_create_command_builder;
    /** The VM size to be created. See <a href="https://azure.microsoft.com/pricing/details/virtual-machines/">https://azure.microsoft.com/pricing/details/virtual-machines/</a> for size info. */
    size(value: string): az_vm_create_command_builder;
    /** Indicate whether the source image is specialized. */
    specialized(value: boolean): az_vm_create_command_builder;
    /** Destination file path on the VM for the SSH key. If the file already exists, the specified key(s) are appended to the file. Destination path for SSH public keys is currently limited to its default value "/home/username/.ssh/authorized_keys" due to a known issue in Linux provisioning agent. */
    sshDestKeyPath(value: string): az_vm_create_command_builder;
    /** Space-separated list of SSH public keys or public key file paths. */
    sshKeyValues(value: string): az_vm_create_command_builder;
    /** Only applicable when used with `--use-unmanaged-disk`. The name to use when creating a new storage account or referencing an existing one. If omitted, an appropriate storage account in the same resource group and location will be used, or a new one will be created. */
    storageAccount(value: string): az_vm_create_command_builder;
    /** Only applicable when used with `--use-unmanaged-disk`. Name of the storage container for the VM OS disk. Default: vhds. */
    storageContainerName(value: string): az_vm_create_command_builder;
    /** The SKU of the storage account with which to persist VM. Use a singular sku that would be applied across all disks, or specify individual disks. Usage: [--storage-sku SKU | --storage-sku ID=SKU ID=SKU ID=SKU...], where each ID is "os" or a 0-indexed lun. Allowed values: Standard_LRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS. */
    storageSku(value: string): az_vm_create_command_builder;
    /** The name of the subnet when creating a new VNet or referencing an existing one. Can also reference an existing subnet by ID. If both vnet-name and subnet are omitted, an appropriate VNet and subnet will be selected automatically, or a new one will be created. */
    subnet(value: string): az_vm_create_command_builder;
    /** The subnet IP address prefix to use when creating a new VNet in CIDR format. */
    subnetAddressPrefix(value: string): az_vm_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_vm_create_command_builder;
    /** Enables or disables the capability to have 1 or more managed data disks with UltraSSD_LRS storage account. */
    ultraSsdEnabled(value: boolean): az_vm_create_command_builder;
    /** Do not use managed disk to persist VM. */
    useUnmanagedDisk(value: string): az_vm_create_command_builder;
    /** Generate and validate the ARM template without creating any resources. */
    validate(value: string): az_vm_create_command_builder;
    /** Name or ID of an existing virtual machine scale set that the virtual machine should be assigned to. None by default. */
    vmss(value: string): az_vm_create_command_builder;
    /** The IP address prefix to use when creating a new VNet in CIDR format. */
    vnetAddressPrefix(value: string): az_vm_create_command_builder;
    /** Name of the virtual network when creating a new one or referencing an existing one. */
    vnetName(value: string): az_vm_create_command_builder;
    /** Name or ID of Log Analytics Workspace. If you specify the workspace through its name, the workspace should be in the same resource group with the vm, otherwise a new workspace will be created. */
    workspace(value: string): az_vm_create_command_builder;
    /** Availability zone into which to provision the resource. */
    zone(value: '1' | '2' | '3'): az_vm_create_command_builder;
}
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
declare class az_vm_deallocate_command_builder extends CommandBuilder<az_vm_deallocate_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_deallocate_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_deallocate_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_deallocate_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_deallocate_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_deallocate_command_builder;
}
/**
 * Delete a VM.
 *
 * Syntax:
 * ```
 * az vm delete [--force-deletion]
 *              [--ids]
 *              [--name]
 *              [--no-wait]
 *              [--resource-group]
 *              [--subscription]
 *              [--yes]
 * ```
 */
declare class az_vm_delete_command_builder extends CommandBuilder<az_vm_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Optional parameter to force delete virtual machines. */
    forceDeletion(value: string): az_vm_delete_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_delete_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_vm_delete_command_builder;
}
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
declare class az_vm_generalize_command_builder extends CommandBuilder<az_vm_generalize_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_generalize_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_generalize_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_generalize_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_generalize_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_generalize_command_builder;
}
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
declare class az_vm_get_instance_view_command_builder extends CommandBuilder<az_vm_get_instance_view_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_get_instance_view_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_get_instance_view_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_get_instance_view_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_get_instance_view_command_builder;
}
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
declare class az_vm_list_command_builder extends CommandBuilder<az_vm_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_list_command_builder;
    /** Show public ip address, FQDN, and power states. command will run slow. */
    showDetails(value: string): az_vm_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_list_command_builder;
}
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
declare class az_vm_list_ip_addresses_command_builder extends CommandBuilder<az_vm_list_ip_addresses_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_list_ip_addresses_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_list_ip_addresses_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_list_ip_addresses_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_list_ip_addresses_command_builder;
}
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
declare class az_vm_list_sizes_command_builder extends CommandBuilder<az_vm_list_sizes_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string);
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_list_sizes_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_list_sizes_command_builder;
}
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
declare class az_vm_list_skus_command_builder extends CommandBuilder<az_vm_list_skus_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Show all information including vm sizes not available under the current subscription. */
    all(value: boolean): az_vm_list_skus_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_list_skus_command_builder;
    /** Resource types e.g. "availabilitySets", "snapshots", "disks", etc. */
    resourceType(value: string): az_vm_list_skus_command_builder;
    /** Size name, partial name is accepted. */
    size(value: string): az_vm_list_skus_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_list_skus_command_builder;
    /** Show skus supporting availability zones. */
    zone(value: boolean): az_vm_list_skus_command_builder;
}
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
declare class az_vm_list_usage_command_builder extends CommandBuilder<az_vm_list_usage_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string);
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_list_usage_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_list_usage_command_builder;
}
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
declare class az_vm_list_vm_resize_options_command_builder extends CommandBuilder<az_vm_list_vm_resize_options_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_list_vm_resize_options_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_list_vm_resize_options_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_list_vm_resize_options_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_list_vm_resize_options_command_builder;
}
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
declare class az_vm_open_port_command_builder extends CommandBuilder<az_vm_open_port_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, port: string);
    /** The port or port range (ex: 80-100) to open inbound traffic to. Use '\*' to allow traffic to all ports. */
    port(value: string): az_vm_open_port_command_builder;
    /** Allow inbound traffic on the subnet instead of the NIC. */
    applyToSubnet(value: string): az_vm_open_port_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_open_port_command_builder;
    /** The name of the virtual machine to open inbound traffic on. */
    name(value: string): az_vm_open_port_command_builder;
    /** The name of the network security group to create if one does not exist. Ignored if an NSG already exists. */
    nsgName(value: string): az_vm_open_port_command_builder;
    /** Rule priority, between 100 (highest priority) and 4096 (lowest priority). Must be unique for each rule in the collection. */
    priority(value: string): az_vm_open_port_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_open_port_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_open_port_command_builder;
}
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
declare class az_vm_perform_maintenance_command_builder extends CommandBuilder<az_vm_perform_maintenance_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_perform_maintenance_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_perform_maintenance_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_perform_maintenance_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_perform_maintenance_command_builder;
}
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
declare class az_vm_reapply_command_builder extends CommandBuilder<az_vm_reapply_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_reapply_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_reapply_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_reapply_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_reapply_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_reapply_command_builder;
}
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
declare class az_vm_redeploy_command_builder extends CommandBuilder<az_vm_redeploy_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_redeploy_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_redeploy_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_redeploy_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_redeploy_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_redeploy_command_builder;
}
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
declare class az_vm_resize_command_builder extends CommandBuilder<az_vm_resize_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, size: string);
    /** The VM size. */
    size(value: string): az_vm_resize_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_resize_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_resize_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_resize_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_resize_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_resize_command_builder;
}
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
declare class az_vm_restart_command_builder extends CommandBuilder<az_vm_restart_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Force the VM to restart by redeploying it. Use if the VM is unresponsive. */
    force(value: string): az_vm_restart_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_restart_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_restart_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_restart_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_restart_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_restart_command_builder;
}
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
declare class az_vm_show_command_builder extends CommandBuilder<az_vm_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_show_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_show_command_builder;
    /** Show public ip address, FQDN, and power states. command will run slow. */
    showDetails(value: string): az_vm_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_show_command_builder;
}
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
declare class az_vm_simulate_eviction_command_builder extends CommandBuilder<az_vm_simulate_eviction_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_simulate_eviction_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_simulate_eviction_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_simulate_eviction_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_simulate_eviction_command_builder;
}
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
declare class az_vm_start_command_builder extends CommandBuilder<az_vm_start_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_start_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_start_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_start_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_start_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_start_command_builder;
}
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
declare class az_vm_stop_command_builder extends CommandBuilder<az_vm_stop_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_stop_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_stop_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_stop_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_stop_command_builder;
    /** Skip shutdown and power-off immediately. */
    skipShutdown(value: string): az_vm_stop_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_stop_command_builder;
}
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
declare class az_vm_update_command_builder extends CommandBuilder<az_vm_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_vm_update_command_builder;
    /** Use singular value to apply across, or specify individual disks, e.g. 'os=ReadWrite 0=None 1=ReadOnly' should enable update os disk and 2 data disks. */
    diskCaching(value: string): az_vm_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_vm_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_update_command_builder;
    /** Specifies that the Windows image or disk was licensed on-premises. To enable Azure Hybrid Benefit for Windows Server, use 'Windows_Server'. To enable Multitenant Hosting Rights for Windows 10, use 'Windows_Client'. For more information see the Azure Windows VM online docs. */
    licenseType(value: 'None' | 'RHEL_BYOS' | 'SLES_BYOS' | 'Windows_Client' | 'Windows_Server'): az_vm_update_command_builder;
    /** The maximum price (in US Dollars) you are willing to pay for a Spot VM/VMSS. -1 indicates that the Spot VM/VMSS should not be evicted for price reasons. */
    maxPrice(value: string): az_vm_update_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_update_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_update_command_builder;
    /** Managed OS disk ID or name to swap to. */
    osDisk(value: string): az_vm_update_command_builder;
    /** The name or ID of the proximity placement group the VM should be associated with. */
    ppg(value: string): az_vm_update_command_builder;
    /** Priority. Use 'Spot' to run short-lived workloads in a cost-effective way. 'Low' enum will be deprecated in the future. Please use 'Spot' to deploy Azure spot VM and/or VMSS. Default to Regular. */
    priority(value: 'Low' | 'Regular' | 'Spot'): az_vm_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_vm_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_vm_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_update_command_builder;
    /** Enables or disables the capability to have 1 or more managed data disks with UltraSSD_LRS storage account. */
    ultraSsdEnabled(value: boolean): az_vm_update_command_builder;
    /** Name or ID of Log Analytics Workspace. If you specify the workspace through its name, the workspace should be in the same resource group with the vm, otherwise a new workspace will be created. */
    workspace(value: string): az_vm_update_command_builder;
    /** Enable/disable disk write accelerator. Use singular value 'true/false' to apply across, or specify individual disks, e.g.'os=true 1=true 2=true' for os disk and data disks with lun of 1 & 2. */
    writeAccelerator(value: string): az_vm_update_command_builder;
}
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
declare class az_vm_wait_command_builder extends CommandBuilder<az_vm_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_vm_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_vm_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_vm_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_vm_wait_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_vm_wait_command_builder;
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_vm_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_vm_wait_command_builder;
}
export {};
