import { CommandBuilder } from '../base';
import { az_redis_firewall_rules_create_command_result } from './models/az_redis_firewall_rules_create_command_result';
import { az_redis_firewall_rules_delete_command_result } from './models/az_redis_firewall_rules_delete_command_result';
import { az_redis_firewall_rules_list_command_result } from './models/az_redis_firewall_rules_list_command_result';
import { az_redis_firewall_rules_show_command_result } from './models/az_redis_firewall_rules_show_command_result';
import { az_redis_firewall_rules_update_command_result } from './models/az_redis_firewall_rules_update_command_result';
import { az_redis_patch_schedule_create_command_result } from './models/az_redis_patch_schedule_create_command_result';
import { az_redis_patch_schedule_delete_command_result } from './models/az_redis_patch_schedule_delete_command_result';
import { az_redis_patch_schedule_show_command_result } from './models/az_redis_patch_schedule_show_command_result';
import { az_redis_patch_schedule_update_command_result } from './models/az_redis_patch_schedule_update_command_result';
import { az_redis_server_link_create_command_result } from './models/az_redis_server_link_create_command_result';
import { az_redis_server_link_delete_command_result } from './models/az_redis_server_link_delete_command_result';
import { az_redis_server_link_list_command_result } from './models/az_redis_server_link_list_command_result';
import { az_redis_server_link_show_command_result } from './models/az_redis_server_link_show_command_result';
import { az_redis_create_command_result } from './models/az_redis_create_command_result';
import { az_redis_delete_command_result } from './models/az_redis_delete_command_result';
import { az_redis_export_command_result } from './models/az_redis_export_command_result';
import { az_redis_force_reboot_command_result } from './models/az_redis_force_reboot_command_result';
import { az_redis_import_command_result } from './models/az_redis_import_command_result';
import { az_redis_import_method_command_result } from './models/az_redis_import_method_command_result';
import { az_redis_list_command_result } from './models/az_redis_list_command_result';
import { az_redis_list_keys_command_result } from './models/az_redis_list_keys_command_result';
import { az_redis_regenerate_keys_command_result } from './models/az_redis_regenerate_keys_command_result';
import { az_redis_show_command_result } from './models/az_redis_show_command_result';
import { az_redis_update_command_result } from './models/az_redis_update_command_result';
/** Manage Redis firewall rules. */
export declare class az_redis_firewall_rules {
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
    static create(endIp: string, name: string, resourceGroup: string, ruleName: string, startIp: string): az_redis_firewall_rules_create_command_builder;
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
    static delete(ruleName: string): az_redis_firewall_rules_delete_command_builder;
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
    static list(name: string, resourceGroup: string): az_redis_firewall_rules_list_command_builder;
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
    static show(ruleName: string): az_redis_firewall_rules_show_command_builder;
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
    static update(endIp: string, ruleName: string, startIp: string): az_redis_firewall_rules_update_command_builder;
}
/** Manage Redis patch schedules. */
export declare class az_redis_patch_schedule {
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
    static create(name: string, resourceGroup: string, scheduleEntries: string): az_redis_patch_schedule_create_command_builder;
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
    static delete(name: string, resourceGroup: string): az_redis_patch_schedule_delete_command_builder;
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
    static show(name: string, resourceGroup: string): az_redis_patch_schedule_show_command_builder;
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
    static update(name: string, resourceGroup: string, scheduleEntries: string): az_redis_patch_schedule_update_command_builder;
}
/** Manage Redis server links. */
export declare class az_redis_server_link {
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
    static create(name: string, replicationRole: 'Primary' | 'Secondary', resourceGroup: string, serverToLink: string): az_redis_server_link_create_command_builder;
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
    static delete(linkedServerName: string, name: string, resourceGroup: string): az_redis_server_link_delete_command_builder;
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
    static list(name: string, resourceGroup: string): az_redis_server_link_list_command_builder;
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
    static show(linkedServerName: string, name: string, resourceGroup: string): az_redis_server_link_show_command_builder;
}
/** Manage dedicated Redis caches for your Azure applications. */
export declare class az_redis {
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
    static create(location: string, name: string, resourceGroup: string, sku: 'Basic' | 'Premium' | 'Standard', vmSize: 'c0' | 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6' | 'p1' | 'p2' | 'p3' | 'p4' | 'p5'): az_redis_create_command_builder;
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
    static delete(): az_redis_delete_command_builder;
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
    static export(container: string, prefix: string): az_redis_export_command_builder;
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
    static force_reboot(rebootType: 'AllNodes' | 'PrimaryNode' | 'SecondaryNode'): az_redis_force_reboot_command_builder;
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
    static import(files: string): az_redis_import_command_builder;
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
    static import_method(files: string): az_redis_import_method_command_builder;
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
    static list(): az_redis_list_command_builder;
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
    static list_keys(): az_redis_list_keys_command_builder;
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
    static regenerate_keys(keyType: 'Primary' | 'Secondary'): az_redis_regenerate_keys_command_builder;
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
    static show(): az_redis_show_command_builder;
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
    static update(): az_redis_update_command_builder;
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
declare class az_redis_firewall_rules_create_command_builder extends CommandBuilder<az_redis_firewall_rules_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, endIp: string, name: string, resourceGroup: string, ruleName: string, startIp: string);
    /** Highest IP address included in the range. */
    endIp(value: string): az_redis_firewall_rules_create_command_builder;
    /** Name of the Redis cache. */
    name(value: string): az_redis_firewall_rules_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_firewall_rules_create_command_builder;
    /** The name of the firewall rule. */
    ruleName(value: string): az_redis_firewall_rules_create_command_builder;
    /** Lowest IP address included in the range. */
    startIp(value: string): az_redis_firewall_rules_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_firewall_rules_create_command_builder;
}
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
declare class az_redis_firewall_rules_delete_command_builder extends CommandBuilder<az_redis_firewall_rules_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, ruleName: string);
    /** The name of the firewall rule. */
    ruleName(value: string): az_redis_firewall_rules_delete_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_redis_firewall_rules_delete_command_builder;
    /** Name of the Redis cache. */
    name(value: string): az_redis_firewall_rules_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_firewall_rules_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_firewall_rules_delete_command_builder;
}
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
declare class az_redis_firewall_rules_list_command_builder extends CommandBuilder<az_redis_firewall_rules_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the Redis cache. */
    name(value: string): az_redis_firewall_rules_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_firewall_rules_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_redis_firewall_rules_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_firewall_rules_list_command_builder;
}
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
declare class az_redis_firewall_rules_show_command_builder extends CommandBuilder<az_redis_firewall_rules_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, ruleName: string);
    /** The name of the firewall rule. */
    ruleName(value: string): az_redis_firewall_rules_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_redis_firewall_rules_show_command_builder;
    /** Name of the Redis cache. */
    name(value: string): az_redis_firewall_rules_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_redis_firewall_rules_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_firewall_rules_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_firewall_rules_show_command_builder;
}
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
declare class az_redis_firewall_rules_update_command_builder extends CommandBuilder<az_redis_firewall_rules_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, endIp: string, ruleName: string, startIp: string);
    /** Highest IP address included in the range. */
    endIp(value: string): az_redis_firewall_rules_update_command_builder;
    /** The name of the firewall rule. */
    ruleName(value: string): az_redis_firewall_rules_update_command_builder;
    /** Lowest IP address included in the range. */
    startIp(value: string): az_redis_firewall_rules_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_redis_firewall_rules_update_command_builder;
    /** Name of the Redis cache. */
    name(value: string): az_redis_firewall_rules_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_firewall_rules_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_firewall_rules_update_command_builder;
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
declare class az_redis_patch_schedule_create_command_builder extends CommandBuilder<az_redis_patch_schedule_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, scheduleEntries: string);
    /** Name of the Redis cache. */
    name(value: string): az_redis_patch_schedule_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_patch_schedule_create_command_builder;
    /** List of Patch schedule entries. Example Value:[{"dayOfWeek":"Monday","startHourUtc":"00","maintenanceWindow":"PT5H"}]. */
    scheduleEntries(value: string): az_redis_patch_schedule_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_patch_schedule_create_command_builder;
}
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
declare class az_redis_patch_schedule_delete_command_builder extends CommandBuilder<az_redis_patch_schedule_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the Redis cache. */
    name(value: string): az_redis_patch_schedule_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_patch_schedule_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_patch_schedule_delete_command_builder;
}
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
declare class az_redis_patch_schedule_show_command_builder extends CommandBuilder<az_redis_patch_schedule_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the Redis cache. */
    name(value: string): az_redis_patch_schedule_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_patch_schedule_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_redis_patch_schedule_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_patch_schedule_show_command_builder;
}
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
declare class az_redis_patch_schedule_update_command_builder extends CommandBuilder<az_redis_patch_schedule_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, scheduleEntries: string);
    /** Name of the Redis cache. */
    name(value: string): az_redis_patch_schedule_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_patch_schedule_update_command_builder;
    /** List of Patch schedule entries. Example Value:[{"dayOfWeek":"Monday","startHourUtc":"00","maintenanceWindow":"PT5H"}]. */
    scheduleEntries(value: string): az_redis_patch_schedule_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_patch_schedule_update_command_builder;
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
declare class az_redis_server_link_create_command_builder extends CommandBuilder<az_redis_server_link_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, replicationRole: 'Primary' | 'Secondary', resourceGroup: string, serverToLink: string);
    /** Name of the Redis cache. */
    name(value: string): az_redis_server_link_create_command_builder;
    /** Role of the redis cache to be linked. */
    replicationRole(value: 'Primary' | 'Secondary'): az_redis_server_link_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_server_link_create_command_builder;
    /** Resource ID or name of the redis cache to be linked. */
    serverToLink(value: string): az_redis_server_link_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_server_link_create_command_builder;
}
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
declare class az_redis_server_link_delete_command_builder extends CommandBuilder<az_redis_server_link_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, linkedServerName: string, name: string, resourceGroup: string);
    /** Name of the linked redis cache. */
    linkedServerName(value: string): az_redis_server_link_delete_command_builder;
    /** Name of the Redis cache. */
    name(value: string): az_redis_server_link_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_server_link_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_server_link_delete_command_builder;
}
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
declare class az_redis_server_link_list_command_builder extends CommandBuilder<az_redis_server_link_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the Redis cache. */
    name(value: string): az_redis_server_link_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_server_link_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_redis_server_link_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_server_link_list_command_builder;
}
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
declare class az_redis_server_link_show_command_builder extends CommandBuilder<az_redis_server_link_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, linkedServerName: string, name: string, resourceGroup: string);
    /** Name of the linked redis cache. */
    linkedServerName(value: string): az_redis_server_link_show_command_builder;
    /** Name of the Redis cache. */
    name(value: string): az_redis_server_link_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_server_link_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_redis_server_link_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_server_link_show_command_builder;
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
declare class az_redis_create_command_builder extends CommandBuilder<az_redis_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string, name: string, resourceGroup: string, sku: 'Basic' | 'Premium' | 'Standard', vmSize: 'c0' | 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6' | 'p1' | 'p2' | 'p3' | 'p4' | 'p5');
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_redis_create_command_builder;
    /** Name of the Redis cache. */
    name(value: string): az_redis_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_create_command_builder;
    /** Type of Redis cache. */
    sku(value: 'Basic' | 'Premium' | 'Standard'): az_redis_create_command_builder;
    /** Size of Redis cache to deploy. Basic and Standard Cache sizes start with C. Premium Cache sizes start with P. */
    vmSize(value: 'c0' | 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6' | 'p1' | 'p2' | 'p3' | 'p4' | 'p5'): az_redis_create_command_builder;
    /** If specified, then the non-ssl redis server port (6379) will be enabled. */
    enableNonSslPort(value: string): az_redis_create_command_builder;
    /** Specifies the TLS version required by clients to connect to cache. */
    minimumTlsVersion(value: '1.0' | '1.1' | '1.2'): az_redis_create_command_builder;
    /** JSON encoded configuration settings. Use @{file} to load from a file. */
    redisConfiguration(value: string): az_redis_create_command_builder;
    /** The number of replicas to be created per master. */
    replicasPerMaster(value: string): az_redis_create_command_builder;
    /** The number of shards to be created on a Premium Cluster Cache. */
    shardCount(value: string): az_redis_create_command_builder;
    /** Specify a static ip if required for the VNET. If you do not specify a static IP then an IP address is chosen automatically. */
    staticIp(value: string): az_redis_create_command_builder;
    /** The full resource ID of a subnet in a virtual network to deploy the redis cache in. Example format /subscriptions/{subid}/resourceGroups/{resourceGroupName}/providers/Microsoft.{Network|ClassicNetwork}/virtualNetworks/vnet1/subnets/subnet1. */
    subnetId(value: string): az_redis_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_redis_create_command_builder;
    /** Space-separated tenant settings in key[=value] format. */
    tenantSettings(value: string): az_redis_create_command_builder;
    /** Space-separated list of availability zones into which to provision the resource. */
    zones(value: '1' | '2' | '3'): az_redis_create_command_builder;
}
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
declare class az_redis_delete_command_builder extends CommandBuilder<az_redis_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_redis_delete_command_builder;
    /** Name of the Redis cache. */
    name(value: string): az_redis_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_redis_delete_command_builder;
}
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
declare class az_redis_export_command_builder extends CommandBuilder<az_redis_export_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, container: string, prefix: string);
    /** SAS url for container where data needs to be exported to. */
    container(value: string): az_redis_export_command_builder;
    /** Prefix to use for exported files. */
    prefix(value: string): az_redis_export_command_builder;
    /** Format of the blob (Currently rdb is the only supported format, with other formats expected in the future). */
    fileFormat(value: string): az_redis_export_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_redis_export_command_builder;
    /** Name of the Redis cache. */
    name(value: string): az_redis_export_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_export_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_export_command_builder;
}
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
declare class az_redis_force_reboot_command_builder extends CommandBuilder<az_redis_force_reboot_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, rebootType: 'AllNodes' | 'PrimaryNode' | 'SecondaryNode');
    /** Which Redis node(s) to reboot. Depending on this value data loss is possible. */
    rebootType(value: 'AllNodes' | 'PrimaryNode' | 'SecondaryNode'): az_redis_force_reboot_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_redis_force_reboot_command_builder;
    /** Name of the Redis cache. */
    name(value: string): az_redis_force_reboot_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_force_reboot_command_builder;
    /** If clustering is enabled, the ID of the shard to be rebooted. */
    shardId(value: string): az_redis_force_reboot_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_force_reboot_command_builder;
}
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
declare class az_redis_import_command_builder extends CommandBuilder<az_redis_import_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, files: string);
    /** SAS url for blobs that needs to be imported. */
    files(value: string): az_redis_import_command_builder;
    /** Format of the blob (Currently rdb is the only supported format, with other formats expected in the future). */
    fileFormat(value: string): az_redis_import_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_redis_import_command_builder;
    /** Name of the Redis cache. */
    name(value: string): az_redis_import_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_import_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_import_command_builder;
}
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
declare class az_redis_import_method_command_builder extends CommandBuilder<az_redis_import_method_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, files: string);
    /** SAS url for blobs that needs to be imported. */
    files(value: string): az_redis_import_method_command_builder;
    /** Format of the blob (Currently rdb is the only supported format, with other formats expected in the future). */
    fileFormat(value: string): az_redis_import_method_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_redis_import_method_command_builder;
    /** Name of the Redis cache. */
    name(value: string): az_redis_import_method_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_import_method_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_import_method_command_builder;
}
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
declare class az_redis_list_command_builder extends CommandBuilder<az_redis_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_redis_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_list_command_builder;
}
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
declare class az_redis_list_keys_command_builder extends CommandBuilder<az_redis_list_keys_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_redis_list_keys_command_builder;
    /** Name of the Redis cache. */
    name(value: string): az_redis_list_keys_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_list_keys_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_list_keys_command_builder;
}
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
declare class az_redis_regenerate_keys_command_builder extends CommandBuilder<az_redis_regenerate_keys_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, keyType: 'Primary' | 'Secondary');
    /** The Redis access key to regenerate. */
    keyType(value: 'Primary' | 'Secondary'): az_redis_regenerate_keys_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_redis_regenerate_keys_command_builder;
    /** Name of the Redis cache. */
    name(value: string): az_redis_regenerate_keys_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_regenerate_keys_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_regenerate_keys_command_builder;
}
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
declare class az_redis_show_command_builder extends CommandBuilder<az_redis_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_redis_show_command_builder;
    /** Name of the Redis cache. */
    name(value: string): az_redis_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_redis_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_show_command_builder;
}
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
declare class az_redis_update_command_builder extends CommandBuilder<az_redis_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_redis_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_redis_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_redis_update_command_builder;
    /** Name of the Redis cache. */
    name(value: string): az_redis_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_redis_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_redis_update_command_builder;
    /** Type of Redis cache. */
    sku(value: 'Basic' | 'Premium' | 'Standard'): az_redis_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_update_command_builder;
    /** Size of Redis cache to deploy. Basic and Standard Cache sizes start with C. Premium Cache sizes start with P. */
    vmSize(value: 'c0' | 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6' | 'p1' | 'p2' | 'p3' | 'p4' | 'p5'): az_redis_update_command_builder;
}
export {};
