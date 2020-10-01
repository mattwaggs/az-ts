import { CommandBuilder } from '../base';
import { az_kusto_cluster_create_command_result } from './models/az_kusto_cluster_create_command_result'
import { az_kusto_cluster_delete_command_result } from './models/az_kusto_cluster_delete_command_result'
import { az_kusto_cluster_list_command_result } from './models/az_kusto_cluster_list_command_result'
import { az_kusto_cluster_show_command_result } from './models/az_kusto_cluster_show_command_result'
import { az_kusto_cluster_start_command_result } from './models/az_kusto_cluster_start_command_result'
import { az_kusto_cluster_stop_command_result } from './models/az_kusto_cluster_stop_command_result'
import { az_kusto_cluster_update_command_result } from './models/az_kusto_cluster_update_command_result'
import { az_kusto_cluster_wait_command_result } from './models/az_kusto_cluster_wait_command_result'
import { az_kusto_database_create_command_result } from './models/az_kusto_database_create_command_result'
import { az_kusto_database_delete_command_result } from './models/az_kusto_database_delete_command_result'
import { az_kusto_database_list_command_result } from './models/az_kusto_database_list_command_result'
import { az_kusto_database_show_command_result } from './models/az_kusto_database_show_command_result'
import { az_kusto_database_update_command_result } from './models/az_kusto_database_update_command_result'
import { az_kusto_database_wait_command_result } from './models/az_kusto_database_wait_command_result'

/** Manage Azure Kusto clusters. */
export class az_kusto_cluster {
    /**
     * Create a Kusto cluster.
     *
     * Syntax:
     * ```
     * az kusto cluster create --name
     *                         --resource-group
     *                         --sku {Dev(No SLA)_Standard_D11_v2, Dev(No SLA)_Standard_E2a_v4, Standard_D11_v2, Standard_D12_v2, Standard_D13_v2, Standard_D14_v2, Standard_DS13_v2+1TB_PS, Standard_DS13_v2+2TB_PS, Standard_DS14_v2+3TB_PS, Standard_DS14_v2+4TB_PS, Standard_E16a_v4, Standard_E16as_v4+3TB_PS, Standard_E16as_v4+4TB_PS, Standard_E2a_v4, Standard_E4a_v4, Standard_E8a_v4, Standard_E8as_v4+1TB_PS, Standard_E8as_v4+2TB_PS, Standard_L16s, Standard_L4s, Standard_L8s}
     *                         [--capacity]
     *                         [--location]
     *                         [--no-wait]
     *                         [--subscription]
     * ```
     *
     * @param {string} name The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'Dev(No SLA)_Standard_D11_v2' | 'Dev(No SLA)_Standard_E2a_v4' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_DS13_v2+1TB_PS' | 'Standard_DS13_v2+2TB_PS' | 'Standard_DS14_v2+3TB_PS' | 'Standard_DS14_v2+4TB_PS' | 'Standard_E16a_v4' | 'Standard_E16as_v4+3TB_PS' | 'Standard_E16as_v4+4TB_PS' | 'Standard_E2a_v4' | 'Standard_E4a_v4' | 'Standard_E8a_v4' | 'Standard_E8as_v4+1TB_PS' | 'Standard_E8as_v4+2TB_PS' | 'Standard_L16s' | 'Standard_L4s' | 'Standard_L8s'} sku The name of the sku.
     */
    static create(name: string, resourceGroup: string, sku: 'Dev(No SLA)_Standard_D11_v2' | 'Dev(No SLA)_Standard_E2a_v4' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_DS13_v2+1TB_PS' | 'Standard_DS13_v2+2TB_PS' | 'Standard_DS14_v2+3TB_PS' | 'Standard_DS14_v2+4TB_PS' | 'Standard_E16a_v4' | 'Standard_E16as_v4+3TB_PS' | 'Standard_E16as_v4+4TB_PS' | 'Standard_E2a_v4' | 'Standard_E4a_v4' | 'Standard_E8a_v4' | 'Standard_E8as_v4+1TB_PS' | 'Standard_E8as_v4+2TB_PS' | 'Standard_L16s' | 'Standard_L4s' | 'Standard_L8s'): az_kusto_cluster_create_command_builder {
        return new az_kusto_cluster_create_command_builder("az kusto cluster create", 'az_kusto_cluster_create_command_result', name, resourceGroup, sku);
    }

    /**
     * Delete a Kusto cluster.
     *
     * Syntax:
     * ```
     * az kusto cluster delete [--ids]
     *                         [--name]
     *                         [--resource-group]
     *                         [--subscription]
     *                         [--yes]
     * ```
     */
    static delete(): az_kusto_cluster_delete_command_builder {
        return new az_kusto_cluster_delete_command_builder("az kusto cluster delete", 'az_kusto_cluster_delete_command_result');
    }

    /**
     * List a Kusto cluster.
     *
     * Syntax:
     * ```
     * az kusto cluster list --resource-group
     *                       [--query-examples]
     *                       [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(resourceGroup: string): az_kusto_cluster_list_command_builder {
        return new az_kusto_cluster_list_command_builder("az kusto cluster list", 'az_kusto_cluster_list_command_result', resourceGroup);
    }

    /**
     * Get a Kusto cluster.
     *
     * Syntax:
     * ```
     * az kusto cluster show [--ids]
     *                       [--name]
     *                       [--query-examples]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    static show(): az_kusto_cluster_show_command_builder {
        return new az_kusto_cluster_show_command_builder("az kusto cluster show", 'az_kusto_cluster_show_command_result');
    }

    /**
     * Start a Kusto cluster.
     *
     * Syntax:
     * ```
     * az kusto cluster start [--ids]
     *                        [--name]
     *                        [--no-wait]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     */
    static start(): az_kusto_cluster_start_command_builder {
        return new az_kusto_cluster_start_command_builder("az kusto cluster start", 'az_kusto_cluster_start_command_result');
    }

    /**
     * Stop a Kusto cluster.
     *
     * Syntax:
     * ```
     * az kusto cluster stop [--ids]
     *                       [--name]
     *                       [--no-wait]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    static stop(): az_kusto_cluster_stop_command_builder {
        return new az_kusto_cluster_stop_command_builder("az kusto cluster stop", 'az_kusto_cluster_stop_command_result');
    }

    /**
     * Update a Kusto cluster.
     *
     * Syntax:
     * ```
     * az kusto cluster update [--add]
     *                         [--capacity]
     *                         [--force-string]
     *                         [--ids]
     *                         [--name]
     *                         [--remove]
     *                         [--resource-group]
     *                         [--set]
     *                         [--sku {Dev(No SLA)_Standard_D11_v2, Dev(No SLA)_Standard_E2a_v4, Standard_D11_v2, Standard_D12_v2, Standard_D13_v2, Standard_D14_v2, Standard_DS13_v2+1TB_PS, Standard_DS13_v2+2TB_PS, Standard_DS14_v2+3TB_PS, Standard_DS14_v2+4TB_PS, Standard_E16a_v4, Standard_E16as_v4+3TB_PS, Standard_E16as_v4+4TB_PS, Standard_E2a_v4, Standard_E4a_v4, Standard_E8a_v4, Standard_E8as_v4+1TB_PS, Standard_E8as_v4+2TB_PS, Standard_L16s, Standard_L4s, Standard_L8s}]
     *                         [--subscription]
     * ```
     */
    static update(): az_kusto_cluster_update_command_builder {
        return new az_kusto_cluster_update_command_builder("az kusto cluster update", 'az_kusto_cluster_update_command_result');
    }

    /**
     * Wait for a managed Kusto cluster to reach a desired state.
     *
     * Syntax:
     * ```
     * az kusto cluster wait [--created]
     *                       [--custom]
     *                       [--deleted]
     *                       [--exists]
     *                       [--ids]
     *                       [--interval]
     *                       [--name]
     *                       [--resource-group]
     *                       [--subscription]
     *                       [--timeout]
     *                       [--updated]
     * ```
     */
    static wait(): az_kusto_cluster_wait_command_builder {
        return new az_kusto_cluster_wait_command_builder("az kusto cluster wait", 'az_kusto_cluster_wait_command_result');
    }
}

/** Manage Azure Kusto databases. */
export class az_kusto_database {
    /**
     * Create a Kusto database.
     *
     * Syntax:
     * ```
     * az kusto database create --cluster-name
     *                          --name
     *                          --resource-group
     *                          [--hot-cache-period]
     *                          [--no-wait]
     *                          [--soft-delete-period]
     *                          [--subscription]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {string} name The name of the database.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(clusterName: string, name: string, resourceGroup: string): az_kusto_database_create_command_builder {
        return new az_kusto_database_create_command_builder("az kusto database create", 'az_kusto_database_create_command_result', clusterName, name, resourceGroup);
    }

    /**
     * Delete a Kusto database.
     *
     * Syntax:
     * ```
     * az kusto database delete [--cluster-name]
     *                          [--ids]
     *                          [--name]
     *                          [--resource-group]
     *                          [--subscription]
     *                          [--yes]
     * ```
     */
    static delete(): az_kusto_database_delete_command_builder {
        return new az_kusto_database_delete_command_builder("az kusto database delete", 'az_kusto_database_delete_command_result');
    }

    /**
     * List a Kusto database.
     *
     * Syntax:
     * ```
     * az kusto database list --cluster-name
     *                        --resource-group
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(clusterName: string, resourceGroup: string): az_kusto_database_list_command_builder {
        return new az_kusto_database_list_command_builder("az kusto database list", 'az_kusto_database_list_command_result', clusterName, resourceGroup);
    }

    /**
     * Get a Kusto database.
     *
     * Syntax:
     * ```
     * az kusto database show [--cluster-name]
     *                        [--ids]
     *                        [--name]
     *                        [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     */
    static show(): az_kusto_database_show_command_builder {
        return new az_kusto_database_show_command_builder("az kusto database show", 'az_kusto_database_show_command_result');
    }

    /**
     * Update a Kusto database.
     *
     * Syntax:
     * ```
     * az kusto database update --soft-delete-period
     *                          [--add]
     *                          [--cluster-name]
     *                          [--force-string]
     *                          [--hot-cache-period]
     *                          [--ids]
     *                          [--name]
     *                          [--no-wait]
     *                          [--remove]
     *                          [--resource-group]
     *                          [--set]
     *                          [--subscription]
     * ```
     *
     * @param {string} softDeletePeriod Amount of time that data should be kept so it is available to query. Duration in ISO8601 format (for example, 100 days would be P100D).
     */
    static update(softDeletePeriod: string): az_kusto_database_update_command_builder {
        return new az_kusto_database_update_command_builder("az kusto database update", 'az_kusto_database_update_command_result', softDeletePeriod);
    }

    /**
     * Wait for a managed Kusto database to reach a desired state.
     *
     * Syntax:
     * ```
     * az kusto database wait [--cluster-name]
     *                        [--created]
     *                        [--custom]
     *                        [--deleted]
     *                        [--exists]
     *                        [--ids]
     *                        [--interval]
     *                        [--name]
     *                        [--resource-group]
     *                        [--subscription]
     *                        [--timeout]
     *                        [--updated]
     * ```
     */
    static wait(): az_kusto_database_wait_command_builder {
        return new az_kusto_database_wait_command_builder("az kusto database wait", 'az_kusto_database_wait_command_result');
    }
}

/** Manage Azure Kusto resources. */
export class az_kusto {
}

/**
 * Create a Kusto cluster.
 *
 * Syntax:
 * ```
 * az kusto cluster create --name
 *                         --resource-group
 *                         --sku {Dev(No SLA)_Standard_D11_v2, Dev(No SLA)_Standard_E2a_v4, Standard_D11_v2, Standard_D12_v2, Standard_D13_v2, Standard_D14_v2, Standard_DS13_v2+1TB_PS, Standard_DS13_v2+2TB_PS, Standard_DS14_v2+3TB_PS, Standard_DS14_v2+4TB_PS, Standard_E16a_v4, Standard_E16as_v4+3TB_PS, Standard_E16as_v4+4TB_PS, Standard_E2a_v4, Standard_E4a_v4, Standard_E8a_v4, Standard_E8as_v4+1TB_PS, Standard_E8as_v4+2TB_PS, Standard_L16s, Standard_L4s, Standard_L8s}
 *                         [--capacity]
 *                         [--location]
 *                         [--no-wait]
 *                         [--subscription]
 * ```
 *
 * @param {string} name The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'Dev(No SLA)_Standard_D11_v2' | 'Dev(No SLA)_Standard_E2a_v4' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_DS13_v2+1TB_PS' | 'Standard_DS13_v2+2TB_PS' | 'Standard_DS14_v2+3TB_PS' | 'Standard_DS14_v2+4TB_PS' | 'Standard_E16a_v4' | 'Standard_E16as_v4+3TB_PS' | 'Standard_E16as_v4+4TB_PS' | 'Standard_E2a_v4' | 'Standard_E4a_v4' | 'Standard_E8a_v4' | 'Standard_E8as_v4+1TB_PS' | 'Standard_E8as_v4+2TB_PS' | 'Standard_L16s' | 'Standard_L4s' | 'Standard_L8s'} sku The name of the sku.
 */
class az_kusto_cluster_create_command_builder extends CommandBuilder<az_kusto_cluster_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, sku: 'Dev(No SLA)_Standard_D11_v2' | 'Dev(No SLA)_Standard_E2a_v4' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_DS13_v2+1TB_PS' | 'Standard_DS13_v2+2TB_PS' | 'Standard_DS14_v2+3TB_PS' | 'Standard_DS14_v2+4TB_PS' | 'Standard_E16a_v4' | 'Standard_E16as_v4+3TB_PS' | 'Standard_E16as_v4+4TB_PS' | 'Standard_E2a_v4' | 'Standard_E4a_v4' | 'Standard_E8a_v4' | 'Standard_E8as_v4+1TB_PS' | 'Standard_E8as_v4+2TB_PS' | 'Standard_L16s' | 'Standard_L4s' | 'Standard_L8s') {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.sku(sku)
    }

    /** The name of the cluster. */
    name(value: string): az_kusto_cluster_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_kusto_cluster_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the sku. */
    sku(value: 'Dev(No SLA)_Standard_D11_v2' | 'Dev(No SLA)_Standard_E2a_v4' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_DS13_v2+1TB_PS' | 'Standard_DS13_v2+2TB_PS' | 'Standard_DS14_v2+3TB_PS' | 'Standard_DS14_v2+4TB_PS' | 'Standard_E16a_v4' | 'Standard_E16as_v4+3TB_PS' | 'Standard_E16as_v4+4TB_PS' | 'Standard_E2a_v4' | 'Standard_E4a_v4' | 'Standard_E8a_v4' | 'Standard_E8as_v4+1TB_PS' | 'Standard_E8as_v4+2TB_PS' | 'Standard_L16s' | 'Standard_L4s' | 'Standard_L8s'): az_kusto_cluster_create_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** The instance number of the VM. */
    capacity(value: string): az_kusto_cluster_create_command_builder {
        this.setFlag("--capacity", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_kusto_cluster_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_kusto_cluster_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_kusto_cluster_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete a Kusto cluster.
 *
 * Syntax:
 * ```
 * az kusto cluster delete [--ids]
 *                         [--name]
 *                         [--resource-group]
 *                         [--subscription]
 *                         [--yes]
 * ```
 */
class az_kusto_cluster_delete_command_builder extends CommandBuilder<az_kusto_cluster_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_kusto_cluster_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the cluster. */
    name(value: string): az_kusto_cluster_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_kusto_cluster_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_kusto_cluster_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_kusto_cluster_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * List a Kusto cluster.
 *
 * Syntax:
 * ```
 * az kusto cluster list --resource-group
 *                       [--query-examples]
 *                       [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_kusto_cluster_list_command_builder extends CommandBuilder<az_kusto_cluster_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.resourceGroup(resourceGroup)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_kusto_cluster_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_kusto_cluster_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_kusto_cluster_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get a Kusto cluster.
 *
 * Syntax:
 * ```
 * az kusto cluster show [--ids]
 *                       [--name]
 *                       [--query-examples]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
class az_kusto_cluster_show_command_builder extends CommandBuilder<az_kusto_cluster_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_kusto_cluster_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the cluster. */
    name(value: string): az_kusto_cluster_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_kusto_cluster_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_kusto_cluster_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_kusto_cluster_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Start a Kusto cluster.
 *
 * Syntax:
 * ```
 * az kusto cluster start [--ids]
 *                        [--name]
 *                        [--no-wait]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 */
class az_kusto_cluster_start_command_builder extends CommandBuilder<az_kusto_cluster_start_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_kusto_cluster_start_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the cluster. */
    name(value: string): az_kusto_cluster_start_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_kusto_cluster_start_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_kusto_cluster_start_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_kusto_cluster_start_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Stop a Kusto cluster.
 *
 * Syntax:
 * ```
 * az kusto cluster stop [--ids]
 *                       [--name]
 *                       [--no-wait]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
class az_kusto_cluster_stop_command_builder extends CommandBuilder<az_kusto_cluster_stop_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_kusto_cluster_stop_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the cluster. */
    name(value: string): az_kusto_cluster_stop_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_kusto_cluster_stop_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_kusto_cluster_stop_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_kusto_cluster_stop_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update a Kusto cluster.
 *
 * Syntax:
 * ```
 * az kusto cluster update [--add]
 *                         [--capacity]
 *                         [--force-string]
 *                         [--ids]
 *                         [--name]
 *                         [--remove]
 *                         [--resource-group]
 *                         [--set]
 *                         [--sku {Dev(No SLA)_Standard_D11_v2, Dev(No SLA)_Standard_E2a_v4, Standard_D11_v2, Standard_D12_v2, Standard_D13_v2, Standard_D14_v2, Standard_DS13_v2+1TB_PS, Standard_DS13_v2+2TB_PS, Standard_DS14_v2+3TB_PS, Standard_DS14_v2+4TB_PS, Standard_E16a_v4, Standard_E16as_v4+3TB_PS, Standard_E16as_v4+4TB_PS, Standard_E2a_v4, Standard_E4a_v4, Standard_E8a_v4, Standard_E8as_v4+1TB_PS, Standard_E8as_v4+2TB_PS, Standard_L16s, Standard_L4s, Standard_L8s}]
 *                         [--subscription]
 * ```
 */
class az_kusto_cluster_update_command_builder extends CommandBuilder<az_kusto_cluster_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_kusto_cluster_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The instance number of the VM. */
    capacity(value: string): az_kusto_cluster_update_command_builder {
        this.setFlag("--capacity", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_kusto_cluster_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_kusto_cluster_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the cluster. */
    name(value: string): az_kusto_cluster_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_kusto_cluster_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_kusto_cluster_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_kusto_cluster_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** The name of the sku. */
    sku(value: 'Dev(No SLA)_Standard_D11_v2' | 'Dev(No SLA)_Standard_E2a_v4' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_DS13_v2+1TB_PS' | 'Standard_DS13_v2+2TB_PS' | 'Standard_DS14_v2+3TB_PS' | 'Standard_DS14_v2+4TB_PS' | 'Standard_E16a_v4' | 'Standard_E16as_v4+3TB_PS' | 'Standard_E16as_v4+4TB_PS' | 'Standard_E2a_v4' | 'Standard_E4a_v4' | 'Standard_E8a_v4' | 'Standard_E8as_v4+1TB_PS' | 'Standard_E8as_v4+2TB_PS' | 'Standard_L16s' | 'Standard_L4s' | 'Standard_L8s'): az_kusto_cluster_update_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_kusto_cluster_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Wait for a managed Kusto cluster to reach a desired state.
 *
 * Syntax:
 * ```
 * az kusto cluster wait [--created]
 *                       [--custom]
 *                       [--deleted]
 *                       [--exists]
 *                       [--ids]
 *                       [--interval]
 *                       [--name]
 *                       [--resource-group]
 *                       [--subscription]
 *                       [--timeout]
 *                       [--updated]
 * ```
 */
class az_kusto_cluster_wait_command_builder extends CommandBuilder<az_kusto_cluster_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_kusto_cluster_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_kusto_cluster_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_kusto_cluster_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_kusto_cluster_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_kusto_cluster_wait_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_kusto_cluster_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** The name of the cluster. */
    name(value: string): az_kusto_cluster_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_kusto_cluster_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_kusto_cluster_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_kusto_cluster_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_kusto_cluster_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
}

/**
 * Create a Kusto database.
 *
 * Syntax:
 * ```
 * az kusto database create --cluster-name
 *                          --name
 *                          --resource-group
 *                          [--hot-cache-period]
 *                          [--no-wait]
 *                          [--soft-delete-period]
 *                          [--subscription]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {string} name The name of the database.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_kusto_database_create_command_builder extends CommandBuilder<az_kusto_database_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    clusterName(value: string): az_kusto_database_create_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** The name of the database. */
    name(value: string): az_kusto_database_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_kusto_database_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Amount of time that data should be kept in cache.Duration in ISO8601 format (for example, 100 days would be P100D). */
    hotCachePeriod(value: string): az_kusto_database_create_command_builder {
        this.setFlag("--hot-cache-period", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_kusto_database_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Amount of time that data should be kept so it is available to query. Duration in ISO8601 format (for example, 100 days would be P100D). */
    softDeletePeriod(value: string): az_kusto_database_create_command_builder {
        this.setFlag("--soft-delete-period", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_kusto_database_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete a Kusto database.
 *
 * Syntax:
 * ```
 * az kusto database delete [--cluster-name]
 *                          [--ids]
 *                          [--name]
 *                          [--resource-group]
 *                          [--subscription]
 *                          [--yes]
 * ```
 */
class az_kusto_database_delete_command_builder extends CommandBuilder<az_kusto_database_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the cluster. */
    clusterName(value: string): az_kusto_database_delete_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_kusto_database_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the database. */
    name(value: string): az_kusto_database_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_kusto_database_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_kusto_database_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_kusto_database_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * List a Kusto database.
 *
 * Syntax:
 * ```
 * az kusto database list --cluster-name
 *                        --resource-group
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_kusto_database_list_command_builder extends CommandBuilder<az_kusto_database_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    clusterName(value: string): az_kusto_database_list_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_kusto_database_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_kusto_database_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_kusto_database_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get a Kusto database.
 *
 * Syntax:
 * ```
 * az kusto database show [--cluster-name]
 *                        [--ids]
 *                        [--name]
 *                        [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 */
class az_kusto_database_show_command_builder extends CommandBuilder<az_kusto_database_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the cluster. */
    clusterName(value: string): az_kusto_database_show_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_kusto_database_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the database. */
    name(value: string): az_kusto_database_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_kusto_database_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_kusto_database_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_kusto_database_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update a Kusto database.
 *
 * Syntax:
 * ```
 * az kusto database update --soft-delete-period
 *                          [--add]
 *                          [--cluster-name]
 *                          [--force-string]
 *                          [--hot-cache-period]
 *                          [--ids]
 *                          [--name]
 *                          [--no-wait]
 *                          [--remove]
 *                          [--resource-group]
 *                          [--set]
 *                          [--subscription]
 * ```
 *
 * @param {string} softDeletePeriod Amount of time that data should be kept so it is available to query. Duration in ISO8601 format (for example, 100 days would be P100D).
 */
class az_kusto_database_update_command_builder extends CommandBuilder<az_kusto_database_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, softDeletePeriod: string) {
        super(commandPath, resultDataTypeName);
        this.softDeletePeriod(softDeletePeriod)
    }

    /** Amount of time that data should be kept so it is available to query. Duration in ISO8601 format (for example, 100 days would be P100D). */
    softDeletePeriod(value: string): az_kusto_database_update_command_builder {
        this.setFlag("--soft-delete-period", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_kusto_database_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The name of the cluster. */
    clusterName(value: string): az_kusto_database_update_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_kusto_database_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Amount of time that data should be kept in cache.Duration in ISO8601 format (for example, 100 days would be P100D). */
    hotCachePeriod(value: string): az_kusto_database_update_command_builder {
        this.setFlag("--hot-cache-period", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_kusto_database_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the database. */
    name(value: string): az_kusto_database_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_kusto_database_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_kusto_database_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_kusto_database_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_kusto_database_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_kusto_database_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Wait for a managed Kusto database to reach a desired state.
 *
 * Syntax:
 * ```
 * az kusto database wait [--cluster-name]
 *                        [--created]
 *                        [--custom]
 *                        [--deleted]
 *                        [--exists]
 *                        [--ids]
 *                        [--interval]
 *                        [--name]
 *                        [--resource-group]
 *                        [--subscription]
 *                        [--timeout]
 *                        [--updated]
 * ```
 */
class az_kusto_database_wait_command_builder extends CommandBuilder<az_kusto_database_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the cluster. */
    clusterName(value: string): az_kusto_database_wait_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_kusto_database_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_kusto_database_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_kusto_database_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_kusto_database_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_kusto_database_wait_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_kusto_database_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** The name of the database. */
    name(value: string): az_kusto_database_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_kusto_database_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_kusto_database_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_kusto_database_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_kusto_database_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
}
