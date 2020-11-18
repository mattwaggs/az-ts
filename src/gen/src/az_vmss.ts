import { CommandBuilder } from '../base';
import { az_vmss_diagnostics_get_default_config_command_result } from './models/az_vmss_diagnostics_get_default_config_command_result'
import { az_vmss_diagnostics_set_command_result } from './models/az_vmss_diagnostics_set_command_result'
import { az_vmss_disk_attach_command_result } from './models/az_vmss_disk_attach_command_result'
import { az_vmss_disk_detach_command_result } from './models/az_vmss_disk_detach_command_result'
import { az_vmss_encryption_disable_command_result } from './models/az_vmss_encryption_disable_command_result'
import { az_vmss_encryption_enable_command_result } from './models/az_vmss_encryption_enable_command_result'
import { az_vmss_encryption_show_command_result } from './models/az_vmss_encryption_show_command_result'
import { az_vmss_extension_image_list_command_result } from './models/az_vmss_extension_image_list_command_result'
import { az_vmss_extension_image_list_names_command_result } from './models/az_vmss_extension_image_list_names_command_result'
import { az_vmss_extension_image_list_versions_command_result } from './models/az_vmss_extension_image_list_versions_command_result'
import { az_vmss_extension_image_show_command_result } from './models/az_vmss_extension_image_show_command_result'
import { az_vmss_extension_delete_command_result } from './models/az_vmss_extension_delete_command_result'
import { az_vmss_extension_list_command_result } from './models/az_vmss_extension_list_command_result'
import { az_vmss_extension_set_command_result } from './models/az_vmss_extension_set_command_result'
import { az_vmss_extension_show_command_result } from './models/az_vmss_extension_show_command_result'
import { az_vmss_extension_upgrade_command_result } from './models/az_vmss_extension_upgrade_command_result'
import { az_vmss_identity_assign_command_result } from './models/az_vmss_identity_assign_command_result'
import { az_vmss_identity_remove_command_result } from './models/az_vmss_identity_remove_command_result'
import { az_vmss_identity_show_command_result } from './models/az_vmss_identity_show_command_result'
import { az_vmss_nic_list_command_result } from './models/az_vmss_nic_list_command_result'
import { az_vmss_nic_list_vm_nics_command_result } from './models/az_vmss_nic_list_vm_nics_command_result'
import { az_vmss_nic_show_command_result } from './models/az_vmss_nic_show_command_result'
import { az_vmss_rolling_upgrade_cancel_command_result } from './models/az_vmss_rolling_upgrade_cancel_command_result'
import { az_vmss_rolling_upgrade_get_latest_command_result } from './models/az_vmss_rolling_upgrade_get_latest_command_result'
import { az_vmss_rolling_upgrade_start_command_result } from './models/az_vmss_rolling_upgrade_start_command_result'
import { az_vmss_run_command_invoke_command_result } from './models/az_vmss_run_command_invoke_command_result'
import { az_vmss_run_command_list_command_result } from './models/az_vmss_run_command_list_command_result'
import { az_vmss_run_command_show_command_result } from './models/az_vmss_run_command_show_command_result'
import { az_vmss_create_command_result } from './models/az_vmss_create_command_result'
import { az_vmss_deallocate_command_result } from './models/az_vmss_deallocate_command_result'
import { az_vmss_delete_command_result } from './models/az_vmss_delete_command_result'
import { az_vmss_delete_instances_command_result } from './models/az_vmss_delete_instances_command_result'
import { az_vmss_get_instance_view_command_result } from './models/az_vmss_get_instance_view_command_result'
import { az_vmss_get_os_upgrade_history_command_result } from './models/az_vmss_get_os_upgrade_history_command_result'
import { az_vmss_list_command_result } from './models/az_vmss_list_command_result'
import { az_vmss_list_instance_connection_info_command_result } from './models/az_vmss_list_instance_connection_info_command_result'
import { az_vmss_list_instance_public_ips_command_result } from './models/az_vmss_list_instance_public_ips_command_result'
import { az_vmss_list_instances_command_result } from './models/az_vmss_list_instances_command_result'
import { az_vmss_list_skus_command_result } from './models/az_vmss_list_skus_command_result'
import { az_vmss_perform_maintenance_command_result } from './models/az_vmss_perform_maintenance_command_result'
import { az_vmss_reimage_command_result } from './models/az_vmss_reimage_command_result'
import { az_vmss_restart_command_result } from './models/az_vmss_restart_command_result'
import { az_vmss_scale_command_result } from './models/az_vmss_scale_command_result'
import { az_vmss_set_orchestration_service_state_command_result } from './models/az_vmss_set_orchestration_service_state_command_result'
import { az_vmss_show_command_result } from './models/az_vmss_show_command_result'
import { az_vmss_simulate_eviction_command_result } from './models/az_vmss_simulate_eviction_command_result'
import { az_vmss_start_command_result } from './models/az_vmss_start_command_result'
import { az_vmss_stop_command_result } from './models/az_vmss_stop_command_result'
import { az_vmss_update_command_result } from './models/az_vmss_update_command_result'
import { az_vmss_update_instances_command_result } from './models/az_vmss_update_instances_command_result'
import { az_vmss_wait_command_result } from './models/az_vmss_wait_command_result'

/** Configure the Azure Virtual Machine Scale Set diagnostics extension. */
export class az_vmss_diagnostics {
    /**
     * Show the default config file which defines data to be collected.
     *
     * Syntax:
     * ```
     * az vmss diagnostics get-default-config [--is-windows-os]
     *                                        [--subscription]
     * ```
     */
    static get_default_config(): az_vmss_diagnostics_get_default_config_command_builder {
        return new az_vmss_diagnostics_get_default_config_command_builder("az vmss diagnostics get-default-config", 'az_vmss_diagnostics_get_default_config_command_result');
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
    static set(resourceGroup: string, settings: string, vmssName: string): az_vmss_diagnostics_set_command_builder {
        return new az_vmss_diagnostics_set_command_builder("az vmss diagnostics set", 'az_vmss_diagnostics_set_command_result', resourceGroup, settings, vmssName);
    }
}

/** Manage data disks of a VMSS. */
export class az_vmss_disk {
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
    static attach(): az_vmss_disk_attach_command_builder {
        return new az_vmss_disk_attach_command_builder("az vmss disk attach", 'az_vmss_disk_attach_command_result');
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
    static detach(lun: string): az_vmss_disk_detach_command_builder {
        return new az_vmss_disk_detach_command_builder("az vmss disk detach", 'az_vmss_disk_detach_command_result', lun);
    }
}

/** Manage encryption of VMSS. */
export class az_vmss_encryption {
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
    static disable(): az_vmss_encryption_disable_command_builder {
        return new az_vmss_encryption_disable_command_builder("az vmss encryption disable", 'az_vmss_encryption_disable_command_result');
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
    static enable(diskEncryptionKeyvault: string): az_vmss_encryption_enable_command_builder {
        return new az_vmss_encryption_enable_command_builder("az vmss encryption enable", 'az_vmss_encryption_enable_command_result', diskEncryptionKeyvault);
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
    static show(): az_vmss_encryption_show_command_builder {
        return new az_vmss_encryption_show_command_builder("az vmss encryption show", 'az_vmss_encryption_show_command_result');
    }
}

/** Find the available VM extensions for a subscription and region. */
export class az_vmss_extension_image {
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
    static list(): az_vmss_extension_image_list_command_builder {
        return new az_vmss_extension_image_list_command_builder("az vmss extension image list", 'az_vmss_extension_image_list_command_result');
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
    static list_names(location: string, publisher: string): az_vmss_extension_image_list_names_command_builder {
        return new az_vmss_extension_image_list_names_command_builder("az vmss extension image list-names", 'az_vmss_extension_image_list_names_command_result', location, publisher);
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
    static list_versions(location: string, name: string, publisher: string): az_vmss_extension_image_list_versions_command_builder {
        return new az_vmss_extension_image_list_versions_command_builder("az vmss extension image list-versions", 'az_vmss_extension_image_list_versions_command_result', location, name, publisher);
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
    static show(location: string, name: string, publisher: string, version: string): az_vmss_extension_image_show_command_builder {
        return new az_vmss_extension_image_show_command_builder("az vmss extension image show", 'az_vmss_extension_image_show_command_result', location, name, publisher, version);
    }
}

/** Manage extensions on a VM scale set. */
export class az_vmss_extension {
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
    static delete(name: string, resourceGroup: string, vmssName: string): az_vmss_extension_delete_command_builder {
        return new az_vmss_extension_delete_command_builder("az vmss extension delete", 'az_vmss_extension_delete_command_result', name, resourceGroup, vmssName);
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
    static list(resourceGroup: string, vmssName: string): az_vmss_extension_list_command_builder {
        return new az_vmss_extension_list_command_builder("az vmss extension list", 'az_vmss_extension_list_command_result', resourceGroup, vmssName);
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
    static set(name: string, publisher: string, resourceGroup: string, vmssName: string): az_vmss_extension_set_command_builder {
        return new az_vmss_extension_set_command_builder("az vmss extension set", 'az_vmss_extension_set_command_result', name, publisher, resourceGroup, vmssName);
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
    static show(name: string, resourceGroup: string, vmssName: string): az_vmss_extension_show_command_builder {
        return new az_vmss_extension_show_command_builder("az vmss extension show", 'az_vmss_extension_show_command_result', name, resourceGroup, vmssName);
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
    static upgrade(): az_vmss_extension_upgrade_command_builder {
        return new az_vmss_extension_upgrade_command_builder("az vmss extension upgrade", 'az_vmss_extension_upgrade_command_result');
    }
}

/** Manage service identities of a VM scaleset. */
export class az_vmss_identity {
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
    static assign(): az_vmss_identity_assign_command_builder {
        return new az_vmss_identity_assign_command_builder("az vmss identity assign", 'az_vmss_identity_assign_command_result');
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
    static remove(): az_vmss_identity_remove_command_builder {
        return new az_vmss_identity_remove_command_builder("az vmss identity remove", 'az_vmss_identity_remove_command_result');
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
    static show(): az_vmss_identity_show_command_builder {
        return new az_vmss_identity_show_command_builder("az vmss identity show", 'az_vmss_identity_show_command_result');
    }
}

/** Manage network interfaces of a VMSS. */
export class az_vmss_nic {
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
    static list(resourceGroup: string, vmssName: string): az_vmss_nic_list_command_builder {
        return new az_vmss_nic_list_command_builder("az vmss nic list", 'az_vmss_nic_list_command_result', resourceGroup, vmssName);
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
    static list_vm_nics(): az_vmss_nic_list_vm_nics_command_builder {
        return new az_vmss_nic_list_vm_nics_command_builder("az vmss nic list-vm-nics", 'az_vmss_nic_list_vm_nics_command_result');
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
    static show(): az_vmss_nic_show_command_builder {
        return new az_vmss_nic_show_command_builder("az vmss nic show", 'az_vmss_nic_show_command_result');
    }
}

/** Manage rolling upgrades. */
export class az_vmss_rolling_upgrade {
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
    static cancel(): az_vmss_rolling_upgrade_cancel_command_builder {
        return new az_vmss_rolling_upgrade_cancel_command_builder("az vmss rolling-upgrade cancel", 'az_vmss_rolling_upgrade_cancel_command_result');
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
    static get_latest(): az_vmss_rolling_upgrade_get_latest_command_builder {
        return new az_vmss_rolling_upgrade_get_latest_command_builder("az vmss rolling-upgrade get-latest", 'az_vmss_rolling_upgrade_get_latest_command_result');
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
    static start(): az_vmss_rolling_upgrade_start_command_builder {
        return new az_vmss_rolling_upgrade_start_command_builder("az vmss rolling-upgrade start", 'az_vmss_rolling_upgrade_start_command_result');
    }
}

/** Manage run commands on a Virtual Machine Scale Set. */
export class az_vmss_run_command {
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
    static invoke(commandId: string): az_vmss_run_command_invoke_command_builder {
        return new az_vmss_run_command_invoke_command_builder("az vmss run-command invoke", 'az_vmss_run_command_invoke_command_result', commandId);
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
    static list(location: string): az_vmss_run_command_list_command_builder {
        return new az_vmss_run_command_list_command_builder("az vmss run-command list", 'az_vmss_run_command_list_command_result', location);
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
    static show(commandId: string, location: string): az_vmss_run_command_show_command_builder {
        return new az_vmss_run_command_show_command_builder("az vmss run-command show", 'az_vmss_run_command_show_command_result', commandId, location);
    }
}

/** Manage groupings of virtual machines in an Azure Virtual Machine Scale Set (VMSS). */
export class az_vmss {
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
    static create(name: string, resourceGroup: string): az_vmss_create_command_builder {
        return new az_vmss_create_command_builder("az vmss create", 'az_vmss_create_command_result', name, resourceGroup);
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
    static deallocate(name: string, resourceGroup: string): az_vmss_deallocate_command_builder {
        return new az_vmss_deallocate_command_builder("az vmss deallocate", 'az_vmss_deallocate_command_result', name, resourceGroup);
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
    static delete(): az_vmss_delete_command_builder {
        return new az_vmss_delete_command_builder("az vmss delete", 'az_vmss_delete_command_result');
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
    static delete_instances(instanceIds: string, name: string, resourceGroup: string): az_vmss_delete_instances_command_builder {
        return new az_vmss_delete_instances_command_builder("az vmss delete-instances", 'az_vmss_delete_instances_command_result', instanceIds, name, resourceGroup);
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
    static get_instance_view(): az_vmss_get_instance_view_command_builder {
        return new az_vmss_get_instance_view_command_builder("az vmss get-instance-view", 'az_vmss_get_instance_view_command_result');
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
    static get_os_upgrade_history(): az_vmss_get_os_upgrade_history_command_builder {
        return new az_vmss_get_os_upgrade_history_command_builder("az vmss get-os-upgrade-history", 'az_vmss_get_os_upgrade_history_command_result');
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
    static list(): az_vmss_list_command_builder {
        return new az_vmss_list_command_builder("az vmss list", 'az_vmss_list_command_result');
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
    static list_instance_connection_info(): az_vmss_list_instance_connection_info_command_builder {
        return new az_vmss_list_instance_connection_info_command_builder("az vmss list-instance-connection-info", 'az_vmss_list_instance_connection_info_command_result');
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
    static list_instance_public_ips(): az_vmss_list_instance_public_ips_command_builder {
        return new az_vmss_list_instance_public_ips_command_builder("az vmss list-instance-public-ips", 'az_vmss_list_instance_public_ips_command_result');
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
    static list_instances(): az_vmss_list_instances_command_builder {
        return new az_vmss_list_instances_command_builder("az vmss list-instances", 'az_vmss_list_instances_command_result');
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
    static list_skus(): az_vmss_list_skus_command_builder {
        return new az_vmss_list_skus_command_builder("az vmss list-skus", 'az_vmss_list_skus_command_result');
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
    static perform_maintenance(): az_vmss_perform_maintenance_command_builder {
        return new az_vmss_perform_maintenance_command_builder("az vmss perform-maintenance", 'az_vmss_perform_maintenance_command_result');
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
    static reimage(): az_vmss_reimage_command_builder {
        return new az_vmss_reimage_command_builder("az vmss reimage", 'az_vmss_reimage_command_result');
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
    static restart(name: string, resourceGroup: string): az_vmss_restart_command_builder {
        return new az_vmss_restart_command_builder("az vmss restart", 'az_vmss_restart_command_result', name, resourceGroup);
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
    static scale(newCapacity: string): az_vmss_scale_command_builder {
        return new az_vmss_scale_command_builder("az vmss scale", 'az_vmss_scale_command_result', newCapacity);
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
    static set_orchestration_service_state(action: 'Resume' | 'Suspend', serviceName: 'AutomaticRepairs'): az_vmss_set_orchestration_service_state_command_builder {
        return new az_vmss_set_orchestration_service_state_command_builder("az vmss set-orchestration-service-state", 'az_vmss_set_orchestration_service_state_command_result', action, serviceName);
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
    static show(name: string, resourceGroup: string): az_vmss_show_command_builder {
        return new az_vmss_show_command_builder("az vmss show", 'az_vmss_show_command_result', name, resourceGroup);
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
    static simulate_eviction(instanceId: string, name: string, resourceGroup: string): az_vmss_simulate_eviction_command_builder {
        return new az_vmss_simulate_eviction_command_builder("az vmss simulate-eviction", 'az_vmss_simulate_eviction_command_result', instanceId, name, resourceGroup);
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
    static start(name: string, resourceGroup: string): az_vmss_start_command_builder {
        return new az_vmss_start_command_builder("az vmss start", 'az_vmss_start_command_result', name, resourceGroup);
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
    static stop(name: string, resourceGroup: string): az_vmss_stop_command_builder {
        return new az_vmss_stop_command_builder("az vmss stop", 'az_vmss_stop_command_result', name, resourceGroup);
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
    static update(): az_vmss_update_command_builder {
        return new az_vmss_update_command_builder("az vmss update", 'az_vmss_update_command_result');
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
    static update_instances(instanceIds: string, name: string, resourceGroup: string): az_vmss_update_instances_command_builder {
        return new az_vmss_update_instances_command_builder("az vmss update-instances", 'az_vmss_update_instances_command_result', instanceIds, name, resourceGroup);
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
    static wait(): az_vmss_wait_command_builder {
        return new az_vmss_wait_command_builder("az vmss wait", 'az_vmss_wait_command_result');
    }
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
class az_vmss_diagnostics_get_default_config_command_builder extends CommandBuilder<az_vmss_diagnostics_get_default_config_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** For Windows VMs. */
    isWindowsOs(value: string): az_vmss_diagnostics_get_default_config_command_builder {
        this.setFlag("--is-windows-os", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_diagnostics_get_default_config_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_diagnostics_set_command_builder extends CommandBuilder<az_vmss_diagnostics_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, settings: string, vmssName: string) {
        super(commandPath, resultDataTypeName);
        this.resourceGroup(resourceGroup)
        this.settings(settings)
        this.vmssName(vmssName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_diagnostics_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Json string or a file path, which defines data to be collected. */
    settings(value: string): az_vmss_diagnostics_set_command_builder {
        this.setFlag("--settings", value);
        return this;
    }

    /** Scale set name. */
    vmssName(value: string): az_vmss_diagnostics_set_command_builder {
        this.setFlag("--vmss-name", value);
        return this;
    }

    /** If set, the extension service will not automatically pick or upgrade to the latest minor version, even if the extension is redeployed. */
    noAutoUpgrade(value: boolean): az_vmss_diagnostics_set_command_builder {
        this.setFlag("--no-auto-upgrade", value.toString());
        return this;
    }

    /** Json string or a file path containing private configurations such as storage account keys, etc. */
    protectedSettings(value: string): az_vmss_diagnostics_set_command_builder {
        this.setFlag("--protected-settings", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_diagnostics_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Version of the diagnostics extension. Will use the latest if not specfied. */
    version(value: string): az_vmss_diagnostics_set_command_builder {
        this.setFlag("--version", value);
        return this;
    }
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
class az_vmss_disk_attach_command_builder extends CommandBuilder<az_vmss_disk_attach_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Disk caching policy. */
    caching(value: 'None' | 'ReadOnly' | 'ReadWrite'): az_vmss_disk_attach_command_builder {
        this.setFlag("--caching", value);
        return this;
    }

    /** Existing disk name or ID to attach or detach from VM instances. */
    disk(value: string): az_vmss_disk_attach_command_builder {
        this.setFlag("--disk", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_disk_attach_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Scale set VM instance id. */
    instanceId(value: string): az_vmss_disk_attach_command_builder {
        this.setFlag("--instance-id", value);
        return this;
    }

    /** 0-based logical unit number (LUN). Max value depends on the Virtual Machine instance size. */
    lun(value: string): az_vmss_disk_attach_command_builder {
        this.setFlag("--lun", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_disk_attach_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Size in GB. Max size: 4095 GB (certain preview disks can be larger). */
    sizeGb(value: string): az_vmss_disk_attach_command_builder {
        this.setFlag("--size-gb", value);
        return this;
    }

    /** Underlying storage SKU. */
    sku(value: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'UltraSSD_LRS'): az_vmss_disk_attach_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_disk_attach_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    vmssName(value: string): az_vmss_disk_attach_command_builder {
        this.setFlag("--vmss-name", value);
        return this;
    }
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
class az_vmss_disk_detach_command_builder extends CommandBuilder<az_vmss_disk_detach_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, lun: string) {
        super(commandPath, resultDataTypeName);
        this.lun(lun)
    }

    /** 0-based logical unit number (LUN). Max value depends on the Virtual Machine instance size. */
    lun(value: string): az_vmss_disk_detach_command_builder {
        this.setFlag("--lun", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_disk_detach_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Scale set VM instance id. */
    instanceId(value: string): az_vmss_disk_detach_command_builder {
        this.setFlag("--instance-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_disk_detach_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_disk_detach_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    vmssName(value: string): az_vmss_disk_detach_command_builder {
        this.setFlag("--vmss-name", value);
        return this;
    }
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
class az_vmss_encryption_disable_command_builder extends CommandBuilder<az_vmss_encryption_disable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Continue by ignoring client side validation errors. */
    force(value: string): az_vmss_encryption_disable_command_builder {
        this.setFlag("--force", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_encryption_disable_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_encryption_disable_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_encryption_disable_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_encryption_disable_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Type of volume that the encryption operation is performed on. */
    volumeType(value: 'ALL' | 'DATA' | 'OS'): az_vmss_encryption_disable_command_builder {
        this.setFlag("--volume-type", value);
        return this;
    }
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
class az_vmss_encryption_enable_command_builder extends CommandBuilder<az_vmss_encryption_enable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, diskEncryptionKeyvault: string) {
        super(commandPath, resultDataTypeName);
        this.diskEncryptionKeyvault(diskEncryptionKeyvault)
    }

    /** Name or ID of the key vault where the generated encryption key will be placed. */
    diskEncryptionKeyvault(value: string): az_vmss_encryption_enable_command_builder {
        this.setFlag("--disk-encryption-keyvault", value);
        return this;
    }

    /** Continue by ignoring client side validation errors. */
    force(value: string): az_vmss_encryption_enable_command_builder {
        this.setFlag("--force", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_encryption_enable_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** */
    keyEncryptionAlgorithm(value: string): az_vmss_encryption_enable_command_builder {
        this.setFlag("--key-encryption-algorithm", value);
        return this;
    }

    /** Key vault key name or URL used to encrypt the disk encryption key. */
    keyEncryptionKey(value: string): az_vmss_encryption_enable_command_builder {
        this.setFlag("--key-encryption-key", value);
        return this;
    }

    /** Name or ID of the key vault containing the key encryption key used to encrypt the disk encryption key. If missing, CLI will use `--disk-encryption-keyvault`. */
    keyEncryptionKeyvault(value: string): az_vmss_encryption_enable_command_builder {
        this.setFlag("--key-encryption-keyvault", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_encryption_enable_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_encryption_enable_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_encryption_enable_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Type of volume that the encryption operation is performed on. */
    volumeType(value: 'ALL' | 'DATA' | 'OS'): az_vmss_encryption_enable_command_builder {
        this.setFlag("--volume-type", value);
        return this;
    }
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
class az_vmss_encryption_show_command_builder extends CommandBuilder<az_vmss_encryption_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_encryption_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_encryption_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vmss_encryption_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_encryption_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_encryption_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_extension_image_list_command_builder extends CommandBuilder<az_vmss_extension_image_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Show the latest version only. */
    latest(value: string): az_vmss_extension_image_list_command_builder {
        this.setFlag("--latest", value);
        return this;
    }

    /** Image location. */
    location(value: string): az_vmss_extension_image_list_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Image name. */
    name(value: string): az_vmss_extension_image_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Image publisher name. */
    publisher(value: string): az_vmss_extension_image_list_command_builder {
        this.setFlag("--publisher", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vmss_extension_image_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_extension_image_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Extension version. */
    version(value: string): az_vmss_extension_image_list_command_builder {
        this.setFlag("--version", value);
        return this;
    }
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
class az_vmss_extension_image_list_names_command_builder extends CommandBuilder<az_vmss_extension_image_list_names_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string, publisher: string) {
        super(commandPath, resultDataTypeName);
        this.location(location)
        this.publisher(publisher)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vmss_extension_image_list_names_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Image publisher name. */
    publisher(value: string): az_vmss_extension_image_list_names_command_builder {
        this.setFlag("--publisher", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_extension_image_list_names_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_extension_image_list_versions_command_builder extends CommandBuilder<az_vmss_extension_image_list_versions_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string, name: string, publisher: string) {
        super(commandPath, resultDataTypeName);
        this.location(location)
        this.name(name)
        this.publisher(publisher)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vmss_extension_image_list_versions_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name of the extension. */
    name(value: string): az_vmss_extension_image_list_versions_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Image publisher name. */
    publisher(value: string): az_vmss_extension_image_list_versions_command_builder {
        this.setFlag("--publisher", value);
        return this;
    }

    /** The filter to apply on the operation. */
    filter(value: string): az_vmss_extension_image_list_versions_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** The $orderby odata query option. */
    orderby(value: string): az_vmss_extension_image_list_versions_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_extension_image_list_versions_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The $top odata query option. */
    top(value: string): az_vmss_extension_image_list_versions_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_vmss_extension_image_show_command_builder extends CommandBuilder<az_vmss_extension_image_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string, name: string, publisher: string, version: string) {
        super(commandPath, resultDataTypeName);
        this.location(location)
        this.name(name)
        this.publisher(publisher)
        this.version(version)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vmss_extension_image_show_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name of the extension. */
    name(value: string): az_vmss_extension_image_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Image publisher name. */
    publisher(value: string): az_vmss_extension_image_show_command_builder {
        this.setFlag("--publisher", value);
        return this;
    }

    /** Extension version. */
    version(value: string): az_vmss_extension_image_show_command_builder {
        this.setFlag("--version", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vmss_extension_image_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_extension_image_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_extension_delete_command_builder extends CommandBuilder<az_vmss_extension_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, vmssName: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.vmssName(vmssName)
    }

    /** Name of the extension. */
    name(value: string): az_vmss_extension_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_extension_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    vmssName(value: string): az_vmss_extension_delete_command_builder {
        this.setFlag("--vmss-name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_extension_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_extension_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_extension_list_command_builder extends CommandBuilder<az_vmss_extension_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, vmssName: string) {
        super(commandPath, resultDataTypeName);
        this.resourceGroup(resourceGroup)
        this.vmssName(vmssName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_extension_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    vmssName(value: string): az_vmss_extension_list_command_builder {
        this.setFlag("--vmss-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vmss_extension_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_extension_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_extension_set_command_builder extends CommandBuilder<az_vmss_extension_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, publisher: string, resourceGroup: string, vmssName: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.publisher(publisher)
        this.resourceGroup(resourceGroup)
        this.vmssName(vmssName)
    }

    /** Name of the extension. */
    name(value: string): az_vmss_extension_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The name of the extension publisher. */
    publisher(value: string): az_vmss_extension_set_command_builder {
        this.setFlag("--publisher", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_extension_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    vmssName(value: string): az_vmss_extension_set_command_builder {
        this.setFlag("--vmss-name", value);
        return this;
    }

    /** Name of extension instance, which can be customized. Default: name of the extension. */
    extensionInstanceName(value: string): az_vmss_extension_set_command_builder {
        this.setFlag("--extension-instance-name", value);
        return this;
    }

    /** Force to update even if the extension configuration has not changed. */
    forceUpdate(value: string): az_vmss_extension_set_command_builder {
        this.setFlag("--force-update", value);
        return this;
    }

    /** If set, the extension service will not automatically pick or upgrade to the latest minor version, even if the extension is redeployed. */
    noAutoUpgrade(value: boolean): az_vmss_extension_set_command_builder {
        this.setFlag("--no-auto-upgrade", value.toString());
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_extension_set_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Protected settings in JSON format for sensitive information like credentials. A JSON file path is also accepted. */
    protectedSettings(value: string): az_vmss_extension_set_command_builder {
        this.setFlag("--protected-settings", value);
        return this;
    }

    /** Space-separated list of extension names after which this extension should be provisioned. These extensions must already be set on the vm. */
    provisionAfterExtensions(value: string): az_vmss_extension_set_command_builder {
        this.setFlag("--provision-after-extensions", value);
        return this;
    }

    /** Extension settings in JSON format. A JSON file path is also accepted. */
    settings(value: string): az_vmss_extension_set_command_builder {
        this.setFlag("--settings", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_extension_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The version of the extension. To pin extension version to this value, please specify --no-auto-upgrade. */
    version(value: string): az_vmss_extension_set_command_builder {
        this.setFlag("--version", value);
        return this;
    }
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
class az_vmss_extension_show_command_builder extends CommandBuilder<az_vmss_extension_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, vmssName: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.vmssName(vmssName)
    }

    /** Name of the extension. */
    name(value: string): az_vmss_extension_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_extension_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    vmssName(value: string): az_vmss_extension_show_command_builder {
        this.setFlag("--vmss-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vmss_extension_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_extension_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_extension_upgrade_command_builder extends CommandBuilder<az_vmss_extension_upgrade_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_extension_upgrade_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_extension_upgrade_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_extension_upgrade_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_extension_upgrade_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_extension_upgrade_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_identity_assign_command_builder extends CommandBuilder<az_vmss_identity_assign_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'. */
    identities(value: string): az_vmss_identity_assign_command_builder {
        this.setFlag("--identities", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_identity_assign_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_identity_assign_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_identity_assign_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Role name or id the system assigned identity will have. */
    role(value: string): az_vmss_identity_assign_command_builder {
        this.setFlag("--role", value);
        return this;
    }

    /** Scope that the system assigned identity can access. */
    scope(value: string): az_vmss_identity_assign_command_builder {
        this.setFlag("--scope", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_identity_assign_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_identity_remove_command_builder extends CommandBuilder<az_vmss_identity_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Space-separated identities to remove. Use '[system]' to refer to the system assigned identity. Default: '[system]'. */
    identities(value: string): az_vmss_identity_remove_command_builder {
        this.setFlag("--identities", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_identity_remove_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_identity_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_identity_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_identity_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_identity_show_command_builder extends CommandBuilder<az_vmss_identity_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_identity_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    name(value: string): az_vmss_identity_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vmss_identity_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_identity_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_identity_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_nic_list_command_builder extends CommandBuilder<az_vmss_nic_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, vmssName: string) {
        super(commandPath, resultDataTypeName);
        this.resourceGroup(resourceGroup)
        this.vmssName(vmssName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_nic_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    vmssName(value: string): az_vmss_nic_list_command_builder {
        this.setFlag("--vmss-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vmss_nic_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_nic_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_nic_list_vm_nics_command_builder extends CommandBuilder<az_vmss_nic_list_vm_nics_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_nic_list_vm_nics_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The virtual machine index. */
    instanceId(value: string): az_vmss_nic_list_vm_nics_command_builder {
        this.setFlag("--instance-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_nic_list_vm_nics_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_nic_list_vm_nics_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Scale set name. */
    vmssName(value: string): az_vmss_nic_list_vm_nics_command_builder {
        this.setFlag("--vmss-name", value);
        return this;
    }
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
class az_vmss_nic_show_command_builder extends CommandBuilder<az_vmss_nic_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Expands referenced resources. */
    expand(value: string): az_vmss_nic_show_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_nic_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The virtual machine index. */
    instanceId(value: string): az_vmss_nic_show_command_builder {
        this.setFlag("--instance-id", value);
        return this;
    }

    /** The network interface (NIC). */
    name(value: string): az_vmss_nic_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vmss_nic_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_nic_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_nic_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Scale set name. */
    vmssName(value: string): az_vmss_nic_show_command_builder {
        this.setFlag("--vmss-name", value);
        return this;
    }
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
class az_vmss_rolling_upgrade_cancel_command_builder extends CommandBuilder<az_vmss_rolling_upgrade_cancel_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_rolling_upgrade_cancel_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_rolling_upgrade_cancel_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_rolling_upgrade_cancel_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_rolling_upgrade_cancel_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_rolling_upgrade_get_latest_command_builder extends CommandBuilder<az_vmss_rolling_upgrade_get_latest_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_rolling_upgrade_get_latest_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_rolling_upgrade_get_latest_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_rolling_upgrade_get_latest_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_rolling_upgrade_get_latest_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_rolling_upgrade_start_command_builder extends CommandBuilder<az_vmss_rolling_upgrade_start_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_rolling_upgrade_start_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_rolling_upgrade_start_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_rolling_upgrade_start_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_rolling_upgrade_start_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_run_command_invoke_command_builder extends CommandBuilder<az_vmss_run_command_invoke_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, commandId: string) {
        super(commandPath, resultDataTypeName);
        this.commandId(commandId)
    }

    /** The command id. */
    commandId(value: string): az_vmss_run_command_invoke_command_builder {
        this.setFlag("--command-id", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_run_command_invoke_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Scale set VM instance id. */
    instanceId(value: string): az_vmss_run_command_invoke_command_builder {
        this.setFlag("--instance-id", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_run_command_invoke_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Space-separated parameters in the format of '[name=]value'. */
    parameters(value: string): az_vmss_run_command_invoke_command_builder {
        this.setFlag("--parameters", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_run_command_invoke_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Space-separated script lines. Use @{file} to load script from a file. */
    scripts(value: string): az_vmss_run_command_invoke_command_builder {
        this.setFlag("--scripts", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_run_command_invoke_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_run_command_list_command_builder extends CommandBuilder<az_vmss_run_command_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string) {
        super(commandPath, resultDataTypeName);
        this.location(location)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vmss_run_command_list_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vmss_run_command_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_run_command_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_run_command_show_command_builder extends CommandBuilder<az_vmss_run_command_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, commandId: string, location: string) {
        super(commandPath, resultDataTypeName);
        this.commandId(commandId)
        this.location(location)
    }

    /** The command id. */
    commandId(value: string): az_vmss_run_command_show_command_builder {
        this.setFlag("--command-id", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_vmss_run_command_show_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vmss_run_command_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_run_command_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_create_command_builder extends CommandBuilder<az_vmss_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the virtual machine scale set. */
    name(value: string): az_vmss_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Enable accelerated networking. Unless specified, CLI will enable it based on machine image and size. */
    acceleratedNetworking(value: boolean): az_vmss_create_command_builder {
        this.setFlag("--accelerated-networking", value.toString());
        return this;
    }

    /** Password for the VM if authentication type is 'Password'. */
    adminPassword(value: string): az_vmss_create_command_builder {
        this.setFlag("--admin-password", value);
        return this;
    }

    /** Username for the VM. Default value is current username of OS. If the default value is system reserved, then default value will be set to azureuser. Please refer to <a href="https://docs.microsoft.com/en-us/rest/api/compute/virtualmachines/createorupdate#osprofile">https://docs.microsoft.com/en-us/rest/api/compute/virtualmachines/createorupdate#osprofile</a> to get a full list of reserved values. */
    adminUsername(value: string): az_vmss_create_command_builder {
        this.setFlag("--admin-username", value);
        return this;
    }

    /** Name to use when creating a new application gateway (default) or referencing an existing one. Can also reference an existing application gateway by ID or specify "" for none. */
    appGateway(value: string): az_vmss_create_command_builder {
        this.setFlag("--app-gateway", value);
        return this;
    }

    /** The number of instances to use when creating a new application gateway. */
    appGatewayCapacity(value: string): az_vmss_create_command_builder {
        this.setFlag("--app-gateway-capacity", value);
        return this;
    }

    /** SKU when creating a new application gateway. */
    appGatewaySku(value: string): az_vmss_create_command_builder {
        this.setFlag("--app-gateway-sku", value);
        return this;
    }

    /** The subnet IP address prefix to use when creating a new application gateway in CIDR format. */
    appGatewaySubnetAddressPrefix(value: string): az_vmss_create_command_builder {
        this.setFlag("--app-gateway-subnet-address-prefix", value);
        return this;
    }

    /** Space-separated list of existing application security groups to associate with the VM. */
    asgs(value: string): az_vmss_create_command_builder {
        this.setFlag("--asgs", value);
        return this;
    }

    /** Accept system or user assigned identities separated by spaces. Use '[system]' to refer system assigned identity, or a resource id to refer user assigned identity. Check out help for more examples. */
    assignIdentity(value: string): az_vmss_create_command_builder {
        this.setFlag("--assign-identity", value);
        return this;
    }

    /** Type of authentication to use with the VM. Defaults to password for Windows and SSH public key for Linux. "all" enables both ssh and password authentication. */
    authenticationType(value: 'all' | 'password' | 'ssh'): az_vmss_create_command_builder {
        this.setFlag("--authentication-type", value);
        return this;
    }

    /** The amount of time (in minutes, between 30 and 90) for which automatic repairs are suspended due to a state change on VM. */
    automaticRepairsGracePeriod(value: string): az_vmss_create_command_builder {
        this.setFlag("--automatic-repairs-grace-period", value);
        return this;
    }

    /** Name to use for the backend pool when creating a new load balancer or application gateway. */
    backendPoolName(value: string): az_vmss_create_command_builder {
        this.setFlag("--backend-pool-name", value);
        return this;
    }

    /** When creating a new load balancer, backend port to open with NAT rules (Defaults to 22 on Linux and 3389 on Windows). When creating an application gateway, the backend port to use for the backend HTTP settings. */
    backendPort(value: string): az_vmss_create_command_builder {
        this.setFlag("--backend-port", value);
        return this;
    }

    /** Computer name prefix for all of the virtual machines in the scale set. Computer name prefixes must be 1 to 15 characters long. */
    computerNamePrefix(value: string): az_vmss_create_command_builder {
        this.setFlag("--computer-name-prefix", value);
        return this;
    }

    /** Custom init script file or text (cloud-init, cloud-config, etc..). */
    customData(value: string): az_vmss_create_command_builder {
        this.setFlag("--custom-data", value);
        return this;
    }

    /** Storage caching type for data disk(s), including 'None', 'ReadOnly', 'ReadWrite', etc. Use a singular value to apply on all disks, or use `<lun>=<vaule1> <lun>=<value2>` to configure individual disk. */
    dataDiskCaching(value: string): az_vmss_create_command_builder {
        this.setFlag("--data-disk-caching", value);
        return this;
    }

    /** Names or IDs (space delimited) of disk encryption sets for data disks. */
    dataDiskEncryptionSets(value: string): az_vmss_create_command_builder {
        this.setFlag("--data-disk-encryption-sets", value);
        return this;
    }

    /** Specify the Read-Write IOPS (space delimited) for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB. */
    dataDiskIops(value: string): az_vmss_create_command_builder {
        this.setFlag("--data-disk-iops", value);
        return this;
    }

    /** Specify the bandwidth in MB per second (space delimited) for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB. */
    dataDiskMbps(value: string): az_vmss_create_command_builder {
        this.setFlag("--data-disk-mbps", value);
        return this;
    }

    /** Space-separated empty managed data disk sizes in GB to create. */
    dataDiskSizesGb(value: string): az_vmss_create_command_builder {
        this.setFlag("--data-disk-sizes-gb", value);
        return this;
    }

    /** Overprovision option (see <a href="https://azure.microsoft.com/documentation/articles/virtual-machine-scale-sets-overview/">https://azure.microsoft.com/documentation/articles/virtual-machine-scale-sets-overview/</a> for details). */
    disableOverprovision(value: string): az_vmss_create_command_builder {
        this.setFlag("--disable-overprovision", value);
        return this;
    }

    /** Space-separated IP addresses of DNS servers, e.g. 10.0.0.5 10.0.0.6. */
    dnsServers(value: string): az_vmss_create_command_builder {
        this.setFlag("--dns-servers", value);
        return this;
    }

    /** Enable Host Encryption for the VM or VMSS. This will enable the encryption for all the disks including Resource/Temp disk at host itself. */
    encryptionAtHost(value: boolean): az_vmss_create_command_builder {
        this.setFlag("--encryption-at-host", value.toString());
        return this;
    }

    /** Allows you to create an OS disk directly on the host node, providing local disk performance and faster VM/VMSS reimage time. */
    ephemeralOsDisk(value: boolean): az_vmss_create_command_builder {
        this.setFlag("--ephemeral-os-disk", value.toString());
        return this;
    }

    /** The eviction policy for virtual machines in a Spot priority scale set. Default eviction policy is Deallocate for a Spot priority scale set. */
    evictionPolicy(value: 'Deallocate' | 'Delete'): az_vmss_create_command_builder {
        this.setFlag("--eviction-policy", value);
        return this;
    }

    /** Generate SSH public and private key files if missing. The keys will be stored in the ~/.ssh directory. */
    generateSshKeys(value: string): az_vmss_create_command_builder {
        this.setFlag("--generate-ssh-keys", value);
        return this;
    }

    /** Probe name from the existing load balancer, mainly used for rolling upgrade or automatic repairs. */
    healthProbe(value: string): az_vmss_create_command_builder {
        this.setFlag("--health-probe", value);
        return this;
    }

    /** Name or ID of dedicated host group that the virtual machine scale set resides in. */
    hostGroup(value: string): az_vmss_create_command_builder {
        this.setFlag("--host-group", value);
        return this;
    }

    /** The name of the operating system image as a URN alias, URN, custom image name or ID, or VHD blob URI. Valid URN format: "Publisher:Offer:Sku:Version". */
    image(value: string): az_vmss_create_command_builder {
        this.setFlag("--image", value);
        return this;
    }

    /** Number of VMs in the scale set. */
    instanceCount(value: string): az_vmss_create_command_builder {
        this.setFlag("--instance-count", value);
        return this;
    }

    /** Name to use when creating a new load balancer (default) or referencing an existing one. Can also reference an existing load balancer by ID or specify "" for none. */
    loadBalancer(value: string): az_vmss_create_command_builder {
        this.setFlag("--load-balancer", value);
        return this;
    }

    /** Name to use for the NAT pool when creating a new load balancer. */
    lbNatPoolName(value: string): az_vmss_create_command_builder {
        this.setFlag("--lb-nat-pool-name", value);
        return this;
    }

    /** Sku of the Load Balancer to create. Default to 'Standard' when single placement group is turned off; otherwise, default to 'Basic'. */
    lbSku(value: 'Basic' | 'Standard'): az_vmss_create_command_builder {
        this.setFlag("--lb-sku", value);
        return this;
    }

    /** Specifies that the Windows image or disk was licensed on-premises. To enable Azure Hybrid Benefit for Windows Server, use 'Windows_Server'. To enable Multitenant Hosting Rights for Windows 10, use 'Windows_Client'. For more information see the Azure Windows VM online docs. */
    licenseType(value: 'None' | 'RHEL_BYOS' | 'SLES_BYOS' | 'Windows_Client' | 'Windows_Server'): az_vmss_create_command_builder {
        this.setFlag("--license-type", value);
        return this;
    }

    /** Location in which to create VM and related resources. If default location is not configured, will default to the resource group's location. */
    location(value: string): az_vmss_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The maximum price (in US Dollars) you are willing to pay for a Spot VM/VMSS. -1 indicates that the Spot VM/VMSS should not be evicted for price reasons. */
    maxPrice(value: string): az_vmss_create_command_builder {
        this.setFlag("--max-price", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of an existing Network Security Group. */
    nsg(value: string): az_vmss_create_command_builder {
        this.setFlag("--nsg", value);
        return this;
    }

    /** Choose how virtual machines are managed by the scale set. In VM mode, you manually create and add a virtual machine of any configuration to the scale set. In ScaleSetVM mode, you define a virtual machine model and Azure will generate identical instances based on that model. */
    orchestrationMode(value: 'ScaleSetVM' | 'VM'): az_vmss_create_command_builder {
        this.setFlag("--orchestration-mode", value);
        return this;
    }

    /** Storage caching type for the VM OS disk. Default: ReadWrite. */
    osDiskCaching(value: 'None' | 'ReadOnly' | 'ReadWrite'): az_vmss_create_command_builder {
        this.setFlag("--os-disk-caching", value);
        return this;
    }

    /** Name or ID of disk encryption set for OS disk. */
    osDiskEncryptionSet(value: string): az_vmss_create_command_builder {
        this.setFlag("--os-disk-encryption-set", value);
        return this;
    }

    /** The name of the new VM OS disk. */
    osDiskName(value: string): az_vmss_create_command_builder {
        this.setFlag("--os-disk-name", value);
        return this;
    }

    /** OS disk size in GB to create. */
    osDiskSizeGb(value: string): az_vmss_create_command_builder {
        this.setFlag("--os-disk-size-gb", value);
        return this;
    }

    /** Type of OS installed on a custom VHD. Do not use when specifying an URN or URN alias. */
    osType(value: 'linux' | 'windows'): az_vmss_create_command_builder {
        this.setFlag("--os-type", value);
        return this;
    }

    /** Plan name. */
    planName(value: string): az_vmss_create_command_builder {
        this.setFlag("--plan-name", value);
        return this;
    }

    /** Plan product. */
    planProduct(value: string): az_vmss_create_command_builder {
        this.setFlag("--plan-product", value);
        return this;
    }

    /** Plan promotion code. */
    planPromotionCode(value: string): az_vmss_create_command_builder {
        this.setFlag("--plan-promotion-code", value);
        return this;
    }

    /** Plan publisher. */
    planPublisher(value: string): az_vmss_create_command_builder {
        this.setFlag("--plan-publisher", value);
        return this;
    }

    /** Fault Domain count for each placement group in the availability zone. */
    platformFaultDomainCount(value: string): az_vmss_create_command_builder {
        this.setFlag("--platform-fault-domain-count", value);
        return this;
    }

    /** The name or ID of the proximity placement group the VMSS should be associated with. */
    ppg(value: string): az_vmss_create_command_builder {
        this.setFlag("--ppg", value);
        return this;
    }

    /** Priority. Use 'Spot' to run short-lived workloads in a cost-effective way. 'Low' enum will be deprecated in the future. Please use 'Spot' to deploy Azure spot VM and/or VMSS. Default to Regular. */
    priority(value: 'Low' | 'Regular' | 'Spot'): az_vmss_create_command_builder {
        this.setFlag("--priority", value);
        return this;
    }

    /** Name of the public IP address when creating one (default) or referencing an existing one. Can also reference an existing public IP by ID or specify "" for None ('""' in Azure CLI using PowerShell or --% operator). */
    publicIpAddress(value: string): az_vmss_create_command_builder {
        this.setFlag("--public-ip-address", value);
        return this;
    }

    /** */
    publicIpAddressAllocation(value: 'dynamic' | 'static'): az_vmss_create_command_builder {
        this.setFlag("--public-ip-address-allocation", value);
        return this;
    }

    /** Globally unique DNS name for a newly created public IP. */
    publicIpAddressDnsName(value: string): az_vmss_create_command_builder {
        this.setFlag("--public-ip-address-dns-name", value);
        return this;
    }

    /** Each VM instance will have a public ip. For security, you can use '--nsg' to apply appropriate rules. */
    publicIpPerVm(value: string): az_vmss_create_command_builder {
        this.setFlag("--public-ip-per-vm", value);
        return this;
    }

    /** Role name or id the system assigned identity will have. */
    role(value: string): az_vmss_create_command_builder {
        this.setFlag("--role", value);
        return this;
    }

    /** Specify the scale-in policy (space delimited) that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled-in. */
    scaleInPolicy(value: 'Default' | 'NewestVM' | 'OldestVM'): az_vmss_create_command_builder {
        this.setFlag("--scale-in-policy", value);
        return this;
    }

    /** Scope that the system assigned identity can access. */
    scope(value: string): az_vmss_create_command_builder {
        this.setFlag("--scope", value);
        return this;
    }

    /** One or many Key Vault secrets as JSON strings or files via `@{path}` containing `[{ "sourceVault": { "id": "value" }, "vaultCertificates": [{ "certificateUrl": "value", "certificateStore": "cert store name (only on windows)"}] }]`. */
    secrets(value: string): az_vmss_create_command_builder {
        this.setFlag("--secrets", value);
        return this;
    }

    /** Limit the scale set to a single placement group. See <a href="https://docs.microsoft.com/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups">https://docs.microsoft.com/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups</a> for details. */
    singlePlacementGroup(value: boolean): az_vmss_create_command_builder {
        this.setFlag("--single-placement-group", value.toString());
        return this;
    }

    /** Indicate whether the source image is specialized. */
    specialized(value: boolean): az_vmss_create_command_builder {
        this.setFlag("--specialized", value.toString());
        return this;
    }

    /** Destination file path on the VM for the SSH key. If the file already exists, the specified key(s) are appended to the file. Destination path for SSH public keys is currently limited to its default value "/home/username/.ssh/authorized_keys" due to a known issue in Linux provisioning agent. */
    sshDestKeyPath(value: string): az_vmss_create_command_builder {
        this.setFlag("--ssh-dest-key-path", value);
        return this;
    }

    /** Space-separated list of SSH public keys or public key file paths. */
    sshKeyValues(value: string): az_vmss_create_command_builder {
        this.setFlag("--ssh-key-values", value);
        return this;
    }

    /** Only applicable when used with `--use-unmanaged-disk`. Name of the storage container for the VM OS disk. Default: vhds. */
    storageContainerName(value: string): az_vmss_create_command_builder {
        this.setFlag("--storage-container-name", value);
        return this;
    }

    /** The SKU of the storage account with which to persist VM. Use a singular sku that would be applied across all disks, or specify individual disks. Usage: [--storage-sku SKU | --storage-sku ID=SKU ID=SKU ID=SKU...], where each ID is "os" or a 0-indexed lun. Allowed values: Standard_LRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS. */
    storageSku(value: string): az_vmss_create_command_builder {
        this.setFlag("--storage-sku", value);
        return this;
    }

    /** The name of the subnet when creating a new VNet or referencing an existing one. Can also reference an existing subnet by ID. If both vnet-name and subnet are omitted, an appropriate VNet and subnet will be selected automatically, or a new one will be created. */
    subnet(value: string): az_vmss_create_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** The subnet IP address prefix to use when creating a new VNet in CIDR format. */
    subnetAddressPrefix(value: string): az_vmss_create_command_builder {
        this.setFlag("--subnet-address-prefix", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_vmss_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Length of time (in minutes, between 5 and 15) a notification to be sent to the VM on the instance metadata server till the VM gets deleted. */
    terminateNotificationTime(value: string): az_vmss_create_command_builder {
        this.setFlag("--terminate-notification-time", value);
        return this;
    }

    /** Enables or disables the capability to have 1 or more managed data disks with UltraSSD_LRS storage account. */
    ultraSsdEnabled(value: boolean): az_vmss_create_command_builder {
        this.setFlag("--ultra-ssd-enabled", value.toString());
        return this;
    }

    /** */
    upgradePolicyMode(value: 'Automatic' | 'Manual' | 'Rolling'): az_vmss_create_command_builder {
        this.setFlag("--upgrade-policy-mode", value);
        return this;
    }

    /** Do not use managed disk to persist VM. */
    useUnmanagedDisk(value: string): az_vmss_create_command_builder {
        this.setFlag("--use-unmanaged-disk", value);
        return this;
    }

    /** Generate and validate the ARM template without creating any resources. */
    validate(value: string): az_vmss_create_command_builder {
        this.setFlag("--validate", value);
        return this;
    }

    /** Domain name of VM instances, once configured, the FQDN is `vm<vm-index>.<vm-domain-name>.<..rest..>`. */
    vmDomainName(value: string): az_vmss_create_command_builder {
        this.setFlag("--vm-domain-name", value);
        return this;
    }

    /** Size of VMs in the scale set. Default to "Standard_DS1_v2". See <a href="https://azure.microsoft.com/pricing/details/virtual-machines/">https://azure.microsoft.com/pricing/details/virtual-machines/</a> for size info. */
    vmSku(value: string): az_vmss_create_command_builder {
        this.setFlag("--vm-sku", value);
        return this;
    }

    /** The IP address prefix to use when creating a new VNet in CIDR format. */
    vnetAddressPrefix(value: string): az_vmss_create_command_builder {
        this.setFlag("--vnet-address-prefix", value);
        return this;
    }

    /** Name of the virtual network when creating a new one or referencing an existing one. */
    vnetName(value: string): az_vmss_create_command_builder {
        this.setFlag("--vnet-name", value);
        return this;
    }

    /** Space-separated list of availability zones into which to provision the resource. */
    zones(value: '1' | '2' | '3'): az_vmss_create_command_builder {
        this.setFlag("--zones", value);
        return this;
    }
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
class az_vmss_deallocate_command_builder extends CommandBuilder<az_vmss_deallocate_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_deallocate_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_deallocate_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances. If not provided, the action will be applied on the scaleset itself. */
    instanceIds(value: string): az_vmss_deallocate_command_builder {
        this.setFlag("--instance-ids", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_deallocate_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_deallocate_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_delete_command_builder extends CommandBuilder<az_vmss_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_delete_instances_command_builder extends CommandBuilder<az_vmss_delete_instances_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, instanceIds: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.instanceIds(instanceIds)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances. */
    instanceIds(value: string): az_vmss_delete_instances_command_builder {
        this.setFlag("--instance-ids", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_delete_instances_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_delete_instances_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_delete_instances_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_delete_instances_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_get_instance_view_command_builder extends CommandBuilder<az_vmss_get_instance_view_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_get_instance_view_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** A VM instance ID or "\*" to list instance view for all VMs in a scale set. */
    instanceId(value: string): az_vmss_get_instance_view_command_builder {
        this.setFlag("--instance-id", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_get_instance_view_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_get_instance_view_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_get_instance_view_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_get_os_upgrade_history_command_builder extends CommandBuilder<az_vmss_get_os_upgrade_history_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_get_os_upgrade_history_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_get_os_upgrade_history_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_get_os_upgrade_history_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_get_os_upgrade_history_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_list_command_builder extends CommandBuilder<az_vmss_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vmss_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_list_instance_connection_info_command_builder extends CommandBuilder<az_vmss_list_instance_connection_info_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_list_instance_connection_info_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_list_instance_connection_info_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_list_instance_connection_info_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_list_instance_connection_info_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_list_instance_public_ips_command_builder extends CommandBuilder<az_vmss_list_instance_public_ips_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_list_instance_public_ips_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_list_instance_public_ips_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_list_instance_public_ips_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_list_instance_public_ips_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_list_instances_command_builder extends CommandBuilder<az_vmss_list_instances_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The expand expression to apply to the operation. Allowed values are 'instanceView'. */
    expand(value: string): az_vmss_list_instances_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** The filter to apply to the operation. Allowed values are 'startswith(instanceView/statuses/code, 'PowerState') eq true', 'properties/latestModelApplied eq true', 'properties/latestModelApplied eq false'. */
    filter(value: string): az_vmss_list_instances_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_list_instances_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_list_instances_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_list_instances_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The list parameters. Allowed values are 'instanceView', 'instanceView/statuses'. */
    select(value: string): az_vmss_list_instances_command_builder {
        this.setFlag("--select", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_list_instances_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_list_skus_command_builder extends CommandBuilder<az_vmss_list_skus_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_list_skus_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_list_skus_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_list_skus_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_list_skus_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_perform_maintenance_command_builder extends CommandBuilder<az_vmss_perform_maintenance_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_perform_maintenance_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances. If not provided, the action will be applied on the scaleset itself. */
    instanceIds(value: string): az_vmss_perform_maintenance_command_builder {
        this.setFlag("--instance-ids", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_perform_maintenance_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_perform_maintenance_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_perform_maintenance_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_reimage_command_builder extends CommandBuilder<az_vmss_reimage_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_reimage_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** VM instance ID. If missing, reimage all instances. */
    instanceId(value: string): az_vmss_reimage_command_builder {
        this.setFlag("--instance-id", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_reimage_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_reimage_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_reimage_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_reimage_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_restart_command_builder extends CommandBuilder<az_vmss_restart_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_restart_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_restart_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances. If not provided, the action will be applied on the scaleset itself. */
    instanceIds(value: string): az_vmss_restart_command_builder {
        this.setFlag("--instance-ids", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_restart_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_restart_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_scale_command_builder extends CommandBuilder<az_vmss_scale_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, newCapacity: string) {
        super(commandPath, resultDataTypeName);
        this.newCapacity(newCapacity)
    }

    /** Number of VMs in the VMSS. */
    newCapacity(value: string): az_vmss_scale_command_builder {
        this.setFlag("--new-capacity", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_scale_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_scale_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_scale_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_scale_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_scale_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_set_orchestration_service_state_command_builder extends CommandBuilder<az_vmss_set_orchestration_service_state_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, action: 'Resume' | 'Suspend', serviceName: 'AutomaticRepairs') {
        super(commandPath, resultDataTypeName);
        this.action(action)
        this.serviceName(serviceName)
    }

    /** The action to be performed. */
    action(value: 'Resume' | 'Suspend'): az_vmss_set_orchestration_service_state_command_builder {
        this.setFlag("--action", value);
        return this;
    }

    /** The name of the orchestration service. */
    serviceName(value: 'AutomaticRepairs'): az_vmss_set_orchestration_service_state_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_set_orchestration_service_state_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_set_orchestration_service_state_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_set_orchestration_service_state_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_set_orchestration_service_state_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_set_orchestration_service_state_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_show_command_builder extends CommandBuilder<az_vmss_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** VM instance ID. If missing, show the VMSS. */
    instanceId(value: string): az_vmss_show_command_builder {
        this.setFlag("--instance-id", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_vmss_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_simulate_eviction_command_builder extends CommandBuilder<az_vmss_simulate_eviction_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, instanceId: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.instanceId(instanceId)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The instance ID of the virtual machine. */
    instanceId(value: string): az_vmss_simulate_eviction_command_builder {
        this.setFlag("--instance-id", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_simulate_eviction_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_simulate_eviction_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_simulate_eviction_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_start_command_builder extends CommandBuilder<az_vmss_start_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_start_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_start_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances. If not provided, the action will be applied on the scaleset itself. */
    instanceIds(value: string): az_vmss_start_command_builder {
        this.setFlag("--instance-ids", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_start_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_start_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_stop_command_builder extends CommandBuilder<az_vmss_stop_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_stop_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_stop_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances. If not provided, the action will be applied on the scaleset itself. */
    instanceIds(value: string): az_vmss_stop_command_builder {
        this.setFlag("--instance-ids", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_stop_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Skip shutdown and power-off immediately. */
    skipShutdown(value: string): az_vmss_stop_command_builder {
        this.setFlag("--skip-shutdown", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_stop_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_update_command_builder extends CommandBuilder<az_vmss_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_vmss_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The amount of time (in minutes, between 30 and 90) for which automatic repairs are suspended due to a state change on VM. */
    automaticRepairsGracePeriod(value: string): az_vmss_update_command_builder {
        this.setFlag("--automatic-repairs-grace-period", value);
        return this;
    }

    /** Enable automatic repairs. */
    enableAutomaticRepairs(value: boolean): az_vmss_update_command_builder {
        this.setFlag("--enable-automatic-repairs", value.toString());
        return this;
    }

    /** Enable terminate notification. */
    enableTerminateNotification(value: boolean): az_vmss_update_command_builder {
        this.setFlag("--enable-terminate-notification", value.toString());
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_vmss_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Update the VM instance with this ID. If missing, Update the VMSS. */
    instanceId(value: string): az_vmss_update_command_builder {
        this.setFlag("--instance-id", value);
        return this;
    }

    /** Specifies that the Windows image or disk was licensed on-premises. To enable Azure Hybrid Benefit for Windows Server, use 'Windows_Server'. To enable Multitenant Hosting Rights for Windows 10, use 'Windows_Client'. For more information see the Azure Windows VM online docs. */
    licenseType(value: 'None' | 'RHEL_BYOS' | 'SLES_BYOS' | 'Windows_Client' | 'Windows_Server'): az_vmss_update_command_builder {
        this.setFlag("--license-type", value);
        return this;
    }

    /** The maximum price (in US Dollars) you are willing to pay for a Spot VM/VMSS. -1 indicates that the Spot VM/VMSS should not be evicted for price reasons. */
    maxPrice(value: string): az_vmss_update_command_builder {
        this.setFlag("--max-price", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The name or ID of the proximity placement group the VMSS should be associated with. */
    ppg(value: string): az_vmss_update_command_builder {
        this.setFlag("--ppg", value);
        return this;
    }

    /** Priority. Use 'Spot' to run short-lived workloads in a cost-effective way. 'Low' enum will be deprecated in the future. Please use 'Spot' to deploy Azure spot VM and/or VMSS. Default to Regular. */
    priority(value: 'Low' | 'Regular' | 'Spot'): az_vmss_update_command_builder {
        this.setFlag("--priority", value);
        return this;
    }

    /** Protect the VM instance from scale-in operations. */
    protectFromScaleIn(value: boolean): az_vmss_update_command_builder {
        this.setFlag("--protect-from-scale-in", value.toString());
        return this;
    }

    /** Protect the VM instance from scale set actions (including scale-in). */
    protectFromScaleSetActions(value: boolean): az_vmss_update_command_builder {
        this.setFlag("--protect-from-scale-set-actions", value.toString());
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_vmss_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Specify the scale-in policy (space delimited) that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled-in. */
    scaleInPolicy(value: 'Default' | 'NewestVM' | 'OldestVM'): az_vmss_update_command_builder {
        this.setFlag("--scale-in-policy", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_vmss_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Length of time (in minutes, between 5 and 15) a notification to be sent to the VM on the instance metadata server till the VM gets deleted. */
    terminateNotificationTime(value: string): az_vmss_update_command_builder {
        this.setFlag("--terminate-notification-time", value);
        return this;
    }

    /** Enables or disables the capability to have 1 or more managed data disks with UltraSSD_LRS storage account. */
    ultraSsdEnabled(value: boolean): az_vmss_update_command_builder {
        this.setFlag("--ultra-ssd-enabled", value.toString());
        return this;
    }
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
class az_vmss_update_instances_command_builder extends CommandBuilder<az_vmss_update_instances_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, instanceIds: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.instanceIds(instanceIds)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Space-separated list of IDs (ex: 1 2 3 ...) or \* for all instances. */
    instanceIds(value: string): az_vmss_update_instances_command_builder {
        this.setFlag("--instance-ids", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_update_instances_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_update_instances_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_vmss_update_instances_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_update_instances_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_vmss_wait_command_builder extends CommandBuilder<az_vmss_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_vmss_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_vmss_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_vmss_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_vmss_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_vmss_wait_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Wait on the VM instance with this ID. If missing, Wait on the VMSS. */
    instanceId(value: string): az_vmss_wait_command_builder {
        this.setFlag("--instance-id", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_vmss_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Scale set name. You can configure the default using `az configure --defaults vmss=<name>`. */
    name(value: string): az_vmss_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_vmss_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_vmss_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_vmss_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_vmss_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
}
