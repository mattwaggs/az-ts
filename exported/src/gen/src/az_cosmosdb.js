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
exports.az_cosmosdb = exports.az_cosmosdb_table = exports.az_cosmosdb_table_throughput = exports.az_cosmosdb_sql = exports.az_cosmosdb_sql_user_defined_function = exports.az_cosmosdb_sql_trigger = exports.az_cosmosdb_sql_stored_procedure = exports.az_cosmosdb_sql_database = exports.az_cosmosdb_sql_database_throughput = exports.az_cosmosdb_sql_container = exports.az_cosmosdb_sql_container_throughput = exports.az_cosmosdb_private_link_resource = exports.az_cosmosdb_private_endpoint_connection = exports.az_cosmosdb_network_rule = exports.az_cosmosdb_mongodb = exports.az_cosmosdb_mongodb_database = exports.az_cosmosdb_mongodb_database_throughput = exports.az_cosmosdb_mongodb_collection = exports.az_cosmosdb_mongodb_collection_throughput = exports.az_cosmosdb_keys = exports.az_cosmosdb_gremlin = exports.az_cosmosdb_gremlin_graph = exports.az_cosmosdb_gremlin_graph_throughput = exports.az_cosmosdb_gremlin_database = exports.az_cosmosdb_gremlin_database_throughput = exports.az_cosmosdb_database = exports.az_cosmosdb_collection = exports.az_cosmosdb_cassandra = exports.az_cosmosdb_cassandra_table = exports.az_cosmosdb_cassandra_table_throughput = exports.az_cosmosdb_cassandra_keyspace = exports.az_cosmosdb_cassandra_keyspace_throughput = void 0;
var base_1 = require("../base");
/** Manage throughput of Cassandra keyspace under an Azure Cosmos DB account. */
var az_cosmosdb_cassandra_keyspace_throughput = /** @class */ (function () {
    function az_cosmosdb_cassandra_keyspace_throughput() {
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
    az_cosmosdb_cassandra_keyspace_throughput.migrate = function (accountName, name, resourceGroup, throughputType) {
        return new az_cosmosdb_cassandra_keyspace_throughput_migrate_command_builder("az cosmosdb cassandra keyspace throughput migrate", 'az_cosmosdb_cassandra_keyspace_throughput_migrate_command_result', accountName, name, resourceGroup, throughputType);
    };
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
    az_cosmosdb_cassandra_keyspace_throughput.show = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_cassandra_keyspace_throughput_show_command_builder("az cosmosdb cassandra keyspace throughput show", 'az_cosmosdb_cassandra_keyspace_throughput_show_command_result', accountName, name, resourceGroup);
    };
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
    az_cosmosdb_cassandra_keyspace_throughput.update = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_cassandra_keyspace_throughput_update_command_builder("az cosmosdb cassandra keyspace throughput update", 'az_cosmosdb_cassandra_keyspace_throughput_update_command_result', accountName, name, resourceGroup);
    };
    return az_cosmosdb_cassandra_keyspace_throughput;
}());
exports.az_cosmosdb_cassandra_keyspace_throughput = az_cosmosdb_cassandra_keyspace_throughput;
/** Manage Azure Cosmos DB Cassandra keyspaces. */
var az_cosmosdb_cassandra_keyspace = /** @class */ (function () {
    function az_cosmosdb_cassandra_keyspace() {
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
    az_cosmosdb_cassandra_keyspace.create = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_cassandra_keyspace_create_command_builder("az cosmosdb cassandra keyspace create", 'az_cosmosdb_cassandra_keyspace_create_command_result', accountName, name, resourceGroup);
    };
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
    az_cosmosdb_cassandra_keyspace["delete"] = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_cassandra_keyspace_delete_command_builder("az cosmosdb cassandra keyspace delete", 'az_cosmosdb_cassandra_keyspace_delete_command_result', accountName, name, resourceGroup);
    };
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
    az_cosmosdb_cassandra_keyspace.exists = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_cassandra_keyspace_exists_command_builder("az cosmosdb cassandra keyspace exists", 'az_cosmosdb_cassandra_keyspace_exists_command_result', accountName, name, resourceGroup);
    };
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
    az_cosmosdb_cassandra_keyspace.list = function (accountName, resourceGroup) {
        return new az_cosmosdb_cassandra_keyspace_list_command_builder("az cosmosdb cassandra keyspace list", 'az_cosmosdb_cassandra_keyspace_list_command_result', accountName, resourceGroup);
    };
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
    az_cosmosdb_cassandra_keyspace.show = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_cassandra_keyspace_show_command_builder("az cosmosdb cassandra keyspace show", 'az_cosmosdb_cassandra_keyspace_show_command_result', accountName, name, resourceGroup);
    };
    return az_cosmosdb_cassandra_keyspace;
}());
exports.az_cosmosdb_cassandra_keyspace = az_cosmosdb_cassandra_keyspace;
/** Manage throughput of Cassandra table under an Azure Cosmos DB account. */
var az_cosmosdb_cassandra_table_throughput = /** @class */ (function () {
    function az_cosmosdb_cassandra_table_throughput() {
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
    az_cosmosdb_cassandra_table_throughput.migrate = function (accountName, keyspaceName, name, resourceGroup, throughputType) {
        return new az_cosmosdb_cassandra_table_throughput_migrate_command_builder("az cosmosdb cassandra table throughput migrate", 'az_cosmosdb_cassandra_table_throughput_migrate_command_result', accountName, keyspaceName, name, resourceGroup, throughputType);
    };
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
    az_cosmosdb_cassandra_table_throughput.show = function (accountName, keyspaceName, name, resourceGroup) {
        return new az_cosmosdb_cassandra_table_throughput_show_command_builder("az cosmosdb cassandra table throughput show", 'az_cosmosdb_cassandra_table_throughput_show_command_result', accountName, keyspaceName, name, resourceGroup);
    };
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
    az_cosmosdb_cassandra_table_throughput.update = function (accountName, keyspaceName, name, resourceGroup) {
        return new az_cosmosdb_cassandra_table_throughput_update_command_builder("az cosmosdb cassandra table throughput update", 'az_cosmosdb_cassandra_table_throughput_update_command_result', accountName, keyspaceName, name, resourceGroup);
    };
    return az_cosmosdb_cassandra_table_throughput;
}());
exports.az_cosmosdb_cassandra_table_throughput = az_cosmosdb_cassandra_table_throughput;
/** Manage Azure Cosmos DB Cassandra tables. */
var az_cosmosdb_cassandra_table = /** @class */ (function () {
    function az_cosmosdb_cassandra_table() {
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
    az_cosmosdb_cassandra_table.create = function (accountName, keyspaceName, name, resourceGroup, schema) {
        return new az_cosmosdb_cassandra_table_create_command_builder("az cosmosdb cassandra table create", 'az_cosmosdb_cassandra_table_create_command_result', accountName, keyspaceName, name, resourceGroup, schema);
    };
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
    az_cosmosdb_cassandra_table["delete"] = function (accountName, keyspaceName, name, resourceGroup) {
        return new az_cosmosdb_cassandra_table_delete_command_builder("az cosmosdb cassandra table delete", 'az_cosmosdb_cassandra_table_delete_command_result', accountName, keyspaceName, name, resourceGroup);
    };
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
    az_cosmosdb_cassandra_table.exists = function (accountName, keyspaceName, name, resourceGroup) {
        return new az_cosmosdb_cassandra_table_exists_command_builder("az cosmosdb cassandra table exists", 'az_cosmosdb_cassandra_table_exists_command_result', accountName, keyspaceName, name, resourceGroup);
    };
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
    az_cosmosdb_cassandra_table.list = function (accountName, keyspaceName, resourceGroup) {
        return new az_cosmosdb_cassandra_table_list_command_builder("az cosmosdb cassandra table list", 'az_cosmosdb_cassandra_table_list_command_result', accountName, keyspaceName, resourceGroup);
    };
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
    az_cosmosdb_cassandra_table.show = function (accountName, keyspaceName, name, resourceGroup) {
        return new az_cosmosdb_cassandra_table_show_command_builder("az cosmosdb cassandra table show", 'az_cosmosdb_cassandra_table_show_command_result', accountName, keyspaceName, name, resourceGroup);
    };
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
    az_cosmosdb_cassandra_table.update = function (accountName, keyspaceName, name, resourceGroup) {
        return new az_cosmosdb_cassandra_table_update_command_builder("az cosmosdb cassandra table update", 'az_cosmosdb_cassandra_table_update_command_result', accountName, keyspaceName, name, resourceGroup);
    };
    return az_cosmosdb_cassandra_table;
}());
exports.az_cosmosdb_cassandra_table = az_cosmosdb_cassandra_table;
/** Manage Cassandra resources of Azure Cosmos DB account. */
var az_cosmosdb_cassandra = /** @class */ (function () {
    function az_cosmosdb_cassandra() {
    }
    return az_cosmosdb_cassandra;
}());
exports.az_cosmosdb_cassandra = az_cosmosdb_cassandra;
/** Manage Azure Cosmos DB collections. */
var az_cosmosdb_collection = /** @class */ (function () {
    function az_cosmosdb_collection() {
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
    az_cosmosdb_collection.create = function (collectionName, dbName) {
        return new az_cosmosdb_collection_create_command_builder("az cosmosdb collection create", 'az_cosmosdb_collection_create_command_result', collectionName, dbName);
    };
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
    az_cosmosdb_collection["delete"] = function (collectionName, dbName) {
        return new az_cosmosdb_collection_delete_command_builder("az cosmosdb collection delete", 'az_cosmosdb_collection_delete_command_result', collectionName, dbName);
    };
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
    az_cosmosdb_collection.exists = function (collectionName, dbName) {
        return new az_cosmosdb_collection_exists_command_builder("az cosmosdb collection exists", 'az_cosmosdb_collection_exists_command_result', collectionName, dbName);
    };
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
    az_cosmosdb_collection.list = function (dbName) {
        return new az_cosmosdb_collection_list_command_builder("az cosmosdb collection list", 'az_cosmosdb_collection_list_command_result', dbName);
    };
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
    az_cosmosdb_collection.show = function (collectionName, dbName) {
        return new az_cosmosdb_collection_show_command_builder("az cosmosdb collection show", 'az_cosmosdb_collection_show_command_result', collectionName, dbName);
    };
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
    az_cosmosdb_collection.update = function (collectionName, dbName) {
        return new az_cosmosdb_collection_update_command_builder("az cosmosdb collection update", 'az_cosmosdb_collection_update_command_result', collectionName, dbName);
    };
    return az_cosmosdb_collection;
}());
exports.az_cosmosdb_collection = az_cosmosdb_collection;
/** Manage Azure Cosmos DB databases. */
var az_cosmosdb_database = /** @class */ (function () {
    function az_cosmosdb_database() {
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
    az_cosmosdb_database.create = function (dbName) {
        return new az_cosmosdb_database_create_command_builder("az cosmosdb database create", 'az_cosmosdb_database_create_command_result', dbName);
    };
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
    az_cosmosdb_database["delete"] = function (dbName) {
        return new az_cosmosdb_database_delete_command_builder("az cosmosdb database delete", 'az_cosmosdb_database_delete_command_result', dbName);
    };
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
    az_cosmosdb_database.exists = function (dbName) {
        return new az_cosmosdb_database_exists_command_builder("az cosmosdb database exists", 'az_cosmosdb_database_exists_command_result', dbName);
    };
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
    az_cosmosdb_database.list = function () {
        return new az_cosmosdb_database_list_command_builder("az cosmosdb database list", 'az_cosmosdb_database_list_command_result');
    };
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
    az_cosmosdb_database.show = function (dbName) {
        return new az_cosmosdb_database_show_command_builder("az cosmosdb database show", 'az_cosmosdb_database_show_command_result', dbName);
    };
    return az_cosmosdb_database;
}());
exports.az_cosmosdb_database = az_cosmosdb_database;
/** Manage throughput of Gremlin database under an Azure Cosmos DB account. */
var az_cosmosdb_gremlin_database_throughput = /** @class */ (function () {
    function az_cosmosdb_gremlin_database_throughput() {
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
    az_cosmosdb_gremlin_database_throughput.migrate = function (accountName, name, resourceGroup, throughputType) {
        return new az_cosmosdb_gremlin_database_throughput_migrate_command_builder("az cosmosdb gremlin database throughput migrate", 'az_cosmosdb_gremlin_database_throughput_migrate_command_result', accountName, name, resourceGroup, throughputType);
    };
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
    az_cosmosdb_gremlin_database_throughput.show = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_gremlin_database_throughput_show_command_builder("az cosmosdb gremlin database throughput show", 'az_cosmosdb_gremlin_database_throughput_show_command_result', accountName, name, resourceGroup);
    };
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
    az_cosmosdb_gremlin_database_throughput.update = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_gremlin_database_throughput_update_command_builder("az cosmosdb gremlin database throughput update", 'az_cosmosdb_gremlin_database_throughput_update_command_result', accountName, name, resourceGroup);
    };
    return az_cosmosdb_gremlin_database_throughput;
}());
exports.az_cosmosdb_gremlin_database_throughput = az_cosmosdb_gremlin_database_throughput;
/** Manage Azure Cosmos DB Gremlin databases. */
var az_cosmosdb_gremlin_database = /** @class */ (function () {
    function az_cosmosdb_gremlin_database() {
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
    az_cosmosdb_gremlin_database.create = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_gremlin_database_create_command_builder("az cosmosdb gremlin database create", 'az_cosmosdb_gremlin_database_create_command_result', accountName, name, resourceGroup);
    };
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
    az_cosmosdb_gremlin_database["delete"] = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_gremlin_database_delete_command_builder("az cosmosdb gremlin database delete", 'az_cosmosdb_gremlin_database_delete_command_result', accountName, name, resourceGroup);
    };
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
    az_cosmosdb_gremlin_database.exists = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_gremlin_database_exists_command_builder("az cosmosdb gremlin database exists", 'az_cosmosdb_gremlin_database_exists_command_result', accountName, name, resourceGroup);
    };
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
    az_cosmosdb_gremlin_database.list = function (accountName, resourceGroup) {
        return new az_cosmosdb_gremlin_database_list_command_builder("az cosmosdb gremlin database list", 'az_cosmosdb_gremlin_database_list_command_result', accountName, resourceGroup);
    };
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
    az_cosmosdb_gremlin_database.show = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_gremlin_database_show_command_builder("az cosmosdb gremlin database show", 'az_cosmosdb_gremlin_database_show_command_result', accountName, name, resourceGroup);
    };
    return az_cosmosdb_gremlin_database;
}());
exports.az_cosmosdb_gremlin_database = az_cosmosdb_gremlin_database;
/** Manage throughput of Gremlin graph under an Azure Cosmos DB account. */
var az_cosmosdb_gremlin_graph_throughput = /** @class */ (function () {
    function az_cosmosdb_gremlin_graph_throughput() {
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
    az_cosmosdb_gremlin_graph_throughput.migrate = function (accountName, databaseName, name, resourceGroup, throughputType) {
        return new az_cosmosdb_gremlin_graph_throughput_migrate_command_builder("az cosmosdb gremlin graph throughput migrate", 'az_cosmosdb_gremlin_graph_throughput_migrate_command_result', accountName, databaseName, name, resourceGroup, throughputType);
    };
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
    az_cosmosdb_gremlin_graph_throughput.show = function (accountName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_gremlin_graph_throughput_show_command_builder("az cosmosdb gremlin graph throughput show", 'az_cosmosdb_gremlin_graph_throughput_show_command_result', accountName, databaseName, name, resourceGroup);
    };
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
    az_cosmosdb_gremlin_graph_throughput.update = function (accountName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_gremlin_graph_throughput_update_command_builder("az cosmosdb gremlin graph throughput update", 'az_cosmosdb_gremlin_graph_throughput_update_command_result', accountName, databaseName, name, resourceGroup);
    };
    return az_cosmosdb_gremlin_graph_throughput;
}());
exports.az_cosmosdb_gremlin_graph_throughput = az_cosmosdb_gremlin_graph_throughput;
/** Manage Azure Cosmos DB Gremlin graphs. */
var az_cosmosdb_gremlin_graph = /** @class */ (function () {
    function az_cosmosdb_gremlin_graph() {
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
    az_cosmosdb_gremlin_graph.create = function (accountName, databaseName, name, partitionKeyPath, resourceGroup) {
        return new az_cosmosdb_gremlin_graph_create_command_builder("az cosmosdb gremlin graph create", 'az_cosmosdb_gremlin_graph_create_command_result', accountName, databaseName, name, partitionKeyPath, resourceGroup);
    };
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
    az_cosmosdb_gremlin_graph["delete"] = function (accountName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_gremlin_graph_delete_command_builder("az cosmosdb gremlin graph delete", 'az_cosmosdb_gremlin_graph_delete_command_result', accountName, databaseName, name, resourceGroup);
    };
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
    az_cosmosdb_gremlin_graph.exists = function (accountName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_gremlin_graph_exists_command_builder("az cosmosdb gremlin graph exists", 'az_cosmosdb_gremlin_graph_exists_command_result', accountName, databaseName, name, resourceGroup);
    };
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
    az_cosmosdb_gremlin_graph.list = function (accountName, databaseName, resourceGroup) {
        return new az_cosmosdb_gremlin_graph_list_command_builder("az cosmosdb gremlin graph list", 'az_cosmosdb_gremlin_graph_list_command_result', accountName, databaseName, resourceGroup);
    };
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
    az_cosmosdb_gremlin_graph.show = function (accountName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_gremlin_graph_show_command_builder("az cosmosdb gremlin graph show", 'az_cosmosdb_gremlin_graph_show_command_result', accountName, databaseName, name, resourceGroup);
    };
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
    az_cosmosdb_gremlin_graph.update = function (accountName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_gremlin_graph_update_command_builder("az cosmosdb gremlin graph update", 'az_cosmosdb_gremlin_graph_update_command_result', accountName, databaseName, name, resourceGroup);
    };
    return az_cosmosdb_gremlin_graph;
}());
exports.az_cosmosdb_gremlin_graph = az_cosmosdb_gremlin_graph;
/** Manage Gremlin resources of Azure Cosmos DB account. */
var az_cosmosdb_gremlin = /** @class */ (function () {
    function az_cosmosdb_gremlin() {
    }
    return az_cosmosdb_gremlin;
}());
exports.az_cosmosdb_gremlin = az_cosmosdb_gremlin;
/** Manage Azure Comsos DB keys. */
var az_cosmosdb_keys = /** @class */ (function () {
    function az_cosmosdb_keys() {
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
    az_cosmosdb_keys.list = function (name, resourceGroup) {
        return new az_cosmosdb_keys_list_command_builder("az cosmosdb keys list", 'az_cosmosdb_keys_list_command_result', name, resourceGroup);
    };
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
    az_cosmosdb_keys.regenerate = function (keyKind) {
        return new az_cosmosdb_keys_regenerate_command_builder("az cosmosdb keys regenerate", 'az_cosmosdb_keys_regenerate_command_result', keyKind);
    };
    return az_cosmosdb_keys;
}());
exports.az_cosmosdb_keys = az_cosmosdb_keys;
/** Manage throughput of MongoDB collection under an Azure Cosmos DB account. */
var az_cosmosdb_mongodb_collection_throughput = /** @class */ (function () {
    function az_cosmosdb_mongodb_collection_throughput() {
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
    az_cosmosdb_mongodb_collection_throughput.migrate = function (accountName, databaseName, name, resourceGroup, throughputType) {
        return new az_cosmosdb_mongodb_collection_throughput_migrate_command_builder("az cosmosdb mongodb collection throughput migrate", 'az_cosmosdb_mongodb_collection_throughput_migrate_command_result', accountName, databaseName, name, resourceGroup, throughputType);
    };
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
    az_cosmosdb_mongodb_collection_throughput.show = function (accountName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_mongodb_collection_throughput_show_command_builder("az cosmosdb mongodb collection throughput show", 'az_cosmosdb_mongodb_collection_throughput_show_command_result', accountName, databaseName, name, resourceGroup);
    };
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
    az_cosmosdb_mongodb_collection_throughput.update = function (accountName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_mongodb_collection_throughput_update_command_builder("az cosmosdb mongodb collection throughput update", 'az_cosmosdb_mongodb_collection_throughput_update_command_result', accountName, databaseName, name, resourceGroup);
    };
    return az_cosmosdb_mongodb_collection_throughput;
}());
exports.az_cosmosdb_mongodb_collection_throughput = az_cosmosdb_mongodb_collection_throughput;
/** Manage Azure Cosmos DB MongoDB collections. */
var az_cosmosdb_mongodb_collection = /** @class */ (function () {
    function az_cosmosdb_mongodb_collection() {
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
    az_cosmosdb_mongodb_collection.create = function (accountName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_mongodb_collection_create_command_builder("az cosmosdb mongodb collection create", 'az_cosmosdb_mongodb_collection_create_command_result', accountName, databaseName, name, resourceGroup);
    };
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
    az_cosmosdb_mongodb_collection["delete"] = function (accountName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_mongodb_collection_delete_command_builder("az cosmosdb mongodb collection delete", 'az_cosmosdb_mongodb_collection_delete_command_result', accountName, databaseName, name, resourceGroup);
    };
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
    az_cosmosdb_mongodb_collection.exists = function (accountName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_mongodb_collection_exists_command_builder("az cosmosdb mongodb collection exists", 'az_cosmosdb_mongodb_collection_exists_command_result', accountName, databaseName, name, resourceGroup);
    };
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
    az_cosmosdb_mongodb_collection.list = function (accountName, databaseName, resourceGroup) {
        return new az_cosmosdb_mongodb_collection_list_command_builder("az cosmosdb mongodb collection list", 'az_cosmosdb_mongodb_collection_list_command_result', accountName, databaseName, resourceGroup);
    };
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
    az_cosmosdb_mongodb_collection.show = function (accountName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_mongodb_collection_show_command_builder("az cosmosdb mongodb collection show", 'az_cosmosdb_mongodb_collection_show_command_result', accountName, databaseName, name, resourceGroup);
    };
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
    az_cosmosdb_mongodb_collection.update = function (accountName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_mongodb_collection_update_command_builder("az cosmosdb mongodb collection update", 'az_cosmosdb_mongodb_collection_update_command_result', accountName, databaseName, name, resourceGroup);
    };
    return az_cosmosdb_mongodb_collection;
}());
exports.az_cosmosdb_mongodb_collection = az_cosmosdb_mongodb_collection;
/** Manage throughput of MongoDB database under an Azure Cosmos DB account. */
var az_cosmosdb_mongodb_database_throughput = /** @class */ (function () {
    function az_cosmosdb_mongodb_database_throughput() {
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
    az_cosmosdb_mongodb_database_throughput.migrate = function (accountName, name, resourceGroup, throughputType) {
        return new az_cosmosdb_mongodb_database_throughput_migrate_command_builder("az cosmosdb mongodb database throughput migrate", 'az_cosmosdb_mongodb_database_throughput_migrate_command_result', accountName, name, resourceGroup, throughputType);
    };
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
    az_cosmosdb_mongodb_database_throughput.show = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_mongodb_database_throughput_show_command_builder("az cosmosdb mongodb database throughput show", 'az_cosmosdb_mongodb_database_throughput_show_command_result', accountName, name, resourceGroup);
    };
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
    az_cosmosdb_mongodb_database_throughput.update = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_mongodb_database_throughput_update_command_builder("az cosmosdb mongodb database throughput update", 'az_cosmosdb_mongodb_database_throughput_update_command_result', accountName, name, resourceGroup);
    };
    return az_cosmosdb_mongodb_database_throughput;
}());
exports.az_cosmosdb_mongodb_database_throughput = az_cosmosdb_mongodb_database_throughput;
/** Manage Azure Cosmos DB MongoDB databases. */
var az_cosmosdb_mongodb_database = /** @class */ (function () {
    function az_cosmosdb_mongodb_database() {
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
    az_cosmosdb_mongodb_database.create = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_mongodb_database_create_command_builder("az cosmosdb mongodb database create", 'az_cosmosdb_mongodb_database_create_command_result', accountName, name, resourceGroup);
    };
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
    az_cosmosdb_mongodb_database["delete"] = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_mongodb_database_delete_command_builder("az cosmosdb mongodb database delete", 'az_cosmosdb_mongodb_database_delete_command_result', accountName, name, resourceGroup);
    };
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
    az_cosmosdb_mongodb_database.exists = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_mongodb_database_exists_command_builder("az cosmosdb mongodb database exists", 'az_cosmosdb_mongodb_database_exists_command_result', accountName, name, resourceGroup);
    };
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
    az_cosmosdb_mongodb_database.list = function (accountName, resourceGroup) {
        return new az_cosmosdb_mongodb_database_list_command_builder("az cosmosdb mongodb database list", 'az_cosmosdb_mongodb_database_list_command_result', accountName, resourceGroup);
    };
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
    az_cosmosdb_mongodb_database.show = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_mongodb_database_show_command_builder("az cosmosdb mongodb database show", 'az_cosmosdb_mongodb_database_show_command_result', accountName, name, resourceGroup);
    };
    return az_cosmosdb_mongodb_database;
}());
exports.az_cosmosdb_mongodb_database = az_cosmosdb_mongodb_database;
/** Manage MongoDB resources of Azure Cosmos DB account. */
var az_cosmosdb_mongodb = /** @class */ (function () {
    function az_cosmosdb_mongodb() {
    }
    return az_cosmosdb_mongodb;
}());
exports.az_cosmosdb_mongodb = az_cosmosdb_mongodb;
/** Manage Azure Comsos DB network rules. */
var az_cosmosdb_network_rule = /** @class */ (function () {
    function az_cosmosdb_network_rule() {
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
    az_cosmosdb_network_rule.add = function (subnet) {
        return new az_cosmosdb_network_rule_add_command_builder("az cosmosdb network-rule add", 'az_cosmosdb_network_rule_add_command_result', subnet);
    };
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
    az_cosmosdb_network_rule.list = function (name, resourceGroup) {
        return new az_cosmosdb_network_rule_list_command_builder("az cosmosdb network-rule list", 'az_cosmosdb_network_rule_list_command_result', name, resourceGroup);
    };
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
    az_cosmosdb_network_rule.remove = function (subnet) {
        return new az_cosmosdb_network_rule_remove_command_builder("az cosmosdb network-rule remove", 'az_cosmosdb_network_rule_remove_command_result', subnet);
    };
    return az_cosmosdb_network_rule;
}());
exports.az_cosmosdb_network_rule = az_cosmosdb_network_rule;
/** Manage Azure Comsos DB private endpoint connections. */
var az_cosmosdb_private_endpoint_connection = /** @class */ (function () {
    function az_cosmosdb_private_endpoint_connection() {
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
    az_cosmosdb_private_endpoint_connection.approve = function () {
        return new az_cosmosdb_private_endpoint_connection_approve_command_builder("az cosmosdb private-endpoint-connection approve", 'az_cosmosdb_private_endpoint_connection_approve_command_result');
    };
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
    az_cosmosdb_private_endpoint_connection["delete"] = function () {
        return new az_cosmosdb_private_endpoint_connection_delete_command_builder("az cosmosdb private-endpoint-connection delete", 'az_cosmosdb_private_endpoint_connection_delete_command_result');
    };
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
    az_cosmosdb_private_endpoint_connection.reject = function () {
        return new az_cosmosdb_private_endpoint_connection_reject_command_builder("az cosmosdb private-endpoint-connection reject", 'az_cosmosdb_private_endpoint_connection_reject_command_result');
    };
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
    az_cosmosdb_private_endpoint_connection.show = function () {
        return new az_cosmosdb_private_endpoint_connection_show_command_builder("az cosmosdb private-endpoint-connection show", 'az_cosmosdb_private_endpoint_connection_show_command_result');
    };
    return az_cosmosdb_private_endpoint_connection;
}());
exports.az_cosmosdb_private_endpoint_connection = az_cosmosdb_private_endpoint_connection;
/** Manage Azure Comsos DB private link resources. */
var az_cosmosdb_private_link_resource = /** @class */ (function () {
    function az_cosmosdb_private_link_resource() {
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
    az_cosmosdb_private_link_resource.list = function (accountName, resourceGroup) {
        return new az_cosmosdb_private_link_resource_list_command_builder("az cosmosdb private-link-resource list", 'az_cosmosdb_private_link_resource_list_command_result', accountName, resourceGroup);
    };
    return az_cosmosdb_private_link_resource;
}());
exports.az_cosmosdb_private_link_resource = az_cosmosdb_private_link_resource;
/** Manage throughput of SQL container under an Azure Cosmos DB account. */
var az_cosmosdb_sql_container_throughput = /** @class */ (function () {
    function az_cosmosdb_sql_container_throughput() {
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
    az_cosmosdb_sql_container_throughput.migrate = function (accountName, databaseName, name, resourceGroup, throughputType) {
        return new az_cosmosdb_sql_container_throughput_migrate_command_builder("az cosmosdb sql container throughput migrate", 'az_cosmosdb_sql_container_throughput_migrate_command_result', accountName, databaseName, name, resourceGroup, throughputType);
    };
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
    az_cosmosdb_sql_container_throughput.show = function (accountName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_sql_container_throughput_show_command_builder("az cosmosdb sql container throughput show", 'az_cosmosdb_sql_container_throughput_show_command_result', accountName, databaseName, name, resourceGroup);
    };
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
    az_cosmosdb_sql_container_throughput.update = function (accountName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_sql_container_throughput_update_command_builder("az cosmosdb sql container throughput update", 'az_cosmosdb_sql_container_throughput_update_command_result', accountName, databaseName, name, resourceGroup);
    };
    return az_cosmosdb_sql_container_throughput;
}());
exports.az_cosmosdb_sql_container_throughput = az_cosmosdb_sql_container_throughput;
/** Manage Azure Cosmos DB SQL containers. */
var az_cosmosdb_sql_container = /** @class */ (function () {
    function az_cosmosdb_sql_container() {
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
    az_cosmosdb_sql_container.create = function (accountName, databaseName, name, partitionKeyPath, resourceGroup) {
        return new az_cosmosdb_sql_container_create_command_builder("az cosmosdb sql container create", 'az_cosmosdb_sql_container_create_command_result', accountName, databaseName, name, partitionKeyPath, resourceGroup);
    };
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
    az_cosmosdb_sql_container["delete"] = function (accountName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_sql_container_delete_command_builder("az cosmosdb sql container delete", 'az_cosmosdb_sql_container_delete_command_result', accountName, databaseName, name, resourceGroup);
    };
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
    az_cosmosdb_sql_container.exists = function (accountName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_sql_container_exists_command_builder("az cosmosdb sql container exists", 'az_cosmosdb_sql_container_exists_command_result', accountName, databaseName, name, resourceGroup);
    };
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
    az_cosmosdb_sql_container.list = function (accountName, databaseName, resourceGroup) {
        return new az_cosmosdb_sql_container_list_command_builder("az cosmosdb sql container list", 'az_cosmosdb_sql_container_list_command_result', accountName, databaseName, resourceGroup);
    };
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
    az_cosmosdb_sql_container.show = function (accountName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_sql_container_show_command_builder("az cosmosdb sql container show", 'az_cosmosdb_sql_container_show_command_result', accountName, databaseName, name, resourceGroup);
    };
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
    az_cosmosdb_sql_container.update = function (accountName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_sql_container_update_command_builder("az cosmosdb sql container update", 'az_cosmosdb_sql_container_update_command_result', accountName, databaseName, name, resourceGroup);
    };
    return az_cosmosdb_sql_container;
}());
exports.az_cosmosdb_sql_container = az_cosmosdb_sql_container;
/** Manage throughput of SQL database under an Azure Cosmos DB account. */
var az_cosmosdb_sql_database_throughput = /** @class */ (function () {
    function az_cosmosdb_sql_database_throughput() {
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
    az_cosmosdb_sql_database_throughput.migrate = function (accountName, name, resourceGroup, throughputType) {
        return new az_cosmosdb_sql_database_throughput_migrate_command_builder("az cosmosdb sql database throughput migrate", 'az_cosmosdb_sql_database_throughput_migrate_command_result', accountName, name, resourceGroup, throughputType);
    };
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
    az_cosmosdb_sql_database_throughput.show = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_sql_database_throughput_show_command_builder("az cosmosdb sql database throughput show", 'az_cosmosdb_sql_database_throughput_show_command_result', accountName, name, resourceGroup);
    };
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
    az_cosmosdb_sql_database_throughput.update = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_sql_database_throughput_update_command_builder("az cosmosdb sql database throughput update", 'az_cosmosdb_sql_database_throughput_update_command_result', accountName, name, resourceGroup);
    };
    return az_cosmosdb_sql_database_throughput;
}());
exports.az_cosmosdb_sql_database_throughput = az_cosmosdb_sql_database_throughput;
/** Manage Azure Cosmos DB SQL databases. */
var az_cosmosdb_sql_database = /** @class */ (function () {
    function az_cosmosdb_sql_database() {
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
    az_cosmosdb_sql_database.create = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_sql_database_create_command_builder("az cosmosdb sql database create", 'az_cosmosdb_sql_database_create_command_result', accountName, name, resourceGroup);
    };
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
    az_cosmosdb_sql_database["delete"] = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_sql_database_delete_command_builder("az cosmosdb sql database delete", 'az_cosmosdb_sql_database_delete_command_result', accountName, name, resourceGroup);
    };
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
    az_cosmosdb_sql_database.exists = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_sql_database_exists_command_builder("az cosmosdb sql database exists", 'az_cosmosdb_sql_database_exists_command_result', accountName, name, resourceGroup);
    };
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
    az_cosmosdb_sql_database.list = function (accountName, resourceGroup) {
        return new az_cosmosdb_sql_database_list_command_builder("az cosmosdb sql database list", 'az_cosmosdb_sql_database_list_command_result', accountName, resourceGroup);
    };
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
    az_cosmosdb_sql_database.show = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_sql_database_show_command_builder("az cosmosdb sql database show", 'az_cosmosdb_sql_database_show_command_result', accountName, name, resourceGroup);
    };
    return az_cosmosdb_sql_database;
}());
exports.az_cosmosdb_sql_database = az_cosmosdb_sql_database;
/** Manage Azure Cosmos DB SQL stored procedures. */
var az_cosmosdb_sql_stored_procedure = /** @class */ (function () {
    function az_cosmosdb_sql_stored_procedure() {
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
    az_cosmosdb_sql_stored_procedure.create = function (accountName, body, containerName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_sql_stored_procedure_create_command_builder("az cosmosdb sql stored-procedure create", 'az_cosmosdb_sql_stored_procedure_create_command_result', accountName, body, containerName, databaseName, name, resourceGroup);
    };
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
    az_cosmosdb_sql_stored_procedure["delete"] = function (accountName, containerName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_sql_stored_procedure_delete_command_builder("az cosmosdb sql stored-procedure delete", 'az_cosmosdb_sql_stored_procedure_delete_command_result', accountName, containerName, databaseName, name, resourceGroup);
    };
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
    az_cosmosdb_sql_stored_procedure.list = function (accountName, containerName, databaseName, resourceGroup) {
        return new az_cosmosdb_sql_stored_procedure_list_command_builder("az cosmosdb sql stored-procedure list", 'az_cosmosdb_sql_stored_procedure_list_command_result', accountName, containerName, databaseName, resourceGroup);
    };
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
    az_cosmosdb_sql_stored_procedure.show = function (accountName, containerName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_sql_stored_procedure_show_command_builder("az cosmosdb sql stored-procedure show", 'az_cosmosdb_sql_stored_procedure_show_command_result', accountName, containerName, databaseName, name, resourceGroup);
    };
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
    az_cosmosdb_sql_stored_procedure.update = function (accountName, body, containerName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_sql_stored_procedure_update_command_builder("az cosmosdb sql stored-procedure update", 'az_cosmosdb_sql_stored_procedure_update_command_result', accountName, body, containerName, databaseName, name, resourceGroup);
    };
    return az_cosmosdb_sql_stored_procedure;
}());
exports.az_cosmosdb_sql_stored_procedure = az_cosmosdb_sql_stored_procedure;
/** Manage Azure Cosmos DB SQL triggers. */
var az_cosmosdb_sql_trigger = /** @class */ (function () {
    function az_cosmosdb_sql_trigger() {
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
    az_cosmosdb_sql_trigger.create = function (accountName, body, containerName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_sql_trigger_create_command_builder("az cosmosdb sql trigger create", 'az_cosmosdb_sql_trigger_create_command_result', accountName, body, containerName, databaseName, name, resourceGroup);
    };
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
    az_cosmosdb_sql_trigger["delete"] = function (accountName, containerName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_sql_trigger_delete_command_builder("az cosmosdb sql trigger delete", 'az_cosmosdb_sql_trigger_delete_command_result', accountName, containerName, databaseName, name, resourceGroup);
    };
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
    az_cosmosdb_sql_trigger.list = function (accountName, containerName, databaseName, resourceGroup) {
        return new az_cosmosdb_sql_trigger_list_command_builder("az cosmosdb sql trigger list", 'az_cosmosdb_sql_trigger_list_command_result', accountName, containerName, databaseName, resourceGroup);
    };
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
    az_cosmosdb_sql_trigger.show = function (accountName, containerName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_sql_trigger_show_command_builder("az cosmosdb sql trigger show", 'az_cosmosdb_sql_trigger_show_command_result', accountName, containerName, databaseName, name, resourceGroup);
    };
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
    az_cosmosdb_sql_trigger.update = function (accountName, containerName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_sql_trigger_update_command_builder("az cosmosdb sql trigger update", 'az_cosmosdb_sql_trigger_update_command_result', accountName, containerName, databaseName, name, resourceGroup);
    };
    return az_cosmosdb_sql_trigger;
}());
exports.az_cosmosdb_sql_trigger = az_cosmosdb_sql_trigger;
/** Manage Azure Cosmos DB SQL user defined functions. */
var az_cosmosdb_sql_user_defined_function = /** @class */ (function () {
    function az_cosmosdb_sql_user_defined_function() {
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
    az_cosmosdb_sql_user_defined_function.create = function (accountName, body, containerName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_sql_user_defined_function_create_command_builder("az cosmosdb sql user-defined-function create", 'az_cosmosdb_sql_user_defined_function_create_command_result', accountName, body, containerName, databaseName, name, resourceGroup);
    };
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
    az_cosmosdb_sql_user_defined_function["delete"] = function (accountName, containerName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_sql_user_defined_function_delete_command_builder("az cosmosdb sql user-defined-function delete", 'az_cosmosdb_sql_user_defined_function_delete_command_result', accountName, containerName, databaseName, name, resourceGroup);
    };
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
    az_cosmosdb_sql_user_defined_function.list = function (accountName, containerName, databaseName, resourceGroup) {
        return new az_cosmosdb_sql_user_defined_function_list_command_builder("az cosmosdb sql user-defined-function list", 'az_cosmosdb_sql_user_defined_function_list_command_result', accountName, containerName, databaseName, resourceGroup);
    };
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
    az_cosmosdb_sql_user_defined_function.show = function (accountName, containerName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_sql_user_defined_function_show_command_builder("az cosmosdb sql user-defined-function show", 'az_cosmosdb_sql_user_defined_function_show_command_result', accountName, containerName, databaseName, name, resourceGroup);
    };
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
    az_cosmosdb_sql_user_defined_function.update = function (accountName, body, containerName, databaseName, name, resourceGroup) {
        return new az_cosmosdb_sql_user_defined_function_update_command_builder("az cosmosdb sql user-defined-function update", 'az_cosmosdb_sql_user_defined_function_update_command_result', accountName, body, containerName, databaseName, name, resourceGroup);
    };
    return az_cosmosdb_sql_user_defined_function;
}());
exports.az_cosmosdb_sql_user_defined_function = az_cosmosdb_sql_user_defined_function;
/** Manage SQL resources of Azure Cosmos DB account. */
var az_cosmosdb_sql = /** @class */ (function () {
    function az_cosmosdb_sql() {
    }
    return az_cosmosdb_sql;
}());
exports.az_cosmosdb_sql = az_cosmosdb_sql;
/** Manage throughput of Table under an Azure Cosmos DB account. */
var az_cosmosdb_table_throughput = /** @class */ (function () {
    function az_cosmosdb_table_throughput() {
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
    az_cosmosdb_table_throughput.migrate = function (accountName, name, resourceGroup, throughputType) {
        return new az_cosmosdb_table_throughput_migrate_command_builder("az cosmosdb table throughput migrate", 'az_cosmosdb_table_throughput_migrate_command_result', accountName, name, resourceGroup, throughputType);
    };
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
    az_cosmosdb_table_throughput.show = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_table_throughput_show_command_builder("az cosmosdb table throughput show", 'az_cosmosdb_table_throughput_show_command_result', accountName, name, resourceGroup);
    };
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
    az_cosmosdb_table_throughput.update = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_table_throughput_update_command_builder("az cosmosdb table throughput update", 'az_cosmosdb_table_throughput_update_command_result', accountName, name, resourceGroup);
    };
    return az_cosmosdb_table_throughput;
}());
exports.az_cosmosdb_table_throughput = az_cosmosdb_table_throughput;
/** Manage Table resources of Azure Cosmos DB account. */
var az_cosmosdb_table = /** @class */ (function () {
    function az_cosmosdb_table() {
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
    az_cosmosdb_table.create = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_table_create_command_builder("az cosmosdb table create", 'az_cosmosdb_table_create_command_result', accountName, name, resourceGroup);
    };
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
    az_cosmosdb_table["delete"] = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_table_delete_command_builder("az cosmosdb table delete", 'az_cosmosdb_table_delete_command_result', accountName, name, resourceGroup);
    };
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
    az_cosmosdb_table.exists = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_table_exists_command_builder("az cosmosdb table exists", 'az_cosmosdb_table_exists_command_result', accountName, name, resourceGroup);
    };
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
    az_cosmosdb_table.list = function (accountName, resourceGroup) {
        return new az_cosmosdb_table_list_command_builder("az cosmosdb table list", 'az_cosmosdb_table_list_command_result', accountName, resourceGroup);
    };
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
    az_cosmosdb_table.show = function (accountName, name, resourceGroup) {
        return new az_cosmosdb_table_show_command_builder("az cosmosdb table show", 'az_cosmosdb_table_show_command_result', accountName, name, resourceGroup);
    };
    return az_cosmosdb_table;
}());
exports.az_cosmosdb_table = az_cosmosdb_table;
/** Manage Azure Cosmos DB database accounts. */
var az_cosmosdb = /** @class */ (function () {
    function az_cosmosdb() {
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
    az_cosmosdb.check_name_exists = function () {
        return new az_cosmosdb_check_name_exists_command_builder("az cosmosdb check-name-exists", 'az_cosmosdb_check_name_exists_command_result');
    };
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
    az_cosmosdb.create = function (name, resourceGroup) {
        return new az_cosmosdb_create_command_builder("az cosmosdb create", 'az_cosmosdb_create_command_result', name, resourceGroup);
    };
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
    az_cosmosdb["delete"] = function () {
        return new az_cosmosdb_delete_command_builder("az cosmosdb delete", 'az_cosmosdb_delete_command_result');
    };
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
    az_cosmosdb.failover_priority_change = function (failoverPolicies) {
        return new az_cosmosdb_failover_priority_change_command_builder("az cosmosdb failover-priority-change", 'az_cosmosdb_failover_priority_change_command_result', failoverPolicies);
    };
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
    az_cosmosdb.list = function () {
        return new az_cosmosdb_list_command_builder("az cosmosdb list", 'az_cosmosdb_list_command_result');
    };
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
    az_cosmosdb.list_connection_strings = function () {
        return new az_cosmosdb_list_connection_strings_command_builder("az cosmosdb list-connection-strings", 'az_cosmosdb_list_connection_strings_command_result');
    };
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
    az_cosmosdb.list_keys = function () {
        return new az_cosmosdb_list_keys_command_builder("az cosmosdb list-keys", 'az_cosmosdb_list_keys_command_result');
    };
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
    az_cosmosdb.list_read_only_keys = function () {
        return new az_cosmosdb_list_read_only_keys_command_builder("az cosmosdb list-read-only-keys", 'az_cosmosdb_list_read_only_keys_command_result');
    };
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
    az_cosmosdb.regenerate_key = function (keyKind) {
        return new az_cosmosdb_regenerate_key_command_builder("az cosmosdb regenerate-key", 'az_cosmosdb_regenerate_key_command_result', keyKind);
    };
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
    az_cosmosdb.show = function () {
        return new az_cosmosdb_show_command_builder("az cosmosdb show", 'az_cosmosdb_show_command_result');
    };
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
    az_cosmosdb.update = function () {
        return new az_cosmosdb_update_command_builder("az cosmosdb update", 'az_cosmosdb_update_command_result');
    };
    return az_cosmosdb;
}());
exports.az_cosmosdb = az_cosmosdb;
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
var az_cosmosdb_cassandra_keyspace_throughput_migrate_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_cassandra_keyspace_throughput_migrate_command_builder, _super);
    function az_cosmosdb_cassandra_keyspace_throughput_migrate_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup, throughputType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.throughputType(throughputType);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_cassandra_keyspace_throughput_migrate_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Keyspace name. */
    az_cosmosdb_cassandra_keyspace_throughput_migrate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_cassandra_keyspace_throughput_migrate_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The type of throughput to migrate to. */
    az_cosmosdb_cassandra_keyspace_throughput_migrate_command_builder.prototype.throughputType = function (value) {
        this.setFlag("--throughput-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_cassandra_keyspace_throughput_migrate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_cassandra_keyspace_throughput_migrate_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_cassandra_keyspace_throughput_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_cassandra_keyspace_throughput_show_command_builder, _super);
    function az_cosmosdb_cassandra_keyspace_throughput_show_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_cassandra_keyspace_throughput_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Keyspace name. */
    az_cosmosdb_cassandra_keyspace_throughput_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_cassandra_keyspace_throughput_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_cassandra_keyspace_throughput_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_cassandra_keyspace_throughput_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_cassandra_keyspace_throughput_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_cassandra_keyspace_throughput_update_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_cassandra_keyspace_throughput_update_command_builder, _super);
    function az_cosmosdb_cassandra_keyspace_throughput_update_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_cassandra_keyspace_throughput_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Keyspace name. */
    az_cosmosdb_cassandra_keyspace_throughput_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_cassandra_keyspace_throughput_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    az_cosmosdb_cassandra_keyspace_throughput_update_command_builder.prototype.maxThroughput = function (value) {
        this.setFlag("--max-throughput", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_cassandra_keyspace_throughput_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The throughput of Cassandra keyspace (RU/s). */
    az_cosmosdb_cassandra_keyspace_throughput_update_command_builder.prototype.throughput = function (value) {
        this.setFlag("--throughput", value);
        return this;
    };
    return az_cosmosdb_cassandra_keyspace_throughput_update_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_cassandra_keyspace_create_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_cassandra_keyspace_create_command_builder, _super);
    function az_cosmosdb_cassandra_keyspace_create_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_cassandra_keyspace_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Keyspace name. */
    az_cosmosdb_cassandra_keyspace_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_cassandra_keyspace_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    az_cosmosdb_cassandra_keyspace_create_command_builder.prototype.maxThroughput = function (value) {
        this.setFlag("--max-throughput", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_cassandra_keyspace_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The throughput of Cassandra keyspace (RU/s). Default value is 400. */
    az_cosmosdb_cassandra_keyspace_create_command_builder.prototype.throughput = function (value) {
        this.setFlag("--throughput", value);
        return this;
    };
    return az_cosmosdb_cassandra_keyspace_create_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_cassandra_keyspace_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_cassandra_keyspace_delete_command_builder, _super);
    function az_cosmosdb_cassandra_keyspace_delete_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_cassandra_keyspace_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Keyspace name. */
    az_cosmosdb_cassandra_keyspace_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_cassandra_keyspace_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_cassandra_keyspace_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_cosmosdb_cassandra_keyspace_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_cosmosdb_cassandra_keyspace_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_cassandra_keyspace_exists_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_cassandra_keyspace_exists_command_builder, _super);
    function az_cosmosdb_cassandra_keyspace_exists_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_cassandra_keyspace_exists_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Keyspace name. */
    az_cosmosdb_cassandra_keyspace_exists_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_cassandra_keyspace_exists_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_cassandra_keyspace_exists_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_cassandra_keyspace_exists_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_cassandra_keyspace_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_cassandra_keyspace_list_command_builder, _super);
    function az_cosmosdb_cassandra_keyspace_list_command_builder(commandPath, resultDataTypeName, accountName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_cassandra_keyspace_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_cassandra_keyspace_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_cassandra_keyspace_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_cassandra_keyspace_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_cassandra_keyspace_list_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_cassandra_keyspace_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_cassandra_keyspace_show_command_builder, _super);
    function az_cosmosdb_cassandra_keyspace_show_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_cassandra_keyspace_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Keyspace name. */
    az_cosmosdb_cassandra_keyspace_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_cassandra_keyspace_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_cassandra_keyspace_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_cassandra_keyspace_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_cassandra_keyspace_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_cassandra_table_throughput_migrate_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_cassandra_table_throughput_migrate_command_builder, _super);
    function az_cosmosdb_cassandra_table_throughput_migrate_command_builder(commandPath, resultDataTypeName, accountName, keyspaceName, name, resourceGroup, throughputType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.keyspaceName(keyspaceName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.throughputType(throughputType);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_cassandra_table_throughput_migrate_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Keyspace name. */
    az_cosmosdb_cassandra_table_throughput_migrate_command_builder.prototype.keyspaceName = function (value) {
        this.setFlag("--keyspace-name", value);
        return this;
    };
    /** Table name. */
    az_cosmosdb_cassandra_table_throughput_migrate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_cassandra_table_throughput_migrate_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The type of throughput to migrate to. */
    az_cosmosdb_cassandra_table_throughput_migrate_command_builder.prototype.throughputType = function (value) {
        this.setFlag("--throughput-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_cassandra_table_throughput_migrate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_cassandra_table_throughput_migrate_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_cassandra_table_throughput_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_cassandra_table_throughput_show_command_builder, _super);
    function az_cosmosdb_cassandra_table_throughput_show_command_builder(commandPath, resultDataTypeName, accountName, keyspaceName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.keyspaceName(keyspaceName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_cassandra_table_throughput_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Keyspace name. */
    az_cosmosdb_cassandra_table_throughput_show_command_builder.prototype.keyspaceName = function (value) {
        this.setFlag("--keyspace-name", value);
        return this;
    };
    /** Table name. */
    az_cosmosdb_cassandra_table_throughput_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_cassandra_table_throughput_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_cassandra_table_throughput_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_cassandra_table_throughput_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_cassandra_table_throughput_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_cassandra_table_throughput_update_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_cassandra_table_throughput_update_command_builder, _super);
    function az_cosmosdb_cassandra_table_throughput_update_command_builder(commandPath, resultDataTypeName, accountName, keyspaceName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.keyspaceName(keyspaceName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_cassandra_table_throughput_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Keyspace name. */
    az_cosmosdb_cassandra_table_throughput_update_command_builder.prototype.keyspaceName = function (value) {
        this.setFlag("--keyspace-name", value);
        return this;
    };
    /** Table name. */
    az_cosmosdb_cassandra_table_throughput_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_cassandra_table_throughput_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    az_cosmosdb_cassandra_table_throughput_update_command_builder.prototype.maxThroughput = function (value) {
        this.setFlag("--max-throughput", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_cassandra_table_throughput_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The throughput of Cassandra table (RU/s). */
    az_cosmosdb_cassandra_table_throughput_update_command_builder.prototype.throughput = function (value) {
        this.setFlag("--throughput", value);
        return this;
    };
    return az_cosmosdb_cassandra_table_throughput_update_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_cassandra_table_create_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_cassandra_table_create_command_builder, _super);
    function az_cosmosdb_cassandra_table_create_command_builder(commandPath, resultDataTypeName, accountName, keyspaceName, name, resourceGroup, schema) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.keyspaceName(keyspaceName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.schema(schema);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_cassandra_table_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Keyspace name. */
    az_cosmosdb_cassandra_table_create_command_builder.prototype.keyspaceName = function (value) {
        this.setFlag("--keyspace-name", value);
        return this;
    };
    /** Table name. */
    az_cosmosdb_cassandra_table_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_cassandra_table_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Schema, you can enter it as a string or as a file, e.g., --schema @schema-file.json or --schema "{"columns": [{"name": "columnA","type": "uuid"}, {"name": "columnB","type": "Ascii"}],"partitionKeys": [{"name": "columnA"}]}". */
    az_cosmosdb_cassandra_table_create_command_builder.prototype.schema = function (value) {
        this.setFlag("--schema", value);
        return this;
    };
    /** Analytical TTL, when analytical storage is enabled. */
    az_cosmosdb_cassandra_table_create_command_builder.prototype.analyticalStorageTtl = function (value) {
        this.setFlag("--analytical-storage-ttl", value);
        return this;
    };
    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    az_cosmosdb_cassandra_table_create_command_builder.prototype.maxThroughput = function (value) {
        this.setFlag("--max-throughput", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_cassandra_table_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The throughput of Cassandra table (RU/s). Default value is 400. Omit this parameter if the keyspace has shared throughput unless the table should have dedicated throughput. */
    az_cosmosdb_cassandra_table_create_command_builder.prototype.throughput = function (value) {
        this.setFlag("--throughput", value);
        return this;
    };
    /** Default TTL. If the value is missing or set to "-1", items don’t expire. If the value is set to "n", items will expire "n" seconds after last modified time. */
    az_cosmosdb_cassandra_table_create_command_builder.prototype.ttl = function (value) {
        this.setFlag("--ttl", value);
        return this;
    };
    return az_cosmosdb_cassandra_table_create_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_cassandra_table_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_cassandra_table_delete_command_builder, _super);
    function az_cosmosdb_cassandra_table_delete_command_builder(commandPath, resultDataTypeName, accountName, keyspaceName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.keyspaceName(keyspaceName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_cassandra_table_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Keyspace name. */
    az_cosmosdb_cassandra_table_delete_command_builder.prototype.keyspaceName = function (value) {
        this.setFlag("--keyspace-name", value);
        return this;
    };
    /** Table name. */
    az_cosmosdb_cassandra_table_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_cassandra_table_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_cassandra_table_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_cosmosdb_cassandra_table_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_cosmosdb_cassandra_table_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_cassandra_table_exists_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_cassandra_table_exists_command_builder, _super);
    function az_cosmosdb_cassandra_table_exists_command_builder(commandPath, resultDataTypeName, accountName, keyspaceName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.keyspaceName(keyspaceName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_cassandra_table_exists_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Keyspace name. */
    az_cosmosdb_cassandra_table_exists_command_builder.prototype.keyspaceName = function (value) {
        this.setFlag("--keyspace-name", value);
        return this;
    };
    /** Table name. */
    az_cosmosdb_cassandra_table_exists_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_cassandra_table_exists_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_cassandra_table_exists_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_cassandra_table_exists_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_cassandra_table_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_cassandra_table_list_command_builder, _super);
    function az_cosmosdb_cassandra_table_list_command_builder(commandPath, resultDataTypeName, accountName, keyspaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.keyspaceName(keyspaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_cassandra_table_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Keyspace name. */
    az_cosmosdb_cassandra_table_list_command_builder.prototype.keyspaceName = function (value) {
        this.setFlag("--keyspace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_cassandra_table_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_cassandra_table_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_cassandra_table_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_cassandra_table_list_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_cassandra_table_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_cassandra_table_show_command_builder, _super);
    function az_cosmosdb_cassandra_table_show_command_builder(commandPath, resultDataTypeName, accountName, keyspaceName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.keyspaceName(keyspaceName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_cassandra_table_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Keyspace name. */
    az_cosmosdb_cassandra_table_show_command_builder.prototype.keyspaceName = function (value) {
        this.setFlag("--keyspace-name", value);
        return this;
    };
    /** Table name. */
    az_cosmosdb_cassandra_table_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_cassandra_table_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_cassandra_table_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_cassandra_table_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_cassandra_table_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_cassandra_table_update_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_cassandra_table_update_command_builder, _super);
    function az_cosmosdb_cassandra_table_update_command_builder(commandPath, resultDataTypeName, accountName, keyspaceName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.keyspaceName(keyspaceName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_cassandra_table_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Keyspace name. */
    az_cosmosdb_cassandra_table_update_command_builder.prototype.keyspaceName = function (value) {
        this.setFlag("--keyspace-name", value);
        return this;
    };
    /** Table name. */
    az_cosmosdb_cassandra_table_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_cassandra_table_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Analytical TTL, when analytical storage is enabled. */
    az_cosmosdb_cassandra_table_update_command_builder.prototype.analyticalStorageTtl = function (value) {
        this.setFlag("--analytical-storage-ttl", value);
        return this;
    };
    /** Schema, you can enter it as a string or as a file, e.g., --schema @schema-file.json or --schema "{"columns": [{"name": "columnA","type": "uuid"}, {"name": "columnB","type": "Ascii"}],"partitionKeys": [{"name": "columnA"}]}". */
    az_cosmosdb_cassandra_table_update_command_builder.prototype.schema = function (value) {
        this.setFlag("--schema", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_cassandra_table_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Default TTL. If the value is missing or set to "-1", items don’t expire. If the value is set to "n", items will expire "n" seconds after last modified time. */
    az_cosmosdb_cassandra_table_update_command_builder.prototype.ttl = function (value) {
        this.setFlag("--ttl", value);
        return this;
    };
    return az_cosmosdb_cassandra_table_update_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_collection_create_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_collection_create_command_builder, _super);
    function az_cosmosdb_collection_create_command_builder(commandPath, resultDataTypeName, collectionName, dbName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.collectionName(collectionName);
        _this.dbName(dbName);
        return _this;
    }
    /** Collection Name. */
    az_cosmosdb_collection_create_command_builder.prototype.collectionName = function (value) {
        this.setFlag("--collection-name", value);
        return this;
    };
    /** Database Name. */
    az_cosmosdb_collection_create_command_builder.prototype.dbName = function (value) {
        this.setFlag("--db-name", value);
        return this;
    };
    /** Default TTL. Provide 0 to disable. */
    az_cosmosdb_collection_create_command_builder.prototype.defaultTtl = function (value) {
        this.setFlag("--default-ttl", value);
        return this;
    };
    /** Indexing Policy, you can enter it as a string or as a file, e.g., --indexing-policy @policy-file.json). */
    az_cosmosdb_collection_create_command_builder.prototype.indexingPolicy = function (value) {
        this.setFlag("--indexing-policy", value);
        return this;
    };
    /** Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection. */
    az_cosmosdb_collection_create_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key. */
    az_cosmosdb_collection_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Partition Key Path, e.g., '/properties/name'. */
    az_cosmosdb_collection_create_command_builder.prototype.partitionKeyPath = function (value) {
        this.setFlag("--partition-key-path", value);
        return this;
    };
    /** Name of the resource group. Must be used in conjunction with cosmosdb account name. */
    az_cosmosdb_collection_create_command_builder.prototype.resourceGroupName = function (value) {
        this.setFlag("--resource-group-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_collection_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Offer Throughput (RU/s). */
    az_cosmosdb_collection_create_command_builder.prototype.throughput = function (value) {
        this.setFlag("--throughput", value);
        return this;
    };
    /** Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key. */
    az_cosmosdb_collection_create_command_builder.prototype.urlConnection = function (value) {
        this.setFlag("--url-connection", value);
        return this;
    };
    return az_cosmosdb_collection_create_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_collection_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_collection_delete_command_builder, _super);
    function az_cosmosdb_collection_delete_command_builder(commandPath, resultDataTypeName, collectionName, dbName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.collectionName(collectionName);
        _this.dbName(dbName);
        return _this;
    }
    /** Collection Name. */
    az_cosmosdb_collection_delete_command_builder.prototype.collectionName = function (value) {
        this.setFlag("--collection-name", value);
        return this;
    };
    /** Database Name. */
    az_cosmosdb_collection_delete_command_builder.prototype.dbName = function (value) {
        this.setFlag("--db-name", value);
        return this;
    };
    /** Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection. */
    az_cosmosdb_collection_delete_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key. */
    az_cosmosdb_collection_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the resource group. Must be used in conjunction with cosmosdb account name. */
    az_cosmosdb_collection_delete_command_builder.prototype.resourceGroupName = function (value) {
        this.setFlag("--resource-group-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_collection_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key. */
    az_cosmosdb_collection_delete_command_builder.prototype.urlConnection = function (value) {
        this.setFlag("--url-connection", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_cosmosdb_collection_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_cosmosdb_collection_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_collection_exists_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_collection_exists_command_builder, _super);
    function az_cosmosdb_collection_exists_command_builder(commandPath, resultDataTypeName, collectionName, dbName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.collectionName(collectionName);
        _this.dbName(dbName);
        return _this;
    }
    /** Collection Name. */
    az_cosmosdb_collection_exists_command_builder.prototype.collectionName = function (value) {
        this.setFlag("--collection-name", value);
        return this;
    };
    /** Database Name. */
    az_cosmosdb_collection_exists_command_builder.prototype.dbName = function (value) {
        this.setFlag("--db-name", value);
        return this;
    };
    /** Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection. */
    az_cosmosdb_collection_exists_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key. */
    az_cosmosdb_collection_exists_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the resource group. Must be used in conjunction with cosmosdb account name. */
    az_cosmosdb_collection_exists_command_builder.prototype.resourceGroupName = function (value) {
        this.setFlag("--resource-group-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_collection_exists_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key. */
    az_cosmosdb_collection_exists_command_builder.prototype.urlConnection = function (value) {
        this.setFlag("--url-connection", value);
        return this;
    };
    return az_cosmosdb_collection_exists_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_collection_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_collection_list_command_builder, _super);
    function az_cosmosdb_collection_list_command_builder(commandPath, resultDataTypeName, dbName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.dbName(dbName);
        return _this;
    }
    /** Database Name. */
    az_cosmosdb_collection_list_command_builder.prototype.dbName = function (value) {
        this.setFlag("--db-name", value);
        return this;
    };
    /** Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection. */
    az_cosmosdb_collection_list_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key. */
    az_cosmosdb_collection_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_collection_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of the resource group. Must be used in conjunction with cosmosdb account name. */
    az_cosmosdb_collection_list_command_builder.prototype.resourceGroupName = function (value) {
        this.setFlag("--resource-group-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_collection_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key. */
    az_cosmosdb_collection_list_command_builder.prototype.urlConnection = function (value) {
        this.setFlag("--url-connection", value);
        return this;
    };
    return az_cosmosdb_collection_list_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_collection_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_collection_show_command_builder, _super);
    function az_cosmosdb_collection_show_command_builder(commandPath, resultDataTypeName, collectionName, dbName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.collectionName(collectionName);
        _this.dbName(dbName);
        return _this;
    }
    /** Collection Name. */
    az_cosmosdb_collection_show_command_builder.prototype.collectionName = function (value) {
        this.setFlag("--collection-name", value);
        return this;
    };
    /** Database Name. */
    az_cosmosdb_collection_show_command_builder.prototype.dbName = function (value) {
        this.setFlag("--db-name", value);
        return this;
    };
    /** Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection. */
    az_cosmosdb_collection_show_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key. */
    az_cosmosdb_collection_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_collection_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of the resource group. Must be used in conjunction with cosmosdb account name. */
    az_cosmosdb_collection_show_command_builder.prototype.resourceGroupName = function (value) {
        this.setFlag("--resource-group-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_collection_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key. */
    az_cosmosdb_collection_show_command_builder.prototype.urlConnection = function (value) {
        this.setFlag("--url-connection", value);
        return this;
    };
    return az_cosmosdb_collection_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_collection_update_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_collection_update_command_builder, _super);
    function az_cosmosdb_collection_update_command_builder(commandPath, resultDataTypeName, collectionName, dbName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.collectionName(collectionName);
        _this.dbName(dbName);
        return _this;
    }
    /** Collection Name. */
    az_cosmosdb_collection_update_command_builder.prototype.collectionName = function (value) {
        this.setFlag("--collection-name", value);
        return this;
    };
    /** Database Name. */
    az_cosmosdb_collection_update_command_builder.prototype.dbName = function (value) {
        this.setFlag("--db-name", value);
        return this;
    };
    /** Default TTL. Provide 0 to disable. */
    az_cosmosdb_collection_update_command_builder.prototype.defaultTtl = function (value) {
        this.setFlag("--default-ttl", value);
        return this;
    };
    /** Indexing Policy, you can enter it as a string or as a file, e.g., --indexing-policy @policy-file.json). */
    az_cosmosdb_collection_update_command_builder.prototype.indexingPolicy = function (value) {
        this.setFlag("--indexing-policy", value);
        return this;
    };
    /** Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection. */
    az_cosmosdb_collection_update_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key. */
    az_cosmosdb_collection_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the resource group. Must be used in conjunction with cosmosdb account name. */
    az_cosmosdb_collection_update_command_builder.prototype.resourceGroupName = function (value) {
        this.setFlag("--resource-group-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_collection_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Offer Throughput (RU/s). */
    az_cosmosdb_collection_update_command_builder.prototype.throughput = function (value) {
        this.setFlag("--throughput", value);
        return this;
    };
    /** Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key. */
    az_cosmosdb_collection_update_command_builder.prototype.urlConnection = function (value) {
        this.setFlag("--url-connection", value);
        return this;
    };
    return az_cosmosdb_collection_update_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_database_create_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_database_create_command_builder, _super);
    function az_cosmosdb_database_create_command_builder(commandPath, resultDataTypeName, dbName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.dbName(dbName);
        return _this;
    }
    /** Database Name. */
    az_cosmosdb_database_create_command_builder.prototype.dbName = function (value) {
        this.setFlag("--db-name", value);
        return this;
    };
    /** Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection. */
    az_cosmosdb_database_create_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key. */
    az_cosmosdb_database_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the resource group. Must be used in conjunction with cosmosdb account name. */
    az_cosmosdb_database_create_command_builder.prototype.resourceGroupName = function (value) {
        this.setFlag("--resource-group-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_database_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Offer Throughput (RU/s). */
    az_cosmosdb_database_create_command_builder.prototype.throughput = function (value) {
        this.setFlag("--throughput", value);
        return this;
    };
    /** Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key. */
    az_cosmosdb_database_create_command_builder.prototype.urlConnection = function (value) {
        this.setFlag("--url-connection", value);
        return this;
    };
    return az_cosmosdb_database_create_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_database_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_database_delete_command_builder, _super);
    function az_cosmosdb_database_delete_command_builder(commandPath, resultDataTypeName, dbName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.dbName(dbName);
        return _this;
    }
    /** Database Name. */
    az_cosmosdb_database_delete_command_builder.prototype.dbName = function (value) {
        this.setFlag("--db-name", value);
        return this;
    };
    /** Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection. */
    az_cosmosdb_database_delete_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key. */
    az_cosmosdb_database_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the resource group. Must be used in conjunction with cosmosdb account name. */
    az_cosmosdb_database_delete_command_builder.prototype.resourceGroupName = function (value) {
        this.setFlag("--resource-group-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_database_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key. */
    az_cosmosdb_database_delete_command_builder.prototype.urlConnection = function (value) {
        this.setFlag("--url-connection", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_cosmosdb_database_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_cosmosdb_database_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_database_exists_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_database_exists_command_builder, _super);
    function az_cosmosdb_database_exists_command_builder(commandPath, resultDataTypeName, dbName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.dbName(dbName);
        return _this;
    }
    /** Database Name. */
    az_cosmosdb_database_exists_command_builder.prototype.dbName = function (value) {
        this.setFlag("--db-name", value);
        return this;
    };
    /** Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection. */
    az_cosmosdb_database_exists_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key. */
    az_cosmosdb_database_exists_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the resource group. Must be used in conjunction with cosmosdb account name. */
    az_cosmosdb_database_exists_command_builder.prototype.resourceGroupName = function (value) {
        this.setFlag("--resource-group-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_database_exists_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key. */
    az_cosmosdb_database_exists_command_builder.prototype.urlConnection = function (value) {
        this.setFlag("--url-connection", value);
        return this;
    };
    return az_cosmosdb_database_exists_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_database_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_database_list_command_builder, _super);
    function az_cosmosdb_database_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection. */
    az_cosmosdb_database_list_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key. */
    az_cosmosdb_database_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_database_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of the resource group. Must be used in conjunction with cosmosdb account name. */
    az_cosmosdb_database_list_command_builder.prototype.resourceGroupName = function (value) {
        this.setFlag("--resource-group-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_database_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key. */
    az_cosmosdb_database_list_command_builder.prototype.urlConnection = function (value) {
        this.setFlag("--url-connection", value);
        return this;
    };
    return az_cosmosdb_database_list_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_database_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_database_show_command_builder, _super);
    function az_cosmosdb_database_show_command_builder(commandPath, resultDataTypeName, dbName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.dbName(dbName);
        return _this;
    }
    /** Database Name. */
    az_cosmosdb_database_show_command_builder.prototype.dbName = function (value) {
        this.setFlag("--db-name", value);
        return this;
    };
    /** Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection. */
    az_cosmosdb_database_show_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key. */
    az_cosmosdb_database_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_database_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of the resource group. Must be used in conjunction with cosmosdb account name. */
    az_cosmosdb_database_show_command_builder.prototype.resourceGroupName = function (value) {
        this.setFlag("--resource-group-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_database_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key. */
    az_cosmosdb_database_show_command_builder.prototype.urlConnection = function (value) {
        this.setFlag("--url-connection", value);
        return this;
    };
    return az_cosmosdb_database_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_gremlin_database_throughput_migrate_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_gremlin_database_throughput_migrate_command_builder, _super);
    function az_cosmosdb_gremlin_database_throughput_migrate_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup, throughputType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.throughputType(throughputType);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_gremlin_database_throughput_migrate_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_gremlin_database_throughput_migrate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_gremlin_database_throughput_migrate_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The type of throughput to migrate to. */
    az_cosmosdb_gremlin_database_throughput_migrate_command_builder.prototype.throughputType = function (value) {
        this.setFlag("--throughput-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_gremlin_database_throughput_migrate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_gremlin_database_throughput_migrate_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_gremlin_database_throughput_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_gremlin_database_throughput_show_command_builder, _super);
    function az_cosmosdb_gremlin_database_throughput_show_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_gremlin_database_throughput_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_gremlin_database_throughput_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_gremlin_database_throughput_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_gremlin_database_throughput_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_gremlin_database_throughput_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_gremlin_database_throughput_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_gremlin_database_throughput_update_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_gremlin_database_throughput_update_command_builder, _super);
    function az_cosmosdb_gremlin_database_throughput_update_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_gremlin_database_throughput_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_gremlin_database_throughput_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_gremlin_database_throughput_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    az_cosmosdb_gremlin_database_throughput_update_command_builder.prototype.maxThroughput = function (value) {
        this.setFlag("--max-throughput", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_gremlin_database_throughput_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The throughput of Gremlin database (RU/s). */
    az_cosmosdb_gremlin_database_throughput_update_command_builder.prototype.throughput = function (value) {
        this.setFlag("--throughput", value);
        return this;
    };
    return az_cosmosdb_gremlin_database_throughput_update_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_gremlin_database_create_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_gremlin_database_create_command_builder, _super);
    function az_cosmosdb_gremlin_database_create_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_gremlin_database_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_gremlin_database_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_gremlin_database_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    az_cosmosdb_gremlin_database_create_command_builder.prototype.maxThroughput = function (value) {
        this.setFlag("--max-throughput", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_gremlin_database_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The throughput Gremlin database (RU/s). Default value is 400. */
    az_cosmosdb_gremlin_database_create_command_builder.prototype.throughput = function (value) {
        this.setFlag("--throughput", value);
        return this;
    };
    return az_cosmosdb_gremlin_database_create_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_gremlin_database_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_gremlin_database_delete_command_builder, _super);
    function az_cosmosdb_gremlin_database_delete_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_gremlin_database_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_gremlin_database_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_gremlin_database_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_gremlin_database_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_cosmosdb_gremlin_database_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_cosmosdb_gremlin_database_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_gremlin_database_exists_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_gremlin_database_exists_command_builder, _super);
    function az_cosmosdb_gremlin_database_exists_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_gremlin_database_exists_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_gremlin_database_exists_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_gremlin_database_exists_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_gremlin_database_exists_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_gremlin_database_exists_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_gremlin_database_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_gremlin_database_list_command_builder, _super);
    function az_cosmosdb_gremlin_database_list_command_builder(commandPath, resultDataTypeName, accountName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_gremlin_database_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_gremlin_database_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_gremlin_database_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_gremlin_database_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_gremlin_database_list_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_gremlin_database_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_gremlin_database_show_command_builder, _super);
    function az_cosmosdb_gremlin_database_show_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_gremlin_database_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_gremlin_database_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_gremlin_database_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_gremlin_database_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_gremlin_database_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_gremlin_database_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_gremlin_graph_throughput_migrate_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_gremlin_graph_throughput_migrate_command_builder, _super);
    function az_cosmosdb_gremlin_graph_throughput_migrate_command_builder(commandPath, resultDataTypeName, accountName, databaseName, name, resourceGroup, throughputType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.throughputType(throughputType);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_gremlin_graph_throughput_migrate_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_gremlin_graph_throughput_migrate_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Graph name. */
    az_cosmosdb_gremlin_graph_throughput_migrate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_gremlin_graph_throughput_migrate_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The type of throughput to migrate to. */
    az_cosmosdb_gremlin_graph_throughput_migrate_command_builder.prototype.throughputType = function (value) {
        this.setFlag("--throughput-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_gremlin_graph_throughput_migrate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_gremlin_graph_throughput_migrate_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_gremlin_graph_throughput_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_gremlin_graph_throughput_show_command_builder, _super);
    function az_cosmosdb_gremlin_graph_throughput_show_command_builder(commandPath, resultDataTypeName, accountName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_gremlin_graph_throughput_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_gremlin_graph_throughput_show_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Graph name. */
    az_cosmosdb_gremlin_graph_throughput_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_gremlin_graph_throughput_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_gremlin_graph_throughput_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_gremlin_graph_throughput_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_gremlin_graph_throughput_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_gremlin_graph_throughput_update_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_gremlin_graph_throughput_update_command_builder, _super);
    function az_cosmosdb_gremlin_graph_throughput_update_command_builder(commandPath, resultDataTypeName, accountName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_gremlin_graph_throughput_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_gremlin_graph_throughput_update_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Graph name. */
    az_cosmosdb_gremlin_graph_throughput_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_gremlin_graph_throughput_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    az_cosmosdb_gremlin_graph_throughput_update_command_builder.prototype.maxThroughput = function (value) {
        this.setFlag("--max-throughput", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_gremlin_graph_throughput_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The throughput Gremlin graph (RU/s). */
    az_cosmosdb_gremlin_graph_throughput_update_command_builder.prototype.throughput = function (value) {
        this.setFlag("--throughput", value);
        return this;
    };
    return az_cosmosdb_gremlin_graph_throughput_update_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_gremlin_graph_create_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_gremlin_graph_create_command_builder, _super);
    function az_cosmosdb_gremlin_graph_create_command_builder(commandPath, resultDataTypeName, accountName, databaseName, name, partitionKeyPath, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.partitionKeyPath(partitionKeyPath);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_gremlin_graph_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_gremlin_graph_create_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Graph name. */
    az_cosmosdb_gremlin_graph_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Partition Key Path, e.g., '/address/zipcode'. */
    az_cosmosdb_gremlin_graph_create_command_builder.prototype.partitionKeyPath = function (value) {
        this.setFlag("--partition-key-path", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_gremlin_graph_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Conflict Resolution Policy, you can enter it as a string or as a file, e.g., --conflict-resolution-policy @policy-file.json or --conflict-resolution-policy "{"mode": "lastWriterWins", "conflictResolutionPath": "/path"}". */
    az_cosmosdb_gremlin_graph_create_command_builder.prototype.conflictResolutionPolicy = function (value) {
        this.setFlag("--conflict-resolution-policy", value);
        return this;
    };
    /** Indexing Policy, you can enter it as a string or as a file, e.g., --idx @policy-file.json or --idx "{"indexingMode": "consistent", "automatic": true, "includedPaths": [{"path": "/\*"}], "excludedPaths": [{ "path": "/headquarters/employees/?"}, { "path": "/\"_etag\"/?"}]}". */
    az_cosmosdb_gremlin_graph_create_command_builder.prototype.idx = function (value) {
        this.setFlag("--idx", value);
        return this;
    };
    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    az_cosmosdb_gremlin_graph_create_command_builder.prototype.maxThroughput = function (value) {
        this.setFlag("--max-throughput", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_gremlin_graph_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The throughput of Gremlin graph (RU/s). Default value is 400. Omit this parameter if the database has shared throughput unless the graph should have dedicated throughput. */
    az_cosmosdb_gremlin_graph_create_command_builder.prototype.throughput = function (value) {
        this.setFlag("--throughput", value);
        return this;
    };
    /** Default TTL. If the value is missing or set to "-1", items don’t expire. If the value is set to "n", items will expire "n" seconds after last modified time. */
    az_cosmosdb_gremlin_graph_create_command_builder.prototype.ttl = function (value) {
        this.setFlag("--ttl", value);
        return this;
    };
    return az_cosmosdb_gremlin_graph_create_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_gremlin_graph_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_gremlin_graph_delete_command_builder, _super);
    function az_cosmosdb_gremlin_graph_delete_command_builder(commandPath, resultDataTypeName, accountName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_gremlin_graph_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_gremlin_graph_delete_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Graph name. */
    az_cosmosdb_gremlin_graph_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_gremlin_graph_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_gremlin_graph_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_cosmosdb_gremlin_graph_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_cosmosdb_gremlin_graph_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_gremlin_graph_exists_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_gremlin_graph_exists_command_builder, _super);
    function az_cosmosdb_gremlin_graph_exists_command_builder(commandPath, resultDataTypeName, accountName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_gremlin_graph_exists_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_gremlin_graph_exists_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Graph name. */
    az_cosmosdb_gremlin_graph_exists_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_gremlin_graph_exists_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_gremlin_graph_exists_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_gremlin_graph_exists_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_gremlin_graph_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_gremlin_graph_list_command_builder, _super);
    function az_cosmosdb_gremlin_graph_list_command_builder(commandPath, resultDataTypeName, accountName, databaseName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_gremlin_graph_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_gremlin_graph_list_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_gremlin_graph_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_gremlin_graph_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_gremlin_graph_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_gremlin_graph_list_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_gremlin_graph_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_gremlin_graph_show_command_builder, _super);
    function az_cosmosdb_gremlin_graph_show_command_builder(commandPath, resultDataTypeName, accountName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_gremlin_graph_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_gremlin_graph_show_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Graph name. */
    az_cosmosdb_gremlin_graph_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_gremlin_graph_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_gremlin_graph_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_gremlin_graph_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_gremlin_graph_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_gremlin_graph_update_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_gremlin_graph_update_command_builder, _super);
    function az_cosmosdb_gremlin_graph_update_command_builder(commandPath, resultDataTypeName, accountName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_gremlin_graph_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_gremlin_graph_update_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Graph name. */
    az_cosmosdb_gremlin_graph_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_gremlin_graph_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Indexing Policy, you can enter it as a string or as a file, e.g., --idx @policy-file.json or --idx "{"indexingMode": "consistent", "automatic": true, "includedPaths": [{"path": "/\*"}], "excludedPaths": [{ "path": "/headquarters/employees/?"}, { "path": "/\"_etag\"/?"}]}". */
    az_cosmosdb_gremlin_graph_update_command_builder.prototype.idx = function (value) {
        this.setFlag("--idx", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_gremlin_graph_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Default TTL. If the value is missing or set to "-1", items don’t expire. If the value is set to "n", items will expire "n" seconds after last modified time. */
    az_cosmosdb_gremlin_graph_update_command_builder.prototype.ttl = function (value) {
        this.setFlag("--ttl", value);
        return this;
    };
    return az_cosmosdb_gremlin_graph_update_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_keys_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_keys_list_command_builder, _super);
    function az_cosmosdb_keys_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_keys_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_keys_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_keys_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_keys_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The type of account key. */
    az_cosmosdb_keys_list_command_builder.prototype.type = function (value) {
        this.setFlag("--type", value);
        return this;
    };
    return az_cosmosdb_keys_list_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_keys_regenerate_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_keys_regenerate_command_builder, _super);
    function az_cosmosdb_keys_regenerate_command_builder(commandPath, resultDataTypeName, keyKind) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.keyKind(keyKind);
        return _this;
    }
    /** The access key to regenerate. */
    az_cosmosdb_keys_regenerate_command_builder.prototype.keyKind = function (value) {
        this.setFlag("--key-kind", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cosmosdb_keys_regenerate_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Cosmos DB database account. */
    az_cosmosdb_keys_regenerate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_keys_regenerate_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_keys_regenerate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_keys_regenerate_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_mongodb_collection_throughput_migrate_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_mongodb_collection_throughput_migrate_command_builder, _super);
    function az_cosmosdb_mongodb_collection_throughput_migrate_command_builder(commandPath, resultDataTypeName, accountName, databaseName, name, resourceGroup, throughputType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.throughputType(throughputType);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_mongodb_collection_throughput_migrate_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_mongodb_collection_throughput_migrate_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Collection name. */
    az_cosmosdb_mongodb_collection_throughput_migrate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_mongodb_collection_throughput_migrate_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The type of throughput to migrate to. */
    az_cosmosdb_mongodb_collection_throughput_migrate_command_builder.prototype.throughputType = function (value) {
        this.setFlag("--throughput-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_mongodb_collection_throughput_migrate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_mongodb_collection_throughput_migrate_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_mongodb_collection_throughput_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_mongodb_collection_throughput_show_command_builder, _super);
    function az_cosmosdb_mongodb_collection_throughput_show_command_builder(commandPath, resultDataTypeName, accountName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_mongodb_collection_throughput_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_mongodb_collection_throughput_show_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Collection name. */
    az_cosmosdb_mongodb_collection_throughput_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_mongodb_collection_throughput_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_mongodb_collection_throughput_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_mongodb_collection_throughput_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_mongodb_collection_throughput_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_mongodb_collection_throughput_update_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_mongodb_collection_throughput_update_command_builder, _super);
    function az_cosmosdb_mongodb_collection_throughput_update_command_builder(commandPath, resultDataTypeName, accountName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_mongodb_collection_throughput_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_mongodb_collection_throughput_update_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Collection name. */
    az_cosmosdb_mongodb_collection_throughput_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_mongodb_collection_throughput_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    az_cosmosdb_mongodb_collection_throughput_update_command_builder.prototype.maxThroughput = function (value) {
        this.setFlag("--max-throughput", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_mongodb_collection_throughput_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The throughput of MongoDB collection (RU/s). */
    az_cosmosdb_mongodb_collection_throughput_update_command_builder.prototype.throughput = function (value) {
        this.setFlag("--throughput", value);
        return this;
    };
    return az_cosmosdb_mongodb_collection_throughput_update_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_mongodb_collection_create_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_mongodb_collection_create_command_builder, _super);
    function az_cosmosdb_mongodb_collection_create_command_builder(commandPath, resultDataTypeName, accountName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_mongodb_collection_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_mongodb_collection_create_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Collection name. */
    az_cosmosdb_mongodb_collection_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_mongodb_collection_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Analytical TTL, when analytical storage is enabled. */
    az_cosmosdb_mongodb_collection_create_command_builder.prototype.analyticalStorageTtl = function (value) {
        this.setFlag("--analytical-storage-ttl", value);
        return this;
    };
    /** Indexes, you can enter it as a string or as a file, e.g., --idx @indexes-file.json or --idx "[{"key": {"keys": ["_ts"]},"options": {"expireAfterSeconds": 1000}}, {"key": {"keys": ["user_id", "user_address"]}, "options": {"unique": "true"}}]". */
    az_cosmosdb_mongodb_collection_create_command_builder.prototype.idx = function (value) {
        this.setFlag("--idx", value);
        return this;
    };
    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    az_cosmosdb_mongodb_collection_create_command_builder.prototype.maxThroughput = function (value) {
        this.setFlag("--max-throughput", value);
        return this;
    };
    /** Sharding key path. */
    az_cosmosdb_mongodb_collection_create_command_builder.prototype.shard = function (value) {
        this.setFlag("--shard", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_mongodb_collection_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The throughput of MongoDB collection (RU/s). Default value is 400. Omit this parameter if the database has shared throughput unless the collection should have dedicated throughput. */
    az_cosmosdb_mongodb_collection_create_command_builder.prototype.throughput = function (value) {
        this.setFlag("--throughput", value);
        return this;
    };
    return az_cosmosdb_mongodb_collection_create_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_mongodb_collection_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_mongodb_collection_delete_command_builder, _super);
    function az_cosmosdb_mongodb_collection_delete_command_builder(commandPath, resultDataTypeName, accountName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_mongodb_collection_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_mongodb_collection_delete_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Collection name. */
    az_cosmosdb_mongodb_collection_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_mongodb_collection_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_mongodb_collection_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_cosmosdb_mongodb_collection_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_cosmosdb_mongodb_collection_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_mongodb_collection_exists_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_mongodb_collection_exists_command_builder, _super);
    function az_cosmosdb_mongodb_collection_exists_command_builder(commandPath, resultDataTypeName, accountName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_mongodb_collection_exists_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_mongodb_collection_exists_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Collection name. */
    az_cosmosdb_mongodb_collection_exists_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_mongodb_collection_exists_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_mongodb_collection_exists_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_mongodb_collection_exists_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_mongodb_collection_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_mongodb_collection_list_command_builder, _super);
    function az_cosmosdb_mongodb_collection_list_command_builder(commandPath, resultDataTypeName, accountName, databaseName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_mongodb_collection_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_mongodb_collection_list_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_mongodb_collection_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_mongodb_collection_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_mongodb_collection_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_mongodb_collection_list_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_mongodb_collection_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_mongodb_collection_show_command_builder, _super);
    function az_cosmosdb_mongodb_collection_show_command_builder(commandPath, resultDataTypeName, accountName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_mongodb_collection_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_mongodb_collection_show_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Collection name. */
    az_cosmosdb_mongodb_collection_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_mongodb_collection_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_mongodb_collection_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_mongodb_collection_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_mongodb_collection_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_mongodb_collection_update_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_mongodb_collection_update_command_builder, _super);
    function az_cosmosdb_mongodb_collection_update_command_builder(commandPath, resultDataTypeName, accountName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_mongodb_collection_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_mongodb_collection_update_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Collection name. */
    az_cosmosdb_mongodb_collection_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_mongodb_collection_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Analytical TTL, when analytical storage is enabled. */
    az_cosmosdb_mongodb_collection_update_command_builder.prototype.analyticalStorageTtl = function (value) {
        this.setFlag("--analytical-storage-ttl", value);
        return this;
    };
    /** Indexes, you can enter it as a string or as a file, e.g., --idx @indexes-file.json or --idx "[{"key": {"keys": ["_ts"]},"options": {"expireAfterSeconds": 1000}}, {"key": {"keys": ["user_id", "user_address"]}, "options": {"unique": "true"}}]". */
    az_cosmosdb_mongodb_collection_update_command_builder.prototype.idx = function (value) {
        this.setFlag("--idx", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_mongodb_collection_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_mongodb_collection_update_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_mongodb_database_throughput_migrate_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_mongodb_database_throughput_migrate_command_builder, _super);
    function az_cosmosdb_mongodb_database_throughput_migrate_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup, throughputType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.throughputType(throughputType);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_mongodb_database_throughput_migrate_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_mongodb_database_throughput_migrate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_mongodb_database_throughput_migrate_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The type of throughput to migrate to. */
    az_cosmosdb_mongodb_database_throughput_migrate_command_builder.prototype.throughputType = function (value) {
        this.setFlag("--throughput-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_mongodb_database_throughput_migrate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_mongodb_database_throughput_migrate_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_mongodb_database_throughput_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_mongodb_database_throughput_show_command_builder, _super);
    function az_cosmosdb_mongodb_database_throughput_show_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_mongodb_database_throughput_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_mongodb_database_throughput_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_mongodb_database_throughput_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_mongodb_database_throughput_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_mongodb_database_throughput_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_mongodb_database_throughput_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_mongodb_database_throughput_update_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_mongodb_database_throughput_update_command_builder, _super);
    function az_cosmosdb_mongodb_database_throughput_update_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_mongodb_database_throughput_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_mongodb_database_throughput_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_mongodb_database_throughput_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    az_cosmosdb_mongodb_database_throughput_update_command_builder.prototype.maxThroughput = function (value) {
        this.setFlag("--max-throughput", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_mongodb_database_throughput_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The throughput of MongoDB database (RU/s). */
    az_cosmosdb_mongodb_database_throughput_update_command_builder.prototype.throughput = function (value) {
        this.setFlag("--throughput", value);
        return this;
    };
    return az_cosmosdb_mongodb_database_throughput_update_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_mongodb_database_create_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_mongodb_database_create_command_builder, _super);
    function az_cosmosdb_mongodb_database_create_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_mongodb_database_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_mongodb_database_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_mongodb_database_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    az_cosmosdb_mongodb_database_create_command_builder.prototype.maxThroughput = function (value) {
        this.setFlag("--max-throughput", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_mongodb_database_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The throughput of MongoDB database (RU/s). Default value is 400. */
    az_cosmosdb_mongodb_database_create_command_builder.prototype.throughput = function (value) {
        this.setFlag("--throughput", value);
        return this;
    };
    return az_cosmosdb_mongodb_database_create_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_mongodb_database_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_mongodb_database_delete_command_builder, _super);
    function az_cosmosdb_mongodb_database_delete_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_mongodb_database_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_mongodb_database_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_mongodb_database_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_mongodb_database_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_cosmosdb_mongodb_database_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_cosmosdb_mongodb_database_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_mongodb_database_exists_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_mongodb_database_exists_command_builder, _super);
    function az_cosmosdb_mongodb_database_exists_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_mongodb_database_exists_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_mongodb_database_exists_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_mongodb_database_exists_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_mongodb_database_exists_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_mongodb_database_exists_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_mongodb_database_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_mongodb_database_list_command_builder, _super);
    function az_cosmosdb_mongodb_database_list_command_builder(commandPath, resultDataTypeName, accountName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_mongodb_database_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_mongodb_database_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_mongodb_database_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_mongodb_database_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_mongodb_database_list_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_mongodb_database_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_mongodb_database_show_command_builder, _super);
    function az_cosmosdb_mongodb_database_show_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_mongodb_database_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_mongodb_database_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_mongodb_database_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_mongodb_database_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_mongodb_database_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_mongodb_database_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_network_rule_add_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_network_rule_add_command_builder, _super);
    function az_cosmosdb_network_rule_add_command_builder(commandPath, resultDataTypeName, subnet) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.subnet(subnet);
        return _this;
    }
    /** Name or ID of the subnet. */
    az_cosmosdb_network_rule_add_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cosmosdb_network_rule_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Create firewall rule before the virtual network has vnet service endpoint enabled. */
    az_cosmosdb_network_rule_add_command_builder.prototype.ignoreMissingVnetServiceEndpoint = function (value) {
        this.setFlag("--ignore-missing-vnet-service-endpoint", value.toString());
        return this;
    };
    /** Name of the Cosmos DB database account. */
    az_cosmosdb_network_rule_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_network_rule_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_network_rule_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The name of the VNET, which must be provided in conjunction with the name of the subnet. */
    az_cosmosdb_network_rule_add_command_builder.prototype.virtualNetwork = function (value) {
        this.setFlag("--virtual-network", value);
        return this;
    };
    return az_cosmosdb_network_rule_add_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_network_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_network_rule_list_command_builder, _super);
    function az_cosmosdb_network_rule_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Cosmos DB database account. */
    az_cosmosdb_network_rule_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_network_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_network_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_network_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_network_rule_list_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_network_rule_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_network_rule_remove_command_builder, _super);
    function az_cosmosdb_network_rule_remove_command_builder(commandPath, resultDataTypeName, subnet) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.subnet(subnet);
        return _this;
    }
    /** Name or ID of the subnet. */
    az_cosmosdb_network_rule_remove_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cosmosdb_network_rule_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Cosmos DB database account. */
    az_cosmosdb_network_rule_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_network_rule_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_network_rule_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The name of the VNET, which must be provided in conjunction with the name of the subnet. */
    az_cosmosdb_network_rule_remove_command_builder.prototype.virtualNetwork = function (value) {
        this.setFlag("--virtual-network", value);
        return this;
    };
    return az_cosmosdb_network_rule_remove_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_private_endpoint_connection_approve_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_private_endpoint_connection_approve_command_builder, _super);
    function az_cosmosdb_private_endpoint_connection_approve_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Cosmos DB database account. Required if --connection-id is not specified. */
    az_cosmosdb_private_endpoint_connection_approve_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Comments for the approve operation. */
    az_cosmosdb_private_endpoint_connection_approve_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** The ID of the private endpoint connection associated with Azure Cosmos DB. If specified --account-name --resource-group/-g and --name/-n, this should be omitted. */
    az_cosmosdb_private_endpoint_connection_approve_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cosmosdb_private_endpoint_connection_approve_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the private endpoint connection associated with Azure Cosmos DB. Required if --connection-id is not specified. */
    az_cosmosdb_private_endpoint_connection_approve_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource group name of specified Cosmos DB account. Required if --connection-id is not specified. */
    az_cosmosdb_private_endpoint_connection_approve_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_private_endpoint_connection_approve_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_private_endpoint_connection_approve_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_private_endpoint_connection_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_private_endpoint_connection_delete_command_builder, _super);
    function az_cosmosdb_private_endpoint_connection_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Cosmos DB database account. Required if --connection-id is not specified. */
    az_cosmosdb_private_endpoint_connection_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID of the private endpoint connection associated with Azure Cosmos DB. If specified --account-name --resource-group/-g and --name/-n, this should be omitted. */
    az_cosmosdb_private_endpoint_connection_delete_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cosmosdb_private_endpoint_connection_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the private endpoint connection associated with Azure Cosmos DB. Required if --connection-id is not specified. */
    az_cosmosdb_private_endpoint_connection_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource group name of specified Cosmos DB account. Required if --connection-id is not specified. */
    az_cosmosdb_private_endpoint_connection_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_private_endpoint_connection_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_private_endpoint_connection_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_private_endpoint_connection_reject_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_private_endpoint_connection_reject_command_builder, _super);
    function az_cosmosdb_private_endpoint_connection_reject_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Cosmos DB database account. Required if --connection-id is not specified. */
    az_cosmosdb_private_endpoint_connection_reject_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Comments for the reject operation. */
    az_cosmosdb_private_endpoint_connection_reject_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** The ID of the private endpoint connection associated with Azure Cosmos DB. If specified --account-name --resource-group/-g and --name/-n, this should be omitted. */
    az_cosmosdb_private_endpoint_connection_reject_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cosmosdb_private_endpoint_connection_reject_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the private endpoint connection associated with Azure Cosmos DB. Required if --connection-id is not specified. */
    az_cosmosdb_private_endpoint_connection_reject_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource group name of specified Cosmos DB account. Required if --connection-id is not specified. */
    az_cosmosdb_private_endpoint_connection_reject_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_private_endpoint_connection_reject_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_private_endpoint_connection_reject_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_private_endpoint_connection_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_private_endpoint_connection_show_command_builder, _super);
    function az_cosmosdb_private_endpoint_connection_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Cosmos DB database account. Required if --connection-id is not specified. */
    az_cosmosdb_private_endpoint_connection_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID of the private endpoint connection associated with Azure Cosmos DB. If specified --account-name --resource-group/-g and --name/-n, this should be omitted. */
    az_cosmosdb_private_endpoint_connection_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cosmosdb_private_endpoint_connection_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the private endpoint connection associated with Azure Cosmos DB. Required if --connection-id is not specified. */
    az_cosmosdb_private_endpoint_connection_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_private_endpoint_connection_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The resource group name of specified Cosmos DB account. Required if --connection-id is not specified. */
    az_cosmosdb_private_endpoint_connection_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_private_endpoint_connection_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_private_endpoint_connection_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_private_link_resource_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_private_link_resource_list_command_builder, _super);
    function az_cosmosdb_private_link_resource_list_command_builder(commandPath, resultDataTypeName, accountName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_private_link_resource_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_private_link_resource_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_private_link_resource_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_private_link_resource_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_private_link_resource_list_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_container_throughput_migrate_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_container_throughput_migrate_command_builder, _super);
    function az_cosmosdb_sql_container_throughput_migrate_command_builder(commandPath, resultDataTypeName, accountName, databaseName, name, resourceGroup, throughputType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.throughputType(throughputType);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_container_throughput_migrate_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_container_throughput_migrate_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Container name. */
    az_cosmosdb_sql_container_throughput_migrate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_container_throughput_migrate_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The type of throughput to migrate to. */
    az_cosmosdb_sql_container_throughput_migrate_command_builder.prototype.throughputType = function (value) {
        this.setFlag("--throughput-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_container_throughput_migrate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_sql_container_throughput_migrate_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_container_throughput_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_container_throughput_show_command_builder, _super);
    function az_cosmosdb_sql_container_throughput_show_command_builder(commandPath, resultDataTypeName, accountName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_container_throughput_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_container_throughput_show_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Container name. */
    az_cosmosdb_sql_container_throughput_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_container_throughput_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_sql_container_throughput_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_container_throughput_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_sql_container_throughput_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_container_throughput_update_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_container_throughput_update_command_builder, _super);
    function az_cosmosdb_sql_container_throughput_update_command_builder(commandPath, resultDataTypeName, accountName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_container_throughput_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_container_throughput_update_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Container name. */
    az_cosmosdb_sql_container_throughput_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_container_throughput_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    az_cosmosdb_sql_container_throughput_update_command_builder.prototype.maxThroughput = function (value) {
        this.setFlag("--max-throughput", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_container_throughput_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The throughput of SQL container (RU/s). */
    az_cosmosdb_sql_container_throughput_update_command_builder.prototype.throughput = function (value) {
        this.setFlag("--throughput", value);
        return this;
    };
    return az_cosmosdb_sql_container_throughput_update_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_container_create_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_container_create_command_builder, _super);
    function az_cosmosdb_sql_container_create_command_builder(commandPath, resultDataTypeName, accountName, databaseName, name, partitionKeyPath, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.partitionKeyPath(partitionKeyPath);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_container_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_container_create_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Container name. */
    az_cosmosdb_sql_container_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Partition Key Path, e.g., '/address/zipcode'. */
    az_cosmosdb_sql_container_create_command_builder.prototype.partitionKeyPath = function (value) {
        this.setFlag("--partition-key-path", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_container_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Conflict Resolution Policy, you can enter it as a string or as a file, e.g., --conflict-resolution-policy @policy-file.json or --conflict-resolution-policy "{"mode": "lastWriterWins", "conflictResolutionPath": "/path"}". */
    az_cosmosdb_sql_container_create_command_builder.prototype.conflictResolutionPolicy = function (value) {
        this.setFlag("--conflict-resolution-policy", value);
        return this;
    };
    /** Indexing Policy, you can enter it as a string or as a file, e.g., --idx @policy-file.json or --idx "{"indexingMode": "consistent", "automatic": true, "includedPaths": [{"path": "/\*"}], "excludedPaths": [{ "path": "/headquarters/employees/?"}, { "path": "/\"_etag\"/?"}]}". */
    az_cosmosdb_sql_container_create_command_builder.prototype.idx = function (value) {
        this.setFlag("--idx", value);
        return this;
    };
    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    az_cosmosdb_sql_container_create_command_builder.prototype.maxThroughput = function (value) {
        this.setFlag("--max-throughput", value);
        return this;
    };
    /** The version of partition key. */
    az_cosmosdb_sql_container_create_command_builder.prototype.partitionKeyVersion = function (value) {
        this.setFlag("--partition-key-version", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_container_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The throughput of SQL container (RU/s). Default value is 400. Omit this parameter if the database has shared throughput unless the container should have dedicated throughput. */
    az_cosmosdb_sql_container_create_command_builder.prototype.throughput = function (value) {
        this.setFlag("--throughput", value);
        return this;
    };
    /** Default TTL. If the value is missing or set to "-1", items don’t expire. If the value is set to "n", items will expire "n" seconds after last modified time. */
    az_cosmosdb_sql_container_create_command_builder.prototype.ttl = function (value) {
        this.setFlag("--ttl", value);
        return this;
    };
    /** Unique Key Policy, you can enter it as a string or as a file, e.g., --unique-key-policy @policy-file.json or --unique-key-policy "{"uniqueKeys": [{"paths": ["/path/to/key1"]}, {"paths": ["/path/to/key2"]}]}". */
    az_cosmosdb_sql_container_create_command_builder.prototype.uniqueKeyPolicy = function (value) {
        this.setFlag("--unique-key-policy", value);
        return this;
    };
    return az_cosmosdb_sql_container_create_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_container_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_container_delete_command_builder, _super);
    function az_cosmosdb_sql_container_delete_command_builder(commandPath, resultDataTypeName, accountName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_container_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_container_delete_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Container name. */
    az_cosmosdb_sql_container_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_container_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_container_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_cosmosdb_sql_container_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_cosmosdb_sql_container_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_container_exists_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_container_exists_command_builder, _super);
    function az_cosmosdb_sql_container_exists_command_builder(commandPath, resultDataTypeName, accountName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_container_exists_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_container_exists_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Container name. */
    az_cosmosdb_sql_container_exists_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_container_exists_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_container_exists_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_sql_container_exists_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_container_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_container_list_command_builder, _super);
    function az_cosmosdb_sql_container_list_command_builder(commandPath, resultDataTypeName, accountName, databaseName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_container_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_container_list_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_container_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_sql_container_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_container_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_sql_container_list_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_container_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_container_show_command_builder, _super);
    function az_cosmosdb_sql_container_show_command_builder(commandPath, resultDataTypeName, accountName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_container_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_container_show_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Container name. */
    az_cosmosdb_sql_container_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_container_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_sql_container_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_container_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_sql_container_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_container_update_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_container_update_command_builder, _super);
    function az_cosmosdb_sql_container_update_command_builder(commandPath, resultDataTypeName, accountName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_container_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_container_update_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Container name. */
    az_cosmosdb_sql_container_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_container_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Indexing Policy, you can enter it as a string or as a file, e.g., --idx @policy-file.json or --idx "{"indexingMode": "consistent", "automatic": true, "includedPaths": [{"path": "/\*"}], "excludedPaths": [{ "path": "/headquarters/employees/?"}, { "path": "/\"_etag\"/?"}]}". */
    az_cosmosdb_sql_container_update_command_builder.prototype.idx = function (value) {
        this.setFlag("--idx", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_container_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Default TTL. If the value is missing or set to "-1", items don’t expire. If the value is set to "n", items will expire "n" seconds after last modified time. */
    az_cosmosdb_sql_container_update_command_builder.prototype.ttl = function (value) {
        this.setFlag("--ttl", value);
        return this;
    };
    return az_cosmosdb_sql_container_update_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_database_throughput_migrate_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_database_throughput_migrate_command_builder, _super);
    function az_cosmosdb_sql_database_throughput_migrate_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup, throughputType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.throughputType(throughputType);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_database_throughput_migrate_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_database_throughput_migrate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_database_throughput_migrate_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The type of throughput to migrate to. */
    az_cosmosdb_sql_database_throughput_migrate_command_builder.prototype.throughputType = function (value) {
        this.setFlag("--throughput-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_database_throughput_migrate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_sql_database_throughput_migrate_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_database_throughput_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_database_throughput_show_command_builder, _super);
    function az_cosmosdb_sql_database_throughput_show_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_database_throughput_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_database_throughput_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_database_throughput_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_sql_database_throughput_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_database_throughput_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_sql_database_throughput_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_database_throughput_update_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_database_throughput_update_command_builder, _super);
    function az_cosmosdb_sql_database_throughput_update_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_database_throughput_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_database_throughput_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_database_throughput_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    az_cosmosdb_sql_database_throughput_update_command_builder.prototype.maxThroughput = function (value) {
        this.setFlag("--max-throughput", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_database_throughput_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The throughput of SQL database (RU/s). */
    az_cosmosdb_sql_database_throughput_update_command_builder.prototype.throughput = function (value) {
        this.setFlag("--throughput", value);
        return this;
    };
    return az_cosmosdb_sql_database_throughput_update_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_database_create_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_database_create_command_builder, _super);
    function az_cosmosdb_sql_database_create_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_database_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_database_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_database_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    az_cosmosdb_sql_database_create_command_builder.prototype.maxThroughput = function (value) {
        this.setFlag("--max-throughput", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_database_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The throughput of SQL database (RU/s). Default value is 400. */
    az_cosmosdb_sql_database_create_command_builder.prototype.throughput = function (value) {
        this.setFlag("--throughput", value);
        return this;
    };
    return az_cosmosdb_sql_database_create_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_database_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_database_delete_command_builder, _super);
    function az_cosmosdb_sql_database_delete_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_database_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_database_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_database_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_database_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_cosmosdb_sql_database_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_cosmosdb_sql_database_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_database_exists_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_database_exists_command_builder, _super);
    function az_cosmosdb_sql_database_exists_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_database_exists_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_database_exists_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_database_exists_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_database_exists_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_sql_database_exists_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_database_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_database_list_command_builder, _super);
    function az_cosmosdb_sql_database_list_command_builder(commandPath, resultDataTypeName, accountName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_database_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_database_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_sql_database_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_database_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_sql_database_list_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_database_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_database_show_command_builder, _super);
    function az_cosmosdb_sql_database_show_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_database_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_database_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_database_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_sql_database_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_database_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_sql_database_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_stored_procedure_create_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_stored_procedure_create_command_builder, _super);
    function az_cosmosdb_sql_stored_procedure_create_command_builder(commandPath, resultDataTypeName, accountName, body, containerName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.body(body);
        _this.containerName(containerName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_stored_procedure_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** StoredProcedure body, you can enter it as a string or as a file, e.g., --body @sprocbody-file.json. */
    az_cosmosdb_sql_stored_procedure_create_command_builder.prototype.body = function (value) {
        this.setFlag("--body", value);
        return this;
    };
    /** Container name. */
    az_cosmosdb_sql_stored_procedure_create_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_stored_procedure_create_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** StoredProcedure name. */
    az_cosmosdb_sql_stored_procedure_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_stored_procedure_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_stored_procedure_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_sql_stored_procedure_create_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_stored_procedure_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_stored_procedure_delete_command_builder, _super);
    function az_cosmosdb_sql_stored_procedure_delete_command_builder(commandPath, resultDataTypeName, accountName, containerName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.containerName(containerName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_stored_procedure_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Container name. */
    az_cosmosdb_sql_stored_procedure_delete_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_stored_procedure_delete_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** StoredProcedure name. */
    az_cosmosdb_sql_stored_procedure_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_stored_procedure_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_stored_procedure_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_cosmosdb_sql_stored_procedure_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_cosmosdb_sql_stored_procedure_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_stored_procedure_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_stored_procedure_list_command_builder, _super);
    function az_cosmosdb_sql_stored_procedure_list_command_builder(commandPath, resultDataTypeName, accountName, containerName, databaseName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.containerName(containerName);
        _this.databaseName(databaseName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_stored_procedure_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Container name. */
    az_cosmosdb_sql_stored_procedure_list_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_stored_procedure_list_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_stored_procedure_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_sql_stored_procedure_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_stored_procedure_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_sql_stored_procedure_list_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_stored_procedure_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_stored_procedure_show_command_builder, _super);
    function az_cosmosdb_sql_stored_procedure_show_command_builder(commandPath, resultDataTypeName, accountName, containerName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.containerName(containerName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_stored_procedure_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Container name. */
    az_cosmosdb_sql_stored_procedure_show_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_stored_procedure_show_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** StoredProcedure name. */
    az_cosmosdb_sql_stored_procedure_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_stored_procedure_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_sql_stored_procedure_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_stored_procedure_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_sql_stored_procedure_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_stored_procedure_update_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_stored_procedure_update_command_builder, _super);
    function az_cosmosdb_sql_stored_procedure_update_command_builder(commandPath, resultDataTypeName, accountName, body, containerName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.body(body);
        _this.containerName(containerName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_stored_procedure_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** StoredProcedure body, you can enter it as a string or as a file, e.g., --body @sprocbody-file.json. */
    az_cosmosdb_sql_stored_procedure_update_command_builder.prototype.body = function (value) {
        this.setFlag("--body", value);
        return this;
    };
    /** Container name. */
    az_cosmosdb_sql_stored_procedure_update_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_stored_procedure_update_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** StoredProcedure name. */
    az_cosmosdb_sql_stored_procedure_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_stored_procedure_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_stored_procedure_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_sql_stored_procedure_update_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_trigger_create_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_trigger_create_command_builder, _super);
    function az_cosmosdb_sql_trigger_create_command_builder(commandPath, resultDataTypeName, accountName, body, containerName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.body(body);
        _this.containerName(containerName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_trigger_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Trigger body, you can enter it as a string or as a file, e.g., --body @triggerbody-file.json. */
    az_cosmosdb_sql_trigger_create_command_builder.prototype.body = function (value) {
        this.setFlag("--body", value);
        return this;
    };
    /** Container name. */
    az_cosmosdb_sql_trigger_create_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_trigger_create_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Trigger name. */
    az_cosmosdb_sql_trigger_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_trigger_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The operation of the trigger. */
    az_cosmosdb_sql_trigger_create_command_builder.prototype.operation = function (value) {
        this.setFlag("--operation", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_trigger_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Trigger type. */
    az_cosmosdb_sql_trigger_create_command_builder.prototype.type = function (value) {
        this.setFlag("--type", value);
        return this;
    };
    return az_cosmosdb_sql_trigger_create_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_trigger_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_trigger_delete_command_builder, _super);
    function az_cosmosdb_sql_trigger_delete_command_builder(commandPath, resultDataTypeName, accountName, containerName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.containerName(containerName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_trigger_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Container name. */
    az_cosmosdb_sql_trigger_delete_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_trigger_delete_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Trigger name. */
    az_cosmosdb_sql_trigger_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_trigger_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_trigger_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_cosmosdb_sql_trigger_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_cosmosdb_sql_trigger_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_trigger_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_trigger_list_command_builder, _super);
    function az_cosmosdb_sql_trigger_list_command_builder(commandPath, resultDataTypeName, accountName, containerName, databaseName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.containerName(containerName);
        _this.databaseName(databaseName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_trigger_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Container name. */
    az_cosmosdb_sql_trigger_list_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_trigger_list_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_trigger_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_sql_trigger_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_trigger_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_sql_trigger_list_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_trigger_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_trigger_show_command_builder, _super);
    function az_cosmosdb_sql_trigger_show_command_builder(commandPath, resultDataTypeName, accountName, containerName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.containerName(containerName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_trigger_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Container name. */
    az_cosmosdb_sql_trigger_show_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_trigger_show_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Trigger name. */
    az_cosmosdb_sql_trigger_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_trigger_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_sql_trigger_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_trigger_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_sql_trigger_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_trigger_update_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_trigger_update_command_builder, _super);
    function az_cosmosdb_sql_trigger_update_command_builder(commandPath, resultDataTypeName, accountName, containerName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.containerName(containerName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_trigger_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Container name. */
    az_cosmosdb_sql_trigger_update_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_trigger_update_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Trigger name. */
    az_cosmosdb_sql_trigger_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_trigger_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Trigger body, you can enter it as a string or as a file, e.g., --body @triggerbody-file.json. */
    az_cosmosdb_sql_trigger_update_command_builder.prototype.body = function (value) {
        this.setFlag("--body", value);
        return this;
    };
    /** The operation of the trigger. */
    az_cosmosdb_sql_trigger_update_command_builder.prototype.operation = function (value) {
        this.setFlag("--operation", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_trigger_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Trigger type. */
    az_cosmosdb_sql_trigger_update_command_builder.prototype.type = function (value) {
        this.setFlag("--type", value);
        return this;
    };
    return az_cosmosdb_sql_trigger_update_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_user_defined_function_create_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_user_defined_function_create_command_builder, _super);
    function az_cosmosdb_sql_user_defined_function_create_command_builder(commandPath, resultDataTypeName, accountName, body, containerName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.body(body);
        _this.containerName(containerName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_user_defined_function_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** UserDefinedFunction body, you can enter it as a string or as a file, e.g., --body @udfbody-file.json. */
    az_cosmosdb_sql_user_defined_function_create_command_builder.prototype.body = function (value) {
        this.setFlag("--body", value);
        return this;
    };
    /** Container name. */
    az_cosmosdb_sql_user_defined_function_create_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_user_defined_function_create_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** UserDefinedFunction name. */
    az_cosmosdb_sql_user_defined_function_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_user_defined_function_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_user_defined_function_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_sql_user_defined_function_create_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_user_defined_function_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_user_defined_function_delete_command_builder, _super);
    function az_cosmosdb_sql_user_defined_function_delete_command_builder(commandPath, resultDataTypeName, accountName, containerName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.containerName(containerName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_user_defined_function_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Container name. */
    az_cosmosdb_sql_user_defined_function_delete_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_user_defined_function_delete_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** UserDefinedFunction name. */
    az_cosmosdb_sql_user_defined_function_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_user_defined_function_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_user_defined_function_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_cosmosdb_sql_user_defined_function_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_cosmosdb_sql_user_defined_function_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_user_defined_function_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_user_defined_function_list_command_builder, _super);
    function az_cosmosdb_sql_user_defined_function_list_command_builder(commandPath, resultDataTypeName, accountName, containerName, databaseName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.containerName(containerName);
        _this.databaseName(databaseName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_user_defined_function_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Container name. */
    az_cosmosdb_sql_user_defined_function_list_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_user_defined_function_list_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_user_defined_function_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_sql_user_defined_function_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_user_defined_function_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_sql_user_defined_function_list_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_user_defined_function_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_user_defined_function_show_command_builder, _super);
    function az_cosmosdb_sql_user_defined_function_show_command_builder(commandPath, resultDataTypeName, accountName, containerName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.containerName(containerName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_user_defined_function_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Container name. */
    az_cosmosdb_sql_user_defined_function_show_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_user_defined_function_show_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** UserDefinedFunction name. */
    az_cosmosdb_sql_user_defined_function_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_user_defined_function_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_sql_user_defined_function_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_user_defined_function_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_sql_user_defined_function_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_sql_user_defined_function_update_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_sql_user_defined_function_update_command_builder, _super);
    function az_cosmosdb_sql_user_defined_function_update_command_builder(commandPath, resultDataTypeName, accountName, body, containerName, databaseName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.body(body);
        _this.containerName(containerName);
        _this.databaseName(databaseName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_sql_user_defined_function_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** UserDefinedFunction body, you can enter it as a string or as a file, e.g., --body @udfbody-file.json. */
    az_cosmosdb_sql_user_defined_function_update_command_builder.prototype.body = function (value) {
        this.setFlag("--body", value);
        return this;
    };
    /** Container name. */
    az_cosmosdb_sql_user_defined_function_update_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Database name. */
    az_cosmosdb_sql_user_defined_function_update_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** UserDefinedFunction name. */
    az_cosmosdb_sql_user_defined_function_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_sql_user_defined_function_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_sql_user_defined_function_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_sql_user_defined_function_update_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_table_throughput_migrate_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_table_throughput_migrate_command_builder, _super);
    function az_cosmosdb_table_throughput_migrate_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup, throughputType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.throughputType(throughputType);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_table_throughput_migrate_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Table name. */
    az_cosmosdb_table_throughput_migrate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_table_throughput_migrate_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The type of throughput to migrate to. */
    az_cosmosdb_table_throughput_migrate_command_builder.prototype.throughputType = function (value) {
        this.setFlag("--throughput-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_table_throughput_migrate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_table_throughput_migrate_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_table_throughput_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_table_throughput_show_command_builder, _super);
    function az_cosmosdb_table_throughput_show_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_table_throughput_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Table name. */
    az_cosmosdb_table_throughput_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_table_throughput_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_table_throughput_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_table_throughput_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_table_throughput_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_table_throughput_update_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_table_throughput_update_command_builder, _super);
    function az_cosmosdb_table_throughput_update_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_table_throughput_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Table name. */
    az_cosmosdb_table_throughput_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_table_throughput_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    az_cosmosdb_table_throughput_update_command_builder.prototype.maxThroughput = function (value) {
        this.setFlag("--max-throughput", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_table_throughput_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The throughput of Table (RU/s). */
    az_cosmosdb_table_throughput_update_command_builder.prototype.throughput = function (value) {
        this.setFlag("--throughput", value);
        return this;
    };
    return az_cosmosdb_table_throughput_update_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_table_create_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_table_create_command_builder, _super);
    function az_cosmosdb_table_create_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_table_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Table name. */
    az_cosmosdb_table_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_table_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s). */
    az_cosmosdb_table_create_command_builder.prototype.maxThroughput = function (value) {
        this.setFlag("--max-throughput", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_table_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The throughput of Table (RU/s). Default value is 400. */
    az_cosmosdb_table_create_command_builder.prototype.throughput = function (value) {
        this.setFlag("--throughput", value);
        return this;
    };
    return az_cosmosdb_table_create_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_table_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_table_delete_command_builder, _super);
    function az_cosmosdb_table_delete_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_table_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Table name. */
    az_cosmosdb_table_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_table_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_table_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_cosmosdb_table_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_cosmosdb_table_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_table_exists_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_table_exists_command_builder, _super);
    function az_cosmosdb_table_exists_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_table_exists_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Table name. */
    az_cosmosdb_table_exists_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_table_exists_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_table_exists_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_table_exists_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_table_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_table_list_command_builder, _super);
    function az_cosmosdb_table_list_command_builder(commandPath, resultDataTypeName, accountName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_table_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_table_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_table_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_table_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_table_list_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_table_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_table_show_command_builder, _super);
    function az_cosmosdb_table_show_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cosmosdb account name. */
    az_cosmosdb_table_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Table name. */
    az_cosmosdb_table_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_table_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_table_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_table_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_table_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_check_name_exists_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_check_name_exists_command_builder, _super);
    function az_cosmosdb_check_name_exists_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cosmosdb_check_name_exists_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Cosmos DB database account. */
    az_cosmosdb_check_name_exists_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_check_name_exists_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_check_name_exists_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_create_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_create_command_builder, _super);
    function az_cosmosdb_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Cosmos DB database account. */
    az_cosmosdb_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Set custom capabilities on the Cosmos DB database account. */
    az_cosmosdb_create_command_builder.prototype.capabilities = function (value) {
        this.setFlag("--capabilities", value);
        return this;
    };
    /** Default consistency level of the Cosmos DB database account. */
    az_cosmosdb_create_command_builder.prototype.defaultConsistencyLevel = function (value) {
        this.setFlag("--default-consistency-level", value);
        return this;
    };
    /** Disable write operations on metadata resources (databases, containers, throughput) via account keys. */
    az_cosmosdb_create_command_builder.prototype.disableKeyBasedMetadataWriteAccess = function (value) {
        this.setFlag("--disable-key-based-metadata-write-access", value.toString());
        return this;
    };
    /** Flag to enable log storage on the account. */
    az_cosmosdb_create_command_builder.prototype.enableAnalyticalStorage = function (value) {
        this.setFlag("--enable-analytical-storage", value.toString());
        return this;
    };
    /** Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account. */
    az_cosmosdb_create_command_builder.prototype.enableAutomaticFailover = function (value) {
        this.setFlag("--enable-automatic-failover", value.toString());
        return this;
    };
    /** If enabled the account is free-tier. */
    az_cosmosdb_create_command_builder.prototype.enableFreeTier = function (value) {
        this.setFlag("--enable-free-tier", value.toString());
        return this;
    };
    /** Enable Multiple Write Locations. */
    az_cosmosdb_create_command_builder.prototype.enableMultipleWriteLocations = function (value) {
        this.setFlag("--enable-multiple-write-locations", value.toString());
        return this;
    };
    /** Enable or disable public network access to server. */
    az_cosmosdb_create_command_builder.prototype.enablePublicNetwork = function (value) {
        this.setFlag("--enable-public-network", value.toString());
        return this;
    };
    /** Enables virtual network on the Cosmos DB database account. */
    az_cosmosdb_create_command_builder.prototype.enableVirtualNetwork = function (value) {
        this.setFlag("--enable-virtual-network", value.toString());
        return this;
    };
    /** Firewall support. Specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. IP addresses/ranges must be comma-separated and must not contain any spaces. */
    az_cosmosdb_create_command_builder.prototype.ipRangeFilter = function (value) {
        this.setFlag("--ip-range-filter", value);
        return this;
    };
    /** The URI of the key vault. */
    az_cosmosdb_create_command_builder.prototype.keyUri = function (value) {
        this.setFlag("--key-uri", value);
        return this;
    };
    /** The type of Cosmos DB database account to create. */
    az_cosmosdb_create_command_builder.prototype.kind = function (value) {
        this.setFlag("--kind", value);
        return this;
    };
    /** Add a location to the Cosmos DB database account. */
    az_cosmosdb_create_command_builder.prototype.locations = function (value) {
        this.setFlag("--locations", value);
        return this;
    };
    /** When used with Bounded Staleness consistency, this value represents the time amount of staleness (in seconds) tolerated. Accepted range for this value is 1 - 100. */
    az_cosmosdb_create_command_builder.prototype.maxInterval = function (value) {
        this.setFlag("--max-interval", value);
        return this;
    };
    /** When used with Bounded Staleness consistency, this value represents the number of stale requests tolerated. Accepted range for this value is 1 - 2,147,483,647. */
    az_cosmosdb_create_command_builder.prototype.maxStalenessPrefix = function (value) {
        this.setFlag("--max-staleness-prefix", value);
        return this;
    };
    /** Valid only for MongoDB accounts. */
    az_cosmosdb_create_command_builder.prototype.serverVersion = function (value) {
        this.setFlag("--server-version", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_cosmosdb_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** ACL's for virtual network. */
    az_cosmosdb_create_command_builder.prototype.virtualNetworkRules = function (value) {
        this.setFlag("--virtual-network-rules", value);
        return this;
    };
    return az_cosmosdb_create_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_delete_command_builder, _super);
    function az_cosmosdb_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cosmosdb_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Cosmos DB database account. */
    az_cosmosdb_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_cosmosdb_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_cosmosdb_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_failover_priority_change_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_failover_priority_change_command_builder, _super);
    function az_cosmosdb_failover_priority_change_command_builder(commandPath, resultDataTypeName, failoverPolicies) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.failoverPolicies(failoverPolicies);
        return _this;
    }
    /** Space-separated failover policies in 'regionName=failoverPriority' format. E.g eastus=0 westus=1. */
    az_cosmosdb_failover_priority_change_command_builder.prototype.failoverPolicies = function (value) {
        this.setFlag("--failover-policies", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cosmosdb_failover_priority_change_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Cosmos DB database account. */
    az_cosmosdb_failover_priority_change_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_failover_priority_change_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_failover_priority_change_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_failover_priority_change_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_list_command_builder, _super);
    function az_cosmosdb_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_list_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_list_connection_strings_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_list_connection_strings_command_builder, _super);
    function az_cosmosdb_list_connection_strings_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cosmosdb_list_connection_strings_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Cosmos DB database account. */
    az_cosmosdb_list_connection_strings_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_list_connection_strings_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_list_connection_strings_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_list_connection_strings_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_list_keys_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_list_keys_command_builder, _super);
    function az_cosmosdb_list_keys_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cosmosdb_list_keys_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Cosmos DB database account. */
    az_cosmosdb_list_keys_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_list_keys_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_list_keys_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_list_keys_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_list_read_only_keys_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_list_read_only_keys_command_builder, _super);
    function az_cosmosdb_list_read_only_keys_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cosmosdb_list_read_only_keys_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Cosmos DB database account. */
    az_cosmosdb_list_read_only_keys_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_list_read_only_keys_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_list_read_only_keys_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_list_read_only_keys_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_regenerate_key_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_regenerate_key_command_builder, _super);
    function az_cosmosdb_regenerate_key_command_builder(commandPath, resultDataTypeName, keyKind) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.keyKind(keyKind);
        return _this;
    }
    /** The access key to regenerate. */
    az_cosmosdb_regenerate_key_command_builder.prototype.keyKind = function (value) {
        this.setFlag("--key-kind", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cosmosdb_regenerate_key_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Cosmos DB database account. */
    az_cosmosdb_regenerate_key_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_regenerate_key_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_regenerate_key_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_regenerate_key_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_show_command_builder, _super);
    function az_cosmosdb_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cosmosdb_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Cosmos DB database account. */
    az_cosmosdb_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cosmosdb_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cosmosdb_show_command_builder;
}(base_1.CommandBuilder));
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
var az_cosmosdb_update_command_builder = /** @class */ (function (_super) {
    __extends(az_cosmosdb_update_command_builder, _super);
    function az_cosmosdb_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Set custom capabilities on the Cosmos DB database account. */
    az_cosmosdb_update_command_builder.prototype.capabilities = function (value) {
        this.setFlag("--capabilities", value);
        return this;
    };
    /** Default consistency level of the Cosmos DB database account. */
    az_cosmosdb_update_command_builder.prototype.defaultConsistencyLevel = function (value) {
        this.setFlag("--default-consistency-level", value);
        return this;
    };
    /** Disable write operations on metadata resources (databases, containers, throughput) via account keys. */
    az_cosmosdb_update_command_builder.prototype.disableKeyBasedMetadataWriteAccess = function (value) {
        this.setFlag("--disable-key-based-metadata-write-access", value.toString());
        return this;
    };
    /** Flag to enable log storage on the account. */
    az_cosmosdb_update_command_builder.prototype.enableAnalyticalStorage = function (value) {
        this.setFlag("--enable-analytical-storage", value.toString());
        return this;
    };
    /** Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account. */
    az_cosmosdb_update_command_builder.prototype.enableAutomaticFailover = function (value) {
        this.setFlag("--enable-automatic-failover", value.toString());
        return this;
    };
    /** Enable Multiple Write Locations. */
    az_cosmosdb_update_command_builder.prototype.enableMultipleWriteLocations = function (value) {
        this.setFlag("--enable-multiple-write-locations", value.toString());
        return this;
    };
    /** Enable or disable public network access to server. */
    az_cosmosdb_update_command_builder.prototype.enablePublicNetwork = function (value) {
        this.setFlag("--enable-public-network", value.toString());
        return this;
    };
    /** Enables virtual network on the Cosmos DB database account. */
    az_cosmosdb_update_command_builder.prototype.enableVirtualNetwork = function (value) {
        this.setFlag("--enable-virtual-network", value.toString());
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cosmosdb_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Firewall support. Specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. IP addresses/ranges must be comma-separated and must not contain any spaces. */
    az_cosmosdb_update_command_builder.prototype.ipRangeFilter = function (value) {
        this.setFlag("--ip-range-filter", value);
        return this;
    };
    /** Add a location to the Cosmos DB database account. */
    az_cosmosdb_update_command_builder.prototype.locations = function (value) {
        this.setFlag("--locations", value);
        return this;
    };
    /** When used with Bounded Staleness consistency, this value represents the time amount of staleness (in seconds) tolerated. Accepted range for this value is 1 - 100. */
    az_cosmosdb_update_command_builder.prototype.maxInterval = function (value) {
        this.setFlag("--max-interval", value);
        return this;
    };
    /** When used with Bounded Staleness consistency, this value represents the number of stale requests tolerated. Accepted range for this value is 1 - 2,147,483,647. */
    az_cosmosdb_update_command_builder.prototype.maxStalenessPrefix = function (value) {
        this.setFlag("--max-staleness-prefix", value);
        return this;
    };
    /** Name of the Cosmos DB database account. */
    az_cosmosdb_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cosmosdb_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cosmosdb_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_cosmosdb_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** ACL's for virtual network. */
    az_cosmosdb_update_command_builder.prototype.virtualNetworkRules = function (value) {
        this.setFlag("--virtual-network-rules", value);
        return this;
    };
    return az_cosmosdb_update_command_builder;
}(base_1.CommandBuilder));
