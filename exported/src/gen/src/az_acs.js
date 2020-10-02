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
/** Commands to manage a DC/OS-orchestrated Azure Container Service. */
var az_acs_dcos = /** @class */ (function () {
    function az_acs_dcos() {
    }
    /**
     * Creates an SSH tunnel to the Azure container service, and opens the Mesosphere DC/OS dashboard in the browser.
     *
     * Syntax:
     * ```
     * az acs dcos browse --name
     *                    --resource-group
     *                    [--disable-browser]
     *                    [--ssh-key-file]
     *                    [--subscription]
     * ```
     *
     * @param {string} name Name of the container service. You can configure the default using `az configure --defaults acs=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_acs_dcos.browse = function (name, resourceGroup) {
        return new az_acs_dcos_browse_command_builder("az acs dcos browse", 'az_acs_dcos_browse_command_result', name, resourceGroup);
    };
    /**
     * Download and install the DC/OS command-line tool for a cluster.
     *
     * Syntax:
     * ```
     * az acs dcos install-cli [--client-version]
     *                         [--install-location]
     *                         [--subscription]
     * ```
     */
    az_acs_dcos.install_cli = function () {
        return new az_acs_dcos_install_cli_command_builder("az acs dcos install-cli", 'az_acs_dcos_install_cli_command_result');
    };
    return az_acs_dcos;
}());
exports.az_acs_dcos = az_acs_dcos;
/** Commands to manage a Kubernetes-orchestrated Azure Container Service. */
var az_acs_kubernetes = /** @class */ (function () {
    function az_acs_kubernetes() {
    }
    /**
     * Launch a proxy and browse the Kubernetes web UI.
     *
     * Syntax:
     * ```
     * az acs kubernetes browse --name
     *                          --resource-group
     *                          [--disable-browser]
     *                          [--ssh-key-file]
     *                          [--subscription]
     * ```
     *
     * @param {string} name Name of the container service. You can configure the default using `az configure --defaults acs=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_acs_kubernetes.browse = function (name, resourceGroup) {
        return new az_acs_kubernetes_browse_command_builder("az acs kubernetes browse", 'az_acs_kubernetes_browse_command_result', name, resourceGroup);
    };
    /**
     * Download and install credentials to access a cluster.  This command requires the same private-key used to create the cluster.
     *
     * Syntax:
     * ```
     * az acs kubernetes get-credentials --name
     *                                   --resource-group
     *                                   [--file]
     *                                   [--overwrite-existing]
     *                                   [--ssh-key-file]
     *                                   [--subscription]
     * ```
     *
     * @param {string} name Name of the container service. You can configure the default using `az configure --defaults acs=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_acs_kubernetes.get_credentials = function (name, resourceGroup) {
        return new az_acs_kubernetes_get_credentials_command_builder("az acs kubernetes get-credentials", 'az_acs_kubernetes_get_credentials_command_result', name, resourceGroup);
    };
    /**
     * Download and install the Kubernetes command-line tool for a cluster.
     *
     * Syntax:
     * ```
     * az acs kubernetes install-cli [--client-version]
     *                               [--install-location]
     *                               [--kubelogin-install-location]
     *                               [--kubelogin-version]
     *                               [--subscription]
     * ```
     */
    az_acs_kubernetes.install_cli = function () {
        return new az_acs_kubernetes_install_cli_command_builder("az acs kubernetes install-cli", 'az_acs_kubernetes_install_cli_command_result');
    };
    return az_acs_kubernetes;
}());
exports.az_acs_kubernetes = az_acs_kubernetes;
/** Manage Azure Container Services. */
var az_acs = /** @class */ (function () {
    function az_acs() {
    }
    /**
     * Show the dashboard for a service container's orchestrator in a web browser.
     *
     * Syntax:
     * ```
     * az acs browse --name
     *               --resource-group
     *               [--disable-browser]
     *               [--ssh-key-file]
     *               [--subscription]
     * ```
     *
     * @param {string} name Name of the container service. You can configure the default using `az configure --defaults acs=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_acs.browse = function (name, resourceGroup) {
        return new az_acs_browse_command_builder("az acs browse", 'az_acs_browse_command_result', name, resourceGroup);
    };
    /**
     * Create a new container service.
     *
     * Syntax:
     * ```
     * az acs create --name
     *               --resource-group
     *               [--admin-password]
     *               [--admin-username]
     *               [--agent-count]
     *               [--agent-osdisk-size]
     *               [--agent-ports]
     *               [--agent-profiles]
     *               [--agent-storage-profile {ManagedDisks, StorageAccount}]
     *               [--agent-vm-size]
     *               [--agent-vnet-subnet-id]
     *               [--api-version]
     *               [--client-secret]
     *               [--dns-prefix]
     *               [--generate-ssh-keys]
     *               [--location]
     *               [--master-count]
     *               [--master-first-consecutive-static-ip]
     *               [--master-osdisk-size]
     *               [--master-profile]
     *               [--master-storage-profile {ManagedDisks, StorageAccount}]
     *               [--master-vm-size]
     *               [--master-vnet-subnet-id]
     *               [--no-wait]
     *               [--orchestrator-type {Custom, DCOS, DockerCE, Kubernetes, Swarm}]
     *               [--orchestrator-version]
     *               [--service-principal]
     *               [--ssh-key-value]
     *               [--subscription]
     *               [--tags]
     *               [--validate]
     *               [--windows]
     * ```
     *
     * @param {string} name Name of the container service. You can configure the default using `az configure --defaults acs=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_acs.create = function (name, resourceGroup) {
        return new az_acs_create_command_builder("az acs create", 'az_acs_create_command_result', name, resourceGroup);
    };
    /**
     * Delete a container service.
     *
     * Syntax:
     * ```
     * az acs delete --name
     *               --resource-group
     *               [--subscription]
     *               [--yes]
     * ```
     *
     * @param {string} name Name of the container service. You can configure the default using `az configure --defaults acs=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_acs["delete"] = function (name, resourceGroup) {
        return new az_acs_delete_command_builder("az acs delete", 'az_acs_delete_command_result', name, resourceGroup);
    };
    /**
     * List container services.
     *
     * Syntax:
     * ```
     * az acs list [--query-examples]
     *             [--resource-group]
     *             [--subscription]
     * ```
     */
    az_acs.list = function () {
        return new az_acs_list_command_builder("az acs list", 'az_acs_list_command_result');
    };
    /**
     * List locations where Azure Container Service is in preview and in production.
     *
     * Syntax:
     * ```
     * az acs list-locations [--subscription]
     * ```
     */
    az_acs.list_locations = function () {
        return new az_acs_list_locations_command_builder("az acs list-locations", 'az_acs_list_locations_command_result');
    };
    /**
     * Change the private agent count of a container service.
     *
     * Syntax:
     * ```
     * az acs scale --name
     *              --new-agent-count
     *              --resource-group
     *              [--subscription]
     * ```
     *
     * @param {string} name Name of the container service. You can configure the default using `az configure --defaults acs=<name>`.
     * @param {string} newAgentCount The number of agents for the container service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_acs.scale = function (name, newAgentCount, resourceGroup) {
        return new az_acs_scale_command_builder("az acs scale", 'az_acs_scale_command_result', name, newAgentCount, resourceGroup);
    };
    /**
     * Show the details for a container service.
     *
     * Syntax:
     * ```
     * az acs show --name
     *             --resource-group
     *             [--query-examples]
     *             [--subscription]
     * ```
     *
     * @param {string} name Name of the container service. You can configure the default using `az configure --defaults acs=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_acs.show = function (name, resourceGroup) {
        return new az_acs_show_command_builder("az acs show", 'az_acs_show_command_result', name, resourceGroup);
    };
    /**
     * Wait for a container service to reach a desired state.
     *
     * Syntax:
     * ```
     * az acs wait --name
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
     * @param {string} name Name of the container service. You can configure the default using `az configure --defaults acs=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_acs.wait = function (name, resourceGroup) {
        return new az_acs_wait_command_builder("az acs wait", 'az_acs_wait_command_result', name, resourceGroup);
    };
    return az_acs;
}());
exports.az_acs = az_acs;
/**
 * Creates an SSH tunnel to the Azure container service, and opens the Mesosphere DC/OS dashboard in the browser.
 *
 * Syntax:
 * ```
 * az acs dcos browse --name
 *                    --resource-group
 *                    [--disable-browser]
 *                    [--ssh-key-file]
 *                    [--subscription]
 * ```
 *
 * @param {string} name Name of the container service. You can configure the default using `az configure --defaults acs=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_acs_dcos_browse_command_builder = /** @class */ (function (_super) {
    __extends(az_acs_dcos_browse_command_builder, _super);
    function az_acs_dcos_browse_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the container service. You can configure the default using `az configure --defaults acs=<name>`. */
    az_acs_dcos_browse_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acs_dcos_browse_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not open browser after opening a proxy to the cluster web user interface. */
    az_acs_dcos_browse_command_builder.prototype.disableBrowser = function (value) {
        this.setFlag("--disable-browser", value);
        return this;
    };
    /** Path to an SSH key file to use. */
    az_acs_dcos_browse_command_builder.prototype.sshKeyFile = function (value) {
        this.setFlag("--ssh-key-file", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acs_dcos_browse_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acs_dcos_browse_command_builder;
}(base_1.CommandBuilder));
/**
 * Download and install the DC/OS command-line tool for a cluster.
 *
 * Syntax:
 * ```
 * az acs dcos install-cli [--client-version]
 *                         [--install-location]
 *                         [--subscription]
 * ```
 */
var az_acs_dcos_install_cli_command_builder = /** @class */ (function (_super) {
    __extends(az_acs_dcos_install_cli_command_builder, _super);
    function az_acs_dcos_install_cli_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Version of kubectl to install. */
    az_acs_dcos_install_cli_command_builder.prototype.clientVersion = function (value) {
        this.setFlag("--client-version", value);
        return this;
    };
    /** Path at which to install kubectl. */
    az_acs_dcos_install_cli_command_builder.prototype.installLocation = function (value) {
        this.setFlag("--install-location", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acs_dcos_install_cli_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acs_dcos_install_cli_command_builder;
}(base_1.CommandBuilder));
/**
 * Launch a proxy and browse the Kubernetes web UI.
 *
 * Syntax:
 * ```
 * az acs kubernetes browse --name
 *                          --resource-group
 *                          [--disable-browser]
 *                          [--ssh-key-file]
 *                          [--subscription]
 * ```
 *
 * @param {string} name Name of the container service. You can configure the default using `az configure --defaults acs=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_acs_kubernetes_browse_command_builder = /** @class */ (function (_super) {
    __extends(az_acs_kubernetes_browse_command_builder, _super);
    function az_acs_kubernetes_browse_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the container service. You can configure the default using `az configure --defaults acs=<name>`. */
    az_acs_kubernetes_browse_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acs_kubernetes_browse_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not open browser after opening a proxy to the cluster web user interface. */
    az_acs_kubernetes_browse_command_builder.prototype.disableBrowser = function (value) {
        this.setFlag("--disable-browser", value);
        return this;
    };
    /** Path to an SSH key file to use. */
    az_acs_kubernetes_browse_command_builder.prototype.sshKeyFile = function (value) {
        this.setFlag("--ssh-key-file", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acs_kubernetes_browse_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acs_kubernetes_browse_command_builder;
}(base_1.CommandBuilder));
/**
 * Download and install credentials to access a cluster.  This command requires the same private-key used to create the cluster.
 *
 * Syntax:
 * ```
 * az acs kubernetes get-credentials --name
 *                                   --resource-group
 *                                   [--file]
 *                                   [--overwrite-existing]
 *                                   [--ssh-key-file]
 *                                   [--subscription]
 * ```
 *
 * @param {string} name Name of the container service. You can configure the default using `az configure --defaults acs=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_acs_kubernetes_get_credentials_command_builder = /** @class */ (function (_super) {
    __extends(az_acs_kubernetes_get_credentials_command_builder, _super);
    function az_acs_kubernetes_get_credentials_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the container service. You can configure the default using `az configure --defaults acs=<name>`. */
    az_acs_kubernetes_get_credentials_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acs_kubernetes_get_credentials_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Where to install the kubectl config file. */
    az_acs_kubernetes_get_credentials_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** If specified, overwrite any existing credentials. */
    az_acs_kubernetes_get_credentials_command_builder.prototype.overwriteExisting = function (value) {
        this.setFlag("--overwrite-existing", value);
        return this;
    };
    /** Path to an SSH key file to use. */
    az_acs_kubernetes_get_credentials_command_builder.prototype.sshKeyFile = function (value) {
        this.setFlag("--ssh-key-file", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acs_kubernetes_get_credentials_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acs_kubernetes_get_credentials_command_builder;
}(base_1.CommandBuilder));
/**
 * Download and install the Kubernetes command-line tool for a cluster.
 *
 * Syntax:
 * ```
 * az acs kubernetes install-cli [--client-version]
 *                               [--install-location]
 *                               [--kubelogin-install-location]
 *                               [--kubelogin-version]
 *                               [--subscription]
 * ```
 */
var az_acs_kubernetes_install_cli_command_builder = /** @class */ (function (_super) {
    __extends(az_acs_kubernetes_install_cli_command_builder, _super);
    function az_acs_kubernetes_install_cli_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Version of kubectl to install. */
    az_acs_kubernetes_install_cli_command_builder.prototype.clientVersion = function (value) {
        this.setFlag("--client-version", value);
        return this;
    };
    /** Path at which to install kubectl. */
    az_acs_kubernetes_install_cli_command_builder.prototype.installLocation = function (value) {
        this.setFlag("--install-location", value);
        return this;
    };
    /** Path at which to install kubelogin. */
    az_acs_kubernetes_install_cli_command_builder.prototype.kubeloginInstallLocation = function (value) {
        this.setFlag("--kubelogin-install-location", value);
        return this;
    };
    /** Version of kubelogin to install. */
    az_acs_kubernetes_install_cli_command_builder.prototype.kubeloginVersion = function (value) {
        this.setFlag("--kubelogin-version", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acs_kubernetes_install_cli_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acs_kubernetes_install_cli_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the dashboard for a service container's orchestrator in a web browser.
 *
 * Syntax:
 * ```
 * az acs browse --name
 *               --resource-group
 *               [--disable-browser]
 *               [--ssh-key-file]
 *               [--subscription]
 * ```
 *
 * @param {string} name Name of the container service. You can configure the default using `az configure --defaults acs=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_acs_browse_command_builder = /** @class */ (function (_super) {
    __extends(az_acs_browse_command_builder, _super);
    function az_acs_browse_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the container service. You can configure the default using `az configure --defaults acs=<name>`. */
    az_acs_browse_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acs_browse_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not open browser after opening a proxy to the cluster web user interface. */
    az_acs_browse_command_builder.prototype.disableBrowser = function (value) {
        this.setFlag("--disable-browser", value);
        return this;
    };
    /** If set a path to an SSH key to use, only applies to DCOS. */
    az_acs_browse_command_builder.prototype.sshKeyFile = function (value) {
        this.setFlag("--ssh-key-file", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acs_browse_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acs_browse_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new container service.
 *
 * Syntax:
 * ```
 * az acs create --name
 *               --resource-group
 *               [--admin-password]
 *               [--admin-username]
 *               [--agent-count]
 *               [--agent-osdisk-size]
 *               [--agent-ports]
 *               [--agent-profiles]
 *               [--agent-storage-profile {ManagedDisks, StorageAccount}]
 *               [--agent-vm-size]
 *               [--agent-vnet-subnet-id]
 *               [--api-version]
 *               [--client-secret]
 *               [--dns-prefix]
 *               [--generate-ssh-keys]
 *               [--location]
 *               [--master-count]
 *               [--master-first-consecutive-static-ip]
 *               [--master-osdisk-size]
 *               [--master-profile]
 *               [--master-storage-profile {ManagedDisks, StorageAccount}]
 *               [--master-vm-size]
 *               [--master-vnet-subnet-id]
 *               [--no-wait]
 *               [--orchestrator-type {Custom, DCOS, DockerCE, Kubernetes, Swarm}]
 *               [--orchestrator-version]
 *               [--service-principal]
 *               [--ssh-key-value]
 *               [--subscription]
 *               [--tags]
 *               [--validate]
 *               [--windows]
 * ```
 *
 * @param {string} name Name of the container service. You can configure the default using `az configure --defaults acs=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_acs_create_command_builder = /** @class */ (function (_super) {
    __extends(az_acs_create_command_builder, _super);
    function az_acs_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the container service. You can configure the default using `az configure --defaults acs=<name>`. */
    az_acs_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acs_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The adminstration password for Windows nodes. Only available if --windows=true. */
    az_acs_create_command_builder.prototype.adminPassword = function (value) {
        this.setFlag("--admin-password", value);
        return this;
    };
    /** User name for the Linux Virtual Machines. */
    az_acs_create_command_builder.prototype.adminUsername = function (value) {
        this.setFlag("--admin-username", value);
        return this;
    };
    /** Set the default number of agents for the agent pools. */
    az_acs_create_command_builder.prototype.agentCount = function (value) {
        this.setFlag("--agent-count", value);
        return this;
    };
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. Set the default disk size for agent pools vms. Unit in GB. Default: corresponding vmsize disk size. */
    az_acs_create_command_builder.prototype.agentOsdiskSize = function (value) {
        this.setFlag("--agent-osdisk-size", value);
        return this;
    };
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. Set the default ports exposed on the agent pools. Only usable for non-Kubernetes. Default: 8080,4000,80. */
    az_acs_create_command_builder.prototype.agentPorts = function (value) {
        this.setFlag("--agent-ports", value);
        return this;
    };
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. The file or dictionary representation of the agent profiles. Note it will override any agent settings once set. */
    az_acs_create_command_builder.prototype.agentProfiles = function (value) {
        this.setFlag("--agent-profiles", value);
        return this;
    };
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. Set default storage profile for agent pools. Default: varies based on Orchestrator. */
    az_acs_create_command_builder.prototype.agentStorageProfile = function (value) {
        this.setFlag("--agent-storage-profile", value);
        return this;
    };
    /** Set the default size for agent pools vms. */
    az_acs_create_command_builder.prototype.agentVmSize = function (value) {
        this.setFlag("--agent-vm-size", value);
        return this;
    };
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. Set the default custom vnet subnet id for agent pools. Note agent need to used the same vnet if master set. Default: "". */
    az_acs_create_command_builder.prototype.agentVnetSubnetId = function (value) {
        this.setFlag("--agent-vnet-subnet-id", value);
        return this;
    };
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. Use API version of ACS to perform az acs operations. Available options: 2017-01-31, 2017-07-01. Default: the latest version for the location. */
    az_acs_create_command_builder.prototype.apiVersion = function (value) {
        this.setFlag("--api-version", value);
        return this;
    };
    /** Secret associated with the service principal. This argument is required if `--service-principal` is specified. */
    az_acs_create_command_builder.prototype.clientSecret = function (value) {
        this.setFlag("--client-secret", value);
        return this;
    };
    /** Sets the Domain name prefix for the cluster. The concatenation of the domain name and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. */
    az_acs_create_command_builder.prototype.dnsPrefix = function (value) {
        this.setFlag("--dns-prefix", value);
        return this;
    };
    /** Generate SSH public and private key files if missing. */
    az_acs_create_command_builder.prototype.generateSshKeys = function (value) {
        this.setFlag("--generate-ssh-keys", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_acs_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The number of masters for the cluster. */
    az_acs_create_command_builder.prototype.masterCount = function (value) {
        this.setFlag("--master-count", value);
        return this;
    };
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. The first consecutive ip used to specify static ip block. */
    az_acs_create_command_builder.prototype.masterFirstConsecutiveStaticIp = function (value) {
        this.setFlag("--master-first-consecutive-static-ip", value);
        return this;
    };
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. The disk size for master pool vms. Unit in GB. Default: corresponding vmsize disk size. */
    az_acs_create_command_builder.prototype.masterOsdiskSize = function (value) {
        this.setFlag("--master-osdisk-size", value);
        return this;
    };
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. The file or dictionary representation of the master profile. Note it will override any master settings once set. */
    az_acs_create_command_builder.prototype.masterProfile = function (value) {
        this.setFlag("--master-profile", value);
        return this;
    };
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. Default: varies based on Orchestrator. */
    az_acs_create_command_builder.prototype.masterStorageProfile = function (value) {
        this.setFlag("--master-storage-profile", value);
        return this;
    };
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. */
    az_acs_create_command_builder.prototype.masterVmSize = function (value) {
        this.setFlag("--master-vm-size", value);
        return this;
    };
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. The custom vnet subnet id. Note agent need to used the same vnet if master set. Default: "". */
    az_acs_create_command_builder.prototype.masterVnetSubnetId = function (value) {
        this.setFlag("--master-vnet-subnet-id", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_acs_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The type of orchestrator used to manage the applications on the cluster. */
    az_acs_create_command_builder.prototype.orchestratorType = function (value) {
        this.setFlag("--orchestrator-type", value);
        return this;
    };
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. Use Orchestrator Version to specify the semantic version for your choice of orchestrator. */
    az_acs_create_command_builder.prototype.orchestratorVersion = function (value) {
        this.setFlag("--orchestrator-version", value);
        return this;
    };
    /** Service principal used for authentication to Azure APIs. */
    az_acs_create_command_builder.prototype.servicePrincipal = function (value) {
        this.setFlag("--service-principal", value);
        return this;
    };
    /** Configure all linux machines with the SSH RSA public key string.  Your key should include three parts, for example 'ssh-rsa AAAAB...snip...UcyupgH azureuser@linuxvm. */
    az_acs_create_command_builder.prototype.sshKeyValue = function (value) {
        this.setFlag("--ssh-key-value", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acs_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_acs_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Generate and validate the ARM template without creating any resources. */
    az_acs_create_command_builder.prototype.validate = function (value) {
        this.setFlag("--validate", value);
        return this;
    };
    /** If true, set the default osType of agent pools to be Windows. */
    az_acs_create_command_builder.prototype.windows = function (value) {
        this.setFlag("--windows", value);
        return this;
    };
    return az_acs_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a container service.
 *
 * Syntax:
 * ```
 * az acs delete --name
 *               --resource-group
 *               [--subscription]
 *               [--yes]
 * ```
 *
 * @param {string} name Name of the container service. You can configure the default using `az configure --defaults acs=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_acs_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_acs_delete_command_builder, _super);
    function az_acs_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the container service. You can configure the default using `az configure --defaults acs=<name>`. */
    az_acs_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acs_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acs_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_acs_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_acs_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List container services.
 *
 * Syntax:
 * ```
 * az acs list [--query-examples]
 *             [--resource-group]
 *             [--subscription]
 * ```
 */
var az_acs_list_command_builder = /** @class */ (function (_super) {
    __extends(az_acs_list_command_builder, _super);
    function az_acs_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acs_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acs_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acs_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acs_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List locations where Azure Container Service is in preview and in production.
 *
 * Syntax:
 * ```
 * az acs list-locations [--subscription]
 * ```
 */
var az_acs_list_locations_command_builder = /** @class */ (function (_super) {
    __extends(az_acs_list_locations_command_builder, _super);
    function az_acs_list_locations_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acs_list_locations_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acs_list_locations_command_builder;
}(base_1.CommandBuilder));
/**
 * Change the private agent count of a container service.
 *
 * Syntax:
 * ```
 * az acs scale --name
 *              --new-agent-count
 *              --resource-group
 *              [--subscription]
 * ```
 *
 * @param {string} name Name of the container service. You can configure the default using `az configure --defaults acs=<name>`.
 * @param {string} newAgentCount The number of agents for the container service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_acs_scale_command_builder = /** @class */ (function (_super) {
    __extends(az_acs_scale_command_builder, _super);
    function az_acs_scale_command_builder(commandPath, resultDataTypeName, name, newAgentCount, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.newAgentCount(newAgentCount);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the container service. You can configure the default using `az configure --defaults acs=<name>`. */
    az_acs_scale_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The number of agents for the container service. */
    az_acs_scale_command_builder.prototype.newAgentCount = function (value) {
        this.setFlag("--new-agent-count", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acs_scale_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acs_scale_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acs_scale_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details for a container service.
 *
 * Syntax:
 * ```
 * az acs show --name
 *             --resource-group
 *             [--query-examples]
 *             [--subscription]
 * ```
 *
 * @param {string} name Name of the container service. You can configure the default using `az configure --defaults acs=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_acs_show_command_builder = /** @class */ (function (_super) {
    __extends(az_acs_show_command_builder, _super);
    function az_acs_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the container service. You can configure the default using `az configure --defaults acs=<name>`. */
    az_acs_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acs_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acs_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acs_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acs_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Wait for a container service to reach a desired state.
 *
 * Syntax:
 * ```
 * az acs wait --name
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
 * @param {string} name Name of the container service. You can configure the default using `az configure --defaults acs=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_acs_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_acs_wait_command_builder, _super);
    function az_acs_wait_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the container service. You can configure the default using `az configure --defaults acs=<name>`. */
    az_acs_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acs_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_acs_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_acs_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_acs_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_acs_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_acs_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acs_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_acs_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_acs_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_acs_wait_command_builder;
}(base_1.CommandBuilder));
