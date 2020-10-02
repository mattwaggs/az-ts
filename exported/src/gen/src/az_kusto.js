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
exports.az_kusto = exports.az_kusto_database = exports.az_kusto_cluster = void 0;
var base_1 = require("../base");
/** Manage Azure Kusto clusters. */
var az_kusto_cluster = /** @class */ (function () {
    function az_kusto_cluster() {
    }
    /**
     * Create a Kusto cluster.
     *
     * Syntax:
     * ```
     * az kusto cluster create --name
     *                         --resource-group
     *                         --sku {Dev(No SLA)_Standard_D11_v2, Dev(No SLA)_Standard_E2a_v4, Standard_D11_v2, Standard_D12_v2, Standard_D13_v2, Standard_D14_v2, Standard_DS13_v2+1TB_PS, Standard_DS13_v2+2TB_PS, Standard_DS14_v2+3TB_PS, Standard_DS14_v2+4TB_PS, Standard_E16a_v4, Standard_E16as_v4+3TB_PS, Standard_E16as_v4+4TB_PS, Standard_E2a_v4, Standard_E4a_v4, Standard_E8a_v4, Standard_E8as_v4+1TB_PS, Standard_E8as_v4+2TB_PS, Standard_L16s, Standard_L4s, Standard_L8s}
     *                         [--capacity]
     *                         [--location]
     *                         [--no-wait]
     *                         [--subscription]
     * ```
     *
     * @param {string} name The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'Dev(No SLA)_Standard_D11_v2' | 'Dev(No SLA)_Standard_E2a_v4' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_DS13_v2+1TB_PS' | 'Standard_DS13_v2+2TB_PS' | 'Standard_DS14_v2+3TB_PS' | 'Standard_DS14_v2+4TB_PS' | 'Standard_E16a_v4' | 'Standard_E16as_v4+3TB_PS' | 'Standard_E16as_v4+4TB_PS' | 'Standard_E2a_v4' | 'Standard_E4a_v4' | 'Standard_E8a_v4' | 'Standard_E8as_v4+1TB_PS' | 'Standard_E8as_v4+2TB_PS' | 'Standard_L16s' | 'Standard_L4s' | 'Standard_L8s'} sku The name of the sku.
     */
    az_kusto_cluster.create = function (name, resourceGroup, sku) {
        return new az_kusto_cluster_create_command_builder("az kusto cluster create", 'az_kusto_cluster_create_command_result', name, resourceGroup, sku);
    };
    /**
     * Delete a Kusto cluster.
     *
     * Syntax:
     * ```
     * az kusto cluster delete [--ids]
     *                         [--name]
     *                         [--resource-group]
     *                         [--subscription]
     *                         [--yes]
     * ```
     */
    az_kusto_cluster["delete"] = function () {
        return new az_kusto_cluster_delete_command_builder("az kusto cluster delete", 'az_kusto_cluster_delete_command_result');
    };
    /**
     * List a Kusto cluster.
     *
     * Syntax:
     * ```
     * az kusto cluster list --resource-group
     *                       [--query-examples]
     *                       [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_kusto_cluster.list = function (resourceGroup) {
        return new az_kusto_cluster_list_command_builder("az kusto cluster list", 'az_kusto_cluster_list_command_result', resourceGroup);
    };
    /**
     * Get a Kusto cluster.
     *
     * Syntax:
     * ```
     * az kusto cluster show [--ids]
     *                       [--name]
     *                       [--query-examples]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    az_kusto_cluster.show = function () {
        return new az_kusto_cluster_show_command_builder("az kusto cluster show", 'az_kusto_cluster_show_command_result');
    };
    /**
     * Start a Kusto cluster.
     *
     * Syntax:
     * ```
     * az kusto cluster start [--ids]
     *                        [--name]
     *                        [--no-wait]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     */
    az_kusto_cluster.start = function () {
        return new az_kusto_cluster_start_command_builder("az kusto cluster start", 'az_kusto_cluster_start_command_result');
    };
    /**
     * Stop a Kusto cluster.
     *
     * Syntax:
     * ```
     * az kusto cluster stop [--ids]
     *                       [--name]
     *                       [--no-wait]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    az_kusto_cluster.stop = function () {
        return new az_kusto_cluster_stop_command_builder("az kusto cluster stop", 'az_kusto_cluster_stop_command_result');
    };
    /**
     * Update a Kusto cluster.
     *
     * Syntax:
     * ```
     * az kusto cluster update [--add]
     *                         [--capacity]
     *                         [--force-string]
     *                         [--ids]
     *                         [--name]
     *                         [--remove]
     *                         [--resource-group]
     *                         [--set]
     *                         [--sku {Dev(No SLA)_Standard_D11_v2, Dev(No SLA)_Standard_E2a_v4, Standard_D11_v2, Standard_D12_v2, Standard_D13_v2, Standard_D14_v2, Standard_DS13_v2+1TB_PS, Standard_DS13_v2+2TB_PS, Standard_DS14_v2+3TB_PS, Standard_DS14_v2+4TB_PS, Standard_E16a_v4, Standard_E16as_v4+3TB_PS, Standard_E16as_v4+4TB_PS, Standard_E2a_v4, Standard_E4a_v4, Standard_E8a_v4, Standard_E8as_v4+1TB_PS, Standard_E8as_v4+2TB_PS, Standard_L16s, Standard_L4s, Standard_L8s}]
     *                         [--subscription]
     * ```
     */
    az_kusto_cluster.update = function () {
        return new az_kusto_cluster_update_command_builder("az kusto cluster update", 'az_kusto_cluster_update_command_result');
    };
    /**
     * Wait for a managed Kusto cluster to reach a desired state.
     *
     * Syntax:
     * ```
     * az kusto cluster wait [--created]
     *                       [--custom]
     *                       [--deleted]
     *                       [--exists]
     *                       [--ids]
     *                       [--interval]
     *                       [--name]
     *                       [--resource-group]
     *                       [--subscription]
     *                       [--timeout]
     *                       [--updated]
     * ```
     */
    az_kusto_cluster.wait = function () {
        return new az_kusto_cluster_wait_command_builder("az kusto cluster wait", 'az_kusto_cluster_wait_command_result');
    };
    return az_kusto_cluster;
}());
exports.az_kusto_cluster = az_kusto_cluster;
/** Manage Azure Kusto databases. */
var az_kusto_database = /** @class */ (function () {
    function az_kusto_database() {
    }
    /**
     * Create a Kusto database.
     *
     * Syntax:
     * ```
     * az kusto database create --cluster-name
     *                          --name
     *                          --resource-group
     *                          [--hot-cache-period]
     *                          [--no-wait]
     *                          [--soft-delete-period]
     *                          [--subscription]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {string} name The name of the database.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_kusto_database.create = function (clusterName, name, resourceGroup) {
        return new az_kusto_database_create_command_builder("az kusto database create", 'az_kusto_database_create_command_result', clusterName, name, resourceGroup);
    };
    /**
     * Delete a Kusto database.
     *
     * Syntax:
     * ```
     * az kusto database delete [--cluster-name]
     *                          [--ids]
     *                          [--name]
     *                          [--resource-group]
     *                          [--subscription]
     *                          [--yes]
     * ```
     */
    az_kusto_database["delete"] = function () {
        return new az_kusto_database_delete_command_builder("az kusto database delete", 'az_kusto_database_delete_command_result');
    };
    /**
     * List a Kusto database.
     *
     * Syntax:
     * ```
     * az kusto database list --cluster-name
     *                        --resource-group
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_kusto_database.list = function (clusterName, resourceGroup) {
        return new az_kusto_database_list_command_builder("az kusto database list", 'az_kusto_database_list_command_result', clusterName, resourceGroup);
    };
    /**
     * Get a Kusto database.
     *
     * Syntax:
     * ```
     * az kusto database show [--cluster-name]
     *                        [--ids]
     *                        [--name]
     *                        [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     */
    az_kusto_database.show = function () {
        return new az_kusto_database_show_command_builder("az kusto database show", 'az_kusto_database_show_command_result');
    };
    /**
     * Update a Kusto database.
     *
     * Syntax:
     * ```
     * az kusto database update --soft-delete-period
     *                          [--add]
     *                          [--cluster-name]
     *                          [--force-string]
     *                          [--hot-cache-period]
     *                          [--ids]
     *                          [--name]
     *                          [--no-wait]
     *                          [--remove]
     *                          [--resource-group]
     *                          [--set]
     *                          [--subscription]
     * ```
     *
     * @param {string} softDeletePeriod Amount of time that data should be kept so it is available to query. Duration in ISO8601 format (for example, 100 days would be P100D).
     */
    az_kusto_database.update = function (softDeletePeriod) {
        return new az_kusto_database_update_command_builder("az kusto database update", 'az_kusto_database_update_command_result', softDeletePeriod);
    };
    /**
     * Wait for a managed Kusto database to reach a desired state.
     *
     * Syntax:
     * ```
     * az kusto database wait [--cluster-name]
     *                        [--created]
     *                        [--custom]
     *                        [--deleted]
     *                        [--exists]
     *                        [--ids]
     *                        [--interval]
     *                        [--name]
     *                        [--resource-group]
     *                        [--subscription]
     *                        [--timeout]
     *                        [--updated]
     * ```
     */
    az_kusto_database.wait = function () {
        return new az_kusto_database_wait_command_builder("az kusto database wait", 'az_kusto_database_wait_command_result');
    };
    return az_kusto_database;
}());
exports.az_kusto_database = az_kusto_database;
/** Manage Azure Kusto resources. */
var az_kusto = /** @class */ (function () {
    function az_kusto() {
    }
    return az_kusto;
}());
exports.az_kusto = az_kusto;
/**
 * Create a Kusto cluster.
 *
 * Syntax:
 * ```
 * az kusto cluster create --name
 *                         --resource-group
 *                         --sku {Dev(No SLA)_Standard_D11_v2, Dev(No SLA)_Standard_E2a_v4, Standard_D11_v2, Standard_D12_v2, Standard_D13_v2, Standard_D14_v2, Standard_DS13_v2+1TB_PS, Standard_DS13_v2+2TB_PS, Standard_DS14_v2+3TB_PS, Standard_DS14_v2+4TB_PS, Standard_E16a_v4, Standard_E16as_v4+3TB_PS, Standard_E16as_v4+4TB_PS, Standard_E2a_v4, Standard_E4a_v4, Standard_E8a_v4, Standard_E8as_v4+1TB_PS, Standard_E8as_v4+2TB_PS, Standard_L16s, Standard_L4s, Standard_L8s}
 *                         [--capacity]
 *                         [--location]
 *                         [--no-wait]
 *                         [--subscription]
 * ```
 *
 * @param {string} name The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'Dev(No SLA)_Standard_D11_v2' | 'Dev(No SLA)_Standard_E2a_v4' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_DS13_v2+1TB_PS' | 'Standard_DS13_v2+2TB_PS' | 'Standard_DS14_v2+3TB_PS' | 'Standard_DS14_v2+4TB_PS' | 'Standard_E16a_v4' | 'Standard_E16as_v4+3TB_PS' | 'Standard_E16as_v4+4TB_PS' | 'Standard_E2a_v4' | 'Standard_E4a_v4' | 'Standard_E8a_v4' | 'Standard_E8as_v4+1TB_PS' | 'Standard_E8as_v4+2TB_PS' | 'Standard_L16s' | 'Standard_L4s' | 'Standard_L8s'} sku The name of the sku.
 */
var az_kusto_cluster_create_command_builder = /** @class */ (function (_super) {
    __extends(az_kusto_cluster_create_command_builder, _super);
    function az_kusto_cluster_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, sku) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.sku(sku);
        return _this;
    }
    /** The name of the cluster. */
    az_kusto_cluster_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_kusto_cluster_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the sku. */
    az_kusto_cluster_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** The instance number of the VM. */
    az_kusto_cluster_create_command_builder.prototype.capacity = function (value) {
        this.setFlag("--capacity", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_kusto_cluster_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_kusto_cluster_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_kusto_cluster_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_kusto_cluster_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a Kusto cluster.
 *
 * Syntax:
 * ```
 * az kusto cluster delete [--ids]
 *                         [--name]
 *                         [--resource-group]
 *                         [--subscription]
 *                         [--yes]
 * ```
 */
var az_kusto_cluster_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_kusto_cluster_delete_command_builder, _super);
    function az_kusto_cluster_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_kusto_cluster_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the cluster. */
    az_kusto_cluster_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_kusto_cluster_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_kusto_cluster_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_kusto_cluster_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_kusto_cluster_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List a Kusto cluster.
 *
 * Syntax:
 * ```
 * az kusto cluster list --resource-group
 *                       [--query-examples]
 *                       [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_kusto_cluster_list_command_builder = /** @class */ (function (_super) {
    __extends(az_kusto_cluster_list_command_builder, _super);
    function az_kusto_cluster_list_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_kusto_cluster_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_kusto_cluster_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_kusto_cluster_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_kusto_cluster_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a Kusto cluster.
 *
 * Syntax:
 * ```
 * az kusto cluster show [--ids]
 *                       [--name]
 *                       [--query-examples]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
var az_kusto_cluster_show_command_builder = /** @class */ (function (_super) {
    __extends(az_kusto_cluster_show_command_builder, _super);
    function az_kusto_cluster_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_kusto_cluster_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the cluster. */
    az_kusto_cluster_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_kusto_cluster_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_kusto_cluster_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_kusto_cluster_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_kusto_cluster_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Start a Kusto cluster.
 *
 * Syntax:
 * ```
 * az kusto cluster start [--ids]
 *                        [--name]
 *                        [--no-wait]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 */
var az_kusto_cluster_start_command_builder = /** @class */ (function (_super) {
    __extends(az_kusto_cluster_start_command_builder, _super);
    function az_kusto_cluster_start_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_kusto_cluster_start_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the cluster. */
    az_kusto_cluster_start_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_kusto_cluster_start_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_kusto_cluster_start_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_kusto_cluster_start_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_kusto_cluster_start_command_builder;
}(base_1.CommandBuilder));
/**
 * Stop a Kusto cluster.
 *
 * Syntax:
 * ```
 * az kusto cluster stop [--ids]
 *                       [--name]
 *                       [--no-wait]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
var az_kusto_cluster_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_kusto_cluster_stop_command_builder, _super);
    function az_kusto_cluster_stop_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_kusto_cluster_stop_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the cluster. */
    az_kusto_cluster_stop_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_kusto_cluster_stop_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_kusto_cluster_stop_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_kusto_cluster_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_kusto_cluster_stop_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a Kusto cluster.
 *
 * Syntax:
 * ```
 * az kusto cluster update [--add]
 *                         [--capacity]
 *                         [--force-string]
 *                         [--ids]
 *                         [--name]
 *                         [--remove]
 *                         [--resource-group]
 *                         [--set]
 *                         [--sku {Dev(No SLA)_Standard_D11_v2, Dev(No SLA)_Standard_E2a_v4, Standard_D11_v2, Standard_D12_v2, Standard_D13_v2, Standard_D14_v2, Standard_DS13_v2+1TB_PS, Standard_DS13_v2+2TB_PS, Standard_DS14_v2+3TB_PS, Standard_DS14_v2+4TB_PS, Standard_E16a_v4, Standard_E16as_v4+3TB_PS, Standard_E16as_v4+4TB_PS, Standard_E2a_v4, Standard_E4a_v4, Standard_E8a_v4, Standard_E8as_v4+1TB_PS, Standard_E8as_v4+2TB_PS, Standard_L16s, Standard_L4s, Standard_L8s}]
 *                         [--subscription]
 * ```
 */
var az_kusto_cluster_update_command_builder = /** @class */ (function (_super) {
    __extends(az_kusto_cluster_update_command_builder, _super);
    function az_kusto_cluster_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_kusto_cluster_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The instance number of the VM. */
    az_kusto_cluster_update_command_builder.prototype.capacity = function (value) {
        this.setFlag("--capacity", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_kusto_cluster_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_kusto_cluster_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the cluster. */
    az_kusto_cluster_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_kusto_cluster_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_kusto_cluster_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_kusto_cluster_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** The name of the sku. */
    az_kusto_cluster_update_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_kusto_cluster_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_kusto_cluster_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Wait for a managed Kusto cluster to reach a desired state.
 *
 * Syntax:
 * ```
 * az kusto cluster wait [--created]
 *                       [--custom]
 *                       [--deleted]
 *                       [--exists]
 *                       [--ids]
 *                       [--interval]
 *                       [--name]
 *                       [--resource-group]
 *                       [--subscription]
 *                       [--timeout]
 *                       [--updated]
 * ```
 */
var az_kusto_cluster_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_kusto_cluster_wait_command_builder, _super);
    function az_kusto_cluster_wait_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_kusto_cluster_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_kusto_cluster_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_kusto_cluster_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_kusto_cluster_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_kusto_cluster_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_kusto_cluster_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** The name of the cluster. */
    az_kusto_cluster_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_kusto_cluster_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_kusto_cluster_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_kusto_cluster_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_kusto_cluster_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_kusto_cluster_wait_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a Kusto database.
 *
 * Syntax:
 * ```
 * az kusto database create --cluster-name
 *                          --name
 *                          --resource-group
 *                          [--hot-cache-period]
 *                          [--no-wait]
 *                          [--soft-delete-period]
 *                          [--subscription]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {string} name The name of the database.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_kusto_database_create_command_builder = /** @class */ (function (_super) {
    __extends(az_kusto_database_create_command_builder, _super);
    function az_kusto_database_create_command_builder(commandPath, resultDataTypeName, clusterName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_kusto_database_create_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** The name of the database. */
    az_kusto_database_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_kusto_database_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Amount of time that data should be kept in cache.Duration in ISO8601 format (for example, 100 days would be P100D). */
    az_kusto_database_create_command_builder.prototype.hotCachePeriod = function (value) {
        this.setFlag("--hot-cache-period", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_kusto_database_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Amount of time that data should be kept so it is available to query. Duration in ISO8601 format (for example, 100 days would be P100D). */
    az_kusto_database_create_command_builder.prototype.softDeletePeriod = function (value) {
        this.setFlag("--soft-delete-period", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_kusto_database_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_kusto_database_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a Kusto database.
 *
 * Syntax:
 * ```
 * az kusto database delete [--cluster-name]
 *                          [--ids]
 *                          [--name]
 *                          [--resource-group]
 *                          [--subscription]
 *                          [--yes]
 * ```
 */
var az_kusto_database_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_kusto_database_delete_command_builder, _super);
    function az_kusto_database_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the cluster. */
    az_kusto_database_delete_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_kusto_database_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the database. */
    az_kusto_database_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_kusto_database_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_kusto_database_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_kusto_database_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_kusto_database_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List a Kusto database.
 *
 * Syntax:
 * ```
 * az kusto database list --cluster-name
 *                        --resource-group
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_kusto_database_list_command_builder = /** @class */ (function (_super) {
    __extends(az_kusto_database_list_command_builder, _super);
    function az_kusto_database_list_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_kusto_database_list_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_kusto_database_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_kusto_database_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_kusto_database_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_kusto_database_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a Kusto database.
 *
 * Syntax:
 * ```
 * az kusto database show [--cluster-name]
 *                        [--ids]
 *                        [--name]
 *                        [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 */
var az_kusto_database_show_command_builder = /** @class */ (function (_super) {
    __extends(az_kusto_database_show_command_builder, _super);
    function az_kusto_database_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the cluster. */
    az_kusto_database_show_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_kusto_database_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the database. */
    az_kusto_database_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_kusto_database_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_kusto_database_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_kusto_database_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_kusto_database_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a Kusto database.
 *
 * Syntax:
 * ```
 * az kusto database update --soft-delete-period
 *                          [--add]
 *                          [--cluster-name]
 *                          [--force-string]
 *                          [--hot-cache-period]
 *                          [--ids]
 *                          [--name]
 *                          [--no-wait]
 *                          [--remove]
 *                          [--resource-group]
 *                          [--set]
 *                          [--subscription]
 * ```
 *
 * @param {string} softDeletePeriod Amount of time that data should be kept so it is available to query. Duration in ISO8601 format (for example, 100 days would be P100D).
 */
var az_kusto_database_update_command_builder = /** @class */ (function (_super) {
    __extends(az_kusto_database_update_command_builder, _super);
    function az_kusto_database_update_command_builder(commandPath, resultDataTypeName, softDeletePeriod) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.softDeletePeriod(softDeletePeriod);
        return _this;
    }
    /** Amount of time that data should be kept so it is available to query. Duration in ISO8601 format (for example, 100 days would be P100D). */
    az_kusto_database_update_command_builder.prototype.softDeletePeriod = function (value) {
        this.setFlag("--soft-delete-period", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_kusto_database_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The name of the cluster. */
    az_kusto_database_update_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_kusto_database_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Amount of time that data should be kept in cache.Duration in ISO8601 format (for example, 100 days would be P100D). */
    az_kusto_database_update_command_builder.prototype.hotCachePeriod = function (value) {
        this.setFlag("--hot-cache-period", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_kusto_database_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the database. */
    az_kusto_database_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_kusto_database_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_kusto_database_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_kusto_database_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_kusto_database_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_kusto_database_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_kusto_database_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Wait for a managed Kusto database to reach a desired state.
 *
 * Syntax:
 * ```
 * az kusto database wait [--cluster-name]
 *                        [--created]
 *                        [--custom]
 *                        [--deleted]
 *                        [--exists]
 *                        [--ids]
 *                        [--interval]
 *                        [--name]
 *                        [--resource-group]
 *                        [--subscription]
 *                        [--timeout]
 *                        [--updated]
 * ```
 */
var az_kusto_database_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_kusto_database_wait_command_builder, _super);
    function az_kusto_database_wait_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the cluster. */
    az_kusto_database_wait_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_kusto_database_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_kusto_database_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_kusto_database_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_kusto_database_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_kusto_database_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_kusto_database_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** The name of the database. */
    az_kusto_database_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_kusto_database_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_kusto_database_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_kusto_database_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_kusto_database_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_kusto_database_wait_command_builder;
}(base_1.CommandBuilder));
