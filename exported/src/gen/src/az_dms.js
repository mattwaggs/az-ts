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
exports.az_dms = exports.az_dms_project = exports.az_dms_project_task = void 0;
var base_1 = require("../base");
/** Manage Tasks for a Data Migration Service instance's Project. */
var az_dms_project_task = /** @class */ (function () {
    function az_dms_project_task() {
    }
    /**
     * Cancel a Task if it's currently queued or running.
     *
     * Syntax:
     * ```
     * az dms project task cancel --name
     *                            --project-name
     *                            --resource-group
     *                            --service-name
     *                            [--subscription]
     * ```
     *
     * @param {string} name The name of the Task.
     * @param {string} projectName The name of the Project.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the Service.
     */
    az_dms_project_task.cancel = function (name, projectName, resourceGroup, serviceName) {
        return new az_dms_project_task_cancel_command_builder("az dms project task cancel", 'az_dms_project_task_cancel_command_result', name, projectName, resourceGroup, serviceName);
    };
    /**
     * Check if a given Task name is available within a given instance of DMS as well as the name's validity.
     *
     * Syntax:
     * ```
     * az dms project task check-name --name
     *                                --project-name
     *                                --resource-group
     *                                --service-name
     *                                [--subscription]
     * ```
     *
     * @param {string} name The Task name to check.
     * @param {string} projectName The name of the Project.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the Service.
     */
    az_dms_project_task.check_name = function (name, projectName, resourceGroup, serviceName) {
        return new az_dms_project_task_check_name_command_builder("az dms project task check-name", 'az_dms_project_task_check_name_command_result', name, projectName, resourceGroup, serviceName);
    };
    /**
     * Create and start a migration Task.
     *
     * Syntax:
     * ```
     * az dms project task create --database-options-json
     *                            --name
     *                            --project-name
     *                            --resource-group
     *                            --service-name
     *                            --source-connection-json
     *                            --target-connection-json
     *                            [--enable-data-integrity-validation]
     *                            [--enable-query-analysis-validation]
     *                            [--enable-schema-validation]
     *                            [--subscription]
     * ```
     *
     * @param {string} databaseOptionsJson Database and table information. This can be either a JSON-formatted string or the location to a file containing the JSON object. See example below for the format.
     * @param {string} name The name of the Task.
     * @param {string} projectName The name of the Project.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the Service.
     * @param {string} sourceConnectionJson The connection information to the source server. This can be either a JSON-formatted string or the location to a file containing the JSON object. See example below for the format.
     * @param {string} targetConnectionJson The connection information to the target server. This can be either a JSON-formatted string or the location to a file containing the JSON object. See example below for the format.
     */
    az_dms_project_task.create = function (databaseOptionsJson, name, projectName, resourceGroup, serviceName, sourceConnectionJson, targetConnectionJson) {
        return new az_dms_project_task_create_command_builder("az dms project task create", 'az_dms_project_task_create_command_result', databaseOptionsJson, name, projectName, resourceGroup, serviceName, sourceConnectionJson, targetConnectionJson);
    };
    /**
     * Delete a migration Task.
     *
     * Syntax:
     * ```
     * az dms project task delete --name
     *                            --project-name
     *                            --resource-group
     *                            --service-name
     *                            [--delete-running-tasks]
     *                            [--subscription]
     *                            [--yes]
     * ```
     *
     * @param {string} name The name of the Task.
     * @param {string} projectName The name of the Project.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the Service.
     */
    az_dms_project_task["delete"] = function (name, projectName, resourceGroup, serviceName) {
        return new az_dms_project_task_delete_command_builder("az dms project task delete", 'az_dms_project_task_delete_command_result', name, projectName, resourceGroup, serviceName);
    };
    /**
     * List the Tasks within a Project. Some tasks may have a status of Unknown, which indicates that an error occurred while querying the status of that task.
     *
     * Syntax:
     * ```
     * az dms project task list --project-name
     *                          --resource-group
     *                          --service-name
     *                          [--query-examples]
     *                          [--subscription]
     *                          [--task-type]
     * ```
     *
     * @param {string} projectName The name of the Project.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the Service.
     */
    az_dms_project_task.list = function (projectName, resourceGroup, serviceName) {
        return new az_dms_project_task_list_command_builder("az dms project task list", 'az_dms_project_task_list_command_result', projectName, resourceGroup, serviceName);
    };
    /**
     * Show the details of a migration Task. Use the "--expand" to get more details.
     *
     * Syntax:
     * ```
     * az dms project task show --name
     *                          --project-name
     *                          --resource-group
     *                          --service-name
     *                          [--expand]
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} name The name of the Task.
     * @param {string} projectName The name of the Project.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the Service.
     */
    az_dms_project_task.show = function (name, projectName, resourceGroup, serviceName) {
        return new az_dms_project_task_show_command_builder("az dms project task show", 'az_dms_project_task_show_command_result', name, projectName, resourceGroup, serviceName);
    };
    return az_dms_project_task;
}());
exports.az_dms_project_task = az_dms_project_task;
/** Manage Projects for an instance of the Data Migration Service. */
var az_dms_project = /** @class */ (function () {
    function az_dms_project() {
    }
    /**
     * Check if a given Project name is available within a given instance of DMS as well as the name's validity.
     *
     * Syntax:
     * ```
     * az dms project check-name --name
     *                           --resource-group
     *                           --service-name
     *                           [--subscription]
     * ```
     *
     * @param {string} name The Project name to check.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the Service.
     */
    az_dms_project.check_name = function (name, resourceGroup, serviceName) {
        return new az_dms_project_check_name_command_builder("az dms project check-name", 'az_dms_project_check_name_command_result', name, resourceGroup, serviceName);
    };
    /**
     * Create a migration Project which can contain multiple Tasks.
     *
     * Syntax:
     * ```
     * az dms project create --location
     *                       --name
     *                       --resource-group
     *                       --service-name
     *                       --source-platform
     *                       --target-platform
     *                       [--subscription]
     *                       [--tags]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name The name of the Project.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the Service.
     * @param {string} sourcePlatform The type of server for the source database. The supported types are: SQL.
     * @param {string} targetPlatform The type of service for the target database. The supported types are: SQLDB.
     */
    az_dms_project.create = function (location, name, resourceGroup, serviceName, sourcePlatform, targetPlatform) {
        return new az_dms_project_create_command_builder("az dms project create", 'az_dms_project_create_command_result', location, name, resourceGroup, serviceName, sourcePlatform, targetPlatform);
    };
    /**
     * Delete a Project.
     *
     * Syntax:
     * ```
     * az dms project delete --name
     *                       --resource-group
     *                       --service-name
     *                       [--delete-running-tasks]
     *                       [--subscription]
     *                       [--yes]
     * ```
     *
     * @param {string} name The name of the Project.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the Service.
     */
    az_dms_project["delete"] = function (name, resourceGroup, serviceName) {
        return new az_dms_project_delete_command_builder("az dms project delete", 'az_dms_project_delete_command_result', name, resourceGroup, serviceName);
    };
    /**
     * List the Projects within an instance of DMS.
     *
     * Syntax:
     * ```
     * az dms project list --resource-group
     *                     --service-name
     *                     [--query-examples]
     *                     [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the Service.
     */
    az_dms_project.list = function (resourceGroup, serviceName) {
        return new az_dms_project_list_command_builder("az dms project list", 'az_dms_project_list_command_result', resourceGroup, serviceName);
    };
    /**
     * Show the details of a migration Project.
     *
     * Syntax:
     * ```
     * az dms project show --name
     *                     --resource-group
     *                     --service-name
     *                     [--query-examples]
     *                     [--subscription]
     * ```
     *
     * @param {string} name The name of the Project.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the Service.
     */
    az_dms_project.show = function (name, resourceGroup, serviceName) {
        return new az_dms_project_show_command_builder("az dms project show", 'az_dms_project_show_command_result', name, resourceGroup, serviceName);
    };
    return az_dms_project;
}());
exports.az_dms_project = az_dms_project;
/** Manage Azure Data Migration Service (DMS) instances. */
var az_dms = /** @class */ (function () {
    function az_dms() {
    }
    /**
     * Check if a given DMS instance name is available in a given region as well as the name's validity.
     *
     * Syntax:
     * ```
     * az dms check-name --location
     *                   --name
     *                   [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name The Service name to check.
     */
    az_dms.check_name = function (location, name) {
        return new az_dms_check_name_command_builder("az dms check-name", 'az_dms_check_name_command_result', location, name);
    };
    /**
     * Perform a health check and return the status of the service and virtual machine size.
     *
     * Syntax:
     * ```
     * az dms check-status --name
     *                     --resource-group
     *                     [--subscription]
     * ```
     *
     * @param {string} name The name of the Service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_dms.check_status = function (name, resourceGroup) {
        return new az_dms_check_status_command_builder("az dms check-status", 'az_dms_check_status_command_result', name, resourceGroup);
    };
    /**
     * Create an instance of the Data Migration Service.
     *
     * Syntax:
     * ```
     * az dms create --location
     *               --name
     *               --resource-group
     *               --sku-name
     *               --subnet
     *               [--no-wait]
     *               [--subscription]
     *               [--tags]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name The name of the Service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} skuName The name of the CPU SKU on which the service's Virtual Machine will run. Check the name and the availability of SKUs in your area with "az dms list-skus".
     * @param {string} subnet The Resource ID of the VNet's Subnet you will use to connect the source and target DBs. Use "az network vnet subnet show -h" for help to get your subnet's ID.
     */
    az_dms.create = function (location, name, resourceGroup, skuName, subnet) {
        return new az_dms_create_command_builder("az dms create", 'az_dms_create_command_result', location, name, resourceGroup, skuName, subnet);
    };
    /**
     * Delete an instance of the Data Migration Service.
     *
     * Syntax:
     * ```
     * az dms delete --name
     *               --resource-group
     *               [--delete-running-tasks]
     *               [--no-wait]
     *               [--subscription]
     *               [--yes]
     * ```
     *
     * @param {string} name The name of the Service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_dms["delete"] = function (name, resourceGroup) {
        return new az_dms_delete_command_builder("az dms delete", 'az_dms_delete_command_result', name, resourceGroup);
    };
    /**
     * List the DMS instances within your currently configured subscription (to set this use "az account set"). If provided, only show the instances within a given resource group.
     *
     * Syntax:
     * ```
     * az dms list [--query-examples]
     *             [--resource-group]
     *             [--subscription]
     * ```
     */
    az_dms.list = function () {
        return new az_dms_list_command_builder("az dms list", 'az_dms_list_command_result');
    };
    /**
     * List the SKUs that are supported by the Data Migration Service.
     *
     * Syntax:
     * ```
     * az dms list-skus [--subscription]
     * ```
     */
    az_dms.list_skus = function () {
        return new az_dms_list_skus_command_builder("az dms list-skus", 'az_dms_list_skus_command_result');
    };
    /**
     * Show the details for an instance of the Data Migration Service.
     *
     * Syntax:
     * ```
     * az dms show --name
     *             --resource-group
     *             [--query-examples]
     *             [--subscription]
     * ```
     *
     * @param {string} name The name of the Service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_dms.show = function (name, resourceGroup) {
        return new az_dms_show_command_builder("az dms show", 'az_dms_show_command_result', name, resourceGroup);
    };
    /**
     * Start an instance of the Data Migration Service. It can then be used to run data migrations.
     *
     * Syntax:
     * ```
     * az dms start --name
     *              --resource-group
     *              [--no-wait]
     *              [--subscription]
     * ```
     *
     * @param {string} name The name of the Service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_dms.start = function (name, resourceGroup) {
        return new az_dms_start_command_builder("az dms start", 'az_dms_start_command_result', name, resourceGroup);
    };
    /**
     * Stop an instance of the Data Migration Service. While stopped, it can't be used to run data migrations and the owner won't be billed.
     *
     * Syntax:
     * ```
     * az dms stop --name
     *             --resource-group
     *             [--no-wait]
     *             [--subscription]
     * ```
     *
     * @param {string} name The name of the Service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_dms.stop = function (name, resourceGroup) {
        return new az_dms_stop_command_builder("az dms stop", 'az_dms_stop_command_result', name, resourceGroup);
    };
    /**
     * Place the CLI in a waiting state until a condition of the DMS instance is met.
     *
     * Syntax:
     * ```
     * az dms wait --name
     *             --resource-group
     *             [--created]
     *             [--custom]
     *             [--deleted]
     *             [--exists]
     *             [--interval]
     *             [--subscription]
     *             [--timeout]
     *             [--updated]
     * ```
     *
     * @param {string} name The name of the Service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_dms.wait = function (name, resourceGroup) {
        return new az_dms_wait_command_builder("az dms wait", 'az_dms_wait_command_result', name, resourceGroup);
    };
    return az_dms;
}());
exports.az_dms = az_dms;
/**
 * Cancel a Task if it's currently queued or running.
 *
 * Syntax:
 * ```
 * az dms project task cancel --name
 *                            --project-name
 *                            --resource-group
 *                            --service-name
 *                            [--subscription]
 * ```
 *
 * @param {string} name The name of the Task.
 * @param {string} projectName The name of the Project.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the Service.
 */
var az_dms_project_task_cancel_command_builder = /** @class */ (function (_super) {
    __extends(az_dms_project_task_cancel_command_builder, _super);
    function az_dms_project_task_cancel_command_builder(commandPath, resultDataTypeName, name, projectName, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.projectName(projectName);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** The name of the Task. */
    az_dms_project_task_cancel_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the Project. */
    az_dms_project_task_cancel_command_builder.prototype.projectName = function (value) {
        this.setFlag("--project-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dms_project_task_cancel_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the Service. */
    az_dms_project_task_cancel_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dms_project_task_cancel_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dms_project_task_cancel_command_builder;
}(base_1.CommandBuilder));
/**
 * Check if a given Task name is available within a given instance of DMS as well as the name's validity.
 *
 * Syntax:
 * ```
 * az dms project task check-name --name
 *                                --project-name
 *                                --resource-group
 *                                --service-name
 *                                [--subscription]
 * ```
 *
 * @param {string} name The Task name to check.
 * @param {string} projectName The name of the Project.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the Service.
 */
var az_dms_project_task_check_name_command_builder = /** @class */ (function (_super) {
    __extends(az_dms_project_task_check_name_command_builder, _super);
    function az_dms_project_task_check_name_command_builder(commandPath, resultDataTypeName, name, projectName, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.projectName(projectName);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** The Task name to check. */
    az_dms_project_task_check_name_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the Project. */
    az_dms_project_task_check_name_command_builder.prototype.projectName = function (value) {
        this.setFlag("--project-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dms_project_task_check_name_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the Service. */
    az_dms_project_task_check_name_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dms_project_task_check_name_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dms_project_task_check_name_command_builder;
}(base_1.CommandBuilder));
/**
 * Create and start a migration Task.
 *
 * Syntax:
 * ```
 * az dms project task create --database-options-json
 *                            --name
 *                            --project-name
 *                            --resource-group
 *                            --service-name
 *                            --source-connection-json
 *                            --target-connection-json
 *                            [--enable-data-integrity-validation]
 *                            [--enable-query-analysis-validation]
 *                            [--enable-schema-validation]
 *                            [--subscription]
 * ```
 *
 * @param {string} databaseOptionsJson Database and table information. This can be either a JSON-formatted string or the location to a file containing the JSON object. See example below for the format.
 * @param {string} name The name of the Task.
 * @param {string} projectName The name of the Project.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the Service.
 * @param {string} sourceConnectionJson The connection information to the source server. This can be either a JSON-formatted string or the location to a file containing the JSON object. See example below for the format.
 * @param {string} targetConnectionJson The connection information to the target server. This can be either a JSON-formatted string or the location to a file containing the JSON object. See example below for the format.
 */
var az_dms_project_task_create_command_builder = /** @class */ (function (_super) {
    __extends(az_dms_project_task_create_command_builder, _super);
    function az_dms_project_task_create_command_builder(commandPath, resultDataTypeName, databaseOptionsJson, name, projectName, resourceGroup, serviceName, sourceConnectionJson, targetConnectionJson) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseOptionsJson(databaseOptionsJson);
        _this.name(name);
        _this.projectName(projectName);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        _this.sourceConnectionJson(sourceConnectionJson);
        _this.targetConnectionJson(targetConnectionJson);
        return _this;
    }
    /** Database and table information. This can be either a JSON-formatted string or the location to a file containing the JSON object. See example below for the format. */
    az_dms_project_task_create_command_builder.prototype.databaseOptionsJson = function (value) {
        this.setFlag("--database-options-json", value);
        return this;
    };
    /** The name of the Task. */
    az_dms_project_task_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the Project. */
    az_dms_project_task_create_command_builder.prototype.projectName = function (value) {
        this.setFlag("--project-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dms_project_task_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the Service. */
    az_dms_project_task_create_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** The connection information to the source server. This can be either a JSON-formatted string or the location to a file containing the JSON object. See example below for the format. */
    az_dms_project_task_create_command_builder.prototype.sourceConnectionJson = function (value) {
        this.setFlag("--source-connection-json", value);
        return this;
    };
    /** The connection information to the target server. This can be either a JSON-formatted string or the location to a file containing the JSON object. See example below for the format. */
    az_dms_project_task_create_command_builder.prototype.targetConnectionJson = function (value) {
        this.setFlag("--target-connection-json", value);
        return this;
    };
    /** Whether to perform a checksum based data integrity validation between source and target for the selected database and tables. */
    az_dms_project_task_create_command_builder.prototype.enableDataIntegrityValidation = function (value) {
        this.setFlag("--enable-data-integrity-validation", value);
        return this;
    };
    /** Whether to perform a quick and intelligent query analysis by retrieving queries from the source database and executing them in the target. The result will have execution statistics for executions in source and target databases for the extracted queries. */
    az_dms_project_task_create_command_builder.prototype.enableQueryAnalysisValidation = function (value) {
        this.setFlag("--enable-query-analysis-validation", value);
        return this;
    };
    /** Whether to compare the schema information between source and target. */
    az_dms_project_task_create_command_builder.prototype.enableSchemaValidation = function (value) {
        this.setFlag("--enable-schema-validation", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dms_project_task_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dms_project_task_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a migration Task.
 *
 * Syntax:
 * ```
 * az dms project task delete --name
 *                            --project-name
 *                            --resource-group
 *                            --service-name
 *                            [--delete-running-tasks]
 *                            [--subscription]
 *                            [--yes]
 * ```
 *
 * @param {string} name The name of the Task.
 * @param {string} projectName The name of the Project.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the Service.
 */
var az_dms_project_task_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_dms_project_task_delete_command_builder, _super);
    function az_dms_project_task_delete_command_builder(commandPath, resultDataTypeName, name, projectName, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.projectName(projectName);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** The name of the Task. */
    az_dms_project_task_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the Project. */
    az_dms_project_task_delete_command_builder.prototype.projectName = function (value) {
        this.setFlag("--project-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dms_project_task_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the Service. */
    az_dms_project_task_delete_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** If the Task is currently running, cancel the Task before deleting the Project. */
    az_dms_project_task_delete_command_builder.prototype.deleteRunningTasks = function (value) {
        this.setFlag("--delete-running-tasks", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dms_project_task_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_dms_project_task_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_dms_project_task_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the Tasks within a Project. Some tasks may have a status of Unknown, which indicates that an error occurred while querying the status of that task.
 *
 * Syntax:
 * ```
 * az dms project task list --project-name
 *                          --resource-group
 *                          --service-name
 *                          [--query-examples]
 *                          [--subscription]
 *                          [--task-type]
 * ```
 *
 * @param {string} projectName The name of the Project.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the Service.
 */
var az_dms_project_task_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dms_project_task_list_command_builder, _super);
    function az_dms_project_task_list_command_builder(commandPath, resultDataTypeName, projectName, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.projectName(projectName);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** The name of the Project. */
    az_dms_project_task_list_command_builder.prototype.projectName = function (value) {
        this.setFlag("--project-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dms_project_task_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the Service. */
    az_dms_project_task_list_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dms_project_task_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dms_project_task_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Filters the list by the type of task. For the list of possible types see "az dms check-status". */
    az_dms_project_task_list_command_builder.prototype.taskType = function (value) {
        this.setFlag("--task-type", value);
        return this;
    };
    return az_dms_project_task_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details of a migration Task. Use the "--expand" to get more details.
 *
 * Syntax:
 * ```
 * az dms project task show --name
 *                          --project-name
 *                          --resource-group
 *                          --service-name
 *                          [--expand]
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} name The name of the Task.
 * @param {string} projectName The name of the Project.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the Service.
 */
var az_dms_project_task_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dms_project_task_show_command_builder, _super);
    function az_dms_project_task_show_command_builder(commandPath, resultDataTypeName, name, projectName, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.projectName(projectName);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** The name of the Task. */
    az_dms_project_task_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the Project. */
    az_dms_project_task_show_command_builder.prototype.projectName = function (value) {
        this.setFlag("--project-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dms_project_task_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the Service. */
    az_dms_project_task_show_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Expand the response to provide more details. Use with "command" to see more details of the Task. Use with "output" to see the results of the Task's migration. */
    az_dms_project_task_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dms_project_task_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dms_project_task_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dms_project_task_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Check if a given Project name is available within a given instance of DMS as well as the name's validity.
 *
 * Syntax:
 * ```
 * az dms project check-name --name
 *                           --resource-group
 *                           --service-name
 *                           [--subscription]
 * ```
 *
 * @param {string} name The Project name to check.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the Service.
 */
var az_dms_project_check_name_command_builder = /** @class */ (function (_super) {
    __extends(az_dms_project_check_name_command_builder, _super);
    function az_dms_project_check_name_command_builder(commandPath, resultDataTypeName, name, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** The Project name to check. */
    az_dms_project_check_name_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dms_project_check_name_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the Service. */
    az_dms_project_check_name_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dms_project_check_name_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dms_project_check_name_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a migration Project which can contain multiple Tasks.
 *
 * Syntax:
 * ```
 * az dms project create --location
 *                       --name
 *                       --resource-group
 *                       --service-name
 *                       --source-platform
 *                       --target-platform
 *                       [--subscription]
 *                       [--tags]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name The name of the Project.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the Service.
 * @param {string} sourcePlatform The type of server for the source database. The supported types are: SQL.
 * @param {string} targetPlatform The type of service for the target database. The supported types are: SQLDB.
 */
var az_dms_project_create_command_builder = /** @class */ (function (_super) {
    __extends(az_dms_project_create_command_builder, _super);
    function az_dms_project_create_command_builder(commandPath, resultDataTypeName, location, name, resourceGroup, serviceName, sourcePlatform, targetPlatform) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        _this.sourcePlatform(sourcePlatform);
        _this.targetPlatform(targetPlatform);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_dms_project_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name of the Project. */
    az_dms_project_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dms_project_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the Service. */
    az_dms_project_create_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** The type of server for the source database. The supported types are: SQL. */
    az_dms_project_create_command_builder.prototype.sourcePlatform = function (value) {
        this.setFlag("--source-platform", value);
        return this;
    };
    /** The type of service for the target database. The supported types are: SQLDB. */
    az_dms_project_create_command_builder.prototype.targetPlatform = function (value) {
        this.setFlag("--target-platform", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dms_project_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** A space-delimited list of tags in "tag1[=value1]" format. */
    az_dms_project_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_dms_project_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a Project.
 *
 * Syntax:
 * ```
 * az dms project delete --name
 *                       --resource-group
 *                       --service-name
 *                       [--delete-running-tasks]
 *                       [--subscription]
 *                       [--yes]
 * ```
 *
 * @param {string} name The name of the Project.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the Service.
 */
var az_dms_project_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_dms_project_delete_command_builder, _super);
    function az_dms_project_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** The name of the Project. */
    az_dms_project_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dms_project_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the Service. */
    az_dms_project_delete_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Cancel any running tasks before deleting the Project. */
    az_dms_project_delete_command_builder.prototype.deleteRunningTasks = function (value) {
        this.setFlag("--delete-running-tasks", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dms_project_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_dms_project_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_dms_project_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the Projects within an instance of DMS.
 *
 * Syntax:
 * ```
 * az dms project list --resource-group
 *                     --service-name
 *                     [--query-examples]
 *                     [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the Service.
 */
var az_dms_project_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dms_project_list_command_builder, _super);
    function az_dms_project_list_command_builder(commandPath, resultDataTypeName, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dms_project_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the Service. */
    az_dms_project_list_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dms_project_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dms_project_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dms_project_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details of a migration Project.
 *
 * Syntax:
 * ```
 * az dms project show --name
 *                     --resource-group
 *                     --service-name
 *                     [--query-examples]
 *                     [--subscription]
 * ```
 *
 * @param {string} name The name of the Project.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the Service.
 */
var az_dms_project_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dms_project_show_command_builder, _super);
    function az_dms_project_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** The name of the Project. */
    az_dms_project_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dms_project_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the Service. */
    az_dms_project_show_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dms_project_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dms_project_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dms_project_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Check if a given DMS instance name is available in a given region as well as the name's validity.
 *
 * Syntax:
 * ```
 * az dms check-name --location
 *                   --name
 *                   [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name The Service name to check.
 */
var az_dms_check_name_command_builder = /** @class */ (function (_super) {
    __extends(az_dms_check_name_command_builder, _super);
    function az_dms_check_name_command_builder(commandPath, resultDataTypeName, location, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.name(name);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_dms_check_name_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The Service name to check. */
    az_dms_check_name_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dms_check_name_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dms_check_name_command_builder;
}(base_1.CommandBuilder));
/**
 * Perform a health check and return the status of the service and virtual machine size.
 *
 * Syntax:
 * ```
 * az dms check-status --name
 *                     --resource-group
 *                     [--subscription]
 * ```
 *
 * @param {string} name The name of the Service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_dms_check_status_command_builder = /** @class */ (function (_super) {
    __extends(az_dms_check_status_command_builder, _super);
    function az_dms_check_status_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Service. */
    az_dms_check_status_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dms_check_status_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dms_check_status_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dms_check_status_command_builder;
}(base_1.CommandBuilder));
/**
 * Create an instance of the Data Migration Service.
 *
 * Syntax:
 * ```
 * az dms create --location
 *               --name
 *               --resource-group
 *               --sku-name
 *               --subnet
 *               [--no-wait]
 *               [--subscription]
 *               [--tags]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name The name of the Service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} skuName The name of the CPU SKU on which the service's Virtual Machine will run. Check the name and the availability of SKUs in your area with "az dms list-skus".
 * @param {string} subnet The Resource ID of the VNet's Subnet you will use to connect the source and target DBs. Use "az network vnet subnet show -h" for help to get your subnet's ID.
 */
var az_dms_create_command_builder = /** @class */ (function (_super) {
    __extends(az_dms_create_command_builder, _super);
    function az_dms_create_command_builder(commandPath, resultDataTypeName, location, name, resourceGroup, skuName, subnet) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.skuName(skuName);
        _this.subnet(subnet);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_dms_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name of the Service. */
    az_dms_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dms_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the CPU SKU on which the service's Virtual Machine will run. Check the name and the availability of SKUs in your area with "az dms list-skus". */
    az_dms_create_command_builder.prototype.skuName = function (value) {
        this.setFlag("--sku-name", value);
        return this;
    };
    /** The Resource ID of the VNet's Subnet you will use to connect the source and target DBs. Use "az network vnet subnet show -h" for help to get your subnet's ID. */
    az_dms_create_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_dms_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dms_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** A space-delimited list of tags in "tag1[=value1]" format. */
    az_dms_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_dms_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an instance of the Data Migration Service.
 *
 * Syntax:
 * ```
 * az dms delete --name
 *               --resource-group
 *               [--delete-running-tasks]
 *               [--no-wait]
 *               [--subscription]
 *               [--yes]
 * ```
 *
 * @param {string} name The name of the Service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_dms_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_dms_delete_command_builder, _super);
    function az_dms_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Service. */
    az_dms_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dms_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Cancel any running tasks before deleting the service. */
    az_dms_delete_command_builder.prototype.deleteRunningTasks = function (value) {
        this.setFlag("--delete-running-tasks", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_dms_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dms_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_dms_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_dms_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the DMS instances within your currently configured subscription (to set this use "az account set"). If provided, only show the instances within a given resource group.
 *
 * Syntax:
 * ```
 * az dms list [--query-examples]
 *             [--resource-group]
 *             [--subscription]
 * ```
 */
var az_dms_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dms_list_command_builder, _super);
    function az_dms_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dms_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dms_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dms_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dms_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List the SKUs that are supported by the Data Migration Service.
 *
 * Syntax:
 * ```
 * az dms list-skus [--subscription]
 * ```
 */
var az_dms_list_skus_command_builder = /** @class */ (function (_super) {
    __extends(az_dms_list_skus_command_builder, _super);
    function az_dms_list_skus_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dms_list_skus_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dms_list_skus_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details for an instance of the Data Migration Service.
 *
 * Syntax:
 * ```
 * az dms show --name
 *             --resource-group
 *             [--query-examples]
 *             [--subscription]
 * ```
 *
 * @param {string} name The name of the Service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_dms_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dms_show_command_builder, _super);
    function az_dms_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Service. */
    az_dms_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dms_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dms_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dms_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dms_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Start an instance of the Data Migration Service. It can then be used to run data migrations.
 *
 * Syntax:
 * ```
 * az dms start --name
 *              --resource-group
 *              [--no-wait]
 *              [--subscription]
 * ```
 *
 * @param {string} name The name of the Service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_dms_start_command_builder = /** @class */ (function (_super) {
    __extends(az_dms_start_command_builder, _super);
    function az_dms_start_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Service. */
    az_dms_start_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dms_start_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_dms_start_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dms_start_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dms_start_command_builder;
}(base_1.CommandBuilder));
/**
 * Stop an instance of the Data Migration Service. While stopped, it can't be used to run data migrations and the owner won't be billed.
 *
 * Syntax:
 * ```
 * az dms stop --name
 *             --resource-group
 *             [--no-wait]
 *             [--subscription]
 * ```
 *
 * @param {string} name The name of the Service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_dms_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_dms_stop_command_builder, _super);
    function az_dms_stop_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Service. */
    az_dms_stop_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dms_stop_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_dms_stop_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dms_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dms_stop_command_builder;
}(base_1.CommandBuilder));
/**
 * Place the CLI in a waiting state until a condition of the DMS instance is met.
 *
 * Syntax:
 * ```
 * az dms wait --name
 *             --resource-group
 *             [--created]
 *             [--custom]
 *             [--deleted]
 *             [--exists]
 *             [--interval]
 *             [--subscription]
 *             [--timeout]
 *             [--updated]
 * ```
 *
 * @param {string} name The name of the Service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_dms_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_dms_wait_command_builder, _super);
    function az_dms_wait_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Service. */
    az_dms_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dms_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_dms_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_dms_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_dms_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_dms_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_dms_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dms_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_dms_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_dms_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_dms_wait_command_builder;
}(base_1.CommandBuilder));
