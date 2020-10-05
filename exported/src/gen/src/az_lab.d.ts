import { CommandBuilder } from '../base';
import { az_lab_arm_template_list_command_result } from './models/az_lab_arm_template_list_command_result';
import { az_lab_arm_template_show_command_result } from './models/az_lab_arm_template_show_command_result';
import { az_lab_artifact_source_list_command_result } from './models/az_lab_artifact_source_list_command_result';
import { az_lab_artifact_source_show_command_result } from './models/az_lab_artifact_source_show_command_result';
import { az_lab_artifact_list_command_result } from './models/az_lab_artifact_list_command_result';
import { az_lab_custom_image_create_command_result } from './models/az_lab_custom_image_create_command_result';
import { az_lab_custom_image_delete_command_result } from './models/az_lab_custom_image_delete_command_result';
import { az_lab_custom_image_list_command_result } from './models/az_lab_custom_image_list_command_result';
import { az_lab_custom_image_show_command_result } from './models/az_lab_custom_image_show_command_result';
import { az_lab_environment_create_command_result } from './models/az_lab_environment_create_command_result';
import { az_lab_environment_delete_command_result } from './models/az_lab_environment_delete_command_result';
import { az_lab_environment_list_command_result } from './models/az_lab_environment_list_command_result';
import { az_lab_environment_show_command_result } from './models/az_lab_environment_show_command_result';
import { az_lab_formula_delete_command_result } from './models/az_lab_formula_delete_command_result';
import { az_lab_formula_export_artifacts_command_result } from './models/az_lab_formula_export_artifacts_command_result';
import { az_lab_formula_list_command_result } from './models/az_lab_formula_list_command_result';
import { az_lab_formula_show_command_result } from './models/az_lab_formula_show_command_result';
import { az_lab_gallery_image_list_command_result } from './models/az_lab_gallery_image_list_command_result';
import { az_lab_secret_delete_command_result } from './models/az_lab_secret_delete_command_result';
import { az_lab_secret_list_command_result } from './models/az_lab_secret_list_command_result';
import { az_lab_secret_set_command_result } from './models/az_lab_secret_set_command_result';
import { az_lab_secret_show_command_result } from './models/az_lab_secret_show_command_result';
import { az_lab_vm_apply_artifacts_command_result } from './models/az_lab_vm_apply_artifacts_command_result';
import { az_lab_vm_claim_command_result } from './models/az_lab_vm_claim_command_result';
import { az_lab_vm_create_command_result } from './models/az_lab_vm_create_command_result';
import { az_lab_vm_delete_command_result } from './models/az_lab_vm_delete_command_result';
import { az_lab_vm_list_command_result } from './models/az_lab_vm_list_command_result';
import { az_lab_vm_show_command_result } from './models/az_lab_vm_show_command_result';
import { az_lab_vm_start_command_result } from './models/az_lab_vm_start_command_result';
import { az_lab_vm_stop_command_result } from './models/az_lab_vm_stop_command_result';
import { az_lab_vnet_get_command_result } from './models/az_lab_vnet_get_command_result';
import { az_lab_vnet_list_command_result } from './models/az_lab_vnet_list_command_result';
import { az_lab_delete_command_result } from './models/az_lab_delete_command_result';
import { az_lab_get_command_result } from './models/az_lab_get_command_result';
/** Manage Azure Resource Manager (ARM) templates in an Azure DevTest Lab. */
export declare class az_lab_arm_template {
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
    static list(artifactSourceName: string, labName: string, resourceGroup: string): az_lab_arm_template_list_command_builder;
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
    static show(artifactSourceName: string, labName: string, name: string, resourceGroup: string): az_lab_arm_template_show_command_builder;
}
/** Manage DevTest Lab artifact sources. */
export declare class az_lab_artifact_source {
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
    static list(labName: string, resourceGroup: string): az_lab_artifact_source_list_command_builder;
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
    static show(labName: string, name: string, resourceGroup: string): az_lab_artifact_source_show_command_builder;
}
/** Manage DevTest Labs artifacts. */
export declare class az_lab_artifact {
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
    static list(artifactSourceName: string, labName: string, resourceGroup: string): az_lab_artifact_list_command_builder;
}
/** Manage custom images of a DevTest Lab. */
export declare class az_lab_custom_image {
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
    static create(labName: string, name: string, osState: string, osType: string, resourceGroup: string, sourceVmId: string): az_lab_custom_image_create_command_builder;
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
    static delete(labName: string, name: string, resourceGroup: string): az_lab_custom_image_delete_command_builder;
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
    static list(labName: string, resourceGroup: string): az_lab_custom_image_list_command_builder;
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
    static show(labName: string, name: string, resourceGroup: string): az_lab_custom_image_show_command_builder;
}
/** Manage environments for an Azure DevTest Lab. */
export declare class az_lab_environment {
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
    static create(armTemplate: string, labName: string, name: string, resourceGroup: string): az_lab_environment_create_command_builder;
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
    static delete(labName: string, name: string, resourceGroup: string): az_lab_environment_delete_command_builder;
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
    static list(labName: string, resourceGroup: string): az_lab_environment_list_command_builder;
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
    static show(labName: string, name: string, resourceGroup: string): az_lab_environment_show_command_builder;
}
/** Manage formulas for an Azure DevTest Lab. */
export declare class az_lab_formula {
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
    static delete(labName: string, name: string, resourceGroup: string): az_lab_formula_delete_command_builder;
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
    static export_artifacts(labName: string, name: string, resourceGroup: string): az_lab_formula_export_artifacts_command_builder;
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
    static list(labName: string, resourceGroup: string): az_lab_formula_list_command_builder;
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
    static show(labName: string, name: string, resourceGroup: string): az_lab_formula_show_command_builder;
}
/** List Azure Marketplace images allowed for a DevTest Lab. */
export declare class az_lab_gallery_image {
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
    static list(labName: string, resourceGroup: string): az_lab_gallery_image_list_command_builder;
}
/** Manage secrets of an Azure DevTest Lab. */
export declare class az_lab_secret {
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
    static delete(labName: string, name: string, resourceGroup: string): az_lab_secret_delete_command_builder;
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
    static list(labName: string, resourceGroup: string): az_lab_secret_list_command_builder;
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
    static set(labName: string, name: string, resourceGroup: string, value: string): az_lab_secret_set_command_builder;
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
    static show(labName: string, name: string, resourceGroup: string): az_lab_secret_show_command_builder;
}
/** Manage VMs in an Azure DevTest Lab. */
export declare class az_lab_vm {
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
    static apply_artifacts(labName: string, name: string, resourceGroup: string): az_lab_vm_apply_artifacts_command_builder;
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
    static claim(): az_lab_vm_claim_command_builder;
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
    static create(labName: string, name: string, resourceGroup: string): az_lab_vm_create_command_builder;
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
    static delete(labName: string, name: string, resourceGroup: string): az_lab_vm_delete_command_builder;
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
    static list(labName: string, resourceGroup: string): az_lab_vm_list_command_builder;
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
    static show(labName: string, name: string, resourceGroup: string): az_lab_vm_show_command_builder;
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
    static start(labName: string, name: string, resourceGroup: string): az_lab_vm_start_command_builder;
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
    static stop(labName: string, name: string, resourceGroup: string): az_lab_vm_stop_command_builder;
}
/** Manage virtual networks of an Azure DevTest Lab. */
export declare class az_lab_vnet {
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
    static get(labName: string, name: string, resourceGroup: string): az_lab_vnet_get_command_builder;
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
    static list(labName: string, resourceGroup: string): az_lab_vnet_list_command_builder;
}
/** Manage Azure DevTest Labs. */
export declare class az_lab {
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
    static delete(name: string, resourceGroup: string): az_lab_delete_command_builder;
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
    static get(name: string, resourceGroup: string): az_lab_get_command_builder;
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
declare class az_lab_arm_template_list_command_builder extends CommandBuilder<az_lab_arm_template_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, artifactSourceName: string, labName: string, resourceGroup: string);
    /** The name of the artifact source. */
    artifactSourceName(value: string): az_lab_arm_template_list_command_builder;
    /** The name of the lab. */
    labName(value: string): az_lab_arm_template_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_arm_template_list_command_builder;
    /** Specify the $expand query. Example: 'properties($select=displayName)'. */
    expand(value: string): az_lab_arm_template_list_command_builder;
    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    filter(value: string): az_lab_arm_template_list_command_builder;
    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    orderby(value: string): az_lab_arm_template_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_arm_template_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_arm_template_list_command_builder;
    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    top(value: string): az_lab_arm_template_list_command_builder;
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
declare class az_lab_arm_template_show_command_builder extends CommandBuilder<az_lab_arm_template_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, artifactSourceName: string, labName: string, name: string, resourceGroup: string);
    /** Name of the artifact source. */
    artifactSourceName(value: string): az_lab_arm_template_show_command_builder;
    /** Name of the lab. */
    labName(value: string): az_lab_arm_template_show_command_builder;
    /** Name of the Azure Resource Manager template. */
    name(value: string): az_lab_arm_template_show_command_builder;
    /** Name of lab's resource group. */
    resourceGroup(value: string): az_lab_arm_template_show_command_builder;
    /** Whether or not to export parameters template. */
    exportParameters(value: string): az_lab_arm_template_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_arm_template_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_arm_template_show_command_builder;
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
declare class az_lab_artifact_source_list_command_builder extends CommandBuilder<az_lab_artifact_source_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, resourceGroup: string);
    /** The name of the lab. */
    labName(value: string): az_lab_artifact_source_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_artifact_source_list_command_builder;
    /** Specify the $expand query. Example: 'properties($select=displayName)'. */
    expand(value: string): az_lab_artifact_source_list_command_builder;
    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    filter(value: string): az_lab_artifact_source_list_command_builder;
    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    orderby(value: string): az_lab_artifact_source_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_artifact_source_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_artifact_source_list_command_builder;
    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    top(value: string): az_lab_artifact_source_list_command_builder;
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
declare class az_lab_artifact_source_show_command_builder extends CommandBuilder<az_lab_artifact_source_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, name: string, resourceGroup: string);
    /** The name of the lab. */
    labName(value: string): az_lab_artifact_source_show_command_builder;
    /** The name of the artifact source. */
    name(value: string): az_lab_artifact_source_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_artifact_source_show_command_builder;
    /** Specify the $expand query. Example: 'properties($select=displayName)'. */
    expand(value: string): az_lab_artifact_source_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_artifact_source_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_artifact_source_show_command_builder;
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
declare class az_lab_artifact_list_command_builder extends CommandBuilder<az_lab_artifact_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, artifactSourceName: string, labName: string, resourceGroup: string);
    /** The name of the artifact source. */
    artifactSourceName(value: string): az_lab_artifact_list_command_builder;
    /** The name of the lab. */
    labName(value: string): az_lab_artifact_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_artifact_list_command_builder;
    /** Specify the $expand query. Example: 'properties($select=title)'. */
    expand(value: string): az_lab_artifact_list_command_builder;
    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    filter(value: string): az_lab_artifact_list_command_builder;
    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    orderby(value: string): az_lab_artifact_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_artifact_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_artifact_list_command_builder;
    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    top(value: string): az_lab_artifact_list_command_builder;
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
declare class az_lab_custom_image_create_command_builder extends CommandBuilder<az_lab_custom_image_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, name: string, osState: string, osType: string, resourceGroup: string, sourceVmId: string);
    /** Name of the Lab. */
    labName(value: string): az_lab_custom_image_create_command_builder;
    /** Name of the image. */
    name(value: string): az_lab_custom_image_create_command_builder;
    /** The current state of the virtual machine. */
    osState(value: string): az_lab_custom_image_create_command_builder;
    /** Type of the OS on which the custom image is based. Allowed values are: Windows, Linux. */
    osType(value: string): az_lab_custom_image_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_custom_image_create_command_builder;
    /** The resource ID of a virtual machine in the provided lab. */
    sourceVmId(value: string): az_lab_custom_image_create_command_builder;
    /** The author of the custom image. */
    author(value: string): az_lab_custom_image_create_command_builder;
    /** A detailed description for the custom image. */
    description(value: string): az_lab_custom_image_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_custom_image_create_command_builder;
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
declare class az_lab_custom_image_delete_command_builder extends CommandBuilder<az_lab_custom_image_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, name: string, resourceGroup: string);
    /** The name of the lab. */
    labName(value: string): az_lab_custom_image_delete_command_builder;
    /** The name of the custom image. */
    name(value: string): az_lab_custom_image_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_custom_image_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_custom_image_delete_command_builder;
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
declare class az_lab_custom_image_list_command_builder extends CommandBuilder<az_lab_custom_image_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, resourceGroup: string);
    /** The name of the lab. */
    labName(value: string): az_lab_custom_image_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_custom_image_list_command_builder;
    /** Specify the $expand query. Example: 'properties($select=vm)'. */
    expand(value: string): az_lab_custom_image_list_command_builder;
    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    filter(value: string): az_lab_custom_image_list_command_builder;
    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    orderby(value: string): az_lab_custom_image_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_custom_image_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_custom_image_list_command_builder;
    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    top(value: string): az_lab_custom_image_list_command_builder;
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
declare class az_lab_custom_image_show_command_builder extends CommandBuilder<az_lab_custom_image_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, name: string, resourceGroup: string);
    /** The name of the lab. */
    labName(value: string): az_lab_custom_image_show_command_builder;
    /** The name of the custom image. */
    name(value: string): az_lab_custom_image_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_custom_image_show_command_builder;
    /** Specify the $expand query. Example: 'properties($select=vm)'. */
    expand(value: string): az_lab_custom_image_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_custom_image_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_custom_image_show_command_builder;
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
declare class az_lab_environment_create_command_builder extends CommandBuilder<az_lab_environment_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, armTemplate: string, labName: string, name: string, resourceGroup: string);
    /** Name or ID of the ARM template in the lab. */
    armTemplate(value: string): az_lab_environment_create_command_builder;
    /** Name of the lab. */
    labName(value: string): az_lab_environment_create_command_builder;
    /** Name of the environment. */
    name(value: string): az_lab_environment_create_command_builder;
    /** Name of the lab's resource group. */
    resourceGroup(value: string): az_lab_environment_create_command_builder;
    /** Name of the artifact source in the lab. */
    artifactSourceName(value: string): az_lab_environment_create_command_builder;
    /** JSON encoded list of parameters. Use '@{file}' to load from a file. */
    parameters(value: string): az_lab_environment_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_environment_create_command_builder;
    /** The tags for the resource. */
    tags(value: string): az_lab_environment_create_command_builder;
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
declare class az_lab_environment_delete_command_builder extends CommandBuilder<az_lab_environment_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, name: string, resourceGroup: string);
    /** The name of the lab. */
    labName(value: string): az_lab_environment_delete_command_builder;
    /** The name of the environment. */
    name(value: string): az_lab_environment_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_environment_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_environment_delete_command_builder;
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
declare class az_lab_environment_list_command_builder extends CommandBuilder<az_lab_environment_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, resourceGroup: string);
    /** The name of the lab. */
    labName(value: string): az_lab_environment_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_environment_list_command_builder;
    /** Specify the $expand query. Example: 'properties($select=deploymentProperties)'. */
    expand(value: string): az_lab_environment_list_command_builder;
    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    filter(value: string): az_lab_environment_list_command_builder;
    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    orderby(value: string): az_lab_environment_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_environment_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_environment_list_command_builder;
    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    top(value: string): az_lab_environment_list_command_builder;
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
declare class az_lab_environment_show_command_builder extends CommandBuilder<az_lab_environment_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, name: string, resourceGroup: string);
    /** The name of the lab. */
    labName(value: string): az_lab_environment_show_command_builder;
    /** The name of the environment. */
    name(value: string): az_lab_environment_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_environment_show_command_builder;
    /** Specify the $expand query. Example: 'properties($select=deploymentProperties)'. */
    expand(value: string): az_lab_environment_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_environment_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_environment_show_command_builder;
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
declare class az_lab_formula_delete_command_builder extends CommandBuilder<az_lab_formula_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, name: string, resourceGroup: string);
    /** The name of the lab. */
    labName(value: string): az_lab_formula_delete_command_builder;
    /** The name of the formula. */
    name(value: string): az_lab_formula_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_formula_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_formula_delete_command_builder;
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
declare class az_lab_formula_export_artifacts_command_builder extends CommandBuilder<az_lab_formula_export_artifacts_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, name: string, resourceGroup: string);
    /** Name of the lab. */
    labName(value: string): az_lab_formula_export_artifacts_command_builder;
    /** Name of the formula. */
    name(value: string): az_lab_formula_export_artifacts_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_formula_export_artifacts_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_formula_export_artifacts_command_builder;
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
declare class az_lab_formula_list_command_builder extends CommandBuilder<az_lab_formula_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, resourceGroup: string);
    /** The name of the lab. */
    labName(value: string): az_lab_formula_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_formula_list_command_builder;
    /** Specify the $expand query. Example: 'properties($select=description)'. */
    expand(value: string): az_lab_formula_list_command_builder;
    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    filter(value: string): az_lab_formula_list_command_builder;
    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    orderby(value: string): az_lab_formula_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_formula_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_formula_list_command_builder;
    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    top(value: string): az_lab_formula_list_command_builder;
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
declare class az_lab_formula_show_command_builder extends CommandBuilder<az_lab_formula_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, name: string, resourceGroup: string);
    /** Name of the lab. */
    labName(value: string): az_lab_formula_show_command_builder;
    /** Name of the formula. */
    name(value: string): az_lab_formula_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_formula_show_command_builder;
    /** Specify the $expand query. Example: 'properties($select=description)'. */
    expand(value: string): az_lab_formula_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_formula_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_formula_show_command_builder;
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
declare class az_lab_gallery_image_list_command_builder extends CommandBuilder<az_lab_gallery_image_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, resourceGroup: string);
    /** The name of the lab. */
    labName(value: string): az_lab_gallery_image_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_gallery_image_list_command_builder;
    /** Specify the $expand query. Example: 'properties($select=author)'. */
    expand(value: string): az_lab_gallery_image_list_command_builder;
    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    filter(value: string): az_lab_gallery_image_list_command_builder;
    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    orderby(value: string): az_lab_gallery_image_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_gallery_image_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_gallery_image_list_command_builder;
    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    top(value: string): az_lab_gallery_image_list_command_builder;
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
declare class az_lab_secret_delete_command_builder extends CommandBuilder<az_lab_secret_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, name: string, resourceGroup: string);
    /** The name of the lab. */
    labName(value: string): az_lab_secret_delete_command_builder;
    /** The name of the secret. */
    name(value: string): az_lab_secret_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_secret_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_secret_delete_command_builder;
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
declare class az_lab_secret_list_command_builder extends CommandBuilder<az_lab_secret_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, resourceGroup: string);
    /** The name of the lab. */
    labName(value: string): az_lab_secret_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_secret_list_command_builder;
    /** Specify the $expand query. Example: 'properties($select=value)'. */
    expand(value: string): az_lab_secret_list_command_builder;
    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    filter(value: string): az_lab_secret_list_command_builder;
    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    orderby(value: string): az_lab_secret_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_secret_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_secret_list_command_builder;
    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    top(value: string): az_lab_secret_list_command_builder;
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
declare class az_lab_secret_set_command_builder extends CommandBuilder<az_lab_secret_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, name: string, resourceGroup: string, value: string);
    /** Name of the lab. */
    labName(value: string): az_lab_secret_set_command_builder;
    /** Name of the secret. */
    name(value: string): az_lab_secret_set_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_secret_set_command_builder;
    /** Value of the secret. */
    value(value: string): az_lab_secret_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_secret_set_command_builder;
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
declare class az_lab_secret_show_command_builder extends CommandBuilder<az_lab_secret_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, name: string, resourceGroup: string);
    /** The name of the lab. */
    labName(value: string): az_lab_secret_show_command_builder;
    /** The name of the secret. */
    name(value: string): az_lab_secret_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_secret_show_command_builder;
    /** Specify the $expand query. Example: 'properties($select=value)'. */
    expand(value: string): az_lab_secret_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_secret_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_secret_show_command_builder;
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
declare class az_lab_vm_apply_artifacts_command_builder extends CommandBuilder<az_lab_vm_apply_artifacts_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, name: string, resourceGroup: string);
    /** Name of the Lab. */
    labName(value: string): az_lab_vm_apply_artifacts_command_builder;
    /** Name of the virtual machine. */
    name(value: string): az_lab_vm_apply_artifacts_command_builder;
    /** Name of lab's resource group. */
    resourceGroup(value: string): az_lab_vm_apply_artifacts_command_builder;
    /** JSON encoded array of artifacts to be applied. Use '@{file}' to load from a file. */
    artifacts(value: string): az_lab_vm_apply_artifacts_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_vm_apply_artifacts_command_builder;
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
declare class az_lab_vm_claim_command_builder extends CommandBuilder<az_lab_vm_claim_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_lab_vm_claim_command_builder;
    /** Name of the lab. */
    labName(value: string): az_lab_vm_claim_command_builder;
    /** Name of the virtual machine to claim. */
    name(value: string): az_lab_vm_claim_command_builder;
    /** Name of lab's resource group. */
    resourceGroup(value: string): az_lab_vm_claim_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_vm_claim_command_builder;
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
declare class az_lab_vm_create_command_builder extends CommandBuilder<az_lab_vm_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, name: string, resourceGroup: string);
    /** Name of the lab. */
    labName(value: string): az_lab_vm_create_command_builder;
    /** Name of the virtual machine. */
    name(value: string): az_lab_vm_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_vm_create_command_builder;
    /** Password for the VM admin. */
    adminPassword(value: string): az_lab_vm_create_command_builder;
    /** Username for the VM admin. */
    adminUsername(value: string): az_lab_vm_create_command_builder;
    /** Flag indicating if the VM should be created as claimable. */
    allowClaim(value: string): az_lab_vm_create_command_builder;
    /** JSON encoded array of artifacts to be applied. Use '@{file}' to load from a file. */
    artifacts(value: string): az_lab_vm_create_command_builder;
    /** Type of authentication allowed for the VM. Allowed values are: password, ssh. */
    authenticationType(value: string): az_lab_vm_create_command_builder;
    /** Storage type to use for virtual machine. */
    diskType(value: string): az_lab_vm_create_command_builder;
    /** The expiration date in UTC(yyyy-MM-ddTHH:mm:ss) for the VM. */
    expirationDate(value: string): az_lab_vm_create_command_builder;
    /** Name of the formula. Use `az lab formula list` for available formulas. */
    formula(value: string): az_lab_vm_create_command_builder;
    /** Generate SSH public and private key files if missing. */
    generateSshKeys(value: string): az_lab_vm_create_command_builder;
    /** The name of the operating system image (gallery image name or custom image name/ID). */
    image(value: string): az_lab_vm_create_command_builder;
    /** Type of the image. Allowed values are: gallery, custom. */
    imageType(value: string): az_lab_vm_create_command_builder;
    /** Type of IP configuration to use for the VM. Allowed values are: shared, public, private. */
    ipConfiguration(value: string): az_lab_vm_create_command_builder;
    /** Notes for the virtual machine. */
    notes(value: string): az_lab_vm_create_command_builder;
    /** Name of the saved secret to be used for authentication. */
    savedSecret(value: string): az_lab_vm_create_command_builder;
    /** The size of the VM to be created. See <a href="https://azure.microsoft.com/pricing/details/virtual-machines/">https://azure.microsoft.com/pricing/details/virtual-machines/</a> for size info. */
    size(value: string): az_lab_vm_create_command_builder;
    /** The SSH public key or public key file path. Use `--generate-ssh-keys` to generate SSH keys. */
    sshKey(value: string): az_lab_vm_create_command_builder;
    /** Name of the subnet to add the VM to. */
    subnet(value: string): az_lab_vm_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_vm_create_command_builder;
    /** Space-separated tags in `key[=value]` format. */
    tags(value: string): az_lab_vm_create_command_builder;
    /** Name of the virtual network to add the VM to. */
    vnetName(value: string): az_lab_vm_create_command_builder;
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
declare class az_lab_vm_delete_command_builder extends CommandBuilder<az_lab_vm_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, name: string, resourceGroup: string);
    /** The name of the lab. */
    labName(value: string): az_lab_vm_delete_command_builder;
    /** The name of the virtual machine. */
    name(value: string): az_lab_vm_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_vm_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_vm_delete_command_builder;
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
declare class az_lab_vm_list_command_builder extends CommandBuilder<az_lab_vm_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, resourceGroup: string);
    /** Name of the lab. */
    labName(value: string): az_lab_vm_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_vm_list_command_builder;
    /** List all virtual machines in the lab. Cannot be used with `--filters`. */
    all(value: string): az_lab_vm_list_command_builder;
    /** List only claimable virtual machines in the lab. Cannot be used with `--filters`. */
    claimable(value: string): az_lab_vm_list_command_builder;
    /** Name or ID of the environment to list virtual machines in. Cannot be used with `--filters`. */
    environment(value: string): az_lab_vm_list_command_builder;
    /** The expand query. */
    expand(value: string): az_lab_vm_list_command_builder;
    /** The filter to apply. */
    filters(value: string): az_lab_vm_list_command_builder;
    /** Object ID of the owner to list VMs for. */
    objectId(value: string): az_lab_vm_list_command_builder;
    /** The ordering expression for the results using OData notation. */
    orderBy(value: string): az_lab_vm_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_vm_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_vm_list_command_builder;
    /** The maximum number of resources to return. */
    top(value: string): az_lab_vm_list_command_builder;
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
declare class az_lab_vm_show_command_builder extends CommandBuilder<az_lab_vm_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, name: string, resourceGroup: string);
    /** The name of the lab. */
    labName(value: string): az_lab_vm_show_command_builder;
    /** The name of the virtual machine. */
    name(value: string): az_lab_vm_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_vm_show_command_builder;
    /** Specify the $expand query. Example: 'properties($expand=artifacts,computeVm,networkInterface,applicableSchedule)'. */
    expand(value: string): az_lab_vm_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_vm_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_vm_show_command_builder;
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
declare class az_lab_vm_start_command_builder extends CommandBuilder<az_lab_vm_start_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, name: string, resourceGroup: string);
    /** The name of the lab. */
    labName(value: string): az_lab_vm_start_command_builder;
    /** The name of the virtual machine. */
    name(value: string): az_lab_vm_start_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_vm_start_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_vm_start_command_builder;
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
declare class az_lab_vm_stop_command_builder extends CommandBuilder<az_lab_vm_stop_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, name: string, resourceGroup: string);
    /** The name of the lab. */
    labName(value: string): az_lab_vm_stop_command_builder;
    /** The name of the virtual machine. */
    name(value: string): az_lab_vm_stop_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_vm_stop_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_vm_stop_command_builder;
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
declare class az_lab_vnet_get_command_builder extends CommandBuilder<az_lab_vnet_get_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, name: string, resourceGroup: string);
    /** The name of the lab. */
    labName(value: string): az_lab_vnet_get_command_builder;
    /** The name of the virtual network. */
    name(value: string): az_lab_vnet_get_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_vnet_get_command_builder;
    /** Specify the $expand query. Example: 'properties($expand=externalSubnets)'. */
    expand(value: string): az_lab_vnet_get_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_vnet_get_command_builder;
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
declare class az_lab_vnet_list_command_builder extends CommandBuilder<az_lab_vnet_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, labName: string, resourceGroup: string);
    /** The name of the lab. */
    labName(value: string): az_lab_vnet_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_vnet_list_command_builder;
    /** Specify the $expand query. Example: 'properties($expand=externalSubnets)'. */
    expand(value: string): az_lab_vnet_list_command_builder;
    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    filter(value: string): az_lab_vnet_list_command_builder;
    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    orderby(value: string): az_lab_vnet_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lab_vnet_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_vnet_list_command_builder;
    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    top(value: string): az_lab_vnet_list_command_builder;
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
declare class az_lab_delete_command_builder extends CommandBuilder<az_lab_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the lab. */
    name(value: string): az_lab_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_delete_command_builder;
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
declare class az_lab_get_command_builder extends CommandBuilder<az_lab_get_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the lab. */
    name(value: string): az_lab_get_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lab_get_command_builder;
    /** Specify the $expand query. Example: 'properties($select=defaultStorageAccount)'. */
    expand(value: string): az_lab_get_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lab_get_command_builder;
}
export {};
