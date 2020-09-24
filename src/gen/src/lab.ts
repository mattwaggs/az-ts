import { CommandBuilder } from '../base';

/** Manage Azure Resource Manager (ARM) templates in an Azure DevTest Lab. */
export class az_lab_arm_template {
    /**
     * List azure resource manager templates in a given artifact source.
     *
     * Syntax:
     * ```
     * az lab arm-template list --artifact-source-name
     *                          --lab-name
     *                          --resource-group
     *                          [--expand]
     *                          [--filter]
     *                          [--orderby]
     *                          [--query-examples]
     *                          [--subscription]
     *                          [--top]
     * ```
     *
     * @param {string} artifactSourceName The name of the artifact source.
     * @param {string} labName The name of the lab.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_arm_template_list(artifactSourceName: string, labName: string, resourceGroup: string): az_lab_arm_template_list_command_builder {
        return new az_lab_arm_template_list_command_builder("az lab arm-template list", artifactSourceName, labName, resourceGroup);
    }

    /**
     * Get the details of an ARM template in a lab.
     *
     * Syntax:
     * ```
     * az lab arm-template show --artifact-source-name
     *                          --lab-name
     *                          --name
     *                          --resource-group
     *                          [--export-parameters]
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} artifactSourceName Name of the artifact source.
     * @param {string} labName Name of the lab.
     * @param {string} name Name of the Azure Resource Manager template.
     * @param {string} resourceGroup Name of lab's resource group.
     */
    static az_lab_arm_template_show(artifactSourceName: string, labName: string, name: string, resourceGroup: string): az_lab_arm_template_show_command_builder {
        return new az_lab_arm_template_show_command_builder("az lab arm-template show", artifactSourceName, labName, name, resourceGroup);
    }
}

/** Manage DevTest Lab artifact sources. */
export class az_lab_artifact_source {
    /**
     * List artifact sources in a given lab.
     *
     * Syntax:
     * ```
     * az lab artifact-source list --lab-name
     *                             --resource-group
     *                             [--expand]
     *                             [--filter]
     *                             [--orderby]
     *                             [--query-examples]
     *                             [--subscription]
     *                             [--top]
     * ```
     *
     * @param {string} labName The name of the lab.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_artifact_source_list(labName: string, resourceGroup: string): az_lab_artifact_source_list_command_builder {
        return new az_lab_artifact_source_list_command_builder("az lab artifact-source list", labName, resourceGroup);
    }

    /**
     * Get artifact source.
     *
     * Syntax:
     * ```
     * az lab artifact-source show --lab-name
     *                             --name
     *                             --resource-group
     *                             [--expand]
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     *
     * @param {string} labName The name of the lab.
     * @param {string} name The name of the artifact source.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_artifact_source_show(labName: string, name: string, resourceGroup: string): az_lab_artifact_source_show_command_builder {
        return new az_lab_artifact_source_show_command_builder("az lab artifact-source show", labName, name, resourceGroup);
    }
}

/** Manage DevTest Labs artifacts. */
export class az_lab_artifact {
    /**
     * List artifacts in a given artifact source.
     *
     * Syntax:
     * ```
     * az lab artifact list --artifact-source-name
     *                      --lab-name
     *                      --resource-group
     *                      [--expand]
     *                      [--filter]
     *                      [--orderby]
     *                      [--query-examples]
     *                      [--subscription]
     *                      [--top]
     * ```
     *
     * @param {string} artifactSourceName The name of the artifact source.
     * @param {string} labName The name of the lab.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_artifact_list(artifactSourceName: string, labName: string, resourceGroup: string): az_lab_artifact_list_command_builder {
        return new az_lab_artifact_list_command_builder("az lab artifact list", artifactSourceName, labName, resourceGroup);
    }
}

/** Manage custom images of a DevTest Lab. */
export class az_lab_custom_image {
    /**
     * Create a custom image in a DevTest Lab.
     *
     * Syntax:
     * ```
     * az lab custom-image create --lab-name
     *                            --name
     *                            --os-state
     *                            --os-type
     *                            --resource-group
     *                            --source-vm-id
     *                            [--author]
     *                            [--description]
     *                            [--subscription]
     * ```
     *
     * @param {string} labName Name of the Lab.
     * @param {string} name Name of the image.
     * @param {string} osState The current state of the virtual machine.
     * @param {string} osType Type of the OS on which the custom image is based. Allowed values are: Windows, Linux.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} sourceVmId The resource ID of a virtual machine in the provided lab.
     */
    static az_lab_custom_image_create(labName: string, name: string, osState: string, osType: string, resourceGroup: string, sourceVmId: string): az_lab_custom_image_create_command_builder {
        return new az_lab_custom_image_create_command_builder("az lab custom-image create", labName, name, osState, osType, resourceGroup, sourceVmId);
    }

    /**
     * Delete custom image.
     *
     * Syntax:
     * ```
     * az lab custom-image delete --lab-name
     *                            --name
     *                            --resource-group
     *                            [--subscription]
     * ```
     *
     * @param {string} labName The name of the lab.
     * @param {string} name The name of the custom image.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_custom_image_delete(labName: string, name: string, resourceGroup: string): az_lab_custom_image_delete_command_builder {
        return new az_lab_custom_image_delete_command_builder("az lab custom-image delete", labName, name, resourceGroup);
    }

    /**
     * List custom images in a given lab.
     *
     * Syntax:
     * ```
     * az lab custom-image list --lab-name
     *                          --resource-group
     *                          [--expand]
     *                          [--filter]
     *                          [--orderby]
     *                          [--query-examples]
     *                          [--subscription]
     *                          [--top]
     * ```
     *
     * @param {string} labName The name of the lab.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_custom_image_list(labName: string, resourceGroup: string): az_lab_custom_image_list_command_builder {
        return new az_lab_custom_image_list_command_builder("az lab custom-image list", labName, resourceGroup);
    }

    /**
     * Get custom image.
     *
     * Syntax:
     * ```
     * az lab custom-image show --lab-name
     *                          --name
     *                          --resource-group
     *                          [--expand]
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} labName The name of the lab.
     * @param {string} name The name of the custom image.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_custom_image_show(labName: string, name: string, resourceGroup: string): az_lab_custom_image_show_command_builder {
        return new az_lab_custom_image_show_command_builder("az lab custom-image show", labName, name, resourceGroup);
    }
}

/** Manage environments for an Azure DevTest Lab. */
export class az_lab_environment {
    /**
     * Create an environment in a lab.
     *
     * Syntax:
     * ```
     * az lab environment create --arm-template
     *                           --lab-name
     *                           --name
     *                           --resource-group
     *                           [--artifact-source-name]
     *                           [--parameters]
     *                           [--subscription]
     *                           [--tags]
     * ```
     *
     * @param {string} armTemplate Name or ID of the ARM template in the lab.
     * @param {string} labName Name of the lab.
     * @param {string} name Name of the environment.
     * @param {string} resourceGroup Name of the lab's resource group.
     */
    static az_lab_environment_create(armTemplate: string, labName: string, name: string, resourceGroup: string): az_lab_environment_create_command_builder {
        return new az_lab_environment_create_command_builder("az lab environment create", armTemplate, labName, name, resourceGroup);
    }

    /**
     * Delete an environment from a lab.
     *
     * Syntax:
     * ```
     * az lab environment delete --lab-name
     *                           --name
     *                           --resource-group
     *                           [--subscription]
     * ```
     *
     * @param {string} labName The name of the lab.
     * @param {string} name The name of the environment.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_environment_delete(labName: string, name: string, resourceGroup: string): az_lab_environment_delete_command_builder {
        return new az_lab_environment_delete_command_builder("az lab environment delete", labName, name, resourceGroup);
    }

    /**
     * List environments in a lab.
     *
     * Syntax:
     * ```
     * az lab environment list --lab-name
     *                         --resource-group
     *                         [--expand]
     *                         [--filter]
     *                         [--orderby]
     *                         [--query-examples]
     *                         [--subscription]
     *                         [--top]
     * ```
     *
     * @param {string} labName The name of the lab.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_environment_list(labName: string, resourceGroup: string): az_lab_environment_list_command_builder {
        return new az_lab_environment_list_command_builder("az lab environment list", labName, resourceGroup);
    }

    /**
     * Get the details for an environment of a lab.
     *
     * Syntax:
     * ```
     * az lab environment show --lab-name
     *                         --name
     *                         --resource-group
     *                         [--expand]
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     *
     * @param {string} labName The name of the lab.
     * @param {string} name The name of the environment.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_environment_show(labName: string, name: string, resourceGroup: string): az_lab_environment_show_command_builder {
        return new az_lab_environment_show_command_builder("az lab environment show", labName, name, resourceGroup);
    }
}

/** Manage formulas for an Azure DevTest Lab. */
export class az_lab_formula {
    /**
     * Delete formula.
     *
     * Syntax:
     * ```
     * az lab formula delete --lab-name
     *                       --name
     *                       --resource-group
     *                       [--subscription]
     * ```
     *
     * @param {string} labName The name of the lab.
     * @param {string} name The name of the formula.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_formula_delete(labName: string, name: string, resourceGroup: string): az_lab_formula_delete_command_builder {
        return new az_lab_formula_delete_command_builder("az lab formula delete", labName, name, resourceGroup);
    }

    /**
     * Export artifacts from a formula.
     *
     * Syntax:
     * ```
     * az lab formula export-artifacts --lab-name
     *                                 --name
     *                                 --resource-group
     *                                 [--subscription]
     * ```
     *
     * @param {string} labName Name of the lab.
     * @param {string} name Name of the formula.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_formula_export_artifacts(labName: string, name: string, resourceGroup: string): az_lab_formula_export_artifacts_command_builder {
        return new az_lab_formula_export_artifacts_command_builder("az lab formula export-artifacts", labName, name, resourceGroup);
    }

    /**
     * List formulas in a given lab.
     *
     * Syntax:
     * ```
     * az lab formula list --lab-name
     *                     --resource-group
     *                     [--expand]
     *                     [--filter]
     *                     [--orderby]
     *                     [--query-examples]
     *                     [--subscription]
     *                     [--top]
     * ```
     *
     * @param {string} labName The name of the lab.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_formula_list(labName: string, resourceGroup: string): az_lab_formula_list_command_builder {
        return new az_lab_formula_list_command_builder("az lab formula list", labName, resourceGroup);
    }

    /**
     * Show formulae from an Azure DevTest Lab.
     *
     * Syntax:
     * ```
     * az lab formula show --lab-name
     *                     --name
     *                     --resource-group
     *                     [--expand]
     *                     [--query-examples]
     *                     [--subscription]
     * ```
     *
     * @param {string} labName Name of the lab.
     * @param {string} name Name of the formula.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_formula_show(labName: string, name: string, resourceGroup: string): az_lab_formula_show_command_builder {
        return new az_lab_formula_show_command_builder("az lab formula show", labName, name, resourceGroup);
    }
}

/** List Azure Marketplace images allowed for a DevTest Lab. */
export class az_lab_gallery_image {
    /**
     * List gallery images in a given lab.
     *
     * Syntax:
     * ```
     * az lab gallery-image list --lab-name
     *                           --resource-group
     *                           [--expand]
     *                           [--filter]
     *                           [--orderby]
     *                           [--query-examples]
     *                           [--subscription]
     *                           [--top]
     * ```
     *
     * @param {string} labName The name of the lab.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_gallery_image_list(labName: string, resourceGroup: string): az_lab_gallery_image_list_command_builder {
        return new az_lab_gallery_image_list_command_builder("az lab gallery-image list", labName, resourceGroup);
    }
}

/** Manage secrets of an Azure DevTest Lab. */
export class az_lab_secret {
    /**
     * Delete secret.
     *
     * Syntax:
     * ```
     * az lab secret delete --lab-name
     *                      --name
     *                      --resource-group
     *                      [--subscription]
     * ```
     *
     * @param {string} labName The name of the lab.
     * @param {string} name The name of the secret.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_secret_delete(labName: string, name: string, resourceGroup: string): az_lab_secret_delete_command_builder {
        return new az_lab_secret_delete_command_builder("az lab secret delete", labName, name, resourceGroup);
    }

    /**
     * List secrets in a given user profile.
     *
     * Syntax:
     * ```
     * az lab secret list --lab-name
     *                    --resource-group
     *                    [--expand]
     *                    [--filter]
     *                    [--orderby]
     *                    [--query-examples]
     *                    [--subscription]
     *                    [--top]
     * ```
     *
     * @param {string} labName The name of the lab.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_secret_list(labName: string, resourceGroup: string): az_lab_secret_list_command_builder {
        return new az_lab_secret_list_command_builder("az lab secret list", labName, resourceGroup);
    }

    /**
     * Set a secret for a lab.
     *
     * Syntax:
     * ```
     * az lab secret set --lab-name
     *                   --name
     *                   --resource-group
     *                   --value
     *                   [--subscription]
     * ```
     *
     * @param {string} labName Name of the lab.
     * @param {string} name Name of the secret.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} value Value of the secret.
     */
    static az_lab_secret_set(labName: string, name: string, resourceGroup: string, value: string): az_lab_secret_set_command_builder {
        return new az_lab_secret_set_command_builder("az lab secret set", labName, name, resourceGroup, value);
    }

    /**
     * Get secret.
     *
     * Syntax:
     * ```
     * az lab secret show --lab-name
     *                    --name
     *                    --resource-group
     *                    [--expand]
     *                    [--query-examples]
     *                    [--subscription]
     * ```
     *
     * @param {string} labName The name of the lab.
     * @param {string} name The name of the secret.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_secret_show(labName: string, name: string, resourceGroup: string): az_lab_secret_show_command_builder {
        return new az_lab_secret_show_command_builder("az lab secret show", labName, name, resourceGroup);
    }
}

/** Manage VMs in an Azure DevTest Lab. */
export class az_lab_vm {
    /**
     * Apply artifacts to a virtual machine in Azure DevTest Lab.
     *
     * Syntax:
     * ```
     * az lab vm apply-artifacts --lab-name
     *                           --name
     *                           --resource-group
     *                           [--artifacts]
     *                           [--subscription]
     * ```
     *
     * @param {string} labName Name of the Lab.
     * @param {string} name Name of the virtual machine.
     * @param {string} resourceGroup Name of lab's resource group.
     */
    static az_lab_vm_apply_artifacts(labName: string, name: string, resourceGroup: string): az_lab_vm_apply_artifacts_command_builder {
        return new az_lab_vm_apply_artifacts_command_builder("az lab vm apply-artifacts", labName, name, resourceGroup);
    }

    /**
     * Claim a virtual machine from the Lab.
     *
     * Syntax:
     * ```
     * az lab vm claim [--ids]
     *                 [--lab-name]
     *                 [--name]
     *                 [--resource-group]
     *                 [--subscription]
     * ```
     */
    static az_lab_vm_claim(): az_lab_vm_claim_command_builder {
        return new az_lab_vm_claim_command_builder("az lab vm claim");
    }

    /**
     * Create a VM in a lab.
     *
     * Syntax:
     * ```
     * az lab vm create --lab-name
     *                  --name
     *                  --resource-group
     *                  [--admin-password]
     *                  [--admin-username]
     *                  [--allow-claim]
     *                  [--artifacts]
     *                  [--authentication-type]
     *                  [--disk-type]
     *                  [--expiration-date]
     *                  [--formula]
     *                  [--generate-ssh-keys]
     *                  [--image]
     *                  [--image-type]
     *                  [--ip-configuration]
     *                  [--notes]
     *                  [--saved-secret]
     *                  [--size]
     *                  [--ssh-key]
     *                  [--subnet]
     *                  [--subscription]
     *                  [--tags]
     *                  [--vnet-name]
     * ```
     *
     * @param {string} labName Name of the lab.
     * @param {string} name Name of the virtual machine.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_vm_create(labName: string, name: string, resourceGroup: string): az_lab_vm_create_command_builder {
        return new az_lab_vm_create_command_builder("az lab vm create", labName, name, resourceGroup);
    }

    /**
     * Delete virtual machine.
     *
     * Syntax:
     * ```
     * az lab vm delete --lab-name
     *                  --name
     *                  --resource-group
     *                  [--subscription]
     * ```
     *
     * @param {string} labName The name of the lab.
     * @param {string} name The name of the virtual machine.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_vm_delete(labName: string, name: string, resourceGroup: string): az_lab_vm_delete_command_builder {
        return new az_lab_vm_delete_command_builder("az lab vm delete", labName, name, resourceGroup);
    }

    /**
     * List the VMs in an Azure DevTest Lab.
     *
     * Syntax:
     * ```
     * az lab vm list --lab-name
     *                --resource-group
     *                [--all]
     *                [--claimable]
     *                [--environment]
     *                [--expand]
     *                [--filters]
     *                [--object-id]
     *                [--order-by]
     *                [--query-examples]
     *                [--subscription]
     *                [--top]
     * ```
     *
     * @param {string} labName Name of the lab.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_vm_list(labName: string, resourceGroup: string): az_lab_vm_list_command_builder {
        return new az_lab_vm_list_command_builder("az lab vm list", labName, resourceGroup);
    }

    /**
     * Get virtual machine.
     *
     * Syntax:
     * ```
     * az lab vm show --lab-name
     *                --name
     *                --resource-group
     *                [--expand]
     *                [--query-examples]
     *                [--subscription]
     * ```
     *
     * @param {string} labName The name of the lab.
     * @param {string} name The name of the virtual machine.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_vm_show(labName: string, name: string, resourceGroup: string): az_lab_vm_show_command_builder {
        return new az_lab_vm_show_command_builder("az lab vm show", labName, name, resourceGroup);
    }

    /**
     * Start a virtual machine.
     *
     * Syntax:
     * ```
     * az lab vm start --lab-name
     *                 --name
     *                 --resource-group
     *                 [--subscription]
     * ```
     *
     * @param {string} labName The name of the lab.
     * @param {string} name The name of the virtual machine.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_vm_start(labName: string, name: string, resourceGroup: string): az_lab_vm_start_command_builder {
        return new az_lab_vm_start_command_builder("az lab vm start", labName, name, resourceGroup);
    }

    /**
     * Stop a virtual machine This operation can take a while to complete.
     *
     * Syntax:
     * ```
     * az lab vm stop --lab-name
     *                --name
     *                --resource-group
     *                [--subscription]
     * ```
     *
     * @param {string} labName The name of the lab.
     * @param {string} name The name of the virtual machine.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_vm_stop(labName: string, name: string, resourceGroup: string): az_lab_vm_stop_command_builder {
        return new az_lab_vm_stop_command_builder("az lab vm stop", labName, name, resourceGroup);
    }
}

/** Manage virtual networks of an Azure DevTest Lab. */
export class az_lab_vnet {
    /**
     * Get virtual network.
     *
     * Syntax:
     * ```
     * az lab vnet get --lab-name
     *                 --name
     *                 --resource-group
     *                 [--expand]
     *                 [--subscription]
     * ```
     *
     * @param {string} labName The name of the lab.
     * @param {string} name The name of the virtual network.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_vnet_get(labName: string, name: string, resourceGroup: string): az_lab_vnet_get_command_builder {
        return new az_lab_vnet_get_command_builder("az lab vnet get", labName, name, resourceGroup);
    }

    /**
     * List virtual networks in a given lab.
     *
     * Syntax:
     * ```
     * az lab vnet list --lab-name
     *                  --resource-group
     *                  [--expand]
     *                  [--filter]
     *                  [--orderby]
     *                  [--query-examples]
     *                  [--subscription]
     *                  [--top]
     * ```
     *
     * @param {string} labName The name of the lab.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_vnet_list(labName: string, resourceGroup: string): az_lab_vnet_list_command_builder {
        return new az_lab_vnet_list_command_builder("az lab vnet list", labName, resourceGroup);
    }
}

/** Manage Azure DevTest Labs. */
export class az_lab {
    /**
     * Delete lab.
     *
     * Syntax:
     * ```
     * az lab delete --name
     *               --resource-group
     *               [--subscription]
     * ```
     *
     * @param {string} name The name of the lab.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_delete(name: string, resourceGroup: string): az_lab_delete_command_builder {
        return new az_lab_delete_command_builder("az lab delete", name, resourceGroup);
    }

    /**
     * Get lab.
     *
     * Syntax:
     * ```
     * az lab get --name
     *            --resource-group
     *            [--expand]
     *            [--subscription]
     * ```
     *
     * @param {string} name The name of the lab.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_lab_get(name: string, resourceGroup: string): az_lab_get_command_builder {
        return new az_lab_get_command_builder("az lab get", name, resourceGroup);
    }
}

/**
 * List azure resource manager templates in a given artifact source.
 *
 * Syntax:
 * ```
 * az lab arm-template list --artifact-source-name
 *                          --lab-name
 *                          --resource-group
 *                          [--expand]
 *                          [--filter]
 *                          [--orderby]
 *                          [--query-examples]
 *                          [--subscription]
 *                          [--top]
 * ```
 *
 * @param {string} artifactSourceName The name of the artifact source.
 * @param {string} labName The name of the lab.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_arm_template_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, artifactSourceName: string, labName: string, resourceGroup: string) {
        super(commandParent);
        this.artifactSourceName(artifactSourceName)
        this.labName(labName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the artifact source. */
    artifactSourceName(value: string): az_lab_arm_template_list_command_builder {
        this.setFlag("--artifact-source-name", value);
        return this;
    }

    /** The name of the lab. */
    labName(value: string): az_lab_arm_template_list_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_arm_template_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Specify the $expand query. Example: 'properties($select=displayName)'. */
    expand(value: string): az_lab_arm_template_list_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    filter(value: string): az_lab_arm_template_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    orderby(value: string): az_lab_arm_template_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_arm_template_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_arm_template_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    top(value: string): az_lab_arm_template_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
}

/**
 * Get the details of an ARM template in a lab.
 *
 * Syntax:
 * ```
 * az lab arm-template show --artifact-source-name
 *                          --lab-name
 *                          --name
 *                          --resource-group
 *                          [--export-parameters]
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} artifactSourceName Name of the artifact source.
 * @param {string} labName Name of the lab.
 * @param {string} name Name of the Azure Resource Manager template.
 * @param {string} resourceGroup Name of lab's resource group.
 */
class az_lab_arm_template_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, artifactSourceName: string, labName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.artifactSourceName(artifactSourceName)
        this.labName(labName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the artifact source. */
    artifactSourceName(value: string): az_lab_arm_template_show_command_builder {
        this.setFlag("--artifact-source-name", value);
        return this;
    }

    /** Name of the lab. */
    labName(value: string): az_lab_arm_template_show_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** Name of the Azure Resource Manager template. */
    name(value: string): az_lab_arm_template_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of lab's resource group. */
    resourceGroup(value: string): az_lab_arm_template_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Whether or not to export parameters template. */
    exportParameters(value: string): az_lab_arm_template_show_command_builder {
        this.setFlag("--export-parameters", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_arm_template_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_arm_template_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List artifact sources in a given lab.
 *
 * Syntax:
 * ```
 * az lab artifact-source list --lab-name
 *                             --resource-group
 *                             [--expand]
 *                             [--filter]
 *                             [--orderby]
 *                             [--query-examples]
 *                             [--subscription]
 *                             [--top]
 * ```
 *
 * @param {string} labName The name of the lab.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_artifact_source_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the lab. */
    labName(value: string): az_lab_artifact_source_list_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_artifact_source_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Specify the $expand query. Example: 'properties($select=displayName)'. */
    expand(value: string): az_lab_artifact_source_list_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    filter(value: string): az_lab_artifact_source_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    orderby(value: string): az_lab_artifact_source_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_artifact_source_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_artifact_source_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    top(value: string): az_lab_artifact_source_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
}

/**
 * Get artifact source.
 *
 * Syntax:
 * ```
 * az lab artifact-source show --lab-name
 *                             --name
 *                             --resource-group
 *                             [--expand]
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 *
 * @param {string} labName The name of the lab.
 * @param {string} name The name of the artifact source.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_artifact_source_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the lab. */
    labName(value: string): az_lab_artifact_source_show_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** The name of the artifact source. */
    name(value: string): az_lab_artifact_source_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_artifact_source_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Specify the $expand query. Example: 'properties($select=displayName)'. */
    expand(value: string): az_lab_artifact_source_show_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_artifact_source_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_artifact_source_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List artifacts in a given artifact source.
 *
 * Syntax:
 * ```
 * az lab artifact list --artifact-source-name
 *                      --lab-name
 *                      --resource-group
 *                      [--expand]
 *                      [--filter]
 *                      [--orderby]
 *                      [--query-examples]
 *                      [--subscription]
 *                      [--top]
 * ```
 *
 * @param {string} artifactSourceName The name of the artifact source.
 * @param {string} labName The name of the lab.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_artifact_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, artifactSourceName: string, labName: string, resourceGroup: string) {
        super(commandParent);
        this.artifactSourceName(artifactSourceName)
        this.labName(labName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the artifact source. */
    artifactSourceName(value: string): az_lab_artifact_list_command_builder {
        this.setFlag("--artifact-source-name", value);
        return this;
    }

    /** The name of the lab. */
    labName(value: string): az_lab_artifact_list_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_artifact_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Specify the $expand query. Example: 'properties($select=title)'. */
    expand(value: string): az_lab_artifact_list_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    filter(value: string): az_lab_artifact_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    orderby(value: string): az_lab_artifact_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_artifact_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_artifact_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    top(value: string): az_lab_artifact_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
}

/**
 * Create a custom image in a DevTest Lab.
 *
 * Syntax:
 * ```
 * az lab custom-image create --lab-name
 *                            --name
 *                            --os-state
 *                            --os-type
 *                            --resource-group
 *                            --source-vm-id
 *                            [--author]
 *                            [--description]
 *                            [--subscription]
 * ```
 *
 * @param {string} labName Name of the Lab.
 * @param {string} name Name of the image.
 * @param {string} osState The current state of the virtual machine.
 * @param {string} osType Type of the OS on which the custom image is based. Allowed values are: Windows, Linux.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} sourceVmId The resource ID of a virtual machine in the provided lab.
 */
class az_lab_custom_image_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, name: string, osState: string, osType: string, resourceGroup: string, sourceVmId: string) {
        super(commandParent);
        this.labName(labName)
        this.name(name)
        this.osState(osState)
        this.osType(osType)
        this.resourceGroup(resourceGroup)
        this.sourceVmId(sourceVmId)
    }

    /** Name of the Lab. */
    labName(value: string): az_lab_custom_image_create_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** Name of the image. */
    name(value: string): az_lab_custom_image_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The current state of the virtual machine. */
    osState(value: string): az_lab_custom_image_create_command_builder {
        this.setFlag("--os-state", value);
        return this;
    }

    /** Type of the OS on which the custom image is based. Allowed values are: Windows, Linux. */
    osType(value: string): az_lab_custom_image_create_command_builder {
        this.setFlag("--os-type", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_custom_image_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The resource ID of a virtual machine in the provided lab. */
    sourceVmId(value: string): az_lab_custom_image_create_command_builder {
        this.setFlag("--source-vm-id", value);
        return this;
    }

    /** The author of the custom image. */
    author(value: string): az_lab_custom_image_create_command_builder {
        this.setFlag("--author", value);
        return this;
    }

    /** A detailed description for the custom image. */
    description(value: string): az_lab_custom_image_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_custom_image_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete custom image.
 *
 * Syntax:
 * ```
 * az lab custom-image delete --lab-name
 *                            --name
 *                            --resource-group
 *                            [--subscription]
 * ```
 *
 * @param {string} labName The name of the lab.
 * @param {string} name The name of the custom image.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_custom_image_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the lab. */
    labName(value: string): az_lab_custom_image_delete_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** The name of the custom image. */
    name(value: string): az_lab_custom_image_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_custom_image_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_custom_image_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List custom images in a given lab.
 *
 * Syntax:
 * ```
 * az lab custom-image list --lab-name
 *                          --resource-group
 *                          [--expand]
 *                          [--filter]
 *                          [--orderby]
 *                          [--query-examples]
 *                          [--subscription]
 *                          [--top]
 * ```
 *
 * @param {string} labName The name of the lab.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_custom_image_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the lab. */
    labName(value: string): az_lab_custom_image_list_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_custom_image_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Specify the $expand query. Example: 'properties($select=vm)'. */
    expand(value: string): az_lab_custom_image_list_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    filter(value: string): az_lab_custom_image_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    orderby(value: string): az_lab_custom_image_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_custom_image_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_custom_image_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    top(value: string): az_lab_custom_image_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
}

/**
 * Get custom image.
 *
 * Syntax:
 * ```
 * az lab custom-image show --lab-name
 *                          --name
 *                          --resource-group
 *                          [--expand]
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} labName The name of the lab.
 * @param {string} name The name of the custom image.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_custom_image_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the lab. */
    labName(value: string): az_lab_custom_image_show_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** The name of the custom image. */
    name(value: string): az_lab_custom_image_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_custom_image_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Specify the $expand query. Example: 'properties($select=vm)'. */
    expand(value: string): az_lab_custom_image_show_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_custom_image_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_custom_image_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create an environment in a lab.
 *
 * Syntax:
 * ```
 * az lab environment create --arm-template
 *                           --lab-name
 *                           --name
 *                           --resource-group
 *                           [--artifact-source-name]
 *                           [--parameters]
 *                           [--subscription]
 *                           [--tags]
 * ```
 *
 * @param {string} armTemplate Name or ID of the ARM template in the lab.
 * @param {string} labName Name of the lab.
 * @param {string} name Name of the environment.
 * @param {string} resourceGroup Name of the lab's resource group.
 */
class az_lab_environment_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, armTemplate: string, labName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.armTemplate(armTemplate)
        this.labName(labName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name or ID of the ARM template in the lab. */
    armTemplate(value: string): az_lab_environment_create_command_builder {
        this.setFlag("--arm-template", value);
        return this;
    }

    /** Name of the lab. */
    labName(value: string): az_lab_environment_create_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** Name of the environment. */
    name(value: string): az_lab_environment_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the lab's resource group. */
    resourceGroup(value: string): az_lab_environment_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the artifact source in the lab. */
    artifactSourceName(value: string): az_lab_environment_create_command_builder {
        this.setFlag("--artifact-source-name", value);
        return this;
    }

    /** JSON encoded list of parameters. Use '@{file}' to load from a file. */
    parameters(value: string): az_lab_environment_create_command_builder {
        this.setFlag("--parameters", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_environment_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The tags for the resource. */
    tags(value: string): az_lab_environment_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

/**
 * Delete an environment from a lab.
 *
 * Syntax:
 * ```
 * az lab environment delete --lab-name
 *                           --name
 *                           --resource-group
 *                           [--subscription]
 * ```
 *
 * @param {string} labName The name of the lab.
 * @param {string} name The name of the environment.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_environment_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the lab. */
    labName(value: string): az_lab_environment_delete_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** The name of the environment. */
    name(value: string): az_lab_environment_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_environment_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_environment_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List environments in a lab.
 *
 * Syntax:
 * ```
 * az lab environment list --lab-name
 *                         --resource-group
 *                         [--expand]
 *                         [--filter]
 *                         [--orderby]
 *                         [--query-examples]
 *                         [--subscription]
 *                         [--top]
 * ```
 *
 * @param {string} labName The name of the lab.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_environment_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the lab. */
    labName(value: string): az_lab_environment_list_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_environment_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Specify the $expand query. Example: 'properties($select=deploymentProperties)'. */
    expand(value: string): az_lab_environment_list_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    filter(value: string): az_lab_environment_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    orderby(value: string): az_lab_environment_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_environment_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_environment_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    top(value: string): az_lab_environment_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
}

/**
 * Get the details for an environment of a lab.
 *
 * Syntax:
 * ```
 * az lab environment show --lab-name
 *                         --name
 *                         --resource-group
 *                         [--expand]
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 *
 * @param {string} labName The name of the lab.
 * @param {string} name The name of the environment.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_environment_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the lab. */
    labName(value: string): az_lab_environment_show_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** The name of the environment. */
    name(value: string): az_lab_environment_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_environment_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Specify the $expand query. Example: 'properties($select=deploymentProperties)'. */
    expand(value: string): az_lab_environment_show_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_environment_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_environment_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete formula.
 *
 * Syntax:
 * ```
 * az lab formula delete --lab-name
 *                       --name
 *                       --resource-group
 *                       [--subscription]
 * ```
 *
 * @param {string} labName The name of the lab.
 * @param {string} name The name of the formula.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_formula_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the lab. */
    labName(value: string): az_lab_formula_delete_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** The name of the formula. */
    name(value: string): az_lab_formula_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_formula_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_formula_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Export artifacts from a formula.
 *
 * Syntax:
 * ```
 * az lab formula export-artifacts --lab-name
 *                                 --name
 *                                 --resource-group
 *                                 [--subscription]
 * ```
 *
 * @param {string} labName Name of the lab.
 * @param {string} name Name of the formula.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_formula_export_artifacts_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the lab. */
    labName(value: string): az_lab_formula_export_artifacts_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** Name of the formula. */
    name(value: string): az_lab_formula_export_artifacts_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_formula_export_artifacts_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_formula_export_artifacts_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List formulas in a given lab.
 *
 * Syntax:
 * ```
 * az lab formula list --lab-name
 *                     --resource-group
 *                     [--expand]
 *                     [--filter]
 *                     [--orderby]
 *                     [--query-examples]
 *                     [--subscription]
 *                     [--top]
 * ```
 *
 * @param {string} labName The name of the lab.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_formula_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the lab. */
    labName(value: string): az_lab_formula_list_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_formula_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Specify the $expand query. Example: 'properties($select=description)'. */
    expand(value: string): az_lab_formula_list_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    filter(value: string): az_lab_formula_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    orderby(value: string): az_lab_formula_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_formula_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_formula_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    top(value: string): az_lab_formula_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
}

/**
 * Show formulae from an Azure DevTest Lab.
 *
 * Syntax:
 * ```
 * az lab formula show --lab-name
 *                     --name
 *                     --resource-group
 *                     [--expand]
 *                     [--query-examples]
 *                     [--subscription]
 * ```
 *
 * @param {string} labName Name of the lab.
 * @param {string} name Name of the formula.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_formula_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the lab. */
    labName(value: string): az_lab_formula_show_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** Name of the formula. */
    name(value: string): az_lab_formula_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_formula_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Specify the $expand query. Example: 'properties($select=description)'. */
    expand(value: string): az_lab_formula_show_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_formula_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_formula_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List gallery images in a given lab.
 *
 * Syntax:
 * ```
 * az lab gallery-image list --lab-name
 *                           --resource-group
 *                           [--expand]
 *                           [--filter]
 *                           [--orderby]
 *                           [--query-examples]
 *                           [--subscription]
 *                           [--top]
 * ```
 *
 * @param {string} labName The name of the lab.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_gallery_image_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the lab. */
    labName(value: string): az_lab_gallery_image_list_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_gallery_image_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Specify the $expand query. Example: 'properties($select=author)'. */
    expand(value: string): az_lab_gallery_image_list_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    filter(value: string): az_lab_gallery_image_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    orderby(value: string): az_lab_gallery_image_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_gallery_image_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_gallery_image_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    top(value: string): az_lab_gallery_image_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
}

/**
 * Delete secret.
 *
 * Syntax:
 * ```
 * az lab secret delete --lab-name
 *                      --name
 *                      --resource-group
 *                      [--subscription]
 * ```
 *
 * @param {string} labName The name of the lab.
 * @param {string} name The name of the secret.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_secret_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the lab. */
    labName(value: string): az_lab_secret_delete_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** The name of the secret. */
    name(value: string): az_lab_secret_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_secret_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_secret_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List secrets in a given user profile.
 *
 * Syntax:
 * ```
 * az lab secret list --lab-name
 *                    --resource-group
 *                    [--expand]
 *                    [--filter]
 *                    [--orderby]
 *                    [--query-examples]
 *                    [--subscription]
 *                    [--top]
 * ```
 *
 * @param {string} labName The name of the lab.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_secret_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the lab. */
    labName(value: string): az_lab_secret_list_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_secret_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Specify the $expand query. Example: 'properties($select=value)'. */
    expand(value: string): az_lab_secret_list_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    filter(value: string): az_lab_secret_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    orderby(value: string): az_lab_secret_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_secret_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_secret_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    top(value: string): az_lab_secret_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
}

/**
 * Set a secret for a lab.
 *
 * Syntax:
 * ```
 * az lab secret set --lab-name
 *                   --name
 *                   --resource-group
 *                   --value
 *                   [--subscription]
 * ```
 *
 * @param {string} labName Name of the lab.
 * @param {string} name Name of the secret.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} value Value of the secret.
 */
class az_lab_secret_set_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, name: string, resourceGroup: string, value: string) {
        super(commandParent);
        this.labName(labName)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.value(value)
    }

    /** Name of the lab. */
    labName(value: string): az_lab_secret_set_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** Name of the secret. */
    name(value: string): az_lab_secret_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_secret_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Value of the secret. */
    value(value: string): az_lab_secret_set_command_builder {
        this.setFlag("--value", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_secret_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get secret.
 *
 * Syntax:
 * ```
 * az lab secret show --lab-name
 *                    --name
 *                    --resource-group
 *                    [--expand]
 *                    [--query-examples]
 *                    [--subscription]
 * ```
 *
 * @param {string} labName The name of the lab.
 * @param {string} name The name of the secret.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_secret_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the lab. */
    labName(value: string): az_lab_secret_show_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** The name of the secret. */
    name(value: string): az_lab_secret_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_secret_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Specify the $expand query. Example: 'properties($select=value)'. */
    expand(value: string): az_lab_secret_show_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_secret_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_secret_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Apply artifacts to a virtual machine in Azure DevTest Lab.
 *
 * Syntax:
 * ```
 * az lab vm apply-artifacts --lab-name
 *                           --name
 *                           --resource-group
 *                           [--artifacts]
 *                           [--subscription]
 * ```
 *
 * @param {string} labName Name of the Lab.
 * @param {string} name Name of the virtual machine.
 * @param {string} resourceGroup Name of lab's resource group.
 */
class az_lab_vm_apply_artifacts_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the Lab. */
    labName(value: string): az_lab_vm_apply_artifacts_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** Name of the virtual machine. */
    name(value: string): az_lab_vm_apply_artifacts_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of lab's resource group. */
    resourceGroup(value: string): az_lab_vm_apply_artifacts_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** JSON encoded array of artifacts to be applied. Use '@{file}' to load from a file. */
    artifacts(value: string): az_lab_vm_apply_artifacts_command_builder {
        this.setFlag("--artifacts", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_vm_apply_artifacts_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Claim a virtual machine from the Lab.
 *
 * Syntax:
 * ```
 * az lab vm claim [--ids]
 *                 [--lab-name]
 *                 [--name]
 *                 [--resource-group]
 *                 [--subscription]
 * ```
 */
class az_lab_vm_claim_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_lab_vm_claim_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the lab. */
    labName(value: string): az_lab_vm_claim_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** Name of the virtual machine to claim. */
    name(value: string): az_lab_vm_claim_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of lab's resource group. */
    resourceGroup(value: string): az_lab_vm_claim_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_vm_claim_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create a VM in a lab.
 *
 * Syntax:
 * ```
 * az lab vm create --lab-name
 *                  --name
 *                  --resource-group
 *                  [--admin-password]
 *                  [--admin-username]
 *                  [--allow-claim]
 *                  [--artifacts]
 *                  [--authentication-type]
 *                  [--disk-type]
 *                  [--expiration-date]
 *                  [--formula]
 *                  [--generate-ssh-keys]
 *                  [--image]
 *                  [--image-type]
 *                  [--ip-configuration]
 *                  [--notes]
 *                  [--saved-secret]
 *                  [--size]
 *                  [--ssh-key]
 *                  [--subnet]
 *                  [--subscription]
 *                  [--tags]
 *                  [--vnet-name]
 * ```
 *
 * @param {string} labName Name of the lab.
 * @param {string} name Name of the virtual machine.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_vm_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the lab. */
    labName(value: string): az_lab_vm_create_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** Name of the virtual machine. */
    name(value: string): az_lab_vm_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_vm_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Password for the VM admin. */
    adminPassword(value: string): az_lab_vm_create_command_builder {
        this.setFlag("--admin-password", value);
        return this;
    }

    /** Username for the VM admin. */
    adminUsername(value: string): az_lab_vm_create_command_builder {
        this.setFlag("--admin-username", value);
        return this;
    }

    /** Flag indicating if the VM should be created as claimable. */
    allowClaim(value: string): az_lab_vm_create_command_builder {
        this.setFlag("--allow-claim", value);
        return this;
    }

    /** JSON encoded array of artifacts to be applied. Use '@{file}' to load from a file. */
    artifacts(value: string): az_lab_vm_create_command_builder {
        this.setFlag("--artifacts", value);
        return this;
    }

    /** Type of authentication allowed for the VM. Allowed values are: password, ssh. */
    authenticationType(value: string): az_lab_vm_create_command_builder {
        this.setFlag("--authentication-type", value);
        return this;
    }

    /** Storage type to use for virtual machine. */
    diskType(value: string): az_lab_vm_create_command_builder {
        this.setFlag("--disk-type", value);
        return this;
    }

    /** The expiration date in UTC(yyyy-MM-ddTHH:mm:ss) for the VM. */
    expirationDate(value: string): az_lab_vm_create_command_builder {
        this.setFlag("--expiration-date", value);
        return this;
    }

    /** Name of the formula. Use `az lab formula list` for available formulas. */
    formula(value: string): az_lab_vm_create_command_builder {
        this.setFlag("--formula", value);
        return this;
    }

    /** Generate SSH public and private key files if missing. */
    generateSshKeys(value: string): az_lab_vm_create_command_builder {
        this.setFlag("--generate-ssh-keys", value);
        return this;
    }

    /** The name of the operating system image (gallery image name or custom image name/ID). */
    image(value: string): az_lab_vm_create_command_builder {
        this.setFlag("--image", value);
        return this;
    }

    /** Type of the image. Allowed values are: gallery, custom. */
    imageType(value: string): az_lab_vm_create_command_builder {
        this.setFlag("--image-type", value);
        return this;
    }

    /** Type of IP configuration to use for the VM. Allowed values are: shared, public, private. */
    ipConfiguration(value: string): az_lab_vm_create_command_builder {
        this.setFlag("--ip-configuration", value);
        return this;
    }

    /** Notes for the virtual machine. */
    notes(value: string): az_lab_vm_create_command_builder {
        this.setFlag("--notes", value);
        return this;
    }

    /** Name of the saved secret to be used for authentication. */
    savedSecret(value: string): az_lab_vm_create_command_builder {
        this.setFlag("--saved-secret", value);
        return this;
    }

    /** The size of the VM to be created. See <a href="https://azure.microsoft.com/pricing/details/virtual-machines/">https://azure.microsoft.com/pricing/details/virtual-machines/</a> for size info. */
    size(value: string): az_lab_vm_create_command_builder {
        this.setFlag("--size", value);
        return this;
    }

    /** The SSH public key or public key file path. Use `--generate-ssh-keys` to generate SSH keys. */
    sshKey(value: string): az_lab_vm_create_command_builder {
        this.setFlag("--ssh-key", value);
        return this;
    }

    /** Name of the subnet to add the VM to. */
    subnet(value: string): az_lab_vm_create_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_vm_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags in `key[=value]` format. */
    tags(value: string): az_lab_vm_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Name of the virtual network to add the VM to. */
    vnetName(value: string): az_lab_vm_create_command_builder {
        this.setFlag("--vnet-name", value);
        return this;
    }
}

/**
 * Delete virtual machine.
 *
 * Syntax:
 * ```
 * az lab vm delete --lab-name
 *                  --name
 *                  --resource-group
 *                  [--subscription]
 * ```
 *
 * @param {string} labName The name of the lab.
 * @param {string} name The name of the virtual machine.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_vm_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the lab. */
    labName(value: string): az_lab_vm_delete_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** The name of the virtual machine. */
    name(value: string): az_lab_vm_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_vm_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_vm_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the VMs in an Azure DevTest Lab.
 *
 * Syntax:
 * ```
 * az lab vm list --lab-name
 *                --resource-group
 *                [--all]
 *                [--claimable]
 *                [--environment]
 *                [--expand]
 *                [--filters]
 *                [--object-id]
 *                [--order-by]
 *                [--query-examples]
 *                [--subscription]
 *                [--top]
 * ```
 *
 * @param {string} labName Name of the lab.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_vm_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the lab. */
    labName(value: string): az_lab_vm_list_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_vm_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** List all virtual machines in the lab. Cannot be used with `--filters`. */
    all(value: string): az_lab_vm_list_command_builder {
        this.setFlag("--all", value);
        return this;
    }

    /** List only claimable virtual machines in the lab. Cannot be used with `--filters`. */
    claimable(value: string): az_lab_vm_list_command_builder {
        this.setFlag("--claimable", value);
        return this;
    }

    /** Name or ID of the environment to list virtual machines in. Cannot be used with `--filters`. */
    environment(value: string): az_lab_vm_list_command_builder {
        this.setFlag("--environment", value);
        return this;
    }

    /** The expand query. */
    expand(value: string): az_lab_vm_list_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** The filter to apply. */
    filters(value: string): az_lab_vm_list_command_builder {
        this.setFlag("--filters", value);
        return this;
    }

    /** Object ID of the owner to list VMs for. */
    objectId(value: string): az_lab_vm_list_command_builder {
        this.setFlag("--object-id", value);
        return this;
    }

    /** The ordering expression for the results using OData notation. */
    orderBy(value: string): az_lab_vm_list_command_builder {
        this.setFlag("--order-by", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_vm_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_vm_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The maximum number of resources to return. */
    top(value: string): az_lab_vm_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
}

/**
 * Get virtual machine.
 *
 * Syntax:
 * ```
 * az lab vm show --lab-name
 *                --name
 *                --resource-group
 *                [--expand]
 *                [--query-examples]
 *                [--subscription]
 * ```
 *
 * @param {string} labName The name of the lab.
 * @param {string} name The name of the virtual machine.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_vm_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the lab. */
    labName(value: string): az_lab_vm_show_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** The name of the virtual machine. */
    name(value: string): az_lab_vm_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_vm_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Specify the $expand query. Example: 'properties($expand=artifacts,computeVm,networkInterface,applicableSchedule)'. */
    expand(value: string): az_lab_vm_show_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_vm_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_vm_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Start a virtual machine.
 *
 * Syntax:
 * ```
 * az lab vm start --lab-name
 *                 --name
 *                 --resource-group
 *                 [--subscription]
 * ```
 *
 * @param {string} labName The name of the lab.
 * @param {string} name The name of the virtual machine.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_vm_start_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the lab. */
    labName(value: string): az_lab_vm_start_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** The name of the virtual machine. */
    name(value: string): az_lab_vm_start_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_vm_start_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_vm_start_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Stop a virtual machine This operation can take a while to complete.
 *
 * Syntax:
 * ```
 * az lab vm stop --lab-name
 *                --name
 *                --resource-group
 *                [--subscription]
 * ```
 *
 * @param {string} labName The name of the lab.
 * @param {string} name The name of the virtual machine.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_vm_stop_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the lab. */
    labName(value: string): az_lab_vm_stop_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** The name of the virtual machine. */
    name(value: string): az_lab_vm_stop_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_vm_stop_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_vm_stop_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get virtual network.
 *
 * Syntax:
 * ```
 * az lab vnet get --lab-name
 *                 --name
 *                 --resource-group
 *                 [--expand]
 *                 [--subscription]
 * ```
 *
 * @param {string} labName The name of the lab.
 * @param {string} name The name of the virtual network.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_vnet_get_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the lab. */
    labName(value: string): az_lab_vnet_get_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** The name of the virtual network. */
    name(value: string): az_lab_vnet_get_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_vnet_get_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Specify the $expand query. Example: 'properties($expand=externalSubnets)'. */
    expand(value: string): az_lab_vnet_get_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_vnet_get_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List virtual networks in a given lab.
 *
 * Syntax:
 * ```
 * az lab vnet list --lab-name
 *                  --resource-group
 *                  [--expand]
 *                  [--filter]
 *                  [--orderby]
 *                  [--query-examples]
 *                  [--subscription]
 *                  [--top]
 * ```
 *
 * @param {string} labName The name of the lab.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_vnet_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, labName: string, resourceGroup: string) {
        super(commandParent);
        this.labName(labName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the lab. */
    labName(value: string): az_lab_vnet_list_command_builder {
        this.setFlag("--lab-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_vnet_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Specify the $expand query. Example: 'properties($expand=externalSubnets)'. */
    expand(value: string): az_lab_vnet_list_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    filter(value: string): az_lab_vnet_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    orderby(value: string): az_lab_vnet_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_vnet_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_vnet_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    top(value: string): az_lab_vnet_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
}

/**
 * Delete lab.
 *
 * Syntax:
 * ```
 * az lab delete --name
 *               --resource-group
 *               [--subscription]
 * ```
 *
 * @param {string} name The name of the lab.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the lab. */
    name(value: string): az_lab_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get lab.
 *
 * Syntax:
 * ```
 * az lab get --name
 *            --resource-group
 *            [--expand]
 *            [--subscription]
 * ```
 *
 * @param {string} name The name of the lab.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_lab_get_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the lab. */
    name(value: string): az_lab_get_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_get_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Specify the $expand query. Example: 'properties($select=defaultStorageAccount)'. */
    expand(value: string): az_lab_get_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_get_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
