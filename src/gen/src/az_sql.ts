import { CommandBuilder } from '../base';

/** Manage a database's auditing policy. */
export class az_sql_db_audit_policy {
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
    static show(): az_sql_db_audit_policy_show_command_builder {
        return new az_sql_db_audit_policy_show_command_builder("az sql db audit-policy show");
    }

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
    static update(): az_sql_db_audit_policy_update_command_builder {
        return new az_sql_db_audit_policy_update_command_builder("az sql db audit-policy update");
    }
}

/** Manage sensitivity classification recommendations. */
export class az_sql_db_classification_recommendation {
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
    static disable(column: string, schema: string, table: string): az_sql_db_classification_recommendation_disable_command_builder {
        return new az_sql_db_classification_recommendation_disable_command_builder("az sql db classification recommendation disable", column, schema, table);
    }

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
    static enable(column: string, schema: string, table: string): az_sql_db_classification_recommendation_enable_command_builder {
        return new az_sql_db_classification_recommendation_enable_command_builder("az sql db classification recommendation enable", column, schema, table);
    }

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
    static list(): az_sql_db_classification_recommendation_list_command_builder {
        return new az_sql_db_classification_recommendation_list_command_builder("az sql db classification recommendation list");
    }
}

/** Manage sensitivity classifications. */
export class az_sql_db_classification {
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
    static delete(column: string, schema: string, table: string): az_sql_db_classification_delete_command_builder {
        return new az_sql_db_classification_delete_command_builder("az sql db classification delete", column, schema, table);
    }

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
    static list(): az_sql_db_classification_list_command_builder {
        return new az_sql_db_classification_list_command_builder("az sql db classification list");
    }

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
    static show(column: string, schema: string, table: string): az_sql_db_classification_show_command_builder {
        return new az_sql_db_classification_show_command_builder("az sql db classification show", column, schema, table);
    }

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
    static update(column: string, schema: string, table: string): az_sql_db_classification_update_command_builder {
        return new az_sql_db_classification_update_command_builder("az sql db classification update", column, schema, table);
    }
}

/** Manage SQL database long term retention backups. */
export class az_sql_db_ltr_backup {
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
    static delete(database: string, location: string, name: string, server: string): az_sql_db_ltr_backup_delete_command_builder {
        return new az_sql_db_ltr_backup_delete_command_builder("az sql db ltr-backup delete", database, location, name, server);
    }

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
    static list(location: string): az_sql_db_ltr_backup_list_command_builder {
        return new az_sql_db_ltr_backup_list_command_builder("az sql db ltr-backup list", location);
    }

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
    static restore(backupId: string, destDatabase: string, destResourceGroup: string, destServer: string): az_sql_db_ltr_backup_restore_command_builder {
        return new az_sql_db_ltr_backup_restore_command_builder("az sql db ltr-backup restore", backupId, destDatabase, destResourceGroup, destServer);
    }

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
    static show(database: string, location: string, name: string, server: string): az_sql_db_ltr_backup_show_command_builder {
        return new az_sql_db_ltr_backup_show_command_builder("az sql db ltr-backup show", database, location, name, server);
    }

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
    static wait(): az_sql_db_ltr_backup_wait_command_builder {
        return new az_sql_db_ltr_backup_wait_command_builder("az sql db ltr-backup wait");
    }
}

/** Manage SQL database long term retention policy. */
export class az_sql_db_ltr_policy {
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
    static set(): az_sql_db_ltr_policy_set_command_builder {
        return new az_sql_db_ltr_policy_set_command_builder("az sql db ltr-policy set");
    }

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
    static show(): az_sql_db_ltr_policy_show_command_builder {
        return new az_sql_db_ltr_policy_show_command_builder("az sql db ltr-policy show");
    }
}

/** Manage operations on a database. */
export class az_sql_db_op {
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
    static cancel(name: string): az_sql_db_op_cancel_command_builder {
        return new az_sql_db_op_cancel_command_builder("az sql db op cancel", name);
    }

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
    static list(): az_sql_db_op_list_command_builder {
        return new az_sql_db_op_list_command_builder("az sql db op list");
    }
}

/** Manage replication between databases. */
export class az_sql_db_replica {
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
    static create(name: string, partnerServer: string, resourceGroup: string, server: string): az_sql_db_replica_create_command_builder {
        return new az_sql_db_replica_create_command_builder("az sql db replica create", name, partnerServer, resourceGroup, server);
    }

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
    static delete_link(partnerServer: string): az_sql_db_replica_delete_link_command_builder {
        return new az_sql_db_replica_delete_link_command_builder("az sql db replica delete-link", partnerServer);
    }

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
    static list_links(): az_sql_db_replica_list_links_command_builder {
        return new az_sql_db_replica_list_links_command_builder("az sql db replica list-links");
    }

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
    static set_primary(): az_sql_db_replica_set_primary_command_builder {
        return new az_sql_db_replica_set_primary_command_builder("az sql db replica set-primary");
    }
}

/** Manage a database's transparent data encryption. */
export class az_sql_db_tde {
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
    static list_activity(): az_sql_db_tde_list_activity_command_builder {
        return new az_sql_db_tde_list_activity_command_builder("az sql db tde list-activity");
    }

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
    static set(status: 'Disabled' | 'Enabled'): az_sql_db_tde_set_command_builder {
        return new az_sql_db_tde_set_command_builder("az sql db tde set", status);
    }

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
    static show(): az_sql_db_tde_show_command_builder {
        return new az_sql_db_tde_show_command_builder("az sql db tde show");
    }
}

/** Manage a database's threat detection policies. */
export class az_sql_db_threat_policy {
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
    static show(): az_sql_db_threat_policy_show_command_builder {
        return new az_sql_db_threat_policy_show_command_builder("az sql db threat-policy show");
    }

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
    static update(): az_sql_db_threat_policy_update_command_builder {
        return new az_sql_db_threat_policy_update_command_builder("az sql db threat-policy update");
    }
}

/** Manage databases. */
export class az_sql_db {
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
    static copy(destName: string): az_sql_db_copy_command_builder {
        return new az_sql_db_copy_command_builder("az sql db copy", destName);
    }

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
    static create(name: string, resourceGroup: string, server: string): az_sql_db_create_command_builder {
        return new az_sql_db_create_command_builder("az sql db create", name, resourceGroup, server);
    }

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
    static delete(): az_sql_db_delete_command_builder {
        return new az_sql_db_delete_command_builder("az sql db delete");
    }

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
    static export(adminPassword: string, adminUser: string, storageKey: string, storageKeyType: 'SharedAccessKey' | 'StorageAccessKey', storageUri: string): az_sql_db_export_command_builder {
        return new az_sql_db_export_command_builder("az sql db export", adminPassword, adminUser, storageKey, storageKeyType, storageUri);
    }

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
    static import(adminPassword: string, adminUser: string, storageKey: string, storageKeyType: 'SharedAccessKey' | 'StorageAccessKey', storageUri: string): az_sql_db_import_command_builder {
        return new az_sql_db_import_command_builder("az sql db import", adminPassword, adminUser, storageKey, storageKeyType, storageUri);
    }

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
    static list(): az_sql_db_list_command_builder {
        return new az_sql_db_list_command_builder("az sql db list");
    }

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
    static list_deleted(): az_sql_db_list_deleted_command_builder {
        return new az_sql_db_list_deleted_command_builder("az sql db list-deleted");
    }

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
    static list_editions(location: string): az_sql_db_list_editions_command_builder {
        return new az_sql_db_list_editions_command_builder("az sql db list-editions", location);
    }

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
    static list_usages(): az_sql_db_list_usages_command_builder {
        return new az_sql_db_list_usages_command_builder("az sql db list-usages");
    }

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
    static rename(newName: string): az_sql_db_rename_command_builder {
        return new az_sql_db_rename_command_builder("az sql db rename", newName);
    }

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
    static restore(destName: string): az_sql_db_restore_command_builder {
        return new az_sql_db_restore_command_builder("az sql db restore", destName);
    }

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
    static show(): az_sql_db_show_command_builder {
        return new az_sql_db_show_command_builder("az sql db show");
    }

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
    static show_connection_string(client: 'ado.net' | 'jdbc' | 'odbc' | 'php' | 'php_pdo' | 'sqlcmd'): az_sql_db_show_connection_string_command_builder {
        return new az_sql_db_show_connection_string_command_builder("az sql db show-connection-string", client);
    }

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
    static update(): az_sql_db_update_command_builder {
        return new az_sql_db_update_command_builder("az sql db update");
    }
}

/** Manage data warehouses. */
export class az_sql_dw {
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
    static create(name: string, resourceGroup: string, server: string): az_sql_dw_create_command_builder {
        return new az_sql_dw_create_command_builder("az sql dw create", name, resourceGroup, server);
    }

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
    static delete(): az_sql_dw_delete_command_builder {
        return new az_sql_dw_delete_command_builder("az sql dw delete");
    }

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
    static list(): az_sql_dw_list_command_builder {
        return new az_sql_dw_list_command_builder("az sql dw list");
    }

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
    static pause(): az_sql_dw_pause_command_builder {
        return new az_sql_dw_pause_command_builder("az sql dw pause");
    }

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
    static resume(): az_sql_dw_resume_command_builder {
        return new az_sql_dw_resume_command_builder("az sql dw resume");
    }

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
    static show(): az_sql_dw_show_command_builder {
        return new az_sql_dw_show_command_builder("az sql dw show");
    }

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
    static update(): az_sql_dw_update_command_builder {
        return new az_sql_dw_update_command_builder("az sql dw update");
    }
}

/** Manage operations on an elastic pool. */
export class az_sql_elastic_pool_op {
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
    static cancel(name: string): az_sql_elastic_pool_op_cancel_command_builder {
        return new az_sql_elastic_pool_op_cancel_command_builder("az sql elastic-pool op cancel", name);
    }

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
    static list(): az_sql_elastic_pool_op_list_command_builder {
        return new az_sql_elastic_pool_op_list_command_builder("az sql elastic-pool op list");
    }
}

/** Manage elastic pools. */
export class az_sql_elastic_pool {
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
    static create(name: string, resourceGroup: string, server: string): az_sql_elastic_pool_create_command_builder {
        return new az_sql_elastic_pool_create_command_builder("az sql elastic-pool create", name, resourceGroup, server);
    }

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
    static delete(): az_sql_elastic_pool_delete_command_builder {
        return new az_sql_elastic_pool_delete_command_builder("az sql elastic-pool delete");
    }

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
    static list(): az_sql_elastic_pool_list_command_builder {
        return new az_sql_elastic_pool_list_command_builder("az sql elastic-pool list");
    }

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
    static list_dbs(): az_sql_elastic_pool_list_dbs_command_builder {
        return new az_sql_elastic_pool_list_dbs_command_builder("az sql elastic-pool list-dbs");
    }

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
    static list_editions(location: string): az_sql_elastic_pool_list_editions_command_builder {
        return new az_sql_elastic_pool_list_editions_command_builder("az sql elastic-pool list-editions", location);
    }

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
    static show(): az_sql_elastic_pool_show_command_builder {
        return new az_sql_elastic_pool_show_command_builder("az sql elastic-pool show");
    }

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
    static update(): az_sql_elastic_pool_update_command_builder {
        return new az_sql_elastic_pool_update_command_builder("az sql elastic-pool update");
    }
}

/** Manage SQL Failover Groups. */
export class az_sql_failover_group {
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
    static create(name: string, partnerServer: string, resourceGroup: string, server: string): az_sql_failover_group_create_command_builder {
        return new az_sql_failover_group_create_command_builder("az sql failover-group create", name, partnerServer, resourceGroup, server);
    }

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
    static delete(name: string): az_sql_failover_group_delete_command_builder {
        return new az_sql_failover_group_delete_command_builder("az sql failover-group delete", name);
    }

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
    static list(): az_sql_failover_group_list_command_builder {
        return new az_sql_failover_group_list_command_builder("az sql failover-group list");
    }

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
    static set_primary(name: string): az_sql_failover_group_set_primary_command_builder {
        return new az_sql_failover_group_set_primary_command_builder("az sql failover-group set-primary", name);
    }

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
    static show(name: string): az_sql_failover_group_show_command_builder {
        return new az_sql_failover_group_show_command_builder("az sql failover-group show", name);
    }

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
    static update(name: string): az_sql_failover_group_update_command_builder {
        return new az_sql_failover_group_update_command_builder("az sql failover-group update", name);
    }
}

/** Manage SQL Instance Failover Groups. */
export class az_sql_instance_failover_group {
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
    static create(sourceMi: string, name: string, partnerMi: string, partnerResourceGroup: string, resourceGroup: string): az_sql_instance_failover_group_create_command_builder {
        return new az_sql_instance_failover_group_create_command_builder("az sql instance-failover-group create", sourceMi, name, partnerMi, partnerResourceGroup, resourceGroup);
    }

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
    static delete(location: string, name: string, resourceGroup: string): az_sql_instance_failover_group_delete_command_builder {
        return new az_sql_instance_failover_group_delete_command_builder("az sql instance-failover-group delete", location, name, resourceGroup);
    }

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
    static set_primary(location: string, name: string, resourceGroup: string): az_sql_instance_failover_group_set_primary_command_builder {
        return new az_sql_instance_failover_group_set_primary_command_builder("az sql instance-failover-group set-primary", location, name, resourceGroup);
    }

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
    static show(location: string, name: string, resourceGroup: string): az_sql_instance_failover_group_show_command_builder {
        return new az_sql_instance_failover_group_show_command_builder("az sql instance-failover-group show", location, name, resourceGroup);
    }

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
    static update(location: string, name: string, resourceGroup: string): az_sql_instance_failover_group_update_command_builder {
        return new az_sql_instance_failover_group_update_command_builder("az sql instance-failover-group update", location, name, resourceGroup);
    }
}

/** Manage instance pools. */
export class az_sql_instance_pool {
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
    static create(capacity: string, edition: string, family: string, licenseType: 'BasePrice' | 'LicenseIncluded', location: string, name: string, resourceGroup: string, subnet: string): az_sql_instance_pool_create_command_builder {
        return new az_sql_instance_pool_create_command_builder("az sql instance-pool create", capacity, edition, family, licenseType, location, name, resourceGroup, subnet);
    }

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
    static delete(name: string, resourceGroup: string): az_sql_instance_pool_delete_command_builder {
        return new az_sql_instance_pool_delete_command_builder("az sql instance-pool delete", name, resourceGroup);
    }

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
    static list(): az_sql_instance_pool_list_command_builder {
        return new az_sql_instance_pool_list_command_builder("az sql instance-pool list");
    }

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
    static show(name: string, resourceGroup: string): az_sql_instance_pool_show_command_builder {
        return new az_sql_instance_pool_show_command_builder("az sql instance-pool show", name, resourceGroup);
    }

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
    static update(name: string, resourceGroup: string): az_sql_instance_pool_update_command_builder {
        return new az_sql_instance_pool_update_command_builder("az sql instance-pool update", name, resourceGroup);
    }

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
    static wait(name: string, resourceGroup: string): az_sql_instance_pool_wait_command_builder {
        return new az_sql_instance_pool_wait_command_builder("az sql instance-pool wait", name, resourceGroup);
    }
}

/** Manage a managed instance's Active Directory administrator. */
export class az_sql_mi_ad_admin {
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
    static create(displayName: string, managedInstance: string, objectId: string, resourceGroup: string): az_sql_mi_ad_admin_create_command_builder {
        return new az_sql_mi_ad_admin_create_command_builder("az sql mi ad-admin create", displayName, managedInstance, objectId, resourceGroup);
    }

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
    static delete(): az_sql_mi_ad_admin_delete_command_builder {
        return new az_sql_mi_ad_admin_delete_command_builder("az sql mi ad-admin delete");
    }

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
    static list(): az_sql_mi_ad_admin_list_command_builder {
        return new az_sql_mi_ad_admin_list_command_builder("az sql mi ad-admin list");
    }

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
    static update(displayName: string, objectId: string): az_sql_mi_ad_admin_update_command_builder {
        return new az_sql_mi_ad_admin_update_command_builder("az sql mi ad-admin update", displayName, objectId);
    }
}

/** Manage a SQL Instance's keys. */
export class az_sql_mi_key {
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
    static create(kid: string, managedInstance: string, resourceGroup: string): az_sql_mi_key_create_command_builder {
        return new az_sql_mi_key_create_command_builder("az sql mi key create", kid, managedInstance, resourceGroup);
    }

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
    static delete(kid: string): az_sql_mi_key_delete_command_builder {
        return new az_sql_mi_key_delete_command_builder("az sql mi key delete", kid);
    }

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
    static list(): az_sql_mi_key_list_command_builder {
        return new az_sql_mi_key_list_command_builder("az sql mi key list");
    }

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
    static show(kid: string): az_sql_mi_key_show_command_builder {
        return new az_sql_mi_key_show_command_builder("az sql mi key show", kid);
    }
}

/** Manage operations on a managed instance. */
export class az_sql_mi_op {
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
    static cancel(name: string): az_sql_mi_op_cancel_command_builder {
        return new az_sql_mi_op_cancel_command_builder("az sql mi op cancel", name);
    }

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
    static list(): az_sql_mi_op_list_command_builder {
        return new az_sql_mi_op_list_command_builder("az sql mi op list");
    }

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
    static show(name: string): az_sql_mi_op_show_command_builder {
        return new az_sql_mi_op_show_command_builder("az sql mi op show", name);
    }
}

/** Manage a SQL Instance's encryption protector. */
export class az_sql_mi_tde_key {
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
    static set(serverKeyType: 'AzureKeyVault' | 'ServiceManaged'): az_sql_mi_tde_key_set_command_builder {
        return new az_sql_mi_tde_key_set_command_builder("az sql mi tde-key set", serverKeyType);
    }

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
    static show(): az_sql_mi_tde_key_show_command_builder {
        return new az_sql_mi_tde_key_show_command_builder("az sql mi tde-key show");
    }
}

/** Manage SQL managed instances. */
export class az_sql_mi {
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
    static create(adminPassword: string, adminUser: string, name: string, resourceGroup: string, subnet: string): az_sql_mi_create_command_builder {
        return new az_sql_mi_create_command_builder("az sql mi create", adminPassword, adminUser, name, resourceGroup, subnet);
    }

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
    static delete(): az_sql_mi_delete_command_builder {
        return new az_sql_mi_delete_command_builder("az sql mi delete");
    }

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
    static failover(): az_sql_mi_failover_command_builder {
        return new az_sql_mi_failover_command_builder("az sql mi failover");
    }

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
    static list(): az_sql_mi_list_command_builder {
        return new az_sql_mi_list_command_builder("az sql mi list");
    }

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
    static show(): az_sql_mi_show_command_builder {
        return new az_sql_mi_show_command_builder("az sql mi show");
    }

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
    static update(): az_sql_mi_update_command_builder {
        return new az_sql_mi_update_command_builder("az sql mi update");
    }
}

/** Manage SQL Managed Instance database long term retention backups. */
export class az_sql_midb_ltr_backup {
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
    static delete(): az_sql_midb_ltr_backup_delete_command_builder {
        return new az_sql_midb_ltr_backup_delete_command_builder("az sql midb ltr-backup delete");
    }

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
    static list(location: string): az_sql_midb_ltr_backup_list_command_builder {
        return new az_sql_midb_ltr_backup_list_command_builder("az sql midb ltr-backup list", location);
    }

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
    static restore(backupId: string, destDatabase: string, destMi: string, destResourceGroup: string): az_sql_midb_ltr_backup_restore_command_builder {
        return new az_sql_midb_ltr_backup_restore_command_builder("az sql midb ltr-backup restore", backupId, destDatabase, destMi, destResourceGroup);
    }

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
    static show(): az_sql_midb_ltr_backup_show_command_builder {
        return new az_sql_midb_ltr_backup_show_command_builder("az sql midb ltr-backup show");
    }

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
    static wait(database: string, managedInstance: string, resourceGroup: string): az_sql_midb_ltr_backup_wait_command_builder {
        return new az_sql_midb_ltr_backup_wait_command_builder("az sql midb ltr-backup wait", database, managedInstance, resourceGroup);
    }
}

/** Manage SQL Managed Instance database long term retention policy. */
export class az_sql_midb_ltr_policy {
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
    static set(): az_sql_midb_ltr_policy_set_command_builder {
        return new az_sql_midb_ltr_policy_set_command_builder("az sql midb ltr-policy set");
    }

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
    static show(): az_sql_midb_ltr_policy_show_command_builder {
        return new az_sql_midb_ltr_policy_show_command_builder("az sql midb ltr-policy show");
    }
}

/** Manage SQL Managed Instance database backup short term retention policy. */
export class az_sql_midb_short_term_retention_policy {
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
    static set(retentionDays: string): az_sql_midb_short_term_retention_policy_set_command_builder {
        return new az_sql_midb_short_term_retention_policy_set_command_builder("az sql midb short-term-retention-policy set", retentionDays);
    }

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
    static show(): az_sql_midb_short_term_retention_policy_show_command_builder {
        return new az_sql_midb_short_term_retention_policy_show_command_builder("az sql midb short-term-retention-policy show");
    }
}

/** Manage SQL managed instance databases. */
export class az_sql_midb {
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
    static create(managedInstance: string, name: string, resourceGroup: string): az_sql_midb_create_command_builder {
        return new az_sql_midb_create_command_builder("az sql midb create", managedInstance, name, resourceGroup);
    }

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
    static delete(): az_sql_midb_delete_command_builder {
        return new az_sql_midb_delete_command_builder("az sql midb delete");
    }

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
    static list(): az_sql_midb_list_command_builder {
        return new az_sql_midb_list_command_builder("az sql midb list");
    }

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
    static list_deleted(): az_sql_midb_list_deleted_command_builder {
        return new az_sql_midb_list_deleted_command_builder("az sql midb list-deleted");
    }

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
    static restore(destName: string, time: string): az_sql_midb_restore_command_builder {
        return new az_sql_midb_restore_command_builder("az sql midb restore", destName, time);
    }

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
    static show(): az_sql_midb_show_command_builder {
        return new az_sql_midb_show_command_builder("az sql midb show");
    }
}

/** Manage a server's Active Directory administrator. */
export class az_sql_server_ad_admin {
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
    static create(displayName: string, objectId: string, resourceGroup: string, serverName: string): az_sql_server_ad_admin_create_command_builder {
        return new az_sql_server_ad_admin_create_command_builder("az sql server ad-admin create", displayName, objectId, resourceGroup, serverName);
    }

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
    static delete(): az_sql_server_ad_admin_delete_command_builder {
        return new az_sql_server_ad_admin_delete_command_builder("az sql server ad-admin delete");
    }

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
    static list(): az_sql_server_ad_admin_list_command_builder {
        return new az_sql_server_ad_admin_list_command_builder("az sql server ad-admin list");
    }

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
    static update(): az_sql_server_ad_admin_update_command_builder {
        return new az_sql_server_ad_admin_update_command_builder("az sql server ad-admin update");
    }
}

/** Manage a server's auditing policy. */
export class az_sql_server_audit_policy {
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
    static show(): az_sql_server_audit_policy_show_command_builder {
        return new az_sql_server_audit_policy_show_command_builder("az sql server audit-policy show");
    }

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
    static update(): az_sql_server_audit_policy_update_command_builder {
        return new az_sql_server_audit_policy_update_command_builder("az sql server audit-policy update");
    }
}

/** Manage a server's connection policy. */
export class az_sql_server_conn_policy {
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
    static show(): az_sql_server_conn_policy_show_command_builder {
        return new az_sql_server_conn_policy_show_command_builder("az sql server conn-policy show");
    }

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
    static update(connectionType: 'Default' | 'Proxy' | 'Redirect'): az_sql_server_conn_policy_update_command_builder {
        return new az_sql_server_conn_policy_update_command_builder("az sql server conn-policy update", connectionType);
    }
}

/** Manage a server's DNS aliases. */
export class az_sql_server_dns_alias {
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
    static create(name: string, resourceGroup: string, server: string): az_sql_server_dns_alias_create_command_builder {
        return new az_sql_server_dns_alias_create_command_builder("az sql server dns-alias create", name, resourceGroup, server);
    }

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
    static delete(name: string): az_sql_server_dns_alias_delete_command_builder {
        return new az_sql_server_dns_alias_delete_command_builder("az sql server dns-alias delete", name);
    }

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
    static list(): az_sql_server_dns_alias_list_command_builder {
        return new az_sql_server_dns_alias_list_command_builder("az sql server dns-alias list");
    }

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
    static set(name: string, originalServer: string): az_sql_server_dns_alias_set_command_builder {
        return new az_sql_server_dns_alias_set_command_builder("az sql server dns-alias set", name, originalServer);
    }

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
    static show(name: string): az_sql_server_dns_alias_show_command_builder {
        return new az_sql_server_dns_alias_show_command_builder("az sql server dns-alias show", name);
    }
}

/** Manage a server's firewall rules. */
export class az_sql_server_firewall_rule {
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
    static create(endIpAddress: string, name: string, resourceGroup: string, server: string, startIpAddress: string): az_sql_server_firewall_rule_create_command_builder {
        return new az_sql_server_firewall_rule_create_command_builder("az sql server firewall-rule create", endIpAddress, name, resourceGroup, server, startIpAddress);
    }

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
    static delete(): az_sql_server_firewall_rule_delete_command_builder {
        return new az_sql_server_firewall_rule_delete_command_builder("az sql server firewall-rule delete");
    }

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
    static list(): az_sql_server_firewall_rule_list_command_builder {
        return new az_sql_server_firewall_rule_list_command_builder("az sql server firewall-rule list");
    }

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
    static show(): az_sql_server_firewall_rule_show_command_builder {
        return new az_sql_server_firewall_rule_show_command_builder("az sql server firewall-rule show");
    }

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
    static update(): az_sql_server_firewall_rule_update_command_builder {
        return new az_sql_server_firewall_rule_update_command_builder("az sql server firewall-rule update");
    }
}

/** Manage a server's keys. */
export class az_sql_server_key {
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
    static create(kid: string, resourceGroup: string, server: string): az_sql_server_key_create_command_builder {
        return new az_sql_server_key_create_command_builder("az sql server key create", kid, resourceGroup, server);
    }

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
    static delete(kid: string): az_sql_server_key_delete_command_builder {
        return new az_sql_server_key_delete_command_builder("az sql server key delete", kid);
    }

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
    static list(): az_sql_server_key_list_command_builder {
        return new az_sql_server_key_list_command_builder("az sql server key list");
    }

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
    static show(kid: string): az_sql_server_key_show_command_builder {
        return new az_sql_server_key_show_command_builder("az sql server key show", kid);
    }
}

/** Manage a server's encryption protector. */
export class az_sql_server_tde_key {
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
    static set(serverKeyType: 'AzureKeyVault' | 'ServiceManaged'): az_sql_server_tde_key_set_command_builder {
        return new az_sql_server_tde_key_set_command_builder("az sql server tde-key set", serverKeyType);
    }

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
    static show(): az_sql_server_tde_key_show_command_builder {
        return new az_sql_server_tde_key_show_command_builder("az sql server tde-key show");
    }
}

/** Manage a server's virtual network rules. */
export class az_sql_server_vnet_rule {
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
    static create(name: string, resourceGroup: string, server: string, subnet: string): az_sql_server_vnet_rule_create_command_builder {
        return new az_sql_server_vnet_rule_create_command_builder("az sql server vnet-rule create", name, resourceGroup, server, subnet);
    }

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
    static delete(name: string): az_sql_server_vnet_rule_delete_command_builder {
        return new az_sql_server_vnet_rule_delete_command_builder("az sql server vnet-rule delete", name);
    }

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
    static list(): az_sql_server_vnet_rule_list_command_builder {
        return new az_sql_server_vnet_rule_list_command_builder("az sql server vnet-rule list");
    }

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
    static show(name: string): az_sql_server_vnet_rule_show_command_builder {
        return new az_sql_server_vnet_rule_show_command_builder("az sql server vnet-rule show", name);
    }

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
    static update(name: string, subnet: string): az_sql_server_vnet_rule_update_command_builder {
        return new az_sql_server_vnet_rule_update_command_builder("az sql server vnet-rule update", name, subnet);
    }
}

/** Manage SQL servers. */
export class az_sql_server {
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
    static create(adminPassword: string, adminUser: string, name: string, resourceGroup: string): az_sql_server_create_command_builder {
        return new az_sql_server_create_command_builder("az sql server create", adminPassword, adminUser, name, resourceGroup);
    }

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
    static delete(): az_sql_server_delete_command_builder {
        return new az_sql_server_delete_command_builder("az sql server delete");
    }

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
    static list(): az_sql_server_list_command_builder {
        return new az_sql_server_list_command_builder("az sql server list");
    }

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
    static list_usages(): az_sql_server_list_usages_command_builder {
        return new az_sql_server_list_usages_command_builder("az sql server list-usages");
    }

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
    static show(): az_sql_server_show_command_builder {
        return new az_sql_server_show_command_builder("az sql server show");
    }

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
    static update(): az_sql_server_update_command_builder {
        return new az_sql_server_update_command_builder("az sql server update");
    }

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
    static wait(): az_sql_server_wait_command_builder {
        return new az_sql_server_wait_command_builder("az sql server wait");
    }
}

/** Manage SQL virtual clusters. */
export class az_sql_virtual_cluster {
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
    static delete(): az_sql_virtual_cluster_delete_command_builder {
        return new az_sql_virtual_cluster_delete_command_builder("az sql virtual-cluster delete");
    }

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
    static list(): az_sql_virtual_cluster_list_command_builder {
        return new az_sql_virtual_cluster_list_command_builder("az sql virtual-cluster list");
    }

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
    static show(): az_sql_virtual_cluster_show_command_builder {
        return new az_sql_virtual_cluster_show_command_builder("az sql virtual-cluster show");
    }
}

/** Manage SQL availability group listeners. */
export class az_sql_vm_group_ag_listener {
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
    static create(agName: string, groupName: string, ipAddress: string, loadBalancer: string, name: string, probePort: string, resourceGroup: string, sqlvms: string, subnet: string): az_sql_vm_group_ag_listener_create_command_builder {
        return new az_sql_vm_group_ag_listener_create_command_builder("az sql vm group ag-listener create", agName, groupName, ipAddress, loadBalancer, name, probePort, resourceGroup, sqlvms, subnet);
    }

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
    static delete(groupName: string): az_sql_vm_group_ag_listener_delete_command_builder {
        return new az_sql_vm_group_ag_listener_delete_command_builder("az sql vm group ag-listener delete", groupName);
    }

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
    static list(groupName: string, resourceGroup: string): az_sql_vm_group_ag_listener_list_command_builder {
        return new az_sql_vm_group_ag_listener_list_command_builder("az sql vm group ag-listener list", groupName, resourceGroup);
    }

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
    static show(groupName: string): az_sql_vm_group_ag_listener_show_command_builder {
        return new az_sql_vm_group_ag_listener_show_command_builder("az sql vm group ag-listener show", groupName);
    }

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
    static update(groupName: string): az_sql_vm_group_ag_listener_update_command_builder {
        return new az_sql_vm_group_ag_listener_update_command_builder("az sql vm group ag-listener update", groupName);
    }
}

/** Manage SQL virtual machine groups. */
export class az_sql_vm_group {
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
    static create(domainFqdn: string, imageOffer: string, imageSku: 'Developer' | 'Enterprise', name: string, operatorAcc: string, resourceGroup: string, serviceAcc: string, storageAccount: string): az_sql_vm_group_create_command_builder {
        return new az_sql_vm_group_create_command_builder("az sql vm group create", domainFqdn, imageOffer, imageSku, name, operatorAcc, resourceGroup, serviceAcc, storageAccount);
    }

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
    static delete(): az_sql_vm_group_delete_command_builder {
        return new az_sql_vm_group_delete_command_builder("az sql vm group delete");
    }

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
    static list(): az_sql_vm_group_list_command_builder {
        return new az_sql_vm_group_list_command_builder("az sql vm group list");
    }

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
    static show(): az_sql_vm_group_show_command_builder {
        return new az_sql_vm_group_show_command_builder("az sql vm group show");
    }

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
    static update(): az_sql_vm_group_update_command_builder {
        return new az_sql_vm_group_update_command_builder("az sql vm group update");
    }
}

/** Manage SQL virtual machines. */
export class az_sql_vm {
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
    static add_to_group(sqlvmGroup: string): az_sql_vm_add_to_group_command_builder {
        return new az_sql_vm_add_to_group_command_builder("az sql vm add-to-group", sqlvmGroup);
    }

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
    static create(licenseType: 'AHUB' | 'DR' | 'PAYG', name: string, resourceGroup: string): az_sql_vm_create_command_builder {
        return new az_sql_vm_create_command_builder("az sql vm create", licenseType, name, resourceGroup);
    }

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
    static delete(): az_sql_vm_delete_command_builder {
        return new az_sql_vm_delete_command_builder("az sql vm delete");
    }

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
    static list(): az_sql_vm_list_command_builder {
        return new az_sql_vm_list_command_builder("az sql vm list");
    }

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
    static remove_from_group(): az_sql_vm_remove_from_group_command_builder {
        return new az_sql_vm_remove_from_group_command_builder("az sql vm remove-from-group");
    }

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
    static show(): az_sql_vm_show_command_builder {
        return new az_sql_vm_show_command_builder("az sql vm show");
    }

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
    static update(): az_sql_vm_update_command_builder {
        return new az_sql_vm_update_command_builder("az sql vm update");
    }
}

/** Manage Azure SQL Databases and Data Warehouses. */
export class az_sql {
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
    static list_usages(location: string): az_sql_list_usages_command_builder {
        return new az_sql_list_usages_command_builder("az sql list-usages", location);
    }

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
    static show_usage(location: string, usage: string): az_sql_show_usage_command_builder {
        return new az_sql_show_usage_command_builder("az sql show-usage", location, usage);
    }
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
class az_sql_db_audit_policy_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_audit_policy_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_audit_policy_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_db_audit_policy_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_audit_policy_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_audit_policy_show_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_audit_policy_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_db_audit_policy_update_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** List of actions and action groups to audit. */
    actions(value: string): az_sql_db_audit_policy_update_command_builder {
        this.setFlag("--actions", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_sql_db_audit_policy_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_sql_db_audit_policy_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_audit_policy_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_audit_policy_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_sql_db_audit_policy_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_audit_policy_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The number of days to retain audit logs. */
    retentionDays(value: string): az_sql_db_audit_policy_update_command_builder {
        this.setFlag("--retention-days", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_audit_policy_update_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_sql_db_audit_policy_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Auditing policy state. */
    state(value: 'Disabled' | 'Enabled'): az_sql_db_audit_policy_update_command_builder {
        this.setFlag("--state", value);
        return this;
    }

    /** Name of the storage account. */
    storageAccount(value: string): az_sql_db_audit_policy_update_command_builder {
        this.setFlag("--storage-account", value);
        return this;
    }

    /** The storage account endpoint. */
    storageEndpoint(value: string): az_sql_db_audit_policy_update_command_builder {
        this.setFlag("--storage-endpoint", value);
        return this;
    }

    /** Access key for the storage account. */
    storageKey(value: string): az_sql_db_audit_policy_update_command_builder {
        this.setFlag("--storage-key", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_audit_policy_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_db_classification_recommendation_disable_command_builder extends CommandBuilder {
    constructor(commandPath: string, column: string, schema: string, table: string) {
        super(commandPath);
        this.column(column)
        this.schema(schema)
        this.table(table)
    }

    /** The name of the column. */
    column(value: string): az_sql_db_classification_recommendation_disable_command_builder {
        this.setFlag("--column", value);
        return this;
    }

    /** The name of the schema. */
    schema(value: string): az_sql_db_classification_recommendation_disable_command_builder {
        this.setFlag("--schema", value);
        return this;
    }

    /** The name of the table. */
    table(value: string): az_sql_db_classification_recommendation_disable_command_builder {
        this.setFlag("--table", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_classification_recommendation_disable_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_classification_recommendation_disable_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_classification_recommendation_disable_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_classification_recommendation_disable_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_classification_recommendation_disable_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_db_classification_recommendation_enable_command_builder extends CommandBuilder {
    constructor(commandPath: string, column: string, schema: string, table: string) {
        super(commandPath);
        this.column(column)
        this.schema(schema)
        this.table(table)
    }

    /** The name of the column. */
    column(value: string): az_sql_db_classification_recommendation_enable_command_builder {
        this.setFlag("--column", value);
        return this;
    }

    /** The name of the schema. */
    schema(value: string): az_sql_db_classification_recommendation_enable_command_builder {
        this.setFlag("--schema", value);
        return this;
    }

    /** The name of the table. */
    table(value: string): az_sql_db_classification_recommendation_enable_command_builder {
        this.setFlag("--table", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_classification_recommendation_enable_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_classification_recommendation_enable_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_classification_recommendation_enable_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_classification_recommendation_enable_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_classification_recommendation_enable_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_db_classification_recommendation_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** An OData filter expression that filters elements in the collection. */
    filter(value: string): az_sql_db_classification_recommendation_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_classification_recommendation_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Specifies whether to include disabled recommendations or not. */
    includeDisabledRecommendations(value: string): az_sql_db_classification_recommendation_list_command_builder {
        this.setFlag("--include-disabled-recommendations", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_classification_recommendation_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_db_classification_recommendation_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_classification_recommendation_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_classification_recommendation_list_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_classification_recommendation_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_db_classification_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, column: string, schema: string, table: string) {
        super(commandPath);
        this.column(column)
        this.schema(schema)
        this.table(table)
    }

    /** The name of the column. */
    column(value: string): az_sql_db_classification_delete_command_builder {
        this.setFlag("--column", value);
        return this;
    }

    /** The name of the schema. */
    schema(value: string): az_sql_db_classification_delete_command_builder {
        this.setFlag("--schema", value);
        return this;
    }

    /** The name of the table. */
    table(value: string): az_sql_db_classification_delete_command_builder {
        this.setFlag("--table", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_classification_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_classification_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_classification_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_classification_delete_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_classification_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_db_classification_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** An OData filter expression that filters elements in the collection. */
    filter(value: string): az_sql_db_classification_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_classification_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_classification_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_db_classification_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_classification_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_classification_list_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_classification_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_db_classification_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, column: string, schema: string, table: string) {
        super(commandPath);
        this.column(column)
        this.schema(schema)
        this.table(table)
    }

    /** The name of the column. */
    column(value: string): az_sql_db_classification_show_command_builder {
        this.setFlag("--column", value);
        return this;
    }

    /** The name of the schema. */
    schema(value: string): az_sql_db_classification_show_command_builder {
        this.setFlag("--schema", value);
        return this;
    }

    /** The name of the table. */
    table(value: string): az_sql_db_classification_show_command_builder {
        this.setFlag("--table", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_classification_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_classification_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_db_classification_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_classification_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_classification_show_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_classification_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_db_classification_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, column: string, schema: string, table: string) {
        super(commandPath);
        this.column(column)
        this.schema(schema)
        this.table(table)
    }

    /** The name of the column. */
    column(value: string): az_sql_db_classification_update_command_builder {
        this.setFlag("--column", value);
        return this;
    }

    /** The name of the schema. */
    schema(value: string): az_sql_db_classification_update_command_builder {
        this.setFlag("--schema", value);
        return this;
    }

    /** The name of the table. */
    table(value: string): az_sql_db_classification_update_command_builder {
        this.setFlag("--table", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_classification_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The information type. */
    informationType(value: string): az_sql_db_classification_update_command_builder {
        this.setFlag("--information-type", value);
        return this;
    }

    /** The label name. */
    label(value: string): az_sql_db_classification_update_command_builder {
        this.setFlag("--label", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_classification_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_classification_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_classification_update_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_classification_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_db_ltr_backup_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, database: string, location: string, name: string, server: string) {
        super(commandPath);
        this.database(database)
        this.location(location)
        this.name(name)
        this.server(server)
    }

    /** Name of the Azure SQL Database. If specified (along with server name), retrieves all requested backups under this database. */
    database(value: string): az_sql_db_ltr_backup_delete_command_builder {
        this.setFlag("--database", value);
        return this;
    }

    /** The location of the desired backups. */
    location(value: string): az_sql_db_ltr_backup_delete_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The name of the LTR backup. Use 'az sql db ltr-backup show' or 'az sql db ltr-backup list' for backup name. */
    name(value: string): az_sql_db_ltr_backup_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the Azure SQL Server. If specified, retrieves all requested backups under this server. */
    server(value: string): az_sql_db_ltr_backup_delete_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_ltr_backup_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_sql_db_ltr_backup_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_sql_db_ltr_backup_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, location: string) {
        super(commandPath);
        this.location(location)
    }

    /** The location of the desired backups. */
    location(value: string): az_sql_db_ltr_backup_list_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name of the Azure SQL Database. If specified (along with server name), retrieves all requested backups under this database. */
    database(value: string): az_sql_db_ltr_backup_list_command_builder {
        this.setFlag("--database", value);
        return this;
    }

    /** 'All', 'Live', or 'Deleted'. Will fetch backups only from databases of specified state. If no state provied, defaults to 'All'. */
    databaseState(value: string): az_sql_db_ltr_backup_list_command_builder {
        this.setFlag("--database-state", value);
        return this;
    }

    /** If true, will only return the latest backup for each database. */
    onlyLatestPerDatabase(value: string): az_sql_db_ltr_backup_list_command_builder {
        this.setFlag("--only-latest-per-database", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_db_ltr_backup_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_ltr_backup_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL Server. If specified, retrieves all requested backups under this server. */
    server(value: string): az_sql_db_ltr_backup_list_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_ltr_backup_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_db_ltr_backup_restore_command_builder extends CommandBuilder {
    constructor(commandPath: string, backupId: string, destDatabase: string, destResourceGroup: string, destServer: string) {
        super(commandPath);
        this.backupId(backupId)
        this.destDatabase(destDatabase)
        this.destResourceGroup(destResourceGroup)
        this.destServer(destServer)
    }

    /** The resource id of the long term retention backup to be restored. Use 'az sql db ltr-backup show' or 'az sql db ltr-backup list' for backup id. */
    backupId(value: string): az_sql_db_ltr_backup_restore_command_builder {
        this.setFlag("--backup-id", value);
        return this;
    }

    /** Name of the database that will be created as the restore destination. */
    destDatabase(value: string): az_sql_db_ltr_backup_restore_command_builder {
        this.setFlag("--dest-database", value);
        return this;
    }

    /** Name of the resource group of the server to restore database to. */
    destResourceGroup(value: string): az_sql_db_ltr_backup_restore_command_builder {
        this.setFlag("--dest-resource-group", value);
        return this;
    }

    /** Name of the server to restore database to. */
    destServer(value: string): az_sql_db_ltr_backup_restore_command_builder {
        this.setFlag("--dest-server", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_db_ltr_backup_restore_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_ltr_backup_restore_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_db_ltr_backup_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, database: string, location: string, name: string, server: string) {
        super(commandPath);
        this.database(database)
        this.location(location)
        this.name(name)
        this.server(server)
    }

    /** Name of the Azure SQL Database. If specified (along with server name), retrieves all requested backups under this database. */
    database(value: string): az_sql_db_ltr_backup_show_command_builder {
        this.setFlag("--database", value);
        return this;
    }

    /** The location of the desired backups. */
    location(value: string): az_sql_db_ltr_backup_show_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The name of the LTR backup. Use 'az sql db ltr-backup show' or 'az sql db ltr-backup list' for backup name. */
    name(value: string): az_sql_db_ltr_backup_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the Azure SQL Server. If specified, retrieves all requested backups under this server. */
    server(value: string): az_sql_db_ltr_backup_show_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_db_ltr_backup_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_ltr_backup_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_db_ltr_backup_wait_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_sql_db_ltr_backup_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_sql_db_ltr_backup_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_sql_db_ltr_backup_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_sql_db_ltr_backup_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_ltr_backup_wait_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_sql_db_ltr_backup_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_ltr_backup_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_ltr_backup_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_ltr_backup_wait_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_ltr_backup_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_sql_db_ltr_backup_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_sql_db_ltr_backup_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
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
class az_sql_db_ltr_policy_set_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_ltr_policy_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Retention for the monthly backup. If just a number is passed instead of an ISO 8601 string, days will be assumed as the units.There is a minimum of 7 days and a maximum of 10 years. */
    monthlyRetention(value: string): az_sql_db_ltr_policy_set_command_builder {
        this.setFlag("--monthly-retention", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_ltr_policy_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_ltr_policy_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_ltr_policy_set_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_ltr_policy_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The Week of Year, 1 to 52, in which to take the yearly LTR backup. */
    weekOfYear(value: string): az_sql_db_ltr_policy_set_command_builder {
        this.setFlag("--week-of-year", value);
        return this;
    }

    /** Retention for the weekly backup. If just a number is passed instead of an ISO 8601 string, days will be assumed as the units.There is a minimum of 7 days and a maximum of 10 years. */
    weeklyRetention(value: string): az_sql_db_ltr_policy_set_command_builder {
        this.setFlag("--weekly-retention", value);
        return this;
    }

    /** Retention for the yearly backup. If just a number is passed instead of an ISO 8601 string, days will be assumed as the units.There is a minimum of 7 days and a maximum of 10 years. */
    yearlyRetention(value: string): az_sql_db_ltr_policy_set_command_builder {
        this.setFlag("--yearly-retention", value);
        return this;
    }
}

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
class az_sql_db_ltr_policy_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_ltr_policy_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_ltr_policy_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_db_ltr_policy_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_ltr_policy_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_ltr_policy_show_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_ltr_policy_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_db_op_cancel_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandPath);
        this.name(name)
    }

    /** The unique name of the operation to cancel. */
    name(value: string): az_sql_db_op_cancel_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    database(value: string): az_sql_db_op_cancel_command_builder {
        this.setFlag("--database", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_op_cancel_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_op_cancel_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_op_cancel_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_op_cancel_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_db_op_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of the Azure SQL Database. */
    database(value: string): az_sql_db_op_list_command_builder {
        this.setFlag("--database", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_op_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_db_op_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_op_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_op_list_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_op_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_db_replica_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, partnerServer: string, resourceGroup: string, server: string) {
        super(commandPath);
        this.name(name)
        this.partnerServer(partnerServer)
        this.resourceGroup(resourceGroup)
        this.server(server)
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_replica_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the server to create the new replica in. */
    partnerServer(value: string): az_sql_db_replica_create_command_builder {
        this.setFlag("--partner-server", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_replica_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_replica_create_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled. */
    autoPauseDelay(value: string): az_sql_db_replica_create_command_builder {
        this.setFlag("--auto-pause-delay", value);
        return this;
    }

    /** The capacity component of the sku in integer number of DTUs or vcores. */
    capacity(value: string): az_sql_db_replica_create_command_builder {
        this.setFlag("--capacity", value);
        return this;
    }

    /** The compute model of the database. */
    computeModel(value: 'Provisioned' | 'Serverless'): az_sql_db_replica_create_command_builder {
        this.setFlag("--compute-model", value);
        return this;
    }

    /** The name or resource id of the elastic pool to create the database in. */
    elasticPool(value: string): az_sql_db_replica_create_command_builder {
        this.setFlag("--elastic-pool", value);
        return this;
    }

    /** The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5. */
    family(value: string): az_sql_db_replica_create_command_builder {
        this.setFlag("--family", value);
        return this;
    }

    /** The license type to apply for this database. `LicenseIncluded` if you need a license, or `BasePrice` if you have a license and are eligible for the Azure Hybrid Benefit. */
    licenseType(value: 'BasePrice' | 'LicenseIncluded'): az_sql_db_replica_create_command_builder {
        this.setFlag("--license-type", value);
        return this;
    }

    /** Minimal capacity that database will always have allocated, if not paused. */
    minCapacity(value: string): az_sql_db_replica_create_command_builder {
        this.setFlag("--min-capacity", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_db_replica_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of the resource group to create the new replica in. If unspecified, defaults to the origin resource group. */
    partnerResourceGroup(value: string): az_sql_db_replica_create_command_builder {
        this.setFlag("--partner-resource-group", value);
        return this;
    }

    /** The number of readonly replicas to provision for the database. Only settable for Hyperscale edition. */
    readReplicas(value: string): az_sql_db_replica_create_command_builder {
        this.setFlag("--read-replicas", value);
        return this;
    }

    /** If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases. */
    readScale(value: 'Disabled' | 'Enabled'): az_sql_db_replica_create_command_builder {
        this.setFlag("--read-scale", value);
        return this;
    }

    /** The service objective for the new database. For example: Basic, S0, P1, GP_Gen4_1, GP_Gen5_S_8, BC_Gen5_2, HS_Gen5_32. */
    serviceObjective(value: string): az_sql_db_replica_create_command_builder {
        this.setFlag("--service-objective", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_replica_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_sql_db_replica_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Specifies whether to enable zone redundancy. */
    zoneRedundant(value: boolean): az_sql_db_replica_create_command_builder {
        this.setFlag("--zone-redundant", value.toString());
        return this;
    }
}

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
class az_sql_db_replica_delete_link_command_builder extends CommandBuilder {
    constructor(commandPath: string, partnerServer: string) {
        super(commandPath);
        this.partnerServer(partnerServer)
    }

    /** Name of the server that the other replica is in. */
    partnerServer(value: string): az_sql_db_replica_delete_link_command_builder {
        this.setFlag("--partner-server", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_replica_delete_link_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_replica_delete_link_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the resource group that the other replica is in. If unspecified, defaults to the first database's resource group. */
    partnerResourceGroup(value: string): az_sql_db_replica_delete_link_command_builder {
        this.setFlag("--partner-resource-group", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_replica_delete_link_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_replica_delete_link_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_replica_delete_link_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_sql_db_replica_delete_link_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_sql_db_replica_list_links_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_replica_list_links_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_replica_list_links_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_replica_list_links_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_replica_list_links_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_replica_list_links_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_db_replica_set_primary_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** If specified, the failover operation will allow data loss. */
    allowDataLoss(value: string): az_sql_db_replica_set_primary_command_builder {
        this.setFlag("--allow-data-loss", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_replica_set_primary_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the database to fail over. */
    name(value: string): az_sql_db_replica_set_primary_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the resource group containing the secondary replica that will become the new primary. */
    resourceGroup(value: string): az_sql_db_replica_set_primary_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the server containing the secondary replica that will become the new primary. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_replica_set_primary_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_replica_set_primary_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_db_tde_list_activity_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of the Azure SQL Database. */
    database(value: string): az_sql_db_tde_list_activity_command_builder {
        this.setFlag("--database", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_tde_list_activity_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_tde_list_activity_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_tde_list_activity_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_tde_list_activity_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_db_tde_set_command_builder extends CommandBuilder {
    constructor(commandPath: string, status: 'Disabled' | 'Enabled') {
        super(commandPath);
        this.status(status)
    }

    /** Status of the transparent data encryption. */
    status(value: 'Disabled' | 'Enabled'): az_sql_db_tde_set_command_builder {
        this.setFlag("--status", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    database(value: string): az_sql_db_tde_set_command_builder {
        this.setFlag("--database", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_tde_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_tde_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_tde_set_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_tde_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_db_tde_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of the Azure SQL Database. */
    database(value: string): az_sql_db_tde_show_command_builder {
        this.setFlag("--database", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_tde_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_db_tde_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_tde_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_tde_show_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_tde_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_db_threat_policy_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_threat_policy_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_threat_policy_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_db_threat_policy_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_threat_policy_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_threat_policy_show_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_threat_policy_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_db_threat_policy_update_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_sql_db_threat_policy_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** List of disabled alerts. */
    disabledAlerts(value: string): az_sql_db_threat_policy_update_command_builder {
        this.setFlag("--disabled-alerts", value);
        return this;
    }

    /** Whether the alert is sent to the account administrators. */
    emailAccountAdmins(value: 'Disabled' | 'Enabled'): az_sql_db_threat_policy_update_command_builder {
        this.setFlag("--email-account-admins", value);
        return this;
    }

    /** List of email addresses that alerts are sent to. */
    emailAddresses(value: string): az_sql_db_threat_policy_update_command_builder {
        this.setFlag("--email-addresses", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_sql_db_threat_policy_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_threat_policy_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_threat_policy_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_sql_db_threat_policy_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_threat_policy_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The number of days to retain threat detection logs. */
    retentionDays(value: string): az_sql_db_threat_policy_update_command_builder {
        this.setFlag("--retention-days", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_threat_policy_update_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_sql_db_threat_policy_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Threat detection policy state. */
    state(value: 'Disabled' | 'Enabled' | 'New'): az_sql_db_threat_policy_update_command_builder {
        this.setFlag("--state", value);
        return this;
    }

    /** Name of the storage account. */
    storageAccount(value: string): az_sql_db_threat_policy_update_command_builder {
        this.setFlag("--storage-account", value);
        return this;
    }

    /** The storage account endpoint. */
    storageEndpoint(value: string): az_sql_db_threat_policy_update_command_builder {
        this.setFlag("--storage-endpoint", value);
        return this;
    }

    /** Access key for the storage account. */
    storageKey(value: string): az_sql_db_threat_policy_update_command_builder {
        this.setFlag("--storage-key", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_threat_policy_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_db_copy_command_builder extends CommandBuilder {
    constructor(commandPath: string, destName: string) {
        super(commandPath);
        this.destName(destName)
    }

    /** Name of the database that will be created as the copy destination. */
    destName(value: string): az_sql_db_copy_command_builder {
        this.setFlag("--dest-name", value);
        return this;
    }

    /** Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled. */
    autoPauseDelay(value: string): az_sql_db_copy_command_builder {
        this.setFlag("--auto-pause-delay", value);
        return this;
    }

    /** The capacity component of the sku in integer number of DTUs or vcores. */
    capacity(value: string): az_sql_db_copy_command_builder {
        this.setFlag("--capacity", value);
        return this;
    }

    /** The compute model of the database. */
    computeModel(value: 'Provisioned' | 'Serverless'): az_sql_db_copy_command_builder {
        this.setFlag("--compute-model", value);
        return this;
    }

    /** Name of the resouce group to create the copy in. If unspecified, defaults to the origin resource group. */
    destResourceGroup(value: string): az_sql_db_copy_command_builder {
        this.setFlag("--dest-resource-group", value);
        return this;
    }

    /** Name of the server to create the copy in. If unspecified, defaults to the origin server. */
    destServer(value: string): az_sql_db_copy_command_builder {
        this.setFlag("--dest-server", value);
        return this;
    }

    /** The name or resource id of the elastic pool to create the database in. */
    elasticPool(value: string): az_sql_db_copy_command_builder {
        this.setFlag("--elastic-pool", value);
        return this;
    }

    /** The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5. */
    family(value: string): az_sql_db_copy_command_builder {
        this.setFlag("--family", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_copy_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The license type to apply for this database. `LicenseIncluded` if you need a license, or `BasePrice` if you have a license and are eligible for the Azure Hybrid Benefit. */
    licenseType(value: 'BasePrice' | 'LicenseIncluded'): az_sql_db_copy_command_builder {
        this.setFlag("--license-type", value);
        return this;
    }

    /** Minimal capacity that database will always have allocated, if not paused. */
    minCapacity(value: string): az_sql_db_copy_command_builder {
        this.setFlag("--min-capacity", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_copy_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_db_copy_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The number of readonly replicas to provision for the database. Only settable for Hyperscale edition. */
    readReplicas(value: string): az_sql_db_copy_command_builder {
        this.setFlag("--read-replicas", value);
        return this;
    }

    /** If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases. */
    readScale(value: 'Disabled' | 'Enabled'): az_sql_db_copy_command_builder {
        this.setFlag("--read-scale", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_copy_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_copy_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** The service objective for the new database. For example: Basic, S0, P1, GP_Gen4_1, GP_Gen5_S_8, BC_Gen5_2, HS_Gen5_32. */
    serviceObjective(value: string): az_sql_db_copy_command_builder {
        this.setFlag("--service-objective", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_copy_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_sql_db_copy_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Specifies whether to enable zone redundancy. */
    zoneRedundant(value: boolean): az_sql_db_copy_command_builder {
        this.setFlag("--zone-redundant", value.toString());
        return this;
    }
}

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
class az_sql_db_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string, server: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.server(server)
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_create_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled. */
    autoPauseDelay(value: string): az_sql_db_create_command_builder {
        this.setFlag("--auto-pause-delay", value);
        return this;
    }

    /** The capacity component of the sku in integer number of DTUs or vcores. */
    capacity(value: string): az_sql_db_create_command_builder {
        this.setFlag("--capacity", value);
        return this;
    }

    /** Collation of the metadata catalog. */
    catalogCollation(value: 'DATABASE_DEFAULT' | 'SQL_Latin1_General_CP1_CI_AS'): az_sql_db_create_command_builder {
        this.setFlag("--catalog-collation", value);
        return this;
    }

    /** The collation of the database. */
    collation(value: string): az_sql_db_create_command_builder {
        this.setFlag("--collation", value);
        return this;
    }

    /** The compute model of the database. */
    computeModel(value: 'Provisioned' | 'Serverless'): az_sql_db_create_command_builder {
        this.setFlag("--compute-model", value);
        return this;
    }

    /** The edition component of the sku. Allowed values include: Basic, Standard, Premium, GeneralPurpose, BusinessCritical, Hyperscale. */
    edition(value: string): az_sql_db_create_command_builder {
        this.setFlag("--edition", value);
        return this;
    }

    /** The name or resource id of the elastic pool to create the database in. */
    elasticPool(value: string): az_sql_db_create_command_builder {
        this.setFlag("--elastic-pool", value);
        return this;
    }

    /** The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5. */
    family(value: string): az_sql_db_create_command_builder {
        this.setFlag("--family", value);
        return this;
    }

    /** The license type to apply for this database. `LicenseIncluded` if you need a license, or `BasePrice` if you have a license and are eligible for the Azure Hybrid Benefit. */
    licenseType(value: 'BasePrice' | 'LicenseIncluded'): az_sql_db_create_command_builder {
        this.setFlag("--license-type", value);
        return this;
    }

    /** The max storage size. If no unit is specified, defaults to bytes (B). */
    maxSize(value: string): az_sql_db_create_command_builder {
        this.setFlag("--max-size", value);
        return this;
    }

    /** Minimal capacity that database will always have allocated, if not paused. */
    minCapacity(value: string): az_sql_db_create_command_builder {
        this.setFlag("--min-capacity", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_db_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The number of readonly replicas to provision for the database. Only settable for Hyperscale edition. */
    readReplicas(value: string): az_sql_db_create_command_builder {
        this.setFlag("--read-replicas", value);
        return this;
    }

    /** If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases. */
    readScale(value: 'Disabled' | 'Enabled'): az_sql_db_create_command_builder {
        this.setFlag("--read-scale", value);
        return this;
    }

    /** The name of the sample schema to apply when creating this database. */
    sampleName(value: 'AdventureWorksLT'): az_sql_db_create_command_builder {
        this.setFlag("--sample-name", value);
        return this;
    }

    /** The service objective for the new database. For example: Basic, S0, P1, GP_Gen4_1, GP_Gen5_S_8, BC_Gen5_2, HS_Gen5_32. */
    serviceObjective(value: string): az_sql_db_create_command_builder {
        this.setFlag("--service-objective", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_sql_db_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Specifies whether to enable zone redundancy. */
    zoneRedundant(value: boolean): az_sql_db_create_command_builder {
        this.setFlag("--zone-redundant", value.toString());
        return this;
    }
}

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
class az_sql_db_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_db_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_delete_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_sql_db_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_sql_db_export_command_builder extends CommandBuilder {
    constructor(commandPath: string, adminPassword: string, adminUser: string, storageKey: string, storageKeyType: 'SharedAccessKey' | 'StorageAccessKey', storageUri: string) {
        super(commandPath);
        this.adminPassword(adminPassword)
        this.adminUser(adminUser)
        this.storageKey(storageKey)
        this.storageKeyType(storageKeyType)
        this.storageUri(storageUri)
    }

    /** Required. Administrator login password. */
    adminPassword(value: string): az_sql_db_export_command_builder {
        this.setFlag("--admin-password", value);
        return this;
    }

    /** Required. Administrator login name. */
    adminUser(value: string): az_sql_db_export_command_builder {
        this.setFlag("--admin-user", value);
        return this;
    }

    /** Required. Storage key. */
    storageKey(value: string): az_sql_db_export_command_builder {
        this.setFlag("--storage-key", value);
        return this;
    }

    /** Required. Storage key type. */
    storageKeyType(value: 'SharedAccessKey' | 'StorageAccessKey'): az_sql_db_export_command_builder {
        this.setFlag("--storage-key-type", value);
        return this;
    }

    /** Required. Storage Uri. */
    storageUri(value: string): az_sql_db_export_command_builder {
        this.setFlag("--storage-uri", value);
        return this;
    }

    /** Authentication type. */
    authType(value: 'ADPassword' | 'SQL'): az_sql_db_export_command_builder {
        this.setFlag("--auth-type", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_export_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_export_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_export_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_export_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_export_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_db_import_command_builder extends CommandBuilder {
    constructor(commandPath: string, adminPassword: string, adminUser: string, storageKey: string, storageKeyType: 'SharedAccessKey' | 'StorageAccessKey', storageUri: string) {
        super(commandPath);
        this.adminPassword(adminPassword)
        this.adminUser(adminUser)
        this.storageKey(storageKey)
        this.storageKeyType(storageKeyType)
        this.storageUri(storageUri)
    }

    /** Required. Administrator login password. */
    adminPassword(value: string): az_sql_db_import_command_builder {
        this.setFlag("--admin-password", value);
        return this;
    }

    /** Required. Administrator login name. */
    adminUser(value: string): az_sql_db_import_command_builder {
        this.setFlag("--admin-user", value);
        return this;
    }

    /** Required. Storage key. */
    storageKey(value: string): az_sql_db_import_command_builder {
        this.setFlag("--storage-key", value);
        return this;
    }

    /** Required. Storage key type. */
    storageKeyType(value: 'SharedAccessKey' | 'StorageAccessKey'): az_sql_db_import_command_builder {
        this.setFlag("--storage-key-type", value);
        return this;
    }

    /** Required. Storage Uri. */
    storageUri(value: string): az_sql_db_import_command_builder {
        this.setFlag("--storage-uri", value);
        return this;
    }

    /** Authentication type. */
    authType(value: 'ADPassword' | 'SQL'): az_sql_db_import_command_builder {
        this.setFlag("--auth-type", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_import_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_import_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_import_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_import_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_import_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_db_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** If specified, lists only the databases in this elastic pool. */
    elasticPool(value: string): az_sql_db_list_command_builder {
        this.setFlag("--elastic-pool", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_db_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_list_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_db_list_deleted_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_list_deleted_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_list_deleted_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_list_deleted_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_list_deleted_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_db_list_editions_command_builder extends CommandBuilder {
    constructor(commandPath: string, location: string) {
        super(commandPath);
        this.location(location)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_sql_db_list_editions_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** If specified, show only results that are available in the specified region. */
    available(value: string): az_sql_db_list_editions_command_builder {
        this.setFlag("--available", value);
        return this;
    }

    /** Number of DTUs to search for. If unspecified, all DTU sizes are shown. */
    dtu(value: string): az_sql_db_list_editions_command_builder {
        this.setFlag("--dtu", value);
        return this;
    }

    /** Edition to search for. If unspecified, all editions are shown. */
    edition(value: string): az_sql_db_list_editions_command_builder {
        this.setFlag("--edition", value);
        return this;
    }

    /** Service objective to search for. If unspecified, all service objectives are shown. */
    serviceObjective(value: string): az_sql_db_list_editions_command_builder {
        this.setFlag("--service-objective", value);
        return this;
    }

    /** List of additional details to include in output. */
    showDetails(value: 'max-size'): az_sql_db_list_editions_command_builder {
        this.setFlag("--show-details", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_list_editions_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Number of vcores to search for. If unspecified, all vcore sizes are shown. */
    vcores(value: string): az_sql_db_list_editions_command_builder {
        this.setFlag("--vcores", value);
        return this;
    }
}

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
class az_sql_db_list_usages_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_list_usages_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_list_usages_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_list_usages_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_list_usages_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_list_usages_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_db_rename_command_builder extends CommandBuilder {
    constructor(commandPath: string, newName: string) {
        super(commandPath);
        this.newName(newName)
    }

    /** The new name that the database will be renamed to. */
    newName(value: string): az_sql_db_rename_command_builder {
        this.setFlag("--new-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_rename_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_rename_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_rename_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_rename_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_rename_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_db_restore_command_builder extends CommandBuilder {
    constructor(commandPath: string, destName: string) {
        super(commandPath);
        this.destName(destName)
    }

    /** Name of the database that will be created as the restore destination. */
    destName(value: string): az_sql_db_restore_command_builder {
        this.setFlag("--dest-name", value);
        return this;
    }

    /** Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled. */
    autoPauseDelay(value: string): az_sql_db_restore_command_builder {
        this.setFlag("--auto-pause-delay", value);
        return this;
    }

    /** The capacity component of the sku in integer number of DTUs or vcores. */
    capacity(value: string): az_sql_db_restore_command_builder {
        this.setFlag("--capacity", value);
        return this;
    }

    /** The compute model of the database. */
    computeModel(value: 'Provisioned' | 'Serverless'): az_sql_db_restore_command_builder {
        this.setFlag("--compute-model", value);
        return this;
    }

    /** If specified, restore from a deleted database instead of from an existing database. Must match the deleted time of a deleted database in the same server. Either --time or --deleted-time (or both) must be specified. Time should be in following format: "YYYY-MM-DDTHH:MM:SS". */
    deletedTime(value: string): az_sql_db_restore_command_builder {
        this.setFlag("--deleted-time", value);
        return this;
    }

    /** The edition component of the sku. Allowed values include: Basic, Standard, Premium, GeneralPurpose, BusinessCritical, Hyperscale. */
    edition(value: string): az_sql_db_restore_command_builder {
        this.setFlag("--edition", value);
        return this;
    }

    /** The name or resource id of the elastic pool to create the database in. */
    elasticPool(value: string): az_sql_db_restore_command_builder {
        this.setFlag("--elastic-pool", value);
        return this;
    }

    /** The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5. */
    family(value: string): az_sql_db_restore_command_builder {
        this.setFlag("--family", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_restore_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The license type to apply for this database. `LicenseIncluded` if you need a license, or `BasePrice` if you have a license and are eligible for the Azure Hybrid Benefit. */
    licenseType(value: 'BasePrice' | 'LicenseIncluded'): az_sql_db_restore_command_builder {
        this.setFlag("--license-type", value);
        return this;
    }

    /** Minimal capacity that database will always have allocated, if not paused. */
    minCapacity(value: string): az_sql_db_restore_command_builder {
        this.setFlag("--min-capacity", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_restore_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_db_restore_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The number of readonly replicas to provision for the database. Only settable for Hyperscale edition. */
    readReplicas(value: string): az_sql_db_restore_command_builder {
        this.setFlag("--read-replicas", value);
        return this;
    }

    /** If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases. */
    readScale(value: 'Disabled' | 'Enabled'): az_sql_db_restore_command_builder {
        this.setFlag("--read-scale", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_restore_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_restore_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** The service objective for the new database. For example: Basic, S0, P1, GP_Gen4_1, GP_Gen5_S_8, BC_Gen5_2, HS_Gen5_32. */
    serviceObjective(value: string): az_sql_db_restore_command_builder {
        this.setFlag("--service-objective", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_restore_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_sql_db_restore_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The point in time of the source database that will be restored to create the new database. Must be greater than or equal to the source database's earliestRestoreDate value. Either --time or --deleted-time (or both) must be specified. Time should be in following format: "YYYY-MM-DDTHH:MM:SS". */
    time(value: string): az_sql_db_restore_command_builder {
        this.setFlag("--time", value);
        return this;
    }

    /** Specifies whether to enable zone redundancy. */
    zoneRedundant(value: boolean): az_sql_db_restore_command_builder {
        this.setFlag("--zone-redundant", value.toString());
        return this;
    }
}

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
class az_sql_db_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_db_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_show_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_db_show_connection_string_command_builder extends CommandBuilder {
    constructor(commandPath: string, client: 'ado.net' | 'jdbc' | 'odbc' | 'php' | 'php_pdo' | 'sqlcmd') {
        super(commandPath);
        this.client(client)
    }

    /** Type of client connection provider. */
    client(value: 'ado.net' | 'jdbc' | 'odbc' | 'php' | 'php_pdo' | 'sqlcmd'): az_sql_db_show_connection_string_command_builder {
        this.setFlag("--client", value);
        return this;
    }

    /** Type of authentication. */
    authType(value: 'ADIntegrated' | 'ADPassword' | 'SqlPassword'): az_sql_db_show_connection_string_command_builder {
        this.setFlag("--auth-type", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_show_connection_string_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_show_connection_string_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_show_connection_string_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_show_connection_string_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_db_update_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_sql_db_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled. */
    autoPauseDelay(value: string): az_sql_db_update_command_builder {
        this.setFlag("--auto-pause-delay", value);
        return this;
    }

    /** The capacity component of the sku in integer number of DTUs or vcores. */
    capacity(value: string): az_sql_db_update_command_builder {
        this.setFlag("--capacity", value);
        return this;
    }

    /** The compute model of the database. */
    computeModel(value: 'Provisioned' | 'Serverless'): az_sql_db_update_command_builder {
        this.setFlag("--compute-model", value);
        return this;
    }

    /** The edition component of the sku. Allowed values include: Basic, Standard, Premium, GeneralPurpose, BusinessCritical, Hyperscale. */
    edition(value: string): az_sql_db_update_command_builder {
        this.setFlag("--edition", value);
        return this;
    }

    /** The name or resource id of the elastic pool to move the database into. */
    elasticPool(value: string): az_sql_db_update_command_builder {
        this.setFlag("--elastic-pool", value);
        return this;
    }

    /** The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5. */
    family(value: string): az_sql_db_update_command_builder {
        this.setFlag("--family", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_sql_db_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_db_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The new maximum size of the database expressed in bytes. */
    maxSize(value: string): az_sql_db_update_command_builder {
        this.setFlag("--max-size", value);
        return this;
    }

    /** Minimal capacity that database will always have allocated, if not paused. */
    minCapacity(value: string): az_sql_db_update_command_builder {
        this.setFlag("--min-capacity", value);
        return this;
    }

    /** Name of the Azure SQL Database. */
    name(value: string): az_sql_db_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_db_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The number of readonly replicas to provision for the database. Only settable for Hyperscale edition. */
    readReplicas(value: string): az_sql_db_update_command_builder {
        this.setFlag("--read-replicas", value);
        return this;
    }

    /** If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases. */
    readScale(value: 'Disabled' | 'Enabled'): az_sql_db_update_command_builder {
        this.setFlag("--read-scale", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_sql_db_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_db_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_db_update_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** The name of the new service objective. If this is a standalone db service objective and the db is currently in an elastic pool, then the db is removed from the pool. */
    serviceObjective(value: string): az_sql_db_update_command_builder {
        this.setFlag("--service-objective", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_sql_db_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_db_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Specifies whether to enable zone redundancy. */
    zoneRedundant(value: boolean): az_sql_db_update_command_builder {
        this.setFlag("--zone-redundant", value.toString());
        return this;
    }
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
class az_sql_dw_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string, server: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.server(server)
    }

    /** Name of the data warehouse. */
    name(value: string): az_sql_dw_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_dw_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_dw_create_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** The collation of the data warehouse. */
    collation(value: string): az_sql_dw_create_command_builder {
        this.setFlag("--collation", value);
        return this;
    }

    /** The max storage size. If no unit is specified, defaults to bytes (B). */
    maxSize(value: string): az_sql_dw_create_command_builder {
        this.setFlag("--max-size", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_dw_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The number of readonly replicas to provision for the database. Only settable for Hyperscale edition. */
    readReplicaCount(value: string): az_sql_dw_create_command_builder {
        this.setFlag("--read-replica-count", value);
        return this;
    }

    /** The service objective for the new database. For example: DW100, DW1000c. */
    serviceObjective(value: string): az_sql_dw_create_command_builder {
        this.setFlag("--service-objective", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_dw_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_sql_dw_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Specifies whether to enable zone redundancy. */
    zoneRedundant(value: boolean): az_sql_dw_create_command_builder {
        this.setFlag("--zone-redundant", value.toString());
        return this;
    }
}

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
class az_sql_dw_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_dw_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the data warehouse. */
    name(value: string): az_sql_dw_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_dw_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_dw_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_dw_delete_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_dw_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_sql_dw_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_sql_dw_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_dw_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_dw_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_dw_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_dw_list_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_dw_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_dw_pause_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_dw_pause_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the data warehouse. */
    name(value: string): az_sql_dw_pause_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_dw_pause_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_dw_pause_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_dw_pause_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_dw_resume_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_dw_resume_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the data warehouse. */
    name(value: string): az_sql_dw_resume_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_dw_resume_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_dw_resume_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_dw_resume_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_dw_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_dw_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the data warehouse. */
    name(value: string): az_sql_dw_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_dw_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_dw_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_dw_show_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_dw_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_dw_update_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_sql_dw_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_sql_dw_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_dw_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The max storage size. If no unit is specified, defaults to bytes (B). */
    maxSize(value: string): az_sql_dw_update_command_builder {
        this.setFlag("--max-size", value);
        return this;
    }

    /** Name of the data warehouse. */
    name(value: string): az_sql_dw_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_dw_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_sql_dw_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_dw_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_dw_update_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** The service objective of the data warehouse. For example: DW100, DW1000c. */
    serviceObjective(value: string): az_sql_dw_update_command_builder {
        this.setFlag("--service-objective", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_sql_dw_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_dw_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_elastic_pool_op_cancel_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandPath);
        this.name(name)
    }

    /** The unique name of the operation to cancel. */
    name(value: string): az_sql_elastic_pool_op_cancel_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the Azure SQL Elastic Pool. */
    elasticPool(value: string): az_sql_elastic_pool_op_cancel_command_builder {
        this.setFlag("--elastic-pool", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_elastic_pool_op_cancel_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_elastic_pool_op_cancel_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_elastic_pool_op_cancel_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_elastic_pool_op_cancel_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_elastic_pool_op_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of the Azure SQL Elastic Pool. */
    elasticPool(value: string): az_sql_elastic_pool_op_list_command_builder {
        this.setFlag("--elastic-pool", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_elastic_pool_op_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_elastic_pool_op_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_elastic_pool_op_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_elastic_pool_op_list_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_elastic_pool_op_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_elastic_pool_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string, server: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.server(server)
    }

    /** The name of the elastic pool. */
    name(value: string): az_sql_elastic_pool_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_elastic_pool_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_elastic_pool_create_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** The capacity component of the sku in integer number of DTUs or vcores. */
    capacity(value: string): az_sql_elastic_pool_create_command_builder {
        this.setFlag("--capacity", value);
        return this;
    }

    /** The maximum capacity (in DTUs or vcores) any one database can consume. */
    dbMaxCapacity(value: string): az_sql_elastic_pool_create_command_builder {
        this.setFlag("--db-max-capacity", value);
        return this;
    }

    /** The minumum capacity (in DTUs or vcores) each database is guaranteed. */
    dbMinCapacity(value: string): az_sql_elastic_pool_create_command_builder {
        this.setFlag("--db-min-capacity", value);
        return this;
    }

    /** The edition component of the sku. Allowed values include: Basic, Standard, Premium, GeneralPurpose, BusinessCritical. */
    edition(value: string): az_sql_elastic_pool_create_command_builder {
        this.setFlag("--edition", value);
        return this;
    }

    /** The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5. */
    family(value: string): az_sql_elastic_pool_create_command_builder {
        this.setFlag("--family", value);
        return this;
    }

    /** The license type to apply for this elastic pool. */
    licenseType(value: 'BasePrice' | 'LicenseIncluded'): az_sql_elastic_pool_create_command_builder {
        this.setFlag("--license-type", value);
        return this;
    }

    /** The max storage size. If no unit is specified, defaults to bytes (B). */
    maxSize(value: string): az_sql_elastic_pool_create_command_builder {
        this.setFlag("--max-size", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_elastic_pool_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_elastic_pool_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_sql_elastic_pool_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Specifies whether to enable zone redundancy. */
    zoneRedundant(value: boolean): az_sql_elastic_pool_create_command_builder {
        this.setFlag("--zone-redundant", value.toString());
        return this;
    }
}

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
class az_sql_elastic_pool_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_elastic_pool_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the elastic pool. */
    name(value: string): az_sql_elastic_pool_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_elastic_pool_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_elastic_pool_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_elastic_pool_delete_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_elastic_pool_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_elastic_pool_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_elastic_pool_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_elastic_pool_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_elastic_pool_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_elastic_pool_list_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** The number of elements in the collection to skip. */
    skip(value: string): az_sql_elastic_pool_list_command_builder {
        this.setFlag("--skip", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_elastic_pool_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_elastic_pool_list_dbs_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_elastic_pool_list_dbs_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the elastic pool. */
    name(value: string): az_sql_elastic_pool_list_dbs_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_elastic_pool_list_dbs_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_elastic_pool_list_dbs_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_elastic_pool_list_dbs_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_elastic_pool_list_editions_command_builder extends CommandBuilder {
    constructor(commandPath: string, location: string) {
        super(commandPath);
        this.location(location)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_sql_elastic_pool_list_editions_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** If specified, show only results that are available in the specified region. */
    available(value: string): az_sql_elastic_pool_list_editions_command_builder {
        this.setFlag("--available", value);
        return this;
    }

    /** Number of DTUs to search for. If unspecified, all DTU sizes are shown. */
    dtu(value: string): az_sql_elastic_pool_list_editions_command_builder {
        this.setFlag("--dtu", value);
        return this;
    }

    /** Edition to search for. If unspecified, all editions are shown. */
    edition(value: string): az_sql_elastic_pool_list_editions_command_builder {
        this.setFlag("--edition", value);
        return this;
    }

    /** List of additional details to include in output. */
    showDetails(value: 'db-max-dtu' | 'db-max-size' | 'db-min-dtu' | 'max-size'): az_sql_elastic_pool_list_editions_command_builder {
        this.setFlag("--show-details", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_elastic_pool_list_editions_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Number of vcores to search for. If unspecified, all vcore sizes are shown. */
    vcores(value: string): az_sql_elastic_pool_list_editions_command_builder {
        this.setFlag("--vcores", value);
        return this;
    }
}

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
class az_sql_elastic_pool_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_elastic_pool_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the elastic pool. */
    name(value: string): az_sql_elastic_pool_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_elastic_pool_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_elastic_pool_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_elastic_pool_show_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_elastic_pool_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_elastic_pool_update_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_sql_elastic_pool_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The capacity component of the sku in integer number of DTUs or vcores. */
    capacity(value: string): az_sql_elastic_pool_update_command_builder {
        this.setFlag("--capacity", value);
        return this;
    }

    /** The maximum capacity (in DTUs or vcores) any one database can consume. */
    dbMaxCapacity(value: string): az_sql_elastic_pool_update_command_builder {
        this.setFlag("--db-max-capacity", value);
        return this;
    }

    /** The minumum capacity (in DTUs or vcores) each database is guaranteed. */
    dbMinCapacity(value: string): az_sql_elastic_pool_update_command_builder {
        this.setFlag("--db-min-capacity", value);
        return this;
    }

    /** The edition component of the sku. Allowed values include: Basic, Standard, Premium, GeneralPurpose, BusinessCritical. */
    edition(value: string): az_sql_elastic_pool_update_command_builder {
        this.setFlag("--edition", value);
        return this;
    }

    /** The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5. */
    family(value: string): az_sql_elastic_pool_update_command_builder {
        this.setFlag("--family", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_sql_elastic_pool_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_elastic_pool_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The max storage size. If no unit is specified, defaults to bytes (B). */
    maxSize(value: string): az_sql_elastic_pool_update_command_builder {
        this.setFlag("--max-size", value);
        return this;
    }

    /** The name of the elastic pool. */
    name(value: string): az_sql_elastic_pool_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_elastic_pool_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_sql_elastic_pool_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_elastic_pool_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_elastic_pool_update_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_sql_elastic_pool_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_elastic_pool_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Specifies whether to enable zone redundancy. */
    zoneRedundant(value: boolean): az_sql_elastic_pool_update_command_builder {
        this.setFlag("--zone-redundant", value.toString());
        return this;
    }
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
class az_sql_failover_group_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, partnerServer: string, resourceGroup: string, server: string) {
        super(commandPath);
        this.name(name)
        this.partnerServer(partnerServer)
        this.resourceGroup(resourceGroup)
        this.server(server)
    }

    /** The name of the Failover Group. */
    name(value: string): az_sql_failover_group_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The name of the partner server of a Failover Group. */
    partnerServer(value: string): az_sql_failover_group_create_command_builder {
        this.setFlag("--partner-server", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_failover_group_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_failover_group_create_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** List of databases to add to Failover Group. */
    addDb(value: string): az_sql_failover_group_create_command_builder {
        this.setFlag("--add-db", value);
        return this;
    }

    /** The failover policy of the Failover Group. */
    failoverPolicy(value: 'Automatic' | 'Manual'): az_sql_failover_group_create_command_builder {
        this.setFlag("--failover-policy", value);
        return this;
    }

    /** Interval in hours before automatic failover is initiated if an outage occurs on the primary server. This indicates that Azure SQL Database will not initiate automatic failover before the grace period expires. Please note that failover operation with --allow-data-loss option might cause data loss due to the nature of asynchronous synchronization. */
    gracePeriod(value: string): az_sql_failover_group_create_command_builder {
        this.setFlag("--grace-period", value);
        return this;
    }

    /** The name of the resource group of the partner server. */
    partnerResourceGroup(value: string): az_sql_failover_group_create_command_builder {
        this.setFlag("--partner-resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_failover_group_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_failover_group_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandPath);
        this.name(name)
    }

    /** The name of the Failover Group. */
    name(value: string): az_sql_failover_group_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_failover_group_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_failover_group_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_failover_group_delete_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_failover_group_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_failover_group_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_failover_group_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_failover_group_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_failover_group_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_failover_group_list_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_failover_group_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_failover_group_set_primary_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandPath);
        this.name(name)
    }

    /** The name of the Failover Group. */
    name(value: string): az_sql_failover_group_set_primary_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Complete the failover even if doing so may result in data loss. This will allow the failover to proceed even if a primary database is unavailable. */
    allowDataLoss(value: string): az_sql_failover_group_set_primary_command_builder {
        this.setFlag("--allow-data-loss", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_failover_group_set_primary_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_failover_group_set_primary_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_failover_group_set_primary_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_failover_group_set_primary_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_failover_group_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandPath);
        this.name(name)
    }

    /** The name of the Failover Group. */
    name(value: string): az_sql_failover_group_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_failover_group_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_failover_group_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_failover_group_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_failover_group_show_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_failover_group_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_failover_group_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandPath);
        this.name(name)
    }

    /** The name of the Failover Group. */
    name(value: string): az_sql_failover_group_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_sql_failover_group_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** List of databases to add to Failover Group. */
    addDb(value: string): az_sql_failover_group_update_command_builder {
        this.setFlag("--add-db", value);
        return this;
    }

    /** The failover policy of the Failover Group. */
    failoverPolicy(value: 'Automatic' | 'Manual'): az_sql_failover_group_update_command_builder {
        this.setFlag("--failover-policy", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_sql_failover_group_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Interval in hours before automatic failover is initiated if an outage occurs on the primary server. This indicates that Azure SQL Database will not initiate automatic failover before the grace period expires. Please note that failover operation with --allow-data-loss option might cause data loss due to the nature of asynchronous synchronization. */
    gracePeriod(value: string): az_sql_failover_group_update_command_builder {
        this.setFlag("--grace-period", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_failover_group_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_sql_failover_group_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** List of databases to remove from Failover Group. */
    removeDb(value: string): az_sql_failover_group_update_command_builder {
        this.setFlag("--remove-db", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_failover_group_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_failover_group_update_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_sql_failover_group_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_failover_group_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_instance_failover_group_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, sourceMi: string, name: string, partnerMi: string, partnerResourceGroup: string, resourceGroup: string) {
        super(commandPath);
        this.sourceMi(sourceMi)
        this.name(name)
        this.partnerMi(partnerMi)
        this.partnerResourceGroup(partnerResourceGroup)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the Azure SQL managed instance. */
    sourceMi(value: string): az_sql_instance_failover_group_create_command_builder {
        this.setFlag("--source-mi", value);
        return this;
    }

    /** The name of the Instance Failover Group. */
    name(value: string): az_sql_instance_failover_group_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The name of the partner managed instance of a Instance Failover Group. */
    partnerMi(value: string): az_sql_instance_failover_group_create_command_builder {
        this.setFlag("--partner-mi", value);
        return this;
    }

    /** The name of the resource group of the partner managed instance. */
    partnerResourceGroup(value: string): az_sql_instance_failover_group_create_command_builder {
        this.setFlag("--partner-resource-group", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_instance_failover_group_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The failover policy of the Instance Failover Group. */
    failoverPolicy(value: 'Automatic' | 'Manual'): az_sql_instance_failover_group_create_command_builder {
        this.setFlag("--failover-policy", value);
        return this;
    }

    /** Interval in hours before automatic failover is initiated if an outage occurs on the primary server. This indicates that Azure SQL Database will not initiate automatic failover before the grace period expires. Please note that failover operation with --allow-data-loss option might cause data loss due to the nature of asynchronous synchronization. */
    gracePeriod(value: string): az_sql_instance_failover_group_create_command_builder {
        this.setFlag("--grace-period", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_instance_failover_group_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_instance_failover_group_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, location: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.location(location)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_sql_instance_failover_group_delete_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The name of the Instance Failover Group. */
    name(value: string): az_sql_instance_failover_group_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_instance_failover_group_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_instance_failover_group_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_instance_failover_group_set_primary_command_builder extends CommandBuilder {
    constructor(commandPath: string, location: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.location(location)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_sql_instance_failover_group_set_primary_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The name of the Instance Failover Group. */
    name(value: string): az_sql_instance_failover_group_set_primary_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_instance_failover_group_set_primary_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Complete the failover even if doing so may result in data loss. This will allow the failover to proceed even if a primary database is unavailable. */
    allowDataLoss(value: string): az_sql_instance_failover_group_set_primary_command_builder {
        this.setFlag("--allow-data-loss", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_instance_failover_group_set_primary_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_instance_failover_group_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, location: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.location(location)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_sql_instance_failover_group_show_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The name of the Instance Failover Group. */
    name(value: string): az_sql_instance_failover_group_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_instance_failover_group_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_instance_failover_group_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_instance_failover_group_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_instance_failover_group_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, location: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.location(location)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_sql_instance_failover_group_update_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The name of the Instance Failover Group. */
    name(value: string): az_sql_instance_failover_group_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_instance_failover_group_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_sql_instance_failover_group_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The failover policy of the Instance Failover Group. */
    failoverPolicy(value: 'Automatic' | 'Manual'): az_sql_instance_failover_group_update_command_builder {
        this.setFlag("--failover-policy", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_sql_instance_failover_group_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Interval in hours before automatic failover is initiated if an outage occurs on the primary server. This indicates that Azure SQL Database will not initiate automatic failover before the grace period expires. Please note that failover operation with --allow-data-loss option might cause data loss due to the nature of asynchronous synchronization. */
    gracePeriod(value: string): az_sql_instance_failover_group_update_command_builder {
        this.setFlag("--grace-period", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_sql_instance_failover_group_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_sql_instance_failover_group_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_instance_failover_group_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_instance_pool_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, capacity: string, edition: string, family: string, licenseType: 'BasePrice' | 'LicenseIncluded', location: string, name: string, resourceGroup: string, subnet: string) {
        super(commandPath);
        this.capacity(capacity)
        this.edition(edition)
        this.family(family)
        this.licenseType(licenseType)
        this.location(location)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.subnet(subnet)
    }

    /** Capacity of the instance pool in vcores. */
    capacity(value: string): az_sql_instance_pool_create_command_builder {
        this.setFlag("--capacity", value);
        return this;
    }

    /** The edition component of the sku. Allowed value: GeneralPurpose. */
    edition(value: string): az_sql_instance_pool_create_command_builder {
        this.setFlag("--edition", value);
        return this;
    }

    /** The compute generation component of the sku. Allowed value: Gen5. */
    family(value: string): az_sql_instance_pool_create_command_builder {
        this.setFlag("--family", value);
        return this;
    }

    /** The license type to apply for this instance pool. */
    licenseType(value: 'BasePrice' | 'LicenseIncluded'): az_sql_instance_pool_create_command_builder {
        this.setFlag("--license-type", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_sql_instance_pool_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Instance Pool Name. */
    name(value: string): az_sql_instance_pool_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_instance_pool_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of the subnet that allows access to an Instance Pool. If subnet name is provided, --vnet-name must be provided. */
    subnet(value: string): az_sql_instance_pool_create_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_instance_pool_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_instance_pool_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_sql_instance_pool_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The virtual network name. */
    vnetName(value: string): az_sql_instance_pool_create_command_builder {
        this.setFlag("--vnet-name", value);
        return this;
    }
}

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
class az_sql_instance_pool_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Instance Pool Name. */
    name(value: string): az_sql_instance_pool_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_instance_pool_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_instance_pool_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_instance_pool_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_sql_instance_pool_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_sql_instance_pool_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_instance_pool_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_instance_pool_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_instance_pool_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_instance_pool_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Instance Pool Name. */
    name(value: string): az_sql_instance_pool_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_instance_pool_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_instance_pool_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_instance_pool_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_instance_pool_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Instance Pool Name. */
    name(value: string): az_sql_instance_pool_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_instance_pool_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_instance_pool_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_sql_instance_pool_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

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
class az_sql_instance_pool_wait_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Instance Pool Name. */
    name(value: string): az_sql_instance_pool_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_instance_pool_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_sql_instance_pool_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_sql_instance_pool_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_sql_instance_pool_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_sql_instance_pool_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_sql_instance_pool_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_instance_pool_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_sql_instance_pool_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_sql_instance_pool_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
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
class az_sql_mi_ad_admin_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, displayName: string, managedInstance: string, objectId: string, resourceGroup: string) {
        super(commandPath);
        this.displayName(displayName)
        this.managedInstance(managedInstance)
        this.objectId(objectId)
        this.resourceGroup(resourceGroup)
    }

    /** Display name of the Azure AD administrator user or group. */
    displayName(value: string): az_sql_mi_ad_admin_create_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Name of the Azure SQL managed instance. */
    managedInstance(value: string): az_sql_mi_ad_admin_create_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** The unique ID of the Azure AD administrator. */
    objectId(value: string): az_sql_mi_ad_admin_create_command_builder {
        this.setFlag("--object-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_mi_ad_admin_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_mi_ad_admin_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_mi_ad_admin_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_mi_ad_admin_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL managed instance. */
    managedInstance(value: string): az_sql_mi_ad_admin_delete_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_mi_ad_admin_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_mi_ad_admin_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_mi_ad_admin_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_mi_ad_admin_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL managed instance. */
    managedInstance(value: string): az_sql_mi_ad_admin_list_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_mi_ad_admin_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_mi_ad_admin_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_mi_ad_admin_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_mi_ad_admin_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, displayName: string, objectId: string) {
        super(commandPath);
        this.displayName(displayName)
        this.objectId(objectId)
    }

    /** Display name of the Azure AD administrator user or group. */
    displayName(value: string): az_sql_mi_ad_admin_update_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** The unique ID of the Azure AD administrator. */
    objectId(value: string): az_sql_mi_ad_admin_update_command_builder {
        this.setFlag("--object-id", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_mi_ad_admin_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL managed instance. */
    managedInstance(value: string): az_sql_mi_ad_admin_update_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_mi_ad_admin_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_mi_ad_admin_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_mi_key_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, kid: string, managedInstance: string, resourceGroup: string) {
        super(commandPath);
        this.kid(kid)
        this.managedInstance(managedInstance)
        this.resourceGroup(resourceGroup)
    }

    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    kid(value: string): az_sql_mi_key_create_command_builder {
        this.setFlag("--kid", value);
        return this;
    }

    /** Name of the Azure SQL managed instance. */
    managedInstance(value: string): az_sql_mi_key_create_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_mi_key_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_mi_key_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_mi_key_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, kid: string) {
        super(commandPath);
        this.kid(kid)
    }

    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    kid(value: string): az_sql_mi_key_delete_command_builder {
        this.setFlag("--kid", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_mi_key_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL managed instance. */
    managedInstance(value: string): az_sql_mi_key_delete_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_mi_key_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_mi_key_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_mi_key_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** An OData filter expression that filters elements in the collection. */
    filter(value: string): az_sql_mi_key_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_mi_key_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL managed instance. */
    managedInstance(value: string): az_sql_mi_key_list_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_mi_key_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_mi_key_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_mi_key_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_mi_key_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, kid: string) {
        super(commandPath);
        this.kid(kid)
    }

    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    kid(value: string): az_sql_mi_key_show_command_builder {
        this.setFlag("--kid", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_mi_key_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL managed instance. */
    managedInstance(value: string): az_sql_mi_key_show_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_mi_key_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_mi_key_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_mi_key_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_mi_op_cancel_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandPath);
        this.name(name)
    }

    /** The unique name of the operation to cancel. */
    name(value: string): az_sql_mi_op_cancel_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_mi_op_cancel_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL Managed Instance. */
    managedInstance(value: string): az_sql_mi_op_cancel_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_mi_op_cancel_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_mi_op_cancel_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_mi_op_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_mi_op_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL Managed Instance. */
    managedInstance(value: string): az_sql_mi_op_list_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_mi_op_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_mi_op_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_mi_op_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_mi_op_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandPath);
        this.name(name)
    }

    /** The unique name of the operation to show. */
    name(value: string): az_sql_mi_op_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_mi_op_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL Managed Instance. */
    managedInstance(value: string): az_sql_mi_op_show_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_mi_op_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_mi_op_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_mi_op_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_mi_tde_key_set_command_builder extends CommandBuilder {
    constructor(commandPath: string, serverKeyType: 'AzureKeyVault' | 'ServiceManaged') {
        super(commandPath);
        this.serverKeyType(serverKeyType)
    }

    /** The type of the server key. */
    serverKeyType(value: 'AzureKeyVault' | 'ServiceManaged'): az_sql_mi_tde_key_set_command_builder {
        this.setFlag("--server-key-type", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_mi_tde_key_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    kid(value: string): az_sql_mi_tde_key_set_command_builder {
        this.setFlag("--kid", value);
        return this;
    }

    /** Name of the Azure SQL managed instance. */
    managedInstance(value: string): az_sql_mi_tde_key_set_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_mi_tde_key_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_mi_tde_key_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_mi_tde_key_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_mi_tde_key_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL managed instance. */
    managedInstance(value: string): az_sql_mi_tde_key_show_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_mi_tde_key_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_mi_tde_key_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_mi_tde_key_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_mi_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, adminPassword: string, adminUser: string, name: string, resourceGroup: string, subnet: string) {
        super(commandPath);
        this.adminPassword(adminPassword)
        this.adminUser(adminUser)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.subnet(subnet)
    }

    /** The administrator login password (required for managed instance creation). */
    adminPassword(value: string): az_sql_mi_create_command_builder {
        this.setFlag("--admin-password", value);
        return this;
    }

    /** Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation). */
    adminUser(value: string): az_sql_mi_create_command_builder {
        this.setFlag("--admin-user", value);
        return this;
    }

    /** The managed instance name. */
    name(value: string): az_sql_mi_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_mi_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of the subnet that allows access to an Azure Sql Managed Instance. If subnet name is provided, --vnet-name must be provided. */
    subnet(value: string): az_sql_mi_create_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Generate and assign an Azure Active Directory Identity for this managed instance for use with key management services like Azure KeyVault. */
    assignIdentity(value: string): az_sql_mi_create_command_builder {
        this.setFlag("--assign-identity", value);
        return this;
    }

    /** Backup storage redundancy used to store backups. */
    backupStorageRedundancy(value: string): az_sql_mi_create_command_builder {
        this.setFlag("--backup-storage-redundancy", value);
        return this;
    }

    /** The capacity of the managed instance in integer number of vcores. */
    capacity(value: string): az_sql_mi_create_command_builder {
        this.setFlag("--capacity", value);
        return this;
    }

    /** The collation of the managed instance. */
    collation(value: string): az_sql_mi_create_command_builder {
        this.setFlag("--collation", value);
        return this;
    }

    /** The edition component of the sku. Allowed values include: GeneralPurpose, BusinessCritical. */
    edition(value: string): az_sql_mi_create_command_builder {
        this.setFlag("--edition", value);
        return this;
    }

    /** The compute generation component of the sku. Allowed values include: Gen4, Gen5. */
    family(value: string): az_sql_mi_create_command_builder {
        this.setFlag("--family", value);
        return this;
    }

    /** The license type to apply for this managed instance. */
    licenseType(value: 'BasePrice' | 'LicenseIncluded'): az_sql_mi_create_command_builder {
        this.setFlag("--license-type", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_sql_mi_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The minimal TLS version enforced by the managed instance for inbound connections. */
    minimalTlsVersion(value: '1.0' | '1.1' | '1.2' | 'None'): az_sql_mi_create_command_builder {
        this.setFlag("--minimal-tls-version", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_mi_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The connection type used for connecting to the instance. */
    proxyOverride(value: 'Default' | 'Proxy' | 'Redirect'): az_sql_mi_create_command_builder {
        this.setFlag("--proxy-override", value);
        return this;
    }

    /** Whether or not the public data endpoint is enabled for the instance. */
    publicDataEndpointEnabled(value: boolean): az_sql_mi_create_command_builder {
        this.setFlag("--public-data-endpoint-enabled", value.toString());
        return this;
    }

    /** The storage size of the managed instance. Storage size must be specified in increments of 32 GB. */
    storage(value: string): az_sql_mi_create_command_builder {
        this.setFlag("--storage", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_mi_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_sql_mi_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The time zone id for the instance to set. A list of time zone ids is exposed through the sys.time_zone_info (Transact-SQL) view. */
    timezoneId(value: string): az_sql_mi_create_command_builder {
        this.setFlag("--timezone-id", value);
        return this;
    }

    /** The virtual network name. */
    vnetName(value: string): az_sql_mi_create_command_builder {
        this.setFlag("--vnet-name", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_sql_mi_create_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_sql_mi_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_mi_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The managed instance name. */
    name(value: string): az_sql_mi_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_mi_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_mi_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_mi_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_sql_mi_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_sql_mi_failover_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_mi_failover_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The managed instance name. */
    name(value: string): az_sql_mi_failover_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_mi_failover_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The type of replica to be failed over. */
    replicaType(value: string): az_sql_mi_failover_command_builder {
        this.setFlag("--replica-type", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_mi_failover_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_mi_failover_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_mi_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_mi_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_mi_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_mi_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_mi_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_mi_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The managed instance name. */
    name(value: string): az_sql_mi_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_mi_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_mi_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_mi_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_mi_update_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_sql_mi_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The administrator login password (required for managed instance creation). */
    adminPassword(value: string): az_sql_mi_update_command_builder {
        this.setFlag("--admin-password", value);
        return this;
    }

    /** Generate and assign an Azure Active Directory Identity for this managed instance for use with key management services like Azure KeyVault. If identity is already assigned - do nothing. */
    assignIdentity(value: string): az_sql_mi_update_command_builder {
        this.setFlag("--assign-identity", value);
        return this;
    }

    /** The capacity of the managed instance in integer number of vcores. */
    capacity(value: string): az_sql_mi_update_command_builder {
        this.setFlag("--capacity", value);
        return this;
    }

    /** The edition component of the sku. Allowed values include: GeneralPurpose, BusinessCritical. */
    edition(value: string): az_sql_mi_update_command_builder {
        this.setFlag("--edition", value);
        return this;
    }

    /** The compute generation component of the sku. Allowed values include: Gen4, Gen5. */
    family(value: string): az_sql_mi_update_command_builder {
        this.setFlag("--family", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_sql_mi_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_mi_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The license type to apply for this managed instance. */
    licenseType(value: 'BasePrice' | 'LicenseIncluded'): az_sql_mi_update_command_builder {
        this.setFlag("--license-type", value);
        return this;
    }

    /** The minimal TLS version enforced by the managed instance for inbound connections. */
    minimalTlsVersion(value: '1.0' | '1.1' | '1.2' | 'None'): az_sql_mi_update_command_builder {
        this.setFlag("--minimal-tls-version", value);
        return this;
    }

    /** The managed instance name. */
    name(value: string): az_sql_mi_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_mi_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The connection type used for connecting to the instance. */
    proxyOverride(value: 'Default' | 'Proxy' | 'Redirect'): az_sql_mi_update_command_builder {
        this.setFlag("--proxy-override", value);
        return this;
    }

    /** Whether or not the public data endpoint is enabled for the instance. */
    publicDataEndpointEnabled(value: boolean): az_sql_mi_update_command_builder {
        this.setFlag("--public-data-endpoint-enabled", value.toString());
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_sql_mi_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_mi_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_sql_mi_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** The storage size of the managed instance. Storage size must be specified in increments of 32 GB. */
    storage(value: string): az_sql_mi_update_command_builder {
        this.setFlag("--storage", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_mi_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_sql_mi_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
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
class az_sql_midb_ltr_backup_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The resource id of the backups. Use 'az sql midb ltr-backup show' or 'az sql midb ltr-backup list' for backup id. If provided, other arguments are not required. */
    backupId(value: string): az_sql_midb_ltr_backup_delete_command_builder {
        this.setFlag("--backup-id", value);
        return this;
    }

    /** The name of the Azure SQL Managed Database. */
    database(value: string): az_sql_midb_ltr_backup_delete_command_builder {
        this.setFlag("--database", value);
        return this;
    }

    /** The location of the desired backup(s). */
    location(value: string): az_sql_midb_ltr_backup_delete_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name of the Azure SQL managed instance. */
    managedInstance(value: string): az_sql_midb_ltr_backup_delete_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** The name of the LTR backup. Use 'az sql midb ltr-backup show' or 'az sql midb ltr-backup list' for backup name. */
    name(value: string): az_sql_midb_ltr_backup_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_midb_ltr_backup_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_sql_midb_ltr_backup_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_sql_midb_ltr_backup_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, location: string) {
        super(commandPath);
        this.location(location)
    }

    /** The location of the desired backup(s). */
    location(value: string): az_sql_midb_ltr_backup_list_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The name of the Azure SQL Managed Database. If specified (along with instance name), retrieves all requested backups under this database. */
    database(value: string): az_sql_midb_ltr_backup_list_command_builder {
        this.setFlag("--database", value);
        return this;
    }

    /** 'All', 'Live', or 'Deleted'. Will fetch backups only from databases of specified state. If no state provied, defaults to 'All'. */
    databaseState(value: string): az_sql_midb_ltr_backup_list_command_builder {
        this.setFlag("--database-state", value);
        return this;
    }

    /** If true, will only return the latest backup for each database. */
    onlyLatestPerDatabase(value: string): az_sql_midb_ltr_backup_list_command_builder {
        this.setFlag("--only-latest-per-database", value);
        return this;
    }

    /** Name of the Azure SQL managed instance. If specified, retrieves all requested backups under this managed instance. */
    managedInstance(value: string): az_sql_midb_ltr_backup_list_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_midb_ltr_backup_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_midb_ltr_backup_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_midb_ltr_backup_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_midb_ltr_backup_restore_command_builder extends CommandBuilder {
    constructor(commandPath: string, backupId: string, destDatabase: string, destMi: string, destResourceGroup: string) {
        super(commandPath);
        this.backupId(backupId)
        this.destDatabase(destDatabase)
        this.destMi(destMi)
        this.destResourceGroup(destResourceGroup)
    }

    /** The resource id of the long term retention backup to be restored. Use 'az sql midb ltr-backup show' or 'az sql midb ltr-backup list' for backup id. */
    backupId(value: string): az_sql_midb_ltr_backup_restore_command_builder {
        this.setFlag("--backup-id", value);
        return this;
    }

    /** Name of the managed database that will be created as the restore destination. */
    destDatabase(value: string): az_sql_midb_ltr_backup_restore_command_builder {
        this.setFlag("--dest-database", value);
        return this;
    }

    /** Name of the managed instance to restore managed database to. */
    destMi(value: string): az_sql_midb_ltr_backup_restore_command_builder {
        this.setFlag("--dest-mi", value);
        return this;
    }

    /** Name of the resource group of the managed instance to restore managed database to. */
    destResourceGroup(value: string): az_sql_midb_ltr_backup_restore_command_builder {
        this.setFlag("--dest-resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_midb_ltr_backup_restore_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_midb_ltr_backup_restore_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_midb_ltr_backup_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The resource id of the backups. Use 'az sql midb ltr-backup show' or 'az sql midb ltr-backup list' for backup id. If provided, other arguments are not required. */
    backupId(value: string): az_sql_midb_ltr_backup_show_command_builder {
        this.setFlag("--backup-id", value);
        return this;
    }

    /** The name of the Azure SQL Managed Database. */
    database(value: string): az_sql_midb_ltr_backup_show_command_builder {
        this.setFlag("--database", value);
        return this;
    }

    /** The location of the desired backup(s). */
    location(value: string): az_sql_midb_ltr_backup_show_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name of the Azure SQL managed instance. */
    managedInstance(value: string): az_sql_midb_ltr_backup_show_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** The name of the LTR backup. Use 'az sql midb ltr-backup show' or 'az sql midb ltr-backup list' for backup name. */
    name(value: string): az_sql_midb_ltr_backup_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_midb_ltr_backup_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_midb_ltr_backup_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_midb_ltr_backup_wait_command_builder extends CommandBuilder {
    constructor(commandPath: string, database: string, managedInstance: string, resourceGroup: string) {
        super(commandPath);
        this.database(database)
        this.managedInstance(managedInstance)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Azure SQL Managed Database. */
    database(value: string): az_sql_midb_ltr_backup_wait_command_builder {
        this.setFlag("--database", value);
        return this;
    }

    /** Name of the Azure SQL managed instance. */
    managedInstance(value: string): az_sql_midb_ltr_backup_wait_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_midb_ltr_backup_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_sql_midb_ltr_backup_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_sql_midb_ltr_backup_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_sql_midb_ltr_backup_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_sql_midb_ltr_backup_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_sql_midb_ltr_backup_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_midb_ltr_backup_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_sql_midb_ltr_backup_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_sql_midb_ltr_backup_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
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
class az_sql_midb_ltr_policy_set_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_midb_ltr_policy_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL managed instance. */
    managedInstance(value: string): az_sql_midb_ltr_policy_set_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** Retention for the monthly backup. If just a number is passed instead of an ISO 8601 string, days will be assumed as the units.There is a minimum of 7 days and a maximum of 10 years. */
    monthlyRetention(value: string): az_sql_midb_ltr_policy_set_command_builder {
        this.setFlag("--monthly-retention", value);
        return this;
    }

    /** The name of the Azure SQL Managed Database. */
    name(value: string): az_sql_midb_ltr_policy_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_midb_ltr_policy_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_midb_ltr_policy_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The Week of Year, 1 to 52, in which to take the yearly LTR backup. */
    weekOfYear(value: string): az_sql_midb_ltr_policy_set_command_builder {
        this.setFlag("--week-of-year", value);
        return this;
    }

    /** Retention for the weekly backup. If just a number is passed instead of an ISO 8601 string, days will be assumed as the units.There is a minimum of 7 days and a maximum of 10 years. */
    weeklyRetention(value: string): az_sql_midb_ltr_policy_set_command_builder {
        this.setFlag("--weekly-retention", value);
        return this;
    }

    /** Retention for the yearly backup. If just a number is passed instead of an ISO 8601 string, days will be assumed as the units.There is a minimum of 7 days and a maximum of 10 years. */
    yearlyRetention(value: string): az_sql_midb_ltr_policy_set_command_builder {
        this.setFlag("--yearly-retention", value);
        return this;
    }
}

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
class az_sql_midb_ltr_policy_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_midb_ltr_policy_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL managed instance. */
    managedInstance(value: string): az_sql_midb_ltr_policy_show_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** The name of the Azure SQL Managed Database. */
    name(value: string): az_sql_midb_ltr_policy_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_midb_ltr_policy_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_midb_ltr_policy_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_midb_ltr_policy_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_midb_short_term_retention_policy_set_command_builder extends CommandBuilder {
    constructor(commandPath: string, retentionDays: string) {
        super(commandPath);
        this.retentionDays(retentionDays)
    }

    /** New backup short term retention policy in days.Valid policy for live database is 7-35 days, valid policy for dropped databases is 0-35 days. */
    retentionDays(value: string): az_sql_midb_short_term_retention_policy_set_command_builder {
        this.setFlag("--retention-days", value);
        return this;
    }

    /** If specified, updates retention days for a deleted database, instead of an existing database.Must match the deleted time of a deleted database on the source Managed Instance. */
    deletedTime(value: string): az_sql_midb_short_term_retention_policy_set_command_builder {
        this.setFlag("--deleted-time", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_midb_short_term_retention_policy_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL managed instance. */
    managedInstance(value: string): az_sql_midb_short_term_retention_policy_set_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** The name of the Azure SQL Managed Database. */
    name(value: string): az_sql_midb_short_term_retention_policy_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_midb_short_term_retention_policy_set_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_midb_short_term_retention_policy_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_midb_short_term_retention_policy_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_midb_short_term_retention_policy_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** If specified, shows retention days for a deleted database, instead of an existing database.Must match the deleted time of a deleted database on the source Managed Instance. */
    deletedTime(value: string): az_sql_midb_short_term_retention_policy_show_command_builder {
        this.setFlag("--deleted-time", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_midb_short_term_retention_policy_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL managed instance. */
    managedInstance(value: string): az_sql_midb_short_term_retention_policy_show_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** The name of the Azure SQL Managed Database. */
    name(value: string): az_sql_midb_short_term_retention_policy_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_midb_short_term_retention_policy_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_midb_short_term_retention_policy_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_midb_short_term_retention_policy_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_midb_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, managedInstance: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.managedInstance(managedInstance)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the Azure SQL managed instance. */
    managedInstance(value: string): az_sql_midb_create_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** The name of the Azure SQL Managed Database. */
    name(value: string): az_sql_midb_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_midb_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The collation of the Azure SQL Managed Database collation to use, e.g.: SQL_Latin1_General_CP1_CI_AS or Latin1_General_100_CS_AS_SC. */
    collation(value: string): az_sql_midb_create_command_builder {
        this.setFlag("--collation", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_midb_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_midb_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_midb_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_midb_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL managed instance. */
    managedInstance(value: string): az_sql_midb_delete_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** The name of the Azure SQL Managed Database. */
    name(value: string): az_sql_midb_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_midb_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_midb_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_midb_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_sql_midb_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_sql_midb_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_midb_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL managed instance. */
    managedInstance(value: string): az_sql_midb_list_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_midb_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_midb_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_midb_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_midb_list_deleted_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_midb_list_deleted_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL managed instance. */
    managedInstance(value: string): az_sql_midb_list_deleted_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_midb_list_deleted_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_midb_list_deleted_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_midb_restore_command_builder extends CommandBuilder {
    constructor(commandPath: string, destName: string, time: string) {
        super(commandPath);
        this.destName(destName)
        this.time(time)
    }

    /** Name of the managed database that will be created as the restore destination. */
    destName(value: string): az_sql_midb_restore_command_builder {
        this.setFlag("--dest-name", value);
        return this;
    }

    /** The point in time of the source database that will be restored to create the new database. Must be greater than or equal to the source database's earliestRestoreDate value. Time should be in following format: "YYYY-MM-DDTHH:MM:SS". */
    time(value: string): az_sql_midb_restore_command_builder {
        this.setFlag("--time", value);
        return this;
    }

    /** If specified, restore from a deleted database instead of from an existing database. Must match the deleted time of a deleted database on the source Managed Instance. */
    deletedTime(value: string): az_sql_midb_restore_command_builder {
        this.setFlag("--deleted-time", value);
        return this;
    }

    /** Name of the managed instance to restore managed database to. This can be same managed instance, or another managed instance on same subscription. When not specified it defaults to source managed instance. */
    destMi(value: string): az_sql_midb_restore_command_builder {
        this.setFlag("--dest-mi", value);
        return this;
    }

    /** Name of the resource group of the managed instance to restore managed database to. When not specified it defaults to source resource group. */
    destResourceGroup(value: string): az_sql_midb_restore_command_builder {
        this.setFlag("--dest-resource-group", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_midb_restore_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL managed instance. */
    managedInstance(value: string): az_sql_midb_restore_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** The name of the Azure SQL Managed Database. */
    name(value: string): az_sql_midb_restore_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_midb_restore_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_midb_restore_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_midb_restore_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_midb_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_midb_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL managed instance. */
    managedInstance(value: string): az_sql_midb_show_command_builder {
        this.setFlag("--managed-instance", value);
        return this;
    }

    /** The name of the Azure SQL Managed Database. */
    name(value: string): az_sql_midb_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_midb_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_midb_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_midb_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_server_ad_admin_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, displayName: string, objectId: string, resourceGroup: string, serverName: string) {
        super(commandPath);
        this.displayName(displayName)
        this.objectId(objectId)
        this.resourceGroup(resourceGroup)
        this.serverName(serverName)
    }

    /** Display name of the Azure AD administrator user or group. */
    displayName(value: string): az_sql_server_ad_admin_create_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** The unique ID of the Azure AD administrator. */
    objectId(value: string): az_sql_server_ad_admin_create_command_builder {
        this.setFlag("--object-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_ad_admin_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    serverName(value: string): az_sql_server_ad_admin_create_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_ad_admin_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_ad_admin_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_ad_admin_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_ad_admin_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    serverName(value: string): az_sql_server_ad_admin_delete_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_ad_admin_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_ad_admin_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_ad_admin_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_server_ad_admin_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_ad_admin_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    serverName(value: string): az_sql_server_ad_admin_list_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_ad_admin_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_ad_admin_update_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_sql_server_ad_admin_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** Display name of the Azure AD administrator user or group. */
    displayName(value: string): az_sql_server_ad_admin_update_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_sql_server_ad_admin_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_ad_admin_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The unique ID of the Azure AD administrator. */
    objectId(value: string): az_sql_server_ad_admin_update_command_builder {
        this.setFlag("--object-id", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_sql_server_ad_admin_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_ad_admin_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    serverName(value: string): az_sql_server_ad_admin_update_command_builder {
        this.setFlag("--server-name", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_sql_server_ad_admin_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_ad_admin_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_server_audit_policy_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_audit_policy_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    name(value: string): az_sql_server_audit_policy_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_server_audit_policy_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_audit_policy_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_audit_policy_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_audit_policy_update_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** List of actions and action groups to audit. */
    actions(value: string): az_sql_server_audit_policy_update_command_builder {
        this.setFlag("--actions", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_sql_server_audit_policy_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_sql_server_audit_policy_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_audit_policy_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    name(value: string): az_sql_server_audit_policy_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_sql_server_audit_policy_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_audit_policy_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The number of days to retain audit logs. */
    retentionDays(value: string): az_sql_server_audit_policy_update_command_builder {
        this.setFlag("--retention-days", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_sql_server_audit_policy_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Auditing policy state. */
    state(value: 'Disabled' | 'Enabled'): az_sql_server_audit_policy_update_command_builder {
        this.setFlag("--state", value);
        return this;
    }

    /** Name of the storage account. */
    storageAccount(value: string): az_sql_server_audit_policy_update_command_builder {
        this.setFlag("--storage-account", value);
        return this;
    }

    /** The storage account endpoint. */
    storageEndpoint(value: string): az_sql_server_audit_policy_update_command_builder {
        this.setFlag("--storage-endpoint", value);
        return this;
    }

    /** Access key for the storage account. */
    storageKey(value: string): az_sql_server_audit_policy_update_command_builder {
        this.setFlag("--storage-key", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_audit_policy_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_server_conn_policy_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_conn_policy_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_server_conn_policy_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_conn_policy_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_server_conn_policy_show_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_conn_policy_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_conn_policy_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, connectionType: 'Default' | 'Proxy' | 'Redirect') {
        super(commandPath);
        this.connectionType(connectionType)
    }

    /** The server connection type. */
    connectionType(value: 'Default' | 'Proxy' | 'Redirect'): az_sql_server_conn_policy_update_command_builder {
        this.setFlag("--connection-type", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_sql_server_conn_policy_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_sql_server_conn_policy_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_conn_policy_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_sql_server_conn_policy_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_conn_policy_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_server_conn_policy_update_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_sql_server_conn_policy_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_conn_policy_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_server_dns_alias_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string, server: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.server(server)
    }

    /** Name of the DNS alias. */
    name(value: string): az_sql_server_dns_alias_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_dns_alias_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_server_dns_alias_create_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_dns_alias_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_dns_alias_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandPath);
        this.name(name)
    }

    /** Name of the DNS alias. */
    name(value: string): az_sql_server_dns_alias_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_dns_alias_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_dns_alias_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_server_dns_alias_delete_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_dns_alias_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_dns_alias_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_dns_alias_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_server_dns_alias_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_dns_alias_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_server_dns_alias_list_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_dns_alias_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_dns_alias_set_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, originalServer: string) {
        super(commandPath);
        this.name(name)
        this.originalServer(originalServer)
    }

    /** Name of the DNS alias. */
    name(value: string): az_sql_server_dns_alias_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The name of the server to which alias is currently pointing. */
    originalServer(value: string): az_sql_server_dns_alias_set_command_builder {
        this.setFlag("--original-server", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_dns_alias_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the original resource group. */
    originalResourceGroup(value: string): az_sql_server_dns_alias_set_command_builder {
        this.setFlag("--original-resource-group", value);
        return this;
    }

    /** ID of the original subscription. */
    originalSubscriptionId(value: string): az_sql_server_dns_alias_set_command_builder {
        this.setFlag("--original-subscription-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_dns_alias_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_server_dns_alias_set_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_dns_alias_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_dns_alias_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandPath);
        this.name(name)
    }

    /** Name of the DNS alias. */
    name(value: string): az_sql_server_dns_alias_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_dns_alias_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_server_dns_alias_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_dns_alias_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_server_dns_alias_show_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_dns_alias_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_server_firewall_rule_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, endIpAddress: string, name: string, resourceGroup: string, server: string, startIpAddress: string) {
        super(commandPath);
        this.endIpAddress(endIpAddress)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.server(server)
        this.startIpAddress(startIpAddress)
    }

    /** The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    endIpAddress(value: string): az_sql_server_firewall_rule_create_command_builder {
        this.setFlag("--end-ip-address", value);
        return this;
    }

    /** The name of the firewall rule. */
    name(value: string): az_sql_server_firewall_rule_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_firewall_rule_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_server_firewall_rule_create_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    startIpAddress(value: string): az_sql_server_firewall_rule_create_command_builder {
        this.setFlag("--start-ip-address", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_firewall_rule_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_firewall_rule_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_firewall_rule_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the firewall rule. */
    name(value: string): az_sql_server_firewall_rule_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_firewall_rule_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_server_firewall_rule_delete_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_firewall_rule_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_firewall_rule_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_firewall_rule_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_server_firewall_rule_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_firewall_rule_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_server_firewall_rule_list_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_firewall_rule_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_firewall_rule_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_firewall_rule_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the firewall rule. */
    name(value: string): az_sql_server_firewall_rule_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_server_firewall_rule_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_firewall_rule_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_server_firewall_rule_show_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_firewall_rule_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_firewall_rule_update_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    endIpAddress(value: string): az_sql_server_firewall_rule_update_command_builder {
        this.setFlag("--end-ip-address", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_firewall_rule_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the firewall rule. */
    name(value: string): az_sql_server_firewall_rule_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_firewall_rule_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_server_firewall_rule_update_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    startIpAddress(value: string): az_sql_server_firewall_rule_update_command_builder {
        this.setFlag("--start-ip-address", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_firewall_rule_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_server_key_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, kid: string, resourceGroup: string, server: string) {
        super(commandPath);
        this.kid(kid)
        this.resourceGroup(resourceGroup)
        this.server(server)
    }

    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    kid(value: string): az_sql_server_key_create_command_builder {
        this.setFlag("--kid", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_key_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_server_key_create_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_key_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_key_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, kid: string) {
        super(commandPath);
        this.kid(kid)
    }

    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    kid(value: string): az_sql_server_key_delete_command_builder {
        this.setFlag("--kid", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_key_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_key_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_server_key_delete_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_key_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_key_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_key_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_server_key_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_key_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_server_key_list_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_key_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_key_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, kid: string) {
        super(commandPath);
        this.kid(kid)
    }

    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    kid(value: string): az_sql_server_key_show_command_builder {
        this.setFlag("--kid", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_key_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_server_key_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_key_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_server_key_show_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_key_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_server_tde_key_set_command_builder extends CommandBuilder {
    constructor(commandPath: string, serverKeyType: 'AzureKeyVault' | 'ServiceManaged') {
        super(commandPath);
        this.serverKeyType(serverKeyType)
    }

    /** The type of the server key. */
    serverKeyType(value: 'AzureKeyVault' | 'ServiceManaged'): az_sql_server_tde_key_set_command_builder {
        this.setFlag("--server-key-type", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_tde_key_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The Azure Key Vault key identifier of the server key. An example key identifier is "<a href="https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901">https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901</a>". */
    kid(value: string): az_sql_server_tde_key_set_command_builder {
        this.setFlag("--kid", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_tde_key_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_server_tde_key_set_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_tde_key_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_tde_key_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_tde_key_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_server_tde_key_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_tde_key_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_server_tde_key_show_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_tde_key_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_server_vnet_rule_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string, server: string, subnet: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.server(server)
        this.subnet(subnet)
    }

    /** The name of the virtual network rule. */
    name(value: string): az_sql_server_vnet_rule_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_vnet_rule_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_server_vnet_rule_create_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of the subnet that allows access to an Azure Sql Server. If subnet name is provided, --vnet-name must be provided. */
    subnet(value: string): az_sql_server_vnet_rule_create_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Create firewall rule before the virtual network has vnet service endpoint enabled. */
    ignoreMissingEndpoint(value: boolean): az_sql_server_vnet_rule_create_command_builder {
        this.setFlag("--ignore-missing-endpoint", value.toString());
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_vnet_rule_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The virtual network name. */
    vnetName(value: string): az_sql_server_vnet_rule_create_command_builder {
        this.setFlag("--vnet-name", value);
        return this;
    }
}

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
class az_sql_server_vnet_rule_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandPath);
        this.name(name)
    }

    /** The name of the virtual network rule. */
    name(value: string): az_sql_server_vnet_rule_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_vnet_rule_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_vnet_rule_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_server_vnet_rule_delete_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_vnet_rule_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_vnet_rule_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_vnet_rule_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_server_vnet_rule_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_vnet_rule_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_server_vnet_rule_list_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_vnet_rule_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_vnet_rule_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandPath);
        this.name(name)
    }

    /** The name of the virtual network rule. */
    name(value: string): az_sql_server_vnet_rule_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_vnet_rule_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_server_vnet_rule_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_vnet_rule_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_server_vnet_rule_show_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_vnet_rule_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_vnet_rule_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, subnet: string) {
        super(commandPath);
        this.name(name)
        this.subnet(subnet)
    }

    /** The name of the virtual network rule. */
    name(value: string): az_sql_server_vnet_rule_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of the subnet that allows access to an Azure Sql Server. If subnet name is provided, --vnet-name must be provided. */
    subnet(value: string): az_sql_server_vnet_rule_update_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_sql_server_vnet_rule_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_sql_server_vnet_rule_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_vnet_rule_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Create firewall rule before the virtual network has vnet service endpoint enabled. */
    ignoreMissingEndpoint(value: boolean): az_sql_server_vnet_rule_update_command_builder {
        this.setFlag("--ignore-missing-endpoint", value.toString());
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_sql_server_vnet_rule_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_vnet_rule_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    server(value: string): az_sql_server_vnet_rule_update_command_builder {
        this.setFlag("--server", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_sql_server_vnet_rule_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_vnet_rule_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_server_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, adminPassword: string, adminUser: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.adminPassword(adminPassword)
        this.adminUser(adminUser)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The administrator login password (required for server creation). */
    adminPassword(value: string): az_sql_server_create_command_builder {
        this.setFlag("--admin-password", value);
        return this;
    }

    /** Administrator username for the server. Once created it cannot be changed. */
    adminUser(value: string): az_sql_server_create_command_builder {
        this.setFlag("--admin-user", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    name(value: string): az_sql_server_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Generate and assign an Azure Active Directory Identity for this serverfor use with key management services like Azure KeyVault. */
    assignIdentity(value: string): az_sql_server_create_command_builder {
        this.setFlag("--assign-identity", value);
        return this;
    }

    /** Set whether public network access to server is allowed or not. When false,only connections made through Private Links can reach this server. */
    enablePublicNetwork(value: boolean): az_sql_server_create_command_builder {
        this.setFlag("--enable-public-network", value.toString());
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_sql_server_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The minimal TLS version enforced by the sql server for inbound connections. */
    minimalTlsVersion(value: '1.0' | '1.1' | '1.2'): az_sql_server_create_command_builder {
        this.setFlag("--minimal-tls-version", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_server_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    name(value: string): az_sql_server_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_sql_server_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_sql_server_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_server_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_list_usages_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_list_usages_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    name(value: string): az_sql_server_list_usages_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_list_usages_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_list_usages_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    name(value: string): az_sql_server_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_server_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_update_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_sql_server_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The administrator login password. */
    adminPassword(value: string): az_sql_server_update_command_builder {
        this.setFlag("--admin-password", value);
        return this;
    }

    /** Generate and assign an Azure Active Directory Identity for this serverfor use with key management services like Azure KeyVault. */
    assignIdentity(value: string): az_sql_server_update_command_builder {
        this.setFlag("--assign_identity", value);
        return this;
    }

    /** Set whether public network access to server is allowed or not. When false,only connections made through Private Links can reach this server. */
    enablePublicNetwork(value: boolean): az_sql_server_update_command_builder {
        this.setFlag("--enable-public-network", value.toString());
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_sql_server_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The minimal TLS version enforced by the sql server for inbound connections. */
    minimalTlsVersion(value: '1.0' | '1.1' | '1.2'): az_sql_server_update_command_builder {
        this.setFlag("--minimal-tls-version", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    name(value: string): az_sql_server_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_server_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_sql_server_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_sql_server_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_server_wait_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_sql_server_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_sql_server_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_sql_server_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_sql_server_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_server_wait_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_sql_server_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name of the Azure SQL server. You can configure the default using `az configure --defaults sql-server=<name>`. */
    name(value: string): az_sql_server_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_server_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_server_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_sql_server_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_sql_server_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
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
class az_sql_virtual_cluster_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_virtual_cluster_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The virtual cluster name. */
    name(value: string): az_sql_virtual_cluster_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sql_virtual_cluster_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_virtual_cluster_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_virtual_cluster_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_virtual_cluster_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_virtual_cluster_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_virtual_cluster_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_virtual_cluster_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_virtual_cluster_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_virtual_cluster_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The virtual cluster name. */
    name(value: string): az_sql_virtual_cluster_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_virtual_cluster_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_virtual_cluster_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_virtual_cluster_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_vm_group_ag_listener_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, agName: string, groupName: string, ipAddress: string, loadBalancer: string, name: string, probePort: string, resourceGroup: string, sqlvms: string, subnet: string) {
        super(commandPath);
        this.agName(agName)
        this.groupName(groupName)
        this.ipAddress(ipAddress)
        this.loadBalancer(loadBalancer)
        this.name(name)
        this.probePort(probePort)
        this.resourceGroup(resourceGroup)
        this.sqlvms(sqlvms)
        this.subnet(subnet)
    }

    /** Name of the availability group. Please refer to <a href="https://docs.microsoft.com/sql/database-engine/availability-groups/windows/use-the-availability-group-wizard-sql-server-management-studio?view=sql-server-2017">https://docs.microsoft.com/sql/database-engine/availability-groups/windows/use-the-availability-group-wizard-sql-server-management-studio?view=sql-server-2017</a> to create and availability group. */
    agName(value: string): az_sql_vm_group_ag_listener_create_command_builder {
        this.setFlag("--ag-name", value);
        return this;
    }

    /** Name of the SQL virtual machine group. */
    groupName(value: string): az_sql_vm_group_ag_listener_create_command_builder {
        this.setFlag("--group-name", value);
        return this;
    }

    /** Private IP address bound to the availability group listener. */
    ipAddress(value: string): az_sql_vm_group_ag_listener_create_command_builder {
        this.setFlag("--ip-address", value);
        return this;
    }

    /** Name or resource ID of the load balancer. */
    loadBalancer(value: string): az_sql_vm_group_ag_listener_create_command_builder {
        this.setFlag("--load-balancer", value);
        return this;
    }

    /** Name of the availability group listener. */
    name(value: string): az_sql_vm_group_ag_listener_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Probe port. */
    probePort(value: string): az_sql_vm_group_ag_listener_create_command_builder {
        this.setFlag("--probe-port", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_vm_group_ag_listener_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Space-separated list of SQL virtual machine instance name or resource IDs that are enrolled into the availability group. */
    sqlvms(value: string): az_sql_vm_group_ag_listener_create_command_builder {
        this.setFlag("--sqlvms", value);
        return this;
    }

    /** The name or resource id of the subnet to include in the private IP. */
    subnet(value: string): az_sql_vm_group_ag_listener_create_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Listener port. */
    port(value: string): az_sql_vm_group_ag_listener_create_command_builder {
        this.setFlag("--port", value);
        return this;
    }

    /** Name or resource ID of the public IP. */
    publicIp(value: string): az_sql_vm_group_ag_listener_create_command_builder {
        this.setFlag("--public-ip", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_vm_group_ag_listener_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the virtual network. Provide only if name of the subnet has been provided. */
    vnetName(value: string): az_sql_vm_group_ag_listener_create_command_builder {
        this.setFlag("--vnet-name", value);
        return this;
    }
}

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
class az_sql_vm_group_ag_listener_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, groupName: string) {
        super(commandPath);
        this.groupName(groupName)
    }

    /** Name of the SQL virtual machine group. */
    groupName(value: string): az_sql_vm_group_ag_listener_delete_command_builder {
        this.setFlag("--group-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_vm_group_ag_listener_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the availability group listener. */
    name(value: string): az_sql_vm_group_ag_listener_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_vm_group_ag_listener_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_vm_group_ag_listener_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_sql_vm_group_ag_listener_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_sql_vm_group_ag_listener_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, groupName: string, resourceGroup: string) {
        super(commandPath);
        this.groupName(groupName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the SQL virtual machine group. */
    groupName(value: string): az_sql_vm_group_ag_listener_list_command_builder {
        this.setFlag("--group-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_vm_group_ag_listener_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_vm_group_ag_listener_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_vm_group_ag_listener_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_vm_group_ag_listener_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, groupName: string) {
        super(commandPath);
        this.groupName(groupName)
    }

    /** Name of the SQL virtual machine group. */
    groupName(value: string): az_sql_vm_group_ag_listener_show_command_builder {
        this.setFlag("--group-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_vm_group_ag_listener_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the availability group listener. */
    name(value: string): az_sql_vm_group_ag_listener_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_vm_group_ag_listener_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_vm_group_ag_listener_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_vm_group_ag_listener_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_vm_group_ag_listener_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, groupName: string) {
        super(commandPath);
        this.groupName(groupName)
    }

    /** Name of the SQL virtual machine group. */
    groupName(value: string): az_sql_vm_group_ag_listener_update_command_builder {
        this.setFlag("--group-name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_sql_vm_group_ag_listener_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_sql_vm_group_ag_listener_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_vm_group_ag_listener_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the availability group listener. */
    name(value: string): az_sql_vm_group_ag_listener_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_sql_vm_group_ag_listener_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_vm_group_ag_listener_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_sql_vm_group_ag_listener_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Space-separated list of SQL virtual machine instance name or resource IDs that are enrolled into the availability group. */
    sqlvms(value: string): az_sql_vm_group_ag_listener_update_command_builder {
        this.setFlag("--sqlvms", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_vm_group_ag_listener_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sql_vm_group_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, domainFqdn: string, imageOffer: string, imageSku: 'Developer' | 'Enterprise', name: string, operatorAcc: string, resourceGroup: string, serviceAcc: string, storageAccount: string) {
        super(commandPath);
        this.domainFqdn(domainFqdn)
        this.imageOffer(imageOffer)
        this.imageSku(imageSku)
        this.name(name)
        this.operatorAcc(operatorAcc)
        this.resourceGroup(resourceGroup)
        this.serviceAcc(serviceAcc)
        this.storageAccount(storageAccount)
    }

    /** Fully qualified name of the domain. */
    domainFqdn(value: string): az_sql_vm_group_create_command_builder {
        this.setFlag("--domain-fqdn", value);
        return this;
    }

    /** SQL image offer. Examples may include SQL2016-WS2016, SQL2017-WS2016. */
    imageOffer(value: string): az_sql_vm_group_create_command_builder {
        this.setFlag("--image-offer", value);
        return this;
    }

    /** SQL image sku. */
    imageSku(value: 'Developer' | 'Enterprise'): az_sql_vm_group_create_command_builder {
        this.setFlag("--image-sku", value);
        return this;
    }

    /** Name of the SQL virtual machine group. */
    name(value: string): az_sql_vm_group_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Account name used for operating cluster i.e. will be part of administrators group on all the participating virtual machines in the cluster. */
    operatorAcc(value: string): az_sql_vm_group_create_command_builder {
        this.setFlag("--operator-acc", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_vm_group_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Account name under which SQL service will run on all participating SQL virtual machines in the cluster. */
    serviceAcc(value: string): az_sql_vm_group_create_command_builder {
        this.setFlag("--service-acc", value);
        return this;
    }

    /** Storage account url of the witness storage account. */
    storageAccount(value: string): az_sql_vm_group_create_command_builder {
        this.setFlag("--storage-account", value);
        return this;
    }

    /** Account name used for creating cluster (at minimum needs permissions to 'Create Computer Objects' in domain). */
    bootstrapAcc(value: string): az_sql_vm_group_create_command_builder {
        this.setFlag("--bootstrap-acc", value);
        return this;
    }

    /** Optional path for fileshare witness. */
    fswPath(value: string): az_sql_vm_group_create_command_builder {
        this.setFlag("--fsw-path", value);
        return this;
    }

    /** Location. If not provided, group will be created in the same reosurce group location.You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_sql_vm_group_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Organizational Unit path in which the nodes and cluster will be present. Example: OU=WSCluster,DC=testdomain,DC=com. */
    ouPath(value: string): az_sql_vm_group_create_command_builder {
        this.setFlag("--ou-path", value);
        return this;
    }

    /** Primary key of the witness storage account. */
    saKey(value: string): az_sql_vm_group_create_command_builder {
        this.setFlag("--sa-key", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_vm_group_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_sql_vm_group_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

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
class az_sql_vm_group_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_vm_group_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the SQL virtual machine group. */
    name(value: string): az_sql_vm_group_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_vm_group_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_vm_group_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_sql_vm_group_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_sql_vm_group_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_vm_group_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_vm_group_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_vm_group_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_vm_group_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_vm_group_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the SQL virtual machine group. */
    name(value: string): az_sql_vm_group_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_vm_group_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_vm_group_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_vm_group_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_vm_group_update_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_sql_vm_group_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** Account name used for creating cluster (at minimum needs permissions to 'Create Computer Objects' in domain). */
    bootstrapAcc(value: string): az_sql_vm_group_update_command_builder {
        this.setFlag("--bootstrap-acc", value);
        return this;
    }

    /** Fully qualified name of the domain. */
    domainFqdn(value: string): az_sql_vm_group_update_command_builder {
        this.setFlag("--domain-fqdn", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_sql_vm_group_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Optional path for fileshare witness. */
    fswPath(value: string): az_sql_vm_group_update_command_builder {
        this.setFlag("--fsw-path", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_vm_group_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the SQL virtual machine group. */
    name(value: string): az_sql_vm_group_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Account name used for operating cluster i.e. will be part of administrators group on all the participating virtual machines in the cluster. */
    operatorAcc(value: string): az_sql_vm_group_update_command_builder {
        this.setFlag("--operator-acc", value);
        return this;
    }

    /** Organizational Unit path in which the nodes and cluster will be present. Example: OU=WSCluster,DC=testdomain,DC=com. */
    ouPath(value: string): az_sql_vm_group_update_command_builder {
        this.setFlag("--ou-path", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_sql_vm_group_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_vm_group_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Primary key of the witness storage account. */
    saKey(value: string): az_sql_vm_group_update_command_builder {
        this.setFlag("--sa-key", value);
        return this;
    }

    /** Account name under which SQL service will run on all participating SQL virtual machines in the cluster. */
    serviceAcc(value: string): az_sql_vm_group_update_command_builder {
        this.setFlag("--service-acc", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_sql_vm_group_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Storage account url of the witness storage account. */
    storageAccount(value: string): az_sql_vm_group_update_command_builder {
        this.setFlag("--storage-account", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_vm_group_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_sql_vm_group_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
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
class az_sql_vm_add_to_group_command_builder extends CommandBuilder {
    constructor(commandPath: string, sqlvmGroup: string) {
        super(commandPath);
        this.sqlvmGroup(sqlvmGroup)
    }

    /** Name or resource ID of the SQL virtual machine group. If only name provided, SQL virtual machine group should be in the same resource group of the SQL virtual machine. */
    sqlvmGroup(value: string): az_sql_vm_add_to_group_command_builder {
        this.setFlag("--sqlvm-group", value);
        return this;
    }

    /** Password for the cluster bootstrap account if provided in the SQL virtual machine group. */
    bootstrapAccPwd(value: string): az_sql_vm_add_to_group_command_builder {
        this.setFlag("--bootstrap-acc-pwd", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_vm_add_to_group_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the SQL virtual machine. */
    name(value: string): az_sql_vm_add_to_group_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Password for the cluster operator account provided in the SQL virtual machine group. */
    operatorAccPwd(value: string): az_sql_vm_add_to_group_command_builder {
        this.setFlag("--operator-acc-pwd", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_vm_add_to_group_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Password for the SQL service account provided in the SQL virtual machine group. */
    serviceAccPwd(value: string): az_sql_vm_add_to_group_command_builder {
        this.setFlag("--service-acc-pwd", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_vm_add_to_group_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_vm_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, licenseType: 'AHUB' | 'DR' | 'PAYG', name: string, resourceGroup: string) {
        super(commandPath);
        this.licenseType(licenseType)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** SQL Server license type. */
    licenseType(value: 'AHUB' | 'DR' | 'PAYG'): az_sql_vm_create_command_builder {
        this.setFlag("--license-type", value);
        return this;
    }

    /** Name of the SQL virtual machine. The name of the new SQL virtual machine must be equal to the underlying virtual machine created from SQL marketplace image. */
    name(value: string): az_sql_vm_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_vm_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Password for encryption on backup. */
    backupPwd(value: string): az_sql_vm_create_command_builder {
        this.setFlag("--backup-pwd", value);
        return this;
    }

    /** Backup schedule type. */
    backupScheduleType(value: 'Automated' | 'Manual'): az_sql_vm_create_command_builder {
        this.setFlag("--backup-schedule-type", value);
        return this;
    }

    /** Include system databases on backup. */
    backupSystemDbs(value: boolean): az_sql_vm_create_command_builder {
        this.setFlag("--backup-system-dbs", value.toString());
        return this;
    }

    /** SQL Server connectivity option. */
    connectivityType(value: 'LOCAL' | 'PRIVATE' | 'PUBLIC'): az_sql_vm_create_command_builder {
        this.setFlag("--connectivity-type", value);
        return this;
    }

    /** Credential name. */
    credentialName(value: string): az_sql_vm_create_command_builder {
        this.setFlag("--credential-name", value);
        return this;
    }

    /** Day of week to apply the patch on. */
    dayOfWeek(value: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'): az_sql_vm_create_command_builder {
        this.setFlag("--day-of-week", value);
        return this;
    }

    /** Enable or disable autobackup on SQL virtual machine. If any backup settings provided, parameter automatically sets to true. */
    enableAutoBackup(value: boolean): az_sql_vm_create_command_builder {
        this.setFlag("--enable-auto-backup", value.toString());
        return this;
    }

    /** Enable or disable autopatching on SQL virtual machine. If any autopatching settings provided, parameter automatically sets to true. */
    enableAutoPatching(value: boolean): az_sql_vm_create_command_builder {
        this.setFlag("--enable-auto-patching", value.toString());
        return this;
    }

    /** Enable encryption for backup on SQL virtual machine. */
    enableEncryption(value: boolean): az_sql_vm_create_command_builder {
        this.setFlag("--enable-encryption", value.toString());
        return this;
    }

    /** Enable or disable key vault credential setting. If any key vault settings provided, parameter automatically sets to true. */
    enableKeyVaultCredential(value: boolean): az_sql_vm_create_command_builder {
        this.setFlag("--enable-key-vault-credential", value.toString());
        return this;
    }

    /** Enable or disable R services (SQL 2016 onwards). */
    enableRServices(value: boolean): az_sql_vm_create_command_builder {
        this.setFlag("--enable-r-services", value.toString());
        return this;
    }

    /** Duration of the time window of a given day during which full backups can take place. 1-23 hours. */
    fullBackupDuration(value: string): az_sql_vm_create_command_builder {
        this.setFlag("--full-backup-duration", value);
        return this;
    }

    /** Frequency of full backups. In both cases, full backups begin during the next scheduled time window. */
    fullBackupFrequency(value: 'Daily' | 'Weekly'): az_sql_vm_create_command_builder {
        this.setFlag("--full-backup-frequency", value);
        return this;
    }

    /** Start time of a given day during which full backups can take place. 0-23 hours. */
    fullBackupStartHour(value: string): az_sql_vm_create_command_builder {
        this.setFlag("--full-backup-start-hour", value);
        return this;
    }

    /** SQL image offer. Examples include SQL2008R2-WS2008, SQL2008-WS2008. */
    imageOffer(value: string): az_sql_vm_create_command_builder {
        this.setFlag("--image-offer", value);
        return this;
    }

    /** SQL image sku. */
    imageSku(value: 'Developer' | 'Enterprise' | 'Express' | 'Standard' | 'Web'): az_sql_vm_create_command_builder {
        this.setFlag("--image-sku", value);
        return this;
    }

    /** Azure Key Vault url. */
    keyVault(value: string): az_sql_vm_create_command_builder {
        this.setFlag("--key-vault", value);
        return this;
    }

    /** Location. If not provided, virtual machine should be in the same region of resource group.You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_sql_vm_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Frequency of log backups. 5-60 minutes. */
    logBackupFrequency(value: string): az_sql_vm_create_command_builder {
        this.setFlag("--log-backup-frequency", value);
        return this;
    }

    /** Duration of patching. 30-180 minutes. */
    maintenanceWindowDuration(value: string): az_sql_vm_create_command_builder {
        this.setFlag("--maintenance-window-duration", value);
        return this;
    }

    /** Hour of the day when patching is initiated. Local VM time 0-23 hours. */
    maintenanceWindowStartHour(value: string): az_sql_vm_create_command_builder {
        this.setFlag("--maintenance-window-start-hour", value);
        return this;
    }

    /** SQL Server port. */
    port(value: string): az_sql_vm_create_command_builder {
        this.setFlag("--port", value);
        return this;
    }

    /** Retention period of backup. 1-30 days. */
    retentionPeriod(value: string): az_sql_vm_create_command_builder {
        this.setFlag("--retention-period", value);
        return this;
    }

    /** Storage account key where backup will be taken to. */
    saKey(value: string): az_sql_vm_create_command_builder {
        this.setFlag("--sa-key", value);
        return this;
    }

    /** Service principal name to access key vault. */
    spName(value: string): az_sql_vm_create_command_builder {
        this.setFlag("--sp-name", value);
        return this;
    }

    /** Service principal name secret to access key vault. */
    spSecret(value: string): az_sql_vm_create_command_builder {
        this.setFlag("--sp-secret", value);
        return this;
    }

    /** SQL Server sysadmin login password. */
    sqlAuthUpdatePwd(value: string): az_sql_vm_create_command_builder {
        this.setFlag("--sql-auth-update-pwd", value);
        return this;
    }

    /** SQL Server sysadmin login to create. */
    sqlAuthUpdateUsername(value: string): az_sql_vm_create_command_builder {
        this.setFlag("--sql-auth-update-username", value);
        return this;
    }

    /** SQL Server management type. If NoAgent selected, please provide --image-sku and --offer-type. */
    sqlMgmtType(value: 'Full' | 'LightWeight' | 'NoAgent'): az_sql_vm_create_command_builder {
        this.setFlag("--sql-mgmt-type", value);
        return this;
    }

    /** SQL Server workload type. */
    sqlWorkloadType(value: 'DW' | 'GENERAL' | 'OLTP'): az_sql_vm_create_command_builder {
        this.setFlag("--sql-workload-type", value);
        return this;
    }

    /** Storage account url where backup will be taken to. */
    storageAccount(value: string): az_sql_vm_create_command_builder {
        this.setFlag("--storage-account", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_vm_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_sql_vm_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

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
class az_sql_vm_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_vm_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the SQL virtual machine. */
    name(value: string): az_sql_vm_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_vm_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_vm_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_sql_vm_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_sql_vm_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_vm_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_vm_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_vm_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_vm_remove_from_group_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_vm_remove_from_group_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the SQL virtual machine. */
    name(value: string): az_sql_vm_remove_from_group_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_vm_remove_from_group_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_vm_remove_from_group_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_vm_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Get the SQLIaaSExtension configuration settings. */
    expand(value: string): az_sql_vm_show_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_vm_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the SQL virtual machine. */
    name(value: string): az_sql_vm_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sql_vm_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_vm_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_vm_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_vm_update_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_sql_vm_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** Password for encryption on backup. */
    backupPwd(value: string): az_sql_vm_update_command_builder {
        this.setFlag("--backup-pwd", value);
        return this;
    }

    /** Backup schedule type. */
    backupScheduleType(value: 'Automated' | 'Manual'): az_sql_vm_update_command_builder {
        this.setFlag("--backup-schedule-type", value);
        return this;
    }

    /** Include system databases on backup. */
    backupSystemDbs(value: boolean): az_sql_vm_update_command_builder {
        this.setFlag("--backup-system-dbs", value.toString());
        return this;
    }

    /** SQL Server connectivity option. */
    connectivityType(value: 'LOCAL' | 'PRIVATE' | 'PUBLIC'): az_sql_vm_update_command_builder {
        this.setFlag("--connectivity-type", value);
        return this;
    }

    /** Credential name. */
    credentialName(value: string): az_sql_vm_update_command_builder {
        this.setFlag("--credential-name", value);
        return this;
    }

    /** Day of week to apply the patch on. */
    dayOfWeek(value: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'): az_sql_vm_update_command_builder {
        this.setFlag("--day-of-week", value);
        return this;
    }

    /** Enable or disable autobackup on SQL virtual machine. If any backup settings provided, parameter automatically sets to true. */
    enableAutoBackup(value: boolean): az_sql_vm_update_command_builder {
        this.setFlag("--enable-auto-backup", value.toString());
        return this;
    }

    /** Enable or disable autopatching on SQL virtual machine. If any autopatching settings provided, parameter automatically sets to true. */
    enableAutoPatching(value: boolean): az_sql_vm_update_command_builder {
        this.setFlag("--enable-auto-patching", value.toString());
        return this;
    }

    /** Enable encryption for backup on SQL virtual machine. */
    enableEncryption(value: boolean): az_sql_vm_update_command_builder {
        this.setFlag("--enable-encryption", value.toString());
        return this;
    }

    /** Enable or disable key vault credential setting. If any key vault settings provided, parameter automatically sets to true. */
    enableKeyVaultCredential(value: boolean): az_sql_vm_update_command_builder {
        this.setFlag("--enable-key-vault-credential", value.toString());
        return this;
    }

    /** Enable or disable R services (SQL 2016 onwards). */
    enableRServices(value: boolean): az_sql_vm_update_command_builder {
        this.setFlag("--enable-r-services", value.toString());
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_sql_vm_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Duration of the time window of a given day during which full backups can take place. 1-23 hours. */
    fullBackupDuration(value: string): az_sql_vm_update_command_builder {
        this.setFlag("--full-backup-duration", value);
        return this;
    }

    /** Frequency of full backups. In both cases, full backups begin during the next scheduled time window. */
    fullBackupFrequency(value: 'Daily' | 'Weekly'): az_sql_vm_update_command_builder {
        this.setFlag("--full-backup-frequency", value);
        return this;
    }

    /** Start time of a given day during which full backups can take place. 0-23 hours. */
    fullBackupStartHour(value: string): az_sql_vm_update_command_builder {
        this.setFlag("--full-backup-start-hour", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sql_vm_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** SQL image sku. */
    imageSku(value: 'Developer' | 'Enterprise' | 'Express' | 'Standard' | 'Web'): az_sql_vm_update_command_builder {
        this.setFlag("--image-sku", value);
        return this;
    }

    /** Azure Key Vault url. */
    keyVault(value: string): az_sql_vm_update_command_builder {
        this.setFlag("--key-vault", value);
        return this;
    }

    /** SQL Server license type. */
    licenseType(value: 'AHUB' | 'DR' | 'PAYG'): az_sql_vm_update_command_builder {
        this.setFlag("--license-type", value);
        return this;
    }

    /** Frequency of log backups. 5-60 minutes. */
    logBackupFrequency(value: string): az_sql_vm_update_command_builder {
        this.setFlag("--log-backup-frequency", value);
        return this;
    }

    /** Duration of patching. 30-180 minutes. */
    maintenanceWindowDuration(value: string): az_sql_vm_update_command_builder {
        this.setFlag("--maintenance-window-duration", value);
        return this;
    }

    /** Hour of the day when patching is initiated. Local VM time 0-23 hours. */
    maintenanceWindowStartHour(value: string): az_sql_vm_update_command_builder {
        this.setFlag("--maintenance-window-start-hour", value);
        return this;
    }

    /** Name of the SQL virtual machine. */
    name(value: string): az_sql_vm_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** SQL Server port. */
    port(value: string): az_sql_vm_update_command_builder {
        this.setFlag("--port", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_sql_vm_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sql_vm_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Retention period of backup. 1-30 days. */
    retentionPeriod(value: string): az_sql_vm_update_command_builder {
        this.setFlag("--retention-period", value);
        return this;
    }

    /** Storage account key where backup will be taken to. */
    saKey(value: string): az_sql_vm_update_command_builder {
        this.setFlag("--sa-key", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_sql_vm_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Service principal name to access key vault. */
    spName(value: string): az_sql_vm_update_command_builder {
        this.setFlag("--sp-name", value);
        return this;
    }

    /** Service principal name secret to access key vault. */
    spSecret(value: string): az_sql_vm_update_command_builder {
        this.setFlag("--sp-secret", value);
        return this;
    }

    /** SQL Server management type. Updates from LightWeight to Full. */
    sqlMgmtType(value: 'Full'): az_sql_vm_update_command_builder {
        this.setFlag("--sql-mgmt-type", value);
        return this;
    }

    /** SQL Server workload type. */
    sqlWorkloadType(value: 'DW' | 'GENERAL' | 'OLTP'): az_sql_vm_update_command_builder {
        this.setFlag("--sql-workload-type", value);
        return this;
    }

    /** Storage account url where backup will be taken to. */
    storageAccount(value: string): az_sql_vm_update_command_builder {
        this.setFlag("--storage-account", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_vm_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_sql_vm_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Do not prompt for confirmation. Requires --sql-mgmt-type. */
    yes(value: string): az_sql_vm_update_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_sql_list_usages_command_builder extends CommandBuilder {
    constructor(commandPath: string, location: string) {
        super(commandPath);
        this.location(location)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_sql_list_usages_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_list_usages_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sql_show_usage_command_builder extends CommandBuilder {
    constructor(commandPath: string, location: string, usage: string) {
        super(commandPath);
        this.location(location)
        this.usage(usage)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_sql_show_usage_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name of usage metric to return. */
    usage(value: string): az_sql_show_usage_command_builder {
        this.setFlag("--usage", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sql_show_usage_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
