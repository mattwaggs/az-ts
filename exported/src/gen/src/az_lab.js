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
exports.az_lab = exports.az_lab_vnet = exports.az_lab_vm = exports.az_lab_secret = exports.az_lab_gallery_image = exports.az_lab_formula = exports.az_lab_environment = exports.az_lab_custom_image = exports.az_lab_artifact = exports.az_lab_artifact_source = exports.az_lab_arm_template = void 0;
var base_1 = require("../base");
/** Manage Azure Resource Manager (ARM) templates in an Azure DevTest Lab. */
var az_lab_arm_template = /** @class */ (function () {
    function az_lab_arm_template() {
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
    az_lab_arm_template.list = function (artifactSourceName, labName, resourceGroup) {
        return new az_lab_arm_template_list_command_builder("az lab arm-template list", 'az_lab_arm_template_list_command_result', artifactSourceName, labName, resourceGroup);
    };
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
    az_lab_arm_template.show = function (artifactSourceName, labName, name, resourceGroup) {
        return new az_lab_arm_template_show_command_builder("az lab arm-template show", 'az_lab_arm_template_show_command_result', artifactSourceName, labName, name, resourceGroup);
    };
    return az_lab_arm_template;
}());
exports.az_lab_arm_template = az_lab_arm_template;
/** Manage DevTest Lab artifact sources. */
var az_lab_artifact_source = /** @class */ (function () {
    function az_lab_artifact_source() {
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
    az_lab_artifact_source.list = function (labName, resourceGroup) {
        return new az_lab_artifact_source_list_command_builder("az lab artifact-source list", 'az_lab_artifact_source_list_command_result', labName, resourceGroup);
    };
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
    az_lab_artifact_source.show = function (labName, name, resourceGroup) {
        return new az_lab_artifact_source_show_command_builder("az lab artifact-source show", 'az_lab_artifact_source_show_command_result', labName, name, resourceGroup);
    };
    return az_lab_artifact_source;
}());
exports.az_lab_artifact_source = az_lab_artifact_source;
/** Manage DevTest Labs artifacts. */
var az_lab_artifact = /** @class */ (function () {
    function az_lab_artifact() {
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
    az_lab_artifact.list = function (artifactSourceName, labName, resourceGroup) {
        return new az_lab_artifact_list_command_builder("az lab artifact list", 'az_lab_artifact_list_command_result', artifactSourceName, labName, resourceGroup);
    };
    return az_lab_artifact;
}());
exports.az_lab_artifact = az_lab_artifact;
/** Manage custom images of a DevTest Lab. */
var az_lab_custom_image = /** @class */ (function () {
    function az_lab_custom_image() {
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
    az_lab_custom_image.create = function (labName, name, osState, osType, resourceGroup, sourceVmId) {
        return new az_lab_custom_image_create_command_builder("az lab custom-image create", 'az_lab_custom_image_create_command_result', labName, name, osState, osType, resourceGroup, sourceVmId);
    };
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
    az_lab_custom_image["delete"] = function (labName, name, resourceGroup) {
        return new az_lab_custom_image_delete_command_builder("az lab custom-image delete", 'az_lab_custom_image_delete_command_result', labName, name, resourceGroup);
    };
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
    az_lab_custom_image.list = function (labName, resourceGroup) {
        return new az_lab_custom_image_list_command_builder("az lab custom-image list", 'az_lab_custom_image_list_command_result', labName, resourceGroup);
    };
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
    az_lab_custom_image.show = function (labName, name, resourceGroup) {
        return new az_lab_custom_image_show_command_builder("az lab custom-image show", 'az_lab_custom_image_show_command_result', labName, name, resourceGroup);
    };
    return az_lab_custom_image;
}());
exports.az_lab_custom_image = az_lab_custom_image;
/** Manage environments for an Azure DevTest Lab. */
var az_lab_environment = /** @class */ (function () {
    function az_lab_environment() {
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
    az_lab_environment.create = function (armTemplate, labName, name, resourceGroup) {
        return new az_lab_environment_create_command_builder("az lab environment create", 'az_lab_environment_create_command_result', armTemplate, labName, name, resourceGroup);
    };
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
    az_lab_environment["delete"] = function (labName, name, resourceGroup) {
        return new az_lab_environment_delete_command_builder("az lab environment delete", 'az_lab_environment_delete_command_result', labName, name, resourceGroup);
    };
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
    az_lab_environment.list = function (labName, resourceGroup) {
        return new az_lab_environment_list_command_builder("az lab environment list", 'az_lab_environment_list_command_result', labName, resourceGroup);
    };
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
    az_lab_environment.show = function (labName, name, resourceGroup) {
        return new az_lab_environment_show_command_builder("az lab environment show", 'az_lab_environment_show_command_result', labName, name, resourceGroup);
    };
    return az_lab_environment;
}());
exports.az_lab_environment = az_lab_environment;
/** Manage formulas for an Azure DevTest Lab. */
var az_lab_formula = /** @class */ (function () {
    function az_lab_formula() {
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
    az_lab_formula["delete"] = function (labName, name, resourceGroup) {
        return new az_lab_formula_delete_command_builder("az lab formula delete", 'az_lab_formula_delete_command_result', labName, name, resourceGroup);
    };
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
    az_lab_formula.export_artifacts = function (labName, name, resourceGroup) {
        return new az_lab_formula_export_artifacts_command_builder("az lab formula export-artifacts", 'az_lab_formula_export_artifacts_command_result', labName, name, resourceGroup);
    };
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
    az_lab_formula.list = function (labName, resourceGroup) {
        return new az_lab_formula_list_command_builder("az lab formula list", 'az_lab_formula_list_command_result', labName, resourceGroup);
    };
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
    az_lab_formula.show = function (labName, name, resourceGroup) {
        return new az_lab_formula_show_command_builder("az lab formula show", 'az_lab_formula_show_command_result', labName, name, resourceGroup);
    };
    return az_lab_formula;
}());
exports.az_lab_formula = az_lab_formula;
/** List Azure Marketplace images allowed for a DevTest Lab. */
var az_lab_gallery_image = /** @class */ (function () {
    function az_lab_gallery_image() {
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
    az_lab_gallery_image.list = function (labName, resourceGroup) {
        return new az_lab_gallery_image_list_command_builder("az lab gallery-image list", 'az_lab_gallery_image_list_command_result', labName, resourceGroup);
    };
    return az_lab_gallery_image;
}());
exports.az_lab_gallery_image = az_lab_gallery_image;
/** Manage secrets of an Azure DevTest Lab. */
var az_lab_secret = /** @class */ (function () {
    function az_lab_secret() {
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
    az_lab_secret["delete"] = function (labName, name, resourceGroup) {
        return new az_lab_secret_delete_command_builder("az lab secret delete", 'az_lab_secret_delete_command_result', labName, name, resourceGroup);
    };
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
    az_lab_secret.list = function (labName, resourceGroup) {
        return new az_lab_secret_list_command_builder("az lab secret list", 'az_lab_secret_list_command_result', labName, resourceGroup);
    };
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
    az_lab_secret.set = function (labName, name, resourceGroup, value) {
        return new az_lab_secret_set_command_builder("az lab secret set", 'az_lab_secret_set_command_result', labName, name, resourceGroup, value);
    };
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
    az_lab_secret.show = function (labName, name, resourceGroup) {
        return new az_lab_secret_show_command_builder("az lab secret show", 'az_lab_secret_show_command_result', labName, name, resourceGroup);
    };
    return az_lab_secret;
}());
exports.az_lab_secret = az_lab_secret;
/** Manage VMs in an Azure DevTest Lab. */
var az_lab_vm = /** @class */ (function () {
    function az_lab_vm() {
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
    az_lab_vm.apply_artifacts = function (labName, name, resourceGroup) {
        return new az_lab_vm_apply_artifacts_command_builder("az lab vm apply-artifacts", 'az_lab_vm_apply_artifacts_command_result', labName, name, resourceGroup);
    };
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
    az_lab_vm.claim = function () {
        return new az_lab_vm_claim_command_builder("az lab vm claim", 'az_lab_vm_claim_command_result');
    };
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
    az_lab_vm.create = function (labName, name, resourceGroup) {
        return new az_lab_vm_create_command_builder("az lab vm create", 'az_lab_vm_create_command_result', labName, name, resourceGroup);
    };
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
    az_lab_vm["delete"] = function (labName, name, resourceGroup) {
        return new az_lab_vm_delete_command_builder("az lab vm delete", 'az_lab_vm_delete_command_result', labName, name, resourceGroup);
    };
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
    az_lab_vm.list = function (labName, resourceGroup) {
        return new az_lab_vm_list_command_builder("az lab vm list", 'az_lab_vm_list_command_result', labName, resourceGroup);
    };
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
    az_lab_vm.show = function (labName, name, resourceGroup) {
        return new az_lab_vm_show_command_builder("az lab vm show", 'az_lab_vm_show_command_result', labName, name, resourceGroup);
    };
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
    az_lab_vm.start = function (labName, name, resourceGroup) {
        return new az_lab_vm_start_command_builder("az lab vm start", 'az_lab_vm_start_command_result', labName, name, resourceGroup);
    };
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
    az_lab_vm.stop = function (labName, name, resourceGroup) {
        return new az_lab_vm_stop_command_builder("az lab vm stop", 'az_lab_vm_stop_command_result', labName, name, resourceGroup);
    };
    return az_lab_vm;
}());
exports.az_lab_vm = az_lab_vm;
/** Manage virtual networks of an Azure DevTest Lab. */
var az_lab_vnet = /** @class */ (function () {
    function az_lab_vnet() {
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
    az_lab_vnet.get = function (labName, name, resourceGroup) {
        return new az_lab_vnet_get_command_builder("az lab vnet get", 'az_lab_vnet_get_command_result', labName, name, resourceGroup);
    };
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
    az_lab_vnet.list = function (labName, resourceGroup) {
        return new az_lab_vnet_list_command_builder("az lab vnet list", 'az_lab_vnet_list_command_result', labName, resourceGroup);
    };
    return az_lab_vnet;
}());
exports.az_lab_vnet = az_lab_vnet;
/** Manage Azure DevTest Labs. */
var az_lab = /** @class */ (function () {
    function az_lab() {
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
    az_lab["delete"] = function (name, resourceGroup) {
        return new az_lab_delete_command_builder("az lab delete", 'az_lab_delete_command_result', name, resourceGroup);
    };
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
    az_lab.get = function (name, resourceGroup) {
        return new az_lab_get_command_builder("az lab get", 'az_lab_get_command_result', name, resourceGroup);
    };
    return az_lab;
}());
exports.az_lab = az_lab;
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
var az_lab_arm_template_list_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_arm_template_list_command_builder, _super);
    function az_lab_arm_template_list_command_builder(commandPath, resultDataTypeName, artifactSourceName, labName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.artifactSourceName(artifactSourceName);
        _this.labName(labName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the artifact source. */
    az_lab_arm_template_list_command_builder.prototype.artifactSourceName = function (value) {
        this.setFlag("--artifact-source-name", value);
        return this;
    };
    /** The name of the lab. */
    az_lab_arm_template_list_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_arm_template_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify the $expand query. Example: 'properties($select=displayName)'. */
    az_lab_arm_template_list_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    az_lab_arm_template_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    az_lab_arm_template_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_lab_arm_template_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_arm_template_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    az_lab_arm_template_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_lab_arm_template_list_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_arm_template_show_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_arm_template_show_command_builder, _super);
    function az_lab_arm_template_show_command_builder(commandPath, resultDataTypeName, artifactSourceName, labName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.artifactSourceName(artifactSourceName);
        _this.labName(labName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the artifact source. */
    az_lab_arm_template_show_command_builder.prototype.artifactSourceName = function (value) {
        this.setFlag("--artifact-source-name", value);
        return this;
    };
    /** Name of the lab. */
    az_lab_arm_template_show_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** Name of the Azure Resource Manager template. */
    az_lab_arm_template_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of lab's resource group. */
    az_lab_arm_template_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Whether or not to export parameters template. */
    az_lab_arm_template_show_command_builder.prototype.exportParameters = function (value) {
        this.setFlag("--export-parameters", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_lab_arm_template_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_arm_template_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lab_arm_template_show_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_artifact_source_list_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_artifact_source_list_command_builder, _super);
    function az_lab_artifact_source_list_command_builder(commandPath, resultDataTypeName, labName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the lab. */
    az_lab_artifact_source_list_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_artifact_source_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify the $expand query. Example: 'properties($select=displayName)'. */
    az_lab_artifact_source_list_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    az_lab_artifact_source_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    az_lab_artifact_source_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_lab_artifact_source_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_artifact_source_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    az_lab_artifact_source_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_lab_artifact_source_list_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_artifact_source_show_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_artifact_source_show_command_builder, _super);
    function az_lab_artifact_source_show_command_builder(commandPath, resultDataTypeName, labName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the lab. */
    az_lab_artifact_source_show_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** The name of the artifact source. */
    az_lab_artifact_source_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_artifact_source_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify the $expand query. Example: 'properties($select=displayName)'. */
    az_lab_artifact_source_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_lab_artifact_source_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_artifact_source_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lab_artifact_source_show_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_artifact_list_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_artifact_list_command_builder, _super);
    function az_lab_artifact_list_command_builder(commandPath, resultDataTypeName, artifactSourceName, labName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.artifactSourceName(artifactSourceName);
        _this.labName(labName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the artifact source. */
    az_lab_artifact_list_command_builder.prototype.artifactSourceName = function (value) {
        this.setFlag("--artifact-source-name", value);
        return this;
    };
    /** The name of the lab. */
    az_lab_artifact_list_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_artifact_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify the $expand query. Example: 'properties($select=title)'. */
    az_lab_artifact_list_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    az_lab_artifact_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    az_lab_artifact_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_lab_artifact_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_artifact_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    az_lab_artifact_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_lab_artifact_list_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_custom_image_create_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_custom_image_create_command_builder, _super);
    function az_lab_custom_image_create_command_builder(commandPath, resultDataTypeName, labName, name, osState, osType, resourceGroup, sourceVmId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.name(name);
        _this.osState(osState);
        _this.osType(osType);
        _this.resourceGroup(resourceGroup);
        _this.sourceVmId(sourceVmId);
        return _this;
    }
    /** Name of the Lab. */
    az_lab_custom_image_create_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** Name of the image. */
    az_lab_custom_image_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The current state of the virtual machine. */
    az_lab_custom_image_create_command_builder.prototype.osState = function (value) {
        this.setFlag("--os-state", value);
        return this;
    };
    /** Type of the OS on which the custom image is based. Allowed values are: Windows, Linux. */
    az_lab_custom_image_create_command_builder.prototype.osType = function (value) {
        this.setFlag("--os-type", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_custom_image_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The resource ID of a virtual machine in the provided lab. */
    az_lab_custom_image_create_command_builder.prototype.sourceVmId = function (value) {
        this.setFlag("--source-vm-id", value);
        return this;
    };
    /** The author of the custom image. */
    az_lab_custom_image_create_command_builder.prototype.author = function (value) {
        this.setFlag("--author", value);
        return this;
    };
    /** A detailed description for the custom image. */
    az_lab_custom_image_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_custom_image_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lab_custom_image_create_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_custom_image_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_custom_image_delete_command_builder, _super);
    function az_lab_custom_image_delete_command_builder(commandPath, resultDataTypeName, labName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the lab. */
    az_lab_custom_image_delete_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** The name of the custom image. */
    az_lab_custom_image_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_custom_image_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_custom_image_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lab_custom_image_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_custom_image_list_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_custom_image_list_command_builder, _super);
    function az_lab_custom_image_list_command_builder(commandPath, resultDataTypeName, labName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the lab. */
    az_lab_custom_image_list_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_custom_image_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify the $expand query. Example: 'properties($select=vm)'. */
    az_lab_custom_image_list_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    az_lab_custom_image_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    az_lab_custom_image_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_lab_custom_image_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_custom_image_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    az_lab_custom_image_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_lab_custom_image_list_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_custom_image_show_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_custom_image_show_command_builder, _super);
    function az_lab_custom_image_show_command_builder(commandPath, resultDataTypeName, labName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the lab. */
    az_lab_custom_image_show_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** The name of the custom image. */
    az_lab_custom_image_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_custom_image_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify the $expand query. Example: 'properties($select=vm)'. */
    az_lab_custom_image_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_lab_custom_image_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_custom_image_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lab_custom_image_show_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_environment_create_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_environment_create_command_builder, _super);
    function az_lab_environment_create_command_builder(commandPath, resultDataTypeName, armTemplate, labName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.armTemplate(armTemplate);
        _this.labName(labName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name or ID of the ARM template in the lab. */
    az_lab_environment_create_command_builder.prototype.armTemplate = function (value) {
        this.setFlag("--arm-template", value);
        return this;
    };
    /** Name of the lab. */
    az_lab_environment_create_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** Name of the environment. */
    az_lab_environment_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the lab's resource group. */
    az_lab_environment_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the artifact source in the lab. */
    az_lab_environment_create_command_builder.prototype.artifactSourceName = function (value) {
        this.setFlag("--artifact-source-name", value);
        return this;
    };
    /** JSON encoded list of parameters. Use '@{file}' to load from a file. */
    az_lab_environment_create_command_builder.prototype.parameters = function (value) {
        this.setFlag("--parameters", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_environment_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The tags for the resource. */
    az_lab_environment_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_lab_environment_create_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_environment_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_environment_delete_command_builder, _super);
    function az_lab_environment_delete_command_builder(commandPath, resultDataTypeName, labName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the lab. */
    az_lab_environment_delete_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** The name of the environment. */
    az_lab_environment_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_environment_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_environment_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lab_environment_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_environment_list_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_environment_list_command_builder, _super);
    function az_lab_environment_list_command_builder(commandPath, resultDataTypeName, labName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the lab. */
    az_lab_environment_list_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_environment_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify the $expand query. Example: 'properties($select=deploymentProperties)'. */
    az_lab_environment_list_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    az_lab_environment_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    az_lab_environment_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_lab_environment_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_environment_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    az_lab_environment_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_lab_environment_list_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_environment_show_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_environment_show_command_builder, _super);
    function az_lab_environment_show_command_builder(commandPath, resultDataTypeName, labName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the lab. */
    az_lab_environment_show_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** The name of the environment. */
    az_lab_environment_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_environment_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify the $expand query. Example: 'properties($select=deploymentProperties)'. */
    az_lab_environment_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_lab_environment_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_environment_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lab_environment_show_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_formula_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_formula_delete_command_builder, _super);
    function az_lab_formula_delete_command_builder(commandPath, resultDataTypeName, labName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the lab. */
    az_lab_formula_delete_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** The name of the formula. */
    az_lab_formula_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_formula_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_formula_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lab_formula_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_formula_export_artifacts_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_formula_export_artifacts_command_builder, _super);
    function az_lab_formula_export_artifacts_command_builder(commandPath, resultDataTypeName, labName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the lab. */
    az_lab_formula_export_artifacts_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** Name of the formula. */
    az_lab_formula_export_artifacts_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_formula_export_artifacts_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_formula_export_artifacts_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lab_formula_export_artifacts_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_formula_list_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_formula_list_command_builder, _super);
    function az_lab_formula_list_command_builder(commandPath, resultDataTypeName, labName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the lab. */
    az_lab_formula_list_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_formula_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify the $expand query. Example: 'properties($select=description)'. */
    az_lab_formula_list_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    az_lab_formula_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    az_lab_formula_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_lab_formula_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_formula_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    az_lab_formula_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_lab_formula_list_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_formula_show_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_formula_show_command_builder, _super);
    function az_lab_formula_show_command_builder(commandPath, resultDataTypeName, labName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the lab. */
    az_lab_formula_show_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** Name of the formula. */
    az_lab_formula_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_formula_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify the $expand query. Example: 'properties($select=description)'. */
    az_lab_formula_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_lab_formula_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_formula_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lab_formula_show_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_gallery_image_list_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_gallery_image_list_command_builder, _super);
    function az_lab_gallery_image_list_command_builder(commandPath, resultDataTypeName, labName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the lab. */
    az_lab_gallery_image_list_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_gallery_image_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify the $expand query. Example: 'properties($select=author)'. */
    az_lab_gallery_image_list_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    az_lab_gallery_image_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    az_lab_gallery_image_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_lab_gallery_image_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_gallery_image_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    az_lab_gallery_image_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_lab_gallery_image_list_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_secret_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_secret_delete_command_builder, _super);
    function az_lab_secret_delete_command_builder(commandPath, resultDataTypeName, labName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the lab. */
    az_lab_secret_delete_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** The name of the secret. */
    az_lab_secret_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_secret_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_secret_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lab_secret_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_secret_list_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_secret_list_command_builder, _super);
    function az_lab_secret_list_command_builder(commandPath, resultDataTypeName, labName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the lab. */
    az_lab_secret_list_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_secret_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify the $expand query. Example: 'properties($select=value)'. */
    az_lab_secret_list_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    az_lab_secret_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    az_lab_secret_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_lab_secret_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_secret_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    az_lab_secret_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_lab_secret_list_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_secret_set_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_secret_set_command_builder, _super);
    function az_lab_secret_set_command_builder(commandPath, resultDataTypeName, labName, name, resourceGroup, value) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.value(value);
        return _this;
    }
    /** Name of the lab. */
    az_lab_secret_set_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** Name of the secret. */
    az_lab_secret_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_secret_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Value of the secret. */
    az_lab_secret_set_command_builder.prototype.value = function (value) {
        this.setFlag("--value", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_secret_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lab_secret_set_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_secret_show_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_secret_show_command_builder, _super);
    function az_lab_secret_show_command_builder(commandPath, resultDataTypeName, labName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the lab. */
    az_lab_secret_show_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** The name of the secret. */
    az_lab_secret_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_secret_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify the $expand query. Example: 'properties($select=value)'. */
    az_lab_secret_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_lab_secret_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_secret_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lab_secret_show_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_vm_apply_artifacts_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_vm_apply_artifacts_command_builder, _super);
    function az_lab_vm_apply_artifacts_command_builder(commandPath, resultDataTypeName, labName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Lab. */
    az_lab_vm_apply_artifacts_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** Name of the virtual machine. */
    az_lab_vm_apply_artifacts_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of lab's resource group. */
    az_lab_vm_apply_artifacts_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** JSON encoded array of artifacts to be applied. Use '@{file}' to load from a file. */
    az_lab_vm_apply_artifacts_command_builder.prototype.artifacts = function (value) {
        this.setFlag("--artifacts", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_vm_apply_artifacts_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lab_vm_apply_artifacts_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_vm_claim_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_vm_claim_command_builder, _super);
    function az_lab_vm_claim_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_lab_vm_claim_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the lab. */
    az_lab_vm_claim_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** Name of the virtual machine to claim. */
    az_lab_vm_claim_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of lab's resource group. */
    az_lab_vm_claim_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_vm_claim_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lab_vm_claim_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_vm_create_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_vm_create_command_builder, _super);
    function az_lab_vm_create_command_builder(commandPath, resultDataTypeName, labName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the lab. */
    az_lab_vm_create_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** Name of the virtual machine. */
    az_lab_vm_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_vm_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Password for the VM admin. */
    az_lab_vm_create_command_builder.prototype.adminPassword = function (value) {
        this.setFlag("--admin-password", value);
        return this;
    };
    /** Username for the VM admin. */
    az_lab_vm_create_command_builder.prototype.adminUsername = function (value) {
        this.setFlag("--admin-username", value);
        return this;
    };
    /** Flag indicating if the VM should be created as claimable. */
    az_lab_vm_create_command_builder.prototype.allowClaim = function (value) {
        this.setFlag("--allow-claim", value);
        return this;
    };
    /** JSON encoded array of artifacts to be applied. Use '@{file}' to load from a file. */
    az_lab_vm_create_command_builder.prototype.artifacts = function (value) {
        this.setFlag("--artifacts", value);
        return this;
    };
    /** Type of authentication allowed for the VM. Allowed values are: password, ssh. */
    az_lab_vm_create_command_builder.prototype.authenticationType = function (value) {
        this.setFlag("--authentication-type", value);
        return this;
    };
    /** Storage type to use for virtual machine. */
    az_lab_vm_create_command_builder.prototype.diskType = function (value) {
        this.setFlag("--disk-type", value);
        return this;
    };
    /** The expiration date in UTC(yyyy-MM-ddTHH:mm:ss) for the VM. */
    az_lab_vm_create_command_builder.prototype.expirationDate = function (value) {
        this.setFlag("--expiration-date", value);
        return this;
    };
    /** Name of the formula. Use `az lab formula list` for available formulas. */
    az_lab_vm_create_command_builder.prototype.formula = function (value) {
        this.setFlag("--formula", value);
        return this;
    };
    /** Generate SSH public and private key files if missing. */
    az_lab_vm_create_command_builder.prototype.generateSshKeys = function (value) {
        this.setFlag("--generate-ssh-keys", value);
        return this;
    };
    /** The name of the operating system image (gallery image name or custom image name/ID). */
    az_lab_vm_create_command_builder.prototype.image = function (value) {
        this.setFlag("--image", value);
        return this;
    };
    /** Type of the image. Allowed values are: gallery, custom. */
    az_lab_vm_create_command_builder.prototype.imageType = function (value) {
        this.setFlag("--image-type", value);
        return this;
    };
    /** Type of IP configuration to use for the VM. Allowed values are: shared, public, private. */
    az_lab_vm_create_command_builder.prototype.ipConfiguration = function (value) {
        this.setFlag("--ip-configuration", value);
        return this;
    };
    /** Notes for the virtual machine. */
    az_lab_vm_create_command_builder.prototype.notes = function (value) {
        this.setFlag("--notes", value);
        return this;
    };
    /** Name of the saved secret to be used for authentication. */
    az_lab_vm_create_command_builder.prototype.savedSecret = function (value) {
        this.setFlag("--saved-secret", value);
        return this;
    };
    /** The size of the VM to be created. See <a href="https://azure.microsoft.com/pricing/details/virtual-machines/">https://azure.microsoft.com/pricing/details/virtual-machines/</a> for size info. */
    az_lab_vm_create_command_builder.prototype.size = function (value) {
        this.setFlag("--size", value);
        return this;
    };
    /** The SSH public key or public key file path. Use `--generate-ssh-keys` to generate SSH keys. */
    az_lab_vm_create_command_builder.prototype.sshKey = function (value) {
        this.setFlag("--ssh-key", value);
        return this;
    };
    /** Name of the subnet to add the VM to. */
    az_lab_vm_create_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_vm_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags in `key[=value]` format. */
    az_lab_vm_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Name of the virtual network to add the VM to. */
    az_lab_vm_create_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_lab_vm_create_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_vm_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_vm_delete_command_builder, _super);
    function az_lab_vm_delete_command_builder(commandPath, resultDataTypeName, labName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the lab. */
    az_lab_vm_delete_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** The name of the virtual machine. */
    az_lab_vm_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_vm_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_vm_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lab_vm_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_vm_list_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_vm_list_command_builder, _super);
    function az_lab_vm_list_command_builder(commandPath, resultDataTypeName, labName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the lab. */
    az_lab_vm_list_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_vm_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** List all virtual machines in the lab. Cannot be used with `--filters`. */
    az_lab_vm_list_command_builder.prototype.all = function (value) {
        this.setFlag("--all", value);
        return this;
    };
    /** List only claimable virtual machines in the lab. Cannot be used with `--filters`. */
    az_lab_vm_list_command_builder.prototype.claimable = function (value) {
        this.setFlag("--claimable", value);
        return this;
    };
    /** Name or ID of the environment to list virtual machines in. Cannot be used with `--filters`. */
    az_lab_vm_list_command_builder.prototype.environment = function (value) {
        this.setFlag("--environment", value);
        return this;
    };
    /** The expand query. */
    az_lab_vm_list_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** The filter to apply. */
    az_lab_vm_list_command_builder.prototype.filters = function (value) {
        this.setFlag("--filters", value);
        return this;
    };
    /** Object ID of the owner to list VMs for. */
    az_lab_vm_list_command_builder.prototype.objectId = function (value) {
        this.setFlag("--object-id", value);
        return this;
    };
    /** The ordering expression for the results using OData notation. */
    az_lab_vm_list_command_builder.prototype.orderBy = function (value) {
        this.setFlag("--order-by", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_lab_vm_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_vm_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The maximum number of resources to return. */
    az_lab_vm_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_lab_vm_list_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_vm_show_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_vm_show_command_builder, _super);
    function az_lab_vm_show_command_builder(commandPath, resultDataTypeName, labName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the lab. */
    az_lab_vm_show_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** The name of the virtual machine. */
    az_lab_vm_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_vm_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify the $expand query. Example: 'properties($expand=artifacts,computeVm,networkInterface,applicableSchedule)'. */
    az_lab_vm_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_lab_vm_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_vm_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lab_vm_show_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_vm_start_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_vm_start_command_builder, _super);
    function az_lab_vm_start_command_builder(commandPath, resultDataTypeName, labName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the lab. */
    az_lab_vm_start_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** The name of the virtual machine. */
    az_lab_vm_start_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_vm_start_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_vm_start_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lab_vm_start_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_vm_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_vm_stop_command_builder, _super);
    function az_lab_vm_stop_command_builder(commandPath, resultDataTypeName, labName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the lab. */
    az_lab_vm_stop_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** The name of the virtual machine. */
    az_lab_vm_stop_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_vm_stop_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_vm_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lab_vm_stop_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_vnet_get_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_vnet_get_command_builder, _super);
    function az_lab_vnet_get_command_builder(commandPath, resultDataTypeName, labName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the lab. */
    az_lab_vnet_get_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** The name of the virtual network. */
    az_lab_vnet_get_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_vnet_get_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify the $expand query. Example: 'properties($expand=externalSubnets)'. */
    az_lab_vnet_get_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_vnet_get_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lab_vnet_get_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_vnet_list_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_vnet_list_command_builder, _super);
    function az_lab_vnet_list_command_builder(commandPath, resultDataTypeName, labName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.labName(labName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the lab. */
    az_lab_vnet_list_command_builder.prototype.labName = function (value) {
        this.setFlag("--lab-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_vnet_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify the $expand query. Example: 'properties($expand=externalSubnets)'. */
    az_lab_vnet_list_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** The filter to apply to the operation. Example: '$filter=contains(name,'myName'). */
    az_lab_vnet_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** The ordering expression for the results, using OData notation. Example: '$orderby=name desc'. */
    az_lab_vnet_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_lab_vnet_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_vnet_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The maximum number of resources to return from the operation. Example: '$top=10'. */
    az_lab_vnet_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_lab_vnet_list_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_delete_command_builder, _super);
    function az_lab_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the lab. */
    az_lab_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lab_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_lab_get_command_builder = /** @class */ (function (_super) {
    __extends(az_lab_get_command_builder, _super);
    function az_lab_get_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the lab. */
    az_lab_get_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lab_get_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify the $expand query. Example: 'properties($select=defaultStorageAccount)'. */
    az_lab_get_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lab_get_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lab_get_command_builder;
}(base_1.CommandBuilder));
