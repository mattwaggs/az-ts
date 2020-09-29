import { CommandBuilder } from '../base';
import { az_aro_create_command_result } from './models/az_aro_create_command_result'
import { az_aro_delete_command_result } from './models/az_aro_delete_command_result'
import { az_aro_list_command_result } from './models/az_aro_list_command_result'
import { az_aro_list_credentials_command_result } from './models/az_aro_list_credentials_command_result'
import { az_aro_show_command_result } from './models/az_aro_show_command_result'
import { az_aro_update_command_result } from './models/az_aro_update_command_result'
import { az_aro_wait_command_result } from './models/az_aro_wait_command_result'

/** Manage Azure Red Hat OpenShift clusters. */
export class az_aro {
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
    static create(masterSubnet: string, name: string, resourceGroup: string, workerSubnet: string): az_aro_create_command_builder {
        return new az_aro_create_command_builder("az aro create", masterSubnet, name, resourceGroup, workerSubnet);
    }

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
    static delete(name: string, resourceGroup: string): az_aro_delete_command_builder {
        return new az_aro_delete_command_builder("az aro delete", name, resourceGroup);
    }

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
    static list(): az_aro_list_command_builder {
        return new az_aro_list_command_builder("az aro list");
    }

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
    static list_credentials(name: string, resourceGroup: string): az_aro_list_credentials_command_builder {
        return new az_aro_list_credentials_command_builder("az aro list-credentials", name, resourceGroup);
    }

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
    static show(name: string, resourceGroup: string): az_aro_show_command_builder {
        return new az_aro_show_command_builder("az aro show", name, resourceGroup);
    }

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
    static update(name: string, resourceGroup: string): az_aro_update_command_builder {
        return new az_aro_update_command_builder("az aro update", name, resourceGroup);
    }

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
    static wait(name: string, resourceGroup: string): az_aro_wait_command_builder {
        return new az_aro_wait_command_builder("az aro wait", name, resourceGroup);
    }
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
class az_aro_create_command_builder extends CommandBuilder<az_aro_create_command_result> {
    constructor(commandPath: string, masterSubnet: string, name: string, resourceGroup: string, workerSubnet: string) {
        super(commandPath);
        this.masterSubnet(masterSubnet)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.workerSubnet(workerSubnet)
    }

    /** Name or ID of master vnet subnet.  If name is supplied, `--vnet` must be supplied. */
    masterSubnet(value: string): az_aro_create_command_builder {
        this.setFlag("--master-subnet", value);
        return this;
    }

    /** Name of cluster. */
    name(value: string): az_aro_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aro_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of worker vnet subnet.  If name is supplied, `--vnet` must be supplied. */
    workerSubnet(value: string): az_aro_create_command_builder {
        this.setFlag("--worker-subnet", value);
        return this;
    }

    /** API server visibility. */
    apiserverVisibility(value: 'Private' | 'Public'): az_aro_create_command_builder {
        this.setFlag("--apiserver-visibility", value);
        return this;
    }

    /** Client ID of cluster service principal. */
    clientId(value: string): az_aro_create_command_builder {
        this.setFlag("--client-id", value);
        return this;
    }

    /** Client secret of cluster service principal. */
    clientSecret(value: string): az_aro_create_command_builder {
        this.setFlag("--client-secret", value);
        return this;
    }

    /** Resource group of cluster. */
    clusterResourceGroup(value: string): az_aro_create_command_builder {
        this.setFlag("--cluster-resource-group", value);
        return this;
    }

    /** Domain of cluster. */
    domain(value: string): az_aro_create_command_builder {
        this.setFlag("--domain", value);
        return this;
    }

    /** Ingress visibility. */
    ingressVisibility(value: 'Private' | 'Public'): az_aro_create_command_builder {
        this.setFlag("--ingress-visibility", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_aro_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Size of master VMs. */
    masterVmSize(value: string): az_aro_create_command_builder {
        this.setFlag("--master-vm-size", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_aro_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** CIDR of pod network. */
    podCidr(value: string): az_aro_create_command_builder {
        this.setFlag("--pod-cidr", value);
        return this;
    }

    /** Pull secret of cluster. */
    pullSecret(value: string): az_aro_create_command_builder {
        this.setFlag("--pull-secret", value);
        return this;
    }

    /** CIDR of service network. */
    serviceCidr(value: string): az_aro_create_command_builder {
        this.setFlag("--service-cidr", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aro_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_aro_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Name or ID of vnet.  If name is supplied, `--vnet-resource-group` must be supplied. */
    vnet(value: string): az_aro_create_command_builder {
        this.setFlag("--vnet", value);
        return this;
    }

    /** Name of vnet resource group. */
    vnetResourceGroup(value: string): az_aro_create_command_builder {
        this.setFlag("--vnet-resource-group", value);
        return this;
    }

    /** Count of worker VMs. */
    workerCount(value: string): az_aro_create_command_builder {
        this.setFlag("--worker-count", value);
        return this;
    }

    /** Disk size in GB of worker VMs. */
    workerVmDiskSizeGb(value: string): az_aro_create_command_builder {
        this.setFlag("--worker-vm-disk-size-gb", value);
        return this;
    }

    /** Size of worker VMs. */
    workerVmSize(value: string): az_aro_create_command_builder {
        this.setFlag("--worker-vm-size", value);
        return this;
    }
}

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
class az_aro_delete_command_builder extends CommandBuilder<az_aro_delete_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of cluster. */
    name(value: string): az_aro_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aro_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_aro_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aro_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_aro_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_aro_list_command_builder extends CommandBuilder<az_aro_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_aro_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aro_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aro_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_aro_list_credentials_command_builder extends CommandBuilder<az_aro_list_credentials_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of cluster. */
    name(value: string): az_aro_list_credentials_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aro_list_credentials_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aro_list_credentials_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_aro_show_command_builder extends CommandBuilder<az_aro_show_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of cluster. */
    name(value: string): az_aro_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aro_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_aro_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aro_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_aro_update_command_builder extends CommandBuilder<az_aro_update_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of cluster. */
    name(value: string): az_aro_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aro_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_aro_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aro_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_aro_wait_command_builder extends CommandBuilder<az_aro_wait_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of cluster. */
    name(value: string): az_aro_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_aro_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_aro_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_aro_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_aro_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_aro_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_aro_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_aro_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_aro_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_aro_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
}
