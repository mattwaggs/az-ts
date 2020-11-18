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
exports.az_mariadb = exports.az_mariadb_server = exports.az_mariadb_server_logs = exports.az_mariadb_server_vnet_rule = exports.az_mariadb_server_replica = exports.az_mariadb_server_private_link_resource = exports.az_mariadb_server_private_endpoint_connection = exports.az_mariadb_server_firewall_rule = exports.az_mariadb_server_configuration = exports.az_mariadb_db = void 0;
var base_1 = require("../base");
/** Manage MariaDB databases on a server. */
var az_mariadb_db = /** @class */ (function () {
    function az_mariadb_db() {
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
    az_mariadb_db.create = function (name, resourceGroup, serverName) {
        return new az_mariadb_db_create_command_builder("az mariadb db create", 'az_mariadb_db_create_command_result', name, resourceGroup, serverName);
    };
    /**
     * Delete a database.
     *
     * Syntax:
     * ```
     * az mariadb db delete --name
     *                      [--ids]
     *                      [--resource-group]
     *                      [--server-name]
     *                      [--subscription]
     *                      [--yes]
     * ```
     *
     * @param {string} name The name of the database.
     */
    az_mariadb_db["delete"] = function (name) {
        return new az_mariadb_db_delete_command_builder("az mariadb db delete", 'az_mariadb_db_delete_command_result', name);
    };
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
     * @param {string} serverName Name of the Server.
     */
    az_mariadb_db.list = function (resourceGroup, serverName) {
        return new az_mariadb_db_list_command_builder("az mariadb db list", 'az_mariadb_db_list_command_result', resourceGroup, serverName);
    };
    /**
     * Show the details of a database.
     *
     * Syntax:
     * ```
     * az mariadb db show --name
     *                    [--ids]
     *                    [--query-examples]
     *                    [--resource-group]
     *                    [--server-name]
     *                    [--subscription]
     * ```
     *
     * @param {string} name The name of the database.
     */
    az_mariadb_db.show = function (name) {
        return new az_mariadb_db_show_command_builder("az mariadb db show", 'az_mariadb_db_show_command_result', name);
    };
    return az_mariadb_db;
}());
exports.az_mariadb_db = az_mariadb_db;
/** Manage configuration values for a server. */
var az_mariadb_server_configuration = /** @class */ (function () {
    function az_mariadb_server_configuration() {
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
    az_mariadb_server_configuration.list = function () {
        return new az_mariadb_server_configuration_list_command_builder("az mariadb server configuration list", 'az_mariadb_server_configuration_list_command_result');
    };
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
    az_mariadb_server_configuration.set = function () {
        return new az_mariadb_server_configuration_set_command_builder("az mariadb server configuration set", 'az_mariadb_server_configuration_set_command_result');
    };
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
    az_mariadb_server_configuration.show = function () {
        return new az_mariadb_server_configuration_show_command_builder("az mariadb server configuration show", 'az_mariadb_server_configuration_show_command_result');
    };
    return az_mariadb_server_configuration;
}());
exports.az_mariadb_server_configuration = az_mariadb_server_configuration;
/** Manage firewall rules for a server. */
var az_mariadb_server_firewall_rule = /** @class */ (function () {
    function az_mariadb_server_firewall_rule() {
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
    az_mariadb_server_firewall_rule.create = function (endIpAddress, name, resourceGroup, serverName, startIpAddress) {
        return new az_mariadb_server_firewall_rule_create_command_builder("az mariadb server firewall-rule create", 'az_mariadb_server_firewall_rule_create_command_result', endIpAddress, name, resourceGroup, serverName, startIpAddress);
    };
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
    az_mariadb_server_firewall_rule["delete"] = function () {
        return new az_mariadb_server_firewall_rule_delete_command_builder("az mariadb server firewall-rule delete", 'az_mariadb_server_firewall_rule_delete_command_result');
    };
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
    az_mariadb_server_firewall_rule.list = function () {
        return new az_mariadb_server_firewall_rule_list_command_builder("az mariadb server firewall-rule list", 'az_mariadb_server_firewall_rule_list_command_result');
    };
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
    az_mariadb_server_firewall_rule.show = function () {
        return new az_mariadb_server_firewall_rule_show_command_builder("az mariadb server firewall-rule show", 'az_mariadb_server_firewall_rule_show_command_result');
    };
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
    az_mariadb_server_firewall_rule.update = function () {
        return new az_mariadb_server_firewall_rule_update_command_builder("az mariadb server firewall-rule update", 'az_mariadb_server_firewall_rule_update_command_result');
    };
    return az_mariadb_server_firewall_rule;
}());
exports.az_mariadb_server_firewall_rule = az_mariadb_server_firewall_rule;
/** Manage MariaDB server private endpoint connections. */
var az_mariadb_server_private_endpoint_connection = /** @class */ (function () {
    function az_mariadb_server_private_endpoint_connection() {
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
    az_mariadb_server_private_endpoint_connection.approve = function () {
        return new az_mariadb_server_private_endpoint_connection_approve_command_builder("az mariadb server private-endpoint-connection approve", 'az_mariadb_server_private_endpoint_connection_approve_command_result');
    };
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
    az_mariadb_server_private_endpoint_connection["delete"] = function () {
        return new az_mariadb_server_private_endpoint_connection_delete_command_builder("az mariadb server private-endpoint-connection delete", 'az_mariadb_server_private_endpoint_connection_delete_command_result');
    };
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
    az_mariadb_server_private_endpoint_connection.reject = function () {
        return new az_mariadb_server_private_endpoint_connection_reject_command_builder("az mariadb server private-endpoint-connection reject", 'az_mariadb_server_private_endpoint_connection_reject_command_result');
    };
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
    az_mariadb_server_private_endpoint_connection.show = function () {
        return new az_mariadb_server_private_endpoint_connection_show_command_builder("az mariadb server private-endpoint-connection show", 'az_mariadb_server_private_endpoint_connection_show_command_result');
    };
    return az_mariadb_server_private_endpoint_connection;
}());
exports.az_mariadb_server_private_endpoint_connection = az_mariadb_server_private_endpoint_connection;
/** Manage MariaDB server private link resources. */
var az_mariadb_server_private_link_resource = /** @class */ (function () {
    function az_mariadb_server_private_link_resource() {
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
    az_mariadb_server_private_link_resource.list = function () {
        return new az_mariadb_server_private_link_resource_list_command_builder("az mariadb server private-link-resource list", 'az_mariadb_server_private_link_resource_list_command_result');
    };
    return az_mariadb_server_private_link_resource;
}());
exports.az_mariadb_server_private_link_resource = az_mariadb_server_private_link_resource;
/** Manage read replicas. */
var az_mariadb_server_replica = /** @class */ (function () {
    function az_mariadb_server_replica() {
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
    az_mariadb_server_replica.create = function (name, resourceGroup, sourceServer) {
        return new az_mariadb_server_replica_create_command_builder("az mariadb server replica create", 'az_mariadb_server_replica_create_command_result', name, resourceGroup, sourceServer);
    };
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
    az_mariadb_server_replica.list = function () {
        return new az_mariadb_server_replica_list_command_builder("az mariadb server replica list", 'az_mariadb_server_replica_list_command_result');
    };
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
    az_mariadb_server_replica.stop = function () {
        return new az_mariadb_server_replica_stop_command_builder("az mariadb server replica stop", 'az_mariadb_server_replica_stop_command_result');
    };
    return az_mariadb_server_replica;
}());
exports.az_mariadb_server_replica = az_mariadb_server_replica;
/** Manage a server's virtual network rules. */
var az_mariadb_server_vnet_rule = /** @class */ (function () {
    function az_mariadb_server_vnet_rule() {
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
    az_mariadb_server_vnet_rule.create = function (name, resourceGroup, serverName, subnet) {
        return new az_mariadb_server_vnet_rule_create_command_builder("az mariadb server vnet-rule create", 'az_mariadb_server_vnet_rule_create_command_result', name, resourceGroup, serverName, subnet);
    };
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
    az_mariadb_server_vnet_rule["delete"] = function () {
        return new az_mariadb_server_vnet_rule_delete_command_builder("az mariadb server vnet-rule delete", 'az_mariadb_server_vnet_rule_delete_command_result');
    };
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
    az_mariadb_server_vnet_rule.list = function () {
        return new az_mariadb_server_vnet_rule_list_command_builder("az mariadb server vnet-rule list", 'az_mariadb_server_vnet_rule_list_command_result');
    };
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
    az_mariadb_server_vnet_rule.show = function () {
        return new az_mariadb_server_vnet_rule_show_command_builder("az mariadb server vnet-rule show", 'az_mariadb_server_vnet_rule_show_command_result');
    };
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
    az_mariadb_server_vnet_rule.update = function (subnet) {
        return new az_mariadb_server_vnet_rule_update_command_builder("az mariadb server vnet-rule update", 'az_mariadb_server_vnet_rule_update_command_result', subnet);
    };
    return az_mariadb_server_vnet_rule;
}());
exports.az_mariadb_server_vnet_rule = az_mariadb_server_vnet_rule;
/** Manage server logs. */
var az_mariadb_server_logs = /** @class */ (function () {
    function az_mariadb_server_logs() {
    }
    /**
     * Download log files.
     *
     * Syntax:
     * ```
     * az mariadb server-logs download --name
     *                                 [--ids]
     *                                 [--resource-group]
     *                                 [--server-name]
     *                                 [--subscription]
     * ```
     *
     * @param {string} name Space-separated list of log filenames on the server to download.
     */
    az_mariadb_server_logs.download = function (name) {
        return new az_mariadb_server_logs_download_command_builder("az mariadb server-logs download", 'az_mariadb_server_logs_download_command_result', name);
    };
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
     * @param {string} serverName Name of the Server.
     */
    az_mariadb_server_logs.list = function (resourceGroup, serverName) {
        return new az_mariadb_server_logs_list_command_builder("az mariadb server-logs list", 'az_mariadb_server_logs_list_command_result', resourceGroup, serverName);
    };
    return az_mariadb_server_logs;
}());
exports.az_mariadb_server_logs = az_mariadb_server_logs;
/** Manage MariaDB servers. */
var az_mariadb_server = /** @class */ (function () {
    function az_mariadb_server() {
    }
    /**
     * Create a server.
     *
     * Syntax:
     * ```
     * az mariadb server create [--admin-password]
     *                          [--admin-user]
     *                          [--assign-identity]
     *                          [--auto-grow {Disabled, Enabled}]
     *                          [--backup-retention]
     *                          [--geo-redundant-backup {Disabled, Enabled}]
     *                          [--infrastructure-encryption {Disabled, Enabled}]
     *                          [--location]
     *                          [--name]
     *                          [--public]
     *                          [--resource-group]
     *                          [--sku-name]
     *                          [--ssl-enforcement {Disabled, Enabled}]
     *                          [--storage-size]
     *                          [--subscription]
     *                          [--tags]
     *                          [--version]
     * ```
     */
    az_mariadb_server.create = function () {
        return new az_mariadb_server_create_command_builder("az mariadb server create", 'az_mariadb_server_create_command_result');
    };
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
    az_mariadb_server["delete"] = function () {
        return new az_mariadb_server_delete_command_builder("az mariadb server delete", 'az_mariadb_server_delete_command_result');
    };
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
    az_mariadb_server.georestore = function (location, sourceServer) {
        return new az_mariadb_server_georestore_command_builder("az mariadb server georestore", 'az_mariadb_server_georestore_command_result', location, sourceServer);
    };
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
    az_mariadb_server.list = function () {
        return new az_mariadb_server_list_command_builder("az mariadb server list", 'az_mariadb_server_list_command_result');
    };
    /**
     * List available sku's in the given region.
     *
     * Syntax:
     * ```
     * az mariadb server list-skus --location
     *                             [--subscription]
     * ```
     *
     * @param {string} location The name of the location.
     */
    az_mariadb_server.list_skus = function (location) {
        return new az_mariadb_server_list_skus_command_builder("az mariadb server list-skus", 'az_mariadb_server_list_skus_command_result', location);
    };
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
    az_mariadb_server.restart = function () {
        return new az_mariadb_server_restart_command_builder("az mariadb server restart", 'az_mariadb_server_restart_command_result');
    };
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
    az_mariadb_server.restore = function (restorePointInTime, sourceServer) {
        return new az_mariadb_server_restore_command_builder("az mariadb server restore", 'az_mariadb_server_restore_command_result', restorePointInTime, sourceServer);
    };
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
    az_mariadb_server.show = function () {
        return new az_mariadb_server_show_command_builder("az mariadb server show", 'az_mariadb_server_show_command_result');
    };
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
    az_mariadb_server.start = function () {
        return new az_mariadb_server_start_command_builder("az mariadb server start", 'az_mariadb_server_start_command_result');
    };
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
    az_mariadb_server.stop = function () {
        return new az_mariadb_server_stop_command_builder("az mariadb server stop", 'az_mariadb_server_stop_command_result');
    };
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
     *                          [--public]
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
    az_mariadb_server.update = function () {
        return new az_mariadb_server_update_command_builder("az mariadb server update", 'az_mariadb_server_update_command_result');
    };
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
    az_mariadb_server.wait = function () {
        return new az_mariadb_server_wait_command_builder("az mariadb server wait", 'az_mariadb_server_wait_command_result');
    };
    return az_mariadb_server;
}());
exports.az_mariadb_server = az_mariadb_server;
/** Manage Azure Database for MariaDB servers. */
var az_mariadb = /** @class */ (function () {
    function az_mariadb() {
    }
    return az_mariadb;
}());
exports.az_mariadb = az_mariadb;
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
var az_mariadb_db_create_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_db_create_command_builder, _super);
    function az_mariadb_db_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, serverName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        return _this;
    }
    /** The name of the database. */
    az_mariadb_db_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_db_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_db_create_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** The charset of the database. */
    az_mariadb_db_create_command_builder.prototype.charset = function (value) {
        this.setFlag("--charset", value);
        return this;
    };
    /** The collation of the database. */
    az_mariadb_db_create_command_builder.prototype.collation = function (value) {
        this.setFlag("--collation", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_db_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_db_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a database.
 *
 * Syntax:
 * ```
 * az mariadb db delete --name
 *                      [--ids]
 *                      [--resource-group]
 *                      [--server-name]
 *                      [--subscription]
 *                      [--yes]
 * ```
 *
 * @param {string} name The name of the database.
 */
var az_mariadb_db_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_db_delete_command_builder, _super);
    function az_mariadb_db_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the database. */
    az_mariadb_db_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_db_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_db_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_db_delete_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_db_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_mariadb_db_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_mariadb_db_delete_command_builder;
}(base_1.CommandBuilder));
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
 * @param {string} serverName Name of the Server.
 */
var az_mariadb_db_list_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_db_list_command_builder, _super);
    function az_mariadb_db_list_command_builder(commandPath, resultDataTypeName, resourceGroup, serverName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_db_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Server. */
    az_mariadb_db_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mariadb_db_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_db_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_db_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details of a database.
 *
 * Syntax:
 * ```
 * az mariadb db show --name
 *                    [--ids]
 *                    [--query-examples]
 *                    [--resource-group]
 *                    [--server-name]
 *                    [--subscription]
 * ```
 *
 * @param {string} name The name of the database.
 */
var az_mariadb_db_show_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_db_show_command_builder, _super);
    function az_mariadb_db_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the database. */
    az_mariadb_db_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_db_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mariadb_db_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_db_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_db_show_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_db_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_db_show_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_configuration_list_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_configuration_list_command_builder, _super);
    function az_mariadb_server_configuration_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_configuration_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mariadb_server_configuration_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_configuration_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_configuration_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_configuration_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_configuration_list_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_configuration_set_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_configuration_set_command_builder, _super);
    function az_mariadb_server_configuration_set_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_configuration_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the server configuration. */
    az_mariadb_server_configuration_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_configuration_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_configuration_set_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_configuration_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Value of the configuration. If not provided, configuration value will be set to default. */
    az_mariadb_server_configuration_set_command_builder.prototype.value = function (value) {
        this.setFlag("--value", value);
        return this;
    };
    return az_mariadb_server_configuration_set_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_configuration_show_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_configuration_show_command_builder, _super);
    function az_mariadb_server_configuration_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_configuration_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the server configuration. */
    az_mariadb_server_configuration_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mariadb_server_configuration_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_configuration_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_configuration_show_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_configuration_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_configuration_show_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_firewall_rule_create_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_firewall_rule_create_command_builder, _super);
    function az_mariadb_server_firewall_rule_create_command_builder(commandPath, resultDataTypeName, endIpAddress, name, resourceGroup, serverName, startIpAddress) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.endIpAddress(endIpAddress);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        _this.startIpAddress(startIpAddress);
        return _this;
    }
    /** The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    az_mariadb_server_firewall_rule_create_command_builder.prototype.endIpAddress = function (value) {
        this.setFlag("--end-ip-address", value);
        return this;
    };
    /** The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    az_mariadb_server_firewall_rule_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_firewall_rule_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_firewall_rule_create_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    az_mariadb_server_firewall_rule_create_command_builder.prototype.startIpAddress = function (value) {
        this.setFlag("--start-ip-address", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_firewall_rule_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_firewall_rule_create_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_firewall_rule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_firewall_rule_delete_command_builder, _super);
    function az_mariadb_server_firewall_rule_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_firewall_rule_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    az_mariadb_server_firewall_rule_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_firewall_rule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_firewall_rule_delete_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_firewall_rule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_mariadb_server_firewall_rule_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_mariadb_server_firewall_rule_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_firewall_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_firewall_rule_list_command_builder, _super);
    function az_mariadb_server_firewall_rule_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_firewall_rule_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mariadb_server_firewall_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_firewall_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_firewall_rule_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_firewall_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_firewall_rule_list_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_firewall_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_firewall_rule_show_command_builder, _super);
    function az_mariadb_server_firewall_rule_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_firewall_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    az_mariadb_server_firewall_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mariadb_server_firewall_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_firewall_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_firewall_rule_show_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_firewall_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_firewall_rule_show_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_firewall_rule_update_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_firewall_rule_update_command_builder, _super);
    function az_mariadb_server_firewall_rule_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_mariadb_server_firewall_rule_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    az_mariadb_server_firewall_rule_update_command_builder.prototype.endIpAddress = function (value) {
        this.setFlag("--end-ip-address", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_mariadb_server_firewall_rule_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_firewall_rule_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    az_mariadb_server_firewall_rule_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_mariadb_server_firewall_rule_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_firewall_rule_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_firewall_rule_update_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_mariadb_server_firewall_rule_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    az_mariadb_server_firewall_rule_update_command_builder.prototype.startIpAddress = function (value) {
        this.setFlag("--start-ip-address", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_firewall_rule_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_firewall_rule_update_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_private_endpoint_connection_approve_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_private_endpoint_connection_approve_command_builder, _super);
    function az_mariadb_server_private_endpoint_connection_approve_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Comments for approve operation. */
    az_mariadb_server_private_endpoint_connection_approve_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** The ID of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted. */
    az_mariadb_server_private_endpoint_connection_approve_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_private_endpoint_connection_approve_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the private endpoint connection associated with the Server. Required if --id is not specified. */
    az_mariadb_server_private_endpoint_connection_approve_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource group name of specified server. */
    az_mariadb_server_private_endpoint_connection_approve_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Server. Required if --id is not specified. */
    az_mariadb_server_private_endpoint_connection_approve_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_private_endpoint_connection_approve_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_private_endpoint_connection_approve_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_private_endpoint_connection_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_private_endpoint_connection_delete_command_builder, _super);
    function az_mariadb_server_private_endpoint_connection_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The ID of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted. */
    az_mariadb_server_private_endpoint_connection_delete_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_private_endpoint_connection_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the private endpoint connection associated with the Server. Required if --id is not specified. */
    az_mariadb_server_private_endpoint_connection_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource group name of specified server. */
    az_mariadb_server_private_endpoint_connection_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Server. Required if --id is not specified. */
    az_mariadb_server_private_endpoint_connection_delete_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_private_endpoint_connection_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_private_endpoint_connection_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_private_endpoint_connection_reject_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_private_endpoint_connection_reject_command_builder, _super);
    function az_mariadb_server_private_endpoint_connection_reject_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Comments for reject operation. */
    az_mariadb_server_private_endpoint_connection_reject_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** The ID of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted. */
    az_mariadb_server_private_endpoint_connection_reject_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_private_endpoint_connection_reject_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the private endpoint connection associated with the Server. Required if --id is not specified. */
    az_mariadb_server_private_endpoint_connection_reject_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource group name of specified server. */
    az_mariadb_server_private_endpoint_connection_reject_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Server. Required if --id is not specified. */
    az_mariadb_server_private_endpoint_connection_reject_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_private_endpoint_connection_reject_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_private_endpoint_connection_reject_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_private_endpoint_connection_show_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_private_endpoint_connection_show_command_builder, _super);
    function az_mariadb_server_private_endpoint_connection_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The ID of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted. */
    az_mariadb_server_private_endpoint_connection_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_private_endpoint_connection_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the private endpoint connection associated with the Server. Required if --id is not specified. */
    az_mariadb_server_private_endpoint_connection_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mariadb_server_private_endpoint_connection_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The resource group name of specified server. */
    az_mariadb_server_private_endpoint_connection_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Server. Required if --id is not specified. */
    az_mariadb_server_private_endpoint_connection_show_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_private_endpoint_connection_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_private_endpoint_connection_show_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_private_link_resource_list_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_private_link_resource_list_command_builder, _super);
    function az_mariadb_server_private_link_resource_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_private_link_resource_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mariadb_server_private_link_resource_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_private_link_resource_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Server. */
    az_mariadb_server_private_link_resource_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_private_link_resource_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_private_link_resource_list_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_replica_create_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_replica_create_command_builder, _super);
    function az_mariadb_server_replica_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, sourceServer) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.sourceServer(sourceServer);
        return _this;
    }
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_replica_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_replica_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name or resource ID of the master server to the create replica for. */
    az_mariadb_server_replica_create_command_builder.prototype.sourceServer = function (value) {
        this.setFlag("--source-server", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. If not provided, the create replica will be in the same location as the master server. */
    az_mariadb_server_replica_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_mariadb_server_replica_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The name of the sku. Follows the convention {pricing tier}_{compute generation}_{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16. */
    az_mariadb_server_replica_create_command_builder.prototype.skuName = function (value) {
        this.setFlag("--sku-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_replica_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_replica_create_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_replica_list_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_replica_list_command_builder, _super);
    function az_mariadb_server_replica_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_replica_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mariadb_server_replica_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_replica_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the master server. */
    az_mariadb_server_replica_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_replica_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_replica_list_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_replica_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_replica_stop_command_builder, _super);
    function az_mariadb_server_replica_stop_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_replica_stop_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_replica_stop_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_replica_stop_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_replica_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_mariadb_server_replica_stop_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_mariadb_server_replica_stop_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_vnet_rule_create_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_vnet_rule_create_command_builder, _super);
    function az_mariadb_server_vnet_rule_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, serverName, subnet) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        _this.subnet(subnet);
        return _this;
    }
    /** The name of the vnet rule. */
    az_mariadb_server_vnet_rule_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_vnet_rule_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_vnet_rule_create_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of the subnet that allows access to an Azure Postgres Server. If subnet name is provided, --vnet-name must be provided. */
    az_mariadb_server_vnet_rule_create_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Create vnet rule before virtual network has vnet service endpoint enabled. */
    az_mariadb_server_vnet_rule_create_command_builder.prototype.ignoreMissingEndpoint = function (value) {
        this.setFlag("--ignore-missing-endpoint", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_vnet_rule_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The virtual network name. */
    az_mariadb_server_vnet_rule_create_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_mariadb_server_vnet_rule_create_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_vnet_rule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_vnet_rule_delete_command_builder, _super);
    function az_mariadb_server_vnet_rule_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_vnet_rule_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the vnet rule. */
    az_mariadb_server_vnet_rule_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_vnet_rule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_vnet_rule_delete_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_vnet_rule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_vnet_rule_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_vnet_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_vnet_rule_list_command_builder, _super);
    function az_mariadb_server_vnet_rule_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_vnet_rule_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mariadb_server_vnet_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_vnet_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_vnet_rule_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_vnet_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_vnet_rule_list_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_vnet_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_vnet_rule_show_command_builder, _super);
    function az_mariadb_server_vnet_rule_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_vnet_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the vnet rule. */
    az_mariadb_server_vnet_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mariadb_server_vnet_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_vnet_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_vnet_rule_show_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_vnet_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_vnet_rule_show_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_vnet_rule_update_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_vnet_rule_update_command_builder, _super);
    function az_mariadb_server_vnet_rule_update_command_builder(commandPath, resultDataTypeName, subnet) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.subnet(subnet);
        return _this;
    }
    /** Name or ID of the subnet that allows access to an Azure Postgres Server. If subnet name is provided, --vnet-name must be provided. */
    az_mariadb_server_vnet_rule_update_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_mariadb_server_vnet_rule_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_mariadb_server_vnet_rule_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_vnet_rule_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Create vnet rule before virtual network has vnet service endpoint enabled. */
    az_mariadb_server_vnet_rule_update_command_builder.prototype.ignoreMissingEndpoint = function (value) {
        this.setFlag("--ignore-missing-endpoint", value.toString());
        return this;
    };
    /** The name of the vnet rule. */
    az_mariadb_server_vnet_rule_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_mariadb_server_vnet_rule_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_vnet_rule_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_vnet_rule_update_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_mariadb_server_vnet_rule_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_vnet_rule_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The virtual network name. */
    az_mariadb_server_vnet_rule_update_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_mariadb_server_vnet_rule_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Download log files.
 *
 * Syntax:
 * ```
 * az mariadb server-logs download --name
 *                                 [--ids]
 *                                 [--resource-group]
 *                                 [--server-name]
 *                                 [--subscription]
 * ```
 *
 * @param {string} name Space-separated list of log filenames on the server to download.
 */
var az_mariadb_server_logs_download_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_logs_download_command_builder, _super);
    function az_mariadb_server_logs_download_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Space-separated list of log filenames on the server to download. */
    az_mariadb_server_logs_download_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_logs_download_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_logs_download_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_logs_download_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_logs_download_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_logs_download_command_builder;
}(base_1.CommandBuilder));
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
 * @param {string} serverName Name of the Server.
 */
var az_mariadb_server_logs_list_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_logs_list_command_builder, _super);
    function az_mariadb_server_logs_list_command_builder(commandPath, resultDataTypeName, resourceGroup, serverName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_logs_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Server. */
    az_mariadb_server_logs_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Integer in hours to indicate file last modify time, default value is 72. */
    az_mariadb_server_logs_list_command_builder.prototype.fileLastWritten = function (value) {
        this.setFlag("--file-last-written", value);
        return this;
    };
    /** The pattern that file name should match. */
    az_mariadb_server_logs_list_command_builder.prototype.filenameContains = function (value) {
        this.setFlag("--filename-contains", value);
        return this;
    };
    /** The file size limitation to filter files. */
    az_mariadb_server_logs_list_command_builder.prototype.maxFileSize = function (value) {
        this.setFlag("--max-file-size", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mariadb_server_logs_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_logs_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_logs_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a server.
 *
 * Syntax:
 * ```
 * az mariadb server create [--admin-password]
 *                          [--admin-user]
 *                          [--assign-identity]
 *                          [--auto-grow {Disabled, Enabled}]
 *                          [--backup-retention]
 *                          [--geo-redundant-backup {Disabled, Enabled}]
 *                          [--infrastructure-encryption {Disabled, Enabled}]
 *                          [--location]
 *                          [--name]
 *                          [--public]
 *                          [--resource-group]
 *                          [--sku-name]
 *                          [--ssl-enforcement {Disabled, Enabled}]
 *                          [--storage-size]
 *                          [--subscription]
 *                          [--tags]
 *                          [--version]
 * ```
 */
var az_mariadb_server_create_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_create_command_builder, _super);
    function az_mariadb_server_create_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters. */
    az_mariadb_server_create_command_builder.prototype.adminPassword = function (value) {
        this.setFlag("--admin-password", value);
        return this;
    };
    /** Administrator username for the server. Once set, it cannot be changed. */
    az_mariadb_server_create_command_builder.prototype.adminUser = function (value) {
        this.setFlag("--admin-user", value);
        return this;
    };
    /** Generate and assign an Azure Active Directory Identity for this server for use with key management services like Azure KeyVault. */
    az_mariadb_server_create_command_builder.prototype.assignIdentity = function (value) {
        this.setFlag("--assign-identity", value);
        return this;
    };
    /** Enable or disable autogrow of the storage. Default value is Enabled. */
    az_mariadb_server_create_command_builder.prototype.autoGrow = function (value) {
        this.setFlag("--auto-grow", value);
        return this;
    };
    /** The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days. */
    az_mariadb_server_create_command_builder.prototype.backupRetention = function (value) {
        this.setFlag("--backup-retention", value);
        return this;
    };
    /** Enable or disable geo-redundant backups. Default value is Disabled. Not supported in Basic pricing tier. */
    az_mariadb_server_create_command_builder.prototype.geoRedundantBackup = function (value) {
        this.setFlag("--geo-redundant-backup", value);
        return this;
    };
    /** Add an optional second layer of encryption for data using new encryption algorithm. Default value is Disabled. */
    az_mariadb_server_create_command_builder.prototype.infrastructureEncryption = function (value) {
        this.setFlag("--infrastructure-encryption", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_mariadb_server_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Enable or disable public network access to server. When disabled, only connections made through Private Links can reach this server. Allowed values are : Enabled, Disabled, all, 0.0.0.0, <SingleIP>, <StartIP-DestinationIP>. Default is Enabled. */
    az_mariadb_server_create_command_builder.prototype.publicNetworkAccess = function (value) {
        this.setFlag("--public-network-access", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the sku. Follows the convention {pricing tier}_{compute generation}_{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16. */
    az_mariadb_server_create_command_builder.prototype.skuName = function (value) {
        this.setFlag("--sku-name", value);
        return this;
    };
    /** Enable or disable ssl enforcement for connections to server. Default is Enabled. */
    az_mariadb_server_create_command_builder.prototype.sslEnforcement = function (value) {
        this.setFlag("--ssl-enforcement", value);
        return this;
    };
    /** The storage capacity of the server (unit is megabytes). Minimum 5120 and increases in 1024 increments. Default is 51200. */
    az_mariadb_server_create_command_builder.prototype.storageSize = function (value) {
        this.setFlag("--storage-size", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_mariadb_server_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Server major version. */
    az_mariadb_server_create_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_mariadb_server_create_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_delete_command_builder, _super);
    function az_mariadb_server_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_mariadb_server_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_mariadb_server_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_georestore_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_georestore_command_builder, _super);
    function az_mariadb_server_georestore_command_builder(commandPath, resultDataTypeName, location, sourceServer) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.sourceServer(sourceServer);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_mariadb_server_georestore_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name or ID of the source server to restore from. */
    az_mariadb_server_georestore_command_builder.prototype.sourceServer = function (value) {
        this.setFlag("--source-server", value);
        return this;
    };
    /** The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days. */
    az_mariadb_server_georestore_command_builder.prototype.backupRetention = function (value) {
        this.setFlag("--backup-retention", value);
        return this;
    };
    /** Enable or disable geo-redundant backups. Default value is Disabled. Not supported in Basic pricing tier. */
    az_mariadb_server_georestore_command_builder.prototype.geoRedundantBackup = function (value) {
        this.setFlag("--geo-redundant-backup", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_georestore_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_georestore_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_mariadb_server_georestore_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_georestore_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the sku. Defaults to sku of the source server. Follows the convention {pricing tier}_{compute generation}_{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16. */
    az_mariadb_server_georestore_command_builder.prototype.skuName = function (value) {
        this.setFlag("--sku-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_georestore_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_georestore_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_list_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_list_command_builder, _super);
    function az_mariadb_server_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mariadb_server_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List available sku's in the given region.
 *
 * Syntax:
 * ```
 * az mariadb server list-skus --location
 *                             [--subscription]
 * ```
 *
 * @param {string} location The name of the location.
 */
var az_mariadb_server_list_skus_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_list_skus_command_builder, _super);
    function az_mariadb_server_list_skus_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** The name of the location. */
    az_mariadb_server_list_skus_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_list_skus_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_list_skus_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_restart_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_restart_command_builder, _super);
    function az_mariadb_server_restart_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_restart_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_restart_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_restart_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_restart_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_restart_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_restore_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_restore_command_builder, _super);
    function az_mariadb_server_restore_command_builder(commandPath, resultDataTypeName, restorePointInTime, sourceServer) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.restorePointInTime(restorePointInTime);
        _this.sourceServer(sourceServer);
        return _this;
    }
    /** The point in time to restore from (ISO8601 format), e.g., 2017-04-26T02:10:00+08:00. */
    az_mariadb_server_restore_command_builder.prototype.restorePointInTime = function (value) {
        this.setFlag("--restore-point-in-time", value);
        return this;
    };
    /** The name or resource ID of the source server to restore from. */
    az_mariadb_server_restore_command_builder.prototype.sourceServer = function (value) {
        this.setFlag("--source-server", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_restore_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_restore_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_mariadb_server_restore_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_restore_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_restore_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_restore_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_show_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_show_command_builder, _super);
    function az_mariadb_server_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mariadb_server_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_show_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_start_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_start_command_builder, _super);
    function az_mariadb_server_start_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_start_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_start_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_start_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_start_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_start_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_stop_command_builder, _super);
    function az_mariadb_server_stop_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_stop_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_stop_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_stop_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mariadb_server_stop_command_builder;
}(base_1.CommandBuilder));
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
 *                          [--public]
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
var az_mariadb_server_update_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_update_command_builder, _super);
    function az_mariadb_server_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_mariadb_server_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters. */
    az_mariadb_server_update_command_builder.prototype.adminPassword = function (value) {
        this.setFlag("--admin-password", value);
        return this;
    };
    /** Generate and assign an Azure Active Directory Identity for this server for use with key management services like Azure KeyVault. */
    az_mariadb_server_update_command_builder.prototype.assignIdentity = function (value) {
        this.setFlag("--assign-identity", value);
        return this;
    };
    /** Enable or disable autogrow of the storage. Default value is Enabled. */
    az_mariadb_server_update_command_builder.prototype.autoGrow = function (value) {
        this.setFlag("--auto-grow", value);
        return this;
    };
    /** The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days. */
    az_mariadb_server_update_command_builder.prototype.backupRetention = function (value) {
        this.setFlag("--backup-retention", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_mariadb_server_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Enable or disable public network access to server. When disabled, only connections made through Private Links can reach this server. Allowed values are : Enabled, Disabled, all, 0.0.0.0, <SingleIP>, <StartIP-DestinationIP>. Default is Enabled. */
    az_mariadb_server_update_command_builder.prototype.publicNetworkAccess = function (value) {
        this.setFlag("--public-network-access", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_mariadb_server_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_mariadb_server_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** The name of the sku. Follows the convention {pricing tier}_{compute generation}_{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16. */
    az_mariadb_server_update_command_builder.prototype.skuName = function (value) {
        this.setFlag("--sku-name", value);
        return this;
    };
    /** Enable or disable ssl enforcement for connections to server. Default is Enabled. */
    az_mariadb_server_update_command_builder.prototype.sslEnforcement = function (value) {
        this.setFlag("--ssl-enforcement", value);
        return this;
    };
    /** The storage capacity of the server (unit is megabytes). Minimum 5120 and increases in 1024 increments. Default is 51200. */
    az_mariadb_server_update_command_builder.prototype.storageSize = function (value) {
        this.setFlag("--storage-size", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_mariadb_server_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_mariadb_server_update_command_builder;
}(base_1.CommandBuilder));
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
var az_mariadb_server_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_mariadb_server_wait_command_builder, _super);
    function az_mariadb_server_wait_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_mariadb_server_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_mariadb_server_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mariadb_server_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_mariadb_server_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mariadb_server_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mariadb_server_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mariadb_server_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_mariadb_server_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    return az_mariadb_server_wait_command_builder;
}(base_1.CommandBuilder));
