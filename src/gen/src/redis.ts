import { CommandBuilder, ICommandParent } from '../base';

/** Manage Redis firewall rules. */
export class az_redis_firewall_rules implements ICommandParent<any> {
    commandPath = "az redis firewall-rules";

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
    az_redis_firewall_rules_create(endIp: string, name: string, resourceGroup: string, ruleName: string, startIp: string): az_redis_firewall_rules_create_command_builder {
        return new az_redis_firewall_rules_create_command_builder(this, endIp, name, resourceGroup, ruleName, startIp);
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
    az_redis_firewall_rules_delete(ruleName: string): az_redis_firewall_rules_delete_command_builder {
        return new az_redis_firewall_rules_delete_command_builder(this, ruleName);
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
    az_redis_firewall_rules_list(name: string, resourceGroup: string): az_redis_firewall_rules_list_command_builder {
        return new az_redis_firewall_rules_list_command_builder(this, name, resourceGroup);
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
    az_redis_firewall_rules_show(ruleName: string): az_redis_firewall_rules_show_command_builder {
        return new az_redis_firewall_rules_show_command_builder(this, ruleName);
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
    az_redis_firewall_rules_update(endIp: string, ruleName: string, startIp: string): az_redis_firewall_rules_update_command_builder {
        return new az_redis_firewall_rules_update_command_builder(this, endIp, ruleName, startIp);
    }
}

/** Manage Redis patch schedules. */
export class az_redis_patch_schedule implements ICommandParent<any> {
    commandPath = "az redis patch-schedule";

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
    az_redis_patch_schedule_create(name: string, resourceGroup: string, scheduleEntries: string): az_redis_patch_schedule_create_command_builder {
        return new az_redis_patch_schedule_create_command_builder(this, name, resourceGroup, scheduleEntries);
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
    az_redis_patch_schedule_delete(name: string, resourceGroup: string): az_redis_patch_schedule_delete_command_builder {
        return new az_redis_patch_schedule_delete_command_builder(this, name, resourceGroup);
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
    az_redis_patch_schedule_show(name: string, resourceGroup: string): az_redis_patch_schedule_show_command_builder {
        return new az_redis_patch_schedule_show_command_builder(this, name, resourceGroup);
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
    az_redis_patch_schedule_update(name: string, resourceGroup: string, scheduleEntries: string): az_redis_patch_schedule_update_command_builder {
        return new az_redis_patch_schedule_update_command_builder(this, name, resourceGroup, scheduleEntries);
    }
}

/** Manage Redis server links. */
export class az_redis_server_link implements ICommandParent<any> {
    commandPath = "az redis server-link";

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
    az_redis_server_link_create(name: string, replicationRole: 'Primary' | 'Secondary', resourceGroup: string, serverToLink: string): az_redis_server_link_create_command_builder {
        return new az_redis_server_link_create_command_builder(this, name, replicationRole, resourceGroup, serverToLink);
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
    az_redis_server_link_delete(linkedServerName: string, name: string, resourceGroup: string): az_redis_server_link_delete_command_builder {
        return new az_redis_server_link_delete_command_builder(this, linkedServerName, name, resourceGroup);
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
    az_redis_server_link_list(name: string, resourceGroup: string): az_redis_server_link_list_command_builder {
        return new az_redis_server_link_list_command_builder(this, name, resourceGroup);
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
    az_redis_server_link_show(linkedServerName: string, name: string, resourceGroup: string): az_redis_server_link_show_command_builder {
        return new az_redis_server_link_show_command_builder(this, linkedServerName, name, resourceGroup);
    }
}

/** Manage dedicated Redis caches for your Azure applications. */
export class az_redis implements ICommandParent<any> {
    commandPath = "az redis";

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
    az_redis_create(location: string, name: string, resourceGroup: string, sku: 'Basic' | 'Premium' | 'Standard', vmSize: 'c0' | 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6' | 'p1' | 'p2' | 'p3' | 'p4' | 'p5'): az_redis_create_command_builder {
        return new az_redis_create_command_builder(this, location, name, resourceGroup, sku, vmSize);
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
    az_redis_delete(): az_redis_delete_command_builder {
        return new az_redis_delete_command_builder(this);
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
    az_redis_export(container: string, prefix: string): az_redis_export_command_builder {
        return new az_redis_export_command_builder(this, container, prefix);
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
    az_redis_force_reboot(rebootType: 'AllNodes' | 'PrimaryNode' | 'SecondaryNode'): az_redis_force_reboot_command_builder {
        return new az_redis_force_reboot_command_builder(this, rebootType);
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
    az_redis_import(files: string): az_redis_import_command_builder {
        return new az_redis_import_command_builder(this, files);
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
    az_redis_import_method(files: string): az_redis_import_method_command_builder {
        return new az_redis_import_method_command_builder(this, files);
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
    az_redis_list(): az_redis_list_command_builder {
        return new az_redis_list_command_builder(this);
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
    az_redis_list_keys(): az_redis_list_keys_command_builder {
        return new az_redis_list_keys_command_builder(this);
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
    az_redis_regenerate_keys(keyType: 'Primary' | 'Secondary'): az_redis_regenerate_keys_command_builder {
        return new az_redis_regenerate_keys_command_builder(this, keyType);
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
    az_redis_show(): az_redis_show_command_builder {
        return new az_redis_show_command_builder(this);
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
    az_redis_update(): az_redis_update_command_builder {
        return new az_redis_update_command_builder(this);
    }
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
class az_redis_firewall_rules_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, endIp: string, name: string, resourceGroup: string, ruleName: string, startIp: string) {
        super(commandParent);
        this.endIp(endIp)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.ruleName(ruleName)
        this.startIp(startIp)
    }

    /** Highest IP address included in the range. */
    endIp(value: string): az_redis_firewall_rules_create_command_builder {
        this.setFlag("--end-ip", value);
        return this;
    }

    /** Name of the Redis cache. */
    name(value: string): az_redis_firewall_rules_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_firewall_rules_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the firewall rule. */
    ruleName(value: string): az_redis_firewall_rules_create_command_builder {
        this.setFlag("--rule-name", value);
        return this;
    }

    /** Lowest IP address included in the range. */
    startIp(value: string): az_redis_firewall_rules_create_command_builder {
        this.setFlag("--start-ip", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_firewall_rules_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_redis_firewall_rules_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, ruleName: string) {
        super(commandParent);
        this.ruleName(ruleName)
    }

    /** The name of the firewall rule. */
    ruleName(value: string): az_redis_firewall_rules_delete_command_builder {
        this.setFlag("--rule-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_redis_firewall_rules_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Redis cache. */
    name(value: string): az_redis_firewall_rules_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_firewall_rules_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_firewall_rules_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_redis_firewall_rules_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the Redis cache. */
    name(value: string): az_redis_firewall_rules_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_firewall_rules_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_redis_firewall_rules_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_firewall_rules_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_redis_firewall_rules_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, ruleName: string) {
        super(commandParent);
        this.ruleName(ruleName)
    }

    /** The name of the firewall rule. */
    ruleName(value: string): az_redis_firewall_rules_show_command_builder {
        this.setFlag("--rule-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_redis_firewall_rules_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Redis cache. */
    name(value: string): az_redis_firewall_rules_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_redis_firewall_rules_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_firewall_rules_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_firewall_rules_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_redis_firewall_rules_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, endIp: string, ruleName: string, startIp: string) {
        super(commandParent);
        this.endIp(endIp)
        this.ruleName(ruleName)
        this.startIp(startIp)
    }

    /** Highest IP address included in the range. */
    endIp(value: string): az_redis_firewall_rules_update_command_builder {
        this.setFlag("--end-ip", value);
        return this;
    }

    /** The name of the firewall rule. */
    ruleName(value: string): az_redis_firewall_rules_update_command_builder {
        this.setFlag("--rule-name", value);
        return this;
    }

    /** Lowest IP address included in the range. */
    startIp(value: string): az_redis_firewall_rules_update_command_builder {
        this.setFlag("--start-ip", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_redis_firewall_rules_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Redis cache. */
    name(value: string): az_redis_firewall_rules_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_firewall_rules_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_firewall_rules_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_redis_patch_schedule_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string, scheduleEntries: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.scheduleEntries(scheduleEntries)
    }

    /** Name of the Redis cache. */
    name(value: string): az_redis_patch_schedule_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_patch_schedule_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** List of Patch schedule entries. Example Value:[{"dayOfWeek":"Monday","startHourUtc":"00","maintenanceWindow":"PT5H"}]. */
    scheduleEntries(value: string): az_redis_patch_schedule_create_command_builder {
        this.setFlag("--schedule-entries", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_patch_schedule_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_redis_patch_schedule_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the Redis cache. */
    name(value: string): az_redis_patch_schedule_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_patch_schedule_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_patch_schedule_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_redis_patch_schedule_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the Redis cache. */
    name(value: string): az_redis_patch_schedule_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_patch_schedule_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_redis_patch_schedule_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_patch_schedule_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_redis_patch_schedule_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string, scheduleEntries: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.scheduleEntries(scheduleEntries)
    }

    /** Name of the Redis cache. */
    name(value: string): az_redis_patch_schedule_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_patch_schedule_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** List of Patch schedule entries. Example Value:[{"dayOfWeek":"Monday","startHourUtc":"00","maintenanceWindow":"PT5H"}]. */
    scheduleEntries(value: string): az_redis_patch_schedule_update_command_builder {
        this.setFlag("--schedule-entries", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_patch_schedule_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_redis_server_link_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, replicationRole: 'Primary' | 'Secondary', resourceGroup: string, serverToLink: string) {
        super(commandParent);
        this.name(name)
        this.replicationRole(replicationRole)
        this.resourceGroup(resourceGroup)
        this.serverToLink(serverToLink)
    }

    /** Name of the Redis cache. */
    name(value: string): az_redis_server_link_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Role of the redis cache to be linked. */
    replicationRole(value: 'Primary' | 'Secondary'): az_redis_server_link_create_command_builder {
        this.setFlag("--replication-role", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_server_link_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Resource ID or name of the redis cache to be linked. */
    serverToLink(value: string): az_redis_server_link_create_command_builder {
        this.setFlag("--server-to-link", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_server_link_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_redis_server_link_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, linkedServerName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.linkedServerName(linkedServerName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the linked redis cache. */
    linkedServerName(value: string): az_redis_server_link_delete_command_builder {
        this.setFlag("--linked-server-name", value);
        return this;
    }

    /** Name of the Redis cache. */
    name(value: string): az_redis_server_link_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_server_link_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_server_link_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_redis_server_link_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the Redis cache. */
    name(value: string): az_redis_server_link_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_server_link_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_redis_server_link_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_server_link_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_redis_server_link_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, linkedServerName: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.linkedServerName(linkedServerName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the linked redis cache. */
    linkedServerName(value: string): az_redis_server_link_show_command_builder {
        this.setFlag("--linked-server-name", value);
        return this;
    }

    /** Name of the Redis cache. */
    name(value: string): az_redis_server_link_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_server_link_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_redis_server_link_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_server_link_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_redis_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, location: string, name: string, resourceGroup: string, sku: 'Basic' | 'Premium' | 'Standard', vmSize: 'c0' | 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6' | 'p1' | 'p2' | 'p3' | 'p4' | 'p5') {
        super(commandParent);
        this.location(location)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.sku(sku)
        this.vmSize(vmSize)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_redis_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name of the Redis cache. */
    name(value: string): az_redis_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Type of Redis cache. */
    sku(value: 'Basic' | 'Premium' | 'Standard'): az_redis_create_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Size of Redis cache to deploy. Basic and Standard Cache sizes start with C. Premium Cache sizes start with P. */
    vmSize(value: 'c0' | 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6' | 'p1' | 'p2' | 'p3' | 'p4' | 'p5'): az_redis_create_command_builder {
        this.setFlag("--vm-size", value);
        return this;
    }

    /** If specified, then the non-ssl redis server port (6379) will be enabled. */
    enableNonSslPort(value: string): az_redis_create_command_builder {
        this.setFlag("--enable-non-ssl-port", value);
        return this;
    }

    /** Specifies the TLS version required by clients to connect to cache. */
    minimumTlsVersion(value: '1.0' | '1.1' | '1.2'): az_redis_create_command_builder {
        this.setFlag("--minimum-tls-version", value);
        return this;
    }

    /** JSON encoded configuration settings. Use @{file} to load from a file. */
    redisConfiguration(value: string): az_redis_create_command_builder {
        this.setFlag("--redis-configuration", value);
        return this;
    }

    /** The number of replicas to be created per master. */
    replicasPerMaster(value: string): az_redis_create_command_builder {
        this.setFlag("--replicas-per-master", value);
        return this;
    }

    /** The number of shards to be created on a Premium Cluster Cache. */
    shardCount(value: string): az_redis_create_command_builder {
        this.setFlag("--shard-count", value);
        return this;
    }

    /** Specify a static ip if required for the VNET. If you do not specify a static IP then an IP address is chosen automatically. */
    staticIp(value: string): az_redis_create_command_builder {
        this.setFlag("--static-ip", value);
        return this;
    }

    /** The full resource ID of a subnet in a virtual network to deploy the redis cache in. Example format /subscriptions/{subid}/resourceGroups/{resourceGroupName}/providers/Microsoft.{Network|ClassicNetwork}/virtualNetworks/vnet1/subnets/subnet1. */
    subnetId(value: string): az_redis_create_command_builder {
        this.setFlag("--subnet-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_redis_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Space-separated tenant settings in key[=value] format. */
    tenantSettings(value: string): az_redis_create_command_builder {
        this.setFlag("--tenant-settings", value);
        return this;
    }

    /** Space-separated list of availability zones into which to provision the resource. */
    zones(value: '1' | '2' | '3'): az_redis_create_command_builder {
        this.setFlag("--zones", value);
        return this;
    }
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
class az_redis_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_redis_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Redis cache. */
    name(value: string): az_redis_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_redis_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_redis_export_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, container: string, prefix: string) {
        super(commandParent);
        this.container(container)
        this.prefix(prefix)
    }

    /** SAS url for container where data needs to be exported to. */
    container(value: string): az_redis_export_command_builder {
        this.setFlag("--container", value);
        return this;
    }

    /** Prefix to use for exported files. */
    prefix(value: string): az_redis_export_command_builder {
        this.setFlag("--prefix", value);
        return this;
    }

    /** Format of the blob (Currently rdb is the only supported format, with other formats expected in the future). */
    fileFormat(value: string): az_redis_export_command_builder {
        this.setFlag("--file-format", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_redis_export_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Redis cache. */
    name(value: string): az_redis_export_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_export_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_export_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_redis_force_reboot_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, rebootType: 'AllNodes' | 'PrimaryNode' | 'SecondaryNode') {
        super(commandParent);
        this.rebootType(rebootType)
    }

    /** Which Redis node(s) to reboot. Depending on this value data loss is possible. */
    rebootType(value: 'AllNodes' | 'PrimaryNode' | 'SecondaryNode'): az_redis_force_reboot_command_builder {
        this.setFlag("--reboot-type", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_redis_force_reboot_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Redis cache. */
    name(value: string): az_redis_force_reboot_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_force_reboot_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** If clustering is enabled, the ID of the shard to be rebooted. */
    shardId(value: string): az_redis_force_reboot_command_builder {
        this.setFlag("--shard-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_force_reboot_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_redis_import_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, files: string) {
        super(commandParent);
        this.files(files)
    }

    /** SAS url for blobs that needs to be imported. */
    files(value: string): az_redis_import_command_builder {
        this.setFlag("--files", value);
        return this;
    }

    /** Format of the blob (Currently rdb is the only supported format, with other formats expected in the future). */
    fileFormat(value: string): az_redis_import_command_builder {
        this.setFlag("--file-format", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_redis_import_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Redis cache. */
    name(value: string): az_redis_import_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_import_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_import_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_redis_import_method_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, files: string) {
        super(commandParent);
        this.files(files)
    }

    /** SAS url for blobs that needs to be imported. */
    files(value: string): az_redis_import_method_command_builder {
        this.setFlag("--files", value);
        return this;
    }

    /** Format of the blob (Currently rdb is the only supported format, with other formats expected in the future). */
    fileFormat(value: string): az_redis_import_method_command_builder {
        this.setFlag("--file-format", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_redis_import_method_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Redis cache. */
    name(value: string): az_redis_import_method_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_import_method_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_import_method_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_redis_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_redis_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_redis_list_keys_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_redis_list_keys_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Redis cache. */
    name(value: string): az_redis_list_keys_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_list_keys_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_list_keys_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_redis_regenerate_keys_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, keyType: 'Primary' | 'Secondary') {
        super(commandParent);
        this.keyType(keyType)
    }

    /** The Redis access key to regenerate. */
    keyType(value: 'Primary' | 'Secondary'): az_redis_regenerate_keys_command_builder {
        this.setFlag("--key-type", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_redis_regenerate_keys_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Redis cache. */
    name(value: string): az_redis_regenerate_keys_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_regenerate_keys_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_regenerate_keys_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_redis_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_redis_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Redis cache. */
    name(value: string): az_redis_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_redis_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_redis_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_redis_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_redis_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_redis_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Redis cache. */
    name(value: string): az_redis_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_redis_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_redis_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_redis_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Type of Redis cache. */
    sku(value: 'Basic' | 'Premium' | 'Standard'): az_redis_update_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_redis_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Size of Redis cache to deploy. Basic and Standard Cache sizes start with C. Premium Cache sizes start with P. */
    vmSize(value: 'c0' | 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6' | 'p1' | 'p2' | 'p3' | 'p4' | 'p5'): az_redis_update_command_builder {
        this.setFlag("--vm-size", value);
        return this;
    }
}
