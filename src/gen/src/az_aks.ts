import { CommandBuilder } from '../base';
import { az_aks_nodepool_add_command_result } from './models/az_aks_nodepool_add_command_result'
import { az_aks_nodepool_delete_command_result } from './models/az_aks_nodepool_delete_command_result'
import { az_aks_nodepool_get_upgrades_command_result } from './models/az_aks_nodepool_get_upgrades_command_result'
import { az_aks_nodepool_list_command_result } from './models/az_aks_nodepool_list_command_result'
import { az_aks_nodepool_scale_command_result } from './models/az_aks_nodepool_scale_command_result'
import { az_aks_nodepool_show_command_result } from './models/az_aks_nodepool_show_command_result'
import { az_aks_nodepool_update_command_result } from './models/az_aks_nodepool_update_command_result'
import { az_aks_nodepool_upgrade_command_result } from './models/az_aks_nodepool_upgrade_command_result'
import { az_aks_browse_command_result } from './models/az_aks_browse_command_result'
import { az_aks_create_command_result } from './models/az_aks_create_command_result'
import { az_aks_delete_command_result } from './models/az_aks_delete_command_result'
import { az_aks_disable_addons_command_result } from './models/az_aks_disable_addons_command_result'
import { az_aks_enable_addons_command_result } from './models/az_aks_enable_addons_command_result'
import { az_aks_get_credentials_command_result } from './models/az_aks_get_credentials_command_result'
import { az_aks_get_upgrades_command_result } from './models/az_aks_get_upgrades_command_result'
import { az_aks_get_versions_command_result } from './models/az_aks_get_versions_command_result'
import { az_aks_install_cli_command_result } from './models/az_aks_install_cli_command_result'
import { az_aks_list_command_result } from './models/az_aks_list_command_result'
import { az_aks_remove_dev_spaces_command_result } from './models/az_aks_remove_dev_spaces_command_result'
import { az_aks_rotate_certs_command_result } from './models/az_aks_rotate_certs_command_result'
import { az_aks_scale_command_result } from './models/az_aks_scale_command_result'
import { az_aks_show_command_result } from './models/az_aks_show_command_result'
import { az_aks_update_command_result } from './models/az_aks_update_command_result'
import { az_aks_update_credentials_command_result } from './models/az_aks_update_credentials_command_result'
import { az_aks_upgrade_command_result } from './models/az_aks_upgrade_command_result'
import { az_aks_use_dev_spaces_command_result } from './models/az_aks_use_dev_spaces_command_result'
import { az_aks_wait_command_result } from './models/az_aks_wait_command_result'

/** Commands to manage node pools in Kubernetes kubernetes cluster. */
export class az_aks_nodepool {
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
    static add(clusterName: string, name: string, resourceGroup: string): az_aks_nodepool_add_command_builder {
        return new az_aks_nodepool_add_command_builder("az aks nodepool add", 'az_aks_nodepool_add_command_result', clusterName, name, resourceGroup);
    }

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
    static delete(clusterName: string, name: string, resourceGroup: string): az_aks_nodepool_delete_command_builder {
        return new az_aks_nodepool_delete_command_builder("az aks nodepool delete", 'az_aks_nodepool_delete_command_result', clusterName, name, resourceGroup);
    }

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
    static get_upgrades(clusterName: string, nodepoolName: string, resourceGroup: string): az_aks_nodepool_get_upgrades_command_builder {
        return new az_aks_nodepool_get_upgrades_command_builder("az aks nodepool get-upgrades", 'az_aks_nodepool_get_upgrades_command_result', clusterName, nodepoolName, resourceGroup);
    }

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
    static list(clusterName: string, resourceGroup: string): az_aks_nodepool_list_command_builder {
        return new az_aks_nodepool_list_command_builder("az aks nodepool list", 'az_aks_nodepool_list_command_result', clusterName, resourceGroup);
    }

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
    static scale(clusterName: string, name: string, resourceGroup: string): az_aks_nodepool_scale_command_builder {
        return new az_aks_nodepool_scale_command_builder("az aks nodepool scale", 'az_aks_nodepool_scale_command_result', clusterName, name, resourceGroup);
    }

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
    static show(clusterName: string, name: string, resourceGroup: string): az_aks_nodepool_show_command_builder {
        return new az_aks_nodepool_show_command_builder("az aks nodepool show", 'az_aks_nodepool_show_command_result', clusterName, name, resourceGroup);
    }

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
    static update(clusterName: string, name: string, resourceGroup: string): az_aks_nodepool_update_command_builder {
        return new az_aks_nodepool_update_command_builder("az aks nodepool update", 'az_aks_nodepool_update_command_result', clusterName, name, resourceGroup);
    }

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
    static upgrade(clusterName: string, kubernetesVersion: string, name: string, resourceGroup: string): az_aks_nodepool_upgrade_command_builder {
        return new az_aks_nodepool_upgrade_command_builder("az aks nodepool upgrade", 'az_aks_nodepool_upgrade_command_result', clusterName, kubernetesVersion, name, resourceGroup);
    }
}

/** Manage Azure Kubernetes Services. */
export class az_aks {
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
    static browse(name: string, resourceGroup: string): az_aks_browse_command_builder {
        return new az_aks_browse_command_builder("az aks browse", 'az_aks_browse_command_result', name, resourceGroup);
    }

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
    static create(name: string, resourceGroup: string): az_aks_create_command_builder {
        return new az_aks_create_command_builder("az aks create", 'az_aks_create_command_result', name, resourceGroup);
    }

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
    static delete(name: string, resourceGroup: string): az_aks_delete_command_builder {
        return new az_aks_delete_command_builder("az aks delete", 'az_aks_delete_command_result', name, resourceGroup);
    }

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
    static disable_addons(addons: string, name: string, resourceGroup: string): az_aks_disable_addons_command_builder {
        return new az_aks_disable_addons_command_builder("az aks disable-addons", 'az_aks_disable_addons_command_result', addons, name, resourceGroup);
    }

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
    static enable_addons(addons: string, name: string, resourceGroup: string): az_aks_enable_addons_command_builder {
        return new az_aks_enable_addons_command_builder("az aks enable-addons", 'az_aks_enable_addons_command_result', addons, name, resourceGroup);
    }

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
    static get_credentials(name: string, resourceGroup: string): az_aks_get_credentials_command_builder {
        return new az_aks_get_credentials_command_builder("az aks get-credentials", 'az_aks_get_credentials_command_result', name, resourceGroup);
    }

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
    static get_upgrades(name: string, resourceGroup: string): az_aks_get_upgrades_command_builder {
        return new az_aks_get_upgrades_command_builder("az aks get-upgrades", 'az_aks_get_upgrades_command_result', name, resourceGroup);
    }

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
    static get_versions(location: string): az_aks_get_versions_command_builder {
        return new az_aks_get_versions_command_builder("az aks get-versions", 'az_aks_get_versions_command_result', location);
    }

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
    static install_cli(): az_aks_install_cli_command_builder {
        return new az_aks_install_cli_command_builder("az aks install-cli", 'az_aks_install_cli_command_result');
    }

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
    static list(): az_aks_list_command_builder {
        return new az_aks_list_command_builder("az aks list", 'az_aks_list_command_result');
    }

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
    static remove_dev_spaces(name: string, resourceGroup: string): az_aks_remove_dev_spaces_command_builder {
        return new az_aks_remove_dev_spaces_command_builder("az aks remove-dev-spaces", 'az_aks_remove_dev_spaces_command_result', name, resourceGroup);
    }

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
    static rotate_certs(name: string, resourceGroup: string): az_aks_rotate_certs_command_builder {
        return new az_aks_rotate_certs_command_builder("az aks rotate-certs", 'az_aks_rotate_certs_command_result', name, resourceGroup);
    }

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
    static scale(name: string, nodeCount: string, resourceGroup: string): az_aks_scale_command_builder {
        return new az_aks_scale_command_builder("az aks scale", 'az_aks_scale_command_result', name, nodeCount, resourceGroup);
    }

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
    static show(name: string, resourceGroup: string): az_aks_show_command_builder {
        return new az_aks_show_command_builder("az aks show", 'az_aks_show_command_result', name, resourceGroup);
    }

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
    static update(name: string, resourceGroup: string): az_aks_update_command_builder {
        return new az_aks_update_command_builder("az aks update", 'az_aks_update_command_result', name, resourceGroup);
    }

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
    static update_credentials(name: string, resourceGroup: string): az_aks_update_credentials_command_builder {
        return new az_aks_update_credentials_command_builder("az aks update-credentials", 'az_aks_update_credentials_command_result', name, resourceGroup);
    }

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
    static upgrade(kubernetesVersion: string, name: string, resourceGroup: string): az_aks_upgrade_command_builder {
        return new az_aks_upgrade_command_builder("az aks upgrade", 'az_aks_upgrade_command_result', kubernetesVersion, name, resourceGroup);
    }

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
    static use_dev_spaces(name: string, resourceGroup: string): az_aks_use_dev_spaces_command_builder {
        return new az_aks_use_dev_spaces_command_builder("az aks use-dev-spaces", 'az_aks_use_dev_spaces_command_result', name, resourceGroup);
    }

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
    static wait(name: string, resourceGroup: string): az_aks_wait_command_builder {
        return new az_aks_wait_command_builder("az aks wait", 'az_aks_wait_command_result', name, resourceGroup);
    }
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
class az_aks_nodepool_add_command_builder extends CommandBuilder<az_aks_nodepool_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The cluster name. */
    clusterName(value: string): az_aks_nodepool_add_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** The node pool name. */
    name(value: string): az_aks_nodepool_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_nodepool_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Enable cluster autoscaler. */
    enableClusterAutoscaler(value: string): az_aks_nodepool_add_command_builder {
        this.setFlag("--enable-cluster-autoscaler", value);
        return this;
    }

    /** Enable VMSS node public IP. */
    enableNodePublicIp(value: string): az_aks_nodepool_add_command_builder {
        this.setFlag("--enable-node-public-ip", value);
        return this;
    }

    /** Version of Kubernetes to use for creating the cluster, such as "1.16.9". */
    kubernetesVersion(value: string): az_aks_nodepool_add_command_builder {
        this.setFlag("--kubernetes-version", value);
        return this;
    }

    /** The node labels for the node pool. You can't change the node labels through CLI after the node pool is created. See <a href="https://aka.ms/node-labels">https://aka.ms/node-labels</a> for syntax of labels. */
    labels(value: string): az_aks_nodepool_add_command_builder {
        this.setFlag("--labels", value);
        return this;
    }

    /** Maximum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [1, 100]. */
    maxCount(value: string): az_aks_nodepool_add_command_builder {
        this.setFlag("--max-count", value);
        return this;
    }

    /** The maximum number of pods deployable to a node. */
    maxPods(value: string): az_aks_nodepool_add_command_builder {
        this.setFlag("--max-pods", value);
        return this;
    }

    /** Minimum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [1, 100]. */
    minCount(value: string): az_aks_nodepool_add_command_builder {
        this.setFlag("--min-count", value);
        return this;
    }

    /** The mode for a node pool which defines a node pool's primary function. If set as "System", AKS prefers system pods scheduling to node pools with mode `System`. Learn more at <a href="https://aka.ms/aks/nodepool/mode">https://aka.ms/aks/nodepool/mode</a>. */
    mode(value: 'System' | 'User'): az_aks_nodepool_add_command_builder {
        this.setFlag("--mode", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_aks_nodepool_add_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Number of nodes in the Kubernetes agent pool. After creating a cluster, you can change the size of its node pool with `az aks scale`. */
    nodeCount(value: string): az_aks_nodepool_add_command_builder {
        this.setFlag("--node-count", value);
        return this;
    }

    /** Size in GB of the OS disk for each node in the agent pool. Minimum 30 GB. */
    nodeOsdiskSize(value: string): az_aks_nodepool_add_command_builder {
        this.setFlag("--node-osdisk-size", value);
        return this;
    }

    /** The node taints for the node pool. You can't change the node taints through CLI after the node pool is created. */
    nodeTaints(value: string): az_aks_nodepool_add_command_builder {
        this.setFlag("--node-taints", value);
        return this;
    }

    /** Size of Virtual Machines to create as Kubernetes nodes. */
    nodeVmSize(value: string): az_aks_nodepool_add_command_builder {
        this.setFlag("--node-vm-size", value);
        return this;
    }

    /** The OS Type. Linux or Windows. */
    osType(value: string): az_aks_nodepool_add_command_builder {
        this.setFlag("--os-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_nodepool_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_aks_nodepool_add_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The ID of a subnet in an existing VNet into which to deploy the cluster. */
    vnetSubnetId(value: string): az_aks_nodepool_add_command_builder {
        this.setFlag("--vnet-subnet-id", value);
        return this;
    }

    /** Availability zones where agent nodes will be placed. */
    zones(value: '1' | '2' | '3'): az_aks_nodepool_add_command_builder {
        this.setFlag("--zones", value);
        return this;
    }
}

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
class az_aks_nodepool_delete_command_builder extends CommandBuilder<az_aks_nodepool_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The cluster name. */
    clusterName(value: string): az_aks_nodepool_delete_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** The node pool name. */
    name(value: string): az_aks_nodepool_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_nodepool_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_aks_nodepool_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_nodepool_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_aks_nodepool_get_upgrades_command_builder extends CommandBuilder<az_aks_nodepool_get_upgrades_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, nodepoolName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.nodepoolName(nodepoolName)
        this.resourceGroup(resourceGroup)
    }

    /** The cluster name. */
    clusterName(value: string): az_aks_nodepool_get_upgrades_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Name of the node pool. */
    nodepoolName(value: string): az_aks_nodepool_get_upgrades_command_builder {
        this.setFlag("--nodepool-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_nodepool_get_upgrades_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_nodepool_get_upgrades_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_aks_nodepool_list_command_builder extends CommandBuilder<az_aks_nodepool_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** The cluster name. */
    clusterName(value: string): az_aks_nodepool_list_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_nodepool_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_aks_nodepool_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_nodepool_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_aks_nodepool_scale_command_builder extends CommandBuilder<az_aks_nodepool_scale_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The cluster name. */
    clusterName(value: string): az_aks_nodepool_scale_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** The node pool name. */
    name(value: string): az_aks_nodepool_scale_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_nodepool_scale_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_aks_nodepool_scale_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Number of nodes in the Kubernetes node pool. */
    nodeCount(value: string): az_aks_nodepool_scale_command_builder {
        this.setFlag("--node-count", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_nodepool_scale_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_aks_nodepool_show_command_builder extends CommandBuilder<az_aks_nodepool_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The cluster name. */
    clusterName(value: string): az_aks_nodepool_show_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** The node pool name. */
    name(value: string): az_aks_nodepool_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_nodepool_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_aks_nodepool_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_nodepool_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_aks_nodepool_update_command_builder extends CommandBuilder<az_aks_nodepool_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The cluster name. */
    clusterName(value: string): az_aks_nodepool_update_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** The node pool name. */
    name(value: string): az_aks_nodepool_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_nodepool_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Disable cluster autoscaler. */
    disableClusterAutoscaler(value: string): az_aks_nodepool_update_command_builder {
        this.setFlag("--disable-cluster-autoscaler", value);
        return this;
    }

    /** Enable cluster autoscaler. */
    enableClusterAutoscaler(value: string): az_aks_nodepool_update_command_builder {
        this.setFlag("--enable-cluster-autoscaler", value);
        return this;
    }

    /** Maximum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [1, 100]. */
    maxCount(value: string): az_aks_nodepool_update_command_builder {
        this.setFlag("--max-count", value);
        return this;
    }

    /** Minimum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [1, 100]. */
    minCount(value: string): az_aks_nodepool_update_command_builder {
        this.setFlag("--min-count", value);
        return this;
    }

    /** The mode for a node pool which defines a node pool's primary function. If set as "System", AKS prefers system pods scheduling to node pools with mode `System`. Learn more at <a href="https://aka.ms/aks/nodepool/mode">https://aka.ms/aks/nodepool/mode</a>. */
    mode(value: 'System' | 'User'): az_aks_nodepool_update_command_builder {
        this.setFlag("--mode", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_aks_nodepool_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_nodepool_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_aks_nodepool_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Update min-count or max-count for cluster autoscaler. */
    updateClusterAutoscaler(value: string): az_aks_nodepool_update_command_builder {
        this.setFlag("--update-cluster-autoscaler", value);
        return this;
    }
}

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
class az_aks_nodepool_upgrade_command_builder extends CommandBuilder<az_aks_nodepool_upgrade_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, kubernetesVersion: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.kubernetesVersion(kubernetesVersion)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The cluster name. */
    clusterName(value: string): az_aks_nodepool_upgrade_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Version of Kubernetes to upgrade the node pool to, such as "1.16.9". */
    kubernetesVersion(value: string): az_aks_nodepool_upgrade_command_builder {
        this.setFlag("--kubernetes-version", value);
        return this;
    }

    /** The node pool name. */
    name(value: string): az_aks_nodepool_upgrade_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_nodepool_upgrade_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_aks_nodepool_upgrade_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_nodepool_upgrade_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_aks_browse_command_builder extends CommandBuilder<az_aks_browse_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the managed cluster. */
    name(value: string): az_aks_browse_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_browse_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Don't launch a web browser after establishing port-forwarding. */
    disableBrowser(value: string): az_aks_browse_command_builder {
        this.setFlag("--disable-browser", value);
        return this;
    }

    /** The listening address for the dashboard. */
    listenAddress(value: string): az_aks_browse_command_builder {
        this.setFlag("--listen-address", value);
        return this;
    }

    /** The listening port for the dashboard. */
    listenPort(value: string): az_aks_browse_command_builder {
        this.setFlag("--listen-port", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_browse_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_aks_create_command_builder extends CommandBuilder<az_aks_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the managed cluster. */
    name(value: string): az_aks_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Comma seperated list of aad group object IDs that will be set as cluster admin. */
    aadAdminGroupObjectIds(value: string): az_aks_create_command_builder {
        this.setFlag("--aad-admin-group-object-ids", value);
        return this;
    }

    /** The ID of an Azure Active Directory client application of type "Native". This application is for user login via kubectl. */
    aadClientAppId(value: string): az_aks_create_command_builder {
        this.setFlag("--aad-client-app-id", value);
        return this;
    }

    /** The ID of an Azure Active Directory server application of type "Web app/API". This application represents the managed cluster's apiserver (Server application). */
    aadServerAppId(value: string): az_aks_create_command_builder {
        this.setFlag("--aad-server-app-id", value);
        return this;
    }

    /** The secret of an Azure Active Directory server application. */
    aadServerAppSecret(value: string): az_aks_create_command_builder {
        this.setFlag("--aad-server-app-secret", value);
        return this;
    }

    /** The ID of an Azure Active Directory tenant. */
    aadTenantId(value: string): az_aks_create_command_builder {
        this.setFlag("--aad-tenant-id", value);
        return this;
    }

    /** User account to create on node VMs for SSH access. */
    adminUsername(value: string): az_aks_create_command_builder {
        this.setFlag("--admin-username", value);
        return this;
    }

    /** Comma seperated list of authorized apiserver IP ranges. Set to 0.0.0.0/32 to restrict apiserver traffic to node pools. */
    apiServerAuthorizedIpRanges(value: string): az_aks_create_command_builder {
        this.setFlag("--api-server-authorized-ip-ranges", value);
        return this;
    }

    /** Grant the 'acrpull' role assignment to the ACR specified by name or resource ID. */
    attachAcr(value: string): az_aks_create_command_builder {
        this.setFlag("--attach-acr", value);
        return this;
    }

    /** Space-separated list of key=value pairs for configuring cluster autoscaler. Pass an empty string to clear the profile. */
    clusterAutoscalerProfile(value: string): az_aks_create_command_builder {
        this.setFlag("--cluster-autoscaler-profile", value);
        return this;
    }

    /** Secret associated with the service principal. This argument is required if `--service-principal` is specified. */
    clientSecret(value: string): az_aks_create_command_builder {
        this.setFlag("--client-secret", value);
        return this;
    }

    /** Disable Kubernetes Role-Based Access Control. */
    disableRbac(value: string): az_aks_create_command_builder {
        this.setFlag("--disable-rbac", value);
        return this;
    }

    /** Prefix for hostnames that are created. If not specified, generate a hostname using the managed cluster and resource group names. */
    dnsNamePrefix(value: string): az_aks_create_command_builder {
        this.setFlag("--dns-name-prefix", value);
        return this;
    }

    /** An IP address assigned to the Kubernetes DNS service. */
    dnsServiceIp(value: string): az_aks_create_command_builder {
        this.setFlag("--dns-service-ip", value);
        return this;
    }

    /** A specific IP address and netmask for the Docker bridge, using standard CIDR notation. */
    dockerBridgeAddress(value: string): az_aks_create_command_builder {
        this.setFlag("--docker-bridge-address", value);
        return this;
    }

    /** Enable managed AAD feature for cluster. */
    enableAad(value: string): az_aks_create_command_builder {
        this.setFlag("--enable-aad", value);
        return this;
    }

    /** Enable the Kubernetes addons in a comma-separated list. */
    enableAddons(value: string): az_aks_create_command_builder {
        this.setFlag("--enable-addons", value);
        return this;
    }

    /** Enable cluster autoscaler, default value is false. */
    enableClusterAutoscaler(value: string): az_aks_create_command_builder {
        this.setFlag("--enable-cluster-autoscaler", value);
        return this;
    }

    /** Using a system assigned managed identity to manage cluster resource group. */
    enableManagedIdentity(value: string): az_aks_create_command_builder {
        this.setFlag("--enable-managed-identity", value);
        return this;
    }

    /** Enable VMSS node public IP. */
    enableNodePublicIp(value: string): az_aks_create_command_builder {
        this.setFlag("--enable-node-public-ip", value);
        return this;
    }

    /** Enable private cluster. */
    enablePrivateCluster(value: string): az_aks_create_command_builder {
        this.setFlag("--enable-private-cluster", value);
        return this;
    }

    /** Enable Kubernetes Role-Based Access Control. Default: enabled. */
    enableRbac(value: string): az_aks_create_command_builder {
        this.setFlag("--enable-rbac", value);
        return this;
    }

    /** Generate SSH public and private key files if missing. The keys will be stored in the ~/.ssh directory. */
    generateSshKeys(value: string): az_aks_create_command_builder {
        this.setFlag("--generate-ssh-keys", value);
        return this;
    }

    /** Version of Kubernetes to use for creating the cluster, such as "1.16.9". */
    kubernetesVersion(value: string): az_aks_create_command_builder {
        this.setFlag("--kubernetes-version", value);
        return this;
    }

    /** Load balancer idle timeout in minutes. */
    loadBalancerIdleTimeout(value: string): az_aks_create_command_builder {
        this.setFlag("--load-balancer-idle-timeout", value);
        return this;
    }

    /** Load balancer managed outbound IP count. */
    loadBalancerManagedOutboundIpCount(value: string): az_aks_create_command_builder {
        this.setFlag("--load-balancer-managed-outbound-ip-count", value);
        return this;
    }

    /** Load balancer outbound IP prefix resource IDs. */
    loadBalancerOutboundIpPrefixes(value: string): az_aks_create_command_builder {
        this.setFlag("--load-balancer-outbound-ip-prefixes", value);
        return this;
    }

    /** Load balancer outbound IP resource IDs. */
    loadBalancerOutboundIps(value: string): az_aks_create_command_builder {
        this.setFlag("--load-balancer-outbound-ips", value);
        return this;
    }

    /** Load balancer outbound allocated ports. */
    loadBalancerOutboundPorts(value: string): az_aks_create_command_builder {
        this.setFlag("--load-balancer-outbound-ports", value);
        return this;
    }

    /** Azure Load Balancer SKU selection for your cluster. basic or standard. */
    loadBalancerSku(value: string): az_aks_create_command_builder {
        this.setFlag("--load-balancer-sku", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_aks_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Maximum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [1, 100]. */
    maxCount(value: string): az_aks_create_command_builder {
        this.setFlag("--max-count", value);
        return this;
    }

    /** The maximum number of pods deployable to a node. */
    maxPods(value: string): az_aks_create_command_builder {
        this.setFlag("--max-pods", value);
        return this;
    }

    /** Minimum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [1, 100]. */
    minCount(value: string): az_aks_create_command_builder {
        this.setFlag("--min-count", value);
        return this;
    }

    /** The Kubernetes network plugin to use. */
    networkPlugin(value: 'azure' | 'kubenet'): az_aks_create_command_builder {
        this.setFlag("--network-plugin", value);
        return this;
    }

    /** The Kubernetes network policy to use. */
    networkPolicy(value: string): az_aks_create_command_builder {
        this.setFlag("--network-policy", value);
        return this;
    }

    /** Do not use or create a local SSH key. */
    noSshKey(value: string): az_aks_create_command_builder {
        this.setFlag("--no-ssh-key", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_aks_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Number of nodes in the Kubernetes node pool. After creating a cluster, you can change the size of its node pool with `az aks scale`. */
    nodeCount(value: string): az_aks_create_command_builder {
        this.setFlag("--node-count", value);
        return this;
    }

    /** ResourceId of the disk encryption set to use for enabling encryption at rest on agent node os disk. */
    nodeOsdiskDiskencryptionsetId(value: string): az_aks_create_command_builder {
        this.setFlag("--node-osdisk-diskencryptionset-id", value);
        return this;
    }

    /** Size in GB of the OS disk for each node in the node pool. Minimum 30 GB. */
    nodeOsdiskSize(value: string): az_aks_create_command_builder {
        this.setFlag("--node-osdisk-size", value);
        return this;
    }

    /** Size of Virtual Machines to create as Kubernetes nodes. */
    nodeVmSize(value: string): az_aks_create_command_builder {
        this.setFlag("--node-vm-size", value);
        return this;
    }

    /** Space-separated labels: key[=value] [key[=value] ...]. You can not change the node labels through CLI after creation. See <a href="https://aka.ms/node-labels">https://aka.ms/node-labels</a> for syntax of labels. */
    nodepoolLabels(value: string): az_aks_create_command_builder {
        this.setFlag("--nodepool-labels", value);
        return this;
    }

    /** Node pool name, up to 12 alphanumeric characters. */
    nodepoolName(value: string): az_aks_create_command_builder {
        this.setFlag("--nodepool-name", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    nodepoolTags(value: string): az_aks_create_command_builder {
        this.setFlag("--nodepool-tags", value);
        return this;
    }

    /** How outbound traffic will be configured for a cluster. */
    outboundType(value: 'loadBalancer' | 'userDefinedRouting'): az_aks_create_command_builder {
        this.setFlag("--outbound-type", value);
        return this;
    }

    /** A CIDR notation IP range from which to assign pod IPs when kubenet is used. */
    podCidr(value: string): az_aks_create_command_builder {
        this.setFlag("--pod-cidr", value);
        return this;
    }

    /** A CIDR notation IP range from which to assign service cluster IPs. */
    serviceCidr(value: string): az_aks_create_command_builder {
        this.setFlag("--service-cidr", value);
        return this;
    }

    /** Service principal used for authentication to Azure APIs. */
    servicePrincipal(value: string): az_aks_create_command_builder {
        this.setFlag("--service-principal", value);
        return this;
    }

    /** Skip role assignment for subnet (advanced networking). */
    skipSubnetRoleAssignment(value: string): az_aks_create_command_builder {
        this.setFlag("--skip-subnet-role-assignment", value);
        return this;
    }

    /** Public key path or key contents to install on node VMs for SSH access. For example, 'ssh-rsa AAAAB...snip...UcyupgH azureuser@linuxvm'. */
    sshKeyValue(value: string): az_aks_create_command_builder {
        this.setFlag("--ssh-key-value", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_aks_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Enable a paid managed cluster service with a financially backed SLA. */
    uptimeSla(value: string): az_aks_create_command_builder {
        this.setFlag("--uptime-sla", value);
        return this;
    }

    /** Agent pool vm set type. VirtualMachineScaleSets or AvailabilitySet. */
    vmSetType(value: string): az_aks_create_command_builder {
        this.setFlag("--vm-set-type", value);
        return this;
    }

    /** The ID of a subnet in an existing VNet into which to deploy the cluster. */
    vnetSubnetId(value: string): az_aks_create_command_builder {
        this.setFlag("--vnet-subnet-id", value);
        return this;
    }

    /** Password to create on Windows node VMs. */
    windowsAdminPassword(value: string): az_aks_create_command_builder {
        this.setFlag("--windows-admin-password", value);
        return this;
    }

    /** Username to create on Windows node VMs. */
    windowsAdminUsername(value: string): az_aks_create_command_builder {
        this.setFlag("--windows-admin-username", value);
        return this;
    }

    /** The resource ID of an existing Log Analytics Workspace to use for storing monitoring data. If not specified, uses the default Log Analytics Workspace if it exists, otherwise creates one. */
    workspaceResourceId(value: string): az_aks_create_command_builder {
        this.setFlag("--workspace-resource-id", value);
        return this;
    }

    /** Availability zones where agent nodes will be placed. */
    zones(value: '1' | '2' | '3'): az_aks_create_command_builder {
        this.setFlag("--zones", value);
        return this;
    }
}

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
class az_aks_delete_command_builder extends CommandBuilder<az_aks_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the managed cluster. */
    name(value: string): az_aks_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_aks_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_aks_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_aks_disable_addons_command_builder extends CommandBuilder<az_aks_disable_addons_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, addons: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.addons(addons)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Disable the Kubernetes addons in a comma-separated list. */
    addons(value: string): az_aks_disable_addons_command_builder {
        this.setFlag("--addons", value);
        return this;
    }

    /** Name of the managed cluster. */
    name(value: string): az_aks_disable_addons_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_disable_addons_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_aks_disable_addons_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_disable_addons_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_aks_enable_addons_command_builder extends CommandBuilder<az_aks_enable_addons_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, addons: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.addons(addons)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Enable the Kubernetes addons in a comma-separated list. */
    addons(value: string): az_aks_enable_addons_command_builder {
        this.setFlag("--addons", value);
        return this;
    }

    /** Name of the managed cluster. */
    name(value: string): az_aks_enable_addons_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_enable_addons_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_aks_enable_addons_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of an existing subnet to use with the virtual-node add-on. */
    subnetName(value: string): az_aks_enable_addons_command_builder {
        this.setFlag("--subnet-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_enable_addons_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The resource ID of an existing Log Analytics Workspace to use for storing monitoring data. */
    workspaceResourceId(value: string): az_aks_enable_addons_command_builder {
        this.setFlag("--workspace-resource-id", value);
        return this;
    }
}

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
class az_aks_get_credentials_command_builder extends CommandBuilder<az_aks_get_credentials_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the managed cluster. */
    name(value: string): az_aks_get_credentials_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_get_credentials_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Get cluster administrator credentials.  Default: cluster user credentials. */
    admin(value: string): az_aks_get_credentials_command_builder {
        this.setFlag("--admin", value);
        return this;
    }

    /** If specified, overwrite the default context name. */
    context(value: string): az_aks_get_credentials_command_builder {
        this.setFlag("--context", value);
        return this;
    }

    /** Kubernetes configuration file to update. Use "-" to print YAML to stdout instead. */
    file(value: string): az_aks_get_credentials_command_builder {
        this.setFlag("--file", value);
        return this;
    }

    /** Overwrite any existing cluster entry with the same name. */
    overwriteExisting(value: string): az_aks_get_credentials_command_builder {
        this.setFlag("--overwrite-existing", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_get_credentials_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_aks_get_upgrades_command_builder extends CommandBuilder<az_aks_get_upgrades_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the managed cluster. */
    name(value: string): az_aks_get_upgrades_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_get_upgrades_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_get_upgrades_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_aks_get_versions_command_builder extends CommandBuilder<az_aks_get_versions_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string) {
        super(commandPath, resultDataTypeName);
        this.location(location)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_aks_get_versions_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_get_versions_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_aks_install_cli_command_builder extends CommandBuilder<az_aks_install_cli_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Version of kubectl to install. */
    clientVersion(value: string): az_aks_install_cli_command_builder {
        this.setFlag("--client-version", value);
        return this;
    }

    /** Path at which to install kubectl. */
    installLocation(value: string): az_aks_install_cli_command_builder {
        this.setFlag("--install-location", value);
        return this;
    }

    /** Path at which to install kubelogin. */
    kubeloginInstallLocation(value: string): az_aks_install_cli_command_builder {
        this.setFlag("--kubelogin-install-location", value);
        return this;
    }

    /** Version of kubelogin to install. */
    kubeloginVersion(value: string): az_aks_install_cli_command_builder {
        this.setFlag("--kubelogin-version", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_install_cli_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_aks_list_command_builder extends CommandBuilder<az_aks_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_aks_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_aks_remove_dev_spaces_command_builder extends CommandBuilder<az_aks_remove_dev_spaces_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the managed cluster. */
    name(value: string): az_aks_remove_dev_spaces_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_remove_dev_spaces_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_remove_dev_spaces_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_aks_remove_dev_spaces_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_aks_rotate_certs_command_builder extends CommandBuilder<az_aks_rotate_certs_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the managed cluster. */
    name(value: string): az_aks_rotate_certs_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_rotate_certs_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_aks_rotate_certs_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_rotate_certs_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_aks_rotate_certs_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_aks_scale_command_builder extends CommandBuilder<az_aks_scale_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, nodeCount: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.nodeCount(nodeCount)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the managed cluster. */
    name(value: string): az_aks_scale_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Number of nodes in the Kubernetes node pool. */
    nodeCount(value: string): az_aks_scale_command_builder {
        this.setFlag("--node-count", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_scale_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_aks_scale_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Node pool name, up to 12 alphanumeric characters. */
    nodepoolName(value: string): az_aks_scale_command_builder {
        this.setFlag("--nodepool-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_scale_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_aks_show_command_builder extends CommandBuilder<az_aks_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the managed cluster. */
    name(value: string): az_aks_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_aks_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_aks_update_command_builder extends CommandBuilder<az_aks_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the managed cluster. */
    name(value: string): az_aks_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Comma seperated list of aad group object IDs that will be set as cluster admin. */
    aadAdminGroupObjectIds(value: string): az_aks_update_command_builder {
        this.setFlag("--aad-admin-group-object-ids", value);
        return this;
    }

    /** The ID of an Azure Active Directory tenant. */
    aadTenantId(value: string): az_aks_update_command_builder {
        this.setFlag("--aad-tenant-id", value);
        return this;
    }

    /** Comma seperated list of authorized apiserver IP ranges. Set to "" to allow all traffic on a previously restricted cluster. Set to 0.0.0.0/32 to restrict apiserver traffic to node pools. */
    apiServerAuthorizedIpRanges(value: string): az_aks_update_command_builder {
        this.setFlag("--api-server-authorized-ip-ranges", value);
        return this;
    }

    /** Grant the 'acrpull' role assignment to the ACR specified by name or resource ID. */
    attachAcr(value: string): az_aks_update_command_builder {
        this.setFlag("--attach-acr", value);
        return this;
    }

    /** Space-separated list of key=value pairs for configuring cluster autoscaler. Pass an empty string to clear the profile. */
    clusterAutoscalerProfile(value: string): az_aks_update_command_builder {
        this.setFlag("--cluster-autoscaler-profile", value);
        return this;
    }

    /** Disable the 'acrpull' role assignment to the ACR specified by name or resource ID. */
    detachAcr(value: string): az_aks_update_command_builder {
        this.setFlag("--detach-acr", value);
        return this;
    }

    /** Disable cluster autoscaler. */
    disableClusterAutoscaler(value: string): az_aks_update_command_builder {
        this.setFlag("--disable-cluster-autoscaler", value);
        return this;
    }

    /** Enable managed AAD feature for cluster. */
    enableAad(value: string): az_aks_update_command_builder {
        this.setFlag("--enable-aad", value);
        return this;
    }

    /** Enable cluster autoscaler. */
    enableClusterAutoscaler(value: string): az_aks_update_command_builder {
        this.setFlag("--enable-cluster-autoscaler", value);
        return this;
    }

    /** Load balancer idle timeout in minutes. */
    loadBalancerIdleTimeout(value: string): az_aks_update_command_builder {
        this.setFlag("--load-balancer-idle-timeout", value);
        return this;
    }

    /** Load balancer managed outbound IP count. */
    loadBalancerManagedOutboundIpCount(value: string): az_aks_update_command_builder {
        this.setFlag("--load-balancer-managed-outbound-ip-count", value);
        return this;
    }

    /** Load balancer outbound IP prefix resource IDs. */
    loadBalancerOutboundIpPrefixes(value: string): az_aks_update_command_builder {
        this.setFlag("--load-balancer-outbound-ip-prefixes", value);
        return this;
    }

    /** Load balancer outbound IP resource IDs. */
    loadBalancerOutboundIps(value: string): az_aks_update_command_builder {
        this.setFlag("--load-balancer-outbound-ips", value);
        return this;
    }

    /** Load balancer outbound allocated ports. */
    loadBalancerOutboundPorts(value: string): az_aks_update_command_builder {
        this.setFlag("--load-balancer-outbound-ports", value);
        return this;
    }

    /** Maximum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [1, 100]. */
    maxCount(value: string): az_aks_update_command_builder {
        this.setFlag("--max-count", value);
        return this;
    }

    /** Minimum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [1, 100]. */
    minCount(value: string): az_aks_update_command_builder {
        this.setFlag("--min-count", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_aks_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Update min-count or max-count for cluster autoscaler. */
    updateClusterAutoscaler(value: string): az_aks_update_command_builder {
        this.setFlag("--update-cluster-autoscaler", value);
        return this;
    }

    /** Enable a paid managed cluster service with a financially backed SLA. */
    uptimeSla(value: string): az_aks_update_command_builder {
        this.setFlag("--uptime-sla", value);
        return this;
    }
}

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
class az_aks_update_credentials_command_builder extends CommandBuilder<az_aks_update_credentials_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the managed cluster. */
    name(value: string): az_aks_update_credentials_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_update_credentials_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The ID of an Azure Active Directory client application. This argument is required if `--reset-aad` is specified. */
    aadClientAppId(value: string): az_aks_update_credentials_command_builder {
        this.setFlag("--aad-client-app-id", value);
        return this;
    }

    /** The ID of an Azure Active Directory server application. This argument is required if `--reset-aad` is specified. */
    aadServerAppId(value: string): az_aks_update_credentials_command_builder {
        this.setFlag("--aad-server-app-id", value);
        return this;
    }

    /** The secret of an Azure Active Directory server application. This argument is required if `--reset-aad` is specified. */
    aadServerAppSecret(value: string): az_aks_update_credentials_command_builder {
        this.setFlag("--aad-server-app-secret", value);
        return this;
    }

    /** Tenant ID associated with Azure Active Directory. */
    aadTenantId(value: string): az_aks_update_credentials_command_builder {
        this.setFlag("--aad-tenant-id", value);
        return this;
    }

    /** Secret associated with the service principal. This argument is required if `--service-principal` is specified. */
    clientSecret(value: string): az_aks_update_credentials_command_builder {
        this.setFlag("--client-secret", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_aks_update_credentials_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Reset Azure Active Directory configuration for a managed cluster. */
    resetAad(value: string): az_aks_update_credentials_command_builder {
        this.setFlag("--reset-aad", value);
        return this;
    }

    /** Reset service principal for a managed cluster. */
    resetServicePrincipal(value: string): az_aks_update_credentials_command_builder {
        this.setFlag("--reset-service-principal", value);
        return this;
    }

    /** Service principal used for authentication to Azure APIs. This argument is required if `--reset-service-principal` is specified. */
    servicePrincipal(value: string): az_aks_update_credentials_command_builder {
        this.setFlag("--service-principal", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_update_credentials_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_aks_upgrade_command_builder extends CommandBuilder<az_aks_upgrade_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, kubernetesVersion: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.kubernetesVersion(kubernetesVersion)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Version of Kubernetes to upgrade the cluster to, such as "1.16.9". */
    kubernetesVersion(value: string): az_aks_upgrade_command_builder {
        this.setFlag("--kubernetes-version", value);
        return this;
    }

    /** Name of the managed cluster. */
    name(value: string): az_aks_upgrade_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_upgrade_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Upgrade the cluster control plane only. If not specified, both control plane AND all node pools will be upgraded. */
    controlPlaneOnly(value: string): az_aks_upgrade_command_builder {
        this.setFlag("--control-plane-only", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_aks_upgrade_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_upgrade_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_aks_upgrade_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_aks_use_dev_spaces_command_builder extends CommandBuilder<az_aks_use_dev_spaces_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the managed cluster. */
    name(value: string): az_aks_use_dev_spaces_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_use_dev_spaces_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The endpoint type to be used for a Azure Dev Spaces controller. See <a href="https://aka.ms/azds-networking">https://aka.ms/azds-networking</a> for more information. */
    endpoint(value: 'None' | 'Private' | 'Public'): az_aks_use_dev_spaces_command_builder {
        this.setFlag("--endpoint", value);
        return this;
    }

    /** Name of the new or existing dev space to select. Defaults to an interactive selection experience. */
    space(value: string): az_aks_use_dev_spaces_command_builder {
        this.setFlag("--space", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_use_dev_spaces_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Update to the latest Azure Dev Spaces client components. */
    update(value: string): az_aks_use_dev_spaces_command_builder {
        this.setFlag("--update", value);
        return this;
    }

    /** Do not prompt for confirmation. Requires --space. */
    yes(value: string): az_aks_use_dev_spaces_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_aks_wait_command_builder extends CommandBuilder<az_aks_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the managed cluster. */
    name(value: string): az_aks_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aks_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_aks_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_aks_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_aks_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_aks_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_aks_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aks_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_aks_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_aks_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
}
