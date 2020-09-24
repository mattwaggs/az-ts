import { CommandBuilder, ICommandParent } from '../base';

/** Manage throughput of Cassandra keyspace under an Azure Cosmos DB account. */
export class az_cosmosdb_cassandra_keyspace_throughput implements ICommandParent<any> {
    commandPath = "az cosmosdb cassandra keyspace throughput";

    /**
     * Migrate the throughput of the Cassandra keyspace between autoscale and manually provisioned.
     *
     * Syntax:
     * ```
     * az cosmosdb cassandra keyspace throughput migrate --account-name
     *                                                   --name
     *                                                   --resource-group
     *                                                   --throughput-type {autoscale, manual}
     *                                                   [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Keyspace name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'autoscale' | 'manual'} throughputType The type of throughput to migrate to.
     */
    az_cosmosdb_cassandra_keyspace_throughput_migrate(accountName: string, name: string, resourceGroup: string, throughputType: 'autoscale' | 'manual'): az_cosmosdb_cassandra_keyspace_throughput_migrate_command_builder {
        return new az_cosmosdb_cassandra_keyspace_throughput_migrate_command_builder(this, accountName, name, resourceGroup, throughputType);
    }

    /**
     * Get the throughput of the Cassandra keyspace under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb cassandra keyspace throughput show --account-name
     *                                                --name
     *                                                --resource-group
     *                                                [--query-examples]
     *                                                [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Keyspace name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_cassandra_keyspace_throughput_show(accountName: string, name: string, resourceGroup: string): az_cosmosdb_cassandra_keyspace_throughput_show_command_builder {
        return new az_cosmosdb_cassandra_keyspace_throughput_show_command_builder(this, accountName, name, resourceGroup);
    }

    /**
     * Update the throughput of the Cassandra keyspace under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb cassandra keyspace throughput update --account-name
     *                                                  --name
     *                                                  --resource-group
     *                                                  [--max-throughput]
     *                                                  [--subscription]
     *                                                  [--throughput]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Keyspace name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_cassandra_keyspace_throughput_update(accountName: string, name: string, resourceGroup: string): az_cosmosdb_cassandra_keyspace_throughput_update_command_builder {
        return new az_cosmosdb_cassandra_keyspace_throughput_update_command_builder(this, accountName, name, resourceGroup);
    }
}

/** Manage Azure Cosmos DB Cassandra keyspaces. */
export class az_cosmosdb_cassandra_keyspace implements ICommandParent<any> {
    commandPath = "az cosmosdb cassandra keyspace";

    /**
     * Create an Cassandra keyspace under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb cassandra keyspace create --account-name
     *                                       --name
     *                                       --resource-group
     *                                       [--max-throughput]
     *                                       [--subscription]
     *                                       [--throughput]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Keyspace name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_cassandra_keyspace_create(accountName: string, name: string, resourceGroup: string): az_cosmosdb_cassandra_keyspace_create_command_builder {
        return new az_cosmosdb_cassandra_keyspace_create_command_builder(this, accountName, name, resourceGroup);
    }

    /**
     * Delete the Cassandra keyspace under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb cassandra keyspace delete --account-name
     *                                       --name
     *                                       --resource-group
     *                                       [--subscription]
     *                                       [--yes]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Keyspace name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_cassandra_keyspace_delete(accountName: string, name: string, resourceGroup: string): az_cosmosdb_cassandra_keyspace_delete_command_builder {
        return new az_cosmosdb_cassandra_keyspace_delete_command_builder(this, accountName, name, resourceGroup);
    }

    /**
     * Checks if an Azure Cosmos DB Cassandra keyspace exists.
     *
     * Syntax:
     * ```
     * az cosmosdb cassandra keyspace exists --account-name
     *                                       --name
     *                                       --resource-group
     *                                       [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Keyspace name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_cassandra_keyspace_exists(accountName: string, name: string, resourceGroup: string): az_cosmosdb_cassandra_keyspace_exists_command_builder {
        return new az_cosmosdb_cassandra_keyspace_exists_command_builder(this, accountName, name, resourceGroup);
    }

    /**
     * List the Cassandra keyspaces under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb cassandra keyspace list --account-name
     *                                     --resource-group
     *                                     [--query-examples]
     *                                     [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_cassandra_keyspace_list(accountName: string, resourceGroup: string): az_cosmosdb_cassandra_keyspace_list_command_builder {
        return new az_cosmosdb_cassandra_keyspace_list_command_builder(this, accountName, resourceGroup);
    }

    /**
     * Show the details of a Cassandra keyspace under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb cassandra keyspace show --account-name
     *                                     --name
     *                                     --resource-group
     *                                     [--query-examples]
     *                                     [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Keyspace name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_cassandra_keyspace_show(accountName: string, name: string, resourceGroup: string): az_cosmosdb_cassandra_keyspace_show_command_builder {
        return new az_cosmosdb_cassandra_keyspace_show_command_builder(this, accountName, name, resourceGroup);
    }
}

/** Manage throughput of Cassandra table under an Azure Cosmos DB account. */
export class az_cosmosdb_cassandra_table_throughput implements ICommandParent<any> {
    commandPath = "az cosmosdb cassandra table throughput";

    /**
     * Migrate the throughput of the Cassandra table between autoscale and manually provisioned.
     *
     * Syntax:
     * ```
     * az cosmosdb cassandra table throughput migrate --account-name
     *                                                --keyspace-name
     *                                                --name
     *                                                --resource-group
     *                                                --throughput-type {autoscale, manual}
     *                                                [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} keyspaceName Keyspace name.
     * @param {string} name Table name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'autoscale' | 'manual'} throughputType The type of throughput to migrate to.
     */
    az_cosmosdb_cassandra_table_throughput_migrate(accountName: string, keyspaceName: string, name: string, resourceGroup: string, throughputType: 'autoscale' | 'manual'): az_cosmosdb_cassandra_table_throughput_migrate_command_builder {
        return new az_cosmosdb_cassandra_table_throughput_migrate_command_builder(this, accountName, keyspaceName, name, resourceGroup, throughputType);
    }

    /**
     * Get the throughput of the Cassandra table under an Azure Cosmos DB Cassandra keyspace.
     *
     * Syntax:
     * ```
     * az cosmosdb cassandra table throughput show --account-name
     *                                             --keyspace-name
     *                                             --name
     *                                             --resource-group
     *                                             [--query-examples]
     *                                             [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} keyspaceName Keyspace name.
     * @param {string} name Table name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_cassandra_table_throughput_show(accountName: string, keyspaceName: string, name: string, resourceGroup: string): az_cosmosdb_cassandra_table_throughput_show_command_builder {
        return new az_cosmosdb_cassandra_table_throughput_show_command_builder(this, accountName, keyspaceName, name, resourceGroup);
    }

    /**
     * Update the throughput of the Cassandra table under an Azure Cosmos DB Cassandra keyspace.
     *
     * Syntax:
     * ```
     * az cosmosdb cassandra table throughput update --account-name
     *                                               --keyspace-name
     *                                               --name
     *                                               --resource-group
     *                                               [--max-throughput]
     *                                               [--subscription]
     *                                               [--throughput]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} keyspaceName Keyspace name.
     * @param {string} name Table name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_cassandra_table_throughput_update(accountName: string, keyspaceName: string, name: string, resourceGroup: string): az_cosmosdb_cassandra_table_throughput_update_command_builder {
        return new az_cosmosdb_cassandra_table_throughput_update_command_builder(this, accountName, keyspaceName, name, resourceGroup);
    }
}

/** Manage Azure Cosmos DB Cassandra tables. */
export class az_cosmosdb_cassandra_table implements ICommandParent<any> {
    commandPath = "az cosmosdb cassandra table";

    /**
     * Create an Cassandra table under an Azure Cosmos DB Cassandra keyspace.
     *
     * Syntax:
     * ```
     * az cosmosdb cassandra table create --account-name
     *                                    --keyspace-name
     *                                    --name
     *                                    --resource-group
     *                                    --schema
     *                                    [--analytical-storage-ttl]
     *                                    [--max-throughput]
     *                                    [--subscription]
     *                                    [--throughput]
     *                                    [--ttl]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} keyspaceName Keyspace name.
     * @param {string} name Table name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} schema Schema, you can enter it as a string or as a file, e.g., --schema @schema-file.json or --schema "{"columns": [{"name": "columnA","type": "uuid"}, {"name": "columnB","type": "Ascii"}],"partitionKeys": [{"name": "columnA"}]}".
     */
    az_cosmosdb_cassandra_table_create(accountName: string, keyspaceName: string, name: string, resourceGroup: string, schema: string): az_cosmosdb_cassandra_table_create_command_builder {
        return new az_cosmosdb_cassandra_table_create_command_builder(this, accountName, keyspaceName, name, resourceGroup, schema);
    }

    /**
     * Delete the Cassandra table under an Azure Cosmos DB Cassandra keyspace.
     *
     * Syntax:
     * ```
     * az cosmosdb cassandra table delete --account-name
     *                                    --keyspace-name
     *                                    --name
     *                                    --resource-group
     *                                    [--subscription]
     *                                    [--yes]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} keyspaceName Keyspace name.
     * @param {string} name Table name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_cassandra_table_delete(accountName: string, keyspaceName: string, name: string, resourceGroup: string): az_cosmosdb_cassandra_table_delete_command_builder {
        return new az_cosmosdb_cassandra_table_delete_command_builder(this, accountName, keyspaceName, name, resourceGroup);
    }

    /**
     * Checks if an Azure Cosmos DB Cassandra table exists.
     *
     * Syntax:
     * ```
     * az cosmosdb cassandra table exists --account-name
     *                                    --keyspace-name
     *                                    --name
     *                                    --resource-group
     *                                    [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} keyspaceName Keyspace name.
     * @param {string} name Table name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_cassandra_table_exists(accountName: string, keyspaceName: string, name: string, resourceGroup: string): az_cosmosdb_cassandra_table_exists_command_builder {
        return new az_cosmosdb_cassandra_table_exists_command_builder(this, accountName, keyspaceName, name, resourceGroup);
    }

    /**
     * List the Cassandra tables under an Azure Cosmos DB Cassandra keyspace.
     *
     * Syntax:
     * ```
     * az cosmosdb cassandra table list --account-name
     *                                  --keyspace-name
     *                                  --resource-group
     *                                  [--query-examples]
     *                                  [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} keyspaceName Keyspace name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_cassandra_table_list(accountName: string, keyspaceName: string, resourceGroup: string): az_cosmosdb_cassandra_table_list_command_builder {
        return new az_cosmosdb_cassandra_table_list_command_builder(this, accountName, keyspaceName, resourceGroup);
    }

    /**
     * Show the details of a Cassandra table under an Azure Cosmos DB Cassandra keyspace.
     *
     * Syntax:
     * ```
     * az cosmosdb cassandra table show --account-name
     *                                  --keyspace-name
     *                                  --name
     *                                  --resource-group
     *                                  [--query-examples]
     *                                  [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} keyspaceName Keyspace name.
     * @param {string} name Table name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_cassandra_table_show(accountName: string, keyspaceName: string, name: string, resourceGroup: string): az_cosmosdb_cassandra_table_show_command_builder {
        return new az_cosmosdb_cassandra_table_show_command_builder(this, accountName, keyspaceName, name, resourceGroup);
    }

    /**
     * Update an Cassandra table under an Azure Cosmos DB Cassandra keyspace.
     *
     * Syntax:
     * ```
     * az cosmosdb cassandra table update --account-name
     *                                    --keyspace-name
     *                                    --name
     *                                    --resource-group
     *                                    [--analytical-storage-ttl]
     *                                    [--schema]
     *                                    [--subscription]
     *                                    [--ttl]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} keyspaceName Keyspace name.
     * @param {string} name Table name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_cassandra_table_update(accountName: string, keyspaceName: string, name: string, resourceGroup: string): az_cosmosdb_cassandra_table_update_command_builder {
        return new az_cosmosdb_cassandra_table_update_command_builder(this, accountName, keyspaceName, name, resourceGroup);
    }
}

/** Manage Cassandra resources of Azure Cosmos DB account. */
export class az_cosmosdb_cassandra {
}

/** Manage Azure Cosmos DB collections. */
export class az_cosmosdb_collection implements ICommandParent<any> {
    commandPath = "az cosmosdb collection";

    /**
     * Creates an Azure Cosmos DB collection.
     *
     * Syntax:
     * ```
     * az cosmosdb collection create --collection-name
     *                               --db-name
     *                               [--default-ttl]
     *                               [--indexing-policy]
     *                               [--key]
     *                               [--name]
     *                               [--partition-key-path]
     *                               [--resource-group-name]
     *                               [--subscription]
     *                               [--throughput]
     *                               [--url-connection]
     * ```
     *
     * @param {string} collectionName Collection Name.
     * @param {string} dbName Database Name.
     */
    az_cosmosdb_collection_create(collectionName: string, dbName: string): az_cosmosdb_collection_create_command_builder {
        return new az_cosmosdb_collection_create_command_builder(this, collectionName, dbName);
    }

    /**
     * Deletes an Azure Cosmos DB collection.
     *
     * Syntax:
     * ```
     * az cosmosdb collection delete --collection-name
     *                               --db-name
     *                               [--key]
     *                               [--name]
     *                               [--resource-group-name]
     *                               [--subscription]
     *                               [--url-connection]
     *                               [--yes]
     * ```
     *
     * @param {string} collectionName Collection Name.
     * @param {string} dbName Database Name.
     */
    az_cosmosdb_collection_delete(collectionName: string, dbName: string): az_cosmosdb_collection_delete_command_builder {
        return new az_cosmosdb_collection_delete_command_builder(this, collectionName, dbName);
    }

    /**
     * Returns a boolean indicating whether the collection exists.
     *
     * Syntax:
     * ```
     * az cosmosdb collection exists --collection-name
     *                               --db-name
     *                               [--key]
     *                               [--name]
     *                               [--resource-group-name]
     *                               [--subscription]
     *                               [--url-connection]
     * ```
     *
     * @param {string} collectionName Collection Name.
     * @param {string} dbName Database Name.
     */
    az_cosmosdb_collection_exists(collectionName: string, dbName: string): az_cosmosdb_collection_exists_command_builder {
        return new az_cosmosdb_collection_exists_command_builder(this, collectionName, dbName);
    }

    /**
     * Lists all Azure Cosmos DB collections.
     *
     * Syntax:
     * ```
     * az cosmosdb collection list --db-name
     *                             [--key]
     *                             [--name]
     *                             [--query-examples]
     *                             [--resource-group-name]
     *                             [--subscription]
     *                             [--url-connection]
     * ```
     *
     * @param {string} dbName Database Name.
     */
    az_cosmosdb_collection_list(dbName: string): az_cosmosdb_collection_list_command_builder {
        return new az_cosmosdb_collection_list_command_builder(this, dbName);
    }

    /**
     * Shows an Azure Cosmos DB collection and its offer.
     *
     * Syntax:
     * ```
     * az cosmosdb collection show --collection-name
     *                             --db-name
     *                             [--key]
     *                             [--name]
     *                             [--query-examples]
     *                             [--resource-group-name]
     *                             [--subscription]
     *                             [--url-connection]
     * ```
     *
     * @param {string} collectionName Collection Name.
     * @param {string} dbName Database Name.
     */
    az_cosmosdb_collection_show(collectionName: string, dbName: string): az_cosmosdb_collection_show_command_builder {
        return new az_cosmosdb_collection_show_command_builder(this, collectionName, dbName);
    }

    /**
     * Updates an Azure Cosmos DB collection.
     *
     * Syntax:
     * ```
     * az cosmosdb collection update --collection-name
     *                               --db-name
     *                               [--default-ttl]
     *                               [--indexing-policy]
     *                               [--key]
     *                               [--name]
     *                               [--resource-group-name]
     *                               [--subscription]
     *                               [--throughput]
     *                               [--url-connection]
     * ```
     *
     * @param {string} collectionName Collection Name.
     * @param {string} dbName Database Name.
     */
    az_cosmosdb_collection_update(collectionName: string, dbName: string): az_cosmosdb_collection_update_command_builder {
        return new az_cosmosdb_collection_update_command_builder(this, collectionName, dbName);
    }
}

/** Manage Azure Cosmos DB databases. */
export class az_cosmosdb_database implements ICommandParent<any> {
    commandPath = "az cosmosdb database";

    /**
     * Creates an Azure Cosmos DB database.
     *
     * Syntax:
     * ```
     * az cosmosdb database create --db-name
     *                             [--key]
     *                             [--name]
     *                             [--resource-group-name]
     *                             [--subscription]
     *                             [--throughput]
     *                             [--url-connection]
     * ```
     *
     * @param {string} dbName Database Name.
     */
    az_cosmosdb_database_create(dbName: string): az_cosmosdb_database_create_command_builder {
        return new az_cosmosdb_database_create_command_builder(this, dbName);
    }

    /**
     * Deletes an Azure Cosmos DB database.
     *
     * Syntax:
     * ```
     * az cosmosdb database delete --db-name
     *                             [--key]
     *                             [--name]
     *                             [--resource-group-name]
     *                             [--subscription]
     *                             [--url-connection]
     *                             [--yes]
     * ```
     *
     * @param {string} dbName Database Name.
     */
    az_cosmosdb_database_delete(dbName: string): az_cosmosdb_database_delete_command_builder {
        return new az_cosmosdb_database_delete_command_builder(this, dbName);
    }

    /**
     * Returns a boolean indicating whether the database exists.
     *
     * Syntax:
     * ```
     * az cosmosdb database exists --db-name
     *                             [--key]
     *                             [--name]
     *                             [--resource-group-name]
     *                             [--subscription]
     *                             [--url-connection]
     * ```
     *
     * @param {string} dbName Database Name.
     */
    az_cosmosdb_database_exists(dbName: string): az_cosmosdb_database_exists_command_builder {
        return new az_cosmosdb_database_exists_command_builder(this, dbName);
    }

    /**
     * Lists all Azure Cosmos DB databases.
     *
     * Syntax:
     * ```
     * az cosmosdb database list [--key]
     *                           [--name]
     *                           [--query-examples]
     *                           [--resource-group-name]
     *                           [--subscription]
     *                           [--url-connection]
     * ```
     */
    az_cosmosdb_database_list(): az_cosmosdb_database_list_command_builder {
        return new az_cosmosdb_database_list_command_builder(this);
    }

    /**
     * Shows an Azure Cosmos DB database.
     *
     * Syntax:
     * ```
     * az cosmosdb database show --db-name
     *                           [--key]
     *                           [--name]
     *                           [--query-examples]
     *                           [--resource-group-name]
     *                           [--subscription]
     *                           [--url-connection]
     * ```
     *
     * @param {string} dbName Database Name.
     */
    az_cosmosdb_database_show(dbName: string): az_cosmosdb_database_show_command_builder {
        return new az_cosmosdb_database_show_command_builder(this, dbName);
    }
}

/** Manage throughput of Gremlin database under an Azure Cosmos DB account. */
export class az_cosmosdb_gremlin_database_throughput implements ICommandParent<any> {
    commandPath = "az cosmosdb gremlin database throughput";

    /**
     * Migrate the throughput of the Gremlin database between autoscale and manually provisioned.
     *
     * Syntax:
     * ```
     * az cosmosdb gremlin database throughput migrate --account-name
     *                                                 --name
     *                                                 --resource-group
     *                                                 --throughput-type {autoscale, manual}
     *                                                 [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'autoscale' | 'manual'} throughputType The type of throughput to migrate to.
     */
    az_cosmosdb_gremlin_database_throughput_migrate(accountName: string, name: string, resourceGroup: string, throughputType: 'autoscale' | 'manual'): az_cosmosdb_gremlin_database_throughput_migrate_command_builder {
        return new az_cosmosdb_gremlin_database_throughput_migrate_command_builder(this, accountName, name, resourceGroup, throughputType);
    }

    /**
     * Get the throughput of the Gremlin database under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb gremlin database throughput show --account-name
     *                                              --name
     *                                              --resource-group
     *                                              [--query-examples]
     *                                              [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_gremlin_database_throughput_show(accountName: string, name: string, resourceGroup: string): az_cosmosdb_gremlin_database_throughput_show_command_builder {
        return new az_cosmosdb_gremlin_database_throughput_show_command_builder(this, accountName, name, resourceGroup);
    }

    /**
     * Update the throughput of the Gremlin database under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb gremlin database throughput update --account-name
     *                                                --name
     *                                                --resource-group
     *                                                [--max-throughput]
     *                                                [--subscription]
     *                                                [--throughput]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_gremlin_database_throughput_update(accountName: string, name: string, resourceGroup: string): az_cosmosdb_gremlin_database_throughput_update_command_builder {
        return new az_cosmosdb_gremlin_database_throughput_update_command_builder(this, accountName, name, resourceGroup);
    }
}

/** Manage Azure Cosmos DB Gremlin databases. */
export class az_cosmosdb_gremlin_database implements ICommandParent<any> {
    commandPath = "az cosmosdb gremlin database";

    /**
     * Create an Gremlin database under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb gremlin database create --account-name
     *                                     --name
     *                                     --resource-group
     *                                     [--max-throughput]
     *                                     [--subscription]
     *                                     [--throughput]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_gremlin_database_create(accountName: string, name: string, resourceGroup: string): az_cosmosdb_gremlin_database_create_command_builder {
        return new az_cosmosdb_gremlin_database_create_command_builder(this, accountName, name, resourceGroup);
    }

    /**
     * Delete the Gremlin database under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb gremlin database delete --account-name
     *                                     --name
     *                                     --resource-group
     *                                     [--subscription]
     *                                     [--yes]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_gremlin_database_delete(accountName: string, name: string, resourceGroup: string): az_cosmosdb_gremlin_database_delete_command_builder {
        return new az_cosmosdb_gremlin_database_delete_command_builder(this, accountName, name, resourceGroup);
    }

    /**
     * Checks if an Azure Cosmos DB Gremlin database exists.
     *
     * Syntax:
     * ```
     * az cosmosdb gremlin database exists --account-name
     *                                     --name
     *                                     --resource-group
     *                                     [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_gremlin_database_exists(accountName: string, name: string, resourceGroup: string): az_cosmosdb_gremlin_database_exists_command_builder {
        return new az_cosmosdb_gremlin_database_exists_command_builder(this, accountName, name, resourceGroup);
    }

    /**
     * List the Gremlin databases under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb gremlin database list --account-name
     *                                   --resource-group
     *                                   [--query-examples]
     *                                   [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_gremlin_database_list(accountName: string, resourceGroup: string): az_cosmosdb_gremlin_database_list_command_builder {
        return new az_cosmosdb_gremlin_database_list_command_builder(this, accountName, resourceGroup);
    }

    /**
     * Show the details of a Gremlin database under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb gremlin database show --account-name
     *                                   --name
     *                                   --resource-group
     *                                   [--query-examples]
     *                                   [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_gremlin_database_show(accountName: string, name: string, resourceGroup: string): az_cosmosdb_gremlin_database_show_command_builder {
        return new az_cosmosdb_gremlin_database_show_command_builder(this, accountName, name, resourceGroup);
    }
}

/** Manage throughput of Gremlin graph under an Azure Cosmos DB account. */
export class az_cosmosdb_gremlin_graph_throughput implements ICommandParent<any> {
    commandPath = "az cosmosdb gremlin graph throughput";

    /**
     * Migrate the throughput of the Gremlin Graph between autoscale and manually provisioned.
     *
     * Syntax:
     * ```
     * az cosmosdb gremlin graph throughput migrate --account-name
     *                                              --database-name
     *                                              --name
     *                                              --resource-group
     *                                              --throughput-type {autoscale, manual}
     *                                              [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} name Graph name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'autoscale' | 'manual'} throughputType The type of throughput to migrate to.
     */
    az_cosmosdb_gremlin_graph_throughput_migrate(accountName: string, databaseName: string, name: string, resourceGroup: string, throughputType: 'autoscale' | 'manual'): az_cosmosdb_gremlin_graph_throughput_migrate_command_builder {
        return new az_cosmosdb_gremlin_graph_throughput_migrate_command_builder(this, accountName, databaseName, name, resourceGroup, throughputType);
    }

    /**
     * Get the throughput of the Gremlin graph under an Azure Cosmos DB Gremlin database.
     *
     * Syntax:
     * ```
     * az cosmosdb gremlin graph throughput show --account-name
     *                                           --database-name
     *                                           --name
     *                                           --resource-group
     *                                           [--query-examples]
     *                                           [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} name Graph name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_gremlin_graph_throughput_show(accountName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_gremlin_graph_throughput_show_command_builder {
        return new az_cosmosdb_gremlin_graph_throughput_show_command_builder(this, accountName, databaseName, name, resourceGroup);
    }

    /**
     * Update the throughput of the Gremlin graph under an Azure Cosmos DB Gremlin database.
     *
     * Syntax:
     * ```
     * az cosmosdb gremlin graph throughput update --account-name
     *                                             --database-name
     *                                             --name
     *                                             --resource-group
     *                                             [--max-throughput]
     *                                             [--subscription]
     *                                             [--throughput]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} name Graph name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_gremlin_graph_throughput_update(accountName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_gremlin_graph_throughput_update_command_builder {
        return new az_cosmosdb_gremlin_graph_throughput_update_command_builder(this, accountName, databaseName, name, resourceGroup);
    }
}

/** Manage Azure Cosmos DB Gremlin graphs. */
export class az_cosmosdb_gremlin_graph implements ICommandParent<any> {
    commandPath = "az cosmosdb gremlin graph";

    /**
     * Create an Gremlin graph under an Azure Cosmos DB Gremlin database.
     *
     * Syntax:
     * ```
     * az cosmosdb gremlin graph create --account-name
     *                                  --database-name
     *                                  --name
     *                                  --partition-key-path
     *                                  --resource-group
     *                                  [--conflict-resolution-policy]
     *                                  [--idx]
     *                                  [--max-throughput]
     *                                  [--subscription]
     *                                  [--throughput]
     *                                  [--ttl]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} name Graph name.
     * @param {string} partitionKeyPath Partition Key Path, e.g., '/address/zipcode'.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_gremlin_graph_create(accountName: string, databaseName: string, name: string, partitionKeyPath: string, resourceGroup: string): az_cosmosdb_gremlin_graph_create_command_builder {
        return new az_cosmosdb_gremlin_graph_create_command_builder(this, accountName, databaseName, name, partitionKeyPath, resourceGroup);
    }

    /**
     * Delete the Gremlin graph under an Azure Cosmos DB Gremlin database.
     *
     * Syntax:
     * ```
     * az cosmosdb gremlin graph delete --account-name
     *                                  --database-name
     *                                  --name
     *                                  --resource-group
     *                                  [--subscription]
     *                                  [--yes]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} name Graph name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_gremlin_graph_delete(accountName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_gremlin_graph_delete_command_builder {
        return new az_cosmosdb_gremlin_graph_delete_command_builder(this, accountName, databaseName, name, resourceGroup);
    }

    /**
     * Checks if an Azure Cosmos DB Gremlin graph exists.
     *
     * Syntax:
     * ```
     * az cosmosdb gremlin graph exists --account-name
     *                                  --database-name
     *                                  --name
     *                                  --resource-group
     *                                  [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} name Graph name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_gremlin_graph_exists(accountName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_gremlin_graph_exists_command_builder {
        return new az_cosmosdb_gremlin_graph_exists_command_builder(this, accountName, databaseName, name, resourceGroup);
    }

    /**
     * List the Gremlin graphs under an Azure Cosmos DB Gremlin database.
     *
     * Syntax:
     * ```
     * az cosmosdb gremlin graph list --account-name
     *                                --database-name
     *                                --resource-group
     *                                [--query-examples]
     *                                [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_gremlin_graph_list(accountName: string, databaseName: string, resourceGroup: string): az_cosmosdb_gremlin_graph_list_command_builder {
        return new az_cosmosdb_gremlin_graph_list_command_builder(this, accountName, databaseName, resourceGroup);
    }

    /**
     * Show the details of a Gremlin graph under an Azure Cosmos DB Gremlin database.
     *
     * Syntax:
     * ```
     * az cosmosdb gremlin graph show --account-name
     *                                --database-name
     *                                --name
     *                                --resource-group
     *                                [--query-examples]
     *                                [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} name Graph name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_gremlin_graph_show(accountName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_gremlin_graph_show_command_builder {
        return new az_cosmosdb_gremlin_graph_show_command_builder(this, accountName, databaseName, name, resourceGroup);
    }

    /**
     * Update an Gremlin graph under an Azure Cosmos DB Gremlin database.
     *
     * Syntax:
     * ```
     * az cosmosdb gremlin graph update --account-name
     *                                  --database-name
     *                                  --name
     *                                  --resource-group
     *                                  [--idx]
     *                                  [--subscription]
     *                                  [--ttl]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} name Graph name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_gremlin_graph_update(accountName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_gremlin_graph_update_command_builder {
        return new az_cosmosdb_gremlin_graph_update_command_builder(this, accountName, databaseName, name, resourceGroup);
    }
}

/** Manage Gremlin resources of Azure Cosmos DB account. */
export class az_cosmosdb_gremlin {
}

/** Manage Azure Comsos DB keys. */
export class az_cosmosdb_keys implements ICommandParent<any> {
    commandPath = "az cosmosdb keys";

    /**
     * List the access keys or connection strings for a Azure Cosmos DB database account.
     *
     * Syntax:
     * ```
     * az cosmosdb keys list --name
     *                       --resource-group
     *                       [--query-examples]
     *                       [--subscription]
     *                       [--type {connection-strings, keys, read-only-keys}]
     * ```
     *
     * @param {string} name Cosmosdb account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_keys_list(name: string, resourceGroup: string): az_cosmosdb_keys_list_command_builder {
        return new az_cosmosdb_keys_list_command_builder(this, name, resourceGroup);
    }

    /**
     * Regenerates an access key for the specified Azure Cosmos DB database account.
     *
     * Syntax:
     * ```
     * az cosmosdb keys regenerate --key-kind {primary, primaryReadonly, secondary, secondaryReadonly}
     *                             [--ids]
     *                             [--name]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     *
     * @param {'primary' | 'primaryReadonly' | 'secondary' | 'secondaryReadonly'} keyKind The access key to regenerate.
     */
    az_cosmosdb_keys_regenerate(keyKind: 'primary' | 'primaryReadonly' | 'secondary' | 'secondaryReadonly'): az_cosmosdb_keys_regenerate_command_builder {
        return new az_cosmosdb_keys_regenerate_command_builder(this, keyKind);
    }
}

/** Manage throughput of MongoDB collection under an Azure Cosmos DB account. */
export class az_cosmosdb_mongodb_collection_throughput implements ICommandParent<any> {
    commandPath = "az cosmosdb mongodb collection throughput";

    /**
     * Migrate the throughput of the MongoDB collection between autoscale and manually provisioned.
     *
     * Syntax:
     * ```
     * az cosmosdb mongodb collection throughput migrate --account-name
     *                                                   --database-name
     *                                                   --name
     *                                                   --resource-group
     *                                                   --throughput-type {autoscale, manual}
     *                                                   [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} name Collection name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'autoscale' | 'manual'} throughputType The type of throughput to migrate to.
     */
    az_cosmosdb_mongodb_collection_throughput_migrate(accountName: string, databaseName: string, name: string, resourceGroup: string, throughputType: 'autoscale' | 'manual'): az_cosmosdb_mongodb_collection_throughput_migrate_command_builder {
        return new az_cosmosdb_mongodb_collection_throughput_migrate_command_builder(this, accountName, databaseName, name, resourceGroup, throughputType);
    }

    /**
     * Get the throughput of the MongoDB collection under an Azure Cosmos DB MongoDB database.
     *
     * Syntax:
     * ```
     * az cosmosdb mongodb collection throughput show --account-name
     *                                                --database-name
     *                                                --name
     *                                                --resource-group
     *                                                [--query-examples]
     *                                                [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} name Collection name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_mongodb_collection_throughput_show(accountName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_mongodb_collection_throughput_show_command_builder {
        return new az_cosmosdb_mongodb_collection_throughput_show_command_builder(this, accountName, databaseName, name, resourceGroup);
    }

    /**
     * Update the throughput of the MongoDB collection under an Azure Cosmos DB MongoDB database.
     *
     * Syntax:
     * ```
     * az cosmosdb mongodb collection throughput update --account-name
     *                                                  --database-name
     *                                                  --name
     *                                                  --resource-group
     *                                                  [--max-throughput]
     *                                                  [--subscription]
     *                                                  [--throughput]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} name Collection name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_mongodb_collection_throughput_update(accountName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_mongodb_collection_throughput_update_command_builder {
        return new az_cosmosdb_mongodb_collection_throughput_update_command_builder(this, accountName, databaseName, name, resourceGroup);
    }
}

/** Manage Azure Cosmos DB MongoDB collections. */
export class az_cosmosdb_mongodb_collection implements ICommandParent<any> {
    commandPath = "az cosmosdb mongodb collection";

    /**
     * Create an MongoDB collection under an Azure Cosmos DB MongoDB database.
     *
     * Syntax:
     * ```
     * az cosmosdb mongodb collection create --account-name
     *                                       --database-name
     *                                       --name
     *                                       --resource-group
     *                                       [--analytical-storage-ttl]
     *                                       [--idx]
     *                                       [--max-throughput]
     *                                       [--shard]
     *                                       [--subscription]
     *                                       [--throughput]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} name Collection name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_mongodb_collection_create(accountName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_mongodb_collection_create_command_builder {
        return new az_cosmosdb_mongodb_collection_create_command_builder(this, accountName, databaseName, name, resourceGroup);
    }

    /**
     * Delete the MongoDB collection under an Azure Cosmos DB MongoDB database.
     *
     * Syntax:
     * ```
     * az cosmosdb mongodb collection delete --account-name
     *                                       --database-name
     *                                       --name
     *                                       --resource-group
     *                                       [--subscription]
     *                                       [--yes]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} name Collection name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_mongodb_collection_delete(accountName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_mongodb_collection_delete_command_builder {
        return new az_cosmosdb_mongodb_collection_delete_command_builder(this, accountName, databaseName, name, resourceGroup);
    }

    /**
     * Checks if an Azure Cosmos DB MongoDB collection exists.
     *
     * Syntax:
     * ```
     * az cosmosdb mongodb collection exists --account-name
     *                                       --database-name
     *                                       --name
     *                                       --resource-group
     *                                       [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} name Collection name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_mongodb_collection_exists(accountName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_mongodb_collection_exists_command_builder {
        return new az_cosmosdb_mongodb_collection_exists_command_builder(this, accountName, databaseName, name, resourceGroup);
    }

    /**
     * List the MongoDB collections under an Azure Cosmos DB MongoDB database.
     *
     * Syntax:
     * ```
     * az cosmosdb mongodb collection list --account-name
     *                                     --database-name
     *                                     --resource-group
     *                                     [--query-examples]
     *                                     [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_mongodb_collection_list(accountName: string, databaseName: string, resourceGroup: string): az_cosmosdb_mongodb_collection_list_command_builder {
        return new az_cosmosdb_mongodb_collection_list_command_builder(this, accountName, databaseName, resourceGroup);
    }

    /**
     * Show the details of a MongoDB collection under an Azure Cosmos DB MongoDB database.
     *
     * Syntax:
     * ```
     * az cosmosdb mongodb collection show --account-name
     *                                     --database-name
     *                                     --name
     *                                     --resource-group
     *                                     [--query-examples]
     *                                     [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} name Collection name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_mongodb_collection_show(accountName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_mongodb_collection_show_command_builder {
        return new az_cosmosdb_mongodb_collection_show_command_builder(this, accountName, databaseName, name, resourceGroup);
    }

    /**
     * Update an MongoDB collection under an Azure Cosmos DB MongoDB database.
     *
     * Syntax:
     * ```
     * az cosmosdb mongodb collection update --account-name
     *                                       --database-name
     *                                       --name
     *                                       --resource-group
     *                                       [--analytical-storage-ttl]
     *                                       [--idx]
     *                                       [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} name Collection name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_mongodb_collection_update(accountName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_mongodb_collection_update_command_builder {
        return new az_cosmosdb_mongodb_collection_update_command_builder(this, accountName, databaseName, name, resourceGroup);
    }
}

/** Manage throughput of MongoDB database under an Azure Cosmos DB account. */
export class az_cosmosdb_mongodb_database_throughput implements ICommandParent<any> {
    commandPath = "az cosmosdb mongodb database throughput";

    /**
     * Migrate the throughput of the MongoDB database between autoscale and manually provisioned.
     *
     * Syntax:
     * ```
     * az cosmosdb mongodb database throughput migrate --account-name
     *                                                 --name
     *                                                 --resource-group
     *                                                 --throughput-type {autoscale, manual}
     *                                                 [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'autoscale' | 'manual'} throughputType The type of throughput to migrate to.
     */
    az_cosmosdb_mongodb_database_throughput_migrate(accountName: string, name: string, resourceGroup: string, throughputType: 'autoscale' | 'manual'): az_cosmosdb_mongodb_database_throughput_migrate_command_builder {
        return new az_cosmosdb_mongodb_database_throughput_migrate_command_builder(this, accountName, name, resourceGroup, throughputType);
    }

    /**
     * Get the throughput of the MongoDB database under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb mongodb database throughput show --account-name
     *                                              --name
     *                                              --resource-group
     *                                              [--query-examples]
     *                                              [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_mongodb_database_throughput_show(accountName: string, name: string, resourceGroup: string): az_cosmosdb_mongodb_database_throughput_show_command_builder {
        return new az_cosmosdb_mongodb_database_throughput_show_command_builder(this, accountName, name, resourceGroup);
    }

    /**
     * Update the throughput of the MongoDB database under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb mongodb database throughput update --account-name
     *                                                --name
     *                                                --resource-group
     *                                                [--max-throughput]
     *                                                [--subscription]
     *                                                [--throughput]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_mongodb_database_throughput_update(accountName: string, name: string, resourceGroup: string): az_cosmosdb_mongodb_database_throughput_update_command_builder {
        return new az_cosmosdb_mongodb_database_throughput_update_command_builder(this, accountName, name, resourceGroup);
    }
}

/** Manage Azure Cosmos DB MongoDB databases. */
export class az_cosmosdb_mongodb_database implements ICommandParent<any> {
    commandPath = "az cosmosdb mongodb database";

    /**
     * Create an MongoDB database under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb mongodb database create --account-name
     *                                     --name
     *                                     --resource-group
     *                                     [--max-throughput]
     *                                     [--subscription]
     *                                     [--throughput]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_mongodb_database_create(accountName: string, name: string, resourceGroup: string): az_cosmosdb_mongodb_database_create_command_builder {
        return new az_cosmosdb_mongodb_database_create_command_builder(this, accountName, name, resourceGroup);
    }

    /**
     * Delete the MongoDB database under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb mongodb database delete --account-name
     *                                     --name
     *                                     --resource-group
     *                                     [--subscription]
     *                                     [--yes]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_mongodb_database_delete(accountName: string, name: string, resourceGroup: string): az_cosmosdb_mongodb_database_delete_command_builder {
        return new az_cosmosdb_mongodb_database_delete_command_builder(this, accountName, name, resourceGroup);
    }

    /**
     * Checks if an Azure Cosmos DB MongoDB database exists.
     *
     * Syntax:
     * ```
     * az cosmosdb mongodb database exists --account-name
     *                                     --name
     *                                     --resource-group
     *                                     [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_mongodb_database_exists(accountName: string, name: string, resourceGroup: string): az_cosmosdb_mongodb_database_exists_command_builder {
        return new az_cosmosdb_mongodb_database_exists_command_builder(this, accountName, name, resourceGroup);
    }

    /**
     * List the MongoDB databases under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb mongodb database list --account-name
     *                                   --resource-group
     *                                   [--query-examples]
     *                                   [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_mongodb_database_list(accountName: string, resourceGroup: string): az_cosmosdb_mongodb_database_list_command_builder {
        return new az_cosmosdb_mongodb_database_list_command_builder(this, accountName, resourceGroup);
    }

    /**
     * Show the details of a MongoDB database under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb mongodb database show --account-name
     *                                   --name
     *                                   --resource-group
     *                                   [--query-examples]
     *                                   [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_mongodb_database_show(accountName: string, name: string, resourceGroup: string): az_cosmosdb_mongodb_database_show_command_builder {
        return new az_cosmosdb_mongodb_database_show_command_builder(this, accountName, name, resourceGroup);
    }
}

/** Manage MongoDB resources of Azure Cosmos DB account. */
export class az_cosmosdb_mongodb {
}

/** Manage Azure Comsos DB network rules. */
export class az_cosmosdb_network_rule implements ICommandParent<any> {
    commandPath = "az cosmosdb network-rule";

    /**
     * Adds a virtual network rule to an existing Cosmos DB database account.
     *
     * Syntax:
     * ```
     * az cosmosdb network-rule add --subnet
     *                              [--ids]
     *                              [--ignore-missing-endpoint {false, true}]
     *                              [--name]
     *                              [--resource-group]
     *                              [--subscription]
     *                              [--virtual-network]
     * ```
     *
     * @param {string} subnet Name or ID of the subnet.
     */
    az_cosmosdb_network_rule_add(subnet: string): az_cosmosdb_network_rule_add_command_builder {
        return new az_cosmosdb_network_rule_add_command_builder(this, subnet);
    }

    /**
     * Lists the virtual network accounts associated with a Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb network-rule list --name
     *                               --resource-group
     *                               [--query-examples]
     *                               [--subscription]
     * ```
     *
     * @param {string} name Name of the Cosmos DB database account.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_network_rule_list(name: string, resourceGroup: string): az_cosmosdb_network_rule_list_command_builder {
        return new az_cosmosdb_network_rule_list_command_builder(this, name, resourceGroup);
    }

    /**
     * Adds a virtual network rule to an existing Cosmos DB database account.
     *
     * Syntax:
     * ```
     * az cosmosdb network-rule remove --subnet
     *                                 [--ids]
     *                                 [--name]
     *                                 [--resource-group]
     *                                 [--subscription]
     *                                 [--virtual-network]
     * ```
     *
     * @param {string} subnet Name or ID of the subnet.
     */
    az_cosmosdb_network_rule_remove(subnet: string): az_cosmosdb_network_rule_remove_command_builder {
        return new az_cosmosdb_network_rule_remove_command_builder(this, subnet);
    }
}

/** Manage Azure Comsos DB private endpoint connections. */
export class az_cosmosdb_private_endpoint_connection implements ICommandParent<any> {
    commandPath = "az cosmosdb private-endpoint-connection";

    /**
     * Approve the specified private endpoint connection associated with Azure Comsos DB.
     *
     * Syntax:
     * ```
     * az cosmosdb private-endpoint-connection approve [--account-name]
     *                                                 [--description]
     *                                                 [--id]
     *                                                 [--ids]
     *                                                 [--name]
     *                                                 [--resource-group]
     *                                                 [--subscription]
     * ```
     */
    az_cosmosdb_private_endpoint_connection_approve(): az_cosmosdb_private_endpoint_connection_approve_command_builder {
        return new az_cosmosdb_private_endpoint_connection_approve_command_builder(this);
    }

    /**
     * Delete the specified private endpoint connection associated with Azure Comsos DB.
     *
     * Syntax:
     * ```
     * az cosmosdb private-endpoint-connection delete [--account-name]
     *                                                [--id]
     *                                                [--ids]
     *                                                [--name]
     *                                                [--resource-group]
     *                                                [--subscription]
     * ```
     */
    az_cosmosdb_private_endpoint_connection_delete(): az_cosmosdb_private_endpoint_connection_delete_command_builder {
        return new az_cosmosdb_private_endpoint_connection_delete_command_builder(this);
    }

    /**
     * Reject the specified private endpoint connection associated with Azure Comsos DB.
     *
     * Syntax:
     * ```
     * az cosmosdb private-endpoint-connection reject [--account-name]
     *                                                [--description]
     *                                                [--id]
     *                                                [--ids]
     *                                                [--name]
     *                                                [--resource-group]
     *                                                [--subscription]
     * ```
     */
    az_cosmosdb_private_endpoint_connection_reject(): az_cosmosdb_private_endpoint_connection_reject_command_builder {
        return new az_cosmosdb_private_endpoint_connection_reject_command_builder(this);
    }

    /**
     * Show details of a private endpoint connection associated with Azure Comsos DB.
     *
     * Syntax:
     * ```
     * az cosmosdb private-endpoint-connection show [--account-name]
     *                                              [--id]
     *                                              [--ids]
     *                                              [--name]
     *                                              [--query-examples]
     *                                              [--resource-group]
     *                                              [--subscription]
     * ```
     */
    az_cosmosdb_private_endpoint_connection_show(): az_cosmosdb_private_endpoint_connection_show_command_builder {
        return new az_cosmosdb_private_endpoint_connection_show_command_builder(this);
    }
}

/** Manage Azure Comsos DB private link resources. */
export class az_cosmosdb_private_link_resource implements ICommandParent<any> {
    commandPath = "az cosmosdb private-link-resource";

    /**
     * List the private link resources supported for Azure Comsos DB.
     *
     * Syntax:
     * ```
     * az cosmosdb private-link-resource list --account-name
     *                                        --resource-group
     *                                        [--query-examples]
     *                                        [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_private_link_resource_list(accountName: string, resourceGroup: string): az_cosmosdb_private_link_resource_list_command_builder {
        return new az_cosmosdb_private_link_resource_list_command_builder(this, accountName, resourceGroup);
    }
}

/** Manage throughput of SQL container under an Azure Cosmos DB account. */
export class az_cosmosdb_sql_container_throughput implements ICommandParent<any> {
    commandPath = "az cosmosdb sql container throughput";

    /**
     * Migrate the throughput of the SQL container between autoscale and manually provisioned.
     *
     * Syntax:
     * ```
     * az cosmosdb sql container throughput migrate --account-name
     *                                              --database-name
     *                                              --name
     *                                              --resource-group
     *                                              --throughput-type {autoscale, manual}
     *                                              [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} name Container name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'autoscale' | 'manual'} throughputType The type of throughput to migrate to.
     */
    az_cosmosdb_sql_container_throughput_migrate(accountName: string, databaseName: string, name: string, resourceGroup: string, throughputType: 'autoscale' | 'manual'): az_cosmosdb_sql_container_throughput_migrate_command_builder {
        return new az_cosmosdb_sql_container_throughput_migrate_command_builder(this, accountName, databaseName, name, resourceGroup, throughputType);
    }

    /**
     * Get the throughput of the SQL container under an Azure Cosmos DB SQL database.
     *
     * Syntax:
     * ```
     * az cosmosdb sql container throughput show --account-name
     *                                           --database-name
     *                                           --name
     *                                           --resource-group
     *                                           [--query-examples]
     *                                           [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} name Container name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_container_throughput_show(accountName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_sql_container_throughput_show_command_builder {
        return new az_cosmosdb_sql_container_throughput_show_command_builder(this, accountName, databaseName, name, resourceGroup);
    }

    /**
     * Update the throughput of the SQL container under an Azure Cosmos DB SQL database.
     *
     * Syntax:
     * ```
     * az cosmosdb sql container throughput update --account-name
     *                                             --database-name
     *                                             --name
     *                                             --resource-group
     *                                             [--max-throughput]
     *                                             [--subscription]
     *                                             [--throughput]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} name Container name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_container_throughput_update(accountName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_sql_container_throughput_update_command_builder {
        return new az_cosmosdb_sql_container_throughput_update_command_builder(this, accountName, databaseName, name, resourceGroup);
    }
}

/** Manage Azure Cosmos DB SQL containers. */
export class az_cosmosdb_sql_container implements ICommandParent<any> {
    commandPath = "az cosmosdb sql container";

    /**
     * Create an SQL container under an Azure Cosmos DB SQL database.
     *
     * Syntax:
     * ```
     * az cosmosdb sql container create --account-name
     *                                  --database-name
     *                                  --name
     *                                  --partition-key-path
     *                                  --resource-group
     *                                  [--conflict-resolution-policy]
     *                                  [--idx]
     *                                  [--max-throughput]
     *                                  [--partition-key-version]
     *                                  [--subscription]
     *                                  [--throughput]
     *                                  [--ttl]
     *                                  [--unique-key-policy]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} name Container name.
     * @param {string} partitionKeyPath Partition Key Path, e.g., '/address/zipcode'.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_container_create(accountName: string, databaseName: string, name: string, partitionKeyPath: string, resourceGroup: string): az_cosmosdb_sql_container_create_command_builder {
        return new az_cosmosdb_sql_container_create_command_builder(this, accountName, databaseName, name, partitionKeyPath, resourceGroup);
    }

    /**
     * Delete the SQL container under an Azure Cosmos DB SQL database.
     *
     * Syntax:
     * ```
     * az cosmosdb sql container delete --account-name
     *                                  --database-name
     *                                  --name
     *                                  --resource-group
     *                                  [--subscription]
     *                                  [--yes]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} name Container name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_container_delete(accountName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_sql_container_delete_command_builder {
        return new az_cosmosdb_sql_container_delete_command_builder(this, accountName, databaseName, name, resourceGroup);
    }

    /**
     * Checks if an Azure Cosmos DB SQL container exists.
     *
     * Syntax:
     * ```
     * az cosmosdb sql container exists --account-name
     *                                  --database-name
     *                                  --name
     *                                  --resource-group
     *                                  [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} name Container name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_container_exists(accountName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_sql_container_exists_command_builder {
        return new az_cosmosdb_sql_container_exists_command_builder(this, accountName, databaseName, name, resourceGroup);
    }

    /**
     * List the SQL containers under an Azure Cosmos DB SQL database.
     *
     * Syntax:
     * ```
     * az cosmosdb sql container list --account-name
     *                                --database-name
     *                                --resource-group
     *                                [--query-examples]
     *                                [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_container_list(accountName: string, databaseName: string, resourceGroup: string): az_cosmosdb_sql_container_list_command_builder {
        return new az_cosmosdb_sql_container_list_command_builder(this, accountName, databaseName, resourceGroup);
    }

    /**
     * Show the details of a SQL container under an Azure Cosmos DB SQL database.
     *
     * Syntax:
     * ```
     * az cosmosdb sql container show --account-name
     *                                --database-name
     *                                --name
     *                                --resource-group
     *                                [--query-examples]
     *                                [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} name Container name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_container_show(accountName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_sql_container_show_command_builder {
        return new az_cosmosdb_sql_container_show_command_builder(this, accountName, databaseName, name, resourceGroup);
    }

    /**
     * Update an SQL container under an Azure Cosmos DB SQL database.
     *
     * Syntax:
     * ```
     * az cosmosdb sql container update --account-name
     *                                  --database-name
     *                                  --name
     *                                  --resource-group
     *                                  [--idx]
     *                                  [--subscription]
     *                                  [--ttl]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} databaseName Database name.
     * @param {string} name Container name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_container_update(accountName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_sql_container_update_command_builder {
        return new az_cosmosdb_sql_container_update_command_builder(this, accountName, databaseName, name, resourceGroup);
    }
}

/** Manage throughput of SQL database under an Azure Cosmos DB account. */
export class az_cosmosdb_sql_database_throughput implements ICommandParent<any> {
    commandPath = "az cosmosdb sql database throughput";

    /**
     * Migrate the throughput of the SQL database between autoscale and manually provisioned.
     *
     * Syntax:
     * ```
     * az cosmosdb sql database throughput migrate --account-name
     *                                             --name
     *                                             --resource-group
     *                                             --throughput-type {autoscale, manual}
     *                                             [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'autoscale' | 'manual'} throughputType The type of throughput to migrate to.
     */
    az_cosmosdb_sql_database_throughput_migrate(accountName: string, name: string, resourceGroup: string, throughputType: 'autoscale' | 'manual'): az_cosmosdb_sql_database_throughput_migrate_command_builder {
        return new az_cosmosdb_sql_database_throughput_migrate_command_builder(this, accountName, name, resourceGroup, throughputType);
    }

    /**
     * Get the throughput of the SQL database under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb sql database throughput show --account-name
     *                                          --name
     *                                          --resource-group
     *                                          [--query-examples]
     *                                          [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_database_throughput_show(accountName: string, name: string, resourceGroup: string): az_cosmosdb_sql_database_throughput_show_command_builder {
        return new az_cosmosdb_sql_database_throughput_show_command_builder(this, accountName, name, resourceGroup);
    }

    /**
     * Update the throughput of the SQL database under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb sql database throughput update --account-name
     *                                            --name
     *                                            --resource-group
     *                                            [--max-throughput]
     *                                            [--subscription]
     *                                            [--throughput]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_database_throughput_update(accountName: string, name: string, resourceGroup: string): az_cosmosdb_sql_database_throughput_update_command_builder {
        return new az_cosmosdb_sql_database_throughput_update_command_builder(this, accountName, name, resourceGroup);
    }
}

/** Manage Azure Cosmos DB SQL databases. */
export class az_cosmosdb_sql_database implements ICommandParent<any> {
    commandPath = "az cosmosdb sql database";

    /**
     * Create an SQL database under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb sql database create --account-name
     *                                 --name
     *                                 --resource-group
     *                                 [--max-throughput]
     *                                 [--subscription]
     *                                 [--throughput]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_database_create(accountName: string, name: string, resourceGroup: string): az_cosmosdb_sql_database_create_command_builder {
        return new az_cosmosdb_sql_database_create_command_builder(this, accountName, name, resourceGroup);
    }

    /**
     * Delete the SQL database under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb sql database delete --account-name
     *                                 --name
     *                                 --resource-group
     *                                 [--subscription]
     *                                 [--yes]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_database_delete(accountName: string, name: string, resourceGroup: string): az_cosmosdb_sql_database_delete_command_builder {
        return new az_cosmosdb_sql_database_delete_command_builder(this, accountName, name, resourceGroup);
    }

    /**
     * Checks if an Azure Cosmos DB SQL database exists.
     *
     * Syntax:
     * ```
     * az cosmosdb sql database exists --account-name
     *                                 --name
     *                                 --resource-group
     *                                 [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_database_exists(accountName: string, name: string, resourceGroup: string): az_cosmosdb_sql_database_exists_command_builder {
        return new az_cosmosdb_sql_database_exists_command_builder(this, accountName, name, resourceGroup);
    }

    /**
     * List the SQL databases under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb sql database list --account-name
     *                               --resource-group
     *                               [--query-examples]
     *                               [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_database_list(accountName: string, resourceGroup: string): az_cosmosdb_sql_database_list_command_builder {
        return new az_cosmosdb_sql_database_list_command_builder(this, accountName, resourceGroup);
    }

    /**
     * Show the details of a SQL database under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb sql database show --account-name
     *                               --name
     *                               --resource-group
     *                               [--query-examples]
     *                               [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_database_show(accountName: string, name: string, resourceGroup: string): az_cosmosdb_sql_database_show_command_builder {
        return new az_cosmosdb_sql_database_show_command_builder(this, accountName, name, resourceGroup);
    }
}

/** Manage Azure Cosmos DB SQL stored procedures. */
export class az_cosmosdb_sql_stored_procedure implements ICommandParent<any> {
    commandPath = "az cosmosdb sql stored-procedure";

    /**
     * Create an SQL stored procedure under an Azure Cosmos DB SQL container.
     *
     * Syntax:
     * ```
     * az cosmosdb sql stored-procedure create --account-name
     *                                         --body
     *                                         --container-name
     *                                         --database-name
     *                                         --name
     *                                         --resource-group
     *                                         [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} body StoredProcedure body, you can enter it as a string or as a file, e.g., --body @sprocbody-file.json.
     * @param {string} containerName Container name.
     * @param {string} databaseName Database name.
     * @param {string} name StoredProcedure name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_stored_procedure_create(accountName: string, body: string, containerName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_sql_stored_procedure_create_command_builder {
        return new az_cosmosdb_sql_stored_procedure_create_command_builder(this, accountName, body, containerName, databaseName, name, resourceGroup);
    }

    /**
     * Delete the SQL stored procedure under an Azure Cosmos DB SQL container.
     *
     * Syntax:
     * ```
     * az cosmosdb sql stored-procedure delete --account-name
     *                                         --container-name
     *                                         --database-name
     *                                         --name
     *                                         --resource-group
     *                                         [--subscription]
     *                                         [--yes]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} containerName Container name.
     * @param {string} databaseName Database name.
     * @param {string} name StoredProcedure name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_stored_procedure_delete(accountName: string, containerName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_sql_stored_procedure_delete_command_builder {
        return new az_cosmosdb_sql_stored_procedure_delete_command_builder(this, accountName, containerName, databaseName, name, resourceGroup);
    }

    /**
     * List the SQL stored procedures under an Azure Cosmos DB SQL container.
     *
     * Syntax:
     * ```
     * az cosmosdb sql stored-procedure list --account-name
     *                                       --container-name
     *                                       --database-name
     *                                       --resource-group
     *                                       [--query-examples]
     *                                       [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} containerName Container name.
     * @param {string} databaseName Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_stored_procedure_list(accountName: string, containerName: string, databaseName: string, resourceGroup: string): az_cosmosdb_sql_stored_procedure_list_command_builder {
        return new az_cosmosdb_sql_stored_procedure_list_command_builder(this, accountName, containerName, databaseName, resourceGroup);
    }

    /**
     * Show the details of a SQL stored procedure under an Azure Cosmos DB SQL container.
     *
     * Syntax:
     * ```
     * az cosmosdb sql stored-procedure show --account-name
     *                                       --container-name
     *                                       --database-name
     *                                       --name
     *                                       --resource-group
     *                                       [--query-examples]
     *                                       [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} containerName Container name.
     * @param {string} databaseName Database name.
     * @param {string} name StoredProcedure name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_stored_procedure_show(accountName: string, containerName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_sql_stored_procedure_show_command_builder {
        return new az_cosmosdb_sql_stored_procedure_show_command_builder(this, accountName, containerName, databaseName, name, resourceGroup);
    }

    /**
     * Creates or Updates an Azure Cosmos DB SQL stored procedure.
     *
     * Syntax:
     * ```
     * az cosmosdb sql stored-procedure update --account-name
     *                                         --body
     *                                         --container-name
     *                                         --database-name
     *                                         --name
     *                                         --resource-group
     *                                         [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} body StoredProcedure body, you can enter it as a string or as a file, e.g., --body @sprocbody-file.json.
     * @param {string} containerName Container name.
     * @param {string} databaseName Database name.
     * @param {string} name StoredProcedure name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_stored_procedure_update(accountName: string, body: string, containerName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_sql_stored_procedure_update_command_builder {
        return new az_cosmosdb_sql_stored_procedure_update_command_builder(this, accountName, body, containerName, databaseName, name, resourceGroup);
    }
}

/** Manage Azure Cosmos DB SQL triggers. */
export class az_cosmosdb_sql_trigger implements ICommandParent<any> {
    commandPath = "az cosmosdb sql trigger";

    /**
     * Create an SQL trigger under an Azure Cosmos DB SQL container.
     *
     * Syntax:
     * ```
     * az cosmosdb sql trigger create --account-name
     *                                --body
     *                                --container-name
     *                                --database-name
     *                                --name
     *                                --resource-group
     *                                [--operation {All, Create, Delete, Replace, Update}]
     *                                [--subscription]
     *                                [--type {Post, Pre}]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} body Trigger body, you can enter it as a string or as a file, e.g., --body @triggerbody-file.json.
     * @param {string} containerName Container name.
     * @param {string} databaseName Database name.
     * @param {string} name Trigger name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_trigger_create(accountName: string, body: string, containerName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_sql_trigger_create_command_builder {
        return new az_cosmosdb_sql_trigger_create_command_builder(this, accountName, body, containerName, databaseName, name, resourceGroup);
    }

    /**
     * Delete the SQL trigger under an Azure Cosmos DB SQL container.
     *
     * Syntax:
     * ```
     * az cosmosdb sql trigger delete --account-name
     *                                --container-name
     *                                --database-name
     *                                --name
     *                                --resource-group
     *                                [--subscription]
     *                                [--yes]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} containerName Container name.
     * @param {string} databaseName Database name.
     * @param {string} name Trigger name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_trigger_delete(accountName: string, containerName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_sql_trigger_delete_command_builder {
        return new az_cosmosdb_sql_trigger_delete_command_builder(this, accountName, containerName, databaseName, name, resourceGroup);
    }

    /**
     * List the SQL triggers under an Azure Cosmos DB SQL container.
     *
     * Syntax:
     * ```
     * az cosmosdb sql trigger list --account-name
     *                              --container-name
     *                              --database-name
     *                              --resource-group
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} containerName Container name.
     * @param {string} databaseName Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_trigger_list(accountName: string, containerName: string, databaseName: string, resourceGroup: string): az_cosmosdb_sql_trigger_list_command_builder {
        return new az_cosmosdb_sql_trigger_list_command_builder(this, accountName, containerName, databaseName, resourceGroup);
    }

    /**
     * Show the details of a SQL trigger under an Azure Cosmos DB SQL container.
     *
     * Syntax:
     * ```
     * az cosmosdb sql trigger show --account-name
     *                              --container-name
     *                              --database-name
     *                              --name
     *                              --resource-group
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} containerName Container name.
     * @param {string} databaseName Database name.
     * @param {string} name Trigger name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_trigger_show(accountName: string, containerName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_sql_trigger_show_command_builder {
        return new az_cosmosdb_sql_trigger_show_command_builder(this, accountName, containerName, databaseName, name, resourceGroup);
    }

    /**
     * Updates an Azure Cosmos DB SQL trigger.
     *
     * Syntax:
     * ```
     * az cosmosdb sql trigger update --account-name
     *                                --container-name
     *                                --database-name
     *                                --name
     *                                --resource-group
     *                                [--body]
     *                                [--operation {All, Create, Delete, Replace, Update}]
     *                                [--subscription]
     *                                [--type {Post, Pre}]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} containerName Container name.
     * @param {string} databaseName Database name.
     * @param {string} name Trigger name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_trigger_update(accountName: string, containerName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_sql_trigger_update_command_builder {
        return new az_cosmosdb_sql_trigger_update_command_builder(this, accountName, containerName, databaseName, name, resourceGroup);
    }
}

/** Manage Azure Cosmos DB SQL user defined functions. */
export class az_cosmosdb_sql_user_defined_function implements ICommandParent<any> {
    commandPath = "az cosmosdb sql user-defined-function";

    /**
     * Create an SQL user defined function under an Azure Cosmos DB SQL container.
     *
     * Syntax:
     * ```
     * az cosmosdb sql user-defined-function create --account-name
     *                                              --body
     *                                              --container-name
     *                                              --database-name
     *                                              --name
     *                                              --resource-group
     *                                              [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} body UserDefinedFunction body, you can enter it as a string or as a file, e.g., --body @udfbody-file.json.
     * @param {string} containerName Container name.
     * @param {string} databaseName Database name.
     * @param {string} name UserDefinedFunction name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_user_defined_function_create(accountName: string, body: string, containerName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_sql_user_defined_function_create_command_builder {
        return new az_cosmosdb_sql_user_defined_function_create_command_builder(this, accountName, body, containerName, databaseName, name, resourceGroup);
    }

    /**
     * Delete the SQL user defined function under an Azure Cosmos DB SQL container.
     *
     * Syntax:
     * ```
     * az cosmosdb sql user-defined-function delete --account-name
     *                                              --container-name
     *                                              --database-name
     *                                              --name
     *                                              --resource-group
     *                                              [--subscription]
     *                                              [--yes]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} containerName Container name.
     * @param {string} databaseName Database name.
     * @param {string} name UserDefinedFunction name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_user_defined_function_delete(accountName: string, containerName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_sql_user_defined_function_delete_command_builder {
        return new az_cosmosdb_sql_user_defined_function_delete_command_builder(this, accountName, containerName, databaseName, name, resourceGroup);
    }

    /**
     * List the SQL user defined functions under an Azure Cosmos DB SQL container.
     *
     * Syntax:
     * ```
     * az cosmosdb sql user-defined-function list --account-name
     *                                            --container-name
     *                                            --database-name
     *                                            --resource-group
     *                                            [--query-examples]
     *                                            [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} containerName Container name.
     * @param {string} databaseName Database name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_user_defined_function_list(accountName: string, containerName: string, databaseName: string, resourceGroup: string): az_cosmosdb_sql_user_defined_function_list_command_builder {
        return new az_cosmosdb_sql_user_defined_function_list_command_builder(this, accountName, containerName, databaseName, resourceGroup);
    }

    /**
     * Show the details of a SQL user defined function under an Azure Cosmos DB SQL container.
     *
     * Syntax:
     * ```
     * az cosmosdb sql user-defined-function show --account-name
     *                                            --container-name
     *                                            --database-name
     *                                            --name
     *                                            --resource-group
     *                                            [--query-examples]
     *                                            [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} containerName Container name.
     * @param {string} databaseName Database name.
     * @param {string} name UserDefinedFunction name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_user_defined_function_show(accountName: string, containerName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_sql_user_defined_function_show_command_builder {
        return new az_cosmosdb_sql_user_defined_function_show_command_builder(this, accountName, containerName, databaseName, name, resourceGroup);
    }

    /**
     * Creates or Updates an Azure Cosmos DB SQL user defined function.
     *
     * Syntax:
     * ```
     * az cosmosdb sql user-defined-function update --account-name
     *                                              --body
     *                                              --container-name
     *                                              --database-name
     *                                              --name
     *                                              --resource-group
     *                                              [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} body UserDefinedFunction body, you can enter it as a string or as a file, e.g., --body @udfbody-file.json.
     * @param {string} containerName Container name.
     * @param {string} databaseName Database name.
     * @param {string} name UserDefinedFunction name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_sql_user_defined_function_update(accountName: string, body: string, containerName: string, databaseName: string, name: string, resourceGroup: string): az_cosmosdb_sql_user_defined_function_update_command_builder {
        return new az_cosmosdb_sql_user_defined_function_update_command_builder(this, accountName, body, containerName, databaseName, name, resourceGroup);
    }
}

/** Manage SQL resources of Azure Cosmos DB account. */
export class az_cosmosdb_sql {
}

/** Manage throughput of Table under an Azure Cosmos DB account. */
export class az_cosmosdb_table_throughput implements ICommandParent<any> {
    commandPath = "az cosmosdb table throughput";

    /**
     * Migrate the throughput of the Table between autoscale and manually provisioned.
     *
     * Syntax:
     * ```
     * az cosmosdb table throughput migrate --account-name
     *                                      --name
     *                                      --resource-group
     *                                      --throughput-type {autoscale, manual}
     *                                      [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Table name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'autoscale' | 'manual'} throughputType The type of throughput to migrate to.
     */
    az_cosmosdb_table_throughput_migrate(accountName: string, name: string, resourceGroup: string, throughputType: 'autoscale' | 'manual'): az_cosmosdb_table_throughput_migrate_command_builder {
        return new az_cosmosdb_table_throughput_migrate_command_builder(this, accountName, name, resourceGroup, throughputType);
    }

    /**
     * Get the throughput of the Table under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb table throughput show --account-name
     *                                   --name
     *                                   --resource-group
     *                                   [--query-examples]
     *                                   [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Table name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_table_throughput_show(accountName: string, name: string, resourceGroup: string): az_cosmosdb_table_throughput_show_command_builder {
        return new az_cosmosdb_table_throughput_show_command_builder(this, accountName, name, resourceGroup);
    }

    /**
     * Update the throughput of the Table under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb table throughput update --account-name
     *                                     --name
     *                                     --resource-group
     *                                     [--max-throughput]
     *                                     [--subscription]
     *                                     [--throughput]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Table name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_table_throughput_update(accountName: string, name: string, resourceGroup: string): az_cosmosdb_table_throughput_update_command_builder {
        return new az_cosmosdb_table_throughput_update_command_builder(this, accountName, name, resourceGroup);
    }
}

/** Manage Table resources of Azure Cosmos DB account. */
export class az_cosmosdb_table implements ICommandParent<any> {
    commandPath = "az cosmosdb table";

    /**
     * Create an Table under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb table create --account-name
     *                          --name
     *                          --resource-group
     *                          [--max-throughput]
     *                          [--subscription]
     *                          [--throughput]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Table name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_table_create(accountName: string, name: string, resourceGroup: string): az_cosmosdb_table_create_command_builder {
        return new az_cosmosdb_table_create_command_builder(this, accountName, name, resourceGroup);
    }

    /**
     * Delete the Table under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb table delete --account-name
     *                          --name
     *                          --resource-group
     *                          [--subscription]
     *                          [--yes]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Table name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_table_delete(accountName: string, name: string, resourceGroup: string): az_cosmosdb_table_delete_command_builder {
        return new az_cosmosdb_table_delete_command_builder(this, accountName, name, resourceGroup);
    }

    /**
     * Checks if an Azure Cosmos DB table exists.
     *
     * Syntax:
     * ```
     * az cosmosdb table exists --account-name
     *                          --name
     *                          --resource-group
     *                          [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Table name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_table_exists(accountName: string, name: string, resourceGroup: string): az_cosmosdb_table_exists_command_builder {
        return new az_cosmosdb_table_exists_command_builder(this, accountName, name, resourceGroup);
    }

    /**
     * List the Tables under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb table list --account-name
     *                        --resource-group
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_table_list(accountName: string, resourceGroup: string): az_cosmosdb_table_list_command_builder {
        return new az_cosmosdb_table_list_command_builder(this, accountName, resourceGroup);
    }

    /**
     * Show the details of a Table under an Azure Cosmos DB account.
     *
     * Syntax:
     * ```
     * az cosmosdb table show --account-name
     *                        --name
     *                        --resource-group
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} accountName Cosmosdb account name.
     * @param {string} name Table name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_table_show(accountName: string, name: string, resourceGroup: string): az_cosmosdb_table_show_command_builder {
        return new az_cosmosdb_table_show_command_builder(this, accountName, name, resourceGroup);
    }
}

/** Manage Azure Cosmos DB database accounts. */
export class az_cosmosdb implements ICommandParent<any> {
    commandPath = "az cosmosdb";

    /**
     * Checks if an Azure Cosmos DB account name exists.
     *
     * Syntax:
     * ```
     * az cosmosdb check-name-exists [--ids]
     *                               [--name]
     *                               [--subscription]
     * ```
     */
    az_cosmosdb_check_name_exists(): az_cosmosdb_check_name_exists_command_builder {
        return new az_cosmosdb_check_name_exists_command_builder(this);
    }

    /**
     * Creates a new Azure Cosmos DB database account.
     *
     * Syntax:
     * ```
     * az cosmosdb create --name
     *                    --resource-group
     *                    [--capabilities]
     *                    [--default-consistency-level {BoundedStaleness, ConsistentPrefix, Eventual, Session, Strong}]
     *                    [--disable-key-based-metadata-write-access {false, true}]
     *                    [--enable-analytical-storage {false, true}]
     *                    [--enable-automatic-failover {false, true}]
     *                    [--enable-free-tier {false, true}]
     *                    [--enable-multiple-write-locations {false, true}]
     *                    [--enable-public-network {false, true}]
     *                    [--enable-virtual-network {false, true}]
     *                    [--ip-range-filter]
     *                    [--key-uri]
     *                    [--kind {GlobalDocumentDB, MongoDB, Parse}]
     *                    [--locations]
     *                    [--max-interval]
     *                    [--max-staleness-prefix]
     *                    [--server-version {3.2, 3.6}]
     *                    [--subscription]
     *                    [--tags]
     *                    [--virtual-network-rules]
     * ```
     *
     * @param {string} name Name of the Cosmos DB database account.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cosmosdb_create(name: string, resourceGroup: string): az_cosmosdb_create_command_builder {
        return new az_cosmosdb_create_command_builder(this, name, resourceGroup);
    }

    /**
     * Deletes an Azure Cosmos DB database account.
     *
     * Syntax:
     * ```
     * az cosmosdb delete [--ids]
     *                    [--name]
     *                    [--resource-group]
     *                    [--subscription]
     *                    [--yes]
     * ```
     */
    az_cosmosdb_delete(): az_cosmosdb_delete_command_builder {
        return new az_cosmosdb_delete_command_builder(this);
    }

    /**
     * Changes the failover priority for the Azure Cosmos DB database account.
     *
     * Syntax:
     * ```
     * az cosmosdb failover-priority-change --failover-policies
     *                                      [--ids]
     *                                      [--name]
     *                                      [--resource-group]
     *                                      [--subscription]
     * ```
     *
     * @param {string} failoverPolicies Space-separated failover policies in 'regionName=failoverPriority' format. E.g eastus=0 westus=1.
     */
    az_cosmosdb_failover_priority_change(failoverPolicies: string): az_cosmosdb_failover_priority_change_command_builder {
        return new az_cosmosdb_failover_priority_change_command_builder(this, failoverPolicies);
    }

    /**
     * List Azure Cosmos DB database accounts.
     *
     * Syntax:
     * ```
     * az cosmosdb list [--query-examples]
     *                  [--resource-group]
     *                  [--subscription]
     * ```
     */
    az_cosmosdb_list(): az_cosmosdb_list_command_builder {
        return new az_cosmosdb_list_command_builder(this);
    }

    /**
     * List the connection strings for a Azure Cosmos DB database account.
     *
     * Syntax:
     * ```
     * az cosmosdb list-connection-strings [--ids]
     *                                     [--name]
     *                                     [--resource-group]
     *                                     [--subscription]
     * ```
     */
    az_cosmosdb_list_connection_strings(): az_cosmosdb_list_connection_strings_command_builder {
        return new az_cosmosdb_list_connection_strings_command_builder(this);
    }

    /**
     * List the access keys for a Azure Cosmos DB database account.
     *
     * Syntax:
     * ```
     * az cosmosdb list-keys [--ids]
     *                       [--name]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    az_cosmosdb_list_keys(): az_cosmosdb_list_keys_command_builder {
        return new az_cosmosdb_list_keys_command_builder(this);
    }

    /**
     * List the read-only access keys for a Azure Cosmos DB database account.
     *
     * Syntax:
     * ```
     * az cosmosdb list-read-only-keys [--ids]
     *                                 [--name]
     *                                 [--resource-group]
     *                                 [--subscription]
     * ```
     */
    az_cosmosdb_list_read_only_keys(): az_cosmosdb_list_read_only_keys_command_builder {
        return new az_cosmosdb_list_read_only_keys_command_builder(this);
    }

    /**
     * Regenerate an access key for a Azure Cosmos DB database account.
     *
     * Syntax:
     * ```
     * az cosmosdb regenerate-key --key-kind {primary, primaryReadonly, secondary, secondaryReadonly}
     *                            [--ids]
     *                            [--name]
     *                            [--resource-group]
     *                            [--subscription]
     * ```
     *
     * @param {'primary' | 'primaryReadonly' | 'secondary' | 'secondaryReadonly'} keyKind The access key to regenerate.
     */
    az_cosmosdb_regenerate_key(keyKind: 'primary' | 'primaryReadonly' | 'secondary' | 'secondaryReadonly'): az_cosmosdb_regenerate_key_command_builder {
        return new az_cosmosdb_regenerate_key_command_builder(this, keyKind);
    }

    /**
     * Get the details of an Azure Cosmos DB database account.
     *
     * Syntax:
     * ```
     * az cosmosdb show [--ids]
     *                  [--name]
     *                  [--query-examples]
     *                  [--resource-group]
     *                  [--subscription]
     * ```
     */
    az_cosmosdb_show(): az_cosmosdb_show_command_builder {
        return new az_cosmosdb_show_command_builder(this);
    }

    /**
     * Update an Azure Cosmos DB database account.
     *
     * Syntax:
     * ```
     * az cosmosdb update [--capabilities]
     *                    [--default-consistency-level {BoundedStaleness, ConsistentPrefix, Eventual, Session, Strong}]
     *                    [--disable-key-based-metadata-write-access {false, true}]
     *                    [--enable-analytical-storage {false, true}]
     *                    [--enable-automatic-failover {false, true}]
     *                    [--enable-multiple-write-locations {false, true}]
     *                    [--enable-public-network {false, true}]
     *                    [--enable-virtual-network {false, true}]
     *                    [--ids]
     *                    [--ip-range-filter]
     *                    [--locations]
     *                    [--max-interval]
     *                    [--max-staleness-prefix]
     *                    [--name]
     *                    [--resource-group]
     *                    [--subscription]
     *                    [--tags]
     *                    [--virtual-network-rules]
     * ```
     */
    az_cosmosdb_update(): az_cosmosdb_update_command_builder {
        return new az_cosmosdb_update_command_builder(this);
    }
}

/**
 * Migrate the throughput of the Cassandra keyspace between autoscale and manually provisioned.
 *
 * Syntax:
 * ```
 * az cosmosdb cassandra keyspace throughput migrate --account-name
 *                                                   --name
 *                                                   --resource-group
 *                                                   --throughput-type {autoscale, manual}
 *                                                   [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Keyspace name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'autoscale' | 'manual'} throughputType The type of throughput to migrate to.
 */
class az_cosmosdb_cassandra_keyspace_throughput_migrate_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string, throughputType: 'autoscale' | 'manual') {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.throughputType(throughputType)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_cassandra_keyspace_throughput_migrate_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Keyspace name. */
    name(value: string): az_cosmosdb_cassandra_keyspace_throughput_migrate_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_cassandra_keyspace_throughput_migrate_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The type of throughput to migrate to. */
    throughputType(value: 'autoscale' | 'manual'): az_cosmosdb_cassandra_keyspace_throughput_migrate_command_builder {
        this.setFlag("--throughput-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_cassandra_keyspace_throughput_migrate_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the throughput of the Cassandra keyspace under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb cassandra keyspace throughput show --account-name
 *                                                --name
 *                                                --resource-group
 *                                                [--query-examples]
 *                                                [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Keyspace name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_cassandra_keyspace_throughput_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_cassandra_keyspace_throughput_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Keyspace name. */
    name(value: string): az_cosmosdb_cassandra_keyspace_throughput_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_cassandra_keyspace_throughput_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_cassandra_keyspace_throughput_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_cassandra_keyspace_throughput_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update the throughput of the Cassandra keyspace under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb cassandra keyspace throughput update --account-name
 *                                                  --name
 *                                                  --resource-group
 *                                                  [--max-throughput]
 *                                                  [--subscription]
 *                                                  [--throughput]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Keyspace name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_cassandra_keyspace_throughput_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_cassandra_keyspace_throughput_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Keyspace name. */
    name(value: string): az_cosmosdb_cassandra_keyspace_throughput_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_cassandra_keyspace_throughput_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    maxThroughput(value: string): az_cosmosdb_cassandra_keyspace_throughput_update_command_builder {
        this.setFlag("--max-throughput", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_cassandra_keyspace_throughput_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The throughput of Cassandra keyspace (RU/s). */
    throughput(value: string): az_cosmosdb_cassandra_keyspace_throughput_update_command_builder {
        this.setFlag("--throughput", value);
        return this;
    }
}

/**
 * Create an Cassandra keyspace under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb cassandra keyspace create --account-name
 *                                       --name
 *                                       --resource-group
 *                                       [--max-throughput]
 *                                       [--subscription]
 *                                       [--throughput]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Keyspace name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_cassandra_keyspace_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_cassandra_keyspace_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Keyspace name. */
    name(value: string): az_cosmosdb_cassandra_keyspace_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_cassandra_keyspace_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    maxThroughput(value: string): az_cosmosdb_cassandra_keyspace_create_command_builder {
        this.setFlag("--max-throughput", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_cassandra_keyspace_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The throughput of Cassandra keyspace (RU/s). Default value is 400. */
    throughput(value: string): az_cosmosdb_cassandra_keyspace_create_command_builder {
        this.setFlag("--throughput", value);
        return this;
    }
}

/**
 * Delete the Cassandra keyspace under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb cassandra keyspace delete --account-name
 *                                       --name
 *                                       --resource-group
 *                                       [--subscription]
 *                                       [--yes]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Keyspace name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_cassandra_keyspace_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_cassandra_keyspace_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Keyspace name. */
    name(value: string): az_cosmosdb_cassandra_keyspace_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_cassandra_keyspace_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_cassandra_keyspace_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_cosmosdb_cassandra_keyspace_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * Checks if an Azure Cosmos DB Cassandra keyspace exists.
 *
 * Syntax:
 * ```
 * az cosmosdb cassandra keyspace exists --account-name
 *                                       --name
 *                                       --resource-group
 *                                       [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Keyspace name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_cassandra_keyspace_exists_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_cassandra_keyspace_exists_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Keyspace name. */
    name(value: string): az_cosmosdb_cassandra_keyspace_exists_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_cassandra_keyspace_exists_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_cassandra_keyspace_exists_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the Cassandra keyspaces under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb cassandra keyspace list --account-name
 *                                     --resource-group
 *                                     [--query-examples]
 *                                     [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_cassandra_keyspace_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_cassandra_keyspace_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_cassandra_keyspace_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_cassandra_keyspace_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_cassandra_keyspace_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show the details of a Cassandra keyspace under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb cassandra keyspace show --account-name
 *                                     --name
 *                                     --resource-group
 *                                     [--query-examples]
 *                                     [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Keyspace name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_cassandra_keyspace_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_cassandra_keyspace_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Keyspace name. */
    name(value: string): az_cosmosdb_cassandra_keyspace_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_cassandra_keyspace_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_cassandra_keyspace_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_cassandra_keyspace_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Migrate the throughput of the Cassandra table between autoscale and manually provisioned.
 *
 * Syntax:
 * ```
 * az cosmosdb cassandra table throughput migrate --account-name
 *                                                --keyspace-name
 *                                                --name
 *                                                --resource-group
 *                                                --throughput-type {autoscale, manual}
 *                                                [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} keyspaceName Keyspace name.
 * @param {string} name Table name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'autoscale' | 'manual'} throughputType The type of throughput to migrate to.
 */
class az_cosmosdb_cassandra_table_throughput_migrate_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, keyspaceName: string, name: string, resourceGroup: string, throughputType: 'autoscale' | 'manual') {
        super(commandParent);
        this.accountName(accountName)
        this.keyspaceName(keyspaceName)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.throughputType(throughputType)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_cassandra_table_throughput_migrate_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Keyspace name. */
    keyspaceName(value: string): az_cosmosdb_cassandra_table_throughput_migrate_command_builder {
        this.setFlag("--keyspace-name", value);
        return this;
    }

    /** Table name. */
    name(value: string): az_cosmosdb_cassandra_table_throughput_migrate_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_cassandra_table_throughput_migrate_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The type of throughput to migrate to. */
    throughputType(value: 'autoscale' | 'manual'): az_cosmosdb_cassandra_table_throughput_migrate_command_builder {
        this.setFlag("--throughput-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_cassandra_table_throughput_migrate_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the throughput of the Cassandra table under an Azure Cosmos DB Cassandra keyspace.
 *
 * Syntax:
 * ```
 * az cosmosdb cassandra table throughput show --account-name
 *                                             --keyspace-name
 *                                             --name
 *                                             --resource-group
 *                                             [--query-examples]
 *                                             [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} keyspaceName Keyspace name.
 * @param {string} name Table name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_cassandra_table_throughput_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, keyspaceName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.keyspaceName(keyspaceName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_cassandra_table_throughput_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Keyspace name. */
    keyspaceName(value: string): az_cosmosdb_cassandra_table_throughput_show_command_builder {
        this.setFlag("--keyspace-name", value);
        return this;
    }

    /** Table name. */
    name(value: string): az_cosmosdb_cassandra_table_throughput_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_cassandra_table_throughput_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_cassandra_table_throughput_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_cassandra_table_throughput_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update the throughput of the Cassandra table under an Azure Cosmos DB Cassandra keyspace.
 *
 * Syntax:
 * ```
 * az cosmosdb cassandra table throughput update --account-name
 *                                               --keyspace-name
 *                                               --name
 *                                               --resource-group
 *                                               [--max-throughput]
 *                                               [--subscription]
 *                                               [--throughput]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} keyspaceName Keyspace name.
 * @param {string} name Table name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_cassandra_table_throughput_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, keyspaceName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.keyspaceName(keyspaceName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_cassandra_table_throughput_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Keyspace name. */
    keyspaceName(value: string): az_cosmosdb_cassandra_table_throughput_update_command_builder {
        this.setFlag("--keyspace-name", value);
        return this;
    }

    /** Table name. */
    name(value: string): az_cosmosdb_cassandra_table_throughput_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_cassandra_table_throughput_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    maxThroughput(value: string): az_cosmosdb_cassandra_table_throughput_update_command_builder {
        this.setFlag("--max-throughput", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_cassandra_table_throughput_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The throughput of Cassandra table (RU/s). */
    throughput(value: string): az_cosmosdb_cassandra_table_throughput_update_command_builder {
        this.setFlag("--throughput", value);
        return this;
    }
}

/**
 * Create an Cassandra table under an Azure Cosmos DB Cassandra keyspace.
 *
 * Syntax:
 * ```
 * az cosmosdb cassandra table create --account-name
 *                                    --keyspace-name
 *                                    --name
 *                                    --resource-group
 *                                    --schema
 *                                    [--analytical-storage-ttl]
 *                                    [--max-throughput]
 *                                    [--subscription]
 *                                    [--throughput]
 *                                    [--ttl]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} keyspaceName Keyspace name.
 * @param {string} name Table name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} schema Schema, you can enter it as a string or as a file, e.g., --schema @schema-file.json or --schema "{"columns": [{"name": "columnA","type": "uuid"}, {"name": "columnB","type": "Ascii"}],"partitionKeys": [{"name": "columnA"}]}".
 */
class az_cosmosdb_cassandra_table_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, keyspaceName: string, name: string, resourceGroup: string, schema: string) {
        super(commandParent);
        this.accountName(accountName)
        this.keyspaceName(keyspaceName)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.schema(schema)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_cassandra_table_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Keyspace name. */
    keyspaceName(value: string): az_cosmosdb_cassandra_table_create_command_builder {
        this.setFlag("--keyspace-name", value);
        return this;
    }

    /** Table name. */
    name(value: string): az_cosmosdb_cassandra_table_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_cassandra_table_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Schema, you can enter it as a string or as a file, e.g., --schema @schema-file.json or --schema "{"columns": [{"name": "columnA","type": "uuid"}, {"name": "columnB","type": "Ascii"}],"partitionKeys": [{"name": "columnA"}]}". */
    schema(value: string): az_cosmosdb_cassandra_table_create_command_builder {
        this.setFlag("--schema", value);
        return this;
    }

    /** Analytical TTL, when analytical storage is enabled. */
    analyticalStorageTtl(value: string): az_cosmosdb_cassandra_table_create_command_builder {
        this.setFlag("--analytical-storage-ttl", value);
        return this;
    }

    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    maxThroughput(value: string): az_cosmosdb_cassandra_table_create_command_builder {
        this.setFlag("--max-throughput", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_cassandra_table_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The throughput of Cassandra table (RU/s). Default value is 400. Omit this parameter if the keyspace has shared throughput unless the table should have dedicated throughput. */
    throughput(value: string): az_cosmosdb_cassandra_table_create_command_builder {
        this.setFlag("--throughput", value);
        return this;
    }

    /** Default TTL. If the value is missing or set to "-1", items don’t expire. If the value is set to "n", items will expire "n" seconds after last modified time. */
    ttl(value: string): az_cosmosdb_cassandra_table_create_command_builder {
        this.setFlag("--ttl", value);
        return this;
    }
}

/**
 * Delete the Cassandra table under an Azure Cosmos DB Cassandra keyspace.
 *
 * Syntax:
 * ```
 * az cosmosdb cassandra table delete --account-name
 *                                    --keyspace-name
 *                                    --name
 *                                    --resource-group
 *                                    [--subscription]
 *                                    [--yes]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} keyspaceName Keyspace name.
 * @param {string} name Table name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_cassandra_table_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, keyspaceName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.keyspaceName(keyspaceName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_cassandra_table_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Keyspace name. */
    keyspaceName(value: string): az_cosmosdb_cassandra_table_delete_command_builder {
        this.setFlag("--keyspace-name", value);
        return this;
    }

    /** Table name. */
    name(value: string): az_cosmosdb_cassandra_table_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_cassandra_table_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_cassandra_table_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_cosmosdb_cassandra_table_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * Checks if an Azure Cosmos DB Cassandra table exists.
 *
 * Syntax:
 * ```
 * az cosmosdb cassandra table exists --account-name
 *                                    --keyspace-name
 *                                    --name
 *                                    --resource-group
 *                                    [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} keyspaceName Keyspace name.
 * @param {string} name Table name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_cassandra_table_exists_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, keyspaceName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.keyspaceName(keyspaceName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_cassandra_table_exists_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Keyspace name. */
    keyspaceName(value: string): az_cosmosdb_cassandra_table_exists_command_builder {
        this.setFlag("--keyspace-name", value);
        return this;
    }

    /** Table name. */
    name(value: string): az_cosmosdb_cassandra_table_exists_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_cassandra_table_exists_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_cassandra_table_exists_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the Cassandra tables under an Azure Cosmos DB Cassandra keyspace.
 *
 * Syntax:
 * ```
 * az cosmosdb cassandra table list --account-name
 *                                  --keyspace-name
 *                                  --resource-group
 *                                  [--query-examples]
 *                                  [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} keyspaceName Keyspace name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_cassandra_table_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, keyspaceName: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.keyspaceName(keyspaceName)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_cassandra_table_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Keyspace name. */
    keyspaceName(value: string): az_cosmosdb_cassandra_table_list_command_builder {
        this.setFlag("--keyspace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_cassandra_table_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_cassandra_table_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_cassandra_table_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show the details of a Cassandra table under an Azure Cosmos DB Cassandra keyspace.
 *
 * Syntax:
 * ```
 * az cosmosdb cassandra table show --account-name
 *                                  --keyspace-name
 *                                  --name
 *                                  --resource-group
 *                                  [--query-examples]
 *                                  [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} keyspaceName Keyspace name.
 * @param {string} name Table name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_cassandra_table_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, keyspaceName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.keyspaceName(keyspaceName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_cassandra_table_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Keyspace name. */
    keyspaceName(value: string): az_cosmosdb_cassandra_table_show_command_builder {
        this.setFlag("--keyspace-name", value);
        return this;
    }

    /** Table name. */
    name(value: string): az_cosmosdb_cassandra_table_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_cassandra_table_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_cassandra_table_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_cassandra_table_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update an Cassandra table under an Azure Cosmos DB Cassandra keyspace.
 *
 * Syntax:
 * ```
 * az cosmosdb cassandra table update --account-name
 *                                    --keyspace-name
 *                                    --name
 *                                    --resource-group
 *                                    [--analytical-storage-ttl]
 *                                    [--schema]
 *                                    [--subscription]
 *                                    [--ttl]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} keyspaceName Keyspace name.
 * @param {string} name Table name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_cassandra_table_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, keyspaceName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.keyspaceName(keyspaceName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_cassandra_table_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Keyspace name. */
    keyspaceName(value: string): az_cosmosdb_cassandra_table_update_command_builder {
        this.setFlag("--keyspace-name", value);
        return this;
    }

    /** Table name. */
    name(value: string): az_cosmosdb_cassandra_table_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_cassandra_table_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Analytical TTL, when analytical storage is enabled. */
    analyticalStorageTtl(value: string): az_cosmosdb_cassandra_table_update_command_builder {
        this.setFlag("--analytical-storage-ttl", value);
        return this;
    }

    /** Schema, you can enter it as a string or as a file, e.g., --schema @schema-file.json or --schema "{"columns": [{"name": "columnA","type": "uuid"}, {"name": "columnB","type": "Ascii"}],"partitionKeys": [{"name": "columnA"}]}". */
    schema(value: string): az_cosmosdb_cassandra_table_update_command_builder {
        this.setFlag("--schema", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_cassandra_table_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Default TTL. If the value is missing or set to "-1", items don’t expire. If the value is set to "n", items will expire "n" seconds after last modified time. */
    ttl(value: string): az_cosmosdb_cassandra_table_update_command_builder {
        this.setFlag("--ttl", value);
        return this;
    }
}

/**
 * Creates an Azure Cosmos DB collection.
 *
 * Syntax:
 * ```
 * az cosmosdb collection create --collection-name
 *                               --db-name
 *                               [--default-ttl]
 *                               [--indexing-policy]
 *                               [--key]
 *                               [--name]
 *                               [--partition-key-path]
 *                               [--resource-group-name]
 *                               [--subscription]
 *                               [--throughput]
 *                               [--url-connection]
 * ```
 *
 * @param {string} collectionName Collection Name.
 * @param {string} dbName Database Name.
 */
class az_cosmosdb_collection_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, collectionName: string, dbName: string) {
        super(commandParent);
        this.collectionName(collectionName)
        this.dbName(dbName)
    }

    /** Collection Name. */
    collectionName(value: string): az_cosmosdb_collection_create_command_builder {
        this.setFlag("--collection-name", value);
        return this;
    }

    /** Database Name. */
    dbName(value: string): az_cosmosdb_collection_create_command_builder {
        this.setFlag("--db-name", value);
        return this;
    }

    /** Default TTL. Provide 0 to disable. */
    defaultTtl(value: string): az_cosmosdb_collection_create_command_builder {
        this.setFlag("--default-ttl", value);
        return this;
    }

    /** Indexing Policy, you can enter it as a string or as a file, e.g., --indexing-policy @policy-file.json). */
    indexingPolicy(value: string): az_cosmosdb_collection_create_command_builder {
        this.setFlag("--indexing-policy", value);
        return this;
    }

    /** Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection. */
    key(value: string): az_cosmosdb_collection_create_command_builder {
        this.setFlag("--key", value);
        return this;
    }

    /** Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key. */
    name(value: string): az_cosmosdb_collection_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Partition Key Path, e.g., '/properties/name'. */
    partitionKeyPath(value: string): az_cosmosdb_collection_create_command_builder {
        this.setFlag("--partition-key-path", value);
        return this;
    }

    /** Name of the resource group. Must be used in conjunction with cosmosdb account name. */
    resourceGroupName(value: string): az_cosmosdb_collection_create_command_builder {
        this.setFlag("--resource-group-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_collection_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Offer Throughput (RU/s). */
    throughput(value: string): az_cosmosdb_collection_create_command_builder {
        this.setFlag("--throughput", value);
        return this;
    }

    /** Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key. */
    urlConnection(value: string): az_cosmosdb_collection_create_command_builder {
        this.setFlag("--url-connection", value);
        return this;
    }
}

/**
 * Deletes an Azure Cosmos DB collection.
 *
 * Syntax:
 * ```
 * az cosmosdb collection delete --collection-name
 *                               --db-name
 *                               [--key]
 *                               [--name]
 *                               [--resource-group-name]
 *                               [--subscription]
 *                               [--url-connection]
 *                               [--yes]
 * ```
 *
 * @param {string} collectionName Collection Name.
 * @param {string} dbName Database Name.
 */
class az_cosmosdb_collection_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, collectionName: string, dbName: string) {
        super(commandParent);
        this.collectionName(collectionName)
        this.dbName(dbName)
    }

    /** Collection Name. */
    collectionName(value: string): az_cosmosdb_collection_delete_command_builder {
        this.setFlag("--collection-name", value);
        return this;
    }

    /** Database Name. */
    dbName(value: string): az_cosmosdb_collection_delete_command_builder {
        this.setFlag("--db-name", value);
        return this;
    }

    /** Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection. */
    key(value: string): az_cosmosdb_collection_delete_command_builder {
        this.setFlag("--key", value);
        return this;
    }

    /** Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key. */
    name(value: string): az_cosmosdb_collection_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the resource group. Must be used in conjunction with cosmosdb account name. */
    resourceGroupName(value: string): az_cosmosdb_collection_delete_command_builder {
        this.setFlag("--resource-group-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_collection_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key. */
    urlConnection(value: string): az_cosmosdb_collection_delete_command_builder {
        this.setFlag("--url-connection", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_cosmosdb_collection_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * Returns a boolean indicating whether the collection exists.
 *
 * Syntax:
 * ```
 * az cosmosdb collection exists --collection-name
 *                               --db-name
 *                               [--key]
 *                               [--name]
 *                               [--resource-group-name]
 *                               [--subscription]
 *                               [--url-connection]
 * ```
 *
 * @param {string} collectionName Collection Name.
 * @param {string} dbName Database Name.
 */
class az_cosmosdb_collection_exists_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, collectionName: string, dbName: string) {
        super(commandParent);
        this.collectionName(collectionName)
        this.dbName(dbName)
    }

    /** Collection Name. */
    collectionName(value: string): az_cosmosdb_collection_exists_command_builder {
        this.setFlag("--collection-name", value);
        return this;
    }

    /** Database Name. */
    dbName(value: string): az_cosmosdb_collection_exists_command_builder {
        this.setFlag("--db-name", value);
        return this;
    }

    /** Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection. */
    key(value: string): az_cosmosdb_collection_exists_command_builder {
        this.setFlag("--key", value);
        return this;
    }

    /** Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key. */
    name(value: string): az_cosmosdb_collection_exists_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the resource group. Must be used in conjunction with cosmosdb account name. */
    resourceGroupName(value: string): az_cosmosdb_collection_exists_command_builder {
        this.setFlag("--resource-group-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_collection_exists_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key. */
    urlConnection(value: string): az_cosmosdb_collection_exists_command_builder {
        this.setFlag("--url-connection", value);
        return this;
    }
}

/**
 * Lists all Azure Cosmos DB collections.
 *
 * Syntax:
 * ```
 * az cosmosdb collection list --db-name
 *                             [--key]
 *                             [--name]
 *                             [--query-examples]
 *                             [--resource-group-name]
 *                             [--subscription]
 *                             [--url-connection]
 * ```
 *
 * @param {string} dbName Database Name.
 */
class az_cosmosdb_collection_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, dbName: string) {
        super(commandParent);
        this.dbName(dbName)
    }

    /** Database Name. */
    dbName(value: string): az_cosmosdb_collection_list_command_builder {
        this.setFlag("--db-name", value);
        return this;
    }

    /** Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection. */
    key(value: string): az_cosmosdb_collection_list_command_builder {
        this.setFlag("--key", value);
        return this;
    }

    /** Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key. */
    name(value: string): az_cosmosdb_collection_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_collection_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of the resource group. Must be used in conjunction with cosmosdb account name. */
    resourceGroupName(value: string): az_cosmosdb_collection_list_command_builder {
        this.setFlag("--resource-group-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_collection_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key. */
    urlConnection(value: string): az_cosmosdb_collection_list_command_builder {
        this.setFlag("--url-connection", value);
        return this;
    }
}

/**
 * Shows an Azure Cosmos DB collection and its offer.
 *
 * Syntax:
 * ```
 * az cosmosdb collection show --collection-name
 *                             --db-name
 *                             [--key]
 *                             [--name]
 *                             [--query-examples]
 *                             [--resource-group-name]
 *                             [--subscription]
 *                             [--url-connection]
 * ```
 *
 * @param {string} collectionName Collection Name.
 * @param {string} dbName Database Name.
 */
class az_cosmosdb_collection_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, collectionName: string, dbName: string) {
        super(commandParent);
        this.collectionName(collectionName)
        this.dbName(dbName)
    }

    /** Collection Name. */
    collectionName(value: string): az_cosmosdb_collection_show_command_builder {
        this.setFlag("--collection-name", value);
        return this;
    }

    /** Database Name. */
    dbName(value: string): az_cosmosdb_collection_show_command_builder {
        this.setFlag("--db-name", value);
        return this;
    }

    /** Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection. */
    key(value: string): az_cosmosdb_collection_show_command_builder {
        this.setFlag("--key", value);
        return this;
    }

    /** Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key. */
    name(value: string): az_cosmosdb_collection_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_collection_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of the resource group. Must be used in conjunction with cosmosdb account name. */
    resourceGroupName(value: string): az_cosmosdb_collection_show_command_builder {
        this.setFlag("--resource-group-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_collection_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key. */
    urlConnection(value: string): az_cosmosdb_collection_show_command_builder {
        this.setFlag("--url-connection", value);
        return this;
    }
}

/**
 * Updates an Azure Cosmos DB collection.
 *
 * Syntax:
 * ```
 * az cosmosdb collection update --collection-name
 *                               --db-name
 *                               [--default-ttl]
 *                               [--indexing-policy]
 *                               [--key]
 *                               [--name]
 *                               [--resource-group-name]
 *                               [--subscription]
 *                               [--throughput]
 *                               [--url-connection]
 * ```
 *
 * @param {string} collectionName Collection Name.
 * @param {string} dbName Database Name.
 */
class az_cosmosdb_collection_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, collectionName: string, dbName: string) {
        super(commandParent);
        this.collectionName(collectionName)
        this.dbName(dbName)
    }

    /** Collection Name. */
    collectionName(value: string): az_cosmosdb_collection_update_command_builder {
        this.setFlag("--collection-name", value);
        return this;
    }

    /** Database Name. */
    dbName(value: string): az_cosmosdb_collection_update_command_builder {
        this.setFlag("--db-name", value);
        return this;
    }

    /** Default TTL. Provide 0 to disable. */
    defaultTtl(value: string): az_cosmosdb_collection_update_command_builder {
        this.setFlag("--default-ttl", value);
        return this;
    }

    /** Indexing Policy, you can enter it as a string or as a file, e.g., --indexing-policy @policy-file.json). */
    indexingPolicy(value: string): az_cosmosdb_collection_update_command_builder {
        this.setFlag("--indexing-policy", value);
        return this;
    }

    /** Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection. */
    key(value: string): az_cosmosdb_collection_update_command_builder {
        this.setFlag("--key", value);
        return this;
    }

    /** Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key. */
    name(value: string): az_cosmosdb_collection_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the resource group. Must be used in conjunction with cosmosdb account name. */
    resourceGroupName(value: string): az_cosmosdb_collection_update_command_builder {
        this.setFlag("--resource-group-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_collection_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Offer Throughput (RU/s). */
    throughput(value: string): az_cosmosdb_collection_update_command_builder {
        this.setFlag("--throughput", value);
        return this;
    }

    /** Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key. */
    urlConnection(value: string): az_cosmosdb_collection_update_command_builder {
        this.setFlag("--url-connection", value);
        return this;
    }
}

/**
 * Creates an Azure Cosmos DB database.
 *
 * Syntax:
 * ```
 * az cosmosdb database create --db-name
 *                             [--key]
 *                             [--name]
 *                             [--resource-group-name]
 *                             [--subscription]
 *                             [--throughput]
 *                             [--url-connection]
 * ```
 *
 * @param {string} dbName Database Name.
 */
class az_cosmosdb_database_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, dbName: string) {
        super(commandParent);
        this.dbName(dbName)
    }

    /** Database Name. */
    dbName(value: string): az_cosmosdb_database_create_command_builder {
        this.setFlag("--db-name", value);
        return this;
    }

    /** Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection. */
    key(value: string): az_cosmosdb_database_create_command_builder {
        this.setFlag("--key", value);
        return this;
    }

    /** Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key. */
    name(value: string): az_cosmosdb_database_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the resource group. Must be used in conjunction with cosmosdb account name. */
    resourceGroupName(value: string): az_cosmosdb_database_create_command_builder {
        this.setFlag("--resource-group-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_database_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Offer Throughput (RU/s). */
    throughput(value: string): az_cosmosdb_database_create_command_builder {
        this.setFlag("--throughput", value);
        return this;
    }

    /** Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key. */
    urlConnection(value: string): az_cosmosdb_database_create_command_builder {
        this.setFlag("--url-connection", value);
        return this;
    }
}

/**
 * Deletes an Azure Cosmos DB database.
 *
 * Syntax:
 * ```
 * az cosmosdb database delete --db-name
 *                             [--key]
 *                             [--name]
 *                             [--resource-group-name]
 *                             [--subscription]
 *                             [--url-connection]
 *                             [--yes]
 * ```
 *
 * @param {string} dbName Database Name.
 */
class az_cosmosdb_database_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, dbName: string) {
        super(commandParent);
        this.dbName(dbName)
    }

    /** Database Name. */
    dbName(value: string): az_cosmosdb_database_delete_command_builder {
        this.setFlag("--db-name", value);
        return this;
    }

    /** Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection. */
    key(value: string): az_cosmosdb_database_delete_command_builder {
        this.setFlag("--key", value);
        return this;
    }

    /** Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key. */
    name(value: string): az_cosmosdb_database_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the resource group. Must be used in conjunction with cosmosdb account name. */
    resourceGroupName(value: string): az_cosmosdb_database_delete_command_builder {
        this.setFlag("--resource-group-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_database_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key. */
    urlConnection(value: string): az_cosmosdb_database_delete_command_builder {
        this.setFlag("--url-connection", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_cosmosdb_database_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * Returns a boolean indicating whether the database exists.
 *
 * Syntax:
 * ```
 * az cosmosdb database exists --db-name
 *                             [--key]
 *                             [--name]
 *                             [--resource-group-name]
 *                             [--subscription]
 *                             [--url-connection]
 * ```
 *
 * @param {string} dbName Database Name.
 */
class az_cosmosdb_database_exists_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, dbName: string) {
        super(commandParent);
        this.dbName(dbName)
    }

    /** Database Name. */
    dbName(value: string): az_cosmosdb_database_exists_command_builder {
        this.setFlag("--db-name", value);
        return this;
    }

    /** Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection. */
    key(value: string): az_cosmosdb_database_exists_command_builder {
        this.setFlag("--key", value);
        return this;
    }

    /** Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key. */
    name(value: string): az_cosmosdb_database_exists_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the resource group. Must be used in conjunction with cosmosdb account name. */
    resourceGroupName(value: string): az_cosmosdb_database_exists_command_builder {
        this.setFlag("--resource-group-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_database_exists_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key. */
    urlConnection(value: string): az_cosmosdb_database_exists_command_builder {
        this.setFlag("--url-connection", value);
        return this;
    }
}

/**
 * Lists all Azure Cosmos DB databases.
 *
 * Syntax:
 * ```
 * az cosmosdb database list [--key]
 *                           [--name]
 *                           [--query-examples]
 *                           [--resource-group-name]
 *                           [--subscription]
 *                           [--url-connection]
 * ```
 */
class az_cosmosdb_database_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection. */
    key(value: string): az_cosmosdb_database_list_command_builder {
        this.setFlag("--key", value);
        return this;
    }

    /** Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key. */
    name(value: string): az_cosmosdb_database_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_database_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of the resource group. Must be used in conjunction with cosmosdb account name. */
    resourceGroupName(value: string): az_cosmosdb_database_list_command_builder {
        this.setFlag("--resource-group-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_database_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key. */
    urlConnection(value: string): az_cosmosdb_database_list_command_builder {
        this.setFlag("--url-connection", value);
        return this;
    }
}

/**
 * Shows an Azure Cosmos DB database.
 *
 * Syntax:
 * ```
 * az cosmosdb database show --db-name
 *                           [--key]
 *                           [--name]
 *                           [--query-examples]
 *                           [--resource-group-name]
 *                           [--subscription]
 *                           [--url-connection]
 * ```
 *
 * @param {string} dbName Database Name.
 */
class az_cosmosdb_database_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, dbName: string) {
        super(commandParent);
        this.dbName(dbName)
    }

    /** Database Name. */
    dbName(value: string): az_cosmosdb_database_show_command_builder {
        this.setFlag("--db-name", value);
        return this;
    }

    /** Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection. */
    key(value: string): az_cosmosdb_database_show_command_builder {
        this.setFlag("--key", value);
        return this;
    }

    /** Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key. */
    name(value: string): az_cosmosdb_database_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_database_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of the resource group. Must be used in conjunction with cosmosdb account name. */
    resourceGroupName(value: string): az_cosmosdb_database_show_command_builder {
        this.setFlag("--resource-group-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_database_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key. */
    urlConnection(value: string): az_cosmosdb_database_show_command_builder {
        this.setFlag("--url-connection", value);
        return this;
    }
}

/**
 * Migrate the throughput of the Gremlin database between autoscale and manually provisioned.
 *
 * Syntax:
 * ```
 * az cosmosdb gremlin database throughput migrate --account-name
 *                                                 --name
 *                                                 --resource-group
 *                                                 --throughput-type {autoscale, manual}
 *                                                 [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'autoscale' | 'manual'} throughputType The type of throughput to migrate to.
 */
class az_cosmosdb_gremlin_database_throughput_migrate_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string, throughputType: 'autoscale' | 'manual') {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.throughputType(throughputType)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_gremlin_database_throughput_migrate_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    name(value: string): az_cosmosdb_gremlin_database_throughput_migrate_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_gremlin_database_throughput_migrate_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The type of throughput to migrate to. */
    throughputType(value: 'autoscale' | 'manual'): az_cosmosdb_gremlin_database_throughput_migrate_command_builder {
        this.setFlag("--throughput-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_gremlin_database_throughput_migrate_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the throughput of the Gremlin database under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb gremlin database throughput show --account-name
 *                                              --name
 *                                              --resource-group
 *                                              [--query-examples]
 *                                              [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_gremlin_database_throughput_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_gremlin_database_throughput_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    name(value: string): az_cosmosdb_gremlin_database_throughput_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_gremlin_database_throughput_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_gremlin_database_throughput_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_gremlin_database_throughput_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update the throughput of the Gremlin database under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb gremlin database throughput update --account-name
 *                                                --name
 *                                                --resource-group
 *                                                [--max-throughput]
 *                                                [--subscription]
 *                                                [--throughput]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_gremlin_database_throughput_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_gremlin_database_throughput_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    name(value: string): az_cosmosdb_gremlin_database_throughput_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_gremlin_database_throughput_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    maxThroughput(value: string): az_cosmosdb_gremlin_database_throughput_update_command_builder {
        this.setFlag("--max-throughput", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_gremlin_database_throughput_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The throughput of Gremlin database (RU/s). */
    throughput(value: string): az_cosmosdb_gremlin_database_throughput_update_command_builder {
        this.setFlag("--throughput", value);
        return this;
    }
}

/**
 * Create an Gremlin database under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb gremlin database create --account-name
 *                                     --name
 *                                     --resource-group
 *                                     [--max-throughput]
 *                                     [--subscription]
 *                                     [--throughput]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_gremlin_database_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_gremlin_database_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    name(value: string): az_cosmosdb_gremlin_database_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_gremlin_database_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    maxThroughput(value: string): az_cosmosdb_gremlin_database_create_command_builder {
        this.setFlag("--max-throughput", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_gremlin_database_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The throughput Gremlin database (RU/s). Default value is 400. */
    throughput(value: string): az_cosmosdb_gremlin_database_create_command_builder {
        this.setFlag("--throughput", value);
        return this;
    }
}

/**
 * Delete the Gremlin database under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb gremlin database delete --account-name
 *                                     --name
 *                                     --resource-group
 *                                     [--subscription]
 *                                     [--yes]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_gremlin_database_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_gremlin_database_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    name(value: string): az_cosmosdb_gremlin_database_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_gremlin_database_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_gremlin_database_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_cosmosdb_gremlin_database_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * Checks if an Azure Cosmos DB Gremlin database exists.
 *
 * Syntax:
 * ```
 * az cosmosdb gremlin database exists --account-name
 *                                     --name
 *                                     --resource-group
 *                                     [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_gremlin_database_exists_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_gremlin_database_exists_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    name(value: string): az_cosmosdb_gremlin_database_exists_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_gremlin_database_exists_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_gremlin_database_exists_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the Gremlin databases under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb gremlin database list --account-name
 *                                   --resource-group
 *                                   [--query-examples]
 *                                   [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_gremlin_database_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_gremlin_database_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_gremlin_database_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_gremlin_database_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_gremlin_database_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show the details of a Gremlin database under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb gremlin database show --account-name
 *                                   --name
 *                                   --resource-group
 *                                   [--query-examples]
 *                                   [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_gremlin_database_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_gremlin_database_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    name(value: string): az_cosmosdb_gremlin_database_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_gremlin_database_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_gremlin_database_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_gremlin_database_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Migrate the throughput of the Gremlin Graph between autoscale and manually provisioned.
 *
 * Syntax:
 * ```
 * az cosmosdb gremlin graph throughput migrate --account-name
 *                                              --database-name
 *                                              --name
 *                                              --resource-group
 *                                              --throughput-type {autoscale, manual}
 *                                              [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} name Graph name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'autoscale' | 'manual'} throughputType The type of throughput to migrate to.
 */
class az_cosmosdb_gremlin_graph_throughput_migrate_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, name: string, resourceGroup: string, throughputType: 'autoscale' | 'manual') {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.throughputType(throughputType)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_gremlin_graph_throughput_migrate_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_gremlin_graph_throughput_migrate_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Graph name. */
    name(value: string): az_cosmosdb_gremlin_graph_throughput_migrate_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_gremlin_graph_throughput_migrate_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The type of throughput to migrate to. */
    throughputType(value: 'autoscale' | 'manual'): az_cosmosdb_gremlin_graph_throughput_migrate_command_builder {
        this.setFlag("--throughput-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_gremlin_graph_throughput_migrate_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the throughput of the Gremlin graph under an Azure Cosmos DB Gremlin database.
 *
 * Syntax:
 * ```
 * az cosmosdb gremlin graph throughput show --account-name
 *                                           --database-name
 *                                           --name
 *                                           --resource-group
 *                                           [--query-examples]
 *                                           [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} name Graph name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_gremlin_graph_throughput_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_gremlin_graph_throughput_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_gremlin_graph_throughput_show_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Graph name. */
    name(value: string): az_cosmosdb_gremlin_graph_throughput_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_gremlin_graph_throughput_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_gremlin_graph_throughput_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_gremlin_graph_throughput_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update the throughput of the Gremlin graph under an Azure Cosmos DB Gremlin database.
 *
 * Syntax:
 * ```
 * az cosmosdb gremlin graph throughput update --account-name
 *                                             --database-name
 *                                             --name
 *                                             --resource-group
 *                                             [--max-throughput]
 *                                             [--subscription]
 *                                             [--throughput]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} name Graph name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_gremlin_graph_throughput_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_gremlin_graph_throughput_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_gremlin_graph_throughput_update_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Graph name. */
    name(value: string): az_cosmosdb_gremlin_graph_throughput_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_gremlin_graph_throughput_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    maxThroughput(value: string): az_cosmosdb_gremlin_graph_throughput_update_command_builder {
        this.setFlag("--max-throughput", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_gremlin_graph_throughput_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The throughput Gremlin graph (RU/s). */
    throughput(value: string): az_cosmosdb_gremlin_graph_throughput_update_command_builder {
        this.setFlag("--throughput", value);
        return this;
    }
}

/**
 * Create an Gremlin graph under an Azure Cosmos DB Gremlin database.
 *
 * Syntax:
 * ```
 * az cosmosdb gremlin graph create --account-name
 *                                  --database-name
 *                                  --name
 *                                  --partition-key-path
 *                                  --resource-group
 *                                  [--conflict-resolution-policy]
 *                                  [--idx]
 *                                  [--max-throughput]
 *                                  [--subscription]
 *                                  [--throughput]
 *                                  [--ttl]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} name Graph name.
 * @param {string} partitionKeyPath Partition Key Path, e.g., '/address/zipcode'.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_gremlin_graph_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, name: string, partitionKeyPath: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.name(name)
        this.partitionKeyPath(partitionKeyPath)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_gremlin_graph_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_gremlin_graph_create_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Graph name. */
    name(value: string): az_cosmosdb_gremlin_graph_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Partition Key Path, e.g., '/address/zipcode'. */
    partitionKeyPath(value: string): az_cosmosdb_gremlin_graph_create_command_builder {
        this.setFlag("--partition-key-path", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_gremlin_graph_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Conflict Resolution Policy, you can enter it as a string or as a file, e.g., --conflict-resolution-policy @policy-file.json or --conflict-resolution-policy "{"mode": "lastWriterWins", "conflictResolutionPath": "/path"}". */
    conflictResolutionPolicy(value: string): az_cosmosdb_gremlin_graph_create_command_builder {
        this.setFlag("--conflict-resolution-policy", value);
        return this;
    }

    /** Indexing Policy, you can enter it as a string or as a file, e.g., --idx @policy-file.json or --idx "{"indexingMode": "consistent", "automatic": true, "includedPaths": [{"path": "/\*"}], "excludedPaths": [{ "path": "/headquarters/employees/?"}, { "path": "/\"_etag\"/?"}]}". */
    idx(value: string): az_cosmosdb_gremlin_graph_create_command_builder {
        this.setFlag("--idx", value);
        return this;
    }

    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    maxThroughput(value: string): az_cosmosdb_gremlin_graph_create_command_builder {
        this.setFlag("--max-throughput", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_gremlin_graph_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The throughput of Gremlin graph (RU/s). Default value is 400. Omit this parameter if the database has shared throughput unless the graph should have dedicated throughput. */
    throughput(value: string): az_cosmosdb_gremlin_graph_create_command_builder {
        this.setFlag("--throughput", value);
        return this;
    }

    /** Default TTL. If the value is missing or set to "-1", items don’t expire. If the value is set to "n", items will expire "n" seconds after last modified time. */
    ttl(value: string): az_cosmosdb_gremlin_graph_create_command_builder {
        this.setFlag("--ttl", value);
        return this;
    }
}

/**
 * Delete the Gremlin graph under an Azure Cosmos DB Gremlin database.
 *
 * Syntax:
 * ```
 * az cosmosdb gremlin graph delete --account-name
 *                                  --database-name
 *                                  --name
 *                                  --resource-group
 *                                  [--subscription]
 *                                  [--yes]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} name Graph name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_gremlin_graph_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_gremlin_graph_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_gremlin_graph_delete_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Graph name. */
    name(value: string): az_cosmosdb_gremlin_graph_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_gremlin_graph_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_gremlin_graph_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_cosmosdb_gremlin_graph_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * Checks if an Azure Cosmos DB Gremlin graph exists.
 *
 * Syntax:
 * ```
 * az cosmosdb gremlin graph exists --account-name
 *                                  --database-name
 *                                  --name
 *                                  --resource-group
 *                                  [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} name Graph name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_gremlin_graph_exists_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_gremlin_graph_exists_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_gremlin_graph_exists_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Graph name. */
    name(value: string): az_cosmosdb_gremlin_graph_exists_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_gremlin_graph_exists_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_gremlin_graph_exists_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the Gremlin graphs under an Azure Cosmos DB Gremlin database.
 *
 * Syntax:
 * ```
 * az cosmosdb gremlin graph list --account-name
 *                                --database-name
 *                                --resource-group
 *                                [--query-examples]
 *                                [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_gremlin_graph_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_gremlin_graph_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_gremlin_graph_list_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_gremlin_graph_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_gremlin_graph_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_gremlin_graph_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show the details of a Gremlin graph under an Azure Cosmos DB Gremlin database.
 *
 * Syntax:
 * ```
 * az cosmosdb gremlin graph show --account-name
 *                                --database-name
 *                                --name
 *                                --resource-group
 *                                [--query-examples]
 *                                [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} name Graph name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_gremlin_graph_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_gremlin_graph_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_gremlin_graph_show_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Graph name. */
    name(value: string): az_cosmosdb_gremlin_graph_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_gremlin_graph_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_gremlin_graph_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_gremlin_graph_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update an Gremlin graph under an Azure Cosmos DB Gremlin database.
 *
 * Syntax:
 * ```
 * az cosmosdb gremlin graph update --account-name
 *                                  --database-name
 *                                  --name
 *                                  --resource-group
 *                                  [--idx]
 *                                  [--subscription]
 *                                  [--ttl]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} name Graph name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_gremlin_graph_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_gremlin_graph_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_gremlin_graph_update_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Graph name. */
    name(value: string): az_cosmosdb_gremlin_graph_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_gremlin_graph_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Indexing Policy, you can enter it as a string or as a file, e.g., --idx @policy-file.json or --idx "{"indexingMode": "consistent", "automatic": true, "includedPaths": [{"path": "/\*"}], "excludedPaths": [{ "path": "/headquarters/employees/?"}, { "path": "/\"_etag\"/?"}]}". */
    idx(value: string): az_cosmosdb_gremlin_graph_update_command_builder {
        this.setFlag("--idx", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_gremlin_graph_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Default TTL. If the value is missing or set to "-1", items don’t expire. If the value is set to "n", items will expire "n" seconds after last modified time. */
    ttl(value: string): az_cosmosdb_gremlin_graph_update_command_builder {
        this.setFlag("--ttl", value);
        return this;
    }
}

/**
 * List the access keys or connection strings for a Azure Cosmos DB database account.
 *
 * Syntax:
 * ```
 * az cosmosdb keys list --name
 *                       --resource-group
 *                       [--query-examples]
 *                       [--subscription]
 *                       [--type {connection-strings, keys, read-only-keys}]
 * ```
 *
 * @param {string} name Cosmosdb account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_keys_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    name(value: string): az_cosmosdb_keys_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_keys_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_keys_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_keys_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The type of account key. */
    type(value: 'connection-strings' | 'keys' | 'read-only-keys'): az_cosmosdb_keys_list_command_builder {
        this.setFlag("--type", value);
        return this;
    }
}

/**
 * Regenerates an access key for the specified Azure Cosmos DB database account.
 *
 * Syntax:
 * ```
 * az cosmosdb keys regenerate --key-kind {primary, primaryReadonly, secondary, secondaryReadonly}
 *                             [--ids]
 *                             [--name]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 *
 * @param {'primary' | 'primaryReadonly' | 'secondary' | 'secondaryReadonly'} keyKind The access key to regenerate.
 */
class az_cosmosdb_keys_regenerate_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, keyKind: 'primary' | 'primaryReadonly' | 'secondary' | 'secondaryReadonly') {
        super(commandParent);
        this.keyKind(keyKind)
    }

    /** The access key to regenerate. */
    keyKind(value: 'primary' | 'primaryReadonly' | 'secondary' | 'secondaryReadonly'): az_cosmosdb_keys_regenerate_command_builder {
        this.setFlag("--key-kind", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cosmosdb_keys_regenerate_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Cosmos DB database account. */
    name(value: string): az_cosmosdb_keys_regenerate_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_keys_regenerate_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_keys_regenerate_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Migrate the throughput of the MongoDB collection between autoscale and manually provisioned.
 *
 * Syntax:
 * ```
 * az cosmosdb mongodb collection throughput migrate --account-name
 *                                                   --database-name
 *                                                   --name
 *                                                   --resource-group
 *                                                   --throughput-type {autoscale, manual}
 *                                                   [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} name Collection name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'autoscale' | 'manual'} throughputType The type of throughput to migrate to.
 */
class az_cosmosdb_mongodb_collection_throughput_migrate_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, name: string, resourceGroup: string, throughputType: 'autoscale' | 'manual') {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.throughputType(throughputType)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_mongodb_collection_throughput_migrate_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_mongodb_collection_throughput_migrate_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Collection name. */
    name(value: string): az_cosmosdb_mongodb_collection_throughput_migrate_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_mongodb_collection_throughput_migrate_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The type of throughput to migrate to. */
    throughputType(value: 'autoscale' | 'manual'): az_cosmosdb_mongodb_collection_throughput_migrate_command_builder {
        this.setFlag("--throughput-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_mongodb_collection_throughput_migrate_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the throughput of the MongoDB collection under an Azure Cosmos DB MongoDB database.
 *
 * Syntax:
 * ```
 * az cosmosdb mongodb collection throughput show --account-name
 *                                                --database-name
 *                                                --name
 *                                                --resource-group
 *                                                [--query-examples]
 *                                                [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} name Collection name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_mongodb_collection_throughput_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_mongodb_collection_throughput_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_mongodb_collection_throughput_show_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Collection name. */
    name(value: string): az_cosmosdb_mongodb_collection_throughput_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_mongodb_collection_throughput_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_mongodb_collection_throughput_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_mongodb_collection_throughput_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update the throughput of the MongoDB collection under an Azure Cosmos DB MongoDB database.
 *
 * Syntax:
 * ```
 * az cosmosdb mongodb collection throughput update --account-name
 *                                                  --database-name
 *                                                  --name
 *                                                  --resource-group
 *                                                  [--max-throughput]
 *                                                  [--subscription]
 *                                                  [--throughput]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} name Collection name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_mongodb_collection_throughput_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_mongodb_collection_throughput_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_mongodb_collection_throughput_update_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Collection name. */
    name(value: string): az_cosmosdb_mongodb_collection_throughput_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_mongodb_collection_throughput_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    maxThroughput(value: string): az_cosmosdb_mongodb_collection_throughput_update_command_builder {
        this.setFlag("--max-throughput", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_mongodb_collection_throughput_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The throughput of MongoDB collection (RU/s). */
    throughput(value: string): az_cosmosdb_mongodb_collection_throughput_update_command_builder {
        this.setFlag("--throughput", value);
        return this;
    }
}

/**
 * Create an MongoDB collection under an Azure Cosmos DB MongoDB database.
 *
 * Syntax:
 * ```
 * az cosmosdb mongodb collection create --account-name
 *                                       --database-name
 *                                       --name
 *                                       --resource-group
 *                                       [--analytical-storage-ttl]
 *                                       [--idx]
 *                                       [--max-throughput]
 *                                       [--shard]
 *                                       [--subscription]
 *                                       [--throughput]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} name Collection name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_mongodb_collection_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_mongodb_collection_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_mongodb_collection_create_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Collection name. */
    name(value: string): az_cosmosdb_mongodb_collection_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_mongodb_collection_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Analytical TTL, when analytical storage is enabled. */
    analyticalStorageTtl(value: string): az_cosmosdb_mongodb_collection_create_command_builder {
        this.setFlag("--analytical-storage-ttl", value);
        return this;
    }

    /** Indexes, you can enter it as a string or as a file, e.g., --idx @indexes-file.json or --idx "[{"key": {"keys": ["_ts"]},"options": {"expireAfterSeconds": 1000}}, {"key": {"keys": ["user_id", "user_address"]}, "options": {"unique": "true"}}]". */
    idx(value: string): az_cosmosdb_mongodb_collection_create_command_builder {
        this.setFlag("--idx", value);
        return this;
    }

    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    maxThroughput(value: string): az_cosmosdb_mongodb_collection_create_command_builder {
        this.setFlag("--max-throughput", value);
        return this;
    }

    /** Sharding key path. */
    shard(value: string): az_cosmosdb_mongodb_collection_create_command_builder {
        this.setFlag("--shard", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_mongodb_collection_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The throughput of MongoDB collection (RU/s). Default value is 400. Omit this parameter if the database has shared throughput unless the collection should have dedicated throughput. */
    throughput(value: string): az_cosmosdb_mongodb_collection_create_command_builder {
        this.setFlag("--throughput", value);
        return this;
    }
}

/**
 * Delete the MongoDB collection under an Azure Cosmos DB MongoDB database.
 *
 * Syntax:
 * ```
 * az cosmosdb mongodb collection delete --account-name
 *                                       --database-name
 *                                       --name
 *                                       --resource-group
 *                                       [--subscription]
 *                                       [--yes]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} name Collection name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_mongodb_collection_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_mongodb_collection_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_mongodb_collection_delete_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Collection name. */
    name(value: string): az_cosmosdb_mongodb_collection_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_mongodb_collection_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_mongodb_collection_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_cosmosdb_mongodb_collection_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * Checks if an Azure Cosmos DB MongoDB collection exists.
 *
 * Syntax:
 * ```
 * az cosmosdb mongodb collection exists --account-name
 *                                       --database-name
 *                                       --name
 *                                       --resource-group
 *                                       [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} name Collection name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_mongodb_collection_exists_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_mongodb_collection_exists_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_mongodb_collection_exists_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Collection name. */
    name(value: string): az_cosmosdb_mongodb_collection_exists_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_mongodb_collection_exists_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_mongodb_collection_exists_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the MongoDB collections under an Azure Cosmos DB MongoDB database.
 *
 * Syntax:
 * ```
 * az cosmosdb mongodb collection list --account-name
 *                                     --database-name
 *                                     --resource-group
 *                                     [--query-examples]
 *                                     [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_mongodb_collection_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_mongodb_collection_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_mongodb_collection_list_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_mongodb_collection_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_mongodb_collection_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_mongodb_collection_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show the details of a MongoDB collection under an Azure Cosmos DB MongoDB database.
 *
 * Syntax:
 * ```
 * az cosmosdb mongodb collection show --account-name
 *                                     --database-name
 *                                     --name
 *                                     --resource-group
 *                                     [--query-examples]
 *                                     [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} name Collection name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_mongodb_collection_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_mongodb_collection_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_mongodb_collection_show_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Collection name. */
    name(value: string): az_cosmosdb_mongodb_collection_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_mongodb_collection_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_mongodb_collection_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_mongodb_collection_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update an MongoDB collection under an Azure Cosmos DB MongoDB database.
 *
 * Syntax:
 * ```
 * az cosmosdb mongodb collection update --account-name
 *                                       --database-name
 *                                       --name
 *                                       --resource-group
 *                                       [--analytical-storage-ttl]
 *                                       [--idx]
 *                                       [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} name Collection name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_mongodb_collection_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_mongodb_collection_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_mongodb_collection_update_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Collection name. */
    name(value: string): az_cosmosdb_mongodb_collection_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_mongodb_collection_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Analytical TTL, when analytical storage is enabled. */
    analyticalStorageTtl(value: string): az_cosmosdb_mongodb_collection_update_command_builder {
        this.setFlag("--analytical-storage-ttl", value);
        return this;
    }

    /** Indexes, you can enter it as a string or as a file, e.g., --idx @indexes-file.json or --idx "[{"key": {"keys": ["_ts"]},"options": {"expireAfterSeconds": 1000}}, {"key": {"keys": ["user_id", "user_address"]}, "options": {"unique": "true"}}]". */
    idx(value: string): az_cosmosdb_mongodb_collection_update_command_builder {
        this.setFlag("--idx", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_mongodb_collection_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Migrate the throughput of the MongoDB database between autoscale and manually provisioned.
 *
 * Syntax:
 * ```
 * az cosmosdb mongodb database throughput migrate --account-name
 *                                                 --name
 *                                                 --resource-group
 *                                                 --throughput-type {autoscale, manual}
 *                                                 [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'autoscale' | 'manual'} throughputType The type of throughput to migrate to.
 */
class az_cosmosdb_mongodb_database_throughput_migrate_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string, throughputType: 'autoscale' | 'manual') {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.throughputType(throughputType)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_mongodb_database_throughput_migrate_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    name(value: string): az_cosmosdb_mongodb_database_throughput_migrate_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_mongodb_database_throughput_migrate_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The type of throughput to migrate to. */
    throughputType(value: 'autoscale' | 'manual'): az_cosmosdb_mongodb_database_throughput_migrate_command_builder {
        this.setFlag("--throughput-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_mongodb_database_throughput_migrate_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the throughput of the MongoDB database under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb mongodb database throughput show --account-name
 *                                              --name
 *                                              --resource-group
 *                                              [--query-examples]
 *                                              [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_mongodb_database_throughput_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_mongodb_database_throughput_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    name(value: string): az_cosmosdb_mongodb_database_throughput_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_mongodb_database_throughput_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_mongodb_database_throughput_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_mongodb_database_throughput_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update the throughput of the MongoDB database under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb mongodb database throughput update --account-name
 *                                                --name
 *                                                --resource-group
 *                                                [--max-throughput]
 *                                                [--subscription]
 *                                                [--throughput]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_mongodb_database_throughput_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_mongodb_database_throughput_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    name(value: string): az_cosmosdb_mongodb_database_throughput_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_mongodb_database_throughput_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    maxThroughput(value: string): az_cosmosdb_mongodb_database_throughput_update_command_builder {
        this.setFlag("--max-throughput", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_mongodb_database_throughput_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The throughput of MongoDB database (RU/s). */
    throughput(value: string): az_cosmosdb_mongodb_database_throughput_update_command_builder {
        this.setFlag("--throughput", value);
        return this;
    }
}

/**
 * Create an MongoDB database under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb mongodb database create --account-name
 *                                     --name
 *                                     --resource-group
 *                                     [--max-throughput]
 *                                     [--subscription]
 *                                     [--throughput]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_mongodb_database_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_mongodb_database_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    name(value: string): az_cosmosdb_mongodb_database_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_mongodb_database_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    maxThroughput(value: string): az_cosmosdb_mongodb_database_create_command_builder {
        this.setFlag("--max-throughput", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_mongodb_database_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The throughput of MongoDB database (RU/s). Default value is 400. */
    throughput(value: string): az_cosmosdb_mongodb_database_create_command_builder {
        this.setFlag("--throughput", value);
        return this;
    }
}

/**
 * Delete the MongoDB database under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb mongodb database delete --account-name
 *                                     --name
 *                                     --resource-group
 *                                     [--subscription]
 *                                     [--yes]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_mongodb_database_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_mongodb_database_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    name(value: string): az_cosmosdb_mongodb_database_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_mongodb_database_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_mongodb_database_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_cosmosdb_mongodb_database_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * Checks if an Azure Cosmos DB MongoDB database exists.
 *
 * Syntax:
 * ```
 * az cosmosdb mongodb database exists --account-name
 *                                     --name
 *                                     --resource-group
 *                                     [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_mongodb_database_exists_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_mongodb_database_exists_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    name(value: string): az_cosmosdb_mongodb_database_exists_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_mongodb_database_exists_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_mongodb_database_exists_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the MongoDB databases under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb mongodb database list --account-name
 *                                   --resource-group
 *                                   [--query-examples]
 *                                   [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_mongodb_database_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_mongodb_database_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_mongodb_database_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_mongodb_database_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_mongodb_database_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show the details of a MongoDB database under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb mongodb database show --account-name
 *                                   --name
 *                                   --resource-group
 *                                   [--query-examples]
 *                                   [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_mongodb_database_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_mongodb_database_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    name(value: string): az_cosmosdb_mongodb_database_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_mongodb_database_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_mongodb_database_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_mongodb_database_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Adds a virtual network rule to an existing Cosmos DB database account.
 *
 * Syntax:
 * ```
 * az cosmosdb network-rule add --subnet
 *                              [--ids]
 *                              [--ignore-missing-endpoint {false, true}]
 *                              [--name]
 *                              [--resource-group]
 *                              [--subscription]
 *                              [--virtual-network]
 * ```
 *
 * @param {string} subnet Name or ID of the subnet.
 */
class az_cosmosdb_network_rule_add_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, subnet: string) {
        super(commandParent);
        this.subnet(subnet)
    }

    /** Name or ID of the subnet. */
    subnet(value: string): az_cosmosdb_network_rule_add_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cosmosdb_network_rule_add_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Create firewall rule before the virtual network has vnet service endpoint enabled. */
    ignoreMissingVnetServiceEndpoint(value: boolean): az_cosmosdb_network_rule_add_command_builder {
        this.setFlag("--ignore-missing-vnet-service-endpoint", value.toString());
        return this;
    }

    /** Name of the Cosmos DB database account. */
    name(value: string): az_cosmosdb_network_rule_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_network_rule_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_network_rule_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The name of the VNET, which must be provided in conjunction with the name of the subnet. */
    virtualNetwork(value: string): az_cosmosdb_network_rule_add_command_builder {
        this.setFlag("--virtual-network", value);
        return this;
    }
}

/**
 * Lists the virtual network accounts associated with a Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb network-rule list --name
 *                               --resource-group
 *                               [--query-examples]
 *                               [--subscription]
 * ```
 *
 * @param {string} name Name of the Cosmos DB database account.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_network_rule_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the Cosmos DB database account. */
    name(value: string): az_cosmosdb_network_rule_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_network_rule_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_network_rule_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_network_rule_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Adds a virtual network rule to an existing Cosmos DB database account.
 *
 * Syntax:
 * ```
 * az cosmosdb network-rule remove --subnet
 *                                 [--ids]
 *                                 [--name]
 *                                 [--resource-group]
 *                                 [--subscription]
 *                                 [--virtual-network]
 * ```
 *
 * @param {string} subnet Name or ID of the subnet.
 */
class az_cosmosdb_network_rule_remove_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, subnet: string) {
        super(commandParent);
        this.subnet(subnet)
    }

    /** Name or ID of the subnet. */
    subnet(value: string): az_cosmosdb_network_rule_remove_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cosmosdb_network_rule_remove_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Cosmos DB database account. */
    name(value: string): az_cosmosdb_network_rule_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_network_rule_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_network_rule_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The name of the VNET, which must be provided in conjunction with the name of the subnet. */
    virtualNetwork(value: string): az_cosmosdb_network_rule_remove_command_builder {
        this.setFlag("--virtual-network", value);
        return this;
    }
}

/**
 * Approve the specified private endpoint connection associated with Azure Comsos DB.
 *
 * Syntax:
 * ```
 * az cosmosdb private-endpoint-connection approve [--account-name]
 *                                                 [--description]
 *                                                 [--id]
 *                                                 [--ids]
 *                                                 [--name]
 *                                                 [--resource-group]
 *                                                 [--subscription]
 * ```
 */
class az_cosmosdb_private_endpoint_connection_approve_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the Cosmos DB database account. Required if --connection-id is not specified. */
    accountName(value: string): az_cosmosdb_private_endpoint_connection_approve_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Comments for the approve operation. */
    description(value: string): az_cosmosdb_private_endpoint_connection_approve_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** The ID of the private endpoint connection associated with Azure Cosmos DB. If specified --account-name --resource-group/-g and --name/-n, this should be omitted. */
    id(value: string): az_cosmosdb_private_endpoint_connection_approve_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cosmosdb_private_endpoint_connection_approve_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the private endpoint connection associated with Azure Cosmos DB. Required if --connection-id is not specified. */
    name(value: string): az_cosmosdb_private_endpoint_connection_approve_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The resource group name of specified Cosmos DB account. Required if --connection-id is not specified. */
    resourceGroup(value: string): az_cosmosdb_private_endpoint_connection_approve_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_private_endpoint_connection_approve_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete the specified private endpoint connection associated with Azure Comsos DB.
 *
 * Syntax:
 * ```
 * az cosmosdb private-endpoint-connection delete [--account-name]
 *                                                [--id]
 *                                                [--ids]
 *                                                [--name]
 *                                                [--resource-group]
 *                                                [--subscription]
 * ```
 */
class az_cosmosdb_private_endpoint_connection_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the Cosmos DB database account. Required if --connection-id is not specified. */
    accountName(value: string): az_cosmosdb_private_endpoint_connection_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID of the private endpoint connection associated with Azure Cosmos DB. If specified --account-name --resource-group/-g and --name/-n, this should be omitted. */
    id(value: string): az_cosmosdb_private_endpoint_connection_delete_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cosmosdb_private_endpoint_connection_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the private endpoint connection associated with Azure Cosmos DB. Required if --connection-id is not specified. */
    name(value: string): az_cosmosdb_private_endpoint_connection_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The resource group name of specified Cosmos DB account. Required if --connection-id is not specified. */
    resourceGroup(value: string): az_cosmosdb_private_endpoint_connection_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_private_endpoint_connection_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Reject the specified private endpoint connection associated with Azure Comsos DB.
 *
 * Syntax:
 * ```
 * az cosmosdb private-endpoint-connection reject [--account-name]
 *                                                [--description]
 *                                                [--id]
 *                                                [--ids]
 *                                                [--name]
 *                                                [--resource-group]
 *                                                [--subscription]
 * ```
 */
class az_cosmosdb_private_endpoint_connection_reject_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the Cosmos DB database account. Required if --connection-id is not specified. */
    accountName(value: string): az_cosmosdb_private_endpoint_connection_reject_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Comments for the reject operation. */
    description(value: string): az_cosmosdb_private_endpoint_connection_reject_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** The ID of the private endpoint connection associated with Azure Cosmos DB. If specified --account-name --resource-group/-g and --name/-n, this should be omitted. */
    id(value: string): az_cosmosdb_private_endpoint_connection_reject_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cosmosdb_private_endpoint_connection_reject_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the private endpoint connection associated with Azure Cosmos DB. Required if --connection-id is not specified. */
    name(value: string): az_cosmosdb_private_endpoint_connection_reject_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The resource group name of specified Cosmos DB account. Required if --connection-id is not specified. */
    resourceGroup(value: string): az_cosmosdb_private_endpoint_connection_reject_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_private_endpoint_connection_reject_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show details of a private endpoint connection associated with Azure Comsos DB.
 *
 * Syntax:
 * ```
 * az cosmosdb private-endpoint-connection show [--account-name]
 *                                              [--id]
 *                                              [--ids]
 *                                              [--name]
 *                                              [--query-examples]
 *                                              [--resource-group]
 *                                              [--subscription]
 * ```
 */
class az_cosmosdb_private_endpoint_connection_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the Cosmos DB database account. Required if --connection-id is not specified. */
    accountName(value: string): az_cosmosdb_private_endpoint_connection_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID of the private endpoint connection associated with Azure Cosmos DB. If specified --account-name --resource-group/-g and --name/-n, this should be omitted. */
    id(value: string): az_cosmosdb_private_endpoint_connection_show_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cosmosdb_private_endpoint_connection_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the private endpoint connection associated with Azure Cosmos DB. Required if --connection-id is not specified. */
    name(value: string): az_cosmosdb_private_endpoint_connection_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_private_endpoint_connection_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The resource group name of specified Cosmos DB account. Required if --connection-id is not specified. */
    resourceGroup(value: string): az_cosmosdb_private_endpoint_connection_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_private_endpoint_connection_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the private link resources supported for Azure Comsos DB.
 *
 * Syntax:
 * ```
 * az cosmosdb private-link-resource list --account-name
 *                                        --resource-group
 *                                        [--query-examples]
 *                                        [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_private_link_resource_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_private_link_resource_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_private_link_resource_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_private_link_resource_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_private_link_resource_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Migrate the throughput of the SQL container between autoscale and manually provisioned.
 *
 * Syntax:
 * ```
 * az cosmosdb sql container throughput migrate --account-name
 *                                              --database-name
 *                                              --name
 *                                              --resource-group
 *                                              --throughput-type {autoscale, manual}
 *                                              [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} name Container name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'autoscale' | 'manual'} throughputType The type of throughput to migrate to.
 */
class az_cosmosdb_sql_container_throughput_migrate_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, name: string, resourceGroup: string, throughputType: 'autoscale' | 'manual') {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.throughputType(throughputType)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_container_throughput_migrate_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_sql_container_throughput_migrate_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Container name. */
    name(value: string): az_cosmosdb_sql_container_throughput_migrate_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_container_throughput_migrate_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The type of throughput to migrate to. */
    throughputType(value: 'autoscale' | 'manual'): az_cosmosdb_sql_container_throughput_migrate_command_builder {
        this.setFlag("--throughput-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_container_throughput_migrate_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the throughput of the SQL container under an Azure Cosmos DB SQL database.
 *
 * Syntax:
 * ```
 * az cosmosdb sql container throughput show --account-name
 *                                           --database-name
 *                                           --name
 *                                           --resource-group
 *                                           [--query-examples]
 *                                           [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} name Container name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_container_throughput_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_container_throughput_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_sql_container_throughput_show_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Container name. */
    name(value: string): az_cosmosdb_sql_container_throughput_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_container_throughput_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_sql_container_throughput_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_container_throughput_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update the throughput of the SQL container under an Azure Cosmos DB SQL database.
 *
 * Syntax:
 * ```
 * az cosmosdb sql container throughput update --account-name
 *                                             --database-name
 *                                             --name
 *                                             --resource-group
 *                                             [--max-throughput]
 *                                             [--subscription]
 *                                             [--throughput]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} name Container name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_container_throughput_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_container_throughput_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_sql_container_throughput_update_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Container name. */
    name(value: string): az_cosmosdb_sql_container_throughput_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_container_throughput_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    maxThroughput(value: string): az_cosmosdb_sql_container_throughput_update_command_builder {
        this.setFlag("--max-throughput", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_container_throughput_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The throughput of SQL container (RU/s). */
    throughput(value: string): az_cosmosdb_sql_container_throughput_update_command_builder {
        this.setFlag("--throughput", value);
        return this;
    }
}

/**
 * Create an SQL container under an Azure Cosmos DB SQL database.
 *
 * Syntax:
 * ```
 * az cosmosdb sql container create --account-name
 *                                  --database-name
 *                                  --name
 *                                  --partition-key-path
 *                                  --resource-group
 *                                  [--conflict-resolution-policy]
 *                                  [--idx]
 *                                  [--max-throughput]
 *                                  [--partition-key-version]
 *                                  [--subscription]
 *                                  [--throughput]
 *                                  [--ttl]
 *                                  [--unique-key-policy]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} name Container name.
 * @param {string} partitionKeyPath Partition Key Path, e.g., '/address/zipcode'.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_container_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, name: string, partitionKeyPath: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.name(name)
        this.partitionKeyPath(partitionKeyPath)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_container_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_sql_container_create_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Container name. */
    name(value: string): az_cosmosdb_sql_container_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Partition Key Path, e.g., '/address/zipcode'. */
    partitionKeyPath(value: string): az_cosmosdb_sql_container_create_command_builder {
        this.setFlag("--partition-key-path", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_container_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Conflict Resolution Policy, you can enter it as a string or as a file, e.g., --conflict-resolution-policy @policy-file.json or --conflict-resolution-policy "{"mode": "lastWriterWins", "conflictResolutionPath": "/path"}". */
    conflictResolutionPolicy(value: string): az_cosmosdb_sql_container_create_command_builder {
        this.setFlag("--conflict-resolution-policy", value);
        return this;
    }

    /** Indexing Policy, you can enter it as a string or as a file, e.g., --idx @policy-file.json or --idx "{"indexingMode": "consistent", "automatic": true, "includedPaths": [{"path": "/\*"}], "excludedPaths": [{ "path": "/headquarters/employees/?"}, { "path": "/\"_etag\"/?"}]}". */
    idx(value: string): az_cosmosdb_sql_container_create_command_builder {
        this.setFlag("--idx", value);
        return this;
    }

    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    maxThroughput(value: string): az_cosmosdb_sql_container_create_command_builder {
        this.setFlag("--max-throughput", value);
        return this;
    }

    /** The version of partition key. */
    partitionKeyVersion(value: string): az_cosmosdb_sql_container_create_command_builder {
        this.setFlag("--partition-key-version", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_container_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The throughput of SQL container (RU/s). Default value is 400. Omit this parameter if the database has shared throughput unless the container should have dedicated throughput. */
    throughput(value: string): az_cosmosdb_sql_container_create_command_builder {
        this.setFlag("--throughput", value);
        return this;
    }

    /** Default TTL. If the value is missing or set to "-1", items don’t expire. If the value is set to "n", items will expire "n" seconds after last modified time. */
    ttl(value: string): az_cosmosdb_sql_container_create_command_builder {
        this.setFlag("--ttl", value);
        return this;
    }

    /** Unique Key Policy, you can enter it as a string or as a file, e.g., --unique-key-policy @policy-file.json or --unique-key-policy "{"uniqueKeys": [{"paths": ["/path/to/key1"]}, {"paths": ["/path/to/key2"]}]}". */
    uniqueKeyPolicy(value: string): az_cosmosdb_sql_container_create_command_builder {
        this.setFlag("--unique-key-policy", value);
        return this;
    }
}

/**
 * Delete the SQL container under an Azure Cosmos DB SQL database.
 *
 * Syntax:
 * ```
 * az cosmosdb sql container delete --account-name
 *                                  --database-name
 *                                  --name
 *                                  --resource-group
 *                                  [--subscription]
 *                                  [--yes]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} name Container name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_container_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_container_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_sql_container_delete_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Container name. */
    name(value: string): az_cosmosdb_sql_container_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_container_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_container_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_cosmosdb_sql_container_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * Checks if an Azure Cosmos DB SQL container exists.
 *
 * Syntax:
 * ```
 * az cosmosdb sql container exists --account-name
 *                                  --database-name
 *                                  --name
 *                                  --resource-group
 *                                  [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} name Container name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_container_exists_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_container_exists_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_sql_container_exists_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Container name. */
    name(value: string): az_cosmosdb_sql_container_exists_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_container_exists_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_container_exists_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the SQL containers under an Azure Cosmos DB SQL database.
 *
 * Syntax:
 * ```
 * az cosmosdb sql container list --account-name
 *                                --database-name
 *                                --resource-group
 *                                [--query-examples]
 *                                [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_container_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_container_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_sql_container_list_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_container_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_sql_container_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_container_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show the details of a SQL container under an Azure Cosmos DB SQL database.
 *
 * Syntax:
 * ```
 * az cosmosdb sql container show --account-name
 *                                --database-name
 *                                --name
 *                                --resource-group
 *                                [--query-examples]
 *                                [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} name Container name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_container_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_container_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_sql_container_show_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Container name. */
    name(value: string): az_cosmosdb_sql_container_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_container_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_sql_container_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_container_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update an SQL container under an Azure Cosmos DB SQL database.
 *
 * Syntax:
 * ```
 * az cosmosdb sql container update --account-name
 *                                  --database-name
 *                                  --name
 *                                  --resource-group
 *                                  [--idx]
 *                                  [--subscription]
 *                                  [--ttl]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} databaseName Database name.
 * @param {string} name Container name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_container_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_container_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_sql_container_update_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Container name. */
    name(value: string): az_cosmosdb_sql_container_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_container_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Indexing Policy, you can enter it as a string or as a file, e.g., --idx @policy-file.json or --idx "{"indexingMode": "consistent", "automatic": true, "includedPaths": [{"path": "/\*"}], "excludedPaths": [{ "path": "/headquarters/employees/?"}, { "path": "/\"_etag\"/?"}]}". */
    idx(value: string): az_cosmosdb_sql_container_update_command_builder {
        this.setFlag("--idx", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_container_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Default TTL. If the value is missing or set to "-1", items don’t expire. If the value is set to "n", items will expire "n" seconds after last modified time. */
    ttl(value: string): az_cosmosdb_sql_container_update_command_builder {
        this.setFlag("--ttl", value);
        return this;
    }
}

/**
 * Migrate the throughput of the SQL database between autoscale and manually provisioned.
 *
 * Syntax:
 * ```
 * az cosmosdb sql database throughput migrate --account-name
 *                                             --name
 *                                             --resource-group
 *                                             --throughput-type {autoscale, manual}
 *                                             [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'autoscale' | 'manual'} throughputType The type of throughput to migrate to.
 */
class az_cosmosdb_sql_database_throughput_migrate_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string, throughputType: 'autoscale' | 'manual') {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.throughputType(throughputType)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_database_throughput_migrate_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    name(value: string): az_cosmosdb_sql_database_throughput_migrate_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_database_throughput_migrate_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The type of throughput to migrate to. */
    throughputType(value: 'autoscale' | 'manual'): az_cosmosdb_sql_database_throughput_migrate_command_builder {
        this.setFlag("--throughput-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_database_throughput_migrate_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the throughput of the SQL database under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb sql database throughput show --account-name
 *                                          --name
 *                                          --resource-group
 *                                          [--query-examples]
 *                                          [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_database_throughput_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_database_throughput_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    name(value: string): az_cosmosdb_sql_database_throughput_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_database_throughput_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_sql_database_throughput_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_database_throughput_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update the throughput of the SQL database under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb sql database throughput update --account-name
 *                                            --name
 *                                            --resource-group
 *                                            [--max-throughput]
 *                                            [--subscription]
 *                                            [--throughput]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_database_throughput_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_database_throughput_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    name(value: string): az_cosmosdb_sql_database_throughput_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_database_throughput_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    maxThroughput(value: string): az_cosmosdb_sql_database_throughput_update_command_builder {
        this.setFlag("--max-throughput", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_database_throughput_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The throughput of SQL database (RU/s). */
    throughput(value: string): az_cosmosdb_sql_database_throughput_update_command_builder {
        this.setFlag("--throughput", value);
        return this;
    }
}

/**
 * Create an SQL database under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb sql database create --account-name
 *                                 --name
 *                                 --resource-group
 *                                 [--max-throughput]
 *                                 [--subscription]
 *                                 [--throughput]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_database_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_database_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    name(value: string): az_cosmosdb_sql_database_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_database_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    maxThroughput(value: string): az_cosmosdb_sql_database_create_command_builder {
        this.setFlag("--max-throughput", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_database_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The throughput of SQL database (RU/s). Default value is 400. */
    throughput(value: string): az_cosmosdb_sql_database_create_command_builder {
        this.setFlag("--throughput", value);
        return this;
    }
}

/**
 * Delete the SQL database under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb sql database delete --account-name
 *                                 --name
 *                                 --resource-group
 *                                 [--subscription]
 *                                 [--yes]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_database_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_database_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    name(value: string): az_cosmosdb_sql_database_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_database_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_database_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_cosmosdb_sql_database_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * Checks if an Azure Cosmos DB SQL database exists.
 *
 * Syntax:
 * ```
 * az cosmosdb sql database exists --account-name
 *                                 --name
 *                                 --resource-group
 *                                 [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_database_exists_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_database_exists_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    name(value: string): az_cosmosdb_sql_database_exists_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_database_exists_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_database_exists_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the SQL databases under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb sql database list --account-name
 *                               --resource-group
 *                               [--query-examples]
 *                               [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_database_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_database_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_database_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_sql_database_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_database_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show the details of a SQL database under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb sql database show --account-name
 *                               --name
 *                               --resource-group
 *                               [--query-examples]
 *                               [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_database_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_database_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Database name. */
    name(value: string): az_cosmosdb_sql_database_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_database_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_sql_database_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_database_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create an SQL stored procedure under an Azure Cosmos DB SQL container.
 *
 * Syntax:
 * ```
 * az cosmosdb sql stored-procedure create --account-name
 *                                         --body
 *                                         --container-name
 *                                         --database-name
 *                                         --name
 *                                         --resource-group
 *                                         [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} body StoredProcedure body, you can enter it as a string or as a file, e.g., --body @sprocbody-file.json.
 * @param {string} containerName Container name.
 * @param {string} databaseName Database name.
 * @param {string} name StoredProcedure name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_stored_procedure_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, body: string, containerName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.body(body)
        this.containerName(containerName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_stored_procedure_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** StoredProcedure body, you can enter it as a string or as a file, e.g., --body @sprocbody-file.json. */
    body(value: string): az_cosmosdb_sql_stored_procedure_create_command_builder {
        this.setFlag("--body", value);
        return this;
    }

    /** Container name. */
    containerName(value: string): az_cosmosdb_sql_stored_procedure_create_command_builder {
        this.setFlag("--container-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_sql_stored_procedure_create_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** StoredProcedure name. */
    name(value: string): az_cosmosdb_sql_stored_procedure_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_stored_procedure_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_stored_procedure_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete the SQL stored procedure under an Azure Cosmos DB SQL container.
 *
 * Syntax:
 * ```
 * az cosmosdb sql stored-procedure delete --account-name
 *                                         --container-name
 *                                         --database-name
 *                                         --name
 *                                         --resource-group
 *                                         [--subscription]
 *                                         [--yes]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} containerName Container name.
 * @param {string} databaseName Database name.
 * @param {string} name StoredProcedure name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_stored_procedure_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, containerName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.containerName(containerName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_stored_procedure_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Container name. */
    containerName(value: string): az_cosmosdb_sql_stored_procedure_delete_command_builder {
        this.setFlag("--container-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_sql_stored_procedure_delete_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** StoredProcedure name. */
    name(value: string): az_cosmosdb_sql_stored_procedure_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_stored_procedure_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_stored_procedure_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_cosmosdb_sql_stored_procedure_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * List the SQL stored procedures under an Azure Cosmos DB SQL container.
 *
 * Syntax:
 * ```
 * az cosmosdb sql stored-procedure list --account-name
 *                                       --container-name
 *                                       --database-name
 *                                       --resource-group
 *                                       [--query-examples]
 *                                       [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} containerName Container name.
 * @param {string} databaseName Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_stored_procedure_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, containerName: string, databaseName: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.containerName(containerName)
        this.databaseName(databaseName)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_stored_procedure_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Container name. */
    containerName(value: string): az_cosmosdb_sql_stored_procedure_list_command_builder {
        this.setFlag("--container-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_sql_stored_procedure_list_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_stored_procedure_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_sql_stored_procedure_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_stored_procedure_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show the details of a SQL stored procedure under an Azure Cosmos DB SQL container.
 *
 * Syntax:
 * ```
 * az cosmosdb sql stored-procedure show --account-name
 *                                       --container-name
 *                                       --database-name
 *                                       --name
 *                                       --resource-group
 *                                       [--query-examples]
 *                                       [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} containerName Container name.
 * @param {string} databaseName Database name.
 * @param {string} name StoredProcedure name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_stored_procedure_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, containerName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.containerName(containerName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_stored_procedure_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Container name. */
    containerName(value: string): az_cosmosdb_sql_stored_procedure_show_command_builder {
        this.setFlag("--container-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_sql_stored_procedure_show_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** StoredProcedure name. */
    name(value: string): az_cosmosdb_sql_stored_procedure_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_stored_procedure_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_sql_stored_procedure_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_stored_procedure_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Creates or Updates an Azure Cosmos DB SQL stored procedure.
 *
 * Syntax:
 * ```
 * az cosmosdb sql stored-procedure update --account-name
 *                                         --body
 *                                         --container-name
 *                                         --database-name
 *                                         --name
 *                                         --resource-group
 *                                         [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} body StoredProcedure body, you can enter it as a string or as a file, e.g., --body @sprocbody-file.json.
 * @param {string} containerName Container name.
 * @param {string} databaseName Database name.
 * @param {string} name StoredProcedure name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_stored_procedure_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, body: string, containerName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.body(body)
        this.containerName(containerName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_stored_procedure_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** StoredProcedure body, you can enter it as a string or as a file, e.g., --body @sprocbody-file.json. */
    body(value: string): az_cosmosdb_sql_stored_procedure_update_command_builder {
        this.setFlag("--body", value);
        return this;
    }

    /** Container name. */
    containerName(value: string): az_cosmosdb_sql_stored_procedure_update_command_builder {
        this.setFlag("--container-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_sql_stored_procedure_update_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** StoredProcedure name. */
    name(value: string): az_cosmosdb_sql_stored_procedure_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_stored_procedure_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_stored_procedure_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create an SQL trigger under an Azure Cosmos DB SQL container.
 *
 * Syntax:
 * ```
 * az cosmosdb sql trigger create --account-name
 *                                --body
 *                                --container-name
 *                                --database-name
 *                                --name
 *                                --resource-group
 *                                [--operation {All, Create, Delete, Replace, Update}]
 *                                [--subscription]
 *                                [--type {Post, Pre}]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} body Trigger body, you can enter it as a string or as a file, e.g., --body @triggerbody-file.json.
 * @param {string} containerName Container name.
 * @param {string} databaseName Database name.
 * @param {string} name Trigger name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_trigger_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, body: string, containerName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.body(body)
        this.containerName(containerName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_trigger_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Trigger body, you can enter it as a string or as a file, e.g., --body @triggerbody-file.json. */
    body(value: string): az_cosmosdb_sql_trigger_create_command_builder {
        this.setFlag("--body", value);
        return this;
    }

    /** Container name. */
    containerName(value: string): az_cosmosdb_sql_trigger_create_command_builder {
        this.setFlag("--container-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_sql_trigger_create_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Trigger name. */
    name(value: string): az_cosmosdb_sql_trigger_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_trigger_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The operation of the trigger. */
    operation(value: 'All' | 'Create' | 'Delete' | 'Replace' | 'Update'): az_cosmosdb_sql_trigger_create_command_builder {
        this.setFlag("--operation", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_trigger_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Trigger type. */
    type(value: 'Post' | 'Pre'): az_cosmosdb_sql_trigger_create_command_builder {
        this.setFlag("--type", value);
        return this;
    }
}

/**
 * Delete the SQL trigger under an Azure Cosmos DB SQL container.
 *
 * Syntax:
 * ```
 * az cosmosdb sql trigger delete --account-name
 *                                --container-name
 *                                --database-name
 *                                --name
 *                                --resource-group
 *                                [--subscription]
 *                                [--yes]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} containerName Container name.
 * @param {string} databaseName Database name.
 * @param {string} name Trigger name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_trigger_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, containerName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.containerName(containerName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_trigger_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Container name. */
    containerName(value: string): az_cosmosdb_sql_trigger_delete_command_builder {
        this.setFlag("--container-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_sql_trigger_delete_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Trigger name. */
    name(value: string): az_cosmosdb_sql_trigger_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_trigger_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_trigger_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_cosmosdb_sql_trigger_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * List the SQL triggers under an Azure Cosmos DB SQL container.
 *
 * Syntax:
 * ```
 * az cosmosdb sql trigger list --account-name
 *                              --container-name
 *                              --database-name
 *                              --resource-group
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} containerName Container name.
 * @param {string} databaseName Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_trigger_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, containerName: string, databaseName: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.containerName(containerName)
        this.databaseName(databaseName)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_trigger_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Container name. */
    containerName(value: string): az_cosmosdb_sql_trigger_list_command_builder {
        this.setFlag("--container-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_sql_trigger_list_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_trigger_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_sql_trigger_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_trigger_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show the details of a SQL trigger under an Azure Cosmos DB SQL container.
 *
 * Syntax:
 * ```
 * az cosmosdb sql trigger show --account-name
 *                              --container-name
 *                              --database-name
 *                              --name
 *                              --resource-group
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} containerName Container name.
 * @param {string} databaseName Database name.
 * @param {string} name Trigger name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_trigger_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, containerName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.containerName(containerName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_trigger_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Container name. */
    containerName(value: string): az_cosmosdb_sql_trigger_show_command_builder {
        this.setFlag("--container-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_sql_trigger_show_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Trigger name. */
    name(value: string): az_cosmosdb_sql_trigger_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_trigger_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_sql_trigger_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_trigger_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Updates an Azure Cosmos DB SQL trigger.
 *
 * Syntax:
 * ```
 * az cosmosdb sql trigger update --account-name
 *                                --container-name
 *                                --database-name
 *                                --name
 *                                --resource-group
 *                                [--body]
 *                                [--operation {All, Create, Delete, Replace, Update}]
 *                                [--subscription]
 *                                [--type {Post, Pre}]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} containerName Container name.
 * @param {string} databaseName Database name.
 * @param {string} name Trigger name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_trigger_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, containerName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.containerName(containerName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_trigger_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Container name. */
    containerName(value: string): az_cosmosdb_sql_trigger_update_command_builder {
        this.setFlag("--container-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_sql_trigger_update_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Trigger name. */
    name(value: string): az_cosmosdb_sql_trigger_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_trigger_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Trigger body, you can enter it as a string or as a file, e.g., --body @triggerbody-file.json. */
    body(value: string): az_cosmosdb_sql_trigger_update_command_builder {
        this.setFlag("--body", value);
        return this;
    }

    /** The operation of the trigger. */
    operation(value: 'All' | 'Create' | 'Delete' | 'Replace' | 'Update'): az_cosmosdb_sql_trigger_update_command_builder {
        this.setFlag("--operation", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_trigger_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Trigger type. */
    type(value: 'Post' | 'Pre'): az_cosmosdb_sql_trigger_update_command_builder {
        this.setFlag("--type", value);
        return this;
    }
}

/**
 * Create an SQL user defined function under an Azure Cosmos DB SQL container.
 *
 * Syntax:
 * ```
 * az cosmosdb sql user-defined-function create --account-name
 *                                              --body
 *                                              --container-name
 *                                              --database-name
 *                                              --name
 *                                              --resource-group
 *                                              [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} body UserDefinedFunction body, you can enter it as a string or as a file, e.g., --body @udfbody-file.json.
 * @param {string} containerName Container name.
 * @param {string} databaseName Database name.
 * @param {string} name UserDefinedFunction name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_user_defined_function_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, body: string, containerName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.body(body)
        this.containerName(containerName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_user_defined_function_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** UserDefinedFunction body, you can enter it as a string or as a file, e.g., --body @udfbody-file.json. */
    body(value: string): az_cosmosdb_sql_user_defined_function_create_command_builder {
        this.setFlag("--body", value);
        return this;
    }

    /** Container name. */
    containerName(value: string): az_cosmosdb_sql_user_defined_function_create_command_builder {
        this.setFlag("--container-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_sql_user_defined_function_create_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** UserDefinedFunction name. */
    name(value: string): az_cosmosdb_sql_user_defined_function_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_user_defined_function_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_user_defined_function_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete the SQL user defined function under an Azure Cosmos DB SQL container.
 *
 * Syntax:
 * ```
 * az cosmosdb sql user-defined-function delete --account-name
 *                                              --container-name
 *                                              --database-name
 *                                              --name
 *                                              --resource-group
 *                                              [--subscription]
 *                                              [--yes]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} containerName Container name.
 * @param {string} databaseName Database name.
 * @param {string} name UserDefinedFunction name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_user_defined_function_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, containerName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.containerName(containerName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_user_defined_function_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Container name. */
    containerName(value: string): az_cosmosdb_sql_user_defined_function_delete_command_builder {
        this.setFlag("--container-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_sql_user_defined_function_delete_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** UserDefinedFunction name. */
    name(value: string): az_cosmosdb_sql_user_defined_function_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_user_defined_function_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_user_defined_function_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_cosmosdb_sql_user_defined_function_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * List the SQL user defined functions under an Azure Cosmos DB SQL container.
 *
 * Syntax:
 * ```
 * az cosmosdb sql user-defined-function list --account-name
 *                                            --container-name
 *                                            --database-name
 *                                            --resource-group
 *                                            [--query-examples]
 *                                            [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} containerName Container name.
 * @param {string} databaseName Database name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_user_defined_function_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, containerName: string, databaseName: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.containerName(containerName)
        this.databaseName(databaseName)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_user_defined_function_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Container name. */
    containerName(value: string): az_cosmosdb_sql_user_defined_function_list_command_builder {
        this.setFlag("--container-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_sql_user_defined_function_list_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_user_defined_function_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_sql_user_defined_function_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_user_defined_function_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show the details of a SQL user defined function under an Azure Cosmos DB SQL container.
 *
 * Syntax:
 * ```
 * az cosmosdb sql user-defined-function show --account-name
 *                                            --container-name
 *                                            --database-name
 *                                            --name
 *                                            --resource-group
 *                                            [--query-examples]
 *                                            [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} containerName Container name.
 * @param {string} databaseName Database name.
 * @param {string} name UserDefinedFunction name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_user_defined_function_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, containerName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.containerName(containerName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_user_defined_function_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Container name. */
    containerName(value: string): az_cosmosdb_sql_user_defined_function_show_command_builder {
        this.setFlag("--container-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_sql_user_defined_function_show_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** UserDefinedFunction name. */
    name(value: string): az_cosmosdb_sql_user_defined_function_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_user_defined_function_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_sql_user_defined_function_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_user_defined_function_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Creates or Updates an Azure Cosmos DB SQL user defined function.
 *
 * Syntax:
 * ```
 * az cosmosdb sql user-defined-function update --account-name
 *                                              --body
 *                                              --container-name
 *                                              --database-name
 *                                              --name
 *                                              --resource-group
 *                                              [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} body UserDefinedFunction body, you can enter it as a string or as a file, e.g., --body @udfbody-file.json.
 * @param {string} containerName Container name.
 * @param {string} databaseName Database name.
 * @param {string} name UserDefinedFunction name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_sql_user_defined_function_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, body: string, containerName: string, databaseName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.body(body)
        this.containerName(containerName)
        this.databaseName(databaseName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_sql_user_defined_function_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** UserDefinedFunction body, you can enter it as a string or as a file, e.g., --body @udfbody-file.json. */
    body(value: string): az_cosmosdb_sql_user_defined_function_update_command_builder {
        this.setFlag("--body", value);
        return this;
    }

    /** Container name. */
    containerName(value: string): az_cosmosdb_sql_user_defined_function_update_command_builder {
        this.setFlag("--container-name", value);
        return this;
    }

    /** Database name. */
    databaseName(value: string): az_cosmosdb_sql_user_defined_function_update_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** UserDefinedFunction name. */
    name(value: string): az_cosmosdb_sql_user_defined_function_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_sql_user_defined_function_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_sql_user_defined_function_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Migrate the throughput of the Table between autoscale and manually provisioned.
 *
 * Syntax:
 * ```
 * az cosmosdb table throughput migrate --account-name
 *                                      --name
 *                                      --resource-group
 *                                      --throughput-type {autoscale, manual}
 *                                      [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Table name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'autoscale' | 'manual'} throughputType The type of throughput to migrate to.
 */
class az_cosmosdb_table_throughput_migrate_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string, throughputType: 'autoscale' | 'manual') {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.throughputType(throughputType)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_table_throughput_migrate_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Table name. */
    name(value: string): az_cosmosdb_table_throughput_migrate_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_table_throughput_migrate_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The type of throughput to migrate to. */
    throughputType(value: 'autoscale' | 'manual'): az_cosmosdb_table_throughput_migrate_command_builder {
        this.setFlag("--throughput-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_table_throughput_migrate_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the throughput of the Table under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb table throughput show --account-name
 *                                   --name
 *                                   --resource-group
 *                                   [--query-examples]
 *                                   [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Table name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_table_throughput_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_table_throughput_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Table name. */
    name(value: string): az_cosmosdb_table_throughput_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_table_throughput_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_table_throughput_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_table_throughput_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update the throughput of the Table under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb table throughput update --account-name
 *                                     --name
 *                                     --resource-group
 *                                     [--max-throughput]
 *                                     [--subscription]
 *                                     [--throughput]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Table name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_table_throughput_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_table_throughput_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Table name. */
    name(value: string): az_cosmosdb_table_throughput_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_table_throughput_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    maxThroughput(value: string): az_cosmosdb_table_throughput_update_command_builder {
        this.setFlag("--max-throughput", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_table_throughput_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The throughput of Table (RU/s). */
    throughput(value: string): az_cosmosdb_table_throughput_update_command_builder {
        this.setFlag("--throughput", value);
        return this;
    }
}

/**
 * Create an Table under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb table create --account-name
 *                          --name
 *                          --resource-group
 *                          [--max-throughput]
 *                          [--subscription]
 *                          [--throughput]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Table name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_table_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_table_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Table name. */
    name(value: string): az_cosmosdb_table_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_table_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    maxThroughput(value: string): az_cosmosdb_table_create_command_builder {
        this.setFlag("--max-throughput", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_table_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The throughput of Table (RU/s). Default value is 400. */
    throughput(value: string): az_cosmosdb_table_create_command_builder {
        this.setFlag("--throughput", value);
        return this;
    }
}

/**
 * Delete the Table under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb table delete --account-name
 *                          --name
 *                          --resource-group
 *                          [--subscription]
 *                          [--yes]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Table name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_table_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_table_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Table name. */
    name(value: string): az_cosmosdb_table_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_table_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_table_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_cosmosdb_table_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * Checks if an Azure Cosmos DB table exists.
 *
 * Syntax:
 * ```
 * az cosmosdb table exists --account-name
 *                          --name
 *                          --resource-group
 *                          [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Table name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_table_exists_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_table_exists_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Table name. */
    name(value: string): az_cosmosdb_table_exists_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_table_exists_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_table_exists_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the Tables under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb table list --account-name
 *                        --resource-group
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_table_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_table_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_table_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_table_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_table_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show the details of a Table under an Azure Cosmos DB account.
 *
 * Syntax:
 * ```
 * az cosmosdb table show --account-name
 *                        --name
 *                        --resource-group
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} accountName Cosmosdb account name.
 * @param {string} name Table name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_table_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cosmosdb account name. */
    accountName(value: string): az_cosmosdb_table_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Table name. */
    name(value: string): az_cosmosdb_table_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_table_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_table_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_table_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Checks if an Azure Cosmos DB account name exists.
 *
 * Syntax:
 * ```
 * az cosmosdb check-name-exists [--ids]
 *                               [--name]
 *                               [--subscription]
 * ```
 */
class az_cosmosdb_check_name_exists_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cosmosdb_check_name_exists_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Cosmos DB database account. */
    name(value: string): az_cosmosdb_check_name_exists_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_check_name_exists_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Creates a new Azure Cosmos DB database account.
 *
 * Syntax:
 * ```
 * az cosmosdb create --name
 *                    --resource-group
 *                    [--capabilities]
 *                    [--default-consistency-level {BoundedStaleness, ConsistentPrefix, Eventual, Session, Strong}]
 *                    [--disable-key-based-metadata-write-access {false, true}]
 *                    [--enable-analytical-storage {false, true}]
 *                    [--enable-automatic-failover {false, true}]
 *                    [--enable-free-tier {false, true}]
 *                    [--enable-multiple-write-locations {false, true}]
 *                    [--enable-public-network {false, true}]
 *                    [--enable-virtual-network {false, true}]
 *                    [--ip-range-filter]
 *                    [--key-uri]
 *                    [--kind {GlobalDocumentDB, MongoDB, Parse}]
 *                    [--locations]
 *                    [--max-interval]
 *                    [--max-staleness-prefix]
 *                    [--server-version {3.2, 3.6}]
 *                    [--subscription]
 *                    [--tags]
 *                    [--virtual-network-rules]
 * ```
 *
 * @param {string} name Name of the Cosmos DB database account.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cosmosdb_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the Cosmos DB database account. */
    name(value: string): az_cosmosdb_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Set custom capabilities on the Cosmos DB database account. */
    capabilities(value: string): az_cosmosdb_create_command_builder {
        this.setFlag("--capabilities", value);
        return this;
    }

    /** Default consistency level of the Cosmos DB database account. */
    defaultConsistencyLevel(value: 'BoundedStaleness' | 'ConsistentPrefix' | 'Eventual' | 'Session' | 'Strong'): az_cosmosdb_create_command_builder {
        this.setFlag("--default-consistency-level", value);
        return this;
    }

    /** Disable write operations on metadata resources (databases, containers, throughput) via account keys. */
    disableKeyBasedMetadataWriteAccess(value: boolean): az_cosmosdb_create_command_builder {
        this.setFlag("--disable-key-based-metadata-write-access", value.toString());
        return this;
    }

    /** Flag to enable log storage on the account. */
    enableAnalyticalStorage(value: boolean): az_cosmosdb_create_command_builder {
        this.setFlag("--enable-analytical-storage", value.toString());
        return this;
    }

    /** Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account. */
    enableAutomaticFailover(value: boolean): az_cosmosdb_create_command_builder {
        this.setFlag("--enable-automatic-failover", value.toString());
        return this;
    }

    /** If enabled the account is free-tier. */
    enableFreeTier(value: boolean): az_cosmosdb_create_command_builder {
        this.setFlag("--enable-free-tier", value.toString());
        return this;
    }

    /** Enable Multiple Write Locations. */
    enableMultipleWriteLocations(value: boolean): az_cosmosdb_create_command_builder {
        this.setFlag("--enable-multiple-write-locations", value.toString());
        return this;
    }

    /** Enable or disable public network access to server. */
    enablePublicNetwork(value: boolean): az_cosmosdb_create_command_builder {
        this.setFlag("--enable-public-network", value.toString());
        return this;
    }

    /** Enables virtual network on the Cosmos DB database account. */
    enableVirtualNetwork(value: boolean): az_cosmosdb_create_command_builder {
        this.setFlag("--enable-virtual-network", value.toString());
        return this;
    }

    /** Firewall support. Specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. IP addresses/ranges must be comma-separated and must not contain any spaces. */
    ipRangeFilter(value: string): az_cosmosdb_create_command_builder {
        this.setFlag("--ip-range-filter", value);
        return this;
    }

    /** The URI of the key vault. */
    keyUri(value: string): az_cosmosdb_create_command_builder {
        this.setFlag("--key-uri", value);
        return this;
    }

    /** The type of Cosmos DB database account to create. */
    kind(value: 'GlobalDocumentDB' | 'MongoDB' | 'Parse'): az_cosmosdb_create_command_builder {
        this.setFlag("--kind", value);
        return this;
    }

    /** Add a location to the Cosmos DB database account. */
    locations(value: string): az_cosmosdb_create_command_builder {
        this.setFlag("--locations", value);
        return this;
    }

    /** When used with Bounded Staleness consistency, this value represents the time amount of staleness (in seconds) tolerated. Accepted range for this value is 1 - 100. */
    maxInterval(value: string): az_cosmosdb_create_command_builder {
        this.setFlag("--max-interval", value);
        return this;
    }

    /** When used with Bounded Staleness consistency, this value represents the number of stale requests tolerated. Accepted range for this value is 1 - 2,147,483,647. */
    maxStalenessPrefix(value: string): az_cosmosdb_create_command_builder {
        this.setFlag("--max-staleness-prefix", value);
        return this;
    }

    /** Valid only for MongoDB accounts. */
    serverVersion(value: '3.2' | '3.6'): az_cosmosdb_create_command_builder {
        this.setFlag("--server-version", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_cosmosdb_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** ACL's for virtual network. */
    virtualNetworkRules(value: string): az_cosmosdb_create_command_builder {
        this.setFlag("--virtual-network-rules", value);
        return this;
    }
}

/**
 * Deletes an Azure Cosmos DB database account.
 *
 * Syntax:
 * ```
 * az cosmosdb delete [--ids]
 *                    [--name]
 *                    [--resource-group]
 *                    [--subscription]
 *                    [--yes]
 * ```
 */
class az_cosmosdb_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cosmosdb_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Cosmos DB database account. */
    name(value: string): az_cosmosdb_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_cosmosdb_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * Changes the failover priority for the Azure Cosmos DB database account.
 *
 * Syntax:
 * ```
 * az cosmosdb failover-priority-change --failover-policies
 *                                      [--ids]
 *                                      [--name]
 *                                      [--resource-group]
 *                                      [--subscription]
 * ```
 *
 * @param {string} failoverPolicies Space-separated failover policies in 'regionName=failoverPriority' format. E.g eastus=0 westus=1.
 */
class az_cosmosdb_failover_priority_change_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, failoverPolicies: string) {
        super(commandParent);
        this.failoverPolicies(failoverPolicies)
    }

    /** Space-separated failover policies in 'regionName=failoverPriority' format. E.g eastus=0 westus=1. */
    failoverPolicies(value: string): az_cosmosdb_failover_priority_change_command_builder {
        this.setFlag("--failover-policies", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cosmosdb_failover_priority_change_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Cosmos DB database account. */
    name(value: string): az_cosmosdb_failover_priority_change_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_failover_priority_change_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_failover_priority_change_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List Azure Cosmos DB database accounts.
 *
 * Syntax:
 * ```
 * az cosmosdb list [--query-examples]
 *                  [--resource-group]
 *                  [--subscription]
 * ```
 */
class az_cosmosdb_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the connection strings for a Azure Cosmos DB database account.
 *
 * Syntax:
 * ```
 * az cosmosdb list-connection-strings [--ids]
 *                                     [--name]
 *                                     [--resource-group]
 *                                     [--subscription]
 * ```
 */
class az_cosmosdb_list_connection_strings_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cosmosdb_list_connection_strings_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Cosmos DB database account. */
    name(value: string): az_cosmosdb_list_connection_strings_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_list_connection_strings_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_list_connection_strings_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the access keys for a Azure Cosmos DB database account.
 *
 * Syntax:
 * ```
 * az cosmosdb list-keys [--ids]
 *                       [--name]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
class az_cosmosdb_list_keys_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cosmosdb_list_keys_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Cosmos DB database account. */
    name(value: string): az_cosmosdb_list_keys_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_list_keys_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_list_keys_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the read-only access keys for a Azure Cosmos DB database account.
 *
 * Syntax:
 * ```
 * az cosmosdb list-read-only-keys [--ids]
 *                                 [--name]
 *                                 [--resource-group]
 *                                 [--subscription]
 * ```
 */
class az_cosmosdb_list_read_only_keys_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cosmosdb_list_read_only_keys_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Cosmos DB database account. */
    name(value: string): az_cosmosdb_list_read_only_keys_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_list_read_only_keys_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_list_read_only_keys_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Regenerate an access key for a Azure Cosmos DB database account.
 *
 * Syntax:
 * ```
 * az cosmosdb regenerate-key --key-kind {primary, primaryReadonly, secondary, secondaryReadonly}
 *                            [--ids]
 *                            [--name]
 *                            [--resource-group]
 *                            [--subscription]
 * ```
 *
 * @param {'primary' | 'primaryReadonly' | 'secondary' | 'secondaryReadonly'} keyKind The access key to regenerate.
 */
class az_cosmosdb_regenerate_key_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, keyKind: 'primary' | 'primaryReadonly' | 'secondary' | 'secondaryReadonly') {
        super(commandParent);
        this.keyKind(keyKind)
    }

    /** The access key to regenerate. */
    keyKind(value: 'primary' | 'primaryReadonly' | 'secondary' | 'secondaryReadonly'): az_cosmosdb_regenerate_key_command_builder {
        this.setFlag("--key-kind", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cosmosdb_regenerate_key_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Cosmos DB database account. */
    name(value: string): az_cosmosdb_regenerate_key_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_regenerate_key_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_regenerate_key_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the details of an Azure Cosmos DB database account.
 *
 * Syntax:
 * ```
 * az cosmosdb show [--ids]
 *                  [--name]
 *                  [--query-examples]
 *                  [--resource-group]
 *                  [--subscription]
 * ```
 */
class az_cosmosdb_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cosmosdb_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Cosmos DB database account. */
    name(value: string): az_cosmosdb_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cosmosdb_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update an Azure Cosmos DB database account.
 *
 * Syntax:
 * ```
 * az cosmosdb update [--capabilities]
 *                    [--default-consistency-level {BoundedStaleness, ConsistentPrefix, Eventual, Session, Strong}]
 *                    [--disable-key-based-metadata-write-access {false, true}]
 *                    [--enable-analytical-storage {false, true}]
 *                    [--enable-automatic-failover {false, true}]
 *                    [--enable-multiple-write-locations {false, true}]
 *                    [--enable-public-network {false, true}]
 *                    [--enable-virtual-network {false, true}]
 *                    [--ids]
 *                    [--ip-range-filter]
 *                    [--locations]
 *                    [--max-interval]
 *                    [--max-staleness-prefix]
 *                    [--name]
 *                    [--resource-group]
 *                    [--subscription]
 *                    [--tags]
 *                    [--virtual-network-rules]
 * ```
 */
class az_cosmosdb_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Set custom capabilities on the Cosmos DB database account. */
    capabilities(value: string): az_cosmosdb_update_command_builder {
        this.setFlag("--capabilities", value);
        return this;
    }

    /** Default consistency level of the Cosmos DB database account. */
    defaultConsistencyLevel(value: 'BoundedStaleness' | 'ConsistentPrefix' | 'Eventual' | 'Session' | 'Strong'): az_cosmosdb_update_command_builder {
        this.setFlag("--default-consistency-level", value);
        return this;
    }

    /** Disable write operations on metadata resources (databases, containers, throughput) via account keys. */
    disableKeyBasedMetadataWriteAccess(value: boolean): az_cosmosdb_update_command_builder {
        this.setFlag("--disable-key-based-metadata-write-access", value.toString());
        return this;
    }

    /** Flag to enable log storage on the account. */
    enableAnalyticalStorage(value: boolean): az_cosmosdb_update_command_builder {
        this.setFlag("--enable-analytical-storage", value.toString());
        return this;
    }

    /** Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account. */
    enableAutomaticFailover(value: boolean): az_cosmosdb_update_command_builder {
        this.setFlag("--enable-automatic-failover", value.toString());
        return this;
    }

    /** Enable Multiple Write Locations. */
    enableMultipleWriteLocations(value: boolean): az_cosmosdb_update_command_builder {
        this.setFlag("--enable-multiple-write-locations", value.toString());
        return this;
    }

    /** Enable or disable public network access to server. */
    enablePublicNetwork(value: boolean): az_cosmosdb_update_command_builder {
        this.setFlag("--enable-public-network", value.toString());
        return this;
    }

    /** Enables virtual network on the Cosmos DB database account. */
    enableVirtualNetwork(value: boolean): az_cosmosdb_update_command_builder {
        this.setFlag("--enable-virtual-network", value.toString());
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cosmosdb_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Firewall support. Specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. IP addresses/ranges must be comma-separated and must not contain any spaces. */
    ipRangeFilter(value: string): az_cosmosdb_update_command_builder {
        this.setFlag("--ip-range-filter", value);
        return this;
    }

    /** Add a location to the Cosmos DB database account. */
    locations(value: string): az_cosmosdb_update_command_builder {
        this.setFlag("--locations", value);
        return this;
    }

    /** When used with Bounded Staleness consistency, this value represents the time amount of staleness (in seconds) tolerated. Accepted range for this value is 1 - 100. */
    maxInterval(value: string): az_cosmosdb_update_command_builder {
        this.setFlag("--max-interval", value);
        return this;
    }

    /** When used with Bounded Staleness consistency, this value represents the number of stale requests tolerated. Accepted range for this value is 1 - 2,147,483,647. */
    maxStalenessPrefix(value: string): az_cosmosdb_update_command_builder {
        this.setFlag("--max-staleness-prefix", value);
        return this;
    }

    /** Name of the Cosmos DB database account. */
    name(value: string): az_cosmosdb_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cosmosdb_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cosmosdb_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_cosmosdb_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** ACL's for virtual network. */
    virtualNetworkRules(value: string): az_cosmosdb_update_command_builder {
        this.setFlag("--virtual-network-rules", value);
        return this;
    }
}