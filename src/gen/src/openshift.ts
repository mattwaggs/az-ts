import { CommandBuilder } from '../base';

/** Commands to manage Log Analytics monitoring. Requires "--workspace-id". */
export class az_openshift_monitor {
    /**
     * Disable Log Analytics monitoring.
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
    static az_openshift_monitor_disable(name: string, resourceGroup: string): az_openshift_monitor_disable_command_builder {
        return new az_openshift_monitor_disable_command_builder("az openshift monitor disable", name, resourceGroup);
    }

    /**
     * Enable Log Analytics monitoring. Requires "--workspace-id".
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
    static az_openshift_monitor_enable(name: string, resourceGroup: string, workspaceId: string): az_openshift_monitor_enable_command_builder {
        return new az_openshift_monitor_enable_command_builder("az openshift monitor enable", name, resourceGroup, workspaceId);
    }
}

/** Manage Azure Red Hat OpenShift Services. */
export class az_openshift {
    /**
     * Create a new managed OpenShift cluster.
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
    static az_openshift_create(name: string, resourceGroup: string): az_openshift_create_command_builder {
        return new az_openshift_create_command_builder("az openshift create", name, resourceGroup);
    }

    /**
     * Delete a managed OpenShift cluster.
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
    static az_openshift_delete(name: string, resourceGroup: string): az_openshift_delete_command_builder {
        return new az_openshift_delete_command_builder("az openshift delete", name, resourceGroup);
    }

    /**
     * List managed OpenShift clusters.
     *
     * Syntax:
     * ```
     * az openshift list [--query-examples]
     *                   [--resource-group]
     *                   [--subscription]
     * ```
     */
    static az_openshift_list(): az_openshift_list_command_builder {
        return new az_openshift_list_command_builder("az openshift list");
    }

    /**
     * Scale the compute pool in a managed OpenShift cluster.
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
    static az_openshift_scale(computeCount: string, name: string, resourceGroup: string): az_openshift_scale_command_builder {
        return new az_openshift_scale_command_builder("az openshift scale", computeCount, name, resourceGroup);
    }

    /**
     * Show the details for a managed OpenShift cluster.
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
    static az_openshift_show(name: string, resourceGroup: string): az_openshift_show_command_builder {
        return new az_openshift_show_command_builder("az openshift show", name, resourceGroup);
    }

    /**
     * Wait for a managed OpenShift cluster to reach a desired state.
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
    static az_openshift_wait(name: string, resourceGroup: string): az_openshift_wait_command_builder {
        return new az_openshift_wait_command_builder("az openshift wait", name, resourceGroup);
    }
}

/**
 * Disable Log Analytics monitoring.
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
class az_openshift_monitor_disable_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the managed OpenShift cluster. */
    name(value: string): az_openshift_monitor_disable_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_openshift_monitor_disable_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_openshift_monitor_disable_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_openshift_monitor_disable_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Enable Log Analytics monitoring. Requires "--workspace-id".
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
class az_openshift_monitor_enable_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string, workspaceId: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.workspaceId(workspaceId)
    }

    /** Name of the managed OpenShift cluster. */
    name(value: string): az_openshift_monitor_enable_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_openshift_monitor_enable_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The resource ID of an existing Log Analytics Workspace to use for storing monitoring data. */
    workspaceId(value: string): az_openshift_monitor_enable_command_builder {
        this.setFlag("--workspace-id", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_openshift_monitor_enable_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_openshift_monitor_enable_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create a new managed OpenShift cluster.
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
class az_openshift_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the managed OpenShift cluster. */
    name(value: string): az_openshift_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_openshift_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The ID of an Azure Active Directory client application. If not specified, a new Azure Active Directory client is created. */
    aadClientAppId(value: string): az_openshift_create_command_builder {
        this.setFlag("--aad-client-app-id", value);
        return this;
    }

    /** The secret of an Azure Active Directory client application. */
    aadClientAppSecret(value: string): az_openshift_create_command_builder {
        this.setFlag("--aad-client-app-secret", value);
        return this;
    }

    /** The ID of an Azure Active Directory tenant. */
    aadTenantId(value: string): az_openshift_create_command_builder {
        this.setFlag("--aad-tenant-id", value);
        return this;
    }

    /** Number of nodes in the OpenShift node pool. */
    computeCount(value: string): az_openshift_create_command_builder {
        this.setFlag("--compute-count", value);
        return this;
    }

    /** Size of Virtual Machines to create as OpenShift nodes. */
    computeVmSize(value: string): az_openshift_create_command_builder {
        this.setFlag("--compute-vm-size", value);
        return this;
    }

    /** The Object ID of an Azure Active Directory Group that memberships will get synced into the OpenShift group "osa-customer-admins". If not specified, no cluster admin access will be granted. */
    customerAdminGroupId(value: string): az_openshift_create_command_builder {
        this.setFlag("--customer-admin-group-id", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_openshift_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_openshift_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The CIDR used on the Subnet into which to deploy the cluster. */
    subnetPrefix(value: string): az_openshift_create_command_builder {
        this.setFlag("--subnet-prefix", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_openshift_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_openshift_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The ID or the name of a subnet in an existing VNet into which to peer the cluster. */
    vnetPeer(value: string): az_openshift_create_command_builder {
        this.setFlag("--vnet-peer", value);
        return this;
    }

    /** The CIDR used on the VNet into which to deploy the cluster. */
    vnetPrefix(value: string): az_openshift_create_command_builder {
        this.setFlag("--vnet-prefix", value);
        return this;
    }

    /** The resource id of an existing Log Analytics Workspace to use for storing monitoring data. */
    workspaceId(value: string): az_openshift_create_command_builder {
        this.setFlag("--workspace-id", value);
        return this;
    }
}

/**
 * Delete a managed OpenShift cluster.
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
class az_openshift_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the managed OpenShift cluster. */
    name(value: string): az_openshift_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_openshift_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_openshift_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_openshift_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_openshift_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * List managed OpenShift clusters.
 *
 * Syntax:
 * ```
 * az openshift list [--query-examples]
 *                   [--resource-group]
 *                   [--subscription]
 * ```
 */
class az_openshift_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_openshift_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_openshift_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_openshift_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Scale the compute pool in a managed OpenShift cluster.
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
class az_openshift_scale_command_builder extends CommandBuilder {
    constructor(commandPath: string, computeCount: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.computeCount(computeCount)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Number of nodes in the OpenShift compute pool. */
    computeCount(value: string): az_openshift_scale_command_builder {
        this.setFlag("--compute-count", value);
        return this;
    }

    /** Name of the managed OpenShift cluster. */
    name(value: string): az_openshift_scale_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_openshift_scale_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_openshift_scale_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_openshift_scale_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show the details for a managed OpenShift cluster.
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
class az_openshift_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the managed OpenShift cluster. */
    name(value: string): az_openshift_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_openshift_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_openshift_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_openshift_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Wait for a managed OpenShift cluster to reach a desired state.
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
class az_openshift_wait_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the managed OpenShift cluster. */
    name(value: string): az_openshift_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_openshift_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_openshift_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_openshift_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_openshift_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_openshift_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_openshift_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_openshift_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_openshift_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_openshift_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
}
