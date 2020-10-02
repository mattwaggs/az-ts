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
exports.az_sql = exports.az_sql_vm = exports.az_sql_vm_group = exports.az_sql_vm_group_ag_listener = exports.az_sql_virtual_cluster = exports.az_sql_server = exports.az_sql_server_vnet_rule = exports.az_sql_server_tde_key = exports.az_sql_server_key = exports.az_sql_server_firewall_rule = exports.az_sql_server_dns_alias = exports.az_sql_server_conn_policy = exports.az_sql_server_audit_policy = exports.az_sql_server_ad_admin = exports.az_sql_midb = exports.az_sql_midb_short_term_retention_policy = exports.az_sql_midb_ltr_policy = exports.az_sql_midb_ltr_backup = exports.az_sql_mi = exports.az_sql_mi_tde_key = exports.az_sql_mi_op = exports.az_sql_mi_key = exports.az_sql_mi_ad_admin = exports.az_sql_instance_pool = exports.az_sql_instance_failover_group = exports.az_sql_failover_group = exports.az_sql_elastic_pool = exports.az_sql_elastic_pool_op = exports.az_sql_dw = exports.az_sql_db = exports.az_sql_db_threat_policy = exports.az_sql_db_tde = exports.az_sql_db_replica = exports.az_sql_db_op = exports.az_sql_db_ltr_policy = exports.az_sql_db_ltr_backup = exports.az_sql_db_classification = exports.az_sql_db_classification_recommendation = exports.az_sql_db_audit_policy = void 0;
var base_1 = require("../base");
/** Manage a database's auditing policy. */
var az_sql_db_audit_policy = /** @class */ (function () {
    function az_sql_db_audit_policy() {
    }
    /**
     * Gets a database's blob auditing policy.
     *
     * Syntax:
     * ```
     * az sql db audit-policy show [--ids]
     *                             [--name]
     *                             [--query-examples]
     *                             [--resource-group]
     *                             [--server]
     *                             [--subscription]
     * ```
     */
    az_sql_db_audit_policy.show = function () {
        return new az_sql_db_audit_policy_show_command_builder("az sql db audit-policy show", 'az_sql_db_audit_policy_show_command_result');
    };
    /**
     * Update a database's auditing policy.
     *
     * Syntax:
     * ```
     * az sql db audit-policy update [--actions]
     *                               [--add]
     *                               [--force-string]
     *                               [--ids]
     *                               [--name]
     *                               [--remove]
     *                               [--resource-group]
     *                               [--retention-days]
     *                               [--server]
     *                               [--set]
     *                               [--state {Disabled, Enabled}]
     *                               [--storage-account]
     *                               [--storage-endpoint]
     *                               [--storage-key]
     *                               [--subscription]
     * ```
     */
    az_sql_db_audit_policy.update = function () {
        return new az_sql_db_audit_policy_update_command_builder("az sql db audit-policy update", 'az_sql_db_audit_policy_update_command_result');
    };
    return az_sql_db_audit_policy;
}());
exports.az_sql_db_audit_policy = az_sql_db_audit_policy;
/** Manage sensitivity classification recommendations. */
var az_sql_db_classification_recommendation = /** @class */ (function () {
    function az_sql_db_classification_recommendation() {
    }
    /**
     * Disable sensitivity recommendations for a given column (recommendations are enabled by default on all columns).
     *
     * Syntax:
     * ```
     * az sql db classification recommendation disable --column
     *                                                 --schema
     *                                                 --table
     *                                                 [--ids]
     *                                                 [--name]
     *                                                 [--resource-group]
     *                                                 [--server]
     *                                                 [--subscription]
     * ```
     *
     * @param {string} column The name of the column.
     * @param {string} schema The name of the schema.
     * @param {string} table The name of the table.
     */
    az_sql_db_classification_recommendation.disable = function (column, schema, table) {
        return new az_sql_db_classification_recommendation_disable_command_builder("az sql db classification recommendation disable", 'az_sql_db_classification_recommendation_disable_command_result', column, schema, table);
    };
    /**
     * Enable sensitivity recommendations for a given column (recommendations are enabled by default on all columns).
     *
     * Syntax:
     * ```
     * az sql db classification recommendation enable --column
     *                                                --schema
     *                                                --table
     *                                                [--ids]
     *                                                [--name]
     *                                                [--resource-group]
     *                                                [--server]
     *                                                [--subscription]
     * ```
     *
     * @param {string} column The name of the column.
     * @param {string} schema The name of the schema.
     * @param {string} table The name of the table.
     */
    az_sql_db_classification_recommendation.enable = function (column, schema, table) {
        return new az_sql_db_classification_recommendation_enable_command_builder("az sql db classification recommendation enable", 'az_sql_db_classification_recommendation_enable_command_result', column, schema, table);
    };
    /**
     * List the recommended sensitivity classifications of a given database.
     *
     * Syntax:
     * ```
     * az sql db classification recommendation list [--filter]
     *                                              [--ids]
     *                                              [--include-disabled-recommendations]
     *                                              [--name]
     *                                              [--query-examples]
     *                                              [--resource-group]
     *                                              [--server]
     *                                              [--subscription]
     * ```
     */
    az_sql_db_classification_recommendation.list = function () {
        return new az_sql_db_classification_recommendation_list_command_builder("az sql db classification recommendation list", 'az_sql_db_classification_recommendation_list_command_result');
    };
    return az_sql_db_classification_recommendation;
}());
exports.az_sql_db_classification_recommendation = az_sql_db_classification_recommendation;
/** Manage sensitivity classifications. */
var az_sql_db_classification = /** @class */ (function () {
    function az_sql_db_classification() {
    }
    /**
     * Delete the sensitivity classification of a given column.
     *
     * Syntax:
     * ```
     * az sql db classification delete --column
     *                                 --schema
     *                                 --table
     *                                 [--ids]
     *                                 [--name]
     *                                 [--resource-group]
     *                                 [--server]
     *                                 [--subscription]
     * ```
     *
     * @param {string} column The name of the column.
     * @param {string} schema The name of the schema.
     * @param {string} table The name of the table.
     */
    az_sql_db_classification["delete"] = function (column, schema, table) {
        return new az_sql_db_classification_delete_command_builder("az sql db classification delete", 'az_sql_db_classification_delete_command_result', column, schema, table);
    };
    /**
     * Get the sensitivity classifications of a given database.
     *
     * Syntax:
     * ```
     * az sql db classification list [--filter]
     *                               [--ids]
     *                               [--name]
     *                               [--query-examples]
     *                               [--resource-group]
     *                               [--server]
     *                               [--subscription]
     * ```
     */
    az_sql_db_classification.list = function () {
        return new az_sql_db_classification_list_command_builder("az sql db classification list", 'az_sql_db_classification_list_command_result');
    };
    /**
     * Get the sensitivity classification of a given column.
     *
     * Syntax:
     * ```
     * az sql db classification show --column
     *                               --schema
     *                               --table
     *                               [--ids]
     *                               [--name]
     *                               [--query-examples]
     *                               [--resource-group]
     *                               [--server]
     *                               [--subscription]
     * ```
     *
     * @param {string} column The name of the column.
     * @param {string} schema The name of the schema.
     * @param {string} table The name of the table.
     */
    az_sql_db_classification.show = function (column, schema, table) {
        return new az_sql_db_classification_show_command_builder("az sql db classification show", 'az_sql_db_classification_show_command_result', column, schema, table);
    };
    /**
     * Update a columns's sensitivity classification.
     *
     * Syntax:
     * ```
     * az sql db classification update --column
     *                                 --schema
     *                                 --table
     *                                 [--ids]
     *                                 [--information-type]
     *                                 [--label]
     *                                 [--name]
     *                                 [--resource-group]
     *                                 [--server]
     *                                 [--subscription]
     * ```
     *
     * @param {string} column The name of the column.
     * @param {string} schema The name of the schema.
     * @param {string} table The name of the table.
     */
    az_sql_db_classification.update = function (column, schema, table) {
        return new az_sql_db_classification_update_command_builder("az sql db classification update", 'az_sql_db_classification_update_command_result', column, schema, table);
    };
    return az_sql_db_classification;
}());
exports.az_sql_db_classification = az_sql_db_classification;
/** Manage SQL database long term retention backups. */
var az_sql_db_ltr_backup = /** @class */ (function () {
    function az_sql_db_ltr_backup() {
    }
    /**
     * Delete a long term retention backup.
     *
     * Syntax:
     * ```
     * az sql db ltr-backup delete --database
     *                             --location
     *                             --name
     *                             --server
     *                             [--subscription]
     *                             [--yes]
     * ```
     *
     * @param {string} database Name of the Azure SQL Database. If specified (along with server name), retrieves all requested backups under this database.
     * @param {string} location The location of the desired backups.
     * @param {string} name The name of the LTR backup. Use 'az sql db ltr-backup show' or 'az sql db ltr-backup list' for backup name.
     * @param {string} server Name of the Azure SQL Server. If specified, retrieves all requested backups under this server.
     */
    az_sql_db_ltr_backup["delete"] = function (database, location, name, server) {
        return new az_sql_db_ltr_backup_delete_command_builder("az sql db ltr-backup delete", 'az_sql_db_ltr_backup_delete_command_result', database, location, name, server);
    };
    /**
     * List the long term retention backups for a location, server or database.
     *
     * Syntax:
     * ```
     * az sql db ltr-backup list --location
     *                           [--database]
     *                           [--database-state]
     *                           [--latest]
     *                           [--query-examples]
     *                           [--resource-group]
     *                           [--server]
     *                           [--subscription]
     * ```
     *
     * @param {string} location The location of the desired backups.
     */
    az_sql_db_ltr_backup.list = function (location) {
        return new az_sql_db_ltr_backup_list_command_builder("az sql db ltr-backup list", 'az_sql_db_ltr_backup_list_command_result', location);
    };
    /**
     * Restore a long term retention backup to a new database.
     *
     * Syntax:
     * ```
     * az sql db ltr-backup restore --backup-id
     *                              --dest-database
     *                              --dest-resource-group
     *                              --dest-server
     *                              [--no-wait]
     *                              [--subscription]
     * ```
     *
     * @param {string} backupId The resource id of the long term retention backup to be restored. Use 'az sql db ltr-backup show' or 'az sql db ltr-backup list' for backup id.
     * @param {string} destDatabase Name of the database that will be created as the restore destination.
     * @param {string} destResourceGroup Name of the resource group of the server to restore database to.
     * @param {string} destServer Name of the server to restore database to.
     */
    az_sql_db_ltr_backup.restore = function (backupId, destDatabase, destResourceGroup, destServer) {
        return new az_sql_db_ltr_backup_restore_command_builder("az sql db ltr-backup restore", 'az_sql_db_ltr_backup_restore_command_result', backupId, destDatabase, destResourceGroup, destServer);
    };
    /**
     * Get a long term retention backup for a database.
     *
     * Syntax:
     * ```
     * az sql db ltr-backup show --database
     *                           --location
     *                           --name
     *                           --server
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} database Name of the Azure SQL Database. If specified (along with server name), retrieves all requested backups under this database.
     * @param {string} location The location of the desired backups.
     * @param {string} name The name of the LTR backup. Use 'az sql db ltr-backup show' or 'az sql db ltr-backup list' for backup name.
     * @param {string} server Name of the Azure SQL Server. If specified, retrieves all requested backups under this server.
     */
    az_sql_db_ltr_backup.show = function (database, location, name, server) {
        return new az_sql_db_ltr_backup_show_command_builder("az sql db ltr-backup show", 'az_sql_db_ltr_backup_show_command_result', database, location, name, server);
    };
    /**
     * Place the CLI in a waiting state until a condition of the database is met.
     *
     * Syntax:
     * ```
     * az sql db ltr-backup wait [--created]
     *                           [--custom]
     *                           [--deleted]
     *                           [--exists]
     *                           [--ids]
     *                           [--interval]
     *                           [--name]
     *                           [--resource-group]
     *                           [--server]
     *                           [--subscription]
     *                           [--timeout]
     *                           [--updated]
     * ```
     */
    az_sql_db_ltr_backup.wait = function () {
        return new az_sql_db_ltr_backup_wait_command_builder("az sql db ltr-backup wait", 'az_sql_db_ltr_backup_wait_command_result');
    };
    return az_sql_db_ltr_backup;
}());
exports.az_sql_db_ltr_backup = az_sql_db_ltr_backup;
/** Manage SQL database long term retention policy. */
var az_sql_db_ltr_policy = /** @class */ (function () {
    function az_sql_db_ltr_policy() {
    }
    /**
     * Update long term retention settings for a database.
     *
     * Syntax:
     * ```
     * az sql db ltr-policy set [--ids]
     *                          [--monthly-retention]
     *                          [--name]
     *                          [--resource-group]
     *                          [--server]
     *                          [--subscription]
     *                          [--week-of-year]
     *                          [--weekly-retention]
     *                          [--yearly-retention]
     * ```
     */
    az_sql_db_ltr_policy.set = function () {
        return new az_sql_db_ltr_policy_set_command_builder("az sql db ltr-policy set", 'az_sql_db_ltr_policy_set_command_result');
    };
    /**
     * Show the long term retention policy for a database.
     *
     * Syntax:
     * ```
     * az sql db ltr-policy show [--ids]
     *                           [--name]
     *                           [--query-examples]
     *                           [--resource-group]
     *                           [--server]
     *                           [--subscription]
     * ```
     */
    az_sql_db_ltr_policy.show = function () {
        return new az_sql_db_ltr_policy_show_command_builder("az sql db ltr-policy show", 'az_sql_db_ltr_policy_show_command_result');
    };
    return az_sql_db_ltr_policy;
}());
exports.az_sql_db_ltr_policy = az_sql_db_ltr_policy;
/** Manage operations on a database. */
var az_sql_db_op = /** @class */ (function () {
    function az_sql_db_op() {
    }
    /**
     * Cancels the asynchronous operation on the database.
     *
     * Syntax:
     * ```
     * az sql db op cancel --name
     *                     [--database]
     *                     [--ids]
     *                     [--resource-group]
     *                     [--server]
     *                     [--subscription]
     * ```
     *
     * @param {string} name The unique name of the operation to cancel.
     */
    az_sql_db_op.cancel = function (name) {
        return new az_sql_db_op_cancel_command_builder("az sql db op cancel", 'az_sql_db_op_cancel_command_result', name);
    };
    /**
     * Gets a list of operations performed on the database.
     *
     * Syntax:
     * ```
     * az sql db op list [--database]
     *                   [--ids]
     *                   [--query-examples]
     *                   [--resource-group]
     *                   [--server]
     *                   [--subscription]
     * ```
     */
    az_sql_db_op.list = function () {
        return new az_sql_db_op_list_command_builder("az sql db op list", 'az_sql_db_op_list_command_result');
    };
    return az_sql_db_op;
}());
exports.az_sql_db_op = az_sql_db_op;
/** Manage replication between databases. */
var az_sql_db_replica = /** @class */ (function () {
    function az_sql_db_replica() {
    }
    /**
     * Create a database as a readable secondary replica of an existing database.
     *
     * Syntax:
     * ```
     * az sql db replica create --name
     *                          --partner-server
     *                          --resource-group
     *                          --server
     *                          [--auto-pause-delay]
     *                          [--capacity]
     *                          [--compute-model {Provisioned, Serverless}]
     *                          [--elastic-pool]
     *                          [--family]
     *                          [--license-type {BasePrice, LicenseIncluded}]
     *                          [--min-capacity]
     *                          [--no-wait]
     *                          [--partner-resource-group]
     *                          [--read-replicas]
     *                          [--read-scale {Disabled, Enabled}]
     *                          [--service-objective]
     *                          [--subscription]
     *                          [--tags]
     *                          [--zone-redundant {false, true}]
     * ```
     *
     * @param {string} name Name of the Azure SQL Database.
     * @param {string} partnerServer Name of the server to create the new replica in.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} server Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`.
     */
    az_sql_db_replica.create = function (name, partnerServer, resourceGroup, server) {
        return new az_sql_db_replica_create_command_builder("az sql db replica create", 'az_sql_db_replica_create_command_result', name, partnerServer, resourceGroup, server);
    };
    /**
     * Permanently stop data replication between two database replicas.
     *
     * Syntax:
     * ```
     * az sql db replica delete-link --partner-server
     *                               [--ids]
     *                               [--name]
     *                               [--partner-resource-group]
     *                               [--resource-group]
     *                               [--server]
     *                               [--subscription]
     *                               [--yes]
     * ```
     *
     * @param {string} partnerServer Name of the server that the other replica is in.
     */
    az_sql_db_replica.delete_link = function (partnerServer) {
        return new az_sql_db_replica_delete_link_command_builder("az sql db replica delete-link", 'az_sql_db_replica_delete_link_command_result', partnerServer);
    };
    /**
     * List the replicas of a database and their replication status.
     *
     * Syntax:
     * ```
     * az sql db replica list-links [--ids]
     *                              [--name]
     *                              [--resource-group]
     *                              [--server]
     *                              [--subscription]
     * ```
     */
    az_sql_db_replica.list_links = function () {
        return new az_sql_db_replica_list_links_command_builder("az sql db replica list-links", 'az_sql_db_replica_list_links_command_result');
    };
    /**
     * Set the primary replica database by failing over from the current primary replica database.
     *
     * Syntax:
     * ```
     * az sql db replica set-primary [--allow-data-loss]
     *                               [--ids]
     *                               [--name]
     *                               [--resource-group]
     *                               [--server]
     *                               [--subscription]
     * ```
     */
    az_sql_db_replica.set_primary = function () {
        return new az_sql_db_replica_set_primary_command_builder("az sql db replica set-primary", 'az_sql_db_replica_set_primary_command_result');
    };
    return az_sql_db_replica;
}());
exports.az_sql_db_replica = az_sql_db_replica;
/** Manage a database's transparent data encryption. */
var az_sql_db_tde = /** @class */ (function () {
    function az_sql_db_tde() {
    }
    /**
     * Returns a database's transparent data encryption operation result.
     *
     * Syntax:
     * ```
     * az sql db tde list-activity [--database]
     *                             [--ids]
     *                             [--resource-group]
     *                             [--server]
     *                             [--subscription]
     * ```
     */
    az_sql_db_tde.list_activity = function () {
        return new az_sql_db_tde_list_activity_command_builder("az sql db tde list-activity", 'az_sql_db_tde_list_activity_command_result');
    };
    /**
     * Sets a database's transparent data encryption configuration.
     *
     * Syntax:
     * ```
     * az sql db tde set --status {Disabled, Enabled}
     *                   [--database]
     *                   [--ids]
     *                   [--resource-group]
     *                   [--server]
     *                   [--subscription]
     * ```
     *
     * @param {'Disabled' | 'Enabled'} status Status of the transparent data encryption.
     */
    az_sql_db_tde.set = function (status) {
        return new az_sql_db_tde_set_command_builder("az sql db tde set", 'az_sql_db_tde_set_command_result', status);
    };
    /**
     * Gets a database's transparent data encryption configuration.
     *
     * Syntax:
     * ```
     * az sql db tde show [--database]
     *                    [--ids]
     *                    [--query-examples]
     *                    [--resource-group]
     *                    [--server]
     *                    [--subscription]
     * ```
     */
    az_sql_db_tde.show = function () {
        return new az_sql_db_tde_show_command_builder("az sql db tde show", 'az_sql_db_tde_show_command_result');
    };
    return az_sql_db_tde;
}());
exports.az_sql_db_tde = az_sql_db_tde;
/** Manage a database's threat detection policies. */
var az_sql_db_threat_policy = /** @class */ (function () {
    function az_sql_db_threat_policy() {
    }
    /**
     * Gets a database's threat detection policy.
     *
     * Syntax:
     * ```
     * az sql db threat-policy show [--ids]
     *                              [--name]
     *                              [--query-examples]
     *                              [--resource-group]
     *                              [--server]
     *                              [--subscription]
     * ```
     */
    az_sql_db_threat_policy.show = function () {
        return new az_sql_db_threat_policy_show_command_builder("az sql db threat-policy show", 'az_sql_db_threat_policy_show_command_result');
    };
    /**
     * Update a database's threat detection policy.
     *
     * Syntax:
     * ```
     * az sql db threat-policy update [--add]
     *                                [--disabled-alerts]
     *                                [--email-account-admins {Disabled, Enabled}]
     *                                [--email-addresses]
     *                                [--force-string]
     *                                [--ids]
     *                                [--name]
     *                                [--remove]
     *                                [--resource-group]
     *                                [--retention-days]
     *                                [--server]
     *                                [--set]
     *                                [--state {Disabled, Enabled, New}]
     *                                [--storage-account]
     *                                [--storage-endpoint]
     *                                [--storage-key]
     *                                [--subscription]
     * ```
     */
    az_sql_db_threat_policy.update = function () {
        return new az_sql_db_threat_policy_update_command_builder("az sql db threat-policy update", 'az_sql_db_threat_policy_update_command_result');
    };
    return az_sql_db_threat_policy;
}());
exports.az_sql_db_threat_policy = az_sql_db_threat_policy;
/** Manage databases. */
var az_sql_db = /** @class */ (function () {
    function az_sql_db() {
    }
    /**
     * Create a copy of a database.
     *
     * Syntax:
     * ```
     * az sql db copy --dest-name
     *                [--auto-pause-delay]
     *                [--capacity]
     *                [--compute-model {Provisioned, Serverless}]
     *                [--dest-resource-group]
     *                [--dest-server]
     *                [--elastic-pool]
     *                [--family]
     *                [--ids]
     *                [--license-type {BasePrice, LicenseIncluded}]
     *                [--min-capacity]
     *                [--name]
     *                [--no-wait]
     *                [--read-replicas]
     *                [--read-scale {Disabled, Enabled}]
     *                [--resource-group]
     *                [--server]
     *                [--service-objective]
     *                [--subscription]
     *                [--tags]
     *                [--zone-redundant {false, true}]
     * ```
     *
     * @param {string} destName Name of the database that will be created as the copy destination.
     */
    az_sql_db.copy = function (destName) {
        return new az_sql_db_copy_command_builder("az sql db copy", 'az_sql_db_copy_command_result', destName);
    };
    /**
     * Create a database.
     *
     * Syntax:
     * ```
     * az sql db create --name
     *                  --resource-group
     *                  --server
     *                  [--auto-pause-delay]
     *                  [--capacity]
     *                  [--catalog-collation {DATABASE_DEFAULT, SQL_Latin1_General_CP1_CI_AS}]
     *                  [--collation]
     *                  [--compute-model {Provisioned, Serverless}]
     *                  [--edition]
     *                  [--elastic-pool]
     *                  [--family]
     *                  [--license-type {BasePrice, LicenseIncluded}]
     *                  [--max-size]
     *                  [--min-capacity]
     *                  [--no-wait]
     *                  [--read-replicas]
     *                  [--read-scale {Disabled, Enabled}]
     *                  [--sample-name {AdventureWorksLT}]
     *                  [--service-objective]
     *                  [--subscription]
     *                  [--tags]
     *                  [--zone-redundant {false, true}]
     * ```
     *
     * @param {string} name Name of the Azure SQL Database.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} server Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`.
     */
    az_sql_db.create = function (name, resourceGroup, server) {
        return new az_sql_db_create_command_builder("az sql db create", 'az_sql_db_create_command_result', name, resourceGroup, server);
    };
    /**
     * Delete a database.
     *
     * Syntax:
     * ```
     * az sql db delete [--ids]
     *                  [--name]
     *                  [--no-wait]
     *                  [--resource-group]
     *                  [--server]
     *                  [--subscription]
     *                  [--yes]
     * ```
     */
    az_sql_db["delete"] = function () {
        return new az_sql_db_delete_command_builder("az sql db delete", 'az_sql_db_delete_command_result');
    };
    /**
     * Export a database to a bacpac.
     *
     * Syntax:
     * ```
     * az sql db export --admin-password
     *                  --admin-user
     *                  --storage-key
     *                  --storage-key-type {SharedAccessKey, StorageAccessKey}
     *                  --storage-uri
     *                  [--auth-type {ADPassword, SQL}]
     *                  [--ids]
     *                  [--name]
     *                  [--resource-group]
     *                  [--server]
     *                  [--subscription]
     * ```
     *
     * @param {string} adminPassword Required. Administrator login password.
     * @param {string} adminUser Required. Administrator login name.
     * @param {string} storageKey Required. Storage key.
     * @param {'SharedAccessKey' | 'StorageAccessKey'} storageKeyType Required. Storage key type.
     * @param {string} storageUri Required. Storage Uri.
     */
    az_sql_db["export"] = function (adminPassword, adminUser, storageKey, storageKeyType, storageUri) {
        return new az_sql_db_export_command_builder("az sql db export", 'az_sql_db_export_command_result', adminPassword, adminUser, storageKey, storageKeyType, storageUri);
    };
    /**
     * Imports a bacpac into an existing database.
     *
     * Syntax:
     * ```
     * az sql db import --admin-password
     *                  --admin-user
     *                  --storage-key
     *                  --storage-key-type {SharedAccessKey, StorageAccessKey}
     *                  --storage-uri
     *                  [--auth-type {ADPassword, SQL}]
     *                  [--ids]
     *                  [--name]
     *                  [--resource-group]
     *                  [--server]
     *                  [--subscription]
     * ```
     *
     * @param {string} adminPassword Required. Administrator login password.
     * @param {string} adminUser Required. Administrator login name.
     * @param {string} storageKey Required. Storage key.
     * @param {'SharedAccessKey' | 'StorageAccessKey'} storageKeyType Required. Storage key type.
     * @param {string} storageUri Required. Storage Uri.
     */
    az_sql_db["import"] = function (adminPassword, adminUser, storageKey, storageKeyType, storageUri) {
        return new az_sql_db_import_command_builder("az sql db import", 'az_sql_db_import_command_result', adminPassword, adminUser, storageKey, storageKeyType, storageUri);
    };
    /**
     * List databases a server or elastic pool.
     *
     * Syntax:
     * ```
     * az sql db list [--elastic-pool]
     *                [--ids]
     *                [--query-examples]
     *                [--resource-group]
     *                [--server]
     *                [--subscription]
     * ```
     */
    az_sql_db.list = function () {
        return new az_sql_db_list_command_builder("az sql db list", 'az_sql_db_list_command_result');
    };
    /**
     * Gets a list of deleted databases that can be restored.
     *
     * Syntax:
     * ```
     * az sql db list-deleted [--ids]
     *                        [--resource-group]
     *                        [--server]
     *                        [--subscription]
     * ```
     */
    az_sql_db.list_deleted = function () {
        return new az_sql_db_list_deleted_command_builder("az sql db list-deleted", 'az_sql_db_list_deleted_command_result');
    };
    /**
     * Show database editions available for the currently active subscription.
     *
     * Syntax:
     * ```
     * az sql db list-editions --location
     *                         [--available]
     *                         [--dtu]
     *                         [--edition]
     *                         [--service-objective]
     *                         [--show-details {max-size}]
     *                         [--subscription]
     *                         [--vcores]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     */
    az_sql_db.list_editions = function (location) {
        return new az_sql_db_list_editions_command_builder("az sql db list-editions", 'az_sql_db_list_editions_command_result', location);
    };
    /**
     * Returns database usages.
     *
     * Syntax:
     * ```
     * az sql db list-usages [--ids]
     *                       [--name]
     *                       [--resource-group]
     *                       [--server]
     *                       [--subscription]
     * ```
     */
    az_sql_db.list_usages = function () {
        return new az_sql_db_list_usages_command_builder("az sql db list-usages", 'az_sql_db_list_usages_command_result');
    };
    /**
     * Rename a database.
     *
     * Syntax:
     * ```
     * az sql db rename --new-name
     *                  [--ids]
     *                  [--name]
     *                  [--resource-group]
     *                  [--server]
     *                  [--subscription]
     * ```
     *
     * @param {string} newName The new name that the database will be renamed to.
     */
    az_sql_db.rename = function (newName) {
        return new az_sql_db_rename_command_builder("az sql db rename", 'az_sql_db_rename_command_result', newName);
    };
    /**
     * Create a new database by restoring from a backup.
     *
     * Syntax:
     * ```
     * az sql db restore --dest-name
     *                   [--auto-pause-delay]
     *                   [--capacity]
     *                   [--compute-model {Provisioned, Serverless}]
     *                   [--deleted-time]
     *                   [--edition]
     *                   [--elastic-pool]
     *                   [--family]
     *                   [--ids]
     *                   [--license-type {BasePrice, LicenseIncluded}]
     *                   [--min-capacity]
     *                   [--name]
     *                   [--no-wait]
     *                   [--read-replicas]
     *                   [--read-scale {Disabled, Enabled}]
     *                   [--resource-group]
     *                   [--server]
     *                   [--service-objective]
     *                   [--subscription]
     *                   [--tags]
     *                   [--time]
     *                   [--zone-redundant {false, true}]
     * ```
     *
     * @param {string} destName Name of the database that will be created as the restore destination.
     */
    az_sql_db.restore = function (destName) {
        return new az_sql_db_restore_command_builder("az sql db restore", 'az_sql_db_restore_command_result', destName);
    };
    /**
     * Get the details for a database.
     *
     * Syntax:
     * ```
     * az sql db show [--ids]
     *                [--name]
     *                [--query-examples]
     *                [--resource-group]
     *                [--server]
     *                [--subscription]
     * ```
     */
    az_sql_db.show = function () {
        return new az_sql_db_show_command_builder("az sql db show", 'az_sql_db_show_command_result');
    };
    /**
     * Generates a connection string to a database.
     *
     * Syntax:
     * ```
     * az sql db show-connection-string --client {ado.net, jdbc, odbc, php, php_pdo, sqlcmd}
     *                                  [--auth-type {ADIntegrated, ADPassword, SqlPassword}]
     *                                  [--ids]
     *                                  [--name]
     *                                  [--server]
     *                                  [--subscription]
     * ```
     *
     * @param {'ado.net' | 'jdbc' | 'odbc' | 'php' | 'php_pdo' | 'sqlcmd'} client Type of client connection provider.
     */
    az_sql_db.show_connection_string = function (client) {
        return new az_sql_db_show_connection_string_command_builder("az sql db show-connection-string", 'az_sql_db_show_connection_string_command_result', client);
    };
    /**
     * Update a database.
     *
     * Syntax:
     * ```
     * az sql db update [--add]
     *                  [--auto-pause-delay]
     *                  [--capacity]
     *                  [--compute-model {Provisioned, Serverless}]
     *                  [--edition]
     *                  [--elastic-pool]
     *                  [--family]
     *                  [--force-string]
     *                  [--ids]
     *                  [--max-size]
     *                  [--min-capacity]
     *                  [--name]
     *                  [--no-wait]
     *                  [--read-replicas]
     *                  [--read-scale {Disabled, Enabled}]
     *                  [--remove]
     *                  [--resource-group]
     *                  [--server]
     *                  [--service-objective]
     *                  [--set]
     *                  [--subscription]
     *                  [--zone-redundant {false, true}]
     * ```
     */
    az_sql_db.update = function () {
        return new az_sql_db_update_command_builder("az sql db update", 'az_sql_db_update_command_result');
    };
    return az_sql_db;
}());
exports.az_sql_db = az_sql_db;
/** Manage data warehouses. */
var az_sql_dw = /** @class */ (function () {
    function az_sql_dw() {
    }
    /**
     * Create a data warehouse.
     *
     * Syntax:
     * ```
     * az sql dw create --name
     *                  --resource-group
     *                  --server
     *                  [--collation]
     *                  [--max-size]
     *                  [--no-wait]
     *                  [--read-replica-count]
     *                  [--service-objective]
     *                  [--subscription]
     *                  [--tags]
     *                  [--zone-redundant {false, true}]
     * ```
     *
     * @param {string} name Name of the data warehouse.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} server Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`.
     */
    az_sql_dw.create = function (name, resourceGroup, server) {
        return new az_sql_dw_create_command_builder("az sql dw create", 'az_sql_dw_create_command_result', name, resourceGroup, server);
    };
    /**
     * Delete a data warehouse.
     *
     * Syntax:
     * ```
     * az sql dw delete [--ids]
     *                  [--name]
     *                  [--no-wait]
     *                  [--resource-group]
     *                  [--server]
     *                  [--subscription]
     *                  [--yes]
     * ```
     */
    az_sql_dw["delete"] = function () {
        return new az_sql_dw_delete_command_builder("az sql dw delete", 'az_sql_dw_delete_command_result');
    };
    /**
     * List data warehouses for a server.
     *
     * Syntax:
     * ```
     * az sql dw list [--ids]
     *                [--query-examples]
     *                [--resource-group]
     *                [--server]
     *                [--subscription]
     * ```
     */
    az_sql_dw.list = function () {
        return new az_sql_dw_list_command_builder("az sql dw list", 'az_sql_dw_list_command_result');
    };
    /**
     * Pauses a datawarehouse.
     *
     * Syntax:
     * ```
     * az sql dw pause [--ids]
     *                 [--name]
     *                 [--resource-group]
     *                 [--server]
     *                 [--subscription]
     * ```
     */
    az_sql_dw.pause = function () {
        return new az_sql_dw_pause_command_builder("az sql dw pause", 'az_sql_dw_pause_command_result');
    };
    /**
     * Resumes a datawarehouse.
     *
     * Syntax:
     * ```
     * az sql dw resume [--ids]
     *                  [--name]
     *                  [--resource-group]
     *                  [--server]
     *                  [--subscription]
     * ```
     */
    az_sql_dw.resume = function () {
        return new az_sql_dw_resume_command_builder("az sql dw resume", 'az_sql_dw_resume_command_result');
    };
    /**
     * Get the details for a data warehouse.
     *
     * Syntax:
     * ```
     * az sql dw show [--ids]
     *                [--name]
     *                [--query-examples]
     *                [--resource-group]
     *                [--server]
     *                [--subscription]
     * ```
     */
    az_sql_dw.show = function () {
        return new az_sql_dw_show_command_builder("az sql dw show", 'az_sql_dw_show_command_result');
    };
    /**
     * Update a data warehouse.
     *
     * Syntax:
     * ```
     * az sql dw update [--add]
     *                  [--force-string]
     *                  [--ids]
     *                  [--max-size]
     *                  [--name]
     *                  [--no-wait]
     *                  [--remove]
     *                  [--resource-group]
     *                  [--server]
     *                  [--service-objective]
     *                  [--set]
     *                  [--subscription]
     * ```
     */
    az_sql_dw.update = function () {
        return new az_sql_dw_update_command_builder("az sql dw update", 'az_sql_dw_update_command_result');
    };
    return az_sql_dw;
}());
exports.az_sql_dw = az_sql_dw;
/** Manage operations on an elastic pool. */
var az_sql_elastic_pool_op = /** @class */ (function () {
    function az_sql_elastic_pool_op() {
    }
    /**
     * Cancels the asynchronous operation on the elastic pool.
     *
     * Syntax:
     * ```
     * az sql elastic-pool op cancel --name
     *                               [--elastic-pool]
     *                               [--ids]
     *                               [--resource-group]
     *                               [--server]
     *                               [--subscription]
     * ```
     *
     * @param {string} name The unique name of the operation to cancel.
     */
    az_sql_elastic_pool_op.cancel = function (name) {
        return new az_sql_elastic_pool_op_cancel_command_builder("az sql elastic-pool op cancel", 'az_sql_elastic_pool_op_cancel_command_result', name);
    };
    /**
     * Gets a list of operations performed on the elastic pool.
     *
     * Syntax:
     * ```
     * az sql elastic-pool op list [--elastic-pool]
     *                             [--ids]
     *                             [--query-examples]
     *                             [--resource-group]
     *                             [--server]
     *                             [--subscription]
     * ```
     */
    az_sql_elastic_pool_op.list = function () {
        return new az_sql_elastic_pool_op_list_command_builder("az sql elastic-pool op list", 'az_sql_elastic_pool_op_list_command_result');
    };
    return az_sql_elastic_pool_op;
}());
exports.az_sql_elastic_pool_op = az_sql_elastic_pool_op;
/** Manage elastic pools. */
var az_sql_elastic_pool = /** @class */ (function () {
    function az_sql_elastic_pool() {
    }
    /**
     * Create an elastic pool.
     *
     * Syntax:
     * ```
     * az sql elastic-pool create --name
     *                            --resource-group
     *                            --server
     *                            [--capacity]
     *                            [--db-dtu-max]
     *                            [--db-dtu-min]
     *                            [--edition]
     *                            [--family]
     *                            [--license-type {BasePrice, LicenseIncluded}]
     *                            [--max-size]
     *                            [--no-wait]
     *                            [--subscription]
     *                            [--tags]
     *                            [--zone-redundant {false, true}]
     * ```
     *
     * @param {string} name The name of the elastic pool.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} server Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`.
     */
    az_sql_elastic_pool.create = function (name, resourceGroup, server) {
        return new az_sql_elastic_pool_create_command_builder("az sql elastic-pool create", 'az_sql_elastic_pool_create_command_result', name, resourceGroup, server);
    };
    /**
     * Deletes an elastic pool.
     *
     * Syntax:
     * ```
     * az sql elastic-pool delete [--ids]
     *                            [--name]
     *                            [--no-wait]
     *                            [--resource-group]
     *                            [--server]
     *                            [--subscription]
     * ```
     */
    az_sql_elastic_pool["delete"] = function () {
        return new az_sql_elastic_pool_delete_command_builder("az sql elastic-pool delete", 'az_sql_elastic_pool_delete_command_result');
    };
    /**
     * Gets all elastic pools in a server.
     *
     * Syntax:
     * ```
     * az sql elastic-pool list [--ids]
     *                          [--query-examples]
     *                          [--resource-group]
     *                          [--server]
     *                          [--skip]
     *                          [--subscription]
     * ```
     */
    az_sql_elastic_pool.list = function () {
        return new az_sql_elastic_pool_list_command_builder("az sql elastic-pool list", 'az_sql_elastic_pool_list_command_result');
    };
    /**
     * Gets a list of databases in an elastic pool.
     *
     * Syntax:
     * ```
     * az sql elastic-pool list-dbs [--ids]
     *                              [--name]
     *                              [--resource-group]
     *                              [--server]
     *                              [--subscription]
     * ```
     */
    az_sql_elastic_pool.list_dbs = function () {
        return new az_sql_elastic_pool_list_dbs_command_builder("az sql elastic-pool list-dbs", 'az_sql_elastic_pool_list_dbs_command_result');
    };
    /**
     * List elastic pool editions available for the active subscription.
     *
     * Syntax:
     * ```
     * az sql elastic-pool list-editions --location
     *                                   [--available]
     *                                   [--dtu]
     *                                   [--edition]
     *                                   [--show-details {db-max-dtu, db-max-size, db-min-dtu, max-size}]
     *                                   [--subscription]
     *                                   [--vcores]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     */
    az_sql_elastic_pool.list_editions = function (location) {
        return new az_sql_elastic_pool_list_editions_command_builder("az sql elastic-pool list-editions", 'az_sql_elastic_pool_list_editions_command_result', location);
    };
    /**
     * Gets an elastic pool.
     *
     * Syntax:
     * ```
     * az sql elastic-pool show [--ids]
     *                          [--name]
     *                          [--query-examples]
     *                          [--resource-group]
     *                          [--server]
     *                          [--subscription]
     * ```
     */
    az_sql_elastic_pool.show = function () {
        return new az_sql_elastic_pool_show_command_builder("az sql elastic-pool show", 'az_sql_elastic_pool_show_command_result');
    };
    /**
     * Update an elastic pool.
     *
     * Syntax:
     * ```
     * az sql elastic-pool update [--add]
     *                            [--capacity]
     *                            [--db-dtu-max]
     *                            [--db-dtu-min]
     *                            [--edition]
     *                            [--family]
     *                            [--force-string]
     *                            [--ids]
     *                            [--max-size]
     *                            [--name]
     *                            [--no-wait]
     *                            [--remove]
     *                            [--resource-group]
     *                            [--server]
     *                            [--set]
     *                            [--subscription]
     *                            [--zone-redundant {false, true}]
     * ```
     */
    az_sql_elastic_pool.update = function () {
        return new az_sql_elastic_pool_update_command_builder("az sql elastic-pool update", 'az_sql_elastic_pool_update_command_result');
    };
    return az_sql_elastic_pool;
}());
exports.az_sql_elastic_pool = az_sql_elastic_pool;
/** Manage SQL Failover Groups. */
var az_sql_failover_group = /** @class */ (function () {
    function az_sql_failover_group() {
    }
    /**
     * Creates a failover group.
     *
     * Syntax:
     * ```
     * az sql failover-group create --name
     *                              --partner-server
     *                              --resource-group
     *                              --server
     *                              [--add-db]
     *                              [--failover-policy {Automatic, Manual}]
     *                              [--grace-period]
     *                              [--partner-resource-group]
     *                              [--subscription]
     * ```
     *
     * @param {string} name The name of the Failover Group.
     * @param {string} partnerServer The name of the partner server of a Failover Group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} server Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`.
     */
    az_sql_failover_group.create = function (name, partnerServer, resourceGroup, server) {
        return new az_sql_failover_group_create_command_builder("az sql failover-group create", 'az_sql_failover_group_create_command_result', name, partnerServer, resourceGroup, server);
    };
    /**
     * Deletes a failover group.
     *
     * Syntax:
     * ```
     * az sql failover-group delete --name
     *                              [--ids]
     *                              [--resource-group]
     *                              [--server]
     *                              [--subscription]
     * ```
     *
     * @param {string} name The name of the Failover Group.
     */
    az_sql_failover_group["delete"] = function (name) {
        return new az_sql_failover_group_delete_command_builder("az sql failover-group delete", 'az_sql_failover_group_delete_command_result', name);
    };
    /**
     * Lists the failover groups in a server.
     *
     * Syntax:
     * ```
     * az sql failover-group list [--ids]
     *                            [--query-examples]
     *                            [--resource-group]
     *                            [--server]
     *                            [--subscription]
     * ```
     */
    az_sql_failover_group.list = function () {
        return new az_sql_failover_group_list_command_builder("az sql failover-group list", 'az_sql_failover_group_list_command_result');
    };
    /**
     * Set the primary of the failover group by failing over all databases from the current primary server.
     *
     * Syntax:
     * ```
     * az sql failover-group set-primary --name
     *                                   [--allow-data-loss]
     *                                   [--ids]
     *                                   [--resource-group]
     *                                   [--server]
     *                                   [--subscription]
     * ```
     *
     * @param {string} name The name of the Failover Group.
     */
    az_sql_failover_group.set_primary = function (name) {
        return new az_sql_failover_group_set_primary_command_builder("az sql failover-group set-primary", 'az_sql_failover_group_set_primary_command_result', name);
    };
    /**
     * Gets a failover group.
     *
     * Syntax:
     * ```
     * az sql failover-group show --name
     *                            [--ids]
     *                            [--query-examples]
     *                            [--resource-group]
     *                            [--server]
     *                            [--subscription]
     * ```
     *
     * @param {string} name The name of the Failover Group.
     */
    az_sql_failover_group.show = function (name) {
        return new az_sql_failover_group_show_command_builder("az sql failover-group show", 'az_sql_failover_group_show_command_result', name);
    };
    /**
     * Updates the failover group.
     *
     * Syntax:
     * ```
     * az sql failover-group update --name
     *                              [--add]
     *                              [--add-db]
     *                              [--failover-policy {Automatic, Manual}]
     *                              [--force-string]
     *                              [--grace-period]
     *                              [--ids]
     *                              [--remove]
     *                              [--remove-db]
     *                              [--resource-group]
     *                              [--server]
     *                              [--set]
     *                              [--subscription]
     * ```
     *
     * @param {string} name The name of the Failover Group.
     */
    az_sql_failover_group.update = function (name) {
        return new az_sql_failover_group_update_command_builder("az sql failover-group update", 'az_sql_failover_group_update_command_result', name);
    };
    return az_sql_failover_group;
}());
exports.az_sql_failover_group = az_sql_failover_group;
/** Manage SQL Instance Failover Groups. */
var az_sql_instance_failover_group = /** @class */ (function () {
    function az_sql_instance_failover_group() {
    }
    /**
     * Creates an instance failover group between two connected managed instances.
     *
     * Syntax:
     * ```
     * az sql instance-failover-group create --mi
     *                                       --name
     *                                       --partner-mi
     *                                       --partner-resource-group
     *                                       --resource-group
     *                                       [--failover-policy {Automatic, Manual}]
     *                                       [--grace-period]
     *                                       [--subscription]
     * ```
     *
     * @param {string} sourceMi Name of the Azure SQL managed instance.
     * @param {string} name The name of the Instance Failover Group.
     * @param {string} partnerMi The name of the partner managed instance of a Instance Failover Group.
     * @param {string} partnerResourceGroup The name of the resource group of the partner managed instance.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sql_instance_failover_group.create = function (sourceMi, name, partnerMi, partnerResourceGroup, resourceGroup) {
        return new az_sql_instance_failover_group_create_command_builder("az sql instance-failover-group create", 'az_sql_instance_failover_group_create_command_result', sourceMi, name, partnerMi, partnerResourceGroup, resourceGroup);
    };
    /**
     * Deletes a failover group.
     *
     * Syntax:
     * ```
     * az sql instance-failover-group delete --location
     *                                       --name
     *                                       --resource-group
     *                                       [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name The name of the Instance Failover Group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sql_instance_failover_group["delete"] = function (location, name, resourceGroup) {
        return new az_sql_instance_failover_group_delete_command_builder("az sql instance-failover-group delete", 'az_sql_instance_failover_group_delete_command_result', location, name, resourceGroup);
    };
    /**
     * Set the primary of the instance failover group by failing over all databases from the current primary managed instance.
     *
     * Syntax:
     * ```
     * az sql instance-failover-group set-primary --location
     *                                            --name
     *                                            --resource-group
     *                                            [--allow-data-loss]
     *                                            [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name The name of the Instance Failover Group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sql_instance_failover_group.set_primary = function (location, name, resourceGroup) {
        return new az_sql_instance_failover_group_set_primary_command_builder("az sql instance-failover-group set-primary", 'az_sql_instance_failover_group_set_primary_command_result', location, name, resourceGroup);
    };
    /**
     * Gets a failover group.
     *
     * Syntax:
     * ```
     * az sql instance-failover-group show --location
     *                                     --name
     *                                     --resource-group
     *                                     [--query-examples]
     *                                     [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name The name of the Instance Failover Group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sql_instance_failover_group.show = function (location, name, resourceGroup) {
        return new az_sql_instance_failover_group_show_command_builder("az sql instance-failover-group show", 'az_sql_instance_failover_group_show_command_result', location, name, resourceGroup);
    };
    /**
     * Updates the instance failover group.
     *
     * Syntax:
     * ```
     * az sql instance-failover-group update --location
     *                                       --name
     *                                       --resource-group
     *                                       [--add]
     *                                       [--failover-policy {Automatic, Manual}]
     *                                       [--force-string]
     *                                       [--grace-period]
     *                                       [--remove]
     *                                       [--set]
     *                                       [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name The name of the Instance Failover Group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sql_instance_failover_group.update = function (location, name, resourceGroup) {
        return new az_sql_instance_failover_group_update_command_builder("az sql instance-failover-group update", 'az_sql_instance_failover_group_update_command_result', location, name, resourceGroup);
    };
    return az_sql_instance_failover_group;
}());
exports.az_sql_instance_failover_group = az_sql_instance_failover_group;
/** Manage instance pools. */
var az_sql_instance_pool = /** @class */ (function () {
    function az_sql_instance_pool() {
    }
    /**
     * Create an instance pool.
     *
     * Syntax:
     * ```
     * az sql instance-pool create --capacity
     *                             --edition
     *                             --family
     *                             --license-type {BasePrice, LicenseIncluded}
     *                             --location
     *                             --name
     *                             --resource-group
     *                             --subnet
     *                             [--no-wait]
     *                             [--subscription]
     *                             [--tags]
     *                             [--vnet-name]
     * ```
     *
     * @param {string} capacity Capacity of the instance pool in vcores.
     * @param {string} edition The edition component of the sku. Allowed value: GeneralPurpose.
     * @param {string} family The compute generation component of the sku. Allowed value: Gen5.
     * @param {'BasePrice' | 'LicenseIncluded'} licenseType The license type to apply for this instance pool.
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name Instance Pool Name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} subnet Name or ID of the subnet that allows access to an Instance Pool. If subnet name is provided, --vnet-name must be provided.
     */
    az_sql_instance_pool.create = function (capacity, edition, family, licenseType, location, name, resourceGroup, subnet) {
        return new az_sql_instance_pool_create_command_builder("az sql instance-pool create", 'az_sql_instance_pool_create_command_result', capacity, edition, family, licenseType, location, name, resourceGroup, subnet);
    };
    /**
     * Delete an instance pool.
     *
     * Syntax:
     * ```
     * az sql instance-pool delete --name
     *                             --resource-group
     *                             [--no-wait]
     *                             [--subscription]
     *                             [--yes]
     * ```
     *
     * @param {string} name Instance Pool Name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sql_instance_pool["delete"] = function (name, resourceGroup) {
        return new az_sql_instance_pool_delete_command_builder("az sql instance-pool delete", 'az_sql_instance_pool_delete_command_result', name, resourceGroup);
    };
    /**
     * List available instance pools.
     *
     * Syntax:
     * ```
     * az sql instance-pool list [--query-examples]
     *                           [--resource-group]
     *                           [--subscription]
     * ```
     */
    az_sql_instance_pool.list = function () {
        return new az_sql_instance_pool_list_command_builder("az sql instance-pool list", 'az_sql_instance_pool_list_command_result');
    };
    /**
     * Get the details for an instance pool.
     *
     * Syntax:
     * ```
     * az sql instance-pool show --name
     *                           --resource-group
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} name Instance Pool Name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sql_instance_pool.show = function (name, resourceGroup) {
        return new az_sql_instance_pool_show_command_builder("az sql instance-pool show", 'az_sql_instance_pool_show_command_result', name, resourceGroup);
    };
    /**
     * Update an instance pool.
     *
     * Syntax:
     * ```
     * az sql instance-pool update --name
     *                             --resource-group
     *                             [--subscription]
     *                             [--tags]
     * ```
     *
     * @param {string} name Instance Pool Name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sql_instance_pool.update = function (name, resourceGroup) {
        return new az_sql_instance_pool_update_command_builder("az sql instance-pool update", 'az_sql_instance_pool_update_command_result', name, resourceGroup);
    };
    /**
     * Wait for an instance pool to reach a desired state.
     *
     * Syntax:
     * ```
     * az sql instance-pool wait --name
     *                           --resource-group
     *                           [--created]
     *                           [--custom]
     *                           [--deleted]
     *                           [--exists]
     *                           [--interval]
     *                           [--subscription]
     *                           [--timeout]
     *                           [--updated]
     * ```
     *
     * @param {string} name Instance Pool Name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sql_instance_pool.wait = function (name, resourceGroup) {
        return new az_sql_instance_pool_wait_command_builder("az sql instance-pool wait", 'az_sql_instance_pool_wait_command_result', name, resourceGroup);
    };
    return az_sql_instance_pool;
}());
exports.az_sql_instance_pool = az_sql_instance_pool;
/** Manage a managed instance's Active Directory administrator. */
var az_sql_mi_ad_admin = /** @class */ (function () {
    function az_sql_mi_ad_admin() {
    }
    /**
     * Creates a new managed instance Active Directory administrator.
     *
     * Syntax:
     * ```
     * az sql mi ad-admin create --display-name
     *                           --managed-instance
     *                           --object-id
     *                           --resource-group
     *                           [--subscription]
     * ```
     *
     * @param {string} displayName Display name of the Azure AD administrator user or group.
     * @param {string} managedInstance Name of the Azure SQL managed instance.
     * @param {string} objectId The unique ID of the Azure AD administrator.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sql_mi_ad_admin.create = function (displayName, managedInstance, objectId, resourceGroup) {
        return new az_sql_mi_ad_admin_create_command_builder("az sql mi ad-admin create", 'az_sql_mi_ad_admin_create_command_result', displayName, managedInstance, objectId, resourceGroup);
    };
    /**
     * Deletes an existing managed instance Active Directory Administrator.
     *
     * Syntax:
     * ```
     * az sql mi ad-admin delete [--ids]
     *                           [--managed-instance]
     *                           [--resource-group]
     *                           [--subscription]
     * ```
     */
    az_sql_mi_ad_admin["delete"] = function () {
        return new az_sql_mi_ad_admin_delete_command_builder("az sql mi ad-admin delete", 'az_sql_mi_ad_admin_delete_command_result');
    };
    /**
     * Returns a list of managed instance Active Directory Administrators.
     *
     * Syntax:
     * ```
     * az sql mi ad-admin list [--ids]
     *                         [--managed-instance]
     *                         [--query-examples]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    az_sql_mi_ad_admin.list = function () {
        return new az_sql_mi_ad_admin_list_command_builder("az sql mi ad-admin list", 'az_sql_mi_ad_admin_list_command_result');
    };
    /**
     * Updates an existing managed instance Active Directory administrator.
     *
     * Syntax:
     * ```
     * az sql mi ad-admin update --display-name
     *                           --object-id
     *                           [--ids]
     *                           [--managed-instance]
     *                           [--resource-group]
     *                           [--subscription]
     * ```
     *
     * @param {string} displayName Display name of the Azure AD administrator user or group.
     * @param {string} objectId The unique ID of the Azure AD administrator.
     */
    az_sql_mi_ad_admin.update = function (displayName, objectId) {
        return new az_sql_mi_ad_admin_update_command_builder("az sql mi ad-admin update", 'az_sql_mi_ad_admin_update_command_result', displayName, objectId);
    };
    return az_sql_mi_ad_admin;
}());
exports.az_sql_mi_ad_admin = az_sql_mi_ad_admin;
/** Manage a SQL Instance's keys. */
var az_sql_mi_key = /** @class */ (function () {
    function az_sql_mi_key() {
    }
    /**
     * Creates a SQL Instance key.
     *
     * Syntax:
     * ```
     * az sql mi key create --kid
     *                      --managed-instance
     *                      --resource-group
     *                      [--subscription]
     * ```
     *
     * @param {string} kid The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>".
     * @param {string} managedInstance Name of the Azure SQL managed instance.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sql_mi_key.create = function (kid, managedInstance, resourceGroup) {
        return new az_sql_mi_key_create_command_builder("az sql mi key create", 'az_sql_mi_key_create_command_result', kid, managedInstance, resourceGroup);
    };
    /**
     * Deletes a SQL Instance key.
     *
     * Syntax:
     * ```
     * az sql mi key delete --kid
     *                      [--ids]
     *                      [--managed-instance]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     *
     * @param {string} kid The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>".
     */
    az_sql_mi_key["delete"] = function (kid) {
        return new az_sql_mi_key_delete_command_builder("az sql mi key delete", 'az_sql_mi_key_delete_command_result', kid);
    };
    /**
     * Gets a list of managed instance keys.
     *
     * Syntax:
     * ```
     * az sql mi key list [--filter]
     *                    [--ids]
     *                    [--managed-instance]
     *                    [--query-examples]
     *                    [--resource-group]
     *                    [--subscription]
     * ```
     */
    az_sql_mi_key.list = function () {
        return new az_sql_mi_key_list_command_builder("az sql mi key list", 'az_sql_mi_key_list_command_result');
    };
    /**
     * Shows a SQL Instance key.
     *
     * Syntax:
     * ```
     * az sql mi key show --kid
     *                    [--ids]
     *                    [--managed-instance]
     *                    [--query-examples]
     *                    [--resource-group]
     *                    [--subscription]
     * ```
     *
     * @param {string} kid The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>".
     */
    az_sql_mi_key.show = function (kid) {
        return new az_sql_mi_key_show_command_builder("az sql mi key show", 'az_sql_mi_key_show_command_result', kid);
    };
    return az_sql_mi_key;
}());
exports.az_sql_mi_key = az_sql_mi_key;
/** Manage operations on a managed instance. */
var az_sql_mi_op = /** @class */ (function () {
    function az_sql_mi_op() {
    }
    /**
     * Cancels the asynchronous operation on the managed instance.
     *
     * Syntax:
     * ```
     * az sql mi op cancel --name
     *                     [--ids]
     *                     [--managed-instance]
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     *
     * @param {string} name The unique name of the operation to cancel.
     */
    az_sql_mi_op.cancel = function (name) {
        return new az_sql_mi_op_cancel_command_builder("az sql mi op cancel", 'az_sql_mi_op_cancel_command_result', name);
    };
    /**
     * Gets a list of operations performed on the managed instance.
     *
     * Syntax:
     * ```
     * az sql mi op list [--ids]
     *                   [--managed-instance]
     *                   [--query-examples]
     *                   [--resource-group]
     *                   [--subscription]
     * ```
     */
    az_sql_mi_op.list = function () {
        return new az_sql_mi_op_list_command_builder("az sql mi op list", 'az_sql_mi_op_list_command_result');
    };
    /**
     * Gets a management operation on a managed instance.
     *
     * Syntax:
     * ```
     * az sql mi op show --name
     *                   [--ids]
     *                   [--managed-instance]
     *                   [--query-examples]
     *                   [--resource-group]
     *                   [--subscription]
     * ```
     *
     * @param {string} name The unique name of the operation to show.
     */
    az_sql_mi_op.show = function (name) {
        return new az_sql_mi_op_show_command_builder("az sql mi op show", 'az_sql_mi_op_show_command_result', name);
    };
    return az_sql_mi_op;
}());
exports.az_sql_mi_op = az_sql_mi_op;
/** Manage a SQL Instance's encryption protector. */
var az_sql_mi_tde_key = /** @class */ (function () {
    function az_sql_mi_tde_key() {
    }
    /**
     * Sets the SQL Instance's encryption protector.
     *
     * Syntax:
     * ```
     * az sql mi tde-key set --server-key-type {AzureKeyVault, ServiceManaged}
     *                       [--ids]
     *                       [--kid]
     *                       [--managed-instance]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     *
     * @param {'AzureKeyVault' | 'ServiceManaged'} serverKeyType The type of the server key.
     */
    az_sql_mi_tde_key.set = function (serverKeyType) {
        return new az_sql_mi_tde_key_set_command_builder("az sql mi tde-key set", 'az_sql_mi_tde_key_set_command_result', serverKeyType);
    };
    /**
     * Gets a managed instance encryption protector.
     *
     * Syntax:
     * ```
     * az sql mi tde-key show [--ids]
     *                        [--managed-instance]
     *                        [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     */
    az_sql_mi_tde_key.show = function () {
        return new az_sql_mi_tde_key_show_command_builder("az sql mi tde-key show", 'az_sql_mi_tde_key_show_command_result');
    };
    return az_sql_mi_tde_key;
}());
exports.az_sql_mi_tde_key = az_sql_mi_tde_key;
/** Manage SQL managed instances. */
var az_sql_mi = /** @class */ (function () {
    function az_sql_mi() {
    }
    /**
     * Create a managed instance.
     *
     * Syntax:
     * ```
     * az sql mi create --admin-password
     *                  --admin-user
     *                  --name
     *                  --resource-group
     *                  --subnet
     *                  [--assign-identity]
     *                  [--backup-storage-redundancy]
     *                  [--capacity]
     *                  [--collation]
     *                  [--edition]
     *                  [--family]
     *                  [--license-type {BasePrice, LicenseIncluded}]
     *                  [--location]
     *                  [--minimal-tls-version {1.0, 1.1, 1.2, None}]
     *                  [--no-wait]
     *                  [--proxy-override {Default, Proxy, Redirect}]
     *                  [--public-data-endpoint-enabled {false, true}]
     *                  [--storage]
     *                  [--subscription]
     *                  [--tags]
     *                  [--timezone-id]
     *                  [--vnet-name]
     *                  [--yes]
     * ```
     *
     * @param {string} adminPassword The administrator login password (required for managed instance creation).
     * @param {string} adminUser Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation).
     * @param {string} name The managed instance name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} subnet Name or ID of the subnet that allows access to an Azure Sql Managed Instance. If subnet name is provided, --vnet-name must be provided.
     */
    az_sql_mi.create = function (adminPassword, adminUser, name, resourceGroup, subnet) {
        return new az_sql_mi_create_command_builder("az sql mi create", 'az_sql_mi_create_command_result', adminPassword, adminUser, name, resourceGroup, subnet);
    };
    /**
     * Delete a managed instance.
     *
     * Syntax:
     * ```
     * az sql mi delete [--ids]
     *                  [--name]
     *                  [--no-wait]
     *                  [--resource-group]
     *                  [--subscription]
     *                  [--yes]
     * ```
     */
    az_sql_mi["delete"] = function () {
        return new az_sql_mi_delete_command_builder("az sql mi delete", 'az_sql_mi_delete_command_result');
    };
    /**
     * Failover a managed instance.
     *
     * Syntax:
     * ```
     * az sql mi failover [--ids]
     *                    [--name]
     *                    [--no-wait]
     *                    [--replica-type]
     *                    [--resource-group]
     *                    [--subscription]
     * ```
     */
    az_sql_mi.failover = function () {
        return new az_sql_mi_failover_command_builder("az sql mi failover", 'az_sql_mi_failover_command_result');
    };
    /**
     * List available managed instances.
     *
     * Syntax:
     * ```
     * az sql mi list [--query-examples]
     *                [--resource-group]
     *                [--subscription]
     * ```
     */
    az_sql_mi.list = function () {
        return new az_sql_mi_list_command_builder("az sql mi list", 'az_sql_mi_list_command_result');
    };
    /**
     * Get the details for a managed instance.
     *
     * Syntax:
     * ```
     * az sql mi show [--ids]
     *                [--name]
     *                [--query-examples]
     *                [--resource-group]
     *                [--subscription]
     * ```
     */
    az_sql_mi.show = function () {
        return new az_sql_mi_show_command_builder("az sql mi show", 'az_sql_mi_show_command_result');
    };
    /**
     * Update a managed instance.
     *
     * Syntax:
     * ```
     * az sql mi update [--add]
     *                  [--admin-password]
     *                  [--assign-identity]
     *                  [--capacity]
     *                  [--edition]
     *                  [--family]
     *                  [--force-string]
     *                  [--ids]
     *                  [--license-type {BasePrice, LicenseIncluded}]
     *                  [--minimal-tls-version {1.0, 1.1, 1.2, None}]
     *                  [--name]
     *                  [--no-wait]
     *                  [--proxy-override {Default, Proxy, Redirect}]
     *                  [--public-data-endpoint-enabled {false, true}]
     *                  [--remove]
     *                  [--resource-group]
     *                  [--set]
     *                  [--storage]
     *                  [--subscription]
     *                  [--tags]
     * ```
     */
    az_sql_mi.update = function () {
        return new az_sql_mi_update_command_builder("az sql mi update", 'az_sql_mi_update_command_result');
    };
    return az_sql_mi;
}());
exports.az_sql_mi = az_sql_mi;
/** Manage SQL Managed Instance database long term retention backups. */
var az_sql_midb_ltr_backup = /** @class */ (function () {
    function az_sql_midb_ltr_backup() {
    }
    /**
     * Delete a long term retention backup.
     *
     * Syntax:
     * ```
     * az sql midb ltr-backup delete [--backup-id]
     *                               [--database]
     *                               [--location]
     *                               [--managed-instance]
     *                               [--name]
     *                               [--subscription]
     *                               [--yes]
     * ```
     */
    az_sql_midb_ltr_backup["delete"] = function () {
        return new az_sql_midb_ltr_backup_delete_command_builder("az sql midb ltr-backup delete", 'az_sql_midb_ltr_backup_delete_command_result');
    };
    /**
     * List the long term retention backups for a location, instance or database.
     *
     * Syntax:
     * ```
     * az sql midb ltr-backup list --location
     *                             [--database]
     *                             [--database-state]
     *                             [--latest]
     *                             [--managed-instance]
     *                             [--query-examples]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     *
     * @param {string} location The location of the desired backup(s).
     */
    az_sql_midb_ltr_backup.list = function (location) {
        return new az_sql_midb_ltr_backup_list_command_builder("az sql midb ltr-backup list", 'az_sql_midb_ltr_backup_list_command_result', location);
    };
    /**
     * Restore a long term retention backup to a new database.
     *
     * Syntax:
     * ```
     * az sql midb ltr-backup restore --backup-id
     *                                --dest-database
     *                                --dest-mi
     *                                --dest-resource-group
     *                                [--no-wait]
     *                                [--subscription]
     * ```
     *
     * @param {string} backupId The resource id of the long term retention backup to be restored. Use 'az sql midb ltr-backup show' or 'az sql midb ltr-backup list' for backup id.
     * @param {string} destDatabase Name of the managed database that will be created as the restore destination.
     * @param {string} destMi Name of the managed instance to restore managed database to.
     * @param {string} destResourceGroup Name of the resource group of the managed instance to restore managed database to.
     */
    az_sql_midb_ltr_backup.restore = function (backupId, destDatabase, destMi, destResourceGroup) {
        return new az_sql_midb_ltr_backup_restore_command_builder("az sql midb ltr-backup restore", 'az_sql_midb_ltr_backup_restore_command_result', backupId, destDatabase, destMi, destResourceGroup);
    };
    /**
     * Get a long term retention backup for a managed database.
     *
     * Syntax:
     * ```
     * az sql midb ltr-backup show [--backup-id]
     *                             [--database]
     *                             [--location]
     *                             [--managed-instance]
     *                             [--name]
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     */
    az_sql_midb_ltr_backup.show = function () {
        return new az_sql_midb_ltr_backup_show_command_builder("az sql midb ltr-backup show", 'az_sql_midb_ltr_backup_show_command_result');
    };
    /**
     * Place the CLI in a waiting state until a condition of the managed database is met.
     *
     * Syntax:
     * ```
     * az sql midb ltr-backup wait --database
     *                             --managed-instance
     *                             --resource-group
     *                             [--created]
     *                             [--custom]
     *                             [--deleted]
     *                             [--exists]
     *                             [--interval]
     *                             [--subscription]
     *                             [--timeout]
     *                             [--updated]
     * ```
     *
     * @param {string} database The name of the Azure SQL Managed Database.
     * @param {string} managedInstance Name of the Azure SQL managed instance.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sql_midb_ltr_backup.wait = function (database, managedInstance, resourceGroup) {
        return new az_sql_midb_ltr_backup_wait_command_builder("az sql midb ltr-backup wait", 'az_sql_midb_ltr_backup_wait_command_result', database, managedInstance, resourceGroup);
    };
    return az_sql_midb_ltr_backup;
}());
exports.az_sql_midb_ltr_backup = az_sql_midb_ltr_backup;
/** Manage SQL Managed Instance database long term retention policy. */
var az_sql_midb_ltr_policy = /** @class */ (function () {
    function az_sql_midb_ltr_policy() {
    }
    /**
     * Update long term retention settings for a managed database.
     *
     * Syntax:
     * ```
     * az sql midb ltr-policy set [--ids]
     *                            [--managed-instance]
     *                            [--monthly-retention]
     *                            [--name]
     *                            [--resource-group]
     *                            [--subscription]
     *                            [--week-of-year]
     *                            [--weekly-retention]
     *                            [--yearly-retention]
     * ```
     */
    az_sql_midb_ltr_policy.set = function () {
        return new az_sql_midb_ltr_policy_set_command_builder("az sql midb ltr-policy set", 'az_sql_midb_ltr_policy_set_command_result');
    };
    /**
     * Show the long term retention policy for a managed database.
     *
     * Syntax:
     * ```
     * az sql midb ltr-policy show [--ids]
     *                             [--managed-instance]
     *                             [--name]
     *                             [--query-examples]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     */
    az_sql_midb_ltr_policy.show = function () {
        return new az_sql_midb_ltr_policy_show_command_builder("az sql midb ltr-policy show", 'az_sql_midb_ltr_policy_show_command_result');
    };
    return az_sql_midb_ltr_policy;
}());
exports.az_sql_midb_ltr_policy = az_sql_midb_ltr_policy;
/** Manage SQL Managed Instance database backup short term retention policy. */
var az_sql_midb_short_term_retention_policy = /** @class */ (function () {
    function az_sql_midb_short_term_retention_policy() {
    }
    /**
     * Update short term retention for automated backups on a single database.
     *
     * Syntax:
     * ```
     * az sql midb short-term-retention-policy set --retention-days
     *                                             [--deleted-time]
     *                                             [--ids]
     *                                             [--managed-instance]
     *                                             [--name]
     *                                             [--no-wait]
     *                                             [--resource-group]
     *                                             [--subscription]
     * ```
     *
     * @param {string} retentionDays New backup short term retention policy in days.Valid policy for live database is 7-35 days, valid policy for dropped databases is 0-35 days.
     */
    az_sql_midb_short_term_retention_policy.set = function (retentionDays) {
        return new az_sql_midb_short_term_retention_policy_set_command_builder("az sql midb short-term-retention-policy set", 'az_sql_midb_short_term_retention_policy_set_command_result', retentionDays);
    };
    /**
     * Show short term retention for automated backups on a single database.
     *
     * Syntax:
     * ```
     * az sql midb short-term-retention-policy show [--deleted-time]
     *                                              [--ids]
     *                                              [--managed-instance]
     *                                              [--name]
     *                                              [--query-examples]
     *                                              [--resource-group]
     *                                              [--subscription]
     * ```
     */
    az_sql_midb_short_term_retention_policy.show = function () {
        return new az_sql_midb_short_term_retention_policy_show_command_builder("az sql midb short-term-retention-policy show", 'az_sql_midb_short_term_retention_policy_show_command_result');
    };
    return az_sql_midb_short_term_retention_policy;
}());
exports.az_sql_midb_short_term_retention_policy = az_sql_midb_short_term_retention_policy;
/** Manage SQL managed instance databases. */
var az_sql_midb = /** @class */ (function () {
    function az_sql_midb() {
    }
    /**
     * Create a managed database.
     *
     * Syntax:
     * ```
     * az sql midb create --managed-instance
     *                    --name
     *                    --resource-group
     *                    [--collation]
     *                    [--no-wait]
     *                    [--subscription]
     * ```
     *
     * @param {string} managedInstance Name of the Azure SQL managed instance.
     * @param {string} name The name of the Azure SQL Managed Database.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sql_midb.create = function (managedInstance, name, resourceGroup) {
        return new az_sql_midb_create_command_builder("az sql midb create", 'az_sql_midb_create_command_result', managedInstance, name, resourceGroup);
    };
    /**
     * Delete a managed database.
     *
     * Syntax:
     * ```
     * az sql midb delete [--ids]
     *                    [--managed-instance]
     *                    [--name]
     *                    [--no-wait]
     *                    [--resource-group]
     *                    [--subscription]
     *                    [--yes]
     * ```
     */
    az_sql_midb["delete"] = function () {
        return new az_sql_midb_delete_command_builder("az sql midb delete", 'az_sql_midb_delete_command_result');
    };
    /**
     * List managed databases on a managed instance.
     *
     * Syntax:
     * ```
     * az sql midb list [--ids]
     *                  [--managed-instance]
     *                  [--query-examples]
     *                  [--resource-group]
     *                  [--subscription]
     * ```
     */
    az_sql_midb.list = function () {
        return new az_sql_midb_list_command_builder("az sql midb list", 'az_sql_midb_list_command_result');
    };
    /**
     * List restorable deleted managed databases.
     *
     * Syntax:
     * ```
     * az sql midb list-deleted [--ids]
     *                          [--managed-instance]
     *                          [--resource-group]
     *                          [--subscription]
     * ```
     */
    az_sql_midb.list_deleted = function () {
        return new az_sql_midb_list_deleted_command_builder("az sql midb list-deleted", 'az_sql_midb_list_deleted_command_result');
    };
    /**
     * Restore a managed database.
     *
     * Syntax:
     * ```
     * az sql midb restore --dest-name
     *                     --time
     *                     [--deleted-time]
     *                     [--dest-mi]
     *                     [--dest-resource-group]
     *                     [--ids]
     *                     [--managed-instance]
     *                     [--name]
     *                     [--no-wait]
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     *
     * @param {string} destName Name of the managed database that will be created as the restore destination.
     * @param {string} time The point in time of the source database that will be restored to create the new database. Must be greater than or equal to the source database's earliestRestoreDate value. Time should be in following format: "YYYY-MM-DDTHH:MM:SS".
     */
    az_sql_midb.restore = function (destName, time) {
        return new az_sql_midb_restore_command_builder("az sql midb restore", 'az_sql_midb_restore_command_result', destName, time);
    };
    /**
     * Get the details for a managed database.
     *
     * Syntax:
     * ```
     * az sql midb show [--ids]
     *                  [--managed-instance]
     *                  [--name]
     *                  [--query-examples]
     *                  [--resource-group]
     *                  [--subscription]
     * ```
     */
    az_sql_midb.show = function () {
        return new az_sql_midb_show_command_builder("az sql midb show", 'az_sql_midb_show_command_result');
    };
    return az_sql_midb;
}());
exports.az_sql_midb = az_sql_midb;
/** Manage a server's Active Directory administrator. */
var az_sql_server_ad_admin = /** @class */ (function () {
    function az_sql_server_ad_admin() {
    }
    /**
     * Create a new server Active Directory administrator.
     *
     * Syntax:
     * ```
     * az sql server ad-admin create --display-name
     *                               --object-id
     *                               --resource-group
     *                               --server
     *                               [--subscription]
     * ```
     *
     * @param {string} displayName Display name of the Azure AD administrator user or group.
     * @param {string} objectId The unique ID of the Azure AD administrator.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`.
     */
    az_sql_server_ad_admin.create = function (displayName, objectId, resourceGroup, serverName) {
        return new az_sql_server_ad_admin_create_command_builder("az sql server ad-admin create", 'az_sql_server_ad_admin_create_command_result', displayName, objectId, resourceGroup, serverName);
    };
    /**
     * Deletes the Azure Active Directory administrator with the given name.
     *
     * Syntax:
     * ```
     * az sql server ad-admin delete [--ids]
     *                               [--resource-group]
     *                               [--server]
     *                               [--subscription]
     * ```
     */
    az_sql_server_ad_admin["delete"] = function () {
        return new az_sql_server_ad_admin_delete_command_builder("az sql server ad-admin delete", 'az_sql_server_ad_admin_delete_command_result');
    };
    /**
     * Gets a list of Azure Active Directory administrators in a server.
     *
     * Syntax:
     * ```
     * az sql server ad-admin list [--ids]
     *                             [--query-examples]
     *                             [--resource-group]
     *                             [--server]
     *                             [--subscription]
     * ```
     */
    az_sql_server_ad_admin.list = function () {
        return new az_sql_server_ad_admin_list_command_builder("az sql server ad-admin list", 'az_sql_server_ad_admin_list_command_result');
    };
    /**
     * Update an existing server Active Directory administrator.
     *
     * Syntax:
     * ```
     * az sql server ad-admin update [--add]
     *                               [--display-name]
     *                               [--force-string]
     *                               [--ids]
     *                               [--object-id]
     *                               [--remove]
     *                               [--resource-group]
     *                               [--server]
     *                               [--set]
     *                               [--subscription]
     * ```
     */
    az_sql_server_ad_admin.update = function () {
        return new az_sql_server_ad_admin_update_command_builder("az sql server ad-admin update", 'az_sql_server_ad_admin_update_command_result');
    };
    return az_sql_server_ad_admin;
}());
exports.az_sql_server_ad_admin = az_sql_server_ad_admin;
/** Manage a server's auditing policy. */
var az_sql_server_audit_policy = /** @class */ (function () {
    function az_sql_server_audit_policy() {
    }
    /**
     * Gets a server's blob auditing policy.
     *
     * Syntax:
     * ```
     * az sql server audit-policy show [--ids]
     *                                 [--name]
     *                                 [--query-examples]
     *                                 [--resource-group]
     *                                 [--subscription]
     * ```
     */
    az_sql_server_audit_policy.show = function () {
        return new az_sql_server_audit_policy_show_command_builder("az sql server audit-policy show", 'az_sql_server_audit_policy_show_command_result');
    };
    /**
     * Update a server's auditing policy.
     *
     * Syntax:
     * ```
     * az sql server audit-policy update [--actions]
     *                                   [--add]
     *                                   [--force-string]
     *                                   [--ids]
     *                                   [--name]
     *                                   [--remove]
     *                                   [--resource-group]
     *                                   [--retention-days]
     *                                   [--set]
     *                                   [--state {Disabled, Enabled}]
     *                                   [--storage-account]
     *                                   [--storage-endpoint]
     *                                   [--storage-key]
     *                                   [--subscription]
     * ```
     */
    az_sql_server_audit_policy.update = function () {
        return new az_sql_server_audit_policy_update_command_builder("az sql server audit-policy update", 'az_sql_server_audit_policy_update_command_result');
    };
    return az_sql_server_audit_policy;
}());
exports.az_sql_server_audit_policy = az_sql_server_audit_policy;
/** Manage a server's connection policy. */
var az_sql_server_conn_policy = /** @class */ (function () {
    function az_sql_server_conn_policy() {
    }
    /**
     * Gets a server's secure connection policy.
     *
     * Syntax:
     * ```
     * az sql server conn-policy show [--ids]
     *                                [--query-examples]
     *                                [--resource-group]
     *                                [--server]
     *                                [--subscription]
     * ```
     */
    az_sql_server_conn_policy.show = function () {
        return new az_sql_server_conn_policy_show_command_builder("az sql server conn-policy show", 'az_sql_server_conn_policy_show_command_result');
    };
    /**
     * Updates a server's secure connection policy.
     *
     * Syntax:
     * ```
     * az sql server conn-policy update --connection-type {Default, Proxy, Redirect}
     *                                  [--add]
     *                                  [--force-string]
     *                                  [--ids]
     *                                  [--remove]
     *                                  [--resource-group]
     *                                  [--server]
     *                                  [--set]
     *                                  [--subscription]
     * ```
     *
     * @param {'Default' | 'Proxy' | 'Redirect'} connectionType The server connection type.
     */
    az_sql_server_conn_policy.update = function (connectionType) {
        return new az_sql_server_conn_policy_update_command_builder("az sql server conn-policy update", 'az_sql_server_conn_policy_update_command_result', connectionType);
    };
    return az_sql_server_conn_policy;
}());
exports.az_sql_server_conn_policy = az_sql_server_conn_policy;
/** Manage a server's DNS aliases. */
var az_sql_server_dns_alias = /** @class */ (function () {
    function az_sql_server_dns_alias() {
    }
    /**
     * Creates a server dns alias.
     *
     * Syntax:
     * ```
     * az sql server dns-alias create --name
     *                                --resource-group
     *                                --server
     *                                [--subscription]
     * ```
     *
     * @param {string} name Name of the DNS alias.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} server Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`.
     */
    az_sql_server_dns_alias.create = function (name, resourceGroup, server) {
        return new az_sql_server_dns_alias_create_command_builder("az sql server dns-alias create", 'az_sql_server_dns_alias_create_command_result', name, resourceGroup, server);
    };
    /**
     * Deletes the server DNS alias with the given name.
     *
     * Syntax:
     * ```
     * az sql server dns-alias delete --name
     *                                [--ids]
     *                                [--resource-group]
     *                                [--server]
     *                                [--subscription]
     * ```
     *
     * @param {string} name Name of the DNS alias.
     */
    az_sql_server_dns_alias["delete"] = function (name) {
        return new az_sql_server_dns_alias_delete_command_builder("az sql server dns-alias delete", 'az_sql_server_dns_alias_delete_command_result', name);
    };
    /**
     * Gets a list of server DNS aliases for a server.
     *
     * Syntax:
     * ```
     * az sql server dns-alias list [--ids]
     *                              [--query-examples]
     *                              [--resource-group]
     *                              [--server]
     *                              [--subscription]
     * ```
     */
    az_sql_server_dns_alias.list = function () {
        return new az_sql_server_dns_alias_list_command_builder("az sql server dns-alias list", 'az_sql_server_dns_alias_list_command_result');
    };
    /**
     * Sets a server to which DNS alias should point.
     *
     * Syntax:
     * ```
     * az sql server dns-alias set --name
     *                             --original-server
     *                             [--ids]
     *                             [--original-resource-group]
     *                             [--original-subscription-id]
     *                             [--resource-group]
     *                             [--server]
     *                             [--subscription]
     * ```
     *
     * @param {string} name Name of the DNS alias.
     * @param {string} originalServer The name of the server to which alias is currently pointing.
     */
    az_sql_server_dns_alias.set = function (name, originalServer) {
        return new az_sql_server_dns_alias_set_command_builder("az sql server dns-alias set", 'az_sql_server_dns_alias_set_command_result', name, originalServer);
    };
    /**
     * Gets a server DNS alias.
     *
     * Syntax:
     * ```
     * az sql server dns-alias show --name
     *                              [--ids]
     *                              [--query-examples]
     *                              [--resource-group]
     *                              [--server]
     *                              [--subscription]
     * ```
     *
     * @param {string} name Name of the DNS alias.
     */
    az_sql_server_dns_alias.show = function (name) {
        return new az_sql_server_dns_alias_show_command_builder("az sql server dns-alias show", 'az_sql_server_dns_alias_show_command_result', name);
    };
    return az_sql_server_dns_alias;
}());
exports.az_sql_server_dns_alias = az_sql_server_dns_alias;
/** Manage a server's firewall rules. */
var az_sql_server_firewall_rule = /** @class */ (function () {
    function az_sql_server_firewall_rule() {
    }
    /**
     * Create a firewall rule.
     *
     * Syntax:
     * ```
     * az sql server firewall-rule create --end-ip-address
     *                                    --name
     *                                    --resource-group
     *                                    --server
     *                                    --start-ip-address
     *                                    [--subscription]
     * ```
     *
     * @param {string} endIpAddress The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
     * @param {string} name The name of the firewall rule.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} server Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`.
     * @param {string} startIpAddress The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
     */
    az_sql_server_firewall_rule.create = function (endIpAddress, name, resourceGroup, server, startIpAddress) {
        return new az_sql_server_firewall_rule_create_command_builder("az sql server firewall-rule create", 'az_sql_server_firewall_rule_create_command_result', endIpAddress, name, resourceGroup, server, startIpAddress);
    };
    /**
     * Deletes a firewall rule.
     *
     * Syntax:
     * ```
     * az sql server firewall-rule delete [--ids]
     *                                    [--name]
     *                                    [--resource-group]
     *                                    [--server]
     *                                    [--subscription]
     * ```
     */
    az_sql_server_firewall_rule["delete"] = function () {
        return new az_sql_server_firewall_rule_delete_command_builder("az sql server firewall-rule delete", 'az_sql_server_firewall_rule_delete_command_result');
    };
    /**
     * List a server's firewall rules.
     *
     * Syntax:
     * ```
     * az sql server firewall-rule list [--ids]
     *                                  [--query-examples]
     *                                  [--resource-group]
     *                                  [--server]
     *                                  [--subscription]
     * ```
     */
    az_sql_server_firewall_rule.list = function () {
        return new az_sql_server_firewall_rule_list_command_builder("az sql server firewall-rule list", 'az_sql_server_firewall_rule_list_command_result');
    };
    /**
     * Shows the details for a firewall rule.
     *
     * Syntax:
     * ```
     * az sql server firewall-rule show [--ids]
     *                                  [--name]
     *                                  [--query-examples]
     *                                  [--resource-group]
     *                                  [--server]
     *                                  [--subscription]
     * ```
     */
    az_sql_server_firewall_rule.show = function () {
        return new az_sql_server_firewall_rule_show_command_builder("az sql server firewall-rule show", 'az_sql_server_firewall_rule_show_command_result');
    };
    /**
     * Update a firewall rule.
     *
     * Syntax:
     * ```
     * az sql server firewall-rule update [--end-ip-address]
     *                                    [--ids]
     *                                    [--name]
     *                                    [--resource-group]
     *                                    [--server]
     *                                    [--start-ip-address]
     *                                    [--subscription]
     * ```
     */
    az_sql_server_firewall_rule.update = function () {
        return new az_sql_server_firewall_rule_update_command_builder("az sql server firewall-rule update", 'az_sql_server_firewall_rule_update_command_result');
    };
    return az_sql_server_firewall_rule;
}());
exports.az_sql_server_firewall_rule = az_sql_server_firewall_rule;
/** Manage a server's keys. */
var az_sql_server_key = /** @class */ (function () {
    function az_sql_server_key() {
    }
    /**
     * Creates a server key.
     *
     * Syntax:
     * ```
     * az sql server key create --kid
     *                          --resource-group
     *                          --server
     *                          [--subscription]
     * ```
     *
     * @param {string} kid The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>".
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} server Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`.
     */
    az_sql_server_key.create = function (kid, resourceGroup, server) {
        return new az_sql_server_key_create_command_builder("az sql server key create", 'az_sql_server_key_create_command_result', kid, resourceGroup, server);
    };
    /**
     * Deletes a server key.
     *
     * Syntax:
     * ```
     * az sql server key delete --kid
     *                          [--ids]
     *                          [--resource-group]
     *                          [--server]
     *                          [--subscription]
     * ```
     *
     * @param {string} kid The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>".
     */
    az_sql_server_key["delete"] = function (kid) {
        return new az_sql_server_key_delete_command_builder("az sql server key delete", 'az_sql_server_key_delete_command_result', kid);
    };
    /**
     * Gets a list of server keys.
     *
     * Syntax:
     * ```
     * az sql server key list [--ids]
     *                        [--query-examples]
     *                        [--resource-group]
     *                        [--server]
     *                        [--subscription]
     * ```
     */
    az_sql_server_key.list = function () {
        return new az_sql_server_key_list_command_builder("az sql server key list", 'az_sql_server_key_list_command_result');
    };
    /**
     * Shows a server key.
     *
     * Syntax:
     * ```
     * az sql server key show --kid
     *                        [--ids]
     *                        [--query-examples]
     *                        [--resource-group]
     *                        [--server]
     *                        [--subscription]
     * ```
     *
     * @param {string} kid The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>".
     */
    az_sql_server_key.show = function (kid) {
        return new az_sql_server_key_show_command_builder("az sql server key show", 'az_sql_server_key_show_command_result', kid);
    };
    return az_sql_server_key;
}());
exports.az_sql_server_key = az_sql_server_key;
/** Manage a server's encryption protector. */
var az_sql_server_tde_key = /** @class */ (function () {
    function az_sql_server_tde_key() {
    }
    /**
     * Sets the server's encryption protector.
     *
     * Syntax:
     * ```
     * az sql server tde-key set --server-key-type {AzureKeyVault, ServiceManaged}
     *                           [--ids]
     *                           [--kid]
     *                           [--resource-group]
     *                           [--server]
     *                           [--subscription]
     * ```
     *
     * @param {'AzureKeyVault' | 'ServiceManaged'} serverKeyType The type of the server key.
     */
    az_sql_server_tde_key.set = function (serverKeyType) {
        return new az_sql_server_tde_key_set_command_builder("az sql server tde-key set", 'az_sql_server_tde_key_set_command_result', serverKeyType);
    };
    /**
     * Gets a server encryption protector.
     *
     * Syntax:
     * ```
     * az sql server tde-key show [--ids]
     *                            [--query-examples]
     *                            [--resource-group]
     *                            [--server]
     *                            [--subscription]
     * ```
     */
    az_sql_server_tde_key.show = function () {
        return new az_sql_server_tde_key_show_command_builder("az sql server tde-key show", 'az_sql_server_tde_key_show_command_result');
    };
    return az_sql_server_tde_key;
}());
exports.az_sql_server_tde_key = az_sql_server_tde_key;
/** Manage a server's virtual network rules. */
var az_sql_server_vnet_rule = /** @class */ (function () {
    function az_sql_server_vnet_rule() {
    }
    /**
     * Create a virtual network rule to allows access to an Azure SQL server.
     *
     * Syntax:
     * ```
     * az sql server vnet-rule create --name
     *                                --resource-group
     *                                --server
     *                                --subnet
     *                                [--ignore-missing-endpoint {false, true}]
     *                                [--subscription]
     *                                [--vnet-name]
     * ```
     *
     * @param {string} name The name of the virtual network rule.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} server Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`.
     * @param {string} subnet Name or ID of the subnet that allows access to an Azure Sql Server. If subnet name is provided, --vnet-name must be provided.
     */
    az_sql_server_vnet_rule.create = function (name, resourceGroup, server, subnet) {
        return new az_sql_server_vnet_rule_create_command_builder("az sql server vnet-rule create", 'az_sql_server_vnet_rule_create_command_result', name, resourceGroup, server, subnet);
    };
    /**
     * Deletes the virtual network rule with the given name.
     *
     * Syntax:
     * ```
     * az sql server vnet-rule delete --name
     *                                [--ids]
     *                                [--resource-group]
     *                                [--server]
     *                                [--subscription]
     * ```
     *
     * @param {string} name The name of the virtual network rule.
     */
    az_sql_server_vnet_rule["delete"] = function (name) {
        return new az_sql_server_vnet_rule_delete_command_builder("az sql server vnet-rule delete", 'az_sql_server_vnet_rule_delete_command_result', name);
    };
    /**
     * Gets a list of virtual network rules in a server.
     *
     * Syntax:
     * ```
     * az sql server vnet-rule list [--ids]
     *                              [--query-examples]
     *                              [--resource-group]
     *                              [--server]
     *                              [--subscription]
     * ```
     */
    az_sql_server_vnet_rule.list = function () {
        return new az_sql_server_vnet_rule_list_command_builder("az sql server vnet-rule list", 'az_sql_server_vnet_rule_list_command_result');
    };
    /**
     * Gets a virtual network rule.
     *
     * Syntax:
     * ```
     * az sql server vnet-rule show --name
     *                              [--ids]
     *                              [--query-examples]
     *                              [--resource-group]
     *                              [--server]
     *                              [--subscription]
     * ```
     *
     * @param {string} name The name of the virtual network rule.
     */
    az_sql_server_vnet_rule.show = function (name) {
        return new az_sql_server_vnet_rule_show_command_builder("az sql server vnet-rule show", 'az_sql_server_vnet_rule_show_command_result', name);
    };
    /**
     * Update a virtual network rule.
     *
     * Syntax:
     * ```
     * az sql server vnet-rule update --name
     *                                --subnet
     *                                [--add]
     *                                [--force-string]
     *                                [--ids]
     *                                [--ignore-missing-endpoint {false, true}]
     *                                [--remove]
     *                                [--resource-group]
     *                                [--server]
     *                                [--set]
     *                                [--subscription]
     * ```
     *
     * @param {string} name The name of the virtual network rule.
     * @param {string} subnet Name or ID of the subnet that allows access to an Azure Sql Server. If subnet name is provided, --vnet-name must be provided.
     */
    az_sql_server_vnet_rule.update = function (name, subnet) {
        return new az_sql_server_vnet_rule_update_command_builder("az sql server vnet-rule update", 'az_sql_server_vnet_rule_update_command_result', name, subnet);
    };
    return az_sql_server_vnet_rule;
}());
exports.az_sql_server_vnet_rule = az_sql_server_vnet_rule;
/** Manage SQL servers. */
var az_sql_server = /** @class */ (function () {
    function az_sql_server() {
    }
    /**
     * Create a server.
     *
     * Syntax:
     * ```
     * az sql server create --admin-password
     *                      --admin-user
     *                      --name
     *                      --resource-group
     *                      [--assign-identity]
     *                      [--enable-public-network {false, true}]
     *                      [--location]
     *                      [--minimal-tls-version {1.0, 1.1, 1.2}]
     *                      [--no-wait]
     *                      [--subscription]
     * ```
     *
     * @param {string} adminPassword The administrator login password (required for server creation).
     * @param {string} adminUser Administrator username for the server. Once created it cannot be changed.
     * @param {string} name Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sql_server.create = function (adminPassword, adminUser, name, resourceGroup) {
        return new az_sql_server_create_command_builder("az sql server create", 'az_sql_server_create_command_result', adminPassword, adminUser, name, resourceGroup);
    };
    /**
     * Deletes a server.
     *
     * Syntax:
     * ```
     * az sql server delete [--ids]
     *                      [--name]
     *                      [--resource-group]
     *                      [--subscription]
     *                      [--yes]
     * ```
     */
    az_sql_server["delete"] = function () {
        return new az_sql_server_delete_command_builder("az sql server delete", 'az_sql_server_delete_command_result');
    };
    /**
     * List available servers.
     *
     * Syntax:
     * ```
     * az sql server list [--query-examples]
     *                    [--resource-group]
     *                    [--subscription]
     * ```
     */
    az_sql_server.list = function () {
        return new az_sql_server_list_command_builder("az sql server list", 'az_sql_server_list_command_result');
    };
    /**
     * Returns server usages.
     *
     * Syntax:
     * ```
     * az sql server list-usages [--ids]
     *                           [--name]
     *                           [--resource-group]
     *                           [--subscription]
     * ```
     */
    az_sql_server.list_usages = function () {
        return new az_sql_server_list_usages_command_builder("az sql server list-usages", 'az_sql_server_list_usages_command_result');
    };
    /**
     * Gets a server.
     *
     * Syntax:
     * ```
     * az sql server show [--ids]
     *                    [--name]
     *                    [--query-examples]
     *                    [--resource-group]
     *                    [--subscription]
     * ```
     */
    az_sql_server.show = function () {
        return new az_sql_server_show_command_builder("az sql server show", 'az_sql_server_show_command_result');
    };
    /**
     * Update a server.
     *
     * Syntax:
     * ```
     * az sql server update [--add]
     *                      [--admin-password]
     *                      [--assign_identity]
     *                      [--enable-public-network {false, true}]
     *                      [--force-string]
     *                      [--ids]
     *                      [--minimal-tls-version {1.0, 1.1, 1.2}]
     *                      [--name]
     *                      [--no-wait]
     *                      [--remove]
     *                      [--resource-group]
     *                      [--set]
     *                      [--subscription]
     * ```
     */
    az_sql_server.update = function () {
        return new az_sql_server_update_command_builder("az sql server update", 'az_sql_server_update_command_result');
    };
    /**
     * Place the CLI in a waiting state until a condition of the SQL server is met.
     *
     * Syntax:
     * ```
     * az sql server wait [--created]
     *                    [--custom]
     *                    [--deleted]
     *                    [--exists]
     *                    [--ids]
     *                    [--interval]
     *                    [--name]
     *                    [--resource-group]
     *                    [--subscription]
     *                    [--timeout]
     *                    [--updated]
     * ```
     */
    az_sql_server.wait = function () {
        return new az_sql_server_wait_command_builder("az sql server wait", 'az_sql_server_wait_command_result');
    };
    return az_sql_server;
}());
exports.az_sql_server = az_sql_server;
/** Manage SQL virtual clusters. */
var az_sql_virtual_cluster = /** @class */ (function () {
    function az_sql_virtual_cluster() {
    }
    /**
     * Delete a virtual cluster.
     *
     * Syntax:
     * ```
     * az sql virtual-cluster delete [--ids]
     *                               [--name]
     *                               [--no-wait]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     */
    az_sql_virtual_cluster["delete"] = function () {
        return new az_sql_virtual_cluster_delete_command_builder("az sql virtual-cluster delete", 'az_sql_virtual_cluster_delete_command_result');
    };
    /**
     * List available virtual clusters.
     *
     * Syntax:
     * ```
     * az sql virtual-cluster list [--query-examples]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     */
    az_sql_virtual_cluster.list = function () {
        return new az_sql_virtual_cluster_list_command_builder("az sql virtual-cluster list", 'az_sql_virtual_cluster_list_command_result');
    };
    /**
     * Get the details for a virtual cluster.
     *
     * Syntax:
     * ```
     * az sql virtual-cluster show [--ids]
     *                             [--name]
     *                             [--query-examples]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     */
    az_sql_virtual_cluster.show = function () {
        return new az_sql_virtual_cluster_show_command_builder("az sql virtual-cluster show", 'az_sql_virtual_cluster_show_command_result');
    };
    return az_sql_virtual_cluster;
}());
exports.az_sql_virtual_cluster = az_sql_virtual_cluster;
/** Manage SQL availability group listeners. */
var az_sql_vm_group_ag_listener = /** @class */ (function () {
    function az_sql_vm_group_ag_listener() {
    }
    /**
     * Creates an availability group listener.
     *
     * Syntax:
     * ```
     * az sql vm group ag-listener create --ag-name
     *                                    --group-name
     *                                    --ip-address
     *                                    --load-balancer
     *                                    --name
     *                                    --probe-port
     *                                    --resource-group
     *                                    --sqlvms
     *                                    --subnet
     *                                    [--port]
     *                                    [--public-ip]
     *                                    [--subscription]
     *                                    [--vnet-name]
     * ```
     *
     * @param {string} agName Name of the availability group. Please refer to <a href="https://docs.microsoft.com/sql/database-engine/availability-groups/windows/use-the-availability-group-wizard-sql-server-management-studio?view=sql-server-2017">https://docs.microsoft.com/sql/database-engine/availability-groups/windows/use-the-availability-group-wizard-sql-server-management-studio?view=sql-server-2017</a> to create and availability group.
     * @param {string} groupName Name of the SQL virtual machine group.
     * @param {string} ipAddress Private IP address bound to the availability group listener.
     * @param {string} loadBalancer Name or resource ID of the load balancer.
     * @param {string} name Name of the availability group listener.
     * @param {string} probePort Probe port.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} sqlvms Space-separated list of SQL virtual machine instance name or resource IDs that are enrolled into the availability group.
     * @param {string} subnet The name or resource id of the subnet to include in the private IP.
     */
    az_sql_vm_group_ag_listener.create = function (agName, groupName, ipAddress, loadBalancer, name, probePort, resourceGroup, sqlvms, subnet) {
        return new az_sql_vm_group_ag_listener_create_command_builder("az sql vm group ag-listener create", 'az_sql_vm_group_ag_listener_create_command_result', agName, groupName, ipAddress, loadBalancer, name, probePort, resourceGroup, sqlvms, subnet);
    };
    /**
     * Deletes an availability group listener.
     *
     * Syntax:
     * ```
     * az sql vm group ag-listener delete --group-name
     *                                    [--ids]
     *                                    [--name]
     *                                    [--resource-group]
     *                                    [--subscription]
     *                                    [--yes]
     * ```
     *
     * @param {string} groupName Name of the SQL virtual machine group.
     */
    az_sql_vm_group_ag_listener["delete"] = function (groupName) {
        return new az_sql_vm_group_ag_listener_delete_command_builder("az sql vm group ag-listener delete", 'az_sql_vm_group_ag_listener_delete_command_result', groupName);
    };
    /**
     * Lists all availability group listeners in a SQL virtual machine group.
     *
     * Syntax:
     * ```
     * az sql vm group ag-listener list --group-name
     *                                  --resource-group
     *                                  [--query-examples]
     *                                  [--subscription]
     * ```
     *
     * @param {string} groupName Name of the SQL virtual machine group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sql_vm_group_ag_listener.list = function (groupName, resourceGroup) {
        return new az_sql_vm_group_ag_listener_list_command_builder("az sql vm group ag-listener list", 'az_sql_vm_group_ag_listener_list_command_result', groupName, resourceGroup);
    };
    /**
     * Gets an availability group listener.
     *
     * Syntax:
     * ```
     * az sql vm group ag-listener show --group-name
     *                                  [--ids]
     *                                  [--name]
     *                                  [--query-examples]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     *
     * @param {string} groupName Name of the SQL virtual machine group.
     */
    az_sql_vm_group_ag_listener.show = function (groupName) {
        return new az_sql_vm_group_ag_listener_show_command_builder("az sql vm group ag-listener show", 'az_sql_vm_group_ag_listener_show_command_result', groupName);
    };
    /**
     * Updates an availability group listener.
     *
     * Syntax:
     * ```
     * az sql vm group ag-listener update --group-name
     *                                    [--add]
     *                                    [--force-string]
     *                                    [--ids]
     *                                    [--name]
     *                                    [--remove]
     *                                    [--resource-group]
     *                                    [--set]
     *                                    [--sqlvms]
     *                                    [--subscription]
     * ```
     *
     * @param {string} groupName Name of the SQL virtual machine group.
     */
    az_sql_vm_group_ag_listener.update = function (groupName) {
        return new az_sql_vm_group_ag_listener_update_command_builder("az sql vm group ag-listener update", 'az_sql_vm_group_ag_listener_update_command_result', groupName);
    };
    return az_sql_vm_group_ag_listener;
}());
exports.az_sql_vm_group_ag_listener = az_sql_vm_group_ag_listener;
/** Manage SQL virtual machine groups. */
var az_sql_vm_group = /** @class */ (function () {
    function az_sql_vm_group() {
    }
    /**
     * Creates a SQL virtual machine group.
     *
     * Syntax:
     * ```
     * az sql vm group create --domain-fqdn
     *                        --image-offer
     *                        --image-sku {Developer, Enterprise}
     *                        --name
     *                        --operator-acc
     *                        --resource-group
     *                        --service-acc
     *                        --storage-account
     *                        [--bootstrap-acc]
     *                        [--fsw-path]
     *                        [--location]
     *                        [--ou-path]
     *                        [--sa-key]
     *                        [--subscription]
     *                        [--tags]
     * ```
     *
     * @param {string} domainFqdn Fully qualified name of the domain.
     * @param {string} imageOffer SQL image offer. Examples may include SQL2016-WS2016, SQL2017-WS2016.
     * @param {'Developer' | 'Enterprise'} imageSku SQL image sku.
     * @param {string} name Name of the SQL virtual machine group.
     * @param {string} operatorAcc Account name used for operating cluster i.e. will be part of administrators group on all the participating virtual machines in the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceAcc Account name under which SQL service will run on all participating SQL virtual machines in the cluster.
     * @param {string} storageAccount Storage account url of the witness storage account.
     */
    az_sql_vm_group.create = function (domainFqdn, imageOffer, imageSku, name, operatorAcc, resourceGroup, serviceAcc, storageAccount) {
        return new az_sql_vm_group_create_command_builder("az sql vm group create", 'az_sql_vm_group_create_command_result', domainFqdn, imageOffer, imageSku, name, operatorAcc, resourceGroup, serviceAcc, storageAccount);
    };
    /**
     * Deletes a SQL virtual machine group.
     *
     * Syntax:
     * ```
     * az sql vm group delete [--ids]
     *                        [--name]
     *                        [--resource-group]
     *                        [--subscription]
     *                        [--yes]
     * ```
     */
    az_sql_vm_group["delete"] = function () {
        return new az_sql_vm_group_delete_command_builder("az sql vm group delete", 'az_sql_vm_group_delete_command_result');
    };
    /**
     * Lists all SQL virtual machine groups in a resource group or subscription.
     *
     * Syntax:
     * ```
     * az sql vm group list [--query-examples]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    az_sql_vm_group.list = function () {
        return new az_sql_vm_group_list_command_builder("az sql vm group list", 'az_sql_vm_group_list_command_result');
    };
    /**
     * Gets a SQL virtual machine group.
     *
     * Syntax:
     * ```
     * az sql vm group show [--ids]
     *                      [--name]
     *                      [--query-examples]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    az_sql_vm_group.show = function () {
        return new az_sql_vm_group_show_command_builder("az sql vm group show", 'az_sql_vm_group_show_command_result');
    };
    /**
     * Updates a SQL virtual machine group if there are not SQL virtual machines attached to the group.
     *
     * Syntax:
     * ```
     * az sql vm group update [--add]
     *                        [--bootstrap-acc]
     *                        [--domain-fqdn]
     *                        [--force-string]
     *                        [--fsw-path]
     *                        [--ids]
     *                        [--name]
     *                        [--operator-acc]
     *                        [--ou-path]
     *                        [--remove]
     *                        [--resource-group]
     *                        [--sa-key]
     *                        [--service-acc]
     *                        [--set]
     *                        [--storage-account]
     *                        [--subscription]
     *                        [--tags]
     * ```
     */
    az_sql_vm_group.update = function () {
        return new az_sql_vm_group_update_command_builder("az sql vm group update", 'az_sql_vm_group_update_command_result');
    };
    return az_sql_vm_group;
}());
exports.az_sql_vm_group = az_sql_vm_group;
/** Manage SQL virtual machines. */
var az_sql_vm = /** @class */ (function () {
    function az_sql_vm() {
    }
    /**
     * Adds SQL virtual machine to a SQL virtual machine group.
     *
     * Syntax:
     * ```
     * az sql vm add-to-group --sqlvm-group
     *                        [--bootstrap-acc-pwd]
     *                        [--ids]
     *                        [--name]
     *                        [--operator-acc-pwd]
     *                        [--resource-group]
     *                        [--service-acc-pwd]
     *                        [--subscription]
     * ```
     *
     * @param {string} sqlvmGroup Name or resource ID of the SQL virtual machine group. If only name provided, SQL virtual machine group should be in the same resource group of the SQL virtual machine.
     */
    az_sql_vm.add_to_group = function (sqlvmGroup) {
        return new az_sql_vm_add_to_group_command_builder("az sql vm add-to-group", 'az_sql_vm_add_to_group_command_result', sqlvmGroup);
    };
    /**
     * Creates a SQL virtual machine.
     *
     * Syntax:
     * ```
     * az sql vm create --license-type {AHUB, DR, PAYG}
     *                  --name
     *                  --resource-group
     *                  [--backup-pwd]
     *                  [--backup-schedule-type {Automated, Manual}]
     *                  [--backup-system-dbs {false, true}]
     *                  [--connectivity-type {LOCAL, PRIVATE, PUBLIC}]
     *                  [--credential-name]
     *                  [--day-of-week {Friday, Monday, Saturday, Sunday, Thursday, Tuesday, Wednesday}]
     *                  [--enable-auto-backup {false, true}]
     *                  [--enable-auto-patching {false, true}]
     *                  [--enable-encryption {false, true}]
     *                  [--enable-key-vault-credential {false, true}]
     *                  [--enable-r-services {false, true}]
     *                  [--full-backup-duration]
     *                  [--full-backup-frequency {Daily, Weekly}]
     *                  [--full-backup-start-hour]
     *                  [--image-offer]
     *                  [--image-sku {Developer, Enterprise, Express, Standard, Web}]
     *                  [--key-vault]
     *                  [--location]
     *                  [--log-backup-frequency]
     *                  [--maintenance-window-duration]
     *                  [--maintenance-window-start-hour]
     *                  [--port]
     *                  [--retention-period]
     *                  [--sa-key]
     *                  [--sp-name]
     *                  [--sp-secret]
     *                  [--sql-auth-update-pwd]
     *                  [--sql-auth-update-username]
     *                  [--sql-mgmt-type {Full, LightWeight, NoAgent}]
     *                  [--sql-workload-type {DW, GENERAL, OLTP}]
     *                  [--storage-account]
     *                  [--subscription]
     *                  [--tags]
     * ```
     *
     * @param {'AHUB' | 'DR' | 'PAYG'} licenseType SQL Server license type.
     * @param {string} name Name of the SQL virtual machine. The name of the new SQL virtual machine must be equal to the underlying virtual machine created from SQL marketplace image.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sql_vm.create = function (licenseType, name, resourceGroup) {
        return new az_sql_vm_create_command_builder("az sql vm create", 'az_sql_vm_create_command_result', licenseType, name, resourceGroup);
    };
    /**
     * Deletes a SQL virtual machine.
     *
     * Syntax:
     * ```
     * az sql vm delete [--ids]
     *                  [--name]
     *                  [--resource-group]
     *                  [--subscription]
     *                  [--yes]
     * ```
     */
    az_sql_vm["delete"] = function () {
        return new az_sql_vm_delete_command_builder("az sql vm delete", 'az_sql_vm_delete_command_result');
    };
    /**
     * Lists all SQL virtual machines in a resource group or subscription.
     *
     * Syntax:
     * ```
     * az sql vm list [--query-examples]
     *                [--resource-group]
     *                [--subscription]
     * ```
     */
    az_sql_vm.list = function () {
        return new az_sql_vm_list_command_builder("az sql vm list", 'az_sql_vm_list_command_result');
    };
    /**
     * Remove SQL virtual machine from its current SQL virtual machine group.
     *
     * Syntax:
     * ```
     * az sql vm remove-from-group [--ids]
     *                             [--name]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     */
    az_sql_vm.remove_from_group = function () {
        return new az_sql_vm_remove_from_group_command_builder("az sql vm remove-from-group", 'az_sql_vm_remove_from_group_command_result');
    };
    /**
     * Gets a SQL virtual machine.
     *
     * Syntax:
     * ```
     * az sql vm show [--expand]
     *                [--ids]
     *                [--name]
     *                [--query-examples]
     *                [--resource-group]
     *                [--subscription]
     * ```
     */
    az_sql_vm.show = function () {
        return new az_sql_vm_show_command_builder("az sql vm show", 'az_sql_vm_show_command_result');
    };
    /**
     * Updates the properties of a SQL virtual machine.
     *
     * Syntax:
     * ```
     * az sql vm update [--add]
     *                  [--backup-pwd]
     *                  [--backup-schedule-type {Automated, Manual}]
     *                  [--backup-system-dbs {false, true}]
     *                  [--connectivity-type {LOCAL, PRIVATE, PUBLIC}]
     *                  [--credential-name]
     *                  [--day-of-week {Friday, Monday, Saturday, Sunday, Thursday, Tuesday, Wednesday}]
     *                  [--enable-auto-backup {false, true}]
     *                  [--enable-auto-patching {false, true}]
     *                  [--enable-encryption {false, true}]
     *                  [--enable-key-vault-credential {false, true}]
     *                  [--enable-r-services {false, true}]
     *                  [--force-string]
     *                  [--full-backup-duration]
     *                  [--full-backup-frequency {Daily, Weekly}]
     *                  [--full-backup-start-hour]
     *                  [--ids]
     *                  [--image-sku {Developer, Enterprise, Express, Standard, Web}]
     *                  [--key-vault]
     *                  [--license-type {AHUB, DR, PAYG}]
     *                  [--log-backup-frequency]
     *                  [--maintenance-window-duration]
     *                  [--maintenance-window-start-hour]
     *                  [--name]
     *                  [--port]
     *                  [--remove]
     *                  [--resource-group]
     *                  [--retention-period]
     *                  [--sa-key]
     *                  [--set]
     *                  [--sp-name]
     *                  [--sp-secret]
     *                  [--sql-mgmt-type {Full}]
     *                  [--sql-workload-type {DW, GENERAL, OLTP}]
     *                  [--storage-account]
     *                  [--subscription]
     *                  [--tags]
     *                  [--yes]
     * ```
     */
    az_sql_vm.update = function () {
        return new az_sql_vm_update_command_builder("az sql vm update", 'az_sql_vm_update_command_result');
    };
    return az_sql_vm;
}());
exports.az_sql_vm = az_sql_vm;
/** Manage Azure SQL Databases and Data Warehouses. */
var az_sql = /** @class */ (function () {
    function az_sql() {
    }
    /**
     * Gets all subscription usage metrics in a given location.
     *
     * Syntax:
     * ```
     * az sql list-usages --location
     *                    [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     */
    az_sql.list_usages = function (location) {
        return new az_sql_list_usages_command_builder("az sql list-usages", 'az_sql_list_usages_command_result', location);
    };
    /**
     * Gets a subscription usage metric.
     *
     * Syntax:
     * ```
     * az sql show-usage --location
     *                   --usage
     *                   [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} usage Name of usage metric to return.
     */
    az_sql.show_usage = function (location, usage) {
        return new az_sql_show_usage_command_builder("az sql show-usage", 'az_sql_show_usage_command_result', location, usage);
    };
    return az_sql;
}());
exports.az_sql = az_sql;
/**
 * Gets a database's blob auditing policy.
 *
 * Syntax:
 * ```
 * az sql db audit-policy show [--ids]
 *                             [--name]
 *                             [--query-examples]
 *                             [--resource-group]
 *                             [--server]
 *                             [--subscription]
 * ```
 */
var az_sql_db_audit_policy_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_audit_policy_show_command_builder, _super);
    function az_sql_db_audit_policy_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_audit_policy_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_audit_policy_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_db_audit_policy_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_audit_policy_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_audit_policy_show_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_audit_policy_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_audit_policy_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a database's auditing policy.
 *
 * Syntax:
 * ```
 * az sql db audit-policy update [--actions]
 *                               [--add]
 *                               [--force-string]
 *                               [--ids]
 *                               [--name]
 *                               [--remove]
 *                               [--resource-group]
 *                               [--retention-days]
 *                               [--server]
 *                               [--set]
 *                               [--state {Disabled, Enabled}]
 *                               [--storage-account]
 *                               [--storage-endpoint]
 *                               [--storage-key]
 *                               [--subscription]
 * ```
 */
var az_sql_db_audit_policy_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_audit_policy_update_command_builder, _super);
    function az_sql_db_audit_policy_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** List of actions and action groups to audit. */
    az_sql_db_audit_policy_update_command_builder.prototype.actions = function (value) {
        this.setFlag("--actions", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_sql_db_audit_policy_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_sql_db_audit_policy_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_audit_policy_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_audit_policy_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_sql_db_audit_policy_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_audit_policy_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The number of days to retain audit logs. */
    az_sql_db_audit_policy_update_command_builder.prototype.retentionDays = function (value) {
        this.setFlag("--retention-days", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_audit_policy_update_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_sql_db_audit_policy_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Auditing policy state. */
    az_sql_db_audit_policy_update_command_builder.prototype.state = function (value) {
        this.setFlag("--state", value);
        return this;
    };
    /** Name of the storage account. */
    az_sql_db_audit_policy_update_command_builder.prototype.storageAccount = function (value) {
        this.setFlag("--storage-account", value);
        return this;
    };
    /** The storage account endpoint. */
    az_sql_db_audit_policy_update_command_builder.prototype.storageEndpoint = function (value) {
        this.setFlag("--storage-endpoint", value);
        return this;
    };
    /** Access key for the storage account. */
    az_sql_db_audit_policy_update_command_builder.prototype.storageKey = function (value) {
        this.setFlag("--storage-key", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_audit_policy_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_audit_policy_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Disable sensitivity recommendations for a given column (recommendations are enabled by default on all columns).
 *
 * Syntax:
 * ```
 * az sql db classification recommendation disable --column
 *                                                 --schema
 *                                                 --table
 *                                                 [--ids]
 *                                                 [--name]
 *                                                 [--resource-group]
 *                                                 [--server]
 *                                                 [--subscription]
 * ```
 *
 * @param {string} column The name of the column.
 * @param {string} schema The name of the schema.
 * @param {string} table The name of the table.
 */
var az_sql_db_classification_recommendation_disable_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_classification_recommendation_disable_command_builder, _super);
    function az_sql_db_classification_recommendation_disable_command_builder(commandPath, resultDataTypeName, column, schema, table) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.column(column);
        _this.schema(schema);
        _this.table(table);
        return _this;
    }
    /** The name of the column. */
    az_sql_db_classification_recommendation_disable_command_builder.prototype.column = function (value) {
        this.setFlag("--column", value);
        return this;
    };
    /** The name of the schema. */
    az_sql_db_classification_recommendation_disable_command_builder.prototype.schema = function (value) {
        this.setFlag("--schema", value);
        return this;
    };
    /** The name of the table. */
    az_sql_db_classification_recommendation_disable_command_builder.prototype.table = function (value) {
        this.setFlag("--table", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_classification_recommendation_disable_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_classification_recommendation_disable_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_classification_recommendation_disable_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_classification_recommendation_disable_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_classification_recommendation_disable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_classification_recommendation_disable_command_builder;
}(base_1.CommandBuilder));
/**
 * Enable sensitivity recommendations for a given column (recommendations are enabled by default on all columns).
 *
 * Syntax:
 * ```
 * az sql db classification recommendation enable --column
 *                                                --schema
 *                                                --table
 *                                                [--ids]
 *                                                [--name]
 *                                                [--resource-group]
 *                                                [--server]
 *                                                [--subscription]
 * ```
 *
 * @param {string} column The name of the column.
 * @param {string} schema The name of the schema.
 * @param {string} table The name of the table.
 */
var az_sql_db_classification_recommendation_enable_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_classification_recommendation_enable_command_builder, _super);
    function az_sql_db_classification_recommendation_enable_command_builder(commandPath, resultDataTypeName, column, schema, table) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.column(column);
        _this.schema(schema);
        _this.table(table);
        return _this;
    }
    /** The name of the column. */
    az_sql_db_classification_recommendation_enable_command_builder.prototype.column = function (value) {
        this.setFlag("--column", value);
        return this;
    };
    /** The name of the schema. */
    az_sql_db_classification_recommendation_enable_command_builder.prototype.schema = function (value) {
        this.setFlag("--schema", value);
        return this;
    };
    /** The name of the table. */
    az_sql_db_classification_recommendation_enable_command_builder.prototype.table = function (value) {
        this.setFlag("--table", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_classification_recommendation_enable_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_classification_recommendation_enable_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_classification_recommendation_enable_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_classification_recommendation_enable_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_classification_recommendation_enable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_classification_recommendation_enable_command_builder;
}(base_1.CommandBuilder));
/**
 * List the recommended sensitivity classifications of a given database.
 *
 * Syntax:
 * ```
 * az sql db classification recommendation list [--filter]
 *                                              [--ids]
 *                                              [--include-disabled-recommendations]
 *                                              [--name]
 *                                              [--query-examples]
 *                                              [--resource-group]
 *                                              [--server]
 *                                              [--subscription]
 * ```
 */
var az_sql_db_classification_recommendation_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_classification_recommendation_list_command_builder, _super);
    function az_sql_db_classification_recommendation_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** An OData filter expression that filters elements in the collection. */
    az_sql_db_classification_recommendation_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_classification_recommendation_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Specifies whether to include disabled recommendations or not. */
    az_sql_db_classification_recommendation_list_command_builder.prototype.includeDisabledRecommendations = function (value) {
        this.setFlag("--include-disabled-recommendations", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_classification_recommendation_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_db_classification_recommendation_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_classification_recommendation_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_classification_recommendation_list_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_classification_recommendation_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_classification_recommendation_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete the sensitivity classification of a given column.
 *
 * Syntax:
 * ```
 * az sql db classification delete --column
 *                                 --schema
 *                                 --table
 *                                 [--ids]
 *                                 [--name]
 *                                 [--resource-group]
 *                                 [--server]
 *                                 [--subscription]
 * ```
 *
 * @param {string} column The name of the column.
 * @param {string} schema The name of the schema.
 * @param {string} table The name of the table.
 */
var az_sql_db_classification_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_classification_delete_command_builder, _super);
    function az_sql_db_classification_delete_command_builder(commandPath, resultDataTypeName, column, schema, table) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.column(column);
        _this.schema(schema);
        _this.table(table);
        return _this;
    }
    /** The name of the column. */
    az_sql_db_classification_delete_command_builder.prototype.column = function (value) {
        this.setFlag("--column", value);
        return this;
    };
    /** The name of the schema. */
    az_sql_db_classification_delete_command_builder.prototype.schema = function (value) {
        this.setFlag("--schema", value);
        return this;
    };
    /** The name of the table. */
    az_sql_db_classification_delete_command_builder.prototype.table = function (value) {
        this.setFlag("--table", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_classification_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_classification_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_classification_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_classification_delete_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_classification_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_classification_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the sensitivity classifications of a given database.
 *
 * Syntax:
 * ```
 * az sql db classification list [--filter]
 *                               [--ids]
 *                               [--name]
 *                               [--query-examples]
 *                               [--resource-group]
 *                               [--server]
 *                               [--subscription]
 * ```
 */
var az_sql_db_classification_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_classification_list_command_builder, _super);
    function az_sql_db_classification_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** An OData filter expression that filters elements in the collection. */
    az_sql_db_classification_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_classification_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_classification_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_db_classification_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_classification_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_classification_list_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_classification_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_classification_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the sensitivity classification of a given column.
 *
 * Syntax:
 * ```
 * az sql db classification show --column
 *                               --schema
 *                               --table
 *                               [--ids]
 *                               [--name]
 *                               [--query-examples]
 *                               [--resource-group]
 *                               [--server]
 *                               [--subscription]
 * ```
 *
 * @param {string} column The name of the column.
 * @param {string} schema The name of the schema.
 * @param {string} table The name of the table.
 */
var az_sql_db_classification_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_classification_show_command_builder, _super);
    function az_sql_db_classification_show_command_builder(commandPath, resultDataTypeName, column, schema, table) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.column(column);
        _this.schema(schema);
        _this.table(table);
        return _this;
    }
    /** The name of the column. */
    az_sql_db_classification_show_command_builder.prototype.column = function (value) {
        this.setFlag("--column", value);
        return this;
    };
    /** The name of the schema. */
    az_sql_db_classification_show_command_builder.prototype.schema = function (value) {
        this.setFlag("--schema", value);
        return this;
    };
    /** The name of the table. */
    az_sql_db_classification_show_command_builder.prototype.table = function (value) {
        this.setFlag("--table", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_classification_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_classification_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_db_classification_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_classification_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_classification_show_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_classification_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_classification_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a columns's sensitivity classification.
 *
 * Syntax:
 * ```
 * az sql db classification update --column
 *                                 --schema
 *                                 --table
 *                                 [--ids]
 *                                 [--information-type]
 *                                 [--label]
 *                                 [--name]
 *                                 [--resource-group]
 *                                 [--server]
 *                                 [--subscription]
 * ```
 *
 * @param {string} column The name of the column.
 * @param {string} schema The name of the schema.
 * @param {string} table The name of the table.
 */
var az_sql_db_classification_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_classification_update_command_builder, _super);
    function az_sql_db_classification_update_command_builder(commandPath, resultDataTypeName, column, schema, table) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.column(column);
        _this.schema(schema);
        _this.table(table);
        return _this;
    }
    /** The name of the column. */
    az_sql_db_classification_update_command_builder.prototype.column = function (value) {
        this.setFlag("--column", value);
        return this;
    };
    /** The name of the schema. */
    az_sql_db_classification_update_command_builder.prototype.schema = function (value) {
        this.setFlag("--schema", value);
        return this;
    };
    /** The name of the table. */
    az_sql_db_classification_update_command_builder.prototype.table = function (value) {
        this.setFlag("--table", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_classification_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The information type. */
    az_sql_db_classification_update_command_builder.prototype.informationType = function (value) {
        this.setFlag("--information-type", value);
        return this;
    };
    /** The label name. */
    az_sql_db_classification_update_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_classification_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_classification_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_classification_update_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_classification_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_classification_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a long term retention backup.
 *
 * Syntax:
 * ```
 * az sql db ltr-backup delete --database
 *                             --location
 *                             --name
 *                             --server
 *                             [--subscription]
 *                             [--yes]
 * ```
 *
 * @param {string} database Name of the Azure SQL Database. If specified (along with server name), retrieves all requested backups under this database.
 * @param {string} location The location of the desired backups.
 * @param {string} name The name of the LTR backup. Use 'az sql db ltr-backup show' or 'az sql db ltr-backup list' for backup name.
 * @param {string} server Name of the Azure SQL Server. If specified, retrieves all requested backups under this server.
 */
var az_sql_db_ltr_backup_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_ltr_backup_delete_command_builder, _super);
    function az_sql_db_ltr_backup_delete_command_builder(commandPath, resultDataTypeName, database, location, name, server) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.database(database);
        _this.location(location);
        _this.name(name);
        _this.server(server);
        return _this;
    }
    /** Name of the Azure SQL Database. If specified (along with server name), retrieves all requested backups under this database. */
    az_sql_db_ltr_backup_delete_command_builder.prototype.database = function (value) {
        this.setFlag("--database", value);
        return this;
    };
    /** The location of the desired backups. */
    az_sql_db_ltr_backup_delete_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name of the LTR backup. Use 'az sql db ltr-backup show' or 'az sql db ltr-backup list' for backup name. */
    az_sql_db_ltr_backup_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the Azure SQL Server. If specified, retrieves all requested backups under this server. */
    az_sql_db_ltr_backup_delete_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_ltr_backup_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_sql_db_ltr_backup_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_sql_db_ltr_backup_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the long term retention backups for a location, server or database.
 *
 * Syntax:
 * ```
 * az sql db ltr-backup list --location
 *                           [--database]
 *                           [--database-state]
 *                           [--latest]
 *                           [--query-examples]
 *                           [--resource-group]
 *                           [--server]
 *                           [--subscription]
 * ```
 *
 * @param {string} location The location of the desired backups.
 */
var az_sql_db_ltr_backup_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_ltr_backup_list_command_builder, _super);
    function az_sql_db_ltr_backup_list_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** The location of the desired backups. */
    az_sql_db_ltr_backup_list_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the Azure SQL Database. If specified (along with server name), retrieves all requested backups under this database. */
    az_sql_db_ltr_backup_list_command_builder.prototype.database = function (value) {
        this.setFlag("--database", value);
        return this;
    };
    /** 'All', 'Live', or 'Deleted'. Will fetch backups only from databases of specified state. If no state provied, defaults to 'All'. */
    az_sql_db_ltr_backup_list_command_builder.prototype.databaseState = function (value) {
        this.setFlag("--database-state", value);
        return this;
    };
    /** If true, will only return the latest backup for each database. */
    az_sql_db_ltr_backup_list_command_builder.prototype.onlyLatestPerDatabase = function (value) {
        this.setFlag("--only-latest-per-database", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_db_ltr_backup_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_ltr_backup_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL Server. If specified, retrieves all requested backups under this server. */
    az_sql_db_ltr_backup_list_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_ltr_backup_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_ltr_backup_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Restore a long term retention backup to a new database.
 *
 * Syntax:
 * ```
 * az sql db ltr-backup restore --backup-id
 *                              --dest-database
 *                              --dest-resource-group
 *                              --dest-server
 *                              [--no-wait]
 *                              [--subscription]
 * ```
 *
 * @param {string} backupId The resource id of the long term retention backup to be restored. Use 'az sql db ltr-backup show' or 'az sql db ltr-backup list' for backup id.
 * @param {string} destDatabase Name of the database that will be created as the restore destination.
 * @param {string} destResourceGroup Name of the resource group of the server to restore database to.
 * @param {string} destServer Name of the server to restore database to.
 */
var az_sql_db_ltr_backup_restore_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_ltr_backup_restore_command_builder, _super);
    function az_sql_db_ltr_backup_restore_command_builder(commandPath, resultDataTypeName, backupId, destDatabase, destResourceGroup, destServer) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.backupId(backupId);
        _this.destDatabase(destDatabase);
        _this.destResourceGroup(destResourceGroup);
        _this.destServer(destServer);
        return _this;
    }
    /** The resource id of the long term retention backup to be restored. Use 'az sql db ltr-backup show' or 'az sql db ltr-backup list' for backup id. */
    az_sql_db_ltr_backup_restore_command_builder.prototype.backupId = function (value) {
        this.setFlag("--backup-id", value);
        return this;
    };
    /** Name of the database that will be created as the restore destination. */
    az_sql_db_ltr_backup_restore_command_builder.prototype.destDatabase = function (value) {
        this.setFlag("--dest-database", value);
        return this;
    };
    /** Name of the resource group of the server to restore database to. */
    az_sql_db_ltr_backup_restore_command_builder.prototype.destResourceGroup = function (value) {
        this.setFlag("--dest-resource-group", value);
        return this;
    };
    /** Name of the server to restore database to. */
    az_sql_db_ltr_backup_restore_command_builder.prototype.destServer = function (value) {
        this.setFlag("--dest-server", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_db_ltr_backup_restore_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_ltr_backup_restore_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_ltr_backup_restore_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a long term retention backup for a database.
 *
 * Syntax:
 * ```
 * az sql db ltr-backup show --database
 *                           --location
 *                           --name
 *                           --server
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} database Name of the Azure SQL Database. If specified (along with server name), retrieves all requested backups under this database.
 * @param {string} location The location of the desired backups.
 * @param {string} name The name of the LTR backup. Use 'az sql db ltr-backup show' or 'az sql db ltr-backup list' for backup name.
 * @param {string} server Name of the Azure SQL Server. If specified, retrieves all requested backups under this server.
 */
var az_sql_db_ltr_backup_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_ltr_backup_show_command_builder, _super);
    function az_sql_db_ltr_backup_show_command_builder(commandPath, resultDataTypeName, database, location, name, server) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.database(database);
        _this.location(location);
        _this.name(name);
        _this.server(server);
        return _this;
    }
    /** Name of the Azure SQL Database. If specified (along with server name), retrieves all requested backups under this database. */
    az_sql_db_ltr_backup_show_command_builder.prototype.database = function (value) {
        this.setFlag("--database", value);
        return this;
    };
    /** The location of the desired backups. */
    az_sql_db_ltr_backup_show_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name of the LTR backup. Use 'az sql db ltr-backup show' or 'az sql db ltr-backup list' for backup name. */
    az_sql_db_ltr_backup_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the Azure SQL Server. If specified, retrieves all requested backups under this server. */
    az_sql_db_ltr_backup_show_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_db_ltr_backup_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_ltr_backup_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_ltr_backup_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Place the CLI in a waiting state until a condition of the database is met.
 *
 * Syntax:
 * ```
 * az sql db ltr-backup wait [--created]
 *                           [--custom]
 *                           [--deleted]
 *                           [--exists]
 *                           [--ids]
 *                           [--interval]
 *                           [--name]
 *                           [--resource-group]
 *                           [--server]
 *                           [--subscription]
 *                           [--timeout]
 *                           [--updated]
 * ```
 */
var az_sql_db_ltr_backup_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_ltr_backup_wait_command_builder, _super);
    function az_sql_db_ltr_backup_wait_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_sql_db_ltr_backup_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_sql_db_ltr_backup_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_sql_db_ltr_backup_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_sql_db_ltr_backup_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_ltr_backup_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_sql_db_ltr_backup_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_ltr_backup_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_ltr_backup_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_ltr_backup_wait_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_ltr_backup_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_sql_db_ltr_backup_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_sql_db_ltr_backup_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_sql_db_ltr_backup_wait_command_builder;
}(base_1.CommandBuilder));
/**
 * Update long term retention settings for a database.
 *
 * Syntax:
 * ```
 * az sql db ltr-policy set [--ids]
 *                          [--monthly-retention]
 *                          [--name]
 *                          [--resource-group]
 *                          [--server]
 *                          [--subscription]
 *                          [--week-of-year]
 *                          [--weekly-retention]
 *                          [--yearly-retention]
 * ```
 */
var az_sql_db_ltr_policy_set_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_ltr_policy_set_command_builder, _super);
    function az_sql_db_ltr_policy_set_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_ltr_policy_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Retention for the monthly backup. If just a number is passed instead of an ISO 8601 string, days will be assumed as the units.There is a minimum of 7 days and a maximum of 10 years. */
    az_sql_db_ltr_policy_set_command_builder.prototype.monthlyRetention = function (value) {
        this.setFlag("--monthly-retention", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_ltr_policy_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_ltr_policy_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_ltr_policy_set_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_ltr_policy_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The Week of Year, 1 to 52, in which to take the yearly LTR backup. */
    az_sql_db_ltr_policy_set_command_builder.prototype.weekOfYear = function (value) {
        this.setFlag("--week-of-year", value);
        return this;
    };
    /** Retention for the weekly backup. If just a number is passed instead of an ISO 8601 string, days will be assumed as the units.There is a minimum of 7 days and a maximum of 10 years. */
    az_sql_db_ltr_policy_set_command_builder.prototype.weeklyRetention = function (value) {
        this.setFlag("--weekly-retention", value);
        return this;
    };
    /** Retention for the yearly backup. If just a number is passed instead of an ISO 8601 string, days will be assumed as the units.There is a minimum of 7 days and a maximum of 10 years. */
    az_sql_db_ltr_policy_set_command_builder.prototype.yearlyRetention = function (value) {
        this.setFlag("--yearly-retention", value);
        return this;
    };
    return az_sql_db_ltr_policy_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the long term retention policy for a database.
 *
 * Syntax:
 * ```
 * az sql db ltr-policy show [--ids]
 *                           [--name]
 *                           [--query-examples]
 *                           [--resource-group]
 *                           [--server]
 *                           [--subscription]
 * ```
 */
var az_sql_db_ltr_policy_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_ltr_policy_show_command_builder, _super);
    function az_sql_db_ltr_policy_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_ltr_policy_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_ltr_policy_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_db_ltr_policy_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_ltr_policy_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_ltr_policy_show_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_ltr_policy_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_ltr_policy_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Cancels the asynchronous operation on the database.
 *
 * Syntax:
 * ```
 * az sql db op cancel --name
 *                     [--database]
 *                     [--ids]
 *                     [--resource-group]
 *                     [--server]
 *                     [--subscription]
 * ```
 *
 * @param {string} name The unique name of the operation to cancel.
 */
var az_sql_db_op_cancel_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_op_cancel_command_builder, _super);
    function az_sql_db_op_cancel_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The unique name of the operation to cancel. */
    az_sql_db_op_cancel_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_op_cancel_command_builder.prototype.database = function (value) {
        this.setFlag("--database", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_op_cancel_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_op_cancel_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_op_cancel_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_op_cancel_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_op_cancel_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a list of operations performed on the database.
 *
 * Syntax:
 * ```
 * az sql db op list [--database]
 *                   [--ids]
 *                   [--query-examples]
 *                   [--resource-group]
 *                   [--server]
 *                   [--subscription]
 * ```
 */
var az_sql_db_op_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_op_list_command_builder, _super);
    function az_sql_db_op_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Azure SQL Database. */
    az_sql_db_op_list_command_builder.prototype.database = function (value) {
        this.setFlag("--database", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_op_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_db_op_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_op_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_op_list_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_op_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_op_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a database as a readable secondary replica of an existing database.
 *
 * Syntax:
 * ```
 * az sql db replica create --name
 *                          --partner-server
 *                          --resource-group
 *                          --server
 *                          [--auto-pause-delay]
 *                          [--capacity]
 *                          [--compute-model {Provisioned, Serverless}]
 *                          [--elastic-pool]
 *                          [--family]
 *                          [--license-type {BasePrice, LicenseIncluded}]
 *                          [--min-capacity]
 *                          [--no-wait]
 *                          [--partner-resource-group]
 *                          [--read-replicas]
 *                          [--read-scale {Disabled, Enabled}]
 *                          [--service-objective]
 *                          [--subscription]
 *                          [--tags]
 *                          [--zone-redundant {false, true}]
 * ```
 *
 * @param {string} name Name of the Azure SQL Database.
 * @param {string} partnerServer Name of the server to create the new replica in.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} server Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`.
 */
var az_sql_db_replica_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_replica_create_command_builder, _super);
    function az_sql_db_replica_create_command_builder(commandPath, resultDataTypeName, name, partnerServer, resourceGroup, server) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.partnerServer(partnerServer);
        _this.resourceGroup(resourceGroup);
        _this.server(server);
        return _this;
    }
    /** Name of the Azure SQL Database. */
    az_sql_db_replica_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the server to create the new replica in. */
    az_sql_db_replica_create_command_builder.prototype.partnerServer = function (value) {
        this.setFlag("--partner-server", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_replica_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_replica_create_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled. */
    az_sql_db_replica_create_command_builder.prototype.autoPauseDelay = function (value) {
        this.setFlag("--auto-pause-delay", value);
        return this;
    };
    /** The capacity component of the sku in integer number of DTUs or vcores. */
    az_sql_db_replica_create_command_builder.prototype.capacity = function (value) {
        this.setFlag("--capacity", value);
        return this;
    };
    /** The compute model of the database. */
    az_sql_db_replica_create_command_builder.prototype.computeModel = function (value) {
        this.setFlag("--compute-model", value);
        return this;
    };
    /** The name or resource id of the elastic pool to create the database in. */
    az_sql_db_replica_create_command_builder.prototype.elasticPool = function (value) {
        this.setFlag("--elastic-pool", value);
        return this;
    };
    /** The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5. */
    az_sql_db_replica_create_command_builder.prototype.family = function (value) {
        this.setFlag("--family", value);
        return this;
    };
    /** The license type to apply for this database. `LicenseIncluded` if you need a license, or `BasePrice` if you have a license and are eligible for the Azure Hybrid Benefit. */
    az_sql_db_replica_create_command_builder.prototype.licenseType = function (value) {
        this.setFlag("--license-type", value);
        return this;
    };
    /** Minimal capacity that database will always have allocated, if not paused. */
    az_sql_db_replica_create_command_builder.prototype.minCapacity = function (value) {
        this.setFlag("--min-capacity", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_db_replica_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of the resource group to create the new replica in. If unspecified, defaults to the origin resource group. */
    az_sql_db_replica_create_command_builder.prototype.partnerResourceGroup = function (value) {
        this.setFlag("--partner-resource-group", value);
        return this;
    };
    /** The number of readonly replicas to provision for the database. Only settable for Hyperscale edition. */
    az_sql_db_replica_create_command_builder.prototype.readReplicas = function (value) {
        this.setFlag("--read-replicas", value);
        return this;
    };
    /** If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases. */
    az_sql_db_replica_create_command_builder.prototype.readScale = function (value) {
        this.setFlag("--read-scale", value);
        return this;
    };
    /** The service objective for the new database. For example: Basic, S0, P1, GP_Gen4_1, GP_Gen5_S_8, BC_Gen5_2, HS_Gen5_32. */
    az_sql_db_replica_create_command_builder.prototype.serviceObjective = function (value) {
        this.setFlag("--service-objective", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_replica_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_sql_db_replica_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Specifies whether to enable zone redundancy. */
    az_sql_db_replica_create_command_builder.prototype.zoneRedundant = function (value) {
        this.setFlag("--zone-redundant", value.toString());
        return this;
    };
    return az_sql_db_replica_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Permanently stop data replication between two database replicas.
 *
 * Syntax:
 * ```
 * az sql db replica delete-link --partner-server
 *                               [--ids]
 *                               [--name]
 *                               [--partner-resource-group]
 *                               [--resource-group]
 *                               [--server]
 *                               [--subscription]
 *                               [--yes]
 * ```
 *
 * @param {string} partnerServer Name of the server that the other replica is in.
 */
var az_sql_db_replica_delete_link_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_replica_delete_link_command_builder, _super);
    function az_sql_db_replica_delete_link_command_builder(commandPath, resultDataTypeName, partnerServer) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.partnerServer(partnerServer);
        return _this;
    }
    /** Name of the server that the other replica is in. */
    az_sql_db_replica_delete_link_command_builder.prototype.partnerServer = function (value) {
        this.setFlag("--partner-server", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_replica_delete_link_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_replica_delete_link_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the resource group that the other replica is in. If unspecified, defaults to the first database's resource group. */
    az_sql_db_replica_delete_link_command_builder.prototype.partnerResourceGroup = function (value) {
        this.setFlag("--partner-resource-group", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_replica_delete_link_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_replica_delete_link_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_replica_delete_link_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_sql_db_replica_delete_link_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_sql_db_replica_delete_link_command_builder;
}(base_1.CommandBuilder));
/**
 * List the replicas of a database and their replication status.
 *
 * Syntax:
 * ```
 * az sql db replica list-links [--ids]
 *                              [--name]
 *                              [--resource-group]
 *                              [--server]
 *                              [--subscription]
 * ```
 */
var az_sql_db_replica_list_links_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_replica_list_links_command_builder, _super);
    function az_sql_db_replica_list_links_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_replica_list_links_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_replica_list_links_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_replica_list_links_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_replica_list_links_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_replica_list_links_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_replica_list_links_command_builder;
}(base_1.CommandBuilder));
/**
 * Set the primary replica database by failing over from the current primary replica database.
 *
 * Syntax:
 * ```
 * az sql db replica set-primary [--allow-data-loss]
 *                               [--ids]
 *                               [--name]
 *                               [--resource-group]
 *                               [--server]
 *                               [--subscription]
 * ```
 */
var az_sql_db_replica_set_primary_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_replica_set_primary_command_builder, _super);
    function az_sql_db_replica_set_primary_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** If specified, the failover operation will allow data loss. */
    az_sql_db_replica_set_primary_command_builder.prototype.allowDataLoss = function (value) {
        this.setFlag("--allow-data-loss", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_replica_set_primary_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the database to fail over. */
    az_sql_db_replica_set_primary_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the resource group containing the secondary replica that will become the new primary. */
    az_sql_db_replica_set_primary_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the server containing the secondary replica that will become the new primary. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_replica_set_primary_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_replica_set_primary_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_replica_set_primary_command_builder;
}(base_1.CommandBuilder));
/**
 * Returns a database's transparent data encryption operation result.
 *
 * Syntax:
 * ```
 * az sql db tde list-activity [--database]
 *                             [--ids]
 *                             [--resource-group]
 *                             [--server]
 *                             [--subscription]
 * ```
 */
var az_sql_db_tde_list_activity_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_tde_list_activity_command_builder, _super);
    function az_sql_db_tde_list_activity_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Azure SQL Database. */
    az_sql_db_tde_list_activity_command_builder.prototype.database = function (value) {
        this.setFlag("--database", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_tde_list_activity_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_tde_list_activity_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_tde_list_activity_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_tde_list_activity_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_tde_list_activity_command_builder;
}(base_1.CommandBuilder));
/**
 * Sets a database's transparent data encryption configuration.
 *
 * Syntax:
 * ```
 * az sql db tde set --status {Disabled, Enabled}
 *                   [--database]
 *                   [--ids]
 *                   [--resource-group]
 *                   [--server]
 *                   [--subscription]
 * ```
 *
 * @param {'Disabled' | 'Enabled'} status Status of the transparent data encryption.
 */
var az_sql_db_tde_set_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_tde_set_command_builder, _super);
    function az_sql_db_tde_set_command_builder(commandPath, resultDataTypeName, status) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.status(status);
        return _this;
    }
    /** Status of the transparent data encryption. */
    az_sql_db_tde_set_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_tde_set_command_builder.prototype.database = function (value) {
        this.setFlag("--database", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_tde_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_tde_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_tde_set_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_tde_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_tde_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a database's transparent data encryption configuration.
 *
 * Syntax:
 * ```
 * az sql db tde show [--database]
 *                    [--ids]
 *                    [--query-examples]
 *                    [--resource-group]
 *                    [--server]
 *                    [--subscription]
 * ```
 */
var az_sql_db_tde_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_tde_show_command_builder, _super);
    function az_sql_db_tde_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Azure SQL Database. */
    az_sql_db_tde_show_command_builder.prototype.database = function (value) {
        this.setFlag("--database", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_tde_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_db_tde_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_tde_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_tde_show_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_tde_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_tde_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a database's threat detection policy.
 *
 * Syntax:
 * ```
 * az sql db threat-policy show [--ids]
 *                              [--name]
 *                              [--query-examples]
 *                              [--resource-group]
 *                              [--server]
 *                              [--subscription]
 * ```
 */
var az_sql_db_threat_policy_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_threat_policy_show_command_builder, _super);
    function az_sql_db_threat_policy_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_threat_policy_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_threat_policy_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_db_threat_policy_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_threat_policy_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_threat_policy_show_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_threat_policy_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_threat_policy_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a database's threat detection policy.
 *
 * Syntax:
 * ```
 * az sql db threat-policy update [--add]
 *                                [--disabled-alerts]
 *                                [--email-account-admins {Disabled, Enabled}]
 *                                [--email-addresses]
 *                                [--force-string]
 *                                [--ids]
 *                                [--name]
 *                                [--remove]
 *                                [--resource-group]
 *                                [--retention-days]
 *                                [--server]
 *                                [--set]
 *                                [--state {Disabled, Enabled, New}]
 *                                [--storage-account]
 *                                [--storage-endpoint]
 *                                [--storage-key]
 *                                [--subscription]
 * ```
 */
var az_sql_db_threat_policy_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_threat_policy_update_command_builder, _super);
    function az_sql_db_threat_policy_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_sql_db_threat_policy_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** List of disabled alerts. */
    az_sql_db_threat_policy_update_command_builder.prototype.disabledAlerts = function (value) {
        this.setFlag("--disabled-alerts", value);
        return this;
    };
    /** Whether the alert is sent to the account administrators. */
    az_sql_db_threat_policy_update_command_builder.prototype.emailAccountAdmins = function (value) {
        this.setFlag("--email-account-admins", value);
        return this;
    };
    /** List of email addresses that alerts are sent to. */
    az_sql_db_threat_policy_update_command_builder.prototype.emailAddresses = function (value) {
        this.setFlag("--email-addresses", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_sql_db_threat_policy_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_threat_policy_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_threat_policy_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_sql_db_threat_policy_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_threat_policy_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The number of days to retain threat detection logs. */
    az_sql_db_threat_policy_update_command_builder.prototype.retentionDays = function (value) {
        this.setFlag("--retention-days", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_threat_policy_update_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_sql_db_threat_policy_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Threat detection policy state. */
    az_sql_db_threat_policy_update_command_builder.prototype.state = function (value) {
        this.setFlag("--state", value);
        return this;
    };
    /** Name of the storage account. */
    az_sql_db_threat_policy_update_command_builder.prototype.storageAccount = function (value) {
        this.setFlag("--storage-account", value);
        return this;
    };
    /** The storage account endpoint. */
    az_sql_db_threat_policy_update_command_builder.prototype.storageEndpoint = function (value) {
        this.setFlag("--storage-endpoint", value);
        return this;
    };
    /** Access key for the storage account. */
    az_sql_db_threat_policy_update_command_builder.prototype.storageKey = function (value) {
        this.setFlag("--storage-key", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_threat_policy_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_threat_policy_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a copy of a database.
 *
 * Syntax:
 * ```
 * az sql db copy --dest-name
 *                [--auto-pause-delay]
 *                [--capacity]
 *                [--compute-model {Provisioned, Serverless}]
 *                [--dest-resource-group]
 *                [--dest-server]
 *                [--elastic-pool]
 *                [--family]
 *                [--ids]
 *                [--license-type {BasePrice, LicenseIncluded}]
 *                [--min-capacity]
 *                [--name]
 *                [--no-wait]
 *                [--read-replicas]
 *                [--read-scale {Disabled, Enabled}]
 *                [--resource-group]
 *                [--server]
 *                [--service-objective]
 *                [--subscription]
 *                [--tags]
 *                [--zone-redundant {false, true}]
 * ```
 *
 * @param {string} destName Name of the database that will be created as the copy destination.
 */
var az_sql_db_copy_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_copy_command_builder, _super);
    function az_sql_db_copy_command_builder(commandPath, resultDataTypeName, destName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.destName(destName);
        return _this;
    }
    /** Name of the database that will be created as the copy destination. */
    az_sql_db_copy_command_builder.prototype.destName = function (value) {
        this.setFlag("--dest-name", value);
        return this;
    };
    /** Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled. */
    az_sql_db_copy_command_builder.prototype.autoPauseDelay = function (value) {
        this.setFlag("--auto-pause-delay", value);
        return this;
    };
    /** The capacity component of the sku in integer number of DTUs or vcores. */
    az_sql_db_copy_command_builder.prototype.capacity = function (value) {
        this.setFlag("--capacity", value);
        return this;
    };
    /** The compute model of the database. */
    az_sql_db_copy_command_builder.prototype.computeModel = function (value) {
        this.setFlag("--compute-model", value);
        return this;
    };
    /** Name of the resouce group to create the copy in. If unspecified, defaults to the origin resource group. */
    az_sql_db_copy_command_builder.prototype.destResourceGroup = function (value) {
        this.setFlag("--dest-resource-group", value);
        return this;
    };
    /** Name of the server to create the copy in. If unspecified, defaults to the origin server. */
    az_sql_db_copy_command_builder.prototype.destServer = function (value) {
        this.setFlag("--dest-server", value);
        return this;
    };
    /** The name or resource id of the elastic pool to create the database in. */
    az_sql_db_copy_command_builder.prototype.elasticPool = function (value) {
        this.setFlag("--elastic-pool", value);
        return this;
    };
    /** The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5. */
    az_sql_db_copy_command_builder.prototype.family = function (value) {
        this.setFlag("--family", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_copy_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The license type to apply for this database. `LicenseIncluded` if you need a license, or `BasePrice` if you have a license and are eligible for the Azure Hybrid Benefit. */
    az_sql_db_copy_command_builder.prototype.licenseType = function (value) {
        this.setFlag("--license-type", value);
        return this;
    };
    /** Minimal capacity that database will always have allocated, if not paused. */
    az_sql_db_copy_command_builder.prototype.minCapacity = function (value) {
        this.setFlag("--min-capacity", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_copy_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_db_copy_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The number of readonly replicas to provision for the database. Only settable for Hyperscale edition. */
    az_sql_db_copy_command_builder.prototype.readReplicas = function (value) {
        this.setFlag("--read-replicas", value);
        return this;
    };
    /** If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases. */
    az_sql_db_copy_command_builder.prototype.readScale = function (value) {
        this.setFlag("--read-scale", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_copy_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_copy_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** The service objective for the new database. For example: Basic, S0, P1, GP_Gen4_1, GP_Gen5_S_8, BC_Gen5_2, HS_Gen5_32. */
    az_sql_db_copy_command_builder.prototype.serviceObjective = function (value) {
        this.setFlag("--service-objective", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_copy_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_sql_db_copy_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Specifies whether to enable zone redundancy. */
    az_sql_db_copy_command_builder.prototype.zoneRedundant = function (value) {
        this.setFlag("--zone-redundant", value.toString());
        return this;
    };
    return az_sql_db_copy_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a database.
 *
 * Syntax:
 * ```
 * az sql db create --name
 *                  --resource-group
 *                  --server
 *                  [--auto-pause-delay]
 *                  [--capacity]
 *                  [--catalog-collation {DATABASE_DEFAULT, SQL_Latin1_General_CP1_CI_AS}]
 *                  [--collation]
 *                  [--compute-model {Provisioned, Serverless}]
 *                  [--edition]
 *                  [--elastic-pool]
 *                  [--family]
 *                  [--license-type {BasePrice, LicenseIncluded}]
 *                  [--max-size]
 *                  [--min-capacity]
 *                  [--no-wait]
 *                  [--read-replicas]
 *                  [--read-scale {Disabled, Enabled}]
 *                  [--sample-name {AdventureWorksLT}]
 *                  [--service-objective]
 *                  [--subscription]
 *                  [--tags]
 *                  [--zone-redundant {false, true}]
 * ```
 *
 * @param {string} name Name of the Azure SQL Database.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} server Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`.
 */
var az_sql_db_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_create_command_builder, _super);
    function az_sql_db_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, server) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.server(server);
        return _this;
    }
    /** Name of the Azure SQL Database. */
    az_sql_db_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_create_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled. */
    az_sql_db_create_command_builder.prototype.autoPauseDelay = function (value) {
        this.setFlag("--auto-pause-delay", value);
        return this;
    };
    /** The capacity component of the sku in integer number of DTUs or vcores. */
    az_sql_db_create_command_builder.prototype.capacity = function (value) {
        this.setFlag("--capacity", value);
        return this;
    };
    /** Collation of the metadata catalog. */
    az_sql_db_create_command_builder.prototype.catalogCollation = function (value) {
        this.setFlag("--catalog-collation", value);
        return this;
    };
    /** The collation of the database. */
    az_sql_db_create_command_builder.prototype.collation = function (value) {
        this.setFlag("--collation", value);
        return this;
    };
    /** The compute model of the database. */
    az_sql_db_create_command_builder.prototype.computeModel = function (value) {
        this.setFlag("--compute-model", value);
        return this;
    };
    /** The edition component of the sku. Allowed values include: Basic, Standard, Premium, GeneralPurpose, BusinessCritical, Hyperscale. */
    az_sql_db_create_command_builder.prototype.edition = function (value) {
        this.setFlag("--edition", value);
        return this;
    };
    /** The name or resource id of the elastic pool to create the database in. */
    az_sql_db_create_command_builder.prototype.elasticPool = function (value) {
        this.setFlag("--elastic-pool", value);
        return this;
    };
    /** The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5. */
    az_sql_db_create_command_builder.prototype.family = function (value) {
        this.setFlag("--family", value);
        return this;
    };
    /** The license type to apply for this database. `LicenseIncluded` if you need a license, or `BasePrice` if you have a license and are eligible for the Azure Hybrid Benefit. */
    az_sql_db_create_command_builder.prototype.licenseType = function (value) {
        this.setFlag("--license-type", value);
        return this;
    };
    /** The max storage size. If no unit is specified, defaults to bytes (B). */
    az_sql_db_create_command_builder.prototype.maxSize = function (value) {
        this.setFlag("--max-size", value);
        return this;
    };
    /** Minimal capacity that database will always have allocated, if not paused. */
    az_sql_db_create_command_builder.prototype.minCapacity = function (value) {
        this.setFlag("--min-capacity", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_db_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The number of readonly replicas to provision for the database. Only settable for Hyperscale edition. */
    az_sql_db_create_command_builder.prototype.readReplicas = function (value) {
        this.setFlag("--read-replicas", value);
        return this;
    };
    /** If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases. */
    az_sql_db_create_command_builder.prototype.readScale = function (value) {
        this.setFlag("--read-scale", value);
        return this;
    };
    /** The name of the sample schema to apply when creating this database. */
    az_sql_db_create_command_builder.prototype.sampleName = function (value) {
        this.setFlag("--sample-name", value);
        return this;
    };
    /** The service objective for the new database. For example: Basic, S0, P1, GP_Gen4_1, GP_Gen5_S_8, BC_Gen5_2, HS_Gen5_32. */
    az_sql_db_create_command_builder.prototype.serviceObjective = function (value) {
        this.setFlag("--service-objective", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_sql_db_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Specifies whether to enable zone redundancy. */
    az_sql_db_create_command_builder.prototype.zoneRedundant = function (value) {
        this.setFlag("--zone-redundant", value.toString());
        return this;
    };
    return az_sql_db_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a database.
 *
 * Syntax:
 * ```
 * az sql db delete [--ids]
 *                  [--name]
 *                  [--no-wait]
 *                  [--resource-group]
 *                  [--server]
 *                  [--subscription]
 *                  [--yes]
 * ```
 */
var az_sql_db_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_delete_command_builder, _super);
    function az_sql_db_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_db_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_delete_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_sql_db_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_sql_db_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Export a database to a bacpac.
 *
 * Syntax:
 * ```
 * az sql db export --admin-password
 *                  --admin-user
 *                  --storage-key
 *                  --storage-key-type {SharedAccessKey, StorageAccessKey}
 *                  --storage-uri
 *                  [--auth-type {ADPassword, SQL}]
 *                  [--ids]
 *                  [--name]
 *                  [--resource-group]
 *                  [--server]
 *                  [--subscription]
 * ```
 *
 * @param {string} adminPassword Required. Administrator login password.
 * @param {string} adminUser Required. Administrator login name.
 * @param {string} storageKey Required. Storage key.
 * @param {'SharedAccessKey' | 'StorageAccessKey'} storageKeyType Required. Storage key type.
 * @param {string} storageUri Required. Storage Uri.
 */
var az_sql_db_export_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_export_command_builder, _super);
    function az_sql_db_export_command_builder(commandPath, resultDataTypeName, adminPassword, adminUser, storageKey, storageKeyType, storageUri) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.adminPassword(adminPassword);
        _this.adminUser(adminUser);
        _this.storageKey(storageKey);
        _this.storageKeyType(storageKeyType);
        _this.storageUri(storageUri);
        return _this;
    }
    /** Required. Administrator login password. */
    az_sql_db_export_command_builder.prototype.adminPassword = function (value) {
        this.setFlag("--admin-password", value);
        return this;
    };
    /** Required. Administrator login name. */
    az_sql_db_export_command_builder.prototype.adminUser = function (value) {
        this.setFlag("--admin-user", value);
        return this;
    };
    /** Required. Storage key. */
    az_sql_db_export_command_builder.prototype.storageKey = function (value) {
        this.setFlag("--storage-key", value);
        return this;
    };
    /** Required. Storage key type. */
    az_sql_db_export_command_builder.prototype.storageKeyType = function (value) {
        this.setFlag("--storage-key-type", value);
        return this;
    };
    /** Required. Storage Uri. */
    az_sql_db_export_command_builder.prototype.storageUri = function (value) {
        this.setFlag("--storage-uri", value);
        return this;
    };
    /** Authentication type. */
    az_sql_db_export_command_builder.prototype.authType = function (value) {
        this.setFlag("--auth-type", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_export_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_export_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_export_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_export_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_export_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_export_command_builder;
}(base_1.CommandBuilder));
/**
 * Imports a bacpac into an existing database.
 *
 * Syntax:
 * ```
 * az sql db import --admin-password
 *                  --admin-user
 *                  --storage-key
 *                  --storage-key-type {SharedAccessKey, StorageAccessKey}
 *                  --storage-uri
 *                  [--auth-type {ADPassword, SQL}]
 *                  [--ids]
 *                  [--name]
 *                  [--resource-group]
 *                  [--server]
 *                  [--subscription]
 * ```
 *
 * @param {string} adminPassword Required. Administrator login password.
 * @param {string} adminUser Required. Administrator login name.
 * @param {string} storageKey Required. Storage key.
 * @param {'SharedAccessKey' | 'StorageAccessKey'} storageKeyType Required. Storage key type.
 * @param {string} storageUri Required. Storage Uri.
 */
var az_sql_db_import_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_import_command_builder, _super);
    function az_sql_db_import_command_builder(commandPath, resultDataTypeName, adminPassword, adminUser, storageKey, storageKeyType, storageUri) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.adminPassword(adminPassword);
        _this.adminUser(adminUser);
        _this.storageKey(storageKey);
        _this.storageKeyType(storageKeyType);
        _this.storageUri(storageUri);
        return _this;
    }
    /** Required. Administrator login password. */
    az_sql_db_import_command_builder.prototype.adminPassword = function (value) {
        this.setFlag("--admin-password", value);
        return this;
    };
    /** Required. Administrator login name. */
    az_sql_db_import_command_builder.prototype.adminUser = function (value) {
        this.setFlag("--admin-user", value);
        return this;
    };
    /** Required. Storage key. */
    az_sql_db_import_command_builder.prototype.storageKey = function (value) {
        this.setFlag("--storage-key", value);
        return this;
    };
    /** Required. Storage key type. */
    az_sql_db_import_command_builder.prototype.storageKeyType = function (value) {
        this.setFlag("--storage-key-type", value);
        return this;
    };
    /** Required. Storage Uri. */
    az_sql_db_import_command_builder.prototype.storageUri = function (value) {
        this.setFlag("--storage-uri", value);
        return this;
    };
    /** Authentication type. */
    az_sql_db_import_command_builder.prototype.authType = function (value) {
        this.setFlag("--auth-type", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_import_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_import_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_import_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_import_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_import_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_import_command_builder;
}(base_1.CommandBuilder));
/**
 * List databases a server or elastic pool.
 *
 * Syntax:
 * ```
 * az sql db list [--elastic-pool]
 *                [--ids]
 *                [--query-examples]
 *                [--resource-group]
 *                [--server]
 *                [--subscription]
 * ```
 */
var az_sql_db_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_list_command_builder, _super);
    function az_sql_db_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** If specified, lists only the databases in this elastic pool. */
    az_sql_db_list_command_builder.prototype.elasticPool = function (value) {
        this.setFlag("--elastic-pool", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_db_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_list_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a list of deleted databases that can be restored.
 *
 * Syntax:
 * ```
 * az sql db list-deleted [--ids]
 *                        [--resource-group]
 *                        [--server]
 *                        [--subscription]
 * ```
 */
var az_sql_db_list_deleted_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_list_deleted_command_builder, _super);
    function az_sql_db_list_deleted_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_list_deleted_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_list_deleted_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_list_deleted_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_list_deleted_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_list_deleted_command_builder;
}(base_1.CommandBuilder));
/**
 * Show database editions available for the currently active subscription.
 *
 * Syntax:
 * ```
 * az sql db list-editions --location
 *                         [--available]
 *                         [--dtu]
 *                         [--edition]
 *                         [--service-objective]
 *                         [--show-details {max-size}]
 *                         [--subscription]
 *                         [--vcores]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 */
var az_sql_db_list_editions_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_list_editions_command_builder, _super);
    function az_sql_db_list_editions_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_sql_db_list_editions_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** If specified, show only results that are available in the specified region. */
    az_sql_db_list_editions_command_builder.prototype.available = function (value) {
        this.setFlag("--available", value);
        return this;
    };
    /** Number of DTUs to search for. If unspecified, all DTU sizes are shown. */
    az_sql_db_list_editions_command_builder.prototype.dtu = function (value) {
        this.setFlag("--dtu", value);
        return this;
    };
    /** Edition to search for. If unspecified, all editions are shown. */
    az_sql_db_list_editions_command_builder.prototype.edition = function (value) {
        this.setFlag("--edition", value);
        return this;
    };
    /** Service objective to search for. If unspecified, all service objectives are shown. */
    az_sql_db_list_editions_command_builder.prototype.serviceObjective = function (value) {
        this.setFlag("--service-objective", value);
        return this;
    };
    /** List of additional details to include in output. */
    az_sql_db_list_editions_command_builder.prototype.showDetails = function (value) {
        this.setFlag("--show-details", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_list_editions_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Number of vcores to search for. If unspecified, all vcore sizes are shown. */
    az_sql_db_list_editions_command_builder.prototype.vcores = function (value) {
        this.setFlag("--vcores", value);
        return this;
    };
    return az_sql_db_list_editions_command_builder;
}(base_1.CommandBuilder));
/**
 * Returns database usages.
 *
 * Syntax:
 * ```
 * az sql db list-usages [--ids]
 *                       [--name]
 *                       [--resource-group]
 *                       [--server]
 *                       [--subscription]
 * ```
 */
var az_sql_db_list_usages_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_list_usages_command_builder, _super);
    function az_sql_db_list_usages_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_list_usages_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_list_usages_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_list_usages_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_list_usages_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_list_usages_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_list_usages_command_builder;
}(base_1.CommandBuilder));
/**
 * Rename a database.
 *
 * Syntax:
 * ```
 * az sql db rename --new-name
 *                  [--ids]
 *                  [--name]
 *                  [--resource-group]
 *                  [--server]
 *                  [--subscription]
 * ```
 *
 * @param {string} newName The new name that the database will be renamed to.
 */
var az_sql_db_rename_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_rename_command_builder, _super);
    function az_sql_db_rename_command_builder(commandPath, resultDataTypeName, newName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.newName(newName);
        return _this;
    }
    /** The new name that the database will be renamed to. */
    az_sql_db_rename_command_builder.prototype.newName = function (value) {
        this.setFlag("--new-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_rename_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_rename_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_rename_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_rename_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_rename_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_rename_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new database by restoring from a backup.
 *
 * Syntax:
 * ```
 * az sql db restore --dest-name
 *                   [--auto-pause-delay]
 *                   [--capacity]
 *                   [--compute-model {Provisioned, Serverless}]
 *                   [--deleted-time]
 *                   [--edition]
 *                   [--elastic-pool]
 *                   [--family]
 *                   [--ids]
 *                   [--license-type {BasePrice, LicenseIncluded}]
 *                   [--min-capacity]
 *                   [--name]
 *                   [--no-wait]
 *                   [--read-replicas]
 *                   [--read-scale {Disabled, Enabled}]
 *                   [--resource-group]
 *                   [--server]
 *                   [--service-objective]
 *                   [--subscription]
 *                   [--tags]
 *                   [--time]
 *                   [--zone-redundant {false, true}]
 * ```
 *
 * @param {string} destName Name of the database that will be created as the restore destination.
 */
var az_sql_db_restore_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_restore_command_builder, _super);
    function az_sql_db_restore_command_builder(commandPath, resultDataTypeName, destName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.destName(destName);
        return _this;
    }
    /** Name of the database that will be created as the restore destination. */
    az_sql_db_restore_command_builder.prototype.destName = function (value) {
        this.setFlag("--dest-name", value);
        return this;
    };
    /** Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled. */
    az_sql_db_restore_command_builder.prototype.autoPauseDelay = function (value) {
        this.setFlag("--auto-pause-delay", value);
        return this;
    };
    /** The capacity component of the sku in integer number of DTUs or vcores. */
    az_sql_db_restore_command_builder.prototype.capacity = function (value) {
        this.setFlag("--capacity", value);
        return this;
    };
    /** The compute model of the database. */
    az_sql_db_restore_command_builder.prototype.computeModel = function (value) {
        this.setFlag("--compute-model", value);
        return this;
    };
    /** If specified, restore from a deleted database instead of from an existing database. Must match the deleted time of a deleted database in the same server. Either --time or --deleted-time (or both) must be specified. Time should be in following format: "YYYY-MM-DDTHH:MM:SS". */
    az_sql_db_restore_command_builder.prototype.deletedTime = function (value) {
        this.setFlag("--deleted-time", value);
        return this;
    };
    /** The edition component of the sku. Allowed values include: Basic, Standard, Premium, GeneralPurpose, BusinessCritical, Hyperscale. */
    az_sql_db_restore_command_builder.prototype.edition = function (value) {
        this.setFlag("--edition", value);
        return this;
    };
    /** The name or resource id of the elastic pool to create the database in. */
    az_sql_db_restore_command_builder.prototype.elasticPool = function (value) {
        this.setFlag("--elastic-pool", value);
        return this;
    };
    /** The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5. */
    az_sql_db_restore_command_builder.prototype.family = function (value) {
        this.setFlag("--family", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_restore_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The license type to apply for this database. `LicenseIncluded` if you need a license, or `BasePrice` if you have a license and are eligible for the Azure Hybrid Benefit. */
    az_sql_db_restore_command_builder.prototype.licenseType = function (value) {
        this.setFlag("--license-type", value);
        return this;
    };
    /** Minimal capacity that database will always have allocated, if not paused. */
    az_sql_db_restore_command_builder.prototype.minCapacity = function (value) {
        this.setFlag("--min-capacity", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_restore_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_db_restore_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The number of readonly replicas to provision for the database. Only settable for Hyperscale edition. */
    az_sql_db_restore_command_builder.prototype.readReplicas = function (value) {
        this.setFlag("--read-replicas", value);
        return this;
    };
    /** If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases. */
    az_sql_db_restore_command_builder.prototype.readScale = function (value) {
        this.setFlag("--read-scale", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_restore_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_restore_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** The service objective for the new database. For example: Basic, S0, P1, GP_Gen4_1, GP_Gen5_S_8, BC_Gen5_2, HS_Gen5_32. */
    az_sql_db_restore_command_builder.prototype.serviceObjective = function (value) {
        this.setFlag("--service-objective", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_restore_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_sql_db_restore_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The point in time of the source database that will be restored to create the new database. Must be greater than or equal to the source database's earliestRestoreDate value. Either --time or --deleted-time (or both) must be specified. Time should be in following format: "YYYY-MM-DDTHH:MM:SS". */
    az_sql_db_restore_command_builder.prototype.time = function (value) {
        this.setFlag("--time", value);
        return this;
    };
    /** Specifies whether to enable zone redundancy. */
    az_sql_db_restore_command_builder.prototype.zoneRedundant = function (value) {
        this.setFlag("--zone-redundant", value.toString());
        return this;
    };
    return az_sql_db_restore_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details for a database.
 *
 * Syntax:
 * ```
 * az sql db show [--ids]
 *                [--name]
 *                [--query-examples]
 *                [--resource-group]
 *                [--server]
 *                [--subscription]
 * ```
 */
var az_sql_db_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_show_command_builder, _super);
    function az_sql_db_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_db_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_show_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Generates a connection string to a database.
 *
 * Syntax:
 * ```
 * az sql db show-connection-string --client {ado.net, jdbc, odbc, php, php_pdo, sqlcmd}
 *                                  [--auth-type {ADIntegrated, ADPassword, SqlPassword}]
 *                                  [--ids]
 *                                  [--name]
 *                                  [--server]
 *                                  [--subscription]
 * ```
 *
 * @param {'ado.net' | 'jdbc' | 'odbc' | 'php' | 'php_pdo' | 'sqlcmd'} client Type of client connection provider.
 */
var az_sql_db_show_connection_string_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_show_connection_string_command_builder, _super);
    function az_sql_db_show_connection_string_command_builder(commandPath, resultDataTypeName, client) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.client(client);
        return _this;
    }
    /** Type of client connection provider. */
    az_sql_db_show_connection_string_command_builder.prototype.client = function (value) {
        this.setFlag("--client", value);
        return this;
    };
    /** Type of authentication. */
    az_sql_db_show_connection_string_command_builder.prototype.authType = function (value) {
        this.setFlag("--auth-type", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_show_connection_string_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_show_connection_string_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_show_connection_string_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_show_connection_string_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_db_show_connection_string_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a database.
 *
 * Syntax:
 * ```
 * az sql db update [--add]
 *                  [--auto-pause-delay]
 *                  [--capacity]
 *                  [--compute-model {Provisioned, Serverless}]
 *                  [--edition]
 *                  [--elastic-pool]
 *                  [--family]
 *                  [--force-string]
 *                  [--ids]
 *                  [--max-size]
 *                  [--min-capacity]
 *                  [--name]
 *                  [--no-wait]
 *                  [--read-replicas]
 *                  [--read-scale {Disabled, Enabled}]
 *                  [--remove]
 *                  [--resource-group]
 *                  [--server]
 *                  [--service-objective]
 *                  [--set]
 *                  [--subscription]
 *                  [--zone-redundant {false, true}]
 * ```
 */
var az_sql_db_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_db_update_command_builder, _super);
    function az_sql_db_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_sql_db_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled. */
    az_sql_db_update_command_builder.prototype.autoPauseDelay = function (value) {
        this.setFlag("--auto-pause-delay", value);
        return this;
    };
    /** The capacity component of the sku in integer number of DTUs or vcores. */
    az_sql_db_update_command_builder.prototype.capacity = function (value) {
        this.setFlag("--capacity", value);
        return this;
    };
    /** The compute model of the database. */
    az_sql_db_update_command_builder.prototype.computeModel = function (value) {
        this.setFlag("--compute-model", value);
        return this;
    };
    /** The edition component of the sku. Allowed values include: Basic, Standard, Premium, GeneralPurpose, BusinessCritical, Hyperscale. */
    az_sql_db_update_command_builder.prototype.edition = function (value) {
        this.setFlag("--edition", value);
        return this;
    };
    /** The name or resource id of the elastic pool to move the database into. */
    az_sql_db_update_command_builder.prototype.elasticPool = function (value) {
        this.setFlag("--elastic-pool", value);
        return this;
    };
    /** The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5. */
    az_sql_db_update_command_builder.prototype.family = function (value) {
        this.setFlag("--family", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_sql_db_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_db_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The new maximum size of the database expressed in bytes. */
    az_sql_db_update_command_builder.prototype.maxSize = function (value) {
        this.setFlag("--max-size", value);
        return this;
    };
    /** Minimal capacity that database will always have allocated, if not paused. */
    az_sql_db_update_command_builder.prototype.minCapacity = function (value) {
        this.setFlag("--min-capacity", value);
        return this;
    };
    /** Name of the Azure SQL Database. */
    az_sql_db_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_db_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The number of readonly replicas to provision for the database. Only settable for Hyperscale edition. */
    az_sql_db_update_command_builder.prototype.readReplicas = function (value) {
        this.setFlag("--read-replicas", value);
        return this;
    };
    /** If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases. */
    az_sql_db_update_command_builder.prototype.readScale = function (value) {
        this.setFlag("--read-scale", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_sql_db_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_db_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_db_update_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** The name of the new service objective. If this is a standalone db service objective and the db is currently in an elastic pool, then the db is removed from the pool. */
    az_sql_db_update_command_builder.prototype.serviceObjective = function (value) {
        this.setFlag("--service-objective", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_sql_db_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_db_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Specifies whether to enable zone redundancy. */
    az_sql_db_update_command_builder.prototype.zoneRedundant = function (value) {
        this.setFlag("--zone-redundant", value.toString());
        return this;
    };
    return az_sql_db_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a data warehouse.
 *
 * Syntax:
 * ```
 * az sql dw create --name
 *                  --resource-group
 *                  --server
 *                  [--collation]
 *                  [--max-size]
 *                  [--no-wait]
 *                  [--read-replica-count]
 *                  [--service-objective]
 *                  [--subscription]
 *                  [--tags]
 *                  [--zone-redundant {false, true}]
 * ```
 *
 * @param {string} name Name of the data warehouse.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} server Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`.
 */
var az_sql_dw_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_dw_create_command_builder, _super);
    function az_sql_dw_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, server) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.server(server);
        return _this;
    }
    /** Name of the data warehouse. */
    az_sql_dw_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_dw_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_dw_create_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** The collation of the data warehouse. */
    az_sql_dw_create_command_builder.prototype.collation = function (value) {
        this.setFlag("--collation", value);
        return this;
    };
    /** The max storage size. If no unit is specified, defaults to bytes (B). */
    az_sql_dw_create_command_builder.prototype.maxSize = function (value) {
        this.setFlag("--max-size", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_dw_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The number of readonly replicas to provision for the database. Only settable for Hyperscale edition. */
    az_sql_dw_create_command_builder.prototype.readReplicaCount = function (value) {
        this.setFlag("--read-replica-count", value);
        return this;
    };
    /** The service objective for the new database. For example: DW100, DW1000c. */
    az_sql_dw_create_command_builder.prototype.serviceObjective = function (value) {
        this.setFlag("--service-objective", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_dw_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_sql_dw_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Specifies whether to enable zone redundancy. */
    az_sql_dw_create_command_builder.prototype.zoneRedundant = function (value) {
        this.setFlag("--zone-redundant", value.toString());
        return this;
    };
    return az_sql_dw_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a data warehouse.
 *
 * Syntax:
 * ```
 * az sql dw delete [--ids]
 *                  [--name]
 *                  [--no-wait]
 *                  [--resource-group]
 *                  [--server]
 *                  [--subscription]
 *                  [--yes]
 * ```
 */
var az_sql_dw_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_dw_delete_command_builder, _super);
    function az_sql_dw_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_dw_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the data warehouse. */
    az_sql_dw_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_dw_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_dw_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_dw_delete_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_dw_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_sql_dw_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_sql_dw_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List data warehouses for a server.
 *
 * Syntax:
 * ```
 * az sql dw list [--ids]
 *                [--query-examples]
 *                [--resource-group]
 *                [--server]
 *                [--subscription]
 * ```
 */
var az_sql_dw_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_dw_list_command_builder, _super);
    function az_sql_dw_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_dw_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_dw_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_dw_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_dw_list_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_dw_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_dw_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Pauses a datawarehouse.
 *
 * Syntax:
 * ```
 * az sql dw pause [--ids]
 *                 [--name]
 *                 [--resource-group]
 *                 [--server]
 *                 [--subscription]
 * ```
 */
var az_sql_dw_pause_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_dw_pause_command_builder, _super);
    function az_sql_dw_pause_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_dw_pause_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the data warehouse. */
    az_sql_dw_pause_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_dw_pause_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_dw_pause_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_dw_pause_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_dw_pause_command_builder;
}(base_1.CommandBuilder));
/**
 * Resumes a datawarehouse.
 *
 * Syntax:
 * ```
 * az sql dw resume [--ids]
 *                  [--name]
 *                  [--resource-group]
 *                  [--server]
 *                  [--subscription]
 * ```
 */
var az_sql_dw_resume_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_dw_resume_command_builder, _super);
    function az_sql_dw_resume_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_dw_resume_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the data warehouse. */
    az_sql_dw_resume_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_dw_resume_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_dw_resume_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_dw_resume_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_dw_resume_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details for a data warehouse.
 *
 * Syntax:
 * ```
 * az sql dw show [--ids]
 *                [--name]
 *                [--query-examples]
 *                [--resource-group]
 *                [--server]
 *                [--subscription]
 * ```
 */
var az_sql_dw_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_dw_show_command_builder, _super);
    function az_sql_dw_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_dw_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the data warehouse. */
    az_sql_dw_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_dw_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_dw_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_dw_show_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_dw_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_dw_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a data warehouse.
 *
 * Syntax:
 * ```
 * az sql dw update [--add]
 *                  [--force-string]
 *                  [--ids]
 *                  [--max-size]
 *                  [--name]
 *                  [--no-wait]
 *                  [--remove]
 *                  [--resource-group]
 *                  [--server]
 *                  [--service-objective]
 *                  [--set]
 *                  [--subscription]
 * ```
 */
var az_sql_dw_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_dw_update_command_builder, _super);
    function az_sql_dw_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_sql_dw_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_sql_dw_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_dw_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The max storage size. If no unit is specified, defaults to bytes (B). */
    az_sql_dw_update_command_builder.prototype.maxSize = function (value) {
        this.setFlag("--max-size", value);
        return this;
    };
    /** Name of the data warehouse. */
    az_sql_dw_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_dw_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_sql_dw_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_dw_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_dw_update_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** The service objective of the data warehouse. For example: DW100, DW1000c. */
    az_sql_dw_update_command_builder.prototype.serviceObjective = function (value) {
        this.setFlag("--service-objective", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_sql_dw_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_dw_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_dw_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Cancels the asynchronous operation on the elastic pool.
 *
 * Syntax:
 * ```
 * az sql elastic-pool op cancel --name
 *                               [--elastic-pool]
 *                               [--ids]
 *                               [--resource-group]
 *                               [--server]
 *                               [--subscription]
 * ```
 *
 * @param {string} name The unique name of the operation to cancel.
 */
var az_sql_elastic_pool_op_cancel_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_elastic_pool_op_cancel_command_builder, _super);
    function az_sql_elastic_pool_op_cancel_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The unique name of the operation to cancel. */
    az_sql_elastic_pool_op_cancel_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the Azure SQL Elastic Pool. */
    az_sql_elastic_pool_op_cancel_command_builder.prototype.elasticPool = function (value) {
        this.setFlag("--elastic-pool", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_elastic_pool_op_cancel_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_elastic_pool_op_cancel_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_elastic_pool_op_cancel_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_elastic_pool_op_cancel_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_elastic_pool_op_cancel_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a list of operations performed on the elastic pool.
 *
 * Syntax:
 * ```
 * az sql elastic-pool op list [--elastic-pool]
 *                             [--ids]
 *                             [--query-examples]
 *                             [--resource-group]
 *                             [--server]
 *                             [--subscription]
 * ```
 */
var az_sql_elastic_pool_op_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_elastic_pool_op_list_command_builder, _super);
    function az_sql_elastic_pool_op_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Azure SQL Elastic Pool. */
    az_sql_elastic_pool_op_list_command_builder.prototype.elasticPool = function (value) {
        this.setFlag("--elastic-pool", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_elastic_pool_op_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_elastic_pool_op_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_elastic_pool_op_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_elastic_pool_op_list_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_elastic_pool_op_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_elastic_pool_op_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Create an elastic pool.
 *
 * Syntax:
 * ```
 * az sql elastic-pool create --name
 *                            --resource-group
 *                            --server
 *                            [--capacity]
 *                            [--db-dtu-max]
 *                            [--db-dtu-min]
 *                            [--edition]
 *                            [--family]
 *                            [--license-type {BasePrice, LicenseIncluded}]
 *                            [--max-size]
 *                            [--no-wait]
 *                            [--subscription]
 *                            [--tags]
 *                            [--zone-redundant {false, true}]
 * ```
 *
 * @param {string} name The name of the elastic pool.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} server Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`.
 */
var az_sql_elastic_pool_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_elastic_pool_create_command_builder, _super);
    function az_sql_elastic_pool_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, server) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.server(server);
        return _this;
    }
    /** The name of the elastic pool. */
    az_sql_elastic_pool_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_elastic_pool_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_elastic_pool_create_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** The capacity component of the sku in integer number of DTUs or vcores. */
    az_sql_elastic_pool_create_command_builder.prototype.capacity = function (value) {
        this.setFlag("--capacity", value);
        return this;
    };
    /** The maximum capacity (in DTUs or vcores) any one database can consume. */
    az_sql_elastic_pool_create_command_builder.prototype.dbMaxCapacity = function (value) {
        this.setFlag("--db-max-capacity", value);
        return this;
    };
    /** The minumum capacity (in DTUs or vcores) each database is guaranteed. */
    az_sql_elastic_pool_create_command_builder.prototype.dbMinCapacity = function (value) {
        this.setFlag("--db-min-capacity", value);
        return this;
    };
    /** The edition component of the sku. Allowed values include: Basic, Standard, Premium, GeneralPurpose, BusinessCritical. */
    az_sql_elastic_pool_create_command_builder.prototype.edition = function (value) {
        this.setFlag("--edition", value);
        return this;
    };
    /** The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5. */
    az_sql_elastic_pool_create_command_builder.prototype.family = function (value) {
        this.setFlag("--family", value);
        return this;
    };
    /** The license type to apply for this elastic pool. */
    az_sql_elastic_pool_create_command_builder.prototype.licenseType = function (value) {
        this.setFlag("--license-type", value);
        return this;
    };
    /** The max storage size. If no unit is specified, defaults to bytes (B). */
    az_sql_elastic_pool_create_command_builder.prototype.maxSize = function (value) {
        this.setFlag("--max-size", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_elastic_pool_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_elastic_pool_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_sql_elastic_pool_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Specifies whether to enable zone redundancy. */
    az_sql_elastic_pool_create_command_builder.prototype.zoneRedundant = function (value) {
        this.setFlag("--zone-redundant", value.toString());
        return this;
    };
    return az_sql_elastic_pool_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes an elastic pool.
 *
 * Syntax:
 * ```
 * az sql elastic-pool delete [--ids]
 *                            [--name]
 *                            [--no-wait]
 *                            [--resource-group]
 *                            [--server]
 *                            [--subscription]
 * ```
 */
var az_sql_elastic_pool_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_elastic_pool_delete_command_builder, _super);
    function az_sql_elastic_pool_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_elastic_pool_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the elastic pool. */
    az_sql_elastic_pool_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_elastic_pool_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_elastic_pool_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_elastic_pool_delete_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_elastic_pool_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_elastic_pool_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets all elastic pools in a server.
 *
 * Syntax:
 * ```
 * az sql elastic-pool list [--ids]
 *                          [--query-examples]
 *                          [--resource-group]
 *                          [--server]
 *                          [--skip]
 *                          [--subscription]
 * ```
 */
var az_sql_elastic_pool_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_elastic_pool_list_command_builder, _super);
    function az_sql_elastic_pool_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_elastic_pool_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_elastic_pool_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_elastic_pool_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_elastic_pool_list_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** The number of elements in the collection to skip. */
    az_sql_elastic_pool_list_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_elastic_pool_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_elastic_pool_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a list of databases in an elastic pool.
 *
 * Syntax:
 * ```
 * az sql elastic-pool list-dbs [--ids]
 *                              [--name]
 *                              [--resource-group]
 *                              [--server]
 *                              [--subscription]
 * ```
 */
var az_sql_elastic_pool_list_dbs_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_elastic_pool_list_dbs_command_builder, _super);
    function az_sql_elastic_pool_list_dbs_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_elastic_pool_list_dbs_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the elastic pool. */
    az_sql_elastic_pool_list_dbs_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_elastic_pool_list_dbs_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_elastic_pool_list_dbs_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_elastic_pool_list_dbs_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_elastic_pool_list_dbs_command_builder;
}(base_1.CommandBuilder));
/**
 * List elastic pool editions available for the active subscription.
 *
 * Syntax:
 * ```
 * az sql elastic-pool list-editions --location
 *                                   [--available]
 *                                   [--dtu]
 *                                   [--edition]
 *                                   [--show-details {db-max-dtu, db-max-size, db-min-dtu, max-size}]
 *                                   [--subscription]
 *                                   [--vcores]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 */
var az_sql_elastic_pool_list_editions_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_elastic_pool_list_editions_command_builder, _super);
    function az_sql_elastic_pool_list_editions_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_sql_elastic_pool_list_editions_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** If specified, show only results that are available in the specified region. */
    az_sql_elastic_pool_list_editions_command_builder.prototype.available = function (value) {
        this.setFlag("--available", value);
        return this;
    };
    /** Number of DTUs to search for. If unspecified, all DTU sizes are shown. */
    az_sql_elastic_pool_list_editions_command_builder.prototype.dtu = function (value) {
        this.setFlag("--dtu", value);
        return this;
    };
    /** Edition to search for. If unspecified, all editions are shown. */
    az_sql_elastic_pool_list_editions_command_builder.prototype.edition = function (value) {
        this.setFlag("--edition", value);
        return this;
    };
    /** List of additional details to include in output. */
    az_sql_elastic_pool_list_editions_command_builder.prototype.showDetails = function (value) {
        this.setFlag("--show-details", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_elastic_pool_list_editions_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Number of vcores to search for. If unspecified, all vcore sizes are shown. */
    az_sql_elastic_pool_list_editions_command_builder.prototype.vcores = function (value) {
        this.setFlag("--vcores", value);
        return this;
    };
    return az_sql_elastic_pool_list_editions_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets an elastic pool.
 *
 * Syntax:
 * ```
 * az sql elastic-pool show [--ids]
 *                          [--name]
 *                          [--query-examples]
 *                          [--resource-group]
 *                          [--server]
 *                          [--subscription]
 * ```
 */
var az_sql_elastic_pool_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_elastic_pool_show_command_builder, _super);
    function az_sql_elastic_pool_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_elastic_pool_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the elastic pool. */
    az_sql_elastic_pool_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_elastic_pool_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_elastic_pool_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_elastic_pool_show_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_elastic_pool_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_elastic_pool_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update an elastic pool.
 *
 * Syntax:
 * ```
 * az sql elastic-pool update [--add]
 *                            [--capacity]
 *                            [--db-dtu-max]
 *                            [--db-dtu-min]
 *                            [--edition]
 *                            [--family]
 *                            [--force-string]
 *                            [--ids]
 *                            [--max-size]
 *                            [--name]
 *                            [--no-wait]
 *                            [--remove]
 *                            [--resource-group]
 *                            [--server]
 *                            [--set]
 *                            [--subscription]
 *                            [--zone-redundant {false, true}]
 * ```
 */
var az_sql_elastic_pool_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_elastic_pool_update_command_builder, _super);
    function az_sql_elastic_pool_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_sql_elastic_pool_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The capacity component of the sku in integer number of DTUs or vcores. */
    az_sql_elastic_pool_update_command_builder.prototype.capacity = function (value) {
        this.setFlag("--capacity", value);
        return this;
    };
    /** The maximum capacity (in DTUs or vcores) any one database can consume. */
    az_sql_elastic_pool_update_command_builder.prototype.dbMaxCapacity = function (value) {
        this.setFlag("--db-max-capacity", value);
        return this;
    };
    /** The minumum capacity (in DTUs or vcores) each database is guaranteed. */
    az_sql_elastic_pool_update_command_builder.prototype.dbMinCapacity = function (value) {
        this.setFlag("--db-min-capacity", value);
        return this;
    };
    /** The edition component of the sku. Allowed values include: Basic, Standard, Premium, GeneralPurpose, BusinessCritical. */
    az_sql_elastic_pool_update_command_builder.prototype.edition = function (value) {
        this.setFlag("--edition", value);
        return this;
    };
    /** The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5. */
    az_sql_elastic_pool_update_command_builder.prototype.family = function (value) {
        this.setFlag("--family", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_sql_elastic_pool_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_elastic_pool_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The max storage size. If no unit is specified, defaults to bytes (B). */
    az_sql_elastic_pool_update_command_builder.prototype.maxSize = function (value) {
        this.setFlag("--max-size", value);
        return this;
    };
    /** The name of the elastic pool. */
    az_sql_elastic_pool_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_elastic_pool_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_sql_elastic_pool_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_elastic_pool_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_elastic_pool_update_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_sql_elastic_pool_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_elastic_pool_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Specifies whether to enable zone redundancy. */
    az_sql_elastic_pool_update_command_builder.prototype.zoneRedundant = function (value) {
        this.setFlag("--zone-redundant", value.toString());
        return this;
    };
    return az_sql_elastic_pool_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Creates a failover group.
 *
 * Syntax:
 * ```
 * az sql failover-group create --name
 *                              --partner-server
 *                              --resource-group
 *                              --server
 *                              [--add-db]
 *                              [--failover-policy {Automatic, Manual}]
 *                              [--grace-period]
 *                              [--partner-resource-group]
 *                              [--subscription]
 * ```
 *
 * @param {string} name The name of the Failover Group.
 * @param {string} partnerServer The name of the partner server of a Failover Group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} server Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`.
 */
var az_sql_failover_group_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_failover_group_create_command_builder, _super);
    function az_sql_failover_group_create_command_builder(commandPath, resultDataTypeName, name, partnerServer, resourceGroup, server) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.partnerServer(partnerServer);
        _this.resourceGroup(resourceGroup);
        _this.server(server);
        return _this;
    }
    /** The name of the Failover Group. */
    az_sql_failover_group_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the partner server of a Failover Group. */
    az_sql_failover_group_create_command_builder.prototype.partnerServer = function (value) {
        this.setFlag("--partner-server", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_failover_group_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_failover_group_create_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** List of databases to add to Failover Group. */
    az_sql_failover_group_create_command_builder.prototype.addDb = function (value) {
        this.setFlag("--add-db", value);
        return this;
    };
    /** The failover policy of the Failover Group. */
    az_sql_failover_group_create_command_builder.prototype.failoverPolicy = function (value) {
        this.setFlag("--failover-policy", value);
        return this;
    };
    /** Interval in hours before automatic failover is initiated if an outage occurs on the primary server. This indicates that Azure SQL Database will not initiate automatic failover before the grace period expires. Please note that failover operation with --allow-data-loss option might cause data loss due to the nature of asynchronous synchronization. */
    az_sql_failover_group_create_command_builder.prototype.gracePeriod = function (value) {
        this.setFlag("--grace-period", value);
        return this;
    };
    /** The name of the resource group of the partner server. */
    az_sql_failover_group_create_command_builder.prototype.partnerResourceGroup = function (value) {
        this.setFlag("--partner-resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_failover_group_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_failover_group_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes a failover group.
 *
 * Syntax:
 * ```
 * az sql failover-group delete --name
 *                              [--ids]
 *                              [--resource-group]
 *                              [--server]
 *                              [--subscription]
 * ```
 *
 * @param {string} name The name of the Failover Group.
 */
var az_sql_failover_group_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_failover_group_delete_command_builder, _super);
    function az_sql_failover_group_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the Failover Group. */
    az_sql_failover_group_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_failover_group_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_failover_group_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_failover_group_delete_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_failover_group_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_failover_group_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists the failover groups in a server.
 *
 * Syntax:
 * ```
 * az sql failover-group list [--ids]
 *                            [--query-examples]
 *                            [--resource-group]
 *                            [--server]
 *                            [--subscription]
 * ```
 */
var az_sql_failover_group_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_failover_group_list_command_builder, _super);
    function az_sql_failover_group_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_failover_group_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_failover_group_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_failover_group_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_failover_group_list_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_failover_group_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_failover_group_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Set the primary of the failover group by failing over all databases from the current primary server.
 *
 * Syntax:
 * ```
 * az sql failover-group set-primary --name
 *                                   [--allow-data-loss]
 *                                   [--ids]
 *                                   [--resource-group]
 *                                   [--server]
 *                                   [--subscription]
 * ```
 *
 * @param {string} name The name of the Failover Group.
 */
var az_sql_failover_group_set_primary_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_failover_group_set_primary_command_builder, _super);
    function az_sql_failover_group_set_primary_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the Failover Group. */
    az_sql_failover_group_set_primary_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Complete the failover even if doing so may result in data loss. This will allow the failover to proceed even if a primary database is unavailable. */
    az_sql_failover_group_set_primary_command_builder.prototype.allowDataLoss = function (value) {
        this.setFlag("--allow-data-loss", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_failover_group_set_primary_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_failover_group_set_primary_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_failover_group_set_primary_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_failover_group_set_primary_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_failover_group_set_primary_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a failover group.
 *
 * Syntax:
 * ```
 * az sql failover-group show --name
 *                            [--ids]
 *                            [--query-examples]
 *                            [--resource-group]
 *                            [--server]
 *                            [--subscription]
 * ```
 *
 * @param {string} name The name of the Failover Group.
 */
var az_sql_failover_group_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_failover_group_show_command_builder, _super);
    function az_sql_failover_group_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the Failover Group. */
    az_sql_failover_group_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_failover_group_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_failover_group_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_failover_group_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_failover_group_show_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_failover_group_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_failover_group_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates the failover group.
 *
 * Syntax:
 * ```
 * az sql failover-group update --name
 *                              [--add]
 *                              [--add-db]
 *                              [--failover-policy {Automatic, Manual}]
 *                              [--force-string]
 *                              [--grace-period]
 *                              [--ids]
 *                              [--remove]
 *                              [--remove-db]
 *                              [--resource-group]
 *                              [--server]
 *                              [--set]
 *                              [--subscription]
 * ```
 *
 * @param {string} name The name of the Failover Group.
 */
var az_sql_failover_group_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_failover_group_update_command_builder, _super);
    function az_sql_failover_group_update_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the Failover Group. */
    az_sql_failover_group_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_sql_failover_group_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** List of databases to add to Failover Group. */
    az_sql_failover_group_update_command_builder.prototype.addDb = function (value) {
        this.setFlag("--add-db", value);
        return this;
    };
    /** The failover policy of the Failover Group. */
    az_sql_failover_group_update_command_builder.prototype.failoverPolicy = function (value) {
        this.setFlag("--failover-policy", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_sql_failover_group_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Interval in hours before automatic failover is initiated if an outage occurs on the primary server. This indicates that Azure SQL Database will not initiate automatic failover before the grace period expires. Please note that failover operation with --allow-data-loss option might cause data loss due to the nature of asynchronous synchronization. */
    az_sql_failover_group_update_command_builder.prototype.gracePeriod = function (value) {
        this.setFlag("--grace-period", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_failover_group_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_sql_failover_group_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** List of databases to remove from Failover Group. */
    az_sql_failover_group_update_command_builder.prototype.removeDb = function (value) {
        this.setFlag("--remove-db", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_failover_group_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_failover_group_update_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_sql_failover_group_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_failover_group_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_failover_group_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Creates an instance failover group between two connected managed instances.
 *
 * Syntax:
 * ```
 * az sql instance-failover-group create --mi
 *                                       --name
 *                                       --partner-mi
 *                                       --partner-resource-group
 *                                       --resource-group
 *                                       [--failover-policy {Automatic, Manual}]
 *                                       [--grace-period]
 *                                       [--subscription]
 * ```
 *
 * @param {string} sourceMi Name of the Azure SQL managed instance.
 * @param {string} name The name of the Instance Failover Group.
 * @param {string} partnerMi The name of the partner managed instance of a Instance Failover Group.
 * @param {string} partnerResourceGroup The name of the resource group of the partner managed instance.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sql_instance_failover_group_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_instance_failover_group_create_command_builder, _super);
    function az_sql_instance_failover_group_create_command_builder(commandPath, resultDataTypeName, sourceMi, name, partnerMi, partnerResourceGroup, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.sourceMi(sourceMi);
        _this.name(name);
        _this.partnerMi(partnerMi);
        _this.partnerResourceGroup(partnerResourceGroup);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Azure SQL managed instance. */
    az_sql_instance_failover_group_create_command_builder.prototype.sourceMi = function (value) {
        this.setFlag("--source-mi", value);
        return this;
    };
    /** The name of the Instance Failover Group. */
    az_sql_instance_failover_group_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the partner managed instance of a Instance Failover Group. */
    az_sql_instance_failover_group_create_command_builder.prototype.partnerMi = function (value) {
        this.setFlag("--partner-mi", value);
        return this;
    };
    /** The name of the resource group of the partner managed instance. */
    az_sql_instance_failover_group_create_command_builder.prototype.partnerResourceGroup = function (value) {
        this.setFlag("--partner-resource-group", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_instance_failover_group_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The failover policy of the Instance Failover Group. */
    az_sql_instance_failover_group_create_command_builder.prototype.failoverPolicy = function (value) {
        this.setFlag("--failover-policy", value);
        return this;
    };
    /** Interval in hours before automatic failover is initiated if an outage occurs on the primary server. This indicates that Azure SQL Database will not initiate automatic failover before the grace period expires. Please note that failover operation with --allow-data-loss option might cause data loss due to the nature of asynchronous synchronization. */
    az_sql_instance_failover_group_create_command_builder.prototype.gracePeriod = function (value) {
        this.setFlag("--grace-period", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_instance_failover_group_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_instance_failover_group_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes a failover group.
 *
 * Syntax:
 * ```
 * az sql instance-failover-group delete --location
 *                                       --name
 *                                       --resource-group
 *                                       [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name The name of the Instance Failover Group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sql_instance_failover_group_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_instance_failover_group_delete_command_builder, _super);
    function az_sql_instance_failover_group_delete_command_builder(commandPath, resultDataTypeName, location, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_sql_instance_failover_group_delete_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name of the Instance Failover Group. */
    az_sql_instance_failover_group_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_instance_failover_group_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_instance_failover_group_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_instance_failover_group_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Set the primary of the instance failover group by failing over all databases from the current primary managed instance.
 *
 * Syntax:
 * ```
 * az sql instance-failover-group set-primary --location
 *                                            --name
 *                                            --resource-group
 *                                            [--allow-data-loss]
 *                                            [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name The name of the Instance Failover Group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sql_instance_failover_group_set_primary_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_instance_failover_group_set_primary_command_builder, _super);
    function az_sql_instance_failover_group_set_primary_command_builder(commandPath, resultDataTypeName, location, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_sql_instance_failover_group_set_primary_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name of the Instance Failover Group. */
    az_sql_instance_failover_group_set_primary_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_instance_failover_group_set_primary_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Complete the failover even if doing so may result in data loss. This will allow the failover to proceed even if a primary database is unavailable. */
    az_sql_instance_failover_group_set_primary_command_builder.prototype.allowDataLoss = function (value) {
        this.setFlag("--allow-data-loss", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_instance_failover_group_set_primary_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_instance_failover_group_set_primary_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a failover group.
 *
 * Syntax:
 * ```
 * az sql instance-failover-group show --location
 *                                     --name
 *                                     --resource-group
 *                                     [--query-examples]
 *                                     [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name The name of the Instance Failover Group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sql_instance_failover_group_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_instance_failover_group_show_command_builder, _super);
    function az_sql_instance_failover_group_show_command_builder(commandPath, resultDataTypeName, location, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_sql_instance_failover_group_show_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name of the Instance Failover Group. */
    az_sql_instance_failover_group_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_instance_failover_group_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_instance_failover_group_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_instance_failover_group_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_instance_failover_group_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates the instance failover group.
 *
 * Syntax:
 * ```
 * az sql instance-failover-group update --location
 *                                       --name
 *                                       --resource-group
 *                                       [--add]
 *                                       [--failover-policy {Automatic, Manual}]
 *                                       [--force-string]
 *                                       [--grace-period]
 *                                       [--remove]
 *                                       [--set]
 *                                       [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name The name of the Instance Failover Group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sql_instance_failover_group_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_instance_failover_group_update_command_builder, _super);
    function az_sql_instance_failover_group_update_command_builder(commandPath, resultDataTypeName, location, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_sql_instance_failover_group_update_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name of the Instance Failover Group. */
    az_sql_instance_failover_group_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_instance_failover_group_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_sql_instance_failover_group_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The failover policy of the Instance Failover Group. */
    az_sql_instance_failover_group_update_command_builder.prototype.failoverPolicy = function (value) {
        this.setFlag("--failover-policy", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_sql_instance_failover_group_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Interval in hours before automatic failover is initiated if an outage occurs on the primary server. This indicates that Azure SQL Database will not initiate automatic failover before the grace period expires. Please note that failover operation with --allow-data-loss option might cause data loss due to the nature of asynchronous synchronization. */
    az_sql_instance_failover_group_update_command_builder.prototype.gracePeriod = function (value) {
        this.setFlag("--grace-period", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_sql_instance_failover_group_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_sql_instance_failover_group_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_instance_failover_group_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_instance_failover_group_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create an instance pool.
 *
 * Syntax:
 * ```
 * az sql instance-pool create --capacity
 *                             --edition
 *                             --family
 *                             --license-type {BasePrice, LicenseIncluded}
 *                             --location
 *                             --name
 *                             --resource-group
 *                             --subnet
 *                             [--no-wait]
 *                             [--subscription]
 *                             [--tags]
 *                             [--vnet-name]
 * ```
 *
 * @param {string} capacity Capacity of the instance pool in vcores.
 * @param {string} edition The edition component of the sku. Allowed value: GeneralPurpose.
 * @param {string} family The compute generation component of the sku. Allowed value: Gen5.
 * @param {'BasePrice' | 'LicenseIncluded'} licenseType The license type to apply for this instance pool.
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name Instance Pool Name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} subnet Name or ID of the subnet that allows access to an Instance Pool. If subnet name is provided, --vnet-name must be provided.
 */
var az_sql_instance_pool_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_instance_pool_create_command_builder, _super);
    function az_sql_instance_pool_create_command_builder(commandPath, resultDataTypeName, capacity, edition, family, licenseType, location, name, resourceGroup, subnet) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.capacity(capacity);
        _this.edition(edition);
        _this.family(family);
        _this.licenseType(licenseType);
        _this.location(location);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.subnet(subnet);
        return _this;
    }
    /** Capacity of the instance pool in vcores. */
    az_sql_instance_pool_create_command_builder.prototype.capacity = function (value) {
        this.setFlag("--capacity", value);
        return this;
    };
    /** The edition component of the sku. Allowed value: GeneralPurpose. */
    az_sql_instance_pool_create_command_builder.prototype.edition = function (value) {
        this.setFlag("--edition", value);
        return this;
    };
    /** The compute generation component of the sku. Allowed value: Gen5. */
    az_sql_instance_pool_create_command_builder.prototype.family = function (value) {
        this.setFlag("--family", value);
        return this;
    };
    /** The license type to apply for this instance pool. */
    az_sql_instance_pool_create_command_builder.prototype.licenseType = function (value) {
        this.setFlag("--license-type", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_sql_instance_pool_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Instance Pool Name. */
    az_sql_instance_pool_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_instance_pool_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of the subnet that allows access to an Instance Pool. If subnet name is provided, --vnet-name must be provided. */
    az_sql_instance_pool_create_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_instance_pool_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_instance_pool_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_sql_instance_pool_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The virtual network name. */
    az_sql_instance_pool_create_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_sql_instance_pool_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an instance pool.
 *
 * Syntax:
 * ```
 * az sql instance-pool delete --name
 *                             --resource-group
 *                             [--no-wait]
 *                             [--subscription]
 *                             [--yes]
 * ```
 *
 * @param {string} name Instance Pool Name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sql_instance_pool_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_instance_pool_delete_command_builder, _super);
    function az_sql_instance_pool_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Instance Pool Name. */
    az_sql_instance_pool_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_instance_pool_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_instance_pool_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_instance_pool_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_sql_instance_pool_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_sql_instance_pool_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List available instance pools.
 *
 * Syntax:
 * ```
 * az sql instance-pool list [--query-examples]
 *                           [--resource-group]
 *                           [--subscription]
 * ```
 */
var az_sql_instance_pool_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_instance_pool_list_command_builder, _super);
    function az_sql_instance_pool_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_instance_pool_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_instance_pool_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_instance_pool_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_instance_pool_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details for an instance pool.
 *
 * Syntax:
 * ```
 * az sql instance-pool show --name
 *                           --resource-group
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} name Instance Pool Name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sql_instance_pool_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_instance_pool_show_command_builder, _super);
    function az_sql_instance_pool_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Instance Pool Name. */
    az_sql_instance_pool_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_instance_pool_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_instance_pool_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_instance_pool_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_instance_pool_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update an instance pool.
 *
 * Syntax:
 * ```
 * az sql instance-pool update --name
 *                             --resource-group
 *                             [--subscription]
 *                             [--tags]
 * ```
 *
 * @param {string} name Instance Pool Name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sql_instance_pool_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_instance_pool_update_command_builder, _super);
    function az_sql_instance_pool_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Instance Pool Name. */
    az_sql_instance_pool_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_instance_pool_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_instance_pool_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_sql_instance_pool_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_sql_instance_pool_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Wait for an instance pool to reach a desired state.
 *
 * Syntax:
 * ```
 * az sql instance-pool wait --name
 *                           --resource-group
 *                           [--created]
 *                           [--custom]
 *                           [--deleted]
 *                           [--exists]
 *                           [--interval]
 *                           [--subscription]
 *                           [--timeout]
 *                           [--updated]
 * ```
 *
 * @param {string} name Instance Pool Name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sql_instance_pool_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_instance_pool_wait_command_builder, _super);
    function az_sql_instance_pool_wait_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Instance Pool Name. */
    az_sql_instance_pool_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_instance_pool_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_sql_instance_pool_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_sql_instance_pool_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_sql_instance_pool_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_sql_instance_pool_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_sql_instance_pool_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_instance_pool_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_sql_instance_pool_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_sql_instance_pool_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_sql_instance_pool_wait_command_builder;
}(base_1.CommandBuilder));
/**
 * Creates a new managed instance Active Directory administrator.
 *
 * Syntax:
 * ```
 * az sql mi ad-admin create --display-name
 *                           --managed-instance
 *                           --object-id
 *                           --resource-group
 *                           [--subscription]
 * ```
 *
 * @param {string} displayName Display name of the Azure AD administrator user or group.
 * @param {string} managedInstance Name of the Azure SQL managed instance.
 * @param {string} objectId The unique ID of the Azure AD administrator.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sql_mi_ad_admin_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_mi_ad_admin_create_command_builder, _super);
    function az_sql_mi_ad_admin_create_command_builder(commandPath, resultDataTypeName, displayName, managedInstance, objectId, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.displayName(displayName);
        _this.managedInstance(managedInstance);
        _this.objectId(objectId);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Display name of the Azure AD administrator user or group. */
    az_sql_mi_ad_admin_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Name of the Azure SQL managed instance. */
    az_sql_mi_ad_admin_create_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** The unique ID of the Azure AD administrator. */
    az_sql_mi_ad_admin_create_command_builder.prototype.objectId = function (value) {
        this.setFlag("--object-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_mi_ad_admin_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_mi_ad_admin_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_mi_ad_admin_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes an existing managed instance Active Directory Administrator.
 *
 * Syntax:
 * ```
 * az sql mi ad-admin delete [--ids]
 *                           [--managed-instance]
 *                           [--resource-group]
 *                           [--subscription]
 * ```
 */
var az_sql_mi_ad_admin_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_mi_ad_admin_delete_command_builder, _super);
    function az_sql_mi_ad_admin_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_mi_ad_admin_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL managed instance. */
    az_sql_mi_ad_admin_delete_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_mi_ad_admin_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_mi_ad_admin_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_mi_ad_admin_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Returns a list of managed instance Active Directory Administrators.
 *
 * Syntax:
 * ```
 * az sql mi ad-admin list [--ids]
 *                         [--managed-instance]
 *                         [--query-examples]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
var az_sql_mi_ad_admin_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_mi_ad_admin_list_command_builder, _super);
    function az_sql_mi_ad_admin_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_mi_ad_admin_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL managed instance. */
    az_sql_mi_ad_admin_list_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_mi_ad_admin_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_mi_ad_admin_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_mi_ad_admin_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_mi_ad_admin_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates an existing managed instance Active Directory administrator.
 *
 * Syntax:
 * ```
 * az sql mi ad-admin update --display-name
 *                           --object-id
 *                           [--ids]
 *                           [--managed-instance]
 *                           [--resource-group]
 *                           [--subscription]
 * ```
 *
 * @param {string} displayName Display name of the Azure AD administrator user or group.
 * @param {string} objectId The unique ID of the Azure AD administrator.
 */
var az_sql_mi_ad_admin_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_mi_ad_admin_update_command_builder, _super);
    function az_sql_mi_ad_admin_update_command_builder(commandPath, resultDataTypeName, displayName, objectId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.displayName(displayName);
        _this.objectId(objectId);
        return _this;
    }
    /** Display name of the Azure AD administrator user or group. */
    az_sql_mi_ad_admin_update_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** The unique ID of the Azure AD administrator. */
    az_sql_mi_ad_admin_update_command_builder.prototype.objectId = function (value) {
        this.setFlag("--object-id", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_mi_ad_admin_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL managed instance. */
    az_sql_mi_ad_admin_update_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_mi_ad_admin_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_mi_ad_admin_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_mi_ad_admin_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Creates a SQL Instance key.
 *
 * Syntax:
 * ```
 * az sql mi key create --kid
 *                      --managed-instance
 *                      --resource-group
 *                      [--subscription]
 * ```
 *
 * @param {string} kid The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>".
 * @param {string} managedInstance Name of the Azure SQL managed instance.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sql_mi_key_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_mi_key_create_command_builder, _super);
    function az_sql_mi_key_create_command_builder(commandPath, resultDataTypeName, kid, managedInstance, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.kid(kid);
        _this.managedInstance(managedInstance);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    az_sql_mi_key_create_command_builder.prototype.kid = function (value) {
        this.setFlag("--kid", value);
        return this;
    };
    /** Name of the Azure SQL managed instance. */
    az_sql_mi_key_create_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_mi_key_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_mi_key_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_mi_key_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes a SQL Instance key.
 *
 * Syntax:
 * ```
 * az sql mi key delete --kid
 *                      [--ids]
 *                      [--managed-instance]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 *
 * @param {string} kid The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>".
 */
var az_sql_mi_key_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_mi_key_delete_command_builder, _super);
    function az_sql_mi_key_delete_command_builder(commandPath, resultDataTypeName, kid) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.kid(kid);
        return _this;
    }
    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    az_sql_mi_key_delete_command_builder.prototype.kid = function (value) {
        this.setFlag("--kid", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_mi_key_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL managed instance. */
    az_sql_mi_key_delete_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_mi_key_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_mi_key_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_mi_key_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a list of managed instance keys.
 *
 * Syntax:
 * ```
 * az sql mi key list [--filter]
 *                    [--ids]
 *                    [--managed-instance]
 *                    [--query-examples]
 *                    [--resource-group]
 *                    [--subscription]
 * ```
 */
var az_sql_mi_key_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_mi_key_list_command_builder, _super);
    function az_sql_mi_key_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** An OData filter expression that filters elements in the collection. */
    az_sql_mi_key_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_mi_key_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL managed instance. */
    az_sql_mi_key_list_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_mi_key_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_mi_key_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_mi_key_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_mi_key_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows a SQL Instance key.
 *
 * Syntax:
 * ```
 * az sql mi key show --kid
 *                    [--ids]
 *                    [--managed-instance]
 *                    [--query-examples]
 *                    [--resource-group]
 *                    [--subscription]
 * ```
 *
 * @param {string} kid The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>".
 */
var az_sql_mi_key_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_mi_key_show_command_builder, _super);
    function az_sql_mi_key_show_command_builder(commandPath, resultDataTypeName, kid) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.kid(kid);
        return _this;
    }
    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    az_sql_mi_key_show_command_builder.prototype.kid = function (value) {
        this.setFlag("--kid", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_mi_key_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL managed instance. */
    az_sql_mi_key_show_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_mi_key_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_mi_key_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_mi_key_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_mi_key_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Cancels the asynchronous operation on the managed instance.
 *
 * Syntax:
 * ```
 * az sql mi op cancel --name
 *                     [--ids]
 *                     [--managed-instance]
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 *
 * @param {string} name The unique name of the operation to cancel.
 */
var az_sql_mi_op_cancel_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_mi_op_cancel_command_builder, _super);
    function az_sql_mi_op_cancel_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The unique name of the operation to cancel. */
    az_sql_mi_op_cancel_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_mi_op_cancel_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL Managed Instance. */
    az_sql_mi_op_cancel_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_mi_op_cancel_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_mi_op_cancel_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_mi_op_cancel_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a list of operations performed on the managed instance.
 *
 * Syntax:
 * ```
 * az sql mi op list [--ids]
 *                   [--managed-instance]
 *                   [--query-examples]
 *                   [--resource-group]
 *                   [--subscription]
 * ```
 */
var az_sql_mi_op_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_mi_op_list_command_builder, _super);
    function az_sql_mi_op_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_mi_op_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL Managed Instance. */
    az_sql_mi_op_list_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_mi_op_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_mi_op_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_mi_op_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_mi_op_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a management operation on a managed instance.
 *
 * Syntax:
 * ```
 * az sql mi op show --name
 *                   [--ids]
 *                   [--managed-instance]
 *                   [--query-examples]
 *                   [--resource-group]
 *                   [--subscription]
 * ```
 *
 * @param {string} name The unique name of the operation to show.
 */
var az_sql_mi_op_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_mi_op_show_command_builder, _super);
    function az_sql_mi_op_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The unique name of the operation to show. */
    az_sql_mi_op_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_mi_op_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL Managed Instance. */
    az_sql_mi_op_show_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_mi_op_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_mi_op_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_mi_op_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_mi_op_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Sets the SQL Instance's encryption protector.
 *
 * Syntax:
 * ```
 * az sql mi tde-key set --server-key-type {AzureKeyVault, ServiceManaged}
 *                       [--ids]
 *                       [--kid]
 *                       [--managed-instance]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 *
 * @param {'AzureKeyVault' | 'ServiceManaged'} serverKeyType The type of the server key.
 */
var az_sql_mi_tde_key_set_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_mi_tde_key_set_command_builder, _super);
    function az_sql_mi_tde_key_set_command_builder(commandPath, resultDataTypeName, serverKeyType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.serverKeyType(serverKeyType);
        return _this;
    }
    /** The type of the server key. */
    az_sql_mi_tde_key_set_command_builder.prototype.serverKeyType = function (value) {
        this.setFlag("--server-key-type", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_mi_tde_key_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    az_sql_mi_tde_key_set_command_builder.prototype.kid = function (value) {
        this.setFlag("--kid", value);
        return this;
    };
    /** Name of the Azure SQL managed instance. */
    az_sql_mi_tde_key_set_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_mi_tde_key_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_mi_tde_key_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_mi_tde_key_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a managed instance encryption protector.
 *
 * Syntax:
 * ```
 * az sql mi tde-key show [--ids]
 *                        [--managed-instance]
 *                        [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 */
var az_sql_mi_tde_key_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_mi_tde_key_show_command_builder, _super);
    function az_sql_mi_tde_key_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_mi_tde_key_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL managed instance. */
    az_sql_mi_tde_key_show_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_mi_tde_key_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_mi_tde_key_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_mi_tde_key_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_mi_tde_key_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a managed instance.
 *
 * Syntax:
 * ```
 * az sql mi create --admin-password
 *                  --admin-user
 *                  --name
 *                  --resource-group
 *                  --subnet
 *                  [--assign-identity]
 *                  [--backup-storage-redundancy]
 *                  [--capacity]
 *                  [--collation]
 *                  [--edition]
 *                  [--family]
 *                  [--license-type {BasePrice, LicenseIncluded}]
 *                  [--location]
 *                  [--minimal-tls-version {1.0, 1.1, 1.2, None}]
 *                  [--no-wait]
 *                  [--proxy-override {Default, Proxy, Redirect}]
 *                  [--public-data-endpoint-enabled {false, true}]
 *                  [--storage]
 *                  [--subscription]
 *                  [--tags]
 *                  [--timezone-id]
 *                  [--vnet-name]
 *                  [--yes]
 * ```
 *
 * @param {string} adminPassword The administrator login password (required for managed instance creation).
 * @param {string} adminUser Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation).
 * @param {string} name The managed instance name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} subnet Name or ID of the subnet that allows access to an Azure Sql Managed Instance. If subnet name is provided, --vnet-name must be provided.
 */
var az_sql_mi_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_mi_create_command_builder, _super);
    function az_sql_mi_create_command_builder(commandPath, resultDataTypeName, adminPassword, adminUser, name, resourceGroup, subnet) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.adminPassword(adminPassword);
        _this.adminUser(adminUser);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.subnet(subnet);
        return _this;
    }
    /** The administrator login password (required for managed instance creation). */
    az_sql_mi_create_command_builder.prototype.adminPassword = function (value) {
        this.setFlag("--admin-password", value);
        return this;
    };
    /** Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation). */
    az_sql_mi_create_command_builder.prototype.adminUser = function (value) {
        this.setFlag("--admin-user", value);
        return this;
    };
    /** The managed instance name. */
    az_sql_mi_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_mi_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of the subnet that allows access to an Azure Sql Managed Instance. If subnet name is provided, --vnet-name must be provided. */
    az_sql_mi_create_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Generate and assign an Azure Active Directory Identity for this managed instance for use with key management services like Azure KeyVault. */
    az_sql_mi_create_command_builder.prototype.assignIdentity = function (value) {
        this.setFlag("--assign-identity", value);
        return this;
    };
    /** Backup storage redundancy used to store backups. */
    az_sql_mi_create_command_builder.prototype.backupStorageRedundancy = function (value) {
        this.setFlag("--backup-storage-redundancy", value);
        return this;
    };
    /** The capacity of the managed instance in integer number of vcores. */
    az_sql_mi_create_command_builder.prototype.capacity = function (value) {
        this.setFlag("--capacity", value);
        return this;
    };
    /** The collation of the managed instance. */
    az_sql_mi_create_command_builder.prototype.collation = function (value) {
        this.setFlag("--collation", value);
        return this;
    };
    /** The edition component of the sku. Allowed values include: GeneralPurpose, BusinessCritical. */
    az_sql_mi_create_command_builder.prototype.edition = function (value) {
        this.setFlag("--edition", value);
        return this;
    };
    /** The compute generation component of the sku. Allowed values include: Gen4, Gen5. */
    az_sql_mi_create_command_builder.prototype.family = function (value) {
        this.setFlag("--family", value);
        return this;
    };
    /** The license type to apply for this managed instance. */
    az_sql_mi_create_command_builder.prototype.licenseType = function (value) {
        this.setFlag("--license-type", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_sql_mi_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The minimal TLS version enforced by the managed instance for inbound connections. */
    az_sql_mi_create_command_builder.prototype.minimalTlsVersion = function (value) {
        this.setFlag("--minimal-tls-version", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_mi_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The connection type used for connecting to the instance. */
    az_sql_mi_create_command_builder.prototype.proxyOverride = function (value) {
        this.setFlag("--proxy-override", value);
        return this;
    };
    /** Whether or not the public data endpoint is enabled for the instance. */
    az_sql_mi_create_command_builder.prototype.publicDataEndpointEnabled = function (value) {
        this.setFlag("--public-data-endpoint-enabled", value.toString());
        return this;
    };
    /** The storage size of the managed instance. Storage size must be specified in increments of 32 GB. */
    az_sql_mi_create_command_builder.prototype.storage = function (value) {
        this.setFlag("--storage", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_mi_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_sql_mi_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The time zone id for the instance to set. A list of time zone ids is exposed through the sys.time_zone_info (Transact-SQL) view. */
    az_sql_mi_create_command_builder.prototype.timezoneId = function (value) {
        this.setFlag("--timezone-id", value);
        return this;
    };
    /** The virtual network name. */
    az_sql_mi_create_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_sql_mi_create_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_sql_mi_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a managed instance.
 *
 * Syntax:
 * ```
 * az sql mi delete [--ids]
 *                  [--name]
 *                  [--no-wait]
 *                  [--resource-group]
 *                  [--subscription]
 *                  [--yes]
 * ```
 */
var az_sql_mi_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_mi_delete_command_builder, _super);
    function az_sql_mi_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_mi_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The managed instance name. */
    az_sql_mi_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_mi_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_mi_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_mi_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_sql_mi_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_sql_mi_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Failover a managed instance.
 *
 * Syntax:
 * ```
 * az sql mi failover [--ids]
 *                    [--name]
 *                    [--no-wait]
 *                    [--replica-type]
 *                    [--resource-group]
 *                    [--subscription]
 * ```
 */
var az_sql_mi_failover_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_mi_failover_command_builder, _super);
    function az_sql_mi_failover_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_mi_failover_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The managed instance name. */
    az_sql_mi_failover_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_mi_failover_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The type of replica to be failed over. */
    az_sql_mi_failover_command_builder.prototype.replicaType = function (value) {
        this.setFlag("--replica-type", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_mi_failover_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_mi_failover_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_mi_failover_command_builder;
}(base_1.CommandBuilder));
/**
 * List available managed instances.
 *
 * Syntax:
 * ```
 * az sql mi list [--query-examples]
 *                [--resource-group]
 *                [--subscription]
 * ```
 */
var az_sql_mi_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_mi_list_command_builder, _super);
    function az_sql_mi_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_mi_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_mi_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_mi_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_mi_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details for a managed instance.
 *
 * Syntax:
 * ```
 * az sql mi show [--ids]
 *                [--name]
 *                [--query-examples]
 *                [--resource-group]
 *                [--subscription]
 * ```
 */
var az_sql_mi_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_mi_show_command_builder, _super);
    function az_sql_mi_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_mi_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The managed instance name. */
    az_sql_mi_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_mi_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_mi_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_mi_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_mi_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a managed instance.
 *
 * Syntax:
 * ```
 * az sql mi update [--add]
 *                  [--admin-password]
 *                  [--assign-identity]
 *                  [--capacity]
 *                  [--edition]
 *                  [--family]
 *                  [--force-string]
 *                  [--ids]
 *                  [--license-type {BasePrice, LicenseIncluded}]
 *                  [--minimal-tls-version {1.0, 1.1, 1.2, None}]
 *                  [--name]
 *                  [--no-wait]
 *                  [--proxy-override {Default, Proxy, Redirect}]
 *                  [--public-data-endpoint-enabled {false, true}]
 *                  [--remove]
 *                  [--resource-group]
 *                  [--set]
 *                  [--storage]
 *                  [--subscription]
 *                  [--tags]
 * ```
 */
var az_sql_mi_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_mi_update_command_builder, _super);
    function az_sql_mi_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_sql_mi_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The administrator login password (required for managed instance creation). */
    az_sql_mi_update_command_builder.prototype.adminPassword = function (value) {
        this.setFlag("--admin-password", value);
        return this;
    };
    /** Generate and assign an Azure Active Directory Identity for this managed instance for use with key management services like Azure KeyVault. If identity is already assigned - do nothing. */
    az_sql_mi_update_command_builder.prototype.assignIdentity = function (value) {
        this.setFlag("--assign-identity", value);
        return this;
    };
    /** The capacity of the managed instance in integer number of vcores. */
    az_sql_mi_update_command_builder.prototype.capacity = function (value) {
        this.setFlag("--capacity", value);
        return this;
    };
    /** The edition component of the sku. Allowed values include: GeneralPurpose, BusinessCritical. */
    az_sql_mi_update_command_builder.prototype.edition = function (value) {
        this.setFlag("--edition", value);
        return this;
    };
    /** The compute generation component of the sku. Allowed values include: Gen4, Gen5. */
    az_sql_mi_update_command_builder.prototype.family = function (value) {
        this.setFlag("--family", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_sql_mi_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_mi_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The license type to apply for this managed instance. */
    az_sql_mi_update_command_builder.prototype.licenseType = function (value) {
        this.setFlag("--license-type", value);
        return this;
    };
    /** The minimal TLS version enforced by the managed instance for inbound connections. */
    az_sql_mi_update_command_builder.prototype.minimalTlsVersion = function (value) {
        this.setFlag("--minimal-tls-version", value);
        return this;
    };
    /** The managed instance name. */
    az_sql_mi_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_mi_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The connection type used for connecting to the instance. */
    az_sql_mi_update_command_builder.prototype.proxyOverride = function (value) {
        this.setFlag("--proxy-override", value);
        return this;
    };
    /** Whether or not the public data endpoint is enabled for the instance. */
    az_sql_mi_update_command_builder.prototype.publicDataEndpointEnabled = function (value) {
        this.setFlag("--public-data-endpoint-enabled", value.toString());
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_sql_mi_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_mi_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_sql_mi_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** The storage size of the managed instance. Storage size must be specified in increments of 32 GB. */
    az_sql_mi_update_command_builder.prototype.storage = function (value) {
        this.setFlag("--storage", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_mi_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_sql_mi_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_sql_mi_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a long term retention backup.
 *
 * Syntax:
 * ```
 * az sql midb ltr-backup delete [--backup-id]
 *                               [--database]
 *                               [--location]
 *                               [--managed-instance]
 *                               [--name]
 *                               [--subscription]
 *                               [--yes]
 * ```
 */
var az_sql_midb_ltr_backup_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_midb_ltr_backup_delete_command_builder, _super);
    function az_sql_midb_ltr_backup_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The resource id of the backups. Use 'az sql midb ltr-backup show' or 'az sql midb ltr-backup list' for backup id. If provided, other arguments are not required. */
    az_sql_midb_ltr_backup_delete_command_builder.prototype.backupId = function (value) {
        this.setFlag("--backup-id", value);
        return this;
    };
    /** The name of the Azure SQL Managed Database. */
    az_sql_midb_ltr_backup_delete_command_builder.prototype.database = function (value) {
        this.setFlag("--database", value);
        return this;
    };
    /** The location of the desired backup(s). */
    az_sql_midb_ltr_backup_delete_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the Azure SQL managed instance. */
    az_sql_midb_ltr_backup_delete_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** The name of the LTR backup. Use 'az sql midb ltr-backup show' or 'az sql midb ltr-backup list' for backup name. */
    az_sql_midb_ltr_backup_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_midb_ltr_backup_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_sql_midb_ltr_backup_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_sql_midb_ltr_backup_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the long term retention backups for a location, instance or database.
 *
 * Syntax:
 * ```
 * az sql midb ltr-backup list --location
 *                             [--database]
 *                             [--database-state]
 *                             [--latest]
 *                             [--managed-instance]
 *                             [--query-examples]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 *
 * @param {string} location The location of the desired backup(s).
 */
var az_sql_midb_ltr_backup_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_midb_ltr_backup_list_command_builder, _super);
    function az_sql_midb_ltr_backup_list_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** The location of the desired backup(s). */
    az_sql_midb_ltr_backup_list_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name of the Azure SQL Managed Database. If specified (along with instance name), retrieves all requested backups under this database. */
    az_sql_midb_ltr_backup_list_command_builder.prototype.database = function (value) {
        this.setFlag("--database", value);
        return this;
    };
    /** 'All', 'Live', or 'Deleted'. Will fetch backups only from databases of specified state. If no state provied, defaults to 'All'. */
    az_sql_midb_ltr_backup_list_command_builder.prototype.databaseState = function (value) {
        this.setFlag("--database-state", value);
        return this;
    };
    /** If true, will only return the latest backup for each database. */
    az_sql_midb_ltr_backup_list_command_builder.prototype.onlyLatestPerDatabase = function (value) {
        this.setFlag("--only-latest-per-database", value);
        return this;
    };
    /** Name of the Azure SQL managed instance. If specified, retrieves all requested backups under this managed instance. */
    az_sql_midb_ltr_backup_list_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_midb_ltr_backup_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_midb_ltr_backup_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_midb_ltr_backup_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_midb_ltr_backup_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Restore a long term retention backup to a new database.
 *
 * Syntax:
 * ```
 * az sql midb ltr-backup restore --backup-id
 *                                --dest-database
 *                                --dest-mi
 *                                --dest-resource-group
 *                                [--no-wait]
 *                                [--subscription]
 * ```
 *
 * @param {string} backupId The resource id of the long term retention backup to be restored. Use 'az sql midb ltr-backup show' or 'az sql midb ltr-backup list' for backup id.
 * @param {string} destDatabase Name of the managed database that will be created as the restore destination.
 * @param {string} destMi Name of the managed instance to restore managed database to.
 * @param {string} destResourceGroup Name of the resource group of the managed instance to restore managed database to.
 */
var az_sql_midb_ltr_backup_restore_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_midb_ltr_backup_restore_command_builder, _super);
    function az_sql_midb_ltr_backup_restore_command_builder(commandPath, resultDataTypeName, backupId, destDatabase, destMi, destResourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.backupId(backupId);
        _this.destDatabase(destDatabase);
        _this.destMi(destMi);
        _this.destResourceGroup(destResourceGroup);
        return _this;
    }
    /** The resource id of the long term retention backup to be restored. Use 'az sql midb ltr-backup show' or 'az sql midb ltr-backup list' for backup id. */
    az_sql_midb_ltr_backup_restore_command_builder.prototype.backupId = function (value) {
        this.setFlag("--backup-id", value);
        return this;
    };
    /** Name of the managed database that will be created as the restore destination. */
    az_sql_midb_ltr_backup_restore_command_builder.prototype.destDatabase = function (value) {
        this.setFlag("--dest-database", value);
        return this;
    };
    /** Name of the managed instance to restore managed database to. */
    az_sql_midb_ltr_backup_restore_command_builder.prototype.destMi = function (value) {
        this.setFlag("--dest-mi", value);
        return this;
    };
    /** Name of the resource group of the managed instance to restore managed database to. */
    az_sql_midb_ltr_backup_restore_command_builder.prototype.destResourceGroup = function (value) {
        this.setFlag("--dest-resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_midb_ltr_backup_restore_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_midb_ltr_backup_restore_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_midb_ltr_backup_restore_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a long term retention backup for a managed database.
 *
 * Syntax:
 * ```
 * az sql midb ltr-backup show [--backup-id]
 *                             [--database]
 *                             [--location]
 *                             [--managed-instance]
 *                             [--name]
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 */
var az_sql_midb_ltr_backup_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_midb_ltr_backup_show_command_builder, _super);
    function az_sql_midb_ltr_backup_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The resource id of the backups. Use 'az sql midb ltr-backup show' or 'az sql midb ltr-backup list' for backup id. If provided, other arguments are not required. */
    az_sql_midb_ltr_backup_show_command_builder.prototype.backupId = function (value) {
        this.setFlag("--backup-id", value);
        return this;
    };
    /** The name of the Azure SQL Managed Database. */
    az_sql_midb_ltr_backup_show_command_builder.prototype.database = function (value) {
        this.setFlag("--database", value);
        return this;
    };
    /** The location of the desired backup(s). */
    az_sql_midb_ltr_backup_show_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the Azure SQL managed instance. */
    az_sql_midb_ltr_backup_show_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** The name of the LTR backup. Use 'az sql midb ltr-backup show' or 'az sql midb ltr-backup list' for backup name. */
    az_sql_midb_ltr_backup_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_midb_ltr_backup_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_midb_ltr_backup_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_midb_ltr_backup_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Place the CLI in a waiting state until a condition of the managed database is met.
 *
 * Syntax:
 * ```
 * az sql midb ltr-backup wait --database
 *                             --managed-instance
 *                             --resource-group
 *                             [--created]
 *                             [--custom]
 *                             [--deleted]
 *                             [--exists]
 *                             [--interval]
 *                             [--subscription]
 *                             [--timeout]
 *                             [--updated]
 * ```
 *
 * @param {string} database The name of the Azure SQL Managed Database.
 * @param {string} managedInstance Name of the Azure SQL managed instance.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sql_midb_ltr_backup_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_midb_ltr_backup_wait_command_builder, _super);
    function az_sql_midb_ltr_backup_wait_command_builder(commandPath, resultDataTypeName, database, managedInstance, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.database(database);
        _this.managedInstance(managedInstance);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Azure SQL Managed Database. */
    az_sql_midb_ltr_backup_wait_command_builder.prototype.database = function (value) {
        this.setFlag("--database", value);
        return this;
    };
    /** Name of the Azure SQL managed instance. */
    az_sql_midb_ltr_backup_wait_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_midb_ltr_backup_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_sql_midb_ltr_backup_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_sql_midb_ltr_backup_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_sql_midb_ltr_backup_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_sql_midb_ltr_backup_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_sql_midb_ltr_backup_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_midb_ltr_backup_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_sql_midb_ltr_backup_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_sql_midb_ltr_backup_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_sql_midb_ltr_backup_wait_command_builder;
}(base_1.CommandBuilder));
/**
 * Update long term retention settings for a managed database.
 *
 * Syntax:
 * ```
 * az sql midb ltr-policy set [--ids]
 *                            [--managed-instance]
 *                            [--monthly-retention]
 *                            [--name]
 *                            [--resource-group]
 *                            [--subscription]
 *                            [--week-of-year]
 *                            [--weekly-retention]
 *                            [--yearly-retention]
 * ```
 */
var az_sql_midb_ltr_policy_set_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_midb_ltr_policy_set_command_builder, _super);
    function az_sql_midb_ltr_policy_set_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_midb_ltr_policy_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL managed instance. */
    az_sql_midb_ltr_policy_set_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** Retention for the monthly backup. If just a number is passed instead of an ISO 8601 string, days will be assumed as the units.There is a minimum of 7 days and a maximum of 10 years. */
    az_sql_midb_ltr_policy_set_command_builder.prototype.monthlyRetention = function (value) {
        this.setFlag("--monthly-retention", value);
        return this;
    };
    /** The name of the Azure SQL Managed Database. */
    az_sql_midb_ltr_policy_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_midb_ltr_policy_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_midb_ltr_policy_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The Week of Year, 1 to 52, in which to take the yearly LTR backup. */
    az_sql_midb_ltr_policy_set_command_builder.prototype.weekOfYear = function (value) {
        this.setFlag("--week-of-year", value);
        return this;
    };
    /** Retention for the weekly backup. If just a number is passed instead of an ISO 8601 string, days will be assumed as the units.There is a minimum of 7 days and a maximum of 10 years. */
    az_sql_midb_ltr_policy_set_command_builder.prototype.weeklyRetention = function (value) {
        this.setFlag("--weekly-retention", value);
        return this;
    };
    /** Retention for the yearly backup. If just a number is passed instead of an ISO 8601 string, days will be assumed as the units.There is a minimum of 7 days and a maximum of 10 years. */
    az_sql_midb_ltr_policy_set_command_builder.prototype.yearlyRetention = function (value) {
        this.setFlag("--yearly-retention", value);
        return this;
    };
    return az_sql_midb_ltr_policy_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the long term retention policy for a managed database.
 *
 * Syntax:
 * ```
 * az sql midb ltr-policy show [--ids]
 *                             [--managed-instance]
 *                             [--name]
 *                             [--query-examples]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 */
var az_sql_midb_ltr_policy_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_midb_ltr_policy_show_command_builder, _super);
    function az_sql_midb_ltr_policy_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_midb_ltr_policy_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL managed instance. */
    az_sql_midb_ltr_policy_show_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** The name of the Azure SQL Managed Database. */
    az_sql_midb_ltr_policy_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_midb_ltr_policy_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_midb_ltr_policy_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_midb_ltr_policy_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_midb_ltr_policy_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update short term retention for automated backups on a single database.
 *
 * Syntax:
 * ```
 * az sql midb short-term-retention-policy set --retention-days
 *                                             [--deleted-time]
 *                                             [--ids]
 *                                             [--managed-instance]
 *                                             [--name]
 *                                             [--no-wait]
 *                                             [--resource-group]
 *                                             [--subscription]
 * ```
 *
 * @param {string} retentionDays New backup short term retention policy in days.Valid policy for live database is 7-35 days, valid policy for dropped databases is 0-35 days.
 */
var az_sql_midb_short_term_retention_policy_set_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_midb_short_term_retention_policy_set_command_builder, _super);
    function az_sql_midb_short_term_retention_policy_set_command_builder(commandPath, resultDataTypeName, retentionDays) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.retentionDays(retentionDays);
        return _this;
    }
    /** New backup short term retention policy in days.Valid policy for live database is 7-35 days, valid policy for dropped databases is 0-35 days. */
    az_sql_midb_short_term_retention_policy_set_command_builder.prototype.retentionDays = function (value) {
        this.setFlag("--retention-days", value);
        return this;
    };
    /** If specified, updates retention days for a deleted database, instead of an existing database.Must match the deleted time of a deleted database on the source Managed Instance. */
    az_sql_midb_short_term_retention_policy_set_command_builder.prototype.deletedTime = function (value) {
        this.setFlag("--deleted-time", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_midb_short_term_retention_policy_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL managed instance. */
    az_sql_midb_short_term_retention_policy_set_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** The name of the Azure SQL Managed Database. */
    az_sql_midb_short_term_retention_policy_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_midb_short_term_retention_policy_set_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_midb_short_term_retention_policy_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_midb_short_term_retention_policy_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_midb_short_term_retention_policy_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Show short term retention for automated backups on a single database.
 *
 * Syntax:
 * ```
 * az sql midb short-term-retention-policy show [--deleted-time]
 *                                              [--ids]
 *                                              [--managed-instance]
 *                                              [--name]
 *                                              [--query-examples]
 *                                              [--resource-group]
 *                                              [--subscription]
 * ```
 */
var az_sql_midb_short_term_retention_policy_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_midb_short_term_retention_policy_show_command_builder, _super);
    function az_sql_midb_short_term_retention_policy_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** If specified, shows retention days for a deleted database, instead of an existing database.Must match the deleted time of a deleted database on the source Managed Instance. */
    az_sql_midb_short_term_retention_policy_show_command_builder.prototype.deletedTime = function (value) {
        this.setFlag("--deleted-time", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_midb_short_term_retention_policy_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL managed instance. */
    az_sql_midb_short_term_retention_policy_show_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** The name of the Azure SQL Managed Database. */
    az_sql_midb_short_term_retention_policy_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_midb_short_term_retention_policy_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_midb_short_term_retention_policy_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_midb_short_term_retention_policy_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_midb_short_term_retention_policy_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a managed database.
 *
 * Syntax:
 * ```
 * az sql midb create --managed-instance
 *                    --name
 *                    --resource-group
 *                    [--collation]
 *                    [--no-wait]
 *                    [--subscription]
 * ```
 *
 * @param {string} managedInstance Name of the Azure SQL managed instance.
 * @param {string} name The name of the Azure SQL Managed Database.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sql_midb_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_midb_create_command_builder, _super);
    function az_sql_midb_create_command_builder(commandPath, resultDataTypeName, managedInstance, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.managedInstance(managedInstance);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Azure SQL managed instance. */
    az_sql_midb_create_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** The name of the Azure SQL Managed Database. */
    az_sql_midb_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_midb_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The collation of the Azure SQL Managed Database collation to use, e.g.: SQL_Latin1_General_CP1_CI_AS or Latin1_General_100_CS_AS_SC. */
    az_sql_midb_create_command_builder.prototype.collation = function (value) {
        this.setFlag("--collation", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_midb_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_midb_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_midb_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a managed database.
 *
 * Syntax:
 * ```
 * az sql midb delete [--ids]
 *                    [--managed-instance]
 *                    [--name]
 *                    [--no-wait]
 *                    [--resource-group]
 *                    [--subscription]
 *                    [--yes]
 * ```
 */
var az_sql_midb_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_midb_delete_command_builder, _super);
    function az_sql_midb_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_midb_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL managed instance. */
    az_sql_midb_delete_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** The name of the Azure SQL Managed Database. */
    az_sql_midb_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_midb_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_midb_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_midb_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_sql_midb_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_sql_midb_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List managed databases on a managed instance.
 *
 * Syntax:
 * ```
 * az sql midb list [--ids]
 *                  [--managed-instance]
 *                  [--query-examples]
 *                  [--resource-group]
 *                  [--subscription]
 * ```
 */
var az_sql_midb_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_midb_list_command_builder, _super);
    function az_sql_midb_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_midb_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL managed instance. */
    az_sql_midb_list_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_midb_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_midb_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_midb_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_midb_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List restorable deleted managed databases.
 *
 * Syntax:
 * ```
 * az sql midb list-deleted [--ids]
 *                          [--managed-instance]
 *                          [--resource-group]
 *                          [--subscription]
 * ```
 */
var az_sql_midb_list_deleted_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_midb_list_deleted_command_builder, _super);
    function az_sql_midb_list_deleted_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_midb_list_deleted_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL managed instance. */
    az_sql_midb_list_deleted_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_midb_list_deleted_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_midb_list_deleted_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_midb_list_deleted_command_builder;
}(base_1.CommandBuilder));
/**
 * Restore a managed database.
 *
 * Syntax:
 * ```
 * az sql midb restore --dest-name
 *                     --time
 *                     [--deleted-time]
 *                     [--dest-mi]
 *                     [--dest-resource-group]
 *                     [--ids]
 *                     [--managed-instance]
 *                     [--name]
 *                     [--no-wait]
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 *
 * @param {string} destName Name of the managed database that will be created as the restore destination.
 * @param {string} time The point in time of the source database that will be restored to create the new database. Must be greater than or equal to the source database's earliestRestoreDate value. Time should be in following format: "YYYY-MM-DDTHH:MM:SS".
 */
var az_sql_midb_restore_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_midb_restore_command_builder, _super);
    function az_sql_midb_restore_command_builder(commandPath, resultDataTypeName, destName, time) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.destName(destName);
        _this.time(time);
        return _this;
    }
    /** Name of the managed database that will be created as the restore destination. */
    az_sql_midb_restore_command_builder.prototype.destName = function (value) {
        this.setFlag("--dest-name", value);
        return this;
    };
    /** The point in time of the source database that will be restored to create the new database. Must be greater than or equal to the source database's earliestRestoreDate value. Time should be in following format: "YYYY-MM-DDTHH:MM:SS". */
    az_sql_midb_restore_command_builder.prototype.time = function (value) {
        this.setFlag("--time", value);
        return this;
    };
    /** If specified, restore from a deleted database instead of from an existing database. Must match the deleted time of a deleted database on the source Managed Instance. */
    az_sql_midb_restore_command_builder.prototype.deletedTime = function (value) {
        this.setFlag("--deleted-time", value);
        return this;
    };
    /** Name of the managed instance to restore managed database to. This can be same managed instance, or another managed instance on same subscription. When not specified it defaults to source managed instance. */
    az_sql_midb_restore_command_builder.prototype.destMi = function (value) {
        this.setFlag("--dest-mi", value);
        return this;
    };
    /** Name of the resource group of the managed instance to restore managed database to. When not specified it defaults to source resource group. */
    az_sql_midb_restore_command_builder.prototype.destResourceGroup = function (value) {
        this.setFlag("--dest-resource-group", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_midb_restore_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL managed instance. */
    az_sql_midb_restore_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** The name of the Azure SQL Managed Database. */
    az_sql_midb_restore_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_midb_restore_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_midb_restore_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_midb_restore_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_midb_restore_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details for a managed database.
 *
 * Syntax:
 * ```
 * az sql midb show [--ids]
 *                  [--managed-instance]
 *                  [--name]
 *                  [--query-examples]
 *                  [--resource-group]
 *                  [--subscription]
 * ```
 */
var az_sql_midb_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_midb_show_command_builder, _super);
    function az_sql_midb_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_midb_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL managed instance. */
    az_sql_midb_show_command_builder.prototype.managedInstance = function (value) {
        this.setFlag("--managed-instance", value);
        return this;
    };
    /** The name of the Azure SQL Managed Database. */
    az_sql_midb_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_midb_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_midb_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_midb_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_midb_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new server Active Directory administrator.
 *
 * Syntax:
 * ```
 * az sql server ad-admin create --display-name
 *                               --object-id
 *                               --resource-group
 *                               --server
 *                               [--subscription]
 * ```
 *
 * @param {string} displayName Display name of the Azure AD administrator user or group.
 * @param {string} objectId The unique ID of the Azure AD administrator.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`.
 */
var az_sql_server_ad_admin_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_ad_admin_create_command_builder, _super);
    function az_sql_server_ad_admin_create_command_builder(commandPath, resultDataTypeName, displayName, objectId, resourceGroup, serverName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.displayName(displayName);
        _this.objectId(objectId);
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        return _this;
    }
    /** Display name of the Azure AD administrator user or group. */
    az_sql_server_ad_admin_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** The unique ID of the Azure AD administrator. */
    az_sql_server_ad_admin_create_command_builder.prototype.objectId = function (value) {
        this.setFlag("--object-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_ad_admin_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_ad_admin_create_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_ad_admin_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_ad_admin_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the Azure Active Directory administrator with the given name.
 *
 * Syntax:
 * ```
 * az sql server ad-admin delete [--ids]
 *                               [--resource-group]
 *                               [--server]
 *                               [--subscription]
 * ```
 */
var az_sql_server_ad_admin_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_ad_admin_delete_command_builder, _super);
    function az_sql_server_ad_admin_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_ad_admin_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_ad_admin_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_ad_admin_delete_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_ad_admin_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_ad_admin_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a list of Azure Active Directory administrators in a server.
 *
 * Syntax:
 * ```
 * az sql server ad-admin list [--ids]
 *                             [--query-examples]
 *                             [--resource-group]
 *                             [--server]
 *                             [--subscription]
 * ```
 */
var az_sql_server_ad_admin_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_ad_admin_list_command_builder, _super);
    function az_sql_server_ad_admin_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_ad_admin_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_server_ad_admin_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_ad_admin_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_ad_admin_list_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_ad_admin_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_ad_admin_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Update an existing server Active Directory administrator.
 *
 * Syntax:
 * ```
 * az sql server ad-admin update [--add]
 *                               [--display-name]
 *                               [--force-string]
 *                               [--ids]
 *                               [--object-id]
 *                               [--remove]
 *                               [--resource-group]
 *                               [--server]
 *                               [--set]
 *                               [--subscription]
 * ```
 */
var az_sql_server_ad_admin_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_ad_admin_update_command_builder, _super);
    function az_sql_server_ad_admin_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_sql_server_ad_admin_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Display name of the Azure AD administrator user or group. */
    az_sql_server_ad_admin_update_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_sql_server_ad_admin_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_ad_admin_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The unique ID of the Azure AD administrator. */
    az_sql_server_ad_admin_update_command_builder.prototype.objectId = function (value) {
        this.setFlag("--object-id", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_sql_server_ad_admin_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_ad_admin_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_ad_admin_update_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_sql_server_ad_admin_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_ad_admin_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_ad_admin_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a server's blob auditing policy.
 *
 * Syntax:
 * ```
 * az sql server audit-policy show [--ids]
 *                                 [--name]
 *                                 [--query-examples]
 *                                 [--resource-group]
 *                                 [--subscription]
 * ```
 */
var az_sql_server_audit_policy_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_audit_policy_show_command_builder, _super);
    function az_sql_server_audit_policy_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_audit_policy_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_audit_policy_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_server_audit_policy_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_audit_policy_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_audit_policy_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_audit_policy_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a server's auditing policy.
 *
 * Syntax:
 * ```
 * az sql server audit-policy update [--actions]
 *                                   [--add]
 *                                   [--force-string]
 *                                   [--ids]
 *                                   [--name]
 *                                   [--remove]
 *                                   [--resource-group]
 *                                   [--retention-days]
 *                                   [--set]
 *                                   [--state {Disabled, Enabled}]
 *                                   [--storage-account]
 *                                   [--storage-endpoint]
 *                                   [--storage-key]
 *                                   [--subscription]
 * ```
 */
var az_sql_server_audit_policy_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_audit_policy_update_command_builder, _super);
    function az_sql_server_audit_policy_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** List of actions and action groups to audit. */
    az_sql_server_audit_policy_update_command_builder.prototype.actions = function (value) {
        this.setFlag("--actions", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_sql_server_audit_policy_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_sql_server_audit_policy_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_audit_policy_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_audit_policy_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_sql_server_audit_policy_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_audit_policy_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The number of days to retain audit logs. */
    az_sql_server_audit_policy_update_command_builder.prototype.retentionDays = function (value) {
        this.setFlag("--retention-days", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_sql_server_audit_policy_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Auditing policy state. */
    az_sql_server_audit_policy_update_command_builder.prototype.state = function (value) {
        this.setFlag("--state", value);
        return this;
    };
    /** Name of the storage account. */
    az_sql_server_audit_policy_update_command_builder.prototype.storageAccount = function (value) {
        this.setFlag("--storage-account", value);
        return this;
    };
    /** The storage account endpoint. */
    az_sql_server_audit_policy_update_command_builder.prototype.storageEndpoint = function (value) {
        this.setFlag("--storage-endpoint", value);
        return this;
    };
    /** Access key for the storage account. */
    az_sql_server_audit_policy_update_command_builder.prototype.storageKey = function (value) {
        this.setFlag("--storage-key", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_audit_policy_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_audit_policy_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a server's secure connection policy.
 *
 * Syntax:
 * ```
 * az sql server conn-policy show [--ids]
 *                                [--query-examples]
 *                                [--resource-group]
 *                                [--server]
 *                                [--subscription]
 * ```
 */
var az_sql_server_conn_policy_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_conn_policy_show_command_builder, _super);
    function az_sql_server_conn_policy_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_conn_policy_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_server_conn_policy_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_conn_policy_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_conn_policy_show_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_conn_policy_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_conn_policy_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates a server's secure connection policy.
 *
 * Syntax:
 * ```
 * az sql server conn-policy update --connection-type {Default, Proxy, Redirect}
 *                                  [--add]
 *                                  [--force-string]
 *                                  [--ids]
 *                                  [--remove]
 *                                  [--resource-group]
 *                                  [--server]
 *                                  [--set]
 *                                  [--subscription]
 * ```
 *
 * @param {'Default' | 'Proxy' | 'Redirect'} connectionType The server connection type.
 */
var az_sql_server_conn_policy_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_conn_policy_update_command_builder, _super);
    function az_sql_server_conn_policy_update_command_builder(commandPath, resultDataTypeName, connectionType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.connectionType(connectionType);
        return _this;
    }
    /** The server connection type. */
    az_sql_server_conn_policy_update_command_builder.prototype.connectionType = function (value) {
        this.setFlag("--connection-type", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_sql_server_conn_policy_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_sql_server_conn_policy_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_conn_policy_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_sql_server_conn_policy_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_conn_policy_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_conn_policy_update_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_sql_server_conn_policy_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_conn_policy_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_conn_policy_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Creates a server dns alias.
 *
 * Syntax:
 * ```
 * az sql server dns-alias create --name
 *                                --resource-group
 *                                --server
 *                                [--subscription]
 * ```
 *
 * @param {string} name Name of the DNS alias.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} server Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`.
 */
var az_sql_server_dns_alias_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_dns_alias_create_command_builder, _super);
    function az_sql_server_dns_alias_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, server) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.server(server);
        return _this;
    }
    /** Name of the DNS alias. */
    az_sql_server_dns_alias_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_dns_alias_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_dns_alias_create_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_dns_alias_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_dns_alias_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the server DNS alias with the given name.
 *
 * Syntax:
 * ```
 * az sql server dns-alias delete --name
 *                                [--ids]
 *                                [--resource-group]
 *                                [--server]
 *                                [--subscription]
 * ```
 *
 * @param {string} name Name of the DNS alias.
 */
var az_sql_server_dns_alias_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_dns_alias_delete_command_builder, _super);
    function az_sql_server_dns_alias_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the DNS alias. */
    az_sql_server_dns_alias_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_dns_alias_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_dns_alias_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_dns_alias_delete_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_dns_alias_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_dns_alias_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a list of server DNS aliases for a server.
 *
 * Syntax:
 * ```
 * az sql server dns-alias list [--ids]
 *                              [--query-examples]
 *                              [--resource-group]
 *                              [--server]
 *                              [--subscription]
 * ```
 */
var az_sql_server_dns_alias_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_dns_alias_list_command_builder, _super);
    function az_sql_server_dns_alias_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_dns_alias_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_server_dns_alias_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_dns_alias_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_dns_alias_list_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_dns_alias_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_dns_alias_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Sets a server to which DNS alias should point.
 *
 * Syntax:
 * ```
 * az sql server dns-alias set --name
 *                             --original-server
 *                             [--ids]
 *                             [--original-resource-group]
 *                             [--original-subscription-id]
 *                             [--resource-group]
 *                             [--server]
 *                             [--subscription]
 * ```
 *
 * @param {string} name Name of the DNS alias.
 * @param {string} originalServer The name of the server to which alias is currently pointing.
 */
var az_sql_server_dns_alias_set_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_dns_alias_set_command_builder, _super);
    function az_sql_server_dns_alias_set_command_builder(commandPath, resultDataTypeName, name, originalServer) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.originalServer(originalServer);
        return _this;
    }
    /** Name of the DNS alias. */
    az_sql_server_dns_alias_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the server to which alias is currently pointing. */
    az_sql_server_dns_alias_set_command_builder.prototype.originalServer = function (value) {
        this.setFlag("--original-server", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_dns_alias_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the original resource group. */
    az_sql_server_dns_alias_set_command_builder.prototype.originalResourceGroup = function (value) {
        this.setFlag("--original-resource-group", value);
        return this;
    };
    /** ID of the original subscription. */
    az_sql_server_dns_alias_set_command_builder.prototype.originalSubscriptionId = function (value) {
        this.setFlag("--original-subscription-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_dns_alias_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_dns_alias_set_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_dns_alias_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_dns_alias_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a server DNS alias.
 *
 * Syntax:
 * ```
 * az sql server dns-alias show --name
 *                              [--ids]
 *                              [--query-examples]
 *                              [--resource-group]
 *                              [--server]
 *                              [--subscription]
 * ```
 *
 * @param {string} name Name of the DNS alias.
 */
var az_sql_server_dns_alias_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_dns_alias_show_command_builder, _super);
    function az_sql_server_dns_alias_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the DNS alias. */
    az_sql_server_dns_alias_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_dns_alias_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_server_dns_alias_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_dns_alias_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_dns_alias_show_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_dns_alias_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_dns_alias_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a firewall rule.
 *
 * Syntax:
 * ```
 * az sql server firewall-rule create --end-ip-address
 *                                    --name
 *                                    --resource-group
 *                                    --server
 *                                    --start-ip-address
 *                                    [--subscription]
 * ```
 *
 * @param {string} endIpAddress The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
 * @param {string} name The name of the firewall rule.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} server Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`.
 * @param {string} startIpAddress The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
 */
var az_sql_server_firewall_rule_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_firewall_rule_create_command_builder, _super);
    function az_sql_server_firewall_rule_create_command_builder(commandPath, resultDataTypeName, endIpAddress, name, resourceGroup, server, startIpAddress) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.endIpAddress(endIpAddress);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.server(server);
        _this.startIpAddress(startIpAddress);
        return _this;
    }
    /** The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    az_sql_server_firewall_rule_create_command_builder.prototype.endIpAddress = function (value) {
        this.setFlag("--end-ip-address", value);
        return this;
    };
    /** The name of the firewall rule. */
    az_sql_server_firewall_rule_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_firewall_rule_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_firewall_rule_create_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    az_sql_server_firewall_rule_create_command_builder.prototype.startIpAddress = function (value) {
        this.setFlag("--start-ip-address", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_firewall_rule_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_firewall_rule_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes a firewall rule.
 *
 * Syntax:
 * ```
 * az sql server firewall-rule delete [--ids]
 *                                    [--name]
 *                                    [--resource-group]
 *                                    [--server]
 *                                    [--subscription]
 * ```
 */
var az_sql_server_firewall_rule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_firewall_rule_delete_command_builder, _super);
    function az_sql_server_firewall_rule_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_firewall_rule_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the firewall rule. */
    az_sql_server_firewall_rule_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_firewall_rule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_firewall_rule_delete_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_firewall_rule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_firewall_rule_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List a server's firewall rules.
 *
 * Syntax:
 * ```
 * az sql server firewall-rule list [--ids]
 *                                  [--query-examples]
 *                                  [--resource-group]
 *                                  [--server]
 *                                  [--subscription]
 * ```
 */
var az_sql_server_firewall_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_firewall_rule_list_command_builder, _super);
    function az_sql_server_firewall_rule_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_firewall_rule_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_server_firewall_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_firewall_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_firewall_rule_list_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_firewall_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_firewall_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the details for a firewall rule.
 *
 * Syntax:
 * ```
 * az sql server firewall-rule show [--ids]
 *                                  [--name]
 *                                  [--query-examples]
 *                                  [--resource-group]
 *                                  [--server]
 *                                  [--subscription]
 * ```
 */
var az_sql_server_firewall_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_firewall_rule_show_command_builder, _super);
    function az_sql_server_firewall_rule_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_firewall_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the firewall rule. */
    az_sql_server_firewall_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_server_firewall_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_firewall_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_firewall_rule_show_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_firewall_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_firewall_rule_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a firewall rule.
 *
 * Syntax:
 * ```
 * az sql server firewall-rule update [--end-ip-address]
 *                                    [--ids]
 *                                    [--name]
 *                                    [--resource-group]
 *                                    [--server]
 *                                    [--start-ip-address]
 *                                    [--subscription]
 * ```
 */
var az_sql_server_firewall_rule_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_firewall_rule_update_command_builder, _super);
    function az_sql_server_firewall_rule_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    az_sql_server_firewall_rule_update_command_builder.prototype.endIpAddress = function (value) {
        this.setFlag("--end-ip-address", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_firewall_rule_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the firewall rule. */
    az_sql_server_firewall_rule_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_firewall_rule_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_firewall_rule_update_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    az_sql_server_firewall_rule_update_command_builder.prototype.startIpAddress = function (value) {
        this.setFlag("--start-ip-address", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_firewall_rule_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_firewall_rule_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Creates a server key.
 *
 * Syntax:
 * ```
 * az sql server key create --kid
 *                          --resource-group
 *                          --server
 *                          [--subscription]
 * ```
 *
 * @param {string} kid The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>".
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} server Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`.
 */
var az_sql_server_key_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_key_create_command_builder, _super);
    function az_sql_server_key_create_command_builder(commandPath, resultDataTypeName, kid, resourceGroup, server) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.kid(kid);
        _this.resourceGroup(resourceGroup);
        _this.server(server);
        return _this;
    }
    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    az_sql_server_key_create_command_builder.prototype.kid = function (value) {
        this.setFlag("--kid", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_key_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_key_create_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_key_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_key_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes a server key.
 *
 * Syntax:
 * ```
 * az sql server key delete --kid
 *                          [--ids]
 *                          [--resource-group]
 *                          [--server]
 *                          [--subscription]
 * ```
 *
 * @param {string} kid The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>".
 */
var az_sql_server_key_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_key_delete_command_builder, _super);
    function az_sql_server_key_delete_command_builder(commandPath, resultDataTypeName, kid) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.kid(kid);
        return _this;
    }
    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    az_sql_server_key_delete_command_builder.prototype.kid = function (value) {
        this.setFlag("--kid", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_key_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_key_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_key_delete_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_key_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_key_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a list of server keys.
 *
 * Syntax:
 * ```
 * az sql server key list [--ids]
 *                        [--query-examples]
 *                        [--resource-group]
 *                        [--server]
 *                        [--subscription]
 * ```
 */
var az_sql_server_key_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_key_list_command_builder, _super);
    function az_sql_server_key_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_key_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_server_key_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_key_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_key_list_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_key_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_key_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows a server key.
 *
 * Syntax:
 * ```
 * az sql server key show --kid
 *                        [--ids]
 *                        [--query-examples]
 *                        [--resource-group]
 *                        [--server]
 *                        [--subscription]
 * ```
 *
 * @param {string} kid The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>".
 */
var az_sql_server_key_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_key_show_command_builder, _super);
    function az_sql_server_key_show_command_builder(commandPath, resultDataTypeName, kid) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.kid(kid);
        return _this;
    }
    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    az_sql_server_key_show_command_builder.prototype.kid = function (value) {
        this.setFlag("--kid", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_key_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_server_key_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_key_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_key_show_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_key_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_key_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Sets the server's encryption protector.
 *
 * Syntax:
 * ```
 * az sql server tde-key set --server-key-type {AzureKeyVault, ServiceManaged}
 *                           [--ids]
 *                           [--kid]
 *                           [--resource-group]
 *                           [--server]
 *                           [--subscription]
 * ```
 *
 * @param {'AzureKeyVault' | 'ServiceManaged'} serverKeyType The type of the server key.
 */
var az_sql_server_tde_key_set_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_tde_key_set_command_builder, _super);
    function az_sql_server_tde_key_set_command_builder(commandPath, resultDataTypeName, serverKeyType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.serverKeyType(serverKeyType);
        return _this;
    }
    /** The type of the server key. */
    az_sql_server_tde_key_set_command_builder.prototype.serverKeyType = function (value) {
        this.setFlag("--server-key-type", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_tde_key_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    az_sql_server_tde_key_set_command_builder.prototype.kid = function (value) {
        this.setFlag("--kid", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_tde_key_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_tde_key_set_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_tde_key_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_tde_key_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a server encryption protector.
 *
 * Syntax:
 * ```
 * az sql server tde-key show [--ids]
 *                            [--query-examples]
 *                            [--resource-group]
 *                            [--server]
 *                            [--subscription]
 * ```
 */
var az_sql_server_tde_key_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_tde_key_show_command_builder, _super);
    function az_sql_server_tde_key_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_tde_key_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_server_tde_key_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_tde_key_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_tde_key_show_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_tde_key_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_tde_key_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a virtual network rule to allows access to an Azure SQL server.
 *
 * Syntax:
 * ```
 * az sql server vnet-rule create --name
 *                                --resource-group
 *                                --server
 *                                --subnet
 *                                [--ignore-missing-endpoint {false, true}]
 *                                [--subscription]
 *                                [--vnet-name]
 * ```
 *
 * @param {string} name The name of the virtual network rule.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} server Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`.
 * @param {string} subnet Name or ID of the subnet that allows access to an Azure Sql Server. If subnet name is provided, --vnet-name must be provided.
 */
var az_sql_server_vnet_rule_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_vnet_rule_create_command_builder, _super);
    function az_sql_server_vnet_rule_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, server, subnet) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.server(server);
        _this.subnet(subnet);
        return _this;
    }
    /** The name of the virtual network rule. */
    az_sql_server_vnet_rule_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_vnet_rule_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_vnet_rule_create_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of the subnet that allows access to an Azure Sql Server. If subnet name is provided, --vnet-name must be provided. */
    az_sql_server_vnet_rule_create_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Create firewall rule before the virtual network has vnet service endpoint enabled. */
    az_sql_server_vnet_rule_create_command_builder.prototype.ignoreMissingEndpoint = function (value) {
        this.setFlag("--ignore-missing-endpoint", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_vnet_rule_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The virtual network name. */
    az_sql_server_vnet_rule_create_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_sql_server_vnet_rule_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the virtual network rule with the given name.
 *
 * Syntax:
 * ```
 * az sql server vnet-rule delete --name
 *                                [--ids]
 *                                [--resource-group]
 *                                [--server]
 *                                [--subscription]
 * ```
 *
 * @param {string} name The name of the virtual network rule.
 */
var az_sql_server_vnet_rule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_vnet_rule_delete_command_builder, _super);
    function az_sql_server_vnet_rule_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the virtual network rule. */
    az_sql_server_vnet_rule_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_vnet_rule_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_vnet_rule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_vnet_rule_delete_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_vnet_rule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_vnet_rule_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a list of virtual network rules in a server.
 *
 * Syntax:
 * ```
 * az sql server vnet-rule list [--ids]
 *                              [--query-examples]
 *                              [--resource-group]
 *                              [--server]
 *                              [--subscription]
 * ```
 */
var az_sql_server_vnet_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_vnet_rule_list_command_builder, _super);
    function az_sql_server_vnet_rule_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_vnet_rule_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_server_vnet_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_vnet_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_vnet_rule_list_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_vnet_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_vnet_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a virtual network rule.
 *
 * Syntax:
 * ```
 * az sql server vnet-rule show --name
 *                              [--ids]
 *                              [--query-examples]
 *                              [--resource-group]
 *                              [--server]
 *                              [--subscription]
 * ```
 *
 * @param {string} name The name of the virtual network rule.
 */
var az_sql_server_vnet_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_vnet_rule_show_command_builder, _super);
    function az_sql_server_vnet_rule_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the virtual network rule. */
    az_sql_server_vnet_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_vnet_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_server_vnet_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_vnet_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_vnet_rule_show_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_vnet_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_vnet_rule_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a virtual network rule.
 *
 * Syntax:
 * ```
 * az sql server vnet-rule update --name
 *                                --subnet
 *                                [--add]
 *                                [--force-string]
 *                                [--ids]
 *                                [--ignore-missing-endpoint {false, true}]
 *                                [--remove]
 *                                [--resource-group]
 *                                [--server]
 *                                [--set]
 *                                [--subscription]
 * ```
 *
 * @param {string} name The name of the virtual network rule.
 * @param {string} subnet Name or ID of the subnet that allows access to an Azure Sql Server. If subnet name is provided, --vnet-name must be provided.
 */
var az_sql_server_vnet_rule_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_vnet_rule_update_command_builder, _super);
    function az_sql_server_vnet_rule_update_command_builder(commandPath, resultDataTypeName, name, subnet) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.subnet(subnet);
        return _this;
    }
    /** The name of the virtual network rule. */
    az_sql_server_vnet_rule_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of the subnet that allows access to an Azure Sql Server. If subnet name is provided, --vnet-name must be provided. */
    az_sql_server_vnet_rule_update_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_sql_server_vnet_rule_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_sql_server_vnet_rule_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_vnet_rule_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Create firewall rule before the virtual network has vnet service endpoint enabled. */
    az_sql_server_vnet_rule_update_command_builder.prototype.ignoreMissingEndpoint = function (value) {
        this.setFlag("--ignore-missing-endpoint", value.toString());
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_sql_server_vnet_rule_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_vnet_rule_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_vnet_rule_update_command_builder.prototype.server = function (value) {
        this.setFlag("--server", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_sql_server_vnet_rule_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_vnet_rule_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_vnet_rule_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a server.
 *
 * Syntax:
 * ```
 * az sql server create --admin-password
 *                      --admin-user
 *                      --name
 *                      --resource-group
 *                      [--assign-identity]
 *                      [--enable-public-network {false, true}]
 *                      [--location]
 *                      [--minimal-tls-version {1.0, 1.1, 1.2}]
 *                      [--no-wait]
 *                      [--subscription]
 * ```
 *
 * @param {string} adminPassword The administrator login password (required for server creation).
 * @param {string} adminUser Administrator username for the server. Once created it cannot be changed.
 * @param {string} name Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sql_server_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_create_command_builder, _super);
    function az_sql_server_create_command_builder(commandPath, resultDataTypeName, adminPassword, adminUser, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.adminPassword(adminPassword);
        _this.adminUser(adminUser);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The administrator login password (required for server creation). */
    az_sql_server_create_command_builder.prototype.adminPassword = function (value) {
        this.setFlag("--admin-password", value);
        return this;
    };
    /** Administrator username for the server. Once created it cannot be changed. */
    az_sql_server_create_command_builder.prototype.adminUser = function (value) {
        this.setFlag("--admin-user", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Generate and assign an Azure Active Directory Identity for this serverfor use with key management services like Azure KeyVault. */
    az_sql_server_create_command_builder.prototype.assignIdentity = function (value) {
        this.setFlag("--assign-identity", value);
        return this;
    };
    /** Set whether public network access to server is allowed or not. When false,only connections made through Private Links can reach this server. */
    az_sql_server_create_command_builder.prototype.enablePublicNetwork = function (value) {
        this.setFlag("--enable-public-network", value.toString());
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_sql_server_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The minimal TLS version enforced by the sql server for inbound connections. */
    az_sql_server_create_command_builder.prototype.minimalTlsVersion = function (value) {
        this.setFlag("--minimal-tls-version", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_server_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes a server.
 *
 * Syntax:
 * ```
 * az sql server delete [--ids]
 *                      [--name]
 *                      [--resource-group]
 *                      [--subscription]
 *                      [--yes]
 * ```
 */
var az_sql_server_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_delete_command_builder, _super);
    function az_sql_server_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_sql_server_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_sql_server_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List available servers.
 *
 * Syntax:
 * ```
 * az sql server list [--query-examples]
 *                    [--resource-group]
 *                    [--subscription]
 * ```
 */
var az_sql_server_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_list_command_builder, _super);
    function az_sql_server_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_server_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Returns server usages.
 *
 * Syntax:
 * ```
 * az sql server list-usages [--ids]
 *                           [--name]
 *                           [--resource-group]
 *                           [--subscription]
 * ```
 */
var az_sql_server_list_usages_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_list_usages_command_builder, _super);
    function az_sql_server_list_usages_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_list_usages_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_list_usages_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_list_usages_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_list_usages_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_list_usages_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a server.
 *
 * Syntax:
 * ```
 * az sql server show [--ids]
 *                    [--name]
 *                    [--query-examples]
 *                    [--resource-group]
 *                    [--subscription]
 * ```
 */
var az_sql_server_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_show_command_builder, _super);
    function az_sql_server_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_server_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a server.
 *
 * Syntax:
 * ```
 * az sql server update [--add]
 *                      [--admin-password]
 *                      [--assign_identity]
 *                      [--enable-public-network {false, true}]
 *                      [--force-string]
 *                      [--ids]
 *                      [--minimal-tls-version {1.0, 1.1, 1.2}]
 *                      [--name]
 *                      [--no-wait]
 *                      [--remove]
 *                      [--resource-group]
 *                      [--set]
 *                      [--subscription]
 * ```
 */
var az_sql_server_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_update_command_builder, _super);
    function az_sql_server_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_sql_server_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The administrator login password. */
    az_sql_server_update_command_builder.prototype.adminPassword = function (value) {
        this.setFlag("--admin-password", value);
        return this;
    };
    /** Generate and assign an Azure Active Directory Identity for this serverfor use with key management services like Azure KeyVault. */
    az_sql_server_update_command_builder.prototype.assignIdentity = function (value) {
        this.setFlag("--assign_identity", value);
        return this;
    };
    /** Set whether public network access to server is allowed or not. When false,only connections made through Private Links can reach this server. */
    az_sql_server_update_command_builder.prototype.enablePublicNetwork = function (value) {
        this.setFlag("--enable-public-network", value.toString());
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_sql_server_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The minimal TLS version enforced by the sql server for inbound connections. */
    az_sql_server_update_command_builder.prototype.minimalTlsVersion = function (value) {
        this.setFlag("--minimal-tls-version", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_server_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_sql_server_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_sql_server_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_server_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Place the CLI in a waiting state until a condition of the SQL server is met.
 *
 * Syntax:
 * ```
 * az sql server wait [--created]
 *                    [--custom]
 *                    [--deleted]
 *                    [--exists]
 *                    [--ids]
 *                    [--interval]
 *                    [--name]
 *                    [--resource-group]
 *                    [--subscription]
 *                    [--timeout]
 *                    [--updated]
 * ```
 */
var az_sql_server_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_server_wait_command_builder, _super);
    function az_sql_server_wait_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_sql_server_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_sql_server_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_sql_server_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_sql_server_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_server_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_sql_server_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    az_sql_server_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_server_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_server_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_sql_server_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_sql_server_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_sql_server_wait_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a virtual cluster.
 *
 * Syntax:
 * ```
 * az sql virtual-cluster delete [--ids]
 *                               [--name]
 *                               [--no-wait]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 */
var az_sql_virtual_cluster_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_virtual_cluster_delete_command_builder, _super);
    function az_sql_virtual_cluster_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_virtual_cluster_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The virtual cluster name. */
    az_sql_virtual_cluster_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sql_virtual_cluster_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_virtual_cluster_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_virtual_cluster_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_virtual_cluster_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List available virtual clusters.
 *
 * Syntax:
 * ```
 * az sql virtual-cluster list [--query-examples]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 */
var az_sql_virtual_cluster_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_virtual_cluster_list_command_builder, _super);
    function az_sql_virtual_cluster_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_virtual_cluster_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_virtual_cluster_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_virtual_cluster_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_virtual_cluster_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details for a virtual cluster.
 *
 * Syntax:
 * ```
 * az sql virtual-cluster show [--ids]
 *                             [--name]
 *                             [--query-examples]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 */
var az_sql_virtual_cluster_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_virtual_cluster_show_command_builder, _super);
    function az_sql_virtual_cluster_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_virtual_cluster_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The virtual cluster name. */
    az_sql_virtual_cluster_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_virtual_cluster_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_virtual_cluster_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_virtual_cluster_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_virtual_cluster_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Creates an availability group listener.
 *
 * Syntax:
 * ```
 * az sql vm group ag-listener create --ag-name
 *                                    --group-name
 *                                    --ip-address
 *                                    --load-balancer
 *                                    --name
 *                                    --probe-port
 *                                    --resource-group
 *                                    --sqlvms
 *                                    --subnet
 *                                    [--port]
 *                                    [--public-ip]
 *                                    [--subscription]
 *                                    [--vnet-name]
 * ```
 *
 * @param {string} agName Name of the availability group. Please refer to <a href="https://docs.microsoft.com/sql/database-engine/availability-groups/windows/use-the-availability-group-wizard-sql-server-management-studio?view=sql-server-2017">https://docs.microsoft.com/sql/database-engine/availability-groups/windows/use-the-availability-group-wizard-sql-server-management-studio?view=sql-server-2017</a> to create and availability group.
 * @param {string} groupName Name of the SQL virtual machine group.
 * @param {string} ipAddress Private IP address bound to the availability group listener.
 * @param {string} loadBalancer Name or resource ID of the load balancer.
 * @param {string} name Name of the availability group listener.
 * @param {string} probePort Probe port.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} sqlvms Space-separated list of SQL virtual machine instance name or resource IDs that are enrolled into the availability group.
 * @param {string} subnet The name or resource id of the subnet to include in the private IP.
 */
var az_sql_vm_group_ag_listener_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_vm_group_ag_listener_create_command_builder, _super);
    function az_sql_vm_group_ag_listener_create_command_builder(commandPath, resultDataTypeName, agName, groupName, ipAddress, loadBalancer, name, probePort, resourceGroup, sqlvms, subnet) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.agName(agName);
        _this.groupName(groupName);
        _this.ipAddress(ipAddress);
        _this.loadBalancer(loadBalancer);
        _this.name(name);
        _this.probePort(probePort);
        _this.resourceGroup(resourceGroup);
        _this.sqlvms(sqlvms);
        _this.subnet(subnet);
        return _this;
    }
    /** Name of the availability group. Please refer to <a href="https://docs.microsoft.com/sql/database-engine/availability-groups/windows/use-the-availability-group-wizard-sql-server-management-studio?view=sql-server-2017">https://docs.microsoft.com/sql/database-engine/availability-groups/windows/use-the-availability-group-wizard-sql-server-management-studio?view=sql-server-2017</a> to create and availability group. */
    az_sql_vm_group_ag_listener_create_command_builder.prototype.agName = function (value) {
        this.setFlag("--ag-name", value);
        return this;
    };
    /** Name of the SQL virtual machine group. */
    az_sql_vm_group_ag_listener_create_command_builder.prototype.groupName = function (value) {
        this.setFlag("--group-name", value);
        return this;
    };
    /** Private IP address bound to the availability group listener. */
    az_sql_vm_group_ag_listener_create_command_builder.prototype.ipAddress = function (value) {
        this.setFlag("--ip-address", value);
        return this;
    };
    /** Name or resource ID of the load balancer. */
    az_sql_vm_group_ag_listener_create_command_builder.prototype.loadBalancer = function (value) {
        this.setFlag("--load-balancer", value);
        return this;
    };
    /** Name of the availability group listener. */
    az_sql_vm_group_ag_listener_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Probe port. */
    az_sql_vm_group_ag_listener_create_command_builder.prototype.probePort = function (value) {
        this.setFlag("--probe-port", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_vm_group_ag_listener_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated list of SQL virtual machine instance name or resource IDs that are enrolled into the availability group. */
    az_sql_vm_group_ag_listener_create_command_builder.prototype.sqlvms = function (value) {
        this.setFlag("--sqlvms", value);
        return this;
    };
    /** The name or resource id of the subnet to include in the private IP. */
    az_sql_vm_group_ag_listener_create_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Listener port. */
    az_sql_vm_group_ag_listener_create_command_builder.prototype.port = function (value) {
        this.setFlag("--port", value);
        return this;
    };
    /** Name or resource ID of the public IP. */
    az_sql_vm_group_ag_listener_create_command_builder.prototype.publicIp = function (value) {
        this.setFlag("--public-ip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_vm_group_ag_listener_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the virtual network. Provide only if name of the subnet has been provided. */
    az_sql_vm_group_ag_listener_create_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_sql_vm_group_ag_listener_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes an availability group listener.
 *
 * Syntax:
 * ```
 * az sql vm group ag-listener delete --group-name
 *                                    [--ids]
 *                                    [--name]
 *                                    [--resource-group]
 *                                    [--subscription]
 *                                    [--yes]
 * ```
 *
 * @param {string} groupName Name of the SQL virtual machine group.
 */
var az_sql_vm_group_ag_listener_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_vm_group_ag_listener_delete_command_builder, _super);
    function az_sql_vm_group_ag_listener_delete_command_builder(commandPath, resultDataTypeName, groupName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.groupName(groupName);
        return _this;
    }
    /** Name of the SQL virtual machine group. */
    az_sql_vm_group_ag_listener_delete_command_builder.prototype.groupName = function (value) {
        this.setFlag("--group-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_vm_group_ag_listener_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the availability group listener. */
    az_sql_vm_group_ag_listener_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_vm_group_ag_listener_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_vm_group_ag_listener_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_sql_vm_group_ag_listener_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_sql_vm_group_ag_listener_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists all availability group listeners in a SQL virtual machine group.
 *
 * Syntax:
 * ```
 * az sql vm group ag-listener list --group-name
 *                                  --resource-group
 *                                  [--query-examples]
 *                                  [--subscription]
 * ```
 *
 * @param {string} groupName Name of the SQL virtual machine group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sql_vm_group_ag_listener_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_vm_group_ag_listener_list_command_builder, _super);
    function az_sql_vm_group_ag_listener_list_command_builder(commandPath, resultDataTypeName, groupName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.groupName(groupName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the SQL virtual machine group. */
    az_sql_vm_group_ag_listener_list_command_builder.prototype.groupName = function (value) {
        this.setFlag("--group-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_vm_group_ag_listener_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_vm_group_ag_listener_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_vm_group_ag_listener_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_vm_group_ag_listener_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets an availability group listener.
 *
 * Syntax:
 * ```
 * az sql vm group ag-listener show --group-name
 *                                  [--ids]
 *                                  [--name]
 *                                  [--query-examples]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 *
 * @param {string} groupName Name of the SQL virtual machine group.
 */
var az_sql_vm_group_ag_listener_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_vm_group_ag_listener_show_command_builder, _super);
    function az_sql_vm_group_ag_listener_show_command_builder(commandPath, resultDataTypeName, groupName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.groupName(groupName);
        return _this;
    }
    /** Name of the SQL virtual machine group. */
    az_sql_vm_group_ag_listener_show_command_builder.prototype.groupName = function (value) {
        this.setFlag("--group-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_vm_group_ag_listener_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the availability group listener. */
    az_sql_vm_group_ag_listener_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_vm_group_ag_listener_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_vm_group_ag_listener_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_vm_group_ag_listener_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_vm_group_ag_listener_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates an availability group listener.
 *
 * Syntax:
 * ```
 * az sql vm group ag-listener update --group-name
 *                                    [--add]
 *                                    [--force-string]
 *                                    [--ids]
 *                                    [--name]
 *                                    [--remove]
 *                                    [--resource-group]
 *                                    [--set]
 *                                    [--sqlvms]
 *                                    [--subscription]
 * ```
 *
 * @param {string} groupName Name of the SQL virtual machine group.
 */
var az_sql_vm_group_ag_listener_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_vm_group_ag_listener_update_command_builder, _super);
    function az_sql_vm_group_ag_listener_update_command_builder(commandPath, resultDataTypeName, groupName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.groupName(groupName);
        return _this;
    }
    /** Name of the SQL virtual machine group. */
    az_sql_vm_group_ag_listener_update_command_builder.prototype.groupName = function (value) {
        this.setFlag("--group-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_sql_vm_group_ag_listener_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_sql_vm_group_ag_listener_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_vm_group_ag_listener_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the availability group listener. */
    az_sql_vm_group_ag_listener_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_sql_vm_group_ag_listener_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_vm_group_ag_listener_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_sql_vm_group_ag_listener_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Space-separated list of SQL virtual machine instance name or resource IDs that are enrolled into the availability group. */
    az_sql_vm_group_ag_listener_update_command_builder.prototype.sqlvms = function (value) {
        this.setFlag("--sqlvms", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_vm_group_ag_listener_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_vm_group_ag_listener_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Creates a SQL virtual machine group.
 *
 * Syntax:
 * ```
 * az sql vm group create --domain-fqdn
 *                        --image-offer
 *                        --image-sku {Developer, Enterprise}
 *                        --name
 *                        --operator-acc
 *                        --resource-group
 *                        --service-acc
 *                        --storage-account
 *                        [--bootstrap-acc]
 *                        [--fsw-path]
 *                        [--location]
 *                        [--ou-path]
 *                        [--sa-key]
 *                        [--subscription]
 *                        [--tags]
 * ```
 *
 * @param {string} domainFqdn Fully qualified name of the domain.
 * @param {string} imageOffer SQL image offer. Examples may include SQL2016-WS2016, SQL2017-WS2016.
 * @param {'Developer' | 'Enterprise'} imageSku SQL image sku.
 * @param {string} name Name of the SQL virtual machine group.
 * @param {string} operatorAcc Account name used for operating cluster i.e. will be part of administrators group on all the participating virtual machines in the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceAcc Account name under which SQL service will run on all participating SQL virtual machines in the cluster.
 * @param {string} storageAccount Storage account url of the witness storage account.
 */
var az_sql_vm_group_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_vm_group_create_command_builder, _super);
    function az_sql_vm_group_create_command_builder(commandPath, resultDataTypeName, domainFqdn, imageOffer, imageSku, name, operatorAcc, resourceGroup, serviceAcc, storageAccount) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.domainFqdn(domainFqdn);
        _this.imageOffer(imageOffer);
        _this.imageSku(imageSku);
        _this.name(name);
        _this.operatorAcc(operatorAcc);
        _this.resourceGroup(resourceGroup);
        _this.serviceAcc(serviceAcc);
        _this.storageAccount(storageAccount);
        return _this;
    }
    /** Fully qualified name of the domain. */
    az_sql_vm_group_create_command_builder.prototype.domainFqdn = function (value) {
        this.setFlag("--domain-fqdn", value);
        return this;
    };
    /** SQL image offer. Examples may include SQL2016-WS2016, SQL2017-WS2016. */
    az_sql_vm_group_create_command_builder.prototype.imageOffer = function (value) {
        this.setFlag("--image-offer", value);
        return this;
    };
    /** SQL image sku. */
    az_sql_vm_group_create_command_builder.prototype.imageSku = function (value) {
        this.setFlag("--image-sku", value);
        return this;
    };
    /** Name of the SQL virtual machine group. */
    az_sql_vm_group_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Account name used for operating cluster i.e. will be part of administrators group on all the participating virtual machines in the cluster. */
    az_sql_vm_group_create_command_builder.prototype.operatorAcc = function (value) {
        this.setFlag("--operator-acc", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_vm_group_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Account name under which SQL service will run on all participating SQL virtual machines in the cluster. */
    az_sql_vm_group_create_command_builder.prototype.serviceAcc = function (value) {
        this.setFlag("--service-acc", value);
        return this;
    };
    /** Storage account url of the witness storage account. */
    az_sql_vm_group_create_command_builder.prototype.storageAccount = function (value) {
        this.setFlag("--storage-account", value);
        return this;
    };
    /** Account name used for creating cluster (at minimum needs permissions to 'Create Computer Objects' in domain). */
    az_sql_vm_group_create_command_builder.prototype.bootstrapAcc = function (value) {
        this.setFlag("--bootstrap-acc", value);
        return this;
    };
    /** Optional path for fileshare witness. */
    az_sql_vm_group_create_command_builder.prototype.fswPath = function (value) {
        this.setFlag("--fsw-path", value);
        return this;
    };
    /** Location. If not provided, group will be created in the same reosurce group location.You can configure the default location using `az configure --defaults location=<location>`. */
    az_sql_vm_group_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Organizational Unit path in which the nodes and cluster will be present. Example: OU=WSCluster,DC=testdomain,DC=com. */
    az_sql_vm_group_create_command_builder.prototype.ouPath = function (value) {
        this.setFlag("--ou-path", value);
        return this;
    };
    /** Primary key of the witness storage account. */
    az_sql_vm_group_create_command_builder.prototype.saKey = function (value) {
        this.setFlag("--sa-key", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_vm_group_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_sql_vm_group_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_sql_vm_group_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes a SQL virtual machine group.
 *
 * Syntax:
 * ```
 * az sql vm group delete [--ids]
 *                        [--name]
 *                        [--resource-group]
 *                        [--subscription]
 *                        [--yes]
 * ```
 */
var az_sql_vm_group_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_vm_group_delete_command_builder, _super);
    function az_sql_vm_group_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_vm_group_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the SQL virtual machine group. */
    az_sql_vm_group_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_vm_group_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_vm_group_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_sql_vm_group_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_sql_vm_group_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists all SQL virtual machine groups in a resource group or subscription.
 *
 * Syntax:
 * ```
 * az sql vm group list [--query-examples]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
var az_sql_vm_group_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_vm_group_list_command_builder, _super);
    function az_sql_vm_group_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_vm_group_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_vm_group_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_vm_group_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_vm_group_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a SQL virtual machine group.
 *
 * Syntax:
 * ```
 * az sql vm group show [--ids]
 *                      [--name]
 *                      [--query-examples]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
var az_sql_vm_group_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_vm_group_show_command_builder, _super);
    function az_sql_vm_group_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_vm_group_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the SQL virtual machine group. */
    az_sql_vm_group_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_vm_group_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_vm_group_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_vm_group_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_vm_group_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates a SQL virtual machine group if there are not SQL virtual machines attached to the group.
 *
 * Syntax:
 * ```
 * az sql vm group update [--add]
 *                        [--bootstrap-acc]
 *                        [--domain-fqdn]
 *                        [--force-string]
 *                        [--fsw-path]
 *                        [--ids]
 *                        [--name]
 *                        [--operator-acc]
 *                        [--ou-path]
 *                        [--remove]
 *                        [--resource-group]
 *                        [--sa-key]
 *                        [--service-acc]
 *                        [--set]
 *                        [--storage-account]
 *                        [--subscription]
 *                        [--tags]
 * ```
 */
var az_sql_vm_group_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_vm_group_update_command_builder, _super);
    function az_sql_vm_group_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_sql_vm_group_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Account name used for creating cluster (at minimum needs permissions to 'Create Computer Objects' in domain). */
    az_sql_vm_group_update_command_builder.prototype.bootstrapAcc = function (value) {
        this.setFlag("--bootstrap-acc", value);
        return this;
    };
    /** Fully qualified name of the domain. */
    az_sql_vm_group_update_command_builder.prototype.domainFqdn = function (value) {
        this.setFlag("--domain-fqdn", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_sql_vm_group_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Optional path for fileshare witness. */
    az_sql_vm_group_update_command_builder.prototype.fswPath = function (value) {
        this.setFlag("--fsw-path", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_vm_group_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the SQL virtual machine group. */
    az_sql_vm_group_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Account name used for operating cluster i.e. will be part of administrators group on all the participating virtual machines in the cluster. */
    az_sql_vm_group_update_command_builder.prototype.operatorAcc = function (value) {
        this.setFlag("--operator-acc", value);
        return this;
    };
    /** Organizational Unit path in which the nodes and cluster will be present. Example: OU=WSCluster,DC=testdomain,DC=com. */
    az_sql_vm_group_update_command_builder.prototype.ouPath = function (value) {
        this.setFlag("--ou-path", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_sql_vm_group_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_vm_group_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Primary key of the witness storage account. */
    az_sql_vm_group_update_command_builder.prototype.saKey = function (value) {
        this.setFlag("--sa-key", value);
        return this;
    };
    /** Account name under which SQL service will run on all participating SQL virtual machines in the cluster. */
    az_sql_vm_group_update_command_builder.prototype.serviceAcc = function (value) {
        this.setFlag("--service-acc", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_sql_vm_group_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Storage account url of the witness storage account. */
    az_sql_vm_group_update_command_builder.prototype.storageAccount = function (value) {
        this.setFlag("--storage-account", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_vm_group_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_sql_vm_group_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_sql_vm_group_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Adds SQL virtual machine to a SQL virtual machine group.
 *
 * Syntax:
 * ```
 * az sql vm add-to-group --sqlvm-group
 *                        [--bootstrap-acc-pwd]
 *                        [--ids]
 *                        [--name]
 *                        [--operator-acc-pwd]
 *                        [--resource-group]
 *                        [--service-acc-pwd]
 *                        [--subscription]
 * ```
 *
 * @param {string} sqlvmGroup Name or resource ID of the SQL virtual machine group. If only name provided, SQL virtual machine group should be in the same resource group of the SQL virtual machine.
 */
var az_sql_vm_add_to_group_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_vm_add_to_group_command_builder, _super);
    function az_sql_vm_add_to_group_command_builder(commandPath, resultDataTypeName, sqlvmGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.sqlvmGroup(sqlvmGroup);
        return _this;
    }
    /** Name or resource ID of the SQL virtual machine group. If only name provided, SQL virtual machine group should be in the same resource group of the SQL virtual machine. */
    az_sql_vm_add_to_group_command_builder.prototype.sqlvmGroup = function (value) {
        this.setFlag("--sqlvm-group", value);
        return this;
    };
    /** Password for the cluster bootstrap account if provided in the SQL virtual machine group. */
    az_sql_vm_add_to_group_command_builder.prototype.bootstrapAccPwd = function (value) {
        this.setFlag("--bootstrap-acc-pwd", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_vm_add_to_group_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the SQL virtual machine. */
    az_sql_vm_add_to_group_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Password for the cluster operator account provided in the SQL virtual machine group. */
    az_sql_vm_add_to_group_command_builder.prototype.operatorAccPwd = function (value) {
        this.setFlag("--operator-acc-pwd", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_vm_add_to_group_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Password for the SQL service account provided in the SQL virtual machine group. */
    az_sql_vm_add_to_group_command_builder.prototype.serviceAccPwd = function (value) {
        this.setFlag("--service-acc-pwd", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_vm_add_to_group_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_vm_add_to_group_command_builder;
}(base_1.CommandBuilder));
/**
 * Creates a SQL virtual machine.
 *
 * Syntax:
 * ```
 * az sql vm create --license-type {AHUB, DR, PAYG}
 *                  --name
 *                  --resource-group
 *                  [--backup-pwd]
 *                  [--backup-schedule-type {Automated, Manual}]
 *                  [--backup-system-dbs {false, true}]
 *                  [--connectivity-type {LOCAL, PRIVATE, PUBLIC}]
 *                  [--credential-name]
 *                  [--day-of-week {Friday, Monday, Saturday, Sunday, Thursday, Tuesday, Wednesday}]
 *                  [--enable-auto-backup {false, true}]
 *                  [--enable-auto-patching {false, true}]
 *                  [--enable-encryption {false, true}]
 *                  [--enable-key-vault-credential {false, true}]
 *                  [--enable-r-services {false, true}]
 *                  [--full-backup-duration]
 *                  [--full-backup-frequency {Daily, Weekly}]
 *                  [--full-backup-start-hour]
 *                  [--image-offer]
 *                  [--image-sku {Developer, Enterprise, Express, Standard, Web}]
 *                  [--key-vault]
 *                  [--location]
 *                  [--log-backup-frequency]
 *                  [--maintenance-window-duration]
 *                  [--maintenance-window-start-hour]
 *                  [--port]
 *                  [--retention-period]
 *                  [--sa-key]
 *                  [--sp-name]
 *                  [--sp-secret]
 *                  [--sql-auth-update-pwd]
 *                  [--sql-auth-update-username]
 *                  [--sql-mgmt-type {Full, LightWeight, NoAgent}]
 *                  [--sql-workload-type {DW, GENERAL, OLTP}]
 *                  [--storage-account]
 *                  [--subscription]
 *                  [--tags]
 * ```
 *
 * @param {'AHUB' | 'DR' | 'PAYG'} licenseType SQL Server license type.
 * @param {string} name Name of the SQL virtual machine. The name of the new SQL virtual machine must be equal to the underlying virtual machine created from SQL marketplace image.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sql_vm_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_vm_create_command_builder, _super);
    function az_sql_vm_create_command_builder(commandPath, resultDataTypeName, licenseType, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.licenseType(licenseType);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** SQL Server license type. */
    az_sql_vm_create_command_builder.prototype.licenseType = function (value) {
        this.setFlag("--license-type", value);
        return this;
    };
    /** Name of the SQL virtual machine. The name of the new SQL virtual machine must be equal to the underlying virtual machine created from SQL marketplace image. */
    az_sql_vm_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_vm_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Password for encryption on backup. */
    az_sql_vm_create_command_builder.prototype.backupPwd = function (value) {
        this.setFlag("--backup-pwd", value);
        return this;
    };
    /** Backup schedule type. */
    az_sql_vm_create_command_builder.prototype.backupScheduleType = function (value) {
        this.setFlag("--backup-schedule-type", value);
        return this;
    };
    /** Include system databases on backup. */
    az_sql_vm_create_command_builder.prototype.backupSystemDbs = function (value) {
        this.setFlag("--backup-system-dbs", value.toString());
        return this;
    };
    /** SQL Server connectivity option. */
    az_sql_vm_create_command_builder.prototype.connectivityType = function (value) {
        this.setFlag("--connectivity-type", value);
        return this;
    };
    /** Credential name. */
    az_sql_vm_create_command_builder.prototype.credentialName = function (value) {
        this.setFlag("--credential-name", value);
        return this;
    };
    /** Day of week to apply the patch on. */
    az_sql_vm_create_command_builder.prototype.dayOfWeek = function (value) {
        this.setFlag("--day-of-week", value);
        return this;
    };
    /** Enable or disable autobackup on SQL virtual machine. If any backup settings provided, parameter automatically sets to true. */
    az_sql_vm_create_command_builder.prototype.enableAutoBackup = function (value) {
        this.setFlag("--enable-auto-backup", value.toString());
        return this;
    };
    /** Enable or disable autopatching on SQL virtual machine. If any autopatching settings provided, parameter automatically sets to true. */
    az_sql_vm_create_command_builder.prototype.enableAutoPatching = function (value) {
        this.setFlag("--enable-auto-patching", value.toString());
        return this;
    };
    /** Enable encryption for backup on SQL virtual machine. */
    az_sql_vm_create_command_builder.prototype.enableEncryption = function (value) {
        this.setFlag("--enable-encryption", value.toString());
        return this;
    };
    /** Enable or disable key vault credential setting. If any key vault settings provided, parameter automatically sets to true. */
    az_sql_vm_create_command_builder.prototype.enableKeyVaultCredential = function (value) {
        this.setFlag("--enable-key-vault-credential", value.toString());
        return this;
    };
    /** Enable or disable R services (SQL 2016 onwards). */
    az_sql_vm_create_command_builder.prototype.enableRServices = function (value) {
        this.setFlag("--enable-r-services", value.toString());
        return this;
    };
    /** Duration of the time window of a given day during which full backups can take place. 1-23 hours. */
    az_sql_vm_create_command_builder.prototype.fullBackupDuration = function (value) {
        this.setFlag("--full-backup-duration", value);
        return this;
    };
    /** Frequency of full backups. In both cases, full backups begin during the next scheduled time window. */
    az_sql_vm_create_command_builder.prototype.fullBackupFrequency = function (value) {
        this.setFlag("--full-backup-frequency", value);
        return this;
    };
    /** Start time of a given day during which full backups can take place. 0-23 hours. */
    az_sql_vm_create_command_builder.prototype.fullBackupStartHour = function (value) {
        this.setFlag("--full-backup-start-hour", value);
        return this;
    };
    /** SQL image offer. Examples include SQL2008R2-WS2008, SQL2008-WS2008. */
    az_sql_vm_create_command_builder.prototype.imageOffer = function (value) {
        this.setFlag("--image-offer", value);
        return this;
    };
    /** SQL image sku. */
    az_sql_vm_create_command_builder.prototype.imageSku = function (value) {
        this.setFlag("--image-sku", value);
        return this;
    };
    /** Azure Key Vault url. */
    az_sql_vm_create_command_builder.prototype.keyVault = function (value) {
        this.setFlag("--key-vault", value);
        return this;
    };
    /** Location. If not provided, virtual machine should be in the same region of resource group.You can configure the default location using `az configure --defaults location=<location>`. */
    az_sql_vm_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Frequency of log backups. 5-60 minutes. */
    az_sql_vm_create_command_builder.prototype.logBackupFrequency = function (value) {
        this.setFlag("--log-backup-frequency", value);
        return this;
    };
    /** Duration of patching. 30-180 minutes. */
    az_sql_vm_create_command_builder.prototype.maintenanceWindowDuration = function (value) {
        this.setFlag("--maintenance-window-duration", value);
        return this;
    };
    /** Hour of the day when patching is initiated. Local VM time 0-23 hours. */
    az_sql_vm_create_command_builder.prototype.maintenanceWindowStartHour = function (value) {
        this.setFlag("--maintenance-window-start-hour", value);
        return this;
    };
    /** SQL Server port. */
    az_sql_vm_create_command_builder.prototype.port = function (value) {
        this.setFlag("--port", value);
        return this;
    };
    /** Retention period of backup. 1-30 days. */
    az_sql_vm_create_command_builder.prototype.retentionPeriod = function (value) {
        this.setFlag("--retention-period", value);
        return this;
    };
    /** Storage account key where backup will be taken to. */
    az_sql_vm_create_command_builder.prototype.saKey = function (value) {
        this.setFlag("--sa-key", value);
        return this;
    };
    /** Service principal name to access key vault. */
    az_sql_vm_create_command_builder.prototype.spName = function (value) {
        this.setFlag("--sp-name", value);
        return this;
    };
    /** Service principal name secret to access key vault. */
    az_sql_vm_create_command_builder.prototype.spSecret = function (value) {
        this.setFlag("--sp-secret", value);
        return this;
    };
    /** SQL Server sysadmin login password. */
    az_sql_vm_create_command_builder.prototype.sqlAuthUpdatePwd = function (value) {
        this.setFlag("--sql-auth-update-pwd", value);
        return this;
    };
    /** SQL Server sysadmin login to create. */
    az_sql_vm_create_command_builder.prototype.sqlAuthUpdateUsername = function (value) {
        this.setFlag("--sql-auth-update-username", value);
        return this;
    };
    /** SQL Server management type. If NoAgent selected, please provide --image-sku and --offer-type. */
    az_sql_vm_create_command_builder.prototype.sqlMgmtType = function (value) {
        this.setFlag("--sql-mgmt-type", value);
        return this;
    };
    /** SQL Server workload type. */
    az_sql_vm_create_command_builder.prototype.sqlWorkloadType = function (value) {
        this.setFlag("--sql-workload-type", value);
        return this;
    };
    /** Storage account url where backup will be taken to. */
    az_sql_vm_create_command_builder.prototype.storageAccount = function (value) {
        this.setFlag("--storage-account", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_vm_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_sql_vm_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_sql_vm_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes a SQL virtual machine.
 *
 * Syntax:
 * ```
 * az sql vm delete [--ids]
 *                  [--name]
 *                  [--resource-group]
 *                  [--subscription]
 *                  [--yes]
 * ```
 */
var az_sql_vm_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_vm_delete_command_builder, _super);
    function az_sql_vm_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_vm_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the SQL virtual machine. */
    az_sql_vm_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_vm_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_vm_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_sql_vm_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_sql_vm_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists all SQL virtual machines in a resource group or subscription.
 *
 * Syntax:
 * ```
 * az sql vm list [--query-examples]
 *                [--resource-group]
 *                [--subscription]
 * ```
 */
var az_sql_vm_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_vm_list_command_builder, _super);
    function az_sql_vm_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_vm_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_vm_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_vm_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_vm_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove SQL virtual machine from its current SQL virtual machine group.
 *
 * Syntax:
 * ```
 * az sql vm remove-from-group [--ids]
 *                             [--name]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 */
var az_sql_vm_remove_from_group_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_vm_remove_from_group_command_builder, _super);
    function az_sql_vm_remove_from_group_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_vm_remove_from_group_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the SQL virtual machine. */
    az_sql_vm_remove_from_group_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_vm_remove_from_group_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_vm_remove_from_group_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_vm_remove_from_group_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a SQL virtual machine.
 *
 * Syntax:
 * ```
 * az sql vm show [--expand]
 *                [--ids]
 *                [--name]
 *                [--query-examples]
 *                [--resource-group]
 *                [--subscription]
 * ```
 */
var az_sql_vm_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_vm_show_command_builder, _super);
    function az_sql_vm_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Get the SQLIaaSExtension configuration settings. */
    az_sql_vm_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_vm_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the SQL virtual machine. */
    az_sql_vm_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sql_vm_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_vm_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_vm_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_vm_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates the properties of a SQL virtual machine.
 *
 * Syntax:
 * ```
 * az sql vm update [--add]
 *                  [--backup-pwd]
 *                  [--backup-schedule-type {Automated, Manual}]
 *                  [--backup-system-dbs {false, true}]
 *                  [--connectivity-type {LOCAL, PRIVATE, PUBLIC}]
 *                  [--credential-name]
 *                  [--day-of-week {Friday, Monday, Saturday, Sunday, Thursday, Tuesday, Wednesday}]
 *                  [--enable-auto-backup {false, true}]
 *                  [--enable-auto-patching {false, true}]
 *                  [--enable-encryption {false, true}]
 *                  [--enable-key-vault-credential {false, true}]
 *                  [--enable-r-services {false, true}]
 *                  [--force-string]
 *                  [--full-backup-duration]
 *                  [--full-backup-frequency {Daily, Weekly}]
 *                  [--full-backup-start-hour]
 *                  [--ids]
 *                  [--image-sku {Developer, Enterprise, Express, Standard, Web}]
 *                  [--key-vault]
 *                  [--license-type {AHUB, DR, PAYG}]
 *                  [--log-backup-frequency]
 *                  [--maintenance-window-duration]
 *                  [--maintenance-window-start-hour]
 *                  [--name]
 *                  [--port]
 *                  [--remove]
 *                  [--resource-group]
 *                  [--retention-period]
 *                  [--sa-key]
 *                  [--set]
 *                  [--sp-name]
 *                  [--sp-secret]
 *                  [--sql-mgmt-type {Full}]
 *                  [--sql-workload-type {DW, GENERAL, OLTP}]
 *                  [--storage-account]
 *                  [--subscription]
 *                  [--tags]
 *                  [--yes]
 * ```
 */
var az_sql_vm_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_vm_update_command_builder, _super);
    function az_sql_vm_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_sql_vm_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Password for encryption on backup. */
    az_sql_vm_update_command_builder.prototype.backupPwd = function (value) {
        this.setFlag("--backup-pwd", value);
        return this;
    };
    /** Backup schedule type. */
    az_sql_vm_update_command_builder.prototype.backupScheduleType = function (value) {
        this.setFlag("--backup-schedule-type", value);
        return this;
    };
    /** Include system databases on backup. */
    az_sql_vm_update_command_builder.prototype.backupSystemDbs = function (value) {
        this.setFlag("--backup-system-dbs", value.toString());
        return this;
    };
    /** SQL Server connectivity option. */
    az_sql_vm_update_command_builder.prototype.connectivityType = function (value) {
        this.setFlag("--connectivity-type", value);
        return this;
    };
    /** Credential name. */
    az_sql_vm_update_command_builder.prototype.credentialName = function (value) {
        this.setFlag("--credential-name", value);
        return this;
    };
    /** Day of week to apply the patch on. */
    az_sql_vm_update_command_builder.prototype.dayOfWeek = function (value) {
        this.setFlag("--day-of-week", value);
        return this;
    };
    /** Enable or disable autobackup on SQL virtual machine. If any backup settings provided, parameter automatically sets to true. */
    az_sql_vm_update_command_builder.prototype.enableAutoBackup = function (value) {
        this.setFlag("--enable-auto-backup", value.toString());
        return this;
    };
    /** Enable or disable autopatching on SQL virtual machine. If any autopatching settings provided, parameter automatically sets to true. */
    az_sql_vm_update_command_builder.prototype.enableAutoPatching = function (value) {
        this.setFlag("--enable-auto-patching", value.toString());
        return this;
    };
    /** Enable encryption for backup on SQL virtual machine. */
    az_sql_vm_update_command_builder.prototype.enableEncryption = function (value) {
        this.setFlag("--enable-encryption", value.toString());
        return this;
    };
    /** Enable or disable key vault credential setting. If any key vault settings provided, parameter automatically sets to true. */
    az_sql_vm_update_command_builder.prototype.enableKeyVaultCredential = function (value) {
        this.setFlag("--enable-key-vault-credential", value.toString());
        return this;
    };
    /** Enable or disable R services (SQL 2016 onwards). */
    az_sql_vm_update_command_builder.prototype.enableRServices = function (value) {
        this.setFlag("--enable-r-services", value.toString());
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_sql_vm_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Duration of the time window of a given day during which full backups can take place. 1-23 hours. */
    az_sql_vm_update_command_builder.prototype.fullBackupDuration = function (value) {
        this.setFlag("--full-backup-duration", value);
        return this;
    };
    /** Frequency of full backups. In both cases, full backups begin during the next scheduled time window. */
    az_sql_vm_update_command_builder.prototype.fullBackupFrequency = function (value) {
        this.setFlag("--full-backup-frequency", value);
        return this;
    };
    /** Start time of a given day during which full backups can take place. 0-23 hours. */
    az_sql_vm_update_command_builder.prototype.fullBackupStartHour = function (value) {
        this.setFlag("--full-backup-start-hour", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sql_vm_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** SQL image sku. */
    az_sql_vm_update_command_builder.prototype.imageSku = function (value) {
        this.setFlag("--image-sku", value);
        return this;
    };
    /** Azure Key Vault url. */
    az_sql_vm_update_command_builder.prototype.keyVault = function (value) {
        this.setFlag("--key-vault", value);
        return this;
    };
    /** SQL Server license type. */
    az_sql_vm_update_command_builder.prototype.licenseType = function (value) {
        this.setFlag("--license-type", value);
        return this;
    };
    /** Frequency of log backups. 5-60 minutes. */
    az_sql_vm_update_command_builder.prototype.logBackupFrequency = function (value) {
        this.setFlag("--log-backup-frequency", value);
        return this;
    };
    /** Duration of patching. 30-180 minutes. */
    az_sql_vm_update_command_builder.prototype.maintenanceWindowDuration = function (value) {
        this.setFlag("--maintenance-window-duration", value);
        return this;
    };
    /** Hour of the day when patching is initiated. Local VM time 0-23 hours. */
    az_sql_vm_update_command_builder.prototype.maintenanceWindowStartHour = function (value) {
        this.setFlag("--maintenance-window-start-hour", value);
        return this;
    };
    /** Name of the SQL virtual machine. */
    az_sql_vm_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** SQL Server port. */
    az_sql_vm_update_command_builder.prototype.port = function (value) {
        this.setFlag("--port", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_sql_vm_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sql_vm_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Retention period of backup. 1-30 days. */
    az_sql_vm_update_command_builder.prototype.retentionPeriod = function (value) {
        this.setFlag("--retention-period", value);
        return this;
    };
    /** Storage account key where backup will be taken to. */
    az_sql_vm_update_command_builder.prototype.saKey = function (value) {
        this.setFlag("--sa-key", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_sql_vm_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Service principal name to access key vault. */
    az_sql_vm_update_command_builder.prototype.spName = function (value) {
        this.setFlag("--sp-name", value);
        return this;
    };
    /** Service principal name secret to access key vault. */
    az_sql_vm_update_command_builder.prototype.spSecret = function (value) {
        this.setFlag("--sp-secret", value);
        return this;
    };
    /** SQL Server management type. Updates from LightWeight to Full. */
    az_sql_vm_update_command_builder.prototype.sqlMgmtType = function (value) {
        this.setFlag("--sql-mgmt-type", value);
        return this;
    };
    /** SQL Server workload type. */
    az_sql_vm_update_command_builder.prototype.sqlWorkloadType = function (value) {
        this.setFlag("--sql-workload-type", value);
        return this;
    };
    /** Storage account url where backup will be taken to. */
    az_sql_vm_update_command_builder.prototype.storageAccount = function (value) {
        this.setFlag("--storage-account", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_vm_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_sql_vm_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Do not prompt for confirmation. Requires --sql-mgmt-type. */
    az_sql_vm_update_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_sql_vm_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets all subscription usage metrics in a given location.
 *
 * Syntax:
 * ```
 * az sql list-usages --location
 *                    [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 */
var az_sql_list_usages_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_list_usages_command_builder, _super);
    function az_sql_list_usages_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_sql_list_usages_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_list_usages_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_list_usages_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a subscription usage metric.
 *
 * Syntax:
 * ```
 * az sql show-usage --location
 *                   --usage
 *                   [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} usage Name of usage metric to return.
 */
var az_sql_show_usage_command_builder = /** @class */ (function (_super) {
    __extends(az_sql_show_usage_command_builder, _super);
    function az_sql_show_usage_command_builder(commandPath, resultDataTypeName, location, usage) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.usage(usage);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_sql_show_usage_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of usage metric to return. */
    az_sql_show_usage_command_builder.prototype.usage = function (value) {
        this.setFlag("--usage", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sql_show_usage_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sql_show_usage_command_builder;
}(base_1.CommandBuilder));
