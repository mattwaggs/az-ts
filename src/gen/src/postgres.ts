import { CommandBuilder, ICommandParent } from '../base';

/** Manage PostgreSQL databases on a server. */
export class az_postgres_db implements ICommandParent<any> {
    commandPath = "az postgres db";

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
    az_postgres_db_create(name: string, resourceGroup: string, serverName: string): az_postgres_db_create_command_builder {
        return new az_postgres_db_create_command_builder(this, name, resourceGroup, serverName);
    }

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
    az_postgres_db_delete(name: string, resourceGroup: string, serverName: string): az_postgres_db_delete_command_builder {
        return new az_postgres_db_delete_command_builder(this, name, resourceGroup, serverName);
    }

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
    az_postgres_db_list(resourceGroup: string, serverName: string): az_postgres_db_list_command_builder {
        return new az_postgres_db_list_command_builder(this, resourceGroup, serverName);
    }

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
    az_postgres_db_show(name: string, resourceGroup: string, serverName: string): az_postgres_db_show_command_builder {
        return new az_postgres_db_show_command_builder(this, name, resourceGroup, serverName);
    }
}

/** Manage firewall rules for a server. */
export class az_postgres_flexible_server_firewall_rule implements ICommandParent<any> {
    commandPath = "az postgres flexible-server firewall-rule";

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
    az_postgres_flexible_server_firewall_rule_create(endIpAddress: string, name: string, resourceGroup: string, serverName: string, startIpAddress: string): az_postgres_flexible_server_firewall_rule_create_command_builder {
        return new az_postgres_flexible_server_firewall_rule_create_command_builder(this, endIpAddress, name, resourceGroup, serverName, startIpAddress);
    }

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
    az_postgres_flexible_server_firewall_rule_delete(): az_postgres_flexible_server_firewall_rule_delete_command_builder {
        return new az_postgres_flexible_server_firewall_rule_delete_command_builder(this);
    }

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
    az_postgres_flexible_server_firewall_rule_list(resourceGroup: string, serverName: string): az_postgres_flexible_server_firewall_rule_list_command_builder {
        return new az_postgres_flexible_server_firewall_rule_list_command_builder(this, resourceGroup, serverName);
    }

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
    az_postgres_flexible_server_firewall_rule_show(): az_postgres_flexible_server_firewall_rule_show_command_builder {
        return new az_postgres_flexible_server_firewall_rule_show_command_builder(this);
    }

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
    az_postgres_flexible_server_firewall_rule_update(): az_postgres_flexible_server_firewall_rule_update_command_builder {
        return new az_postgres_flexible_server_firewall_rule_update_command_builder(this);
    }
}

/** Commands for managing server parameter values for flexible server. */
export class az_postgres_flexible_server_parameter implements ICommandParent<any> {
    commandPath = "az postgres flexible-server parameter";

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
    az_postgres_flexible_server_parameter_list(resourceGroup: string, serverName: string): az_postgres_flexible_server_parameter_list_command_builder {
        return new az_postgres_flexible_server_parameter_list_command_builder(this, resourceGroup, serverName);
    }

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
    az_postgres_flexible_server_parameter_set(): az_postgres_flexible_server_parameter_set_command_builder {
        return new az_postgres_flexible_server_parameter_set_command_builder(this);
    }

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
    az_postgres_flexible_server_parameter_show(): az_postgres_flexible_server_parameter_show_command_builder {
        return new az_postgres_flexible_server_parameter_show_command_builder(this);
    }
}

/** Manage Azure Database for PostgreSQL Flexible Servers. */
export class az_postgres_flexible_server implements ICommandParent<any> {
    commandPath = "az postgres flexible-server";

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
    az_postgres_flexible_server_create(): az_postgres_flexible_server_create_command_builder {
        return new az_postgres_flexible_server_create_command_builder(this);
    }

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
    az_postgres_flexible_server_delete(): az_postgres_flexible_server_delete_command_builder {
        return new az_postgres_flexible_server_delete_command_builder(this);
    }

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
    az_postgres_flexible_server_list(): az_postgres_flexible_server_list_command_builder {
        return new az_postgres_flexible_server_list_command_builder(this);
    }

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
    az_postgres_flexible_server_list_skus(location: string): az_postgres_flexible_server_list_skus_command_builder {
        return new az_postgres_flexible_server_list_skus_command_builder(this, location);
    }

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
    az_postgres_flexible_server_restart(): az_postgres_flexible_server_restart_command_builder {
        return new az_postgres_flexible_server_restart_command_builder(this);
    }

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
    az_postgres_flexible_server_restore(sourceServer: string, time: string): az_postgres_flexible_server_restore_command_builder {
        return new az_postgres_flexible_server_restore_command_builder(this, sourceServer, time);
    }

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
    az_postgres_flexible_server_show(): az_postgres_flexible_server_show_command_builder {
        return new az_postgres_flexible_server_show_command_builder(this);
    }

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
    az_postgres_flexible_server_show_connection_string(): az_postgres_flexible_server_show_connection_string_command_builder {
        return new az_postgres_flexible_server_show_connection_string_command_builder(this);
    }

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
    az_postgres_flexible_server_start(): az_postgres_flexible_server_start_command_builder {
        return new az_postgres_flexible_server_start_command_builder(this);
    }

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
    az_postgres_flexible_server_stop(): az_postgres_flexible_server_stop_command_builder {
        return new az_postgres_flexible_server_stop_command_builder(this);
    }

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
    az_postgres_flexible_server_update(): az_postgres_flexible_server_update_command_builder {
        return new az_postgres_flexible_server_update_command_builder(this);
    }

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
    az_postgres_flexible_server_wait(): az_postgres_flexible_server_wait_command_builder {
        return new az_postgres_flexible_server_wait_command_builder(this);
    }
}

/** Manage a postgres server's Active Directory administrator. */
export class az_postgres_server_ad_admin implements ICommandParent<any> {
    commandPath = "az postgres server ad-admin";

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
    az_postgres_server_ad_admin_create(resourceGroup: string, serverName: string): az_postgres_server_ad_admin_create_command_builder {
        return new az_postgres_server_ad_admin_create_command_builder(this, resourceGroup, serverName);
    }

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
    az_postgres_server_ad_admin_delete(): az_postgres_server_ad_admin_delete_command_builder {
        return new az_postgres_server_ad_admin_delete_command_builder(this);
    }

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
    az_postgres_server_ad_admin_list(): az_postgres_server_ad_admin_list_command_builder {
        return new az_postgres_server_ad_admin_list_command_builder(this);
    }

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
    az_postgres_server_ad_admin_show(): az_postgres_server_ad_admin_show_command_builder {
        return new az_postgres_server_ad_admin_show_command_builder(this);
    }

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
    az_postgres_server_ad_admin_wait(): az_postgres_server_ad_admin_wait_command_builder {
        return new az_postgres_server_ad_admin_wait_command_builder(this);
    }
}

/** Manage configuration values for a server. */
export class az_postgres_server_configuration implements ICommandParent<any> {
    commandPath = "az postgres server configuration";

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
    az_postgres_server_configuration_list(): az_postgres_server_configuration_list_command_builder {
        return new az_postgres_server_configuration_list_command_builder(this);
    }

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
    az_postgres_server_configuration_set(): az_postgres_server_configuration_set_command_builder {
        return new az_postgres_server_configuration_set_command_builder(this);
    }

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
    az_postgres_server_configuration_show(): az_postgres_server_configuration_show_command_builder {
        return new az_postgres_server_configuration_show_command_builder(this);
    }
}

/** Manage firewall rules for a server. */
export class az_postgres_server_firewall_rule implements ICommandParent<any> {
    commandPath = "az postgres server firewall-rule";

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
    az_postgres_server_firewall_rule_create(endIpAddress: string, name: string, resourceGroup: string, serverName: string, startIpAddress: string): az_postgres_server_firewall_rule_create_command_builder {
        return new az_postgres_server_firewall_rule_create_command_builder(this, endIpAddress, name, resourceGroup, serverName, startIpAddress);
    }

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
    az_postgres_server_firewall_rule_delete(): az_postgres_server_firewall_rule_delete_command_builder {
        return new az_postgres_server_firewall_rule_delete_command_builder(this);
    }

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
    az_postgres_server_firewall_rule_list(): az_postgres_server_firewall_rule_list_command_builder {
        return new az_postgres_server_firewall_rule_list_command_builder(this);
    }

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
    az_postgres_server_firewall_rule_show(): az_postgres_server_firewall_rule_show_command_builder {
        return new az_postgres_server_firewall_rule_show_command_builder(this);
    }

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
    az_postgres_server_firewall_rule_update(): az_postgres_server_firewall_rule_update_command_builder {
        return new az_postgres_server_firewall_rule_update_command_builder(this);
    }
}

/** Manage PostgreSQL server keys. */
export class az_postgres_server_key implements ICommandParent<any> {
    commandPath = "az postgres server key";

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
    az_postgres_server_key_create(kid: string, name: string, resourceGroup: string): az_postgres_server_key_create_command_builder {
        return new az_postgres_server_key_create_command_builder(this, kid, name, resourceGroup);
    }

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
    az_postgres_server_key_delete(kid: string): az_postgres_server_key_delete_command_builder {
        return new az_postgres_server_key_delete_command_builder(this, kid);
    }

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
    az_postgres_server_key_list(): az_postgres_server_key_list_command_builder {
        return new az_postgres_server_key_list_command_builder(this);
    }

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
    az_postgres_server_key_show(kid: string): az_postgres_server_key_show_command_builder {
        return new az_postgres_server_key_show_command_builder(this, kid);
    }
}

/** Manage PostgreSQL server private endpoint connections. */
export class az_postgres_server_private_endpoint_connection implements ICommandParent<any> {
    commandPath = "az postgres server private-endpoint-connection";

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
    az_postgres_server_private_endpoint_connection_approve(): az_postgres_server_private_endpoint_connection_approve_command_builder {
        return new az_postgres_server_private_endpoint_connection_approve_command_builder(this);
    }

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
    az_postgres_server_private_endpoint_connection_delete(): az_postgres_server_private_endpoint_connection_delete_command_builder {
        return new az_postgres_server_private_endpoint_connection_delete_command_builder(this);
    }

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
    az_postgres_server_private_endpoint_connection_reject(): az_postgres_server_private_endpoint_connection_reject_command_builder {
        return new az_postgres_server_private_endpoint_connection_reject_command_builder(this);
    }

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
    az_postgres_server_private_endpoint_connection_show(): az_postgres_server_private_endpoint_connection_show_command_builder {
        return new az_postgres_server_private_endpoint_connection_show_command_builder(this);
    }
}

/** Manage PostgreSQL server private link resources. */
export class az_postgres_server_private_link_resource implements ICommandParent<any> {
    commandPath = "az postgres server private-link-resource";

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
    az_postgres_server_private_link_resource_list(): az_postgres_server_private_link_resource_list_command_builder {
        return new az_postgres_server_private_link_resource_list_command_builder(this);
    }
}

/** Manage read replicas. */
export class az_postgres_server_replica implements ICommandParent<any> {
    commandPath = "az postgres server replica";

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
    az_postgres_server_replica_create(name: string, resourceGroup: string, sourceServer: string): az_postgres_server_replica_create_command_builder {
        return new az_postgres_server_replica_create_command_builder(this, name, resourceGroup, sourceServer);
    }

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
    az_postgres_server_replica_list(): az_postgres_server_replica_list_command_builder {
        return new az_postgres_server_replica_list_command_builder(this);
    }

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
    az_postgres_server_replica_stop(): az_postgres_server_replica_stop_command_builder {
        return new az_postgres_server_replica_stop_command_builder(this);
    }
}

/** Manage a server's virtual network rules. */
export class az_postgres_server_vnet_rule implements ICommandParent<any> {
    commandPath = "az postgres server vnet-rule";

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
    az_postgres_server_vnet_rule_create(name: string, resourceGroup: string, serverName: string, subnet: string): az_postgres_server_vnet_rule_create_command_builder {
        return new az_postgres_server_vnet_rule_create_command_builder(this, name, resourceGroup, serverName, subnet);
    }

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
    az_postgres_server_vnet_rule_delete(): az_postgres_server_vnet_rule_delete_command_builder {
        return new az_postgres_server_vnet_rule_delete_command_builder(this);
    }

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
    az_postgres_server_vnet_rule_list(): az_postgres_server_vnet_rule_list_command_builder {
        return new az_postgres_server_vnet_rule_list_command_builder(this);
    }

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
    az_postgres_server_vnet_rule_show(): az_postgres_server_vnet_rule_show_command_builder {
        return new az_postgres_server_vnet_rule_show_command_builder(this);
    }

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
    az_postgres_server_vnet_rule_update(subnet: string): az_postgres_server_vnet_rule_update_command_builder {
        return new az_postgres_server_vnet_rule_update_command_builder(this, subnet);
    }
}

/** Manage server logs. */
export class az_postgres_server_logs implements ICommandParent<any> {
    commandPath = "az postgres server-logs";

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
    az_postgres_server_logs_download(name: string, resourceGroup: string, serverName: string): az_postgres_server_logs_download_command_builder {
        return new az_postgres_server_logs_download_command_builder(this, name, resourceGroup, serverName);
    }

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
    az_postgres_server_logs_list(resourceGroup: string, serverName: string): az_postgres_server_logs_list_command_builder {
        return new az_postgres_server_logs_list_command_builder(this, resourceGroup, serverName);
    }
}

/** Manage PostgreSQL servers. */
export class az_postgres_server implements ICommandParent<any> {
    commandPath = "az postgres server";

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
    az_postgres_server_create(adminPassword: string, adminUser: string, name: string, resourceGroup: string, skuName: string): az_postgres_server_create_command_builder {
        return new az_postgres_server_create_command_builder(this, adminPassword, adminUser, name, resourceGroup, skuName);
    }

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
    az_postgres_server_delete(): az_postgres_server_delete_command_builder {
        return new az_postgres_server_delete_command_builder(this);
    }

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
    az_postgres_server_georestore(location: string, sourceServer: string): az_postgres_server_georestore_command_builder {
        return new az_postgres_server_georestore_command_builder(this, location, sourceServer);
    }

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
    az_postgres_server_list(): az_postgres_server_list_command_builder {
        return new az_postgres_server_list_command_builder(this);
    }

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
    az_postgres_server_restart(): az_postgres_server_restart_command_builder {
        return new az_postgres_server_restart_command_builder(this);
    }

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
    az_postgres_server_restore(restorePointInTime: string, sourceServer: string): az_postgres_server_restore_command_builder {
        return new az_postgres_server_restore_command_builder(this, restorePointInTime, sourceServer);
    }

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
    az_postgres_server_show(): az_postgres_server_show_command_builder {
        return new az_postgres_server_show_command_builder(this);
    }

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
    az_postgres_server_update(): az_postgres_server_update_command_builder {
        return new az_postgres_server_update_command_builder(this);
    }

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
    az_postgres_server_wait(): az_postgres_server_wait_command_builder {
        return new az_postgres_server_wait_command_builder(this);
    }
}

/** Manage Azure Database for PostgreSQL servers. */
export class az_postgres {
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
class az_postgres_db_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string, serverName: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.serverName(serverName)
    }

    /** The name of the database. */
    name(value: string): az_postgres_db_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_db_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_db_create_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** The charset of the database. */
    charset(value: string): az_postgres_db_create_command_builder {
        this.setFlag("--charset", value);
        return this;
    }

    /** The collation of the database. */
    collation(value: string): az_postgres_db_create_command_builder {
        this.setFlag("--collation", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_db_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_db_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string, serverName: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.serverName(serverName)
    }

    /** The name of the database. */
    name(value: string): az_postgres_db_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_db_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_db_delete_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_db_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_postgres_db_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_postgres_db_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string, serverName: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.serverName(serverName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_db_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_db_list_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_postgres_db_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_db_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_db_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string, serverName: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.serverName(serverName)
    }

    /** The name of the database. */
    name(value: string): az_postgres_db_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_db_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_db_show_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_postgres_db_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_db_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_postgres_flexible_server_firewall_rule_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, endIpAddress: string, name: string, resourceGroup: string, serverName: string, startIpAddress: string) {
        super(commandParent);
        this.endIpAddress(endIpAddress)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.serverName(serverName)
        this.startIpAddress(startIpAddress)
    }

    /** The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    endIpAddress(value: string): az_postgres_flexible_server_firewall_rule_create_command_builder {
        this.setFlag("--end-ip-address", value);
        return this;
    }

    /** The name of the firewall rule. If name is omitted, default name will be chosen for firewall name. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    name(value: string): az_postgres_flexible_server_firewall_rule_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_flexible_server_firewall_rule_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_flexible_server_firewall_rule_create_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    startIpAddress(value: string): az_postgres_flexible_server_firewall_rule_create_command_builder {
        this.setFlag("--start-ip-address", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_flexible_server_firewall_rule_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_flexible_server_firewall_rule_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_flexible_server_firewall_rule_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the firewall rule. If name is omitted, default name will be chosen for firewall name. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    name(value: string): az_postgres_flexible_server_firewall_rule_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Turn confirmation prompt on/off. If off, the rule will be deleted without confirmation. */
    prompt(value: string): az_postgres_flexible_server_firewall_rule_delete_command_builder {
        this.setFlag("--prompt", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_flexible_server_firewall_rule_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_flexible_server_firewall_rule_delete_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_flexible_server_firewall_rule_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_flexible_server_firewall_rule_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string, serverName: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.serverName(serverName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_flexible_server_firewall_rule_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_flexible_server_firewall_rule_list_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_postgres_flexible_server_firewall_rule_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_flexible_server_firewall_rule_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_flexible_server_firewall_rule_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_flexible_server_firewall_rule_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the firewall rule. If name is omitted, default name will be chosen for firewall name. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    name(value: string): az_postgres_flexible_server_firewall_rule_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_postgres_flexible_server_firewall_rule_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_flexible_server_firewall_rule_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_flexible_server_firewall_rule_show_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_flexible_server_firewall_rule_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_flexible_server_firewall_rule_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_postgres_flexible_server_firewall_rule_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    endIpAddress(value: string): az_postgres_flexible_server_firewall_rule_update_command_builder {
        this.setFlag("--end-ip-address", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_postgres_flexible_server_firewall_rule_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_flexible_server_firewall_rule_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the firewall rule. If name is omitted, default name will be chosen for firewall name. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    name(value: string): az_postgres_flexible_server_firewall_rule_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_postgres_flexible_server_firewall_rule_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_flexible_server_firewall_rule_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_flexible_server_firewall_rule_update_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_postgres_flexible_server_firewall_rule_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    startIpAddress(value: string): az_postgres_flexible_server_firewall_rule_update_command_builder {
        this.setFlag("--start-ip-address", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_flexible_server_firewall_rule_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_postgres_flexible_server_parameter_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string, serverName: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.serverName(serverName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_flexible_server_parameter_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_flexible_server_parameter_list_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_postgres_flexible_server_parameter_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_flexible_server_parameter_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_flexible_server_parameter_set_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_flexible_server_parameter_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the server configuration. */
    name(value: string): az_postgres_flexible_server_parameter_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_flexible_server_parameter_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_flexible_server_parameter_set_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Source of the configuration. */
    source(value: string): az_postgres_flexible_server_parameter_set_command_builder {
        this.setFlag("--source", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_flexible_server_parameter_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Value of the configuration. */
    value(value: string): az_postgres_flexible_server_parameter_set_command_builder {
        this.setFlag("--value", value);
        return this;
    }
}

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
class az_postgres_flexible_server_parameter_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_flexible_server_parameter_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the server configuration. */
    name(value: string): az_postgres_flexible_server_parameter_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_postgres_flexible_server_parameter_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_flexible_server_parameter_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_flexible_server_parameter_show_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_flexible_server_parameter_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_postgres_flexible_server_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** The virtual network address prefix. */
    addressPrefixes(value: string): az_postgres_flexible_server_create_command_builder {
        this.setFlag("--address-prefixes", value);
        return this;
    }

    /** The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters. */
    adminPassword(value: string): az_postgres_flexible_server_create_command_builder {
        this.setFlag("--admin-password", value);
        return this;
    }

    /** Administrator username for the server. Once set, it cannot be changed. */
    adminUser(value: string): az_postgres_flexible_server_create_command_builder {
        this.setFlag("--admin-user,", value);
        return this;
    }

    /** Generate and assign an Azure Active Directory Identity for this server for use with key management services like Azure KeyVault. No need to enter extra argument. */
    assignIdentity(value: string): az_postgres_flexible_server_create_command_builder {
        this.setFlag("--assign-identity", value);
        return this;
    }

    /** The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days. */
    backupRetention(value: string): az_postgres_flexible_server_create_command_builder {
        this.setFlag("--backup-retention", value);
        return this;
    }

    /** Enable or disable high availability feature.  Default value is Disabled. */
    highAvailability(value: string): az_postgres_flexible_server_create_command_builder {
        this.setFlag("--high-availability", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_postgres_flexible_server_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_postgres_flexible_server_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Determines the public access. Enter single or range of IP addresses to be included in the allowed list of IPs. IP address ranges must be dash-separated and not contain any spaces. Specifying 0.0.0.0 allows public access from any resources deployed within Azure to access your server. Specifying no IP address sets the server in public access mode but does not create a firewall rule. */
    publicAccess(value: string): az_postgres_flexible_server_create_command_builder {
        this.setFlag("--public-access", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_flexible_server_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the compute SKU. Follows the convention Standard_{VM name}. Examples: Standard_D4s_v3. */
    skuName(value: string): az_postgres_flexible_server_create_command_builder {
        this.setFlag("--sku-name", value);
        return this;
    }

    /** The storage capacity of the server. Minimum is 32 GiB and max is 16 TiB. */
    storageSize(value: string): az_postgres_flexible_server_create_command_builder {
        this.setFlag("--storage-size", value);
        return this;
    }

    /** Name or ID of the subnet that allows access to an Azure Flexible Server. */
    subnet(value: string): az_postgres_flexible_server_create_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** The subnet address prefix. */
    subnetPrefixes(value: string): az_postgres_flexible_server_create_command_builder {
        this.setFlag("--subnet-prefixes", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_flexible_server_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_postgres_flexible_server_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Compute tier of the server. Accepted values: Burstable, GeneralPurpose, Memory Optimized. */
    tier(value: string): az_postgres_flexible_server_create_command_builder {
        this.setFlag("--tier", value);
        return this;
    }

    /** Server major version. */
    version(value: string): az_postgres_flexible_server_create_command_builder {
        this.setFlag("--version", value);
        return this;
    }

    /** The virtual network name. */
    vnet(value: string): az_postgres_flexible_server_create_command_builder {
        this.setFlag("--vnet", value);
        return this;
    }

    /** Availability zone into which to provision the resource. */
    zone(value: string): az_postgres_flexible_server_create_command_builder {
        this.setFlag("--zone,", value);
        return this;
    }
}

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
class az_postgres_flexible_server_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Delete the server without prompt. */
    force(value: string): az_postgres_flexible_server_delete_command_builder {
        this.setFlag("--force", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_flexible_server_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_postgres_flexible_server_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_flexible_server_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_flexible_server_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_flexible_server_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_postgres_flexible_server_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_flexible_server_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_flexible_server_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_flexible_server_list_skus_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, location: string) {
        super(commandParent);
        this.location(location)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_postgres_flexible_server_list_skus_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_flexible_server_list_skus_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_flexible_server_restart_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_flexible_server_restart_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_postgres_flexible_server_restart_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_flexible_server_restart_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_flexible_server_restart_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_flexible_server_restore_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, sourceServer: string, time: string) {
        super(commandParent);
        this.sourceServer(sourceServer)
        this.time(time)
    }

    /** The name or resource ID of the source server to restore from. */
    sourceServer(value: string): az_postgres_flexible_server_restore_command_builder {
        this.setFlag("--source-server", value);
        return this;
    }

    /** The point in time to restore from (ISO8601 format), e.g., 2017-04-26T02:10:00+08:00. */
    time(value: string): az_postgres_flexible_server_restore_command_builder {
        this.setFlag("--time", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_flexible_server_restore_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_postgres_flexible_server_restore_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The name of the new server that is created by the restore command. */
    name(value: string): az_postgres_flexible_server_restore_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_postgres_flexible_server_restore_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_flexible_server_restore_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_flexible_server_restore_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_flexible_server_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_flexible_server_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_postgres_flexible_server_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_postgres_flexible_server_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_flexible_server_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_flexible_server_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_flexible_server_show_connection_string_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** The login password of the administrator. */
    adminPassword(value: string): az_postgres_flexible_server_show_connection_string_command_builder {
        this.setFlag("--admin-password", value);
        return this;
    }

    /** The login username of the administrator. */
    adminUser(value: string): az_postgres_flexible_server_show_connection_string_command_builder {
        this.setFlag("--admin-user", value);
        return this;
    }

    /** The name of a database. */
    databaseName(value: string): az_postgres_flexible_server_show_connection_string_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_flexible_server_show_connection_string_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the server. */
    serverName(value: string): az_postgres_flexible_server_show_connection_string_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_flexible_server_show_connection_string_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_flexible_server_start_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_flexible_server_start_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_postgres_flexible_server_start_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_flexible_server_start_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_flexible_server_start_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_flexible_server_stop_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_flexible_server_stop_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_postgres_flexible_server_stop_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_flexible_server_stop_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_flexible_server_stop_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_flexible_server_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_postgres_flexible_server_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters. */
    adminPassword(value: string): az_postgres_flexible_server_update_command_builder {
        this.setFlag("--admin-password", value);
        return this;
    }

    /** The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days. */
    backupRetention(value: string): az_postgres_flexible_server_update_command_builder {
        this.setFlag("--backup-retention", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_postgres_flexible_server_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Enable or disable high availability feature.  Default value is Disabled. */
    highAvailability(value: 'Disabled' | 'Enabled'): az_postgres_flexible_server_update_command_builder {
        this.setFlag("--high-availability", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_flexible_server_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Period of time (UTC) designated for maintenance. Examples: "Sun:23:30" to schedule on Sunday, 11:30pm UTC. To set back to default pass in "Disabled". */
    maintenanceWindow(value: string): az_postgres_flexible_server_update_command_builder {
        this.setFlag("--maintenance-window", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_postgres_flexible_server_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_postgres_flexible_server_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_flexible_server_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_postgres_flexible_server_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** The name of the compute SKU. Follows the convention Standard_{VM name}. Examples: Standard_D4s_v3. */
    skuName(value: string): az_postgres_flexible_server_update_command_builder {
        this.setFlag("--sku-name", value);
        return this;
    }

    /** The storage capacity of the server. Minimum is 32 GiB and max is 16 TiB. */
    storageSize(value: string): az_postgres_flexible_server_update_command_builder {
        this.setFlag("--storage-size", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_flexible_server_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_postgres_flexible_server_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Compute tier of the server. Accepted values: Burstable, GeneralPurpose, Memory Optimized. */
    tier(value: string): az_postgres_flexible_server_update_command_builder {
        this.setFlag("--tier", value);
        return this;
    }
}

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
class az_postgres_flexible_server_wait_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_postgres_flexible_server_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_postgres_flexible_server_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_postgres_flexible_server_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_postgres_flexible_server_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_flexible_server_wait_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_postgres_flexible_server_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_postgres_flexible_server_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_flexible_server_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_flexible_server_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_postgres_flexible_server_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_postgres_flexible_server_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
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
class az_postgres_server_ad_admin_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string, serverName: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.serverName(serverName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_ad_admin_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_server_ad_admin_create_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Display name of the Azure AD administrator user or group. */
    displayName(value: string): az_postgres_server_ad_admin_create_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_postgres_server_ad_admin_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The unique ID of the Azure AD administrator. */
    objectId(value: string): az_postgres_server_ad_admin_create_command_builder {
        this.setFlag("--object-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_ad_admin_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_server_ad_admin_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_ad_admin_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_ad_admin_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_server_ad_admin_delete_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_ad_admin_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_postgres_server_ad_admin_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_postgres_server_ad_admin_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_ad_admin_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_postgres_server_ad_admin_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_ad_admin_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_server_ad_admin_list_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_ad_admin_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_server_ad_admin_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_ad_admin_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_postgres_server_ad_admin_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_ad_admin_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_server_ad_admin_show_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_ad_admin_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_server_ad_admin_wait_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_postgres_server_ad_admin_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_postgres_server_ad_admin_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_postgres_server_ad_admin_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_postgres_server_ad_admin_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_ad_admin_wait_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_postgres_server_ad_admin_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_ad_admin_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_server_ad_admin_wait_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_ad_admin_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_postgres_server_ad_admin_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_postgres_server_ad_admin_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
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
class az_postgres_server_configuration_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_configuration_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_postgres_server_configuration_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_configuration_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_server_configuration_list_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_configuration_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_server_configuration_set_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_configuration_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the server configuration. */
    name(value: string): az_postgres_server_configuration_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_configuration_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_server_configuration_set_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_configuration_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Value of the configuration. If not provided, configuration value will be set to default. */
    value(value: string): az_postgres_server_configuration_set_command_builder {
        this.setFlag("--value", value);
        return this;
    }
}

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
class az_postgres_server_configuration_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_configuration_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the server configuration. */
    name(value: string): az_postgres_server_configuration_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_postgres_server_configuration_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_configuration_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_server_configuration_show_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_configuration_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_postgres_server_firewall_rule_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, endIpAddress: string, name: string, resourceGroup: string, serverName: string, startIpAddress: string) {
        super(commandParent);
        this.endIpAddress(endIpAddress)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.serverName(serverName)
        this.startIpAddress(startIpAddress)
    }

    /** The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    endIpAddress(value: string): az_postgres_server_firewall_rule_create_command_builder {
        this.setFlag("--end-ip-address", value);
        return this;
    }

    /** The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    name(value: string): az_postgres_server_firewall_rule_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_firewall_rule_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_server_firewall_rule_create_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    startIpAddress(value: string): az_postgres_server_firewall_rule_create_command_builder {
        this.setFlag("--start-ip-address", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_firewall_rule_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_server_firewall_rule_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_firewall_rule_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    name(value: string): az_postgres_server_firewall_rule_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_firewall_rule_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_server_firewall_rule_delete_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_firewall_rule_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_postgres_server_firewall_rule_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_postgres_server_firewall_rule_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_firewall_rule_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_postgres_server_firewall_rule_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_firewall_rule_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_server_firewall_rule_list_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_firewall_rule_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_server_firewall_rule_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_firewall_rule_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    name(value: string): az_postgres_server_firewall_rule_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_postgres_server_firewall_rule_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_firewall_rule_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_server_firewall_rule_show_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_firewall_rule_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_server_firewall_rule_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_postgres_server_firewall_rule_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    endIpAddress(value: string): az_postgres_server_firewall_rule_update_command_builder {
        this.setFlag("--end-ip-address", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_postgres_server_firewall_rule_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_firewall_rule_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the firewall rule name cannot exceed 128 characters. */
    name(value: string): az_postgres_server_firewall_rule_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_postgres_server_firewall_rule_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_firewall_rule_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_server_firewall_rule_update_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_postgres_server_firewall_rule_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    startIpAddress(value: string): az_postgres_server_firewall_rule_update_command_builder {
        this.setFlag("--start-ip-address", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_firewall_rule_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_postgres_server_key_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, kid: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.kid(kid)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    kid(value: string): az_postgres_server_key_create_command_builder {
        this.setFlag("--kid", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_postgres_server_key_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_key_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_key_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_server_key_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, kid: string) {
        super(commandParent);
        this.kid(kid)
    }

    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    kid(value: string): az_postgres_server_key_delete_command_builder {
        this.setFlag("--kid", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_key_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_postgres_server_key_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_key_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_key_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_postgres_server_key_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_postgres_server_key_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_key_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_postgres_server_key_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_postgres_server_key_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_key_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_key_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_server_key_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, kid: string) {
        super(commandParent);
        this.kid(kid)
    }

    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    kid(value: string): az_postgres_server_key_show_command_builder {
        this.setFlag("--kid", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_key_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_postgres_server_key_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_postgres_server_key_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_key_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_key_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_postgres_server_private_endpoint_connection_approve_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Comments for approve operation. */
    description(value: string): az_postgres_server_private_endpoint_connection_approve_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** The ID of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted. */
    id(value: string): az_postgres_server_private_endpoint_connection_approve_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_private_endpoint_connection_approve_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the private endpoint connection associated with the Server. Required if --id is not specified. */
    name(value: string): az_postgres_server_private_endpoint_connection_approve_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The resource group name of specified server. */
    resourceGroup(value: string): az_postgres_server_private_endpoint_connection_approve_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Server. Required if --id is not specified. */
    serverName(value: string): az_postgres_server_private_endpoint_connection_approve_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_private_endpoint_connection_approve_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_server_private_endpoint_connection_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** The ID of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted. */
    id(value: string): az_postgres_server_private_endpoint_connection_delete_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_private_endpoint_connection_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the private endpoint connection associated with the Server. Required if --id is not specified. */
    name(value: string): az_postgres_server_private_endpoint_connection_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The resource group name of specified server. */
    resourceGroup(value: string): az_postgres_server_private_endpoint_connection_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Server. Required if --id is not specified. */
    serverName(value: string): az_postgres_server_private_endpoint_connection_delete_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_private_endpoint_connection_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_server_private_endpoint_connection_reject_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Comments for reject operation. */
    description(value: string): az_postgres_server_private_endpoint_connection_reject_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** The ID of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted. */
    id(value: string): az_postgres_server_private_endpoint_connection_reject_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_private_endpoint_connection_reject_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the private endpoint connection associated with the Server. Required if --id is not specified. */
    name(value: string): az_postgres_server_private_endpoint_connection_reject_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The resource group name of specified server. */
    resourceGroup(value: string): az_postgres_server_private_endpoint_connection_reject_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Server. Required if --id is not specified. */
    serverName(value: string): az_postgres_server_private_endpoint_connection_reject_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_private_endpoint_connection_reject_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_server_private_endpoint_connection_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** The ID of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted. */
    id(value: string): az_postgres_server_private_endpoint_connection_show_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_private_endpoint_connection_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the private endpoint connection associated with the Server. Required if --id is not specified. */
    name(value: string): az_postgres_server_private_endpoint_connection_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_postgres_server_private_endpoint_connection_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The resource group name of specified server. */
    resourceGroup(value: string): az_postgres_server_private_endpoint_connection_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Server. Required if --id is not specified. */
    serverName(value: string): az_postgres_server_private_endpoint_connection_show_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_private_endpoint_connection_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_postgres_server_private_link_resource_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_private_link_resource_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_postgres_server_private_link_resource_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_private_link_resource_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Server. */
    serverName(value: string): az_postgres_server_private_link_resource_list_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_private_link_resource_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_postgres_server_replica_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string, sourceServer: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.sourceServer(sourceServer)
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_postgres_server_replica_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_replica_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name or resource ID of the master server to the create replica for. */
    sourceServer(value: string): az_postgres_server_replica_create_command_builder {
        this.setFlag("--source-server", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. If not provided, the create replica will be in the same location as the master server. */
    location(value: string): az_postgres_server_replica_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_postgres_server_replica_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The name of the sku. Follows the convention {pricing tier}_{compute generation}_{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16. */
    skuName(value: string): az_postgres_server_replica_create_command_builder {
        this.setFlag("--sku-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_replica_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_server_replica_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_replica_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_postgres_server_replica_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_replica_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the master server. */
    serverName(value: string): az_postgres_server_replica_list_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_replica_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_server_replica_stop_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_replica_stop_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_postgres_server_replica_stop_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_replica_stop_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_replica_stop_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_postgres_server_replica_stop_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_postgres_server_vnet_rule_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string, serverName: string, subnet: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.serverName(serverName)
        this.subnet(subnet)
    }

    /** The name of the vnet rule. */
    name(value: string): az_postgres_server_vnet_rule_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_vnet_rule_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_server_vnet_rule_create_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of the subnet that allows access to an Azure Postgres Server. If subnet name is provided, --vnet-name must be provided. */
    subnet(value: string): az_postgres_server_vnet_rule_create_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Create vnet rule before virtual network has vnet service endpoint enabled. */
    ignoreMissingEndpoint(value: boolean): az_postgres_server_vnet_rule_create_command_builder {
        this.setFlag("--ignore-missing-endpoint", value.toString());
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_vnet_rule_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The virtual network name. */
    vnetName(value: string): az_postgres_server_vnet_rule_create_command_builder {
        this.setFlag("--vnet-name", value);
        return this;
    }
}

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
class az_postgres_server_vnet_rule_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_vnet_rule_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the vnet rule. */
    name(value: string): az_postgres_server_vnet_rule_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_vnet_rule_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_server_vnet_rule_delete_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_vnet_rule_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_server_vnet_rule_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_vnet_rule_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_postgres_server_vnet_rule_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_vnet_rule_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_server_vnet_rule_list_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_vnet_rule_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_server_vnet_rule_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_vnet_rule_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the vnet rule. */
    name(value: string): az_postgres_server_vnet_rule_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_postgres_server_vnet_rule_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_vnet_rule_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_server_vnet_rule_show_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_vnet_rule_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_server_vnet_rule_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, subnet: string) {
        super(commandParent);
        this.subnet(subnet)
    }

    /** Name or ID of the subnet that allows access to an Azure Postgres Server. If subnet name is provided, --vnet-name must be provided. */
    subnet(value: string): az_postgres_server_vnet_rule_update_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_postgres_server_vnet_rule_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_postgres_server_vnet_rule_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_vnet_rule_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Create vnet rule before virtual network has vnet service endpoint enabled. */
    ignoreMissingEndpoint(value: boolean): az_postgres_server_vnet_rule_update_command_builder {
        this.setFlag("--ignore-missing-endpoint", value.toString());
        return this;
    }

    /** The name of the vnet rule. */
    name(value: string): az_postgres_server_vnet_rule_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_postgres_server_vnet_rule_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_vnet_rule_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_server_vnet_rule_update_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_postgres_server_vnet_rule_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_vnet_rule_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The virtual network name. */
    vnetName(value: string): az_postgres_server_vnet_rule_update_command_builder {
        this.setFlag("--vnet-name", value);
        return this;
    }
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
class az_postgres_server_logs_download_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string, serverName: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.serverName(serverName)
    }

    /** Space-separated list of log filenames on the server to download. */
    name(value: string): az_postgres_server_logs_download_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_logs_download_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_server_logs_download_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_logs_download_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_server_logs_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string, serverName: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.serverName(serverName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_logs_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    serverName(value: string): az_postgres_server_logs_list_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Integer in hours to indicate file last modify time, default value is 72. */
    fileLastWritten(value: string): az_postgres_server_logs_list_command_builder {
        this.setFlag("--file-last-written", value);
        return this;
    }

    /** The pattern that file name should match. */
    filenameContains(value: string): az_postgres_server_logs_list_command_builder {
        this.setFlag("--filename-contains", value);
        return this;
    }

    /** The file size limitation to filter files. */
    maxFileSize(value: string): az_postgres_server_logs_list_command_builder {
        this.setFlag("--max-file-size", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_postgres_server_logs_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_logs_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_postgres_server_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, adminPassword: string, adminUser: string, name: string, resourceGroup: string, skuName: string) {
        super(commandParent);
        this.adminPassword(adminPassword)
        this.adminUser(adminUser)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.skuName(skuName)
    }

    /** The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters. */
    adminPassword(value: string): az_postgres_server_create_command_builder {
        this.setFlag("--admin-password", value);
        return this;
    }

    /** Administrator username for the server. Once set, it cannot be changed. */
    adminUser(value: string): az_postgres_server_create_command_builder {
        this.setFlag("--admin-user", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_postgres_server_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the sku. Follows the convention {pricing tier}_{compute generation}_{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16. */
    skuName(value: string): az_postgres_server_create_command_builder {
        this.setFlag("--sku-name", value);
        return this;
    }

    /** Generate and assign an Azure Active Directory Identity for this server for use with key management services like Azure KeyVault. */
    assignIdentity(value: string): az_postgres_server_create_command_builder {
        this.setFlag("--assign-identity", value);
        return this;
    }

    /** Enable or disable autogrow of the storage. Default value is Enabled. */
    autoGrow(value: 'Disabled' | 'Enabled'): az_postgres_server_create_command_builder {
        this.setFlag("--auto-grow", value);
        return this;
    }

    /** The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days. */
    backupRetention(value: string): az_postgres_server_create_command_builder {
        this.setFlag("--backup-retention", value);
        return this;
    }

    /** Enable or disable geo-redundant backups. Default value is Disabled. Not supported in Basic pricing tier. */
    geoRedundantBackup(value: 'Disabled' | 'Enabled'): az_postgres_server_create_command_builder {
        this.setFlag("--geo-redundant-backup", value);
        return this;
    }

    /** Add an optional second layer of encryption for data using new encryption algorithm. Default value is Disabled. */
    infrastructureEncryption(value: 'Disabled' | 'Enabled'): az_postgres_server_create_command_builder {
        this.setFlag("--infrastructure-encryption", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_postgres_server_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Set the minimal TLS version for connections to server when SSL is enabled. Default is TLSEnforcementDisabled. */
    minimalTlsVersion(value: 'TLS1_0' | 'TLS1_1' | 'TLS1_2' | 'TLSEnforcementDisabled'): az_postgres_server_create_command_builder {
        this.setFlag("--minimal-tls-version", value);
        return this;
    }

    /** Enable or disable public network access to server. When disabled, only connections made through Private Links can reach this server. Default is Enabled. */
    publicNetworkAccess(value: 'Disabled' | 'Enabled'): az_postgres_server_create_command_builder {
        this.setFlag("--public-network-access", value);
        return this;
    }

    /** Enable or disable ssl enforcement for connections to server. Default is Enabled. */
    sslEnforcement(value: 'Disabled' | 'Enabled'): az_postgres_server_create_command_builder {
        this.setFlag("--ssl-enforcement", value);
        return this;
    }

    /** The storage capacity of the server (unit is megabytes). Minimum 5120 and increases in 1024 increments. Default is 51200. */
    storageSize(value: string): az_postgres_server_create_command_builder {
        this.setFlag("--storage-size", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_postgres_server_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Server major version. */
    version(value: string): az_postgres_server_create_command_builder {
        this.setFlag("--version", value);
        return this;
    }
}

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
class az_postgres_server_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_postgres_server_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_postgres_server_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_postgres_server_georestore_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, location: string, sourceServer: string) {
        super(commandParent);
        this.location(location)
        this.sourceServer(sourceServer)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_postgres_server_georestore_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The name or ID of the source server to restore from. */
    sourceServer(value: string): az_postgres_server_georestore_command_builder {
        this.setFlag("--source-server", value);
        return this;
    }

    /** The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days. */
    backupRetention(value: string): az_postgres_server_georestore_command_builder {
        this.setFlag("--backup-retention", value);
        return this;
    }

    /** Enable or disable geo-redundant backups. Default value is Disabled. Not supported in Basic pricing tier. */
    geoRedundantBackup(value: string): az_postgres_server_georestore_command_builder {
        this.setFlag("--geo-redundant-backup", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_georestore_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_postgres_server_georestore_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_postgres_server_georestore_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_georestore_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the sku. Defaults to sku of the source server. Follows the convention {pricing tier}_{compute generation}_{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16. */
    skuName(value: string): az_postgres_server_georestore_command_builder {
        this.setFlag("--sku-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_georestore_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_server_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_postgres_server_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_server_restart_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_restart_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_postgres_server_restart_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_restart_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_restart_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_server_restore_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, restorePointInTime: string, sourceServer: string) {
        super(commandParent);
        this.restorePointInTime(restorePointInTime)
        this.sourceServer(sourceServer)
    }

    /** The point in time to restore from (ISO8601 format), e.g., 2017-04-26T02:10:00+08:00. */
    restorePointInTime(value: string): az_postgres_server_restore_command_builder {
        this.setFlag("--restore-point-in-time", value);
        return this;
    }

    /** The name or resource ID of the source server to restore from. */
    sourceServer(value: string): az_postgres_server_restore_command_builder {
        this.setFlag("--source-server", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_restore_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_postgres_server_restore_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_postgres_server_restore_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_restore_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_restore_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_server_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_postgres_server_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_postgres_server_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_postgres_server_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_postgres_server_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters. */
    adminPassword(value: string): az_postgres_server_update_command_builder {
        this.setFlag("--admin-password", value);
        return this;
    }

    /** Generate and assign an Azure Active Directory Identity for this server for use with key management services like Azure KeyVault. */
    assignIdentity(value: string): az_postgres_server_update_command_builder {
        this.setFlag("--assign-identity", value);
        return this;
    }

    /** Enable or disable autogrow of the storage. Default value is Enabled. */
    autoGrow(value: 'Disabled' | 'Enabled'): az_postgres_server_update_command_builder {
        this.setFlag("--auto-grow", value);
        return this;
    }

    /** The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days. */
    backupRetention(value: string): az_postgres_server_update_command_builder {
        this.setFlag("--backup-retention", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_postgres_server_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Set the minimal TLS version for connections to server when SSL is enabled. Default is TLSEnforcementDisabled. */
    minimalTlsVersion(value: 'TLS1_0' | 'TLS1_1' | 'TLS1_2' | 'TLSEnforcementDisabled'): az_postgres_server_update_command_builder {
        this.setFlag("--minimal-tls-version", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_postgres_server_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Enable or disable public network access to server. When disabled, only connections made through Private Links can reach this server. Default is Enabled. */
    publicNetworkAccess(value: 'Disabled' | 'Enabled'): az_postgres_server_update_command_builder {
        this.setFlag("--public-network-access", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_postgres_server_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_postgres_server_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** The name of the sku. Follows the convention {pricing tier}_{compute generation}_{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16. */
    skuName(value: string): az_postgres_server_update_command_builder {
        this.setFlag("--sku-name", value);
        return this;
    }

    /** Enable or disable ssl enforcement for connections to server. Default is Enabled. */
    sslEnforcement(value: 'Disabled' | 'Enabled'): az_postgres_server_update_command_builder {
        this.setFlag("--ssl-enforcement", value);
        return this;
    }

    /** The storage capacity of the server (unit is megabytes). Minimum 5120 and increases in 1024 increments. Default is 51200. */
    storageSize(value: string): az_postgres_server_update_command_builder {
        this.setFlag("--storage-size", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_postgres_server_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

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
class az_postgres_server_wait_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_postgres_server_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_postgres_server_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_postgres_server_wait_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_postgres_server_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters. */
    name(value: string): az_postgres_server_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_postgres_server_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_postgres_server_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_postgres_server_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }
}
