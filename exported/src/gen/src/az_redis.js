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
/** Manage Redis firewall rules. */
var az_redis_firewall_rules = /** @class */ (function () {
    function az_redis_firewall_rules() {
    }
    /**
     * Create a redis cache firewall rule.
     *
     * Syntax:
     * ```
     * az redis firewall-rules create --end-ip
     *                                --name
     *                                --resource-group
     *                                --rule-name
     *                                --start-ip
     *                                [--subscription]
     * ```
     *
     * @param {string} endIp Highest IP address included in the range.
     * @param {string} name Name of the Redis cache.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} ruleName The name of the firewall rule.
     * @param {string} startIp Lowest IP address included in the range.
     */
    az_redis_firewall_rules.create = function (endIp, name, resourceGroup, ruleName, startIp) {
        return new az_redis_firewall_rules_create_command_builder("az redis firewall-rules create", 'az_redis_firewall_rules_create_command_result', endIp, name, resourceGroup, ruleName, startIp);
    };
    /**
     * Deletes a single firewall rule in a specified redis cache.
     *
     * Syntax:
     * ```
     * az redis firewall-rules delete --rule-name
     *                                [--ids]
     *                                [--name]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     *
     * @param {string} ruleName The name of the firewall rule.
     */
    az_redis_firewall_rules["delete"] = function (ruleName) {
        return new az_redis_firewall_rules_delete_command_builder("az redis firewall-rules delete", 'az_redis_firewall_rules_delete_command_result', ruleName);
    };
    /**
     * Gets all firewall rules in the specified redis cache.
     *
     * Syntax:
     * ```
     * az redis firewall-rules list --name
     *                              --resource-group
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} name Name of the Redis cache.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_redis_firewall_rules.list = function (name, resourceGroup) {
        return new az_redis_firewall_rules_list_command_builder("az redis firewall-rules list", 'az_redis_firewall_rules_list_command_result', name, resourceGroup);
    };
    /**
     * Gets a single firewall rule in a specified redis cache.
     *
     * Syntax:
     * ```
     * az redis firewall-rules show --rule-name
     *                              [--ids]
     *                              [--name]
     *                              [--query-examples]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     *
     * @param {string} ruleName The name of the firewall rule.
     */
    az_redis_firewall_rules.show = function (ruleName) {
        return new az_redis_firewall_rules_show_command_builder("az redis firewall-rules show", 'az_redis_firewall_rules_show_command_result', ruleName);
    };
    /**
     * Update a redis cache firewall rule.
     *
     * Syntax:
     * ```
     * az redis firewall-rules update --end-ip
     *                                --rule-name
     *                                --start-ip
     *                                [--ids]
     *                                [--name]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     *
     * @param {string} endIp Highest IP address included in the range.
     * @param {string} ruleName The name of the firewall rule.
     * @param {string} startIp Lowest IP address included in the range.
     */
    az_redis_firewall_rules.update = function (endIp, ruleName, startIp) {
        return new az_redis_firewall_rules_update_command_builder("az redis firewall-rules update", 'az_redis_firewall_rules_update_command_result', endIp, ruleName, startIp);
    };
    return az_redis_firewall_rules;
}());
exports.az_redis_firewall_rules = az_redis_firewall_rules;
/** Manage Redis patch schedules. */
var az_redis_patch_schedule = /** @class */ (function () {
    function az_redis_patch_schedule() {
    }
    /**
     * Create patching schedule for Redis cache.
     *
     * Syntax:
     * ```
     * az redis patch-schedule create --name
     *                                --resource-group
     *                                --schedule-entries
     *                                [--subscription]
     * ```
     *
     * @param {string} name Name of the Redis cache.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} scheduleEntries List of Patch schedule entries. Example Value:[{"dayOfWeek":"Monday","startHourUtc":"00","maintenanceWindow":"PT5H"}].
     */
    az_redis_patch_schedule.create = function (name, resourceGroup, scheduleEntries) {
        return new az_redis_patch_schedule_create_command_builder("az redis patch-schedule create", 'az_redis_patch_schedule_create_command_result', name, resourceGroup, scheduleEntries);
    };
    /**
     * Deletes the patching schedule of a redis cache (requires Premium SKU).
     *
     * Syntax:
     * ```
     * az redis patch-schedule delete --name
     *                                --resource-group
     *                                [--subscription]
     * ```
     *
     * @param {string} name Name of the Redis cache.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_redis_patch_schedule["delete"] = function (name, resourceGroup) {
        return new az_redis_patch_schedule_delete_command_builder("az redis patch-schedule delete", 'az_redis_patch_schedule_delete_command_result', name, resourceGroup);
    };
    /**
     * Gets the patching schedule of a redis cache (requires Premium SKU).
     *
     * Syntax:
     * ```
     * az redis patch-schedule show --name
     *                              --resource-group
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} name Name of the Redis cache.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_redis_patch_schedule.show = function (name, resourceGroup) {
        return new az_redis_patch_schedule_show_command_builder("az redis patch-schedule show", 'az_redis_patch_schedule_show_command_result', name, resourceGroup);
    };
    /**
     * Update the patching schedule for Redis cache.
     *
     * Syntax:
     * ```
     * az redis patch-schedule update --name
     *                                --resource-group
     *                                --schedule-entries
     *                                [--subscription]
     * ```
     *
     * @param {string} name Name of the Redis cache.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} scheduleEntries List of Patch schedule entries. Example Value:[{"dayOfWeek":"Monday","startHourUtc":"00","maintenanceWindow":"PT5H"}].
     */
    az_redis_patch_schedule.update = function (name, resourceGroup, scheduleEntries) {
        return new az_redis_patch_schedule_update_command_builder("az redis patch-schedule update", 'az_redis_patch_schedule_update_command_result', name, resourceGroup, scheduleEntries);
    };
    return az_redis_patch_schedule;
}());
exports.az_redis_patch_schedule = az_redis_patch_schedule;
/** Manage Redis server links. */
var az_redis_server_link = /** @class */ (function () {
    function az_redis_server_link() {
    }
    /**
     * Adds a server link to the Redis cache (requires Premium SKU).
     *
     * Syntax:
     * ```
     * az redis server-link create --name
     *                             --replication-role {Primary, Secondary}
     *                             --resource-group
     *                             --server-to-link
     *                             [--subscription]
     * ```
     *
     * @param {string} name Name of the Redis cache.
     * @param {'Primary' | 'Secondary'} replicationRole Role of the redis cache to be linked.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverToLink Resource ID or name of the redis cache to be linked.
     */
    az_redis_server_link.create = function (name, replicationRole, resourceGroup, serverToLink) {
        return new az_redis_server_link_create_command_builder("az redis server-link create", 'az_redis_server_link_create_command_result', name, replicationRole, resourceGroup, serverToLink);
    };
    /**
     * Deletes the linked server from a redis cache (requires Premium SKU).
     *
     * Syntax:
     * ```
     * az redis server-link delete --linked-server-name
     *                             --name
     *                             --resource-group
     *                             [--subscription]
     * ```
     *
     * @param {string} linkedServerName Name of the linked redis cache.
     * @param {string} name Name of the Redis cache.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_redis_server_link["delete"] = function (linkedServerName, name, resourceGroup) {
        return new az_redis_server_link_delete_command_builder("az redis server-link delete", 'az_redis_server_link_delete_command_result', linkedServerName, name, resourceGroup);
    };
    /**
     * Gets the list of linked servers associated with this redis cache (requires Premium SKU).
     *
     * Syntax:
     * ```
     * az redis server-link list --name
     *                           --resource-group
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} name Name of the Redis cache.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_redis_server_link.list = function (name, resourceGroup) {
        return new az_redis_server_link_list_command_builder("az redis server-link list", 'az_redis_server_link_list_command_result', name, resourceGroup);
    };
    /**
     * Gets the detailed information about a linked server of a redis cache (requires Premium SKU).
     *
     * Syntax:
     * ```
     * az redis server-link show --linked-server-name
     *                           --name
     *                           --resource-group
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} linkedServerName Name of the linked redis cache.
     * @param {string} name Name of the Redis cache.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_redis_server_link.show = function (linkedServerName, name, resourceGroup) {
        return new az_redis_server_link_show_command_builder("az redis server-link show", 'az_redis_server_link_show_command_result', linkedServerName, name, resourceGroup);
    };
    return az_redis_server_link;
}());
exports.az_redis_server_link = az_redis_server_link;
/** Manage dedicated Redis caches for your Azure applications. */
var az_redis = /** @class */ (function () {
    function az_redis() {
    }
    /**
     * Create new Redis Cache instance.
     *
     * Syntax:
     * ```
     * az redis create --location
     *                 --name
     *                 --resource-group
     *                 --sku {Basic, Premium, Standard}
     *                 --vm-size {c0, c1, c2, c3, c4, c5, c6, p1, p2, p3, p4, p5}
     *                 [--enable-non-ssl-port]
     *                 [--minimum-tls-version {1.0, 1.1, 1.2}]
     *                 [--redis-configuration]
     *                 [--replicas-per-master]
     *                 [--shard-count]
     *                 [--static-ip]
     *                 [--subnet-id]
     *                 [--subscription]
     *                 [--tags]
     *                 [--tenant-settings]
     *                 [--zones {1, 2, 3}]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name Name of the Redis cache.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'Basic' | 'Premium' | 'Standard'} sku Type of Redis cache.
     * @param {'c0' | 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6' | 'p1' | 'p2' | 'p3' | 'p4' | 'p5'} vmSize Size of Redis cache to deploy. Basic and Standard Cache sizes start with C. Premium Cache sizes start with P.
     */
    az_redis.create = function (location, name, resourceGroup, sku, vmSize) {
        return new az_redis_create_command_builder("az redis create", 'az_redis_create_command_result', location, name, resourceGroup, sku, vmSize);
    };
    /**
     * Deletes a Redis cache.
     *
     * Syntax:
     * ```
     * az redis delete [--ids]
     *                 [--name]
     *                 [--resource-group]
     *                 [--subscription]
     *                 [--yes]
     * ```
     */
    az_redis["delete"] = function () {
        return new az_redis_delete_command_builder("az redis delete", 'az_redis_delete_command_result');
    };
    /**
     * Export data stored in a Redis cache.
     *
     * Syntax:
     * ```
     * az redis export --container
     *                 --prefix
     *                 [--file-format]
     *                 [--ids]
     *                 [--name]
     *                 [--resource-group]
     *                 [--subscription]
     * ```
     *
     * @param {string} container SAS url for container where data needs to be exported to.
     * @param {string} prefix Prefix to use for exported files.
     */
    az_redis["export"] = function (container, prefix) {
        return new az_redis_export_command_builder("az redis export", 'az_redis_export_command_result', container, prefix);
    };
    /**
     * Reboot specified Redis node(s).
     *
     * Syntax:
     * ```
     * az redis force-reboot --reboot-type {AllNodes, PrimaryNode, SecondaryNode}
     *                       [--ids]
     *                       [--name]
     *                       [--resource-group]
     *                       [--shard-id]
     *                       [--subscription]
     * ```
     *
     * @param {'AllNodes' | 'PrimaryNode' | 'SecondaryNode'} rebootType Which Redis node(s) to reboot. Depending on this value data loss is possible.
     */
    az_redis.force_reboot = function (rebootType) {
        return new az_redis_force_reboot_command_builder("az redis force-reboot", 'az_redis_force_reboot_command_result', rebootType);
    };
    /**
     * Import data into a Redis cache.
     *
     * Syntax:
     * ```
     * az redis import --files
     *                 [--file-format]
     *                 [--ids]
     *                 [--name]
     *                 [--resource-group]
     *                 [--subscription]
     * ```
     *
     * @param {string} files SAS url for blobs that needs to be imported.
     */
    az_redis["import"] = function (files) {
        return new az_redis_import_command_builder("az redis import", 'az_redis_import_command_result', files);
    };
    /**
     * Import data into Redis cache.
     *
     * Syntax:
     * ```
     * az redis import-method --files
     *                        [--file-format]
     *                        [--ids]
     *                        [--name]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     *
     * @param {string} files SAS url for blobs that needs to be imported.
     */
    az_redis.import_method = function (files) {
        return new az_redis_import_method_command_builder("az redis import-method", 'az_redis_import_method_command_result', files);
    };
    /**
     * List Redis Caches.
     *
     * Syntax:
     * ```
     * az redis list [--query-examples]
     *               [--resource-group]
     *               [--subscription]
     * ```
     */
    az_redis.list = function () {
        return new az_redis_list_command_builder("az redis list", 'az_redis_list_command_result');
    };
    /**
     * Retrieve a Redis cache's access keys.
     *
     * Syntax:
     * ```
     * az redis list-keys [--ids]
     *                    [--name]
     *                    [--resource-group]
     *                    [--subscription]
     * ```
     */
    az_redis.list_keys = function () {
        return new az_redis_list_keys_command_builder("az redis list-keys", 'az_redis_list_keys_command_result');
    };
    /**
     * Regenerate Redis cache's access keys.
     *
     * Syntax:
     * ```
     * az redis regenerate-keys --key-type {Primary, Secondary}
     *                          [--ids]
     *                          [--name]
     *                          [--resource-group]
     *                          [--subscription]
     * ```
     *
     * @param {'Primary' | 'Secondary'} keyType The Redis access key to regenerate.
     */
    az_redis.regenerate_keys = function (keyType) {
        return new az_redis_regenerate_keys_command_builder("az redis regenerate-keys", 'az_redis_regenerate_keys_command_result', keyType);
    };
    /**
     * Gets a Redis cache (resource description).
     *
     * Syntax:
     * ```
     * az redis show [--ids]
     *               [--name]
     *               [--query-examples]
     *               [--resource-group]
     *               [--subscription]
     * ```
     */
    az_redis.show = function () {
        return new az_redis_show_command_builder("az redis show", 'az_redis_show_command_result');
    };
    /**
     * Update a Redis cache.
     *
     * Syntax:
     * ```
     * az redis update [--add]
     *                 [--force-string]
     *                 [--ids]
     *                 [--name]
     *                 [--remove]
     *                 [--resource-group]
     *                 [--set]
     *                 [--sku {Basic, Premium, Standard}]
     *                 [--subscription]
     *                 [--vm-size {c0, c1, c2, c3, c4, c5, c6, p1, p2, p3, p4, p5}]
     * ```
     */
    az_redis.update = function () {
        return new az_redis_update_command_builder("az redis update", 'az_redis_update_command_result');
    };
    return az_redis;
}());
exports.az_redis = az_redis;
/**
 * Create a redis cache firewall rule.
 *
 * Syntax:
 * ```
 * az redis firewall-rules create --end-ip
 *                                --name
 *                                --resource-group
 *                                --rule-name
 *                                --start-ip
 *                                [--subscription]
 * ```
 *
 * @param {string} endIp Highest IP address included in the range.
 * @param {string} name Name of the Redis cache.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} ruleName The name of the firewall rule.
 * @param {string} startIp Lowest IP address included in the range.
 */
var az_redis_firewall_rules_create_command_builder = /** @class */ (function (_super) {
    __extends(az_redis_firewall_rules_create_command_builder, _super);
    function az_redis_firewall_rules_create_command_builder(commandPath, resultDataTypeName, endIp, name, resourceGroup, ruleName, startIp) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.endIp(endIp);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.ruleName(ruleName);
        _this.startIp(startIp);
        return _this;
    }
    /** Highest IP address included in the range. */
    az_redis_firewall_rules_create_command_builder.prototype.endIp = function (value) {
        this.setFlag("--end-ip", value);
        return this;
    };
    /** Name of the Redis cache. */
    az_redis_firewall_rules_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_redis_firewall_rules_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the firewall rule. */
    az_redis_firewall_rules_create_command_builder.prototype.ruleName = function (value) {
        this.setFlag("--rule-name", value);
        return this;
    };
    /** Lowest IP address included in the range. */
    az_redis_firewall_rules_create_command_builder.prototype.startIp = function (value) {
        this.setFlag("--start-ip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_redis_firewall_rules_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_redis_firewall_rules_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes a single firewall rule in a specified redis cache.
 *
 * Syntax:
 * ```
 * az redis firewall-rules delete --rule-name
 *                                [--ids]
 *                                [--name]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 *
 * @param {string} ruleName The name of the firewall rule.
 */
var az_redis_firewall_rules_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_redis_firewall_rules_delete_command_builder, _super);
    function az_redis_firewall_rules_delete_command_builder(commandPath, resultDataTypeName, ruleName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.ruleName(ruleName);
        return _this;
    }
    /** The name of the firewall rule. */
    az_redis_firewall_rules_delete_command_builder.prototype.ruleName = function (value) {
        this.setFlag("--rule-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_redis_firewall_rules_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Redis cache. */
    az_redis_firewall_rules_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_redis_firewall_rules_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_redis_firewall_rules_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_redis_firewall_rules_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets all firewall rules in the specified redis cache.
 *
 * Syntax:
 * ```
 * az redis firewall-rules list --name
 *                              --resource-group
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} name Name of the Redis cache.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_redis_firewall_rules_list_command_builder = /** @class */ (function (_super) {
    __extends(az_redis_firewall_rules_list_command_builder, _super);
    function az_redis_firewall_rules_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Redis cache. */
    az_redis_firewall_rules_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_redis_firewall_rules_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_redis_firewall_rules_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_redis_firewall_rules_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_redis_firewall_rules_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a single firewall rule in a specified redis cache.
 *
 * Syntax:
 * ```
 * az redis firewall-rules show --rule-name
 *                              [--ids]
 *                              [--name]
 *                              [--query-examples]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 *
 * @param {string} ruleName The name of the firewall rule.
 */
var az_redis_firewall_rules_show_command_builder = /** @class */ (function (_super) {
    __extends(az_redis_firewall_rules_show_command_builder, _super);
    function az_redis_firewall_rules_show_command_builder(commandPath, resultDataTypeName, ruleName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.ruleName(ruleName);
        return _this;
    }
    /** The name of the firewall rule. */
    az_redis_firewall_rules_show_command_builder.prototype.ruleName = function (value) {
        this.setFlag("--rule-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_redis_firewall_rules_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Redis cache. */
    az_redis_firewall_rules_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_redis_firewall_rules_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_redis_firewall_rules_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_redis_firewall_rules_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_redis_firewall_rules_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a redis cache firewall rule.
 *
 * Syntax:
 * ```
 * az redis firewall-rules update --end-ip
 *                                --rule-name
 *                                --start-ip
 *                                [--ids]
 *                                [--name]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 *
 * @param {string} endIp Highest IP address included in the range.
 * @param {string} ruleName The name of the firewall rule.
 * @param {string} startIp Lowest IP address included in the range.
 */
var az_redis_firewall_rules_update_command_builder = /** @class */ (function (_super) {
    __extends(az_redis_firewall_rules_update_command_builder, _super);
    function az_redis_firewall_rules_update_command_builder(commandPath, resultDataTypeName, endIp, ruleName, startIp) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.endIp(endIp);
        _this.ruleName(ruleName);
        _this.startIp(startIp);
        return _this;
    }
    /** Highest IP address included in the range. */
    az_redis_firewall_rules_update_command_builder.prototype.endIp = function (value) {
        this.setFlag("--end-ip", value);
        return this;
    };
    /** The name of the firewall rule. */
    az_redis_firewall_rules_update_command_builder.prototype.ruleName = function (value) {
        this.setFlag("--rule-name", value);
        return this;
    };
    /** Lowest IP address included in the range. */
    az_redis_firewall_rules_update_command_builder.prototype.startIp = function (value) {
        this.setFlag("--start-ip", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_redis_firewall_rules_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Redis cache. */
    az_redis_firewall_rules_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_redis_firewall_rules_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_redis_firewall_rules_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_redis_firewall_rules_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create patching schedule for Redis cache.
 *
 * Syntax:
 * ```
 * az redis patch-schedule create --name
 *                                --resource-group
 *                                --schedule-entries
 *                                [--subscription]
 * ```
 *
 * @param {string} name Name of the Redis cache.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} scheduleEntries List of Patch schedule entries. Example Value:[{"dayOfWeek":"Monday","startHourUtc":"00","maintenanceWindow":"PT5H"}].
 */
var az_redis_patch_schedule_create_command_builder = /** @class */ (function (_super) {
    __extends(az_redis_patch_schedule_create_command_builder, _super);
    function az_redis_patch_schedule_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, scheduleEntries) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.scheduleEntries(scheduleEntries);
        return _this;
    }
    /** Name of the Redis cache. */
    az_redis_patch_schedule_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_redis_patch_schedule_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** List of Patch schedule entries. Example Value:[{"dayOfWeek":"Monday","startHourUtc":"00","maintenanceWindow":"PT5H"}]. */
    az_redis_patch_schedule_create_command_builder.prototype.scheduleEntries = function (value) {
        this.setFlag("--schedule-entries", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_redis_patch_schedule_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_redis_patch_schedule_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the patching schedule of a redis cache (requires Premium SKU).
 *
 * Syntax:
 * ```
 * az redis patch-schedule delete --name
 *                                --resource-group
 *                                [--subscription]
 * ```
 *
 * @param {string} name Name of the Redis cache.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_redis_patch_schedule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_redis_patch_schedule_delete_command_builder, _super);
    function az_redis_patch_schedule_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Redis cache. */
    az_redis_patch_schedule_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_redis_patch_schedule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_redis_patch_schedule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_redis_patch_schedule_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets the patching schedule of a redis cache (requires Premium SKU).
 *
 * Syntax:
 * ```
 * az redis patch-schedule show --name
 *                              --resource-group
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} name Name of the Redis cache.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_redis_patch_schedule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_redis_patch_schedule_show_command_builder, _super);
    function az_redis_patch_schedule_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Redis cache. */
    az_redis_patch_schedule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_redis_patch_schedule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_redis_patch_schedule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_redis_patch_schedule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_redis_patch_schedule_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the patching schedule for Redis cache.
 *
 * Syntax:
 * ```
 * az redis patch-schedule update --name
 *                                --resource-group
 *                                --schedule-entries
 *                                [--subscription]
 * ```
 *
 * @param {string} name Name of the Redis cache.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} scheduleEntries List of Patch schedule entries. Example Value:[{"dayOfWeek":"Monday","startHourUtc":"00","maintenanceWindow":"PT5H"}].
 */
var az_redis_patch_schedule_update_command_builder = /** @class */ (function (_super) {
    __extends(az_redis_patch_schedule_update_command_builder, _super);
    function az_redis_patch_schedule_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup, scheduleEntries) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.scheduleEntries(scheduleEntries);
        return _this;
    }
    /** Name of the Redis cache. */
    az_redis_patch_schedule_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_redis_patch_schedule_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** List of Patch schedule entries. Example Value:[{"dayOfWeek":"Monday","startHourUtc":"00","maintenanceWindow":"PT5H"}]. */
    az_redis_patch_schedule_update_command_builder.prototype.scheduleEntries = function (value) {
        this.setFlag("--schedule-entries", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_redis_patch_schedule_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_redis_patch_schedule_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Adds a server link to the Redis cache (requires Premium SKU).
 *
 * Syntax:
 * ```
 * az redis server-link create --name
 *                             --replication-role {Primary, Secondary}
 *                             --resource-group
 *                             --server-to-link
 *                             [--subscription]
 * ```
 *
 * @param {string} name Name of the Redis cache.
 * @param {'Primary' | 'Secondary'} replicationRole Role of the redis cache to be linked.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverToLink Resource ID or name of the redis cache to be linked.
 */
var az_redis_server_link_create_command_builder = /** @class */ (function (_super) {
    __extends(az_redis_server_link_create_command_builder, _super);
    function az_redis_server_link_create_command_builder(commandPath, resultDataTypeName, name, replicationRole, resourceGroup, serverToLink) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.replicationRole(replicationRole);
        _this.resourceGroup(resourceGroup);
        _this.serverToLink(serverToLink);
        return _this;
    }
    /** Name of the Redis cache. */
    az_redis_server_link_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Role of the redis cache to be linked. */
    az_redis_server_link_create_command_builder.prototype.replicationRole = function (value) {
        this.setFlag("--replication-role", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_redis_server_link_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Resource ID or name of the redis cache to be linked. */
    az_redis_server_link_create_command_builder.prototype.serverToLink = function (value) {
        this.setFlag("--server-to-link", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_redis_server_link_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_redis_server_link_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the linked server from a redis cache (requires Premium SKU).
 *
 * Syntax:
 * ```
 * az redis server-link delete --linked-server-name
 *                             --name
 *                             --resource-group
 *                             [--subscription]
 * ```
 *
 * @param {string} linkedServerName Name of the linked redis cache.
 * @param {string} name Name of the Redis cache.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_redis_server_link_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_redis_server_link_delete_command_builder, _super);
    function az_redis_server_link_delete_command_builder(commandPath, resultDataTypeName, linkedServerName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.linkedServerName(linkedServerName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the linked redis cache. */
    az_redis_server_link_delete_command_builder.prototype.linkedServerName = function (value) {
        this.setFlag("--linked-server-name", value);
        return this;
    };
    /** Name of the Redis cache. */
    az_redis_server_link_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_redis_server_link_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_redis_server_link_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_redis_server_link_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets the list of linked servers associated with this redis cache (requires Premium SKU).
 *
 * Syntax:
 * ```
 * az redis server-link list --name
 *                           --resource-group
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} name Name of the Redis cache.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_redis_server_link_list_command_builder = /** @class */ (function (_super) {
    __extends(az_redis_server_link_list_command_builder, _super);
    function az_redis_server_link_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Redis cache. */
    az_redis_server_link_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_redis_server_link_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_redis_server_link_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_redis_server_link_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_redis_server_link_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets the detailed information about a linked server of a redis cache (requires Premium SKU).
 *
 * Syntax:
 * ```
 * az redis server-link show --linked-server-name
 *                           --name
 *                           --resource-group
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} linkedServerName Name of the linked redis cache.
 * @param {string} name Name of the Redis cache.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_redis_server_link_show_command_builder = /** @class */ (function (_super) {
    __extends(az_redis_server_link_show_command_builder, _super);
    function az_redis_server_link_show_command_builder(commandPath, resultDataTypeName, linkedServerName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.linkedServerName(linkedServerName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the linked redis cache. */
    az_redis_server_link_show_command_builder.prototype.linkedServerName = function (value) {
        this.setFlag("--linked-server-name", value);
        return this;
    };
    /** Name of the Redis cache. */
    az_redis_server_link_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_redis_server_link_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_redis_server_link_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_redis_server_link_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_redis_server_link_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create new Redis Cache instance.
 *
 * Syntax:
 * ```
 * az redis create --location
 *                 --name
 *                 --resource-group
 *                 --sku {Basic, Premium, Standard}
 *                 --vm-size {c0, c1, c2, c3, c4, c5, c6, p1, p2, p3, p4, p5}
 *                 [--enable-non-ssl-port]
 *                 [--minimum-tls-version {1.0, 1.1, 1.2}]
 *                 [--redis-configuration]
 *                 [--replicas-per-master]
 *                 [--shard-count]
 *                 [--static-ip]
 *                 [--subnet-id]
 *                 [--subscription]
 *                 [--tags]
 *                 [--tenant-settings]
 *                 [--zones {1, 2, 3}]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name Name of the Redis cache.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'Basic' | 'Premium' | 'Standard'} sku Type of Redis cache.
 * @param {'c0' | 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6' | 'p1' | 'p2' | 'p3' | 'p4' | 'p5'} vmSize Size of Redis cache to deploy. Basic and Standard Cache sizes start with C. Premium Cache sizes start with P.
 */
var az_redis_create_command_builder = /** @class */ (function (_super) {
    __extends(az_redis_create_command_builder, _super);
    function az_redis_create_command_builder(commandPath, resultDataTypeName, location, name, resourceGroup, sku, vmSize) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.sku(sku);
        _this.vmSize(vmSize);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_redis_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the Redis cache. */
    az_redis_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_redis_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Type of Redis cache. */
    az_redis_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Size of Redis cache to deploy. Basic and Standard Cache sizes start with C. Premium Cache sizes start with P. */
    az_redis_create_command_builder.prototype.vmSize = function (value) {
        this.setFlag("--vm-size", value);
        return this;
    };
    /** If specified, then the non-ssl redis server port (6379) will be enabled. */
    az_redis_create_command_builder.prototype.enableNonSslPort = function (value) {
        this.setFlag("--enable-non-ssl-port", value);
        return this;
    };
    /** Specifies the TLS version required by clients to connect to cache. */
    az_redis_create_command_builder.prototype.minimumTlsVersion = function (value) {
        this.setFlag("--minimum-tls-version", value);
        return this;
    };
    /** JSON encoded configuration settings. Use @{file} to load from a file. */
    az_redis_create_command_builder.prototype.redisConfiguration = function (value) {
        this.setFlag("--redis-configuration", value);
        return this;
    };
    /** The number of replicas to be created per master. */
    az_redis_create_command_builder.prototype.replicasPerMaster = function (value) {
        this.setFlag("--replicas-per-master", value);
        return this;
    };
    /** The number of shards to be created on a Premium Cluster Cache. */
    az_redis_create_command_builder.prototype.shardCount = function (value) {
        this.setFlag("--shard-count", value);
        return this;
    };
    /** Specify a static ip if required for the VNET. If you do not specify a static IP then an IP address is chosen automatically. */
    az_redis_create_command_builder.prototype.staticIp = function (value) {
        this.setFlag("--static-ip", value);
        return this;
    };
    /** The full resource ID of a subnet in a virtual network to deploy the redis cache in. Example format /subscriptions/{subid}/resourceGroups/{resourceGroupName}/providers/Microsoft.{Network|ClassicNetwork}/virtualNetworks/vnet1/subnets/subnet1. */
    az_redis_create_command_builder.prototype.subnetId = function (value) {
        this.setFlag("--subnet-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_redis_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_redis_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Space-separated tenant settings in key[=value] format. */
    az_redis_create_command_builder.prototype.tenantSettings = function (value) {
        this.setFlag("--tenant-settings", value);
        return this;
    };
    /** Space-separated list of availability zones into which to provision the resource. */
    az_redis_create_command_builder.prototype.zones = function (value) {
        this.setFlag("--zones", value);
        return this;
    };
    return az_redis_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes a Redis cache.
 *
 * Syntax:
 * ```
 * az redis delete [--ids]
 *                 [--name]
 *                 [--resource-group]
 *                 [--subscription]
 *                 [--yes]
 * ```
 */
var az_redis_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_redis_delete_command_builder, _super);
    function az_redis_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_redis_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Redis cache. */
    az_redis_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_redis_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_redis_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_redis_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_redis_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Export data stored in a Redis cache.
 *
 * Syntax:
 * ```
 * az redis export --container
 *                 --prefix
 *                 [--file-format]
 *                 [--ids]
 *                 [--name]
 *                 [--resource-group]
 *                 [--subscription]
 * ```
 *
 * @param {string} container SAS url for container where data needs to be exported to.
 * @param {string} prefix Prefix to use for exported files.
 */
var az_redis_export_command_builder = /** @class */ (function (_super) {
    __extends(az_redis_export_command_builder, _super);
    function az_redis_export_command_builder(commandPath, resultDataTypeName, container, prefix) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.container(container);
        _this.prefix(prefix);
        return _this;
    }
    /** SAS url for container where data needs to be exported to. */
    az_redis_export_command_builder.prototype.container = function (value) {
        this.setFlag("--container", value);
        return this;
    };
    /** Prefix to use for exported files. */
    az_redis_export_command_builder.prototype.prefix = function (value) {
        this.setFlag("--prefix", value);
        return this;
    };
    /** Format of the blob (Currently rdb is the only supported format, with other formats expected in the future). */
    az_redis_export_command_builder.prototype.fileFormat = function (value) {
        this.setFlag("--file-format", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_redis_export_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Redis cache. */
    az_redis_export_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_redis_export_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_redis_export_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_redis_export_command_builder;
}(base_1.CommandBuilder));
/**
 * Reboot specified Redis node(s).
 *
 * Syntax:
 * ```
 * az redis force-reboot --reboot-type {AllNodes, PrimaryNode, SecondaryNode}
 *                       [--ids]
 *                       [--name]
 *                       [--resource-group]
 *                       [--shard-id]
 *                       [--subscription]
 * ```
 *
 * @param {'AllNodes' | 'PrimaryNode' | 'SecondaryNode'} rebootType Which Redis node(s) to reboot. Depending on this value data loss is possible.
 */
var az_redis_force_reboot_command_builder = /** @class */ (function (_super) {
    __extends(az_redis_force_reboot_command_builder, _super);
    function az_redis_force_reboot_command_builder(commandPath, resultDataTypeName, rebootType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.rebootType(rebootType);
        return _this;
    }
    /** Which Redis node(s) to reboot. Depending on this value data loss is possible. */
    az_redis_force_reboot_command_builder.prototype.rebootType = function (value) {
        this.setFlag("--reboot-type", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_redis_force_reboot_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Redis cache. */
    az_redis_force_reboot_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_redis_force_reboot_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** If clustering is enabled, the ID of the shard to be rebooted. */
    az_redis_force_reboot_command_builder.prototype.shardId = function (value) {
        this.setFlag("--shard-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_redis_force_reboot_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_redis_force_reboot_command_builder;
}(base_1.CommandBuilder));
/**
 * Import data into a Redis cache.
 *
 * Syntax:
 * ```
 * az redis import --files
 *                 [--file-format]
 *                 [--ids]
 *                 [--name]
 *                 [--resource-group]
 *                 [--subscription]
 * ```
 *
 * @param {string} files SAS url for blobs that needs to be imported.
 */
var az_redis_import_command_builder = /** @class */ (function (_super) {
    __extends(az_redis_import_command_builder, _super);
    function az_redis_import_command_builder(commandPath, resultDataTypeName, files) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.files(files);
        return _this;
    }
    /** SAS url for blobs that needs to be imported. */
    az_redis_import_command_builder.prototype.files = function (value) {
        this.setFlag("--files", value);
        return this;
    };
    /** Format of the blob (Currently rdb is the only supported format, with other formats expected in the future). */
    az_redis_import_command_builder.prototype.fileFormat = function (value) {
        this.setFlag("--file-format", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_redis_import_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Redis cache. */
    az_redis_import_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_redis_import_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_redis_import_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_redis_import_command_builder;
}(base_1.CommandBuilder));
/**
 * Import data into Redis cache.
 *
 * Syntax:
 * ```
 * az redis import-method --files
 *                        [--file-format]
 *                        [--ids]
 *                        [--name]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 *
 * @param {string} files SAS url for blobs that needs to be imported.
 */
var az_redis_import_method_command_builder = /** @class */ (function (_super) {
    __extends(az_redis_import_method_command_builder, _super);
    function az_redis_import_method_command_builder(commandPath, resultDataTypeName, files) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.files(files);
        return _this;
    }
    /** SAS url for blobs that needs to be imported. */
    az_redis_import_method_command_builder.prototype.files = function (value) {
        this.setFlag("--files", value);
        return this;
    };
    /** Format of the blob (Currently rdb is the only supported format, with other formats expected in the future). */
    az_redis_import_method_command_builder.prototype.fileFormat = function (value) {
        this.setFlag("--file-format", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_redis_import_method_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Redis cache. */
    az_redis_import_method_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_redis_import_method_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_redis_import_method_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_redis_import_method_command_builder;
}(base_1.CommandBuilder));
/**
 * List Redis Caches.
 *
 * Syntax:
 * ```
 * az redis list [--query-examples]
 *               [--resource-group]
 *               [--subscription]
 * ```
 */
var az_redis_list_command_builder = /** @class */ (function (_super) {
    __extends(az_redis_list_command_builder, _super);
    function az_redis_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_redis_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_redis_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_redis_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_redis_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieve a Redis cache's access keys.
 *
 * Syntax:
 * ```
 * az redis list-keys [--ids]
 *                    [--name]
 *                    [--resource-group]
 *                    [--subscription]
 * ```
 */
var az_redis_list_keys_command_builder = /** @class */ (function (_super) {
    __extends(az_redis_list_keys_command_builder, _super);
    function az_redis_list_keys_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_redis_list_keys_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Redis cache. */
    az_redis_list_keys_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_redis_list_keys_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_redis_list_keys_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_redis_list_keys_command_builder;
}(base_1.CommandBuilder));
/**
 * Regenerate Redis cache's access keys.
 *
 * Syntax:
 * ```
 * az redis regenerate-keys --key-type {Primary, Secondary}
 *                          [--ids]
 *                          [--name]
 *                          [--resource-group]
 *                          [--subscription]
 * ```
 *
 * @param {'Primary' | 'Secondary'} keyType The Redis access key to regenerate.
 */
var az_redis_regenerate_keys_command_builder = /** @class */ (function (_super) {
    __extends(az_redis_regenerate_keys_command_builder, _super);
    function az_redis_regenerate_keys_command_builder(commandPath, resultDataTypeName, keyType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.keyType(keyType);
        return _this;
    }
    /** The Redis access key to regenerate. */
    az_redis_regenerate_keys_command_builder.prototype.keyType = function (value) {
        this.setFlag("--key-type", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_redis_regenerate_keys_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Redis cache. */
    az_redis_regenerate_keys_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_redis_regenerate_keys_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_redis_regenerate_keys_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_redis_regenerate_keys_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a Redis cache (resource description).
 *
 * Syntax:
 * ```
 * az redis show [--ids]
 *               [--name]
 *               [--query-examples]
 *               [--resource-group]
 *               [--subscription]
 * ```
 */
var az_redis_show_command_builder = /** @class */ (function (_super) {
    __extends(az_redis_show_command_builder, _super);
    function az_redis_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_redis_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Redis cache. */
    az_redis_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_redis_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_redis_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_redis_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_redis_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a Redis cache.
 *
 * Syntax:
 * ```
 * az redis update [--add]
 *                 [--force-string]
 *                 [--ids]
 *                 [--name]
 *                 [--remove]
 *                 [--resource-group]
 *                 [--set]
 *                 [--sku {Basic, Premium, Standard}]
 *                 [--subscription]
 *                 [--vm-size {c0, c1, c2, c3, c4, c5, c6, p1, p2, p3, p4, p5}]
 * ```
 */
var az_redis_update_command_builder = /** @class */ (function (_super) {
    __extends(az_redis_update_command_builder, _super);
    function az_redis_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_redis_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_redis_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_redis_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Redis cache. */
    az_redis_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_redis_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_redis_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_redis_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Type of Redis cache. */
    az_redis_update_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_redis_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Size of Redis cache to deploy. Basic and Standard Cache sizes start with C. Premium Cache sizes start with P. */
    az_redis_update_command_builder.prototype.vmSize = function (value) {
        this.setFlag("--vm-size", value);
        return this;
    };
    return az_redis_update_command_builder;
}(base_1.CommandBuilder));
