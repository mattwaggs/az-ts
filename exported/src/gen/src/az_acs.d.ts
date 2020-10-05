import { CommandBuilder } from '../base';
import { az_acs_dcos_browse_command_result } from './models/az_acs_dcos_browse_command_result';
import { az_acs_dcos_install_cli_command_result } from './models/az_acs_dcos_install_cli_command_result';
import { az_acs_kubernetes_browse_command_result } from './models/az_acs_kubernetes_browse_command_result';
import { az_acs_kubernetes_get_credentials_command_result } from './models/az_acs_kubernetes_get_credentials_command_result';
import { az_acs_kubernetes_install_cli_command_result } from './models/az_acs_kubernetes_install_cli_command_result';
import { az_acs_browse_command_result } from './models/az_acs_browse_command_result';
import { az_acs_create_command_result } from './models/az_acs_create_command_result';
import { az_acs_delete_command_result } from './models/az_acs_delete_command_result';
import { az_acs_list_command_result } from './models/az_acs_list_command_result';
import { az_acs_list_locations_command_result } from './models/az_acs_list_locations_command_result';
import { az_acs_scale_command_result } from './models/az_acs_scale_command_result';
import { az_acs_show_command_result } from './models/az_acs_show_command_result';
import { az_acs_wait_command_result } from './models/az_acs_wait_command_result';
/** Commands to manage a DC/OS-orchestrated Azure Container Service. */
export declare class az_acs_dcos {
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
    static browse(name: string, resourceGroup: string): az_acs_dcos_browse_command_builder;
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
    static install_cli(): az_acs_dcos_install_cli_command_builder;
}
/** Commands to manage a Kubernetes-orchestrated Azure Container Service. */
export declare class az_acs_kubernetes {
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
    static browse(name: string, resourceGroup: string): az_acs_kubernetes_browse_command_builder;
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
    static get_credentials(name: string, resourceGroup: string): az_acs_kubernetes_get_credentials_command_builder;
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
    static install_cli(): az_acs_kubernetes_install_cli_command_builder;
}
/** Manage Azure Container Services. */
export declare class az_acs {
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
    static browse(name: string, resourceGroup: string): az_acs_browse_command_builder;
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
    static create(name: string, resourceGroup: string): az_acs_create_command_builder;
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
    static delete(name: string, resourceGroup: string): az_acs_delete_command_builder;
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
    static list(): az_acs_list_command_builder;
    /**
     * List locations where Azure Container Service is in preview and in production.
     *
     * Syntax:
     * ```
     * az acs list-locations [--subscription]
     * ```
     */
    static list_locations(): az_acs_list_locations_command_builder;
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
    static scale(name: string, newAgentCount: string, resourceGroup: string): az_acs_scale_command_builder;
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
    static show(name: string, resourceGroup: string): az_acs_show_command_builder;
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
    static wait(name: string, resourceGroup: string): az_acs_wait_command_builder;
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
declare class az_acs_dcos_browse_command_builder extends CommandBuilder<az_acs_dcos_browse_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the container service. You can configure the default using `az configure --defaults acs=<name>`. */
    name(value: string): az_acs_dcos_browse_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_acs_dcos_browse_command_builder;
    /** Do not open browser after opening a proxy to the cluster web user interface. */
    disableBrowser(value: string): az_acs_dcos_browse_command_builder;
    /** Path to an SSH key file to use. */
    sshKeyFile(value: string): az_acs_dcos_browse_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_acs_dcos_browse_command_builder;
}
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
declare class az_acs_dcos_install_cli_command_builder extends CommandBuilder<az_acs_dcos_install_cli_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Version of kubectl to install. */
    clientVersion(value: string): az_acs_dcos_install_cli_command_builder;
    /** Path at which to install kubectl. */
    installLocation(value: string): az_acs_dcos_install_cli_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_acs_dcos_install_cli_command_builder;
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
declare class az_acs_kubernetes_browse_command_builder extends CommandBuilder<az_acs_kubernetes_browse_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the container service. You can configure the default using `az configure --defaults acs=<name>`. */
    name(value: string): az_acs_kubernetes_browse_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_acs_kubernetes_browse_command_builder;
    /** Do not open browser after opening a proxy to the cluster web user interface. */
    disableBrowser(value: string): az_acs_kubernetes_browse_command_builder;
    /** Path to an SSH key file to use. */
    sshKeyFile(value: string): az_acs_kubernetes_browse_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_acs_kubernetes_browse_command_builder;
}
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
declare class az_acs_kubernetes_get_credentials_command_builder extends CommandBuilder<az_acs_kubernetes_get_credentials_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the container service. You can configure the default using `az configure --defaults acs=<name>`. */
    name(value: string): az_acs_kubernetes_get_credentials_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_acs_kubernetes_get_credentials_command_builder;
    /** Where to install the kubectl config file. */
    file(value: string): az_acs_kubernetes_get_credentials_command_builder;
    /** If specified, overwrite any existing credentials. */
    overwriteExisting(value: string): az_acs_kubernetes_get_credentials_command_builder;
    /** Path to an SSH key file to use. */
    sshKeyFile(value: string): az_acs_kubernetes_get_credentials_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_acs_kubernetes_get_credentials_command_builder;
}
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
declare class az_acs_kubernetes_install_cli_command_builder extends CommandBuilder<az_acs_kubernetes_install_cli_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Version of kubectl to install. */
    clientVersion(value: string): az_acs_kubernetes_install_cli_command_builder;
    /** Path at which to install kubectl. */
    installLocation(value: string): az_acs_kubernetes_install_cli_command_builder;
    /** Path at which to install kubelogin. */
    kubeloginInstallLocation(value: string): az_acs_kubernetes_install_cli_command_builder;
    /** Version of kubelogin to install. */
    kubeloginVersion(value: string): az_acs_kubernetes_install_cli_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_acs_kubernetes_install_cli_command_builder;
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
declare class az_acs_browse_command_builder extends CommandBuilder<az_acs_browse_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the container service. You can configure the default using `az configure --defaults acs=<name>`. */
    name(value: string): az_acs_browse_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_acs_browse_command_builder;
    /** Do not open browser after opening a proxy to the cluster web user interface. */
    disableBrowser(value: string): az_acs_browse_command_builder;
    /** If set a path to an SSH key to use, only applies to DCOS. */
    sshKeyFile(value: string): az_acs_browse_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_acs_browse_command_builder;
}
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
declare class az_acs_create_command_builder extends CommandBuilder<az_acs_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the container service. You can configure the default using `az configure --defaults acs=<name>`. */
    name(value: string): az_acs_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_acs_create_command_builder;
    /** The adminstration password for Windows nodes. Only available if --windows=true. */
    adminPassword(value: string): az_acs_create_command_builder;
    /** User name for the Linux Virtual Machines. */
    adminUsername(value: string): az_acs_create_command_builder;
    /** Set the default number of agents for the agent pools. */
    agentCount(value: string): az_acs_create_command_builder;
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. Set the default disk size for agent pools vms. Unit in GB. Default: corresponding vmsize disk size. */
    agentOsdiskSize(value: string): az_acs_create_command_builder;
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. Set the default ports exposed on the agent pools. Only usable for non-Kubernetes. Default: 8080,4000,80. */
    agentPorts(value: string): az_acs_create_command_builder;
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. The file or dictionary representation of the agent profiles. Note it will override any agent settings once set. */
    agentProfiles(value: string): az_acs_create_command_builder;
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. Set default storage profile for agent pools. Default: varies based on Orchestrator. */
    agentStorageProfile(value: 'ManagedDisks' | 'StorageAccount'): az_acs_create_command_builder;
    /** Set the default size for agent pools vms. */
    agentVmSize(value: string): az_acs_create_command_builder;
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. Set the default custom vnet subnet id for agent pools. Note agent need to used the same vnet if master set. Default: "". */
    agentVnetSubnetId(value: string): az_acs_create_command_builder;
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. Use API version of ACS to perform az acs operations. Available options: 2017-01-31, 2017-07-01. Default: the latest version for the location. */
    apiVersion(value: string): az_acs_create_command_builder;
    /** Secret associated with the service principal. This argument is required if `--service-principal` is specified. */
    clientSecret(value: string): az_acs_create_command_builder;
    /** Sets the Domain name prefix for the cluster. The concatenation of the domain name and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. */
    dnsPrefix(value: string): az_acs_create_command_builder;
    /** Generate SSH public and private key files if missing. */
    generateSshKeys(value: string): az_acs_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_acs_create_command_builder;
    /** The number of masters for the cluster. */
    masterCount(value: string): az_acs_create_command_builder;
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. The first consecutive ip used to specify static ip block. */
    masterFirstConsecutiveStaticIp(value: string): az_acs_create_command_builder;
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. The disk size for master pool vms. Unit in GB. Default: corresponding vmsize disk size. */
    masterOsdiskSize(value: string): az_acs_create_command_builder;
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. The file or dictionary representation of the master profile. Note it will override any master settings once set. */
    masterProfile(value: string): az_acs_create_command_builder;
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. Default: varies based on Orchestrator. */
    masterStorageProfile(value: 'ManagedDisks' | 'StorageAccount'): az_acs_create_command_builder;
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. */
    masterVmSize(value: string): az_acs_create_command_builder;
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. The custom vnet subnet id. Note agent need to used the same vnet if master set. Default: "". */
    masterVnetSubnetId(value: string): az_acs_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_acs_create_command_builder;
    /** The type of orchestrator used to manage the applications on the cluster. */
    orchestratorType(value: 'Custom' | 'DCOS' | 'DockerCE' | 'Kubernetes' | 'Swarm'): az_acs_create_command_builder;
    /** Feature in preview, only in canadacentral, canadaeast, centralindia, koreasouth, koreacentral, southindia, uksouth, ukwest, westcentralus, westindia, westus2. Use Orchestrator Version to specify the semantic version for your choice of orchestrator. */
    orchestratorVersion(value: string): az_acs_create_command_builder;
    /** Service principal used for authentication to Azure APIs. */
    servicePrincipal(value: string): az_acs_create_command_builder;
    /** Configure all linux machines with the SSH RSA public key string.  Your key should include three parts, for example 'ssh-rsa AAAAB...snip...UcyupgH azureuser@linuxvm. */
    sshKeyValue(value: string): az_acs_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_acs_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_acs_create_command_builder;
    /** Generate and validate the ARM template without creating any resources. */
    validate(value: string): az_acs_create_command_builder;
    /** If true, set the default osType of agent pools to be Windows. */
    windows(value: string): az_acs_create_command_builder;
}
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
declare class az_acs_delete_command_builder extends CommandBuilder<az_acs_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the container service. You can configure the default using `az configure --defaults acs=<name>`. */
    name(value: string): az_acs_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_acs_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_acs_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_acs_delete_command_builder;
}
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
declare class az_acs_list_command_builder extends CommandBuilder<az_acs_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_acs_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_acs_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_acs_list_command_builder;
}
/**
 * List locations where Azure Container Service is in preview and in production.
 *
 * Syntax:
 * ```
 * az acs list-locations [--subscription]
 * ```
 */
declare class az_acs_list_locations_command_builder extends CommandBuilder<az_acs_list_locations_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_acs_list_locations_command_builder;
}
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
declare class az_acs_scale_command_builder extends CommandBuilder<az_acs_scale_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, newAgentCount: string, resourceGroup: string);
    /** Name of the container service. You can configure the default using `az configure --defaults acs=<name>`. */
    name(value: string): az_acs_scale_command_builder;
    /** The number of agents for the container service. */
    newAgentCount(value: string): az_acs_scale_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_acs_scale_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_acs_scale_command_builder;
}
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
declare class az_acs_show_command_builder extends CommandBuilder<az_acs_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the container service. You can configure the default using `az configure --defaults acs=<name>`. */
    name(value: string): az_acs_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_acs_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_acs_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_acs_show_command_builder;
}
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
declare class az_acs_wait_command_builder extends CommandBuilder<az_acs_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the container service. You can configure the default using `az configure --defaults acs=<name>`. */
    name(value: string): az_acs_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_acs_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_acs_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_acs_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_acs_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_acs_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_acs_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_acs_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_acs_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_acs_wait_command_builder;
}
export {};
