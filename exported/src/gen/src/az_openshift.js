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
exports.az_openshift = exports.az_openshift_monitor = void 0;
var base_1 = require("../base");
/** Commands to manage Log Analytics monitoring in an ARO 3.11 cluster. */
var az_openshift_monitor = /** @class */ (function () {
    function az_openshift_monitor() {
    }
    /**
     * Disable Log Analytics monitoring in an ARO 3.11 cluster.
     *
     * Syntax:
     * ```
     * az openshift monitor disable --name
     *                              --resource-group
     *                              [--no-wait]
     *                              [--subscription]
     * ```
     *
     * @param {string} name Name of the managed OpenShift cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_openshift_monitor.disable = function (name, resourceGroup) {
        return new az_openshift_monitor_disable_command_builder("az openshift monitor disable", 'az_openshift_monitor_disable_command_result', name, resourceGroup);
    };
    /**
     * Enable Log Analytics monitoring in an ARO 3.11 cluster.
     *
     * Syntax:
     * ```
     * az openshift monitor enable --name
     *                             --resource-group
     *                             --workspace-id
     *                             [--no-wait]
     *                             [--subscription]
     * ```
     *
     * @param {string} name Name of the managed OpenShift cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceId The resource ID of an existing Log Analytics Workspace to use for storing monitoring data.
     */
    az_openshift_monitor.enable = function (name, resourceGroup, workspaceId) {
        return new az_openshift_monitor_enable_command_builder("az openshift monitor enable", 'az_openshift_monitor_enable_command_result', name, resourceGroup, workspaceId);
    };
    return az_openshift_monitor;
}());
exports.az_openshift_monitor = az_openshift_monitor;
/** Manage Azure Red Hat OpenShift 3.11 clusters. */
var az_openshift = /** @class */ (function () {
    function az_openshift() {
    }
    /**
     * Create a new Azure Red Hat OpenShift 3.11 cluster.
     *
     * Syntax:
     * ```
     * az openshift create --name
     *                     --resource-group
     *                     [--aad-client-app-id]
     *                     [--aad-client-app-secret]
     *                     [--aad-tenant-id]
     *                     [--compute-count]
     *                     [--compute-vm-size]
     *                     [--customer-admin-group-id]
     *                     [--location]
     *                     [--no-wait]
     *                     [--subnet-prefix]
     *                     [--subscription]
     *                     [--tags]
     *                     [--vnet-peer]
     *                     [--vnet-prefix]
     *                     [--workspace-id]
     * ```
     *
     * @param {string} name Name of the managed OpenShift cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_openshift.create = function (name, resourceGroup) {
        return new az_openshift_create_command_builder("az openshift create", 'az_openshift_create_command_result', name, resourceGroup);
    };
    /**
     * Delete an Azure Red Hat OpenShift 3.11 cluster.
     *
     * Syntax:
     * ```
     * az openshift delete --name
     *                     --resource-group
     *                     [--no-wait]
     *                     [--subscription]
     *                     [--yes]
     * ```
     *
     * @param {string} name Name of the managed OpenShift cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_openshift["delete"] = function (name, resourceGroup) {
        return new az_openshift_delete_command_builder("az openshift delete", 'az_openshift_delete_command_result', name, resourceGroup);
    };
    /**
     * List Azure Red Hat OpenShift 3.11 clusters.
     *
     * Syntax:
     * ```
     * az openshift list [--query-examples]
     *                   [--resource-group]
     *                   [--subscription]
     * ```
     */
    az_openshift.list = function () {
        return new az_openshift_list_command_builder("az openshift list", 'az_openshift_list_command_result');
    };
    /**
     * Scale the compute pool in an Azure Red Hat OpenShift 3.11 cluster.
     *
     * Syntax:
     * ```
     * az openshift scale --compute-count
     *                    --name
     *                    --resource-group
     *                    [--no-wait]
     *                    [--subscription]
     * ```
     *
     * @param {string} computeCount Number of nodes in the OpenShift compute pool.
     * @param {string} name Name of the managed OpenShift cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_openshift.scale = function (computeCount, name, resourceGroup) {
        return new az_openshift_scale_command_builder("az openshift scale", 'az_openshift_scale_command_result', computeCount, name, resourceGroup);
    };
    /**
     * Show the details for an Azure Red Hat OpenShift 3.11 cluster.
     *
     * Syntax:
     * ```
     * az openshift show --name
     *                   --resource-group
     *                   [--query-examples]
     *                   [--subscription]
     * ```
     *
     * @param {string} name Name of the managed OpenShift cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_openshift.show = function (name, resourceGroup) {
        return new az_openshift_show_command_builder("az openshift show", 'az_openshift_show_command_result', name, resourceGroup);
    };
    /**
     * Wait for an Azure Red Hat OpenShift 3.11 cluster to reach a desired state.
     *
     * Syntax:
     * ```
     * az openshift wait --name
     *                   --resource-group
     *                   [--created]
     *                   [--custom]
     *                   [--deleted]
     *                   [--exists]
     *                   [--interval]
     *                   [--subscription]
     *                   [--timeout]
     *                   [--updated]
     * ```
     *
     * @param {string} name Name of the managed OpenShift cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_openshift.wait = function (name, resourceGroup) {
        return new az_openshift_wait_command_builder("az openshift wait", 'az_openshift_wait_command_result', name, resourceGroup);
    };
    return az_openshift;
}());
exports.az_openshift = az_openshift;
/**
 * Disable Log Analytics monitoring in an ARO 3.11 cluster.
 *
 * Syntax:
 * ```
 * az openshift monitor disable --name
 *                              --resource-group
 *                              [--no-wait]
 *                              [--subscription]
 * ```
 *
 * @param {string} name Name of the managed OpenShift cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_openshift_monitor_disable_command_builder = /** @class */ (function (_super) {
    __extends(az_openshift_monitor_disable_command_builder, _super);
    function az_openshift_monitor_disable_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the managed OpenShift cluster. */
    az_openshift_monitor_disable_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_openshift_monitor_disable_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_openshift_monitor_disable_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_openshift_monitor_disable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_openshift_monitor_disable_command_builder;
}(base_1.CommandBuilder));
/**
 * Enable Log Analytics monitoring in an ARO 3.11 cluster.
 *
 * Syntax:
 * ```
 * az openshift monitor enable --name
 *                             --resource-group
 *                             --workspace-id
 *                             [--no-wait]
 *                             [--subscription]
 * ```
 *
 * @param {string} name Name of the managed OpenShift cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceId The resource ID of an existing Log Analytics Workspace to use for storing monitoring data.
 */
var az_openshift_monitor_enable_command_builder = /** @class */ (function (_super) {
    __extends(az_openshift_monitor_enable_command_builder, _super);
    function az_openshift_monitor_enable_command_builder(commandPath, resultDataTypeName, name, resourceGroup, workspaceId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.workspaceId(workspaceId);
        return _this;
    }
    /** Name of the managed OpenShift cluster. */
    az_openshift_monitor_enable_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_openshift_monitor_enable_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The resource ID of an existing Log Analytics Workspace to use for storing monitoring data. */
    az_openshift_monitor_enable_command_builder.prototype.workspaceId = function (value) {
        this.setFlag("--workspace-id", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_openshift_monitor_enable_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_openshift_monitor_enable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_openshift_monitor_enable_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new Azure Red Hat OpenShift 3.11 cluster.
 *
 * Syntax:
 * ```
 * az openshift create --name
 *                     --resource-group
 *                     [--aad-client-app-id]
 *                     [--aad-client-app-secret]
 *                     [--aad-tenant-id]
 *                     [--compute-count]
 *                     [--compute-vm-size]
 *                     [--customer-admin-group-id]
 *                     [--location]
 *                     [--no-wait]
 *                     [--subnet-prefix]
 *                     [--subscription]
 *                     [--tags]
 *                     [--vnet-peer]
 *                     [--vnet-prefix]
 *                     [--workspace-id]
 * ```
 *
 * @param {string} name Name of the managed OpenShift cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_openshift_create_command_builder = /** @class */ (function (_super) {
    __extends(az_openshift_create_command_builder, _super);
    function az_openshift_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the managed OpenShift cluster. */
    az_openshift_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_openshift_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The ID of an Azure Active Directory client application. If not specified, a new Azure Active Directory client is created. */
    az_openshift_create_command_builder.prototype.aadClientAppId = function (value) {
        this.setFlag("--aad-client-app-id", value);
        return this;
    };
    /** The secret of an Azure Active Directory client application. */
    az_openshift_create_command_builder.prototype.aadClientAppSecret = function (value) {
        this.setFlag("--aad-client-app-secret", value);
        return this;
    };
    /** The ID of an Azure Active Directory tenant. */
    az_openshift_create_command_builder.prototype.aadTenantId = function (value) {
        this.setFlag("--aad-tenant-id", value);
        return this;
    };
    /** Number of nodes in the OpenShift node pool. */
    az_openshift_create_command_builder.prototype.computeCount = function (value) {
        this.setFlag("--compute-count", value);
        return this;
    };
    /** Size of Virtual Machines to create as OpenShift nodes. */
    az_openshift_create_command_builder.prototype.computeVmSize = function (value) {
        this.setFlag("--compute-vm-size", value);
        return this;
    };
    /** The Object ID of an Azure Active Directory Group that memberships will get synced into the OpenShift group "osa-customer-admins". If not specified, no cluster admin access will be granted. */
    az_openshift_create_command_builder.prototype.customerAdminGroupId = function (value) {
        this.setFlag("--customer-admin-group-id", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_openshift_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_openshift_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The CIDR used on the Subnet into which to deploy the cluster. */
    az_openshift_create_command_builder.prototype.subnetPrefix = function (value) {
        this.setFlag("--subnet-prefix", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_openshift_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_openshift_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The ID or the name of a subnet in an existing VNet into which to peer the cluster. */
    az_openshift_create_command_builder.prototype.vnetPeer = function (value) {
        this.setFlag("--vnet-peer", value);
        return this;
    };
    /** The CIDR used on the VNet into which to deploy the cluster. */
    az_openshift_create_command_builder.prototype.vnetPrefix = function (value) {
        this.setFlag("--vnet-prefix", value);
        return this;
    };
    /** The resource id of an existing Log Analytics Workspace to use for storing monitoring data. */
    az_openshift_create_command_builder.prototype.workspaceId = function (value) {
        this.setFlag("--workspace-id", value);
        return this;
    };
    return az_openshift_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an Azure Red Hat OpenShift 3.11 cluster.
 *
 * Syntax:
 * ```
 * az openshift delete --name
 *                     --resource-group
 *                     [--no-wait]
 *                     [--subscription]
 *                     [--yes]
 * ```
 *
 * @param {string} name Name of the managed OpenShift cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_openshift_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_openshift_delete_command_builder, _super);
    function az_openshift_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the managed OpenShift cluster. */
    az_openshift_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_openshift_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_openshift_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_openshift_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_openshift_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_openshift_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List Azure Red Hat OpenShift 3.11 clusters.
 *
 * Syntax:
 * ```
 * az openshift list [--query-examples]
 *                   [--resource-group]
 *                   [--subscription]
 * ```
 */
var az_openshift_list_command_builder = /** @class */ (function (_super) {
    __extends(az_openshift_list_command_builder, _super);
    function az_openshift_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_openshift_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_openshift_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_openshift_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_openshift_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Scale the compute pool in an Azure Red Hat OpenShift 3.11 cluster.
 *
 * Syntax:
 * ```
 * az openshift scale --compute-count
 *                    --name
 *                    --resource-group
 *                    [--no-wait]
 *                    [--subscription]
 * ```
 *
 * @param {string} computeCount Number of nodes in the OpenShift compute pool.
 * @param {string} name Name of the managed OpenShift cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_openshift_scale_command_builder = /** @class */ (function (_super) {
    __extends(az_openshift_scale_command_builder, _super);
    function az_openshift_scale_command_builder(commandPath, resultDataTypeName, computeCount, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.computeCount(computeCount);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Number of nodes in the OpenShift compute pool. */
    az_openshift_scale_command_builder.prototype.computeCount = function (value) {
        this.setFlag("--compute-count", value);
        return this;
    };
    /** Name of the managed OpenShift cluster. */
    az_openshift_scale_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_openshift_scale_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_openshift_scale_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_openshift_scale_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_openshift_scale_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details for an Azure Red Hat OpenShift 3.11 cluster.
 *
 * Syntax:
 * ```
 * az openshift show --name
 *                   --resource-group
 *                   [--query-examples]
 *                   [--subscription]
 * ```
 *
 * @param {string} name Name of the managed OpenShift cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_openshift_show_command_builder = /** @class */ (function (_super) {
    __extends(az_openshift_show_command_builder, _super);
    function az_openshift_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the managed OpenShift cluster. */
    az_openshift_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_openshift_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_openshift_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_openshift_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_openshift_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Wait for an Azure Red Hat OpenShift 3.11 cluster to reach a desired state.
 *
 * Syntax:
 * ```
 * az openshift wait --name
 *                   --resource-group
 *                   [--created]
 *                   [--custom]
 *                   [--deleted]
 *                   [--exists]
 *                   [--interval]
 *                   [--subscription]
 *                   [--timeout]
 *                   [--updated]
 * ```
 *
 * @param {string} name Name of the managed OpenShift cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_openshift_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_openshift_wait_command_builder, _super);
    function az_openshift_wait_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the managed OpenShift cluster. */
    az_openshift_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_openshift_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_openshift_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_openshift_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_openshift_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_openshift_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_openshift_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_openshift_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_openshift_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_openshift_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_openshift_wait_command_builder;
}(base_1.CommandBuilder));
