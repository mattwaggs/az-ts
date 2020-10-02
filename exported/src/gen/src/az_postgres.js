"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_1 = require("../base");
/** Manage PostgreSQL databases on a server. */
var az_postgres_db = /** @class */ (function () {
    function az_postgres_db() {
    }
    /**
     * Create a PostgreSQL database.
     *
     * Syntax:
     * ```
     * az postgres db create --name
     *                       --resource-group
     *                       --server-name
     *                       [--charset]
     *                       [--collation]
     *                       [--subscription]
     * ```
     *
     * @param {string} name The name of the database.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     */
    az_postgres_db.create = function (name, resourceGroup, serverName) {
        return new az_postgres_db_create_command_builder("az postgres db create", 'az_postgres_db_create_command_result', name, resourceGroup, serverName);
    };
    /**
     * Delete a database.
     *
     * Syntax:
     * ```
     * az postgres db delete --name
     *                       --resource-group
     *                       --server-name
     *                       [--subscription]
     *                       [--yes]
     * ```
     *
     * @param {string} name The name of the database.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     */
    az_postgres_db["delete"] = function (name, resourceGroup, serverName) {
        return new az_postgres_db_delete_command_builder("az postgres db delete", 'az_postgres_db_delete_command_result', name, resourceGroup, serverName);
    };
    /**
     * List the databases for a server.
     *
     * Syntax:
     * ```
     * az postgres db list --resource-group
     *                     --server-name
     *                     [--query-examples]
     *                     [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     */
    az_postgres_db.list = function (resourceGroup, serverName) {
        return new az_postgres_db_list_command_builder("az postgres db list", 'az_postgres_db_list_command_result', resourceGroup, serverName);
    };
    /**
     * Show the details of a database.
     *
     * Syntax:
     * ```
     * az postgres db show --name
     *                     --resource-group
     *                     --server-name
     *                     [--query-examples]
     *                     [--subscription]
     * ```
     *
     * @param {string} name The name of the database.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     */
    az_postgres_db.show = function (name, resourceGroup, serverName) {
        return new az_postgres_db_show_command_builder("az postgres db show", 'az_postgres_db_show_command_result', name, resourceGroup, serverName);
    };
    return az_postgres_db;
}());
exports.az_postgres_db = az_postgres_db;
/** Manage firewall rules for a server. */
var az_postgres_flexible_server_firewall_rule = /** @class */ (function () {
    function az_postgres_flexible_server_firewall_rule() {
    }
    /**
     * Create a new firewall rule for a flexible server.
     *
     * Syntax:
     * ```
     * az postgres flexible-server firewall-rule create --end-ip-address
     *                                                  --name
     *                                                  --resource-group
     *                                                  --server-name
     *                                                  --start-ip-address
     *                                                  [--subscription]
     * ```
     *
     * @param {string} endIpAddress The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
     * @param {string} name The name of the firewall rule. If name is omitted, default name will be chosen for firewall name. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     * @param {string} startIpAddress The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
     */
    az_postgres_flexible_server_firewall_rule.create = function (endIpAddress, name, resourceGroup, serverName, startIpAddress) {
        return new az_postgres_flexible_server_firewall_rule_create_command_builder("az postgres flexible-server firewall-rule create", 'az_postgres_flexible_server_firewall_rule_create_command_result', endIpAddress, name, resourceGroup, serverName, startIpAddress);
    };
    /**
     * Delete a firewall rule.
     *
     * Syntax:
     * ```
     * az postgres flexible-server firewall-rule delete [--ids]
     *                                                  [--name]
     *                                                  [--prompt]
     *                                                  [--resource-group]
     *                                                  [--server-name]
     *                                                  [--subscription]
     * ```
     */
    az_postgres_flexible_server_firewall_rule["delete"] = function () {
        return new az_postgres_flexible_server_firewall_rule_delete_command_builder("az postgres flexible-server firewall-rule delete", 'az_postgres_flexible_server_firewall_rule_delete_command_result');
    };
    /**
     * List all firewall rules for a flexible server.
     *
     * Syntax:
     * ```
     * az postgres flexible-server firewall-rule list --resource-group
     *                                                --server-name
     *                                                [--query-examples]
     *                                                [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     */
    az_postgres_flexible_server_firewall_rule.list = function (resourceGroup, serverName) {
        return new az_postgres_flexible_server_firewall_rule_list_command_builder("az postgres flexible-server firewall-rule list", 'az_postgres_flexible_server_firewall_rule_list_command_result', resourceGroup, serverName);
    };
    /**
     * Get the details of a firewall rule.
     *
     * Syntax:
     * ```
     * az postgres flexible-server firewall-rule show [--ids]
     *                                                [--name]
     *                                                [--query-examples]
     *                                                [--resource-group]
     *                                                [--server-name]
     *                                                [--subscription]
     * ```
     */
    az_postgres_flexible_server_firewall_rule.show = function () {
        return new az_postgres_flexible_server_firewall_rule_show_command_builder("az postgres flexible-server firewall-rule show", 'az_postgres_flexible_server_firewall_rule_show_command_result');
    };
    /**
     * Update a firewall rule.
     *
     * Syntax:
     * ```
     * az postgres flexible-server firewall-rule update [--add]
     *                                                  [--end-ip-address]
     *                                                  [--force-string]
     *                                                  [--ids]
     *                                                  [--name]
     *                                                  [--remove]
     *                                                  [--resource-group]
     *                                                  [--server-name]
     *                                                  [--set]
     *                                                  [--start-ip-address]
     *                                                  [--subscription]
     * ```
     */
    az_postgres_flexible_server_firewall_rule.update = function () {
        return new az_postgres_flexible_server_firewall_rule_update_command_builder("az postgres flexible-server firewall-rule update", 'az_postgres_flexible_server_firewall_rule_update_command_result');
    };
    return az_postgres_flexible_server_firewall_rule;
}());
exports.az_postgres_flexible_server_firewall_rule = az_postgres_flexible_server_firewall_rule;
/** Commands for managing server parameter values for flexible server. */
var az_postgres_flexible_server_parameter = /** @class */ (function () {
    function az_postgres_flexible_server_parameter() {
    }
    /**
     * List the parameter values for a flexible server.
     *
     * Syntax:
     * ```
     * az postgres flexible-server parameter list --resource-group
     *                                            --server-name
     *                                            [--query-examples]
     *                                            [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     */
    az_postgres_flexible_server_parameter.list = function (resourceGroup, serverName) {
        return new az_postgres_flexible_server_parameter_list_command_builder("az postgres flexible-server parameter list", 'az_postgres_flexible_server_parameter_list_command_result', resourceGroup, serverName);
    };
    /**
     * Update the parameter of a flexible server.
     *
     * Syntax:
     * ```
     * az postgres flexible-server parameter set [--ids]
     *                                           [--name]
     *                                           [--resource-group]
     *                                           [--server-name]
     *                                           [--source]
     *                                           [--subscription]
     *                                           [--value]
     * ```
     */
    az_postgres_flexible_server_parameter.set = function () {
        return new az_postgres_flexible_server_parameter_set_command_builder("az postgres flexible-server parameter set", 'az_postgres_flexible_server_parameter_set_command_result');
    };
    /**
     * Get the parameter for a flexible server.".
     *
     * Syntax:
     * ```
     * az postgres flexible-server parameter show [--ids]
     *                                            [--name]
     *                                            [--query-examples]
     *                                            [--resource-group]
     *                                            [--server-name]
     *                                            [--subscription]
     * ```
     */
    az_postgres_flexible_server_parameter.show = function () {
        return new az_postgres_flexible_server_parameter_show_command_builder("az postgres flexible-server parameter show", 'az_postgres_flexible_server_parameter_show_command_result');
    };
    return az_postgres_flexible_server_parameter;
}());
exports.az_postgres_flexible_server_parameter = az_postgres_flexible_server_parameter;
/** Manage Azure Database for PostgreSQL Flexible Servers. */
var az_postgres_flexible_server = /** @class */ (function () {
    function az_postgres_flexible_server() {
    }
    /**
     * Create a flexible server.
     *
     * Syntax:
     * ```
     * az postgres flexible-server create [--address-prefixes]
     *                                    [--admin-password]
     *                                    [--admin-user,]
     *                                    [--assign-identity]
     *                                    [--backup-retention]
     *                                    [--high-availability]
     *                                    [--location]
     *                                    [--name]
     *                                    [--public-access]
     *                                    [--resource-group]
     *                                    [--sku-name]
     *                                    [--storage-size]
     *                                    [--subnet]
     *                                    [--subnet-prefixes]
     *                                    [--subscription]
     *                                    [--tags]
     *                                    [--tier]
     *                                    [--version]
     *                                    [--vnet]
     *                                    [--zone,]
     * ```
     */
    az_postgres_flexible_server.create = function () {
        return new az_postgres_flexible_server_create_command_builder("az postgres flexible-server create", 'az_postgres_flexible_server_create_command_result');
    };
    /**
     * Delete a flexible server.
     *
     * Syntax:
     * ```
     * az postgres flexible-server delete [--force]
     *                                    [--ids]
     *                                    [--name]
     *                                    [--resource-group]
     *                                    [--subscription]
     * ```
     */
    az_postgres_flexible_server["delete"] = function () {
        return new az_postgres_flexible_server_delete_command_builder("az postgres flexible-server delete", 'az_postgres_flexible_server_delete_command_result');
    };
    /**
     * List available flexible servers.
     *
     * Syntax:
     * ```
     * az postgres flexible-server list [--query-examples]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     */
    az_postgres_flexible_server.list = function () {
        return new az_postgres_flexible_server_list_command_builder("az postgres flexible-server list", 'az_postgres_flexible_server_list_command_result');
    };
    /**
     * Lists available sku's in the given region.
     *
     * Syntax:
     * ```
     * az postgres flexible-server list-skus --location
     *                                       [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     */
    az_postgres_flexible_server.list_skus = function (location) {
        return new az_postgres_flexible_server_list_skus_command_builder("az postgres flexible-server list-skus", 'az_postgres_flexible_server_list_skus_command_result', location);
    };
    /**
     * Restart a flexible server.
     *
     * Syntax:
     * ```
     * az postgres flexible-server restart [--ids]
     *                                     [--name]
     *                                     [--resource-group]
     *                                     [--subscription]
     * ```
     */
    az_postgres_flexible_server.restart = function () {
        return new az_postgres_flexible_server_restart_command_builder("az postgres flexible-server restart", 'az_postgres_flexible_server_restart_command_result');
    };
    /**
     * Restore a flexible server from backup.
     *
     * Syntax:
     * ```
     * az postgres flexible-server restore --source-server
     *                                     --time
     *                                     [--ids]
     *                                     [--location]
     *                                     [--name]
     *                                     [--no-wait]
     *                                     [--resource-group]
     *                                     [--subscription]
     * ```
     *
     * @param {string} sourceServer The name or resource ID of the source server to restore from.
     * @param {string} time The point in time to restore from (ISO8601 format), e.g., 2017-04-26T02:10:00+08:00.
     */
    az_postgres_flexible_server.restore = function (sourceServer, time) {
        return new az_postgres_flexible_server_restore_command_builder("az postgres flexible-server restore", 'az_postgres_flexible_server_restore_command_result', sourceServer, time);
    };
    /**
     * Get the details of a flexible server.
     *
     * Syntax:
     * ```
     * az postgres flexible-server show [--ids]
     *                                  [--name]
     *                                  [--query-examples]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     */
    az_postgres_flexible_server.show = function () {
        return new az_postgres_flexible_server_show_command_builder("az postgres flexible-server show", 'az_postgres_flexible_server_show_command_result');
    };
    /**
     * Show the connection strings for a PostgreSQL flexible-server database.
     *
     * Syntax:
     * ```
     * az postgres flexible-server show-connection-string [--admin-password]
     *                                                    [--admin-user]
     *                                                    [--database-name]
     *                                                    [--ids]
     *                                                    [--server-name]
     *                                                    [--subscription]
     * ```
     */
    az_postgres_flexible_server.show_connection_string = function () {
        return new az_postgres_flexible_server_show_connection_string_command_builder("az postgres flexible-server show-connection-string", 'az_postgres_flexible_server_show_connection_string_command_result');
    };
    /**
     * Start a flexible server.
     *
     * Syntax:
     * ```
     * az postgres flexible-server start [--ids]
     *                                   [--name]
     *                                   [--resource-group]
     *                                   [--subscription]
     * ```
     */
    az_postgres_flexible_server.start = function () {
        return new az_postgres_flexible_server_start_command_builder("az postgres flexible-server start", 'az_postgres_flexible_server_start_command_result');
    };
    /**
     * Stop a flexible server.
     *
     * Syntax:
     * ```
     * az postgres flexible-server stop [--ids]
     *                                  [--name]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     */
    az_postgres_flexible_server.stop = function () {
        return new az_postgres_flexible_server_stop_command_builder("az postgres flexible-server stop", 'az_postgres_flexible_server_stop_command_result');
    };
    /**
     * Update a flexible server.
     *
     * Syntax:
     * ```
     * az postgres flexible-server update [--add]
     *                                    [--admin-password]
     *                                    [--backup-retention]
     *                                    [--force-string]
     *                                    [--high-availability {Disabled, Enabled}]
     *                                    [--ids]
     *                                    [--maintenance-window]
     *                                    [--name]
     *                                    [--remove]
     *                                    [--resource-group]
     *                                    [--set]
     *                                    [--sku-name]
     *                                    [--storage-size]
     *                                    [--subscription]
     *                                    [--tags]
     *                                    [--tier]
     * ```
     */
    az_postgres_flexible_server.update = function () {
        return new az_postgres_flexible_server_update_command_builder("az postgres flexible-server update", 'az_postgres_flexible_server_update_command_result');
    };
    /**
     * Wait for the flexible server to satisfy certain conditions.
     *
     * Syntax:
     * ```
     * az postgres flexible-server wait [--created]
     *                                  [--custom]
     *                                  [--deleted]
     *                                  [--exists]
     *                                  [--ids]
     *                                  [--interval]
     *                                  [--name]
     *                                  [--resource-group]
     *                                  [--subscription]
     *                                  [--timeout]
     *                                  [--updated]
     * ```
     */
    az_postgres_flexible_server.wait = function () {
        return new az_postgres_flexible_server_wait_command_builder("az postgres flexible-server wait", 'az_postgres_flexible_server_wait_command_result');
    };
    return az_postgres_flexible_server;
}());
exports.az_postgres_flexible_server = az_postgres_flexible_server;
/** Manage a postgres server's Active Directory administrator. */
var az_postgres_server_ad_admin = /** @class */ (function () {
    function az_postgres_server_ad_admin() {
    }
    /**
     * Create an Active Directory Administrator for PostgreSQL server.
     *
     * Syntax:
     * ```
     * az postgres server ad-admin create --resource-group
     *                                    --server-name
     *                                    [--display-name]
     *                                    [--no-wait]
     *                                    [--object-id]
     *                                    [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     */
    az_postgres_server_ad_admin.create = function (resourceGroup, serverName) {
        return new az_postgres_server_ad_admin_create_command_builder("az postgres server ad-admin create", 'az_postgres_server_ad_admin_create_command_result', resourceGroup, serverName);
    };
    /**
     * Delete an Active Directory Administrator for PostgreSQL server.
     *
     * Syntax:
     * ```
     * az postgres server ad-admin delete [--ids]
     *                                    [--resource-group]
     *                                    [--server-name]
     *                                    [--subscription]
     *                                    [--yes]
     * ```
     */
    az_postgres_server_ad_admin["delete"] = function () {
        return new az_postgres_server_ad_admin_delete_command_builder("az postgres server ad-admin delete", 'az_postgres_server_ad_admin_delete_command_result');
    };
    /**
     * List all Active Directory Administrators for PostgreSQL server.
     *
     * Syntax:
     * ```
     * az postgres server ad-admin list [--ids]
     *                                  [--query-examples]
     *                                  [--resource-group]
     *                                  [--server-name]
     *                                  [--subscription]
     * ```
     */
    az_postgres_server_ad_admin.list = function () {
        return new az_postgres_server_ad_admin_list_command_builder("az postgres server ad-admin list", 'az_postgres_server_ad_admin_list_command_result');
    };
    /**
     * Get Active Directory Administrator information for a PostgreSQL server.
     *
     * Syntax:
     * ```
     * az postgres server ad-admin show [--ids]
     *                                  [--query-examples]
     *                                  [--resource-group]
     *                                  [--server-name]
     *                                  [--subscription]
     * ```
     */
    az_postgres_server_ad_admin.show = function () {
        return new az_postgres_server_ad_admin_show_command_builder("az postgres server ad-admin show", 'az_postgres_server_ad_admin_show_command_result');
    };
    /**
     * Place the CLI in a waiting state until a condition of the PostgreSQL server Active Directory Administrator is met.
     *
     * Syntax:
     * ```
     * az postgres server ad-admin wait [--created]
     *                                  [--custom]
     *                                  [--deleted]
     *                                  [--exists]
     *                                  [--ids]
     *                                  [--interval]
     *                                  [--resource-group]
     *                                  [--server-name]
     *                                  [--subscription]
     *                                  [--timeout]
     *                                  [--updated]
     * ```
     */
    az_postgres_server_ad_admin.wait = function () {
        return new az_postgres_server_ad_admin_wait_command_builder("az postgres server ad-admin wait", 'az_postgres_server_ad_admin_wait_command_result');
    };
    return az_postgres_server_ad_admin;
}());
exports.az_postgres_server_ad_admin = az_postgres_server_ad_admin;
/** Manage configuration values for a server. */
var az_postgres_server_configuration = /** @class */ (function () {
    function az_postgres_server_configuration() {
    }
    /**
     * List the configuration values for a server.
     *
     * Syntax:
     * ```
     * az postgres server configuration list [--ids]
     *                                       [--query-examples]
     *                                       [--resource-group]
     *                                       [--server-name]
     *                                       [--subscription]
     * ```
     */
    az_postgres_server_configuration.list = function () {
        return new az_postgres_server_configuration_list_command_builder("az postgres server configuration list", 'az_postgres_server_configuration_list_command_result');
    };
    /**
     * Update the configuration of a server.
     *
     * Syntax:
     * ```
     * az postgres server configuration set [--ids]
     *                                      [--name]
     *                                      [--resource-group]
     *                                      [--server-name]
     *                                      [--subscription]
     *                                      [--value]
     * ```
     */
    az_postgres_server_configuration.set = function () {
        return new az_postgres_server_configuration_set_command_builder("az postgres server configuration set", 'az_postgres_server_configuration_set_command_result');
    };
    /**
     * Get the configuration for a server.".
     *
     * Syntax:
     * ```
     * az postgres server configuration show [--ids]
     *                                       [--name]
     *                                       [--query-examples]
     *                                       [--resource-group]
     *                                       [--server-name]
     *                                       [--subscription]
     * ```
     */
    az_postgres_server_configuration.show = function () {
        return new az_postgres_server_configuration_show_command_builder("az postgres server configuration show", 'az_postgres_server_configuration_show_command_result');
    };
    return az_postgres_server_configuration;
}());
exports.az_postgres_server_configuration = az_postgres_server_configuration;
/** Manage firewall rules for a server. */
var az_postgres_server_firewall_rule = /** @class */ (function () {
    function az_postgres_server_firewall_rule() {
    }
    /**
     * Create a new firewall rule for a server.
     *
     * Syntax:
     * ```
     * az postgres server firewall-rule create --end-ip-address
     *                                         --name
     *                                         --resource-group
     *                                         --server-name
     *                                         --start-ip-address
     *                                         [--subscription]
     * ```
     *
     * @param {string} endIpAddress The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
     * @param {string} name The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     * @param {string} startIpAddress The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
     */
    az_postgres_server_firewall_rule.create = function (endIpAddress, name, resourceGroup, serverName, startIpAddress) {
        return new az_postgres_server_firewall_rule_create_command_builder("az postgres server firewall-rule create", 'az_postgres_server_firewall_rule_create_command_result', endIpAddress, name, resourceGroup, serverName, startIpAddress);
    };
    /**
     * Delete a firewall rule.
     *
     * Syntax:
     * ```
     * az postgres server firewall-rule delete [--ids]
     *                                         [--name]
     *                                         [--resource-group]
     *                                         [--server-name]
     *                                         [--subscription]
     *                                         [--yes]
     * ```
     */
    az_postgres_server_firewall_rule["delete"] = function () {
        return new az_postgres_server_firewall_rule_delete_command_builder("az postgres server firewall-rule delete", 'az_postgres_server_firewall_rule_delete_command_result');
    };
    /**
     * List all firewall rules for a server.
     *
     * Syntax:
     * ```
     * az postgres server firewall-rule list [--ids]
     *                                       [--query-examples]
     *                                       [--resource-group]
     *                                       [--server-name]
     *                                       [--subscription]
     * ```
     */
    az_postgres_server_firewall_rule.list = function () {
        return new az_postgres_server_firewall_rule_list_command_builder("az postgres server firewall-rule list", 'az_postgres_server_firewall_rule_list_command_result');
    };
    /**
     * Get the details of a firewall rule.
     *
     * Syntax:
     * ```
     * az postgres server firewall-rule show [--ids]
     *                                       [--name]
     *                                       [--query-examples]
     *                                       [--resource-group]
     *                                       [--server-name]
     *                                       [--subscription]
     * ```
     */
    az_postgres_server_firewall_rule.show = function () {
        return new az_postgres_server_firewall_rule_show_command_builder("az postgres server firewall-rule show", 'az_postgres_server_firewall_rule_show_command_result');
    };
    /**
     * Update a firewall rule.
     *
     * Syntax:
     * ```
     * az postgres server firewall-rule update [--add]
     *                                         [--end-ip-address]
     *                                         [--force-string]
     *                                         [--ids]
     *                                         [--name]
     *                                         [--remove]
     *                                         [--resource-group]
     *                                         [--server-name]
     *                                         [--set]
     *                                         [--start-ip-address]
     *                                         [--subscription]
     * ```
     */
    az_postgres_server_firewall_rule.update = function () {
        return new az_postgres_server_firewall_rule_update_command_builder("az postgres server firewall-rule update", 'az_postgres_server_firewall_rule_update_command_result');
    };
    return az_postgres_server_firewall_rule;
}());
exports.az_postgres_server_firewall_rule = az_postgres_server_firewall_rule;
/** Manage PostgreSQL server keys. */
var az_postgres_server_key = /** @class */ (function () {
    function az_postgres_server_key() {
    }
    /**
     * Create server key.
     *
     * Syntax:
     * ```
     * az postgres server key create --kid
     *                               --name
     *                               --resource-group
     *                               [--subscription]
     * ```
     *
     * @param {string} kid The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>".
     * @param {string} name Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_postgres_server_key.create = function (kid, name, resourceGroup) {
        return new az_postgres_server_key_create_command_builder("az postgres server key create", 'az_postgres_server_key_create_command_result', kid, name, resourceGroup);
    };
    /**
     * Delete server key.
     *
     * Syntax:
     * ```
     * az postgres server key delete --kid
     *                               [--ids]
     *                               [--name]
     *                               [--resource-group]
     *                               [--subscription]
     *                               [--yes]
     * ```
     *
     * @param {string} kid The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>".
     */
    az_postgres_server_key["delete"] = function (kid) {
        return new az_postgres_server_key_delete_command_builder("az postgres server key delete", 'az_postgres_server_key_delete_command_result', kid);
    };
    /**
     * Gets a list of  Server keys.
     *
     * Syntax:
     * ```
     * az postgres server key list [--ids]
     *                             [--name]
     *                             [--query-examples]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     */
    az_postgres_server_key.list = function () {
        return new az_postgres_server_key_list_command_builder("az postgres server key list", 'az_postgres_server_key_list_command_result');
    };
    /**
     * Show server key.
     *
     * Syntax:
     * ```
     * az postgres server key show --kid
     *                             [--ids]
     *                             [--name]
     *                             [--query-examples]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     *
     * @param {string} kid The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>".
     */
    az_postgres_server_key.show = function (kid) {
        return new az_postgres_server_key_show_command_builder("az postgres server key show", 'az_postgres_server_key_show_command_result', kid);
    };
    return az_postgres_server_key;
}());
exports.az_postgres_server_key = az_postgres_server_key;
/** Manage PostgreSQL server private endpoint connections. */
var az_postgres_server_private_endpoint_connection = /** @class */ (function () {
    function az_postgres_server_private_endpoint_connection() {
    }
    /**
     * Approve the specified private endpoint connection associated with a PostgreSQL server.
     *
     * Syntax:
     * ```
     * az postgres server private-endpoint-connection approve [--description]
     *                                                        [--id]
     *                                                        [--ids]
     *                                                        [--name]
     *                                                        [--resource-group]
     *                                                        [--server-name]
     *                                                        [--subscription]
     * ```
     */
    az_postgres_server_private_endpoint_connection.approve = function () {
        return new az_postgres_server_private_endpoint_connection_approve_command_builder("az postgres server private-endpoint-connection approve", 'az_postgres_server_private_endpoint_connection_approve_command_result');
    };
    /**
     * Delete the specified private endpoint connection associated with a PostgreSQL server.
     *
     * Syntax:
     * ```
     * az postgres server private-endpoint-connection delete [--id]
     *                                                       [--ids]
     *                                                       [--name]
     *                                                       [--resource-group]
     *                                                       [--server-name]
     *                                                       [--subscription]
     * ```
     */
    az_postgres_server_private_endpoint_connection["delete"] = function () {
        return new az_postgres_server_private_endpoint_connection_delete_command_builder("az postgres server private-endpoint-connection delete", 'az_postgres_server_private_endpoint_connection_delete_command_result');
    };
    /**
     * Reject the specified private endpoint connection associated with a PostgreSQL server.
     *
     * Syntax:
     * ```
     * az postgres server private-endpoint-connection reject [--description]
     *                                                       [--id]
     *                                                       [--ids]
     *                                                       [--name]
     *                                                       [--resource-group]
     *                                                       [--server-name]
     *                                                       [--subscription]
     * ```
     */
    az_postgres_server_private_endpoint_connection.reject = function () {
        return new az_postgres_server_private_endpoint_connection_reject_command_builder("az postgres server private-endpoint-connection reject", 'az_postgres_server_private_endpoint_connection_reject_command_result');
    };
    /**
     * Show details of a private endpoint connection associated with a PostgreSQL server.
     *
     * Syntax:
     * ```
     * az postgres server private-endpoint-connection show [--id]
     *                                                     [--ids]
     *                                                     [--name]
     *                                                     [--query-examples]
     *                                                     [--resource-group]
     *                                                     [--server-name]
     *                                                     [--subscription]
     * ```
     */
    az_postgres_server_private_endpoint_connection.show = function () {
        return new az_postgres_server_private_endpoint_connection_show_command_builder("az postgres server private-endpoint-connection show", 'az_postgres_server_private_endpoint_connection_show_command_result');
    };
    return az_postgres_server_private_endpoint_connection;
}());
exports.az_postgres_server_private_endpoint_connection = az_postgres_server_private_endpoint_connection;
/** Manage PostgreSQL server private link resources. */
var az_postgres_server_private_link_resource = /** @class */ (function () {
    function az_postgres_server_private_link_resource() {
    }
    /**
     * List the private link resources supported for a PostgreSQL server.
     *
     * Syntax:
     * ```
     * az postgres server private-link-resource list [--ids]
     *                                               [--query-examples]
     *                                               [--resource-group]
     *                                               [--server-name]
     *                                               [--subscription]
     * ```
     */
    az_postgres_server_private_link_resource.list = function () {
        return new az_postgres_server_private_link_resource_list_command_builder("az postgres server private-link-resource list", 'az_postgres_server_private_link_resource_list_command_result');
    };
    return az_postgres_server_private_link_resource;
}());
exports.az_postgres_server_private_link_resource = az_postgres_server_private_link_resource;
/** Manage read replicas. */
var az_postgres_server_replica = /** @class */ (function () {
    function az_postgres_server_replica() {
    }
    /**
     * Create a read replica for a server.
     *
     * Syntax:
     * ```
     * az postgres server replica create --name
     *                                   --resource-group
     *                                   --source-server
     *                                   [--location]
     *                                   [--no-wait]
     *                                   [--sku-name]
     *                                   [--subscription]
     * ```
     *
     * @param {string} name Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} sourceServer The name or resource ID of the master server to the create replica for.
     */
    az_postgres_server_replica.create = function (name, resourceGroup, sourceServer) {
        return new az_postgres_server_replica_create_command_builder("az postgres server replica create", 'az_postgres_server_replica_create_command_result', name, resourceGroup, sourceServer);
    };
    /**
     * List all read replicas for a given server.
     *
     * Syntax:
     * ```
     * az postgres server replica list [--ids]
     *                                 [--query-examples]
     *                                 [--resource-group]
     *                                 [--server-name]
     *                                 [--subscription]
     * ```
     */
    az_postgres_server_replica.list = function () {
        return new az_postgres_server_replica_list_command_builder("az postgres server replica list", 'az_postgres_server_replica_list_command_result');
    };
    /**
     * Stop replication to a read replica and make it a read/write server.
     *
     * Syntax:
     * ```
     * az postgres server replica stop [--ids]
     *                                 [--name]
     *                                 [--resource-group]
     *                                 [--subscription]
     *                                 [--yes]
     * ```
     */
    az_postgres_server_replica.stop = function () {
        return new az_postgres_server_replica_stop_command_builder("az postgres server replica stop", 'az_postgres_server_replica_stop_command_result');
    };
    return az_postgres_server_replica;
}());
exports.az_postgres_server_replica = az_postgres_server_replica;
/** Manage a server's virtual network rules. */
var az_postgres_server_vnet_rule = /** @class */ (function () {
    function az_postgres_server_vnet_rule() {
    }
    /**
     * Create a virtual network rule to allows access to a PostgreSQL server.
     *
     * Syntax:
     * ```
     * az postgres server vnet-rule create --name
     *                                     --resource-group
     *                                     --server-name
     *                                     --subnet
     *                                     [--ignore-missing-endpoint {false, true}]
     *                                     [--subscription]
     *                                     [--vnet-name]
     * ```
     *
     * @param {string} name The name of the vnet rule.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     * @param {string} subnet Name or ID of the subnet that allows access to an Azure Postgres Server. If subnet name is provided, --vnet-name must be provided.
     */
    az_postgres_server_vnet_rule.create = function (name, resourceGroup, serverName, subnet) {
        return new az_postgres_server_vnet_rule_create_command_builder("az postgres server vnet-rule create", 'az_postgres_server_vnet_rule_create_command_result', name, resourceGroup, serverName, subnet);
    };
    /**
     * Deletes the virtual network rule with the given name.
     *
     * Syntax:
     * ```
     * az postgres server vnet-rule delete [--ids]
     *                                     [--name]
     *                                     [--resource-group]
     *                                     [--server-name]
     *                                     [--subscription]
     * ```
     */
    az_postgres_server_vnet_rule["delete"] = function () {
        return new az_postgres_server_vnet_rule_delete_command_builder("az postgres server vnet-rule delete", 'az_postgres_server_vnet_rule_delete_command_result');
    };
    /**
     * Gets a list of virtual network rules in a server.
     *
     * Syntax:
     * ```
     * az postgres server vnet-rule list [--ids]
     *                                   [--query-examples]
     *                                   [--resource-group]
     *                                   [--server-name]
     *                                   [--subscription]
     * ```
     */
    az_postgres_server_vnet_rule.list = function () {
        return new az_postgres_server_vnet_rule_list_command_builder("az postgres server vnet-rule list", 'az_postgres_server_vnet_rule_list_command_result');
    };
    /**
     * Gets a virtual network rule.
     *
     * Syntax:
     * ```
     * az postgres server vnet-rule show [--ids]
     *                                   [--name]
     *                                   [--query-examples]
     *                                   [--resource-group]
     *                                   [--server-name]
     *                                   [--subscription]
     * ```
     */
    az_postgres_server_vnet_rule.show = function () {
        return new az_postgres_server_vnet_rule_show_command_builder("az postgres server vnet-rule show", 'az_postgres_server_vnet_rule_show_command_result');
    };
    /**
     * Update a virtual network rule.
     *
     * Syntax:
     * ```
     * az postgres server vnet-rule update --subnet
     *                                     [--add]
     *                                     [--force-string]
     *                                     [--ids]
     *                                     [--ignore-missing-endpoint {false, true}]
     *                                     [--name]
     *                                     [--remove]
     *                                     [--resource-group]
     *                                     [--server-name]
     *                                     [--set]
     *                                     [--subscription]
     *                                     [--vnet-name]
     * ```
     *
     * @param {string} subnet Name or ID of the subnet that allows access to an Azure Postgres Server. If subnet name is provided, --vnet-name must be provided.
     */
    az_postgres_server_vnet_rule.update = function (subnet) {
        return new az_postgres_server_vnet_rule_update_command_builder("az postgres server vnet-rule update", 'az_postgres_server_vnet_rule_update_command_result', subnet);
    };
    return az_postgres_server_vnet_rule;
}());
exports.az_postgres_server_vnet_rule = az_postgres_server_vnet_rule;
/** Manage server logs. */
var az_postgres_server_logs = /** @class */ (function () {
    function az_postgres_server_logs() {
    }
    /**
     * Download log files.
     *
     * Syntax:
     * ```
     * az postgres server-logs download --name
     *                                  --resource-group
     *                                  --server-name
     *                                  [--subscription]
     * ```
     *
     * @param {string} name Space-separated list of log filenames on the server to download.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     */
    az_postgres_server_logs.download = function (name, resourceGroup, serverName) {
        return new az_postgres_server_logs_download_command_builder("az postgres server-logs download", 'az_postgres_server_logs_download_command_result', name, resourceGroup, serverName);
    };
    /**
     * List log files for a server.
     *
     * Syntax:
     * ```
     * az postgres server-logs list --resource-group
     *                              --server-name
     *                              [--file-last-written]
     *                              [--filename-contains]
     *                              [--max-file-size]
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     */
    az_postgres_server_logs.list = function (resourceGroup, serverName) {
        return new az_postgres_server_logs_list_command_builder("az postgres server-logs list", 'az_postgres_server_logs_list_command_result', resourceGroup, serverName);
    };
    return az_postgres_server_logs;
}());
exports.az_postgres_server_logs = az_postgres_server_logs;
/** Manage PostgreSQL servers. */
var az_postgres_server = /** @class */ (function () {
    function az_postgres_server() {
    }
    /**
     * Create a server.
     *
     * Syntax:
     * ```
     * az postgres server create --admin-password
     *                           --admin-user
     *                           --name
     *                           --resource-group
     *                           --sku-name
     *                           [--assign-identity]
     *                           [--auto-grow {Disabled, Enabled}]
     *                           [--backup-retention]
     *                           [--geo-redundant-backup {Disabled, Enabled}]
     *                           [--infrastructure-encryption {Disabled, Enabled}]
     *                           [--location]
     *                           [--minimal-tls-version {TLS1_0, TLS1_1, TLS1_2, TLSEnforcementDisabled}]
     *                           [--public {Disabled, Enabled}]
     *                           [--ssl-enforcement {Disabled, Enabled}]
     *                           [--storage-size]
     *                           [--subscription]
     *                           [--tags]
     *                           [--version]
     * ```
     *
     * @param {string} adminPassword The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters.
     * @param {string} adminUser Administrator username for the server. Once set, it cannot be changed.
     * @param {string} name Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} skuName The name of the sku. Follows the convention {pricing tier}_{compute generation}_{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16.
     */
    az_postgres_server.create = function (adminPassword, adminUser, name, resourceGroup, skuName) {
        return new az_postgres_server_create_command_builder("az postgres server create", 'az_postgres_server_create_command_result', adminPassword, adminUser, name, resourceGroup, skuName);
    };
    /**
     * Delete a server.
     *
     * Syntax:
     * ```
     * az postgres server delete [--ids]
     *                           [--name]
     *                           [--resource-group]
     *                           [--subscription]
     *                           [--yes]
     * ```
     */
    az_postgres_server["delete"] = function () {
        return new az_postgres_server_delete_command_builder("az postgres server delete", 'az_postgres_server_delete_command_result');
    };
    /**
     * Geo-restore a server from backup.
     *
     * Syntax:
     * ```
     * az postgres server georestore --location
     *                               --source-server
     *                               [--backup-retention]
     *                               [--geo-redundant-backup]
     *                               [--ids]
     *                               [--name]
     *                               [--no-wait]
     *                               [--resource-group]
     *                               [--sku-name]
     *                               [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} sourceServer The name or ID of the source server to restore from.
     */
    az_postgres_server.georestore = function (location, sourceServer) {
        return new az_postgres_server_georestore_command_builder("az postgres server georestore", 'az_postgres_server_georestore_command_result', location, sourceServer);
    };
    /**
     * List available servers.
     *
     * Syntax:
     * ```
     * az postgres server list [--query-examples]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    az_postgres_server.list = function () {
        return new az_postgres_server_list_command_builder("az postgres server list", 'az_postgres_server_list_command_result');
    };
    /**
     * Restart a server.
     *
     * Syntax:
     * ```
     * az postgres server restart [--ids]
     *                            [--name]
     *                            [--resource-group]
     *                            [--subscription]
     * ```
     */
    az_postgres_server.restart = function () {
        return new az_postgres_server_restart_command_builder("az postgres server restart", 'az_postgres_server_restart_command_result');
    };
    /**
     * Restore a server from backup.
     *
     * Syntax:
     * ```
     * az postgres server restore --pitr-time
     *                            --source-server
     *                            [--ids]
     *                            [--name]
     *                            [--no-wait]
     *                            [--resource-group]
     *                            [--subscription]
     * ```
     *
     * @param {string} restorePointInTime The point in time to restore from (ISO8601 format), e.g., 2017-04-26T02:10:00+08:00.
     * @param {string} sourceServer The name or resource ID of the source server to restore from.
     */
    az_postgres_server.restore = function (restorePointInTime, sourceServer) {
        return new az_postgres_server_restore_command_builder("az postgres server restore", 'az_postgres_server_restore_command_result', restorePointInTime, sourceServer);
    };
    /**
     * Get the details of a server.
     *
     * Syntax:
     * ```
     * az postgres server show [--ids]
     *                         [--name]
     *                         [--query-examples]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    az_postgres_server.show = function () {
        return new az_postgres_server_show_command_builder("az postgres server show", 'az_postgres_server_show_command_result');
    };
    /**
     * Update a server.
     *
     * Syntax:
     * ```
     * az postgres server update [--add]
     *                           [--admin-password]
     *                           [--assign-identity]
     *                           [--auto-grow {Disabled, Enabled}]
     *                           [--backup-retention]
     *                           [--force-string]
     *                           [--ids]
     *                           [--minimal-tls-version {TLS1_0, TLS1_1, TLS1_2, TLSEnforcementDisabled}]
     *                           [--name]
     *                           [--public {Disabled, Enabled}]
     *                           [--remove]
     *                           [--resource-group]
     *                           [--set]
     *                           [--sku-name]
     *                           [--ssl-enforcement {Disabled, Enabled}]
     *                           [--storage-size]
     *                           [--subscription]
     *                           [--tags]
     * ```
     */
    az_postgres_server.update = function () {
        return new az_postgres_server_update_command_builder("az postgres server update", 'az_postgres_server_update_command_result');
    };
    /**
     * Wait for server to satisfy certain conditions.
     *
     * Syntax:
     * ```
     * az postgres server wait [--custom]
     *                         [--exists]
     *                         [--ids]
     *                         [--interval]
     *                         [--name]
     *                         [--resource-group]
     *                         [--subscription]
     *                         [--timeout]
     * ```
     */
    az_postgres_server.wait = function () {
        return new az_postgres_server_wait_command_builder("az postgres server wait", 'az_postgres_server_wait_command_result');
    };
    return az_postgres_server;
}());
exports.az_postgres_server = az_postgres_server;
/** Manage Azure Database for PostgreSQL servers. */
var az_postgres = /** @class */ (function () {
    function az_postgres() {
    }
    return az_postgres;
}());
exports.az_postgres = az_postgres;
/**
 * Create a PostgreSQL database.
 *
 * Syntax:
 * ```
 * az postgres db create --name
 *                       --resource-group
 *                       --server-name
 *                       [--charset]
 *                       [--collation]
 *                       [--subscription]
 * ```
 *
 * @param {string} name The name of the database.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 */
var az_postgres_db_create_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_db_create_command_builder, _super);
    function az_postgres_db_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, serverName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        return _this;
    }
    /** The name of the database. */
    az_postgres_db_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_db_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_db_create_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** The charset of the database. */
    az_postgres_db_create_command_builder.prototype.charset = function (value) {
        this.setFlag("--charset", value);
        return this;
    };
    /** The collation of the database. */
    az_postgres_db_create_command_builder.prototype.collation = function (value) {
        this.setFlag("--collation", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_db_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_db_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a database.
 *
 * Syntax:
 * ```
 * az postgres db delete --name
 *                       --resource-group
 *                       --server-name
 *                       [--subscription]
 *                       [--yes]
 * ```
 *
 * @param {string} name The name of the database.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 */
var az_postgres_db_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_db_delete_command_builder, _super);
    function az_postgres_db_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup, serverName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        return _this;
    }
    /** The name of the database. */
    az_postgres_db_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_db_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_db_delete_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_db_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_postgres_db_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_postgres_db_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the databases for a server.
 *
 * Syntax:
 * ```
 * az postgres db list --resource-group
 *                     --server-name
 *                     [--query-examples]
 *                     [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 */
var az_postgres_db_list_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_db_list_command_builder, _super);
    function az_postgres_db_list_command_builder(commandPath, resultDataTypeName, resourceGroup, serverName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_db_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_db_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_postgres_db_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_db_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_db_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details of a database.
 *
 * Syntax:
 * ```
 * az postgres db show --name
 *                     --resource-group
 *                     --server-name
 *                     [--query-examples]
 *                     [--subscription]
 * ```
 *
 * @param {string} name The name of the database.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 */
var az_postgres_db_show_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_db_show_command_builder, _super);
    function az_postgres_db_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup, serverName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        return _this;
    }
    /** The name of the database. */
    az_postgres_db_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_db_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_db_show_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_postgres_db_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_db_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_db_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new firewall rule for a flexible server.
 *
 * Syntax:
 * ```
 * az postgres flexible-server firewall-rule create --end-ip-address
 *                                                  --name
 *                                                  --resource-group
 *                                                  --server-name
 *                                                  --start-ip-address
 *                                                  [--subscription]
 * ```
 *
 * @param {string} endIpAddress The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
 * @param {string} name The name of the firewall rule. If name is omitted, default name will be chosen for firewall name. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 * @param {string} startIpAddress The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
 */
var az_postgres_flexible_server_firewall_rule_create_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_flexible_server_firewall_rule_create_command_builder, _super);
    function az_postgres_flexible_server_firewall_rule_create_command_builder(commandPath, resultDataTypeName, endIpAddress, name, resourceGroup, serverName, startIpAddress) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.endIpAddress(endIpAddress);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        _this.startIpAddress(startIpAddress);
        return _this;
    }
    /** The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    az_postgres_flexible_server_firewall_rule_create_command_builder.prototype.endIpAddress = function (value) {
        this.setFlag("--end-ip-address", value);
        return this;
    };
    /** The name of the firewall rule. If name is omitted, default name will be chosen for firewall name. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    az_postgres_flexible_server_firewall_rule_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_flexible_server_firewall_rule_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_flexible_server_firewall_rule_create_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    az_postgres_flexible_server_firewall_rule_create_command_builder.prototype.startIpAddress = function (value) {
        this.setFlag("--start-ip-address", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_flexible_server_firewall_rule_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_flexible_server_firewall_rule_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a firewall rule.
 *
 * Syntax:
 * ```
 * az postgres flexible-server firewall-rule delete [--ids]
 *                                                  [--name]
 *                                                  [--prompt]
 *                                                  [--resource-group]
 *                                                  [--server-name]
 *                                                  [--subscription]
 * ```
 */
var az_postgres_flexible_server_firewall_rule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_flexible_server_firewall_rule_delete_command_builder, _super);
    function az_postgres_flexible_server_firewall_rule_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_flexible_server_firewall_rule_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the firewall rule. If name is omitted, default name will be chosen for firewall name. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    az_postgres_flexible_server_firewall_rule_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Turn confirmation prompt on/off. If off, the rule will be deleted without confirmation. */
    az_postgres_flexible_server_firewall_rule_delete_command_builder.prototype.prompt = function (value) {
        this.setFlag("--prompt", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_flexible_server_firewall_rule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_flexible_server_firewall_rule_delete_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_flexible_server_firewall_rule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_flexible_server_firewall_rule_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all firewall rules for a flexible server.
 *
 * Syntax:
 * ```
 * az postgres flexible-server firewall-rule list --resource-group
 *                                                --server-name
 *                                                [--query-examples]
 *                                                [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 */
var az_postgres_flexible_server_firewall_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_flexible_server_firewall_rule_list_command_builder, _super);
    function az_postgres_flexible_server_firewall_rule_list_command_builder(commandPath, resultDataTypeName, resourceGroup, serverName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_flexible_server_firewall_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_flexible_server_firewall_rule_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_postgres_flexible_server_firewall_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_flexible_server_firewall_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_flexible_server_firewall_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a firewall rule.
 *
 * Syntax:
 * ```
 * az postgres flexible-server firewall-rule show [--ids]
 *                                                [--name]
 *                                                [--query-examples]
 *                                                [--resource-group]
 *                                                [--server-name]
 *                                                [--subscription]
 * ```
 */
var az_postgres_flexible_server_firewall_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_flexible_server_firewall_rule_show_command_builder, _super);
    function az_postgres_flexible_server_firewall_rule_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_flexible_server_firewall_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the firewall rule. If name is omitted, default name will be chosen for firewall name. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    az_postgres_flexible_server_firewall_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_postgres_flexible_server_firewall_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_flexible_server_firewall_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_flexible_server_firewall_rule_show_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_flexible_server_firewall_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_flexible_server_firewall_rule_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a firewall rule.
 *
 * Syntax:
 * ```
 * az postgres flexible-server firewall-rule update [--add]
 *                                                  [--end-ip-address]
 *                                                  [--force-string]
 *                                                  [--ids]
 *                                                  [--name]
 *                                                  [--remove]
 *                                                  [--resource-group]
 *                                                  [--server-name]
 *                                                  [--set]
 *                                                  [--start-ip-address]
 *                                                  [--subscription]
 * ```
 */
var az_postgres_flexible_server_firewall_rule_update_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_flexible_server_firewall_rule_update_command_builder, _super);
    function az_postgres_flexible_server_firewall_rule_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_postgres_flexible_server_firewall_rule_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_postgres_flexible_server_firewall_rule_update_command_builder.prototype.endIpAddress = function (value) {
        this.setFlag("--end-ip-address", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_postgres_flexible_server_firewall_rule_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_flexible_server_firewall_rule_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the firewall rule. If name is omitted, default name will be chosen for firewall name. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    az_postgres_flexible_server_firewall_rule_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_postgres_flexible_server_firewall_rule_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_flexible_server_firewall_rule_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_flexible_server_firewall_rule_update_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_postgres_flexible_server_firewall_rule_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    az_postgres_flexible_server_firewall_rule_update_command_builder.prototype.startIpAddress = function (value) {
        this.setFlag("--start-ip-address", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_flexible_server_firewall_rule_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_flexible_server_firewall_rule_update_command_builder;
}(base_1.CommandBuilder));
/**
 * List the parameter values for a flexible server.
 *
 * Syntax:
 * ```
 * az postgres flexible-server parameter list --resource-group
 *                                            --server-name
 *                                            [--query-examples]
 *                                            [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 */
var az_postgres_flexible_server_parameter_list_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_flexible_server_parameter_list_command_builder, _super);
    function az_postgres_flexible_server_parameter_list_command_builder(commandPath, resultDataTypeName, resourceGroup, serverName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_flexible_server_parameter_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_flexible_server_parameter_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_postgres_flexible_server_parameter_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_flexible_server_parameter_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_flexible_server_parameter_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the parameter of a flexible server.
 *
 * Syntax:
 * ```
 * az postgres flexible-server parameter set [--ids]
 *                                           [--name]
 *                                           [--resource-group]
 *                                           [--server-name]
 *                                           [--source]
 *                                           [--subscription]
 *                                           [--value]
 * ```
 */
var az_postgres_flexible_server_parameter_set_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_flexible_server_parameter_set_command_builder, _super);
    function az_postgres_flexible_server_parameter_set_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_flexible_server_parameter_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the server configuration. */
    az_postgres_flexible_server_parameter_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_flexible_server_parameter_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_flexible_server_parameter_set_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Source of the configuration. */
    az_postgres_flexible_server_parameter_set_command_builder.prototype.source = function (value) {
        this.setFlag("--source", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_flexible_server_parameter_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Value of the configuration. */
    az_postgres_flexible_server_parameter_set_command_builder.prototype.value = function (value) {
        this.setFlag("--value", value);
        return this;
    };
    return az_postgres_flexible_server_parameter_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the parameter for a flexible server.".
 *
 * Syntax:
 * ```
 * az postgres flexible-server parameter show [--ids]
 *                                            [--name]
 *                                            [--query-examples]
 *                                            [--resource-group]
 *                                            [--server-name]
 *                                            [--subscription]
 * ```
 */
var az_postgres_flexible_server_parameter_show_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_flexible_server_parameter_show_command_builder, _super);
    function az_postgres_flexible_server_parameter_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_flexible_server_parameter_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the server configuration. */
    az_postgres_flexible_server_parameter_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_postgres_flexible_server_parameter_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_flexible_server_parameter_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_flexible_server_parameter_show_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_flexible_server_parameter_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_flexible_server_parameter_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a flexible server.
 *
 * Syntax:
 * ```
 * az postgres flexible-server create [--address-prefixes]
 *                                    [--admin-password]
 *                                    [--admin-user,]
 *                                    [--assign-identity]
 *                                    [--backup-retention]
 *                                    [--high-availability]
 *                                    [--location]
 *                                    [--name]
 *                                    [--public-access]
 *                                    [--resource-group]
 *                                    [--sku-name]
 *                                    [--storage-size]
 *                                    [--subnet]
 *                                    [--subnet-prefixes]
 *                                    [--subscription]
 *                                    [--tags]
 *                                    [--tier]
 *                                    [--version]
 *                                    [--vnet]
 *                                    [--zone,]
 * ```
 */
var az_postgres_flexible_server_create_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_flexible_server_create_command_builder, _super);
    function az_postgres_flexible_server_create_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The virtual network address prefix. */
    az_postgres_flexible_server_create_command_builder.prototype.addressPrefixes = function (value) {
        this.setFlag("--address-prefixes", value);
        return this;
    };
    /** The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters. */
    az_postgres_flexible_server_create_command_builder.prototype.adminPassword = function (value) {
        this.setFlag("--admin-password", value);
        return this;
    };
    /** Administrator username for the server. Once set, it cannot be changed. */
    az_postgres_flexible_server_create_command_builder.prototype.adminUser = function (value) {
        this.setFlag("--admin-user,", value);
        return this;
    };
    /** Generate and assign an Azure Active Directory Identity for this server for use with key management services like Azure KeyVault. No need to enter extra argument. */
    az_postgres_flexible_server_create_command_builder.prototype.assignIdentity = function (value) {
        this.setFlag("--assign-identity", value);
        return this;
    };
    /** The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days. */
    az_postgres_flexible_server_create_command_builder.prototype.backupRetention = function (value) {
        this.setFlag("--backup-retention", value);
        return this;
    };
    /** Enable or disable high availability feature.  Default value is Disabled. */
    az_postgres_flexible_server_create_command_builder.prototype.highAvailability = function (value) {
        this.setFlag("--high-availability", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_postgres_flexible_server_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_flexible_server_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Determines the public access. Enter single or range of IP addresses to be included in the allowed list of IPs. IP address ranges must be dash-separated and not contain any spaces. Specifying 0.0.0.0 allows public access from any resources deployed within Azure to access your server. Specifying no IP address sets the server in public access mode but does not create a firewall rule. */
    az_postgres_flexible_server_create_command_builder.prototype.publicAccess = function (value) {
        this.setFlag("--public-access", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_flexible_server_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the compute SKU. Follows the convention Standard_{VM name}. Examples: Standard_D4s_v3. */
    az_postgres_flexible_server_create_command_builder.prototype.skuName = function (value) {
        this.setFlag("--sku-name", value);
        return this;
    };
    /** The storage capacity of the server. Minimum is 32 GiB and max is 16 TiB. */
    az_postgres_flexible_server_create_command_builder.prototype.storageSize = function (value) {
        this.setFlag("--storage-size", value);
        return this;
    };
    /** Name or ID of the subnet that allows access to an Azure Flexible Server. */
    az_postgres_flexible_server_create_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** The subnet address prefix. */
    az_postgres_flexible_server_create_command_builder.prototype.subnetPrefixes = function (value) {
        this.setFlag("--subnet-prefixes", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_flexible_server_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_postgres_flexible_server_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Compute tier of the server. Accepted values: Burstable, GeneralPurpose, Memory Optimized. */
    az_postgres_flexible_server_create_command_builder.prototype.tier = function (value) {
        this.setFlag("--tier", value);
        return this;
    };
    /** Server major version. */
    az_postgres_flexible_server_create_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    /** The virtual network name. */
    az_postgres_flexible_server_create_command_builder.prototype.vnet = function (value) {
        this.setFlag("--vnet", value);
        return this;
    };
    /** Availability zone into which to provision the resource. */
    az_postgres_flexible_server_create_command_builder.prototype.zone = function (value) {
        this.setFlag("--zone,", value);
        return this;
    };
    return az_postgres_flexible_server_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a flexible server.
 *
 * Syntax:
 * ```
 * az postgres flexible-server delete [--force]
 *                                    [--ids]
 *                                    [--name]
 *                                    [--resource-group]
 *                                    [--subscription]
 * ```
 */
var az_postgres_flexible_server_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_flexible_server_delete_command_builder, _super);
    function az_postgres_flexible_server_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Delete the server without prompt. */
    az_postgres_flexible_server_delete_command_builder.prototype.force = function (value) {
        this.setFlag("--force", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_flexible_server_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_flexible_server_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_flexible_server_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_flexible_server_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_flexible_server_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List available flexible servers.
 *
 * Syntax:
 * ```
 * az postgres flexible-server list [--query-examples]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 */
var az_postgres_flexible_server_list_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_flexible_server_list_command_builder, _super);
    function az_postgres_flexible_server_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_postgres_flexible_server_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_flexible_server_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_flexible_server_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_flexible_server_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists available sku's in the given region.
 *
 * Syntax:
 * ```
 * az postgres flexible-server list-skus --location
 *                                       [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 */
var az_postgres_flexible_server_list_skus_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_flexible_server_list_skus_command_builder, _super);
    function az_postgres_flexible_server_list_skus_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_postgres_flexible_server_list_skus_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_flexible_server_list_skus_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_flexible_server_list_skus_command_builder;
}(base_1.CommandBuilder));
/**
 * Restart a flexible server.
 *
 * Syntax:
 * ```
 * az postgres flexible-server restart [--ids]
 *                                     [--name]
 *                                     [--resource-group]
 *                                     [--subscription]
 * ```
 */
var az_postgres_flexible_server_restart_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_flexible_server_restart_command_builder, _super);
    function az_postgres_flexible_server_restart_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_flexible_server_restart_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_flexible_server_restart_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_flexible_server_restart_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_flexible_server_restart_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_flexible_server_restart_command_builder;
}(base_1.CommandBuilder));
/**
 * Restore a flexible server from backup.
 *
 * Syntax:
 * ```
 * az postgres flexible-server restore --source-server
 *                                     --time
 *                                     [--ids]
 *                                     [--location]
 *                                     [--name]
 *                                     [--no-wait]
 *                                     [--resource-group]
 *                                     [--subscription]
 * ```
 *
 * @param {string} sourceServer The name or resource ID of the source server to restore from.
 * @param {string} time The point in time to restore from (ISO8601 format), e.g., 2017-04-26T02:10:00+08:00.
 */
var az_postgres_flexible_server_restore_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_flexible_server_restore_command_builder, _super);
    function az_postgres_flexible_server_restore_command_builder(commandPath, resultDataTypeName, sourceServer, time) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.sourceServer(sourceServer);
        _this.time(time);
        return _this;
    }
    /** The name or resource ID of the source server to restore from. */
    az_postgres_flexible_server_restore_command_builder.prototype.sourceServer = function (value) {
        this.setFlag("--source-server", value);
        return this;
    };
    /** The point in time to restore from (ISO8601 format), e.g., 2017-04-26T02:10:00+08:00. */
    az_postgres_flexible_server_restore_command_builder.prototype.time = function (value) {
        this.setFlag("--time", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_flexible_server_restore_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_postgres_flexible_server_restore_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name of the new server that is created by the restore command. */
    az_postgres_flexible_server_restore_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_postgres_flexible_server_restore_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_flexible_server_restore_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_flexible_server_restore_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_flexible_server_restore_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a flexible server.
 *
 * Syntax:
 * ```
 * az postgres flexible-server show [--ids]
 *                                  [--name]
 *                                  [--query-examples]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 */
var az_postgres_flexible_server_show_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_flexible_server_show_command_builder, _super);
    function az_postgres_flexible_server_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_flexible_server_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_flexible_server_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_postgres_flexible_server_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_flexible_server_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_flexible_server_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_flexible_server_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the connection strings for a PostgreSQL flexible-server database.
 *
 * Syntax:
 * ```
 * az postgres flexible-server show-connection-string [--admin-password]
 *                                                    [--admin-user]
 *                                                    [--database-name]
 *                                                    [--ids]
 *                                                    [--server-name]
 *                                                    [--subscription]
 * ```
 */
var az_postgres_flexible_server_show_connection_string_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_flexible_server_show_connection_string_command_builder, _super);
    function az_postgres_flexible_server_show_connection_string_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The login password of the administrator. */
    az_postgres_flexible_server_show_connection_string_command_builder.prototype.adminPassword = function (value) {
        this.setFlag("--admin-password", value);
        return this;
    };
    /** The login username of the administrator. */
    az_postgres_flexible_server_show_connection_string_command_builder.prototype.adminUser = function (value) {
        this.setFlag("--admin-user", value);
        return this;
    };
    /** The name of a database. */
    az_postgres_flexible_server_show_connection_string_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_flexible_server_show_connection_string_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. */
    az_postgres_flexible_server_show_connection_string_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_flexible_server_show_connection_string_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_flexible_server_show_connection_string_command_builder;
}(base_1.CommandBuilder));
/**
 * Start a flexible server.
 *
 * Syntax:
 * ```
 * az postgres flexible-server start [--ids]
 *                                   [--name]
 *                                   [--resource-group]
 *                                   [--subscription]
 * ```
 */
var az_postgres_flexible_server_start_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_flexible_server_start_command_builder, _super);
    function az_postgres_flexible_server_start_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_flexible_server_start_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_flexible_server_start_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_flexible_server_start_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_flexible_server_start_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_flexible_server_start_command_builder;
}(base_1.CommandBuilder));
/**
 * Stop a flexible server.
 *
 * Syntax:
 * ```
 * az postgres flexible-server stop [--ids]
 *                                  [--name]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 */
var az_postgres_flexible_server_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_flexible_server_stop_command_builder, _super);
    function az_postgres_flexible_server_stop_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_flexible_server_stop_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_flexible_server_stop_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_flexible_server_stop_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_flexible_server_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_flexible_server_stop_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a flexible server.
 *
 * Syntax:
 * ```
 * az postgres flexible-server update [--add]
 *                                    [--admin-password]
 *                                    [--backup-retention]
 *                                    [--force-string]
 *                                    [--high-availability {Disabled, Enabled}]
 *                                    [--ids]
 *                                    [--maintenance-window]
 *                                    [--name]
 *                                    [--remove]
 *                                    [--resource-group]
 *                                    [--set]
 *                                    [--sku-name]
 *                                    [--storage-size]
 *                                    [--subscription]
 *                                    [--tags]
 *                                    [--tier]
 * ```
 */
var az_postgres_flexible_server_update_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_flexible_server_update_command_builder, _super);
    function az_postgres_flexible_server_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_postgres_flexible_server_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters. */
    az_postgres_flexible_server_update_command_builder.prototype.adminPassword = function (value) {
        this.setFlag("--admin-password", value);
        return this;
    };
    /** The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days. */
    az_postgres_flexible_server_update_command_builder.prototype.backupRetention = function (value) {
        this.setFlag("--backup-retention", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_postgres_flexible_server_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Enable or disable high availability feature.  Default value is Disabled. */
    az_postgres_flexible_server_update_command_builder.prototype.highAvailability = function (value) {
        this.setFlag("--high-availability", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_flexible_server_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Period of time (UTC) designated for maintenance. Examples: "Sun:23:30" to schedule on Sunday, 11:30pm UTC. To set back to default pass in "Disabled". */
    az_postgres_flexible_server_update_command_builder.prototype.maintenanceWindow = function (value) {
        this.setFlag("--maintenance-window", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_flexible_server_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_postgres_flexible_server_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_flexible_server_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_postgres_flexible_server_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** The name of the compute SKU. Follows the convention Standard_{VM name}. Examples: Standard_D4s_v3. */
    az_postgres_flexible_server_update_command_builder.prototype.skuName = function (value) {
        this.setFlag("--sku-name", value);
        return this;
    };
    /** The storage capacity of the server. Minimum is 32 GiB and max is 16 TiB. */
    az_postgres_flexible_server_update_command_builder.prototype.storageSize = function (value) {
        this.setFlag("--storage-size", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_flexible_server_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_postgres_flexible_server_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Compute tier of the server. Accepted values: Burstable, GeneralPurpose, Memory Optimized. */
    az_postgres_flexible_server_update_command_builder.prototype.tier = function (value) {
        this.setFlag("--tier", value);
        return this;
    };
    return az_postgres_flexible_server_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Wait for the flexible server to satisfy certain conditions.
 *
 * Syntax:
 * ```
 * az postgres flexible-server wait [--created]
 *                                  [--custom]
 *                                  [--deleted]
 *                                  [--exists]
 *                                  [--ids]
 *                                  [--interval]
 *                                  [--name]
 *                                  [--resource-group]
 *                                  [--subscription]
 *                                  [--timeout]
 *                                  [--updated]
 * ```
 */
var az_postgres_flexible_server_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_flexible_server_wait_command_builder, _super);
    function az_postgres_flexible_server_wait_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_postgres_flexible_server_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_postgres_flexible_server_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_postgres_flexible_server_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_postgres_flexible_server_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_flexible_server_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_postgres_flexible_server_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_flexible_server_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_flexible_server_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_flexible_server_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_postgres_flexible_server_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_postgres_flexible_server_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_postgres_flexible_server_wait_command_builder;
}(base_1.CommandBuilder));
/**
 * Create an Active Directory Administrator for PostgreSQL server.
 *
 * Syntax:
 * ```
 * az postgres server ad-admin create --resource-group
 *                                    --server-name
 *                                    [--display-name]
 *                                    [--no-wait]
 *                                    [--object-id]
 *                                    [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 */
var az_postgres_server_ad_admin_create_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_ad_admin_create_command_builder, _super);
    function az_postgres_server_ad_admin_create_command_builder(commandPath, resultDataTypeName, resourceGroup, serverName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_ad_admin_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_ad_admin_create_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Display name of the Azure AD administrator user or group. */
    az_postgres_server_ad_admin_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_postgres_server_ad_admin_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The unique ID of the Azure AD administrator. */
    az_postgres_server_ad_admin_create_command_builder.prototype.objectId = function (value) {
        this.setFlag("--object-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_ad_admin_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_ad_admin_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an Active Directory Administrator for PostgreSQL server.
 *
 * Syntax:
 * ```
 * az postgres server ad-admin delete [--ids]
 *                                    [--resource-group]
 *                                    [--server-name]
 *                                    [--subscription]
 *                                    [--yes]
 * ```
 */
var az_postgres_server_ad_admin_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_ad_admin_delete_command_builder, _super);
    function az_postgres_server_ad_admin_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_ad_admin_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_ad_admin_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_ad_admin_delete_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_ad_admin_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_postgres_server_ad_admin_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_postgres_server_ad_admin_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all Active Directory Administrators for PostgreSQL server.
 *
 * Syntax:
 * ```
 * az postgres server ad-admin list [--ids]
 *                                  [--query-examples]
 *                                  [--resource-group]
 *                                  [--server-name]
 *                                  [--subscription]
 * ```
 */
var az_postgres_server_ad_admin_list_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_ad_admin_list_command_builder, _super);
    function az_postgres_server_ad_admin_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_ad_admin_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_postgres_server_ad_admin_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_ad_admin_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_ad_admin_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_ad_admin_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_ad_admin_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get Active Directory Administrator information for a PostgreSQL server.
 *
 * Syntax:
 * ```
 * az postgres server ad-admin show [--ids]
 *                                  [--query-examples]
 *                                  [--resource-group]
 *                                  [--server-name]
 *                                  [--subscription]
 * ```
 */
var az_postgres_server_ad_admin_show_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_ad_admin_show_command_builder, _super);
    function az_postgres_server_ad_admin_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_ad_admin_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_postgres_server_ad_admin_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_ad_admin_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_ad_admin_show_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_ad_admin_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_ad_admin_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Place the CLI in a waiting state until a condition of the PostgreSQL server Active Directory Administrator is met.
 *
 * Syntax:
 * ```
 * az postgres server ad-admin wait [--created]
 *                                  [--custom]
 *                                  [--deleted]
 *                                  [--exists]
 *                                  [--ids]
 *                                  [--interval]
 *                                  [--resource-group]
 *                                  [--server-name]
 *                                  [--subscription]
 *                                  [--timeout]
 *                                  [--updated]
 * ```
 */
var az_postgres_server_ad_admin_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_ad_admin_wait_command_builder, _super);
    function az_postgres_server_ad_admin_wait_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_postgres_server_ad_admin_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_postgres_server_ad_admin_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_postgres_server_ad_admin_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_postgres_server_ad_admin_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_ad_admin_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_postgres_server_ad_admin_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_ad_admin_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_ad_admin_wait_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_ad_admin_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_postgres_server_ad_admin_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_postgres_server_ad_admin_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_postgres_server_ad_admin_wait_command_builder;
}(base_1.CommandBuilder));
/**
 * List the configuration values for a server.
 *
 * Syntax:
 * ```
 * az postgres server configuration list [--ids]
 *                                       [--query-examples]
 *                                       [--resource-group]
 *                                       [--server-name]
 *                                       [--subscription]
 * ```
 */
var az_postgres_server_configuration_list_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_configuration_list_command_builder, _super);
    function az_postgres_server_configuration_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_configuration_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_postgres_server_configuration_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_configuration_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_configuration_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_configuration_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_configuration_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the configuration of a server.
 *
 * Syntax:
 * ```
 * az postgres server configuration set [--ids]
 *                                      [--name]
 *                                      [--resource-group]
 *                                      [--server-name]
 *                                      [--subscription]
 *                                      [--value]
 * ```
 */
var az_postgres_server_configuration_set_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_configuration_set_command_builder, _super);
    function az_postgres_server_configuration_set_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_configuration_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the server configuration. */
    az_postgres_server_configuration_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_configuration_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_configuration_set_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_configuration_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Value of the configuration. If not provided, configuration value will be set to default. */
    az_postgres_server_configuration_set_command_builder.prototype.value = function (value) {
        this.setFlag("--value", value);
        return this;
    };
    return az_postgres_server_configuration_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the configuration for a server.".
 *
 * Syntax:
 * ```
 * az postgres server configuration show [--ids]
 *                                       [--name]
 *                                       [--query-examples]
 *                                       [--resource-group]
 *                                       [--server-name]
 *                                       [--subscription]
 * ```
 */
var az_postgres_server_configuration_show_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_configuration_show_command_builder, _super);
    function az_postgres_server_configuration_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_configuration_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the server configuration. */
    az_postgres_server_configuration_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_postgres_server_configuration_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_configuration_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_configuration_show_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_configuration_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_configuration_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new firewall rule for a server.
 *
 * Syntax:
 * ```
 * az postgres server firewall-rule create --end-ip-address
 *                                         --name
 *                                         --resource-group
 *                                         --server-name
 *                                         --start-ip-address
 *                                         [--subscription]
 * ```
 *
 * @param {string} endIpAddress The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
 * @param {string} name The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 * @param {string} startIpAddress The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
 */
var az_postgres_server_firewall_rule_create_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_firewall_rule_create_command_builder, _super);
    function az_postgres_server_firewall_rule_create_command_builder(commandPath, resultDataTypeName, endIpAddress, name, resourceGroup, serverName, startIpAddress) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.endIpAddress(endIpAddress);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        _this.startIpAddress(startIpAddress);
        return _this;
    }
    /** The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    az_postgres_server_firewall_rule_create_command_builder.prototype.endIpAddress = function (value) {
        this.setFlag("--end-ip-address", value);
        return this;
    };
    /** The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    az_postgres_server_firewall_rule_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_firewall_rule_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_firewall_rule_create_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    az_postgres_server_firewall_rule_create_command_builder.prototype.startIpAddress = function (value) {
        this.setFlag("--start-ip-address", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_firewall_rule_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_firewall_rule_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a firewall rule.
 *
 * Syntax:
 * ```
 * az postgres server firewall-rule delete [--ids]
 *                                         [--name]
 *                                         [--resource-group]
 *                                         [--server-name]
 *                                         [--subscription]
 *                                         [--yes]
 * ```
 */
var az_postgres_server_firewall_rule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_firewall_rule_delete_command_builder, _super);
    function az_postgres_server_firewall_rule_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_firewall_rule_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    az_postgres_server_firewall_rule_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_firewall_rule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_firewall_rule_delete_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_firewall_rule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_postgres_server_firewall_rule_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_postgres_server_firewall_rule_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all firewall rules for a server.
 *
 * Syntax:
 * ```
 * az postgres server firewall-rule list [--ids]
 *                                       [--query-examples]
 *                                       [--resource-group]
 *                                       [--server-name]
 *                                       [--subscription]
 * ```
 */
var az_postgres_server_firewall_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_firewall_rule_list_command_builder, _super);
    function az_postgres_server_firewall_rule_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_firewall_rule_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_postgres_server_firewall_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_firewall_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_firewall_rule_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_firewall_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_firewall_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a firewall rule.
 *
 * Syntax:
 * ```
 * az postgres server firewall-rule show [--ids]
 *                                       [--name]
 *                                       [--query-examples]
 *                                       [--resource-group]
 *                                       [--server-name]
 *                                       [--subscription]
 * ```
 */
var az_postgres_server_firewall_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_firewall_rule_show_command_builder, _super);
    function az_postgres_server_firewall_rule_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_firewall_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    az_postgres_server_firewall_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_postgres_server_firewall_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_firewall_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_firewall_rule_show_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_firewall_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_firewall_rule_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a firewall rule.
 *
 * Syntax:
 * ```
 * az postgres server firewall-rule update [--add]
 *                                         [--end-ip-address]
 *                                         [--force-string]
 *                                         [--ids]
 *                                         [--name]
 *                                         [--remove]
 *                                         [--resource-group]
 *                                         [--server-name]
 *                                         [--set]
 *                                         [--start-ip-address]
 *                                         [--subscription]
 * ```
 */
var az_postgres_server_firewall_rule_update_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_firewall_rule_update_command_builder, _super);
    function az_postgres_server_firewall_rule_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_postgres_server_firewall_rule_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    az_postgres_server_firewall_rule_update_command_builder.prototype.endIpAddress = function (value) {
        this.setFlag("--end-ip-address", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_postgres_server_firewall_rule_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_firewall_rule_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    az_postgres_server_firewall_rule_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_postgres_server_firewall_rule_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_firewall_rule_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_firewall_rule_update_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_postgres_server_firewall_rule_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    az_postgres_server_firewall_rule_update_command_builder.prototype.startIpAddress = function (value) {
        this.setFlag("--start-ip-address", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_firewall_rule_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_firewall_rule_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create server key.
 *
 * Syntax:
 * ```
 * az postgres server key create --kid
 *                               --name
 *                               --resource-group
 *                               [--subscription]
 * ```
 *
 * @param {string} kid The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>".
 * @param {string} name Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_postgres_server_key_create_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_key_create_command_builder, _super);
    function az_postgres_server_key_create_command_builder(commandPath, resultDataTypeName, kid, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.kid(kid);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    az_postgres_server_key_create_command_builder.prototype.kid = function (value) {
        this.setFlag("--kid", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_key_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_key_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_key_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_key_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete server key.
 *
 * Syntax:
 * ```
 * az postgres server key delete --kid
 *                               [--ids]
 *                               [--name]
 *                               [--resource-group]
 *                               [--subscription]
 *                               [--yes]
 * ```
 *
 * @param {string} kid The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>".
 */
var az_postgres_server_key_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_key_delete_command_builder, _super);
    function az_postgres_server_key_delete_command_builder(commandPath, resultDataTypeName, kid) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.kid(kid);
        return _this;
    }
    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    az_postgres_server_key_delete_command_builder.prototype.kid = function (value) {
        this.setFlag("--kid", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_key_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_key_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_key_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_key_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_postgres_server_key_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_postgres_server_key_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a list of  Server keys.
 *
 * Syntax:
 * ```
 * az postgres server key list [--ids]
 *                             [--name]
 *                             [--query-examples]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 */
var az_postgres_server_key_list_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_key_list_command_builder, _super);
    function az_postgres_server_key_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_key_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_key_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_postgres_server_key_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_key_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_key_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_key_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show server key.
 *
 * Syntax:
 * ```
 * az postgres server key show --kid
 *                             [--ids]
 *                             [--name]
 *                             [--query-examples]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 *
 * @param {string} kid The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>".
 */
var az_postgres_server_key_show_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_key_show_command_builder, _super);
    function az_postgres_server_key_show_command_builder(commandPath, resultDataTypeName, kid) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.kid(kid);
        return _this;
    }
    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    az_postgres_server_key_show_command_builder.prototype.kid = function (value) {
        this.setFlag("--kid", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_key_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_key_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_postgres_server_key_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_key_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_key_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_key_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Approve the specified private endpoint connection associated with a PostgreSQL server.
 *
 * Syntax:
 * ```
 * az postgres server private-endpoint-connection approve [--description]
 *                                                        [--id]
 *                                                        [--ids]
 *                                                        [--name]
 *                                                        [--resource-group]
 *                                                        [--server-name]
 *                                                        [--subscription]
 * ```
 */
var az_postgres_server_private_endpoint_connection_approve_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_private_endpoint_connection_approve_command_builder, _super);
    function az_postgres_server_private_endpoint_connection_approve_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Comments for approve operation. */
    az_postgres_server_private_endpoint_connection_approve_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** The ID of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted. */
    az_postgres_server_private_endpoint_connection_approve_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_private_endpoint_connection_approve_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the private endpoint connection associated with the Server. Required if --id is not specified. */
    az_postgres_server_private_endpoint_connection_approve_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource group name of specified server. */
    az_postgres_server_private_endpoint_connection_approve_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Server. Required if --id is not specified. */
    az_postgres_server_private_endpoint_connection_approve_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_private_endpoint_connection_approve_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_private_endpoint_connection_approve_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete the specified private endpoint connection associated with a PostgreSQL server.
 *
 * Syntax:
 * ```
 * az postgres server private-endpoint-connection delete [--id]
 *                                                       [--ids]
 *                                                       [--name]
 *                                                       [--resource-group]
 *                                                       [--server-name]
 *                                                       [--subscription]
 * ```
 */
var az_postgres_server_private_endpoint_connection_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_private_endpoint_connection_delete_command_builder, _super);
    function az_postgres_server_private_endpoint_connection_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The ID of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted. */
    az_postgres_server_private_endpoint_connection_delete_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_private_endpoint_connection_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the private endpoint connection associated with the Server. Required if --id is not specified. */
    az_postgres_server_private_endpoint_connection_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource group name of specified server. */
    az_postgres_server_private_endpoint_connection_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Server. Required if --id is not specified. */
    az_postgres_server_private_endpoint_connection_delete_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_private_endpoint_connection_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_private_endpoint_connection_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Reject the specified private endpoint connection associated with a PostgreSQL server.
 *
 * Syntax:
 * ```
 * az postgres server private-endpoint-connection reject [--description]
 *                                                       [--id]
 *                                                       [--ids]
 *                                                       [--name]
 *                                                       [--resource-group]
 *                                                       [--server-name]
 *                                                       [--subscription]
 * ```
 */
var az_postgres_server_private_endpoint_connection_reject_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_private_endpoint_connection_reject_command_builder, _super);
    function az_postgres_server_private_endpoint_connection_reject_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Comments for reject operation. */
    az_postgres_server_private_endpoint_connection_reject_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** The ID of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted. */
    az_postgres_server_private_endpoint_connection_reject_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_private_endpoint_connection_reject_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the private endpoint connection associated with the Server. Required if --id is not specified. */
    az_postgres_server_private_endpoint_connection_reject_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource group name of specified server. */
    az_postgres_server_private_endpoint_connection_reject_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Server. Required if --id is not specified. */
    az_postgres_server_private_endpoint_connection_reject_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_private_endpoint_connection_reject_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_private_endpoint_connection_reject_command_builder;
}(base_1.CommandBuilder));
/**
 * Show details of a private endpoint connection associated with a PostgreSQL server.
 *
 * Syntax:
 * ```
 * az postgres server private-endpoint-connection show [--id]
 *                                                     [--ids]
 *                                                     [--name]
 *                                                     [--query-examples]
 *                                                     [--resource-group]
 *                                                     [--server-name]
 *                                                     [--subscription]
 * ```
 */
var az_postgres_server_private_endpoint_connection_show_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_private_endpoint_connection_show_command_builder, _super);
    function az_postgres_server_private_endpoint_connection_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The ID of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted. */
    az_postgres_server_private_endpoint_connection_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_private_endpoint_connection_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the private endpoint connection associated with the Server. Required if --id is not specified. */
    az_postgres_server_private_endpoint_connection_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_postgres_server_private_endpoint_connection_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The resource group name of specified server. */
    az_postgres_server_private_endpoint_connection_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Server. Required if --id is not specified. */
    az_postgres_server_private_endpoint_connection_show_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_private_endpoint_connection_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_private_endpoint_connection_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List the private link resources supported for a PostgreSQL server.
 *
 * Syntax:
 * ```
 * az postgres server private-link-resource list [--ids]
 *                                               [--query-examples]
 *                                               [--resource-group]
 *                                               [--server-name]
 *                                               [--subscription]
 * ```
 */
var az_postgres_server_private_link_resource_list_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_private_link_resource_list_command_builder, _super);
    function az_postgres_server_private_link_resource_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_private_link_resource_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_postgres_server_private_link_resource_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_private_link_resource_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Server. */
    az_postgres_server_private_link_resource_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_private_link_resource_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_private_link_resource_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a read replica for a server.
 *
 * Syntax:
 * ```
 * az postgres server replica create --name
 *                                   --resource-group
 *                                   --source-server
 *                                   [--location]
 *                                   [--no-wait]
 *                                   [--sku-name]
 *                                   [--subscription]
 * ```
 *
 * @param {string} name Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} sourceServer The name or resource ID of the master server to the create replica for.
 */
var az_postgres_server_replica_create_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_replica_create_command_builder, _super);
    function az_postgres_server_replica_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, sourceServer) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.sourceServer(sourceServer);
        return _this;
    }
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_replica_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_replica_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name or resource ID of the master server to the create replica for. */
    az_postgres_server_replica_create_command_builder.prototype.sourceServer = function (value) {
        this.setFlag("--source-server", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. If not provided, the create replica will be in the same location as the master server. */
    az_postgres_server_replica_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_postgres_server_replica_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The name of the sku. Follows the convention {pricing tier}_{compute generation}_{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16. */
    az_postgres_server_replica_create_command_builder.prototype.skuName = function (value) {
        this.setFlag("--sku-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_replica_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_replica_create_command_builder;
}(base_1.CommandBuilder));
/**
 * List all read replicas for a given server.
 *
 * Syntax:
 * ```
 * az postgres server replica list [--ids]
 *                                 [--query-examples]
 *                                 [--resource-group]
 *                                 [--server-name]
 *                                 [--subscription]
 * ```
 */
var az_postgres_server_replica_list_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_replica_list_command_builder, _super);
    function az_postgres_server_replica_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_replica_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_postgres_server_replica_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_replica_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the master server. */
    az_postgres_server_replica_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_replica_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_replica_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Stop replication to a read replica and make it a read/write server.
 *
 * Syntax:
 * ```
 * az postgres server replica stop [--ids]
 *                                 [--name]
 *                                 [--resource-group]
 *                                 [--subscription]
 *                                 [--yes]
 * ```
 */
var az_postgres_server_replica_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_replica_stop_command_builder, _super);
    function az_postgres_server_replica_stop_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_replica_stop_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_replica_stop_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_replica_stop_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_replica_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_postgres_server_replica_stop_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_postgres_server_replica_stop_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a virtual network rule to allows access to a PostgreSQL server.
 *
 * Syntax:
 * ```
 * az postgres server vnet-rule create --name
 *                                     --resource-group
 *                                     --server-name
 *                                     --subnet
 *                                     [--ignore-missing-endpoint {false, true}]
 *                                     [--subscription]
 *                                     [--vnet-name]
 * ```
 *
 * @param {string} name The name of the vnet rule.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 * @param {string} subnet Name or ID of the subnet that allows access to an Azure Postgres Server. If subnet name is provided, --vnet-name must be provided.
 */
var az_postgres_server_vnet_rule_create_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_vnet_rule_create_command_builder, _super);
    function az_postgres_server_vnet_rule_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, serverName, subnet) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        _this.subnet(subnet);
        return _this;
    }
    /** The name of the vnet rule. */
    az_postgres_server_vnet_rule_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_vnet_rule_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_vnet_rule_create_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of the subnet that allows access to an Azure Postgres Server. If subnet name is provided, --vnet-name must be provided. */
    az_postgres_server_vnet_rule_create_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Create vnet rule before virtual network has vnet service endpoint enabled. */
    az_postgres_server_vnet_rule_create_command_builder.prototype.ignoreMissingEndpoint = function (value) {
        this.setFlag("--ignore-missing-endpoint", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_vnet_rule_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The virtual network name. */
    az_postgres_server_vnet_rule_create_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_postgres_server_vnet_rule_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the virtual network rule with the given name.
 *
 * Syntax:
 * ```
 * az postgres server vnet-rule delete [--ids]
 *                                     [--name]
 *                                     [--resource-group]
 *                                     [--server-name]
 *                                     [--subscription]
 * ```
 */
var az_postgres_server_vnet_rule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_vnet_rule_delete_command_builder, _super);
    function az_postgres_server_vnet_rule_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_vnet_rule_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the vnet rule. */
    az_postgres_server_vnet_rule_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_vnet_rule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_vnet_rule_delete_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_vnet_rule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_vnet_rule_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a list of virtual network rules in a server.
 *
 * Syntax:
 * ```
 * az postgres server vnet-rule list [--ids]
 *                                   [--query-examples]
 *                                   [--resource-group]
 *                                   [--server-name]
 *                                   [--subscription]
 * ```
 */
var az_postgres_server_vnet_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_vnet_rule_list_command_builder, _super);
    function az_postgres_server_vnet_rule_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_vnet_rule_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_postgres_server_vnet_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_vnet_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_vnet_rule_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_vnet_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_vnet_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a virtual network rule.
 *
 * Syntax:
 * ```
 * az postgres server vnet-rule show [--ids]
 *                                   [--name]
 *                                   [--query-examples]
 *                                   [--resource-group]
 *                                   [--server-name]
 *                                   [--subscription]
 * ```
 */
var az_postgres_server_vnet_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_vnet_rule_show_command_builder, _super);
    function az_postgres_server_vnet_rule_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_vnet_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the vnet rule. */
    az_postgres_server_vnet_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_postgres_server_vnet_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_vnet_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_vnet_rule_show_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_vnet_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_vnet_rule_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a virtual network rule.
 *
 * Syntax:
 * ```
 * az postgres server vnet-rule update --subnet
 *                                     [--add]
 *                                     [--force-string]
 *                                     [--ids]
 *                                     [--ignore-missing-endpoint {false, true}]
 *                                     [--name]
 *                                     [--remove]
 *                                     [--resource-group]
 *                                     [--server-name]
 *                                     [--set]
 *                                     [--subscription]
 *                                     [--vnet-name]
 * ```
 *
 * @param {string} subnet Name or ID of the subnet that allows access to an Azure Postgres Server. If subnet name is provided, --vnet-name must be provided.
 */
var az_postgres_server_vnet_rule_update_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_vnet_rule_update_command_builder, _super);
    function az_postgres_server_vnet_rule_update_command_builder(commandPath, resultDataTypeName, subnet) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.subnet(subnet);
        return _this;
    }
    /** Name or ID of the subnet that allows access to an Azure Postgres Server. If subnet name is provided, --vnet-name must be provided. */
    az_postgres_server_vnet_rule_update_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_postgres_server_vnet_rule_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_postgres_server_vnet_rule_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_vnet_rule_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Create vnet rule before virtual network has vnet service endpoint enabled. */
    az_postgres_server_vnet_rule_update_command_builder.prototype.ignoreMissingEndpoint = function (value) {
        this.setFlag("--ignore-missing-endpoint", value.toString());
        return this;
    };
    /** The name of the vnet rule. */
    az_postgres_server_vnet_rule_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_postgres_server_vnet_rule_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_vnet_rule_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_vnet_rule_update_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_postgres_server_vnet_rule_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_vnet_rule_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The virtual network name. */
    az_postgres_server_vnet_rule_update_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_postgres_server_vnet_rule_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Download log files.
 *
 * Syntax:
 * ```
 * az postgres server-logs download --name
 *                                  --resource-group
 *                                  --server-name
 *                                  [--subscription]
 * ```
 *
 * @param {string} name Space-separated list of log filenames on the server to download.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 */
var az_postgres_server_logs_download_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_logs_download_command_builder, _super);
    function az_postgres_server_logs_download_command_builder(commandPath, resultDataTypeName, name, resourceGroup, serverName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        return _this;
    }
    /** Space-separated list of log filenames on the server to download. */
    az_postgres_server_logs_download_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_logs_download_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_logs_download_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_logs_download_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_logs_download_command_builder;
}(base_1.CommandBuilder));
/**
 * List log files for a server.
 *
 * Syntax:
 * ```
 * az postgres server-logs list --resource-group
 *                              --server-name
 *                              [--file-last-written]
 *                              [--filename-contains]
 *                              [--max-file-size]
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 */
var az_postgres_server_logs_list_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_logs_list_command_builder, _super);
    function az_postgres_server_logs_list_command_builder(commandPath, resultDataTypeName, resourceGroup, serverName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_logs_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_logs_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Integer in hours to indicate file last modify time, default value is 72. */
    az_postgres_server_logs_list_command_builder.prototype.fileLastWritten = function (value) {
        this.setFlag("--file-last-written", value);
        return this;
    };
    /** The pattern that file name should match. */
    az_postgres_server_logs_list_command_builder.prototype.filenameContains = function (value) {
        this.setFlag("--filename-contains", value);
        return this;
    };
    /** The file size limitation to filter files. */
    az_postgres_server_logs_list_command_builder.prototype.maxFileSize = function (value) {
        this.setFlag("--max-file-size", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_postgres_server_logs_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_logs_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_logs_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a server.
 *
 * Syntax:
 * ```
 * az postgres server create --admin-password
 *                           --admin-user
 *                           --name
 *                           --resource-group
 *                           --sku-name
 *                           [--assign-identity]
 *                           [--auto-grow {Disabled, Enabled}]
 *                           [--backup-retention]
 *                           [--geo-redundant-backup {Disabled, Enabled}]
 *                           [--infrastructure-encryption {Disabled, Enabled}]
 *                           [--location]
 *                           [--minimal-tls-version {TLS1_0, TLS1_1, TLS1_2, TLSEnforcementDisabled}]
 *                           [--public {Disabled, Enabled}]
 *                           [--ssl-enforcement {Disabled, Enabled}]
 *                           [--storage-size]
 *                           [--subscription]
 *                           [--tags]
 *                           [--version]
 * ```
 *
 * @param {string} adminPassword The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters.
 * @param {string} adminUser Administrator username for the server. Once set, it cannot be changed.
 * @param {string} name Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} skuName The name of the sku. Follows the convention {pricing tier}_{compute generation}_{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16.
 */
var az_postgres_server_create_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_create_command_builder, _super);
    function az_postgres_server_create_command_builder(commandPath, resultDataTypeName, adminPassword, adminUser, name, resourceGroup, skuName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.adminPassword(adminPassword);
        _this.adminUser(adminUser);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.skuName(skuName);
        return _this;
    }
    /** The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters. */
    az_postgres_server_create_command_builder.prototype.adminPassword = function (value) {
        this.setFlag("--admin-password", value);
        return this;
    };
    /** Administrator username for the server. Once set, it cannot be changed. */
    az_postgres_server_create_command_builder.prototype.adminUser = function (value) {
        this.setFlag("--admin-user", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the sku. Follows the convention {pricing tier}_{compute generation}_{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16. */
    az_postgres_server_create_command_builder.prototype.skuName = function (value) {
        this.setFlag("--sku-name", value);
        return this;
    };
    /** Generate and assign an Azure Active Directory Identity for this server for use with key management services like Azure KeyVault. */
    az_postgres_server_create_command_builder.prototype.assignIdentity = function (value) {
        this.setFlag("--assign-identity", value);
        return this;
    };
    /** Enable or disable autogrow of the storage. Default value is Enabled. */
    az_postgres_server_create_command_builder.prototype.autoGrow = function (value) {
        this.setFlag("--auto-grow", value);
        return this;
    };
    /** The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days. */
    az_postgres_server_create_command_builder.prototype.backupRetention = function (value) {
        this.setFlag("--backup-retention", value);
        return this;
    };
    /** Enable or disable geo-redundant backups. Default value is Disabled. Not supported in Basic pricing tier. */
    az_postgres_server_create_command_builder.prototype.geoRedundantBackup = function (value) {
        this.setFlag("--geo-redundant-backup", value);
        return this;
    };
    /** Add an optional second layer of encryption for data using new encryption algorithm. Default value is Disabled. */
    az_postgres_server_create_command_builder.prototype.infrastructureEncryption = function (value) {
        this.setFlag("--infrastructure-encryption", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_postgres_server_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Set the minimal TLS version for connections to server when SSL is enabled. Default is TLSEnforcementDisabled. */
    az_postgres_server_create_command_builder.prototype.minimalTlsVersion = function (value) {
        this.setFlag("--minimal-tls-version", value);
        return this;
    };
    /** Enable or disable public network access to server. When disabled, only connections made through Private Links can reach this server. Default is Enabled. */
    az_postgres_server_create_command_builder.prototype.publicNetworkAccess = function (value) {
        this.setFlag("--public-network-access", value);
        return this;
    };
    /** Enable or disable ssl enforcement for connections to server. Default is Enabled. */
    az_postgres_server_create_command_builder.prototype.sslEnforcement = function (value) {
        this.setFlag("--ssl-enforcement", value);
        return this;
    };
    /** The storage capacity of the server (unit is megabytes). Minimum 5120 and increases in 1024 increments. Default is 51200. */
    az_postgres_server_create_command_builder.prototype.storageSize = function (value) {
        this.setFlag("--storage-size", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_postgres_server_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Server major version. */
    az_postgres_server_create_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_postgres_server_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a server.
 *
 * Syntax:
 * ```
 * az postgres server delete [--ids]
 *                           [--name]
 *                           [--resource-group]
 *                           [--subscription]
 *                           [--yes]
 * ```
 */
var az_postgres_server_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_delete_command_builder, _super);
    function az_postgres_server_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_postgres_server_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_postgres_server_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Geo-restore a server from backup.
 *
 * Syntax:
 * ```
 * az postgres server georestore --location
 *                               --source-server
 *                               [--backup-retention]
 *                               [--geo-redundant-backup]
 *                               [--ids]
 *                               [--name]
 *                               [--no-wait]
 *                               [--resource-group]
 *                               [--sku-name]
 *                               [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} sourceServer The name or ID of the source server to restore from.
 */
var az_postgres_server_georestore_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_georestore_command_builder, _super);
    function az_postgres_server_georestore_command_builder(commandPath, resultDataTypeName, location, sourceServer) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.sourceServer(sourceServer);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_postgres_server_georestore_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name or ID of the source server to restore from. */
    az_postgres_server_georestore_command_builder.prototype.sourceServer = function (value) {
        this.setFlag("--source-server", value);
        return this;
    };
    /** The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days. */
    az_postgres_server_georestore_command_builder.prototype.backupRetention = function (value) {
        this.setFlag("--backup-retention", value);
        return this;
    };
    /** Enable or disable geo-redundant backups. Default value is Disabled. Not supported in Basic pricing tier. */
    az_postgres_server_georestore_command_builder.prototype.geoRedundantBackup = function (value) {
        this.setFlag("--geo-redundant-backup", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_georestore_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_georestore_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_postgres_server_georestore_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_georestore_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the sku. Defaults to sku of the source server. Follows the convention {pricing tier}_{compute generation}_{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16. */
    az_postgres_server_georestore_command_builder.prototype.skuName = function (value) {
        this.setFlag("--sku-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_georestore_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_georestore_command_builder;
}(base_1.CommandBuilder));
/**
 * List available servers.
 *
 * Syntax:
 * ```
 * az postgres server list [--query-examples]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
var az_postgres_server_list_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_list_command_builder, _super);
    function az_postgres_server_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_postgres_server_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Restart a server.
 *
 * Syntax:
 * ```
 * az postgres server restart [--ids]
 *                            [--name]
 *                            [--resource-group]
 *                            [--subscription]
 * ```
 */
var az_postgres_server_restart_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_restart_command_builder, _super);
    function az_postgres_server_restart_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_restart_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_restart_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_restart_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_restart_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_restart_command_builder;
}(base_1.CommandBuilder));
/**
 * Restore a server from backup.
 *
 * Syntax:
 * ```
 * az postgres server restore --pitr-time
 *                            --source-server
 *                            [--ids]
 *                            [--name]
 *                            [--no-wait]
 *                            [--resource-group]
 *                            [--subscription]
 * ```
 *
 * @param {string} restorePointInTime The point in time to restore from (ISO8601 format), e.g., 2017-04-26T02:10:00+08:00.
 * @param {string} sourceServer The name or resource ID of the source server to restore from.
 */
var az_postgres_server_restore_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_restore_command_builder, _super);
    function az_postgres_server_restore_command_builder(commandPath, resultDataTypeName, restorePointInTime, sourceServer) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.restorePointInTime(restorePointInTime);
        _this.sourceServer(sourceServer);
        return _this;
    }
    /** The point in time to restore from (ISO8601 format), e.g., 2017-04-26T02:10:00+08:00. */
    az_postgres_server_restore_command_builder.prototype.restorePointInTime = function (value) {
        this.setFlag("--restore-point-in-time", value);
        return this;
    };
    /** The name or resource ID of the source server to restore from. */
    az_postgres_server_restore_command_builder.prototype.sourceServer = function (value) {
        this.setFlag("--source-server", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_restore_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_restore_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_postgres_server_restore_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_restore_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_restore_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_restore_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a server.
 *
 * Syntax:
 * ```
 * az postgres server show [--ids]
 *                         [--name]
 *                         [--query-examples]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
var az_postgres_server_show_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_show_command_builder, _super);
    function az_postgres_server_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_postgres_server_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_postgres_server_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a server.
 *
 * Syntax:
 * ```
 * az postgres server update [--add]
 *                           [--admin-password]
 *                           [--assign-identity]
 *                           [--auto-grow {Disabled, Enabled}]
 *                           [--backup-retention]
 *                           [--force-string]
 *                           [--ids]
 *                           [--minimal-tls-version {TLS1_0, TLS1_1, TLS1_2, TLSEnforcementDisabled}]
 *                           [--name]
 *                           [--public {Disabled, Enabled}]
 *                           [--remove]
 *                           [--resource-group]
 *                           [--set]
 *                           [--sku-name]
 *                           [--ssl-enforcement {Disabled, Enabled}]
 *                           [--storage-size]
 *                           [--subscription]
 *                           [--tags]
 * ```
 */
var az_postgres_server_update_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_update_command_builder, _super);
    function az_postgres_server_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_postgres_server_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters. */
    az_postgres_server_update_command_builder.prototype.adminPassword = function (value) {
        this.setFlag("--admin-password", value);
        return this;
    };
    /** Generate and assign an Azure Active Directory Identity for this server for use with key management services like Azure KeyVault. */
    az_postgres_server_update_command_builder.prototype.assignIdentity = function (value) {
        this.setFlag("--assign-identity", value);
        return this;
    };
    /** Enable or disable autogrow of the storage. Default value is Enabled. */
    az_postgres_server_update_command_builder.prototype.autoGrow = function (value) {
        this.setFlag("--auto-grow", value);
        return this;
    };
    /** The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days. */
    az_postgres_server_update_command_builder.prototype.backupRetention = function (value) {
        this.setFlag("--backup-retention", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_postgres_server_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Set the minimal TLS version for connections to server when SSL is enabled. Default is TLSEnforcementDisabled. */
    az_postgres_server_update_command_builder.prototype.minimalTlsVersion = function (value) {
        this.setFlag("--minimal-tls-version", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Enable or disable public network access to server. When disabled, only connections made through Private Links can reach this server. Default is Enabled. */
    az_postgres_server_update_command_builder.prototype.publicNetworkAccess = function (value) {
        this.setFlag("--public-network-access", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_postgres_server_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_postgres_server_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** The name of the sku. Follows the convention {pricing tier}_{compute generation}_{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16. */
    az_postgres_server_update_command_builder.prototype.skuName = function (value) {
        this.setFlag("--sku-name", value);
        return this;
    };
    /** Enable or disable ssl enforcement for connections to server. Default is Enabled. */
    az_postgres_server_update_command_builder.prototype.sslEnforcement = function (value) {
        this.setFlag("--ssl-enforcement", value);
        return this;
    };
    /** The storage capacity of the server (unit is megabytes). Minimum 5120 and increases in 1024 increments. Default is 51200. */
    az_postgres_server_update_command_builder.prototype.storageSize = function (value) {
        this.setFlag("--storage-size", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_postgres_server_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_postgres_server_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Wait for server to satisfy certain conditions.
 *
 * Syntax:
 * ```
 * az postgres server wait [--custom]
 *                         [--exists]
 *                         [--ids]
 *                         [--interval]
 *                         [--name]
 *                         [--resource-group]
 *                         [--subscription]
 *                         [--timeout]
 * ```
 */
var az_postgres_server_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_postgres_server_wait_command_builder, _super);
    function az_postgres_server_wait_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_postgres_server_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_postgres_server_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_postgres_server_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_postgres_server_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    az_postgres_server_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_postgres_server_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_postgres_server_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_postgres_server_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    return az_postgres_server_wait_command_builder;
}(base_1.CommandBuilder));
