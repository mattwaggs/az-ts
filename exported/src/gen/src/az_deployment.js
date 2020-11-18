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
exports.az_deployment = exports.az_deployment_scripts = exports.az_deployment_tenant = exports.az_deployment_sub = exports.az_deployment_operation = exports.az_deployment_operation_tenant = exports.az_deployment_operation_sub = exports.az_deployment_operation_mg = exports.az_deployment_operation_group = exports.az_deployment_mg = exports.az_deployment_group = void 0;
var base_1 = require("../base");
/** Manage Azure Resource Manager template deployment at resource group. */
var az_deployment_group = /** @class */ (function () {
    function az_deployment_group() {
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
    az_deployment_group.cancel = function (name, resourceGroup) {
        return new az_deployment_group_cancel_command_builder("az deployment group cancel", 'az_deployment_group_cancel_command_result', name, resourceGroup);
    };
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
     *                            [--template-spec]
     *                            [--template-uri]
     *                            [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
     *                            [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
     * ```
     *
     * @param {string} resourceGroup The resource group to create deployment at.
     */
    az_deployment_group.create = function (resourceGroup) {
        return new az_deployment_group_create_command_builder("az deployment group create", 'az_deployment_group_create_command_result', resourceGroup);
    };
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
    az_deployment_group["delete"] = function (name, resourceGroup) {
        return new az_deployment_group_delete_command_builder("az deployment group delete", 'az_deployment_group_delete_command_result', name, resourceGroup);
    };
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
    az_deployment_group["export"] = function (name, resourceGroup) {
        return new az_deployment_group_export_command_builder("az deployment group export", 'az_deployment_group_export_command_result', name, resourceGroup);
    };
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
    az_deployment_group.list = function (resourceGroup) {
        return new az_deployment_group_list_command_builder("az deployment group list", 'az_deployment_group_list_command_result', resourceGroup);
    };
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
    az_deployment_group.show = function (name, resourceGroup) {
        return new az_deployment_group_show_command_builder("az deployment group show", 'az_deployment_group_show_command_result', name, resourceGroup);
    };
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
     *                              [--template-spec]
     *                              [--template-uri]
     * ```
     *
     * @param {string} resourceGroup The resource group to create deployment at.
     */
    az_deployment_group.validate = function (resourceGroup) {
        return new az_deployment_group_validate_command_builder("az deployment group validate", 'az_deployment_group_validate_command_result', resourceGroup);
    };
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
    az_deployment_group.wait = function (name, resourceGroup) {
        return new az_deployment_group_wait_command_builder("az deployment group wait", 'az_deployment_group_wait_command_result', name, resourceGroup);
    };
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
     *                             [--template-spec]
     *                             [--template-uri]
     * ```
     *
     * @param {string} resourceGroup The resource group to execute deployment What-If operation at.
     */
    az_deployment_group.what_if = function (resourceGroup) {
        return new az_deployment_group_what_if_command_builder("az deployment group what-if", 'az_deployment_group_what_if_command_result', resourceGroup);
    };
    return az_deployment_group;
}());
exports.az_deployment_group = az_deployment_group;
/** Manage Azure Resource Manager template deployment at management group. */
var az_deployment_mg = /** @class */ (function () {
    function az_deployment_mg() {
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
    az_deployment_mg.cancel = function (managementGroupId, name) {
        return new az_deployment_mg_cancel_command_builder("az deployment mg cancel", 'az_deployment_mg_cancel_command_result', managementGroupId, name);
    };
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
     *                         [--template-spec]
     *                         [--template-uri]
     *                         [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
     *                         [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     * @param {string} managementGroupId The management group id to create deployment at.
     */
    az_deployment_mg.create = function (location, managementGroupId) {
        return new az_deployment_mg_create_command_builder("az deployment mg create", 'az_deployment_mg_create_command_result', location, managementGroupId);
    };
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
    az_deployment_mg["delete"] = function (managementGroupId, name) {
        return new az_deployment_mg_delete_command_builder("az deployment mg delete", 'az_deployment_mg_delete_command_result', managementGroupId, name);
    };
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
    az_deployment_mg["export"] = function (managementGroupId, name) {
        return new az_deployment_mg_export_command_builder("az deployment mg export", 'az_deployment_mg_export_command_result', managementGroupId, name);
    };
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
    az_deployment_mg.list = function (managementGroupId) {
        return new az_deployment_mg_list_command_builder("az deployment mg list", 'az_deployment_mg_list_command_result', managementGroupId);
    };
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
    az_deployment_mg.show = function (managementGroupId, name) {
        return new az_deployment_mg_show_command_builder("az deployment mg show", 'az_deployment_mg_show_command_result', managementGroupId, name);
    };
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
     *                           [--template-spec]
     *                           [--template-uri]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     * @param {string} managementGroupId The management group id to create deployment at.
     */
    az_deployment_mg.validate = function (location, managementGroupId) {
        return new az_deployment_mg_validate_command_builder("az deployment mg validate", 'az_deployment_mg_validate_command_result', location, managementGroupId);
    };
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
    az_deployment_mg.wait = function (managementGroupId, name) {
        return new az_deployment_mg_wait_command_builder("az deployment mg wait", 'az_deployment_mg_wait_command_result', managementGroupId, name);
    };
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
     *                          [--template-spec]
     *                          [--template-uri]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     * @param {string} managementGroupId The management group id to create deployment at.
     */
    az_deployment_mg.what_if = function (location, managementGroupId) {
        return new az_deployment_mg_what_if_command_builder("az deployment mg what-if", 'az_deployment_mg_what_if_command_result', location, managementGroupId);
    };
    return az_deployment_mg;
}());
exports.az_deployment_mg = az_deployment_mg;
/** Manage deployment operations at resource group. */
var az_deployment_operation_group = /** @class */ (function () {
    function az_deployment_operation_group() {
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
    az_deployment_operation_group.list = function (name, resourceGroup) {
        return new az_deployment_operation_group_list_command_builder("az deployment operation group list", 'az_deployment_operation_group_list_command_result', name, resourceGroup);
    };
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
    az_deployment_operation_group.show = function (name, operationIds, resourceGroup) {
        return new az_deployment_operation_group_show_command_builder("az deployment operation group show", 'az_deployment_operation_group_show_command_result', name, operationIds, resourceGroup);
    };
    return az_deployment_operation_group;
}());
exports.az_deployment_operation_group = az_deployment_operation_group;
/** Manage deployment operations at management group. */
var az_deployment_operation_mg = /** @class */ (function () {
    function az_deployment_operation_mg() {
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
    az_deployment_operation_mg.list = function (managementGroupId, name) {
        return new az_deployment_operation_mg_list_command_builder("az deployment operation mg list", 'az_deployment_operation_mg_list_command_result', managementGroupId, name);
    };
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
    az_deployment_operation_mg.show = function (managementGroupId, name, operationIds) {
        return new az_deployment_operation_mg_show_command_builder("az deployment operation mg show", 'az_deployment_operation_mg_show_command_result', managementGroupId, name, operationIds);
    };
    return az_deployment_operation_mg;
}());
exports.az_deployment_operation_mg = az_deployment_operation_mg;
/** Manage deployment operations at subscription scope. */
var az_deployment_operation_sub = /** @class */ (function () {
    function az_deployment_operation_sub() {
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
    az_deployment_operation_sub.list = function (name) {
        return new az_deployment_operation_sub_list_command_builder("az deployment operation sub list", 'az_deployment_operation_sub_list_command_result', name);
    };
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
    az_deployment_operation_sub.show = function (name, operationIds) {
        return new az_deployment_operation_sub_show_command_builder("az deployment operation sub show", 'az_deployment_operation_sub_show_command_result', name, operationIds);
    };
    return az_deployment_operation_sub;
}());
exports.az_deployment_operation_sub = az_deployment_operation_sub;
/** Manage deployment operations at tenant scope. */
var az_deployment_operation_tenant = /** @class */ (function () {
    function az_deployment_operation_tenant() {
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
    az_deployment_operation_tenant.list = function (name) {
        return new az_deployment_operation_tenant_list_command_builder("az deployment operation tenant list", 'az_deployment_operation_tenant_list_command_result', name);
    };
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
    az_deployment_operation_tenant.show = function (name, operationIds) {
        return new az_deployment_operation_tenant_show_command_builder("az deployment operation tenant show", 'az_deployment_operation_tenant_show_command_result', name, operationIds);
    };
    return az_deployment_operation_tenant;
}());
exports.az_deployment_operation_tenant = az_deployment_operation_tenant;
/** Manage deployment operations at subscription scope. */
var az_deployment_operation = /** @class */ (function () {
    function az_deployment_operation() {
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
    az_deployment_operation.list = function (name) {
        return new az_deployment_operation_list_command_builder("az deployment operation list", 'az_deployment_operation_list_command_result', name);
    };
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
    az_deployment_operation.show = function (name, operationIds) {
        return new az_deployment_operation_show_command_builder("az deployment operation show", 'az_deployment_operation_show_command_result', name, operationIds);
    };
    return az_deployment_operation;
}());
exports.az_deployment_operation = az_deployment_operation;
/** Manage Azure Resource Manager template deployment at subscription scope. */
var az_deployment_sub = /** @class */ (function () {
    function az_deployment_sub() {
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
    az_deployment_sub.cancel = function (name) {
        return new az_deployment_sub_cancel_command_builder("az deployment sub cancel", 'az_deployment_sub_cancel_command_result', name);
    };
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
     *                          [--template-spec]
     *                          [--template-uri]
     *                          [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
     *                          [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     */
    az_deployment_sub.create = function (location) {
        return new az_deployment_sub_create_command_builder("az deployment sub create", 'az_deployment_sub_create_command_result', location);
    };
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
    az_deployment_sub["delete"] = function (name) {
        return new az_deployment_sub_delete_command_builder("az deployment sub delete", 'az_deployment_sub_delete_command_result', name);
    };
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
    az_deployment_sub["export"] = function (name) {
        return new az_deployment_sub_export_command_builder("az deployment sub export", 'az_deployment_sub_export_command_result', name);
    };
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
    az_deployment_sub.list = function () {
        return new az_deployment_sub_list_command_builder("az deployment sub list", 'az_deployment_sub_list_command_result');
    };
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
    az_deployment_sub.show = function (name) {
        return new az_deployment_sub_show_command_builder("az deployment sub show", 'az_deployment_sub_show_command_result', name);
    };
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
     *                            [--template-spec]
     *                            [--template-uri]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     */
    az_deployment_sub.validate = function (location) {
        return new az_deployment_sub_validate_command_builder("az deployment sub validate", 'az_deployment_sub_validate_command_result', location);
    };
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
    az_deployment_sub.wait = function (name) {
        return new az_deployment_sub_wait_command_builder("az deployment sub wait", 'az_deployment_sub_wait_command_result', name);
    };
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
     *                           [--template-spec]
     *                           [--template-uri]
     * ```
     *
     * @param {string} location The location to store the deployment What-If operation metadata.
     */
    az_deployment_sub.what_if = function (location) {
        return new az_deployment_sub_what_if_command_builder("az deployment sub what-if", 'az_deployment_sub_what_if_command_result', location);
    };
    return az_deployment_sub;
}());
exports.az_deployment_sub = az_deployment_sub;
/** Manage Azure Resource Manager template deployment at tenant scope. */
var az_deployment_tenant = /** @class */ (function () {
    function az_deployment_tenant() {
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
    az_deployment_tenant.cancel = function (name) {
        return new az_deployment_tenant_cancel_command_builder("az deployment tenant cancel", 'az_deployment_tenant_cancel_command_result', name);
    };
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
     *                             [--template-spec]
     *                             [--template-uri]
     *                             [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
     *                             [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     */
    az_deployment_tenant.create = function (location) {
        return new az_deployment_tenant_create_command_builder("az deployment tenant create", 'az_deployment_tenant_create_command_result', location);
    };
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
    az_deployment_tenant["delete"] = function (name) {
        return new az_deployment_tenant_delete_command_builder("az deployment tenant delete", 'az_deployment_tenant_delete_command_result', name);
    };
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
    az_deployment_tenant["export"] = function (name) {
        return new az_deployment_tenant_export_command_builder("az deployment tenant export", 'az_deployment_tenant_export_command_result', name);
    };
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
    az_deployment_tenant.list = function () {
        return new az_deployment_tenant_list_command_builder("az deployment tenant list", 'az_deployment_tenant_list_command_result');
    };
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
    az_deployment_tenant.show = function (name) {
        return new az_deployment_tenant_show_command_builder("az deployment tenant show", 'az_deployment_tenant_show_command_result', name);
    };
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
     *                               [--template-spec]
     *                               [--template-uri]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     */
    az_deployment_tenant.validate = function (location) {
        return new az_deployment_tenant_validate_command_builder("az deployment tenant validate", 'az_deployment_tenant_validate_command_result', location);
    };
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
    az_deployment_tenant.wait = function (name) {
        return new az_deployment_tenant_wait_command_builder("az deployment tenant wait", 'az_deployment_tenant_wait_command_result', name);
    };
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
     *                              [--template-spec]
     *                              [--template-uri]
     * ```
     *
     * @param {string} location The location to store the deployment What-If operation metadata.
     */
    az_deployment_tenant.what_if = function (location) {
        return new az_deployment_tenant_what_if_command_builder("az deployment tenant what-if", 'az_deployment_tenant_what_if_command_result', location);
    };
    return az_deployment_tenant;
}());
exports.az_deployment_tenant = az_deployment_tenant;
/** Manage deployment scripts at subscription or resource group scope. */
var az_deployment_scripts = /** @class */ (function () {
    function az_deployment_scripts() {
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
    az_deployment_scripts["delete"] = function (name, resourceGroup) {
        return new az_deployment_scripts_delete_command_builder("az deployment-scripts delete", 'az_deployment_scripts_delete_command_result', name, resourceGroup);
    };
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
    az_deployment_scripts.list = function () {
        return new az_deployment_scripts_list_command_builder("az deployment-scripts list", 'az_deployment_scripts_list_command_result');
    };
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
    az_deployment_scripts.show = function (name, resourceGroup) {
        return new az_deployment_scripts_show_command_builder("az deployment-scripts show", 'az_deployment_scripts_show_command_result', name, resourceGroup);
    };
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
    az_deployment_scripts.show_log = function (name, resourceGroup) {
        return new az_deployment_scripts_show_log_command_builder("az deployment-scripts show-log", 'az_deployment_scripts_show_log_command_result', name, resourceGroup);
    };
    return az_deployment_scripts;
}());
exports.az_deployment_scripts = az_deployment_scripts;
/** Manage Azure Resource Manager template deployment at subscription scope. */
var az_deployment = /** @class */ (function () {
    function az_deployment() {
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
    az_deployment.cancel = function (name) {
        return new az_deployment_cancel_command_builder("az deployment cancel", 'az_deployment_cancel_command_result', name);
    };
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
     *                      [--template-spec]
     *                      [--template-uri]
     *                      [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
     *                      [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     */
    az_deployment.create = function (location) {
        return new az_deployment_create_command_builder("az deployment create", 'az_deployment_create_command_result', location);
    };
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
    az_deployment["delete"] = function (name) {
        return new az_deployment_delete_command_builder("az deployment delete", 'az_deployment_delete_command_result', name);
    };
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
    az_deployment["export"] = function (name) {
        return new az_deployment_export_command_builder("az deployment export", 'az_deployment_export_command_result', name);
    };
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
    az_deployment.list = function () {
        return new az_deployment_list_command_builder("az deployment list", 'az_deployment_list_command_result');
    };
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
    az_deployment.show = function (name) {
        return new az_deployment_show_command_builder("az deployment show", 'az_deployment_show_command_result', name);
    };
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
     *                        [--template-spec]
     *                        [--template-uri]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     */
    az_deployment.validate = function (location) {
        return new az_deployment_validate_command_builder("az deployment validate", 'az_deployment_validate_command_result', location);
    };
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
    az_deployment.wait = function (name) {
        return new az_deployment_wait_command_builder("az deployment wait", 'az_deployment_wait_command_result', name);
    };
    return az_deployment;
}());
exports.az_deployment = az_deployment;
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
var az_deployment_group_cancel_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_group_cancel_command_builder, _super);
    function az_deployment_group_cancel_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The deployment name. */
    az_deployment_group_cancel_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deployment_group_cancel_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_group_cancel_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_group_cancel_command_builder;
}(base_1.CommandBuilder));
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
 *                            [--template-spec]
 *                            [--template-uri]
 *                            [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
 *                            [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
 * ```
 *
 * @param {string} resourceGroup The resource group to create deployment at.
 */
var az_deployment_group_create_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_group_create_command_builder, _super);
    function az_deployment_group_create_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource group to create deployment at. */
    az_deployment_group_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Auxiliary subscriptions which will be used during deployment across tenants. */
    az_deployment_group_create_command_builder.prototype.auxSubs = function (value) {
        this.setFlag("--aux-subs", value);
        return this;
    };
    /** Auxiliary tenants which will be used during deployment across tenants. */
    az_deployment_group_create_command_builder.prototype.auxTenants = function (value) {
        this.setFlag("--aux-tenants", value);
        return this;
    };
    /** Instruct the command to run deployment What-If before executing the deployment. It then prompts you to acknowledge resource changes before it continues. */
    az_deployment_group_create_command_builder.prototype.confirmWithWhatIf = function (value) {
        this.setFlag("--confirm-with-what-if", value);
        return this;
    };
    /** Support to handle extended template content including multiline and comments in deployment. */
    az_deployment_group_create_command_builder.prototype.handleExtendedJsonFormat = function (value) {
        this.setFlag("--handle-extended-json-format", value);
        return this;
    };
    /** The deployment mode. */
    az_deployment_group_create_command_builder.prototype.mode = function (value) {
        this.setFlag("--mode", value);
        return this;
    };
    /** The deployment name. */
    az_deployment_group_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    az_deployment_group_create_command_builder.prototype.noPrompt = function (value) {
        this.setFlag("--no-prompt", value.toString());
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_deployment_group_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Supply deployment parameter values. */
    az_deployment_group_create_command_builder.prototype.parameters = function (value) {
        this.setFlag("--parameters", value);
        return this;
    };
    /** The name of a deployment to roll back to on error, or use as a flag to roll back to the last successful deployment. */
    az_deployment_group_create_command_builder.prototype.rollbackOnError = function (value) {
        this.setFlag("--rollback-on-error", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_group_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The path to the template file. */
    az_deployment_group_create_command_builder.prototype.templateFile = function (value) {
        this.setFlag("--template-file", value);
        return this;
    };
    /** The template spec resource id. */
    az_deployment_group_create_command_builder.prototype.templateSpec = function (value) {
        this.setFlag("--template-spec", value);
        return this;
    };
    /** The URI to the template file. */
    az_deployment_group_create_command_builder.prototype.templateUri = function (value) {
        this.setFlag("--template-uri", value);
        return this;
    };
    /** Space-separated list of resource change types to be excluded from What-If results. Applicable when --confirm-with-what-if is set. */
    az_deployment_group_create_command_builder.prototype.whatIfExcludeChangeTypes = function (value) {
        this.setFlag("--what-if-exclude-change-types", value);
        return this;
    };
    /** The format of What-If results. Applicable when `--confirm-with-what-if` is set. */
    az_deployment_group_create_command_builder.prototype.whatIfResultFormat = function (value) {
        this.setFlag("--what-if-result-format", value);
        return this;
    };
    return az_deployment_group_create_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_group_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_group_delete_command_builder, _super);
    function az_deployment_group_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The deployment name. */
    az_deployment_group_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deployment_group_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_deployment_group_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_group_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_group_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_group_export_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_group_export_command_builder, _super);
    function az_deployment_group_export_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The deployment name. */
    az_deployment_group_export_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deployment_group_export_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_group_export_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_group_export_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_group_list_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_group_list_command_builder, _super);
    function az_deployment_group_list_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deployment_group_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Filter expression using OData notation. You can use --filter "provisioningState eq '{state}'" to filter provisioningState. To get more information, please visit <a href="https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters">https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters</a>. */
    az_deployment_group_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deployment_group_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_group_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_group_list_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_group_show_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_group_show_command_builder, _super);
    function az_deployment_group_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The deployment name. */
    az_deployment_group_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deployment_group_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deployment_group_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_group_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_group_show_command_builder;
}(base_1.CommandBuilder));
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
 *                              [--template-spec]
 *                              [--template-uri]
 * ```
 *
 * @param {string} resourceGroup The resource group to create deployment at.
 */
var az_deployment_group_validate_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_group_validate_command_builder, _super);
    function az_deployment_group_validate_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource group to create deployment at. */
    az_deployment_group_validate_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Support to handle extended template content including multiline and comments in deployment. */
    az_deployment_group_validate_command_builder.prototype.handleExtendedJsonFormat = function (value) {
        this.setFlag("--handle-extended-json-format", value);
        return this;
    };
    /** The deployment mode. */
    az_deployment_group_validate_command_builder.prototype.mode = function (value) {
        this.setFlag("--mode", value);
        return this;
    };
    /** The deployment name. */
    az_deployment_group_validate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    az_deployment_group_validate_command_builder.prototype.noPrompt = function (value) {
        this.setFlag("--no-prompt", value.toString());
        return this;
    };
    /** Supply deployment parameter values. */
    az_deployment_group_validate_command_builder.prototype.parameters = function (value) {
        this.setFlag("--parameters", value);
        return this;
    };
    /** The name of a deployment to roll back to on error, or use as a flag to roll back to the last successful deployment. */
    az_deployment_group_validate_command_builder.prototype.rollbackOnError = function (value) {
        this.setFlag("--rollback-on-error", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_group_validate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The path to the template file. */
    az_deployment_group_validate_command_builder.prototype.templateFile = function (value) {
        this.setFlag("--template-file", value);
        return this;
    };
    /** The template spec resource id. */
    az_deployment_group_validate_command_builder.prototype.templateSpec = function (value) {
        this.setFlag("--template-spec", value);
        return this;
    };
    /** The URI to the template file. */
    az_deployment_group_validate_command_builder.prototype.templateUri = function (value) {
        this.setFlag("--template-uri", value);
        return this;
    };
    return az_deployment_group_validate_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_group_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_group_wait_command_builder, _super);
    function az_deployment_group_wait_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The deployment name. */
    az_deployment_group_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deployment_group_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_deployment_group_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_deployment_group_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_deployment_group_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_deployment_group_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_deployment_group_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_group_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_deployment_group_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_deployment_group_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_deployment_group_wait_command_builder;
}(base_1.CommandBuilder));
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
 *                             [--template-spec]
 *                             [--template-uri]
 * ```
 *
 * @param {string} resourceGroup The resource group to execute deployment What-If operation at.
 */
var az_deployment_group_what_if_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_group_what_if_command_builder, _super);
    function az_deployment_group_what_if_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource group to execute deployment What-If operation at. */
    az_deployment_group_what_if_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Auxiliary tenants which will be used during deployment across tenants. */
    az_deployment_group_what_if_command_builder.prototype.auxTenants = function (value) {
        this.setFlag("--aux-tenants", value);
        return this;
    };
    /** Space-separated list of resource change types to be excluded from What-If results. */
    az_deployment_group_what_if_command_builder.prototype.excludeChangeTypes = function (value) {
        this.setFlag("--exclude-change-types", value);
        return this;
    };
    /** The deployment mode. */
    az_deployment_group_what_if_command_builder.prototype.mode = function (value) {
        this.setFlag("--mode", value);
        return this;
    };
    /** The deployment name. */
    az_deployment_group_what_if_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Disable pretty-print for What-If results. When set, the output format type will be used. */
    az_deployment_group_what_if_command_builder.prototype.noPrettyPrint = function (value) {
        this.setFlag("--no-pretty-print", value);
        return this;
    };
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    az_deployment_group_what_if_command_builder.prototype.noPrompt = function (value) {
        this.setFlag("--no-prompt", value.toString());
        return this;
    };
    /** Supply deployment parameter values. */
    az_deployment_group_what_if_command_builder.prototype.parameters = function (value) {
        this.setFlag("--parameters", value);
        return this;
    };
    /** The format of What-If results. */
    az_deployment_group_what_if_command_builder.prototype.resultFormat = function (value) {
        this.setFlag("--result-format", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_group_what_if_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The path to the template file. */
    az_deployment_group_what_if_command_builder.prototype.templateFile = function (value) {
        this.setFlag("--template-file", value);
        return this;
    };
    /** The template spec resource id. */
    az_deployment_group_what_if_command_builder.prototype.templateSpec = function (value) {
        this.setFlag("--template-spec", value);
        return this;
    };
    /** The URI to the template file. */
    az_deployment_group_what_if_command_builder.prototype.templateUri = function (value) {
        this.setFlag("--template-uri", value);
        return this;
    };
    return az_deployment_group_what_if_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_mg_cancel_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_mg_cancel_command_builder, _super);
    function az_deployment_mg_cancel_command_builder(commandPath, resultDataTypeName, managementGroupId, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.managementGroupId(managementGroupId);
        _this.name(name);
        return _this;
    }
    /** The management group id. */
    az_deployment_mg_cancel_command_builder.prototype.managementGroupId = function (value) {
        this.setFlag("--management-group-id", value);
        return this;
    };
    /** The deployment name. */
    az_deployment_mg_cancel_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_mg_cancel_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_mg_cancel_command_builder;
}(base_1.CommandBuilder));
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
 *                         [--template-spec]
 *                         [--template-uri]
 *                         [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
 *                         [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 * @param {string} managementGroupId The management group id to create deployment at.
 */
var az_deployment_mg_create_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_mg_create_command_builder, _super);
    function az_deployment_mg_create_command_builder(commandPath, resultDataTypeName, location, managementGroupId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.managementGroupId(managementGroupId);
        return _this;
    }
    /** The location to store the deployment metadata. */
    az_deployment_mg_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The management group id to create deployment at. */
    az_deployment_mg_create_command_builder.prototype.managementGroupId = function (value) {
        this.setFlag("--management-group-id", value);
        return this;
    };
    /** Instruct the command to run deployment What-If before executing the deployment. It then prompts you to acknowledge resource changes before it continues. */
    az_deployment_mg_create_command_builder.prototype.confirmWithWhatIf = function (value) {
        this.setFlag("--confirm-with-what-if", value);
        return this;
    };
    /** Support to handle extended template content including multiline and comments in deployment. */
    az_deployment_mg_create_command_builder.prototype.handleExtendedJsonFormat = function (value) {
        this.setFlag("--handle-extended-json-format", value);
        return this;
    };
    /** The deployment name. */
    az_deployment_mg_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    az_deployment_mg_create_command_builder.prototype.noPrompt = function (value) {
        this.setFlag("--no-prompt", value.toString());
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_deployment_mg_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Supply deployment parameter values. */
    az_deployment_mg_create_command_builder.prototype.parameters = function (value) {
        this.setFlag("--parameters", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_mg_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The path to the template file. */
    az_deployment_mg_create_command_builder.prototype.templateFile = function (value) {
        this.setFlag("--template-file", value);
        return this;
    };
    /** The template spec resource id. */
    az_deployment_mg_create_command_builder.prototype.templateSpec = function (value) {
        this.setFlag("--template-spec", value);
        return this;
    };
    /** The URI to the template file. */
    az_deployment_mg_create_command_builder.prototype.templateUri = function (value) {
        this.setFlag("--template-uri", value);
        return this;
    };
    /** Space-separated list of resource change types to be excluded from What-If results. Applicable when --confirm-with-what-if is set. */
    az_deployment_mg_create_command_builder.prototype.whatIfExcludeChangeTypes = function (value) {
        this.setFlag("--what-if-exclude-change-types", value);
        return this;
    };
    /** The format of What-If results. Applicable when `--confirm-with-what-if` is set. */
    az_deployment_mg_create_command_builder.prototype.whatIfResultFormat = function (value) {
        this.setFlag("--what-if-result-format", value);
        return this;
    };
    return az_deployment_mg_create_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_mg_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_mg_delete_command_builder, _super);
    function az_deployment_mg_delete_command_builder(commandPath, resultDataTypeName, managementGroupId, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.managementGroupId(managementGroupId);
        _this.name(name);
        return _this;
    }
    /** The management group id. */
    az_deployment_mg_delete_command_builder.prototype.managementGroupId = function (value) {
        this.setFlag("--management-group-id", value);
        return this;
    };
    /** The deployment name. */
    az_deployment_mg_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_deployment_mg_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_mg_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_mg_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_mg_export_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_mg_export_command_builder, _super);
    function az_deployment_mg_export_command_builder(commandPath, resultDataTypeName, managementGroupId, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.managementGroupId(managementGroupId);
        _this.name(name);
        return _this;
    }
    /** The management group id. */
    az_deployment_mg_export_command_builder.prototype.managementGroupId = function (value) {
        this.setFlag("--management-group-id", value);
        return this;
    };
    /** The deployment name. */
    az_deployment_mg_export_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_mg_export_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_mg_export_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_mg_list_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_mg_list_command_builder, _super);
    function az_deployment_mg_list_command_builder(commandPath, resultDataTypeName, managementGroupId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.managementGroupId(managementGroupId);
        return _this;
    }
    /** The management group id. */
    az_deployment_mg_list_command_builder.prototype.managementGroupId = function (value) {
        this.setFlag("--management-group-id", value);
        return this;
    };
    /** Filter expression using OData notation. You can use --filter "provisioningState eq '{state}'" to filter provisioningState. To get more information, please visit <a href="https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters">https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters</a>. */
    az_deployment_mg_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deployment_mg_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_mg_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_mg_list_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_mg_show_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_mg_show_command_builder, _super);
    function az_deployment_mg_show_command_builder(commandPath, resultDataTypeName, managementGroupId, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.managementGroupId(managementGroupId);
        _this.name(name);
        return _this;
    }
    /** The management group id. */
    az_deployment_mg_show_command_builder.prototype.managementGroupId = function (value) {
        this.setFlag("--management-group-id", value);
        return this;
    };
    /** The deployment name. */
    az_deployment_mg_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deployment_mg_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_mg_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_mg_show_command_builder;
}(base_1.CommandBuilder));
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
 *                           [--template-spec]
 *                           [--template-uri]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 * @param {string} managementGroupId The management group id to create deployment at.
 */
var az_deployment_mg_validate_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_mg_validate_command_builder, _super);
    function az_deployment_mg_validate_command_builder(commandPath, resultDataTypeName, location, managementGroupId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.managementGroupId(managementGroupId);
        return _this;
    }
    /** The location to store the deployment metadata. */
    az_deployment_mg_validate_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The management group id to create deployment at. */
    az_deployment_mg_validate_command_builder.prototype.managementGroupId = function (value) {
        this.setFlag("--management-group-id", value);
        return this;
    };
    /** Support to handle extended template content including multiline and comments in deployment. */
    az_deployment_mg_validate_command_builder.prototype.handleExtendedJsonFormat = function (value) {
        this.setFlag("--handle-extended-json-format", value);
        return this;
    };
    /** The deployment name. */
    az_deployment_mg_validate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    az_deployment_mg_validate_command_builder.prototype.noPrompt = function (value) {
        this.setFlag("--no-prompt", value.toString());
        return this;
    };
    /** Supply deployment parameter values. */
    az_deployment_mg_validate_command_builder.prototype.parameters = function (value) {
        this.setFlag("--parameters", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_mg_validate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The path to the template file. */
    az_deployment_mg_validate_command_builder.prototype.templateFile = function (value) {
        this.setFlag("--template-file", value);
        return this;
    };
    /** The template spec resource id. */
    az_deployment_mg_validate_command_builder.prototype.templateSpec = function (value) {
        this.setFlag("--template-spec", value);
        return this;
    };
    /** The URI to the template file. */
    az_deployment_mg_validate_command_builder.prototype.templateUri = function (value) {
        this.setFlag("--template-uri", value);
        return this;
    };
    return az_deployment_mg_validate_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_mg_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_mg_wait_command_builder, _super);
    function az_deployment_mg_wait_command_builder(commandPath, resultDataTypeName, managementGroupId, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.managementGroupId(managementGroupId);
        _this.name(name);
        return _this;
    }
    /** The management group id. */
    az_deployment_mg_wait_command_builder.prototype.managementGroupId = function (value) {
        this.setFlag("--management-group-id", value);
        return this;
    };
    /** The deployment name. */
    az_deployment_mg_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_deployment_mg_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_deployment_mg_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_deployment_mg_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_deployment_mg_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_deployment_mg_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_mg_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_deployment_mg_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_deployment_mg_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_deployment_mg_wait_command_builder;
}(base_1.CommandBuilder));
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
 *                          [--template-spec]
 *                          [--template-uri]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 * @param {string} managementGroupId The management group id to create deployment at.
 */
var az_deployment_mg_what_if_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_mg_what_if_command_builder, _super);
    function az_deployment_mg_what_if_command_builder(commandPath, resultDataTypeName, location, managementGroupId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.managementGroupId(managementGroupId);
        return _this;
    }
    /** The location to store the deployment metadata. */
    az_deployment_mg_what_if_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The management group id to create deployment at. */
    az_deployment_mg_what_if_command_builder.prototype.managementGroupId = function (value) {
        this.setFlag("--management-group-id", value);
        return this;
    };
    /** Space-separated list of resource change types to be excluded from What-If results. */
    az_deployment_mg_what_if_command_builder.prototype.excludeChangeTypes = function (value) {
        this.setFlag("--exclude-change-types", value);
        return this;
    };
    /** The deployment name. */
    az_deployment_mg_what_if_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Disable pretty-print for What-If results. When set, the output format type will be used. */
    az_deployment_mg_what_if_command_builder.prototype.noPrettyPrint = function (value) {
        this.setFlag("--no-pretty-print", value);
        return this;
    };
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    az_deployment_mg_what_if_command_builder.prototype.noPrompt = function (value) {
        this.setFlag("--no-prompt", value.toString());
        return this;
    };
    /** Supply deployment parameter values. */
    az_deployment_mg_what_if_command_builder.prototype.parameters = function (value) {
        this.setFlag("--parameters", value);
        return this;
    };
    /** The format of What-If results. */
    az_deployment_mg_what_if_command_builder.prototype.resultFormat = function (value) {
        this.setFlag("--result-format", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_mg_what_if_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The path to the template file. */
    az_deployment_mg_what_if_command_builder.prototype.templateFile = function (value) {
        this.setFlag("--template-file", value);
        return this;
    };
    /** The template spec resource id. */
    az_deployment_mg_what_if_command_builder.prototype.templateSpec = function (value) {
        this.setFlag("--template-spec", value);
        return this;
    };
    /** The URI to the template file. */
    az_deployment_mg_what_if_command_builder.prototype.templateUri = function (value) {
        this.setFlag("--template-uri", value);
        return this;
    };
    return az_deployment_mg_what_if_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_operation_group_list_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_operation_group_list_command_builder, _super);
    function az_deployment_operation_group_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The deployment name. */
    az_deployment_operation_group_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deployment_operation_group_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deployment_operation_group_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_operation_group_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_operation_group_list_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_operation_group_show_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_operation_group_show_command_builder, _super);
    function az_deployment_operation_group_show_command_builder(commandPath, resultDataTypeName, name, operationIds, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.operationIds(operationIds);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The deployment name. */
    az_deployment_operation_group_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** A list of operation ids to show. */
    az_deployment_operation_group_show_command_builder.prototype.operationIds = function (value) {
        this.setFlag("--operation-ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deployment_operation_group_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deployment_operation_group_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_operation_group_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_operation_group_show_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_operation_mg_list_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_operation_mg_list_command_builder, _super);
    function az_deployment_operation_mg_list_command_builder(commandPath, resultDataTypeName, managementGroupId, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.managementGroupId(managementGroupId);
        _this.name(name);
        return _this;
    }
    /** The management group id. */
    az_deployment_operation_mg_list_command_builder.prototype.managementGroupId = function (value) {
        this.setFlag("--management-group-id", value);
        return this;
    };
    /** The deployment name. */
    az_deployment_operation_mg_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deployment_operation_mg_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_operation_mg_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_operation_mg_list_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_operation_mg_show_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_operation_mg_show_command_builder, _super);
    function az_deployment_operation_mg_show_command_builder(commandPath, resultDataTypeName, managementGroupId, name, operationIds) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.managementGroupId(managementGroupId);
        _this.name(name);
        _this.operationIds(operationIds);
        return _this;
    }
    /** The management group id. */
    az_deployment_operation_mg_show_command_builder.prototype.managementGroupId = function (value) {
        this.setFlag("--management-group-id", value);
        return this;
    };
    /** The deployment name. */
    az_deployment_operation_mg_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** A list of operation ids to show. */
    az_deployment_operation_mg_show_command_builder.prototype.operationIds = function (value) {
        this.setFlag("--operation-ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deployment_operation_mg_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_operation_mg_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_operation_mg_show_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_operation_sub_list_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_operation_sub_list_command_builder, _super);
    function az_deployment_operation_sub_list_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The deployment name. */
    az_deployment_operation_sub_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deployment_operation_sub_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_operation_sub_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_operation_sub_list_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_operation_sub_show_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_operation_sub_show_command_builder, _super);
    function az_deployment_operation_sub_show_command_builder(commandPath, resultDataTypeName, name, operationIds) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.operationIds(operationIds);
        return _this;
    }
    /** The deployment name. */
    az_deployment_operation_sub_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** A list of operation ids to show. */
    az_deployment_operation_sub_show_command_builder.prototype.operationIds = function (value) {
        this.setFlag("--operation-ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deployment_operation_sub_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_operation_sub_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_operation_sub_show_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_operation_tenant_list_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_operation_tenant_list_command_builder, _super);
    function az_deployment_operation_tenant_list_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The deployment name. */
    az_deployment_operation_tenant_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deployment_operation_tenant_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_operation_tenant_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_operation_tenant_list_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_operation_tenant_show_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_operation_tenant_show_command_builder, _super);
    function az_deployment_operation_tenant_show_command_builder(commandPath, resultDataTypeName, name, operationIds) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.operationIds(operationIds);
        return _this;
    }
    /** The deployment name. */
    az_deployment_operation_tenant_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** A list of operation ids to show. */
    az_deployment_operation_tenant_show_command_builder.prototype.operationIds = function (value) {
        this.setFlag("--operation-ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deployment_operation_tenant_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_operation_tenant_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_operation_tenant_show_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_operation_list_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_operation_list_command_builder, _super);
    function az_deployment_operation_list_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The deployment name. */
    az_deployment_operation_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deployment_operation_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_operation_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_operation_list_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_operation_show_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_operation_show_command_builder, _super);
    function az_deployment_operation_show_command_builder(commandPath, resultDataTypeName, name, operationIds) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.operationIds(operationIds);
        return _this;
    }
    /** The deployment name. */
    az_deployment_operation_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** A list of operation ids to show. */
    az_deployment_operation_show_command_builder.prototype.operationIds = function (value) {
        this.setFlag("--operation-ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deployment_operation_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_operation_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_operation_show_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_sub_cancel_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_sub_cancel_command_builder, _super);
    function az_deployment_sub_cancel_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The deployment name. */
    az_deployment_sub_cancel_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_sub_cancel_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_sub_cancel_command_builder;
}(base_1.CommandBuilder));
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
 *                          [--template-spec]
 *                          [--template-uri]
 *                          [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
 *                          [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 */
var az_deployment_sub_create_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_sub_create_command_builder, _super);
    function az_deployment_sub_create_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** The location to store the deployment metadata. */
    az_deployment_sub_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Instruct the command to run deployment What-If before executing the deployment. It then prompts you to acknowledge resource changes before it continues. */
    az_deployment_sub_create_command_builder.prototype.confirmWithWhatIf = function (value) {
        this.setFlag("--confirm-with-what-if", value);
        return this;
    };
    /** Support to handle extended template content including multiline and comments in deployment. */
    az_deployment_sub_create_command_builder.prototype.handleExtendedJsonFormat = function (value) {
        this.setFlag("--handle-extended-json-format", value);
        return this;
    };
    /** The deployment name. */
    az_deployment_sub_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    az_deployment_sub_create_command_builder.prototype.noPrompt = function (value) {
        this.setFlag("--no-prompt", value.toString());
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_deployment_sub_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Supply deployment parameter values. */
    az_deployment_sub_create_command_builder.prototype.parameters = function (value) {
        this.setFlag("--parameters", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_sub_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The path to the template file. */
    az_deployment_sub_create_command_builder.prototype.templateFile = function (value) {
        this.setFlag("--template-file", value);
        return this;
    };
    /** The template spec resource id. */
    az_deployment_sub_create_command_builder.prototype.templateSpec = function (value) {
        this.setFlag("--template-spec", value);
        return this;
    };
    /** The URI to the template file. */
    az_deployment_sub_create_command_builder.prototype.templateUri = function (value) {
        this.setFlag("--template-uri", value);
        return this;
    };
    /** Space-separated list of resource change types to be excluded from What-If results. Applicable when --confirm-with-what-if is set. */
    az_deployment_sub_create_command_builder.prototype.whatIfExcludeChangeTypes = function (value) {
        this.setFlag("--what-if-exclude-change-types", value);
        return this;
    };
    /** The format of What-If results. Applicable when `--confirm-with-what-if` is set. */
    az_deployment_sub_create_command_builder.prototype.whatIfResultFormat = function (value) {
        this.setFlag("--what-if-result-format", value);
        return this;
    };
    return az_deployment_sub_create_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_sub_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_sub_delete_command_builder, _super);
    function az_deployment_sub_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The deployment name. */
    az_deployment_sub_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_deployment_sub_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_sub_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_sub_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_sub_export_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_sub_export_command_builder, _super);
    function az_deployment_sub_export_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The deployment name. */
    az_deployment_sub_export_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_sub_export_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_sub_export_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_sub_list_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_sub_list_command_builder, _super);
    function az_deployment_sub_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Filter expression using OData notation. You can use --filter "provisioningState eq '{state}'" to filter provisioningState. To get more information, please visit <a href="https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters">https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters</a>. */
    az_deployment_sub_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deployment_sub_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_sub_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_sub_list_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_sub_show_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_sub_show_command_builder, _super);
    function az_deployment_sub_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The deployment name. */
    az_deployment_sub_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deployment_sub_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_sub_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_sub_show_command_builder;
}(base_1.CommandBuilder));
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
 *                            [--template-spec]
 *                            [--template-uri]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 */
var az_deployment_sub_validate_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_sub_validate_command_builder, _super);
    function az_deployment_sub_validate_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** The location to store the deployment metadata. */
    az_deployment_sub_validate_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Support to handle extended template content including multiline and comments in deployment. */
    az_deployment_sub_validate_command_builder.prototype.handleExtendedJsonFormat = function (value) {
        this.setFlag("--handle-extended-json-format", value);
        return this;
    };
    /** The deployment name. */
    az_deployment_sub_validate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    az_deployment_sub_validate_command_builder.prototype.noPrompt = function (value) {
        this.setFlag("--no-prompt", value.toString());
        return this;
    };
    /** Supply deployment parameter values. */
    az_deployment_sub_validate_command_builder.prototype.parameters = function (value) {
        this.setFlag("--parameters", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_sub_validate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The path to the template file. */
    az_deployment_sub_validate_command_builder.prototype.templateFile = function (value) {
        this.setFlag("--template-file", value);
        return this;
    };
    /** The template spec resource id. */
    az_deployment_sub_validate_command_builder.prototype.templateSpec = function (value) {
        this.setFlag("--template-spec", value);
        return this;
    };
    /** The URI to the template file. */
    az_deployment_sub_validate_command_builder.prototype.templateUri = function (value) {
        this.setFlag("--template-uri", value);
        return this;
    };
    return az_deployment_sub_validate_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_sub_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_sub_wait_command_builder, _super);
    function az_deployment_sub_wait_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The deployment name. */
    az_deployment_sub_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_deployment_sub_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_deployment_sub_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_deployment_sub_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_deployment_sub_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_deployment_sub_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_sub_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_deployment_sub_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_deployment_sub_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_deployment_sub_wait_command_builder;
}(base_1.CommandBuilder));
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
 *                           [--template-spec]
 *                           [--template-uri]
 * ```
 *
 * @param {string} location The location to store the deployment What-If operation metadata.
 */
var az_deployment_sub_what_if_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_sub_what_if_command_builder, _super);
    function az_deployment_sub_what_if_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** The location to store the deployment What-If operation metadata. */
    az_deployment_sub_what_if_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Space-separated list of resource change types to be excluded from What-If results. */
    az_deployment_sub_what_if_command_builder.prototype.excludeChangeTypes = function (value) {
        this.setFlag("--exclude-change-types", value);
        return this;
    };
    /** The deployment name. */
    az_deployment_sub_what_if_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Disable pretty-print for What-If results. When set, the output format type will be used. */
    az_deployment_sub_what_if_command_builder.prototype.noPrettyPrint = function (value) {
        this.setFlag("--no-pretty-print", value);
        return this;
    };
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    az_deployment_sub_what_if_command_builder.prototype.noPrompt = function (value) {
        this.setFlag("--no-prompt", value.toString());
        return this;
    };
    /** Supply deployment parameter values. */
    az_deployment_sub_what_if_command_builder.prototype.parameters = function (value) {
        this.setFlag("--parameters", value);
        return this;
    };
    /** The format of What-If results. */
    az_deployment_sub_what_if_command_builder.prototype.resultFormat = function (value) {
        this.setFlag("--result-format", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_sub_what_if_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The path to the template file. */
    az_deployment_sub_what_if_command_builder.prototype.templateFile = function (value) {
        this.setFlag("--template-file", value);
        return this;
    };
    /** The template spec resource id. */
    az_deployment_sub_what_if_command_builder.prototype.templateSpec = function (value) {
        this.setFlag("--template-spec", value);
        return this;
    };
    /** The URI to the template file. */
    az_deployment_sub_what_if_command_builder.prototype.templateUri = function (value) {
        this.setFlag("--template-uri", value);
        return this;
    };
    return az_deployment_sub_what_if_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_tenant_cancel_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_tenant_cancel_command_builder, _super);
    function az_deployment_tenant_cancel_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The deployment name. */
    az_deployment_tenant_cancel_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_tenant_cancel_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_tenant_cancel_command_builder;
}(base_1.CommandBuilder));
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
 *                             [--template-spec]
 *                             [--template-uri]
 *                             [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
 *                             [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 */
var az_deployment_tenant_create_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_tenant_create_command_builder, _super);
    function az_deployment_tenant_create_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** The location to store the deployment metadata. */
    az_deployment_tenant_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Instruct the command to run deployment What-If before executing the deployment. It then prompts you to acknowledge resource changes before it continues. */
    az_deployment_tenant_create_command_builder.prototype.confirmWithWhatIf = function (value) {
        this.setFlag("--confirm-with-what-if", value);
        return this;
    };
    /** Support to handle extended template content including multiline and comments in deployment. */
    az_deployment_tenant_create_command_builder.prototype.handleExtendedJsonFormat = function (value) {
        this.setFlag("--handle-extended-json-format", value);
        return this;
    };
    /** The deployment name. */
    az_deployment_tenant_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    az_deployment_tenant_create_command_builder.prototype.noPrompt = function (value) {
        this.setFlag("--no-prompt", value.toString());
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_deployment_tenant_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Supply deployment parameter values. */
    az_deployment_tenant_create_command_builder.prototype.parameters = function (value) {
        this.setFlag("--parameters", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_tenant_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The path to the template file. */
    az_deployment_tenant_create_command_builder.prototype.templateFile = function (value) {
        this.setFlag("--template-file", value);
        return this;
    };
    /** The template spec resource id. */
    az_deployment_tenant_create_command_builder.prototype.templateSpec = function (value) {
        this.setFlag("--template-spec", value);
        return this;
    };
    /** The URI to the template file. */
    az_deployment_tenant_create_command_builder.prototype.templateUri = function (value) {
        this.setFlag("--template-uri", value);
        return this;
    };
    /** Space-separated list of resource change types to be excluded from What-If results. Applicable when --confirm-with-what-if is set. */
    az_deployment_tenant_create_command_builder.prototype.whatIfExcludeChangeTypes = function (value) {
        this.setFlag("--what-if-exclude-change-types", value);
        return this;
    };
    /** The format of What-If results. Applicable when `--confirm-with-what-if` is set. */
    az_deployment_tenant_create_command_builder.prototype.whatIfResultFormat = function (value) {
        this.setFlag("--what-if-result-format", value);
        return this;
    };
    return az_deployment_tenant_create_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_tenant_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_tenant_delete_command_builder, _super);
    function az_deployment_tenant_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The deployment name. */
    az_deployment_tenant_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_deployment_tenant_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_tenant_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_tenant_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_tenant_export_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_tenant_export_command_builder, _super);
    function az_deployment_tenant_export_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The deployment name. */
    az_deployment_tenant_export_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_tenant_export_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_tenant_export_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_tenant_list_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_tenant_list_command_builder, _super);
    function az_deployment_tenant_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Filter expression using OData notation. You can use --filter "provisioningState eq '{state}'" to filter provisioningState. To get more information, please visit <a href="https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters">https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters</a>. */
    az_deployment_tenant_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deployment_tenant_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_tenant_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_tenant_list_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_tenant_show_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_tenant_show_command_builder, _super);
    function az_deployment_tenant_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The deployment name. */
    az_deployment_tenant_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deployment_tenant_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_tenant_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_tenant_show_command_builder;
}(base_1.CommandBuilder));
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
 *                               [--template-spec]
 *                               [--template-uri]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 */
var az_deployment_tenant_validate_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_tenant_validate_command_builder, _super);
    function az_deployment_tenant_validate_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** The location to store the deployment metadata. */
    az_deployment_tenant_validate_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Support to handle extended template content including multiline and comments in deployment. */
    az_deployment_tenant_validate_command_builder.prototype.handleExtendedJsonFormat = function (value) {
        this.setFlag("--handle-extended-json-format", value);
        return this;
    };
    /** The deployment name. */
    az_deployment_tenant_validate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    az_deployment_tenant_validate_command_builder.prototype.noPrompt = function (value) {
        this.setFlag("--no-prompt", value.toString());
        return this;
    };
    /** Supply deployment parameter values. */
    az_deployment_tenant_validate_command_builder.prototype.parameters = function (value) {
        this.setFlag("--parameters", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_tenant_validate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The path to the template file. */
    az_deployment_tenant_validate_command_builder.prototype.templateFile = function (value) {
        this.setFlag("--template-file", value);
        return this;
    };
    /** The template spec resource id. */
    az_deployment_tenant_validate_command_builder.prototype.templateSpec = function (value) {
        this.setFlag("--template-spec", value);
        return this;
    };
    /** The URI to the template file. */
    az_deployment_tenant_validate_command_builder.prototype.templateUri = function (value) {
        this.setFlag("--template-uri", value);
        return this;
    };
    return az_deployment_tenant_validate_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_tenant_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_tenant_wait_command_builder, _super);
    function az_deployment_tenant_wait_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The deployment name. */
    az_deployment_tenant_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_deployment_tenant_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_deployment_tenant_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_deployment_tenant_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_deployment_tenant_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_deployment_tenant_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_tenant_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_deployment_tenant_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_deployment_tenant_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_deployment_tenant_wait_command_builder;
}(base_1.CommandBuilder));
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
 *                              [--template-spec]
 *                              [--template-uri]
 * ```
 *
 * @param {string} location The location to store the deployment What-If operation metadata.
 */
var az_deployment_tenant_what_if_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_tenant_what_if_command_builder, _super);
    function az_deployment_tenant_what_if_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** The location to store the deployment What-If operation metadata. */
    az_deployment_tenant_what_if_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Space-separated list of resource change types to be excluded from What-If results. */
    az_deployment_tenant_what_if_command_builder.prototype.excludeChangeTypes = function (value) {
        this.setFlag("--exclude-change-types", value);
        return this;
    };
    /** The deployment name. */
    az_deployment_tenant_what_if_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Disable pretty-print for What-If results. When set, the output format type will be used. */
    az_deployment_tenant_what_if_command_builder.prototype.noPrettyPrint = function (value) {
        this.setFlag("--no-pretty-print", value);
        return this;
    };
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    az_deployment_tenant_what_if_command_builder.prototype.noPrompt = function (value) {
        this.setFlag("--no-prompt", value.toString());
        return this;
    };
    /** Supply deployment parameter values. */
    az_deployment_tenant_what_if_command_builder.prototype.parameters = function (value) {
        this.setFlag("--parameters", value);
        return this;
    };
    /** The format of What-If results. */
    az_deployment_tenant_what_if_command_builder.prototype.resultFormat = function (value) {
        this.setFlag("--result-format", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_tenant_what_if_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The path to the template file. */
    az_deployment_tenant_what_if_command_builder.prototype.templateFile = function (value) {
        this.setFlag("--template-file", value);
        return this;
    };
    /** The template spec resource id. */
    az_deployment_tenant_what_if_command_builder.prototype.templateSpec = function (value) {
        this.setFlag("--template-spec", value);
        return this;
    };
    /** The URI to the template file. */
    az_deployment_tenant_what_if_command_builder.prototype.templateUri = function (value) {
        this.setFlag("--template-uri", value);
        return this;
    };
    return az_deployment_tenant_what_if_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_scripts_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_scripts_delete_command_builder, _super);
    function az_deployment_scripts_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Deployment script resource name. */
    az_deployment_scripts_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deployment_scripts_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_scripts_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_deployment_scripts_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_deployment_scripts_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_scripts_list_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_scripts_list_command_builder, _super);
    function az_deployment_scripts_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deployment_scripts_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deployment_scripts_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_scripts_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_scripts_list_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_scripts_show_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_scripts_show_command_builder, _super);
    function az_deployment_scripts_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Deployment script resource name. */
    az_deployment_scripts_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deployment_scripts_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deployment_scripts_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_scripts_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_scripts_show_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_scripts_show_log_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_scripts_show_log_command_builder, _super);
    function az_deployment_scripts_show_log_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Deployment script resource name. */
    az_deployment_scripts_show_log_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deployment_scripts_show_log_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_scripts_show_log_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_scripts_show_log_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_cancel_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_cancel_command_builder, _super);
    function az_deployment_cancel_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The deployment name. */
    az_deployment_cancel_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_cancel_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_cancel_command_builder;
}(base_1.CommandBuilder));
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
 *                      [--template-spec]
 *                      [--template-uri]
 *                      [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
 *                      [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 */
var az_deployment_create_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_create_command_builder, _super);
    function az_deployment_create_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** The location to store the deployment metadata. */
    az_deployment_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Instruct the command to run deployment What-If before executing the deployment. It then prompts you to acknowledge resource changes before it continues. */
    az_deployment_create_command_builder.prototype.confirmWithWhatIf = function (value) {
        this.setFlag("--confirm-with-what-if", value);
        return this;
    };
    /** Support to handle extended template content including multiline and comments in deployment. */
    az_deployment_create_command_builder.prototype.handleExtendedJsonFormat = function (value) {
        this.setFlag("--handle-extended-json-format", value);
        return this;
    };
    /** The deployment name. */
    az_deployment_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    az_deployment_create_command_builder.prototype.noPrompt = function (value) {
        this.setFlag("--no-prompt", value.toString());
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_deployment_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Supply deployment parameter values. */
    az_deployment_create_command_builder.prototype.parameters = function (value) {
        this.setFlag("--parameters", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The path to the template file. */
    az_deployment_create_command_builder.prototype.templateFile = function (value) {
        this.setFlag("--template-file", value);
        return this;
    };
    /** The template spec resource id. */
    az_deployment_create_command_builder.prototype.templateSpec = function (value) {
        this.setFlag("--template-spec", value);
        return this;
    };
    /** The URI to the template file. */
    az_deployment_create_command_builder.prototype.templateUri = function (value) {
        this.setFlag("--template-uri", value);
        return this;
    };
    /** Space-separated list of resource change types to be excluded from What-If results. Applicable when --confirm-with-what-if is set. */
    az_deployment_create_command_builder.prototype.whatIfExcludeChangeTypes = function (value) {
        this.setFlag("--what-if-exclude-change-types", value);
        return this;
    };
    /** The format of What-If results. Applicable when `--confirm-with-what-if` is set. */
    az_deployment_create_command_builder.prototype.whatIfResultFormat = function (value) {
        this.setFlag("--what-if-result-format", value);
        return this;
    };
    return az_deployment_create_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_delete_command_builder, _super);
    function az_deployment_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The deployment name. */
    az_deployment_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_deployment_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_export_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_export_command_builder, _super);
    function az_deployment_export_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The deployment name. */
    az_deployment_export_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_export_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_export_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_list_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_list_command_builder, _super);
    function az_deployment_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Filter expression using OData notation. You can use --filter "provisioningState eq '{state}'" to filter provisioningState. To get more information, please visit <a href="https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters">https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters</a>. */
    az_deployment_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deployment_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_list_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_show_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_show_command_builder, _super);
    function az_deployment_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The deployment name. */
    az_deployment_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deployment_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deployment_show_command_builder;
}(base_1.CommandBuilder));
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
 *                        [--template-spec]
 *                        [--template-uri]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 */
var az_deployment_validate_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_validate_command_builder, _super);
    function az_deployment_validate_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** The location to store the deployment metadata. */
    az_deployment_validate_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Support to handle extended template content including multiline and comments in deployment. */
    az_deployment_validate_command_builder.prototype.handleExtendedJsonFormat = function (value) {
        this.setFlag("--handle-extended-json-format", value);
        return this;
    };
    /** The deployment name. */
    az_deployment_validate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    az_deployment_validate_command_builder.prototype.noPrompt = function (value) {
        this.setFlag("--no-prompt", value.toString());
        return this;
    };
    /** Supply deployment parameter values. */
    az_deployment_validate_command_builder.prototype.parameters = function (value) {
        this.setFlag("--parameters", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_validate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The path to the template file. */
    az_deployment_validate_command_builder.prototype.templateFile = function (value) {
        this.setFlag("--template-file", value);
        return this;
    };
    /** The template spec resource id. */
    az_deployment_validate_command_builder.prototype.templateSpec = function (value) {
        this.setFlag("--template-spec", value);
        return this;
    };
    /** The URI to the template file. */
    az_deployment_validate_command_builder.prototype.templateUri = function (value) {
        this.setFlag("--template-uri", value);
        return this;
    };
    return az_deployment_validate_command_builder;
}(base_1.CommandBuilder));
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
var az_deployment_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_deployment_wait_command_builder, _super);
    function az_deployment_wait_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The deployment name. */
    az_deployment_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_deployment_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_deployment_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_deployment_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_deployment_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_deployment_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deployment_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_deployment_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_deployment_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_deployment_wait_command_builder;
}(base_1.CommandBuilder));
