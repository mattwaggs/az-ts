import { CommandBuilder } from '../base';
import { az_mariadb_db_create_command_result } from './models/az_mariadb_db_create_command_result';
import { az_mariadb_db_delete_command_result } from './models/az_mariadb_db_delete_command_result';
import { az_mariadb_db_list_command_result } from './models/az_mariadb_db_list_command_result';
import { az_mariadb_db_show_command_result } from './models/az_mariadb_db_show_command_result';
import { az_mariadb_server_configuration_list_command_result } from './models/az_mariadb_server_configuration_list_command_result';
import { az_mariadb_server_configuration_set_command_result } from './models/az_mariadb_server_configuration_set_command_result';
import { az_mariadb_server_configuration_show_command_result } from './models/az_mariadb_server_configuration_show_command_result';
import { az_mariadb_server_firewall_rule_create_command_result } from './models/az_mariadb_server_firewall_rule_create_command_result';
import { az_mariadb_server_firewall_rule_delete_command_result } from './models/az_mariadb_server_firewall_rule_delete_command_result';
import { az_mariadb_server_firewall_rule_list_command_result } from './models/az_mariadb_server_firewall_rule_list_command_result';
import { az_mariadb_server_firewall_rule_show_command_result } from './models/az_mariadb_server_firewall_rule_show_command_result';
import { az_mariadb_server_firewall_rule_update_command_result } from './models/az_mariadb_server_firewall_rule_update_command_result';
import { az_mariadb_server_private_endpoint_connection_approve_command_result } from './models/az_mariadb_server_private_endpoint_connection_approve_command_result';
import { az_mariadb_server_private_endpoint_connection_delete_command_result } from './models/az_mariadb_server_private_endpoint_connection_delete_command_result';
import { az_mariadb_server_private_endpoint_connection_reject_command_result } from './models/az_mariadb_server_private_endpoint_connection_reject_command_result';
import { az_mariadb_server_private_endpoint_connection_show_command_result } from './models/az_mariadb_server_private_endpoint_connection_show_command_result';
import { az_mariadb_server_private_link_resource_list_command_result } from './models/az_mariadb_server_private_link_resource_list_command_result';
import { az_mariadb_server_replica_create_command_result } from './models/az_mariadb_server_replica_create_command_result';
import { az_mariadb_server_replica_list_command_result } from './models/az_mariadb_server_replica_list_command_result';
import { az_mariadb_server_replica_stop_command_result } from './models/az_mariadb_server_replica_stop_command_result';
import { az_mariadb_server_vnet_rule_create_command_result } from './models/az_mariadb_server_vnet_rule_create_command_result';
import { az_mariadb_server_vnet_rule_delete_command_result } from './models/az_mariadb_server_vnet_rule_delete_command_result';
import { az_mariadb_server_vnet_rule_list_command_result } from './models/az_mariadb_server_vnet_rule_list_command_result';
import { az_mariadb_server_vnet_rule_show_command_result } from './models/az_mariadb_server_vnet_rule_show_command_result';
import { az_mariadb_server_vnet_rule_update_command_result } from './models/az_mariadb_server_vnet_rule_update_command_result';
import { az_mariadb_server_logs_download_command_result } from './models/az_mariadb_server_logs_download_command_result';
import { az_mariadb_server_logs_list_command_result } from './models/az_mariadb_server_logs_list_command_result';
import { az_mariadb_server_create_command_result } from './models/az_mariadb_server_create_command_result';
import { az_mariadb_server_delete_command_result } from './models/az_mariadb_server_delete_command_result';
import { az_mariadb_server_georestore_command_result } from './models/az_mariadb_server_georestore_command_result';
import { az_mariadb_server_list_command_result } from './models/az_mariadb_server_list_command_result';
import { az_mariadb_server_restart_command_result } from './models/az_mariadb_server_restart_command_result';
import { az_mariadb_server_restore_command_result } from './models/az_mariadb_server_restore_command_result';
import { az_mariadb_server_show_command_result } from './models/az_mariadb_server_show_command_result';
import { az_mariadb_server_start_command_result } from './models/az_mariadb_server_start_command_result';
import { az_mariadb_server_stop_command_result } from './models/az_mariadb_server_stop_command_result';
import { az_mariadb_server_update_command_result } from './models/az_mariadb_server_update_command_result';
import { az_mariadb_server_wait_command_result } from './models/az_mariadb_server_wait_command_result';
/** Manage MariaDB databases on a server. */
export declare class az_mariadb_db {
    /**
     * Create a MariaDB database.
     *
     * Syntax:
     * ```
     * az mariadb db create --name
     *                      --resource-group
     *                      --server-name
     *                      [--charset]
     *                      [--collation]
     *                      [--subscription]
     * ```
     *
     * @param {string} name The name of the database.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     */
    static create(name: string, resourceGroup: string, serverName: string): az_mariadb_db_create_command_builder;
    /**
     * Delete a database.
     *
     * Syntax:
     * ```
     * az mariadb db delete --name
     *                      --resource-group
     *                      --server-name
     *                      [--subscription]
     *                      [--yes]
     * ```
     *
     * @param {string} name The name of the database.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     */
    static delete(name: string, resourceGroup: string, serverName: string): az_mariadb_db_delete_command_builder;
    /**
     * List the databases for a server.
     *
     * Syntax:
     * ```
     * az mariadb db list --resource-group
     *                    --server-name
     *                    [--query-examples]
     *                    [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     */
    static list(resourceGroup: string, serverName: string): az_mariadb_db_list_command_builder;
    /**
     * Show the details of a database.
     *
     * Syntax:
     * ```
     * az mariadb db show --name
     *                    --resource-group
     *                    --server-name
     *                    [--query-examples]
     *                    [--subscription]
     * ```
     *
     * @param {string} name The name of the database.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     */
    static show(name: string, resourceGroup: string, serverName: string): az_mariadb_db_show_command_builder;
}
/** Manage configuration values for a server. */
export declare class az_mariadb_server_configuration {
    /**
     * List the configuration values for a server.
     *
     * Syntax:
     * ```
     * az mariadb server configuration list [--ids]
     *                                      [--query-examples]
     *                                      [--resource-group]
     *                                      [--server-name]
     *                                      [--subscription]
     * ```
     */
    static list(): az_mariadb_server_configuration_list_command_builder;
    /**
     * Update the configuration of a server.
     *
     * Syntax:
     * ```
     * az mariadb server configuration set [--ids]
     *                                     [--name]
     *                                     [--resource-group]
     *                                     [--server-name]
     *                                     [--subscription]
     *                                     [--value]
     * ```
     */
    static set(): az_mariadb_server_configuration_set_command_builder;
    /**
     * Get the configuration for a server.".
     *
     * Syntax:
     * ```
     * az mariadb server configuration show [--ids]
     *                                      [--name]
     *                                      [--query-examples]
     *                                      [--resource-group]
     *                                      [--server-name]
     *                                      [--subscription]
     * ```
     */
    static show(): az_mariadb_server_configuration_show_command_builder;
}
/** Manage firewall rules for a server. */
export declare class az_mariadb_server_firewall_rule {
    /**
     * Create a new firewall rule for a server.
     *
     * Syntax:
     * ```
     * az mariadb server firewall-rule create --end-ip-address
     *                                        --name
     *                                        --resource-group
     *                                        --server-name
     *                                        --start-ip-address
     *                                        [--subscription]
     * ```
     *
     * @param {string} endIpAddress The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
     * @param {string} name The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     * @param {string} startIpAddress The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
     */
    static create(endIpAddress: string, name: string, resourceGroup: string, serverName: string, startIpAddress: string): az_mariadb_server_firewall_rule_create_command_builder;
    /**
     * Delete a firewall rule.
     *
     * Syntax:
     * ```
     * az mariadb server firewall-rule delete [--ids]
     *                                        [--name]
     *                                        [--resource-group]
     *                                        [--server-name]
     *                                        [--subscription]
     *                                        [--yes]
     * ```
     */
    static delete(): az_mariadb_server_firewall_rule_delete_command_builder;
    /**
     * List all firewall rules for a server.
     *
     * Syntax:
     * ```
     * az mariadb server firewall-rule list [--ids]
     *                                      [--query-examples]
     *                                      [--resource-group]
     *                                      [--server-name]
     *                                      [--subscription]
     * ```
     */
    static list(): az_mariadb_server_firewall_rule_list_command_builder;
    /**
     * Get the details of a firewall rule.
     *
     * Syntax:
     * ```
     * az mariadb server firewall-rule show [--ids]
     *                                      [--name]
     *                                      [--query-examples]
     *                                      [--resource-group]
     *                                      [--server-name]
     *                                      [--subscription]
     * ```
     */
    static show(): az_mariadb_server_firewall_rule_show_command_builder;
    /**
     * Update a firewall rule.
     *
     * Syntax:
     * ```
     * az mariadb server firewall-rule update [--add]
     *                                        [--end-ip-address]
     *                                        [--force-string]
     *                                        [--ids]
     *                                        [--name]
     *                                        [--remove]
     *                                        [--resource-group]
     *                                        [--server-name]
     *                                        [--set]
     *                                        [--start-ip-address]
     *                                        [--subscription]
     * ```
     */
    static update(): az_mariadb_server_firewall_rule_update_command_builder;
}
/** Manage MariaDB server private endpoint connections. */
export declare class az_mariadb_server_private_endpoint_connection {
    /**
     * Approve the specified private endpoint connection associated with a MariaDB server.
     *
     * Syntax:
     * ```
     * az mariadb server private-endpoint-connection approve [--description]
     *                                                       [--id]
     *                                                       [--ids]
     *                                                       [--name]
     *                                                       [--resource-group]
     *                                                       [--server-name]
     *                                                       [--subscription]
     * ```
     */
    static approve(): az_mariadb_server_private_endpoint_connection_approve_command_builder;
    /**
     * Delete the specified private endpoint connection associated with a MariaDB server.
     *
     * Syntax:
     * ```
     * az mariadb server private-endpoint-connection delete [--id]
     *                                                      [--ids]
     *                                                      [--name]
     *                                                      [--resource-group]
     *                                                      [--server-name]
     *                                                      [--subscription]
     * ```
     */
    static delete(): az_mariadb_server_private_endpoint_connection_delete_command_builder;
    /**
     * Reject the specified private endpoint connection associated with a MariaDB server.
     *
     * Syntax:
     * ```
     * az mariadb server private-endpoint-connection reject [--description]
     *                                                      [--id]
     *                                                      [--ids]
     *                                                      [--name]
     *                                                      [--resource-group]
     *                                                      [--server-name]
     *                                                      [--subscription]
     * ```
     */
    static reject(): az_mariadb_server_private_endpoint_connection_reject_command_builder;
    /**
     * Show details of a private endpoint connection associated with a MariaDB server.
     *
     * Syntax:
     * ```
     * az mariadb server private-endpoint-connection show [--id]
     *                                                    [--ids]
     *                                                    [--name]
     *                                                    [--query-examples]
     *                                                    [--resource-group]
     *                                                    [--server-name]
     *                                                    [--subscription]
     * ```
     */
    static show(): az_mariadb_server_private_endpoint_connection_show_command_builder;
}
/** Manage MariaDB server private link resources. */
export declare class az_mariadb_server_private_link_resource {
    /**
     * List the private link resources supported for a MariaDB server.
     *
     * Syntax:
     * ```
     * az mariadb server private-link-resource list [--ids]
     *                                              [--query-examples]
     *                                              [--resource-group]
     *                                              [--server-name]
     *                                              [--subscription]
     * ```
     */
    static list(): az_mariadb_server_private_link_resource_list_command_builder;
}
/** Manage read replicas. */
export declare class az_mariadb_server_replica {
    /**
     * Create a read replica for a server.
     *
     * Syntax:
     * ```
     * az mariadb server replica create --name
     *                                  --resource-group
     *                                  --source-server
     *                                  [--location]
     *                                  [--no-wait]
     *                                  [--sku-name]
     *                                  [--subscription]
     * ```
     *
     * @param {string} name Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} sourceServer The name or resource ID of the master server to the create replica for.
     */
    static create(name: string, resourceGroup: string, sourceServer: string): az_mariadb_server_replica_create_command_builder;
    /**
     * List all read replicas for a given server.
     *
     * Syntax:
     * ```
     * az mariadb server replica list [--ids]
     *                                [--query-examples]
     *                                [--resource-group]
     *                                [--server-name]
     *                                [--subscription]
     * ```
     */
    static list(): az_mariadb_server_replica_list_command_builder;
    /**
     * Stop replication to a read replica and make it a read/write server.
     *
     * Syntax:
     * ```
     * az mariadb server replica stop [--ids]
     *                                [--name]
     *                                [--resource-group]
     *                                [--subscription]
     *                                [--yes]
     * ```
     */
    static stop(): az_mariadb_server_replica_stop_command_builder;
}
/** Manage a server's virtual network rules. */
export declare class az_mariadb_server_vnet_rule {
    /**
     * Create a virtual network rule to allows access to a MariaDB server.
     *
     * Syntax:
     * ```
     * az mariadb server vnet-rule create --name
     *                                    --resource-group
     *                                    --server-name
     *                                    --subnet
     *                                    [--ignore-missing-endpoint {false, true}]
     *                                    [--subscription]
     *                                    [--vnet-name]
     * ```
     *
     * @param {string} name The name of the vnet rule.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     * @param {string} subnet Name or ID of the subnet that allows access to an Azure Postgres Server. If subnet name is provided, --vnet-name must be provided.
     */
    static create(name: string, resourceGroup: string, serverName: string, subnet: string): az_mariadb_server_vnet_rule_create_command_builder;
    /**
     * Deletes the virtual network rule with the given name.
     *
     * Syntax:
     * ```
     * az mariadb server vnet-rule delete [--ids]
     *                                    [--name]
     *                                    [--resource-group]
     *                                    [--server-name]
     *                                    [--subscription]
     * ```
     */
    static delete(): az_mariadb_server_vnet_rule_delete_command_builder;
    /**
     * Gets a list of virtual network rules in a server.
     *
     * Syntax:
     * ```
     * az mariadb server vnet-rule list [--ids]
     *                                  [--query-examples]
     *                                  [--resource-group]
     *                                  [--server-name]
     *                                  [--subscription]
     * ```
     */
    static list(): az_mariadb_server_vnet_rule_list_command_builder;
    /**
     * Gets a virtual network rule.
     *
     * Syntax:
     * ```
     * az mariadb server vnet-rule show [--ids]
     *                                  [--name]
     *                                  [--query-examples]
     *                                  [--resource-group]
     *                                  [--server-name]
     *                                  [--subscription]
     * ```
     */
    static show(): az_mariadb_server_vnet_rule_show_command_builder;
    /**
     * Update a virtual network rule.
     *
     * Syntax:
     * ```
     * az mariadb server vnet-rule update --subnet
     *                                    [--add]
     *                                    [--force-string]
     *                                    [--ids]
     *                                    [--ignore-missing-endpoint {false, true}]
     *                                    [--name]
     *                                    [--remove]
     *                                    [--resource-group]
     *                                    [--server-name]
     *                                    [--set]
     *                                    [--subscription]
     *                                    [--vnet-name]
     * ```
     *
     * @param {string} subnet Name or ID of the subnet that allows access to an Azure Postgres Server. If subnet name is provided, --vnet-name must be provided.
     */
    static update(subnet: string): az_mariadb_server_vnet_rule_update_command_builder;
}
/** Manage server logs. */
export declare class az_mariadb_server_logs {
    /**
     * Download log files.
     *
     * Syntax:
     * ```
     * az mariadb server-logs download --name
     *                                 --resource-group
     *                                 --server-name
     *                                 [--subscription]
     * ```
     *
     * @param {string} name Space-separated list of log filenames on the server to download.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     */
    static download(name: string, resourceGroup: string, serverName: string): az_mariadb_server_logs_download_command_builder;
    /**
     * List log files for a server.
     *
     * Syntax:
     * ```
     * az mariadb server-logs list --resource-group
     *                             --server-name
     *                             [--file-last-written]
     *                             [--filename-contains]
     *                             [--max-file-size]
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     */
    static list(resourceGroup: string, serverName: string): az_mariadb_server_logs_list_command_builder;
}
/** Manage MariaDB servers. */
export declare class az_mariadb_server {
    /**
     * Create a server.
     *
     * Syntax:
     * ```
     * az mariadb server create --admin-password
     *                          --admin-user
     *                          --name
     *                          --resource-group
     *                          --sku-name
     *                          [--assign-identity]
     *                          [--auto-grow {Disabled, Enabled}]
     *                          [--backup-retention]
     *                          [--geo-redundant-backup {Disabled, Enabled}]
     *                          [--infrastructure-encryption {Disabled, Enabled}]
     *                          [--location]
     *                          [--public {Disabled, Enabled}]
     *                          [--ssl-enforcement {Disabled, Enabled}]
     *                          [--storage-size]
     *                          [--subscription]
     *                          [--tags]
     *                          [--version]
     * ```
     *
     * @param {string} adminPassword The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters.
     * @param {string} adminUser Administrator username for the server. Once set, it cannot be changed.
     * @param {string} name Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} skuName The name of the sku. Follows the convention {pricing tier}_{compute generation}_{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16.
     */
    static create(adminPassword: string, adminUser: string, name: string, resourceGroup: string, skuName: string): az_mariadb_server_create_command_builder;
    /**
     * Delete a server.
     *
     * Syntax:
     * ```
     * az mariadb server delete [--ids]
     *                          [--name]
     *                          [--resource-group]
     *                          [--subscription]
     *                          [--yes]
     * ```
     */
    static delete(): az_mariadb_server_delete_command_builder;
    /**
     * Geo-restore a server from backup.
     *
     * Syntax:
     * ```
     * az mariadb server georestore --location
     *                              --source-server
     *                              [--backup-retention]
     *                              [--geo-redundant-backup]
     *                              [--ids]
     *                              [--name]
     *                              [--no-wait]
     *                              [--resource-group]
     *                              [--sku-name]
     *                              [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} sourceServer The name or ID of the source server to restore from.
     */
    static georestore(location: string, sourceServer: string): az_mariadb_server_georestore_command_builder;
    /**
     * List available servers.
     *
     * Syntax:
     * ```
     * az mariadb server list [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     */
    static list(): az_mariadb_server_list_command_builder;
    /**
     * Restart a server.
     *
     * Syntax:
     * ```
     * az mariadb server restart [--ids]
     *                           [--name]
     *                           [--resource-group]
     *                           [--subscription]
     * ```
     */
    static restart(): az_mariadb_server_restart_command_builder;
    /**
     * Restore a server from backup.
     *
     * Syntax:
     * ```
     * az mariadb server restore --pitr-time
     *                           --source-server
     *                           [--ids]
     *                           [--name]
     *                           [--no-wait]
     *                           [--resource-group]
     *                           [--subscription]
     * ```
     *
     * @param {string} restorePointInTime The point in time to restore from (ISO8601 format), e.g., 2017-04-26T02:10:00+08:00.
     * @param {string} sourceServer The name or resource ID of the source server to restore from.
     */
    static restore(restorePointInTime: string, sourceServer: string): az_mariadb_server_restore_command_builder;
    /**
     * Get the details of a server.
     *
     * Syntax:
     * ```
     * az mariadb server show [--ids]
     *                        [--name]
     *                        [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     */
    static show(): az_mariadb_server_show_command_builder;
    /**
     * Start a stopped server.
     *
     * Syntax:
     * ```
     * az mariadb server start [--ids]
     *                         [--name]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    static start(): az_mariadb_server_start_command_builder;
    /**
     * Stop a running server.
     *
     * Syntax:
     * ```
     * az mariadb server stop [--ids]
     *                        [--name]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     */
    static stop(): az_mariadb_server_stop_command_builder;
    /**
     * Update a server.
     *
     * Syntax:
     * ```
     * az mariadb server update [--add]
     *                          [--admin-password]
     *                          [--assign-identity]
     *                          [--auto-grow {Disabled, Enabled}]
     *                          [--backup-retention]
     *                          [--force-string]
     *                          [--ids]
     *                          [--name]
     *                          [--public {Disabled, Enabled}]
     *                          [--remove]
     *                          [--resource-group]
     *                          [--set]
     *                          [--sku-name]
     *                          [--ssl-enforcement {Disabled, Enabled}]
     *                          [--storage-size]
     *                          [--subscription]
     *                          [--tags]
     * ```
     */
    static update(): az_mariadb_server_update_command_builder;
    /**
     * Wait for server to satisfy certain conditions.
     *
     * Syntax:
     * ```
     * az mariadb server wait [--custom]
     *                        [--exists]
     *                        [--ids]
     *                        [--interval]
     *                        [--name]
     *                        [--resource-group]
     *                        [--subscription]
     *                        [--timeout]
     * ```
     */
    static wait(): az_mariadb_server_wait_command_builder;
}
/** Manage Azure Database for MariaDB servers. */
export declare class az_mariadb {
}
/**
 * Create a MariaDB database.
 *
 * Syntax:
 * ```
 * az mariadb db create --name
 *                      --resource-group
 *                      --server-name
 *                      [--charset]
 *                      [--collation]
 *                      [--subscription]
 * ```
 *
 * @param {string} name The name of the database.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 */
declare class az_mariadb_db_create_command_builder extends CommandBuilder<az_mariadb_db_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, serverName: string);
    /** The name of the database. */
    name(value: string): az_mariadb_db_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_db_create_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_mariadb_db_create_command_builder;
    /** The charset of the database. */
    charset(value: string): az_mariadb_db_create_command_builder;
    /** The collation of the database. */
    collation(value: string): az_mariadb_db_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_db_create_command_builder;
}
/**
 * Delete a database.
 *
 * Syntax:
 * ```
 * az mariadb db delete --name
 *                      --resource-group
 *                      --server-name
 *                      [--subscription]
 *                      [--yes]
 * ```
 *
 * @param {string} name The name of the database.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 */
declare class az_mariadb_db_delete_command_builder extends CommandBuilder<az_mariadb_db_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, serverName: string);
    /** The name of the database. */
    name(value: string): az_mariadb_db_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_db_delete_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_mariadb_db_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_db_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_mariadb_db_delete_command_builder;
}
/**
 * List the databases for a server.
 *
 * Syntax:
 * ```
 * az mariadb db list --resource-group
 *                    --server-name
 *                    [--query-examples]
 *                    [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 */
declare class az_mariadb_db_list_command_builder extends CommandBuilder<az_mariadb_db_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, serverName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_db_list_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_mariadb_db_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_mariadb_db_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_db_list_command_builder;
}
/**
 * Show the details of a database.
 *
 * Syntax:
 * ```
 * az mariadb db show --name
 *                    --resource-group
 *                    --server-name
 *                    [--query-examples]
 *                    [--subscription]
 * ```
 *
 * @param {string} name The name of the database.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 */
declare class az_mariadb_db_show_command_builder extends CommandBuilder<az_mariadb_db_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, serverName: string);
    /** The name of the database. */
    name(value: string): az_mariadb_db_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_db_show_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_mariadb_db_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_mariadb_db_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_db_show_command_builder;
}
/**
 * List the configuration values for a server.
 *
 * Syntax:
 * ```
 * az mariadb server configuration list [--ids]
 *                                      [--query-examples]
 *                                      [--resource-group]
 *                                      [--server-name]
 *                                      [--subscription]
 * ```
 */
declare class az_mariadb_server_configuration_list_command_builder extends CommandBuilder<az_mariadb_server_configuration_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_configuration_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_mariadb_server_configuration_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_configuration_list_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_mariadb_server_configuration_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_configuration_list_command_builder;
}
/**
 * Update the configuration of a server.
 *
 * Syntax:
 * ```
 * az mariadb server configuration set [--ids]
 *                                     [--name]
 *                                     [--resource-group]
 *                                     [--server-name]
 *                                     [--subscription]
 *                                     [--value]
 * ```
 */
declare class az_mariadb_server_configuration_set_command_builder extends CommandBuilder<az_mariadb_server_configuration_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_configuration_set_command_builder;
    /** The name of the server configuration. */
    name(value: string): az_mariadb_server_configuration_set_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_configuration_set_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_mariadb_server_configuration_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_configuration_set_command_builder;
    /** Value of the configuration. If not provided, configuration value will be set to default. */
    value(value: string): az_mariadb_server_configuration_set_command_builder;
}
/**
 * Get the configuration for a server.".
 *
 * Syntax:
 * ```
 * az mariadb server configuration show [--ids]
 *                                      [--name]
 *                                      [--query-examples]
 *                                      [--resource-group]
 *                                      [--server-name]
 *                                      [--subscription]
 * ```
 */
declare class az_mariadb_server_configuration_show_command_builder extends CommandBuilder<az_mariadb_server_configuration_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_configuration_show_command_builder;
    /** The name of the server configuration. */
    name(value: string): az_mariadb_server_configuration_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_mariadb_server_configuration_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_configuration_show_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_mariadb_server_configuration_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_configuration_show_command_builder;
}
/**
 * Create a new firewall rule for a server.
 *
 * Syntax:
 * ```
 * az mariadb server firewall-rule create --end-ip-address
 *                                        --name
 *                                        --resource-group
 *                                        --server-name
 *                                        --start-ip-address
 *                                        [--subscription]
 * ```
 *
 * @param {string} endIpAddress The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
 * @param {string} name The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 * @param {string} startIpAddress The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
 */
declare class az_mariadb_server_firewall_rule_create_command_builder extends CommandBuilder<az_mariadb_server_firewall_rule_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, endIpAddress: string, name: string, resourceGroup: string, serverName: string, startIpAddress: string);
    /** The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    endIpAddress(value: string): az_mariadb_server_firewall_rule_create_command_builder;
    /** The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    name(value: string): az_mariadb_server_firewall_rule_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_firewall_rule_create_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_mariadb_server_firewall_rule_create_command_builder;
    /** The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    startIpAddress(value: string): az_mariadb_server_firewall_rule_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_firewall_rule_create_command_builder;
}
/**
 * Delete a firewall rule.
 *
 * Syntax:
 * ```
 * az mariadb server firewall-rule delete [--ids]
 *                                        [--name]
 *                                        [--resource-group]
 *                                        [--server-name]
 *                                        [--subscription]
 *                                        [--yes]
 * ```
 */
declare class az_mariadb_server_firewall_rule_delete_command_builder extends CommandBuilder<az_mariadb_server_firewall_rule_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_firewall_rule_delete_command_builder;
    /** The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    name(value: string): az_mariadb_server_firewall_rule_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_firewall_rule_delete_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_mariadb_server_firewall_rule_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_firewall_rule_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_mariadb_server_firewall_rule_delete_command_builder;
}
/**
 * List all firewall rules for a server.
 *
 * Syntax:
 * ```
 * az mariadb server firewall-rule list [--ids]
 *                                      [--query-examples]
 *                                      [--resource-group]
 *                                      [--server-name]
 *                                      [--subscription]
 * ```
 */
declare class az_mariadb_server_firewall_rule_list_command_builder extends CommandBuilder<az_mariadb_server_firewall_rule_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_firewall_rule_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_mariadb_server_firewall_rule_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_firewall_rule_list_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_mariadb_server_firewall_rule_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_firewall_rule_list_command_builder;
}
/**
 * Get the details of a firewall rule.
 *
 * Syntax:
 * ```
 * az mariadb server firewall-rule show [--ids]
 *                                      [--name]
 *                                      [--query-examples]
 *                                      [--resource-group]
 *                                      [--server-name]
 *                                      [--subscription]
 * ```
 */
declare class az_mariadb_server_firewall_rule_show_command_builder extends CommandBuilder<az_mariadb_server_firewall_rule_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_firewall_rule_show_command_builder;
    /** The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    name(value: string): az_mariadb_server_firewall_rule_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_mariadb_server_firewall_rule_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_firewall_rule_show_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_mariadb_server_firewall_rule_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_firewall_rule_show_command_builder;
}
/**
 * Update a firewall rule.
 *
 * Syntax:
 * ```
 * az mariadb server firewall-rule update [--add]
 *                                        [--end-ip-address]
 *                                        [--force-string]
 *                                        [--ids]
 *                                        [--name]
 *                                        [--remove]
 *                                        [--resource-group]
 *                                        [--server-name]
 *                                        [--set]
 *                                        [--start-ip-address]
 *                                        [--subscription]
 * ```
 */
declare class az_mariadb_server_firewall_rule_update_command_builder extends CommandBuilder<az_mariadb_server_firewall_rule_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_mariadb_server_firewall_rule_update_command_builder;
    /** The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    endIpAddress(value: string): az_mariadb_server_firewall_rule_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_mariadb_server_firewall_rule_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_firewall_rule_update_command_builder;
    /** The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    name(value: string): az_mariadb_server_firewall_rule_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_mariadb_server_firewall_rule_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_firewall_rule_update_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_mariadb_server_firewall_rule_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_mariadb_server_firewall_rule_update_command_builder;
    /** The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    startIpAddress(value: string): az_mariadb_server_firewall_rule_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_firewall_rule_update_command_builder;
}
/**
 * Approve the specified private endpoint connection associated with a MariaDB server.
 *
 * Syntax:
 * ```
 * az mariadb server private-endpoint-connection approve [--description]
 *                                                       [--id]
 *                                                       [--ids]
 *                                                       [--name]
 *                                                       [--resource-group]
 *                                                       [--server-name]
 *                                                       [--subscription]
 * ```
 */
declare class az_mariadb_server_private_endpoint_connection_approve_command_builder extends CommandBuilder<az_mariadb_server_private_endpoint_connection_approve_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Comments for approve operation. */
    description(value: string): az_mariadb_server_private_endpoint_connection_approve_command_builder;
    /** The ID of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted. */
    id(value: string): az_mariadb_server_private_endpoint_connection_approve_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_private_endpoint_connection_approve_command_builder;
    /** The name of the private endpoint connection associated with the Server. Required if --id is not specified. */
    name(value: string): az_mariadb_server_private_endpoint_connection_approve_command_builder;
    /** The resource group name of specified server. */
    resourceGroup(value: string): az_mariadb_server_private_endpoint_connection_approve_command_builder;
    /** Name of the Server. Required if --id is not specified. */
    serverName(value: string): az_mariadb_server_private_endpoint_connection_approve_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_private_endpoint_connection_approve_command_builder;
}
/**
 * Delete the specified private endpoint connection associated with a MariaDB server.
 *
 * Syntax:
 * ```
 * az mariadb server private-endpoint-connection delete [--id]
 *                                                      [--ids]
 *                                                      [--name]
 *                                                      [--resource-group]
 *                                                      [--server-name]
 *                                                      [--subscription]
 * ```
 */
declare class az_mariadb_server_private_endpoint_connection_delete_command_builder extends CommandBuilder<az_mariadb_server_private_endpoint_connection_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The ID of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted. */
    id(value: string): az_mariadb_server_private_endpoint_connection_delete_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_private_endpoint_connection_delete_command_builder;
    /** The name of the private endpoint connection associated with the Server. Required if --id is not specified. */
    name(value: string): az_mariadb_server_private_endpoint_connection_delete_command_builder;
    /** The resource group name of specified server. */
    resourceGroup(value: string): az_mariadb_server_private_endpoint_connection_delete_command_builder;
    /** Name of the Server. Required if --id is not specified. */
    serverName(value: string): az_mariadb_server_private_endpoint_connection_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_private_endpoint_connection_delete_command_builder;
}
/**
 * Reject the specified private endpoint connection associated with a MariaDB server.
 *
 * Syntax:
 * ```
 * az mariadb server private-endpoint-connection reject [--description]
 *                                                      [--id]
 *                                                      [--ids]
 *                                                      [--name]
 *                                                      [--resource-group]
 *                                                      [--server-name]
 *                                                      [--subscription]
 * ```
 */
declare class az_mariadb_server_private_endpoint_connection_reject_command_builder extends CommandBuilder<az_mariadb_server_private_endpoint_connection_reject_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Comments for reject operation. */
    description(value: string): az_mariadb_server_private_endpoint_connection_reject_command_builder;
    /** The ID of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted. */
    id(value: string): az_mariadb_server_private_endpoint_connection_reject_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_private_endpoint_connection_reject_command_builder;
    /** The name of the private endpoint connection associated with the Server. Required if --id is not specified. */
    name(value: string): az_mariadb_server_private_endpoint_connection_reject_command_builder;
    /** The resource group name of specified server. */
    resourceGroup(value: string): az_mariadb_server_private_endpoint_connection_reject_command_builder;
    /** Name of the Server. Required if --id is not specified. */
    serverName(value: string): az_mariadb_server_private_endpoint_connection_reject_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_private_endpoint_connection_reject_command_builder;
}
/**
 * Show details of a private endpoint connection associated with a MariaDB server.
 *
 * Syntax:
 * ```
 * az mariadb server private-endpoint-connection show [--id]
 *                                                    [--ids]
 *                                                    [--name]
 *                                                    [--query-examples]
 *                                                    [--resource-group]
 *                                                    [--server-name]
 *                                                    [--subscription]
 * ```
 */
declare class az_mariadb_server_private_endpoint_connection_show_command_builder extends CommandBuilder<az_mariadb_server_private_endpoint_connection_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The ID of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted. */
    id(value: string): az_mariadb_server_private_endpoint_connection_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_private_endpoint_connection_show_command_builder;
    /** The name of the private endpoint connection associated with the Server. Required if --id is not specified. */
    name(value: string): az_mariadb_server_private_endpoint_connection_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_mariadb_server_private_endpoint_connection_show_command_builder;
    /** The resource group name of specified server. */
    resourceGroup(value: string): az_mariadb_server_private_endpoint_connection_show_command_builder;
    /** Name of the Server. Required if --id is not specified. */
    serverName(value: string): az_mariadb_server_private_endpoint_connection_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_private_endpoint_connection_show_command_builder;
}
/**
 * List the private link resources supported for a MariaDB server.
 *
 * Syntax:
 * ```
 * az mariadb server private-link-resource list [--ids]
 *                                              [--query-examples]
 *                                              [--resource-group]
 *                                              [--server-name]
 *                                              [--subscription]
 * ```
 */
declare class az_mariadb_server_private_link_resource_list_command_builder extends CommandBuilder<az_mariadb_server_private_link_resource_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_private_link_resource_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_mariadb_server_private_link_resource_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_private_link_resource_list_command_builder;
    /** Name of the Server. */
    serverName(value: string): az_mariadb_server_private_link_resource_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_private_link_resource_list_command_builder;
}
/**
 * Create a read replica for a server.
 *
 * Syntax:
 * ```
 * az mariadb server replica create --name
 *                                  --resource-group
 *                                  --source-server
 *                                  [--location]
 *                                  [--no-wait]
 *                                  [--sku-name]
 *                                  [--subscription]
 * ```
 *
 * @param {string} name Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} sourceServer The name or resource ID of the master server to the create replica for.
 */
declare class az_mariadb_server_replica_create_command_builder extends CommandBuilder<az_mariadb_server_replica_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, sourceServer: string);
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_mariadb_server_replica_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_replica_create_command_builder;
    /** The name or resource ID of the master server to the create replica for. */
    sourceServer(value: string): az_mariadb_server_replica_create_command_builder;
    /** Location. Values from: `az account list-locations`. If not provided, the create replica will be in the same location as the master server. */
    location(value: string): az_mariadb_server_replica_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_mariadb_server_replica_create_command_builder;
    /** The name of the sku. Follows the convention {pricing tier}_{compute generation}_{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16. */
    skuName(value: string): az_mariadb_server_replica_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_replica_create_command_builder;
}
/**
 * List all read replicas for a given server.
 *
 * Syntax:
 * ```
 * az mariadb server replica list [--ids]
 *                                [--query-examples]
 *                                [--resource-group]
 *                                [--server-name]
 *                                [--subscription]
 * ```
 */
declare class az_mariadb_server_replica_list_command_builder extends CommandBuilder<az_mariadb_server_replica_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_replica_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_mariadb_server_replica_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_replica_list_command_builder;
    /** Name of the master server. */
    serverName(value: string): az_mariadb_server_replica_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_replica_list_command_builder;
}
/**
 * Stop replication to a read replica and make it a read/write server.
 *
 * Syntax:
 * ```
 * az mariadb server replica stop [--ids]
 *                                [--name]
 *                                [--resource-group]
 *                                [--subscription]
 *                                [--yes]
 * ```
 */
declare class az_mariadb_server_replica_stop_command_builder extends CommandBuilder<az_mariadb_server_replica_stop_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_replica_stop_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_mariadb_server_replica_stop_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_replica_stop_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_replica_stop_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_mariadb_server_replica_stop_command_builder;
}
/**
 * Create a virtual network rule to allows access to a MariaDB server.
 *
 * Syntax:
 * ```
 * az mariadb server vnet-rule create --name
 *                                    --resource-group
 *                                    --server-name
 *                                    --subnet
 *                                    [--ignore-missing-endpoint {false, true}]
 *                                    [--subscription]
 *                                    [--vnet-name]
 * ```
 *
 * @param {string} name The name of the vnet rule.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 * @param {string} subnet Name or ID of the subnet that allows access to an Azure Postgres Server. If subnet name is provided, --vnet-name must be provided.
 */
declare class az_mariadb_server_vnet_rule_create_command_builder extends CommandBuilder<az_mariadb_server_vnet_rule_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, serverName: string, subnet: string);
    /** The name of the vnet rule. */
    name(value: string): az_mariadb_server_vnet_rule_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_vnet_rule_create_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_mariadb_server_vnet_rule_create_command_builder;
    /** Name or ID of the subnet that allows access to an Azure Postgres Server. If subnet name is provided, --vnet-name must be provided. */
    subnet(value: string): az_mariadb_server_vnet_rule_create_command_builder;
    /** Create vnet rule before virtual network has vnet service endpoint enabled. */
    ignoreMissingEndpoint(value: boolean): az_mariadb_server_vnet_rule_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_vnet_rule_create_command_builder;
    /** The virtual network name. */
    vnetName(value: string): az_mariadb_server_vnet_rule_create_command_builder;
}
/**
 * Deletes the virtual network rule with the given name.
 *
 * Syntax:
 * ```
 * az mariadb server vnet-rule delete [--ids]
 *                                    [--name]
 *                                    [--resource-group]
 *                                    [--server-name]
 *                                    [--subscription]
 * ```
 */
declare class az_mariadb_server_vnet_rule_delete_command_builder extends CommandBuilder<az_mariadb_server_vnet_rule_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_vnet_rule_delete_command_builder;
    /** The name of the vnet rule. */
    name(value: string): az_mariadb_server_vnet_rule_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_vnet_rule_delete_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_mariadb_server_vnet_rule_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_vnet_rule_delete_command_builder;
}
/**
 * Gets a list of virtual network rules in a server.
 *
 * Syntax:
 * ```
 * az mariadb server vnet-rule list [--ids]
 *                                  [--query-examples]
 *                                  [--resource-group]
 *                                  [--server-name]
 *                                  [--subscription]
 * ```
 */
declare class az_mariadb_server_vnet_rule_list_command_builder extends CommandBuilder<az_mariadb_server_vnet_rule_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_vnet_rule_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_mariadb_server_vnet_rule_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_vnet_rule_list_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_mariadb_server_vnet_rule_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_vnet_rule_list_command_builder;
}
/**
 * Gets a virtual network rule.
 *
 * Syntax:
 * ```
 * az mariadb server vnet-rule show [--ids]
 *                                  [--name]
 *                                  [--query-examples]
 *                                  [--resource-group]
 *                                  [--server-name]
 *                                  [--subscription]
 * ```
 */
declare class az_mariadb_server_vnet_rule_show_command_builder extends CommandBuilder<az_mariadb_server_vnet_rule_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_vnet_rule_show_command_builder;
    /** The name of the vnet rule. */
    name(value: string): az_mariadb_server_vnet_rule_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_mariadb_server_vnet_rule_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_vnet_rule_show_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_mariadb_server_vnet_rule_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_vnet_rule_show_command_builder;
}
/**
 * Update a virtual network rule.
 *
 * Syntax:
 * ```
 * az mariadb server vnet-rule update --subnet
 *                                    [--add]
 *                                    [--force-string]
 *                                    [--ids]
 *                                    [--ignore-missing-endpoint {false, true}]
 *                                    [--name]
 *                                    [--remove]
 *                                    [--resource-group]
 *                                    [--server-name]
 *                                    [--set]
 *                                    [--subscription]
 *                                    [--vnet-name]
 * ```
 *
 * @param {string} subnet Name or ID of the subnet that allows access to an Azure Postgres Server. If subnet name is provided, --vnet-name must be provided.
 */
declare class az_mariadb_server_vnet_rule_update_command_builder extends CommandBuilder<az_mariadb_server_vnet_rule_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, subnet: string);
    /** Name or ID of the subnet that allows access to an Azure Postgres Server. If subnet name is provided, --vnet-name must be provided. */
    subnet(value: string): az_mariadb_server_vnet_rule_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_mariadb_server_vnet_rule_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_mariadb_server_vnet_rule_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_vnet_rule_update_command_builder;
    /** Create vnet rule before virtual network has vnet service endpoint enabled. */
    ignoreMissingEndpoint(value: boolean): az_mariadb_server_vnet_rule_update_command_builder;
    /** The name of the vnet rule. */
    name(value: string): az_mariadb_server_vnet_rule_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_mariadb_server_vnet_rule_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_vnet_rule_update_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_mariadb_server_vnet_rule_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_mariadb_server_vnet_rule_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_vnet_rule_update_command_builder;
    /** The virtual network name. */
    vnetName(value: string): az_mariadb_server_vnet_rule_update_command_builder;
}
/**
 * Download log files.
 *
 * Syntax:
 * ```
 * az mariadb server-logs download --name
 *                                 --resource-group
 *                                 --server-name
 *                                 [--subscription]
 * ```
 *
 * @param {string} name Space-separated list of log filenames on the server to download.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 */
declare class az_mariadb_server_logs_download_command_builder extends CommandBuilder<az_mariadb_server_logs_download_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, serverName: string);
    /** Space-separated list of log filenames on the server to download. */
    name(value: string): az_mariadb_server_logs_download_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_logs_download_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_mariadb_server_logs_download_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_logs_download_command_builder;
}
/**
 * List log files for a server.
 *
 * Syntax:
 * ```
 * az mariadb server-logs list --resource-group
 *                             --server-name
 *                             [--file-last-written]
 *                             [--filename-contains]
 *                             [--max-file-size]
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 */
declare class az_mariadb_server_logs_list_command_builder extends CommandBuilder<az_mariadb_server_logs_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, serverName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_logs_list_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_mariadb_server_logs_list_command_builder;
    /** Integer in hours to indicate file last modify time, default value is 72. */
    fileLastWritten(value: string): az_mariadb_server_logs_list_command_builder;
    /** The pattern that file name should match. */
    filenameContains(value: string): az_mariadb_server_logs_list_command_builder;
    /** The file size limitation to filter files. */
    maxFileSize(value: string): az_mariadb_server_logs_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_mariadb_server_logs_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_logs_list_command_builder;
}
/**
 * Create a server.
 *
 * Syntax:
 * ```
 * az mariadb server create --admin-password
 *                          --admin-user
 *                          --name
 *                          --resource-group
 *                          --sku-name
 *                          [--assign-identity]
 *                          [--auto-grow {Disabled, Enabled}]
 *                          [--backup-retention]
 *                          [--geo-redundant-backup {Disabled, Enabled}]
 *                          [--infrastructure-encryption {Disabled, Enabled}]
 *                          [--location]
 *                          [--public {Disabled, Enabled}]
 *                          [--ssl-enforcement {Disabled, Enabled}]
 *                          [--storage-size]
 *                          [--subscription]
 *                          [--tags]
 *                          [--version]
 * ```
 *
 * @param {string} adminPassword The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters.
 * @param {string} adminUser Administrator username for the server. Once set, it cannot be changed.
 * @param {string} name Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} skuName The name of the sku. Follows the convention {pricing tier}_{compute generation}_{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16.
 */
declare class az_mariadb_server_create_command_builder extends CommandBuilder<az_mariadb_server_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, adminPassword: string, adminUser: string, name: string, resourceGroup: string, skuName: string);
    /** The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters. */
    adminPassword(value: string): az_mariadb_server_create_command_builder;
    /** Administrator username for the server. Once set, it cannot be changed. */
    adminUser(value: string): az_mariadb_server_create_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_mariadb_server_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_create_command_builder;
    /** The name of the sku. Follows the convention {pricing tier}_{compute generation}_{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16. */
    skuName(value: string): az_mariadb_server_create_command_builder;
    /** Generate and assign an Azure Active Directory Identity for this server for use with key management services like Azure KeyVault. */
    assignIdentity(value: string): az_mariadb_server_create_command_builder;
    /** Enable or disable autogrow of the storage. Default value is Enabled. */
    autoGrow(value: 'Disabled' | 'Enabled'): az_mariadb_server_create_command_builder;
    /** The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days. */
    backupRetention(value: string): az_mariadb_server_create_command_builder;
    /** Enable or disable geo-redundant backups. Default value is Disabled. Not supported in Basic pricing tier. */
    geoRedundantBackup(value: 'Disabled' | 'Enabled'): az_mariadb_server_create_command_builder;
    /** Add an optional second layer of encryption for data using new encryption algorithm. Default value is Disabled. */
    infrastructureEncryption(value: 'Disabled' | 'Enabled'): az_mariadb_server_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_mariadb_server_create_command_builder;
    /** Enable or disable public network access to server. When disabled, only connections made through Private Links can reach this server. Default is Enabled. */
    publicNetworkAccess(value: 'Disabled' | 'Enabled'): az_mariadb_server_create_command_builder;
    /** Enable or disable ssl enforcement for connections to server. Default is Enabled. */
    sslEnforcement(value: 'Disabled' | 'Enabled'): az_mariadb_server_create_command_builder;
    /** The storage capacity of the server (unit is megabytes). Minimum 5120 and increases in 1024 increments. Default is 51200. */
    storageSize(value: string): az_mariadb_server_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_mariadb_server_create_command_builder;
    /** Server major version. */
    version(value: string): az_mariadb_server_create_command_builder;
}
/**
 * Delete a server.
 *
 * Syntax:
 * ```
 * az mariadb server delete [--ids]
 *                          [--name]
 *                          [--resource-group]
 *                          [--subscription]
 *                          [--yes]
 * ```
 */
declare class az_mariadb_server_delete_command_builder extends CommandBuilder<az_mariadb_server_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_delete_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_mariadb_server_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_mariadb_server_delete_command_builder;
}
/**
 * Geo-restore a server from backup.
 *
 * Syntax:
 * ```
 * az mariadb server georestore --location
 *                              --source-server
 *                              [--backup-retention]
 *                              [--geo-redundant-backup]
 *                              [--ids]
 *                              [--name]
 *                              [--no-wait]
 *                              [--resource-group]
 *                              [--sku-name]
 *                              [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} sourceServer The name or ID of the source server to restore from.
 */
declare class az_mariadb_server_georestore_command_builder extends CommandBuilder<az_mariadb_server_georestore_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string, sourceServer: string);
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_mariadb_server_georestore_command_builder;
    /** The name or ID of the source server to restore from. */
    sourceServer(value: string): az_mariadb_server_georestore_command_builder;
    /** The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days. */
    backupRetention(value: string): az_mariadb_server_georestore_command_builder;
    /** Enable or disable geo-redundant backups. Default value is Disabled. Not supported in Basic pricing tier. */
    geoRedundantBackup(value: string): az_mariadb_server_georestore_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_georestore_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_mariadb_server_georestore_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_mariadb_server_georestore_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_georestore_command_builder;
    /** The name of the sku. Defaults to sku of the source server. Follows the convention {pricing tier}_{compute generation}_{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16. */
    skuName(value: string): az_mariadb_server_georestore_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_georestore_command_builder;
}
/**
 * List available servers.
 *
 * Syntax:
 * ```
 * az mariadb server list [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 */
declare class az_mariadb_server_list_command_builder extends CommandBuilder<az_mariadb_server_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_mariadb_server_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_list_command_builder;
}
/**
 * Restart a server.
 *
 * Syntax:
 * ```
 * az mariadb server restart [--ids]
 *                           [--name]
 *                           [--resource-group]
 *                           [--subscription]
 * ```
 */
declare class az_mariadb_server_restart_command_builder extends CommandBuilder<az_mariadb_server_restart_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_restart_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_mariadb_server_restart_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_restart_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_restart_command_builder;
}
/**
 * Restore a server from backup.
 *
 * Syntax:
 * ```
 * az mariadb server restore --pitr-time
 *                           --source-server
 *                           [--ids]
 *                           [--name]
 *                           [--no-wait]
 *                           [--resource-group]
 *                           [--subscription]
 * ```
 *
 * @param {string} restorePointInTime The point in time to restore from (ISO8601 format), e.g., 2017-04-26T02:10:00+08:00.
 * @param {string} sourceServer The name or resource ID of the source server to restore from.
 */
declare class az_mariadb_server_restore_command_builder extends CommandBuilder<az_mariadb_server_restore_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, restorePointInTime: string, sourceServer: string);
    /** The point in time to restore from (ISO8601 format), e.g., 2017-04-26T02:10:00+08:00. */
    restorePointInTime(value: string): az_mariadb_server_restore_command_builder;
    /** The name or resource ID of the source server to restore from. */
    sourceServer(value: string): az_mariadb_server_restore_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_restore_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_mariadb_server_restore_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_mariadb_server_restore_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_restore_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_restore_command_builder;
}
/**
 * Get the details of a server.
 *
 * Syntax:
 * ```
 * az mariadb server show [--ids]
 *                        [--name]
 *                        [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 */
declare class az_mariadb_server_show_command_builder extends CommandBuilder<az_mariadb_server_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_show_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_mariadb_server_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_mariadb_server_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_show_command_builder;
}
/**
 * Start a stopped server.
 *
 * Syntax:
 * ```
 * az mariadb server start [--ids]
 *                         [--name]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
declare class az_mariadb_server_start_command_builder extends CommandBuilder<az_mariadb_server_start_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_start_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_mariadb_server_start_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_start_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_start_command_builder;
}
/**
 * Stop a running server.
 *
 * Syntax:
 * ```
 * az mariadb server stop [--ids]
 *                        [--name]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 */
declare class az_mariadb_server_stop_command_builder extends CommandBuilder<az_mariadb_server_stop_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_stop_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_mariadb_server_stop_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_stop_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_stop_command_builder;
}
/**
 * Update a server.
 *
 * Syntax:
 * ```
 * az mariadb server update [--add]
 *                          [--admin-password]
 *                          [--assign-identity]
 *                          [--auto-grow {Disabled, Enabled}]
 *                          [--backup-retention]
 *                          [--force-string]
 *                          [--ids]
 *                          [--name]
 *                          [--public {Disabled, Enabled}]
 *                          [--remove]
 *                          [--resource-group]
 *                          [--set]
 *                          [--sku-name]
 *                          [--ssl-enforcement {Disabled, Enabled}]
 *                          [--storage-size]
 *                          [--subscription]
 *                          [--tags]
 * ```
 */
declare class az_mariadb_server_update_command_builder extends CommandBuilder<az_mariadb_server_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_mariadb_server_update_command_builder;
    /** The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters. */
    adminPassword(value: string): az_mariadb_server_update_command_builder;
    /** Generate and assign an Azure Active Directory Identity for this server for use with key management services like Azure KeyVault. */
    assignIdentity(value: string): az_mariadb_server_update_command_builder;
    /** Enable or disable autogrow of the storage. Default value is Enabled. */
    autoGrow(value: 'Disabled' | 'Enabled'): az_mariadb_server_update_command_builder;
    /** The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days. */
    backupRetention(value: string): az_mariadb_server_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_mariadb_server_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_update_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_mariadb_server_update_command_builder;
    /** Enable or disable public network access to server. When disabled, only connections made through Private Links can reach this server. Default is Enabled. */
    publicNetworkAccess(value: 'Disabled' | 'Enabled'): az_mariadb_server_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_mariadb_server_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_mariadb_server_update_command_builder;
    /** The name of the sku. Follows the convention {pricing tier}_{compute generation}_{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16. */
    skuName(value: string): az_mariadb_server_update_command_builder;
    /** Enable or disable ssl enforcement for connections to server. Default is Enabled. */
    sslEnforcement(value: 'Disabled' | 'Enabled'): az_mariadb_server_update_command_builder;
    /** The storage capacity of the server (unit is megabytes). Minimum 5120 and increases in 1024 increments. Default is 51200. */
    storageSize(value: string): az_mariadb_server_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_mariadb_server_update_command_builder;
}
/**
 * Wait for server to satisfy certain conditions.
 *
 * Syntax:
 * ```
 * az mariadb server wait [--custom]
 *                        [--exists]
 *                        [--ids]
 *                        [--interval]
 *                        [--name]
 *                        [--resource-group]
 *                        [--subscription]
 *                        [--timeout]
 * ```
 */
declare class az_mariadb_server_wait_command_builder extends CommandBuilder<az_mariadb_server_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_mariadb_server_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_mariadb_server_wait_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_mariadb_server_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_mariadb_server_wait_command_builder;
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_mariadb_server_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_mariadb_server_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_mariadb_server_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_mariadb_server_wait_command_builder;
}
export {};
