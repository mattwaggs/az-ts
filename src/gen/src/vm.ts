import { CommandBuilder, ICommandParent } from '../base';

/** Group resources into availability sets. */
export class az_vm_availability_set implements ICommandParent<any> {
    commandPath = "az vm availability-set";

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
    az_vm_availability_set_convert(): az_vm_availability_set_convert_command_builder {
        return new az_vm_availability_set_convert_command_builder(this);
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
    az_vm_availability_set_create(name: string, resourceGroup: string): az_vm_availability_set_create_command_builder {
        return new az_vm_availability_set_create_command_builder(this, name, resourceGroup);
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
    az_vm_availability_set_delete(): az_vm_availability_set_delete_command_builder {
        return new az_vm_availability_set_delete_command_builder(this);
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
    az_vm_availability_set_list(): az_vm_availability_set_list_command_builder {
        return new az_vm_availability_set_list_command_builder(this);
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
    az_vm_availability_set_list_sizes(): az_vm_availability_set_list_sizes_command_builder {
        return new az_vm_availability_set_list_sizes_command_builder(this);
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
    az_vm_availability_set_show(): az_vm_availability_set_show_command_builder {
        return new az_vm_availability_set_show_command_builder(this);
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
    az_vm_availability_set_update(): az_vm_availability_set_update_command_builder {
        return new az_vm_availability_set_update_command_builder(this);
    }
}

/** Troubleshoot the startup of an Azure Virtual Machine. */
export class az_vm_boot_diagnostics implements ICommandParent<any> {
    commandPath = "az vm boot-diagnostics";

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
    az_vm_boot_diagnostics_disable(): az_vm_boot_diagnostics_disable_command_builder {
        return new az_vm_boot_diagnostics_disable_command_builder(this);
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
    az_vm_boot_diagnostics_enable(): az_vm_boot_diagnostics_enable_command_builder {
        return new az_vm_boot_diagnostics_enable_command_builder(this);
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
    az_vm_boot_diagnostics_get_boot_log(): az_vm_boot_diagnostics_get_boot_log_command_builder {
        return new az_vm_boot_diagnostics_get_boot_log_command_builder(this);
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
    az_vm_boot_diagnostics_get_boot_log_uris(): az_vm_boot_diagnostics_get_boot_log_uris_command_builder {
        return new az_vm_boot_diagnostics_get_boot_log_uris_command_builder(this);
    }
}

/** Configure the Azure Virtual Machine diagnostics extension. */
export class az_vm_diagnostics implements ICommandParent<any> {
    commandPath = "az vm diagnostics";

    /**
     * Get the default configuration settings for a VM.
     *
     * Syntax:
     * ```
     * az vm diagnostics get-default-config [--is-windows-os]
     *                                      [--subscription]
     * ```
     */
    az_vm_diagnostics_get_default_config(): az_vm_diagnostics_get_default_config_command_builder {
        return new az_vm_diagnostics_get_default_config_command_builder(this);
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
    az_vm_diagnostics_set(settings: string): az_vm_diagnostics_set_command_builder {
        return new az_vm_diagnostics_set_command_builder(this, settings);
    }
}

/** Manage the managed data disks attached to a VM. */
export class az_vm_disk implements ICommandParent<any> {
    commandPath = "az vm disk";

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
    az_vm_disk_attach(vmName: string): az_vm_disk_attach_command_builder {
        return new az_vm_disk_attach_command_builder(this, vmName);
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
    az_vm_disk_detach(name: string, resourceGroup: string, vmName: string): az_vm_disk_detach_command_builder {
        return new az_vm_disk_detach_command_builder(this, name, resourceGroup, vmName);
    }
}

/** Manage encryption of VM disks. */
export class az_vm_encryption implements ICommandParent<any> {
    commandPath = "az vm encryption";

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
    az_vm_encryption_disable(): az_vm_encryption_disable_command_builder {
        return new az_vm_encryption_disable_command_builder(this);
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
    az_vm_encryption_enable(diskEncryptionKeyvault: string): az_vm_encryption_enable_command_builder {
        return new az_vm_encryption_enable_command_builder(this, diskEncryptionKeyvault);
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
    az_vm_encryption_show(): az_vm_encryption_show_command_builder {
        return new az_vm_encryption_show_command_builder(this);
    }
}

/** Find the available VM extensions for a subscription and region. */
export class az_vm_extension_image implements ICommandParent<any> {
    commandPath = "az vm extension image";

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
    az_vm_extension_image_list(): az_vm_extension_image_list_command_builder {
        return new az_vm_extension_image_list_command_builder(this);
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
    az_vm_extension_image_list_names(location: string, publisher: string): az_vm_extension_image_list_names_command_builder {
        return new az_vm_extension_image_list_names_command_builder(this, location, publisher);
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
    az_vm_extension_image_list_versions(location: string, name: string, publisher: string): az_vm_extension_image_list_versions_command_builder {
        return new az_vm_extension_image_list_versions_command_builder(this, location, name, publisher);
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
    az_vm_extension_image_show(location: string, name: string, publisher: string, version: string): az_vm_extension_image_show_command_builder {
        return new az_vm_extension_image_show_command_builder(this, location, name, publisher, version);
    }
}

/** Manage extensions on VMs. */
export class az_vm_extension implements ICommandParent<any> {
    commandPath = "az vm extension";

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
    az_vm_extension_delete(): az_vm_extension_delete_command_builder {
        return new az_vm_extension_delete_command_builder(this);
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
    az_vm_extension_list(resourceGroup: string, vmName: string): az_vm_extension_list_command_builder {
        return new az_vm_extension_list_command_builder(this, resourceGroup, vmName);
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
    az_vm_extension_set(name: string, publisher: string): az_vm_extension_set_command_builder {
        return new az_vm_extension_set_command_builder(this, name, publisher);
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
    az_vm_extension_show(): az_vm_extension_show_command_builder {
        return new az_vm_extension_show_command_builder(this);
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
    az_vm_extension_wait(): az_vm_extension_wait_command_builder {
        return new az_vm_extension_wait_command_builder(this);
    }
}

/** Manage Dedicated Host Groups. */
export class az_vm_host_group implements ICommandParent<any> {
    commandPath = "az vm host group";

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
    az_vm_host_group_create(name: string, resourceGroup: string): az_vm_host_group_create_command_builder {
        return new az_vm_host_group_create_command_builder(this, name, resourceGroup);
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
    az_vm_host_group_delete(): az_vm_host_group_delete_command_builder {
        return new az_vm_host_group_delete_command_builder(this);
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
    az_vm_host_group_get_instance_view(): az_vm_host_group_get_instance_view_command_builder {
        return new az_vm_host_group_get_instance_view_command_builder(this);
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
    az_vm_host_group_list(): az_vm_host_group_list_command_builder {
        return new az_vm_host_group_list_command_builder(this);
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
    az_vm_host_group_show(): az_vm_host_group_show_command_builder {
        return new az_vm_host_group_show_command_builder(this);
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
    az_vm_host_group_update(): az_vm_host_group_update_command_builder {
        return new az_vm_host_group_update_command_builder(this);
    }
}

/** Manage Dedicated Hosts for Virtual Machines. */
export class az_vm_host implements ICommandParent<any> {
    commandPath = "az vm host";

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
    az_vm_host_create(hostGroup: string, name: string, resourceGroup: string, sku: 'DSv3-Type1' | 'ESv3-Type1' | 'FSv2-Type2'): az_vm_host_create_command_builder {
        return new az_vm_host_create_command_builder(this, hostGroup, name, resourceGroup, sku);
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
    az_vm_host_delete(): az_vm_host_delete_command_builder {
        return new az_vm_host_delete_command_builder(this);
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
    az_vm_host_get_instance_view(): az_vm_host_get_instance_view_command_builder {
        return new az_vm_host_get_instance_view_command_builder(this);
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
    az_vm_host_list(hostGroup: string, resourceGroup: string): az_vm_host_list_command_builder {
        return new az_vm_host_list_command_builder(this, hostGroup, resourceGroup);
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
    az_vm_host_show(): az_vm_host_show_command_builder {
        return new az_vm_host_show_command_builder(this);
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
    az_vm_host_update(): az_vm_host_update_command_builder {
        return new az_vm_host_update_command_builder(this);
    }
}

/** Manage service identities of a VM. */
export class az_vm_identity implements ICommandParent<any> {
    commandPath = "az vm identity";

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
    az_vm_identity_assign(): az_vm_identity_assign_command_builder {
        return new az_vm_identity_assign_command_builder(this);
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
    az_vm_identity_remove(): az_vm_identity_remove_command_builder {
        return new az_vm_identity_remove_command_builder(this);
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
    az_vm_identity_show(): az_vm_identity_show_command_builder {
        return new az_vm_identity_show_command_builder(this);
    }
}

/** Manage Azure Marketplace image terms. */
export class az_vm_image_terms implements ICommandParent<any> {
    commandPath = "az vm image terms";

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
    az_vm_image_terms_accept(): az_vm_image_terms_accept_command_builder {
        return new az_vm_image_terms_accept_command_builder(this);
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
    az_vm_image_terms_cancel(): az_vm_image_terms_cancel_command_builder {
        return new az_vm_image_terms_cancel_command_builder(this);
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
    az_vm_image_terms_show(): az_vm_image_terms_show_command_builder {
        return new az_vm_image_terms_show_command_builder(this);
    }
}

/** Information on available virtual machine images. */
export class az_vm_image implements ICommandParent<any> {
    commandPath = "az vm image";

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
    az_vm_image_accept_terms(): az_vm_image_accept_terms_command_builder {
        return new az_vm_image_accept_terms_command_builder(this);
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
    az_vm_image_list(): az_vm_image_list_command_builder {
        return new az_vm_image_list_command_builder(this);
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
    az_vm_image_list_offers(location: string, publisher: string): az_vm_image_list_offers_command_builder {
        return new az_vm_image_list_offers_command_builder(this, location, publisher);
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
    az_vm_image_list_publishers(location: string): az_vm_image_list_publishers_command_builder {
        return new az_vm_image_list_publishers_command_builder(this, location);
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
    az_vm_image_list_skus(location: string, offer: string, publisher: string): az_vm_image_list_skus_command_builder {
        return new az_vm_image_list_skus_command_builder(this, location, offer, publisher);
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
    az_vm_image_show(): az_vm_image_show_command_builder {
        return new az_vm_image_show_command_builder(this);
    }
}

/** Manage log analytics workspace for a vm. */
export class az_vm_monitor_log implements ICommandParent<any> {
    commandPath = "az vm monitor log";

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
    az_vm_monitor_log_show(analyticsQuery: string): az_vm_monitor_log_show_command_builder {
        return new az_vm_monitor_log_show_command_builder(this, analyticsQuery);
    }
}

/** Manage metrics for a vm. */
export class az_vm_monitor_metrics implements ICommandParent<any> {
    commandPath = "az vm monitor metrics";

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
    az_vm_monitor_metrics_list_definitions(name: string, resourceGroup: string): az_vm_monitor_metrics_list_definitions_command_builder {
        return new az_vm_monitor_metrics_list_definitions_command_builder(this, name, resourceGroup);
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
    az_vm_monitor_metrics_tail(name: string, resourceGroup: string): az_vm_monitor_metrics_tail_command_builder {
        return new az_vm_monitor_metrics_tail_command_builder(this, name, resourceGroup);
    }
}

/** Manage monitor aspect for a vm. */
export class az_vm_monitor {
}

/** Manage network interfaces. See also `az network nic`. */
export class az_vm_nic implements ICommandParent<any> {
    commandPath = "az vm nic";

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
    az_vm_nic_add(nics: string, resourceGroup: string, vmName: string): az_vm_nic_add_command_builder {
        return new az_vm_nic_add_command_builder(this, nics, resourceGroup, vmName);
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
    az_vm_nic_list(resourceGroup: string, vmName: string): az_vm_nic_list_command_builder {
        return new az_vm_nic_list_command_builder(this, resourceGroup, vmName);
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
    az_vm_nic_remove(nics: string, resourceGroup: string, vmName: string): az_vm_nic_remove_command_builder {
        return new az_vm_nic_remove_command_builder(this, nics, resourceGroup, vmName);
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
    az_vm_nic_set(nics: string, resourceGroup: string, vmName: string): az_vm_nic_set_command_builder {
        return new az_vm_nic_set_command_builder(this, nics, resourceGroup, vmName);
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
    az_vm_nic_show(nic: string, resourceGroup: string, vmName: string): az_vm_nic_show_command_builder {
        return new az_vm_nic_show_command_builder(this, nic, resourceGroup, vmName);
    }
}

/** Manage run commands on a Virtual Machine. */
export class az_vm_run_command implements ICommandParent<any> {
    commandPath = "az vm run-command";

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
    az_vm_run_command_invoke(commandId: string): az_vm_run_command_invoke_command_builder {
        return new az_vm_run_command_invoke_command_builder(this, commandId);
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
    az_vm_run_command_list(location: string): az_vm_run_command_list_command_builder {
        return new az_vm_run_command_list_command_builder(this, location);
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
    az_vm_run_command_show(commandId: string, location: string): az_vm_run_command_show_command_builder {
        return new az_vm_run_command_show_command_builder(this, commandId, location);
    }
}

/** Manage VM secrets. */
export class az_vm_secret implements ICommandParent<any> {
    commandPath = "az vm secret";

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
    az_vm_secret_add(certificate: string, keyvault: string): az_vm_secret_add_command_builder {
        return new az_vm_secret_add_command_builder(this, certificate, keyvault);
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
    az_vm_secret_format(secrets: string): az_vm_secret_format_command_builder {
        return new az_vm_secret_format_command_builder(this, secrets);
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
    az_vm_secret_list(name: string, resourceGroup: string): az_vm_secret_list_command_builder {
        return new az_vm_secret_list_command_builder(this, name, resourceGroup);
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
    az_vm_secret_remove(keyvault: string): az_vm_secret_remove_command_builder {
        return new az_vm_secret_remove_command_builder(this, keyvault);
    }
}

/** Manage the unmanaged data disks attached to a VM. */
export class az_vm_unmanaged_disk implements ICommandParent<any> {
    commandPath = "az vm unmanaged-disk";

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
    az_vm_unmanaged_disk_attach(resourceGroup: string, vmName: string): az_vm_unmanaged_disk_attach_command_builder {
        return new az_vm_unmanaged_disk_attach_command_builder(this, resourceGroup, vmName);
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
    az_vm_unmanaged_disk_detach(name: string, resourceGroup: string, vmName: string): az_vm_unmanaged_disk_detach_command_builder {
        return new az_vm_unmanaged_disk_detach_command_builder(this, name, resourceGroup, vmName);
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
    az_vm_unmanaged_disk_list(vmName: string, resourceGroup: string): az_vm_unmanaged_disk_list_command_builder {
        return new az_vm_unmanaged_disk_list_command_builder(this, vmName, resourceGroup);
    }
}

/** Manage user accounts for a VM. */
export class az_vm_user implements ICommandParent<any> {
    commandPath = "az vm user";

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
    az_vm_user_delete(username: string): az_vm_user_delete_command_builder {
        return new az_vm_user_delete_command_builder(this, username);
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
    az_vm_user_reset_ssh(): az_vm_user_reset_ssh_command_builder {
        return new az_vm_user_reset_ssh_command_builder(this);
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
    az_vm_user_update(username: string): az_vm_user_update_command_builder {
        return new az_vm_user_update_command_builder(this, username);
    }
}

/** Manage Linux or Windows virtual machines. */
export class az_vm implements ICommandParent<any> {
    commandPath = "az vm";

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
    az_vm_assess_patches(): az_vm_assess_patches_command_builder {
        return new az_vm_assess_patches_command_builder(this);
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
    az_vm_auto_shutdown(): az_vm_auto_shutdown_command_builder {
        return new az_vm_auto_shutdown_command_builder(this);
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
    az_vm_capture(vhdNamePrefix: string): az_vm_capture_command_builder {
        return new az_vm_capture_command_builder(this, vhdNamePrefix);
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
    az_vm_convert(): az_vm_convert_command_builder {
        return new az_vm_convert_command_builder(this);
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
    az_vm_create(name: string, resourceGroup: string): az_vm_create_command_builder {
        return new az_vm_create_command_builder(this, name, resourceGroup);
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
    az_vm_deallocate(): az_vm_deallocate_command_builder {
        return new az_vm_deallocate_command_builder(this);
    }

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
    az_vm_delete(): az_vm_delete_command_builder {
        return new az_vm_delete_command_builder(this);
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
    az_vm_generalize(): az_vm_generalize_command_builder {
        return new az_vm_generalize_command_builder(this);
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
    az_vm_get_instance_view(): az_vm_get_instance_view_command_builder {
        return new az_vm_get_instance_view_command_builder(this);
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
    az_vm_list(): az_vm_list_command_builder {
        return new az_vm_list_command_builder(this);
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
    az_vm_list_ip_addresses(): az_vm_list_ip_addresses_command_builder {
        return new az_vm_list_ip_addresses_command_builder(this);
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
    az_vm_list_sizes(location: string): az_vm_list_sizes_command_builder {
        return new az_vm_list_sizes_command_builder(this, location);
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
    az_vm_list_skus(): az_vm_list_skus_command_builder {
        return new az_vm_list_skus_command_builder(this);
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
    az_vm_list_usage(location: string): az_vm_list_usage_command_builder {
        return new az_vm_list_usage_command_builder(this, location);
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
    az_vm_list_vm_resize_options(): az_vm_list_vm_resize_options_command_builder {
        return new az_vm_list_vm_resize_options_command_builder(this);
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
    az_vm_open_port(port: string): az_vm_open_port_command_builder {
        return new az_vm_open_port_command_builder(this, port);
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
    az_vm_perform_maintenance(): az_vm_perform_maintenance_command_builder {
        return new az_vm_perform_maintenance_command_builder(this);
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
    az_vm_reapply(): az_vm_reapply_command_builder {
        return new az_vm_reapply_command_builder(this);
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
    az_vm_redeploy(): az_vm_redeploy_command_builder {
        return new az_vm_redeploy_command_builder(this);
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
    az_vm_resize(size: string): az_vm_resize_command_builder {
        return new az_vm_resize_command_builder(this, size);
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
    az_vm_restart(): az_vm_restart_command_builder {
        return new az_vm_restart_command_builder(this);
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
    az_vm_show(): az_vm_show_command_builder {
        return new az_vm_show_command_builder(this);
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
    az_vm_simulate_eviction(): az_vm_simulate_eviction_command_builder {
        return new az_vm_simulate_eviction_command_builder(this);
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
    az_vm_start(): az_vm_start_command_builder {
        return new az_vm_start_command_builder(this);
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
    az_vm_stop(): az_vm_stop_command_builder {
        return new az_vm_stop_command_builder(this);
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
    az_vm_update(): az_vm_update_command_builder {
        return new az_vm_update_command_builder(this);
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
    az_vm_wait(): az_vm_wait_command_builder {
        return new az_vm_wait_command_builder(this);
    }
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
class az_vm_availability_set_convert_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_availability_set_convert_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the availability set. */
    name(value: string): az_vm_availability_set_convert_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_availability_set_convert_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_availability_set_convert_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_availability_set_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the availability set. */
    name(value: string): az_vm_availability_set_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_availability_set_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_availability_set_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_availability_set_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Fault Domain count. */
    platformFaultDomainCount(value: string): az_vm_availability_set_create_command_builder {
        this.setFlag("--platform-fault-domain-count", value);
        return this;
    }

    /** Update Domain count. If unspecified, the server will pick the most optimal number like 5. */
    platformUpdateDomainCount(value: string): az_vm_availability_set_create_command_builder {
        this.setFlag("--platform-update-domain-count", value);
        return this;
    }

    /** The name or ID of the proximity placement group the availability set should be associated with. */
    ppg(value: string): az_vm_availability_set_create_command_builder {
        this.setFlag("--ppg", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_availability_set_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_vm_availability_set_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Contained VMs should use unmanaged disks. */
    unmanaged(value: string): az_vm_availability_set_create_command_builder {
        this.setFlag("--unmanaged", value);
        return this;
    }

    /** Generate and validate the ARM template without creating any resources. */
    validate(value: string): az_vm_availability_set_create_command_builder {
        this.setFlag("--validate", value);
        return this;
    }
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
class az_vm_availability_set_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_availability_set_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the availability set. */
    name(value: string): az_vm_availability_set_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_availability_set_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_availability_set_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_availability_set_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_availability_set_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_availability_set_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_availability_set_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_availability_set_list_sizes_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_availability_set_list_sizes_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the availability set. */
    name(value: string): az_vm_availability_set_list_sizes_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_availability_set_list_sizes_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_availability_set_list_sizes_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_availability_set_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_availability_set_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the availability set. */
    name(value: string): az_vm_availability_set_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_availability_set_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_availability_set_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_availability_set_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_availability_set_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_vm_availability_set_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_vm_availability_set_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_availability_set_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the availability set. */
    name(value: string): az_vm_availability_set_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The name or ID of the proximity placement group the availability set should be associated with. */
    ppg(value: string): az_vm_availability_set_update_command_builder {
        this.setFlag("--ppg", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_vm_availability_set_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_availability_set_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_vm_availability_set_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_availability_set_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_boot_diagnostics_disable_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_boot_diagnostics_disable_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_boot_diagnostics_disable_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_boot_diagnostics_disable_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_boot_diagnostics_disable_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_boot_diagnostics_enable_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_boot_diagnostics_enable_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_boot_diagnostics_enable_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_boot_diagnostics_enable_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or URI of a storage account (e.g. <a href="https://your_storage_account_name.blob.core.windows.net/">https://your_storage_account_name.blob.core.windows.net/</a>). If it's not specified, managed storage will be used. */
    storage(value: string): az_vm_boot_diagnostics_enable_command_builder {
        this.setFlag("--storage", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_boot_diagnostics_enable_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_boot_diagnostics_get_boot_log_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_boot_diagnostics_get_boot_log_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_boot_diagnostics_get_boot_log_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_boot_diagnostics_get_boot_log_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_boot_diagnostics_get_boot_log_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_boot_diagnostics_get_boot_log_uris_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Expiration duration in minutes for the SAS URIs with a value between 1 to 1440 minutes. If not specified, SAS URIs will be generated with a default expiration duration of 120 minutes. */
    expire(value: string): az_vm_boot_diagnostics_get_boot_log_uris_command_builder {
        this.setFlag("--expire", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_boot_diagnostics_get_boot_log_uris_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_boot_diagnostics_get_boot_log_uris_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_boot_diagnostics_get_boot_log_uris_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_boot_diagnostics_get_boot_log_uris_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_diagnostics_get_default_config_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** For Windows VMs. */
    isWindowsOs(value: string): az_vm_diagnostics_get_default_config_command_builder {
        this.setFlag("--is-windows-os", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_diagnostics_get_default_config_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_diagnostics_set_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, settings: string) {
        super(commandParent);
        this.settings(settings)
    }

    /** Json string or a file path, which defines data to be collected. */
    settings(value: string): az_vm_diagnostics_set_command_builder {
        this.setFlag("--settings", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_diagnostics_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** If set, the extension service will not automatically pick or upgrade to the latest minor version, even if the extension is redeployed. */
    noAutoUpgrade(value: boolean): az_vm_diagnostics_set_command_builder {
        this.setFlag("--no-auto-upgrade", value.toString());
        return this;
    }

    /** Json string or a file path containing private configurations such as storage account keys, etc. */
    protectedSettings(value: string): az_vm_diagnostics_set_command_builder {
        this.setFlag("--protected-settings", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_diagnostics_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_diagnostics_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Version of the diagnostics extension. Will use the latest if not specfied. */
    version(value: string): az_vm_diagnostics_set_command_builder {
        this.setFlag("--version", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_diagnostics_set_command_builder {
        this.setFlag("--vm-name", value);
        return this;
    }
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
class az_vm_disk_attach_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, vmName: string) {
        super(commandParent);
        this.vmName(vmName)
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_disk_attach_command_builder {
        this.setFlag("--vm-name", value);
        return this;
    }

    /** Disk caching policy. */
    caching(value: 'None' | 'ReadOnly' | 'ReadWrite'): az_vm_disk_attach_command_builder {
        this.setFlag("--caching", value);
        return this;
    }

    /** Enable write accelerator. */
    enableWriteAccelerator(value: string): az_vm_disk_attach_command_builder {
        this.setFlag("--enable-write-accelerator", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_disk_attach_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** 0-based logical unit number (LUN). Max value depends on the Virtual Machine size. */
    lun(value: string): az_vm_disk_attach_command_builder {
        this.setFlag("--lun", value);
        return this;
    }

    /** The name or ID of the managed disk. */
    name(value: string): az_vm_disk_attach_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Create a new disk. */
    new(value: string): az_vm_disk_attach_command_builder {
        this.setFlag("--new", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_disk_attach_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Size in GB. Max size: 4095 GB (certain preview disks can be larger). */
    sizeGb(value: string): az_vm_disk_attach_command_builder {
        this.setFlag("--size-gb", value);
        return this;
    }

    /** Underlying storage SKU. */
    sku(value: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'UltraSSD_LRS'): az_vm_disk_attach_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_disk_attach_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_disk_detach_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string, vmName: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.vmName(vmName)
    }

    /** The data disk name. */
    name(value: string): az_vm_disk_detach_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_disk_detach_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_disk_detach_command_builder {
        this.setFlag("--vm-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_disk_detach_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_encryption_disable_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Continue by ignoring client side validation errors. */
    force(value: string): az_vm_encryption_disable_command_builder {
        this.setFlag("--force", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_encryption_disable_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_encryption_disable_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_encryption_disable_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_encryption_disable_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Type of volume that the encryption operation is performed on. */
    volumeType(value: 'ALL' | 'DATA' | 'OS'): az_vm_encryption_disable_command_builder {
        this.setFlag("--volume-type", value);
        return this;
    }
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
class az_vm_encryption_enable_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, diskEncryptionKeyvault: string) {
        super(commandParent);
        this.diskEncryptionKeyvault(diskEncryptionKeyvault)
    }

    /** Name or ID of the key vault where the generated encryption key will be placed. */
    diskEncryptionKeyvault(value: string): az_vm_encryption_enable_command_builder {
        this.setFlag("--disk-encryption-keyvault", value);
        return this;
    }

    /** Thumbprint of the AAD app certificate with permissions to write secrets to the key vault. */
    aadClientCertThumbprint(value: string): az_vm_encryption_enable_command_builder {
        this.setFlag("--aad-client-cert-thumbprint", value);
        return this;
    }

    /** Client ID of an AAD app with permissions to write secrets to the key vault. */
    aadClientId(value: string): az_vm_encryption_enable_command_builder {
        this.setFlag("--aad-client-id", value);
        return this;
    }

    /** Client secret of the AAD app with permissions to write secrets to the key vault. */
    aadClientSecret(value: string): az_vm_encryption_enable_command_builder {
        this.setFlag("--aad-client-secret", value);
        return this;
    }

    /** Encrypts-formats data disks instead of encrypting them. Encrypt-formatting is a lot faster than in-place encryption but wipes out the partition getting encrypt-formatted. */
    encryptFormatAll(value: string): az_vm_encryption_enable_command_builder {
        this.setFlag("--encrypt-format-all", value);
        return this;
    }

    /** Continue by ignoring client side validation errors. */
    force(value: string): az_vm_encryption_enable_command_builder {
        this.setFlag("--force", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_encryption_enable_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** */
    keyEncryptionAlgorithm(value: string): az_vm_encryption_enable_command_builder {
        this.setFlag("--key-encryption-algorithm", value);
        return this;
    }

    /** Key vault key name or URL used to encrypt the disk encryption key. */
    keyEncryptionKey(value: string): az_vm_encryption_enable_command_builder {
        this.setFlag("--key-encryption-key", value);
        return this;
    }

    /** Name or ID of the key vault containing the key encryption key used to encrypt the disk encryption key. If missing, CLI will use `--disk-encryption-keyvault`. */
    keyEncryptionKeyvault(value: string): az_vm_encryption_enable_command_builder {
        this.setFlag("--key-encryption-keyvault", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_encryption_enable_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_encryption_enable_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_encryption_enable_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Type of volume that the encryption operation is performed on. */
    volumeType(value: 'ALL' | 'DATA' | 'OS'): az_vm_encryption_enable_command_builder {
        this.setFlag("--volume-type", value);
        return this;
    }
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
class az_vm_encryption_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_encryption_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_encryption_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_encryption_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_encryption_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_encryption_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_extension_image_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Show the latest version only. */
    latest(value: string): az_vm_extension_image_list_command_builder {
        this.setFlag("--latest", value);
        return this;
    }

    /** Image location. */
    location(value: string): az_vm_extension_image_list_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Image name. */
    name(value: string): az_vm_extension_image_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Image publisher name. */
    publisher(value: string): az_vm_extension_image_list_command_builder {
        this.setFlag("--publisher", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_extension_image_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_extension_image_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Extension version. */
    version(value: string): az_vm_extension_image_list_command_builder {
        this.setFlag("--version", value);
        return this;
    }
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
class az_vm_extension_image_list_names_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, location: string, publisher: string) {
        super(commandParent);
        this.location(location)
        this.publisher(publisher)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_extension_image_list_names_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Image publisher name. */
    publisher(value: string): az_vm_extension_image_list_names_command_builder {
        this.setFlag("--publisher", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_extension_image_list_names_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_extension_image_list_versions_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, location: string, name: string, publisher: string) {
        super(commandParent);
        this.location(location)
        this.name(name)
        this.publisher(publisher)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_extension_image_list_versions_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name of the extension. */
    name(value: string): az_vm_extension_image_list_versions_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Image publisher name. */
    publisher(value: string): az_vm_extension_image_list_versions_command_builder {
        this.setFlag("--publisher", value);
        return this;
    }

    /** The filter to apply on the operation. */
    filter(value: string): az_vm_extension_image_list_versions_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** The $orderby odata query option. */
    orderby(value: string): az_vm_extension_image_list_versions_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_extension_image_list_versions_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The $top odata query option. */
    top(value: string): az_vm_extension_image_list_versions_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_vm_extension_image_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, location: string, name: string, publisher: string, version: string) {
        super(commandParent);
        this.location(location)
        this.name(name)
        this.publisher(publisher)
        this.version(version)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_extension_image_show_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name of the extension. */
    name(value: string): az_vm_extension_image_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Image publisher name. */
    publisher(value: string): az_vm_extension_image_show_command_builder {
        this.setFlag("--publisher", value);
        return this;
    }

    /** Extension version. */
    version(value: string): az_vm_extension_image_show_command_builder {
        this.setFlag("--version", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_extension_image_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_extension_image_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_extension_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_extension_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the extension. */
    name(value: string): az_vm_extension_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_extension_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_extension_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_extension_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_extension_delete_command_builder {
        this.setFlag("--vm-name", value);
        return this;
    }
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
class az_vm_extension_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string, vmName: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.vmName(vmName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_extension_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_extension_list_command_builder {
        this.setFlag("--vm-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_extension_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_extension_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_extension_set_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, publisher: string) {
        super(commandParent);
        this.name(name)
        this.publisher(publisher)
    }

    /** Name of the extension. */
    name(value: string): az_vm_extension_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The name of the extension publisher. */
    publisher(value: string): az_vm_extension_set_command_builder {
        this.setFlag("--publisher", value);
        return this;
    }

    /** Name of extension instance, which can be customized. Default: name of the extension. */
    extensionInstanceName(value: string): az_vm_extension_set_command_builder {
        this.setFlag("--extension-instance-name", value);
        return this;
    }

    /** Force to update even if the extension configuration has not changed. */
    forceUpdate(value: string): az_vm_extension_set_command_builder {
        this.setFlag("--force-update", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_extension_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** If set, the extension service will not automatically pick or upgrade to the latest minor version, even if the extension is redeployed. */
    noAutoUpgrade(value: boolean): az_vm_extension_set_command_builder {
        this.setFlag("--no-auto-upgrade", value.toString());
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_extension_set_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Protected settings in JSON format for sensitive information like credentials. A JSON file path is also accepted. */
    protectedSettings(value: string): az_vm_extension_set_command_builder {
        this.setFlag("--protected-settings", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_extension_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Extension settings in JSON format. A JSON file path is also accepted. */
    settings(value: string): az_vm_extension_set_command_builder {
        this.setFlag("--settings", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_extension_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The version of the extension. To pin extension version to this value, please specify --no-auto-upgrade. */
    version(value: string): az_vm_extension_set_command_builder {
        this.setFlag("--version", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_extension_set_command_builder {
        this.setFlag("--vm-name", value);
        return this;
    }
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
class az_vm_extension_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** The expand expression to apply on the operation. */
    expand(value: string): az_vm_extension_show_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_extension_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the extension. */
    name(value: string): az_vm_extension_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_extension_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_extension_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_extension_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_extension_show_command_builder {
        this.setFlag("--vm-name", value);
        return this;
    }
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
class az_vm_extension_wait_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_vm_extension_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_vm_extension_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_vm_extension_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_vm_extension_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** The expand expression to apply on the operation. */
    expand(value: string): az_vm_extension_wait_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_extension_wait_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_vm_extension_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name of the extension. */
    name(value: string): az_vm_extension_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_extension_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_extension_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_vm_extension_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_vm_extension_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_extension_wait_command_builder {
        this.setFlag("--vm-name", value);
        return this;
    }
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
class az_vm_host_group_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the Dedicated Host Group. */
    name(value: string): az_vm_host_group_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_host_group_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Specify whether virtual machines or virtual machine scale sets can be placed automatically on the dedicated host group. Automatic placement means resources are allocated on dedicated hosts, that are chosen by Azure, under the dedicated host group. The value is defaulted to true when not provided. */
    automaticPlacement(value: boolean): az_vm_host_group_create_command_builder {
        this.setFlag("--automatic-placement", value.toString());
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. Otherwise, location will default to the resource group's location. */
    location(value: string): az_vm_host_group_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Number of fault domains that the host group can span. Allowed values: 1, 2, 3. */
    platformFaultDomainCount(value: string): az_vm_host_group_create_command_builder {
        this.setFlag("--platform-fault-domain-count", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_host_group_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_vm_host_group_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Availability zone into which to provision the resource. */
    zone(value: '1' | '2' | '3'): az_vm_host_group_create_command_builder {
        this.setFlag("--zone", value);
        return this;
    }
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
class az_vm_host_group_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_host_group_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Dedicated Host Group. */
    name(value: string): az_vm_host_group_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_host_group_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_host_group_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_vm_host_group_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_vm_host_group_get_instance_view_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_host_group_get_instance_view_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Dedicated Host Group. */
    name(value: string): az_vm_host_group_get_instance_view_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_host_group_get_instance_view_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_host_group_get_instance_view_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_host_group_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_host_group_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_host_group_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_host_group_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_host_group_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_host_group_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Dedicated Host Group. */
    name(value: string): az_vm_host_group_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_host_group_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_host_group_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_host_group_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_host_group_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_vm_host_group_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_vm_host_group_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_host_group_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Dedicated Host Group. */
    name(value: string): az_vm_host_group_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_vm_host_group_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_host_group_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_vm_host_group_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_host_group_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_host_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, hostGroup: string, name: string, resourceGroup: string, sku: 'DSv3-Type1' | 'ESv3-Type1' | 'FSv2-Type2') {
        super(commandParent);
        this.hostGroup(hostGroup)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.sku(sku)
    }

    /** Name of the Dedicated Host Group. */
    hostGroup(value: string): az_vm_host_create_command_builder {
        this.setFlag("--host-group", value);
        return this;
    }

    /** Name of the Dedicated Host. */
    name(value: string): az_vm_host_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_host_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Sku of the dedicated host. */
    sku(value: 'DSv3-Type1' | 'ESv3-Type1' | 'FSv2-Type2'): az_vm_host_create_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Replace the host automatically if a failure occurs. */
    autoReplace(value: boolean): az_vm_host_create_command_builder {
        this.setFlag("--auto-replace", value.toString());
        return this;
    }

    /** The software license type that will be applied to the VMs deployed on the dedicated host. */
    licenseType(value: 'None' | 'Windows_Server_Hybrid' | 'Windows_Server_Perpetual'): az_vm_host_create_command_builder {
        this.setFlag("--license-type", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. Otherwise, location will default to the resource group's location. */
    location(value: string): az_vm_host_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Fault domain of the host within a group. Allowed values: 0, 1, 2. */
    platformFaultDomain(value: string): az_vm_host_create_command_builder {
        this.setFlag("--platform-fault-domain", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_host_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_vm_host_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
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
class az_vm_host_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the Dedicated Host Group. */
    hostGroup(value: string): az_vm_host_delete_command_builder {
        this.setFlag("--host-group", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_host_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Dedicated Host. */
    name(value: string): az_vm_host_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_host_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_host_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_vm_host_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_vm_host_get_instance_view_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the Dedicated Host Group. */
    hostGroup(value: string): az_vm_host_get_instance_view_command_builder {
        this.setFlag("--host-group", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_host_get_instance_view_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Dedicated Host. */
    name(value: string): az_vm_host_get_instance_view_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_host_get_instance_view_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_host_get_instance_view_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_host_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, hostGroup: string, resourceGroup: string) {
        super(commandParent);
        this.hostGroup(hostGroup)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the Dedicated Host Group. */
    hostGroup(value: string): az_vm_host_list_command_builder {
        this.setFlag("--host-group", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_host_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_host_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_host_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_host_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the Dedicated Host Group. */
    hostGroup(value: string): az_vm_host_show_command_builder {
        this.setFlag("--host-group", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_host_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Dedicated Host. */
    name(value: string): az_vm_host_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_host_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_host_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_host_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_host_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_vm_host_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_vm_host_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Name of the Dedicated Host Group. */
    hostGroup(value: string): az_vm_host_update_command_builder {
        this.setFlag("--host-group", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_host_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Dedicated Host. */
    name(value: string): az_vm_host_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_vm_host_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_host_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_vm_host_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_host_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_identity_assign_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'. */
    identities(value: string): az_vm_identity_assign_command_builder {
        this.setFlag("--identities", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_identity_assign_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_identity_assign_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_identity_assign_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Role name or id the system assigned identity will have. */
    role(value: string): az_vm_identity_assign_command_builder {
        this.setFlag("--role", value);
        return this;
    }

    /** Scope that the system assigned identity can access. */
    scope(value: string): az_vm_identity_assign_command_builder {
        this.setFlag("--scope", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_identity_assign_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_identity_remove_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Space-separated identities to remove. Use '[system]' to refer to the system assigned identity. Default: '[system]'. */
    identities(value: string): az_vm_identity_remove_command_builder {
        this.setFlag("--identities", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_identity_remove_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_identity_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_identity_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_identity_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_identity_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_identity_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_identity_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_identity_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_identity_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_identity_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_image_terms_accept_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Image offer. */
    offer(value: string): az_vm_image_terms_accept_command_builder {
        this.setFlag("--offer", value);
        return this;
    }

    /** Image billing plan. */
    plan(value: string): az_vm_image_terms_accept_command_builder {
        this.setFlag("--plan", value);
        return this;
    }

    /** Image publisher. */
    publisher(value: string): az_vm_image_terms_accept_command_builder {
        this.setFlag("--publisher", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_image_terms_accept_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** URN, in the format of 'publisher:offer:sku:version'. If specified, other argument values can be omitted. */
    urn(value: string): az_vm_image_terms_accept_command_builder {
        this.setFlag("--urn", value);
        return this;
    }
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
class az_vm_image_terms_cancel_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Image offer. */
    offer(value: string): az_vm_image_terms_cancel_command_builder {
        this.setFlag("--offer", value);
        return this;
    }

    /** Image billing plan. */
    plan(value: string): az_vm_image_terms_cancel_command_builder {
        this.setFlag("--plan", value);
        return this;
    }

    /** Image publisher. */
    publisher(value: string): az_vm_image_terms_cancel_command_builder {
        this.setFlag("--publisher", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_image_terms_cancel_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** URN, in the format of 'publisher:offer:sku:version'. If specified, other argument values can be omitted. */
    urn(value: string): az_vm_image_terms_cancel_command_builder {
        this.setFlag("--urn", value);
        return this;
    }
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
class az_vm_image_terms_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Image offer. */
    offer(value: string): az_vm_image_terms_show_command_builder {
        this.setFlag("--offer", value);
        return this;
    }

    /** Image billing plan. */
    plan(value: string): az_vm_image_terms_show_command_builder {
        this.setFlag("--plan", value);
        return this;
    }

    /** Image publisher. */
    publisher(value: string): az_vm_image_terms_show_command_builder {
        this.setFlag("--publisher", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_image_terms_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_image_terms_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** URN, in the format of 'publisher:offer:sku:version'. If specified, other argument values can be omitted. */
    urn(value: string): az_vm_image_terms_show_command_builder {
        this.setFlag("--urn", value);
        return this;
    }
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
class az_vm_image_accept_terms_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Image offer. */
    offer(value: string): az_vm_image_accept_terms_command_builder {
        this.setFlag("--offer", value);
        return this;
    }

    /** Image billing plan. */
    plan(value: string): az_vm_image_accept_terms_command_builder {
        this.setFlag("--plan", value);
        return this;
    }

    /** Image publisher. */
    publisher(value: string): az_vm_image_accept_terms_command_builder {
        this.setFlag("--publisher", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_image_accept_terms_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** URN, in format of 'publisher:offer:sku:version'. If specified, other argument values can be omitted. */
    urn(value: string): az_vm_image_accept_terms_command_builder {
        this.setFlag("--urn", value);
        return this;
    }
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
class az_vm_image_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Retrieve image list from live Azure service rather using an offline image list. */
    all(value: string): az_vm_image_list_command_builder {
        this.setFlag("--all", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_image_list_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Image offer name, partial name is accepted. */
    offer(value: string): az_vm_image_list_command_builder {
        this.setFlag("--offer", value);
        return this;
    }

    /** Image publisher name, partial name is accepted. */
    publisher(value: string): az_vm_image_list_command_builder {
        this.setFlag("--publisher", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_image_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Image sku name, partial name is accepted. */
    sku(value: string): az_vm_image_list_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_image_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_image_list_offers_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, location: string, publisher: string) {
        super(commandParent);
        this.location(location)
        this.publisher(publisher)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_image_list_offers_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** A valid image publisher. */
    publisher(value: string): az_vm_image_list_offers_command_builder {
        this.setFlag("--publisher", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_image_list_offers_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_image_list_publishers_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, location: string) {
        super(commandParent);
        this.location(location)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_image_list_publishers_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_image_list_publishers_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_image_list_skus_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, location: string, offer: string, publisher: string) {
        super(commandParent);
        this.location(location)
        this.offer(offer)
        this.publisher(publisher)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_image_list_skus_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Image offer. */
    offer(value: string): az_vm_image_list_skus_command_builder {
        this.setFlag("--offer", value);
        return this;
    }

    /** A valid image publisher. */
    publisher(value: string): az_vm_image_list_skus_command_builder {
        this.setFlag("--publisher", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_image_list_skus_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_image_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_image_show_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Image offer. */
    offer(value: string): az_vm_image_show_command_builder {
        this.setFlag("--offer", value);
        return this;
    }

    /** Image publisher. */
    publisher(value: string): az_vm_image_show_command_builder {
        this.setFlag("--publisher", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_image_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Image sku. */
    sku(value: string): az_vm_image_show_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_image_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** URN, in format of 'publisher:offer:sku:version'. If specified, other argument values can be omitted. */
    urn(value: string): az_vm_image_show_command_builder {
        this.setFlag("--urn", value);
        return this;
    }

    /** Image sku's version. */
    version(value: string): az_vm_image_show_command_builder {
        this.setFlag("--version", value);
        return this;
    }
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
class az_vm_monitor_log_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, analyticsQuery: string) {
        super(commandParent);
        this.analyticsQuery(analyticsQuery)
    }

    /** Query to execute over Log Analytics data. */
    analyticsQuery(value: string): az_vm_monitor_log_show_command_builder {
        this.setFlag("--analytics-query", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_monitor_log_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_monitor_log_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_monitor_log_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_monitor_log_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_monitor_log_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Timespan over which to query. Defaults to querying all available data. */
    timespan(value: string): az_vm_monitor_log_show_command_builder {
        this.setFlag("--timespan", value);
        return this;
    }
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
class az_vm_monitor_metrics_list_definitions_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name or ID of a virtual machine. */
    name(value: string): az_vm_monitor_metrics_list_definitions_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_monitor_metrics_list_definitions_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Namespace to query metric definitions for. */
    namespace(value: string): az_vm_monitor_metrics_list_definitions_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_monitor_metrics_list_definitions_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_monitor_metrics_tail_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name or ID of a virtual machine. */
    name(value: string): az_vm_monitor_metrics_tail_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_monitor_metrics_tail_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The list of aggregation types (space-separated) to retrieve. */
    aggregation(value: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'Total'): az_vm_monitor_metrics_tail_command_builder {
        this.setFlag("--aggregation", value);
        return this;
    }

    /** The list of dimensions (space-separated) the metrics are queried into. */
    dimension(value: string): az_vm_monitor_metrics_tail_command_builder {
        this.setFlag("--dimension", value);
        return this;
    }

    /** End time of the query. Defaults to the current time. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm). */
    endTime(value: string): az_vm_monitor_metrics_tail_command_builder {
        this.setFlag("--end-time", value);
        return this;
    }

    /** A string used to reduce the set of metric data returned. eg. "LUN eq '\*'". */
    filter(value: string): az_vm_monitor_metrics_tail_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** The interval over which to aggregate metrics, in ##h##m format. */
    interval(value: string): az_vm_monitor_metrics_tail_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Return the metadata values instead of metric data. */
    metadata(value: string): az_vm_monitor_metrics_tail_command_builder {
        this.setFlag("--metadata", value);
        return this;
    }

    /** Space-separated list of metric names to retrieve. */
    metrics(value: string): az_vm_monitor_metrics_tail_command_builder {
        this.setFlag("--metrics", value);
        return this;
    }

    /** Namespace to query metric definitions for. */
    namespace(value: string): az_vm_monitor_metrics_tail_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** Time offset of the query range, in ##d##h format. */
    offset(value: string): az_vm_monitor_metrics_tail_command_builder {
        this.setFlag("--offset", value);
        return this;
    }

    /** Aggregation to use for sorting results and the direction of the sort. Only one order can be specificed. Examples: sum asc. */
    orderby(value: string): az_vm_monitor_metrics_tail_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Start time of the query. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm). */
    startTime(value: string): az_vm_monitor_metrics_tail_command_builder {
        this.setFlag("--start-time", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_monitor_metrics_tail_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Max number of records to retrieve. Valid only if --filter used. */
    top(value: string): az_vm_monitor_metrics_tail_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_vm_nic_add_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, nics: string, resourceGroup: string, vmName: string) {
        super(commandParent);
        this.nics(nics)
        this.resourceGroup(resourceGroup)
        this.vmName(vmName)
    }

    /** Names or IDs of NICs. */
    nics(value: string): az_vm_nic_add_command_builder {
        this.setFlag("--nics", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_nic_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_nic_add_command_builder {
        this.setFlag("--vm-name", value);
        return this;
    }

    /** Name or ID of the primary NIC. If missing, the first NIC in the list will be the primary. */
    primaryNic(value: string): az_vm_nic_add_command_builder {
        this.setFlag("--primary-nic", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_nic_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_nic_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string, vmName: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.vmName(vmName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_nic_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_nic_list_command_builder {
        this.setFlag("--vm-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_nic_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_nic_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_nic_remove_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, nics: string, resourceGroup: string, vmName: string) {
        super(commandParent);
        this.nics(nics)
        this.resourceGroup(resourceGroup)
        this.vmName(vmName)
    }

    /** Names or IDs of NICs. */
    nics(value: string): az_vm_nic_remove_command_builder {
        this.setFlag("--nics", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_nic_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_nic_remove_command_builder {
        this.setFlag("--vm-name", value);
        return this;
    }

    /** Name or ID of the primary NIC. If missing, the first NIC in the list will be the primary. */
    primaryNic(value: string): az_vm_nic_remove_command_builder {
        this.setFlag("--primary-nic", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_nic_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_nic_set_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, nics: string, resourceGroup: string, vmName: string) {
        super(commandParent);
        this.nics(nics)
        this.resourceGroup(resourceGroup)
        this.vmName(vmName)
    }

    /** Names or IDs of NICs. */
    nics(value: string): az_vm_nic_set_command_builder {
        this.setFlag("--nics", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_nic_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_nic_set_command_builder {
        this.setFlag("--vm-name", value);
        return this;
    }

    /** Name or ID of the primary NIC. If missing, the first NIC in the list will be the primary. */
    primaryNic(value: string): az_vm_nic_set_command_builder {
        this.setFlag("--primary-nic", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_nic_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_nic_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, nic: string, resourceGroup: string, vmName: string) {
        super(commandParent);
        this.nic(nic)
        this.resourceGroup(resourceGroup)
        this.vmName(vmName)
    }

    /** NIC name or ID. */
    nic(value: string): az_vm_nic_show_command_builder {
        this.setFlag("--nic", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_nic_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_nic_show_command_builder {
        this.setFlag("--vm-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_nic_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_nic_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_run_command_invoke_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, commandId: string) {
        super(commandParent);
        this.commandId(commandId)
    }

    /** The command id. */
    commandId(value: string): az_vm_run_command_invoke_command_builder {
        this.setFlag("--command-id", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_run_command_invoke_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_run_command_invoke_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Space-separated parameters in the format of '[name=]value'. */
    parameters(value: string): az_vm_run_command_invoke_command_builder {
        this.setFlag("--parameters", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_run_command_invoke_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Space-separated script lines. Use @{file} to load script from a file. */
    scripts(value: string): az_vm_run_command_invoke_command_builder {
        this.setFlag("--scripts", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_run_command_invoke_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_run_command_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, location: string) {
        super(commandParent);
        this.location(location)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_run_command_list_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_run_command_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_run_command_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_run_command_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, commandId: string, location: string) {
        super(commandParent);
        this.commandId(commandId)
        this.location(location)
    }

    /** The command id. */
    commandId(value: string): az_vm_run_command_show_command_builder {
        this.setFlag("--command-id", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_run_command_show_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_run_command_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_run_command_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_secret_add_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, certificate: string, keyvault: string) {
        super(commandParent);
        this.certificate(certificate)
        this.keyvault(keyvault)
    }

    /** Key vault certificate name or its full secret URL. */
    certificate(value: string): az_vm_secret_add_command_builder {
        this.setFlag("--certificate", value);
        return this;
    }

    /** Name or ID of the key vault. */
    keyvault(value: string): az_vm_secret_add_command_builder {
        this.setFlag("--keyvault", value);
        return this;
    }

    /** Windows certificate store names. Default: My. */
    certificateStore(value: string): az_vm_secret_add_command_builder {
        this.setFlag("--certificate-store", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_secret_add_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_secret_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_secret_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_secret_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_secret_format_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, secrets: string) {
        super(commandParent);
        this.secrets(secrets)
    }

    /** Space-separated list of key vault secret URIs. Perhaps, produced by 'az keyvault secret list-versions --vault-name vaultname -n cert1 --query "[?attributes.enabled].id" -o tsv'. */
    secrets(value: string): az_vm_secret_format_command_builder {
        this.setFlag("--secrets", value);
        return this;
    }

    /** Windows certificate store names. Default: My. */
    certificateStore(value: string): az_vm_secret_format_command_builder {
        this.setFlag("--certificate-store", value);
        return this;
    }

    /** Name or ID of the key vault. */
    keyvault(value: string): az_vm_secret_format_command_builder {
        this.setFlag("--keyvault", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_secret_format_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_secret_format_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_secret_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_secret_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_secret_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_secret_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_secret_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_secret_remove_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, keyvault: string) {
        super(commandParent);
        this.keyvault(keyvault)
    }

    /** Name or ID of the key vault. */
    keyvault(value: string): az_vm_secret_remove_command_builder {
        this.setFlag("--keyvault", value);
        return this;
    }

    /** Key vault certificate name or its full secret URL. */
    certificate(value: string): az_vm_secret_remove_command_builder {
        this.setFlag("--certificate", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_secret_remove_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_secret_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_secret_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_secret_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_unmanaged_disk_attach_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string, vmName: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.vmName(vmName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_unmanaged_disk_attach_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_unmanaged_disk_attach_command_builder {
        this.setFlag("--vm-name", value);
        return this;
    }

    /** Disk caching policy. */
    caching(value: 'None' | 'ReadOnly' | 'ReadWrite'): az_vm_unmanaged_disk_attach_command_builder {
        this.setFlag("--caching", value);
        return this;
    }

    /** 0-based logical unit number (LUN). Max value depends on the Virtual Machine size. */
    lun(value: string): az_vm_unmanaged_disk_attach_command_builder {
        this.setFlag("--lun", value);
        return this;
    }

    /** The data disk name. */
    name(value: string): az_vm_unmanaged_disk_attach_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Create a new disk. */
    new(value: string): az_vm_unmanaged_disk_attach_command_builder {
        this.setFlag("--new", value);
        return this;
    }

    /** Size in GB. Max size: 4095 GB (certain preview disks can be larger). */
    sizeGb(value: string): az_vm_unmanaged_disk_attach_command_builder {
        this.setFlag("--size-gb", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_unmanaged_disk_attach_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Virtual hard disk URI. For example: <a href="https://mystorage.blob.core.windows.net/vhds/d1.vhd">https://mystorage.blob.core.windows.net/vhds/d1.vhd</a>. */
    vhdUri(value: string): az_vm_unmanaged_disk_attach_command_builder {
        this.setFlag("--vhd-uri", value);
        return this;
    }
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
class az_vm_unmanaged_disk_detach_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string, vmName: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.vmName(vmName)
    }

    /** The data disk name. */
    name(value: string): az_vm_unmanaged_disk_detach_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_unmanaged_disk_detach_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_unmanaged_disk_detach_command_builder {
        this.setFlag("--vm-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_unmanaged_disk_detach_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_unmanaged_disk_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, vmName: string, resourceGroup: string) {
        super(commandParent);
        this.vmName(vmName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    vmName(value: string): az_vm_unmanaged_disk_list_command_builder {
        this.setFlag("--vm-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_unmanaged_disk_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_unmanaged_disk_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_unmanaged_disk_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_user_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, username: string) {
        super(commandParent);
        this.username(username)
    }

    /** The user name. */
    username(value: string): az_vm_user_delete_command_builder {
        this.setFlag("--username", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_user_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_user_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_user_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_user_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_user_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_user_reset_ssh_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_user_reset_ssh_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_user_reset_ssh_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_user_reset_ssh_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_user_reset_ssh_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_user_reset_ssh_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_user_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, username: string) {
        super(commandParent);
        this.username(username)
    }

    /** The user name. */
    username(value: string): az_vm_user_update_command_builder {
        this.setFlag("--username", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_user_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_user_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_user_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The user password. */
    password(value: string): az_vm_user_update_command_builder {
        this.setFlag("--password", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_user_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** SSH public key file value or public key file path. This command appends the new public key text to the ~/.ssh/authorized_keys file for the admin user on the VM. This does not replace or remove any existing SSH keys. */
    sshKeyValue(value: string): az_vm_user_update_command_builder {
        this.setFlag("--ssh-key-value", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_user_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_assess_patches_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_assess_patches_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_assess_patches_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_assess_patches_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_assess_patches_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_auto_shutdown_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** The email recipient to send notifications to (can be a list of semi-colon separated email addresses). */
    email(value: string): az_vm_auto_shutdown_command_builder {
        this.setFlag("--email", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_auto_shutdown_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_auto_shutdown_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_auto_shutdown_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Turn off auto-shutdown for VM. Configuration will be cleared. */
    off(value: string): az_vm_auto_shutdown_command_builder {
        this.setFlag("--off", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_auto_shutdown_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_auto_shutdown_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The UTC time of day the schedule will occur every day. Format: hhmm. Example: 1730. */
    time(value: string): az_vm_auto_shutdown_command_builder {
        this.setFlag("--time", value);
        return this;
    }

    /** The webhook URL to which the notification will be sent. */
    webhook(value: string): az_vm_auto_shutdown_command_builder {
        this.setFlag("--webhook", value);
        return this;
    }
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
class az_vm_capture_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, vhdNamePrefix: string) {
        super(commandParent);
        this.vhdNamePrefix(vhdNamePrefix)
    }

    /** The VHD name prefix specify for the VM disks. */
    vhdNamePrefix(value: string): az_vm_capture_command_builder {
        this.setFlag("--vhd-name-prefix", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_capture_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_capture_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Overwrite the existing disk file. */
    overwrite(value: string): az_vm_capture_command_builder {
        this.setFlag("--overwrite", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_capture_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The storage account container name in which to save the disks. */
    storageContainer(value: string): az_vm_capture_command_builder {
        this.setFlag("--storage-container", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_capture_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_convert_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_convert_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_convert_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_convert_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_convert_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the virtual machine. */
    name(value: string): az_vm_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Enable accelerated networking. Unless specified, CLI will enable it based on machine image and size. */
    acceleratedNetworking(value: boolean): az_vm_create_command_builder {
        this.setFlag("--accelerated-networking", value.toString());
        return this;
    }

    /** Password for the VM if authentication type is 'Password'. */
    adminPassword(value: string): az_vm_create_command_builder {
        this.setFlag("--admin-password", value);
        return this;
    }

    /** Username for the VM. Default value is current username of OS. If the default value is system reserved, then default value will be set to azureuser. Please refer to <a href="https://docs.microsoft.com/en-us/rest/api/compute/virtualmachines/createorupdate#osprofile">https://docs.microsoft.com/en-us/rest/api/compute/virtualmachines/createorupdate#osprofile</a> to get a full list of reserved values. */
    adminUsername(value: string): az_vm_create_command_builder {
        this.setFlag("--admin-username", value);
        return this;
    }

    /** Space-separated list of existing application security groups to associate with the VM. */
    asgs(value: string): az_vm_create_command_builder {
        this.setFlag("--asgs", value);
        return this;
    }

    /** Accept system or user assigned identities separated by spaces. Use '[system]' to refer system assigned identity, or a resource id to refer user assigned identity. Check out help for more examples. */
    assignIdentity(value: string): az_vm_create_command_builder {
        this.setFlag("--assign-identity", value);
        return this;
    }

    /** Attach existing data disks to the VM. Can use the name or ID of a managed disk or the URI to an unmanaged disk VHD. */
    attachDataDisks(value: string): az_vm_create_command_builder {
        this.setFlag("--attach-data-disks", value);
        return this;
    }

    /** Attach an existing OS disk to the VM. Can use the name or ID of a managed disk or the URI to an unmanaged disk VHD. */
    attachOsDisk(value: string): az_vm_create_command_builder {
        this.setFlag("--attach-os-disk", value);
        return this;
    }

    /** Type of authentication to use with the VM. Defaults to password for Windows and SSH public key for Linux. "all" enables both ssh and password authentication. */
    authenticationType(value: 'all' | 'password' | 'ssh'): az_vm_create_command_builder {
        this.setFlag("--authentication-type", value);
        return this;
    }

    /** Name or ID of an existing availability set to add the VM to. None by default. */
    availabilitySet(value: string): az_vm_create_command_builder {
        this.setFlag("--availability-set", value);
        return this;
    }

    /** Pre-existing storage account name or its blob uri to capture boot diagnostics. Its sku should be one of Standard_GRS, Standard_LRS and Standard_RAGRS. */
    bootDiagnosticsStorage(value: string): az_vm_create_command_builder {
        this.setFlag("--boot-diagnostics-storage", value);
        return this;
    }

    /** The host OS name of the virtual machine. Defaults to the name of the VM. */
    computerName(value: string): az_vm_create_command_builder {
        this.setFlag("--computer-name", value);
        return this;
    }

    /** Custom init script file or text (cloud-init, cloud-config, etc..). */
    customData(value: string): az_vm_create_command_builder {
        this.setFlag("--custom-data", value);
        return this;
    }

    /** Storage caching type for data disk(s), including 'None', 'ReadOnly', 'ReadWrite', etc. Use a singular value to apply on all disks, or use `<lun>=<vaule1> <lun>=<value2>` to configure individual disk. */
    dataDiskCaching(value: string): az_vm_create_command_builder {
        this.setFlag("--data-disk-caching", value);
        return this;
    }

    /** Names or IDs (space delimited) of disk encryption sets for data disks. */
    dataDiskEncryptionSets(value: string): az_vm_create_command_builder {
        this.setFlag("--data-disk-encryption-sets", value);
        return this;
    }

    /** Space-separated empty managed data disk sizes in GB to create. */
    dataDiskSizesGb(value: string): az_vm_create_command_builder {
        this.setFlag("--data-disk-sizes-gb", value);
        return this;
    }

    /** Indicates whether virtual machine agent should be provisioned on the virtual machine. When this property is not specified, default behavior is to set it to true. This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later. */
    enableAgent(value: boolean): az_vm_create_command_builder {
        this.setFlag("--enable-agent", value.toString());
        return this;
    }

    /** Indicate whether Automatic Updates is enabled for the Windows virtual machine. */
    enableAutoUpdate(value: boolean): az_vm_create_command_builder {
        this.setFlag("--enable-auto-update", value.toString());
        return this;
    }

    /** Enable Host Encryption for the VM or VMSS. This will enable the encryption for all the disks including Resource/Temp disk at host itself. */
    encryptionAtHost(value: boolean): az_vm_create_command_builder {
        this.setFlag("--encryption-at-host", value.toString());
        return this;
    }

    /** Allows you to create an OS disk directly on the host node, providing local disk performance and faster VM/VMSS reimage time. */
    ephemeralOsDisk(value: boolean): az_vm_create_command_builder {
        this.setFlag("--ephemeral-os-disk", value.toString());
        return this;
    }

    /** The eviction policy for the Spot priority virtual machine. Default eviction policy is Deallocate for a Spot priority virtual machine. */
    evictionPolicy(value: 'Deallocate' | 'Delete'): az_vm_create_command_builder {
        this.setFlag("--eviction-policy", value);
        return this;
    }

    /** Generate SSH public and private key files if missing. The keys will be stored in the ~/.ssh directory. */
    generateSshKeys(value: string): az_vm_create_command_builder {
        this.setFlag("--generate-ssh-keys", value);
        return this;
    }

    /** Name or ID of the dedicated host this VM will reside in. If a name is specified, a host group must be specified via `--host-group`. */
    host(value: string): az_vm_create_command_builder {
        this.setFlag("--host", value);
        return this;
    }

    /** Name of the dedicated host group containing the dedicated host this VM will reside in. */
    hostGroup(value: string): az_vm_create_command_builder {
        this.setFlag("--host-group", value);
        return this;
    }

    /** The name of the operating system image as a URN alias, URN, custom image name or ID, custom image version ID, or VHD blob URI. This parameter is required unless using `--attach-os-disk.` Valid URN format: "Publisher:Offer:Sku:Version". */
    image(value: string): az_vm_create_command_builder {
        this.setFlag("--image", value);
        return this;
    }

    /** Specifies that the Windows image or disk was licensed on-premises. To enable Azure Hybrid Benefit for Windows Server, use 'Windows_Server'. To enable Multitenant Hosting Rights for Windows 10, use 'Windows_Client'. For more information see the Azure Windows VM online docs. */
    licenseType(value: 'None' | 'RHEL_BYOS' | 'SLES_BYOS' | 'Windows_Client' | 'Windows_Server'): az_vm_create_command_builder {
        this.setFlag("--license-type", value);
        return this;
    }

    /** Location in which to create VM and related resources. If default location is not configured, will default to the resource group's location. */
    location(value: string): az_vm_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The maximum price (in US Dollars) you are willing to pay for a Spot VM/VMSS. -1 indicates that the Spot VM/VMSS should not be evicted for price reasons. */
    maxPrice(value: string): az_vm_create_command_builder {
        this.setFlag("--max-price", value);
        return this;
    }

    /** Names or IDs of existing NICs to attach to the VM. The first NIC will be designated as primary. If omitted, a new NIC will be created. If an existing NIC is specified, do not specify subnet, VNet, public IP or NSG. */
    nics(value: string): az_vm_create_command_builder {
        this.setFlag("--nics", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The name to use when creating a new Network Security Group (default) or referencing an existing one. Can also reference an existing NSG by ID or specify "" for none ('""' in Azure CLI using PowerShell or --% operator). */
    nsg(value: string): az_vm_create_command_builder {
        this.setFlag("--nsg", value);
        return this;
    }

    /** NSG rule to create when creating a new NSG. Defaults to open ports for allowing RDP on Windows and allowing SSH on Linux. NONE represents no NSG rule. */
    nsgRule(value: 'NONE' | 'RDP' | 'SSH'): az_vm_create_command_builder {
        this.setFlag("--nsg-rule", value);
        return this;
    }

    /** Storage caching type for the VM OS disk. Default: ReadWrite. */
    osDiskCaching(value: 'None' | 'ReadOnly' | 'ReadWrite'): az_vm_create_command_builder {
        this.setFlag("--os-disk-caching", value);
        return this;
    }

    /** Name or ID of disk encryption set for OS disk. */
    osDiskEncryptionSet(value: string): az_vm_create_command_builder {
        this.setFlag("--os-disk-encryption-set", value);
        return this;
    }

    /** The name of the new VM OS disk. */
    osDiskName(value: string): az_vm_create_command_builder {
        this.setFlag("--os-disk-name", value);
        return this;
    }

    /** OS disk size in GB to create. */
    osDiskSizeGb(value: string): az_vm_create_command_builder {
        this.setFlag("--os-disk-size-gb", value);
        return this;
    }

    /** Type of OS installed on a custom VHD. Do not use when specifying an URN or URN alias. */
    osType(value: 'linux' | 'windows'): az_vm_create_command_builder {
        this.setFlag("--os-type", value);
        return this;
    }

    /** Mode of in-guest patching to IaaS virtual machine. Possible values are: Manual - You  control the application of patches to a virtual machine. You do this by applying patches manually inside the VM. In this mode, automatic updates are disabled; the paramater --enable-auto-update must be false. AutomaticByOS - The virtual machine will automatically be updated by the OS. The parameter --enable-auto-update must be true. AutomaticByPlatform - the virtual machine will automatically updated by the OS. The parameter --enable-agent and --enable-auto-update must be true. */
    patchMode(value: 'AutomaticByOS' | 'AutomaticByPlatform' | 'Manual'): az_vm_create_command_builder {
        this.setFlag("--patch-mode", value);
        return this;
    }

    /** Plan name. */
    planName(value: string): az_vm_create_command_builder {
        this.setFlag("--plan-name", value);
        return this;
    }

    /** Plan product. */
    planProduct(value: string): az_vm_create_command_builder {
        this.setFlag("--plan-product", value);
        return this;
    }

    /** Plan promotion code. */
    planPromotionCode(value: string): az_vm_create_command_builder {
        this.setFlag("--plan-promotion-code", value);
        return this;
    }

    /** Plan publisher. */
    planPublisher(value: string): az_vm_create_command_builder {
        this.setFlag("--plan-publisher", value);
        return this;
    }

    /** The name or ID of the proximity placement group the VM should be associated with. */
    ppg(value: string): az_vm_create_command_builder {
        this.setFlag("--ppg", value);
        return this;
    }

    /** Priority. Use 'Spot' to run short-lived workloads in a cost-effective way. 'Low' enum will be deprecated in the future. Please use 'Spot' to deploy Azure spot VM and/or VMSS. Default to Regular. */
    priority(value: 'Low' | 'Regular' | 'Spot'): az_vm_create_command_builder {
        this.setFlag("--priority", value);
        return this;
    }

    /** Static private IP address (e.g. 10.0.0.5). */
    privateIpAddress(value: string): az_vm_create_command_builder {
        this.setFlag("--private-ip-address", value);
        return this;
    }

    /** Name of the public IP address when creating one (default) or referencing an existing one. Can also reference an existing public IP by ID or specify "" for None ('""' in Azure CLI using PowerShell or --% operator). */
    publicIpAddress(value: string): az_vm_create_command_builder {
        this.setFlag("--public-ip-address", value);
        return this;
    }

    /** */
    publicIpAddressAllocation(value: 'dynamic' | 'static'): az_vm_create_command_builder {
        this.setFlag("--public-ip-address-allocation", value);
        return this;
    }

    /** Globally unique DNS name for a newly created public IP. */
    publicIpAddressDnsName(value: string): az_vm_create_command_builder {
        this.setFlag("--public-ip-address-dns-name", value);
        return this;
    }

    /** Public IP SKU. It is set to Basic by default. */
    publicIpSku(value: 'Basic' | 'Standard'): az_vm_create_command_builder {
        this.setFlag("--public-ip-sku", value);
        return this;
    }

    /** Role name or id the system assigned identity will have. */
    role(value: string): az_vm_create_command_builder {
        this.setFlag("--role", value);
        return this;
    }

    /** Scope that the system assigned identity can access. */
    scope(value: string): az_vm_create_command_builder {
        this.setFlag("--scope", value);
        return this;
    }

    /** One or many Key Vault secrets as JSON strings or files via `@{path}` containing `[{ "sourceVault": { "id": "value" }, "vaultCertificates": [{ "certificateUrl": "value", "certificateStore": "cert store name (only on windows)"}] }]`. */
    secrets(value: string): az_vm_create_command_builder {
        this.setFlag("--secrets", value);
        return this;
    }

    /** The VM size to be created. See <a href="https://azure.microsoft.com/pricing/details/virtual-machines/">https://azure.microsoft.com/pricing/details/virtual-machines/</a> for size info. */
    size(value: string): az_vm_create_command_builder {
        this.setFlag("--size", value);
        return this;
    }

    /** Indicate whether the source image is specialized. */
    specialized(value: boolean): az_vm_create_command_builder {
        this.setFlag("--specialized", value.toString());
        return this;
    }

    /** Destination file path on the VM for the SSH key. If the file already exists, the specified key(s) are appended to the file. Destination path for SSH public keys is currently limited to its default value "/home/username/.ssh/authorized_keys" due to a known issue in Linux provisioning agent. */
    sshDestKeyPath(value: string): az_vm_create_command_builder {
        this.setFlag("--ssh-dest-key-path", value);
        return this;
    }

    /** Space-separated list of SSH public keys or public key file paths. */
    sshKeyValues(value: string): az_vm_create_command_builder {
        this.setFlag("--ssh-key-values", value);
        return this;
    }

    /** Only applicable when used with `--use-unmanaged-disk`. The name to use when creating a new storage account or referencing an existing one. If omitted, an appropriate storage account in the same resource group and location will be used, or a new one will be created. */
    storageAccount(value: string): az_vm_create_command_builder {
        this.setFlag("--storage-account", value);
        return this;
    }

    /** Only applicable when used with `--use-unmanaged-disk`. Name of the storage container for the VM OS disk. Default: vhds. */
    storageContainerName(value: string): az_vm_create_command_builder {
        this.setFlag("--storage-container-name", value);
        return this;
    }

    /** The SKU of the storage account with which to persist VM. Use a singular sku that would be applied across all disks, or specify individual disks. Usage: [--storage-sku SKU | --storage-sku ID=SKU ID=SKU ID=SKU...], where each ID is "os" or a 0-indexed lun. Allowed values: Standard_LRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS. */
    storageSku(value: string): az_vm_create_command_builder {
        this.setFlag("--storage-sku", value);
        return this;
    }

    /** The name of the subnet when creating a new VNet or referencing an existing one. Can also reference an existing subnet by ID. If both vnet-name and subnet are omitted, an appropriate VNet and subnet will be selected automatically, or a new one will be created. */
    subnet(value: string): az_vm_create_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** The subnet IP address prefix to use when creating a new VNet in CIDR format. */
    subnetAddressPrefix(value: string): az_vm_create_command_builder {
        this.setFlag("--subnet-address-prefix", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_vm_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Enables or disables the capability to have 1 or more managed data disks with UltraSSD_LRS storage account. */
    ultraSsdEnabled(value: boolean): az_vm_create_command_builder {
        this.setFlag("--ultra-ssd-enabled", value.toString());
        return this;
    }

    /** Do not use managed disk to persist VM. */
    useUnmanagedDisk(value: string): az_vm_create_command_builder {
        this.setFlag("--use-unmanaged-disk", value);
        return this;
    }

    /** Generate and validate the ARM template without creating any resources. */
    validate(value: string): az_vm_create_command_builder {
        this.setFlag("--validate", value);
        return this;
    }

    /** Name or ID of an existing virtual machine scale set that the virtual machine should be assigned to. None by default. */
    vmss(value: string): az_vm_create_command_builder {
        this.setFlag("--vmss", value);
        return this;
    }

    /** The IP address prefix to use when creating a new VNet in CIDR format. */
    vnetAddressPrefix(value: string): az_vm_create_command_builder {
        this.setFlag("--vnet-address-prefix", value);
        return this;
    }

    /** Name of the virtual network when creating a new one or referencing an existing one. */
    vnetName(value: string): az_vm_create_command_builder {
        this.setFlag("--vnet-name", value);
        return this;
    }

    /** Name or ID of Log Analytics Workspace. If you specify the workspace through its name, the workspace should be in the same resource group with the vm, otherwise a new workspace will be created. */
    workspace(value: string): az_vm_create_command_builder {
        this.setFlag("--workspace", value);
        return this;
    }

    /** Availability zone into which to provision the resource. */
    zone(value: '1' | '2' | '3'): az_vm_create_command_builder {
        this.setFlag("--zone", value);
        return this;
    }
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
class az_vm_deallocate_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_deallocate_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_deallocate_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_deallocate_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_deallocate_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_deallocate_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_vm_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_vm_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_vm_generalize_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_generalize_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_generalize_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_generalize_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_generalize_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_generalize_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_get_instance_view_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_get_instance_view_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_get_instance_view_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_get_instance_view_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_get_instance_view_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Show public ip address, FQDN, and power states. command will run slow. */
    showDetails(value: string): az_vm_list_command_builder {
        this.setFlag("--show-details", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_list_ip_addresses_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_list_ip_addresses_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_list_ip_addresses_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_list_ip_addresses_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_list_ip_addresses_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_list_sizes_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, location: string) {
        super(commandParent);
        this.location(location)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_list_sizes_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_list_sizes_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_list_skus_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Show all information including vm sizes not available under the current subscription. */
    all(value: boolean): az_vm_list_skus_command_builder {
        this.setFlag("--all", value.toString());
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_list_skus_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Resource types e.g. "availabilitySets", "snapshots", "disks", etc. */
    resourceType(value: string): az_vm_list_skus_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Size name, partial name is accepted. */
    size(value: string): az_vm_list_skus_command_builder {
        this.setFlag("--size", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_list_skus_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Show skus supporting availability zones. */
    zone(value: boolean): az_vm_list_skus_command_builder {
        this.setFlag("--zone", value.toString());
        return this;
    }
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
class az_vm_list_usage_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, location: string) {
        super(commandParent);
        this.location(location)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vm_list_usage_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_list_usage_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_list_vm_resize_options_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_list_vm_resize_options_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_list_vm_resize_options_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_list_vm_resize_options_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_list_vm_resize_options_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_open_port_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, port: string) {
        super(commandParent);
        this.port(port)
    }

    /** The port or port range (ex: 80-100) to open inbound traffic to. Use '\*' to allow traffic to all ports. */
    port(value: string): az_vm_open_port_command_builder {
        this.setFlag("--port", value);
        return this;
    }

    /** Allow inbound traffic on the subnet instead of the NIC. */
    applyToSubnet(value: string): az_vm_open_port_command_builder {
        this.setFlag("--apply-to-subnet", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_open_port_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the virtual machine to open inbound traffic on. */
    name(value: string): az_vm_open_port_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The name of the network security group to create if one does not exist. Ignored if an NSG already exists. */
    nsgName(value: string): az_vm_open_port_command_builder {
        this.setFlag("--nsg-name", value);
        return this;
    }

    /** Rule priority, between 100 (highest priority) and 4096 (lowest priority). Must be unique for each rule in the collection. */
    priority(value: string): az_vm_open_port_command_builder {
        this.setFlag("--priority", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_open_port_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_open_port_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_perform_maintenance_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_perform_maintenance_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_perform_maintenance_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_perform_maintenance_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_perform_maintenance_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_reapply_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_reapply_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_reapply_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_reapply_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_reapply_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_reapply_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_redeploy_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_redeploy_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_redeploy_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_redeploy_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_redeploy_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_redeploy_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_resize_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, size: string) {
        super(commandParent);
        this.size(size)
    }

    /** The VM size. */
    size(value: string): az_vm_resize_command_builder {
        this.setFlag("--size", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_resize_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_resize_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_resize_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_resize_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_resize_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_restart_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Force the VM to restart by redeploying it. Use if the VM is unresponsive. */
    force(value: string): az_vm_restart_command_builder {
        this.setFlag("--force", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_restart_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_restart_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_restart_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_restart_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_restart_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vm_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Show public ip address, FQDN, and power states. command will run slow. */
    showDetails(value: string): az_vm_show_command_builder {
        this.setFlag("--show-details", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_simulate_eviction_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_simulate_eviction_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_simulate_eviction_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_simulate_eviction_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_simulate_eviction_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_start_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_start_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_start_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_start_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_start_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_start_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_stop_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_stop_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_stop_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_stop_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_stop_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Skip shutdown and power-off immediately. */
    skipShutdown(value: string): az_vm_stop_command_builder {
        this.setFlag("--skip-shutdown", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_stop_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vm_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_vm_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** Use singular value to apply across, or specify individual disks, e.g. 'os=ReadWrite 0=None 1=ReadOnly' should enable update os disk and 2 data disks. */
    diskCaching(value: string): az_vm_update_command_builder {
        this.setFlag("--disk-caching", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_vm_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Specifies that the Windows image or disk was licensed on-premises. To enable Azure Hybrid Benefit for Windows Server, use 'Windows_Server'. To enable Multitenant Hosting Rights for Windows 10, use 'Windows_Client'. For more information see the Azure Windows VM online docs. */
    licenseType(value: 'None' | 'RHEL_BYOS' | 'SLES_BYOS' | 'Windows_Client' | 'Windows_Server'): az_vm_update_command_builder {
        this.setFlag("--license-type", value);
        return this;
    }

    /** The maximum price (in US Dollars) you are willing to pay for a Spot VM/VMSS. -1 indicates that the Spot VM/VMSS should not be evicted for price reasons. */
    maxPrice(value: string): az_vm_update_command_builder {
        this.setFlag("--max-price", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vm_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Managed OS disk ID or name to swap to. */
    osDisk(value: string): az_vm_update_command_builder {
        this.setFlag("--os-disk", value);
        return this;
    }

    /** The name or ID of the proximity placement group the VM should be associated with. */
    ppg(value: string): az_vm_update_command_builder {
        this.setFlag("--ppg", value);
        return this;
    }

    /** Priority. Use 'Spot' to run short-lived workloads in a cost-effective way. 'Low' enum will be deprecated in the future. Please use 'Spot' to deploy Azure spot VM and/or VMSS. Default to Regular. */
    priority(value: 'Low' | 'Regular' | 'Spot'): az_vm_update_command_builder {
        this.setFlag("--priority", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_vm_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_vm_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Enables or disables the capability to have 1 or more managed data disks with UltraSSD_LRS storage account. */
    ultraSsdEnabled(value: boolean): az_vm_update_command_builder {
        this.setFlag("--ultra-ssd-enabled", value.toString());
        return this;
    }

    /** Name or ID of Log Analytics Workspace. If you specify the workspace through its name, the workspace should be in the same resource group with the vm, otherwise a new workspace will be created. */
    workspace(value: string): az_vm_update_command_builder {
        this.setFlag("--workspace", value);
        return this;
    }

    /** Enable/disable disk write accelerator. Use singular value 'true/false' to apply across, or specify individual disks, e.g.'os=true 1=true 2=true' for os disk and data disks with lun of 1 & 2. */
    writeAccelerator(value: string): az_vm_update_command_builder {
        this.setFlag("--write-accelerator", value);
        return this;
    }
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
class az_vm_wait_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_vm_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_vm_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_vm_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_vm_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vm_wait_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_vm_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vm_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vm_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vm_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_vm_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_vm_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
}