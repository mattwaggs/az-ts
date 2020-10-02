"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_1 = require("../base");
/** Manage deployment operations. */
var az_group_deployment_operation = /** @class */ (function () {
    function az_group_deployment_operation() {
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
    az_group_deployment_operation.list = function (name, resourceGroup) {
        return new az_group_deployment_operation_list_command_builder("az group deployment operation list", 'az_group_deployment_operation_list_command_result', name, resourceGroup);
    };
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
    az_group_deployment_operation.show = function (name, operationIds, resourceGroup) {
        return new az_group_deployment_operation_show_command_builder("az group deployment operation show", 'az_group_deployment_operation_show_command_result', name, operationIds, resourceGroup);
    };
    return az_group_deployment_operation;
}());
exports.az_group_deployment_operation = az_group_deployment_operation;
/** Manage Azure Resource Manager deployments. */
var az_group_deployment = /** @class */ (function () {
    function az_group_deployment() {
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
    az_group_deployment.cancel = function (name, resourceGroup) {
        return new az_group_deployment_cancel_command_builder("az group deployment cancel", 'az_group_deployment_cancel_command_result', name, resourceGroup);
    };
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
    az_group_deployment.create = function (resourceGroup) {
        return new az_group_deployment_create_command_builder("az group deployment create", 'az_group_deployment_create_command_result', resourceGroup);
    };
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
    az_group_deployment["delete"] = function (name, resourceGroup) {
        return new az_group_deployment_delete_command_builder("az group deployment delete", 'az_group_deployment_delete_command_result', name, resourceGroup);
    };
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
    az_group_deployment["export"] = function (name, resourceGroup) {
        return new az_group_deployment_export_command_builder("az group deployment export", 'az_group_deployment_export_command_result', name, resourceGroup);
    };
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
    az_group_deployment.list = function (resourceGroup) {
        return new az_group_deployment_list_command_builder("az group deployment list", 'az_group_deployment_list_command_result', resourceGroup);
    };
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
    az_group_deployment.show = function (name, resourceGroup) {
        return new az_group_deployment_show_command_builder("az group deployment show", 'az_group_deployment_show_command_result', name, resourceGroup);
    };
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
    az_group_deployment.validate = function (resourceGroup) {
        return new az_group_deployment_validate_command_builder("az group deployment validate", 'az_group_deployment_validate_command_result', resourceGroup);
    };
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
    az_group_deployment.wait = function (name, resourceGroup) {
        return new az_group_deployment_wait_command_builder("az group deployment wait", 'az_group_deployment_wait_command_result', name, resourceGroup);
    };
    return az_group_deployment;
}());
exports.az_group_deployment = az_group_deployment;
/** Manage Azure resource group locks. */
var az_group_lock = /** @class */ (function () {
    function az_group_lock() {
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
    az_group_lock.create = function (lockType, name, resourceGroup) {
        return new az_group_lock_create_command_builder("az group lock create", 'az_group_lock_create_command_result', lockType, name, resourceGroup);
    };
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
    az_group_lock["delete"] = function () {
        return new az_group_lock_delete_command_builder("az group lock delete", 'az_group_lock_delete_command_result');
    };
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
    az_group_lock.list = function () {
        return new az_group_lock_list_command_builder("az group lock list", 'az_group_lock_list_command_result');
    };
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
    az_group_lock.show = function () {
        return new az_group_lock_show_command_builder("az group lock show", 'az_group_lock_show_command_result');
    };
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
    az_group_lock.update = function () {
        return new az_group_lock_update_command_builder("az group lock update", 'az_group_lock_update_command_result');
    };
    return az_group_lock;
}());
exports.az_group_lock = az_group_lock;
/** Manage resource groups and template deployments. */
var az_group = /** @class */ (function () {
    function az_group() {
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
    az_group.create = function (location, resourceGroup) {
        return new az_group_create_command_builder("az group create", 'az_group_create_command_result', location, resourceGroup);
    };
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
    az_group["delete"] = function (resourceGroup) {
        return new az_group_delete_command_builder("az group delete", 'az_group_delete_command_result', resourceGroup);
    };
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
    az_group.exists = function (resourceGroup) {
        return new az_group_exists_command_builder("az group exists", 'az_group_exists_command_result', resourceGroup);
    };
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
    az_group["export"] = function (resourceGroup) {
        return new az_group_export_command_builder("az group export", 'az_group_export_command_result', resourceGroup);
    };
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
    az_group.list = function () {
        return new az_group_list_command_builder("az group list", 'az_group_list_command_result');
    };
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
    az_group.show = function (resourceGroup) {
        return new az_group_show_command_builder("az group show", 'az_group_show_command_result', resourceGroup);
    };
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
    az_group.update = function (resourceGroup) {
        return new az_group_update_command_builder("az group update", 'az_group_update_command_result', resourceGroup);
    };
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
    az_group.wait = function (resourceGroup) {
        return new az_group_wait_command_builder("az group wait", 'az_group_wait_command_result', resourceGroup);
    };
    return az_group;
}());
exports.az_group = az_group;
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
var az_group_deployment_operation_list_command_builder = /** @class */ (function (_super) {
    __extends(az_group_deployment_operation_list_command_builder, _super);
    function az_group_deployment_operation_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The deployment name. */
    az_group_deployment_operation_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_group_deployment_operation_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_group_deployment_operation_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_group_deployment_operation_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The number of results to return. */
    az_group_deployment_operation_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_group_deployment_operation_list_command_builder;
}(base_1.CommandBuilder));
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
var az_group_deployment_operation_show_command_builder = /** @class */ (function (_super) {
    __extends(az_group_deployment_operation_show_command_builder, _super);
    function az_group_deployment_operation_show_command_builder(commandPath, resultDataTypeName, name, operationIds, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.operationIds(operationIds);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The deployment name. */
    az_group_deployment_operation_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** A list of operation ids to show. */
    az_group_deployment_operation_show_command_builder.prototype.operationIds = function (value) {
        this.setFlag("--operation-ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_group_deployment_operation_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_group_deployment_operation_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_group_deployment_operation_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_group_deployment_operation_show_command_builder;
}(base_1.CommandBuilder));
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
var az_group_deployment_cancel_command_builder = /** @class */ (function (_super) {
    __extends(az_group_deployment_cancel_command_builder, _super);
    function az_group_deployment_cancel_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The deployment name. */
    az_group_deployment_cancel_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_group_deployment_cancel_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_group_deployment_cancel_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_group_deployment_cancel_command_builder;
}(base_1.CommandBuilder));
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
var az_group_deployment_create_command_builder = /** @class */ (function (_super) {
    __extends(az_group_deployment_create_command_builder, _super);
    function az_group_deployment_create_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_group_deployment_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Auxiliary subscriptions which will be used during deployment across tenants. */
    az_group_deployment_create_command_builder.prototype.auxSubs = function (value) {
        this.setFlag("--aux-subs", value);
        return this;
    };
    /** Auxiliary tenants which will be used during deployment across tenants. */
    az_group_deployment_create_command_builder.prototype.auxTenants = function (value) {
        this.setFlag("--aux-tenants", value);
        return this;
    };
    /** Support to handle extended template content including multiline and comments in deployment. */
    az_group_deployment_create_command_builder.prototype.handleExtendedJsonFormat = function (value) {
        this.setFlag("--handle-extended-json-format", value);
        return this;
    };
    /** Incremental (only add resources to resource group) or Complete (remove extra resources from resource group). */
    az_group_deployment_create_command_builder.prototype.mode = function (value) {
        this.setFlag("--mode", value);
        return this;
    };
    /** The deployment name. Default to template file base name. */
    az_group_deployment_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    az_group_deployment_create_command_builder.prototype.noPrompt = function (value) {
        this.setFlag("--no-prompt", value.toString());
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_group_deployment_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Supply deployment parameter values. */
    az_group_deployment_create_command_builder.prototype.parameters = function (value) {
        this.setFlag("--parameters", value);
        return this;
    };
    /** The name of a deployment to roll back to on error, or use as a flag to roll back to the last successful deployment. */
    az_group_deployment_create_command_builder.prototype.rollbackOnError = function (value) {
        this.setFlag("--rollback-on-error", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_group_deployment_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** A template file path in the file system. */
    az_group_deployment_create_command_builder.prototype.templateFile = function (value) {
        this.setFlag("--template-file", value);
        return this;
    };
    /** A uri to a remote template file. */
    az_group_deployment_create_command_builder.prototype.templateUri = function (value) {
        this.setFlag("--template-uri", value);
        return this;
    };
    return az_group_deployment_create_command_builder;
}(base_1.CommandBuilder));
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
var az_group_deployment_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_group_deployment_delete_command_builder, _super);
    function az_group_deployment_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The deployment name. */
    az_group_deployment_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_group_deployment_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_group_deployment_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_group_deployment_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_group_deployment_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_group_deployment_export_command_builder = /** @class */ (function (_super) {
    __extends(az_group_deployment_export_command_builder, _super);
    function az_group_deployment_export_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The deployment name. */
    az_group_deployment_export_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_group_deployment_export_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_group_deployment_export_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_group_deployment_export_command_builder;
}(base_1.CommandBuilder));
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
var az_group_deployment_list_command_builder = /** @class */ (function (_super) {
    __extends(az_group_deployment_list_command_builder, _super);
    function az_group_deployment_list_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_group_deployment_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
    az_group_deployment_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_group_deployment_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_group_deployment_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The number of results to get. If null is passed, returns all deployments. */
    az_group_deployment_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_group_deployment_list_command_builder;
}(base_1.CommandBuilder));
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
var az_group_deployment_show_command_builder = /** @class */ (function (_super) {
    __extends(az_group_deployment_show_command_builder, _super);
    function az_group_deployment_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The deployment name. */
    az_group_deployment_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_group_deployment_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_group_deployment_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_group_deployment_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_group_deployment_show_command_builder;
}(base_1.CommandBuilder));
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
var az_group_deployment_validate_command_builder = /** @class */ (function (_super) {
    __extends(az_group_deployment_validate_command_builder, _super);
    function az_group_deployment_validate_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_group_deployment_validate_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Support to handle extended template content including multiline and comments in deployment. */
    az_group_deployment_validate_command_builder.prototype.handleExtendedJsonFormat = function (value) {
        this.setFlag("--handle-extended-json-format", value);
        return this;
    };
    /** Incremental (only add resources to resource group) or Complete (remove extra resources from resource group). */
    az_group_deployment_validate_command_builder.prototype.mode = function (value) {
        this.setFlag("--mode", value);
        return this;
    };
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    az_group_deployment_validate_command_builder.prototype.noPrompt = function (value) {
        this.setFlag("--no-prompt", value.toString());
        return this;
    };
    /** Supply deployment parameter values. */
    az_group_deployment_validate_command_builder.prototype.parameters = function (value) {
        this.setFlag("--parameters", value);
        return this;
    };
    /** The name of a deployment to roll back to on error, or use as a flag to roll back to the last successful deployment. */
    az_group_deployment_validate_command_builder.prototype.rollbackOnError = function (value) {
        this.setFlag("--rollback-on-error", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_group_deployment_validate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** A template file path in the file system. */
    az_group_deployment_validate_command_builder.prototype.templateFile = function (value) {
        this.setFlag("--template-file", value);
        return this;
    };
    /** A uri to a remote template file. */
    az_group_deployment_validate_command_builder.prototype.templateUri = function (value) {
        this.setFlag("--template-uri", value);
        return this;
    };
    return az_group_deployment_validate_command_builder;
}(base_1.CommandBuilder));
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
var az_group_deployment_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_group_deployment_wait_command_builder, _super);
    function az_group_deployment_wait_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The deployment name. */
    az_group_deployment_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_group_deployment_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_group_deployment_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_group_deployment_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_group_deployment_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_group_deployment_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_group_deployment_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_group_deployment_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_group_deployment_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_group_deployment_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_group_deployment_wait_command_builder;
}(base_1.CommandBuilder));
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
var az_group_lock_create_command_builder = /** @class */ (function (_super) {
    __extends(az_group_lock_create_command_builder, _super);
    function az_group_lock_create_command_builder(commandPath, resultDataTypeName, lockType, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.lockType(lockType);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The type of lock restriction. */
    az_group_lock_create_command_builder.prototype.lockType = function (value) {
        this.setFlag("--lock-type", value);
        return this;
    };
    /** Name of the lock. */
    az_group_lock_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_group_lock_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Notes about this lock. */
    az_group_lock_create_command_builder.prototype.notes = function (value) {
        this.setFlag("--notes", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_group_lock_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_group_lock_create_command_builder;
}(base_1.CommandBuilder));
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
var az_group_lock_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_group_lock_delete_command_builder, _super);
    function az_group_lock_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    az_group_lock_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the lock. */
    az_group_lock_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_group_lock_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_group_lock_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_group_lock_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_group_lock_list_command_builder = /** @class */ (function (_super) {
    __extends(az_group_lock_list_command_builder, _super);
    function az_group_lock_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** A query filter to use to restrict the results. */
    az_group_lock_list_command_builder.prototype.filterString = function (value) {
        this.setFlag("--filter-string", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_group_lock_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_group_lock_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_group_lock_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_group_lock_list_command_builder;
}(base_1.CommandBuilder));
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
var az_group_lock_show_command_builder = /** @class */ (function (_super) {
    __extends(az_group_lock_show_command_builder, _super);
    function az_group_lock_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    az_group_lock_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the lock. */
    az_group_lock_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_group_lock_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_group_lock_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_group_lock_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_group_lock_show_command_builder;
}(base_1.CommandBuilder));
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
var az_group_lock_update_command_builder = /** @class */ (function (_super) {
    __extends(az_group_lock_update_command_builder, _super);
    function az_group_lock_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    az_group_lock_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The type of lock restriction. */
    az_group_lock_update_command_builder.prototype.lockType = function (value) {
        this.setFlag("--lock-type", value);
        return this;
    };
    /** Name of the lock. */
    az_group_lock_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Notes about this lock. */
    az_group_lock_update_command_builder.prototype.notes = function (value) {
        this.setFlag("--notes", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_group_lock_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_group_lock_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_group_lock_update_command_builder;
}(base_1.CommandBuilder));
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
var az_group_create_command_builder = /** @class */ (function (_super) {
    __extends(az_group_create_command_builder, _super);
    function az_group_create_command_builder(commandPath, resultDataTypeName, location, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_group_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the new resource group. */
    az_group_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The ID of the resource that manages this resource group. */
    az_group_create_command_builder.prototype.managedBy = function (value) {
        this.setFlag("--managed-by", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_group_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_group_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_group_create_command_builder;
}(base_1.CommandBuilder));
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
var az_group_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_group_delete_command_builder, _super);
    function az_group_delete_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_group_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_group_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_group_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_group_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_group_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_group_exists_command_builder = /** @class */ (function (_super) {
    __extends(az_group_exists_command_builder, _super);
    function az_group_exists_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_group_exists_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_group_exists_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_group_exists_command_builder;
}(base_1.CommandBuilder));
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
var az_group_export_command_builder = /** @class */ (function (_super) {
    __extends(az_group_export_command_builder, _super);
    function az_group_export_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_group_export_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Export template with comments. */
    az_group_export_command_builder.prototype.includeComments = function (value) {
        this.setFlag("--include-comments", value);
        return this;
    };
    /** Export template parameter with default value. */
    az_group_export_command_builder.prototype.includeParameterDefaultValue = function (value) {
        this.setFlag("--include-parameter-default-value", value);
        return this;
    };
    /** Space-separated resource ids to filter the export by. To export all resources, do not specify this argument or supply "\*". */
    az_group_export_command_builder.prototype.resourceIds = function (value) {
        this.setFlag("--resource-ids", value);
        return this;
    };
    /** Export template parameter and skip all parameterization. */
    az_group_export_command_builder.prototype.skipAllParams = function (value) {
        this.setFlag("--skip-all-params", value);
        return this;
    };
    /** Export template and skip resource name parameterization. */
    az_group_export_command_builder.prototype.skipResourceNameParams = function (value) {
        this.setFlag("--skip-resource-name-params", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_group_export_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_group_export_command_builder;
}(base_1.CommandBuilder));
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
var az_group_list_command_builder = /** @class */ (function (_super) {
    __extends(az_group_list_command_builder, _super);
    function az_group_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_group_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_group_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** A single tag in 'key[=value]' format. Use "" to clear existing tags. */
    az_group_list_command_builder.prototype.tag = function (value) {
        this.setFlag("--tag", value);
        return this;
    };
    return az_group_list_command_builder;
}(base_1.CommandBuilder));
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
var az_group_show_command_builder = /** @class */ (function (_super) {
    __extends(az_group_show_command_builder, _super);
    function az_group_show_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_group_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_group_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_group_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_group_show_command_builder;
}(base_1.CommandBuilder));
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
var az_group_update_command_builder = /** @class */ (function (_super) {
    __extends(az_group_update_command_builder, _super);
    function az_group_update_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_group_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_group_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_group_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_group_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_group_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_group_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_group_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_group_update_command_builder;
}(base_1.CommandBuilder));
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
var az_group_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_group_wait_command_builder, _super);
    function az_group_wait_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_group_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_group_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_group_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_group_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_group_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_group_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_group_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_group_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_group_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_group_wait_command_builder;
}(base_1.CommandBuilder));
