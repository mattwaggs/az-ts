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
exports.az_mysql = exports.az_mysql_server = exports.az_mysql_server_logs = exports.az_mysql_server_vnet_rule = exports.az_mysql_server_replica = exports.az_mysql_server_private_link_resource = exports.az_mysql_server_private_endpoint_connection = exports.az_mysql_server_key = exports.az_mysql_server_firewall_rule = exports.az_mysql_server_configuration = exports.az_mysql_server_ad_admin = exports.az_mysql_flexible_server = exports.az_mysql_flexible_server_replica = exports.az_mysql_flexible_server_parameter = exports.az_mysql_flexible_server_firewall_rule = exports.az_mysql_flexible_server_db = exports.az_mysql_db = void 0;
var base_1 = require("../base");
/** Manage MySQL databases on a server. */
var az_mysql_db = /** @class */ (function () {
    function az_mysql_db() {
    }
    /**
     * Create a MySQL database.
     *
     * Syntax:
     * ```
     * az mysql db create --name
     *                    --resource-group
     *                    --server-name
     *                    [--charset]
     *                    [--collation]
     *                    [--subscription]
     * ```
     *
     * @param {string} name The name of the database.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     */
    az_mysql_db.create = function (name, resourceGroup, serverName) {
        return new az_mysql_db_create_command_builder("az mysql db create", 'az_mysql_db_create_command_result', name, resourceGroup, serverName);
    };
    /**
     * Delete a database.
     *
     * Syntax:
     * ```
     * az mysql db delete --name
     *                    [--ids]
     *                    [--resource-group]
     *                    [--server-name]
     *                    [--subscription]
     *                    [--yes]
     * ```
     *
     * @param {string} name The name of the database.
     */
    az_mysql_db["delete"] = function (name) {
        return new az_mysql_db_delete_command_builder("az mysql db delete", 'az_mysql_db_delete_command_result', name);
    };
    /**
     * List the databases for a server.
     *
     * Syntax:
     * ```
     * az mysql db list --resource-group
     *                  --server-name
     *                  [--query-examples]
     *                  [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the Server.
     */
    az_mysql_db.list = function (resourceGroup, serverName) {
        return new az_mysql_db_list_command_builder("az mysql db list", 'az_mysql_db_list_command_result', resourceGroup, serverName);
    };
    /**
     * Show the details of a database.
     *
     * Syntax:
     * ```
     * az mysql db show --name
     *                  [--ids]
     *                  [--query-examples]
     *                  [--resource-group]
     *                  [--server-name]
     *                  [--subscription]
     * ```
     *
     * @param {string} name The name of the database.
     */
    az_mysql_db.show = function (name) {
        return new az_mysql_db_show_command_builder("az mysql db show", 'az_mysql_db_show_command_result', name);
    };
    return az_mysql_db;
}());
exports.az_mysql_db = az_mysql_db;
/** Manage MySQL databases on a flexible server. */
var az_mysql_flexible_server_db = /** @class */ (function () {
    function az_mysql_flexible_server_db() {
    }
    /**
     * Create a MySQL database on a flexible server.
     *
     * Syntax:
     * ```
     * az mysql flexible-server db create --database-name
     *                                    --resource-group
     *                                    --server-name
     *                                    [--charset]
     *                                    [--collation]
     *                                    [--subscription]
     * ```
     *
     * @param {string} databaseName The name of a database.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server.
     */
    az_mysql_flexible_server_db.create = function (databaseName, resourceGroup, serverName) {
        return new az_mysql_flexible_server_db_create_command_builder("az mysql flexible-server db create", 'az_mysql_flexible_server_db_create_command_result', databaseName, resourceGroup, serverName);
    };
    /**
     * Delete a database on a flexible server.
     *
     * Syntax:
     * ```
     * az mysql flexible-server db delete [--database-name]
     *                                    [--ids]
     *                                    [--resource-group]
     *                                    [--server-name]
     *                                    [--subscription]
     *                                    [--yes]
     * ```
     */
    az_mysql_flexible_server_db["delete"] = function () {
        return new az_mysql_flexible_server_db_delete_command_builder("az mysql flexible-server db delete", 'az_mysql_flexible_server_db_delete_command_result');
    };
    /**
     * List the databases for a flexible server.
     *
     * Syntax:
     * ```
     * az mysql flexible-server db list --resource-group
     *                                  --server-name
     *                                  [--query-examples]
     *                                  [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     */
    az_mysql_flexible_server_db.list = function (resourceGroup, serverName) {
        return new az_mysql_flexible_server_db_list_command_builder("az mysql flexible-server db list", 'az_mysql_flexible_server_db_list_command_result', resourceGroup, serverName);
    };
    /**
     * Show the details of a database.
     *
     * Syntax:
     * ```
     * az mysql flexible-server db show --database-name
     *                                  [--ids]
     *                                  [--query-examples]
     *                                  [--resource-group]
     *                                  [--server-name]
     *                                  [--subscription]
     * ```
     *
     * @param {string} databaseName The name of a database.
     */
    az_mysql_flexible_server_db.show = function (databaseName) {
        return new az_mysql_flexible_server_db_show_command_builder("az mysql flexible-server db show", 'az_mysql_flexible_server_db_show_command_result', databaseName);
    };
    return az_mysql_flexible_server_db;
}());
exports.az_mysql_flexible_server_db = az_mysql_flexible_server_db;
/** Manage firewall rules for a server. */
var az_mysql_flexible_server_firewall_rule = /** @class */ (function () {
    function az_mysql_flexible_server_firewall_rule() {
    }
    /**
     * Create a new firewall rule for a flexible server.
     *
     * Syntax:
     * ```
     * az mysql flexible-server firewall-rule create --end-ip-address
     *                                               --name
     *                                               --resource-group
     *                                               --rule-name
     *                                               --start-ip-address
     *                                               [--subscription]
     * ```
     *
     * @param {string} endIpAddress The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
     * @param {string} name Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} ruleName The name of the firewall rule. If name is omitted, default name will be chosen for firewall name. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters.
     * @param {string} startIpAddress The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
     */
    az_mysql_flexible_server_firewall_rule.create = function (endIpAddress, name, resourceGroup, ruleName, startIpAddress) {
        return new az_mysql_flexible_server_firewall_rule_create_command_builder("az mysql flexible-server firewall-rule create", 'az_mysql_flexible_server_firewall_rule_create_command_result', endIpAddress, name, resourceGroup, ruleName, startIpAddress);
    };
    /**
     * Delete a firewall rule.
     *
     * Syntax:
     * ```
     * az mysql flexible-server firewall-rule delete [--ids]
     *                                               [--name]
     *                                               [--resource-group]
     *                                               [--rule-name]
     *                                               [--subscription]
     *                                               [--yes]
     * ```
     */
    az_mysql_flexible_server_firewall_rule["delete"] = function () {
        return new az_mysql_flexible_server_firewall_rule_delete_command_builder("az mysql flexible-server firewall-rule delete", 'az_mysql_flexible_server_firewall_rule_delete_command_result');
    };
    /**
     * List all firewall rules for a flexible server.
     *
     * Syntax:
     * ```
     * az mysql flexible-server firewall-rule list --name
     *                                             --resource-group
     *                                             [--query-examples]
     *                                             [--subscription]
     * ```
     *
     * @param {string} name Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_mysql_flexible_server_firewall_rule.list = function (name, resourceGroup) {
        return new az_mysql_flexible_server_firewall_rule_list_command_builder("az mysql flexible-server firewall-rule list", 'az_mysql_flexible_server_firewall_rule_list_command_result', name, resourceGroup);
    };
    /**
     * Get the details of a firewall rule.
     *
     * Syntax:
     * ```
     * az mysql flexible-server firewall-rule show [--ids]
     *                                             [--name]
     *                                             [--query-examples]
     *                                             [--resource-group]
     *                                             [--rule-name]
     *                                             [--subscription]
     * ```
     */
    az_mysql_flexible_server_firewall_rule.show = function () {
        return new az_mysql_flexible_server_firewall_rule_show_command_builder("az mysql flexible-server firewall-rule show", 'az_mysql_flexible_server_firewall_rule_show_command_result');
    };
    /**
     * Update a firewall rule.
     *
     * Syntax:
     * ```
     * az mysql flexible-server firewall-rule update [--add]
     *                                               [--end-ip-address]
     *                                               [--force-string]
     *                                               [--ids]
     *                                               [--name]
     *                                               [--remove]
     *                                               [--resource-group]
     *                                               [--rule-name]
     *                                               [--set]
     *                                               [--start-ip-address]
     *                                               [--subscription]
     * ```
     */
    az_mysql_flexible_server_firewall_rule.update = function () {
        return new az_mysql_flexible_server_firewall_rule_update_command_builder("az mysql flexible-server firewall-rule update", 'az_mysql_flexible_server_firewall_rule_update_command_result');
    };
    return az_mysql_flexible_server_firewall_rule;
}());
exports.az_mysql_flexible_server_firewall_rule = az_mysql_flexible_server_firewall_rule;
/** Commands for managing server parameter values for flexible server. */
var az_mysql_flexible_server_parameter = /** @class */ (function () {
    function az_mysql_flexible_server_parameter() {
    }
    /**
     * List the parameter values for a flexible server.
     *
     * Syntax:
     * ```
     * az mysql flexible-server parameter list --resource-group
     *                                         --server-name
     *                                         [--query-examples]
     *                                         [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     */
    az_mysql_flexible_server_parameter.list = function (resourceGroup, serverName) {
        return new az_mysql_flexible_server_parameter_list_command_builder("az mysql flexible-server parameter list", 'az_mysql_flexible_server_parameter_list_command_result', resourceGroup, serverName);
    };
    /**
     * Update the parameter of a flexible server.
     *
     * Syntax:
     * ```
     * az mysql flexible-server parameter set [--ids]
     *                                        [--name]
     *                                        [--resource-group]
     *                                        [--server-name]
     *                                        [--source]
     *                                        [--subscription]
     *                                        [--value]
     * ```
     */
    az_mysql_flexible_server_parameter.set = function () {
        return new az_mysql_flexible_server_parameter_set_command_builder("az mysql flexible-server parameter set", 'az_mysql_flexible_server_parameter_set_command_result');
    };
    /**
     * Get the parameter for a flexible server.".
     *
     * Syntax:
     * ```
     * az mysql flexible-server parameter show [--ids]
     *                                         [--name]
     *                                         [--query-examples]
     *                                         [--resource-group]
     *                                         [--server-name]
     *                                         [--subscription]
     * ```
     */
    az_mysql_flexible_server_parameter.show = function () {
        return new az_mysql_flexible_server_parameter_show_command_builder("az mysql flexible-server parameter show", 'az_mysql_flexible_server_parameter_show_command_result');
    };
    return az_mysql_flexible_server_parameter;
}());
exports.az_mysql_flexible_server_parameter = az_mysql_flexible_server_parameter;
/** Manage read replicas. */
var az_mysql_flexible_server_replica = /** @class */ (function () {
    function az_mysql_flexible_server_replica() {
    }
    /**
     * Create a read replica for a server.
     *
     * Syntax:
     * ```
     * az mysql flexible-server replica create --replica-name
     *                                         --resource-group
     *                                         --source-server
     *                                         [--no-wait]
     *                                         [--subscription]
     * ```
     *
     * @param {string} replicaName The name of the server to restore to.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} sourceServer The name or resource ID of the source server to restore from.
     */
    az_mysql_flexible_server_replica.create = function (replicaName, resourceGroup, sourceServer) {
        return new az_mysql_flexible_server_replica_create_command_builder("az mysql flexible-server replica create", 'az_mysql_flexible_server_replica_create_command_result', replicaName, resourceGroup, sourceServer);
    };
    /**
     * List all read replicas for a given server.
     *
     * Syntax:
     * ```
     * az mysql flexible-server replica list --name
     *                                       --resource-group
     *                                       [--query-examples]
     *                                       [--subscription]
     * ```
     *
     * @param {string} name Name of the source server.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_mysql_flexible_server_replica.list = function (name, resourceGroup) {
        return new az_mysql_flexible_server_replica_list_command_builder("az mysql flexible-server replica list", 'az_mysql_flexible_server_replica_list_command_result', name, resourceGroup);
    };
    /**
     * Stop replication to a read replica and make it a read/write server.
     *
     * Syntax:
     * ```
     * az mysql flexible-server replica stop-replication [--ids]
     *                                                   [--name]
     *                                                   [--resource-group]
     *                                                   [--subscription]
     *                                                   [--yes]
     * ```
     */
    az_mysql_flexible_server_replica.stop_replication = function () {
        return new az_mysql_flexible_server_replica_stop_replication_command_builder("az mysql flexible-server replica stop-replication", 'az_mysql_flexible_server_replica_stop_replication_command_result');
    };
    return az_mysql_flexible_server_replica;
}());
exports.az_mysql_flexible_server_replica = az_mysql_flexible_server_replica;
/** Manage Azure Database for MySQL Flexible Servers. */
var az_mysql_flexible_server = /** @class */ (function () {
    function az_mysql_flexible_server() {
    }
    /**
     * Create a flexible server.
     *
     * Syntax:
     * ```
     * az mysql flexible-server create [--address-prefixes]
     *                                 [--admin-password]
     *                                 [--admin-user,]
     *                                 [--assign-identity]
     *                                 [--backup-retention]
     *                                 [--high-availability]
     *                                 [--location]
     *                                 [--name]
     *                                 [--public-access]
     *                                 [--resource-group]
     *                                 [--sku-name]
     *                                 [--storage-size]
     *                                 [--subnet]
     *                                 [--subnet-prefixes]
     *                                 [--subscription]
     *                                 [--tags]
     *                                 [--tier]
     *                                 [--version]
     *                                 [--vnet]
     *                                 [--zone,]
     * ```
     */
    az_mysql_flexible_server.create = function () {
        return new az_mysql_flexible_server_create_command_builder("az mysql flexible-server create", 'az_mysql_flexible_server_create_command_result');
    };
    /**
     * Delete a flexible server.
     *
     * Syntax:
     * ```
     * az mysql flexible-server delete [--ids]
     *                                 [--name]
     *                                 [--resource-group]
     *                                 [--subscription]
     *                                 [--yes]
     * ```
     */
    az_mysql_flexible_server["delete"] = function () {
        return new az_mysql_flexible_server_delete_command_builder("az mysql flexible-server delete", 'az_mysql_flexible_server_delete_command_result');
    };
    /**
     * List available flexible servers.
     *
     * Syntax:
     * ```
     * az mysql flexible-server list [--query-examples]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     */
    az_mysql_flexible_server.list = function () {
        return new az_mysql_flexible_server_list_command_builder("az mysql flexible-server list", 'az_mysql_flexible_server_list_command_result');
    };
    /**
     * Lists available sku's in the given region.
     *
     * Syntax:
     * ```
     * az mysql flexible-server list-skus --location
     *                                    [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     */
    az_mysql_flexible_server.list_skus = function (location) {
        return new az_mysql_flexible_server_list_skus_command_builder("az mysql flexible-server list-skus", 'az_mysql_flexible_server_list_skus_command_result', location);
    };
    /**
     * Restart a flexible server.
     *
     * Syntax:
     * ```
     * az mysql flexible-server restart [--ids]
     *                                  [--name]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     */
    az_mysql_flexible_server.restart = function () {
        return new az_mysql_flexible_server_restart_command_builder("az mysql flexible-server restart", 'az_mysql_flexible_server_restart_command_result');
    };
    /**
     * Restore a flexible server from backup.
     *
     * Syntax:
     * ```
     * az mysql flexible-server restore --restore-time
     *                                  --source-server
     *                                  [--ids]
     *                                  [--location]
     *                                  [--name]
     *                                  [--no-wait]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     *
     * @param {string} restoreTime The point in time to restore from (ISO8601 format), e.g., 2017-04-26T02:10:00+08:00.
     * @param {string} sourceServer The name or resource ID of the source server to restore from.
     */
    az_mysql_flexible_server.restore = function (restoreTime, sourceServer) {
        return new az_mysql_flexible_server_restore_command_builder("az mysql flexible-server restore", 'az_mysql_flexible_server_restore_command_result', restoreTime, sourceServer);
    };
    /**
     * Get the details of a flexible server.
     *
     * Syntax:
     * ```
     * az mysql flexible-server show [--ids]
     *                               [--name]
     *                               [--query-examples]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     */
    az_mysql_flexible_server.show = function () {
        return new az_mysql_flexible_server_show_command_builder("az mysql flexible-server show", 'az_mysql_flexible_server_show_command_result');
    };
    /**
     * Show the connection strings for a MySQL flexible-server database.
     *
     * Syntax:
     * ```
     * az mysql flexible-server show-connection-string [--admin-password]
     *                                                 [--admin-user]
     *                                                 [--database-name]
     *                                                 [--ids]
     *                                                 [--server-name]
     *                                                 [--subscription]
     * ```
     */
    az_mysql_flexible_server.show_connection_string = function () {
        return new az_mysql_flexible_server_show_connection_string_command_builder("az mysql flexible-server show-connection-string", 'az_mysql_flexible_server_show_connection_string_command_result');
    };
    /**
     * Start a flexible server.
     *
     * Syntax:
     * ```
     * az mysql flexible-server start [--ids]
     *                                [--name]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     */
    az_mysql_flexible_server.start = function () {
        return new az_mysql_flexible_server_start_command_builder("az mysql flexible-server start", 'az_mysql_flexible_server_start_command_result');
    };
    /**
     * Stop a flexible server.
     *
     * Syntax:
     * ```
     * az mysql flexible-server stop [--ids]
     *                               [--name]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     */
    az_mysql_flexible_server.stop = function () {
        return new az_mysql_flexible_server_stop_command_builder("az mysql flexible-server stop", 'az_mysql_flexible_server_stop_command_result');
    };
    /**
     * Update a flexible server.
     *
     * Syntax:
     * ```
     * az mysql flexible-server update [--add]
     *                                 [--admin-password]
     *                                 [--backup-retention]
     *                                 [--force-string]
     *                                 [--high-availability {Disabled, Enabled}]
     *                                 [--ids]
     *                                 [--maintenance-window]
     *                                 [--name]
     *                                 [--remove]
     *                                 [--replication-role]
     *                                 [--resource-group]
     *                                 [--set]
     *                                 [--sku-name]
     *                                 [--ssl-enforcement {Disabled, Enabled}]
     *                                 [--storage-auto-grow {Disabled, Enabled}]
     *                                 [--storage-size]
     *                                 [--subnet]
     *                                 [--subscription]
     *                                 [--tags]
     *                                 [--tier]
     * ```
     */
    az_mysql_flexible_server.update = function () {
        return new az_mysql_flexible_server_update_command_builder("az mysql flexible-server update", 'az_mysql_flexible_server_update_command_result');
    };
    /**
     * Wait for the flexible server to satisfy certain conditions.
     *
     * Syntax:
     * ```
     * az mysql flexible-server wait [--created]
     *                               [--custom]
     *                               [--deleted]
     *                               [--exists]
     *                               [--ids]
     *                               [--interval]
     *                               [--name]
     *                               [--resource-group]
     *                               [--subscription]
     *                               [--timeout]
     *                               [--updated]
     * ```
     */
    az_mysql_flexible_server.wait = function () {
        return new az_mysql_flexible_server_wait_command_builder("az mysql flexible-server wait", 'az_mysql_flexible_server_wait_command_result');
    };
    return az_mysql_flexible_server;
}());
exports.az_mysql_flexible_server = az_mysql_flexible_server;
/** Manage a MySQL server's Active Directory administrator. */
var az_mysql_server_ad_admin = /** @class */ (function () {
    function az_mysql_server_ad_admin() {
    }
    /**
     * Create an Active Directory administrator for MySQL server.
     *
     * Syntax:
     * ```
     * az mysql server ad-admin create --resource-group
     *                                 --server-name
     *                                 [--display-name]
     *                                 [--no-wait]
     *                                 [--object-id]
     *                                 [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     */
    az_mysql_server_ad_admin.create = function (resourceGroup, serverName) {
        return new az_mysql_server_ad_admin_create_command_builder("az mysql server ad-admin create", 'az_mysql_server_ad_admin_create_command_result', resourceGroup, serverName);
    };
    /**
     * Delete an Active Directory Administrator for MySQL server.
     *
     * Syntax:
     * ```
     * az mysql server ad-admin delete [--ids]
     *                                 [--resource-group]
     *                                 [--server-name]
     *                                 [--subscription]
     *                                 [--yes]
     * ```
     */
    az_mysql_server_ad_admin["delete"] = function () {
        return new az_mysql_server_ad_admin_delete_command_builder("az mysql server ad-admin delete", 'az_mysql_server_ad_admin_delete_command_result');
    };
    /**
     * List all Active Directory Administrators for MySQL server.
     *
     * Syntax:
     * ```
     * az mysql server ad-admin list [--ids]
     *                               [--query-examples]
     *                               [--resource-group]
     *                               [--server-name]
     *                               [--subscription]
     * ```
     */
    az_mysql_server_ad_admin.list = function () {
        return new az_mysql_server_ad_admin_list_command_builder("az mysql server ad-admin list", 'az_mysql_server_ad_admin_list_command_result');
    };
    /**
     * Get Active Directory Administrator information for a MySQL server.
     *
     * Syntax:
     * ```
     * az mysql server ad-admin show [--ids]
     *                               [--query-examples]
     *                               [--resource-group]
     *                               [--server-name]
     *                               [--subscription]
     * ```
     */
    az_mysql_server_ad_admin.show = function () {
        return new az_mysql_server_ad_admin_show_command_builder("az mysql server ad-admin show", 'az_mysql_server_ad_admin_show_command_result');
    };
    /**
     * Place the CLI in a waiting state until a condition of the MySQL server Active Directory Administrator is met.
     *
     * Syntax:
     * ```
     * az mysql server ad-admin wait [--created]
     *                               [--custom]
     *                               [--deleted]
     *                               [--exists]
     *                               [--ids]
     *                               [--interval]
     *                               [--resource-group]
     *                               [--server-name]
     *                               [--subscription]
     *                               [--timeout]
     *                               [--updated]
     * ```
     */
    az_mysql_server_ad_admin.wait = function () {
        return new az_mysql_server_ad_admin_wait_command_builder("az mysql server ad-admin wait", 'az_mysql_server_ad_admin_wait_command_result');
    };
    return az_mysql_server_ad_admin;
}());
exports.az_mysql_server_ad_admin = az_mysql_server_ad_admin;
/** Manage configuration values for a server. */
var az_mysql_server_configuration = /** @class */ (function () {
    function az_mysql_server_configuration() {
    }
    /**
     * List the configuration values for a server.
     *
     * Syntax:
     * ```
     * az mysql server configuration list [--ids]
     *                                    [--query-examples]
     *                                    [--resource-group]
     *                                    [--server-name]
     *                                    [--subscription]
     * ```
     */
    az_mysql_server_configuration.list = function () {
        return new az_mysql_server_configuration_list_command_builder("az mysql server configuration list", 'az_mysql_server_configuration_list_command_result');
    };
    /**
     * Update the configuration of a server.
     *
     * Syntax:
     * ```
     * az mysql server configuration set [--ids]
     *                                   [--name]
     *                                   [--resource-group]
     *                                   [--server-name]
     *                                   [--subscription]
     *                                   [--value]
     * ```
     */
    az_mysql_server_configuration.set = function () {
        return new az_mysql_server_configuration_set_command_builder("az mysql server configuration set", 'az_mysql_server_configuration_set_command_result');
    };
    /**
     * Get the configuration for a server.".
     *
     * Syntax:
     * ```
     * az mysql server configuration show [--ids]
     *                                    [--name]
     *                                    [--query-examples]
     *                                    [--resource-group]
     *                                    [--server-name]
     *                                    [--subscription]
     * ```
     */
    az_mysql_server_configuration.show = function () {
        return new az_mysql_server_configuration_show_command_builder("az mysql server configuration show", 'az_mysql_server_configuration_show_command_result');
    };
    return az_mysql_server_configuration;
}());
exports.az_mysql_server_configuration = az_mysql_server_configuration;
/** Manage firewall rules for a server. */
var az_mysql_server_firewall_rule = /** @class */ (function () {
    function az_mysql_server_firewall_rule() {
    }
    /**
     * Create a new firewall rule for a server.
     *
     * Syntax:
     * ```
     * az mysql server firewall-rule create --end-ip-address
     *                                      --name
     *                                      --resource-group
     *                                      --server-name
     *                                      --start-ip-address
     *                                      [--subscription]
     * ```
     *
     * @param {string} endIpAddress The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
     * @param {string} name The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     * @param {string} startIpAddress The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
     */
    az_mysql_server_firewall_rule.create = function (endIpAddress, name, resourceGroup, serverName, startIpAddress) {
        return new az_mysql_server_firewall_rule_create_command_builder("az mysql server firewall-rule create", 'az_mysql_server_firewall_rule_create_command_result', endIpAddress, name, resourceGroup, serverName, startIpAddress);
    };
    /**
     * Delete a firewall rule.
     *
     * Syntax:
     * ```
     * az mysql server firewall-rule delete [--ids]
     *                                      [--name]
     *                                      [--resource-group]
     *                                      [--server-name]
     *                                      [--subscription]
     *                                      [--yes]
     * ```
     */
    az_mysql_server_firewall_rule["delete"] = function () {
        return new az_mysql_server_firewall_rule_delete_command_builder("az mysql server firewall-rule delete", 'az_mysql_server_firewall_rule_delete_command_result');
    };
    /**
     * List all firewall rules for a server.
     *
     * Syntax:
     * ```
     * az mysql server firewall-rule list [--ids]
     *                                    [--query-examples]
     *                                    [--resource-group]
     *                                    [--server-name]
     *                                    [--subscription]
     * ```
     */
    az_mysql_server_firewall_rule.list = function () {
        return new az_mysql_server_firewall_rule_list_command_builder("az mysql server firewall-rule list", 'az_mysql_server_firewall_rule_list_command_result');
    };
    /**
     * Get the details of a firewall rule.
     *
     * Syntax:
     * ```
     * az mysql server firewall-rule show [--ids]
     *                                    [--name]
     *                                    [--query-examples]
     *                                    [--resource-group]
     *                                    [--server-name]
     *                                    [--subscription]
     * ```
     */
    az_mysql_server_firewall_rule.show = function () {
        return new az_mysql_server_firewall_rule_show_command_builder("az mysql server firewall-rule show", 'az_mysql_server_firewall_rule_show_command_result');
    };
    /**
     * Update a firewall rule.
     *
     * Syntax:
     * ```
     * az mysql server firewall-rule update [--add]
     *                                      [--end-ip-address]
     *                                      [--force-string]
     *                                      [--ids]
     *                                      [--name]
     *                                      [--remove]
     *                                      [--resource-group]
     *                                      [--server-name]
     *                                      [--set]
     *                                      [--start-ip-address]
     *                                      [--subscription]
     * ```
     */
    az_mysql_server_firewall_rule.update = function () {
        return new az_mysql_server_firewall_rule_update_command_builder("az mysql server firewall-rule update", 'az_mysql_server_firewall_rule_update_command_result');
    };
    return az_mysql_server_firewall_rule;
}());
exports.az_mysql_server_firewall_rule = az_mysql_server_firewall_rule;
/** Manage MySQL server keys. */
var az_mysql_server_key = /** @class */ (function () {
    function az_mysql_server_key() {
    }
    /**
     * Create server key.
     *
     * Syntax:
     * ```
     * az mysql server key create --kid
     *                            --name
     *                            --resource-group
     *                            [--subscription]
     * ```
     *
     * @param {string} kid The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>".
     * @param {string} name Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_mysql_server_key.create = function (kid, name, resourceGroup) {
        return new az_mysql_server_key_create_command_builder("az mysql server key create", 'az_mysql_server_key_create_command_result', kid, name, resourceGroup);
    };
    /**
     * Delete server key.
     *
     * Syntax:
     * ```
     * az mysql server key delete --kid
     *                            [--ids]
     *                            [--name]
     *                            [--resource-group]
     *                            [--subscription]
     *                            [--yes]
     * ```
     *
     * @param {string} kid The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>".
     */
    az_mysql_server_key["delete"] = function (kid) {
        return new az_mysql_server_key_delete_command_builder("az mysql server key delete", 'az_mysql_server_key_delete_command_result', kid);
    };
    /**
     * Gets a list of  Server keys.
     *
     * Syntax:
     * ```
     * az mysql server key list [--ids]
     *                          [--name]
     *                          [--query-examples]
     *                          [--resource-group]
     *                          [--subscription]
     * ```
     */
    az_mysql_server_key.list = function () {
        return new az_mysql_server_key_list_command_builder("az mysql server key list", 'az_mysql_server_key_list_command_result');
    };
    /**
     * Show server key.
     *
     * Syntax:
     * ```
     * az mysql server key show --kid
     *                          [--ids]
     *                          [--name]
     *                          [--query-examples]
     *                          [--resource-group]
     *                          [--subscription]
     * ```
     *
     * @param {string} kid The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>".
     */
    az_mysql_server_key.show = function (kid) {
        return new az_mysql_server_key_show_command_builder("az mysql server key show", 'az_mysql_server_key_show_command_result', kid);
    };
    return az_mysql_server_key;
}());
exports.az_mysql_server_key = az_mysql_server_key;
/** Manage MySQL server private endpoint connections. */
var az_mysql_server_private_endpoint_connection = /** @class */ (function () {
    function az_mysql_server_private_endpoint_connection() {
    }
    /**
     * Approve the specified private endpoint connection associated with a MySQL server.
     *
     * Syntax:
     * ```
     * az mysql server private-endpoint-connection approve [--description]
     *                                                     [--id]
     *                                                     [--ids]
     *                                                     [--name]
     *                                                     [--resource-group]
     *                                                     [--server-name]
     *                                                     [--subscription]
     * ```
     */
    az_mysql_server_private_endpoint_connection.approve = function () {
        return new az_mysql_server_private_endpoint_connection_approve_command_builder("az mysql server private-endpoint-connection approve", 'az_mysql_server_private_endpoint_connection_approve_command_result');
    };
    /**
     * Delete the specified private endpoint connection associated with a MySQL server.
     *
     * Syntax:
     * ```
     * az mysql server private-endpoint-connection delete [--id]
     *                                                    [--ids]
     *                                                    [--name]
     *                                                    [--resource-group]
     *                                                    [--server-name]
     *                                                    [--subscription]
     * ```
     */
    az_mysql_server_private_endpoint_connection["delete"] = function () {
        return new az_mysql_server_private_endpoint_connection_delete_command_builder("az mysql server private-endpoint-connection delete", 'az_mysql_server_private_endpoint_connection_delete_command_result');
    };
    /**
     * Reject the specified private endpoint connection associated with a MySQL server.
     *
     * Syntax:
     * ```
     * az mysql server private-endpoint-connection reject [--description]
     *                                                    [--id]
     *                                                    [--ids]
     *                                                    [--name]
     *                                                    [--resource-group]
     *                                                    [--server-name]
     *                                                    [--subscription]
     * ```
     */
    az_mysql_server_private_endpoint_connection.reject = function () {
        return new az_mysql_server_private_endpoint_connection_reject_command_builder("az mysql server private-endpoint-connection reject", 'az_mysql_server_private_endpoint_connection_reject_command_result');
    };
    /**
     * Show details of a private endpoint connection associated with a MySQL server.
     *
     * Syntax:
     * ```
     * az mysql server private-endpoint-connection show [--id]
     *                                                  [--ids]
     *                                                  [--name]
     *                                                  [--query-examples]
     *                                                  [--resource-group]
     *                                                  [--server-name]
     *                                                  [--subscription]
     * ```
     */
    az_mysql_server_private_endpoint_connection.show = function () {
        return new az_mysql_server_private_endpoint_connection_show_command_builder("az mysql server private-endpoint-connection show", 'az_mysql_server_private_endpoint_connection_show_command_result');
    };
    return az_mysql_server_private_endpoint_connection;
}());
exports.az_mysql_server_private_endpoint_connection = az_mysql_server_private_endpoint_connection;
/** Manage MySQL server private link resources. */
var az_mysql_server_private_link_resource = /** @class */ (function () {
    function az_mysql_server_private_link_resource() {
    }
    /**
     * List the private link resources supported for a MySQL server.
     *
     * Syntax:
     * ```
     * az mysql server private-link-resource list [--ids]
     *                                            [--query-examples]
     *                                            [--resource-group]
     *                                            [--server-name]
     *                                            [--subscription]
     * ```
     */
    az_mysql_server_private_link_resource.list = function () {
        return new az_mysql_server_private_link_resource_list_command_builder("az mysql server private-link-resource list", 'az_mysql_server_private_link_resource_list_command_result');
    };
    return az_mysql_server_private_link_resource;
}());
exports.az_mysql_server_private_link_resource = az_mysql_server_private_link_resource;
/** Manage read replicas. */
var az_mysql_server_replica = /** @class */ (function () {
    function az_mysql_server_replica() {
    }
    /**
     * Create a read replica for a server.
     *
     * Syntax:
     * ```
     * az mysql server replica create --name
     *                                --resource-group
     *                                --source-server
     *                                [--location]
     *                                [--no-wait]
     *                                [--sku-name]
     *                                [--subscription]
     * ```
     *
     * @param {string} name Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} sourceServer The name or resource ID of the master server to the create replica for.
     */
    az_mysql_server_replica.create = function (name, resourceGroup, sourceServer) {
        return new az_mysql_server_replica_create_command_builder("az mysql server replica create", 'az_mysql_server_replica_create_command_result', name, resourceGroup, sourceServer);
    };
    /**
     * List all read replicas for a given server.
     *
     * Syntax:
     * ```
     * az mysql server replica list [--ids]
     *                              [--query-examples]
     *                              [--resource-group]
     *                              [--server-name]
     *                              [--subscription]
     * ```
     */
    az_mysql_server_replica.list = function () {
        return new az_mysql_server_replica_list_command_builder("az mysql server replica list", 'az_mysql_server_replica_list_command_result');
    };
    /**
     * Stop replication to a read replica and make it a read/write server.
     *
     * Syntax:
     * ```
     * az mysql server replica stop [--ids]
     *                              [--name]
     *                              [--resource-group]
     *                              [--subscription]
     *                              [--yes]
     * ```
     */
    az_mysql_server_replica.stop = function () {
        return new az_mysql_server_replica_stop_command_builder("az mysql server replica stop", 'az_mysql_server_replica_stop_command_result');
    };
    return az_mysql_server_replica;
}());
exports.az_mysql_server_replica = az_mysql_server_replica;
/** Manage a server's virtual network rules. */
var az_mysql_server_vnet_rule = /** @class */ (function () {
    function az_mysql_server_vnet_rule() {
    }
    /**
     * Create a virtual network rule to allows access to a MySQL server.
     *
     * Syntax:
     * ```
     * az mysql server vnet-rule create --name
     *                                  --resource-group
     *                                  --server-name
     *                                  --subnet
     *                                  [--ignore-missing-endpoint {false, true}]
     *                                  [--subscription]
     *                                  [--vnet-name]
     * ```
     *
     * @param {string} name The name of the vnet rule.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     * @param {string} subnet Name or ID of the subnet that allows access to an Azure Postgres Server. If subnet name is provided, --vnet-name must be provided.
     */
    az_mysql_server_vnet_rule.create = function (name, resourceGroup, serverName, subnet) {
        return new az_mysql_server_vnet_rule_create_command_builder("az mysql server vnet-rule create", 'az_mysql_server_vnet_rule_create_command_result', name, resourceGroup, serverName, subnet);
    };
    /**
     * Deletes the virtual network rule with the given name.
     *
     * Syntax:
     * ```
     * az mysql server vnet-rule delete [--ids]
     *                                  [--name]
     *                                  [--resource-group]
     *                                  [--server-name]
     *                                  [--subscription]
     * ```
     */
    az_mysql_server_vnet_rule["delete"] = function () {
        return new az_mysql_server_vnet_rule_delete_command_builder("az mysql server vnet-rule delete", 'az_mysql_server_vnet_rule_delete_command_result');
    };
    /**
     * Gets a list of virtual network rules in a server.
     *
     * Syntax:
     * ```
     * az mysql server vnet-rule list [--ids]
     *                                [--query-examples]
     *                                [--resource-group]
     *                                [--server-name]
     *                                [--subscription]
     * ```
     */
    az_mysql_server_vnet_rule.list = function () {
        return new az_mysql_server_vnet_rule_list_command_builder("az mysql server vnet-rule list", 'az_mysql_server_vnet_rule_list_command_result');
    };
    /**
     * Gets a virtual network rule.
     *
     * Syntax:
     * ```
     * az mysql server vnet-rule show [--ids]
     *                                [--name]
     *                                [--query-examples]
     *                                [--resource-group]
     *                                [--server-name]
     *                                [--subscription]
     * ```
     */
    az_mysql_server_vnet_rule.show = function () {
        return new az_mysql_server_vnet_rule_show_command_builder("az mysql server vnet-rule show", 'az_mysql_server_vnet_rule_show_command_result');
    };
    /**
     * Update a virtual network rule.
     *
     * Syntax:
     * ```
     * az mysql server vnet-rule update --subnet
     *                                  [--add]
     *                                  [--force-string]
     *                                  [--ids]
     *                                  [--ignore-missing-endpoint {false, true}]
     *                                  [--name]
     *                                  [--remove]
     *                                  [--resource-group]
     *                                  [--server-name]
     *                                  [--set]
     *                                  [--subscription]
     *                                  [--vnet-name]
     * ```
     *
     * @param {string} subnet Name or ID of the subnet that allows access to an Azure Postgres Server. If subnet name is provided, --vnet-name must be provided.
     */
    az_mysql_server_vnet_rule.update = function (subnet) {
        return new az_mysql_server_vnet_rule_update_command_builder("az mysql server vnet-rule update", 'az_mysql_server_vnet_rule_update_command_result', subnet);
    };
    return az_mysql_server_vnet_rule;
}());
exports.az_mysql_server_vnet_rule = az_mysql_server_vnet_rule;
/** Manage server logs. */
var az_mysql_server_logs = /** @class */ (function () {
    function az_mysql_server_logs() {
    }
    /**
     * Download log files.
     *
     * Syntax:
     * ```
     * az mysql server-logs download --name
     *                               [--ids]
     *                               [--resource-group]
     *                               [--server-name]
     *                               [--subscription]
     * ```
     *
     * @param {string} name Space-separated list of log filenames on the server to download.
     */
    az_mysql_server_logs.download = function (name) {
        return new az_mysql_server_logs_download_command_builder("az mysql server-logs download", 'az_mysql_server_logs_download_command_result', name);
    };
    /**
     * List log files for a server.
     *
     * Syntax:
     * ```
     * az mysql server-logs list --resource-group
     *                           --server-name
     *                           [--file-last-written]
     *                           [--filename-contains]
     *                           [--max-file-size]
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the Server.
     */
    az_mysql_server_logs.list = function (resourceGroup, serverName) {
        return new az_mysql_server_logs_list_command_builder("az mysql server-logs list", 'az_mysql_server_logs_list_command_result', resourceGroup, serverName);
    };
    return az_mysql_server_logs;
}());
exports.az_mysql_server_logs = az_mysql_server_logs;
/** Manage MySQL servers. */
var az_mysql_server = /** @class */ (function () {
    function az_mysql_server() {
    }
    /**
     * Create a server.
     *
     * Syntax:
     * ```
     * az mysql server create [--admin-password]
     *                        [--admin-user]
     *                        [--assign-identity]
     *                        [--auto-grow {Disabled, Enabled}]
     *                        [--backup-retention]
     *                        [--geo-redundant-backup {Disabled, Enabled}]
     *                        [--infrastructure-encryption {Disabled, Enabled}]
     *                        [--location]
     *                        [--minimal-tls-version {TLS1_0, TLS1_1, TLS1_2, TLSEnforcementDisabled}]
     *                        [--name]
     *                        [--public]
     *                        [--resource-group]
     *                        [--sku-name]
     *                        [--ssl-enforcement {Disabled, Enabled}]
     *                        [--storage-size]
     *                        [--subscription]
     *                        [--tags]
     *                        [--version]
     * ```
     */
    az_mysql_server.create = function () {
        return new az_mysql_server_create_command_builder("az mysql server create", 'az_mysql_server_create_command_result');
    };
    /**
     * Delete a server.
     *
     * Syntax:
     * ```
     * az mysql server delete [--ids]
     *                        [--name]
     *                        [--resource-group]
     *                        [--subscription]
     *                        [--yes]
     * ```
     */
    az_mysql_server["delete"] = function () {
        return new az_mysql_server_delete_command_builder("az mysql server delete", 'az_mysql_server_delete_command_result');
    };
    /**
     * Geo-restore a server from backup.
     *
     * Syntax:
     * ```
     * az mysql server georestore --location
     *                            --source-server
     *                            [--backup-retention]
     *                            [--geo-redundant-backup]
     *                            [--ids]
     *                            [--name]
     *                            [--no-wait]
     *                            [--resource-group]
     *                            [--sku-name]
     *                            [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} sourceServer The name or ID of the source server to restore from.
     */
    az_mysql_server.georestore = function (location, sourceServer) {
        return new az_mysql_server_georestore_command_builder("az mysql server georestore", 'az_mysql_server_georestore_command_result', location, sourceServer);
    };
    /**
     * List available servers.
     *
     * Syntax:
     * ```
     * az mysql server list [--query-examples]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    az_mysql_server.list = function () {
        return new az_mysql_server_list_command_builder("az mysql server list", 'az_mysql_server_list_command_result');
    };
    /**
     * List available sku's in the given region.
     *
     * Syntax:
     * ```
     * az mysql server list-skus --location
     *                           [--subscription]
     * ```
     *
     * @param {string} location The name of the location.
     */
    az_mysql_server.list_skus = function (location) {
        return new az_mysql_server_list_skus_command_builder("az mysql server list-skus", 'az_mysql_server_list_skus_command_result', location);
    };
    /**
     * Restart a server.
     *
     * Syntax:
     * ```
     * az mysql server restart [--ids]
     *                         [--name]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    az_mysql_server.restart = function () {
        return new az_mysql_server_restart_command_builder("az mysql server restart", 'az_mysql_server_restart_command_result');
    };
    /**
     * Restore a server from backup.
     *
     * Syntax:
     * ```
     * az mysql server restore --pitr-time
     *                         --source-server
     *                         [--ids]
     *                         [--name]
     *                         [--no-wait]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     *
     * @param {string} restorePointInTime The point in time to restore from (ISO8601 format), e.g., 2017-04-26T02:10:00+08:00.
     * @param {string} sourceServer The name or resource ID of the source server to restore from.
     */
    az_mysql_server.restore = function (restorePointInTime, sourceServer) {
        return new az_mysql_server_restore_command_builder("az mysql server restore", 'az_mysql_server_restore_command_result', restorePointInTime, sourceServer);
    };
    /**
     * Get the details of a server.
     *
     * Syntax:
     * ```
     * az mysql server show [--ids]
     *                      [--name]
     *                      [--query-examples]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    az_mysql_server.show = function () {
        return new az_mysql_server_show_command_builder("az mysql server show", 'az_mysql_server_show_command_result');
    };
    /**
     * Start a stopped server.
     *
     * Syntax:
     * ```
     * az mysql server start [--ids]
     *                       [--name]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    az_mysql_server.start = function () {
        return new az_mysql_server_start_command_builder("az mysql server start", 'az_mysql_server_start_command_result');
    };
    /**
     * Stop a running server.
     *
     * Syntax:
     * ```
     * az mysql server stop [--ids]
     *                      [--name]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    az_mysql_server.stop = function () {
        return new az_mysql_server_stop_command_builder("az mysql server stop", 'az_mysql_server_stop_command_result');
    };
    /**
     * Update a server.
     *
     * Syntax:
     * ```
     * az mysql server update [--add]
     *                        [--admin-password]
     *                        [--assign-identity]
     *                        [--auto-grow {Disabled, Enabled}]
     *                        [--backup-retention]
     *                        [--force-string]
     *                        [--ids]
     *                        [--minimal-tls-version {TLS1_0, TLS1_1, TLS1_2, TLSEnforcementDisabled}]
     *                        [--name]
     *                        [--public]
     *                        [--remove]
     *                        [--resource-group]
     *                        [--set]
     *                        [--sku-name]
     *                        [--ssl-enforcement {Disabled, Enabled}]
     *                        [--storage-size]
     *                        [--subscription]
     *                        [--tags]
     * ```
     */
    az_mysql_server.update = function () {
        return new az_mysql_server_update_command_builder("az mysql server update", 'az_mysql_server_update_command_result');
    };
    /**
     * Wait for server to satisfy certain conditions.
     *
     * Syntax:
     * ```
     * az mysql server wait [--custom]
     *                      [--exists]
     *                      [--ids]
     *                      [--interval]
     *                      [--name]
     *                      [--resource-group]
     *                      [--subscription]
     *                      [--timeout]
     * ```
     */
    az_mysql_server.wait = function () {
        return new az_mysql_server_wait_command_builder("az mysql server wait", 'az_mysql_server_wait_command_result');
    };
    return az_mysql_server;
}());
exports.az_mysql_server = az_mysql_server;
/** Manage Azure Database for MySQL servers. */
var az_mysql = /** @class */ (function () {
    function az_mysql() {
    }
    return az_mysql;
}());
exports.az_mysql = az_mysql;
/**
 * Create a MySQL database.
 *
 * Syntax:
 * ```
 * az mysql db create --name
 *                    --resource-group
 *                    --server-name
 *                    [--charset]
 *                    [--collation]
 *                    [--subscription]
 * ```
 *
 * @param {string} name The name of the database.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 */
var az_mysql_db_create_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_db_create_command_builder, _super);
    function az_mysql_db_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, serverName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        return _this;
    }
    /** The name of the database. */
    az_mysql_db_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_db_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_db_create_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** The charset of the database. */
    az_mysql_db_create_command_builder.prototype.charset = function (value) {
        this.setFlag("--charset", value);
        return this;
    };
    /** The collation of the database. */
    az_mysql_db_create_command_builder.prototype.collation = function (value) {
        this.setFlag("--collation", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_db_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_db_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a database.
 *
 * Syntax:
 * ```
 * az mysql db delete --name
 *                    [--ids]
 *                    [--resource-group]
 *                    [--server-name]
 *                    [--subscription]
 *                    [--yes]
 * ```
 *
 * @param {string} name The name of the database.
 */
var az_mysql_db_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_db_delete_command_builder, _super);
    function az_mysql_db_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the database. */
    az_mysql_db_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_db_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_db_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_db_delete_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_db_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_mysql_db_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_mysql_db_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the databases for a server.
 *
 * Syntax:
 * ```
 * az mysql db list --resource-group
 *                  --server-name
 *                  [--query-examples]
 *                  [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the Server.
 */
var az_mysql_db_list_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_db_list_command_builder, _super);
    function az_mysql_db_list_command_builder(commandPath, resultDataTypeName, resourceGroup, serverName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_db_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Server. */
    az_mysql_db_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_db_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_db_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_db_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details of a database.
 *
 * Syntax:
 * ```
 * az mysql db show --name
 *                  [--ids]
 *                  [--query-examples]
 *                  [--resource-group]
 *                  [--server-name]
 *                  [--subscription]
 * ```
 *
 * @param {string} name The name of the database.
 */
var az_mysql_db_show_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_db_show_command_builder, _super);
    function az_mysql_db_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the database. */
    az_mysql_db_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_db_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_db_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_db_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_db_show_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_db_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_db_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a MySQL database on a flexible server.
 *
 * Syntax:
 * ```
 * az mysql flexible-server db create --database-name
 *                                    --resource-group
 *                                    --server-name
 *                                    [--charset]
 *                                    [--collation]
 *                                    [--subscription]
 * ```
 *
 * @param {string} databaseName The name of a database.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server.
 */
var az_mysql_flexible_server_db_create_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_db_create_command_builder, _super);
    function az_mysql_flexible_server_db_create_command_builder(commandPath, resultDataTypeName, databaseName, resourceGroup, serverName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        return _this;
    }
    /** The name of a database. */
    az_mysql_flexible_server_db_create_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_db_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. */
    az_mysql_flexible_server_db_create_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** The charset of the database. */
    az_mysql_flexible_server_db_create_command_builder.prototype.charset = function (value) {
        this.setFlag("--charset", value);
        return this;
    };
    /** The collation of the database. */
    az_mysql_flexible_server_db_create_command_builder.prototype.collation = function (value) {
        this.setFlag("--collation", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_db_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_flexible_server_db_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a database on a flexible server.
 *
 * Syntax:
 * ```
 * az mysql flexible-server db delete [--database-name]
 *                                    [--ids]
 *                                    [--resource-group]
 *                                    [--server-name]
 *                                    [--subscription]
 *                                    [--yes]
 * ```
 */
var az_mysql_flexible_server_db_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_db_delete_command_builder, _super);
    function az_mysql_flexible_server_db_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of a database. */
    az_mysql_flexible_server_db_delete_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_flexible_server_db_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_db_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. */
    az_mysql_flexible_server_db_delete_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_db_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_mysql_flexible_server_db_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_mysql_flexible_server_db_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the databases for a flexible server.
 *
 * Syntax:
 * ```
 * az mysql flexible-server db list --resource-group
 *                                  --server-name
 *                                  [--query-examples]
 *                                  [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 */
var az_mysql_flexible_server_db_list_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_db_list_command_builder, _super);
    function az_mysql_flexible_server_db_list_command_builder(commandPath, resultDataTypeName, resourceGroup, serverName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_db_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_flexible_server_db_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_flexible_server_db_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_db_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_flexible_server_db_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details of a database.
 *
 * Syntax:
 * ```
 * az mysql flexible-server db show --database-name
 *                                  [--ids]
 *                                  [--query-examples]
 *                                  [--resource-group]
 *                                  [--server-name]
 *                                  [--subscription]
 * ```
 *
 * @param {string} databaseName The name of a database.
 */
var az_mysql_flexible_server_db_show_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_db_show_command_builder, _super);
    function az_mysql_flexible_server_db_show_command_builder(commandPath, resultDataTypeName, databaseName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        return _this;
    }
    /** The name of a database. */
    az_mysql_flexible_server_db_show_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_flexible_server_db_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_flexible_server_db_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_db_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. */
    az_mysql_flexible_server_db_show_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_db_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_flexible_server_db_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new firewall rule for a flexible server.
 *
 * Syntax:
 * ```
 * az mysql flexible-server firewall-rule create --end-ip-address
 *                                               --name
 *                                               --resource-group
 *                                               --rule-name
 *                                               --start-ip-address
 *                                               [--subscription]
 * ```
 *
 * @param {string} endIpAddress The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
 * @param {string} name Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} ruleName The name of the firewall rule. If name is omitted, default name will be chosen for firewall name. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters.
 * @param {string} startIpAddress The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
 */
var az_mysql_flexible_server_firewall_rule_create_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_firewall_rule_create_command_builder, _super);
    function az_mysql_flexible_server_firewall_rule_create_command_builder(commandPath, resultDataTypeName, endIpAddress, name, resourceGroup, ruleName, startIpAddress) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.endIpAddress(endIpAddress);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.ruleName(ruleName);
        _this.startIpAddress(startIpAddress);
        return _this;
    }
    /** The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    az_mysql_flexible_server_firewall_rule_create_command_builder.prototype.endIpAddress = function (value) {
        this.setFlag("--end-ip-address", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_flexible_server_firewall_rule_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_firewall_rule_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the firewall rule. If name is omitted, default name will be chosen for firewall name. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    az_mysql_flexible_server_firewall_rule_create_command_builder.prototype.ruleName = function (value) {
        this.setFlag("--rule-name", value);
        return this;
    };
    /** The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    az_mysql_flexible_server_firewall_rule_create_command_builder.prototype.startIpAddress = function (value) {
        this.setFlag("--start-ip-address", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_firewall_rule_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_flexible_server_firewall_rule_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a firewall rule.
 *
 * Syntax:
 * ```
 * az mysql flexible-server firewall-rule delete [--ids]
 *                                               [--name]
 *                                               [--resource-group]
 *                                               [--rule-name]
 *                                               [--subscription]
 *                                               [--yes]
 * ```
 */
var az_mysql_flexible_server_firewall_rule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_firewall_rule_delete_command_builder, _super);
    function az_mysql_flexible_server_firewall_rule_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_flexible_server_firewall_rule_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_flexible_server_firewall_rule_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_firewall_rule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the firewall rule. If name is omitted, default name will be chosen for firewall name. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    az_mysql_flexible_server_firewall_rule_delete_command_builder.prototype.ruleName = function (value) {
        this.setFlag("--rule-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_firewall_rule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_mysql_flexible_server_firewall_rule_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_mysql_flexible_server_firewall_rule_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all firewall rules for a flexible server.
 *
 * Syntax:
 * ```
 * az mysql flexible-server firewall-rule list --name
 *                                             --resource-group
 *                                             [--query-examples]
 *                                             [--subscription]
 * ```
 *
 * @param {string} name Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_mysql_flexible_server_firewall_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_firewall_rule_list_command_builder, _super);
    function az_mysql_flexible_server_firewall_rule_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_flexible_server_firewall_rule_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_firewall_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_flexible_server_firewall_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_firewall_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_flexible_server_firewall_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a firewall rule.
 *
 * Syntax:
 * ```
 * az mysql flexible-server firewall-rule show [--ids]
 *                                             [--name]
 *                                             [--query-examples]
 *                                             [--resource-group]
 *                                             [--rule-name]
 *                                             [--subscription]
 * ```
 */
var az_mysql_flexible_server_firewall_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_firewall_rule_show_command_builder, _super);
    function az_mysql_flexible_server_firewall_rule_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_flexible_server_firewall_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_flexible_server_firewall_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_flexible_server_firewall_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_firewall_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the firewall rule. If name is omitted, default name will be chosen for firewall name. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    az_mysql_flexible_server_firewall_rule_show_command_builder.prototype.ruleName = function (value) {
        this.setFlag("--rule-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_firewall_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_flexible_server_firewall_rule_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a firewall rule.
 *
 * Syntax:
 * ```
 * az mysql flexible-server firewall-rule update [--add]
 *                                               [--end-ip-address]
 *                                               [--force-string]
 *                                               [--ids]
 *                                               [--name]
 *                                               [--remove]
 *                                               [--resource-group]
 *                                               [--rule-name]
 *                                               [--set]
 *                                               [--start-ip-address]
 *                                               [--subscription]
 * ```
 */
var az_mysql_flexible_server_firewall_rule_update_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_firewall_rule_update_command_builder, _super);
    function az_mysql_flexible_server_firewall_rule_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_mysql_flexible_server_firewall_rule_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_mysql_flexible_server_firewall_rule_update_command_builder.prototype.endIpAddress = function (value) {
        this.setFlag("--end-ip-address", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_mysql_flexible_server_firewall_rule_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_flexible_server_firewall_rule_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_flexible_server_firewall_rule_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_mysql_flexible_server_firewall_rule_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_firewall_rule_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the firewall rule. If name is omitted, default name will be chosen for firewall name. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    az_mysql_flexible_server_firewall_rule_update_command_builder.prototype.ruleName = function (value) {
        this.setFlag("--rule-name", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_mysql_flexible_server_firewall_rule_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    az_mysql_flexible_server_firewall_rule_update_command_builder.prototype.startIpAddress = function (value) {
        this.setFlag("--start-ip-address", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_firewall_rule_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_flexible_server_firewall_rule_update_command_builder;
}(base_1.CommandBuilder));
/**
 * List the parameter values for a flexible server.
 *
 * Syntax:
 * ```
 * az mysql flexible-server parameter list --resource-group
 *                                         --server-name
 *                                         [--query-examples]
 *                                         [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 */
var az_mysql_flexible_server_parameter_list_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_parameter_list_command_builder, _super);
    function az_mysql_flexible_server_parameter_list_command_builder(commandPath, resultDataTypeName, resourceGroup, serverName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_parameter_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_flexible_server_parameter_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_flexible_server_parameter_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_parameter_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_flexible_server_parameter_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the parameter of a flexible server.
 *
 * Syntax:
 * ```
 * az mysql flexible-server parameter set [--ids]
 *                                        [--name]
 *                                        [--resource-group]
 *                                        [--server-name]
 *                                        [--source]
 *                                        [--subscription]
 *                                        [--value]
 * ```
 */
var az_mysql_flexible_server_parameter_set_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_parameter_set_command_builder, _super);
    function az_mysql_flexible_server_parameter_set_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_flexible_server_parameter_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the server configuration. */
    az_mysql_flexible_server_parameter_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_parameter_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_flexible_server_parameter_set_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Source of the configuration. */
    az_mysql_flexible_server_parameter_set_command_builder.prototype.source = function (value) {
        this.setFlag("--source", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_parameter_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Value of the configuration. */
    az_mysql_flexible_server_parameter_set_command_builder.prototype.value = function (value) {
        this.setFlag("--value", value);
        return this;
    };
    return az_mysql_flexible_server_parameter_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the parameter for a flexible server.".
 *
 * Syntax:
 * ```
 * az mysql flexible-server parameter show [--ids]
 *                                         [--name]
 *                                         [--query-examples]
 *                                         [--resource-group]
 *                                         [--server-name]
 *                                         [--subscription]
 * ```
 */
var az_mysql_flexible_server_parameter_show_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_parameter_show_command_builder, _super);
    function az_mysql_flexible_server_parameter_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_flexible_server_parameter_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the server configuration. */
    az_mysql_flexible_server_parameter_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_flexible_server_parameter_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_parameter_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_flexible_server_parameter_show_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_parameter_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_flexible_server_parameter_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a read replica for a server.
 *
 * Syntax:
 * ```
 * az mysql flexible-server replica create --replica-name
 *                                         --resource-group
 *                                         --source-server
 *                                         [--no-wait]
 *                                         [--subscription]
 * ```
 *
 * @param {string} replicaName The name of the server to restore to.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} sourceServer The name or resource ID of the source server to restore from.
 */
var az_mysql_flexible_server_replica_create_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_replica_create_command_builder, _super);
    function az_mysql_flexible_server_replica_create_command_builder(commandPath, resultDataTypeName, replicaName, resourceGroup, sourceServer) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.replicaName(replicaName);
        _this.resourceGroup(resourceGroup);
        _this.sourceServer(sourceServer);
        return _this;
    }
    /** The name of the server to restore to. */
    az_mysql_flexible_server_replica_create_command_builder.prototype.replicaName = function (value) {
        this.setFlag("--replica-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_replica_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name or resource ID of the source server to restore from. */
    az_mysql_flexible_server_replica_create_command_builder.prototype.sourceServer = function (value) {
        this.setFlag("--source-server", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_mysql_flexible_server_replica_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_replica_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_flexible_server_replica_create_command_builder;
}(base_1.CommandBuilder));
/**
 * List all read replicas for a given server.
 *
 * Syntax:
 * ```
 * az mysql flexible-server replica list --name
 *                                       --resource-group
 *                                       [--query-examples]
 *                                       [--subscription]
 * ```
 *
 * @param {string} name Name of the source server.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_mysql_flexible_server_replica_list_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_replica_list_command_builder, _super);
    function az_mysql_flexible_server_replica_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the source server. */
    az_mysql_flexible_server_replica_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_replica_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_flexible_server_replica_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_replica_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_flexible_server_replica_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Stop replication to a read replica and make it a read/write server.
 *
 * Syntax:
 * ```
 * az mysql flexible-server replica stop-replication [--ids]
 *                                                   [--name]
 *                                                   [--resource-group]
 *                                                   [--subscription]
 *                                                   [--yes]
 * ```
 */
var az_mysql_flexible_server_replica_stop_replication_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_replica_stop_replication_command_builder, _super);
    function az_mysql_flexible_server_replica_stop_replication_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_flexible_server_replica_stop_replication_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the replica server. */
    az_mysql_flexible_server_replica_stop_replication_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_replica_stop_replication_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_replica_stop_replication_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_mysql_flexible_server_replica_stop_replication_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_mysql_flexible_server_replica_stop_replication_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a flexible server.
 *
 * Syntax:
 * ```
 * az mysql flexible-server create [--address-prefixes]
 *                                 [--admin-password]
 *                                 [--admin-user,]
 *                                 [--assign-identity]
 *                                 [--backup-retention]
 *                                 [--high-availability]
 *                                 [--location]
 *                                 [--name]
 *                                 [--public-access]
 *                                 [--resource-group]
 *                                 [--sku-name]
 *                                 [--storage-size]
 *                                 [--subnet]
 *                                 [--subnet-prefixes]
 *                                 [--subscription]
 *                                 [--tags]
 *                                 [--tier]
 *                                 [--version]
 *                                 [--vnet]
 *                                 [--zone,]
 * ```
 */
var az_mysql_flexible_server_create_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_create_command_builder, _super);
    function az_mysql_flexible_server_create_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The IP address prefix to use when creating a new virtual network in CIDR format. Default value is 10.0.0.0/16. */
    az_mysql_flexible_server_create_command_builder.prototype.addressPrefixes = function (value) {
        this.setFlag("--address-prefixes", value);
        return this;
    };
    /** The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters. */
    az_mysql_flexible_server_create_command_builder.prototype.adminPassword = function (value) {
        this.setFlag("--admin-password", value);
        return this;
    };
    /** Administrator username for the server. Once set, it cannot be changed. */
    az_mysql_flexible_server_create_command_builder.prototype.adminUser = function (value) {
        this.setFlag("--admin-user,", value);
        return this;
    };
    /** Generate and assign an Azure Active Directory Identity for this server for use with key management services like Azure KeyVault. No need to enter extra argument. */
    az_mysql_flexible_server_create_command_builder.prototype.assignIdentity = function (value) {
        this.setFlag("--assign-identity", value);
        return this;
    };
    /** The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days. */
    az_mysql_flexible_server_create_command_builder.prototype.backupRetention = function (value) {
        this.setFlag("--backup-retention", value);
        return this;
    };
    /** Enable or disable high availability feature.  Default value is Disabled. */
    az_mysql_flexible_server_create_command_builder.prototype.highAvailability = function (value) {
        this.setFlag("--high-availability", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_mysql_flexible_server_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_flexible_server_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Determines the public access. Enter single or range of IP addresses to be included in the allowed list of IPs. IP address ranges must be dash-separated and not contain any spaces. Specifying 0.0.0.0 allows public access from any resources deployed within Azure to access your server. Specifying no IP address sets the server in public access mode but does not create a firewall rule. */
    az_mysql_flexible_server_create_command_builder.prototype.publicAccess = function (value) {
        this.setFlag("--public-access", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the compute SKU. Follows the convention Standard_{VM name}. Examples: Standard_B1ms, Standard_E16ds_v4. */
    az_mysql_flexible_server_create_command_builder.prototype.skuName = function (value) {
        this.setFlag("--sku-name", value);
        return this;
    };
    /** The storage capacity of the server. Minimum is 5 GiB and increases in 1 GiB increments. Max is 16 TiB. */
    az_mysql_flexible_server_create_command_builder.prototype.storageSize = function (value) {
        this.setFlag("--storage-size", value);
        return this;
    };
    /** Resource ID of an existing subnet. Please note that the subnet will be delegated to Microsoft.DBforPostgreSQL/flexibleServers/Microsoft.DBforMySQL/flexibleServers.After delegation, this subnet cannot be used for any other type of Azure resources. */
    az_mysql_flexible_server_create_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** The subnet IP address prefix to use when creating a new VNet in CIDR format. Default value is 10.0.0.0/24. */
    az_mysql_flexible_server_create_command_builder.prototype.subnetPrefixes = function (value) {
        this.setFlag("--subnet-prefixes", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_mysql_flexible_server_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Compute tier of the server. Accepted values: Burstable, GeneralPurpose, Memory Optimized. */
    az_mysql_flexible_server_create_command_builder.prototype.tier = function (value) {
        this.setFlag("--tier", value);
        return this;
    };
    /** Server major version. */
    az_mysql_flexible_server_create_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    /** Name of an existing virtual network or name of a new one to create. The name must be between 2 to 64 characters. The name must begin with a letter or number, end with a letter, number or underscore, and may contain only letters, numbers, underscores, periods, or hyphens. */
    az_mysql_flexible_server_create_command_builder.prototype.vnet = function (value) {
        this.setFlag("--vnet", value);
        return this;
    };
    /** Availability zone into which to provision the resource. */
    az_mysql_flexible_server_create_command_builder.prototype.zone = function (value) {
        this.setFlag("--zone,", value);
        return this;
    };
    return az_mysql_flexible_server_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a flexible server.
 *
 * Syntax:
 * ```
 * az mysql flexible-server delete [--ids]
 *                                 [--name]
 *                                 [--resource-group]
 *                                 [--subscription]
 *                                 [--yes]
 * ```
 */
var az_mysql_flexible_server_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_delete_command_builder, _super);
    function az_mysql_flexible_server_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_flexible_server_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_flexible_server_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_mysql_flexible_server_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_mysql_flexible_server_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List available flexible servers.
 *
 * Syntax:
 * ```
 * az mysql flexible-server list [--query-examples]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 */
var az_mysql_flexible_server_list_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_list_command_builder, _super);
    function az_mysql_flexible_server_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_flexible_server_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_flexible_server_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists available sku's in the given region.
 *
 * Syntax:
 * ```
 * az mysql flexible-server list-skus --location
 *                                    [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 */
var az_mysql_flexible_server_list_skus_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_list_skus_command_builder, _super);
    function az_mysql_flexible_server_list_skus_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_mysql_flexible_server_list_skus_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_list_skus_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_flexible_server_list_skus_command_builder;
}(base_1.CommandBuilder));
/**
 * Restart a flexible server.
 *
 * Syntax:
 * ```
 * az mysql flexible-server restart [--ids]
 *                                  [--name]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 */
var az_mysql_flexible_server_restart_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_restart_command_builder, _super);
    function az_mysql_flexible_server_restart_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_flexible_server_restart_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_flexible_server_restart_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_restart_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_restart_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_flexible_server_restart_command_builder;
}(base_1.CommandBuilder));
/**
 * Restore a flexible server from backup.
 *
 * Syntax:
 * ```
 * az mysql flexible-server restore --restore-time
 *                                  --source-server
 *                                  [--ids]
 *                                  [--location]
 *                                  [--name]
 *                                  [--no-wait]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 *
 * @param {string} restoreTime The point in time to restore from (ISO8601 format), e.g., 2017-04-26T02:10:00+08:00.
 * @param {string} sourceServer The name or resource ID of the source server to restore from.
 */
var az_mysql_flexible_server_restore_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_restore_command_builder, _super);
    function az_mysql_flexible_server_restore_command_builder(commandPath, resultDataTypeName, restoreTime, sourceServer) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.restoreTime(restoreTime);
        _this.sourceServer(sourceServer);
        return _this;
    }
    /** The point in time to restore from (ISO8601 format), e.g., 2017-04-26T02:10:00+08:00. */
    az_mysql_flexible_server_restore_command_builder.prototype.restoreTime = function (value) {
        this.setFlag("--restore-time", value);
        return this;
    };
    /** The name or resource ID of the source server to restore from. */
    az_mysql_flexible_server_restore_command_builder.prototype.sourceServer = function (value) {
        this.setFlag("--source-server", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_flexible_server_restore_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_mysql_flexible_server_restore_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name of the new server that is created by the restore command. */
    az_mysql_flexible_server_restore_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_mysql_flexible_server_restore_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_restore_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_restore_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_flexible_server_restore_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a flexible server.
 *
 * Syntax:
 * ```
 * az mysql flexible-server show [--ids]
 *                               [--name]
 *                               [--query-examples]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 */
var az_mysql_flexible_server_show_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_show_command_builder, _super);
    function az_mysql_flexible_server_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_flexible_server_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_flexible_server_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_flexible_server_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_flexible_server_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the connection strings for a MySQL flexible-server database.
 *
 * Syntax:
 * ```
 * az mysql flexible-server show-connection-string [--admin-password]
 *                                                 [--admin-user]
 *                                                 [--database-name]
 *                                                 [--ids]
 *                                                 [--server-name]
 *                                                 [--subscription]
 * ```
 */
var az_mysql_flexible_server_show_connection_string_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_show_connection_string_command_builder, _super);
    function az_mysql_flexible_server_show_connection_string_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The login password of the administrator. */
    az_mysql_flexible_server_show_connection_string_command_builder.prototype.adminPassword = function (value) {
        this.setFlag("--admin-password", value);
        return this;
    };
    /** The login username of the administrator. */
    az_mysql_flexible_server_show_connection_string_command_builder.prototype.adminUser = function (value) {
        this.setFlag("--admin-user", value);
        return this;
    };
    /** The name of a database. */
    az_mysql_flexible_server_show_connection_string_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_flexible_server_show_connection_string_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. */
    az_mysql_flexible_server_show_connection_string_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_show_connection_string_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_flexible_server_show_connection_string_command_builder;
}(base_1.CommandBuilder));
/**
 * Start a flexible server.
 *
 * Syntax:
 * ```
 * az mysql flexible-server start [--ids]
 *                                [--name]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 */
var az_mysql_flexible_server_start_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_start_command_builder, _super);
    function az_mysql_flexible_server_start_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_flexible_server_start_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_flexible_server_start_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_start_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_start_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_flexible_server_start_command_builder;
}(base_1.CommandBuilder));
/**
 * Stop a flexible server.
 *
 * Syntax:
 * ```
 * az mysql flexible-server stop [--ids]
 *                               [--name]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 */
var az_mysql_flexible_server_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_stop_command_builder, _super);
    function az_mysql_flexible_server_stop_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_flexible_server_stop_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_flexible_server_stop_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_stop_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_flexible_server_stop_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a flexible server.
 *
 * Syntax:
 * ```
 * az mysql flexible-server update [--add]
 *                                 [--admin-password]
 *                                 [--backup-retention]
 *                                 [--force-string]
 *                                 [--high-availability {Disabled, Enabled}]
 *                                 [--ids]
 *                                 [--maintenance-window]
 *                                 [--name]
 *                                 [--remove]
 *                                 [--replication-role]
 *                                 [--resource-group]
 *                                 [--set]
 *                                 [--sku-name]
 *                                 [--ssl-enforcement {Disabled, Enabled}]
 *                                 [--storage-auto-grow {Disabled, Enabled}]
 *                                 [--storage-size]
 *                                 [--subnet]
 *                                 [--subscription]
 *                                 [--tags]
 *                                 [--tier]
 * ```
 */
var az_mysql_flexible_server_update_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_update_command_builder, _super);
    function az_mysql_flexible_server_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_mysql_flexible_server_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters. */
    az_mysql_flexible_server_update_command_builder.prototype.adminPassword = function (value) {
        this.setFlag("--admin-password", value);
        return this;
    };
    /** The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days. */
    az_mysql_flexible_server_update_command_builder.prototype.backupRetention = function (value) {
        this.setFlag("--backup-retention", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_mysql_flexible_server_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Enable or disable high availability feature.  Default value is Disabled. */
    az_mysql_flexible_server_update_command_builder.prototype.highAvailability = function (value) {
        this.setFlag("--high-availability", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_flexible_server_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Period of time (UTC) designated for maintenance. Examples: "Sun:23:30" to schedule on Sunday, 11:30pm UTC. To set back to default pass in "Disabled". */
    az_mysql_flexible_server_update_command_builder.prototype.maintenanceWindow = function (value) {
        this.setFlag("--maintenance-window", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_flexible_server_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_mysql_flexible_server_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** The replication role of the server. */
    az_mysql_flexible_server_update_command_builder.prototype.replicationRole = function (value) {
        this.setFlag("--replication-role", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_mysql_flexible_server_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** The name of the compute SKU. Follows the convention Standard_{VM name}. Examples: Standard_B1ms, Standard_E16ds_v4. */
    az_mysql_flexible_server_update_command_builder.prototype.skuName = function (value) {
        this.setFlag("--sku-name", value);
        return this;
    };
    /** Enable or disable ssl enforcement for connections to server. Default is Enabled. */
    az_mysql_flexible_server_update_command_builder.prototype.sslEnforcement = function (value) {
        this.setFlag("--ssl-enforcement", value);
        return this;
    };
    /** Enable or disable autogrow of the storage. Default value is Enabled. */
    az_mysql_flexible_server_update_command_builder.prototype.storageAutoGrow = function (value) {
        this.setFlag("--storage-auto-grow", value);
        return this;
    };
    /** The storage capacity of the server. Minimum is 5 GiB and increases in 1 GiB increments. Max is 16 TiB. */
    az_mysql_flexible_server_update_command_builder.prototype.storageSize = function (value) {
        this.setFlag("--storage-size", value);
        return this;
    };
    /** Name or ID of the subnet that allows access to an Azure Flexible Server MySQL Server. */
    az_mysql_flexible_server_update_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_mysql_flexible_server_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Compute tier of the server. Accepted values: Burstable, GeneralPurpose, Memory Optimized. */
    az_mysql_flexible_server_update_command_builder.prototype.tier = function (value) {
        this.setFlag("--tier", value);
        return this;
    };
    return az_mysql_flexible_server_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Wait for the flexible server to satisfy certain conditions.
 *
 * Syntax:
 * ```
 * az mysql flexible-server wait [--created]
 *                               [--custom]
 *                               [--deleted]
 *                               [--exists]
 *                               [--ids]
 *                               [--interval]
 *                               [--name]
 *                               [--resource-group]
 *                               [--subscription]
 *                               [--timeout]
 *                               [--updated]
 * ```
 */
var az_mysql_flexible_server_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_flexible_server_wait_command_builder, _super);
    function az_mysql_flexible_server_wait_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_mysql_flexible_server_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_mysql_flexible_server_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_mysql_flexible_server_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_mysql_flexible_server_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_flexible_server_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_mysql_flexible_server_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_flexible_server_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_flexible_server_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_flexible_server_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_mysql_flexible_server_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_mysql_flexible_server_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_mysql_flexible_server_wait_command_builder;
}(base_1.CommandBuilder));
/**
 * Create an Active Directory administrator for MySQL server.
 *
 * Syntax:
 * ```
 * az mysql server ad-admin create --resource-group
 *                                 --server-name
 *                                 [--display-name]
 *                                 [--no-wait]
 *                                 [--object-id]
 *                                 [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 */
var az_mysql_server_ad_admin_create_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_ad_admin_create_command_builder, _super);
    function az_mysql_server_ad_admin_create_command_builder(commandPath, resultDataTypeName, resourceGroup, serverName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_ad_admin_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_ad_admin_create_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Display name of the Azure AD administrator user or group. */
    az_mysql_server_ad_admin_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_mysql_server_ad_admin_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The unique ID of the Azure AD administrator. */
    az_mysql_server_ad_admin_create_command_builder.prototype.objectId = function (value) {
        this.setFlag("--object-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_ad_admin_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_ad_admin_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an Active Directory Administrator for MySQL server.
 *
 * Syntax:
 * ```
 * az mysql server ad-admin delete [--ids]
 *                                 [--resource-group]
 *                                 [--server-name]
 *                                 [--subscription]
 *                                 [--yes]
 * ```
 */
var az_mysql_server_ad_admin_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_ad_admin_delete_command_builder, _super);
    function az_mysql_server_ad_admin_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_ad_admin_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_ad_admin_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_ad_admin_delete_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_ad_admin_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_mysql_server_ad_admin_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_mysql_server_ad_admin_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all Active Directory Administrators for MySQL server.
 *
 * Syntax:
 * ```
 * az mysql server ad-admin list [--ids]
 *                               [--query-examples]
 *                               [--resource-group]
 *                               [--server-name]
 *                               [--subscription]
 * ```
 */
var az_mysql_server_ad_admin_list_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_ad_admin_list_command_builder, _super);
    function az_mysql_server_ad_admin_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_ad_admin_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_server_ad_admin_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_ad_admin_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_ad_admin_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_ad_admin_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_ad_admin_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get Active Directory Administrator information for a MySQL server.
 *
 * Syntax:
 * ```
 * az mysql server ad-admin show [--ids]
 *                               [--query-examples]
 *                               [--resource-group]
 *                               [--server-name]
 *                               [--subscription]
 * ```
 */
var az_mysql_server_ad_admin_show_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_ad_admin_show_command_builder, _super);
    function az_mysql_server_ad_admin_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_ad_admin_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_server_ad_admin_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_ad_admin_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_ad_admin_show_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_ad_admin_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_ad_admin_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Place the CLI in a waiting state until a condition of the MySQL server Active Directory Administrator is met.
 *
 * Syntax:
 * ```
 * az mysql server ad-admin wait [--created]
 *                               [--custom]
 *                               [--deleted]
 *                               [--exists]
 *                               [--ids]
 *                               [--interval]
 *                               [--resource-group]
 *                               [--server-name]
 *                               [--subscription]
 *                               [--timeout]
 *                               [--updated]
 * ```
 */
var az_mysql_server_ad_admin_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_ad_admin_wait_command_builder, _super);
    function az_mysql_server_ad_admin_wait_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_mysql_server_ad_admin_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_mysql_server_ad_admin_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_mysql_server_ad_admin_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_mysql_server_ad_admin_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_ad_admin_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_mysql_server_ad_admin_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_ad_admin_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_ad_admin_wait_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_ad_admin_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_mysql_server_ad_admin_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_mysql_server_ad_admin_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_mysql_server_ad_admin_wait_command_builder;
}(base_1.CommandBuilder));
/**
 * List the configuration values for a server.
 *
 * Syntax:
 * ```
 * az mysql server configuration list [--ids]
 *                                    [--query-examples]
 *                                    [--resource-group]
 *                                    [--server-name]
 *                                    [--subscription]
 * ```
 */
var az_mysql_server_configuration_list_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_configuration_list_command_builder, _super);
    function az_mysql_server_configuration_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_configuration_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_server_configuration_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_configuration_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_configuration_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_configuration_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_configuration_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the configuration of a server.
 *
 * Syntax:
 * ```
 * az mysql server configuration set [--ids]
 *                                   [--name]
 *                                   [--resource-group]
 *                                   [--server-name]
 *                                   [--subscription]
 *                                   [--value]
 * ```
 */
var az_mysql_server_configuration_set_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_configuration_set_command_builder, _super);
    function az_mysql_server_configuration_set_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_configuration_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the server configuration. */
    az_mysql_server_configuration_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_configuration_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_configuration_set_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_configuration_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Value of the configuration. If not provided, configuration value will be set to default. */
    az_mysql_server_configuration_set_command_builder.prototype.value = function (value) {
        this.setFlag("--value", value);
        return this;
    };
    return az_mysql_server_configuration_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the configuration for a server.".
 *
 * Syntax:
 * ```
 * az mysql server configuration show [--ids]
 *                                    [--name]
 *                                    [--query-examples]
 *                                    [--resource-group]
 *                                    [--server-name]
 *                                    [--subscription]
 * ```
 */
var az_mysql_server_configuration_show_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_configuration_show_command_builder, _super);
    function az_mysql_server_configuration_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_configuration_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the server configuration. */
    az_mysql_server_configuration_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_server_configuration_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_configuration_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_configuration_show_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_configuration_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_configuration_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new firewall rule for a server.
 *
 * Syntax:
 * ```
 * az mysql server firewall-rule create --end-ip-address
 *                                      --name
 *                                      --resource-group
 *                                      --server-name
 *                                      --start-ip-address
 *                                      [--subscription]
 * ```
 *
 * @param {string} endIpAddress The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
 * @param {string} name The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 * @param {string} startIpAddress The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
 */
var az_mysql_server_firewall_rule_create_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_firewall_rule_create_command_builder, _super);
    function az_mysql_server_firewall_rule_create_command_builder(commandPath, resultDataTypeName, endIpAddress, name, resourceGroup, serverName, startIpAddress) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.endIpAddress(endIpAddress);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        _this.startIpAddress(startIpAddress);
        return _this;
    }
    /** The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    az_mysql_server_firewall_rule_create_command_builder.prototype.endIpAddress = function (value) {
        this.setFlag("--end-ip-address", value);
        return this;
    };
    /** The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    az_mysql_server_firewall_rule_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_firewall_rule_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_firewall_rule_create_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    az_mysql_server_firewall_rule_create_command_builder.prototype.startIpAddress = function (value) {
        this.setFlag("--start-ip-address", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_firewall_rule_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_firewall_rule_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a firewall rule.
 *
 * Syntax:
 * ```
 * az mysql server firewall-rule delete [--ids]
 *                                      [--name]
 *                                      [--resource-group]
 *                                      [--server-name]
 *                                      [--subscription]
 *                                      [--yes]
 * ```
 */
var az_mysql_server_firewall_rule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_firewall_rule_delete_command_builder, _super);
    function az_mysql_server_firewall_rule_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_firewall_rule_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    az_mysql_server_firewall_rule_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_firewall_rule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_firewall_rule_delete_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_firewall_rule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_mysql_server_firewall_rule_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_mysql_server_firewall_rule_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all firewall rules for a server.
 *
 * Syntax:
 * ```
 * az mysql server firewall-rule list [--ids]
 *                                    [--query-examples]
 *                                    [--resource-group]
 *                                    [--server-name]
 *                                    [--subscription]
 * ```
 */
var az_mysql_server_firewall_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_firewall_rule_list_command_builder, _super);
    function az_mysql_server_firewall_rule_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_firewall_rule_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_server_firewall_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_firewall_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_firewall_rule_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_firewall_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_firewall_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a firewall rule.
 *
 * Syntax:
 * ```
 * az mysql server firewall-rule show [--ids]
 *                                    [--name]
 *                                    [--query-examples]
 *                                    [--resource-group]
 *                                    [--server-name]
 *                                    [--subscription]
 * ```
 */
var az_mysql_server_firewall_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_firewall_rule_show_command_builder, _super);
    function az_mysql_server_firewall_rule_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_firewall_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    az_mysql_server_firewall_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_server_firewall_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_firewall_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_firewall_rule_show_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_firewall_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_firewall_rule_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a firewall rule.
 *
 * Syntax:
 * ```
 * az mysql server firewall-rule update [--add]
 *                                      [--end-ip-address]
 *                                      [--force-string]
 *                                      [--ids]
 *                                      [--name]
 *                                      [--remove]
 *                                      [--resource-group]
 *                                      [--server-name]
 *                                      [--set]
 *                                      [--start-ip-address]
 *                                      [--subscription]
 * ```
 */
var az_mysql_server_firewall_rule_update_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_firewall_rule_update_command_builder, _super);
    function az_mysql_server_firewall_rule_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_mysql_server_firewall_rule_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    az_mysql_server_firewall_rule_update_command_builder.prototype.endIpAddress = function (value) {
        this.setFlag("--end-ip-address", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_mysql_server_firewall_rule_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_firewall_rule_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    az_mysql_server_firewall_rule_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_mysql_server_firewall_rule_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_firewall_rule_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_firewall_rule_update_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_mysql_server_firewall_rule_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    az_mysql_server_firewall_rule_update_command_builder.prototype.startIpAddress = function (value) {
        this.setFlag("--start-ip-address", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_firewall_rule_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_firewall_rule_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create server key.
 *
 * Syntax:
 * ```
 * az mysql server key create --kid
 *                            --name
 *                            --resource-group
 *                            [--subscription]
 * ```
 *
 * @param {string} kid The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>".
 * @param {string} name Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_mysql_server_key_create_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_key_create_command_builder, _super);
    function az_mysql_server_key_create_command_builder(commandPath, resultDataTypeName, kid, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.kid(kid);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    az_mysql_server_key_create_command_builder.prototype.kid = function (value) {
        this.setFlag("--kid", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_key_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_key_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_key_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_key_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete server key.
 *
 * Syntax:
 * ```
 * az mysql server key delete --kid
 *                            [--ids]
 *                            [--name]
 *                            [--resource-group]
 *                            [--subscription]
 *                            [--yes]
 * ```
 *
 * @param {string} kid The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>".
 */
var az_mysql_server_key_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_key_delete_command_builder, _super);
    function az_mysql_server_key_delete_command_builder(commandPath, resultDataTypeName, kid) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.kid(kid);
        return _this;
    }
    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    az_mysql_server_key_delete_command_builder.prototype.kid = function (value) {
        this.setFlag("--kid", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_key_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_key_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_key_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_key_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_mysql_server_key_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_mysql_server_key_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a list of  Server keys.
 *
 * Syntax:
 * ```
 * az mysql server key list [--ids]
 *                          [--name]
 *                          [--query-examples]
 *                          [--resource-group]
 *                          [--subscription]
 * ```
 */
var az_mysql_server_key_list_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_key_list_command_builder, _super);
    function az_mysql_server_key_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_key_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_key_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_server_key_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_key_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_key_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_key_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show server key.
 *
 * Syntax:
 * ```
 * az mysql server key show --kid
 *                          [--ids]
 *                          [--name]
 *                          [--query-examples]
 *                          [--resource-group]
 *                          [--subscription]
 * ```
 *
 * @param {string} kid The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>".
 */
var az_mysql_server_key_show_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_key_show_command_builder, _super);
    function az_mysql_server_key_show_command_builder(commandPath, resultDataTypeName, kid) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.kid(kid);
        return _this;
    }
    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    az_mysql_server_key_show_command_builder.prototype.kid = function (value) {
        this.setFlag("--kid", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_key_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_key_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_server_key_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_key_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_key_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_key_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Approve the specified private endpoint connection associated with a MySQL server.
 *
 * Syntax:
 * ```
 * az mysql server private-endpoint-connection approve [--description]
 *                                                     [--id]
 *                                                     [--ids]
 *                                                     [--name]
 *                                                     [--resource-group]
 *                                                     [--server-name]
 *                                                     [--subscription]
 * ```
 */
var az_mysql_server_private_endpoint_connection_approve_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_private_endpoint_connection_approve_command_builder, _super);
    function az_mysql_server_private_endpoint_connection_approve_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Comments for approve operation. */
    az_mysql_server_private_endpoint_connection_approve_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** The ID of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted. */
    az_mysql_server_private_endpoint_connection_approve_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_private_endpoint_connection_approve_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the private endpoint connection associated with the Server. Required if --id is not specified. */
    az_mysql_server_private_endpoint_connection_approve_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource group name of specified server. */
    az_mysql_server_private_endpoint_connection_approve_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Server. Required if --id is not specified. */
    az_mysql_server_private_endpoint_connection_approve_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_private_endpoint_connection_approve_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_private_endpoint_connection_approve_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete the specified private endpoint connection associated with a MySQL server.
 *
 * Syntax:
 * ```
 * az mysql server private-endpoint-connection delete [--id]
 *                                                    [--ids]
 *                                                    [--name]
 *                                                    [--resource-group]
 *                                                    [--server-name]
 *                                                    [--subscription]
 * ```
 */
var az_mysql_server_private_endpoint_connection_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_private_endpoint_connection_delete_command_builder, _super);
    function az_mysql_server_private_endpoint_connection_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The ID of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted. */
    az_mysql_server_private_endpoint_connection_delete_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_private_endpoint_connection_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the private endpoint connection associated with the Server. Required if --id is not specified. */
    az_mysql_server_private_endpoint_connection_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource group name of specified server. */
    az_mysql_server_private_endpoint_connection_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Server. Required if --id is not specified. */
    az_mysql_server_private_endpoint_connection_delete_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_private_endpoint_connection_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_private_endpoint_connection_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Reject the specified private endpoint connection associated with a MySQL server.
 *
 * Syntax:
 * ```
 * az mysql server private-endpoint-connection reject [--description]
 *                                                    [--id]
 *                                                    [--ids]
 *                                                    [--name]
 *                                                    [--resource-group]
 *                                                    [--server-name]
 *                                                    [--subscription]
 * ```
 */
var az_mysql_server_private_endpoint_connection_reject_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_private_endpoint_connection_reject_command_builder, _super);
    function az_mysql_server_private_endpoint_connection_reject_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Comments for reject operation. */
    az_mysql_server_private_endpoint_connection_reject_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** The ID of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted. */
    az_mysql_server_private_endpoint_connection_reject_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_private_endpoint_connection_reject_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the private endpoint connection associated with the Server. Required if --id is not specified. */
    az_mysql_server_private_endpoint_connection_reject_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource group name of specified server. */
    az_mysql_server_private_endpoint_connection_reject_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Server. Required if --id is not specified. */
    az_mysql_server_private_endpoint_connection_reject_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_private_endpoint_connection_reject_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_private_endpoint_connection_reject_command_builder;
}(base_1.CommandBuilder));
/**
 * Show details of a private endpoint connection associated with a MySQL server.
 *
 * Syntax:
 * ```
 * az mysql server private-endpoint-connection show [--id]
 *                                                  [--ids]
 *                                                  [--name]
 *                                                  [--query-examples]
 *                                                  [--resource-group]
 *                                                  [--server-name]
 *                                                  [--subscription]
 * ```
 */
var az_mysql_server_private_endpoint_connection_show_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_private_endpoint_connection_show_command_builder, _super);
    function az_mysql_server_private_endpoint_connection_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The ID of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted. */
    az_mysql_server_private_endpoint_connection_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_private_endpoint_connection_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the private endpoint connection associated with the Server. Required if --id is not specified. */
    az_mysql_server_private_endpoint_connection_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_server_private_endpoint_connection_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The resource group name of specified server. */
    az_mysql_server_private_endpoint_connection_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Server. Required if --id is not specified. */
    az_mysql_server_private_endpoint_connection_show_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_private_endpoint_connection_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_private_endpoint_connection_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List the private link resources supported for a MySQL server.
 *
 * Syntax:
 * ```
 * az mysql server private-link-resource list [--ids]
 *                                            [--query-examples]
 *                                            [--resource-group]
 *                                            [--server-name]
 *                                            [--subscription]
 * ```
 */
var az_mysql_server_private_link_resource_list_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_private_link_resource_list_command_builder, _super);
    function az_mysql_server_private_link_resource_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_private_link_resource_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_server_private_link_resource_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_private_link_resource_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Server. */
    az_mysql_server_private_link_resource_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_private_link_resource_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_private_link_resource_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a read replica for a server.
 *
 * Syntax:
 * ```
 * az mysql server replica create --name
 *                                --resource-group
 *                                --source-server
 *                                [--location]
 *                                [--no-wait]
 *                                [--sku-name]
 *                                [--subscription]
 * ```
 *
 * @param {string} name Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} sourceServer The name or resource ID of the master server to the create replica for.
 */
var az_mysql_server_replica_create_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_replica_create_command_builder, _super);
    function az_mysql_server_replica_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, sourceServer) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.sourceServer(sourceServer);
        return _this;
    }
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_replica_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_replica_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name or resource ID of the master server to the create replica for. */
    az_mysql_server_replica_create_command_builder.prototype.sourceServer = function (value) {
        this.setFlag("--source-server", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. If not provided, the create replica will be in the same location as the master server. */
    az_mysql_server_replica_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_mysql_server_replica_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The name of the sku. Follows the convention {pricing tier}_{compute generation}_{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16. */
    az_mysql_server_replica_create_command_builder.prototype.skuName = function (value) {
        this.setFlag("--sku-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_replica_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_replica_create_command_builder;
}(base_1.CommandBuilder));
/**
 * List all read replicas for a given server.
 *
 * Syntax:
 * ```
 * az mysql server replica list [--ids]
 *                              [--query-examples]
 *                              [--resource-group]
 *                              [--server-name]
 *                              [--subscription]
 * ```
 */
var az_mysql_server_replica_list_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_replica_list_command_builder, _super);
    function az_mysql_server_replica_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_replica_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_server_replica_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_replica_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the master server. */
    az_mysql_server_replica_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_replica_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_replica_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Stop replication to a read replica and make it a read/write server.
 *
 * Syntax:
 * ```
 * az mysql server replica stop [--ids]
 *                              [--name]
 *                              [--resource-group]
 *                              [--subscription]
 *                              [--yes]
 * ```
 */
var az_mysql_server_replica_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_replica_stop_command_builder, _super);
    function az_mysql_server_replica_stop_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_replica_stop_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_replica_stop_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_replica_stop_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_replica_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_mysql_server_replica_stop_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_mysql_server_replica_stop_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a virtual network rule to allows access to a MySQL server.
 *
 * Syntax:
 * ```
 * az mysql server vnet-rule create --name
 *                                  --resource-group
 *                                  --server-name
 *                                  --subnet
 *                                  [--ignore-missing-endpoint {false, true}]
 *                                  [--subscription]
 *                                  [--vnet-name]
 * ```
 *
 * @param {string} name The name of the vnet rule.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 * @param {string} subnet Name or ID of the subnet that allows access to an Azure Postgres Server. If subnet name is provided, --vnet-name must be provided.
 */
var az_mysql_server_vnet_rule_create_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_vnet_rule_create_command_builder, _super);
    function az_mysql_server_vnet_rule_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, serverName, subnet) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        _this.subnet(subnet);
        return _this;
    }
    /** The name of the vnet rule. */
    az_mysql_server_vnet_rule_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_vnet_rule_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_vnet_rule_create_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of the subnet that allows access to an Azure Postgres Server. If subnet name is provided, --vnet-name must be provided. */
    az_mysql_server_vnet_rule_create_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Create vnet rule before virtual network has vnet service endpoint enabled. */
    az_mysql_server_vnet_rule_create_command_builder.prototype.ignoreMissingEndpoint = function (value) {
        this.setFlag("--ignore-missing-endpoint", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_vnet_rule_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The virtual network name. */
    az_mysql_server_vnet_rule_create_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_mysql_server_vnet_rule_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the virtual network rule with the given name.
 *
 * Syntax:
 * ```
 * az mysql server vnet-rule delete [--ids]
 *                                  [--name]
 *                                  [--resource-group]
 *                                  [--server-name]
 *                                  [--subscription]
 * ```
 */
var az_mysql_server_vnet_rule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_vnet_rule_delete_command_builder, _super);
    function az_mysql_server_vnet_rule_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_vnet_rule_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the vnet rule. */
    az_mysql_server_vnet_rule_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_vnet_rule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_vnet_rule_delete_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_vnet_rule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_vnet_rule_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a list of virtual network rules in a server.
 *
 * Syntax:
 * ```
 * az mysql server vnet-rule list [--ids]
 *                                [--query-examples]
 *                                [--resource-group]
 *                                [--server-name]
 *                                [--subscription]
 * ```
 */
var az_mysql_server_vnet_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_vnet_rule_list_command_builder, _super);
    function az_mysql_server_vnet_rule_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_vnet_rule_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_server_vnet_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_vnet_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_vnet_rule_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_vnet_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_vnet_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a virtual network rule.
 *
 * Syntax:
 * ```
 * az mysql server vnet-rule show [--ids]
 *                                [--name]
 *                                [--query-examples]
 *                                [--resource-group]
 *                                [--server-name]
 *                                [--subscription]
 * ```
 */
var az_mysql_server_vnet_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_vnet_rule_show_command_builder, _super);
    function az_mysql_server_vnet_rule_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_vnet_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the vnet rule. */
    az_mysql_server_vnet_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_server_vnet_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_vnet_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_vnet_rule_show_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_vnet_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_vnet_rule_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a virtual network rule.
 *
 * Syntax:
 * ```
 * az mysql server vnet-rule update --subnet
 *                                  [--add]
 *                                  [--force-string]
 *                                  [--ids]
 *                                  [--ignore-missing-endpoint {false, true}]
 *                                  [--name]
 *                                  [--remove]
 *                                  [--resource-group]
 *                                  [--server-name]
 *                                  [--set]
 *                                  [--subscription]
 *                                  [--vnet-name]
 * ```
 *
 * @param {string} subnet Name or ID of the subnet that allows access to an Azure Postgres Server. If subnet name is provided, --vnet-name must be provided.
 */
var az_mysql_server_vnet_rule_update_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_vnet_rule_update_command_builder, _super);
    function az_mysql_server_vnet_rule_update_command_builder(commandPath, resultDataTypeName, subnet) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.subnet(subnet);
        return _this;
    }
    /** Name or ID of the subnet that allows access to an Azure Postgres Server. If subnet name is provided, --vnet-name must be provided. */
    az_mysql_server_vnet_rule_update_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_mysql_server_vnet_rule_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_mysql_server_vnet_rule_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_vnet_rule_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Create vnet rule before virtual network has vnet service endpoint enabled. */
    az_mysql_server_vnet_rule_update_command_builder.prototype.ignoreMissingEndpoint = function (value) {
        this.setFlag("--ignore-missing-endpoint", value.toString());
        return this;
    };
    /** The name of the vnet rule. */
    az_mysql_server_vnet_rule_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_mysql_server_vnet_rule_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_vnet_rule_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_vnet_rule_update_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_mysql_server_vnet_rule_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_vnet_rule_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The virtual network name. */
    az_mysql_server_vnet_rule_update_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_mysql_server_vnet_rule_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Download log files.
 *
 * Syntax:
 * ```
 * az mysql server-logs download --name
 *                               [--ids]
 *                               [--resource-group]
 *                               [--server-name]
 *                               [--subscription]
 * ```
 *
 * @param {string} name Space-separated list of log filenames on the server to download.
 */
var az_mysql_server_logs_download_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_logs_download_command_builder, _super);
    function az_mysql_server_logs_download_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Space-separated list of log filenames on the server to download. */
    az_mysql_server_logs_download_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_logs_download_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_logs_download_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_logs_download_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_logs_download_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_logs_download_command_builder;
}(base_1.CommandBuilder));
/**
 * List log files for a server.
 *
 * Syntax:
 * ```
 * az mysql server-logs list --resource-group
 *                           --server-name
 *                           [--file-last-written]
 *                           [--filename-contains]
 *                           [--max-file-size]
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the Server.
 */
var az_mysql_server_logs_list_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_logs_list_command_builder, _super);
    function az_mysql_server_logs_list_command_builder(commandPath, resultDataTypeName, resourceGroup, serverName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_logs_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Server. */
    az_mysql_server_logs_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Integer in hours to indicate file last modify time, default value is 72. */
    az_mysql_server_logs_list_command_builder.prototype.fileLastWritten = function (value) {
        this.setFlag("--file-last-written", value);
        return this;
    };
    /** The pattern that file name should match. */
    az_mysql_server_logs_list_command_builder.prototype.filenameContains = function (value) {
        this.setFlag("--filename-contains", value);
        return this;
    };
    /** The file size limitation to filter files. */
    az_mysql_server_logs_list_command_builder.prototype.maxFileSize = function (value) {
        this.setFlag("--max-file-size", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_server_logs_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_logs_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_logs_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a server.
 *
 * Syntax:
 * ```
 * az mysql server create [--admin-password]
 *                        [--admin-user]
 *                        [--assign-identity]
 *                        [--auto-grow {Disabled, Enabled}]
 *                        [--backup-retention]
 *                        [--geo-redundant-backup {Disabled, Enabled}]
 *                        [--infrastructure-encryption {Disabled, Enabled}]
 *                        [--location]
 *                        [--minimal-tls-version {TLS1_0, TLS1_1, TLS1_2, TLSEnforcementDisabled}]
 *                        [--name]
 *                        [--public]
 *                        [--resource-group]
 *                        [--sku-name]
 *                        [--ssl-enforcement {Disabled, Enabled}]
 *                        [--storage-size]
 *                        [--subscription]
 *                        [--tags]
 *                        [--version]
 * ```
 */
var az_mysql_server_create_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_create_command_builder, _super);
    function az_mysql_server_create_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters. */
    az_mysql_server_create_command_builder.prototype.adminPassword = function (value) {
        this.setFlag("--admin-password", value);
        return this;
    };
    /** Administrator username for the server. Once set, it cannot be changed. */
    az_mysql_server_create_command_builder.prototype.adminUser = function (value) {
        this.setFlag("--admin-user", value);
        return this;
    };
    /** Generate and assign an Azure Active Directory Identity for this server for use with key management services like Azure KeyVault. */
    az_mysql_server_create_command_builder.prototype.assignIdentity = function (value) {
        this.setFlag("--assign-identity", value);
        return this;
    };
    /** Enable or disable autogrow of the storage. Default value is Enabled. */
    az_mysql_server_create_command_builder.prototype.autoGrow = function (value) {
        this.setFlag("--auto-grow", value);
        return this;
    };
    /** The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days. */
    az_mysql_server_create_command_builder.prototype.backupRetention = function (value) {
        this.setFlag("--backup-retention", value);
        return this;
    };
    /** Enable or disable geo-redundant backups. Default value is Disabled. Not supported in Basic pricing tier. */
    az_mysql_server_create_command_builder.prototype.geoRedundantBackup = function (value) {
        this.setFlag("--geo-redundant-backup", value);
        return this;
    };
    /** Add an optional second layer of encryption for data using new encryption algorithm. Default value is Disabled. */
    az_mysql_server_create_command_builder.prototype.infrastructureEncryption = function (value) {
        this.setFlag("--infrastructure-encryption", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_mysql_server_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Set the minimal TLS version for connections to server when SSL is enabled. Default is TLSEnforcementDisabled. */
    az_mysql_server_create_command_builder.prototype.minimalTlsVersion = function (value) {
        this.setFlag("--minimal-tls-version", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Enable or disable public network access to server. When disabled, only connections made through Private Links can reach this server. Allowed values are : Enabled, Disabled, all, 0.0.0.0, <SingleIP>, <StartIP-DestinationIP>. Default is Enabled. */
    az_mysql_server_create_command_builder.prototype.publicNetworkAccess = function (value) {
        this.setFlag("--public-network-access", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the sku. Follows the convention {pricing tier}_{compute generation}_{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16. */
    az_mysql_server_create_command_builder.prototype.skuName = function (value) {
        this.setFlag("--sku-name", value);
        return this;
    };
    /** Enable or disable ssl enforcement for connections to server. Default is Enabled. */
    az_mysql_server_create_command_builder.prototype.sslEnforcement = function (value) {
        this.setFlag("--ssl-enforcement", value);
        return this;
    };
    /** The storage capacity of the server (unit is megabytes). Minimum 5120 and increases in 1024 increments. Default is 51200. */
    az_mysql_server_create_command_builder.prototype.storageSize = function (value) {
        this.setFlag("--storage-size", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_mysql_server_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Server major version. */
    az_mysql_server_create_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_mysql_server_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a server.
 *
 * Syntax:
 * ```
 * az mysql server delete [--ids]
 *                        [--name]
 *                        [--resource-group]
 *                        [--subscription]
 *                        [--yes]
 * ```
 */
var az_mysql_server_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_delete_command_builder, _super);
    function az_mysql_server_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_mysql_server_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_mysql_server_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Geo-restore a server from backup.
 *
 * Syntax:
 * ```
 * az mysql server georestore --location
 *                            --source-server
 *                            [--backup-retention]
 *                            [--geo-redundant-backup]
 *                            [--ids]
 *                            [--name]
 *                            [--no-wait]
 *                            [--resource-group]
 *                            [--sku-name]
 *                            [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} sourceServer The name or ID of the source server to restore from.
 */
var az_mysql_server_georestore_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_georestore_command_builder, _super);
    function az_mysql_server_georestore_command_builder(commandPath, resultDataTypeName, location, sourceServer) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.sourceServer(sourceServer);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_mysql_server_georestore_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name or ID of the source server to restore from. */
    az_mysql_server_georestore_command_builder.prototype.sourceServer = function (value) {
        this.setFlag("--source-server", value);
        return this;
    };
    /** The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days. */
    az_mysql_server_georestore_command_builder.prototype.backupRetention = function (value) {
        this.setFlag("--backup-retention", value);
        return this;
    };
    /** Enable or disable geo-redundant backups. Default value is Disabled. Not supported in Basic pricing tier. */
    az_mysql_server_georestore_command_builder.prototype.geoRedundantBackup = function (value) {
        this.setFlag("--geo-redundant-backup", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_georestore_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_georestore_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_mysql_server_georestore_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_georestore_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the sku. Defaults to sku of the source server. Follows the convention {pricing tier}_{compute generation}_{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16. */
    az_mysql_server_georestore_command_builder.prototype.skuName = function (value) {
        this.setFlag("--sku-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_georestore_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_georestore_command_builder;
}(base_1.CommandBuilder));
/**
 * List available servers.
 *
 * Syntax:
 * ```
 * az mysql server list [--query-examples]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
var az_mysql_server_list_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_list_command_builder, _super);
    function az_mysql_server_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_server_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List available sku's in the given region.
 *
 * Syntax:
 * ```
 * az mysql server list-skus --location
 *                           [--subscription]
 * ```
 *
 * @param {string} location The name of the location.
 */
var az_mysql_server_list_skus_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_list_skus_command_builder, _super);
    function az_mysql_server_list_skus_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** The name of the location. */
    az_mysql_server_list_skus_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_list_skus_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_list_skus_command_builder;
}(base_1.CommandBuilder));
/**
 * Restart a server.
 *
 * Syntax:
 * ```
 * az mysql server restart [--ids]
 *                         [--name]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
var az_mysql_server_restart_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_restart_command_builder, _super);
    function az_mysql_server_restart_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_restart_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_restart_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_restart_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_restart_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_restart_command_builder;
}(base_1.CommandBuilder));
/**
 * Restore a server from backup.
 *
 * Syntax:
 * ```
 * az mysql server restore --pitr-time
 *                         --source-server
 *                         [--ids]
 *                         [--name]
 *                         [--no-wait]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 *
 * @param {string} restorePointInTime The point in time to restore from (ISO8601 format), e.g., 2017-04-26T02:10:00+08:00.
 * @param {string} sourceServer The name or resource ID of the source server to restore from.
 */
var az_mysql_server_restore_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_restore_command_builder, _super);
    function az_mysql_server_restore_command_builder(commandPath, resultDataTypeName, restorePointInTime, sourceServer) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.restorePointInTime(restorePointInTime);
        _this.sourceServer(sourceServer);
        return _this;
    }
    /** The point in time to restore from (ISO8601 format), e.g., 2017-04-26T02:10:00+08:00. */
    az_mysql_server_restore_command_builder.prototype.restorePointInTime = function (value) {
        this.setFlag("--restore-point-in-time", value);
        return this;
    };
    /** The name or resource ID of the source server to restore from. */
    az_mysql_server_restore_command_builder.prototype.sourceServer = function (value) {
        this.setFlag("--source-server", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_restore_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_restore_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_mysql_server_restore_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_restore_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_restore_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_restore_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a server.
 *
 * Syntax:
 * ```
 * az mysql server show [--ids]
 *                      [--name]
 *                      [--query-examples]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
var az_mysql_server_show_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_show_command_builder, _super);
    function az_mysql_server_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_mysql_server_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Start a stopped server.
 *
 * Syntax:
 * ```
 * az mysql server start [--ids]
 *                       [--name]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
var az_mysql_server_start_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_start_command_builder, _super);
    function az_mysql_server_start_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_start_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_start_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_start_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_start_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_start_command_builder;
}(base_1.CommandBuilder));
/**
 * Stop a running server.
 *
 * Syntax:
 * ```
 * az mysql server stop [--ids]
 *                      [--name]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
var az_mysql_server_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_stop_command_builder, _super);
    function az_mysql_server_stop_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_stop_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_stop_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_stop_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_mysql_server_stop_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a server.
 *
 * Syntax:
 * ```
 * az mysql server update [--add]
 *                        [--admin-password]
 *                        [--assign-identity]
 *                        [--auto-grow {Disabled, Enabled}]
 *                        [--backup-retention]
 *                        [--force-string]
 *                        [--ids]
 *                        [--minimal-tls-version {TLS1_0, TLS1_1, TLS1_2, TLSEnforcementDisabled}]
 *                        [--name]
 *                        [--public]
 *                        [--remove]
 *                        [--resource-group]
 *                        [--set]
 *                        [--sku-name]
 *                        [--ssl-enforcement {Disabled, Enabled}]
 *                        [--storage-size]
 *                        [--subscription]
 *                        [--tags]
 * ```
 */
var az_mysql_server_update_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_update_command_builder, _super);
    function az_mysql_server_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_mysql_server_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters. */
    az_mysql_server_update_command_builder.prototype.adminPassword = function (value) {
        this.setFlag("--admin-password", value);
        return this;
    };
    /** Generate and assign an Azure Active Directory Identity for this server for use with key management services like Azure KeyVault. */
    az_mysql_server_update_command_builder.prototype.assignIdentity = function (value) {
        this.setFlag("--assign-identity", value);
        return this;
    };
    /** Enable or disable autogrow of the storage. Default value is Enabled. */
    az_mysql_server_update_command_builder.prototype.autoGrow = function (value) {
        this.setFlag("--auto-grow", value);
        return this;
    };
    /** The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days. */
    az_mysql_server_update_command_builder.prototype.backupRetention = function (value) {
        this.setFlag("--backup-retention", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_mysql_server_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Set the minimal TLS version for connections to server when SSL is enabled. Default is TLSEnforcementDisabled. */
    az_mysql_server_update_command_builder.prototype.minimalTlsVersion = function (value) {
        this.setFlag("--minimal-tls-version", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Enable or disable public network access to server. When disabled, only connections made through Private Links can reach this server. Allowed values are : Enabled, Disabled, all, 0.0.0.0, <SingleIP>, <StartIP-DestinationIP>. Default is Enabled. */
    az_mysql_server_update_command_builder.prototype.publicNetworkAccess = function (value) {
        this.setFlag("--public-network-access", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_mysql_server_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_mysql_server_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** The name of the sku. Follows the convention {pricing tier}_{compute generation}_{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16. */
    az_mysql_server_update_command_builder.prototype.skuName = function (value) {
        this.setFlag("--sku-name", value);
        return this;
    };
    /** Enable or disable ssl enforcement for connections to server. Default is Enabled. */
    az_mysql_server_update_command_builder.prototype.sslEnforcement = function (value) {
        this.setFlag("--ssl-enforcement", value);
        return this;
    };
    /** The storage capacity of the server (unit is megabytes). Minimum 5120 and increases in 1024 increments. Default is 51200. */
    az_mysql_server_update_command_builder.prototype.storageSize = function (value) {
        this.setFlag("--storage-size", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_mysql_server_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_mysql_server_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Wait for server to satisfy certain conditions.
 *
 * Syntax:
 * ```
 * az mysql server wait [--custom]
 *                      [--exists]
 *                      [--ids]
 *                      [--interval]
 *                      [--name]
 *                      [--resource-group]
 *                      [--subscription]
 *                      [--timeout]
 * ```
 */
var az_mysql_server_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_mysql_server_wait_command_builder, _super);
    function az_mysql_server_wait_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_mysql_server_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_mysql_server_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_mysql_server_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_mysql_server_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_mysql_server_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_mysql_server_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_mysql_server_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_mysql_server_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    return az_mysql_server_wait_command_builder;
}(base_1.CommandBuilder));
