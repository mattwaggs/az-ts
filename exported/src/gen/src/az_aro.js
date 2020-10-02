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
/** Manage Azure Red Hat OpenShift clusters. */
var az_aro = /** @class */ (function () {
    function az_aro() {
    }
    /**
     * Create a cluster.
     *
     * Syntax:
     * ```
     * az aro create --master-subnet
     *               --name
     *               --resource-group
     *               --worker-subnet
     *               [--apiserver-visibility {Private, Public}]
     *               [--client-id]
     *               [--client-secret]
     *               [--cluster-resource-group]
     *               [--domain]
     *               [--ingress-visibility {Private, Public}]
     *               [--location]
     *               [--master-vm-size]
     *               [--no-wait]
     *               [--pod-cidr]
     *               [--pull-secret]
     *               [--service-cidr]
     *               [--subscription]
     *               [--tags]
     *               [--vnet]
     *               [--vnet-resource-group]
     *               [--worker-count]
     *               [--worker-vm-disk-size-gb]
     *               [--worker-vm-size]
     * ```
     *
     * @param {string} masterSubnet Name or ID of master vnet subnet.  If name is supplied, `--vnet` must be supplied.
     * @param {string} name Name of cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workerSubnet Name or ID of worker vnet subnet.  If name is supplied, `--vnet` must be supplied.
     */
    az_aro.create = function (masterSubnet, name, resourceGroup, workerSubnet) {
        return new az_aro_create_command_builder("az aro create", 'az_aro_create_command_result', masterSubnet, name, resourceGroup, workerSubnet);
    };
    /**
     * Delete a cluster.
     *
     * Syntax:
     * ```
     * az aro delete --name
     *               --resource-group
     *               [--no-wait]
     *               [--subscription]
     *               [--yes]
     * ```
     *
     * @param {string} name Name of cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aro["delete"] = function (name, resourceGroup) {
        return new az_aro_delete_command_builder("az aro delete", 'az_aro_delete_command_result', name, resourceGroup);
    };
    /**
     * List clusters.
     *
     * Syntax:
     * ```
     * az aro list [--query-examples]
     *             [--resource-group]
     *             [--subscription]
     * ```
     */
    az_aro.list = function () {
        return new az_aro_list_command_builder("az aro list", 'az_aro_list_command_result');
    };
    /**
     * List credentials of a cluster.
     *
     * Syntax:
     * ```
     * az aro list-credentials --name
     *                         --resource-group
     *                         [--subscription]
     * ```
     *
     * @param {string} name Name of cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aro.list_credentials = function (name, resourceGroup) {
        return new az_aro_list_credentials_command_builder("az aro list-credentials", 'az_aro_list_credentials_command_result', name, resourceGroup);
    };
    /**
     * Get the details of a cluster.
     *
     * Syntax:
     * ```
     * az aro show --name
     *             --resource-group
     *             [--query-examples]
     *             [--subscription]
     * ```
     *
     * @param {string} name Name of cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aro.show = function (name, resourceGroup) {
        return new az_aro_show_command_builder("az aro show", 'az_aro_show_command_result', name, resourceGroup);
    };
    /**
     * Update a cluster.
     *
     * Syntax:
     * ```
     * az aro update --name
     *               --resource-group
     *               [--no-wait]
     *               [--subscription]
     * ```
     *
     * @param {string} name Name of cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aro.update = function (name, resourceGroup) {
        return new az_aro_update_command_builder("az aro update", 'az_aro_update_command_result', name, resourceGroup);
    };
    /**
     * Wait for a cluster to reach a desired state.
     *
     * Syntax:
     * ```
     * az aro wait --name
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
     * @param {string} name Name of cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aro.wait = function (name, resourceGroup) {
        return new az_aro_wait_command_builder("az aro wait", 'az_aro_wait_command_result', name, resourceGroup);
    };
    return az_aro;
}());
exports.az_aro = az_aro;
/**
 * Create a cluster.
 *
 * Syntax:
 * ```
 * az aro create --master-subnet
 *               --name
 *               --resource-group
 *               --worker-subnet
 *               [--apiserver-visibility {Private, Public}]
 *               [--client-id]
 *               [--client-secret]
 *               [--cluster-resource-group]
 *               [--domain]
 *               [--ingress-visibility {Private, Public}]
 *               [--location]
 *               [--master-vm-size]
 *               [--no-wait]
 *               [--pod-cidr]
 *               [--pull-secret]
 *               [--service-cidr]
 *               [--subscription]
 *               [--tags]
 *               [--vnet]
 *               [--vnet-resource-group]
 *               [--worker-count]
 *               [--worker-vm-disk-size-gb]
 *               [--worker-vm-size]
 * ```
 *
 * @param {string} masterSubnet Name or ID of master vnet subnet.  If name is supplied, `--vnet` must be supplied.
 * @param {string} name Name of cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workerSubnet Name or ID of worker vnet subnet.  If name is supplied, `--vnet` must be supplied.
 */
var az_aro_create_command_builder = /** @class */ (function (_super) {
    __extends(az_aro_create_command_builder, _super);
    function az_aro_create_command_builder(commandPath, resultDataTypeName, masterSubnet, name, resourceGroup, workerSubnet) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.masterSubnet(masterSubnet);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.workerSubnet(workerSubnet);
        return _this;
    }
    /** Name or ID of master vnet subnet.  If name is supplied, `--vnet` must be supplied. */
    az_aro_create_command_builder.prototype.masterSubnet = function (value) {
        this.setFlag("--master-subnet", value);
        return this;
    };
    /** Name of cluster. */
    az_aro_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aro_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of worker vnet subnet.  If name is supplied, `--vnet` must be supplied. */
    az_aro_create_command_builder.prototype.workerSubnet = function (value) {
        this.setFlag("--worker-subnet", value);
        return this;
    };
    /** API server visibility. */
    az_aro_create_command_builder.prototype.apiserverVisibility = function (value) {
        this.setFlag("--apiserver-visibility", value);
        return this;
    };
    /** Client ID of cluster service principal. */
    az_aro_create_command_builder.prototype.clientId = function (value) {
        this.setFlag("--client-id", value);
        return this;
    };
    /** Client secret of cluster service principal. */
    az_aro_create_command_builder.prototype.clientSecret = function (value) {
        this.setFlag("--client-secret", value);
        return this;
    };
    /** Resource group of cluster. */
    az_aro_create_command_builder.prototype.clusterResourceGroup = function (value) {
        this.setFlag("--cluster-resource-group", value);
        return this;
    };
    /** Domain of cluster. */
    az_aro_create_command_builder.prototype.domain = function (value) {
        this.setFlag("--domain", value);
        return this;
    };
    /** Ingress visibility. */
    az_aro_create_command_builder.prototype.ingressVisibility = function (value) {
        this.setFlag("--ingress-visibility", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_aro_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Size of master VMs. */
    az_aro_create_command_builder.prototype.masterVmSize = function (value) {
        this.setFlag("--master-vm-size", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_aro_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** CIDR of pod network. */
    az_aro_create_command_builder.prototype.podCidr = function (value) {
        this.setFlag("--pod-cidr", value);
        return this;
    };
    /** Pull secret of cluster. */
    az_aro_create_command_builder.prototype.pullSecret = function (value) {
        this.setFlag("--pull-secret", value);
        return this;
    };
    /** CIDR of service network. */
    az_aro_create_command_builder.prototype.serviceCidr = function (value) {
        this.setFlag("--service-cidr", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aro_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_aro_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Name or ID of vnet.  If name is supplied, `--vnet-resource-group` must be supplied. */
    az_aro_create_command_builder.prototype.vnet = function (value) {
        this.setFlag("--vnet", value);
        return this;
    };
    /** Name of vnet resource group. */
    az_aro_create_command_builder.prototype.vnetResourceGroup = function (value) {
        this.setFlag("--vnet-resource-group", value);
        return this;
    };
    /** Count of worker VMs. */
    az_aro_create_command_builder.prototype.workerCount = function (value) {
        this.setFlag("--worker-count", value);
        return this;
    };
    /** Disk size in GB of worker VMs. */
    az_aro_create_command_builder.prototype.workerVmDiskSizeGb = function (value) {
        this.setFlag("--worker-vm-disk-size-gb", value);
        return this;
    };
    /** Size of worker VMs. */
    az_aro_create_command_builder.prototype.workerVmSize = function (value) {
        this.setFlag("--worker-vm-size", value);
        return this;
    };
    return az_aro_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a cluster.
 *
 * Syntax:
 * ```
 * az aro delete --name
 *               --resource-group
 *               [--no-wait]
 *               [--subscription]
 *               [--yes]
 * ```
 *
 * @param {string} name Name of cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aro_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_aro_delete_command_builder, _super);
    function az_aro_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of cluster. */
    az_aro_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aro_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_aro_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aro_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_aro_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_aro_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List clusters.
 *
 * Syntax:
 * ```
 * az aro list [--query-examples]
 *             [--resource-group]
 *             [--subscription]
 * ```
 */
var az_aro_list_command_builder = /** @class */ (function (_super) {
    __extends(az_aro_list_command_builder, _super);
    function az_aro_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_aro_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aro_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aro_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_aro_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List credentials of a cluster.
 *
 * Syntax:
 * ```
 * az aro list-credentials --name
 *                         --resource-group
 *                         [--subscription]
 * ```
 *
 * @param {string} name Name of cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aro_list_credentials_command_builder = /** @class */ (function (_super) {
    __extends(az_aro_list_credentials_command_builder, _super);
    function az_aro_list_credentials_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of cluster. */
    az_aro_list_credentials_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aro_list_credentials_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aro_list_credentials_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_aro_list_credentials_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a cluster.
 *
 * Syntax:
 * ```
 * az aro show --name
 *             --resource-group
 *             [--query-examples]
 *             [--subscription]
 * ```
 *
 * @param {string} name Name of cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aro_show_command_builder = /** @class */ (function (_super) {
    __extends(az_aro_show_command_builder, _super);
    function az_aro_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of cluster. */
    az_aro_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aro_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_aro_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aro_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_aro_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a cluster.
 *
 * Syntax:
 * ```
 * az aro update --name
 *               --resource-group
 *               [--no-wait]
 *               [--subscription]
 * ```
 *
 * @param {string} name Name of cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aro_update_command_builder = /** @class */ (function (_super) {
    __extends(az_aro_update_command_builder, _super);
    function az_aro_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of cluster. */
    az_aro_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aro_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_aro_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aro_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_aro_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Wait for a cluster to reach a desired state.
 *
 * Syntax:
 * ```
 * az aro wait --name
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
 * @param {string} name Name of cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aro_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_aro_wait_command_builder, _super);
    function az_aro_wait_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of cluster. */
    az_aro_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aro_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_aro_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_aro_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_aro_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_aro_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_aro_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aro_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_aro_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_aro_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_aro_wait_command_builder;
}(base_1.CommandBuilder));
