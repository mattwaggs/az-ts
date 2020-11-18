import { CommandBuilder } from '../base';
import { az_openshift_monitor_disable_command_result } from './models/az_openshift_monitor_disable_command_result';
import { az_openshift_monitor_enable_command_result } from './models/az_openshift_monitor_enable_command_result';
import { az_openshift_create_command_result } from './models/az_openshift_create_command_result';
import { az_openshift_delete_command_result } from './models/az_openshift_delete_command_result';
import { az_openshift_list_command_result } from './models/az_openshift_list_command_result';
import { az_openshift_scale_command_result } from './models/az_openshift_scale_command_result';
import { az_openshift_show_command_result } from './models/az_openshift_show_command_result';
import { az_openshift_wait_command_result } from './models/az_openshift_wait_command_result';
/** Commands to manage Log Analytics monitoring in an ARO 3.11 cluster. */
export declare class az_openshift_monitor {
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
    static disable(name: string, resourceGroup: string): az_openshift_monitor_disable_command_builder;
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
    static enable(name: string, resourceGroup: string, workspaceId: string): az_openshift_monitor_enable_command_builder;
}
/** Manage Azure Red Hat OpenShift 3.11 clusters. */
export declare class az_openshift {
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
    static create(name: string, resourceGroup: string): az_openshift_create_command_builder;
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
    static delete(name: string, resourceGroup: string): az_openshift_delete_command_builder;
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
    static list(): az_openshift_list_command_builder;
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
    static scale(computeCount: string, name: string, resourceGroup: string): az_openshift_scale_command_builder;
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
    static show(name: string, resourceGroup: string): az_openshift_show_command_builder;
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
    static wait(name: string, resourceGroup: string): az_openshift_wait_command_builder;
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
declare class az_openshift_monitor_disable_command_builder extends CommandBuilder<az_openshift_monitor_disable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the managed OpenShift cluster. */
    name(value: string): az_openshift_monitor_disable_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_openshift_monitor_disable_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_openshift_monitor_disable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_openshift_monitor_disable_command_builder;
}
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
declare class az_openshift_monitor_enable_command_builder extends CommandBuilder<az_openshift_monitor_enable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, workspaceId: string);
    /** Name of the managed OpenShift cluster. */
    name(value: string): az_openshift_monitor_enable_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_openshift_monitor_enable_command_builder;
    /** The resource ID of an existing Log Analytics Workspace to use for storing monitoring data. */
    workspaceId(value: string): az_openshift_monitor_enable_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_openshift_monitor_enable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_openshift_monitor_enable_command_builder;
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
declare class az_openshift_create_command_builder extends CommandBuilder<az_openshift_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the managed OpenShift cluster. */
    name(value: string): az_openshift_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_openshift_create_command_builder;
    /** The ID of an Azure Active Directory client application. If not specified, a new Azure Active Directory client is created. */
    aadClientAppId(value: string): az_openshift_create_command_builder;
    /** The secret of an Azure Active Directory client application. */
    aadClientAppSecret(value: string): az_openshift_create_command_builder;
    /** The ID of an Azure Active Directory tenant. */
    aadTenantId(value: string): az_openshift_create_command_builder;
    /** Number of nodes in the OpenShift node pool. */
    computeCount(value: string): az_openshift_create_command_builder;
    /** Size of Virtual Machines to create as OpenShift nodes. */
    computeVmSize(value: string): az_openshift_create_command_builder;
    /** The Object ID of an Azure Active Directory Group that memberships will get synced into the OpenShift group "osa-customer-admins". If not specified, no cluster admin access will be granted. */
    customerAdminGroupId(value: string): az_openshift_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_openshift_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_openshift_create_command_builder;
    /** The CIDR used on the Subnet into which to deploy the cluster. */
    subnetPrefix(value: string): az_openshift_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_openshift_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_openshift_create_command_builder;
    /** The ID or the name of a subnet in an existing VNet into which to peer the cluster. */
    vnetPeer(value: string): az_openshift_create_command_builder;
    /** The CIDR used on the VNet into which to deploy the cluster. */
    vnetPrefix(value: string): az_openshift_create_command_builder;
    /** The resource id of an existing Log Analytics Workspace to use for storing monitoring data. */
    workspaceId(value: string): az_openshift_create_command_builder;
}
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
declare class az_openshift_delete_command_builder extends CommandBuilder<az_openshift_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the managed OpenShift cluster. */
    name(value: string): az_openshift_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_openshift_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_openshift_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_openshift_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_openshift_delete_command_builder;
}
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
declare class az_openshift_list_command_builder extends CommandBuilder<az_openshift_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_openshift_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_openshift_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_openshift_list_command_builder;
}
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
declare class az_openshift_scale_command_builder extends CommandBuilder<az_openshift_scale_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, computeCount: string, name: string, resourceGroup: string);
    /** Number of nodes in the OpenShift compute pool. */
    computeCount(value: string): az_openshift_scale_command_builder;
    /** Name of the managed OpenShift cluster. */
    name(value: string): az_openshift_scale_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_openshift_scale_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_openshift_scale_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_openshift_scale_command_builder;
}
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
declare class az_openshift_show_command_builder extends CommandBuilder<az_openshift_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the managed OpenShift cluster. */
    name(value: string): az_openshift_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_openshift_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_openshift_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_openshift_show_command_builder;
}
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
declare class az_openshift_wait_command_builder extends CommandBuilder<az_openshift_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the managed OpenShift cluster. */
    name(value: string): az_openshift_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_openshift_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_openshift_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_openshift_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_openshift_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_openshift_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_openshift_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_openshift_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_openshift_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_openshift_wait_command_builder;
}
export {};
