import { CommandBuilder } from '../base';
import { az_container_attach_command_result } from './models/az_container_attach_command_result';
import { az_container_create_command_result } from './models/az_container_create_command_result';
import { az_container_delete_command_result } from './models/az_container_delete_command_result';
import { az_container_exec_command_result } from './models/az_container_exec_command_result';
import { az_container_export_command_result } from './models/az_container_export_command_result';
import { az_container_list_command_result } from './models/az_container_list_command_result';
import { az_container_logs_command_result } from './models/az_container_logs_command_result';
import { az_container_restart_command_result } from './models/az_container_restart_command_result';
import { az_container_show_command_result } from './models/az_container_show_command_result';
import { az_container_start_command_result } from './models/az_container_start_command_result';
import { az_container_stop_command_result } from './models/az_container_stop_command_result';
/** Manage Azure Container Instances. */
export declare class az_container {
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
    static attach(): az_container_attach_command_builder;
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
    static create(resourceGroup: string): az_container_create_command_builder;
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
    static delete(): az_container_delete_command_builder;
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
    static exec(execCommand: string): az_container_exec_command_builder;
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
    static export(file: string): az_container_export_command_builder;
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
    static list(): az_container_list_command_builder;
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
    static logs(): az_container_logs_command_builder;
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
    static restart(name: string, resourceGroup: string): az_container_restart_command_builder;
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
    static show(): az_container_show_command_builder;
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
    static start(name: string, resourceGroup: string): az_container_start_command_builder;
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
    static stop(name: string, resourceGroup: string): az_container_stop_command_builder;
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
declare class az_container_attach_command_builder extends CommandBuilder<az_container_attach_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The container to attach to. If omitted, the first container in the container group will be chosen. */
    containerName(value: string): az_container_attach_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_container_attach_command_builder;
    /** The name of the container group. */
    name(value: string): az_container_attach_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_container_attach_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_container_attach_command_builder;
}
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
declare class az_container_create_command_builder extends CommandBuilder<az_container_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_container_create_command_builder;
    /** Space-separated list of assigned identities. Assigned identities are either user assigned identities (resource IDs) and / or the system assigned identity ('[system]'). See examples for more info. */
    assignIdentity(value: string): az_container_create_command_builder;
    /** The storage account access key used to access the Azure File share. */
    azureFileVolumeAccountKey(value: string): az_container_create_command_builder;
    /** The name of the storage account that contains the Azure File share. */
    azureFileVolumeAccountName(value: string): az_container_create_command_builder;
    /** The path within the container where the azure file volume should be mounted. Must not contain colon ':'. */
    azureFileVolumeMountPath(value: string): az_container_create_command_builder;
    /** The name of the Azure File share to be mounted as a volume. */
    azureFileVolumeShareName(value: string): az_container_create_command_builder;
    /** The command line to run when the container is started, e.g. '/bin/bash -c myscript.sh'. */
    commandLine(value: string): az_container_create_command_builder;
    /** The required number of CPU cores of the containers, accurate to one decimal place. */
    cpu(value: string): az_container_create_command_builder;
    /** The dns name label for container group with public IP. */
    dnsNameLabel(value: string): az_container_create_command_builder;
    /** A list of environment variable for the container. Space-separated values in 'key=value' format. */
    environmentVariables(value: string): az_container_create_command_builder;
    /** The path to the input file. */
    file(value: string): az_container_create_command_builder;
    /** The target directory path in the git repository. Must not contain '..'. */
    gitrepoDir(value: string): az_container_create_command_builder;
    /** The path within the container where the git repo volume should be mounted. Must not contain colon ':'. */
    gitrepoMountPath(value: string): az_container_create_command_builder;
    /** The commit hash for the specified revision. */
    gitrepoRevision(value: string): az_container_create_command_builder;
    /** The URL of a git repository to be mounted as a volume. */
    gitrepoUrl(value: string): az_container_create_command_builder;
    /** The container image name. */
    image(value: string): az_container_create_command_builder;
    /** The IP address type of the container group. */
    ipAddress(value: 'Private' | 'Public'): az_container_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_container_create_command_builder;
    /** The Log Analytics workspace name or id. Use the current subscription or use --subscription flag to set the desired subscription. */
    logAnalyticsWorkspace(value: string): az_container_create_command_builder;
    /** The Log Analytics workspace key. */
    logAnalyticsWorkspaceKey(value: string): az_container_create_command_builder;
    /** The required memory of the containers in GB, accurate to one decimal place. */
    memory(value: string): az_container_create_command_builder;
    /** The name of the container group. */
    name(value: string): az_container_create_command_builder;
    /** The network profile name or id. */
    networkProfile(value: string): az_container_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_container_create_command_builder;
    /** The OS type of the containers. */
    osType(value: 'Linux' | 'Windows'): az_container_create_command_builder;
    /** A list of ports to open. Space-separated list of ports. */
    ports(value: string): az_container_create_command_builder;
    /** The network protocol to use. */
    protocol(value: 'TCP' | 'UDP'): az_container_create_command_builder;
    /** The container image registry login server. */
    registryLoginServer(value: string): az_container_create_command_builder;
    /** The password to log in container image registry server. */
    registryPassword(value: string): az_container_create_command_builder;
    /** The username to log in container image registry server. */
    registryUsername(value: string): az_container_create_command_builder;
    /** Restart policy for all containers within the container group. */
    restartPolicy(value: 'Always' | 'Never' | 'OnFailure'): az_container_create_command_builder;
    /** Role name or id the system assigned identity will have. */
    role(value: string): az_container_create_command_builder;
    /** Scope that the system assigned identity can access. */
    scope(value: string): az_container_create_command_builder;
    /** Space-separated secrets in 'key=value' format. */
    secrets(value: string): az_container_create_command_builder;
    /** The path within the container where the secrets volume should be mounted. Must not contain colon ':'. */
    secretsMountPath(value: string): az_container_create_command_builder;
    /** A list of secure environment variable for the container. Space-separated values in 'key=value' format. */
    secureEnvironmentVariables(value: string): az_container_create_command_builder;
    /** The name of the subnet when creating a new VNET or referencing an existing one. Can also reference an existing subnet by ID. */
    subnet(value: string): az_container_create_command_builder;
    /** The subnet IP address prefix to use when creating a new VNET in CIDR format. */
    subnetAddressPrefix(value: string): az_container_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_container_create_command_builder;
    /** The name of the VNET when creating a new one or referencing an existing one. Can also reference an existing vnet by ID. This allows using vnets from other resource groups. */
    vnet(value: string): az_container_create_command_builder;
    /** The IP address prefix to use when creating a new VNET in CIDR format. */
    vnetAddressPrefix(value: string): az_container_create_command_builder;
    /** The name of the VNET when creating a new one or referencing an existing one. */
    vnetName(value: string): az_container_create_command_builder;
}
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
declare class az_container_delete_command_builder extends CommandBuilder<az_container_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_container_delete_command_builder;
    /** The name of the container group. */
    name(value: string): az_container_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_container_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_container_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_container_delete_command_builder;
}
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
declare class az_container_exec_command_builder extends CommandBuilder<az_container_exec_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, execCommand: string);
    /** The command to run from within the container. */
    execCommand(value: string): az_container_exec_command_builder;
    /** The container name where to execute the command. Can be ommitted for container groups with only one container. */
    containerName(value: string): az_container_exec_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_container_exec_command_builder;
    /** The name of the container group. */
    name(value: string): az_container_exec_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_container_exec_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_container_exec_command_builder;
    /** The col size for the command output. */
    terminalColSize(value: string): az_container_exec_command_builder;
    /** The row size for the command output. */
    terminalRowSize(value: string): az_container_exec_command_builder;
}
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
declare class az_container_export_command_builder extends CommandBuilder<az_container_export_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, file: string);
    /** The file path to export the container group. */
    file(value: string): az_container_export_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_container_export_command_builder;
    /** The name of the container group. */
    name(value: string): az_container_export_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_container_export_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_container_export_command_builder;
}
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
declare class az_container_list_command_builder extends CommandBuilder<az_container_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_container_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_container_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_container_list_command_builder;
}
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
declare class az_container_logs_command_builder extends CommandBuilder<az_container_logs_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The container name to tail the logs. If omitted, the first container in the container group will be chosen. */
    containerName(value: string): az_container_logs_command_builder;
    /** Indicate to stream the tailing logs. */
    follow(value: string): az_container_logs_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_container_logs_command_builder;
    /** The name of the container group. */
    name(value: string): az_container_logs_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_container_logs_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_container_logs_command_builder;
}
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
declare class az_container_restart_command_builder extends CommandBuilder<az_container_restart_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the container group. */
    name(value: string): az_container_restart_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_container_restart_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_container_restart_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_container_restart_command_builder;
}
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
declare class az_container_show_command_builder extends CommandBuilder<az_container_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_container_show_command_builder;
    /** The name of the container group. */
    name(value: string): az_container_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_container_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_container_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_container_show_command_builder;
}
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
declare class az_container_start_command_builder extends CommandBuilder<az_container_start_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the container group. */
    name(value: string): az_container_start_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_container_start_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_container_start_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_container_start_command_builder;
}
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
declare class az_container_stop_command_builder extends CommandBuilder<az_container_stop_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the container group. */
    name(value: string): az_container_stop_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_container_stop_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_container_stop_command_builder;
}
export {};
