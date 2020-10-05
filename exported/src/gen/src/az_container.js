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
exports.az_container = void 0;
var base_1 = require("../base");
/** Manage Azure Container Instances. */
var az_container = /** @class */ (function () {
    function az_container() {
    }
    /**
     * Attach local standard output and error streams to a container in a container group.
     *
     * Syntax:
     * ```
     * az container attach [--container-name]
     *                     [--ids]
     *                     [--name]
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     */
    az_container.attach = function () {
        return new az_container_attach_command_builder("az container attach", 'az_container_attach_command_result');
    };
    /**
     * Create a container group.
     *
     * Syntax:
     * ```
     * az container create --resource-group
     *                     [--assign-identity]
     *                     [--azure-file-volume-account-key]
     *                     [--azure-file-volume-account-name]
     *                     [--azure-file-volume-mount-path]
     *                     [--azure-file-volume-share-name]
     *                     [--command-line]
     *                     [--cpu]
     *                     [--dns-name-label]
     *                     [--environment-variables]
     *                     [--file]
     *                     [--gitrepo-dir]
     *                     [--gitrepo-mount-path]
     *                     [--gitrepo-revision]
     *                     [--gitrepo-url]
     *                     [--image]
     *                     [--ip-address {Private, Public}]
     *                     [--location]
     *                     [--log-analytics-workspace]
     *                     [--log-analytics-workspace-key]
     *                     [--memory]
     *                     [--name]
     *                     [--network-profile]
     *                     [--no-wait]
     *                     [--os-type {Linux, Windows}]
     *                     [--ports]
     *                     [--protocol {TCP, UDP}]
     *                     [--registry-login-server]
     *                     [--registry-password]
     *                     [--registry-username]
     *                     [--restart-policy {Always, Never, OnFailure}]
     *                     [--role]
     *                     [--scope]
     *                     [--secrets]
     *                     [--secrets-mount-path]
     *                     [--secure-environment-variables]
     *                     [--subnet]
     *                     [--subnet-address-prefix]
     *                     [--subscription]
     *                     [--vnet]
     *                     [--vnet-address-prefix]
     *                     [--vnet-name]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_container.create = function (resourceGroup) {
        return new az_container_create_command_builder("az container create", 'az_container_create_command_result', resourceGroup);
    };
    /**
     * Delete a container group.
     *
     * Syntax:
     * ```
     * az container delete [--ids]
     *                     [--name]
     *                     [--resource-group]
     *                     [--subscription]
     *                     [--yes]
     * ```
     */
    az_container["delete"] = function () {
        return new az_container_delete_command_builder("az container delete", 'az_container_delete_command_result');
    };
    /**
     * Execute a command from within a running container of a container group.
     *
     * Syntax:
     * ```
     * az container exec --exec-command
     *                   [--container-name]
     *                   [--ids]
     *                   [--name]
     *                   [--resource-group]
     *                   [--subscription]
     *                   [--terminal-col-size]
     *                   [--terminal-row-size]
     * ```
     *
     * @param {string} execCommand The command to run from within the container.
     */
    az_container.exec = function (execCommand) {
        return new az_container_exec_command_builder("az container exec", 'az_container_exec_command_result', execCommand);
    };
    /**
     * Export a container group in yaml format.
     *
     * Syntax:
     * ```
     * az container export --file
     *                     [--ids]
     *                     [--name]
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     *
     * @param {string} file The file path to export the container group.
     */
    az_container["export"] = function (file) {
        return new az_container_export_command_builder("az container export", 'az_container_export_command_result', file);
    };
    /**
     * List container groups.
     *
     * Syntax:
     * ```
     * az container list [--query-examples]
     *                   [--resource-group]
     *                   [--subscription]
     * ```
     */
    az_container.list = function () {
        return new az_container_list_command_builder("az container list", 'az_container_list_command_result');
    };
    /**
     * Examine the logs for a container in a container group.
     *
     * Syntax:
     * ```
     * az container logs [--container-name]
     *                   [--follow]
     *                   [--ids]
     *                   [--name]
     *                   [--resource-group]
     *                   [--subscription]
     * ```
     */
    az_container.logs = function () {
        return new az_container_logs_command_builder("az container logs", 'az_container_logs_command_result');
    };
    /**
     * Restarts all containers in a container group.
     *
     * Syntax:
     * ```
     * az container restart --name
     *                      --resource-group
     *                      [--no-wait]
     *                      [--subscription]
     * ```
     *
     * @param {string} name The name of the container group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_container.restart = function (name, resourceGroup) {
        return new az_container_restart_command_builder("az container restart", 'az_container_restart_command_result', name, resourceGroup);
    };
    /**
     * Get the details of a container group.
     *
     * Syntax:
     * ```
     * az container show [--ids]
     *                   [--name]
     *                   [--query-examples]
     *                   [--resource-group]
     *                   [--subscription]
     * ```
     */
    az_container.show = function () {
        return new az_container_show_command_builder("az container show", 'az_container_show_command_result');
    };
    /**
     * Starts all containers in a container group.
     *
     * Syntax:
     * ```
     * az container start --name
     *                    --resource-group
     *                    [--no-wait]
     *                    [--subscription]
     * ```
     *
     * @param {string} name The name of the container group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_container.start = function (name, resourceGroup) {
        return new az_container_start_command_builder("az container start", 'az_container_start_command_result', name, resourceGroup);
    };
    /**
     * Stops all containers in a container group.
     *
     * Syntax:
     * ```
     * az container stop --name
     *                   --resource-group
     *                   [--subscription]
     * ```
     *
     * @param {string} name The name of the container group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_container.stop = function (name, resourceGroup) {
        return new az_container_stop_command_builder("az container stop", 'az_container_stop_command_result', name, resourceGroup);
    };
    return az_container;
}());
exports.az_container = az_container;
/**
 * Attach local standard output and error streams to a container in a container group.
 *
 * Syntax:
 * ```
 * az container attach [--container-name]
 *                     [--ids]
 *                     [--name]
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 */
var az_container_attach_command_builder = /** @class */ (function (_super) {
    __extends(az_container_attach_command_builder, _super);
    function az_container_attach_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The container to attach to. If omitted, the first container in the container group will be chosen. */
    az_container_attach_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_container_attach_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the container group. */
    az_container_attach_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_container_attach_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_container_attach_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_container_attach_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a container group.
 *
 * Syntax:
 * ```
 * az container create --resource-group
 *                     [--assign-identity]
 *                     [--azure-file-volume-account-key]
 *                     [--azure-file-volume-account-name]
 *                     [--azure-file-volume-mount-path]
 *                     [--azure-file-volume-share-name]
 *                     [--command-line]
 *                     [--cpu]
 *                     [--dns-name-label]
 *                     [--environment-variables]
 *                     [--file]
 *                     [--gitrepo-dir]
 *                     [--gitrepo-mount-path]
 *                     [--gitrepo-revision]
 *                     [--gitrepo-url]
 *                     [--image]
 *                     [--ip-address {Private, Public}]
 *                     [--location]
 *                     [--log-analytics-workspace]
 *                     [--log-analytics-workspace-key]
 *                     [--memory]
 *                     [--name]
 *                     [--network-profile]
 *                     [--no-wait]
 *                     [--os-type {Linux, Windows}]
 *                     [--ports]
 *                     [--protocol {TCP, UDP}]
 *                     [--registry-login-server]
 *                     [--registry-password]
 *                     [--registry-username]
 *                     [--restart-policy {Always, Never, OnFailure}]
 *                     [--role]
 *                     [--scope]
 *                     [--secrets]
 *                     [--secrets-mount-path]
 *                     [--secure-environment-variables]
 *                     [--subnet]
 *                     [--subnet-address-prefix]
 *                     [--subscription]
 *                     [--vnet]
 *                     [--vnet-address-prefix]
 *                     [--vnet-name]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_container_create_command_builder = /** @class */ (function (_super) {
    __extends(az_container_create_command_builder, _super);
    function az_container_create_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_container_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated list of assigned identities. Assigned identities are either user assigned identities (resource IDs) and / or the system assigned identity ('[system]'). See examples for more info. */
    az_container_create_command_builder.prototype.assignIdentity = function (value) {
        this.setFlag("--assign-identity", value);
        return this;
    };
    /** The storage account access key used to access the Azure File share. */
    az_container_create_command_builder.prototype.azureFileVolumeAccountKey = function (value) {
        this.setFlag("--azure-file-volume-account-key", value);
        return this;
    };
    /** The name of the storage account that contains the Azure File share. */
    az_container_create_command_builder.prototype.azureFileVolumeAccountName = function (value) {
        this.setFlag("--azure-file-volume-account-name", value);
        return this;
    };
    /** The path within the container where the azure file volume should be mounted. Must not contain colon ':'. */
    az_container_create_command_builder.prototype.azureFileVolumeMountPath = function (value) {
        this.setFlag("--azure-file-volume-mount-path", value);
        return this;
    };
    /** The name of the Azure File share to be mounted as a volume. */
    az_container_create_command_builder.prototype.azureFileVolumeShareName = function (value) {
        this.setFlag("--azure-file-volume-share-name", value);
        return this;
    };
    /** The command line to run when the container is started, e.g. '/bin/bash -c myscript.sh'. */
    az_container_create_command_builder.prototype.commandLine = function (value) {
        this.setFlag("--command-line", value);
        return this;
    };
    /** The required number of CPU cores of the containers, accurate to one decimal place. */
    az_container_create_command_builder.prototype.cpu = function (value) {
        this.setFlag("--cpu", value);
        return this;
    };
    /** The dns name label for container group with public IP. */
    az_container_create_command_builder.prototype.dnsNameLabel = function (value) {
        this.setFlag("--dns-name-label", value);
        return this;
    };
    /** A list of environment variable for the container. Space-separated values in 'key=value' format. */
    az_container_create_command_builder.prototype.environmentVariables = function (value) {
        this.setFlag("--environment-variables", value);
        return this;
    };
    /** The path to the input file. */
    az_container_create_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** The target directory path in the git repository. Must not contain '..'. */
    az_container_create_command_builder.prototype.gitrepoDir = function (value) {
        this.setFlag("--gitrepo-dir", value);
        return this;
    };
    /** The path within the container where the git repo volume should be mounted. Must not contain colon ':'. */
    az_container_create_command_builder.prototype.gitrepoMountPath = function (value) {
        this.setFlag("--gitrepo-mount-path", value);
        return this;
    };
    /** The commit hash for the specified revision. */
    az_container_create_command_builder.prototype.gitrepoRevision = function (value) {
        this.setFlag("--gitrepo-revision", value);
        return this;
    };
    /** The URL of a git repository to be mounted as a volume. */
    az_container_create_command_builder.prototype.gitrepoUrl = function (value) {
        this.setFlag("--gitrepo-url", value);
        return this;
    };
    /** The container image name. */
    az_container_create_command_builder.prototype.image = function (value) {
        this.setFlag("--image", value);
        return this;
    };
    /** The IP address type of the container group. */
    az_container_create_command_builder.prototype.ipAddress = function (value) {
        this.setFlag("--ip-address", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_container_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The Log Analytics workspace name or id. Use the current subscription or use --subscription flag to set the desired subscription. */
    az_container_create_command_builder.prototype.logAnalyticsWorkspace = function (value) {
        this.setFlag("--log-analytics-workspace", value);
        return this;
    };
    /** The Log Analytics workspace key. */
    az_container_create_command_builder.prototype.logAnalyticsWorkspaceKey = function (value) {
        this.setFlag("--log-analytics-workspace-key", value);
        return this;
    };
    /** The required memory of the containers in GB, accurate to one decimal place. */
    az_container_create_command_builder.prototype.memory = function (value) {
        this.setFlag("--memory", value);
        return this;
    };
    /** The name of the container group. */
    az_container_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The network profile name or id. */
    az_container_create_command_builder.prototype.networkProfile = function (value) {
        this.setFlag("--network-profile", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_container_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The OS type of the containers. */
    az_container_create_command_builder.prototype.osType = function (value) {
        this.setFlag("--os-type", value);
        return this;
    };
    /** A list of ports to open. Space-separated list of ports. */
    az_container_create_command_builder.prototype.ports = function (value) {
        this.setFlag("--ports", value);
        return this;
    };
    /** The network protocol to use. */
    az_container_create_command_builder.prototype.protocol = function (value) {
        this.setFlag("--protocol", value);
        return this;
    };
    /** The container image registry login server. */
    az_container_create_command_builder.prototype.registryLoginServer = function (value) {
        this.setFlag("--registry-login-server", value);
        return this;
    };
    /** The password to log in container image registry server. */
    az_container_create_command_builder.prototype.registryPassword = function (value) {
        this.setFlag("--registry-password", value);
        return this;
    };
    /** The username to log in container image registry server. */
    az_container_create_command_builder.prototype.registryUsername = function (value) {
        this.setFlag("--registry-username", value);
        return this;
    };
    /** Restart policy for all containers within the container group. */
    az_container_create_command_builder.prototype.restartPolicy = function (value) {
        this.setFlag("--restart-policy", value);
        return this;
    };
    /** Role name or id the system assigned identity will have. */
    az_container_create_command_builder.prototype.role = function (value) {
        this.setFlag("--role", value);
        return this;
    };
    /** Scope that the system assigned identity can access. */
    az_container_create_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** Space-separated secrets in 'key=value' format. */
    az_container_create_command_builder.prototype.secrets = function (value) {
        this.setFlag("--secrets", value);
        return this;
    };
    /** The path within the container where the secrets volume should be mounted. Must not contain colon ':'. */
    az_container_create_command_builder.prototype.secretsMountPath = function (value) {
        this.setFlag("--secrets-mount-path", value);
        return this;
    };
    /** A list of secure environment variable for the container. Space-separated values in 'key=value' format. */
    az_container_create_command_builder.prototype.secureEnvironmentVariables = function (value) {
        this.setFlag("--secure-environment-variables", value);
        return this;
    };
    /** The name of the subnet when creating a new VNET or referencing an existing one. Can also reference an existing subnet by ID. */
    az_container_create_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** The subnet IP address prefix to use when creating a new VNET in CIDR format. */
    az_container_create_command_builder.prototype.subnetAddressPrefix = function (value) {
        this.setFlag("--subnet-address-prefix", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_container_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The name of the VNET when creating a new one or referencing an existing one. Can also reference an existing vnet by ID. This allows using vnets from other resource groups. */
    az_container_create_command_builder.prototype.vnet = function (value) {
        this.setFlag("--vnet", value);
        return this;
    };
    /** The IP address prefix to use when creating a new VNET in CIDR format. */
    az_container_create_command_builder.prototype.vnetAddressPrefix = function (value) {
        this.setFlag("--vnet-address-prefix", value);
        return this;
    };
    /** The name of the VNET when creating a new one or referencing an existing one. */
    az_container_create_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_container_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a container group.
 *
 * Syntax:
 * ```
 * az container delete [--ids]
 *                     [--name]
 *                     [--resource-group]
 *                     [--subscription]
 *                     [--yes]
 * ```
 */
var az_container_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_container_delete_command_builder, _super);
    function az_container_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_container_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the container group. */
    az_container_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_container_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_container_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_container_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_container_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Execute a command from within a running container of a container group.
 *
 * Syntax:
 * ```
 * az container exec --exec-command
 *                   [--container-name]
 *                   [--ids]
 *                   [--name]
 *                   [--resource-group]
 *                   [--subscription]
 *                   [--terminal-col-size]
 *                   [--terminal-row-size]
 * ```
 *
 * @param {string} execCommand The command to run from within the container.
 */
var az_container_exec_command_builder = /** @class */ (function (_super) {
    __extends(az_container_exec_command_builder, _super);
    function az_container_exec_command_builder(commandPath, resultDataTypeName, execCommand) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.execCommand(execCommand);
        return _this;
    }
    /** The command to run from within the container. */
    az_container_exec_command_builder.prototype.execCommand = function (value) {
        this.setFlag("--exec-command", value);
        return this;
    };
    /** The container name where to execute the command. Can be ommitted for container groups with only one container. */
    az_container_exec_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_container_exec_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the container group. */
    az_container_exec_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_container_exec_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_container_exec_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The col size for the command output. */
    az_container_exec_command_builder.prototype.terminalColSize = function (value) {
        this.setFlag("--terminal-col-size", value);
        return this;
    };
    /** The row size for the command output. */
    az_container_exec_command_builder.prototype.terminalRowSize = function (value) {
        this.setFlag("--terminal-row-size", value);
        return this;
    };
    return az_container_exec_command_builder;
}(base_1.CommandBuilder));
/**
 * Export a container group in yaml format.
 *
 * Syntax:
 * ```
 * az container export --file
 *                     [--ids]
 *                     [--name]
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 *
 * @param {string} file The file path to export the container group.
 */
var az_container_export_command_builder = /** @class */ (function (_super) {
    __extends(az_container_export_command_builder, _super);
    function az_container_export_command_builder(commandPath, resultDataTypeName, file) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        return _this;
    }
    /** The file path to export the container group. */
    az_container_export_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_container_export_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the container group. */
    az_container_export_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_container_export_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_container_export_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_container_export_command_builder;
}(base_1.CommandBuilder));
/**
 * List container groups.
 *
 * Syntax:
 * ```
 * az container list [--query-examples]
 *                   [--resource-group]
 *                   [--subscription]
 * ```
 */
var az_container_list_command_builder = /** @class */ (function (_super) {
    __extends(az_container_list_command_builder, _super);
    function az_container_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_container_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_container_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_container_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_container_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Examine the logs for a container in a container group.
 *
 * Syntax:
 * ```
 * az container logs [--container-name]
 *                   [--follow]
 *                   [--ids]
 *                   [--name]
 *                   [--resource-group]
 *                   [--subscription]
 * ```
 */
var az_container_logs_command_builder = /** @class */ (function (_super) {
    __extends(az_container_logs_command_builder, _super);
    function az_container_logs_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The container name to tail the logs. If omitted, the first container in the container group will be chosen. */
    az_container_logs_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Indicate to stream the tailing logs. */
    az_container_logs_command_builder.prototype.follow = function (value) {
        this.setFlag("--follow", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_container_logs_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the container group. */
    az_container_logs_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_container_logs_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_container_logs_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_container_logs_command_builder;
}(base_1.CommandBuilder));
/**
 * Restarts all containers in a container group.
 *
 * Syntax:
 * ```
 * az container restart --name
 *                      --resource-group
 *                      [--no-wait]
 *                      [--subscription]
 * ```
 *
 * @param {string} name The name of the container group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_container_restart_command_builder = /** @class */ (function (_super) {
    __extends(az_container_restart_command_builder, _super);
    function az_container_restart_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the container group. */
    az_container_restart_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_container_restart_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_container_restart_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_container_restart_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_container_restart_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a container group.
 *
 * Syntax:
 * ```
 * az container show [--ids]
 *                   [--name]
 *                   [--query-examples]
 *                   [--resource-group]
 *                   [--subscription]
 * ```
 */
var az_container_show_command_builder = /** @class */ (function (_super) {
    __extends(az_container_show_command_builder, _super);
    function az_container_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_container_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the container group. */
    az_container_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_container_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_container_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_container_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_container_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Starts all containers in a container group.
 *
 * Syntax:
 * ```
 * az container start --name
 *                    --resource-group
 *                    [--no-wait]
 *                    [--subscription]
 * ```
 *
 * @param {string} name The name of the container group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_container_start_command_builder = /** @class */ (function (_super) {
    __extends(az_container_start_command_builder, _super);
    function az_container_start_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the container group. */
    az_container_start_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_container_start_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_container_start_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_container_start_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_container_start_command_builder;
}(base_1.CommandBuilder));
/**
 * Stops all containers in a container group.
 *
 * Syntax:
 * ```
 * az container stop --name
 *                   --resource-group
 *                   [--subscription]
 * ```
 *
 * @param {string} name The name of the container group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_container_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_container_stop_command_builder, _super);
    function az_container_stop_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the container group. */
    az_container_stop_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_container_stop_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_container_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_container_stop_command_builder;
}(base_1.CommandBuilder));
