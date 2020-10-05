import { CommandBuilder } from '../base';
import { az_group_deployment_operation_list_command_result } from './models/az_group_deployment_operation_list_command_result';
import { az_group_deployment_operation_show_command_result } from './models/az_group_deployment_operation_show_command_result';
import { az_group_deployment_cancel_command_result } from './models/az_group_deployment_cancel_command_result';
import { az_group_deployment_create_command_result } from './models/az_group_deployment_create_command_result';
import { az_group_deployment_delete_command_result } from './models/az_group_deployment_delete_command_result';
import { az_group_deployment_export_command_result } from './models/az_group_deployment_export_command_result';
import { az_group_deployment_list_command_result } from './models/az_group_deployment_list_command_result';
import { az_group_deployment_show_command_result } from './models/az_group_deployment_show_command_result';
import { az_group_deployment_validate_command_result } from './models/az_group_deployment_validate_command_result';
import { az_group_deployment_wait_command_result } from './models/az_group_deployment_wait_command_result';
import { az_group_lock_create_command_result } from './models/az_group_lock_create_command_result';
import { az_group_lock_delete_command_result } from './models/az_group_lock_delete_command_result';
import { az_group_lock_list_command_result } from './models/az_group_lock_list_command_result';
import { az_group_lock_show_command_result } from './models/az_group_lock_show_command_result';
import { az_group_lock_update_command_result } from './models/az_group_lock_update_command_result';
import { az_group_create_command_result } from './models/az_group_create_command_result';
import { az_group_delete_command_result } from './models/az_group_delete_command_result';
import { az_group_exists_command_result } from './models/az_group_exists_command_result';
import { az_group_export_command_result } from './models/az_group_export_command_result';
import { az_group_list_command_result } from './models/az_group_list_command_result';
import { az_group_show_command_result } from './models/az_group_show_command_result';
import { az_group_update_command_result } from './models/az_group_update_command_result';
import { az_group_wait_command_result } from './models/az_group_wait_command_result';
/** Manage deployment operations. */
export declare class az_group_deployment_operation {
    /**
     * Gets all deployments operations for a deployment.
     *
     * Syntax:
     * ```
     * az group deployment operation list --name
     *                                    --resource-group
     *                                    [--query-examples]
     *                                    [--subscription]
     *                                    [--top]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, resourceGroup: string): az_group_deployment_operation_list_command_builder;
    /**
     * Get a deployment's operation.
     *
     * Syntax:
     * ```
     * az group deployment operation show --name
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
    static show(name: string, operationIds: string, resourceGroup: string): az_group_deployment_operation_show_command_builder;
}
/** Manage Azure Resource Manager deployments. */
export declare class az_group_deployment {
    /**
     * Cancels a currently running template deployment.
     *
     * Syntax:
     * ```
     * az group deployment cancel --name
     *                            --resource-group
     *                            [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static cancel(name: string, resourceGroup: string): az_group_deployment_cancel_command_builder;
    /**
     * Start a deployment.
     *
     * Syntax:
     * ```
     * az group deployment create --resource-group
     *                            [--aux-subs]
     *                            [--aux-tenants]
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
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(resourceGroup: string): az_group_deployment_create_command_builder;
    /**
     * Deletes a deployment from the deployment history.
     *
     * Syntax:
     * ```
     * az group deployment delete --name
     *                            --resource-group
     *                            [--no-wait]
     *                            [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(name: string, resourceGroup: string): az_group_deployment_delete_command_builder;
    /**
     * Export the template used for a deployment.
     *
     * Syntax:
     * ```
     * az group deployment export --name
     *                            --resource-group
     *                            [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static export(name: string, resourceGroup: string): az_group_deployment_export_command_builder;
    /**
     * Get all the deployments for a resource group.
     *
     * Syntax:
     * ```
     * az group deployment list --resource-group
     *                          [--filter]
     *                          [--query-examples]
     *                          [--subscription]
     *                          [--top]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(resourceGroup: string): az_group_deployment_list_command_builder;
    /**
     * Gets a deployment.
     *
     * Syntax:
     * ```
     * az group deployment show --name
     *                          --resource-group
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static show(name: string, resourceGroup: string): az_group_deployment_show_command_builder;
    /**
     * Validate whether a template is syntactically correct.
     *
     * Syntax:
     * ```
     * az group deployment validate --resource-group
     *                              [--handle-extended-json-format]
     *                              [--mode {Complete, Incremental}]
     *                              [--no-prompt {false, true}]
     *                              [--parameters]
     *                              [--rollback-on-error]
     *                              [--subscription]
     *                              [--template-file]
     *                              [--template-uri]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static validate(resourceGroup: string): az_group_deployment_validate_command_builder;
    /**
     * Place the CLI in a waiting state until a deployment condition is met.
     *
     * Syntax:
     * ```
     * az group deployment wait --name
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
    static wait(name: string, resourceGroup: string): az_group_deployment_wait_command_builder;
}
/** Manage Azure resource group locks. */
export declare class az_group_lock {
    /**
     * Create a resource group lock.
     *
     * Syntax:
     * ```
     * az group lock create --lock-type {CanNotDelete, ReadOnly}
     *                      --name
     *                      --resource-group
     *                      [--notes]
     *                      [--subscription]
     * ```
     *
     * @param {'CanNotDelete' | 'ReadOnly'} lockType The type of lock restriction.
     * @param {string} name Name of the lock.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(lockType: 'CanNotDelete' | 'ReadOnly', name: string, resourceGroup: string): az_group_lock_create_command_builder;
    /**
     * Delete a resource group lock.
     *
     * Syntax:
     * ```
     * az group lock delete [--ids]
     *                      [--name]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    static delete(): az_group_lock_delete_command_builder;
    /**
     * List lock information in the resource-group.
     *
     * Syntax:
     * ```
     * az group lock list [--filter-string]
     *                    [--query-examples]
     *                    [--resource-group]
     *                    [--subscription]
     * ```
     */
    static list(): az_group_lock_list_command_builder;
    /**
     * Show the details of a resource group lock.
     *
     * Syntax:
     * ```
     * az group lock show [--ids]
     *                    [--name]
     *                    [--query-examples]
     *                    [--resource-group]
     *                    [--subscription]
     * ```
     */
    static show(): az_group_lock_show_command_builder;
    /**
     * Update a resource group lock.
     *
     * Syntax:
     * ```
     * az group lock update [--ids]
     *                      [--lock-type {CanNotDelete, ReadOnly}]
     *                      [--name]
     *                      [--notes]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    static update(): az_group_lock_update_command_builder;
}
/** Manage resource groups and template deployments. */
export declare class az_group {
    /**
     * Create a new resource group.
     *
     * Syntax:
     * ```
     * az group create --location
     *                 --name
     *                 [--managed-by]
     *                 [--subscription]
     *                 [--tags]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} resourceGroup Name of the new resource group.
     */
    static create(location: string, resourceGroup: string): az_group_create_command_builder;
    /**
     * Delete a resource group.
     *
     * Syntax:
     * ```
     * az group delete --name
     *                 [--no-wait]
     *                 [--subscription]
     *                 [--yes]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(resourceGroup: string): az_group_delete_command_builder;
    /**
     * Check if a resource group exists.
     *
     * Syntax:
     * ```
     * az group exists --name
     *                 [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static exists(resourceGroup: string): az_group_exists_command_builder;
    /**
     * Captures a resource group as a template.
     *
     * Syntax:
     * ```
     * az group export --name
     *                 [--include-comments]
     *                 [--include-parameter-default-value]
     *                 [--resource-ids]
     *                 [--skip-all-params]
     *                 [--skip-resource-name-params]
     *                 [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static export(resourceGroup: string): az_group_export_command_builder;
    /**
     * List resource groups.
     *
     * Syntax:
     * ```
     * az group list [--query-examples]
     *               [--subscription]
     *               [--tag]
     * ```
     */
    static list(): az_group_list_command_builder;
    /**
     * Gets a resource group.
     *
     * Syntax:
     * ```
     * az group show --name
     *               [--query-examples]
     *               [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static show(resourceGroup: string): az_group_show_command_builder;
    /**
     * Update a resource group.
     *
     * Syntax:
     * ```
     * az group update --name
     *                 [--add]
     *                 [--force-string]
     *                 [--remove]
     *                 [--set]
     *                 [--subscription]
     *                 [--tags]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static update(resourceGroup: string): az_group_update_command_builder;
    /**
     * Place the CLI in a waiting state until a condition of the resource group is met.
     *
     * Syntax:
     * ```
     * az group wait --name
     *               [--created]
     *               [--custom]
     *               [--deleted]
     *               [--exists]
     *               [--interval]
     *               [--subscription]
     *               [--timeout]
     *               [--updated]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static wait(resourceGroup: string): az_group_wait_command_builder;
}
/**
 * Gets all deployments operations for a deployment.
 *
 * Syntax:
 * ```
 * az group deployment operation list --name
 *                                    --resource-group
 *                                    [--query-examples]
 *                                    [--subscription]
 *                                    [--top]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_group_deployment_operation_list_command_builder extends CommandBuilder<az_group_deployment_operation_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The deployment name. */
    name(value: string): az_group_deployment_operation_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_deployment_operation_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_group_deployment_operation_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_deployment_operation_list_command_builder;
    /** The number of results to return. */
    top(value: string): az_group_deployment_operation_list_command_builder;
}
/**
 * Get a deployment's operation.
 *
 * Syntax:
 * ```
 * az group deployment operation show --name
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
declare class az_group_deployment_operation_show_command_builder extends CommandBuilder<az_group_deployment_operation_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, operationIds: string, resourceGroup: string);
    /** The deployment name. */
    name(value: string): az_group_deployment_operation_show_command_builder;
    /** A list of operation ids to show. */
    operationIds(value: string): az_group_deployment_operation_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_deployment_operation_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_group_deployment_operation_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_deployment_operation_show_command_builder;
}
/**
 * Cancels a currently running template deployment.
 *
 * Syntax:
 * ```
 * az group deployment cancel --name
 *                            --resource-group
 *                            [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_group_deployment_cancel_command_builder extends CommandBuilder<az_group_deployment_cancel_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The deployment name. */
    name(value: string): az_group_deployment_cancel_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_deployment_cancel_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_deployment_cancel_command_builder;
}
/**
 * Start a deployment.
 *
 * Syntax:
 * ```
 * az group deployment create --resource-group
 *                            [--aux-subs]
 *                            [--aux-tenants]
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
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_group_deployment_create_command_builder extends CommandBuilder<az_group_deployment_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_deployment_create_command_builder;
    /** Auxiliary subscriptions which will be used during deployment across tenants. */
    auxSubs(value: string): az_group_deployment_create_command_builder;
    /** Auxiliary tenants which will be used during deployment across tenants. */
    auxTenants(value: string): az_group_deployment_create_command_builder;
    /** Support to handle extended template content including multiline and comments in deployment. */
    handleExtendedJsonFormat(value: string): az_group_deployment_create_command_builder;
    /** Incremental (only add resources to resource group) or Complete (remove extra resources from resource group). */
    mode(value: 'Complete' | 'Incremental'): az_group_deployment_create_command_builder;
    /** The deployment name. Default to template file base name. */
    name(value: string): az_group_deployment_create_command_builder;
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_group_deployment_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_group_deployment_create_command_builder;
    /** Supply deployment parameter values. */
    parameters(value: string): az_group_deployment_create_command_builder;
    /** The name of a deployment to roll back to on error, or use as a flag to roll back to the last successful deployment. */
    rollbackOnError(value: string): az_group_deployment_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_deployment_create_command_builder;
    /** A template file path in the file system. */
    templateFile(value: string): az_group_deployment_create_command_builder;
    /** A uri to a remote template file. */
    templateUri(value: string): az_group_deployment_create_command_builder;
}
/**
 * Deletes a deployment from the deployment history.
 *
 * Syntax:
 * ```
 * az group deployment delete --name
 *                            --resource-group
 *                            [--no-wait]
 *                            [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_group_deployment_delete_command_builder extends CommandBuilder<az_group_deployment_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The deployment name. */
    name(value: string): az_group_deployment_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_deployment_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_group_deployment_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_deployment_delete_command_builder;
}
/**
 * Export the template used for a deployment.
 *
 * Syntax:
 * ```
 * az group deployment export --name
 *                            --resource-group
 *                            [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_group_deployment_export_command_builder extends CommandBuilder<az_group_deployment_export_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The deployment name. */
    name(value: string): az_group_deployment_export_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_deployment_export_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_deployment_export_command_builder;
}
/**
 * Get all the deployments for a resource group.
 *
 * Syntax:
 * ```
 * az group deployment list --resource-group
 *                          [--filter]
 *                          [--query-examples]
 *                          [--subscription]
 *                          [--top]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_group_deployment_list_command_builder extends CommandBuilder<az_group_deployment_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_deployment_list_command_builder;
    /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
    filter(value: string): az_group_deployment_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_group_deployment_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_deployment_list_command_builder;
    /** The number of results to get. If null is passed, returns all deployments. */
    top(value: string): az_group_deployment_list_command_builder;
}
/**
 * Gets a deployment.
 *
 * Syntax:
 * ```
 * az group deployment show --name
 *                          --resource-group
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_group_deployment_show_command_builder extends CommandBuilder<az_group_deployment_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The deployment name. */
    name(value: string): az_group_deployment_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_deployment_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_group_deployment_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_deployment_show_command_builder;
}
/**
 * Validate whether a template is syntactically correct.
 *
 * Syntax:
 * ```
 * az group deployment validate --resource-group
 *                              [--handle-extended-json-format]
 *                              [--mode {Complete, Incremental}]
 *                              [--no-prompt {false, true}]
 *                              [--parameters]
 *                              [--rollback-on-error]
 *                              [--subscription]
 *                              [--template-file]
 *                              [--template-uri]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_group_deployment_validate_command_builder extends CommandBuilder<az_group_deployment_validate_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_deployment_validate_command_builder;
    /** Support to handle extended template content including multiline and comments in deployment. */
    handleExtendedJsonFormat(value: string): az_group_deployment_validate_command_builder;
    /** Incremental (only add resources to resource group) or Complete (remove extra resources from resource group). */
    mode(value: 'Complete' | 'Incremental'): az_group_deployment_validate_command_builder;
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_group_deployment_validate_command_builder;
    /** Supply deployment parameter values. */
    parameters(value: string): az_group_deployment_validate_command_builder;
    /** The name of a deployment to roll back to on error, or use as a flag to roll back to the last successful deployment. */
    rollbackOnError(value: string): az_group_deployment_validate_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_deployment_validate_command_builder;
    /** A template file path in the file system. */
    templateFile(value: string): az_group_deployment_validate_command_builder;
    /** A uri to a remote template file. */
    templateUri(value: string): az_group_deployment_validate_command_builder;
}
/**
 * Place the CLI in a waiting state until a deployment condition is met.
 *
 * Syntax:
 * ```
 * az group deployment wait --name
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
declare class az_group_deployment_wait_command_builder extends CommandBuilder<az_group_deployment_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The deployment name. */
    name(value: string): az_group_deployment_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_deployment_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_group_deployment_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_group_deployment_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_group_deployment_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_group_deployment_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_group_deployment_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_deployment_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_group_deployment_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_group_deployment_wait_command_builder;
}
/**
 * Create a resource group lock.
 *
 * Syntax:
 * ```
 * az group lock create --lock-type {CanNotDelete, ReadOnly}
 *                      --name
 *                      --resource-group
 *                      [--notes]
 *                      [--subscription]
 * ```
 *
 * @param {'CanNotDelete' | 'ReadOnly'} lockType The type of lock restriction.
 * @param {string} name Name of the lock.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_group_lock_create_command_builder extends CommandBuilder<az_group_lock_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, lockType: 'CanNotDelete' | 'ReadOnly', name: string, resourceGroup: string);
    /** The type of lock restriction. */
    lockType(value: 'CanNotDelete' | 'ReadOnly'): az_group_lock_create_command_builder;
    /** Name of the lock. */
    name(value: string): az_group_lock_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_lock_create_command_builder;
    /** Notes about this lock. */
    notes(value: string): az_group_lock_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_lock_create_command_builder;
}
/**
 * Delete a resource group lock.
 *
 * Syntax:
 * ```
 * az group lock delete [--ids]
 *                      [--name]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
declare class az_group_lock_delete_command_builder extends CommandBuilder<az_group_lock_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_group_lock_delete_command_builder;
    /** Name of the lock. */
    name(value: string): az_group_lock_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_lock_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_lock_delete_command_builder;
}
/**
 * List lock information in the resource-group.
 *
 * Syntax:
 * ```
 * az group lock list [--filter-string]
 *                    [--query-examples]
 *                    [--resource-group]
 *                    [--subscription]
 * ```
 */
declare class az_group_lock_list_command_builder extends CommandBuilder<az_group_lock_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** A query filter to use to restrict the results. */
    filterString(value: string): az_group_lock_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_group_lock_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_lock_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_lock_list_command_builder;
}
/**
 * Show the details of a resource group lock.
 *
 * Syntax:
 * ```
 * az group lock show [--ids]
 *                    [--name]
 *                    [--query-examples]
 *                    [--resource-group]
 *                    [--subscription]
 * ```
 */
declare class az_group_lock_show_command_builder extends CommandBuilder<az_group_lock_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_group_lock_show_command_builder;
    /** Name of the lock. */
    name(value: string): az_group_lock_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_group_lock_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_lock_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_lock_show_command_builder;
}
/**
 * Update a resource group lock.
 *
 * Syntax:
 * ```
 * az group lock update [--ids]
 *                      [--lock-type {CanNotDelete, ReadOnly}]
 *                      [--name]
 *                      [--notes]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
declare class az_group_lock_update_command_builder extends CommandBuilder<az_group_lock_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_group_lock_update_command_builder;
    /** The type of lock restriction. */
    lockType(value: 'CanNotDelete' | 'ReadOnly'): az_group_lock_update_command_builder;
    /** Name of the lock. */
    name(value: string): az_group_lock_update_command_builder;
    /** Notes about this lock. */
    notes(value: string): az_group_lock_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_lock_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_lock_update_command_builder;
}
/**
 * Create a new resource group.
 *
 * Syntax:
 * ```
 * az group create --location
 *                 --name
 *                 [--managed-by]
 *                 [--subscription]
 *                 [--tags]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} resourceGroup Name of the new resource group.
 */
declare class az_group_create_command_builder extends CommandBuilder<az_group_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string, resourceGroup: string);
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_group_create_command_builder;
    /** Name of the new resource group. */
    resourceGroup(value: string): az_group_create_command_builder;
    /** The ID of the resource that manages this resource group. */
    managedBy(value: string): az_group_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_group_create_command_builder;
}
/**
 * Delete a resource group.
 *
 * Syntax:
 * ```
 * az group delete --name
 *                 [--no-wait]
 *                 [--subscription]
 *                 [--yes]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_group_delete_command_builder extends CommandBuilder<az_group_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_group_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_group_delete_command_builder;
}
/**
 * Check if a resource group exists.
 *
 * Syntax:
 * ```
 * az group exists --name
 *                 [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_group_exists_command_builder extends CommandBuilder<az_group_exists_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_exists_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_exists_command_builder;
}
/**
 * Captures a resource group as a template.
 *
 * Syntax:
 * ```
 * az group export --name
 *                 [--include-comments]
 *                 [--include-parameter-default-value]
 *                 [--resource-ids]
 *                 [--skip-all-params]
 *                 [--skip-resource-name-params]
 *                 [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_group_export_command_builder extends CommandBuilder<az_group_export_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_export_command_builder;
    /** Export template with comments. */
    includeComments(value: string): az_group_export_command_builder;
    /** Export template parameter with default value. */
    includeParameterDefaultValue(value: string): az_group_export_command_builder;
    /** Space-separated resource ids to filter the export by. To export all resources, do not specify this argument or supply "\*". */
    resourceIds(value: string): az_group_export_command_builder;
    /** Export template parameter and skip all parameterization. */
    skipAllParams(value: string): az_group_export_command_builder;
    /** Export template and skip resource name parameterization. */
    skipResourceNameParams(value: string): az_group_export_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_export_command_builder;
}
/**
 * List resource groups.
 *
 * Syntax:
 * ```
 * az group list [--query-examples]
 *               [--subscription]
 *               [--tag]
 * ```
 */
declare class az_group_list_command_builder extends CommandBuilder<az_group_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_group_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_list_command_builder;
    /** A single tag in 'key[=value]' format. Use "" to clear existing tags. */
    tag(value: string): az_group_list_command_builder;
}
/**
 * Gets a resource group.
 *
 * Syntax:
 * ```
 * az group show --name
 *               [--query-examples]
 *               [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_group_show_command_builder extends CommandBuilder<az_group_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_group_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_show_command_builder;
}
/**
 * Update a resource group.
 *
 * Syntax:
 * ```
 * az group update --name
 *                 [--add]
 *                 [--force-string]
 *                 [--remove]
 *                 [--set]
 *                 [--subscription]
 *                 [--tags]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_group_update_command_builder extends CommandBuilder<az_group_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_group_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_group_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_group_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_group_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_group_update_command_builder;
}
/**
 * Place the CLI in a waiting state until a condition of the resource group is met.
 *
 * Syntax:
 * ```
 * az group wait --name
 *               [--created]
 *               [--custom]
 *               [--deleted]
 *               [--exists]
 *               [--interval]
 *               [--subscription]
 *               [--timeout]
 *               [--updated]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_group_wait_command_builder extends CommandBuilder<az_group_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_group_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_group_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_group_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_group_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_group_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_group_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_group_wait_command_builder;
}
export {};
