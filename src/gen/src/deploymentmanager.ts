import { CommandBuilder, ICommandParent } from '../base';

/** Manage artifact sources. */
export class az_deploymentmanager_artifact_source implements ICommandParent<any> {
    commandPath = "az deploymentmanager artifact-source";

    /**
     * Creates an artifact source.
     *
     * Syntax:
     * ```
     * az deploymentmanager artifact-source create --artifact-source-name
     *                                             --location
     *                                             --resource-group
     *                                             --sas-uri
     *                                             [--artifact-root]
     *                                             [--subscription]
     *                                             [--tags]
     * ```
     *
     * @param {string} artifactSourceName The name of the artifact source.
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} sasUri The SAS Uri to the Azure Storage container where the artifacts are stored.
     */
    az_deploymentmanager_artifact_source_create(artifactSourceName: string, location: string, resourceGroup: string, sasUri: string): az_deploymentmanager_artifact_source_create_command_builder {
        return new az_deploymentmanager_artifact_source_create_command_builder(this, artifactSourceName, location, resourceGroup, sasUri);
    }

    /**
     * Deletes an artifact source.
     *
     * Syntax:
     * ```
     * az deploymentmanager artifact-source delete --artifact-source-name
     *                                             --resource-group
     *                                             [--subscription]
     *                                             [--yes]
     * ```
     *
     * @param {string} artifactSourceName The name of the artifact source.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_deploymentmanager_artifact_source_delete(artifactSourceName: string, resourceGroup: string): az_deploymentmanager_artifact_source_delete_command_builder {
        return new az_deploymentmanager_artifact_source_delete_command_builder(this, artifactSourceName, resourceGroup);
    }

    /**
     * List all artifact sources in a resource group.
     *
     * Syntax:
     * ```
     * az deploymentmanager artifact-source list --resource-group
     *                                           [--query-examples]
     *                                           [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_deploymentmanager_artifact_source_list(resourceGroup: string): az_deploymentmanager_artifact_source_list_command_builder {
        return new az_deploymentmanager_artifact_source_list_command_builder(this, resourceGroup);
    }

    /**
     * Get the details of an artifact source.
     *
     * Syntax:
     * ```
     * az deploymentmanager artifact-source show --artifact-source-name
     *                                           --resource-group
     *                                           [--query-examples]
     *                                           [--subscription]
     * ```
     *
     * @param {string} artifactSourceName The name of the artifact source.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_deploymentmanager_artifact_source_show(artifactSourceName: string, resourceGroup: string): az_deploymentmanager_artifact_source_show_command_builder {
        return new az_deploymentmanager_artifact_source_show_command_builder(this, artifactSourceName, resourceGroup);
    }

    /**
     * Updates an artifact source.
     *
     * Syntax:
     * ```
     * az deploymentmanager artifact-source update --artifact-source-name
     *                                             --resource-group
     *                                             [--add]
     *                                             [--artifact-root]
     *                                             [--force-string]
     *                                             [--remove]
     *                                             [--sas-uri]
     *                                             [--set]
     *                                             [--subscription]
     *                                             [--tags]
     * ```
     *
     * @param {string} artifactSourceName The name of the artifact source.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_deploymentmanager_artifact_source_update(artifactSourceName: string, resourceGroup: string): az_deploymentmanager_artifact_source_update_command_builder {
        return new az_deploymentmanager_artifact_source_update_command_builder(this, artifactSourceName, resourceGroup);
    }
}

/** Manage the rollouts. */
export class az_deploymentmanager_rollout implements ICommandParent<any> {
    commandPath = "az deploymentmanager rollout";

    /**
     * Deletes a rollout resource.
     *
     * Syntax:
     * ```
     * az deploymentmanager rollout delete --name
     *                                     --resource-group
     *                                     [--subscription]
     * ```
     *
     * @param {string} rolloutName The name of the rollout.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_deploymentmanager_rollout_delete(rolloutName: string, resourceGroup: string): az_deploymentmanager_rollout_delete_command_builder {
        return new az_deploymentmanager_rollout_delete_command_builder(this, rolloutName, resourceGroup);
    }

    /**
     * List all rollouts in a resource group.
     *
     * Syntax:
     * ```
     * az deploymentmanager rollout list --resource-group
     *                                   [--query-examples]
     *                                   [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_deploymentmanager_rollout_list(resourceGroup: string): az_deploymentmanager_rollout_list_command_builder {
        return new az_deploymentmanager_rollout_list_command_builder(this, resourceGroup);
    }

    /**
     * Restarts the rollout.
     *
     * Syntax:
     * ```
     * az deploymentmanager rollout restart --name
     *                                      --resource-group
     *                                      [--skip-succeeded]
     *                                      [--subscription]
     *                                      [--yes]
     * ```
     *
     * @param {string} rolloutName The name of the rollout.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_deploymentmanager_rollout_restart(rolloutName: string, resourceGroup: string): az_deploymentmanager_rollout_restart_command_builder {
        return new az_deploymentmanager_rollout_restart_command_builder(this, rolloutName, resourceGroup);
    }

    /**
     * Gets the rollout.
     *
     * Syntax:
     * ```
     * az deploymentmanager rollout show --name
     *                                   --resource-group
     *                                   [--query-examples]
     *                                   [--retry-attempt]
     *                                   [--subscription]
     * ```
     *
     * @param {string} rolloutName The name of the rollout.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_deploymentmanager_rollout_show(rolloutName: string, resourceGroup: string): az_deploymentmanager_rollout_show_command_builder {
        return new az_deploymentmanager_rollout_show_command_builder(this, rolloutName, resourceGroup);
    }

    /**
     * Stop the rollout.
     *
     * Syntax:
     * ```
     * az deploymentmanager rollout stop --name
     *                                   --resource-group
     *                                   [--subscription]
     *                                   [--yes]
     * ```
     *
     * @param {string} rolloutName The name of the rollout.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_deploymentmanager_rollout_stop(rolloutName: string, resourceGroup: string): az_deploymentmanager_rollout_stop_command_builder {
        return new az_deploymentmanager_rollout_stop_command_builder(this, rolloutName, resourceGroup);
    }
}

/** Manage service topologies. */
export class az_deploymentmanager_service_topology implements ICommandParent<any> {
    commandPath = "az deploymentmanager service-topology";

    /**
     * Creates a service topology.
     *
     * Syntax:
     * ```
     * az deploymentmanager service-topology create --location
     *                                              --name
     *                                              --resource-group
     *                                              [--artifact-source]
     *                                              [--subscription]
     *                                              [--tags]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} serviceTopologyName The name of the service topology.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_deploymentmanager_service_topology_create(location: string, serviceTopologyName: string, resourceGroup: string): az_deploymentmanager_service_topology_create_command_builder {
        return new az_deploymentmanager_service_topology_create_command_builder(this, location, serviceTopologyName, resourceGroup);
    }

    /**
     * Deletes the service topology.
     *
     * Syntax:
     * ```
     * az deploymentmanager service-topology delete --name
     *                                              --resource-group
     *                                              [--subscription]
     * ```
     *
     * @param {string} serviceTopologyName The name of the service topology.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_deploymentmanager_service_topology_delete(serviceTopologyName: string, resourceGroup: string): az_deploymentmanager_service_topology_delete_command_builder {
        return new az_deploymentmanager_service_topology_delete_command_builder(this, serviceTopologyName, resourceGroup);
    }

    /**
     * List all service topologies in a resource group.
     *
     * Syntax:
     * ```
     * az deploymentmanager service-topology list --resource-group
     *                                            [--query-examples]
     *                                            [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_deploymentmanager_service_topology_list(resourceGroup: string): az_deploymentmanager_service_topology_list_command_builder {
        return new az_deploymentmanager_service_topology_list_command_builder(this, resourceGroup);
    }

    /**
     * Get the details of a service topology.
     *
     * Syntax:
     * ```
     * az deploymentmanager service-topology show --name
     *                                            --resource-group
     *                                            [--query-examples]
     *                                            [--subscription]
     * ```
     *
     * @param {string} serviceTopologyName The name of the service topology.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_deploymentmanager_service_topology_show(serviceTopologyName: string, resourceGroup: string): az_deploymentmanager_service_topology_show_command_builder {
        return new az_deploymentmanager_service_topology_show_command_builder(this, serviceTopologyName, resourceGroup);
    }

    /**
     * Updates the service topology.
     *
     * Syntax:
     * ```
     * az deploymentmanager service-topology update --name
     *                                              --resource-group
     *                                              [--add]
     *                                              [--artifact-source]
     *                                              [--force-string]
     *                                              [--remove]
     *                                              [--set]
     *                                              [--subscription]
     *                                              [--tags]
     * ```
     *
     * @param {string} serviceTopologyName The name of the service topology.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_deploymentmanager_service_topology_update(serviceTopologyName: string, resourceGroup: string): az_deploymentmanager_service_topology_update_command_builder {
        return new az_deploymentmanager_service_topology_update_command_builder(this, serviceTopologyName, resourceGroup);
    }
}

/** Manage the service units. */
export class az_deploymentmanager_service_unit implements ICommandParent<any> {
    commandPath = "az deploymentmanager service-unit";

    /**
     * Creates a service unit under the specified service and service topology.
     *
     * Syntax:
     * ```
     * az deploymentmanager service-unit create --deployment-mode {Complete, Incremental}
     *                                          --name
     *                                          --parameters-path
     *                                          --resource-group
     *                                          --service-name
     *                                          --service-topology-name
     *                                          --target-resource-group
     *                                          --template-path
     *                                          [--location]
     *                                          [--subscription]
     *                                          [--tags]
     * ```
     *
     * @param {'Complete' | 'Incremental'} deploymentMode The type of depoyment mode to be used when deploying the service unit. Possible values: Incremental, Complete.
     * @param {string} serviceUnitName The name of the service unit.
     * @param {string} parametersPath The path to the ARM parameters file. Either the full SAS Uri or the relative path in the artifact source for this topology.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the service.
     * @param {string} serviceTopologyName The name of the service topology.
     * @param {string} targetResourceGroup The resource group where the resources in the service unit should be deployed to.
     * @param {string} templatePath The path to the ARM template file. Either the full SAS Uri or the relative path in the artifact source for this topology.
     */
    az_deploymentmanager_service_unit_create(deploymentMode: 'Complete' | 'Incremental', serviceUnitName: string, parametersPath: string, resourceGroup: string, serviceName: string, serviceTopologyName: string, targetResourceGroup: string, templatePath: string): az_deploymentmanager_service_unit_create_command_builder {
        return new az_deploymentmanager_service_unit_create_command_builder(this, deploymentMode, serviceUnitName, parametersPath, resourceGroup, serviceName, serviceTopologyName, targetResourceGroup, templatePath);
    }

    /**
     * Deletes the service unit.
     *
     * Syntax:
     * ```
     * az deploymentmanager service-unit delete --name
     *                                          --resource-group
     *                                          --service-name
     *                                          --service-topology-name
     *                                          [--subscription]
     * ```
     *
     * @param {string} serviceUnitName The name of the service unit.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the service.
     * @param {string} serviceTopologyName The name of the service topology.
     */
    az_deploymentmanager_service_unit_delete(serviceUnitName: string, resourceGroup: string, serviceName: string, serviceTopologyName: string): az_deploymentmanager_service_unit_delete_command_builder {
        return new az_deploymentmanager_service_unit_delete_command_builder(this, serviceUnitName, resourceGroup, serviceName, serviceTopologyName);
    }

    /**
     * List all service units in a service.
     *
     * Syntax:
     * ```
     * az deploymentmanager service-unit list --resource-group
     *                                        --service-name
     *                                        --service-topology-name
     *                                        [--query-examples]
     *                                        [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the service.
     * @param {string} serviceTopologyName The name of the service topology.
     */
    az_deploymentmanager_service_unit_list(resourceGroup: string, serviceName: string, serviceTopologyName: string): az_deploymentmanager_service_unit_list_command_builder {
        return new az_deploymentmanager_service_unit_list_command_builder(this, resourceGroup, serviceName, serviceTopologyName);
    }

    /**
     * Get the details of a service unit.
     *
     * Syntax:
     * ```
     * az deploymentmanager service-unit show --name
     *                                        --resource-group
     *                                        --service-name
     *                                        --service-topology-name
     *                                        [--query-examples]
     *                                        [--subscription]
     * ```
     *
     * @param {string} serviceUnitName The name of the service unit.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the service.
     * @param {string} serviceTopologyName The name of the service topology.
     */
    az_deploymentmanager_service_unit_show(serviceUnitName: string, resourceGroup: string, serviceName: string, serviceTopologyName: string): az_deploymentmanager_service_unit_show_command_builder {
        return new az_deploymentmanager_service_unit_show_command_builder(this, serviceUnitName, resourceGroup, serviceName, serviceTopologyName);
    }

    /**
     * Updates the service unit.
     *
     * Syntax:
     * ```
     * az deploymentmanager service-unit update --name
     *                                          --resource-group
     *                                          --service-name
     *                                          --service-topology-name
     *                                          [--add]
     *                                          [--deployment-mode {Complete, Incremental}]
     *                                          [--force-string]
     *                                          [--parameters-path]
     *                                          [--remove]
     *                                          [--set]
     *                                          [--subscription]
     *                                          [--tags]
     *                                          [--target-resource-group]
     *                                          [--template-path]
     * ```
     *
     * @param {string} serviceUnitName The name of the service unit.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the service.
     * @param {string} serviceTopologyName The name of the service topology.
     */
    az_deploymentmanager_service_unit_update(serviceUnitName: string, resourceGroup: string, serviceName: string, serviceTopologyName: string): az_deploymentmanager_service_unit_update_command_builder {
        return new az_deploymentmanager_service_unit_update_command_builder(this, serviceUnitName, resourceGroup, serviceName, serviceTopologyName);
    }
}

/** Manage the services in a service topology. */
export class az_deploymentmanager_service implements ICommandParent<any> {
    commandPath = "az deploymentmanager service";

    /**
     * Creates a service under the specified service topology.
     *
     * Syntax:
     * ```
     * az deploymentmanager service create --location
     *                                     --name
     *                                     --resource-group
     *                                     --service-topology-name
     *                                     --target-location
     *                                     --target-subscription-id
     *                                     [--subscription]
     *                                     [--tags]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} serviceName The name of the service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceTopologyName The name of the service topology.
     * @param {string} targetLocation The location where the resources in the service should be deployed to.
     * @param {string} targetSubscriptionId The subscription to which the resources in the service should be deployed to.
     */
    az_deploymentmanager_service_create(location: string, serviceName: string, resourceGroup: string, serviceTopologyName: string, targetLocation: string, targetSubscriptionId: string): az_deploymentmanager_service_create_command_builder {
        return new az_deploymentmanager_service_create_command_builder(this, location, serviceName, resourceGroup, serviceTopologyName, targetLocation, targetSubscriptionId);
    }

    /**
     * Deletes the service topology.
     *
     * Syntax:
     * ```
     * az deploymentmanager service delete --name
     *                                     --resource-group
     *                                     --service-topology-name
     *                                     [--subscription]
     * ```
     *
     * @param {string} serviceName The name of the service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceTopologyName The name of the service topology.
     */
    az_deploymentmanager_service_delete(serviceName: string, resourceGroup: string, serviceTopologyName: string): az_deploymentmanager_service_delete_command_builder {
        return new az_deploymentmanager_service_delete_command_builder(this, serviceName, resourceGroup, serviceTopologyName);
    }

    /**
     * List all services in a service topology.
     *
     * Syntax:
     * ```
     * az deploymentmanager service list --resource-group
     *                                   --service-topology-name
     *                                   [--query-examples]
     *                                   [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceTopologyName The name of the service topology.
     */
    az_deploymentmanager_service_list(resourceGroup: string, serviceTopologyName: string): az_deploymentmanager_service_list_command_builder {
        return new az_deploymentmanager_service_list_command_builder(this, resourceGroup, serviceTopologyName);
    }

    /**
     * Get the details of a service.
     *
     * Syntax:
     * ```
     * az deploymentmanager service show --name
     *                                   --resource-group
     *                                   --service-topology-name
     *                                   [--query-examples]
     *                                   [--subscription]
     * ```
     *
     * @param {string} serviceName The name of the service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceTopologyName The name of the service topology.
     */
    az_deploymentmanager_service_show(serviceName: string, resourceGroup: string, serviceTopologyName: string): az_deploymentmanager_service_show_command_builder {
        return new az_deploymentmanager_service_show_command_builder(this, serviceName, resourceGroup, serviceTopologyName);
    }

    /**
     * Updates the service.
     *
     * Syntax:
     * ```
     * az deploymentmanager service update --name
     *                                     --resource-group
     *                                     --service-topology-name
     *                                     [--add]
     *                                     [--force-string]
     *                                     [--remove]
     *                                     [--set]
     *                                     [--subscription]
     *                                     [--tags]
     *                                     [--target-location]
     *                                     [--target-subscription-id]
     * ```
     *
     * @param {string} serviceName The name of the service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceTopologyName The name of the service topology.
     */
    az_deploymentmanager_service_update(serviceName: string, resourceGroup: string, serviceTopologyName: string): az_deploymentmanager_service_update_command_builder {
        return new az_deploymentmanager_service_update_command_builder(this, serviceName, resourceGroup, serviceTopologyName);
    }
}

/** Manage the steps. */
export class az_deploymentmanager_step implements ICommandParent<any> {
    commandPath = "az deploymentmanager step";

    /**
     * Creates the step.
     *
     * Syntax:
     * ```
     * az deploymentmanager step create --resource-group
     *                                  [--duration]
     *                                  [--location]
     *                                  [--name]
     *                                  [--step]
     *                                  [--subscription]
     *                                  [--tags]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_deploymentmanager_step_create(resourceGroup: string): az_deploymentmanager_step_create_command_builder {
        return new az_deploymentmanager_step_create_command_builder(this, resourceGroup);
    }

    /**
     * Deletes the step.
     *
     * Syntax:
     * ```
     * az deploymentmanager step delete --name
     *                                  --resource-group
     *                                  [--subscription]
     * ```
     *
     * @param {string} stepName The name of the step.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_deploymentmanager_step_delete(stepName: string, resourceGroup: string): az_deploymentmanager_step_delete_command_builder {
        return new az_deploymentmanager_step_delete_command_builder(this, stepName, resourceGroup);
    }

    /**
     * List all steps in a resource group.
     *
     * Syntax:
     * ```
     * az deploymentmanager step list --resource-group
     *                                [--query-examples]
     *                                [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_deploymentmanager_step_list(resourceGroup: string): az_deploymentmanager_step_list_command_builder {
        return new az_deploymentmanager_step_list_command_builder(this, resourceGroup);
    }

    /**
     * Get the details of the step.
     *
     * Syntax:
     * ```
     * az deploymentmanager step show --name
     *                                --resource-group
     *                                [--query-examples]
     *                                [--subscription]
     * ```
     *
     * @param {string} stepName The name of the step.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_deploymentmanager_step_show(stepName: string, resourceGroup: string): az_deploymentmanager_step_show_command_builder {
        return new az_deploymentmanager_step_show_command_builder(this, stepName, resourceGroup);
    }

    /**
     * Updates the step.
     *
     * Syntax:
     * ```
     * az deploymentmanager step update --name
     *                                  --resource-group
     *                                  [--add]
     *                                  [--duration]
     *                                  [--force-string]
     *                                  [--remove]
     *                                  [--set]
     *                                  [--step]
     *                                  [--subscription]
     *                                  [--tags]
     * ```
     *
     * @param {string} stepName The name of the step.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_deploymentmanager_step_update(stepName: string, resourceGroup: string): az_deploymentmanager_step_update_command_builder {
        return new az_deploymentmanager_step_update_command_builder(this, stepName, resourceGroup);
    }
}

/** Create and manage rollouts for your service. */
export class az_deploymentmanager {
}

/**
 * Creates an artifact source.
 *
 * Syntax:
 * ```
 * az deploymentmanager artifact-source create --artifact-source-name
 *                                             --location
 *                                             --resource-group
 *                                             --sas-uri
 *                                             [--artifact-root]
 *                                             [--subscription]
 *                                             [--tags]
 * ```
 *
 * @param {string} artifactSourceName The name of the artifact source.
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} sasUri The SAS Uri to the Azure Storage container where the artifacts are stored.
 */
class az_deploymentmanager_artifact_source_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, artifactSourceName: string, location: string, resourceGroup: string, sasUri: string) {
        super(commandParent);
        this.artifactSourceName(artifactSourceName)
        this.location(location)
        this.resourceGroup(resourceGroup)
        this.sasUri(sasUri)
    }

    /** The name of the artifact source. */
    artifactSourceName(value: string): az_deploymentmanager_artifact_source_create_command_builder {
        this.setFlag("--artifact-source-name", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_deploymentmanager_artifact_source_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_artifact_source_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The SAS Uri to the Azure Storage container where the artifacts are stored. */
    sasUri(value: string): az_deploymentmanager_artifact_source_create_command_builder {
        this.setFlag("--sas-uri", value);
        return this;
    }

    /** The root folder under which the artifacts are to be found. This is the path relative to the Azure storage container provided in --sas-uri. */
    artifactRoot(value: string): az_deploymentmanager_artifact_source_create_command_builder {
        this.setFlag("--artifact-root", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_artifact_source_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_deploymentmanager_artifact_source_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

/**
 * Deletes an artifact source.
 *
 * Syntax:
 * ```
 * az deploymentmanager artifact-source delete --artifact-source-name
 *                                             --resource-group
 *                                             [--subscription]
 *                                             [--yes]
 * ```
 *
 * @param {string} artifactSourceName The name of the artifact source.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deploymentmanager_artifact_source_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, artifactSourceName: string, resourceGroup: string) {
        super(commandParent);
        this.artifactSourceName(artifactSourceName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the artifact source. */
    artifactSourceName(value: string): az_deploymentmanager_artifact_source_delete_command_builder {
        this.setFlag("--artifact-source-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_artifact_source_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_artifact_source_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_deploymentmanager_artifact_source_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * List all artifact sources in a resource group.
 *
 * Syntax:
 * ```
 * az deploymentmanager artifact-source list --resource-group
 *                                           [--query-examples]
 *                                           [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deploymentmanager_artifact_source_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_artifact_source_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deploymentmanager_artifact_source_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_artifact_source_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the details of an artifact source.
 *
 * Syntax:
 * ```
 * az deploymentmanager artifact-source show --artifact-source-name
 *                                           --resource-group
 *                                           [--query-examples]
 *                                           [--subscription]
 * ```
 *
 * @param {string} artifactSourceName The name of the artifact source.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deploymentmanager_artifact_source_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, artifactSourceName: string, resourceGroup: string) {
        super(commandParent);
        this.artifactSourceName(artifactSourceName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the artifact source. */
    artifactSourceName(value: string): az_deploymentmanager_artifact_source_show_command_builder {
        this.setFlag("--artifact-source-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_artifact_source_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deploymentmanager_artifact_source_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_artifact_source_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Updates an artifact source.
 *
 * Syntax:
 * ```
 * az deploymentmanager artifact-source update --artifact-source-name
 *                                             --resource-group
 *                                             [--add]
 *                                             [--artifact-root]
 *                                             [--force-string]
 *                                             [--remove]
 *                                             [--sas-uri]
 *                                             [--set]
 *                                             [--subscription]
 *                                             [--tags]
 * ```
 *
 * @param {string} artifactSourceName The name of the artifact source.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deploymentmanager_artifact_source_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, artifactSourceName: string, resourceGroup: string) {
        super(commandParent);
        this.artifactSourceName(artifactSourceName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the artifact source. */
    artifactSourceName(value: string): az_deploymentmanager_artifact_source_update_command_builder {
        this.setFlag("--artifact-source-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_artifact_source_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_deploymentmanager_artifact_source_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The root folder under which the artifacts are to be found. This is the path relative to the Azure storage container provided in --sas-uri. */
    artifactRoot(value: string): az_deploymentmanager_artifact_source_update_command_builder {
        this.setFlag("--artifact-root", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_deploymentmanager_artifact_source_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_deploymentmanager_artifact_source_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** The SAS Uri to the Azure Storage container where the artifacts are stored. */
    sasUri(value: string): az_deploymentmanager_artifact_source_update_command_builder {
        this.setFlag("--sas-uri", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_deploymentmanager_artifact_source_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_artifact_source_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_deploymentmanager_artifact_source_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

/**
 * Deletes a rollout resource.
 *
 * Syntax:
 * ```
 * az deploymentmanager rollout delete --name
 *                                     --resource-group
 *                                     [--subscription]
 * ```
 *
 * @param {string} rolloutName The name of the rollout.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deploymentmanager_rollout_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, rolloutName: string, resourceGroup: string) {
        super(commandParent);
        this.rolloutName(rolloutName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the rollout. */
    rolloutName(value: string): az_deploymentmanager_rollout_delete_command_builder {
        this.setFlag("--rollout-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_rollout_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_rollout_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List all rollouts in a resource group.
 *
 * Syntax:
 * ```
 * az deploymentmanager rollout list --resource-group
 *                                   [--query-examples]
 *                                   [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deploymentmanager_rollout_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_rollout_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deploymentmanager_rollout_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_rollout_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Restarts the rollout.
 *
 * Syntax:
 * ```
 * az deploymentmanager rollout restart --name
 *                                      --resource-group
 *                                      [--skip-succeeded]
 *                                      [--subscription]
 *                                      [--yes]
 * ```
 *
 * @param {string} rolloutName The name of the rollout.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deploymentmanager_rollout_restart_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, rolloutName: string, resourceGroup: string) {
        super(commandParent);
        this.rolloutName(rolloutName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the rollout. */
    rolloutName(value: string): az_deploymentmanager_rollout_restart_command_builder {
        this.setFlag("--rollout-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_rollout_restart_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Skips all the steps that have succeeded in the previous retries of this rollout. */
    skipSucceeded(value: string): az_deploymentmanager_rollout_restart_command_builder {
        this.setFlag("--skip-succeeded", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_rollout_restart_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_deploymentmanager_rollout_restart_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * Gets the rollout.
 *
 * Syntax:
 * ```
 * az deploymentmanager rollout show --name
 *                                   --resource-group
 *                                   [--query-examples]
 *                                   [--retry-attempt]
 *                                   [--subscription]
 * ```
 *
 * @param {string} rolloutName The name of the rollout.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deploymentmanager_rollout_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, rolloutName: string, resourceGroup: string) {
        super(commandParent);
        this.rolloutName(rolloutName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the rollout. */
    rolloutName(value: string): az_deploymentmanager_rollout_show_command_builder {
        this.setFlag("--rollout-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_rollout_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deploymentmanager_rollout_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Rollout retry attempt ordinal to get the result of. If not specified, result of the latest attempt will be returned. */
    retryAttempt(value: string): az_deploymentmanager_rollout_show_command_builder {
        this.setFlag("--retry-attempt", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_rollout_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Stop the rollout.
 *
 * Syntax:
 * ```
 * az deploymentmanager rollout stop --name
 *                                   --resource-group
 *                                   [--subscription]
 *                                   [--yes]
 * ```
 *
 * @param {string} rolloutName The name of the rollout.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deploymentmanager_rollout_stop_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, rolloutName: string, resourceGroup: string) {
        super(commandParent);
        this.rolloutName(rolloutName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the rollout. */
    rolloutName(value: string): az_deploymentmanager_rollout_stop_command_builder {
        this.setFlag("--rollout-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_rollout_stop_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_rollout_stop_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_deploymentmanager_rollout_stop_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * Creates a service topology.
 *
 * Syntax:
 * ```
 * az deploymentmanager service-topology create --location
 *                                              --name
 *                                              --resource-group
 *                                              [--artifact-source]
 *                                              [--subscription]
 *                                              [--tags]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} serviceTopologyName The name of the service topology.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deploymentmanager_service_topology_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, location: string, serviceTopologyName: string, resourceGroup: string) {
        super(commandParent);
        this.location(location)
        this.serviceTopologyName(serviceTopologyName)
        this.resourceGroup(resourceGroup)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_deploymentmanager_service_topology_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_topology_create_command_builder {
        this.setFlag("--service-topology-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_topology_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name or resource identifier of the artifact source. */
    artifactSource(value: string): az_deploymentmanager_service_topology_create_command_builder {
        this.setFlag("--artifact-source", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_topology_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_deploymentmanager_service_topology_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

/**
 * Deletes the service topology.
 *
 * Syntax:
 * ```
 * az deploymentmanager service-topology delete --name
 *                                              --resource-group
 *                                              [--subscription]
 * ```
 *
 * @param {string} serviceTopologyName The name of the service topology.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deploymentmanager_service_topology_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, serviceTopologyName: string, resourceGroup: string) {
        super(commandParent);
        this.serviceTopologyName(serviceTopologyName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_topology_delete_command_builder {
        this.setFlag("--service-topology-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_topology_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_topology_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List all service topologies in a resource group.
 *
 * Syntax:
 * ```
 * az deploymentmanager service-topology list --resource-group
 *                                            [--query-examples]
 *                                            [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deploymentmanager_service_topology_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_topology_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deploymentmanager_service_topology_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_topology_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the details of a service topology.
 *
 * Syntax:
 * ```
 * az deploymentmanager service-topology show --name
 *                                            --resource-group
 *                                            [--query-examples]
 *                                            [--subscription]
 * ```
 *
 * @param {string} serviceTopologyName The name of the service topology.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deploymentmanager_service_topology_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, serviceTopologyName: string, resourceGroup: string) {
        super(commandParent);
        this.serviceTopologyName(serviceTopologyName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_topology_show_command_builder {
        this.setFlag("--service-topology-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_topology_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deploymentmanager_service_topology_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_topology_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Updates the service topology.
 *
 * Syntax:
 * ```
 * az deploymentmanager service-topology update --name
 *                                              --resource-group
 *                                              [--add]
 *                                              [--artifact-source]
 *                                              [--force-string]
 *                                              [--remove]
 *                                              [--set]
 *                                              [--subscription]
 *                                              [--tags]
 * ```
 *
 * @param {string} serviceTopologyName The name of the service topology.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deploymentmanager_service_topology_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, serviceTopologyName: string, resourceGroup: string) {
        super(commandParent);
        this.serviceTopologyName(serviceTopologyName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_topology_update_command_builder {
        this.setFlag("--service-topology-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_topology_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_deploymentmanager_service_topology_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The name or resource identifier of the artifact source. */
    artifactSource(value: string): az_deploymentmanager_service_topology_update_command_builder {
        this.setFlag("--artifact-source", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_deploymentmanager_service_topology_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_deploymentmanager_service_topology_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_deploymentmanager_service_topology_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_topology_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_deploymentmanager_service_topology_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

/**
 * Creates a service unit under the specified service and service topology.
 *
 * Syntax:
 * ```
 * az deploymentmanager service-unit create --deployment-mode {Complete, Incremental}
 *                                          --name
 *                                          --parameters-path
 *                                          --resource-group
 *                                          --service-name
 *                                          --service-topology-name
 *                                          --target-resource-group
 *                                          --template-path
 *                                          [--location]
 *                                          [--subscription]
 *                                          [--tags]
 * ```
 *
 * @param {'Complete' | 'Incremental'} deploymentMode The type of depoyment mode to be used when deploying the service unit. Possible values: Incremental, Complete.
 * @param {string} serviceUnitName The name of the service unit.
 * @param {string} parametersPath The path to the ARM parameters file. Either the full SAS Uri or the relative path in the artifact source for this topology.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the service.
 * @param {string} serviceTopologyName The name of the service topology.
 * @param {string} targetResourceGroup The resource group where the resources in the service unit should be deployed to.
 * @param {string} templatePath The path to the ARM template file. Either the full SAS Uri or the relative path in the artifact source for this topology.
 */
class az_deploymentmanager_service_unit_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, deploymentMode: 'Complete' | 'Incremental', serviceUnitName: string, parametersPath: string, resourceGroup: string, serviceName: string, serviceTopologyName: string, targetResourceGroup: string, templatePath: string) {
        super(commandParent);
        this.deploymentMode(deploymentMode)
        this.serviceUnitName(serviceUnitName)
        this.parametersPath(parametersPath)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
        this.serviceTopologyName(serviceTopologyName)
        this.targetResourceGroup(targetResourceGroup)
        this.templatePath(templatePath)
    }

    /** The type of depoyment mode to be used when deploying the service unit. Possible values: Incremental, Complete. */
    deploymentMode(value: 'Complete' | 'Incremental'): az_deploymentmanager_service_unit_create_command_builder {
        this.setFlag("--deployment-mode", value);
        return this;
    }

    /** The name of the service unit. */
    serviceUnitName(value: string): az_deploymentmanager_service_unit_create_command_builder {
        this.setFlag("--service-unit-name", value);
        return this;
    }

    /** The path to the ARM parameters file. Either the full SAS Uri or the relative path in the artifact source for this topology. */
    parametersPath(value: string): az_deploymentmanager_service_unit_create_command_builder {
        this.setFlag("--parameters-path", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_unit_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the service. */
    serviceName(value: string): az_deploymentmanager_service_unit_create_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_unit_create_command_builder {
        this.setFlag("--service-topology-name", value);
        return this;
    }

    /** The resource group where the resources in the service unit should be deployed to. */
    targetResourceGroup(value: string): az_deploymentmanager_service_unit_create_command_builder {
        this.setFlag("--target-resource-group", value);
        return this;
    }

    /** The path to the ARM template file. Either the full SAS Uri or the relative path in the artifact source for this topology. */
    templatePath(value: string): az_deploymentmanager_service_unit_create_command_builder {
        this.setFlag("--template-path", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_deploymentmanager_service_unit_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_unit_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_deploymentmanager_service_unit_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

/**
 * Deletes the service unit.
 *
 * Syntax:
 * ```
 * az deploymentmanager service-unit delete --name
 *                                          --resource-group
 *                                          --service-name
 *                                          --service-topology-name
 *                                          [--subscription]
 * ```
 *
 * @param {string} serviceUnitName The name of the service unit.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the service.
 * @param {string} serviceTopologyName The name of the service topology.
 */
class az_deploymentmanager_service_unit_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, serviceUnitName: string, resourceGroup: string, serviceName: string, serviceTopologyName: string) {
        super(commandParent);
        this.serviceUnitName(serviceUnitName)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
        this.serviceTopologyName(serviceTopologyName)
    }

    /** The name of the service unit. */
    serviceUnitName(value: string): az_deploymentmanager_service_unit_delete_command_builder {
        this.setFlag("--service-unit-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_unit_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the service. */
    serviceName(value: string): az_deploymentmanager_service_unit_delete_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_unit_delete_command_builder {
        this.setFlag("--service-topology-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_unit_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List all service units in a service.
 *
 * Syntax:
 * ```
 * az deploymentmanager service-unit list --resource-group
 *                                        --service-name
 *                                        --service-topology-name
 *                                        [--query-examples]
 *                                        [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the service.
 * @param {string} serviceTopologyName The name of the service topology.
 */
class az_deploymentmanager_service_unit_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string, serviceName: string, serviceTopologyName: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
        this.serviceTopologyName(serviceTopologyName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_unit_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the service. */
    serviceName(value: string): az_deploymentmanager_service_unit_list_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_unit_list_command_builder {
        this.setFlag("--service-topology-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deploymentmanager_service_unit_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_unit_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the details of a service unit.
 *
 * Syntax:
 * ```
 * az deploymentmanager service-unit show --name
 *                                        --resource-group
 *                                        --service-name
 *                                        --service-topology-name
 *                                        [--query-examples]
 *                                        [--subscription]
 * ```
 *
 * @param {string} serviceUnitName The name of the service unit.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the service.
 * @param {string} serviceTopologyName The name of the service topology.
 */
class az_deploymentmanager_service_unit_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, serviceUnitName: string, resourceGroup: string, serviceName: string, serviceTopologyName: string) {
        super(commandParent);
        this.serviceUnitName(serviceUnitName)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
        this.serviceTopologyName(serviceTopologyName)
    }

    /** The name of the service unit. */
    serviceUnitName(value: string): az_deploymentmanager_service_unit_show_command_builder {
        this.setFlag("--service-unit-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_unit_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the service. */
    serviceName(value: string): az_deploymentmanager_service_unit_show_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_unit_show_command_builder {
        this.setFlag("--service-topology-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deploymentmanager_service_unit_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_unit_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Updates the service unit.
 *
 * Syntax:
 * ```
 * az deploymentmanager service-unit update --name
 *                                          --resource-group
 *                                          --service-name
 *                                          --service-topology-name
 *                                          [--add]
 *                                          [--deployment-mode {Complete, Incremental}]
 *                                          [--force-string]
 *                                          [--parameters-path]
 *                                          [--remove]
 *                                          [--set]
 *                                          [--subscription]
 *                                          [--tags]
 *                                          [--target-resource-group]
 *                                          [--template-path]
 * ```
 *
 * @param {string} serviceUnitName The name of the service unit.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the service.
 * @param {string} serviceTopologyName The name of the service topology.
 */
class az_deploymentmanager_service_unit_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, serviceUnitName: string, resourceGroup: string, serviceName: string, serviceTopologyName: string) {
        super(commandParent);
        this.serviceUnitName(serviceUnitName)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
        this.serviceTopologyName(serviceTopologyName)
    }

    /** The name of the service unit. */
    serviceUnitName(value: string): az_deploymentmanager_service_unit_update_command_builder {
        this.setFlag("--service-unit-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_unit_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the service. */
    serviceName(value: string): az_deploymentmanager_service_unit_update_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_unit_update_command_builder {
        this.setFlag("--service-topology-name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_deploymentmanager_service_unit_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The type of depoyment mode to be used when deploying the service unit. Possible values: Incremental, Complete. */
    deploymentMode(value: 'Complete' | 'Incremental'): az_deploymentmanager_service_unit_update_command_builder {
        this.setFlag("--deployment-mode", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_deploymentmanager_service_unit_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** The path to the ARM parameters file. Either the full SAS Uri or the relative path in the artifact source for this topology. */
    parametersPath(value: string): az_deploymentmanager_service_unit_update_command_builder {
        this.setFlag("--parameters-path", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_deploymentmanager_service_unit_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_deploymentmanager_service_unit_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_unit_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_deploymentmanager_service_unit_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The resource group where the resources in the service unit should be deployed to. */
    targetResourceGroup(value: string): az_deploymentmanager_service_unit_update_command_builder {
        this.setFlag("--target-resource-group", value);
        return this;
    }

    /** The path to the ARM template file. Either the full SAS Uri or the relative path in the artifact source for this topology. */
    templatePath(value: string): az_deploymentmanager_service_unit_update_command_builder {
        this.setFlag("--template-path", value);
        return this;
    }
}

/**
 * Creates a service under the specified service topology.
 *
 * Syntax:
 * ```
 * az deploymentmanager service create --location
 *                                     --name
 *                                     --resource-group
 *                                     --service-topology-name
 *                                     --target-location
 *                                     --target-subscription-id
 *                                     [--subscription]
 *                                     [--tags]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} serviceName The name of the service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceTopologyName The name of the service topology.
 * @param {string} targetLocation The location where the resources in the service should be deployed to.
 * @param {string} targetSubscriptionId The subscription to which the resources in the service should be deployed to.
 */
class az_deploymentmanager_service_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, location: string, serviceName: string, resourceGroup: string, serviceTopologyName: string, targetLocation: string, targetSubscriptionId: string) {
        super(commandParent);
        this.location(location)
        this.serviceName(serviceName)
        this.resourceGroup(resourceGroup)
        this.serviceTopologyName(serviceTopologyName)
        this.targetLocation(targetLocation)
        this.targetSubscriptionId(targetSubscriptionId)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_deploymentmanager_service_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The name of the service. */
    serviceName(value: string): az_deploymentmanager_service_create_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_create_command_builder {
        this.setFlag("--service-topology-name", value);
        return this;
    }

    /** The location where the resources in the service should be deployed to. */
    targetLocation(value: string): az_deploymentmanager_service_create_command_builder {
        this.setFlag("--target-location", value);
        return this;
    }

    /** The subscription to which the resources in the service should be deployed to. */
    targetSubscriptionId(value: string): az_deploymentmanager_service_create_command_builder {
        this.setFlag("--target-subscription-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_deploymentmanager_service_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

/**
 * Deletes the service topology.
 *
 * Syntax:
 * ```
 * az deploymentmanager service delete --name
 *                                     --resource-group
 *                                     --service-topology-name
 *                                     [--subscription]
 * ```
 *
 * @param {string} serviceName The name of the service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceTopologyName The name of the service topology.
 */
class az_deploymentmanager_service_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, serviceName: string, resourceGroup: string, serviceTopologyName: string) {
        super(commandParent);
        this.serviceName(serviceName)
        this.resourceGroup(resourceGroup)
        this.serviceTopologyName(serviceTopologyName)
    }

    /** The name of the service. */
    serviceName(value: string): az_deploymentmanager_service_delete_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_delete_command_builder {
        this.setFlag("--service-topology-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List all services in a service topology.
 *
 * Syntax:
 * ```
 * az deploymentmanager service list --resource-group
 *                                   --service-topology-name
 *                                   [--query-examples]
 *                                   [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceTopologyName The name of the service topology.
 */
class az_deploymentmanager_service_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string, serviceTopologyName: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.serviceTopologyName(serviceTopologyName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_list_command_builder {
        this.setFlag("--service-topology-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deploymentmanager_service_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the details of a service.
 *
 * Syntax:
 * ```
 * az deploymentmanager service show --name
 *                                   --resource-group
 *                                   --service-topology-name
 *                                   [--query-examples]
 *                                   [--subscription]
 * ```
 *
 * @param {string} serviceName The name of the service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceTopologyName The name of the service topology.
 */
class az_deploymentmanager_service_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, serviceName: string, resourceGroup: string, serviceTopologyName: string) {
        super(commandParent);
        this.serviceName(serviceName)
        this.resourceGroup(resourceGroup)
        this.serviceTopologyName(serviceTopologyName)
    }

    /** The name of the service. */
    serviceName(value: string): az_deploymentmanager_service_show_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_show_command_builder {
        this.setFlag("--service-topology-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deploymentmanager_service_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Updates the service.
 *
 * Syntax:
 * ```
 * az deploymentmanager service update --name
 *                                     --resource-group
 *                                     --service-topology-name
 *                                     [--add]
 *                                     [--force-string]
 *                                     [--remove]
 *                                     [--set]
 *                                     [--subscription]
 *                                     [--tags]
 *                                     [--target-location]
 *                                     [--target-subscription-id]
 * ```
 *
 * @param {string} serviceName The name of the service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceTopologyName The name of the service topology.
 */
class az_deploymentmanager_service_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, serviceName: string, resourceGroup: string, serviceTopologyName: string) {
        super(commandParent);
        this.serviceName(serviceName)
        this.resourceGroup(resourceGroup)
        this.serviceTopologyName(serviceTopologyName)
    }

    /** The name of the service. */
    serviceName(value: string): az_deploymentmanager_service_update_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_update_command_builder {
        this.setFlag("--service-topology-name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_deploymentmanager_service_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_deploymentmanager_service_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_deploymentmanager_service_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_deploymentmanager_service_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_deploymentmanager_service_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The location where the resources in the service should be deployed to. */
    targetLocation(value: string): az_deploymentmanager_service_update_command_builder {
        this.setFlag("--target-location", value);
        return this;
    }

    /** The subscription to which the resources in the service should be deployed to. */
    targetSubscriptionId(value: string): az_deploymentmanager_service_update_command_builder {
        this.setFlag("--target-subscription-id", value);
        return this;
    }
}

/**
 * Creates the step.
 *
 * Syntax:
 * ```
 * az deploymentmanager step create --resource-group
 *                                  [--duration]
 *                                  [--location]
 *                                  [--name]
 *                                  [--step]
 *                                  [--subscription]
 *                                  [--tags]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deploymentmanager_step_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_step_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The duration of the wait step in ISO 8601 format. */
    duration(value: string): az_deploymentmanager_step_create_command_builder {
        this.setFlag("--duration", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_deploymentmanager_step_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The name of the step. */
    stepName(value: string): az_deploymentmanager_step_create_command_builder {
        this.setFlag("--step-name", value);
        return this;
    }

    /** The step object, specify either the path to a json file or provide a json string that forms the step resource. The json is expected to be of the same format as the output of the relevant `az deploymentmanager step show` command. */
    step(value: string): az_deploymentmanager_step_create_command_builder {
        this.setFlag("--step", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_step_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_deploymentmanager_step_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

/**
 * Deletes the step.
 *
 * Syntax:
 * ```
 * az deploymentmanager step delete --name
 *                                  --resource-group
 *                                  [--subscription]
 * ```
 *
 * @param {string} stepName The name of the step.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deploymentmanager_step_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, stepName: string, resourceGroup: string) {
        super(commandParent);
        this.stepName(stepName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the step. */
    stepName(value: string): az_deploymentmanager_step_delete_command_builder {
        this.setFlag("--step-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_step_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_step_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List all steps in a resource group.
 *
 * Syntax:
 * ```
 * az deploymentmanager step list --resource-group
 *                                [--query-examples]
 *                                [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deploymentmanager_step_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_step_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deploymentmanager_step_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_step_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the details of the step.
 *
 * Syntax:
 * ```
 * az deploymentmanager step show --name
 *                                --resource-group
 *                                [--query-examples]
 *                                [--subscription]
 * ```
 *
 * @param {string} stepName The name of the step.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deploymentmanager_step_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, stepName: string, resourceGroup: string) {
        super(commandParent);
        this.stepName(stepName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the step. */
    stepName(value: string): az_deploymentmanager_step_show_command_builder {
        this.setFlag("--step-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_step_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deploymentmanager_step_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_step_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Updates the step.
 *
 * Syntax:
 * ```
 * az deploymentmanager step update --name
 *                                  --resource-group
 *                                  [--add]
 *                                  [--duration]
 *                                  [--force-string]
 *                                  [--remove]
 *                                  [--set]
 *                                  [--step]
 *                                  [--subscription]
 *                                  [--tags]
 * ```
 *
 * @param {string} stepName The name of the step.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deploymentmanager_step_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, stepName: string, resourceGroup: string) {
        super(commandParent);
        this.stepName(stepName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the step. */
    stepName(value: string): az_deploymentmanager_step_update_command_builder {
        this.setFlag("--step-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_step_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_deploymentmanager_step_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The duration of the wait step in ISO 8601 format. */
    duration(value: string): az_deploymentmanager_step_update_command_builder {
        this.setFlag("--duration", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_deploymentmanager_step_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_deploymentmanager_step_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_deploymentmanager_step_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** The step object, specify either the path to a json file or provide a json string that forms the step resource. The json is expected to be of the same format as the output of the relevant `az deploymentmanager step show` command. */
    step(value: string): az_deploymentmanager_step_update_command_builder {
        this.setFlag("--step", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_step_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_deploymentmanager_step_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}
