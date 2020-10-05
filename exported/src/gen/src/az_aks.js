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
exports.az_aks = exports.az_aks_nodepool = void 0;
var base_1 = require("../base");
/** Commands to manage node pools in Kubernetes kubernetes cluster. */
var az_aks_nodepool = /** @class */ (function () {
    function az_aks_nodepool() {
    }
    /**
     * Add a node pool to the managed Kubernetes cluster.
     *
     * Syntax:
     * ```
     * az aks nodepool add --cluster-name
     *                     --name
     *                     --resource-group
     *                     [--enable-cluster-autoscaler]
     *                     [--enable-node-public-ip]
     *                     [--kubernetes-version]
     *                     [--labels]
     *                     [--max-count]
     *                     [--max-pods]
     *                     [--min-count]
     *                     [--mode {System, User}]
     *                     [--no-wait]
     *                     [--node-count]
     *                     [--node-osdisk-size]
     *                     [--node-taints]
     *                     [--node-vm-size]
     *                     [--os-type]
     *                     [--subscription]
     *                     [--tags]
     *                     [--vnet-subnet-id]
     *                     [--zones {1, 2, 3}]
     * ```
     *
     * @param {string} clusterName The cluster name.
     * @param {string} name The node pool name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aks_nodepool.add = function (clusterName, name, resourceGroup) {
        return new az_aks_nodepool_add_command_builder("az aks nodepool add", 'az_aks_nodepool_add_command_result', clusterName, name, resourceGroup);
    };
    /**
     * Delete the agent pool in the managed Kubernetes cluster.
     *
     * Syntax:
     * ```
     * az aks nodepool delete --cluster-name
     *                        --name
     *                        --resource-group
     *                        [--no-wait]
     *                        [--subscription]
     * ```
     *
     * @param {string} clusterName The cluster name.
     * @param {string} name The node pool name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aks_nodepool["delete"] = function (clusterName, name, resourceGroup) {
        return new az_aks_nodepool_delete_command_builder("az aks nodepool delete", 'az_aks_nodepool_delete_command_result', clusterName, name, resourceGroup);
    };
    /**
     * Get the available upgrade versions for an agent pool of the managed Kubernetes cluster.
     *
     * Syntax:
     * ```
     * az aks nodepool get-upgrades --cluster-name
     *                              --nodepool-name
     *                              --resource-group
     *                              [--subscription]
     * ```
     *
     * @param {string} clusterName The cluster name.
     * @param {string} nodepoolName Name of the node pool.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aks_nodepool.get_upgrades = function (clusterName, nodepoolName, resourceGroup) {
        return new az_aks_nodepool_get_upgrades_command_builder("az aks nodepool get-upgrades", 'az_aks_nodepool_get_upgrades_command_result', clusterName, nodepoolName, resourceGroup);
    };
    /**
     * List node pools in the managed Kubernetes cluster.
     *
     * Syntax:
     * ```
     * az aks nodepool list --cluster-name
     *                      --resource-group
     *                      [--query-examples]
     *                      [--subscription]
     * ```
     *
     * @param {string} clusterName The cluster name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aks_nodepool.list = function (clusterName, resourceGroup) {
        return new az_aks_nodepool_list_command_builder("az aks nodepool list", 'az_aks_nodepool_list_command_result', clusterName, resourceGroup);
    };
    /**
     * Scale the node pool in a managed Kubernetes cluster.
     *
     * Syntax:
     * ```
     * az aks nodepool scale --cluster-name
     *                       --name
     *                       --resource-group
     *                       [--no-wait]
     *                       [--node-count]
     *                       [--subscription]
     * ```
     *
     * @param {string} clusterName The cluster name.
     * @param {string} name The node pool name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aks_nodepool.scale = function (clusterName, name, resourceGroup) {
        return new az_aks_nodepool_scale_command_builder("az aks nodepool scale", 'az_aks_nodepool_scale_command_result', clusterName, name, resourceGroup);
    };
    /**
     * Show the details for a node pool in the managed Kubernetes cluster.
     *
     * Syntax:
     * ```
     * az aks nodepool show --cluster-name
     *                      --name
     *                      --resource-group
     *                      [--query-examples]
     *                      [--subscription]
     * ```
     *
     * @param {string} clusterName The cluster name.
     * @param {string} name The node pool name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aks_nodepool.show = function (clusterName, name, resourceGroup) {
        return new az_aks_nodepool_show_command_builder("az aks nodepool show", 'az_aks_nodepool_show_command_result', clusterName, name, resourceGroup);
    };
    /**
     * Update a node pool to enable/disable cluster-autoscaler or change min-count or max-count.
     *
     * Syntax:
     * ```
     * az aks nodepool update --cluster-name
     *                        --name
     *                        --resource-group
     *                        [--disable-cluster-autoscaler]
     *                        [--enable-cluster-autoscaler]
     *                        [--max-count]
     *                        [--min-count]
     *                        [--mode {System, User}]
     *                        [--no-wait]
     *                        [--subscription]
     *                        [--tags]
     *                        [--update-cluster-autoscaler]
     * ```
     *
     * @param {string} clusterName The cluster name.
     * @param {string} name The node pool name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aks_nodepool.update = function (clusterName, name, resourceGroup) {
        return new az_aks_nodepool_update_command_builder("az aks nodepool update", 'az_aks_nodepool_update_command_result', clusterName, name, resourceGroup);
    };
    /**
     * Upgrade the node pool in a managed Kubernetes cluster.
     *
     * Syntax:
     * ```
     * az aks nodepool upgrade --cluster-name
     *                         --kubernetes-version
     *                         --name
     *                         --resource-group
     *                         [--no-wait]
     *                         [--subscription]
     * ```
     *
     * @param {string} clusterName The cluster name.
     * @param {string} kubernetesVersion Version of Kubernetes to upgrade the node pool to, such as "1.16.9".
     * @param {string} name The node pool name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aks_nodepool.upgrade = function (clusterName, kubernetesVersion, name, resourceGroup) {
        return new az_aks_nodepool_upgrade_command_builder("az aks nodepool upgrade", 'az_aks_nodepool_upgrade_command_result', clusterName, kubernetesVersion, name, resourceGroup);
    };
    return az_aks_nodepool;
}());
exports.az_aks_nodepool = az_aks_nodepool;
/** Manage Azure Kubernetes Services. */
var az_aks = /** @class */ (function () {
    function az_aks() {
    }
    /**
     * Show the dashboard for a Kubernetes cluster in a web browser.
     *
     * Syntax:
     * ```
     * az aks browse --name
     *               --resource-group
     *               [--disable-browser]
     *               [--listen-address]
     *               [--listen-port]
     *               [--subscription]
     * ```
     *
     * @param {string} name Name of the managed cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aks.browse = function (name, resourceGroup) {
        return new az_aks_browse_command_builder("az aks browse", 'az_aks_browse_command_result', name, resourceGroup);
    };
    /**
     * Create a new managed Kubernetes cluster.
     *
     * Syntax:
     * ```
     * az aks create --name
     *               --resource-group
     *               [--aad-admin-group-object-ids]
     *               [--aad-client-app-id]
     *               [--aad-server-app-id]
     *               [--aad-server-app-secret]
     *               [--aad-tenant-id]
     *               [--admin-username]
     *               [--api-server-authorized-ip-ranges]
     *               [--attach-acr]
     *               [--ca-profile]
     *               [--client-secret]
     *               [--disable-rbac]
     *               [--dns-name-prefix]
     *               [--dns-service-ip]
     *               [--docker-bridge-address]
     *               [--enable-aad]
     *               [--enable-addons]
     *               [--enable-cluster-autoscaler]
     *               [--enable-managed-identity]
     *               [--enable-node-public-ip]
     *               [--enable-private-cluster]
     *               [--enable-rbac]
     *               [--generate-ssh-keys]
     *               [--kubernetes-version]
     *               [--load-balancer-idle-timeout]
     *               [--load-balancer-managed-outbound-ip-count]
     *               [--load-balancer-outbound-ip-prefixes]
     *               [--load-balancer-outbound-ips]
     *               [--load-balancer-outbound-ports]
     *               [--load-balancer-sku]
     *               [--location]
     *               [--max-count]
     *               [--max-pods]
     *               [--min-count]
     *               [--network-plugin {azure, kubenet}]
     *               [--network-policy]
     *               [--no-ssh-key]
     *               [--no-wait]
     *               [--node-count]
     *               [--node-osdisk-diskencryptionset-id]
     *               [--node-osdisk-size]
     *               [--node-vm-size]
     *               [--nodepool-labels]
     *               [--nodepool-name]
     *               [--nodepool-tags]
     *               [--outbound-type {loadBalancer, userDefinedRouting}]
     *               [--pod-cidr]
     *               [--service-cidr]
     *               [--service-principal]
     *               [--skip-subnet-role-assignment]
     *               [--ssh-key-value]
     *               [--subscription]
     *               [--tags]
     *               [--uptime-sla]
     *               [--vm-set-type]
     *               [--vnet-subnet-id]
     *               [--windows-admin-password]
     *               [--windows-admin-username]
     *               [--workspace-resource-id]
     *               [--zones {1, 2, 3}]
     * ```
     *
     * @param {string} name Name of the managed cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aks.create = function (name, resourceGroup) {
        return new az_aks_create_command_builder("az aks create", 'az_aks_create_command_result', name, resourceGroup);
    };
    /**
     * Delete a managed Kubernetes cluster.
     *
     * Syntax:
     * ```
     * az aks delete --name
     *               --resource-group
     *               [--no-wait]
     *               [--subscription]
     *               [--yes]
     * ```
     *
     * @param {string} name Name of the managed cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aks["delete"] = function (name, resourceGroup) {
        return new az_aks_delete_command_builder("az aks delete", 'az_aks_delete_command_result', name, resourceGroup);
    };
    /**
     * Disable Kubernetes addons.
     *
     * Syntax:
     * ```
     * az aks disable-addons --addons
     *                       --name
     *                       --resource-group
     *                       [--no-wait]
     *                       [--subscription]
     * ```
     *
     * @param {string} addons Disable the Kubernetes addons in a comma-separated list.
     * @param {string} name Name of the managed cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aks.disable_addons = function (addons, name, resourceGroup) {
        return new az_aks_disable_addons_command_builder("az aks disable-addons", 'az_aks_disable_addons_command_result', addons, name, resourceGroup);
    };
    /**
     * Enable Kubernetes addons.
     *
     * Syntax:
     * ```
     * az aks enable-addons --addons
     *                      --name
     *                      --resource-group
     *                      [--no-wait]
     *                      [--subnet-name]
     *                      [--subscription]
     *                      [--workspace-resource-id]
     * ```
     *
     * @param {string} addons Enable the Kubernetes addons in a comma-separated list.
     * @param {string} name Name of the managed cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aks.enable_addons = function (addons, name, resourceGroup) {
        return new az_aks_enable_addons_command_builder("az aks enable-addons", 'az_aks_enable_addons_command_result', addons, name, resourceGroup);
    };
    /**
     * Get access credentials for a managed Kubernetes cluster.
     *
     * Syntax:
     * ```
     * az aks get-credentials --name
     *                        --resource-group
     *                        [--admin]
     *                        [--context]
     *                        [--file]
     *                        [--overwrite-existing]
     *                        [--subscription]
     * ```
     *
     * @param {string} name Name of the managed cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aks.get_credentials = function (name, resourceGroup) {
        return new az_aks_get_credentials_command_builder("az aks get-credentials", 'az_aks_get_credentials_command_result', name, resourceGroup);
    };
    /**
     * Get the upgrade versions available for a managed Kubernetes cluster.
     *
     * Syntax:
     * ```
     * az aks get-upgrades --name
     *                     --resource-group
     *                     [--subscription]
     * ```
     *
     * @param {string} name Name of the managed cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aks.get_upgrades = function (name, resourceGroup) {
        return new az_aks_get_upgrades_command_builder("az aks get-upgrades", 'az_aks_get_upgrades_command_result', name, resourceGroup);
    };
    /**
     * Get the versions available for creating a managed Kubernetes cluster.
     *
     * Syntax:
     * ```
     * az aks get-versions --location
     *                     [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     */
    az_aks.get_versions = function (location) {
        return new az_aks_get_versions_command_builder("az aks get-versions", 'az_aks_get_versions_command_result', location);
    };
    /**
     * Download and install kubectl, the Kubernetes command-line tool. Download and install kubelogin, a client-go credential (exec) plugin implementing azure authentication.
     *
     * Syntax:
     * ```
     * az aks install-cli [--client-version]
     *                    [--install-location]
     *                    [--kubelogin-install-location]
     *                    [--kubelogin-version]
     *                    [--subscription]
     * ```
     */
    az_aks.install_cli = function () {
        return new az_aks_install_cli_command_builder("az aks install-cli", 'az_aks_install_cli_command_result');
    };
    /**
     * List managed Kubernetes clusters.
     *
     * Syntax:
     * ```
     * az aks list [--query-examples]
     *             [--resource-group]
     *             [--subscription]
     * ```
     */
    az_aks.list = function () {
        return new az_aks_list_command_builder("az aks list", 'az_aks_list_command_result');
    };
    /**
     * Remove Azure Dev Spaces from a managed Kubernetes cluster.
     *
     * Syntax:
     * ```
     * az aks remove-dev-spaces --name
     *                          --resource-group
     *                          [--subscription]
     *                          [--yes]
     * ```
     *
     * @param {string} name Name of the managed cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aks.remove_dev_spaces = function (name, resourceGroup) {
        return new az_aks_remove_dev_spaces_command_builder("az aks remove-dev-spaces", 'az_aks_remove_dev_spaces_command_result', name, resourceGroup);
    };
    /**
     * Rotate certificates and keys on a managed Kubernetes cluster.
     *
     * Syntax:
     * ```
     * az aks rotate-certs --name
     *                     --resource-group
     *                     [--no-wait]
     *                     [--subscription]
     *                     [--yes]
     * ```
     *
     * @param {string} name Name of the managed cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aks.rotate_certs = function (name, resourceGroup) {
        return new az_aks_rotate_certs_command_builder("az aks rotate-certs", 'az_aks_rotate_certs_command_result', name, resourceGroup);
    };
    /**
     * Scale the node pool in a managed Kubernetes cluster.
     *
     * Syntax:
     * ```
     * az aks scale --name
     *              --node-count
     *              --resource-group
     *              [--no-wait]
     *              [--nodepool-name]
     *              [--subscription]
     * ```
     *
     * @param {string} name Name of the managed cluster.
     * @param {string} nodeCount Number of nodes in the Kubernetes node pool.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aks.scale = function (name, nodeCount, resourceGroup) {
        return new az_aks_scale_command_builder("az aks scale", 'az_aks_scale_command_result', name, nodeCount, resourceGroup);
    };
    /**
     * Show the details for a managed Kubernetes cluster.
     *
     * Syntax:
     * ```
     * az aks show --name
     *             --resource-group
     *             [--query-examples]
     *             [--subscription]
     * ```
     *
     * @param {string} name Name of the managed cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aks.show = function (name, resourceGroup) {
        return new az_aks_show_command_builder("az aks show", 'az_aks_show_command_result', name, resourceGroup);
    };
    /**
     * Update a managed Kubernetes cluster.
     *
     * Syntax:
     * ```
     * az aks update --name
     *               --resource-group
     *               [--aad-admin-group-object-ids]
     *               [--aad-tenant-id]
     *               [--api-server-authorized-ip-ranges]
     *               [--attach-acr]
     *               [--ca-profile]
     *               [--detach-acr]
     *               [--disable-cluster-autoscaler]
     *               [--enable-aad]
     *               [--enable-cluster-autoscaler]
     *               [--load-balancer-idle-timeout]
     *               [--load-balancer-managed-outbound-ip-count]
     *               [--load-balancer-outbound-ip-prefixes]
     *               [--load-balancer-outbound-ips]
     *               [--load-balancer-outbound-ports]
     *               [--max-count]
     *               [--min-count]
     *               [--no-wait]
     *               [--subscription]
     *               [--update-cluster-autoscaler]
     *               [--uptime-sla]
     * ```
     *
     * @param {string} name Name of the managed cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aks.update = function (name, resourceGroup) {
        return new az_aks_update_command_builder("az aks update", 'az_aks_update_command_result', name, resourceGroup);
    };
    /**
     * Update credentials for a managed Kubernetes cluster, like service principal.
     *
     * Syntax:
     * ```
     * az aks update-credentials --name
     *                           --resource-group
     *                           [--aad-client-app-id]
     *                           [--aad-server-app-id]
     *                           [--aad-server-app-secret]
     *                           [--aad-tenant-id]
     *                           [--client-secret]
     *                           [--no-wait]
     *                           [--reset-aad]
     *                           [--reset-service-principal]
     *                           [--service-principal]
     *                           [--subscription]
     * ```
     *
     * @param {string} name Name of the managed cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aks.update_credentials = function (name, resourceGroup) {
        return new az_aks_update_credentials_command_builder("az aks update-credentials", 'az_aks_update_credentials_command_result', name, resourceGroup);
    };
    /**
     * Upgrade a managed Kubernetes cluster to a newer version.
     *
     * Syntax:
     * ```
     * az aks upgrade --kubernetes-version
     *                --name
     *                --resource-group
     *                [--control-plane-only]
     *                [--no-wait]
     *                [--subscription]
     *                [--yes]
     * ```
     *
     * @param {string} kubernetesVersion Version of Kubernetes to upgrade the cluster to, such as "1.16.9".
     * @param {string} name Name of the managed cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aks.upgrade = function (kubernetesVersion, name, resourceGroup) {
        return new az_aks_upgrade_command_builder("az aks upgrade", 'az_aks_upgrade_command_result', kubernetesVersion, name, resourceGroup);
    };
    /**
     * Use Azure Dev Spaces with a managed Kubernetes cluster.
     *
     * Syntax:
     * ```
     * az aks use-dev-spaces --name
     *                       --resource-group
     *                       [--endpoint {None, Private, Public}]
     *                       [--space]
     *                       [--subscription]
     *                       [--update]
     *                       [--yes]
     * ```
     *
     * @param {string} name Name of the managed cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aks.use_dev_spaces = function (name, resourceGroup) {
        return new az_aks_use_dev_spaces_command_builder("az aks use-dev-spaces", 'az_aks_use_dev_spaces_command_result', name, resourceGroup);
    };
    /**
     * Wait for a managed Kubernetes cluster to reach a desired state.
     *
     * Syntax:
     * ```
     * az aks wait --name
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
     * @param {string} name Name of the managed cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_aks.wait = function (name, resourceGroup) {
        return new az_aks_wait_command_builder("az aks wait", 'az_aks_wait_command_result', name, resourceGroup);
    };
    return az_aks;
}());
exports.az_aks = az_aks;
/**
 * Add a node pool to the managed Kubernetes cluster.
 *
 * Syntax:
 * ```
 * az aks nodepool add --cluster-name
 *                     --name
 *                     --resource-group
 *                     [--enable-cluster-autoscaler]
 *                     [--enable-node-public-ip]
 *                     [--kubernetes-version]
 *                     [--labels]
 *                     [--max-count]
 *                     [--max-pods]
 *                     [--min-count]
 *                     [--mode {System, User}]
 *                     [--no-wait]
 *                     [--node-count]
 *                     [--node-osdisk-size]
 *                     [--node-taints]
 *                     [--node-vm-size]
 *                     [--os-type]
 *                     [--subscription]
 *                     [--tags]
 *                     [--vnet-subnet-id]
 *                     [--zones {1, 2, 3}]
 * ```
 *
 * @param {string} clusterName The cluster name.
 * @param {string} name The node pool name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aks_nodepool_add_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_nodepool_add_command_builder, _super);
    function az_aks_nodepool_add_command_builder(commandPath, resultDataTypeName, clusterName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The cluster name. */
    az_aks_nodepool_add_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** The node pool name. */
    az_aks_nodepool_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_nodepool_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Enable cluster autoscaler. */
    az_aks_nodepool_add_command_builder.prototype.enableClusterAutoscaler = function (value) {
        this.setFlag("--enable-cluster-autoscaler", value);
        return this;
    };
    /** Enable VMSS node public IP. */
    az_aks_nodepool_add_command_builder.prototype.enableNodePublicIp = function (value) {
        this.setFlag("--enable-node-public-ip", value);
        return this;
    };
    /** Version of Kubernetes to use for creating the cluster, such as "1.16.9". */
    az_aks_nodepool_add_command_builder.prototype.kubernetesVersion = function (value) {
        this.setFlag("--kubernetes-version", value);
        return this;
    };
    /** The node labels for the node pool. You can't change the node labels through CLI after the node pool is created. See <a href="https://aka.ms/node-labels">https://aka.ms/node-labels</a> for syntax of labels. */
    az_aks_nodepool_add_command_builder.prototype.labels = function (value) {
        this.setFlag("--labels", value);
        return this;
    };
    /** Maximum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [1, 100]. */
    az_aks_nodepool_add_command_builder.prototype.maxCount = function (value) {
        this.setFlag("--max-count", value);
        return this;
    };
    /** The maximum number of pods deployable to a node. */
    az_aks_nodepool_add_command_builder.prototype.maxPods = function (value) {
        this.setFlag("--max-pods", value);
        return this;
    };
    /** Minimum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [1, 100]. */
    az_aks_nodepool_add_command_builder.prototype.minCount = function (value) {
        this.setFlag("--min-count", value);
        return this;
    };
    /** The mode for a node pool which defines a node pool's primary function. If set as "System", AKS prefers system pods scheduling to node pools with mode `System`. Learn more at <a href="https://aka.ms/aks/nodepool/mode">https://aka.ms/aks/nodepool/mode</a>. */
    az_aks_nodepool_add_command_builder.prototype.mode = function (value) {
        this.setFlag("--mode", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_aks_nodepool_add_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Number of nodes in the Kubernetes agent pool. After creating a cluster, you can change the size of its node pool with `az aks scale`. */
    az_aks_nodepool_add_command_builder.prototype.nodeCount = function (value) {
        this.setFlag("--node-count", value);
        return this;
    };
    /** Size in GB of the OS disk for each node in the agent pool. Minimum 30 GB. */
    az_aks_nodepool_add_command_builder.prototype.nodeOsdiskSize = function (value) {
        this.setFlag("--node-osdisk-size", value);
        return this;
    };
    /** The node taints for the node pool. You can't change the node taints through CLI after the node pool is created. */
    az_aks_nodepool_add_command_builder.prototype.nodeTaints = function (value) {
        this.setFlag("--node-taints", value);
        return this;
    };
    /** Size of Virtual Machines to create as Kubernetes nodes. */
    az_aks_nodepool_add_command_builder.prototype.nodeVmSize = function (value) {
        this.setFlag("--node-vm-size", value);
        return this;
    };
    /** The OS Type. Linux or Windows. */
    az_aks_nodepool_add_command_builder.prototype.osType = function (value) {
        this.setFlag("--os-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_nodepool_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_aks_nodepool_add_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The ID of a subnet in an existing VNet into which to deploy the cluster. */
    az_aks_nodepool_add_command_builder.prototype.vnetSubnetId = function (value) {
        this.setFlag("--vnet-subnet-id", value);
        return this;
    };
    /** Availability zones where agent nodes will be placed. */
    az_aks_nodepool_add_command_builder.prototype.zones = function (value) {
        this.setFlag("--zones", value);
        return this;
    };
    return az_aks_nodepool_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete the agent pool in the managed Kubernetes cluster.
 *
 * Syntax:
 * ```
 * az aks nodepool delete --cluster-name
 *                        --name
 *                        --resource-group
 *                        [--no-wait]
 *                        [--subscription]
 * ```
 *
 * @param {string} clusterName The cluster name.
 * @param {string} name The node pool name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aks_nodepool_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_nodepool_delete_command_builder, _super);
    function az_aks_nodepool_delete_command_builder(commandPath, resultDataTypeName, clusterName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The cluster name. */
    az_aks_nodepool_delete_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** The node pool name. */
    az_aks_nodepool_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_nodepool_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_aks_nodepool_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_nodepool_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_aks_nodepool_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the available upgrade versions for an agent pool of the managed Kubernetes cluster.
 *
 * Syntax:
 * ```
 * az aks nodepool get-upgrades --cluster-name
 *                              --nodepool-name
 *                              --resource-group
 *                              [--subscription]
 * ```
 *
 * @param {string} clusterName The cluster name.
 * @param {string} nodepoolName Name of the node pool.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aks_nodepool_get_upgrades_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_nodepool_get_upgrades_command_builder, _super);
    function az_aks_nodepool_get_upgrades_command_builder(commandPath, resultDataTypeName, clusterName, nodepoolName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.nodepoolName(nodepoolName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The cluster name. */
    az_aks_nodepool_get_upgrades_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Name of the node pool. */
    az_aks_nodepool_get_upgrades_command_builder.prototype.nodepoolName = function (value) {
        this.setFlag("--nodepool-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_nodepool_get_upgrades_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_nodepool_get_upgrades_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_aks_nodepool_get_upgrades_command_builder;
}(base_1.CommandBuilder));
/**
 * List node pools in the managed Kubernetes cluster.
 *
 * Syntax:
 * ```
 * az aks nodepool list --cluster-name
 *                      --resource-group
 *                      [--query-examples]
 *                      [--subscription]
 * ```
 *
 * @param {string} clusterName The cluster name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aks_nodepool_list_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_nodepool_list_command_builder, _super);
    function az_aks_nodepool_list_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The cluster name. */
    az_aks_nodepool_list_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_nodepool_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_aks_nodepool_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_nodepool_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_aks_nodepool_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Scale the node pool in a managed Kubernetes cluster.
 *
 * Syntax:
 * ```
 * az aks nodepool scale --cluster-name
 *                       --name
 *                       --resource-group
 *                       [--no-wait]
 *                       [--node-count]
 *                       [--subscription]
 * ```
 *
 * @param {string} clusterName The cluster name.
 * @param {string} name The node pool name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aks_nodepool_scale_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_nodepool_scale_command_builder, _super);
    function az_aks_nodepool_scale_command_builder(commandPath, resultDataTypeName, clusterName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The cluster name. */
    az_aks_nodepool_scale_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** The node pool name. */
    az_aks_nodepool_scale_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_nodepool_scale_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_aks_nodepool_scale_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Number of nodes in the Kubernetes node pool. */
    az_aks_nodepool_scale_command_builder.prototype.nodeCount = function (value) {
        this.setFlag("--node-count", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_nodepool_scale_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_aks_nodepool_scale_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details for a node pool in the managed Kubernetes cluster.
 *
 * Syntax:
 * ```
 * az aks nodepool show --cluster-name
 *                      --name
 *                      --resource-group
 *                      [--query-examples]
 *                      [--subscription]
 * ```
 *
 * @param {string} clusterName The cluster name.
 * @param {string} name The node pool name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aks_nodepool_show_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_nodepool_show_command_builder, _super);
    function az_aks_nodepool_show_command_builder(commandPath, resultDataTypeName, clusterName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The cluster name. */
    az_aks_nodepool_show_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** The node pool name. */
    az_aks_nodepool_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_nodepool_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_aks_nodepool_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_nodepool_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_aks_nodepool_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a node pool to enable/disable cluster-autoscaler or change min-count or max-count.
 *
 * Syntax:
 * ```
 * az aks nodepool update --cluster-name
 *                        --name
 *                        --resource-group
 *                        [--disable-cluster-autoscaler]
 *                        [--enable-cluster-autoscaler]
 *                        [--max-count]
 *                        [--min-count]
 *                        [--mode {System, User}]
 *                        [--no-wait]
 *                        [--subscription]
 *                        [--tags]
 *                        [--update-cluster-autoscaler]
 * ```
 *
 * @param {string} clusterName The cluster name.
 * @param {string} name The node pool name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aks_nodepool_update_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_nodepool_update_command_builder, _super);
    function az_aks_nodepool_update_command_builder(commandPath, resultDataTypeName, clusterName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The cluster name. */
    az_aks_nodepool_update_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** The node pool name. */
    az_aks_nodepool_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_nodepool_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Disable cluster autoscaler. */
    az_aks_nodepool_update_command_builder.prototype.disableClusterAutoscaler = function (value) {
        this.setFlag("--disable-cluster-autoscaler", value);
        return this;
    };
    /** Enable cluster autoscaler. */
    az_aks_nodepool_update_command_builder.prototype.enableClusterAutoscaler = function (value) {
        this.setFlag("--enable-cluster-autoscaler", value);
        return this;
    };
    /** Maximum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [1, 100]. */
    az_aks_nodepool_update_command_builder.prototype.maxCount = function (value) {
        this.setFlag("--max-count", value);
        return this;
    };
    /** Minimum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [1, 100]. */
    az_aks_nodepool_update_command_builder.prototype.minCount = function (value) {
        this.setFlag("--min-count", value);
        return this;
    };
    /** The mode for a node pool which defines a node pool's primary function. If set as "System", AKS prefers system pods scheduling to node pools with mode `System`. Learn more at <a href="https://aka.ms/aks/nodepool/mode">https://aka.ms/aks/nodepool/mode</a>. */
    az_aks_nodepool_update_command_builder.prototype.mode = function (value) {
        this.setFlag("--mode", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_aks_nodepool_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_nodepool_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_aks_nodepool_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Update min-count or max-count for cluster autoscaler. */
    az_aks_nodepool_update_command_builder.prototype.updateClusterAutoscaler = function (value) {
        this.setFlag("--update-cluster-autoscaler", value);
        return this;
    };
    return az_aks_nodepool_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Upgrade the node pool in a managed Kubernetes cluster.
 *
 * Syntax:
 * ```
 * az aks nodepool upgrade --cluster-name
 *                         --kubernetes-version
 *                         --name
 *                         --resource-group
 *                         [--no-wait]
 *                         [--subscription]
 * ```
 *
 * @param {string} clusterName The cluster name.
 * @param {string} kubernetesVersion Version of Kubernetes to upgrade the node pool to, such as "1.16.9".
 * @param {string} name The node pool name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aks_nodepool_upgrade_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_nodepool_upgrade_command_builder, _super);
    function az_aks_nodepool_upgrade_command_builder(commandPath, resultDataTypeName, clusterName, kubernetesVersion, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.kubernetesVersion(kubernetesVersion);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The cluster name. */
    az_aks_nodepool_upgrade_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Version of Kubernetes to upgrade the node pool to, such as "1.16.9". */
    az_aks_nodepool_upgrade_command_builder.prototype.kubernetesVersion = function (value) {
        this.setFlag("--kubernetes-version", value);
        return this;
    };
    /** The node pool name. */
    az_aks_nodepool_upgrade_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_nodepool_upgrade_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_aks_nodepool_upgrade_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_nodepool_upgrade_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_aks_nodepool_upgrade_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the dashboard for a Kubernetes cluster in a web browser.
 *
 * Syntax:
 * ```
 * az aks browse --name
 *               --resource-group
 *               [--disable-browser]
 *               [--listen-address]
 *               [--listen-port]
 *               [--subscription]
 * ```
 *
 * @param {string} name Name of the managed cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aks_browse_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_browse_command_builder, _super);
    function az_aks_browse_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the managed cluster. */
    az_aks_browse_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_browse_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Don't launch a web browser after establishing port-forwarding. */
    az_aks_browse_command_builder.prototype.disableBrowser = function (value) {
        this.setFlag("--disable-browser", value);
        return this;
    };
    /** The listening address for the dashboard. */
    az_aks_browse_command_builder.prototype.listenAddress = function (value) {
        this.setFlag("--listen-address", value);
        return this;
    };
    /** The listening port for the dashboard. */
    az_aks_browse_command_builder.prototype.listenPort = function (value) {
        this.setFlag("--listen-port", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_browse_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_aks_browse_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new managed Kubernetes cluster.
 *
 * Syntax:
 * ```
 * az aks create --name
 *               --resource-group
 *               [--aad-admin-group-object-ids]
 *               [--aad-client-app-id]
 *               [--aad-server-app-id]
 *               [--aad-server-app-secret]
 *               [--aad-tenant-id]
 *               [--admin-username]
 *               [--api-server-authorized-ip-ranges]
 *               [--attach-acr]
 *               [--ca-profile]
 *               [--client-secret]
 *               [--disable-rbac]
 *               [--dns-name-prefix]
 *               [--dns-service-ip]
 *               [--docker-bridge-address]
 *               [--enable-aad]
 *               [--enable-addons]
 *               [--enable-cluster-autoscaler]
 *               [--enable-managed-identity]
 *               [--enable-node-public-ip]
 *               [--enable-private-cluster]
 *               [--enable-rbac]
 *               [--generate-ssh-keys]
 *               [--kubernetes-version]
 *               [--load-balancer-idle-timeout]
 *               [--load-balancer-managed-outbound-ip-count]
 *               [--load-balancer-outbound-ip-prefixes]
 *               [--load-balancer-outbound-ips]
 *               [--load-balancer-outbound-ports]
 *               [--load-balancer-sku]
 *               [--location]
 *               [--max-count]
 *               [--max-pods]
 *               [--min-count]
 *               [--network-plugin {azure, kubenet}]
 *               [--network-policy]
 *               [--no-ssh-key]
 *               [--no-wait]
 *               [--node-count]
 *               [--node-osdisk-diskencryptionset-id]
 *               [--node-osdisk-size]
 *               [--node-vm-size]
 *               [--nodepool-labels]
 *               [--nodepool-name]
 *               [--nodepool-tags]
 *               [--outbound-type {loadBalancer, userDefinedRouting}]
 *               [--pod-cidr]
 *               [--service-cidr]
 *               [--service-principal]
 *               [--skip-subnet-role-assignment]
 *               [--ssh-key-value]
 *               [--subscription]
 *               [--tags]
 *               [--uptime-sla]
 *               [--vm-set-type]
 *               [--vnet-subnet-id]
 *               [--windows-admin-password]
 *               [--windows-admin-username]
 *               [--workspace-resource-id]
 *               [--zones {1, 2, 3}]
 * ```
 *
 * @param {string} name Name of the managed cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aks_create_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_create_command_builder, _super);
    function az_aks_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the managed cluster. */
    az_aks_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Comma seperated list of aad group object IDs that will be set as cluster admin. */
    az_aks_create_command_builder.prototype.aadAdminGroupObjectIds = function (value) {
        this.setFlag("--aad-admin-group-object-ids", value);
        return this;
    };
    /** The ID of an Azure Active Directory client application of type "Native". This application is for user login via kubectl. */
    az_aks_create_command_builder.prototype.aadClientAppId = function (value) {
        this.setFlag("--aad-client-app-id", value);
        return this;
    };
    /** The ID of an Azure Active Directory server application of type "Web app/API". This application represents the managed cluster's apiserver (Server application). */
    az_aks_create_command_builder.prototype.aadServerAppId = function (value) {
        this.setFlag("--aad-server-app-id", value);
        return this;
    };
    /** The secret of an Azure Active Directory server application. */
    az_aks_create_command_builder.prototype.aadServerAppSecret = function (value) {
        this.setFlag("--aad-server-app-secret", value);
        return this;
    };
    /** The ID of an Azure Active Directory tenant. */
    az_aks_create_command_builder.prototype.aadTenantId = function (value) {
        this.setFlag("--aad-tenant-id", value);
        return this;
    };
    /** User account to create on node VMs for SSH access. */
    az_aks_create_command_builder.prototype.adminUsername = function (value) {
        this.setFlag("--admin-username", value);
        return this;
    };
    /** Comma seperated list of authorized apiserver IP ranges. Set to 0.0.0.0/32 to restrict apiserver traffic to node pools. */
    az_aks_create_command_builder.prototype.apiServerAuthorizedIpRanges = function (value) {
        this.setFlag("--api-server-authorized-ip-ranges", value);
        return this;
    };
    /** Grant the 'acrpull' role assignment to the ACR specified by name or resource ID. */
    az_aks_create_command_builder.prototype.attachAcr = function (value) {
        this.setFlag("--attach-acr", value);
        return this;
    };
    /** Space-separated list of key=value pairs for configuring cluster autoscaler. Pass an empty string to clear the profile. */
    az_aks_create_command_builder.prototype.clusterAutoscalerProfile = function (value) {
        this.setFlag("--cluster-autoscaler-profile", value);
        return this;
    };
    /** Secret associated with the service principal. This argument is required if `--service-principal` is specified. */
    az_aks_create_command_builder.prototype.clientSecret = function (value) {
        this.setFlag("--client-secret", value);
        return this;
    };
    /** Disable Kubernetes Role-Based Access Control. */
    az_aks_create_command_builder.prototype.disableRbac = function (value) {
        this.setFlag("--disable-rbac", value);
        return this;
    };
    /** Prefix for hostnames that are created. If not specified, generate a hostname using the managed cluster and resource group names. */
    az_aks_create_command_builder.prototype.dnsNamePrefix = function (value) {
        this.setFlag("--dns-name-prefix", value);
        return this;
    };
    /** An IP address assigned to the Kubernetes DNS service. */
    az_aks_create_command_builder.prototype.dnsServiceIp = function (value) {
        this.setFlag("--dns-service-ip", value);
        return this;
    };
    /** A specific IP address and netmask for the Docker bridge, using standard CIDR notation. */
    az_aks_create_command_builder.prototype.dockerBridgeAddress = function (value) {
        this.setFlag("--docker-bridge-address", value);
        return this;
    };
    /** Enable managed AAD feature for cluster. */
    az_aks_create_command_builder.prototype.enableAad = function (value) {
        this.setFlag("--enable-aad", value);
        return this;
    };
    /** Enable the Kubernetes addons in a comma-separated list. */
    az_aks_create_command_builder.prototype.enableAddons = function (value) {
        this.setFlag("--enable-addons", value);
        return this;
    };
    /** Enable cluster autoscaler, default value is false. */
    az_aks_create_command_builder.prototype.enableClusterAutoscaler = function (value) {
        this.setFlag("--enable-cluster-autoscaler", value);
        return this;
    };
    /** Using a system assigned managed identity to manage cluster resource group. */
    az_aks_create_command_builder.prototype.enableManagedIdentity = function (value) {
        this.setFlag("--enable-managed-identity", value);
        return this;
    };
    /** Enable VMSS node public IP. */
    az_aks_create_command_builder.prototype.enableNodePublicIp = function (value) {
        this.setFlag("--enable-node-public-ip", value);
        return this;
    };
    /** Enable private cluster. */
    az_aks_create_command_builder.prototype.enablePrivateCluster = function (value) {
        this.setFlag("--enable-private-cluster", value);
        return this;
    };
    /** Enable Kubernetes Role-Based Access Control. Default: enabled. */
    az_aks_create_command_builder.prototype.enableRbac = function (value) {
        this.setFlag("--enable-rbac", value);
        return this;
    };
    /** Generate SSH public and private key files if missing. The keys will be stored in the ~/.ssh directory. */
    az_aks_create_command_builder.prototype.generateSshKeys = function (value) {
        this.setFlag("--generate-ssh-keys", value);
        return this;
    };
    /** Version of Kubernetes to use for creating the cluster, such as "1.16.9". */
    az_aks_create_command_builder.prototype.kubernetesVersion = function (value) {
        this.setFlag("--kubernetes-version", value);
        return this;
    };
    /** Load balancer idle timeout in minutes. */
    az_aks_create_command_builder.prototype.loadBalancerIdleTimeout = function (value) {
        this.setFlag("--load-balancer-idle-timeout", value);
        return this;
    };
    /** Load balancer managed outbound IP count. */
    az_aks_create_command_builder.prototype.loadBalancerManagedOutboundIpCount = function (value) {
        this.setFlag("--load-balancer-managed-outbound-ip-count", value);
        return this;
    };
    /** Load balancer outbound IP prefix resource IDs. */
    az_aks_create_command_builder.prototype.loadBalancerOutboundIpPrefixes = function (value) {
        this.setFlag("--load-balancer-outbound-ip-prefixes", value);
        return this;
    };
    /** Load balancer outbound IP resource IDs. */
    az_aks_create_command_builder.prototype.loadBalancerOutboundIps = function (value) {
        this.setFlag("--load-balancer-outbound-ips", value);
        return this;
    };
    /** Load balancer outbound allocated ports. */
    az_aks_create_command_builder.prototype.loadBalancerOutboundPorts = function (value) {
        this.setFlag("--load-balancer-outbound-ports", value);
        return this;
    };
    /** Azure Load Balancer SKU selection for your cluster. basic or standard. */
    az_aks_create_command_builder.prototype.loadBalancerSku = function (value) {
        this.setFlag("--load-balancer-sku", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_aks_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Maximum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [1, 100]. */
    az_aks_create_command_builder.prototype.maxCount = function (value) {
        this.setFlag("--max-count", value);
        return this;
    };
    /** The maximum number of pods deployable to a node. */
    az_aks_create_command_builder.prototype.maxPods = function (value) {
        this.setFlag("--max-pods", value);
        return this;
    };
    /** Minimum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [1, 100]. */
    az_aks_create_command_builder.prototype.minCount = function (value) {
        this.setFlag("--min-count", value);
        return this;
    };
    /** The Kubernetes network plugin to use. */
    az_aks_create_command_builder.prototype.networkPlugin = function (value) {
        this.setFlag("--network-plugin", value);
        return this;
    };
    /** The Kubernetes network policy to use. */
    az_aks_create_command_builder.prototype.networkPolicy = function (value) {
        this.setFlag("--network-policy", value);
        return this;
    };
    /** Do not use or create a local SSH key. */
    az_aks_create_command_builder.prototype.noSshKey = function (value) {
        this.setFlag("--no-ssh-key", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_aks_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Number of nodes in the Kubernetes node pool. After creating a cluster, you can change the size of its node pool with `az aks scale`. */
    az_aks_create_command_builder.prototype.nodeCount = function (value) {
        this.setFlag("--node-count", value);
        return this;
    };
    /** ResourceId of the disk encryption set to use for enabling encryption at rest on agent node os disk. */
    az_aks_create_command_builder.prototype.nodeOsdiskDiskencryptionsetId = function (value) {
        this.setFlag("--node-osdisk-diskencryptionset-id", value);
        return this;
    };
    /** Size in GB of the OS disk for each node in the node pool. Minimum 30 GB. */
    az_aks_create_command_builder.prototype.nodeOsdiskSize = function (value) {
        this.setFlag("--node-osdisk-size", value);
        return this;
    };
    /** Size of Virtual Machines to create as Kubernetes nodes. */
    az_aks_create_command_builder.prototype.nodeVmSize = function (value) {
        this.setFlag("--node-vm-size", value);
        return this;
    };
    /** Space-separated labels: key[=value] [key[=value] ...]. You can not change the node labels through CLI after creation. See <a href="https://aka.ms/node-labels">https://aka.ms/node-labels</a> for syntax of labels. */
    az_aks_create_command_builder.prototype.nodepoolLabels = function (value) {
        this.setFlag("--nodepool-labels", value);
        return this;
    };
    /** Node pool name, up to 12 alphanumeric characters. */
    az_aks_create_command_builder.prototype.nodepoolName = function (value) {
        this.setFlag("--nodepool-name", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_aks_create_command_builder.prototype.nodepoolTags = function (value) {
        this.setFlag("--nodepool-tags", value);
        return this;
    };
    /** How outbound traffic will be configured for a cluster. */
    az_aks_create_command_builder.prototype.outboundType = function (value) {
        this.setFlag("--outbound-type", value);
        return this;
    };
    /** A CIDR notation IP range from which to assign pod IPs when kubenet is used. */
    az_aks_create_command_builder.prototype.podCidr = function (value) {
        this.setFlag("--pod-cidr", value);
        return this;
    };
    /** A CIDR notation IP range from which to assign service cluster IPs. */
    az_aks_create_command_builder.prototype.serviceCidr = function (value) {
        this.setFlag("--service-cidr", value);
        return this;
    };
    /** Service principal used for authentication to Azure APIs. */
    az_aks_create_command_builder.prototype.servicePrincipal = function (value) {
        this.setFlag("--service-principal", value);
        return this;
    };
    /** Skip role assignment for subnet (advanced networking). */
    az_aks_create_command_builder.prototype.skipSubnetRoleAssignment = function (value) {
        this.setFlag("--skip-subnet-role-assignment", value);
        return this;
    };
    /** Public key path or key contents to install on node VMs for SSH access. For example, 'ssh-rsa AAAAB...snip...UcyupgH azureuser@linuxvm'. */
    az_aks_create_command_builder.prototype.sshKeyValue = function (value) {
        this.setFlag("--ssh-key-value", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_aks_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Enable a paid managed cluster service with a financially backed SLA. */
    az_aks_create_command_builder.prototype.uptimeSla = function (value) {
        this.setFlag("--uptime-sla", value);
        return this;
    };
    /** Agent pool vm set type. VirtualMachineScaleSets or AvailabilitySet. */
    az_aks_create_command_builder.prototype.vmSetType = function (value) {
        this.setFlag("--vm-set-type", value);
        return this;
    };
    /** The ID of a subnet in an existing VNet into which to deploy the cluster. */
    az_aks_create_command_builder.prototype.vnetSubnetId = function (value) {
        this.setFlag("--vnet-subnet-id", value);
        return this;
    };
    /** Password to create on Windows node VMs. */
    az_aks_create_command_builder.prototype.windowsAdminPassword = function (value) {
        this.setFlag("--windows-admin-password", value);
        return this;
    };
    /** Username to create on Windows node VMs. */
    az_aks_create_command_builder.prototype.windowsAdminUsername = function (value) {
        this.setFlag("--windows-admin-username", value);
        return this;
    };
    /** The resource ID of an existing Log Analytics Workspace to use for storing monitoring data. If not specified, uses the default Log Analytics Workspace if it exists, otherwise creates one. */
    az_aks_create_command_builder.prototype.workspaceResourceId = function (value) {
        this.setFlag("--workspace-resource-id", value);
        return this;
    };
    /** Availability zones where agent nodes will be placed. */
    az_aks_create_command_builder.prototype.zones = function (value) {
        this.setFlag("--zones", value);
        return this;
    };
    return az_aks_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a managed Kubernetes cluster.
 *
 * Syntax:
 * ```
 * az aks delete --name
 *               --resource-group
 *               [--no-wait]
 *               [--subscription]
 *               [--yes]
 * ```
 *
 * @param {string} name Name of the managed cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aks_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_delete_command_builder, _super);
    function az_aks_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the managed cluster. */
    az_aks_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_aks_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_aks_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_aks_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Disable Kubernetes addons.
 *
 * Syntax:
 * ```
 * az aks disable-addons --addons
 *                       --name
 *                       --resource-group
 *                       [--no-wait]
 *                       [--subscription]
 * ```
 *
 * @param {string} addons Disable the Kubernetes addons in a comma-separated list.
 * @param {string} name Name of the managed cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aks_disable_addons_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_disable_addons_command_builder, _super);
    function az_aks_disable_addons_command_builder(commandPath, resultDataTypeName, addons, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.addons(addons);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Disable the Kubernetes addons in a comma-separated list. */
    az_aks_disable_addons_command_builder.prototype.addons = function (value) {
        this.setFlag("--addons", value);
        return this;
    };
    /** Name of the managed cluster. */
    az_aks_disable_addons_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_disable_addons_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_aks_disable_addons_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_disable_addons_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_aks_disable_addons_command_builder;
}(base_1.CommandBuilder));
/**
 * Enable Kubernetes addons.
 *
 * Syntax:
 * ```
 * az aks enable-addons --addons
 *                      --name
 *                      --resource-group
 *                      [--no-wait]
 *                      [--subnet-name]
 *                      [--subscription]
 *                      [--workspace-resource-id]
 * ```
 *
 * @param {string} addons Enable the Kubernetes addons in a comma-separated list.
 * @param {string} name Name of the managed cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aks_enable_addons_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_enable_addons_command_builder, _super);
    function az_aks_enable_addons_command_builder(commandPath, resultDataTypeName, addons, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.addons(addons);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Enable the Kubernetes addons in a comma-separated list. */
    az_aks_enable_addons_command_builder.prototype.addons = function (value) {
        this.setFlag("--addons", value);
        return this;
    };
    /** Name of the managed cluster. */
    az_aks_enable_addons_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_enable_addons_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_aks_enable_addons_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of an existing subnet to use with the virtual-node add-on. */
    az_aks_enable_addons_command_builder.prototype.subnetName = function (value) {
        this.setFlag("--subnet-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_enable_addons_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The resource ID of an existing Log Analytics Workspace to use for storing monitoring data. */
    az_aks_enable_addons_command_builder.prototype.workspaceResourceId = function (value) {
        this.setFlag("--workspace-resource-id", value);
        return this;
    };
    return az_aks_enable_addons_command_builder;
}(base_1.CommandBuilder));
/**
 * Get access credentials for a managed Kubernetes cluster.
 *
 * Syntax:
 * ```
 * az aks get-credentials --name
 *                        --resource-group
 *                        [--admin]
 *                        [--context]
 *                        [--file]
 *                        [--overwrite-existing]
 *                        [--subscription]
 * ```
 *
 * @param {string} name Name of the managed cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aks_get_credentials_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_get_credentials_command_builder, _super);
    function az_aks_get_credentials_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the managed cluster. */
    az_aks_get_credentials_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_get_credentials_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Get cluster administrator credentials.  Default: cluster user credentials. */
    az_aks_get_credentials_command_builder.prototype.admin = function (value) {
        this.setFlag("--admin", value);
        return this;
    };
    /** If specified, overwrite the default context name. */
    az_aks_get_credentials_command_builder.prototype.context = function (value) {
        this.setFlag("--context", value);
        return this;
    };
    /** Kubernetes configuration file to update. Use "-" to print YAML to stdout instead. */
    az_aks_get_credentials_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** Overwrite any existing cluster entry with the same name. */
    az_aks_get_credentials_command_builder.prototype.overwriteExisting = function (value) {
        this.setFlag("--overwrite-existing", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_get_credentials_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_aks_get_credentials_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the upgrade versions available for a managed Kubernetes cluster.
 *
 * Syntax:
 * ```
 * az aks get-upgrades --name
 *                     --resource-group
 *                     [--subscription]
 * ```
 *
 * @param {string} name Name of the managed cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aks_get_upgrades_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_get_upgrades_command_builder, _super);
    function az_aks_get_upgrades_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the managed cluster. */
    az_aks_get_upgrades_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_get_upgrades_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_get_upgrades_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_aks_get_upgrades_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the versions available for creating a managed Kubernetes cluster.
 *
 * Syntax:
 * ```
 * az aks get-versions --location
 *                     [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 */
var az_aks_get_versions_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_get_versions_command_builder, _super);
    function az_aks_get_versions_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_aks_get_versions_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_get_versions_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_aks_get_versions_command_builder;
}(base_1.CommandBuilder));
/**
 * Download and install kubectl, the Kubernetes command-line tool. Download and install kubelogin, a client-go credential (exec) plugin implementing azure authentication.
 *
 * Syntax:
 * ```
 * az aks install-cli [--client-version]
 *                    [--install-location]
 *                    [--kubelogin-install-location]
 *                    [--kubelogin-version]
 *                    [--subscription]
 * ```
 */
var az_aks_install_cli_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_install_cli_command_builder, _super);
    function az_aks_install_cli_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Version of kubectl to install. */
    az_aks_install_cli_command_builder.prototype.clientVersion = function (value) {
        this.setFlag("--client-version", value);
        return this;
    };
    /** Path at which to install kubectl. */
    az_aks_install_cli_command_builder.prototype.installLocation = function (value) {
        this.setFlag("--install-location", value);
        return this;
    };
    /** Path at which to install kubelogin. */
    az_aks_install_cli_command_builder.prototype.kubeloginInstallLocation = function (value) {
        this.setFlag("--kubelogin-install-location", value);
        return this;
    };
    /** Version of kubelogin to install. */
    az_aks_install_cli_command_builder.prototype.kubeloginVersion = function (value) {
        this.setFlag("--kubelogin-version", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_install_cli_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_aks_install_cli_command_builder;
}(base_1.CommandBuilder));
/**
 * List managed Kubernetes clusters.
 *
 * Syntax:
 * ```
 * az aks list [--query-examples]
 *             [--resource-group]
 *             [--subscription]
 * ```
 */
var az_aks_list_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_list_command_builder, _super);
    function az_aks_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_aks_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_aks_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove Azure Dev Spaces from a managed Kubernetes cluster.
 *
 * Syntax:
 * ```
 * az aks remove-dev-spaces --name
 *                          --resource-group
 *                          [--subscription]
 *                          [--yes]
 * ```
 *
 * @param {string} name Name of the managed cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aks_remove_dev_spaces_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_remove_dev_spaces_command_builder, _super);
    function az_aks_remove_dev_spaces_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the managed cluster. */
    az_aks_remove_dev_spaces_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_remove_dev_spaces_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_remove_dev_spaces_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_aks_remove_dev_spaces_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_aks_remove_dev_spaces_command_builder;
}(base_1.CommandBuilder));
/**
 * Rotate certificates and keys on a managed Kubernetes cluster.
 *
 * Syntax:
 * ```
 * az aks rotate-certs --name
 *                     --resource-group
 *                     [--no-wait]
 *                     [--subscription]
 *                     [--yes]
 * ```
 *
 * @param {string} name Name of the managed cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aks_rotate_certs_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_rotate_certs_command_builder, _super);
    function az_aks_rotate_certs_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the managed cluster. */
    az_aks_rotate_certs_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_rotate_certs_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_aks_rotate_certs_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_rotate_certs_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_aks_rotate_certs_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_aks_rotate_certs_command_builder;
}(base_1.CommandBuilder));
/**
 * Scale the node pool in a managed Kubernetes cluster.
 *
 * Syntax:
 * ```
 * az aks scale --name
 *              --node-count
 *              --resource-group
 *              [--no-wait]
 *              [--nodepool-name]
 *              [--subscription]
 * ```
 *
 * @param {string} name Name of the managed cluster.
 * @param {string} nodeCount Number of nodes in the Kubernetes node pool.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aks_scale_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_scale_command_builder, _super);
    function az_aks_scale_command_builder(commandPath, resultDataTypeName, name, nodeCount, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.nodeCount(nodeCount);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the managed cluster. */
    az_aks_scale_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Number of nodes in the Kubernetes node pool. */
    az_aks_scale_command_builder.prototype.nodeCount = function (value) {
        this.setFlag("--node-count", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_scale_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_aks_scale_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Node pool name, up to 12 alphanumeric characters. */
    az_aks_scale_command_builder.prototype.nodepoolName = function (value) {
        this.setFlag("--nodepool-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_scale_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_aks_scale_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details for a managed Kubernetes cluster.
 *
 * Syntax:
 * ```
 * az aks show --name
 *             --resource-group
 *             [--query-examples]
 *             [--subscription]
 * ```
 *
 * @param {string} name Name of the managed cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aks_show_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_show_command_builder, _super);
    function az_aks_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the managed cluster. */
    az_aks_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_aks_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_aks_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a managed Kubernetes cluster.
 *
 * Syntax:
 * ```
 * az aks update --name
 *               --resource-group
 *               [--aad-admin-group-object-ids]
 *               [--aad-tenant-id]
 *               [--api-server-authorized-ip-ranges]
 *               [--attach-acr]
 *               [--ca-profile]
 *               [--detach-acr]
 *               [--disable-cluster-autoscaler]
 *               [--enable-aad]
 *               [--enable-cluster-autoscaler]
 *               [--load-balancer-idle-timeout]
 *               [--load-balancer-managed-outbound-ip-count]
 *               [--load-balancer-outbound-ip-prefixes]
 *               [--load-balancer-outbound-ips]
 *               [--load-balancer-outbound-ports]
 *               [--max-count]
 *               [--min-count]
 *               [--no-wait]
 *               [--subscription]
 *               [--update-cluster-autoscaler]
 *               [--uptime-sla]
 * ```
 *
 * @param {string} name Name of the managed cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aks_update_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_update_command_builder, _super);
    function az_aks_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the managed cluster. */
    az_aks_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Comma seperated list of aad group object IDs that will be set as cluster admin. */
    az_aks_update_command_builder.prototype.aadAdminGroupObjectIds = function (value) {
        this.setFlag("--aad-admin-group-object-ids", value);
        return this;
    };
    /** The ID of an Azure Active Directory tenant. */
    az_aks_update_command_builder.prototype.aadTenantId = function (value) {
        this.setFlag("--aad-tenant-id", value);
        return this;
    };
    /** Comma seperated list of authorized apiserver IP ranges. Set to "" to allow all traffic on a previously restricted cluster. Set to 0.0.0.0/32 to restrict apiserver traffic to node pools. */
    az_aks_update_command_builder.prototype.apiServerAuthorizedIpRanges = function (value) {
        this.setFlag("--api-server-authorized-ip-ranges", value);
        return this;
    };
    /** Grant the 'acrpull' role assignment to the ACR specified by name or resource ID. */
    az_aks_update_command_builder.prototype.attachAcr = function (value) {
        this.setFlag("--attach-acr", value);
        return this;
    };
    /** Space-separated list of key=value pairs for configuring cluster autoscaler. Pass an empty string to clear the profile. */
    az_aks_update_command_builder.prototype.clusterAutoscalerProfile = function (value) {
        this.setFlag("--cluster-autoscaler-profile", value);
        return this;
    };
    /** Disable the 'acrpull' role assignment to the ACR specified by name or resource ID. */
    az_aks_update_command_builder.prototype.detachAcr = function (value) {
        this.setFlag("--detach-acr", value);
        return this;
    };
    /** Disable cluster autoscaler. */
    az_aks_update_command_builder.prototype.disableClusterAutoscaler = function (value) {
        this.setFlag("--disable-cluster-autoscaler", value);
        return this;
    };
    /** Enable managed AAD feature for cluster. */
    az_aks_update_command_builder.prototype.enableAad = function (value) {
        this.setFlag("--enable-aad", value);
        return this;
    };
    /** Enable cluster autoscaler. */
    az_aks_update_command_builder.prototype.enableClusterAutoscaler = function (value) {
        this.setFlag("--enable-cluster-autoscaler", value);
        return this;
    };
    /** Load balancer idle timeout in minutes. */
    az_aks_update_command_builder.prototype.loadBalancerIdleTimeout = function (value) {
        this.setFlag("--load-balancer-idle-timeout", value);
        return this;
    };
    /** Load balancer managed outbound IP count. */
    az_aks_update_command_builder.prototype.loadBalancerManagedOutboundIpCount = function (value) {
        this.setFlag("--load-balancer-managed-outbound-ip-count", value);
        return this;
    };
    /** Load balancer outbound IP prefix resource IDs. */
    az_aks_update_command_builder.prototype.loadBalancerOutboundIpPrefixes = function (value) {
        this.setFlag("--load-balancer-outbound-ip-prefixes", value);
        return this;
    };
    /** Load balancer outbound IP resource IDs. */
    az_aks_update_command_builder.prototype.loadBalancerOutboundIps = function (value) {
        this.setFlag("--load-balancer-outbound-ips", value);
        return this;
    };
    /** Load balancer outbound allocated ports. */
    az_aks_update_command_builder.prototype.loadBalancerOutboundPorts = function (value) {
        this.setFlag("--load-balancer-outbound-ports", value);
        return this;
    };
    /** Maximum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [1, 100]. */
    az_aks_update_command_builder.prototype.maxCount = function (value) {
        this.setFlag("--max-count", value);
        return this;
    };
    /** Minimum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [1, 100]. */
    az_aks_update_command_builder.prototype.minCount = function (value) {
        this.setFlag("--min-count", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_aks_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Update min-count or max-count for cluster autoscaler. */
    az_aks_update_command_builder.prototype.updateClusterAutoscaler = function (value) {
        this.setFlag("--update-cluster-autoscaler", value);
        return this;
    };
    /** Enable a paid managed cluster service with a financially backed SLA. */
    az_aks_update_command_builder.prototype.uptimeSla = function (value) {
        this.setFlag("--uptime-sla", value);
        return this;
    };
    return az_aks_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Update credentials for a managed Kubernetes cluster, like service principal.
 *
 * Syntax:
 * ```
 * az aks update-credentials --name
 *                           --resource-group
 *                           [--aad-client-app-id]
 *                           [--aad-server-app-id]
 *                           [--aad-server-app-secret]
 *                           [--aad-tenant-id]
 *                           [--client-secret]
 *                           [--no-wait]
 *                           [--reset-aad]
 *                           [--reset-service-principal]
 *                           [--service-principal]
 *                           [--subscription]
 * ```
 *
 * @param {string} name Name of the managed cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aks_update_credentials_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_update_credentials_command_builder, _super);
    function az_aks_update_credentials_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the managed cluster. */
    az_aks_update_credentials_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_update_credentials_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The ID of an Azure Active Directory client application. This argument is required if `--reset-aad` is specified. */
    az_aks_update_credentials_command_builder.prototype.aadClientAppId = function (value) {
        this.setFlag("--aad-client-app-id", value);
        return this;
    };
    /** The ID of an Azure Active Directory server application. This argument is required if `--reset-aad` is specified. */
    az_aks_update_credentials_command_builder.prototype.aadServerAppId = function (value) {
        this.setFlag("--aad-server-app-id", value);
        return this;
    };
    /** The secret of an Azure Active Directory server application. This argument is required if `--reset-aad` is specified. */
    az_aks_update_credentials_command_builder.prototype.aadServerAppSecret = function (value) {
        this.setFlag("--aad-server-app-secret", value);
        return this;
    };
    /** Tenant ID associated with Azure Active Directory. */
    az_aks_update_credentials_command_builder.prototype.aadTenantId = function (value) {
        this.setFlag("--aad-tenant-id", value);
        return this;
    };
    /** Secret associated with the service principal. This argument is required if `--service-principal` is specified. */
    az_aks_update_credentials_command_builder.prototype.clientSecret = function (value) {
        this.setFlag("--client-secret", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_aks_update_credentials_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Reset Azure Active Directory configuration for a managed cluster. */
    az_aks_update_credentials_command_builder.prototype.resetAad = function (value) {
        this.setFlag("--reset-aad", value);
        return this;
    };
    /** Reset service principal for a managed cluster. */
    az_aks_update_credentials_command_builder.prototype.resetServicePrincipal = function (value) {
        this.setFlag("--reset-service-principal", value);
        return this;
    };
    /** Service principal used for authentication to Azure APIs. This argument is required if `--reset-service-principal` is specified. */
    az_aks_update_credentials_command_builder.prototype.servicePrincipal = function (value) {
        this.setFlag("--service-principal", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_update_credentials_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_aks_update_credentials_command_builder;
}(base_1.CommandBuilder));
/**
 * Upgrade a managed Kubernetes cluster to a newer version.
 *
 * Syntax:
 * ```
 * az aks upgrade --kubernetes-version
 *                --name
 *                --resource-group
 *                [--control-plane-only]
 *                [--no-wait]
 *                [--subscription]
 *                [--yes]
 * ```
 *
 * @param {string} kubernetesVersion Version of Kubernetes to upgrade the cluster to, such as "1.16.9".
 * @param {string} name Name of the managed cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aks_upgrade_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_upgrade_command_builder, _super);
    function az_aks_upgrade_command_builder(commandPath, resultDataTypeName, kubernetesVersion, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.kubernetesVersion(kubernetesVersion);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Version of Kubernetes to upgrade the cluster to, such as "1.16.9". */
    az_aks_upgrade_command_builder.prototype.kubernetesVersion = function (value) {
        this.setFlag("--kubernetes-version", value);
        return this;
    };
    /** Name of the managed cluster. */
    az_aks_upgrade_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_upgrade_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Upgrade the cluster control plane only. If not specified, both control plane AND all node pools will be upgraded. */
    az_aks_upgrade_command_builder.prototype.controlPlaneOnly = function (value) {
        this.setFlag("--control-plane-only", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_aks_upgrade_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_upgrade_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_aks_upgrade_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_aks_upgrade_command_builder;
}(base_1.CommandBuilder));
/**
 * Use Azure Dev Spaces with a managed Kubernetes cluster.
 *
 * Syntax:
 * ```
 * az aks use-dev-spaces --name
 *                       --resource-group
 *                       [--endpoint {None, Private, Public}]
 *                       [--space]
 *                       [--subscription]
 *                       [--update]
 *                       [--yes]
 * ```
 *
 * @param {string} name Name of the managed cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aks_use_dev_spaces_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_use_dev_spaces_command_builder, _super);
    function az_aks_use_dev_spaces_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the managed cluster. */
    az_aks_use_dev_spaces_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_use_dev_spaces_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The endpoint type to be used for a Azure Dev Spaces controller. See <a href="https://aka.ms/azds-networking">https://aka.ms/azds-networking</a> for more information. */
    az_aks_use_dev_spaces_command_builder.prototype.endpoint = function (value) {
        this.setFlag("--endpoint", value);
        return this;
    };
    /** Name of the new or existing dev space to select. Defaults to an interactive selection experience. */
    az_aks_use_dev_spaces_command_builder.prototype.space = function (value) {
        this.setFlag("--space", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_use_dev_spaces_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Update to the latest Azure Dev Spaces client components. */
    az_aks_use_dev_spaces_command_builder.prototype.update = function (value) {
        this.setFlag("--update", value);
        return this;
    };
    /** Do not prompt for confirmation. Requires --space. */
    az_aks_use_dev_spaces_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_aks_use_dev_spaces_command_builder;
}(base_1.CommandBuilder));
/**
 * Wait for a managed Kubernetes cluster to reach a desired state.
 *
 * Syntax:
 * ```
 * az aks wait --name
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
 * @param {string} name Name of the managed cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_aks_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_aks_wait_command_builder, _super);
    function az_aks_wait_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the managed cluster. */
    az_aks_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_aks_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_aks_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_aks_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_aks_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_aks_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_aks_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_aks_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_aks_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_aks_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_aks_wait_command_builder;
}(base_1.CommandBuilder));
