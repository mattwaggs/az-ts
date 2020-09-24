import { CommandBuilder, ICommandParent } from '../base';

/** Manage Tasks for a Data Migration Service instance's Project. */
export class az_dms_project_task implements ICommandParent<any> {
    commandPath = "az dms project task";

    /**
     * Cancel a Task if it's currently queued or running.
     *
     * Syntax:
     * ```
     * az dms project task cancel --name
     *                            --project-name
     *                            --resource-group
     *                            --service-name
     *                            [--subscription]
     * ```
     *
     * @param {string} name The name of the Task.
     * @param {string} projectName The name of the Project.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the Service.
     */
    az_dms_project_task_cancel(name: string, projectName: string, resourceGroup: string, serviceName: string): az_dms_project_task_cancel_command_builder {
        return new az_dms_project_task_cancel_command_builder(this, name, projectName, resourceGroup, serviceName);
    }

    /**
     * Check if a given Task name is available within a given instance of DMS as well as the name's validity.
     *
     * Syntax:
     * ```
     * az dms project task check-name --name
     *                                --project-name
     *                                --resource-group
     *                                --service-name
     *                                [--subscription]
     * ```
     *
     * @param {string} name The Task name to check.
     * @param {string} projectName The name of the Project.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the Service.
     */
    az_dms_project_task_check_name(name: string, projectName: string, resourceGroup: string, serviceName: string): az_dms_project_task_check_name_command_builder {
        return new az_dms_project_task_check_name_command_builder(this, name, projectName, resourceGroup, serviceName);
    }

    /**
     * Create and start a migration Task.
     *
     * Syntax:
     * ```
     * az dms project task create --database-options-json
     *                            --name
     *                            --project-name
     *                            --resource-group
     *                            --service-name
     *                            --source-connection-json
     *                            --target-connection-json
     *                            [--enable-data-integrity-validation]
     *                            [--enable-query-analysis-validation]
     *                            [--enable-schema-validation]
     *                            [--subscription]
     * ```
     *
     * @param {string} databaseOptionsJson Database and table information. This can be either a JSON-formatted string or the location to a file containing the JSON object. See example below for the format.
     * @param {string} name The name of the Task.
     * @param {string} projectName The name of the Project.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the Service.
     * @param {string} sourceConnectionJson The connection information to the source server. This can be either a JSON-formatted string or the location to a file containing the JSON object. See example below for the format.
     * @param {string} targetConnectionJson The connection information to the target server. This can be either a JSON-formatted string or the location to a file containing the JSON object. See example below for the format.
     */
    az_dms_project_task_create(databaseOptionsJson: string, name: string, projectName: string, resourceGroup: string, serviceName: string, sourceConnectionJson: string, targetConnectionJson: string): az_dms_project_task_create_command_builder {
        return new az_dms_project_task_create_command_builder(this, databaseOptionsJson, name, projectName, resourceGroup, serviceName, sourceConnectionJson, targetConnectionJson);
    }

    /**
     * Delete a migration Task.
     *
     * Syntax:
     * ```
     * az dms project task delete --name
     *                            --project-name
     *                            --resource-group
     *                            --service-name
     *                            [--delete-running-tasks]
     *                            [--subscription]
     *                            [--yes]
     * ```
     *
     * @param {string} name The name of the Task.
     * @param {string} projectName The name of the Project.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the Service.
     */
    az_dms_project_task_delete(name: string, projectName: string, resourceGroup: string, serviceName: string): az_dms_project_task_delete_command_builder {
        return new az_dms_project_task_delete_command_builder(this, name, projectName, resourceGroup, serviceName);
    }

    /**
     * List the Tasks within a Project. Some tasks may have a status of Unknown, which indicates that an error occurred while querying the status of that task.
     *
     * Syntax:
     * ```
     * az dms project task list --project-name
     *                          --resource-group
     *                          --service-name
     *                          [--query-examples]
     *                          [--subscription]
     *                          [--task-type]
     * ```
     *
     * @param {string} projectName The name of the Project.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the Service.
     */
    az_dms_project_task_list(projectName: string, resourceGroup: string, serviceName: string): az_dms_project_task_list_command_builder {
        return new az_dms_project_task_list_command_builder(this, projectName, resourceGroup, serviceName);
    }

    /**
     * Show the details of a migration Task. Use the "--expand" to get more details.
     *
     * Syntax:
     * ```
     * az dms project task show --name
     *                          --project-name
     *                          --resource-group
     *                          --service-name
     *                          [--expand]
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} name The name of the Task.
     * @param {string} projectName The name of the Project.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the Service.
     */
    az_dms_project_task_show(name: string, projectName: string, resourceGroup: string, serviceName: string): az_dms_project_task_show_command_builder {
        return new az_dms_project_task_show_command_builder(this, name, projectName, resourceGroup, serviceName);
    }
}

/** Manage Projects for an instance of the Data Migration Service. */
export class az_dms_project implements ICommandParent<any> {
    commandPath = "az dms project";

    /**
     * Check if a given Project name is available within a given instance of DMS as well as the name's validity.
     *
     * Syntax:
     * ```
     * az dms project check-name --name
     *                           --resource-group
     *                           --service-name
     *                           [--subscription]
     * ```
     *
     * @param {string} name The Project name to check.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the Service.
     */
    az_dms_project_check_name(name: string, resourceGroup: string, serviceName: string): az_dms_project_check_name_command_builder {
        return new az_dms_project_check_name_command_builder(this, name, resourceGroup, serviceName);
    }

    /**
     * Create a migration Project which can contain multiple Tasks.
     *
     * Syntax:
     * ```
     * az dms project create --location
     *                       --name
     *                       --resource-group
     *                       --service-name
     *                       --source-platform
     *                       --target-platform
     *                       [--subscription]
     *                       [--tags]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name The name of the Project.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the Service.
     * @param {string} sourcePlatform The type of server for the source database. The supported types are: SQL.
     * @param {string} targetPlatform The type of service for the target database. The supported types are: SQLDB.
     */
    az_dms_project_create(location: string, name: string, resourceGroup: string, serviceName: string, sourcePlatform: string, targetPlatform: string): az_dms_project_create_command_builder {
        return new az_dms_project_create_command_builder(this, location, name, resourceGroup, serviceName, sourcePlatform, targetPlatform);
    }

    /**
     * Delete a Project.
     *
     * Syntax:
     * ```
     * az dms project delete --name
     *                       --resource-group
     *                       --service-name
     *                       [--delete-running-tasks]
     *                       [--subscription]
     *                       [--yes]
     * ```
     *
     * @param {string} name The name of the Project.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the Service.
     */
    az_dms_project_delete(name: string, resourceGroup: string, serviceName: string): az_dms_project_delete_command_builder {
        return new az_dms_project_delete_command_builder(this, name, resourceGroup, serviceName);
    }

    /**
     * List the Projects within an instance of DMS.
     *
     * Syntax:
     * ```
     * az dms project list --resource-group
     *                     --service-name
     *                     [--query-examples]
     *                     [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the Service.
     */
    az_dms_project_list(resourceGroup: string, serviceName: string): az_dms_project_list_command_builder {
        return new az_dms_project_list_command_builder(this, resourceGroup, serviceName);
    }

    /**
     * Show the details of a migration Project.
     *
     * Syntax:
     * ```
     * az dms project show --name
     *                     --resource-group
     *                     --service-name
     *                     [--query-examples]
     *                     [--subscription]
     * ```
     *
     * @param {string} name The name of the Project.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the Service.
     */
    az_dms_project_show(name: string, resourceGroup: string, serviceName: string): az_dms_project_show_command_builder {
        return new az_dms_project_show_command_builder(this, name, resourceGroup, serviceName);
    }
}

/** Manage Azure Data Migration Service (DMS) instances. */
export class az_dms implements ICommandParent<any> {
    commandPath = "az dms";

    /**
     * Check if a given DMS instance name is available in a given region as well as the name's validity.
     *
     * Syntax:
     * ```
     * az dms check-name --location
     *                   --name
     *                   [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name The Service name to check.
     */
    az_dms_check_name(location: string, name: string): az_dms_check_name_command_builder {
        return new az_dms_check_name_command_builder(this, location, name);
    }

    /**
     * Perform a health check and return the status of the service and virtual machine size.
     *
     * Syntax:
     * ```
     * az dms check-status --name
     *                     --resource-group
     *                     [--subscription]
     * ```
     *
     * @param {string} name The name of the Service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_dms_check_status(name: string, resourceGroup: string): az_dms_check_status_command_builder {
        return new az_dms_check_status_command_builder(this, name, resourceGroup);
    }

    /**
     * Create an instance of the Data Migration Service.
     *
     * Syntax:
     * ```
     * az dms create --location
     *               --name
     *               --resource-group
     *               --sku-name
     *               --subnet
     *               [--no-wait]
     *               [--subscription]
     *               [--tags]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name The name of the Service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} skuName The name of the CPU SKU on which the service's Virtual Machine will run. Check the name and the availability of SKUs in your area with "az dms list-skus".
     * @param {string} subnet The Resource ID of the VNet's Subnet you will use to connect the source and target DBs. Use "az network vnet subnet show -h" for help to get your subnet's ID.
     */
    az_dms_create(location: string, name: string, resourceGroup: string, skuName: string, subnet: string): az_dms_create_command_builder {
        return new az_dms_create_command_builder(this, location, name, resourceGroup, skuName, subnet);
    }

    /**
     * Delete an instance of the Data Migration Service.
     *
     * Syntax:
     * ```
     * az dms delete --name
     *               --resource-group
     *               [--delete-running-tasks]
     *               [--no-wait]
     *               [--subscription]
     *               [--yes]
     * ```
     *
     * @param {string} name The name of the Service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_dms_delete(name: string, resourceGroup: string): az_dms_delete_command_builder {
        return new az_dms_delete_command_builder(this, name, resourceGroup);
    }

    /**
     * List the DMS instances within your currently configured subscription (to set this use "az account set"). If provided, only show the instances within a given resource group.
     *
     * Syntax:
     * ```
     * az dms list [--query-examples]
     *             [--resource-group]
     *             [--subscription]
     * ```
     */
    az_dms_list(): az_dms_list_command_builder {
        return new az_dms_list_command_builder(this);
    }

    /**
     * List the SKUs that are supported by the Data Migration Service.
     *
     * Syntax:
     * ```
     * az dms list-skus [--subscription]
     * ```
     */
    az_dms_list_skus(): az_dms_list_skus_command_builder {
        return new az_dms_list_skus_command_builder(this);
    }

    /**
     * Show the details for an instance of the Data Migration Service.
     *
     * Syntax:
     * ```
     * az dms show --name
     *             --resource-group
     *             [--query-examples]
     *             [--subscription]
     * ```
     *
     * @param {string} name The name of the Service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_dms_show(name: string, resourceGroup: string): az_dms_show_command_builder {
        return new az_dms_show_command_builder(this, name, resourceGroup);
    }

    /**
     * Start an instance of the Data Migration Service. It can then be used to run data migrations.
     *
     * Syntax:
     * ```
     * az dms start --name
     *              --resource-group
     *              [--no-wait]
     *              [--subscription]
     * ```
     *
     * @param {string} name The name of the Service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_dms_start(name: string, resourceGroup: string): az_dms_start_command_builder {
        return new az_dms_start_command_builder(this, name, resourceGroup);
    }

    /**
     * Stop an instance of the Data Migration Service. While stopped, it can't be used to run data migrations and the owner won't be billed.
     *
     * Syntax:
     * ```
     * az dms stop --name
     *             --resource-group
     *             [--no-wait]
     *             [--subscription]
     * ```
     *
     * @param {string} name The name of the Service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_dms_stop(name: string, resourceGroup: string): az_dms_stop_command_builder {
        return new az_dms_stop_command_builder(this, name, resourceGroup);
    }

    /**
     * Place the CLI in a waiting state until a condition of the DMS instance is met.
     *
     * Syntax:
     * ```
     * az dms wait --name
     *             --resource-group
     *             [--created]
     *             [--custom]
     *             [--deleted]
     *             [--exists]
     *             [--interval]
     *             [--subscription]
     *             [--timeout]
     *             [--updated]
     * ```
     *
     * @param {string} name The name of the Service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_dms_wait(name: string, resourceGroup: string): az_dms_wait_command_builder {
        return new az_dms_wait_command_builder(this, name, resourceGroup);
    }
}

/**
 * Cancel a Task if it's currently queued or running.
 *
 * Syntax:
 * ```
 * az dms project task cancel --name
 *                            --project-name
 *                            --resource-group
 *                            --service-name
 *                            [--subscription]
 * ```
 *
 * @param {string} name The name of the Task.
 * @param {string} projectName The name of the Project.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the Service.
 */
class az_dms_project_task_cancel_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, projectName: string, resourceGroup: string, serviceName: string) {
        super(commandParent);
        this.name(name)
        this.projectName(projectName)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** The name of the Task. */
    name(value: string): az_dms_project_task_cancel_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The name of the Project. */
    projectName(value: string): az_dms_project_task_cancel_command_builder {
        this.setFlag("--project-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dms_project_task_cancel_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the Service. */
    serviceName(value: string): az_dms_project_task_cancel_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dms_project_task_cancel_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Check if a given Task name is available within a given instance of DMS as well as the name's validity.
 *
 * Syntax:
 * ```
 * az dms project task check-name --name
 *                                --project-name
 *                                --resource-group
 *                                --service-name
 *                                [--subscription]
 * ```
 *
 * @param {string} name The Task name to check.
 * @param {string} projectName The name of the Project.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the Service.
 */
class az_dms_project_task_check_name_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, projectName: string, resourceGroup: string, serviceName: string) {
        super(commandParent);
        this.name(name)
        this.projectName(projectName)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** The Task name to check. */
    name(value: string): az_dms_project_task_check_name_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The name of the Project. */
    projectName(value: string): az_dms_project_task_check_name_command_builder {
        this.setFlag("--project-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dms_project_task_check_name_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the Service. */
    serviceName(value: string): az_dms_project_task_check_name_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dms_project_task_check_name_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create and start a migration Task.
 *
 * Syntax:
 * ```
 * az dms project task create --database-options-json
 *                            --name
 *                            --project-name
 *                            --resource-group
 *                            --service-name
 *                            --source-connection-json
 *                            --target-connection-json
 *                            [--enable-data-integrity-validation]
 *                            [--enable-query-analysis-validation]
 *                            [--enable-schema-validation]
 *                            [--subscription]
 * ```
 *
 * @param {string} databaseOptionsJson Database and table information. This can be either a JSON-formatted string or the location to a file containing the JSON object. See example below for the format.
 * @param {string} name The name of the Task.
 * @param {string} projectName The name of the Project.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the Service.
 * @param {string} sourceConnectionJson The connection information to the source server. This can be either a JSON-formatted string or the location to a file containing the JSON object. See example below for the format.
 * @param {string} targetConnectionJson The connection information to the target server. This can be either a JSON-formatted string or the location to a file containing the JSON object. See example below for the format.
 */
class az_dms_project_task_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, databaseOptionsJson: string, name: string, projectName: string, resourceGroup: string, serviceName: string, sourceConnectionJson: string, targetConnectionJson: string) {
        super(commandParent);
        this.databaseOptionsJson(databaseOptionsJson)
        this.name(name)
        this.projectName(projectName)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
        this.sourceConnectionJson(sourceConnectionJson)
        this.targetConnectionJson(targetConnectionJson)
    }

    /** Database and table information. This can be either a JSON-formatted string or the location to a file containing the JSON object. See example below for the format. */
    databaseOptionsJson(value: string): az_dms_project_task_create_command_builder {
        this.setFlag("--database-options-json", value);
        return this;
    }

    /** The name of the Task. */
    name(value: string): az_dms_project_task_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The name of the Project. */
    projectName(value: string): az_dms_project_task_create_command_builder {
        this.setFlag("--project-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dms_project_task_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the Service. */
    serviceName(value: string): az_dms_project_task_create_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** The connection information to the source server. This can be either a JSON-formatted string or the location to a file containing the JSON object. See example below for the format. */
    sourceConnectionJson(value: string): az_dms_project_task_create_command_builder {
        this.setFlag("--source-connection-json", value);
        return this;
    }

    /** The connection information to the target server. This can be either a JSON-formatted string or the location to a file containing the JSON object. See example below for the format. */
    targetConnectionJson(value: string): az_dms_project_task_create_command_builder {
        this.setFlag("--target-connection-json", value);
        return this;
    }

    /** Whether to perform a checksum based data integrity validation between source and target for the selected database and tables. */
    enableDataIntegrityValidation(value: string): az_dms_project_task_create_command_builder {
        this.setFlag("--enable-data-integrity-validation", value);
        return this;
    }

    /** Whether to perform a quick and intelligent query analysis by retrieving queries from the source database and executing them in the target. The result will have execution statistics for executions in source and target databases for the extracted queries. */
    enableQueryAnalysisValidation(value: string): az_dms_project_task_create_command_builder {
        this.setFlag("--enable-query-analysis-validation", value);
        return this;
    }

    /** Whether to compare the schema information between source and target. */
    enableSchemaValidation(value: string): az_dms_project_task_create_command_builder {
        this.setFlag("--enable-schema-validation", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dms_project_task_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete a migration Task.
 *
 * Syntax:
 * ```
 * az dms project task delete --name
 *                            --project-name
 *                            --resource-group
 *                            --service-name
 *                            [--delete-running-tasks]
 *                            [--subscription]
 *                            [--yes]
 * ```
 *
 * @param {string} name The name of the Task.
 * @param {string} projectName The name of the Project.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the Service.
 */
class az_dms_project_task_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, projectName: string, resourceGroup: string, serviceName: string) {
        super(commandParent);
        this.name(name)
        this.projectName(projectName)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** The name of the Task. */
    name(value: string): az_dms_project_task_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The name of the Project. */
    projectName(value: string): az_dms_project_task_delete_command_builder {
        this.setFlag("--project-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dms_project_task_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the Service. */
    serviceName(value: string): az_dms_project_task_delete_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** If the Task is currently running, cancel the Task before deleting the Project. */
    deleteRunningTasks(value: string): az_dms_project_task_delete_command_builder {
        this.setFlag("--delete-running-tasks", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dms_project_task_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_dms_project_task_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * List the Tasks within a Project. Some tasks may have a status of Unknown, which indicates that an error occurred while querying the status of that task.
 *
 * Syntax:
 * ```
 * az dms project task list --project-name
 *                          --resource-group
 *                          --service-name
 *                          [--query-examples]
 *                          [--subscription]
 *                          [--task-type]
 * ```
 *
 * @param {string} projectName The name of the Project.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the Service.
 */
class az_dms_project_task_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, projectName: string, resourceGroup: string, serviceName: string) {
        super(commandParent);
        this.projectName(projectName)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** The name of the Project. */
    projectName(value: string): az_dms_project_task_list_command_builder {
        this.setFlag("--project-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dms_project_task_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the Service. */
    serviceName(value: string): az_dms_project_task_list_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dms_project_task_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dms_project_task_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Filters the list by the type of task. For the list of possible types see "az dms check-status". */
    taskType(value: string): az_dms_project_task_list_command_builder {
        this.setFlag("--task-type", value);
        return this;
    }
}

/**
 * Show the details of a migration Task. Use the "--expand" to get more details.
 *
 * Syntax:
 * ```
 * az dms project task show --name
 *                          --project-name
 *                          --resource-group
 *                          --service-name
 *                          [--expand]
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} name The name of the Task.
 * @param {string} projectName The name of the Project.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the Service.
 */
class az_dms_project_task_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, projectName: string, resourceGroup: string, serviceName: string) {
        super(commandParent);
        this.name(name)
        this.projectName(projectName)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** The name of the Task. */
    name(value: string): az_dms_project_task_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The name of the Project. */
    projectName(value: string): az_dms_project_task_show_command_builder {
        this.setFlag("--project-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dms_project_task_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the Service. */
    serviceName(value: string): az_dms_project_task_show_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Expand the response to provide more details. Use with "command" to see more details of the Task. Use with "output" to see the results of the Task's migration. */
    expand(value: string): az_dms_project_task_show_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dms_project_task_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dms_project_task_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Check if a given Project name is available within a given instance of DMS as well as the name's validity.
 *
 * Syntax:
 * ```
 * az dms project check-name --name
 *                           --resource-group
 *                           --service-name
 *                           [--subscription]
 * ```
 *
 * @param {string} name The Project name to check.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the Service.
 */
class az_dms_project_check_name_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string, serviceName: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** The Project name to check. */
    name(value: string): az_dms_project_check_name_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dms_project_check_name_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the Service. */
    serviceName(value: string): az_dms_project_check_name_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dms_project_check_name_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create a migration Project which can contain multiple Tasks.
 *
 * Syntax:
 * ```
 * az dms project create --location
 *                       --name
 *                       --resource-group
 *                       --service-name
 *                       --source-platform
 *                       --target-platform
 *                       [--subscription]
 *                       [--tags]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name The name of the Project.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the Service.
 * @param {string} sourcePlatform The type of server for the source database. The supported types are: SQL.
 * @param {string} targetPlatform The type of service for the target database. The supported types are: SQLDB.
 */
class az_dms_project_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, location: string, name: string, resourceGroup: string, serviceName: string, sourcePlatform: string, targetPlatform: string) {
        super(commandParent);
        this.location(location)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
        this.sourcePlatform(sourcePlatform)
        this.targetPlatform(targetPlatform)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_dms_project_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The name of the Project. */
    name(value: string): az_dms_project_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dms_project_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the Service. */
    serviceName(value: string): az_dms_project_create_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** The type of server for the source database. The supported types are: SQL. */
    sourcePlatform(value: string): az_dms_project_create_command_builder {
        this.setFlag("--source-platform", value);
        return this;
    }

    /** The type of service for the target database. The supported types are: SQLDB. */
    targetPlatform(value: string): az_dms_project_create_command_builder {
        this.setFlag("--target-platform", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dms_project_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** A space-delimited list of tags in "tag1[=value1]" format. */
    tags(value: string): az_dms_project_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

/**
 * Delete a Project.
 *
 * Syntax:
 * ```
 * az dms project delete --name
 *                       --resource-group
 *                       --service-name
 *                       [--delete-running-tasks]
 *                       [--subscription]
 *                       [--yes]
 * ```
 *
 * @param {string} name The name of the Project.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the Service.
 */
class az_dms_project_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string, serviceName: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** The name of the Project. */
    name(value: string): az_dms_project_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dms_project_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the Service. */
    serviceName(value: string): az_dms_project_delete_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Cancel any running tasks before deleting the Project. */
    deleteRunningTasks(value: string): az_dms_project_delete_command_builder {
        this.setFlag("--delete-running-tasks", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dms_project_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_dms_project_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * List the Projects within an instance of DMS.
 *
 * Syntax:
 * ```
 * az dms project list --resource-group
 *                     --service-name
 *                     [--query-examples]
 *                     [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the Service.
 */
class az_dms_project_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string, serviceName: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dms_project_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the Service. */
    serviceName(value: string): az_dms_project_list_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dms_project_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dms_project_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show the details of a migration Project.
 *
 * Syntax:
 * ```
 * az dms project show --name
 *                     --resource-group
 *                     --service-name
 *                     [--query-examples]
 *                     [--subscription]
 * ```
 *
 * @param {string} name The name of the Project.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the Service.
 */
class az_dms_project_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string, serviceName: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** The name of the Project. */
    name(value: string): az_dms_project_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dms_project_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the Service. */
    serviceName(value: string): az_dms_project_show_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dms_project_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dms_project_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Check if a given DMS instance name is available in a given region as well as the name's validity.
 *
 * Syntax:
 * ```
 * az dms check-name --location
 *                   --name
 *                   [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name The Service name to check.
 */
class az_dms_check_name_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, location: string, name: string) {
        super(commandParent);
        this.location(location)
        this.name(name)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_dms_check_name_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The Service name to check. */
    name(value: string): az_dms_check_name_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dms_check_name_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Perform a health check and return the status of the service and virtual machine size.
 *
 * Syntax:
 * ```
 * az dms check-status --name
 *                     --resource-group
 *                     [--subscription]
 * ```
 *
 * @param {string} name The name of the Service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_dms_check_status_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Service. */
    name(value: string): az_dms_check_status_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dms_check_status_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dms_check_status_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create an instance of the Data Migration Service.
 *
 * Syntax:
 * ```
 * az dms create --location
 *               --name
 *               --resource-group
 *               --sku-name
 *               --subnet
 *               [--no-wait]
 *               [--subscription]
 *               [--tags]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name The name of the Service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} skuName The name of the CPU SKU on which the service's Virtual Machine will run. Check the name and the availability of SKUs in your area with "az dms list-skus".
 * @param {string} subnet The Resource ID of the VNet's Subnet you will use to connect the source and target DBs. Use "az network vnet subnet show -h" for help to get your subnet's ID.
 */
class az_dms_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, location: string, name: string, resourceGroup: string, skuName: string, subnet: string) {
        super(commandParent);
        this.location(location)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.skuName(skuName)
        this.subnet(subnet)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_dms_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The name of the Service. */
    name(value: string): az_dms_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dms_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the CPU SKU on which the service's Virtual Machine will run. Check the name and the availability of SKUs in your area with "az dms list-skus". */
    skuName(value: string): az_dms_create_command_builder {
        this.setFlag("--sku-name", value);
        return this;
    }

    /** The Resource ID of the VNet's Subnet you will use to connect the source and target DBs. Use "az network vnet subnet show -h" for help to get your subnet's ID. */
    subnet(value: string): az_dms_create_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_dms_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dms_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** A space-delimited list of tags in "tag1[=value1]" format. */
    tags(value: string): az_dms_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

/**
 * Delete an instance of the Data Migration Service.
 *
 * Syntax:
 * ```
 * az dms delete --name
 *               --resource-group
 *               [--delete-running-tasks]
 *               [--no-wait]
 *               [--subscription]
 *               [--yes]
 * ```
 *
 * @param {string} name The name of the Service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_dms_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Service. */
    name(value: string): az_dms_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dms_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Cancel any running tasks before deleting the service. */
    deleteRunningTasks(value: string): az_dms_delete_command_builder {
        this.setFlag("--delete-running-tasks", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_dms_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dms_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_dms_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * List the DMS instances within your currently configured subscription (to set this use "az account set"). If provided, only show the instances within a given resource group.
 *
 * Syntax:
 * ```
 * az dms list [--query-examples]
 *             [--resource-group]
 *             [--subscription]
 * ```
 */
class az_dms_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dms_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dms_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dms_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the SKUs that are supported by the Data Migration Service.
 *
 * Syntax:
 * ```
 * az dms list-skus [--subscription]
 * ```
 */
class az_dms_list_skus_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dms_list_skus_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show the details for an instance of the Data Migration Service.
 *
 * Syntax:
 * ```
 * az dms show --name
 *             --resource-group
 *             [--query-examples]
 *             [--subscription]
 * ```
 *
 * @param {string} name The name of the Service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_dms_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Service. */
    name(value: string): az_dms_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dms_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dms_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dms_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Start an instance of the Data Migration Service. It can then be used to run data migrations.
 *
 * Syntax:
 * ```
 * az dms start --name
 *              --resource-group
 *              [--no-wait]
 *              [--subscription]
 * ```
 *
 * @param {string} name The name of the Service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_dms_start_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Service. */
    name(value: string): az_dms_start_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dms_start_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_dms_start_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dms_start_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Stop an instance of the Data Migration Service. While stopped, it can't be used to run data migrations and the owner won't be billed.
 *
 * Syntax:
 * ```
 * az dms stop --name
 *             --resource-group
 *             [--no-wait]
 *             [--subscription]
 * ```
 *
 * @param {string} name The name of the Service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_dms_stop_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Service. */
    name(value: string): az_dms_stop_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dms_stop_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_dms_stop_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dms_stop_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Place the CLI in a waiting state until a condition of the DMS instance is met.
 *
 * Syntax:
 * ```
 * az dms wait --name
 *             --resource-group
 *             [--created]
 *             [--custom]
 *             [--deleted]
 *             [--exists]
 *             [--interval]
 *             [--subscription]
 *             [--timeout]
 *             [--updated]
 * ```
 *
 * @param {string} name The name of the Service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_dms_wait_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Service. */
    name(value: string): az_dms_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dms_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_dms_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_dms_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_dms_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_dms_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_dms_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dms_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_dms_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_dms_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
}
