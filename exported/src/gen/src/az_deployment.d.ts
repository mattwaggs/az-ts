import { CommandBuilder } from '../base';
import { az_deployment_group_cancel_command_result } from './models/az_deployment_group_cancel_command_result';
import { az_deployment_group_create_command_result } from './models/az_deployment_group_create_command_result';
import { az_deployment_group_delete_command_result } from './models/az_deployment_group_delete_command_result';
import { az_deployment_group_export_command_result } from './models/az_deployment_group_export_command_result';
import { az_deployment_group_list_command_result } from './models/az_deployment_group_list_command_result';
import { az_deployment_group_show_command_result } from './models/az_deployment_group_show_command_result';
import { az_deployment_group_validate_command_result } from './models/az_deployment_group_validate_command_result';
import { az_deployment_group_wait_command_result } from './models/az_deployment_group_wait_command_result';
import { az_deployment_group_what_if_command_result } from './models/az_deployment_group_what_if_command_result';
import { az_deployment_mg_cancel_command_result } from './models/az_deployment_mg_cancel_command_result';
import { az_deployment_mg_create_command_result } from './models/az_deployment_mg_create_command_result';
import { az_deployment_mg_delete_command_result } from './models/az_deployment_mg_delete_command_result';
import { az_deployment_mg_export_command_result } from './models/az_deployment_mg_export_command_result';
import { az_deployment_mg_list_command_result } from './models/az_deployment_mg_list_command_result';
import { az_deployment_mg_show_command_result } from './models/az_deployment_mg_show_command_result';
import { az_deployment_mg_validate_command_result } from './models/az_deployment_mg_validate_command_result';
import { az_deployment_mg_wait_command_result } from './models/az_deployment_mg_wait_command_result';
import { az_deployment_mg_what_if_command_result } from './models/az_deployment_mg_what_if_command_result';
import { az_deployment_operation_group_list_command_result } from './models/az_deployment_operation_group_list_command_result';
import { az_deployment_operation_group_show_command_result } from './models/az_deployment_operation_group_show_command_result';
import { az_deployment_operation_mg_list_command_result } from './models/az_deployment_operation_mg_list_command_result';
import { az_deployment_operation_mg_show_command_result } from './models/az_deployment_operation_mg_show_command_result';
import { az_deployment_operation_sub_list_command_result } from './models/az_deployment_operation_sub_list_command_result';
import { az_deployment_operation_sub_show_command_result } from './models/az_deployment_operation_sub_show_command_result';
import { az_deployment_operation_tenant_list_command_result } from './models/az_deployment_operation_tenant_list_command_result';
import { az_deployment_operation_tenant_show_command_result } from './models/az_deployment_operation_tenant_show_command_result';
import { az_deployment_operation_list_command_result } from './models/az_deployment_operation_list_command_result';
import { az_deployment_operation_show_command_result } from './models/az_deployment_operation_show_command_result';
import { az_deployment_sub_cancel_command_result } from './models/az_deployment_sub_cancel_command_result';
import { az_deployment_sub_create_command_result } from './models/az_deployment_sub_create_command_result';
import { az_deployment_sub_delete_command_result } from './models/az_deployment_sub_delete_command_result';
import { az_deployment_sub_export_command_result } from './models/az_deployment_sub_export_command_result';
import { az_deployment_sub_list_command_result } from './models/az_deployment_sub_list_command_result';
import { az_deployment_sub_show_command_result } from './models/az_deployment_sub_show_command_result';
import { az_deployment_sub_validate_command_result } from './models/az_deployment_sub_validate_command_result';
import { az_deployment_sub_wait_command_result } from './models/az_deployment_sub_wait_command_result';
import { az_deployment_sub_what_if_command_result } from './models/az_deployment_sub_what_if_command_result';
import { az_deployment_tenant_cancel_command_result } from './models/az_deployment_tenant_cancel_command_result';
import { az_deployment_tenant_create_command_result } from './models/az_deployment_tenant_create_command_result';
import { az_deployment_tenant_delete_command_result } from './models/az_deployment_tenant_delete_command_result';
import { az_deployment_tenant_export_command_result } from './models/az_deployment_tenant_export_command_result';
import { az_deployment_tenant_list_command_result } from './models/az_deployment_tenant_list_command_result';
import { az_deployment_tenant_show_command_result } from './models/az_deployment_tenant_show_command_result';
import { az_deployment_tenant_validate_command_result } from './models/az_deployment_tenant_validate_command_result';
import { az_deployment_tenant_wait_command_result } from './models/az_deployment_tenant_wait_command_result';
import { az_deployment_tenant_what_if_command_result } from './models/az_deployment_tenant_what_if_command_result';
import { az_deployment_scripts_delete_command_result } from './models/az_deployment_scripts_delete_command_result';
import { az_deployment_scripts_list_command_result } from './models/az_deployment_scripts_list_command_result';
import { az_deployment_scripts_show_command_result } from './models/az_deployment_scripts_show_command_result';
import { az_deployment_scripts_show_log_command_result } from './models/az_deployment_scripts_show_log_command_result';
import { az_deployment_cancel_command_result } from './models/az_deployment_cancel_command_result';
import { az_deployment_create_command_result } from './models/az_deployment_create_command_result';
import { az_deployment_delete_command_result } from './models/az_deployment_delete_command_result';
import { az_deployment_export_command_result } from './models/az_deployment_export_command_result';
import { az_deployment_list_command_result } from './models/az_deployment_list_command_result';
import { az_deployment_show_command_result } from './models/az_deployment_show_command_result';
import { az_deployment_validate_command_result } from './models/az_deployment_validate_command_result';
import { az_deployment_wait_command_result } from './models/az_deployment_wait_command_result';
/** Manage Azure Resource Manager template deployment at resource group. */
export declare class az_deployment_group {
    /**
     * Cancel a deployment at resource group.
     *
     * Syntax:
     * ```
     * az deployment group cancel --name
     *                            --resource-group
     *                            [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static cancel(name: string, resourceGroup: string): az_deployment_group_cancel_command_builder;
    /**
     * Start a deployment at resource group.
     *
     * Syntax:
     * ```
     * az deployment group create --resource-group
     *                            [--aux-subs]
     *                            [--aux-tenants]
     *                            [--confirm-with-what-if]
     *                            [--handle-extended-json-format]
     *                            [--mode {Complete, Incremental}]
     *                            [--name]
     *                            [--no-prompt {false, true}]
     *                            [--no-wait]
     *                            [--parameters]
     *                            [--rollback-on-error]
     *                            [--subscription]
     *                            [--template-file]
     *                            [--template-uri]
     *                            [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
     *                            [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
     * ```
     *
     * @param {string} resourceGroup The resource group to create deployment at.
     */
    static create(resourceGroup: string): az_deployment_group_create_command_builder;
    /**
     * Delete a deployment at resource group.
     *
     * Syntax:
     * ```
     * az deployment group delete --name
     *                            --resource-group
     *                            [--no-wait]
     *                            [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(name: string, resourceGroup: string): az_deployment_group_delete_command_builder;
    /**
     * Export the template used for a deployment.
     *
     * Syntax:
     * ```
     * az deployment group export --name
     *                            --resource-group
     *                            [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static export(name: string, resourceGroup: string): az_deployment_group_export_command_builder;
    /**
     * List deployments at resource group.
     *
     * Syntax:
     * ```
     * az deployment group list --resource-group
     *                          [--filter]
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(resourceGroup: string): az_deployment_group_list_command_builder;
    /**
     * Show a deployment at resource group.
     *
     * Syntax:
     * ```
     * az deployment group show --name
     *                          --resource-group
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static show(name: string, resourceGroup: string): az_deployment_group_show_command_builder;
    /**
     * Validate whether a template is valid at resource group.
     *
     * Syntax:
     * ```
     * az deployment group validate --resource-group
     *                              [--handle-extended-json-format]
     *                              [--mode {Complete, Incremental}]
     *                              [--name]
     *                              [--no-prompt {false, true}]
     *                              [--parameters]
     *                              [--rollback-on-error]
     *                              [--subscription]
     *                              [--template-file]
     *                              [--template-uri]
     * ```
     *
     * @param {string} resourceGroup The resource group to create deployment at.
     */
    static validate(resourceGroup: string): az_deployment_group_validate_command_builder;
    /**
     * Place the CLI in a waiting state until a deployment condition is met.
     *
     * Syntax:
     * ```
     * az deployment group wait --name
     *                          --resource-group
     *                          [--created]
     *                          [--custom]
     *                          [--deleted]
     *                          [--exists]
     *                          [--interval]
     *                          [--subscription]
     *                          [--timeout]
     *                          [--updated]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static wait(name: string, resourceGroup: string): az_deployment_group_wait_command_builder;
    /**
     * Execute a deployment What-If operation at resource group scope.
     *
     * Syntax:
     * ```
     * az deployment group what-if --resource-group
     *                             [--aux-tenants]
     *                             [--exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
     *                             [--mode {Complete, Incremental}]
     *                             [--name]
     *                             [--no-pretty-print]
     *                             [--no-prompt {false, true}]
     *                             [--parameters]
     *                             [--result-format {FullResourcePayloads, ResourceIdOnly}]
     *                             [--subscription]
     *                             [--template-file]
     *                             [--template-uri]
     * ```
     *
     * @param {string} resourceGroup The resource group to execute deployment What-If operation at.
     */
    static what_if(resourceGroup: string): az_deployment_group_what_if_command_builder;
}
/** Manage Azure Resource Manager template deployment at management group. */
export declare class az_deployment_mg {
    /**
     * Cancel a deployment at management group.
     *
     * Syntax:
     * ```
     * az deployment mg cancel --management-group-id
     *                         --name
     *                         [--subscription]
     * ```
     *
     * @param {string} managementGroupId The management group id.
     * @param {string} name The deployment name.
     */
    static cancel(managementGroupId: string, name: string): az_deployment_mg_cancel_command_builder;
    /**
     * Start a deployment at management group.
     *
     * Syntax:
     * ```
     * az deployment mg create --location
     *                         --management-group-id
     *                         [--confirm-with-what-if]
     *                         [--handle-extended-json-format]
     *                         [--name]
     *                         [--no-prompt {false, true}]
     *                         [--no-wait]
     *                         [--parameters]
     *                         [--subscription]
     *                         [--template-file]
     *                         [--template-uri]
     *                         [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
     *                         [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     * @param {string} managementGroupId The management group id to create deployment at.
     */
    static create(location: string, managementGroupId: string): az_deployment_mg_create_command_builder;
    /**
     * Delete a deployment at management group.
     *
     * Syntax:
     * ```
     * az deployment mg delete --management-group-id
     *                         --name
     *                         [--no-wait]
     *                         [--subscription]
     * ```
     *
     * @param {string} managementGroupId The management group id.
     * @param {string} name The deployment name.
     */
    static delete(managementGroupId: string, name: string): az_deployment_mg_delete_command_builder;
    /**
     * Export the template used for a deployment.
     *
     * Syntax:
     * ```
     * az deployment mg export --management-group-id
     *                         --name
     *                         [--subscription]
     * ```
     *
     * @param {string} managementGroupId The management group id.
     * @param {string} name The deployment name.
     */
    static export(managementGroupId: string, name: string): az_deployment_mg_export_command_builder;
    /**
     * List deployments at management group.
     *
     * Syntax:
     * ```
     * az deployment mg list --management-group-id
     *                       [--filter]
     *                       [--query-examples]
     *                       [--subscription]
     * ```
     *
     * @param {string} managementGroupId The management group id.
     */
    static list(managementGroupId: string): az_deployment_mg_list_command_builder;
    /**
     * Show a deployment at management group.
     *
     * Syntax:
     * ```
     * az deployment mg show --management-group-id
     *                       --name
     *                       [--query-examples]
     *                       [--subscription]
     * ```
     *
     * @param {string} managementGroupId The management group id.
     * @param {string} name The deployment name.
     */
    static show(managementGroupId: string, name: string): az_deployment_mg_show_command_builder;
    /**
     * Validate whether a template is valid at management group.
     *
     * Syntax:
     * ```
     * az deployment mg validate --location
     *                           --management-group-id
     *                           [--handle-extended-json-format]
     *                           [--name]
     *                           [--no-prompt {false, true}]
     *                           [--parameters]
     *                           [--subscription]
     *                           [--template-file]
     *                           [--template-uri]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     * @param {string} managementGroupId The management group id to create deployment at.
     */
    static validate(location: string, managementGroupId: string): az_deployment_mg_validate_command_builder;
    /**
     * Place the CLI in a waiting state until a deployment condition is met.
     *
     * Syntax:
     * ```
     * az deployment mg wait --management-group-id
     *                       --name
     *                       [--created]
     *                       [--custom]
     *                       [--deleted]
     *                       [--exists]
     *                       [--interval]
     *                       [--subscription]
     *                       [--timeout]
     *                       [--updated]
     * ```
     *
     * @param {string} managementGroupId The management group id.
     * @param {string} name The deployment name.
     */
    static wait(managementGroupId: string, name: string): az_deployment_mg_wait_command_builder;
    /**
     * Execute a deployment What-If operation at management group scope.
     *
     * Syntax:
     * ```
     * az deployment mg what-if --location
     *                          --management-group-id
     *                          [--exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
     *                          [--name]
     *                          [--no-pretty-print]
     *                          [--no-prompt {false, true}]
     *                          [--parameters]
     *                          [--result-format {FullResourcePayloads, ResourceIdOnly}]
     *                          [--subscription]
     *                          [--template-file]
     *                          [--template-uri]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     * @param {string} managementGroupId The management group id to create deployment at.
     */
    static what_if(location: string, managementGroupId: string): az_deployment_mg_what_if_command_builder;
}
/** Manage deployment operations at resource group. */
export declare class az_deployment_operation_group {
    /**
     * List deployment operations at resource group.
     *
     * Syntax:
     * ```
     * az deployment operation group list --name
     *                                    --resource-group
     *                                    [--query-examples]
     *                                    [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, resourceGroup: string): az_deployment_operation_group_list_command_builder;
    /**
     * Show a deployment operation at resource group.
     *
     * Syntax:
     * ```
     * az deployment operation group show --name
     *                                    --operation-ids
     *                                    --resource-group
     *                                    [--query-examples]
     *                                    [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} operationIds A list of operation ids to show.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static show(name: string, operationIds: string, resourceGroup: string): az_deployment_operation_group_show_command_builder;
}
/** Manage deployment operations at management group. */
export declare class az_deployment_operation_mg {
    /**
     * List deployment operations at management group.
     *
     * Syntax:
     * ```
     * az deployment operation mg list --management-group-id
     *                                 --name
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     *
     * @param {string} managementGroupId The management group id.
     * @param {string} name The deployment name.
     */
    static list(managementGroupId: string, name: string): az_deployment_operation_mg_list_command_builder;
    /**
     * Show a deployment operation at management group.
     *
     * Syntax:
     * ```
     * az deployment operation mg show --management-group-id
     *                                 --name
     *                                 --operation-ids
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     *
     * @param {string} managementGroupId The management group id.
     * @param {string} name The deployment name.
     * @param {string} operationIds A list of operation ids to show.
     */
    static show(managementGroupId: string, name: string, operationIds: string): az_deployment_operation_mg_show_command_builder;
}
/** Manage deployment operations at subscription scope. */
export declare class az_deployment_operation_sub {
    /**
     * List deployment operations at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment operation sub list --name
     *                                  [--query-examples]
     *                                  [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static list(name: string): az_deployment_operation_sub_list_command_builder;
    /**
     * Show a deployment operation at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment operation sub show --name
     *                                  --operation-ids
     *                                  [--query-examples]
     *                                  [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} operationIds A list of operation ids to show.
     */
    static show(name: string, operationIds: string): az_deployment_operation_sub_show_command_builder;
}
/** Manage deployment operations at tenant scope. */
export declare class az_deployment_operation_tenant {
    /**
     * List deployment operations at tenant scope.
     *
     * Syntax:
     * ```
     * az deployment operation tenant list --name
     *                                     [--query-examples]
     *                                     [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static list(name: string): az_deployment_operation_tenant_list_command_builder;
    /**
     * Show a deployment operation at tenant scope.
     *
     * Syntax:
     * ```
     * az deployment operation tenant show --name
     *                                     --operation-ids
     *                                     [--query-examples]
     *                                     [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} operationIds A list of operation ids to show.
     */
    static show(name: string, operationIds: string): az_deployment_operation_tenant_show_command_builder;
}
/** Manage deployment operations at subscription scope. */
export declare class az_deployment_operation {
    /**
     * List deployment operations at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment operation list --name
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static list(name: string): az_deployment_operation_list_command_builder;
    /**
     * Show a deployment operation at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment operation show --name
     *                              --operation-ids
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} operationIds A list of operation ids to show.
     */
    static show(name: string, operationIds: string): az_deployment_operation_show_command_builder;
}
/** Manage Azure Resource Manager template deployment at subscription scope. */
export declare class az_deployment_sub {
    /**
     * Cancel a deployment at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment sub cancel --name
     *                          [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static cancel(name: string): az_deployment_sub_cancel_command_builder;
    /**
     * Start a deployment at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment sub create --location
     *                          [--confirm-with-what-if]
     *                          [--handle-extended-json-format]
     *                          [--name]
     *                          [--no-prompt {false, true}]
     *                          [--no-wait]
     *                          [--parameters]
     *                          [--subscription]
     *                          [--template-file]
     *                          [--template-uri]
     *                          [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
     *                          [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     */
    static create(location: string): az_deployment_sub_create_command_builder;
    /**
     * Delete a deployment at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment sub delete --name
     *                          [--no-wait]
     *                          [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static delete(name: string): az_deployment_sub_delete_command_builder;
    /**
     * Export the template used for a deployment.
     *
     * Syntax:
     * ```
     * az deployment sub export --name
     *                          [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static export(name: string): az_deployment_sub_export_command_builder;
    /**
     * List deployments at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment sub list [--filter]
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     */
    static list(): az_deployment_sub_list_command_builder;
    /**
     * Show a deployment at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment sub show --name
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static show(name: string): az_deployment_sub_show_command_builder;
    /**
     * Validate whether a template is valid at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment sub validate --location
     *                            [--handle-extended-json-format]
     *                            [--name]
     *                            [--no-prompt {false, true}]
     *                            [--parameters]
     *                            [--subscription]
     *                            [--template-file]
     *                            [--template-uri]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     */
    static validate(location: string): az_deployment_sub_validate_command_builder;
    /**
     * Place the CLI in a waiting state until a deployment condition is met.
     *
     * Syntax:
     * ```
     * az deployment sub wait --name
     *                        [--created]
     *                        [--custom]
     *                        [--deleted]
     *                        [--exists]
     *                        [--interval]
     *                        [--subscription]
     *                        [--timeout]
     *                        [--updated]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static wait(name: string): az_deployment_sub_wait_command_builder;
    /**
     * Execute a deployment What-If operation at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment sub what-if --location
     *                           [--exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
     *                           [--name]
     *                           [--no-pretty-print]
     *                           [--no-prompt {false, true}]
     *                           [--parameters]
     *                           [--result-format {FullResourcePayloads, ResourceIdOnly}]
     *                           [--subscription]
     *                           [--template-file]
     *                           [--template-uri]
     * ```
     *
     * @param {string} location The location to store the deployment What-If operation metadata.
     */
    static what_if(location: string): az_deployment_sub_what_if_command_builder;
}
/** Manage Azure Resource Manager template deployment at tenant scope. */
export declare class az_deployment_tenant {
    /**
     * Cancel a deployment at tenant scope.
     *
     * Syntax:
     * ```
     * az deployment tenant cancel --name
     *                             [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static cancel(name: string): az_deployment_tenant_cancel_command_builder;
    /**
     * Start a deployment at tenant scope.
     *
     * Syntax:
     * ```
     * az deployment tenant create --location
     *                             [--confirm-with-what-if]
     *                             [--handle-extended-json-format]
     *                             [--name]
     *                             [--no-prompt {false, true}]
     *                             [--no-wait]
     *                             [--parameters]
     *                             [--subscription]
     *                             [--template-file]
     *                             [--template-uri]
     *                             [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
     *                             [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     */
    static create(location: string): az_deployment_tenant_create_command_builder;
    /**
     * Delete a deployment at tenant scope.
     *
     * Syntax:
     * ```
     * az deployment tenant delete --name
     *                             [--no-wait]
     *                             [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static delete(name: string): az_deployment_tenant_delete_command_builder;
    /**
     * Export the template used for a deployment.
     *
     * Syntax:
     * ```
     * az deployment tenant export --name
     *                             [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static export(name: string): az_deployment_tenant_export_command_builder;
    /**
     * List deployments at tenant scope.
     *
     * Syntax:
     * ```
     * az deployment tenant list [--filter]
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     */
    static list(): az_deployment_tenant_list_command_builder;
    /**
     * Show a deployment at tenant scope.
     *
     * Syntax:
     * ```
     * az deployment tenant show --name
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static show(name: string): az_deployment_tenant_show_command_builder;
    /**
     * Validate whether a template is valid at tenant scope.
     *
     * Syntax:
     * ```
     * az deployment tenant validate --location
     *                               [--handle-extended-json-format]
     *                               [--name]
     *                               [--no-prompt {false, true}]
     *                               [--parameters]
     *                               [--subscription]
     *                               [--template-file]
     *                               [--template-uri]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     */
    static validate(location: string): az_deployment_tenant_validate_command_builder;
    /**
     * Place the CLI in a waiting state until a deployment condition is met.
     *
     * Syntax:
     * ```
     * az deployment tenant wait --name
     *                           [--created]
     *                           [--custom]
     *                           [--deleted]
     *                           [--exists]
     *                           [--interval]
     *                           [--subscription]
     *                           [--timeout]
     *                           [--updated]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static wait(name: string): az_deployment_tenant_wait_command_builder;
    /**
     * Execute a deployment What-If operation at tenant scope.
     *
     * Syntax:
     * ```
     * az deployment tenant what-if --location
     *                              [--exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
     *                              [--name]
     *                              [--no-pretty-print]
     *                              [--no-prompt {false, true}]
     *                              [--parameters]
     *                              [--result-format {FullResourcePayloads, ResourceIdOnly}]
     *                              [--subscription]
     *                              [--template-file]
     *                              [--template-uri]
     * ```
     *
     * @param {string} location The location to store the deployment What-If operation metadata.
     */
    static what_if(location: string): az_deployment_tenant_what_if_command_builder;
}
/** Manage deployment scripts at subscription or resource group scope. */
export declare class az_deployment_scripts {
    /**
     * Delete a deployment script.
     *
     * Syntax:
     * ```
     * az deployment-scripts delete --name
     *                              --resource-group
     *                              [--subscription]
     *                              [--yes]
     * ```
     *
     * @param {string} name Deployment script resource name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(name: string, resourceGroup: string): az_deployment_scripts_delete_command_builder;
    /**
     * List all deployment scripts.
     *
     * Syntax:
     * ```
     * az deployment-scripts list [--query-examples]
     *                            [--resource-group]
     *                            [--subscription]
     * ```
     */
    static list(): az_deployment_scripts_list_command_builder;
    /**
     * Retrieve a deployment script.
     *
     * Syntax:
     * ```
     * az deployment-scripts show --name
     *                            --resource-group
     *                            [--query-examples]
     *                            [--subscription]
     * ```
     *
     * @param {string} name Deployment script resource name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static show(name: string, resourceGroup: string): az_deployment_scripts_show_command_builder;
    /**
     * Show deployment script logs.
     *
     * Syntax:
     * ```
     * az deployment-scripts show-log --name
     *                                --resource-group
     *                                [--subscription]
     * ```
     *
     * @param {string} name Deployment script resource name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static show_log(name: string, resourceGroup: string): az_deployment_scripts_show_log_command_builder;
}
/** Manage Azure Resource Manager template deployment at subscription scope. */
export declare class az_deployment {
    /**
     * Cancel a deployment at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment cancel --name
     *                      [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static cancel(name: string): az_deployment_cancel_command_builder;
    /**
     * Start a deployment at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment create --location
     *                      [--confirm-with-what-if]
     *                      [--handle-extended-json-format]
     *                      [--name]
     *                      [--no-prompt {false, true}]
     *                      [--no-wait]
     *                      [--parameters]
     *                      [--subscription]
     *                      [--template-file]
     *                      [--template-uri]
     *                      [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
     *                      [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     */
    static create(location: string): az_deployment_create_command_builder;
    /**
     * Delete a deployment at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment delete --name
     *                      [--no-wait]
     *                      [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static delete(name: string): az_deployment_delete_command_builder;
    /**
     * Export the template used for a deployment.
     *
     * Syntax:
     * ```
     * az deployment export --name
     *                      [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static export(name: string): az_deployment_export_command_builder;
    /**
     * List deployments at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment list [--filter]
     *                    [--query-examples]
     *                    [--subscription]
     * ```
     */
    static list(): az_deployment_list_command_builder;
    /**
     * Show a deployment at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment show --name
     *                    [--query-examples]
     *                    [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static show(name: string): az_deployment_show_command_builder;
    /**
     * Validate whether a template is valid at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment validate --location
     *                        [--handle-extended-json-format]
     *                        [--name]
     *                        [--no-prompt {false, true}]
     *                        [--parameters]
     *                        [--subscription]
     *                        [--template-file]
     *                        [--template-uri]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     */
    static validate(location: string): az_deployment_validate_command_builder;
    /**
     * Place the CLI in a waiting state until a deployment condition is met.
     *
     * Syntax:
     * ```
     * az deployment wait --name
     *                    [--created]
     *                    [--custom]
     *                    [--deleted]
     *                    [--exists]
     *                    [--interval]
     *                    [--subscription]
     *                    [--timeout]
     *                    [--updated]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static wait(name: string): az_deployment_wait_command_builder;
}
/**
 * Cancel a deployment at resource group.
 *
 * Syntax:
 * ```
 * az deployment group cancel --name
 *                            --resource-group
 *                            [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_deployment_group_cancel_command_builder extends CommandBuilder<az_deployment_group_cancel_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The deployment name. */
    name(value: string): az_deployment_group_cancel_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deployment_group_cancel_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_group_cancel_command_builder;
}
/**
 * Start a deployment at resource group.
 *
 * Syntax:
 * ```
 * az deployment group create --resource-group
 *                            [--aux-subs]
 *                            [--aux-tenants]
 *                            [--confirm-with-what-if]
 *                            [--handle-extended-json-format]
 *                            [--mode {Complete, Incremental}]
 *                            [--name]
 *                            [--no-prompt {false, true}]
 *                            [--no-wait]
 *                            [--parameters]
 *                            [--rollback-on-error]
 *                            [--subscription]
 *                            [--template-file]
 *                            [--template-uri]
 *                            [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
 *                            [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
 * ```
 *
 * @param {string} resourceGroup The resource group to create deployment at.
 */
declare class az_deployment_group_create_command_builder extends CommandBuilder<az_deployment_group_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string);
    /** The resource group to create deployment at. */
    resourceGroup(value: string): az_deployment_group_create_command_builder;
    /** Auxiliary subscriptions which will be used during deployment across tenants. */
    auxSubs(value: string): az_deployment_group_create_command_builder;
    /** Auxiliary tenants which will be used during deployment across tenants. */
    auxTenants(value: string): az_deployment_group_create_command_builder;
    /** Instruct the command to run deployment What-If before executing the deployment. It then prompts you to acknowledge resource changes before it continues. */
    confirmWithWhatIf(value: string): az_deployment_group_create_command_builder;
    /** Support to handle extended template content including multiline and comments in deployment. */
    handleExtendedJsonFormat(value: string): az_deployment_group_create_command_builder;
    /** The deployment mode. */
    mode(value: 'Complete' | 'Incremental'): az_deployment_group_create_command_builder;
    /** The deployment name. */
    name(value: string): az_deployment_group_create_command_builder;
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_group_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_deployment_group_create_command_builder;
    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_group_create_command_builder;
    /** The name of a deployment to roll back to on error, or use as a flag to roll back to the last successful deployment. */
    rollbackOnError(value: string): az_deployment_group_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_group_create_command_builder;
    /** The path to the template file. */
    templateFile(value: string): az_deployment_group_create_command_builder;
    /** The URI to the template file. */
    templateUri(value: string): az_deployment_group_create_command_builder;
    /** Space-separated list of resource change types to be excluded from What-If results. Applicable when --confirm-with-what-if is set. */
    whatIfExcludeChangeTypes(value: 'Create' | 'Delete' | 'Deploy' | 'Ignore' | 'Modify' | 'NoChange'): az_deployment_group_create_command_builder;
    /** The format of What-If results. Applicable when `--confirm-with-what-if` is set. */
    whatIfResultFormat(value: 'FullResourcePayloads' | 'ResourceIdOnly'): az_deployment_group_create_command_builder;
}
/**
 * Delete a deployment at resource group.
 *
 * Syntax:
 * ```
 * az deployment group delete --name
 *                            --resource-group
 *                            [--no-wait]
 *                            [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_deployment_group_delete_command_builder extends CommandBuilder<az_deployment_group_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The deployment name. */
    name(value: string): az_deployment_group_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deployment_group_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_deployment_group_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_group_delete_command_builder;
}
/**
 * Export the template used for a deployment.
 *
 * Syntax:
 * ```
 * az deployment group export --name
 *                            --resource-group
 *                            [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_deployment_group_export_command_builder extends CommandBuilder<az_deployment_group_export_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The deployment name. */
    name(value: string): az_deployment_group_export_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deployment_group_export_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_group_export_command_builder;
}
/**
 * List deployments at resource group.
 *
 * Syntax:
 * ```
 * az deployment group list --resource-group
 *                          [--filter]
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_deployment_group_list_command_builder extends CommandBuilder<az_deployment_group_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deployment_group_list_command_builder;
    /** Filter expression using OData notation. You can use --filter "provisioningState eq '{state}'" to filter provisioningState. To get more information, please visit <a href="https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters">https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters</a>. */
    filter(value: string): az_deployment_group_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_group_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_group_list_command_builder;
}
/**
 * Show a deployment at resource group.
 *
 * Syntax:
 * ```
 * az deployment group show --name
 *                          --resource-group
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_deployment_group_show_command_builder extends CommandBuilder<az_deployment_group_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The deployment name. */
    name(value: string): az_deployment_group_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deployment_group_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_group_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_group_show_command_builder;
}
/**
 * Validate whether a template is valid at resource group.
 *
 * Syntax:
 * ```
 * az deployment group validate --resource-group
 *                              [--handle-extended-json-format]
 *                              [--mode {Complete, Incremental}]
 *                              [--name]
 *                              [--no-prompt {false, true}]
 *                              [--parameters]
 *                              [--rollback-on-error]
 *                              [--subscription]
 *                              [--template-file]
 *                              [--template-uri]
 * ```
 *
 * @param {string} resourceGroup The resource group to create deployment at.
 */
declare class az_deployment_group_validate_command_builder extends CommandBuilder<az_deployment_group_validate_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string);
    /** The resource group to create deployment at. */
    resourceGroup(value: string): az_deployment_group_validate_command_builder;
    /** Support to handle extended template content including multiline and comments in deployment. */
    handleExtendedJsonFormat(value: string): az_deployment_group_validate_command_builder;
    /** The deployment mode. */
    mode(value: 'Complete' | 'Incremental'): az_deployment_group_validate_command_builder;
    /** The deployment name. */
    name(value: string): az_deployment_group_validate_command_builder;
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_group_validate_command_builder;
    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_group_validate_command_builder;
    /** The name of a deployment to roll back to on error, or use as a flag to roll back to the last successful deployment. */
    rollbackOnError(value: string): az_deployment_group_validate_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_group_validate_command_builder;
    /** The path to the template file. */
    templateFile(value: string): az_deployment_group_validate_command_builder;
    /** The URI to the template file. */
    templateUri(value: string): az_deployment_group_validate_command_builder;
}
/**
 * Place the CLI in a waiting state until a deployment condition is met.
 *
 * Syntax:
 * ```
 * az deployment group wait --name
 *                          --resource-group
 *                          [--created]
 *                          [--custom]
 *                          [--deleted]
 *                          [--exists]
 *                          [--interval]
 *                          [--subscription]
 *                          [--timeout]
 *                          [--updated]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_deployment_group_wait_command_builder extends CommandBuilder<az_deployment_group_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The deployment name. */
    name(value: string): az_deployment_group_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deployment_group_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_deployment_group_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_deployment_group_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_deployment_group_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_deployment_group_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_deployment_group_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_group_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_deployment_group_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_deployment_group_wait_command_builder;
}
/**
 * Execute a deployment What-If operation at resource group scope.
 *
 * Syntax:
 * ```
 * az deployment group what-if --resource-group
 *                             [--aux-tenants]
 *                             [--exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
 *                             [--mode {Complete, Incremental}]
 *                             [--name]
 *                             [--no-pretty-print]
 *                             [--no-prompt {false, true}]
 *                             [--parameters]
 *                             [--result-format {FullResourcePayloads, ResourceIdOnly}]
 *                             [--subscription]
 *                             [--template-file]
 *                             [--template-uri]
 * ```
 *
 * @param {string} resourceGroup The resource group to execute deployment What-If operation at.
 */
declare class az_deployment_group_what_if_command_builder extends CommandBuilder<az_deployment_group_what_if_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string);
    /** The resource group to execute deployment What-If operation at. */
    resourceGroup(value: string): az_deployment_group_what_if_command_builder;
    /** Auxiliary tenants which will be used during deployment across tenants. */
    auxTenants(value: string): az_deployment_group_what_if_command_builder;
    /** Space-separated list of resource change types to be excluded from What-If results. */
    excludeChangeTypes(value: 'Create' | 'Delete' | 'Deploy' | 'Ignore' | 'Modify' | 'NoChange'): az_deployment_group_what_if_command_builder;
    /** The deployment mode. */
    mode(value: 'Complete' | 'Incremental'): az_deployment_group_what_if_command_builder;
    /** The deployment name. */
    name(value: string): az_deployment_group_what_if_command_builder;
    /** Disable pretty-print for What-If results. When set, the output format type will be used. */
    noPrettyPrint(value: string): az_deployment_group_what_if_command_builder;
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_group_what_if_command_builder;
    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_group_what_if_command_builder;
    /** The format of What-If results. */
    resultFormat(value: 'FullResourcePayloads' | 'ResourceIdOnly'): az_deployment_group_what_if_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_group_what_if_command_builder;
    /** The path to the template file. */
    templateFile(value: string): az_deployment_group_what_if_command_builder;
    /** The URI to the template file. */
    templateUri(value: string): az_deployment_group_what_if_command_builder;
}
/**
 * Cancel a deployment at management group.
 *
 * Syntax:
 * ```
 * az deployment mg cancel --management-group-id
 *                         --name
 *                         [--subscription]
 * ```
 *
 * @param {string} managementGroupId The management group id.
 * @param {string} name The deployment name.
 */
declare class az_deployment_mg_cancel_command_builder extends CommandBuilder<az_deployment_mg_cancel_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, managementGroupId: string, name: string);
    /** The management group id. */
    managementGroupId(value: string): az_deployment_mg_cancel_command_builder;
    /** The deployment name. */
    name(value: string): az_deployment_mg_cancel_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_mg_cancel_command_builder;
}
/**
 * Start a deployment at management group.
 *
 * Syntax:
 * ```
 * az deployment mg create --location
 *                         --management-group-id
 *                         [--confirm-with-what-if]
 *                         [--handle-extended-json-format]
 *                         [--name]
 *                         [--no-prompt {false, true}]
 *                         [--no-wait]
 *                         [--parameters]
 *                         [--subscription]
 *                         [--template-file]
 *                         [--template-uri]
 *                         [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
 *                         [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 * @param {string} managementGroupId The management group id to create deployment at.
 */
declare class az_deployment_mg_create_command_builder extends CommandBuilder<az_deployment_mg_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string, managementGroupId: string);
    /** The location to store the deployment metadata. */
    location(value: string): az_deployment_mg_create_command_builder;
    /** The management group id to create deployment at. */
    managementGroupId(value: string): az_deployment_mg_create_command_builder;
    /** Instruct the command to run deployment What-If before executing the deployment. It then prompts you to acknowledge resource changes before it continues. */
    confirmWithWhatIf(value: string): az_deployment_mg_create_command_builder;
    /** Support to handle extended template content including multiline and comments in deployment. */
    handleExtendedJsonFormat(value: string): az_deployment_mg_create_command_builder;
    /** The deployment name. */
    name(value: string): az_deployment_mg_create_command_builder;
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_mg_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_deployment_mg_create_command_builder;
    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_mg_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_mg_create_command_builder;
    /** The path to the template file. */
    templateFile(value: string): az_deployment_mg_create_command_builder;
    /** The URI to the template file. */
    templateUri(value: string): az_deployment_mg_create_command_builder;
    /** Space-separated list of resource change types to be excluded from What-If results. Applicable when --confirm-with-what-if is set. */
    whatIfExcludeChangeTypes(value: 'Create' | 'Delete' | 'Deploy' | 'Ignore' | 'Modify' | 'NoChange'): az_deployment_mg_create_command_builder;
    /** The format of What-If results. Applicable when `--confirm-with-what-if` is set. */
    whatIfResultFormat(value: 'FullResourcePayloads' | 'ResourceIdOnly'): az_deployment_mg_create_command_builder;
}
/**
 * Delete a deployment at management group.
 *
 * Syntax:
 * ```
 * az deployment mg delete --management-group-id
 *                         --name
 *                         [--no-wait]
 *                         [--subscription]
 * ```
 *
 * @param {string} managementGroupId The management group id.
 * @param {string} name The deployment name.
 */
declare class az_deployment_mg_delete_command_builder extends CommandBuilder<az_deployment_mg_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, managementGroupId: string, name: string);
    /** The management group id. */
    managementGroupId(value: string): az_deployment_mg_delete_command_builder;
    /** The deployment name. */
    name(value: string): az_deployment_mg_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_deployment_mg_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_mg_delete_command_builder;
}
/**
 * Export the template used for a deployment.
 *
 * Syntax:
 * ```
 * az deployment mg export --management-group-id
 *                         --name
 *                         [--subscription]
 * ```
 *
 * @param {string} managementGroupId The management group id.
 * @param {string} name The deployment name.
 */
declare class az_deployment_mg_export_command_builder extends CommandBuilder<az_deployment_mg_export_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, managementGroupId: string, name: string);
    /** The management group id. */
    managementGroupId(value: string): az_deployment_mg_export_command_builder;
    /** The deployment name. */
    name(value: string): az_deployment_mg_export_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_mg_export_command_builder;
}
/**
 * List deployments at management group.
 *
 * Syntax:
 * ```
 * az deployment mg list --management-group-id
 *                       [--filter]
 *                       [--query-examples]
 *                       [--subscription]
 * ```
 *
 * @param {string} managementGroupId The management group id.
 */
declare class az_deployment_mg_list_command_builder extends CommandBuilder<az_deployment_mg_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, managementGroupId: string);
    /** The management group id. */
    managementGroupId(value: string): az_deployment_mg_list_command_builder;
    /** Filter expression using OData notation. You can use --filter "provisioningState eq '{state}'" to filter provisioningState. To get more information, please visit <a href="https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters">https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters</a>. */
    filter(value: string): az_deployment_mg_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_mg_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_mg_list_command_builder;
}
/**
 * Show a deployment at management group.
 *
 * Syntax:
 * ```
 * az deployment mg show --management-group-id
 *                       --name
 *                       [--query-examples]
 *                       [--subscription]
 * ```
 *
 * @param {string} managementGroupId The management group id.
 * @param {string} name The deployment name.
 */
declare class az_deployment_mg_show_command_builder extends CommandBuilder<az_deployment_mg_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, managementGroupId: string, name: string);
    /** The management group id. */
    managementGroupId(value: string): az_deployment_mg_show_command_builder;
    /** The deployment name. */
    name(value: string): az_deployment_mg_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_mg_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_mg_show_command_builder;
}
/**
 * Validate whether a template is valid at management group.
 *
 * Syntax:
 * ```
 * az deployment mg validate --location
 *                           --management-group-id
 *                           [--handle-extended-json-format]
 *                           [--name]
 *                           [--no-prompt {false, true}]
 *                           [--parameters]
 *                           [--subscription]
 *                           [--template-file]
 *                           [--template-uri]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 * @param {string} managementGroupId The management group id to create deployment at.
 */
declare class az_deployment_mg_validate_command_builder extends CommandBuilder<az_deployment_mg_validate_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string, managementGroupId: string);
    /** The location to store the deployment metadata. */
    location(value: string): az_deployment_mg_validate_command_builder;
    /** The management group id to create deployment at. */
    managementGroupId(value: string): az_deployment_mg_validate_command_builder;
    /** Support to handle extended template content including multiline and comments in deployment. */
    handleExtendedJsonFormat(value: string): az_deployment_mg_validate_command_builder;
    /** The deployment name. */
    name(value: string): az_deployment_mg_validate_command_builder;
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_mg_validate_command_builder;
    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_mg_validate_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_mg_validate_command_builder;
    /** The path to the template file. */
    templateFile(value: string): az_deployment_mg_validate_command_builder;
    /** The URI to the template file. */
    templateUri(value: string): az_deployment_mg_validate_command_builder;
}
/**
 * Place the CLI in a waiting state until a deployment condition is met.
 *
 * Syntax:
 * ```
 * az deployment mg wait --management-group-id
 *                       --name
 *                       [--created]
 *                       [--custom]
 *                       [--deleted]
 *                       [--exists]
 *                       [--interval]
 *                       [--subscription]
 *                       [--timeout]
 *                       [--updated]
 * ```
 *
 * @param {string} managementGroupId The management group id.
 * @param {string} name The deployment name.
 */
declare class az_deployment_mg_wait_command_builder extends CommandBuilder<az_deployment_mg_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, managementGroupId: string, name: string);
    /** The management group id. */
    managementGroupId(value: string): az_deployment_mg_wait_command_builder;
    /** The deployment name. */
    name(value: string): az_deployment_mg_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_deployment_mg_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_deployment_mg_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_deployment_mg_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_deployment_mg_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_deployment_mg_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_mg_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_deployment_mg_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_deployment_mg_wait_command_builder;
}
/**
 * Execute a deployment What-If operation at management group scope.
 *
 * Syntax:
 * ```
 * az deployment mg what-if --location
 *                          --management-group-id
 *                          [--exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
 *                          [--name]
 *                          [--no-pretty-print]
 *                          [--no-prompt {false, true}]
 *                          [--parameters]
 *                          [--result-format {FullResourcePayloads, ResourceIdOnly}]
 *                          [--subscription]
 *                          [--template-file]
 *                          [--template-uri]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 * @param {string} managementGroupId The management group id to create deployment at.
 */
declare class az_deployment_mg_what_if_command_builder extends CommandBuilder<az_deployment_mg_what_if_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string, managementGroupId: string);
    /** The location to store the deployment metadata. */
    location(value: string): az_deployment_mg_what_if_command_builder;
    /** The management group id to create deployment at. */
    managementGroupId(value: string): az_deployment_mg_what_if_command_builder;
    /** Space-separated list of resource change types to be excluded from What-If results. */
    excludeChangeTypes(value: 'Create' | 'Delete' | 'Deploy' | 'Ignore' | 'Modify' | 'NoChange'): az_deployment_mg_what_if_command_builder;
    /** The deployment name. */
    name(value: string): az_deployment_mg_what_if_command_builder;
    /** Disable pretty-print for What-If results. When set, the output format type will be used. */
    noPrettyPrint(value: string): az_deployment_mg_what_if_command_builder;
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_mg_what_if_command_builder;
    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_mg_what_if_command_builder;
    /** The format of What-If results. */
    resultFormat(value: 'FullResourcePayloads' | 'ResourceIdOnly'): az_deployment_mg_what_if_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_mg_what_if_command_builder;
    /** The path to the template file. */
    templateFile(value: string): az_deployment_mg_what_if_command_builder;
    /** The URI to the template file. */
    templateUri(value: string): az_deployment_mg_what_if_command_builder;
}
/**
 * List deployment operations at resource group.
 *
 * Syntax:
 * ```
 * az deployment operation group list --name
 *                                    --resource-group
 *                                    [--query-examples]
 *                                    [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_deployment_operation_group_list_command_builder extends CommandBuilder<az_deployment_operation_group_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The deployment name. */
    name(value: string): az_deployment_operation_group_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deployment_operation_group_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_operation_group_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_operation_group_list_command_builder;
}
/**
 * Show a deployment operation at resource group.
 *
 * Syntax:
 * ```
 * az deployment operation group show --name
 *                                    --operation-ids
 *                                    --resource-group
 *                                    [--query-examples]
 *                                    [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} operationIds A list of operation ids to show.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_deployment_operation_group_show_command_builder extends CommandBuilder<az_deployment_operation_group_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, operationIds: string, resourceGroup: string);
    /** The deployment name. */
    name(value: string): az_deployment_operation_group_show_command_builder;
    /** A list of operation ids to show. */
    operationIds(value: string): az_deployment_operation_group_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deployment_operation_group_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_operation_group_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_operation_group_show_command_builder;
}
/**
 * List deployment operations at management group.
 *
 * Syntax:
 * ```
 * az deployment operation mg list --management-group-id
 *                                 --name
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 *
 * @param {string} managementGroupId The management group id.
 * @param {string} name The deployment name.
 */
declare class az_deployment_operation_mg_list_command_builder extends CommandBuilder<az_deployment_operation_mg_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, managementGroupId: string, name: string);
    /** The management group id. */
    managementGroupId(value: string): az_deployment_operation_mg_list_command_builder;
    /** The deployment name. */
    name(value: string): az_deployment_operation_mg_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_operation_mg_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_operation_mg_list_command_builder;
}
/**
 * Show a deployment operation at management group.
 *
 * Syntax:
 * ```
 * az deployment operation mg show --management-group-id
 *                                 --name
 *                                 --operation-ids
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 *
 * @param {string} managementGroupId The management group id.
 * @param {string} name The deployment name.
 * @param {string} operationIds A list of operation ids to show.
 */
declare class az_deployment_operation_mg_show_command_builder extends CommandBuilder<az_deployment_operation_mg_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, managementGroupId: string, name: string, operationIds: string);
    /** The management group id. */
    managementGroupId(value: string): az_deployment_operation_mg_show_command_builder;
    /** The deployment name. */
    name(value: string): az_deployment_operation_mg_show_command_builder;
    /** A list of operation ids to show. */
    operationIds(value: string): az_deployment_operation_mg_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_operation_mg_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_operation_mg_show_command_builder;
}
/**
 * List deployment operations at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment operation sub list --name
 *                                  [--query-examples]
 *                                  [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
declare class az_deployment_operation_sub_list_command_builder extends CommandBuilder<az_deployment_operation_sub_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The deployment name. */
    name(value: string): az_deployment_operation_sub_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_operation_sub_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_operation_sub_list_command_builder;
}
/**
 * Show a deployment operation at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment operation sub show --name
 *                                  --operation-ids
 *                                  [--query-examples]
 *                                  [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} operationIds A list of operation ids to show.
 */
declare class az_deployment_operation_sub_show_command_builder extends CommandBuilder<az_deployment_operation_sub_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, operationIds: string);
    /** The deployment name. */
    name(value: string): az_deployment_operation_sub_show_command_builder;
    /** A list of operation ids to show. */
    operationIds(value: string): az_deployment_operation_sub_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_operation_sub_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_operation_sub_show_command_builder;
}
/**
 * List deployment operations at tenant scope.
 *
 * Syntax:
 * ```
 * az deployment operation tenant list --name
 *                                     [--query-examples]
 *                                     [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
declare class az_deployment_operation_tenant_list_command_builder extends CommandBuilder<az_deployment_operation_tenant_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The deployment name. */
    name(value: string): az_deployment_operation_tenant_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_operation_tenant_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_operation_tenant_list_command_builder;
}
/**
 * Show a deployment operation at tenant scope.
 *
 * Syntax:
 * ```
 * az deployment operation tenant show --name
 *                                     --operation-ids
 *                                     [--query-examples]
 *                                     [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} operationIds A list of operation ids to show.
 */
declare class az_deployment_operation_tenant_show_command_builder extends CommandBuilder<az_deployment_operation_tenant_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, operationIds: string);
    /** The deployment name. */
    name(value: string): az_deployment_operation_tenant_show_command_builder;
    /** A list of operation ids to show. */
    operationIds(value: string): az_deployment_operation_tenant_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_operation_tenant_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_operation_tenant_show_command_builder;
}
/**
 * List deployment operations at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment operation list --name
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
declare class az_deployment_operation_list_command_builder extends CommandBuilder<az_deployment_operation_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The deployment name. */
    name(value: string): az_deployment_operation_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_operation_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_operation_list_command_builder;
}
/**
 * Show a deployment operation at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment operation show --name
 *                              --operation-ids
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} operationIds A list of operation ids to show.
 */
declare class az_deployment_operation_show_command_builder extends CommandBuilder<az_deployment_operation_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, operationIds: string);
    /** The deployment name. */
    name(value: string): az_deployment_operation_show_command_builder;
    /** A list of operation ids to show. */
    operationIds(value: string): az_deployment_operation_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_operation_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_operation_show_command_builder;
}
/**
 * Cancel a deployment at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment sub cancel --name
 *                          [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
declare class az_deployment_sub_cancel_command_builder extends CommandBuilder<az_deployment_sub_cancel_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The deployment name. */
    name(value: string): az_deployment_sub_cancel_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_sub_cancel_command_builder;
}
/**
 * Start a deployment at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment sub create --location
 *                          [--confirm-with-what-if]
 *                          [--handle-extended-json-format]
 *                          [--name]
 *                          [--no-prompt {false, true}]
 *                          [--no-wait]
 *                          [--parameters]
 *                          [--subscription]
 *                          [--template-file]
 *                          [--template-uri]
 *                          [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
 *                          [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 */
declare class az_deployment_sub_create_command_builder extends CommandBuilder<az_deployment_sub_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string);
    /** The location to store the deployment metadata. */
    location(value: string): az_deployment_sub_create_command_builder;
    /** Instruct the command to run deployment What-If before executing the deployment. It then prompts you to acknowledge resource changes before it continues. */
    confirmWithWhatIf(value: string): az_deployment_sub_create_command_builder;
    /** Support to handle extended template content including multiline and comments in deployment. */
    handleExtendedJsonFormat(value: string): az_deployment_sub_create_command_builder;
    /** The deployment name. */
    name(value: string): az_deployment_sub_create_command_builder;
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_sub_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_deployment_sub_create_command_builder;
    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_sub_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_sub_create_command_builder;
    /** The path to the template file. */
    templateFile(value: string): az_deployment_sub_create_command_builder;
    /** The URI to the template file. */
    templateUri(value: string): az_deployment_sub_create_command_builder;
    /** Space-separated list of resource change types to be excluded from What-If results. Applicable when --confirm-with-what-if is set. */
    whatIfExcludeChangeTypes(value: 'Create' | 'Delete' | 'Deploy' | 'Ignore' | 'Modify' | 'NoChange'): az_deployment_sub_create_command_builder;
    /** The format of What-If results. Applicable when `--confirm-with-what-if` is set. */
    whatIfResultFormat(value: 'FullResourcePayloads' | 'ResourceIdOnly'): az_deployment_sub_create_command_builder;
}
/**
 * Delete a deployment at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment sub delete --name
 *                          [--no-wait]
 *                          [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
declare class az_deployment_sub_delete_command_builder extends CommandBuilder<az_deployment_sub_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The deployment name. */
    name(value: string): az_deployment_sub_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_deployment_sub_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_sub_delete_command_builder;
}
/**
 * Export the template used for a deployment.
 *
 * Syntax:
 * ```
 * az deployment sub export --name
 *                          [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
declare class az_deployment_sub_export_command_builder extends CommandBuilder<az_deployment_sub_export_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The deployment name. */
    name(value: string): az_deployment_sub_export_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_sub_export_command_builder;
}
/**
 * List deployments at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment sub list [--filter]
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 */
declare class az_deployment_sub_list_command_builder extends CommandBuilder<az_deployment_sub_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Filter expression using OData notation. You can use --filter "provisioningState eq '{state}'" to filter provisioningState. To get more information, please visit <a href="https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters">https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters</a>. */
    filter(value: string): az_deployment_sub_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_sub_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_sub_list_command_builder;
}
/**
 * Show a deployment at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment sub show --name
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
declare class az_deployment_sub_show_command_builder extends CommandBuilder<az_deployment_sub_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The deployment name. */
    name(value: string): az_deployment_sub_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_sub_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_sub_show_command_builder;
}
/**
 * Validate whether a template is valid at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment sub validate --location
 *                            [--handle-extended-json-format]
 *                            [--name]
 *                            [--no-prompt {false, true}]
 *                            [--parameters]
 *                            [--subscription]
 *                            [--template-file]
 *                            [--template-uri]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 */
declare class az_deployment_sub_validate_command_builder extends CommandBuilder<az_deployment_sub_validate_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string);
    /** The location to store the deployment metadata. */
    location(value: string): az_deployment_sub_validate_command_builder;
    /** Support to handle extended template content including multiline and comments in deployment. */
    handleExtendedJsonFormat(value: string): az_deployment_sub_validate_command_builder;
    /** The deployment name. */
    name(value: string): az_deployment_sub_validate_command_builder;
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_sub_validate_command_builder;
    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_sub_validate_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_sub_validate_command_builder;
    /** The path to the template file. */
    templateFile(value: string): az_deployment_sub_validate_command_builder;
    /** The URI to the template file. */
    templateUri(value: string): az_deployment_sub_validate_command_builder;
}
/**
 * Place the CLI in a waiting state until a deployment condition is met.
 *
 * Syntax:
 * ```
 * az deployment sub wait --name
 *                        [--created]
 *                        [--custom]
 *                        [--deleted]
 *                        [--exists]
 *                        [--interval]
 *                        [--subscription]
 *                        [--timeout]
 *                        [--updated]
 * ```
 *
 * @param {string} name The deployment name.
 */
declare class az_deployment_sub_wait_command_builder extends CommandBuilder<az_deployment_sub_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The deployment name. */
    name(value: string): az_deployment_sub_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_deployment_sub_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_deployment_sub_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_deployment_sub_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_deployment_sub_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_deployment_sub_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_sub_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_deployment_sub_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_deployment_sub_wait_command_builder;
}
/**
 * Execute a deployment What-If operation at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment sub what-if --location
 *                           [--exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
 *                           [--name]
 *                           [--no-pretty-print]
 *                           [--no-prompt {false, true}]
 *                           [--parameters]
 *                           [--result-format {FullResourcePayloads, ResourceIdOnly}]
 *                           [--subscription]
 *                           [--template-file]
 *                           [--template-uri]
 * ```
 *
 * @param {string} location The location to store the deployment What-If operation metadata.
 */
declare class az_deployment_sub_what_if_command_builder extends CommandBuilder<az_deployment_sub_what_if_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string);
    /** The location to store the deployment What-If operation metadata. */
    location(value: string): az_deployment_sub_what_if_command_builder;
    /** Space-separated list of resource change types to be excluded from What-If results. */
    excludeChangeTypes(value: 'Create' | 'Delete' | 'Deploy' | 'Ignore' | 'Modify' | 'NoChange'): az_deployment_sub_what_if_command_builder;
    /** The deployment name. */
    name(value: string): az_deployment_sub_what_if_command_builder;
    /** Disable pretty-print for What-If results. When set, the output format type will be used. */
    noPrettyPrint(value: string): az_deployment_sub_what_if_command_builder;
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_sub_what_if_command_builder;
    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_sub_what_if_command_builder;
    /** The format of What-If results. */
    resultFormat(value: 'FullResourcePayloads' | 'ResourceIdOnly'): az_deployment_sub_what_if_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_sub_what_if_command_builder;
    /** The path to the template file. */
    templateFile(value: string): az_deployment_sub_what_if_command_builder;
    /** The URI to the template file. */
    templateUri(value: string): az_deployment_sub_what_if_command_builder;
}
/**
 * Cancel a deployment at tenant scope.
 *
 * Syntax:
 * ```
 * az deployment tenant cancel --name
 *                             [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
declare class az_deployment_tenant_cancel_command_builder extends CommandBuilder<az_deployment_tenant_cancel_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The deployment name. */
    name(value: string): az_deployment_tenant_cancel_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_tenant_cancel_command_builder;
}
/**
 * Start a deployment at tenant scope.
 *
 * Syntax:
 * ```
 * az deployment tenant create --location
 *                             [--confirm-with-what-if]
 *                             [--handle-extended-json-format]
 *                             [--name]
 *                             [--no-prompt {false, true}]
 *                             [--no-wait]
 *                             [--parameters]
 *                             [--subscription]
 *                             [--template-file]
 *                             [--template-uri]
 *                             [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
 *                             [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 */
declare class az_deployment_tenant_create_command_builder extends CommandBuilder<az_deployment_tenant_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string);
    /** The location to store the deployment metadata. */
    location(value: string): az_deployment_tenant_create_command_builder;
    /** Instruct the command to run deployment What-If before executing the deployment. It then prompts you to acknowledge resource changes before it continues. */
    confirmWithWhatIf(value: string): az_deployment_tenant_create_command_builder;
    /** Support to handle extended template content including multiline and comments in deployment. */
    handleExtendedJsonFormat(value: string): az_deployment_tenant_create_command_builder;
    /** The deployment name. */
    name(value: string): az_deployment_tenant_create_command_builder;
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_tenant_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_deployment_tenant_create_command_builder;
    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_tenant_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_tenant_create_command_builder;
    /** The path to the template file. */
    templateFile(value: string): az_deployment_tenant_create_command_builder;
    /** The URI to the template file. */
    templateUri(value: string): az_deployment_tenant_create_command_builder;
    /** Space-separated list of resource change types to be excluded from What-If results. Applicable when --confirm-with-what-if is set. */
    whatIfExcludeChangeTypes(value: 'Create' | 'Delete' | 'Deploy' | 'Ignore' | 'Modify' | 'NoChange'): az_deployment_tenant_create_command_builder;
    /** The format of What-If results. Applicable when `--confirm-with-what-if` is set. */
    whatIfResultFormat(value: 'FullResourcePayloads' | 'ResourceIdOnly'): az_deployment_tenant_create_command_builder;
}
/**
 * Delete a deployment at tenant scope.
 *
 * Syntax:
 * ```
 * az deployment tenant delete --name
 *                             [--no-wait]
 *                             [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
declare class az_deployment_tenant_delete_command_builder extends CommandBuilder<az_deployment_tenant_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The deployment name. */
    name(value: string): az_deployment_tenant_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_deployment_tenant_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_tenant_delete_command_builder;
}
/**
 * Export the template used for a deployment.
 *
 * Syntax:
 * ```
 * az deployment tenant export --name
 *                             [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
declare class az_deployment_tenant_export_command_builder extends CommandBuilder<az_deployment_tenant_export_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The deployment name. */
    name(value: string): az_deployment_tenant_export_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_tenant_export_command_builder;
}
/**
 * List deployments at tenant scope.
 *
 * Syntax:
 * ```
 * az deployment tenant list [--filter]
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 */
declare class az_deployment_tenant_list_command_builder extends CommandBuilder<az_deployment_tenant_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Filter expression using OData notation. You can use --filter "provisioningState eq '{state}'" to filter provisioningState. To get more information, please visit <a href="https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters">https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters</a>. */
    filter(value: string): az_deployment_tenant_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_tenant_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_tenant_list_command_builder;
}
/**
 * Show a deployment at tenant scope.
 *
 * Syntax:
 * ```
 * az deployment tenant show --name
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
declare class az_deployment_tenant_show_command_builder extends CommandBuilder<az_deployment_tenant_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The deployment name. */
    name(value: string): az_deployment_tenant_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_tenant_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_tenant_show_command_builder;
}
/**
 * Validate whether a template is valid at tenant scope.
 *
 * Syntax:
 * ```
 * az deployment tenant validate --location
 *                               [--handle-extended-json-format]
 *                               [--name]
 *                               [--no-prompt {false, true}]
 *                               [--parameters]
 *                               [--subscription]
 *                               [--template-file]
 *                               [--template-uri]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 */
declare class az_deployment_tenant_validate_command_builder extends CommandBuilder<az_deployment_tenant_validate_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string);
    /** The location to store the deployment metadata. */
    location(value: string): az_deployment_tenant_validate_command_builder;
    /** Support to handle extended template content including multiline and comments in deployment. */
    handleExtendedJsonFormat(value: string): az_deployment_tenant_validate_command_builder;
    /** The deployment name. */
    name(value: string): az_deployment_tenant_validate_command_builder;
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_tenant_validate_command_builder;
    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_tenant_validate_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_tenant_validate_command_builder;
    /** The path to the template file. */
    templateFile(value: string): az_deployment_tenant_validate_command_builder;
    /** The URI to the template file. */
    templateUri(value: string): az_deployment_tenant_validate_command_builder;
}
/**
 * Place the CLI in a waiting state until a deployment condition is met.
 *
 * Syntax:
 * ```
 * az deployment tenant wait --name
 *                           [--created]
 *                           [--custom]
 *                           [--deleted]
 *                           [--exists]
 *                           [--interval]
 *                           [--subscription]
 *                           [--timeout]
 *                           [--updated]
 * ```
 *
 * @param {string} name The deployment name.
 */
declare class az_deployment_tenant_wait_command_builder extends CommandBuilder<az_deployment_tenant_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The deployment name. */
    name(value: string): az_deployment_tenant_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_deployment_tenant_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_deployment_tenant_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_deployment_tenant_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_deployment_tenant_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_deployment_tenant_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_tenant_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_deployment_tenant_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_deployment_tenant_wait_command_builder;
}
/**
 * Execute a deployment What-If operation at tenant scope.
 *
 * Syntax:
 * ```
 * az deployment tenant what-if --location
 *                              [--exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
 *                              [--name]
 *                              [--no-pretty-print]
 *                              [--no-prompt {false, true}]
 *                              [--parameters]
 *                              [--result-format {FullResourcePayloads, ResourceIdOnly}]
 *                              [--subscription]
 *                              [--template-file]
 *                              [--template-uri]
 * ```
 *
 * @param {string} location The location to store the deployment What-If operation metadata.
 */
declare class az_deployment_tenant_what_if_command_builder extends CommandBuilder<az_deployment_tenant_what_if_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string);
    /** The location to store the deployment What-If operation metadata. */
    location(value: string): az_deployment_tenant_what_if_command_builder;
    /** Space-separated list of resource change types to be excluded from What-If results. */
    excludeChangeTypes(value: 'Create' | 'Delete' | 'Deploy' | 'Ignore' | 'Modify' | 'NoChange'): az_deployment_tenant_what_if_command_builder;
    /** The deployment name. */
    name(value: string): az_deployment_tenant_what_if_command_builder;
    /** Disable pretty-print for What-If results. When set, the output format type will be used. */
    noPrettyPrint(value: string): az_deployment_tenant_what_if_command_builder;
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_tenant_what_if_command_builder;
    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_tenant_what_if_command_builder;
    /** The format of What-If results. */
    resultFormat(value: 'FullResourcePayloads' | 'ResourceIdOnly'): az_deployment_tenant_what_if_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_tenant_what_if_command_builder;
    /** The path to the template file. */
    templateFile(value: string): az_deployment_tenant_what_if_command_builder;
    /** The URI to the template file. */
    templateUri(value: string): az_deployment_tenant_what_if_command_builder;
}
/**
 * Delete a deployment script.
 *
 * Syntax:
 * ```
 * az deployment-scripts delete --name
 *                              --resource-group
 *                              [--subscription]
 *                              [--yes]
 * ```
 *
 * @param {string} name Deployment script resource name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_deployment_scripts_delete_command_builder extends CommandBuilder<az_deployment_scripts_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Deployment script resource name. */
    name(value: string): az_deployment_scripts_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deployment_scripts_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_scripts_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_deployment_scripts_delete_command_builder;
}
/**
 * List all deployment scripts.
 *
 * Syntax:
 * ```
 * az deployment-scripts list [--query-examples]
 *                            [--resource-group]
 *                            [--subscription]
 * ```
 */
declare class az_deployment_scripts_list_command_builder extends CommandBuilder<az_deployment_scripts_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_scripts_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deployment_scripts_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_scripts_list_command_builder;
}
/**
 * Retrieve a deployment script.
 *
 * Syntax:
 * ```
 * az deployment-scripts show --name
 *                            --resource-group
 *                            [--query-examples]
 *                            [--subscription]
 * ```
 *
 * @param {string} name Deployment script resource name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_deployment_scripts_show_command_builder extends CommandBuilder<az_deployment_scripts_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Deployment script resource name. */
    name(value: string): az_deployment_scripts_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deployment_scripts_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_scripts_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_scripts_show_command_builder;
}
/**
 * Show deployment script logs.
 *
 * Syntax:
 * ```
 * az deployment-scripts show-log --name
 *                                --resource-group
 *                                [--subscription]
 * ```
 *
 * @param {string} name Deployment script resource name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_deployment_scripts_show_log_command_builder extends CommandBuilder<az_deployment_scripts_show_log_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Deployment script resource name. */
    name(value: string): az_deployment_scripts_show_log_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deployment_scripts_show_log_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_scripts_show_log_command_builder;
}
/**
 * Cancel a deployment at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment cancel --name
 *                      [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
declare class az_deployment_cancel_command_builder extends CommandBuilder<az_deployment_cancel_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The deployment name. */
    name(value: string): az_deployment_cancel_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_cancel_command_builder;
}
/**
 * Start a deployment at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment create --location
 *                      [--confirm-with-what-if]
 *                      [--handle-extended-json-format]
 *                      [--name]
 *                      [--no-prompt {false, true}]
 *                      [--no-wait]
 *                      [--parameters]
 *                      [--subscription]
 *                      [--template-file]
 *                      [--template-uri]
 *                      [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
 *                      [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 */
declare class az_deployment_create_command_builder extends CommandBuilder<az_deployment_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string);
    /** The location to store the deployment metadata. */
    location(value: string): az_deployment_create_command_builder;
    /** Instruct the command to run deployment What-If before executing the deployment. It then prompts you to acknowledge resource changes before it continues. */
    confirmWithWhatIf(value: string): az_deployment_create_command_builder;
    /** Support to handle extended template content including multiline and comments in deployment. */
    handleExtendedJsonFormat(value: string): az_deployment_create_command_builder;
    /** The deployment name. */
    name(value: string): az_deployment_create_command_builder;
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_deployment_create_command_builder;
    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_create_command_builder;
    /** The path to the template file. */
    templateFile(value: string): az_deployment_create_command_builder;
    /** The URI to the template file. */
    templateUri(value: string): az_deployment_create_command_builder;
    /** Space-separated list of resource change types to be excluded from What-If results. Applicable when --confirm-with-what-if is set. */
    whatIfExcludeChangeTypes(value: 'Create' | 'Delete' | 'Deploy' | 'Ignore' | 'Modify' | 'NoChange'): az_deployment_create_command_builder;
    /** The format of What-If results. Applicable when `--confirm-with-what-if` is set. */
    whatIfResultFormat(value: 'FullResourcePayloads' | 'ResourceIdOnly'): az_deployment_create_command_builder;
}
/**
 * Delete a deployment at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment delete --name
 *                      [--no-wait]
 *                      [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
declare class az_deployment_delete_command_builder extends CommandBuilder<az_deployment_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The deployment name. */
    name(value: string): az_deployment_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_deployment_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_delete_command_builder;
}
/**
 * Export the template used for a deployment.
 *
 * Syntax:
 * ```
 * az deployment export --name
 *                      [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
declare class az_deployment_export_command_builder extends CommandBuilder<az_deployment_export_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The deployment name. */
    name(value: string): az_deployment_export_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_export_command_builder;
}
/**
 * List deployments at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment list [--filter]
 *                    [--query-examples]
 *                    [--subscription]
 * ```
 */
declare class az_deployment_list_command_builder extends CommandBuilder<az_deployment_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Filter expression using OData notation. You can use --filter "provisioningState eq '{state}'" to filter provisioningState. To get more information, please visit <a href="https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters">https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters</a>. */
    filter(value: string): az_deployment_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_list_command_builder;
}
/**
 * Show a deployment at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment show --name
 *                    [--query-examples]
 *                    [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
declare class az_deployment_show_command_builder extends CommandBuilder<az_deployment_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The deployment name. */
    name(value: string): az_deployment_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_show_command_builder;
}
/**
 * Validate whether a template is valid at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment validate --location
 *                        [--handle-extended-json-format]
 *                        [--name]
 *                        [--no-prompt {false, true}]
 *                        [--parameters]
 *                        [--subscription]
 *                        [--template-file]
 *                        [--template-uri]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 */
declare class az_deployment_validate_command_builder extends CommandBuilder<az_deployment_validate_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string);
    /** The location to store the deployment metadata. */
    location(value: string): az_deployment_validate_command_builder;
    /** Support to handle extended template content including multiline and comments in deployment. */
    handleExtendedJsonFormat(value: string): az_deployment_validate_command_builder;
    /** The deployment name. */
    name(value: string): az_deployment_validate_command_builder;
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_validate_command_builder;
    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_validate_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_validate_command_builder;
    /** The path to the template file. */
    templateFile(value: string): az_deployment_validate_command_builder;
    /** The URI to the template file. */
    templateUri(value: string): az_deployment_validate_command_builder;
}
/**
 * Place the CLI in a waiting state until a deployment condition is met.
 *
 * Syntax:
 * ```
 * az deployment wait --name
 *                    [--created]
 *                    [--custom]
 *                    [--deleted]
 *                    [--exists]
 *                    [--interval]
 *                    [--subscription]
 *                    [--timeout]
 *                    [--updated]
 * ```
 *
 * @param {string} name The deployment name.
 */
declare class az_deployment_wait_command_builder extends CommandBuilder<az_deployment_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The deployment name. */
    name(value: string): az_deployment_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_deployment_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_deployment_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_deployment_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_deployment_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_deployment_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_deployment_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_deployment_wait_command_builder;
}
export {};
