import { CommandBuilder } from '../base';
import { az_deploymentmanager_artifact_source_create_command_result } from './models/az_deploymentmanager_artifact_source_create_command_result';
import { az_deploymentmanager_artifact_source_delete_command_result } from './models/az_deploymentmanager_artifact_source_delete_command_result';
import { az_deploymentmanager_artifact_source_list_command_result } from './models/az_deploymentmanager_artifact_source_list_command_result';
import { az_deploymentmanager_artifact_source_show_command_result } from './models/az_deploymentmanager_artifact_source_show_command_result';
import { az_deploymentmanager_artifact_source_update_command_result } from './models/az_deploymentmanager_artifact_source_update_command_result';
import { az_deploymentmanager_rollout_delete_command_result } from './models/az_deploymentmanager_rollout_delete_command_result';
import { az_deploymentmanager_rollout_list_command_result } from './models/az_deploymentmanager_rollout_list_command_result';
import { az_deploymentmanager_rollout_restart_command_result } from './models/az_deploymentmanager_rollout_restart_command_result';
import { az_deploymentmanager_rollout_show_command_result } from './models/az_deploymentmanager_rollout_show_command_result';
import { az_deploymentmanager_rollout_stop_command_result } from './models/az_deploymentmanager_rollout_stop_command_result';
import { az_deploymentmanager_service_topology_create_command_result } from './models/az_deploymentmanager_service_topology_create_command_result';
import { az_deploymentmanager_service_topology_delete_command_result } from './models/az_deploymentmanager_service_topology_delete_command_result';
import { az_deploymentmanager_service_topology_list_command_result } from './models/az_deploymentmanager_service_topology_list_command_result';
import { az_deploymentmanager_service_topology_show_command_result } from './models/az_deploymentmanager_service_topology_show_command_result';
import { az_deploymentmanager_service_topology_update_command_result } from './models/az_deploymentmanager_service_topology_update_command_result';
import { az_deploymentmanager_service_unit_create_command_result } from './models/az_deploymentmanager_service_unit_create_command_result';
import { az_deploymentmanager_service_unit_delete_command_result } from './models/az_deploymentmanager_service_unit_delete_command_result';
import { az_deploymentmanager_service_unit_list_command_result } from './models/az_deploymentmanager_service_unit_list_command_result';
import { az_deploymentmanager_service_unit_show_command_result } from './models/az_deploymentmanager_service_unit_show_command_result';
import { az_deploymentmanager_service_unit_update_command_result } from './models/az_deploymentmanager_service_unit_update_command_result';
import { az_deploymentmanager_service_create_command_result } from './models/az_deploymentmanager_service_create_command_result';
import { az_deploymentmanager_service_delete_command_result } from './models/az_deploymentmanager_service_delete_command_result';
import { az_deploymentmanager_service_list_command_result } from './models/az_deploymentmanager_service_list_command_result';
import { az_deploymentmanager_service_show_command_result } from './models/az_deploymentmanager_service_show_command_result';
import { az_deploymentmanager_service_update_command_result } from './models/az_deploymentmanager_service_update_command_result';
import { az_deploymentmanager_step_create_command_result } from './models/az_deploymentmanager_step_create_command_result';
import { az_deploymentmanager_step_delete_command_result } from './models/az_deploymentmanager_step_delete_command_result';
import { az_deploymentmanager_step_list_command_result } from './models/az_deploymentmanager_step_list_command_result';
import { az_deploymentmanager_step_show_command_result } from './models/az_deploymentmanager_step_show_command_result';
import { az_deploymentmanager_step_update_command_result } from './models/az_deploymentmanager_step_update_command_result';
/** Manage artifact sources. */
export declare class az_deploymentmanager_artifact_source {
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
    static create(artifactSourceName: string, location: string, resourceGroup: string, sasUri: string): az_deploymentmanager_artifact_source_create_command_builder;
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
    static delete(artifactSourceName: string, resourceGroup: string): az_deploymentmanager_artifact_source_delete_command_builder;
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
    static list(resourceGroup: string): az_deploymentmanager_artifact_source_list_command_builder;
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
    static show(artifactSourceName: string, resourceGroup: string): az_deploymentmanager_artifact_source_show_command_builder;
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
    static update(artifactSourceName: string, resourceGroup: string): az_deploymentmanager_artifact_source_update_command_builder;
}
/** Manage the rollouts. */
export declare class az_deploymentmanager_rollout {
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
    static delete(rolloutName: string, resourceGroup: string): az_deploymentmanager_rollout_delete_command_builder;
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
    static list(resourceGroup: string): az_deploymentmanager_rollout_list_command_builder;
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
    static restart(rolloutName: string, resourceGroup: string): az_deploymentmanager_rollout_restart_command_builder;
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
    static show(rolloutName: string, resourceGroup: string): az_deploymentmanager_rollout_show_command_builder;
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
    static stop(rolloutName: string, resourceGroup: string): az_deploymentmanager_rollout_stop_command_builder;
}
/** Manage service topologies. */
export declare class az_deploymentmanager_service_topology {
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
    static create(location: string, serviceTopologyName: string, resourceGroup: string): az_deploymentmanager_service_topology_create_command_builder;
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
    static delete(serviceTopologyName: string, resourceGroup: string): az_deploymentmanager_service_topology_delete_command_builder;
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
    static list(resourceGroup: string): az_deploymentmanager_service_topology_list_command_builder;
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
    static show(serviceTopologyName: string, resourceGroup: string): az_deploymentmanager_service_topology_show_command_builder;
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
    static update(serviceTopologyName: string, resourceGroup: string): az_deploymentmanager_service_topology_update_command_builder;
}
/** Manage the service units. */
export declare class az_deploymentmanager_service_unit {
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
    static create(deploymentMode: 'Complete' | 'Incremental', serviceUnitName: string, parametersPath: string, resourceGroup: string, serviceName: string, serviceTopologyName: string, targetResourceGroup: string, templatePath: string): az_deploymentmanager_service_unit_create_command_builder;
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
    static delete(serviceUnitName: string, resourceGroup: string, serviceName: string, serviceTopologyName: string): az_deploymentmanager_service_unit_delete_command_builder;
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
    static list(resourceGroup: string, serviceName: string, serviceTopologyName: string): az_deploymentmanager_service_unit_list_command_builder;
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
    static show(serviceUnitName: string, resourceGroup: string, serviceName: string, serviceTopologyName: string): az_deploymentmanager_service_unit_show_command_builder;
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
    static update(serviceUnitName: string, resourceGroup: string, serviceName: string, serviceTopologyName: string): az_deploymentmanager_service_unit_update_command_builder;
}
/** Manage the services in a service topology. */
export declare class az_deploymentmanager_service {
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
    static create(location: string, serviceName: string, resourceGroup: string, serviceTopologyName: string, targetLocation: string, targetSubscriptionId: string): az_deploymentmanager_service_create_command_builder;
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
    static delete(serviceName: string, resourceGroup: string, serviceTopologyName: string): az_deploymentmanager_service_delete_command_builder;
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
    static list(resourceGroup: string, serviceTopologyName: string): az_deploymentmanager_service_list_command_builder;
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
    static show(serviceName: string, resourceGroup: string, serviceTopologyName: string): az_deploymentmanager_service_show_command_builder;
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
    static update(serviceName: string, resourceGroup: string, serviceTopologyName: string): az_deploymentmanager_service_update_command_builder;
}
/** Manage the steps. */
export declare class az_deploymentmanager_step {
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
    static create(resourceGroup: string): az_deploymentmanager_step_create_command_builder;
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
    static delete(stepName: string, resourceGroup: string): az_deploymentmanager_step_delete_command_builder;
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
    static list(resourceGroup: string): az_deploymentmanager_step_list_command_builder;
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
    static show(stepName: string, resourceGroup: string): az_deploymentmanager_step_show_command_builder;
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
    static update(stepName: string, resourceGroup: string): az_deploymentmanager_step_update_command_builder;
}
/** Create and manage rollouts for your service. */
export declare class az_deploymentmanager {
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
declare class az_deploymentmanager_artifact_source_create_command_builder extends CommandBuilder<az_deploymentmanager_artifact_source_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, artifactSourceName: string, location: string, resourceGroup: string, sasUri: string);
    /** The name of the artifact source. */
    artifactSourceName(value: string): az_deploymentmanager_artifact_source_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_deploymentmanager_artifact_source_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_artifact_source_create_command_builder;
    /** The SAS Uri to the Azure Storage container where the artifacts are stored. */
    sasUri(value: string): az_deploymentmanager_artifact_source_create_command_builder;
    /** The root folder under which the artifacts are to be found. This is the path relative to the Azure storage container provided in --sas-uri. */
    artifactRoot(value: string): az_deploymentmanager_artifact_source_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_artifact_source_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_deploymentmanager_artifact_source_create_command_builder;
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
declare class az_deploymentmanager_artifact_source_delete_command_builder extends CommandBuilder<az_deploymentmanager_artifact_source_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, artifactSourceName: string, resourceGroup: string);
    /** The name of the artifact source. */
    artifactSourceName(value: string): az_deploymentmanager_artifact_source_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_artifact_source_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_artifact_source_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_deploymentmanager_artifact_source_delete_command_builder;
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
declare class az_deploymentmanager_artifact_source_list_command_builder extends CommandBuilder<az_deploymentmanager_artifact_source_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_artifact_source_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deploymentmanager_artifact_source_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_artifact_source_list_command_builder;
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
declare class az_deploymentmanager_artifact_source_show_command_builder extends CommandBuilder<az_deploymentmanager_artifact_source_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, artifactSourceName: string, resourceGroup: string);
    /** The name of the artifact source. */
    artifactSourceName(value: string): az_deploymentmanager_artifact_source_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_artifact_source_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deploymentmanager_artifact_source_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_artifact_source_show_command_builder;
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
declare class az_deploymentmanager_artifact_source_update_command_builder extends CommandBuilder<az_deploymentmanager_artifact_source_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, artifactSourceName: string, resourceGroup: string);
    /** The name of the artifact source. */
    artifactSourceName(value: string): az_deploymentmanager_artifact_source_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_artifact_source_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_deploymentmanager_artifact_source_update_command_builder;
    /** The root folder under which the artifacts are to be found. This is the path relative to the Azure storage container provided in --sas-uri. */
    artifactRoot(value: string): az_deploymentmanager_artifact_source_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_deploymentmanager_artifact_source_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_deploymentmanager_artifact_source_update_command_builder;
    /** The SAS Uri to the Azure Storage container where the artifacts are stored. */
    sasUri(value: string): az_deploymentmanager_artifact_source_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_deploymentmanager_artifact_source_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_artifact_source_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_deploymentmanager_artifact_source_update_command_builder;
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
declare class az_deploymentmanager_rollout_delete_command_builder extends CommandBuilder<az_deploymentmanager_rollout_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, rolloutName: string, resourceGroup: string);
    /** The name of the rollout. */
    rolloutName(value: string): az_deploymentmanager_rollout_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_rollout_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_rollout_delete_command_builder;
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
declare class az_deploymentmanager_rollout_list_command_builder extends CommandBuilder<az_deploymentmanager_rollout_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_rollout_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deploymentmanager_rollout_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_rollout_list_command_builder;
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
declare class az_deploymentmanager_rollout_restart_command_builder extends CommandBuilder<az_deploymentmanager_rollout_restart_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, rolloutName: string, resourceGroup: string);
    /** The name of the rollout. */
    rolloutName(value: string): az_deploymentmanager_rollout_restart_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_rollout_restart_command_builder;
    /** Skips all the steps that have succeeded in the previous retries of this rollout. */
    skipSucceeded(value: string): az_deploymentmanager_rollout_restart_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_rollout_restart_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_deploymentmanager_rollout_restart_command_builder;
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
declare class az_deploymentmanager_rollout_show_command_builder extends CommandBuilder<az_deploymentmanager_rollout_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, rolloutName: string, resourceGroup: string);
    /** The name of the rollout. */
    rolloutName(value: string): az_deploymentmanager_rollout_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_rollout_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deploymentmanager_rollout_show_command_builder;
    /** Rollout retry attempt ordinal to get the result of. If not specified, result of the latest attempt will be returned. */
    retryAttempt(value: string): az_deploymentmanager_rollout_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_rollout_show_command_builder;
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
declare class az_deploymentmanager_rollout_stop_command_builder extends CommandBuilder<az_deploymentmanager_rollout_stop_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, rolloutName: string, resourceGroup: string);
    /** The name of the rollout. */
    rolloutName(value: string): az_deploymentmanager_rollout_stop_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_rollout_stop_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_rollout_stop_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_deploymentmanager_rollout_stop_command_builder;
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
declare class az_deploymentmanager_service_topology_create_command_builder extends CommandBuilder<az_deploymentmanager_service_topology_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string, serviceTopologyName: string, resourceGroup: string);
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_deploymentmanager_service_topology_create_command_builder;
    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_topology_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_topology_create_command_builder;
    /** The name or resource identifier of the artifact source. */
    artifactSource(value: string): az_deploymentmanager_service_topology_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_topology_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_deploymentmanager_service_topology_create_command_builder;
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
declare class az_deploymentmanager_service_topology_delete_command_builder extends CommandBuilder<az_deploymentmanager_service_topology_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, serviceTopologyName: string, resourceGroup: string);
    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_topology_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_topology_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_topology_delete_command_builder;
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
declare class az_deploymentmanager_service_topology_list_command_builder extends CommandBuilder<az_deploymentmanager_service_topology_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_topology_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deploymentmanager_service_topology_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_topology_list_command_builder;
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
declare class az_deploymentmanager_service_topology_show_command_builder extends CommandBuilder<az_deploymentmanager_service_topology_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, serviceTopologyName: string, resourceGroup: string);
    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_topology_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_topology_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deploymentmanager_service_topology_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_topology_show_command_builder;
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
declare class az_deploymentmanager_service_topology_update_command_builder extends CommandBuilder<az_deploymentmanager_service_topology_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, serviceTopologyName: string, resourceGroup: string);
    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_topology_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_topology_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_deploymentmanager_service_topology_update_command_builder;
    /** The name or resource identifier of the artifact source. */
    artifactSource(value: string): az_deploymentmanager_service_topology_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_deploymentmanager_service_topology_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_deploymentmanager_service_topology_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_deploymentmanager_service_topology_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_topology_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_deploymentmanager_service_topology_update_command_builder;
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
declare class az_deploymentmanager_service_unit_create_command_builder extends CommandBuilder<az_deploymentmanager_service_unit_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, deploymentMode: 'Complete' | 'Incremental', serviceUnitName: string, parametersPath: string, resourceGroup: string, serviceName: string, serviceTopologyName: string, targetResourceGroup: string, templatePath: string);
    /** The type of depoyment mode to be used when deploying the service unit. Possible values: Incremental, Complete. */
    deploymentMode(value: 'Complete' | 'Incremental'): az_deploymentmanager_service_unit_create_command_builder;
    /** The name of the service unit. */
    serviceUnitName(value: string): az_deploymentmanager_service_unit_create_command_builder;
    /** The path to the ARM parameters file. Either the full SAS Uri or the relative path in the artifact source for this topology. */
    parametersPath(value: string): az_deploymentmanager_service_unit_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_unit_create_command_builder;
    /** The name of the service. */
    serviceName(value: string): az_deploymentmanager_service_unit_create_command_builder;
    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_unit_create_command_builder;
    /** The resource group where the resources in the service unit should be deployed to. */
    targetResourceGroup(value: string): az_deploymentmanager_service_unit_create_command_builder;
    /** The path to the ARM template file. Either the full SAS Uri or the relative path in the artifact source for this topology. */
    templatePath(value: string): az_deploymentmanager_service_unit_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_deploymentmanager_service_unit_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_unit_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_deploymentmanager_service_unit_create_command_builder;
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
declare class az_deploymentmanager_service_unit_delete_command_builder extends CommandBuilder<az_deploymentmanager_service_unit_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, serviceUnitName: string, resourceGroup: string, serviceName: string, serviceTopologyName: string);
    /** The name of the service unit. */
    serviceUnitName(value: string): az_deploymentmanager_service_unit_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_unit_delete_command_builder;
    /** The name of the service. */
    serviceName(value: string): az_deploymentmanager_service_unit_delete_command_builder;
    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_unit_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_unit_delete_command_builder;
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
declare class az_deploymentmanager_service_unit_list_command_builder extends CommandBuilder<az_deploymentmanager_service_unit_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, serviceName: string, serviceTopologyName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_unit_list_command_builder;
    /** The name of the service. */
    serviceName(value: string): az_deploymentmanager_service_unit_list_command_builder;
    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_unit_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deploymentmanager_service_unit_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_unit_list_command_builder;
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
declare class az_deploymentmanager_service_unit_show_command_builder extends CommandBuilder<az_deploymentmanager_service_unit_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, serviceUnitName: string, resourceGroup: string, serviceName: string, serviceTopologyName: string);
    /** The name of the service unit. */
    serviceUnitName(value: string): az_deploymentmanager_service_unit_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_unit_show_command_builder;
    /** The name of the service. */
    serviceName(value: string): az_deploymentmanager_service_unit_show_command_builder;
    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_unit_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deploymentmanager_service_unit_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_unit_show_command_builder;
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
declare class az_deploymentmanager_service_unit_update_command_builder extends CommandBuilder<az_deploymentmanager_service_unit_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, serviceUnitName: string, resourceGroup: string, serviceName: string, serviceTopologyName: string);
    /** The name of the service unit. */
    serviceUnitName(value: string): az_deploymentmanager_service_unit_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_unit_update_command_builder;
    /** The name of the service. */
    serviceName(value: string): az_deploymentmanager_service_unit_update_command_builder;
    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_unit_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_deploymentmanager_service_unit_update_command_builder;
    /** The type of depoyment mode to be used when deploying the service unit. Possible values: Incremental, Complete. */
    deploymentMode(value: 'Complete' | 'Incremental'): az_deploymentmanager_service_unit_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_deploymentmanager_service_unit_update_command_builder;
    /** The path to the ARM parameters file. Either the full SAS Uri or the relative path in the artifact source for this topology. */
    parametersPath(value: string): az_deploymentmanager_service_unit_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_deploymentmanager_service_unit_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_deploymentmanager_service_unit_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_unit_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_deploymentmanager_service_unit_update_command_builder;
    /** The resource group where the resources in the service unit should be deployed to. */
    targetResourceGroup(value: string): az_deploymentmanager_service_unit_update_command_builder;
    /** The path to the ARM template file. Either the full SAS Uri or the relative path in the artifact source for this topology. */
    templatePath(value: string): az_deploymentmanager_service_unit_update_command_builder;
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
declare class az_deploymentmanager_service_create_command_builder extends CommandBuilder<az_deploymentmanager_service_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string, serviceName: string, resourceGroup: string, serviceTopologyName: string, targetLocation: string, targetSubscriptionId: string);
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_deploymentmanager_service_create_command_builder;
    /** The name of the service. */
    serviceName(value: string): az_deploymentmanager_service_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_create_command_builder;
    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_create_command_builder;
    /** The location where the resources in the service should be deployed to. */
    targetLocation(value: string): az_deploymentmanager_service_create_command_builder;
    /** The subscription to which the resources in the service should be deployed to. */
    targetSubscriptionId(value: string): az_deploymentmanager_service_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_deploymentmanager_service_create_command_builder;
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
declare class az_deploymentmanager_service_delete_command_builder extends CommandBuilder<az_deploymentmanager_service_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, serviceName: string, resourceGroup: string, serviceTopologyName: string);
    /** The name of the service. */
    serviceName(value: string): az_deploymentmanager_service_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_delete_command_builder;
    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_delete_command_builder;
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
declare class az_deploymentmanager_service_list_command_builder extends CommandBuilder<az_deploymentmanager_service_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, serviceTopologyName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_list_command_builder;
    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deploymentmanager_service_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_list_command_builder;
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
declare class az_deploymentmanager_service_show_command_builder extends CommandBuilder<az_deploymentmanager_service_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, serviceName: string, resourceGroup: string, serviceTopologyName: string);
    /** The name of the service. */
    serviceName(value: string): az_deploymentmanager_service_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_show_command_builder;
    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deploymentmanager_service_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_show_command_builder;
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
declare class az_deploymentmanager_service_update_command_builder extends CommandBuilder<az_deploymentmanager_service_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, serviceName: string, resourceGroup: string, serviceTopologyName: string);
    /** The name of the service. */
    serviceName(value: string): az_deploymentmanager_service_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_service_update_command_builder;
    /** The name of the service topology. */
    serviceTopologyName(value: string): az_deploymentmanager_service_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_deploymentmanager_service_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_deploymentmanager_service_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_deploymentmanager_service_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_deploymentmanager_service_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_service_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_deploymentmanager_service_update_command_builder;
    /** The location where the resources in the service should be deployed to. */
    targetLocation(value: string): az_deploymentmanager_service_update_command_builder;
    /** The subscription to which the resources in the service should be deployed to. */
    targetSubscriptionId(value: string): az_deploymentmanager_service_update_command_builder;
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
declare class az_deploymentmanager_step_create_command_builder extends CommandBuilder<az_deploymentmanager_step_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_step_create_command_builder;
    /** The duration of the wait step in ISO 8601 format. */
    duration(value: string): az_deploymentmanager_step_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_deploymentmanager_step_create_command_builder;
    /** The name of the step. */
    stepName(value: string): az_deploymentmanager_step_create_command_builder;
    /** The step object, specify either the path to a json file or provide a json string that forms the step resource. The json is expected to be of the same format as the output of the relevant `az deploymentmanager step show` command. */
    step(value: string): az_deploymentmanager_step_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_step_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_deploymentmanager_step_create_command_builder;
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
declare class az_deploymentmanager_step_delete_command_builder extends CommandBuilder<az_deploymentmanager_step_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, stepName: string, resourceGroup: string);
    /** The name of the step. */
    stepName(value: string): az_deploymentmanager_step_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_step_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_step_delete_command_builder;
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
declare class az_deploymentmanager_step_list_command_builder extends CommandBuilder<az_deploymentmanager_step_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_step_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deploymentmanager_step_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_step_list_command_builder;
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
declare class az_deploymentmanager_step_show_command_builder extends CommandBuilder<az_deploymentmanager_step_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, stepName: string, resourceGroup: string);
    /** The name of the step. */
    stepName(value: string): az_deploymentmanager_step_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_step_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deploymentmanager_step_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_step_show_command_builder;
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
declare class az_deploymentmanager_step_update_command_builder extends CommandBuilder<az_deploymentmanager_step_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, stepName: string, resourceGroup: string);
    /** The name of the step. */
    stepName(value: string): az_deploymentmanager_step_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deploymentmanager_step_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_deploymentmanager_step_update_command_builder;
    /** The duration of the wait step in ISO 8601 format. */
    duration(value: string): az_deploymentmanager_step_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_deploymentmanager_step_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_deploymentmanager_step_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_deploymentmanager_step_update_command_builder;
    /** The step object, specify either the path to a json file or provide a json string that forms the step resource. The json is expected to be of the same format as the output of the relevant `az deploymentmanager step show` command. */
    step(value: string): az_deploymentmanager_step_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deploymentmanager_step_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_deploymentmanager_step_update_command_builder;
}
export {};
