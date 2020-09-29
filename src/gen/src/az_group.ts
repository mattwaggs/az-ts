import { CommandBuilder } from '../base';
import { az_group_deployment_operation_list_command_result } from './models/az_group_deployment_operation_list_command_result'
import { az_group_deployment_operation_show_command_result } from './models/az_group_deployment_operation_show_command_result'
import { az_group_deployment_cancel_command_result } from './models/az_group_deployment_cancel_command_result'
import { az_group_deployment_create_command_result } from './models/az_group_deployment_create_command_result'
import { az_group_deployment_delete_command_result } from './models/az_group_deployment_delete_command_result'
import { az_group_deployment_export_command_result } from './models/az_group_deployment_export_command_result'
import { az_group_deployment_list_command_result } from './models/az_group_deployment_list_command_result'
import { az_group_deployment_show_command_result } from './models/az_group_deployment_show_command_result'
import { az_group_deployment_validate_command_result } from './models/az_group_deployment_validate_command_result'
import { az_group_deployment_wait_command_result } from './models/az_group_deployment_wait_command_result'
import { az_group_lock_create_command_result } from './models/az_group_lock_create_command_result'
import { az_group_lock_delete_command_result } from './models/az_group_lock_delete_command_result'
import { az_group_lock_list_command_result } from './models/az_group_lock_list_command_result'
import { az_group_lock_show_command_result } from './models/az_group_lock_show_command_result'
import { az_group_lock_update_command_result } from './models/az_group_lock_update_command_result'
import { az_group_create_command_result } from './models/az_group_create_command_result'
import { az_group_delete_command_result } from './models/az_group_delete_command_result'
import { az_group_exists_command_result } from './models/az_group_exists_command_result'
import { az_group_export_command_result } from './models/az_group_export_command_result'
import { az_group_list_command_result } from './models/az_group_list_command_result'
import { az_group_show_command_result } from './models/az_group_show_command_result'
import { az_group_update_command_result } from './models/az_group_update_command_result'
import { az_group_wait_command_result } from './models/az_group_wait_command_result'

/** Manage deployment operations. */
export class az_group_deployment_operation {
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
    static list(name: string, resourceGroup: string): az_group_deployment_operation_list_command_builder {
        return new az_group_deployment_operation_list_command_builder("az group deployment operation list", name, resourceGroup);
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
    static show(name: string, operationIds: string, resourceGroup: string): az_group_deployment_operation_show_command_builder {
        return new az_group_deployment_operation_show_command_builder("az group deployment operation show", name, operationIds, resourceGroup);
    }
}

/** Manage Azure Resource Manager deployments. */
export class az_group_deployment {
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
    static cancel(name: string, resourceGroup: string): az_group_deployment_cancel_command_builder {
        return new az_group_deployment_cancel_command_builder("az group deployment cancel", name, resourceGroup);
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
    static create(resourceGroup: string): az_group_deployment_create_command_builder {
        return new az_group_deployment_create_command_builder("az group deployment create", resourceGroup);
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
    static delete(name: string, resourceGroup: string): az_group_deployment_delete_command_builder {
        return new az_group_deployment_delete_command_builder("az group deployment delete", name, resourceGroup);
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
    static export(name: string, resourceGroup: string): az_group_deployment_export_command_builder {
        return new az_group_deployment_export_command_builder("az group deployment export", name, resourceGroup);
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
    static list(resourceGroup: string): az_group_deployment_list_command_builder {
        return new az_group_deployment_list_command_builder("az group deployment list", resourceGroup);
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
    static show(name: string, resourceGroup: string): az_group_deployment_show_command_builder {
        return new az_group_deployment_show_command_builder("az group deployment show", name, resourceGroup);
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
    static validate(resourceGroup: string): az_group_deployment_validate_command_builder {
        return new az_group_deployment_validate_command_builder("az group deployment validate", resourceGroup);
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
    static wait(name: string, resourceGroup: string): az_group_deployment_wait_command_builder {
        return new az_group_deployment_wait_command_builder("az group deployment wait", name, resourceGroup);
    }
}

/** Manage Azure resource group locks. */
export class az_group_lock {
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
    static create(lockType: 'CanNotDelete' | 'ReadOnly', name: string, resourceGroup: string): az_group_lock_create_command_builder {
        return new az_group_lock_create_command_builder("az group lock create", lockType, name, resourceGroup);
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
    static delete(): az_group_lock_delete_command_builder {
        return new az_group_lock_delete_command_builder("az group lock delete");
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
    static list(): az_group_lock_list_command_builder {
        return new az_group_lock_list_command_builder("az group lock list");
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
    static show(): az_group_lock_show_command_builder {
        return new az_group_lock_show_command_builder("az group lock show");
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
    static update(): az_group_lock_update_command_builder {
        return new az_group_lock_update_command_builder("az group lock update");
    }
}

/** Manage resource groups and template deployments. */
export class az_group {
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
    static create(location: string, resourceGroup: string): az_group_create_command_builder {
        return new az_group_create_command_builder("az group create", location, resourceGroup);
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
    static delete(resourceGroup: string): az_group_delete_command_builder {
        return new az_group_delete_command_builder("az group delete", resourceGroup);
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
    static exists(resourceGroup: string): az_group_exists_command_builder {
        return new az_group_exists_command_builder("az group exists", resourceGroup);
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
    static export(resourceGroup: string): az_group_export_command_builder {
        return new az_group_export_command_builder("az group export", resourceGroup);
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
    static list(): az_group_list_command_builder {
        return new az_group_list_command_builder("az group list");
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
    static show(resourceGroup: string): az_group_show_command_builder {
        return new az_group_show_command_builder("az group show", resourceGroup);
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
    static update(resourceGroup: string): az_group_update_command_builder {
        return new az_group_update_command_builder("az group update", resourceGroup);
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
    static wait(resourceGroup: string): az_group_wait_command_builder {
        return new az_group_wait_command_builder("az group wait", resourceGroup);
    }
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
class az_group_deployment_operation_list_command_builder extends CommandBuilder<az_group_deployment_operation_list_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The deployment name. */
    name(value: string): az_group_deployment_operation_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_deployment_operation_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_group_deployment_operation_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_deployment_operation_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The number of results to return. */
    top(value: string): az_group_deployment_operation_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_group_deployment_operation_show_command_builder extends CommandBuilder<az_group_deployment_operation_show_command_result> {
    constructor(commandPath: string, name: string, operationIds: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.operationIds(operationIds)
        this.resourceGroup(resourceGroup)
    }

    /** The deployment name. */
    name(value: string): az_group_deployment_operation_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** A list of operation ids to show. */
    operationIds(value: string): az_group_deployment_operation_show_command_builder {
        this.setFlag("--operation-ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_deployment_operation_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_group_deployment_operation_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_deployment_operation_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_group_deployment_cancel_command_builder extends CommandBuilder<az_group_deployment_cancel_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The deployment name. */
    name(value: string): az_group_deployment_cancel_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_deployment_cancel_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_deployment_cancel_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_group_deployment_create_command_builder extends CommandBuilder<az_group_deployment_create_command_result> {
    constructor(commandPath: string, resourceGroup: string) {
        super(commandPath);
        this.resourceGroup(resourceGroup)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_deployment_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Auxiliary subscriptions which will be used during deployment across tenants. */
    auxSubs(value: string): az_group_deployment_create_command_builder {
        this.setFlag("--aux-subs", value);
        return this;
    }

    /** Auxiliary tenants which will be used during deployment across tenants. */
    auxTenants(value: string): az_group_deployment_create_command_builder {
        this.setFlag("--aux-tenants", value);
        return this;
    }

    /** Support to handle extended template content including multiline and comments in deployment. */
    handleExtendedJsonFormat(value: string): az_group_deployment_create_command_builder {
        this.setFlag("--handle-extended-json-format", value);
        return this;
    }

    /** Incremental (only add resources to resource group) or Complete (remove extra resources from resource group). */
    mode(value: 'Complete' | 'Incremental'): az_group_deployment_create_command_builder {
        this.setFlag("--mode", value);
        return this;
    }

    /** The deployment name. Default to template file base name. */
    name(value: string): az_group_deployment_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_group_deployment_create_command_builder {
        this.setFlag("--no-prompt", value.toString());
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_group_deployment_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Supply deployment parameter values. */
    parameters(value: string): az_group_deployment_create_command_builder {
        this.setFlag("--parameters", value);
        return this;
    }

    /** The name of a deployment to roll back to on error, or use as a flag to roll back to the last successful deployment. */
    rollbackOnError(value: string): az_group_deployment_create_command_builder {
        this.setFlag("--rollback-on-error", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_deployment_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** A template file path in the file system. */
    templateFile(value: string): az_group_deployment_create_command_builder {
        this.setFlag("--template-file", value);
        return this;
    }

    /** A uri to a remote template file. */
    templateUri(value: string): az_group_deployment_create_command_builder {
        this.setFlag("--template-uri", value);
        return this;
    }
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
class az_group_deployment_delete_command_builder extends CommandBuilder<az_group_deployment_delete_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The deployment name. */
    name(value: string): az_group_deployment_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_deployment_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_group_deployment_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_deployment_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_group_deployment_export_command_builder extends CommandBuilder<az_group_deployment_export_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The deployment name. */
    name(value: string): az_group_deployment_export_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_deployment_export_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_deployment_export_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_group_deployment_list_command_builder extends CommandBuilder<az_group_deployment_list_command_result> {
    constructor(commandPath: string, resourceGroup: string) {
        super(commandPath);
        this.resourceGroup(resourceGroup)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_deployment_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
    filter(value: string): az_group_deployment_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_group_deployment_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_deployment_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The number of results to get. If null is passed, returns all deployments. */
    top(value: string): az_group_deployment_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_group_deployment_show_command_builder extends CommandBuilder<az_group_deployment_show_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The deployment name. */
    name(value: string): az_group_deployment_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_deployment_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_group_deployment_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_deployment_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_group_deployment_validate_command_builder extends CommandBuilder<az_group_deployment_validate_command_result> {
    constructor(commandPath: string, resourceGroup: string) {
        super(commandPath);
        this.resourceGroup(resourceGroup)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_deployment_validate_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Support to handle extended template content including multiline and comments in deployment. */
    handleExtendedJsonFormat(value: string): az_group_deployment_validate_command_builder {
        this.setFlag("--handle-extended-json-format", value);
        return this;
    }

    /** Incremental (only add resources to resource group) or Complete (remove extra resources from resource group). */
    mode(value: 'Complete' | 'Incremental'): az_group_deployment_validate_command_builder {
        this.setFlag("--mode", value);
        return this;
    }

    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_group_deployment_validate_command_builder {
        this.setFlag("--no-prompt", value.toString());
        return this;
    }

    /** Supply deployment parameter values. */
    parameters(value: string): az_group_deployment_validate_command_builder {
        this.setFlag("--parameters", value);
        return this;
    }

    /** The name of a deployment to roll back to on error, or use as a flag to roll back to the last successful deployment. */
    rollbackOnError(value: string): az_group_deployment_validate_command_builder {
        this.setFlag("--rollback-on-error", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_deployment_validate_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** A template file path in the file system. */
    templateFile(value: string): az_group_deployment_validate_command_builder {
        this.setFlag("--template-file", value);
        return this;
    }

    /** A uri to a remote template file. */
    templateUri(value: string): az_group_deployment_validate_command_builder {
        this.setFlag("--template-uri", value);
        return this;
    }
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
class az_group_deployment_wait_command_builder extends CommandBuilder<az_group_deployment_wait_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The deployment name. */
    name(value: string): az_group_deployment_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_deployment_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_group_deployment_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_group_deployment_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_group_deployment_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_group_deployment_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_group_deployment_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_deployment_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_group_deployment_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_group_deployment_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
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
class az_group_lock_create_command_builder extends CommandBuilder<az_group_lock_create_command_result> {
    constructor(commandPath: string, lockType: 'CanNotDelete' | 'ReadOnly', name: string, resourceGroup: string) {
        super(commandPath);
        this.lockType(lockType)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The type of lock restriction. */
    lockType(value: 'CanNotDelete' | 'ReadOnly'): az_group_lock_create_command_builder {
        this.setFlag("--lock-type", value);
        return this;
    }

    /** Name of the lock. */
    name(value: string): az_group_lock_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_lock_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Notes about this lock. */
    notes(value: string): az_group_lock_create_command_builder {
        this.setFlag("--notes", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_lock_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_group_lock_delete_command_builder extends CommandBuilder<az_group_lock_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_group_lock_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the lock. */
    name(value: string): az_group_lock_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_lock_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_lock_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_group_lock_list_command_builder extends CommandBuilder<az_group_lock_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** A query filter to use to restrict the results. */
    filterString(value: string): az_group_lock_list_command_builder {
        this.setFlag("--filter-string", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_group_lock_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_lock_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_lock_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_group_lock_show_command_builder extends CommandBuilder<az_group_lock_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_group_lock_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the lock. */
    name(value: string): az_group_lock_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_group_lock_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_lock_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_lock_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_group_lock_update_command_builder extends CommandBuilder<az_group_lock_update_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_group_lock_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The type of lock restriction. */
    lockType(value: 'CanNotDelete' | 'ReadOnly'): az_group_lock_update_command_builder {
        this.setFlag("--lock-type", value);
        return this;
    }

    /** Name of the lock. */
    name(value: string): az_group_lock_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Notes about this lock. */
    notes(value: string): az_group_lock_update_command_builder {
        this.setFlag("--notes", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_lock_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_lock_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_group_create_command_builder extends CommandBuilder<az_group_create_command_result> {
    constructor(commandPath: string, location: string, resourceGroup: string) {
        super(commandPath);
        this.location(location)
        this.resourceGroup(resourceGroup)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_group_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name of the new resource group. */
    resourceGroup(value: string): az_group_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The ID of the resource that manages this resource group. */
    managedBy(value: string): az_group_create_command_builder {
        this.setFlag("--managed-by", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_group_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
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
class az_group_delete_command_builder extends CommandBuilder<az_group_delete_command_result> {
    constructor(commandPath: string, resourceGroup: string) {
        super(commandPath);
        this.resourceGroup(resourceGroup)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_group_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_group_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_group_exists_command_builder extends CommandBuilder<az_group_exists_command_result> {
    constructor(commandPath: string, resourceGroup: string) {
        super(commandPath);
        this.resourceGroup(resourceGroup)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_exists_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_exists_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_group_export_command_builder extends CommandBuilder<az_group_export_command_result> {
    constructor(commandPath: string, resourceGroup: string) {
        super(commandPath);
        this.resourceGroup(resourceGroup)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_export_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Export template with comments. */
    includeComments(value: string): az_group_export_command_builder {
        this.setFlag("--include-comments", value);
        return this;
    }

    /** Export template parameter with default value. */
    includeParameterDefaultValue(value: string): az_group_export_command_builder {
        this.setFlag("--include-parameter-default-value", value);
        return this;
    }

    /** Space-separated resource ids to filter the export by. To export all resources, do not specify this argument or supply "\*". */
    resourceIds(value: string): az_group_export_command_builder {
        this.setFlag("--resource-ids", value);
        return this;
    }

    /** Export template parameter and skip all parameterization. */
    skipAllParams(value: string): az_group_export_command_builder {
        this.setFlag("--skip-all-params", value);
        return this;
    }

    /** Export template and skip resource name parameterization. */
    skipResourceNameParams(value: string): az_group_export_command_builder {
        this.setFlag("--skip-resource-name-params", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_export_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_group_list_command_builder extends CommandBuilder<az_group_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_group_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** A single tag in 'key[=value]' format. Use "" to clear existing tags. */
    tag(value: string): az_group_list_command_builder {
        this.setFlag("--tag", value);
        return this;
    }
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
class az_group_show_command_builder extends CommandBuilder<az_group_show_command_result> {
    constructor(commandPath: string, resourceGroup: string) {
        super(commandPath);
        this.resourceGroup(resourceGroup)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_group_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_group_update_command_builder extends CommandBuilder<az_group_update_command_result> {
    constructor(commandPath: string, resourceGroup: string) {
        super(commandPath);
        this.resourceGroup(resourceGroup)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_group_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_group_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_group_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_group_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_group_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
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
class az_group_wait_command_builder extends CommandBuilder<az_group_wait_command_result> {
    constructor(commandPath: string, resourceGroup: string) {
        super(commandPath);
        this.resourceGroup(resourceGroup)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_group_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_group_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_group_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_group_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_group_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_group_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_group_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_group_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_group_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
}
