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
exports.az_deploymentmanager = exports.az_deploymentmanager_step = exports.az_deploymentmanager_service = exports.az_deploymentmanager_service_unit = exports.az_deploymentmanager_service_topology = exports.az_deploymentmanager_rollout = exports.az_deploymentmanager_artifact_source = void 0;
var base_1 = require("../base");
/** Manage artifact sources. */
var az_deploymentmanager_artifact_source = /** @class */ (function () {
    function az_deploymentmanager_artifact_source() {
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
    az_deploymentmanager_artifact_source.create = function (artifactSourceName, location, resourceGroup, sasUri) {
        return new az_deploymentmanager_artifact_source_create_command_builder("az deploymentmanager artifact-source create", 'az_deploymentmanager_artifact_source_create_command_result', artifactSourceName, location, resourceGroup, sasUri);
    };
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
    az_deploymentmanager_artifact_source["delete"] = function (artifactSourceName, resourceGroup) {
        return new az_deploymentmanager_artifact_source_delete_command_builder("az deploymentmanager artifact-source delete", 'az_deploymentmanager_artifact_source_delete_command_result', artifactSourceName, resourceGroup);
    };
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
    az_deploymentmanager_artifact_source.list = function (resourceGroup) {
        return new az_deploymentmanager_artifact_source_list_command_builder("az deploymentmanager artifact-source list", 'az_deploymentmanager_artifact_source_list_command_result', resourceGroup);
    };
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
    az_deploymentmanager_artifact_source.show = function (artifactSourceName, resourceGroup) {
        return new az_deploymentmanager_artifact_source_show_command_builder("az deploymentmanager artifact-source show", 'az_deploymentmanager_artifact_source_show_command_result', artifactSourceName, resourceGroup);
    };
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
    az_deploymentmanager_artifact_source.update = function (artifactSourceName, resourceGroup) {
        return new az_deploymentmanager_artifact_source_update_command_builder("az deploymentmanager artifact-source update", 'az_deploymentmanager_artifact_source_update_command_result', artifactSourceName, resourceGroup);
    };
    return az_deploymentmanager_artifact_source;
}());
exports.az_deploymentmanager_artifact_source = az_deploymentmanager_artifact_source;
/** Manage the rollouts. */
var az_deploymentmanager_rollout = /** @class */ (function () {
    function az_deploymentmanager_rollout() {
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
    az_deploymentmanager_rollout["delete"] = function (rolloutName, resourceGroup) {
        return new az_deploymentmanager_rollout_delete_command_builder("az deploymentmanager rollout delete", 'az_deploymentmanager_rollout_delete_command_result', rolloutName, resourceGroup);
    };
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
    az_deploymentmanager_rollout.list = function (resourceGroup) {
        return new az_deploymentmanager_rollout_list_command_builder("az deploymentmanager rollout list", 'az_deploymentmanager_rollout_list_command_result', resourceGroup);
    };
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
    az_deploymentmanager_rollout.restart = function (rolloutName, resourceGroup) {
        return new az_deploymentmanager_rollout_restart_command_builder("az deploymentmanager rollout restart", 'az_deploymentmanager_rollout_restart_command_result', rolloutName, resourceGroup);
    };
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
    az_deploymentmanager_rollout.show = function (rolloutName, resourceGroup) {
        return new az_deploymentmanager_rollout_show_command_builder("az deploymentmanager rollout show", 'az_deploymentmanager_rollout_show_command_result', rolloutName, resourceGroup);
    };
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
    az_deploymentmanager_rollout.stop = function (rolloutName, resourceGroup) {
        return new az_deploymentmanager_rollout_stop_command_builder("az deploymentmanager rollout stop", 'az_deploymentmanager_rollout_stop_command_result', rolloutName, resourceGroup);
    };
    return az_deploymentmanager_rollout;
}());
exports.az_deploymentmanager_rollout = az_deploymentmanager_rollout;
/** Manage service topologies. */
var az_deploymentmanager_service_topology = /** @class */ (function () {
    function az_deploymentmanager_service_topology() {
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
    az_deploymentmanager_service_topology.create = function (location, serviceTopologyName, resourceGroup) {
        return new az_deploymentmanager_service_topology_create_command_builder("az deploymentmanager service-topology create", 'az_deploymentmanager_service_topology_create_command_result', location, serviceTopologyName, resourceGroup);
    };
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
    az_deploymentmanager_service_topology["delete"] = function (serviceTopologyName, resourceGroup) {
        return new az_deploymentmanager_service_topology_delete_command_builder("az deploymentmanager service-topology delete", 'az_deploymentmanager_service_topology_delete_command_result', serviceTopologyName, resourceGroup);
    };
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
    az_deploymentmanager_service_topology.list = function (resourceGroup) {
        return new az_deploymentmanager_service_topology_list_command_builder("az deploymentmanager service-topology list", 'az_deploymentmanager_service_topology_list_command_result', resourceGroup);
    };
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
    az_deploymentmanager_service_topology.show = function (serviceTopologyName, resourceGroup) {
        return new az_deploymentmanager_service_topology_show_command_builder("az deploymentmanager service-topology show", 'az_deploymentmanager_service_topology_show_command_result', serviceTopologyName, resourceGroup);
    };
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
    az_deploymentmanager_service_topology.update = function (serviceTopologyName, resourceGroup) {
        return new az_deploymentmanager_service_topology_update_command_builder("az deploymentmanager service-topology update", 'az_deploymentmanager_service_topology_update_command_result', serviceTopologyName, resourceGroup);
    };
    return az_deploymentmanager_service_topology;
}());
exports.az_deploymentmanager_service_topology = az_deploymentmanager_service_topology;
/** Manage the service units. */
var az_deploymentmanager_service_unit = /** @class */ (function () {
    function az_deploymentmanager_service_unit() {
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
    az_deploymentmanager_service_unit.create = function (deploymentMode, serviceUnitName, parametersPath, resourceGroup, serviceName, serviceTopologyName, targetResourceGroup, templatePath) {
        return new az_deploymentmanager_service_unit_create_command_builder("az deploymentmanager service-unit create", 'az_deploymentmanager_service_unit_create_command_result', deploymentMode, serviceUnitName, parametersPath, resourceGroup, serviceName, serviceTopologyName, targetResourceGroup, templatePath);
    };
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
    az_deploymentmanager_service_unit["delete"] = function (serviceUnitName, resourceGroup, serviceName, serviceTopologyName) {
        return new az_deploymentmanager_service_unit_delete_command_builder("az deploymentmanager service-unit delete", 'az_deploymentmanager_service_unit_delete_command_result', serviceUnitName, resourceGroup, serviceName, serviceTopologyName);
    };
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
    az_deploymentmanager_service_unit.list = function (resourceGroup, serviceName, serviceTopologyName) {
        return new az_deploymentmanager_service_unit_list_command_builder("az deploymentmanager service-unit list", 'az_deploymentmanager_service_unit_list_command_result', resourceGroup, serviceName, serviceTopologyName);
    };
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
    az_deploymentmanager_service_unit.show = function (serviceUnitName, resourceGroup, serviceName, serviceTopologyName) {
        return new az_deploymentmanager_service_unit_show_command_builder("az deploymentmanager service-unit show", 'az_deploymentmanager_service_unit_show_command_result', serviceUnitName, resourceGroup, serviceName, serviceTopologyName);
    };
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
    az_deploymentmanager_service_unit.update = function (serviceUnitName, resourceGroup, serviceName, serviceTopologyName) {
        return new az_deploymentmanager_service_unit_update_command_builder("az deploymentmanager service-unit update", 'az_deploymentmanager_service_unit_update_command_result', serviceUnitName, resourceGroup, serviceName, serviceTopologyName);
    };
    return az_deploymentmanager_service_unit;
}());
exports.az_deploymentmanager_service_unit = az_deploymentmanager_service_unit;
/** Manage the services in a service topology. */
var az_deploymentmanager_service = /** @class */ (function () {
    function az_deploymentmanager_service() {
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
    az_deploymentmanager_service.create = function (location, serviceName, resourceGroup, serviceTopologyName, targetLocation, targetSubscriptionId) {
        return new az_deploymentmanager_service_create_command_builder("az deploymentmanager service create", 'az_deploymentmanager_service_create_command_result', location, serviceName, resourceGroup, serviceTopologyName, targetLocation, targetSubscriptionId);
    };
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
    az_deploymentmanager_service["delete"] = function (serviceName, resourceGroup, serviceTopologyName) {
        return new az_deploymentmanager_service_delete_command_builder("az deploymentmanager service delete", 'az_deploymentmanager_service_delete_command_result', serviceName, resourceGroup, serviceTopologyName);
    };
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
    az_deploymentmanager_service.list = function (resourceGroup, serviceTopologyName) {
        return new az_deploymentmanager_service_list_command_builder("az deploymentmanager service list", 'az_deploymentmanager_service_list_command_result', resourceGroup, serviceTopologyName);
    };
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
    az_deploymentmanager_service.show = function (serviceName, resourceGroup, serviceTopologyName) {
        return new az_deploymentmanager_service_show_command_builder("az deploymentmanager service show", 'az_deploymentmanager_service_show_command_result', serviceName, resourceGroup, serviceTopologyName);
    };
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
    az_deploymentmanager_service.update = function (serviceName, resourceGroup, serviceTopologyName) {
        return new az_deploymentmanager_service_update_command_builder("az deploymentmanager service update", 'az_deploymentmanager_service_update_command_result', serviceName, resourceGroup, serviceTopologyName);
    };
    return az_deploymentmanager_service;
}());
exports.az_deploymentmanager_service = az_deploymentmanager_service;
/** Manage the steps. */
var az_deploymentmanager_step = /** @class */ (function () {
    function az_deploymentmanager_step() {
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
    az_deploymentmanager_step.create = function (resourceGroup) {
        return new az_deploymentmanager_step_create_command_builder("az deploymentmanager step create", 'az_deploymentmanager_step_create_command_result', resourceGroup);
    };
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
    az_deploymentmanager_step["delete"] = function (stepName, resourceGroup) {
        return new az_deploymentmanager_step_delete_command_builder("az deploymentmanager step delete", 'az_deploymentmanager_step_delete_command_result', stepName, resourceGroup);
    };
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
    az_deploymentmanager_step.list = function (resourceGroup) {
        return new az_deploymentmanager_step_list_command_builder("az deploymentmanager step list", 'az_deploymentmanager_step_list_command_result', resourceGroup);
    };
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
    az_deploymentmanager_step.show = function (stepName, resourceGroup) {
        return new az_deploymentmanager_step_show_command_builder("az deploymentmanager step show", 'az_deploymentmanager_step_show_command_result', stepName, resourceGroup);
    };
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
    az_deploymentmanager_step.update = function (stepName, resourceGroup) {
        return new az_deploymentmanager_step_update_command_builder("az deploymentmanager step update", 'az_deploymentmanager_step_update_command_result', stepName, resourceGroup);
    };
    return az_deploymentmanager_step;
}());
exports.az_deploymentmanager_step = az_deploymentmanager_step;
/** Create and manage rollouts for your service. */
var az_deploymentmanager = /** @class */ (function () {
    function az_deploymentmanager() {
    }
    return az_deploymentmanager;
}());
exports.az_deploymentmanager = az_deploymentmanager;
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
var az_deploymentmanager_artifact_source_create_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_artifact_source_create_command_builder, _super);
    function az_deploymentmanager_artifact_source_create_command_builder(commandPath, resultDataTypeName, artifactSourceName, location, resourceGroup, sasUri) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.artifactSourceName(artifactSourceName);
        _this.location(location);
        _this.resourceGroup(resourceGroup);
        _this.sasUri(sasUri);
        return _this;
    }
    /** The name of the artifact source. */
    az_deploymentmanager_artifact_source_create_command_builder.prototype.artifactSourceName = function (value) {
        this.setFlag("--artifact-source-name", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_deploymentmanager_artifact_source_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_artifact_source_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The SAS Uri to the Azure Storage container where the artifacts are stored. */
    az_deploymentmanager_artifact_source_create_command_builder.prototype.sasUri = function (value) {
        this.setFlag("--sas-uri", value);
        return this;
    };
    /** The root folder under which the artifacts are to be found. This is the path relative to the Azure storage container provided in --sas-uri. */
    az_deploymentmanager_artifact_source_create_command_builder.prototype.artifactRoot = function (value) {
        this.setFlag("--artifact-root", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_artifact_source_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_deploymentmanager_artifact_source_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_deploymentmanager_artifact_source_create_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_artifact_source_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_artifact_source_delete_command_builder, _super);
    function az_deploymentmanager_artifact_source_delete_command_builder(commandPath, resultDataTypeName, artifactSourceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.artifactSourceName(artifactSourceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the artifact source. */
    az_deploymentmanager_artifact_source_delete_command_builder.prototype.artifactSourceName = function (value) {
        this.setFlag("--artifact-source-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_artifact_source_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_artifact_source_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_deploymentmanager_artifact_source_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_deploymentmanager_artifact_source_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_artifact_source_list_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_artifact_source_list_command_builder, _super);
    function az_deploymentmanager_artifact_source_list_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_artifact_source_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deploymentmanager_artifact_source_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_artifact_source_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deploymentmanager_artifact_source_list_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_artifact_source_show_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_artifact_source_show_command_builder, _super);
    function az_deploymentmanager_artifact_source_show_command_builder(commandPath, resultDataTypeName, artifactSourceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.artifactSourceName(artifactSourceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the artifact source. */
    az_deploymentmanager_artifact_source_show_command_builder.prototype.artifactSourceName = function (value) {
        this.setFlag("--artifact-source-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_artifact_source_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deploymentmanager_artifact_source_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_artifact_source_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deploymentmanager_artifact_source_show_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_artifact_source_update_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_artifact_source_update_command_builder, _super);
    function az_deploymentmanager_artifact_source_update_command_builder(commandPath, resultDataTypeName, artifactSourceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.artifactSourceName(artifactSourceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the artifact source. */
    az_deploymentmanager_artifact_source_update_command_builder.prototype.artifactSourceName = function (value) {
        this.setFlag("--artifact-source-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_artifact_source_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_deploymentmanager_artifact_source_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The root folder under which the artifacts are to be found. This is the path relative to the Azure storage container provided in --sas-uri. */
    az_deploymentmanager_artifact_source_update_command_builder.prototype.artifactRoot = function (value) {
        this.setFlag("--artifact-root", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_deploymentmanager_artifact_source_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_deploymentmanager_artifact_source_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** The SAS Uri to the Azure Storage container where the artifacts are stored. */
    az_deploymentmanager_artifact_source_update_command_builder.prototype.sasUri = function (value) {
        this.setFlag("--sas-uri", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_deploymentmanager_artifact_source_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_artifact_source_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_deploymentmanager_artifact_source_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_deploymentmanager_artifact_source_update_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_rollout_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_rollout_delete_command_builder, _super);
    function az_deploymentmanager_rollout_delete_command_builder(commandPath, resultDataTypeName, rolloutName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.rolloutName(rolloutName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the rollout. */
    az_deploymentmanager_rollout_delete_command_builder.prototype.rolloutName = function (value) {
        this.setFlag("--rollout-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_rollout_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_rollout_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deploymentmanager_rollout_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_rollout_list_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_rollout_list_command_builder, _super);
    function az_deploymentmanager_rollout_list_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_rollout_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deploymentmanager_rollout_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_rollout_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deploymentmanager_rollout_list_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_rollout_restart_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_rollout_restart_command_builder, _super);
    function az_deploymentmanager_rollout_restart_command_builder(commandPath, resultDataTypeName, rolloutName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.rolloutName(rolloutName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the rollout. */
    az_deploymentmanager_rollout_restart_command_builder.prototype.rolloutName = function (value) {
        this.setFlag("--rollout-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_rollout_restart_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Skips all the steps that have succeeded in the previous retries of this rollout. */
    az_deploymentmanager_rollout_restart_command_builder.prototype.skipSucceeded = function (value) {
        this.setFlag("--skip-succeeded", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_rollout_restart_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_deploymentmanager_rollout_restart_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_deploymentmanager_rollout_restart_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_rollout_show_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_rollout_show_command_builder, _super);
    function az_deploymentmanager_rollout_show_command_builder(commandPath, resultDataTypeName, rolloutName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.rolloutName(rolloutName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the rollout. */
    az_deploymentmanager_rollout_show_command_builder.prototype.rolloutName = function (value) {
        this.setFlag("--rollout-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_rollout_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deploymentmanager_rollout_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Rollout retry attempt ordinal to get the result of. If not specified, result of the latest attempt will be returned. */
    az_deploymentmanager_rollout_show_command_builder.prototype.retryAttempt = function (value) {
        this.setFlag("--retry-attempt", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_rollout_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deploymentmanager_rollout_show_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_rollout_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_rollout_stop_command_builder, _super);
    function az_deploymentmanager_rollout_stop_command_builder(commandPath, resultDataTypeName, rolloutName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.rolloutName(rolloutName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the rollout. */
    az_deploymentmanager_rollout_stop_command_builder.prototype.rolloutName = function (value) {
        this.setFlag("--rollout-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_rollout_stop_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_rollout_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_deploymentmanager_rollout_stop_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_deploymentmanager_rollout_stop_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_service_topology_create_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_service_topology_create_command_builder, _super);
    function az_deploymentmanager_service_topology_create_command_builder(commandPath, resultDataTypeName, location, serviceTopologyName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.serviceTopologyName(serviceTopologyName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_deploymentmanager_service_topology_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name of the service topology. */
    az_deploymentmanager_service_topology_create_command_builder.prototype.serviceTopologyName = function (value) {
        this.setFlag("--service-topology-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_service_topology_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name or resource identifier of the artifact source. */
    az_deploymentmanager_service_topology_create_command_builder.prototype.artifactSource = function (value) {
        this.setFlag("--artifact-source", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_service_topology_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_deploymentmanager_service_topology_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_deploymentmanager_service_topology_create_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_service_topology_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_service_topology_delete_command_builder, _super);
    function az_deploymentmanager_service_topology_delete_command_builder(commandPath, resultDataTypeName, serviceTopologyName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.serviceTopologyName(serviceTopologyName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the service topology. */
    az_deploymentmanager_service_topology_delete_command_builder.prototype.serviceTopologyName = function (value) {
        this.setFlag("--service-topology-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_service_topology_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_service_topology_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deploymentmanager_service_topology_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_service_topology_list_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_service_topology_list_command_builder, _super);
    function az_deploymentmanager_service_topology_list_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_service_topology_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deploymentmanager_service_topology_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_service_topology_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deploymentmanager_service_topology_list_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_service_topology_show_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_service_topology_show_command_builder, _super);
    function az_deploymentmanager_service_topology_show_command_builder(commandPath, resultDataTypeName, serviceTopologyName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.serviceTopologyName(serviceTopologyName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the service topology. */
    az_deploymentmanager_service_topology_show_command_builder.prototype.serviceTopologyName = function (value) {
        this.setFlag("--service-topology-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_service_topology_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deploymentmanager_service_topology_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_service_topology_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deploymentmanager_service_topology_show_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_service_topology_update_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_service_topology_update_command_builder, _super);
    function az_deploymentmanager_service_topology_update_command_builder(commandPath, resultDataTypeName, serviceTopologyName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.serviceTopologyName(serviceTopologyName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the service topology. */
    az_deploymentmanager_service_topology_update_command_builder.prototype.serviceTopologyName = function (value) {
        this.setFlag("--service-topology-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_service_topology_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_deploymentmanager_service_topology_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The name or resource identifier of the artifact source. */
    az_deploymentmanager_service_topology_update_command_builder.prototype.artifactSource = function (value) {
        this.setFlag("--artifact-source", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_deploymentmanager_service_topology_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_deploymentmanager_service_topology_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_deploymentmanager_service_topology_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_service_topology_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_deploymentmanager_service_topology_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_deploymentmanager_service_topology_update_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_service_unit_create_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_service_unit_create_command_builder, _super);
    function az_deploymentmanager_service_unit_create_command_builder(commandPath, resultDataTypeName, deploymentMode, serviceUnitName, parametersPath, resourceGroup, serviceName, serviceTopologyName, targetResourceGroup, templatePath) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.deploymentMode(deploymentMode);
        _this.serviceUnitName(serviceUnitName);
        _this.parametersPath(parametersPath);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        _this.serviceTopologyName(serviceTopologyName);
        _this.targetResourceGroup(targetResourceGroup);
        _this.templatePath(templatePath);
        return _this;
    }
    /** The type of depoyment mode to be used when deploying the service unit. Possible values: Incremental, Complete. */
    az_deploymentmanager_service_unit_create_command_builder.prototype.deploymentMode = function (value) {
        this.setFlag("--deployment-mode", value);
        return this;
    };
    /** The name of the service unit. */
    az_deploymentmanager_service_unit_create_command_builder.prototype.serviceUnitName = function (value) {
        this.setFlag("--service-unit-name", value);
        return this;
    };
    /** The path to the ARM parameters file. Either the full SAS Uri or the relative path in the artifact source for this topology. */
    az_deploymentmanager_service_unit_create_command_builder.prototype.parametersPath = function (value) {
        this.setFlag("--parameters-path", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_service_unit_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the service. */
    az_deploymentmanager_service_unit_create_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** The name of the service topology. */
    az_deploymentmanager_service_unit_create_command_builder.prototype.serviceTopologyName = function (value) {
        this.setFlag("--service-topology-name", value);
        return this;
    };
    /** The resource group where the resources in the service unit should be deployed to. */
    az_deploymentmanager_service_unit_create_command_builder.prototype.targetResourceGroup = function (value) {
        this.setFlag("--target-resource-group", value);
        return this;
    };
    /** The path to the ARM template file. Either the full SAS Uri or the relative path in the artifact source for this topology. */
    az_deploymentmanager_service_unit_create_command_builder.prototype.templatePath = function (value) {
        this.setFlag("--template-path", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_deploymentmanager_service_unit_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_service_unit_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_deploymentmanager_service_unit_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_deploymentmanager_service_unit_create_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_service_unit_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_service_unit_delete_command_builder, _super);
    function az_deploymentmanager_service_unit_delete_command_builder(commandPath, resultDataTypeName, serviceUnitName, resourceGroup, serviceName, serviceTopologyName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.serviceUnitName(serviceUnitName);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        _this.serviceTopologyName(serviceTopologyName);
        return _this;
    }
    /** The name of the service unit. */
    az_deploymentmanager_service_unit_delete_command_builder.prototype.serviceUnitName = function (value) {
        this.setFlag("--service-unit-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_service_unit_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the service. */
    az_deploymentmanager_service_unit_delete_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** The name of the service topology. */
    az_deploymentmanager_service_unit_delete_command_builder.prototype.serviceTopologyName = function (value) {
        this.setFlag("--service-topology-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_service_unit_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deploymentmanager_service_unit_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_service_unit_list_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_service_unit_list_command_builder, _super);
    function az_deploymentmanager_service_unit_list_command_builder(commandPath, resultDataTypeName, resourceGroup, serviceName, serviceTopologyName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        _this.serviceTopologyName(serviceTopologyName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_service_unit_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the service. */
    az_deploymentmanager_service_unit_list_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** The name of the service topology. */
    az_deploymentmanager_service_unit_list_command_builder.prototype.serviceTopologyName = function (value) {
        this.setFlag("--service-topology-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deploymentmanager_service_unit_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_service_unit_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deploymentmanager_service_unit_list_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_service_unit_show_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_service_unit_show_command_builder, _super);
    function az_deploymentmanager_service_unit_show_command_builder(commandPath, resultDataTypeName, serviceUnitName, resourceGroup, serviceName, serviceTopologyName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.serviceUnitName(serviceUnitName);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        _this.serviceTopologyName(serviceTopologyName);
        return _this;
    }
    /** The name of the service unit. */
    az_deploymentmanager_service_unit_show_command_builder.prototype.serviceUnitName = function (value) {
        this.setFlag("--service-unit-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_service_unit_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the service. */
    az_deploymentmanager_service_unit_show_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** The name of the service topology. */
    az_deploymentmanager_service_unit_show_command_builder.prototype.serviceTopologyName = function (value) {
        this.setFlag("--service-topology-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deploymentmanager_service_unit_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_service_unit_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deploymentmanager_service_unit_show_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_service_unit_update_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_service_unit_update_command_builder, _super);
    function az_deploymentmanager_service_unit_update_command_builder(commandPath, resultDataTypeName, serviceUnitName, resourceGroup, serviceName, serviceTopologyName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.serviceUnitName(serviceUnitName);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        _this.serviceTopologyName(serviceTopologyName);
        return _this;
    }
    /** The name of the service unit. */
    az_deploymentmanager_service_unit_update_command_builder.prototype.serviceUnitName = function (value) {
        this.setFlag("--service-unit-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_service_unit_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the service. */
    az_deploymentmanager_service_unit_update_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** The name of the service topology. */
    az_deploymentmanager_service_unit_update_command_builder.prototype.serviceTopologyName = function (value) {
        this.setFlag("--service-topology-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_deploymentmanager_service_unit_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The type of depoyment mode to be used when deploying the service unit. Possible values: Incremental, Complete. */
    az_deploymentmanager_service_unit_update_command_builder.prototype.deploymentMode = function (value) {
        this.setFlag("--deployment-mode", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_deploymentmanager_service_unit_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** The path to the ARM parameters file. Either the full SAS Uri or the relative path in the artifact source for this topology. */
    az_deploymentmanager_service_unit_update_command_builder.prototype.parametersPath = function (value) {
        this.setFlag("--parameters-path", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_deploymentmanager_service_unit_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_deploymentmanager_service_unit_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_service_unit_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_deploymentmanager_service_unit_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The resource group where the resources in the service unit should be deployed to. */
    az_deploymentmanager_service_unit_update_command_builder.prototype.targetResourceGroup = function (value) {
        this.setFlag("--target-resource-group", value);
        return this;
    };
    /** The path to the ARM template file. Either the full SAS Uri or the relative path in the artifact source for this topology. */
    az_deploymentmanager_service_unit_update_command_builder.prototype.templatePath = function (value) {
        this.setFlag("--template-path", value);
        return this;
    };
    return az_deploymentmanager_service_unit_update_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_service_create_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_service_create_command_builder, _super);
    function az_deploymentmanager_service_create_command_builder(commandPath, resultDataTypeName, location, serviceName, resourceGroup, serviceTopologyName, targetLocation, targetSubscriptionId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.serviceName(serviceName);
        _this.resourceGroup(resourceGroup);
        _this.serviceTopologyName(serviceTopologyName);
        _this.targetLocation(targetLocation);
        _this.targetSubscriptionId(targetSubscriptionId);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_deploymentmanager_service_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name of the service. */
    az_deploymentmanager_service_create_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_service_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the service topology. */
    az_deploymentmanager_service_create_command_builder.prototype.serviceTopologyName = function (value) {
        this.setFlag("--service-topology-name", value);
        return this;
    };
    /** The location where the resources in the service should be deployed to. */
    az_deploymentmanager_service_create_command_builder.prototype.targetLocation = function (value) {
        this.setFlag("--target-location", value);
        return this;
    };
    /** The subscription to which the resources in the service should be deployed to. */
    az_deploymentmanager_service_create_command_builder.prototype.targetSubscriptionId = function (value) {
        this.setFlag("--target-subscription-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_service_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_deploymentmanager_service_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_deploymentmanager_service_create_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_service_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_service_delete_command_builder, _super);
    function az_deploymentmanager_service_delete_command_builder(commandPath, resultDataTypeName, serviceName, resourceGroup, serviceTopologyName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.serviceName(serviceName);
        _this.resourceGroup(resourceGroup);
        _this.serviceTopologyName(serviceTopologyName);
        return _this;
    }
    /** The name of the service. */
    az_deploymentmanager_service_delete_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_service_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the service topology. */
    az_deploymentmanager_service_delete_command_builder.prototype.serviceTopologyName = function (value) {
        this.setFlag("--service-topology-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_service_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deploymentmanager_service_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_service_list_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_service_list_command_builder, _super);
    function az_deploymentmanager_service_list_command_builder(commandPath, resultDataTypeName, resourceGroup, serviceTopologyName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.serviceTopologyName(serviceTopologyName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_service_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the service topology. */
    az_deploymentmanager_service_list_command_builder.prototype.serviceTopologyName = function (value) {
        this.setFlag("--service-topology-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deploymentmanager_service_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_service_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deploymentmanager_service_list_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_service_show_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_service_show_command_builder, _super);
    function az_deploymentmanager_service_show_command_builder(commandPath, resultDataTypeName, serviceName, resourceGroup, serviceTopologyName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.serviceName(serviceName);
        _this.resourceGroup(resourceGroup);
        _this.serviceTopologyName(serviceTopologyName);
        return _this;
    }
    /** The name of the service. */
    az_deploymentmanager_service_show_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_service_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the service topology. */
    az_deploymentmanager_service_show_command_builder.prototype.serviceTopologyName = function (value) {
        this.setFlag("--service-topology-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deploymentmanager_service_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_service_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deploymentmanager_service_show_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_service_update_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_service_update_command_builder, _super);
    function az_deploymentmanager_service_update_command_builder(commandPath, resultDataTypeName, serviceName, resourceGroup, serviceTopologyName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.serviceName(serviceName);
        _this.resourceGroup(resourceGroup);
        _this.serviceTopologyName(serviceTopologyName);
        return _this;
    }
    /** The name of the service. */
    az_deploymentmanager_service_update_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_service_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the service topology. */
    az_deploymentmanager_service_update_command_builder.prototype.serviceTopologyName = function (value) {
        this.setFlag("--service-topology-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_deploymentmanager_service_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_deploymentmanager_service_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_deploymentmanager_service_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_deploymentmanager_service_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_service_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_deploymentmanager_service_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The location where the resources in the service should be deployed to. */
    az_deploymentmanager_service_update_command_builder.prototype.targetLocation = function (value) {
        this.setFlag("--target-location", value);
        return this;
    };
    /** The subscription to which the resources in the service should be deployed to. */
    az_deploymentmanager_service_update_command_builder.prototype.targetSubscriptionId = function (value) {
        this.setFlag("--target-subscription-id", value);
        return this;
    };
    return az_deploymentmanager_service_update_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_step_create_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_step_create_command_builder, _super);
    function az_deploymentmanager_step_create_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_step_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The duration of the wait step in ISO 8601 format. */
    az_deploymentmanager_step_create_command_builder.prototype.duration = function (value) {
        this.setFlag("--duration", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_deploymentmanager_step_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name of the step. */
    az_deploymentmanager_step_create_command_builder.prototype.stepName = function (value) {
        this.setFlag("--step-name", value);
        return this;
    };
    /** The step object, specify either the path to a json file or provide a json string that forms the step resource. The json is expected to be of the same format as the output of the relevant `az deploymentmanager step show` command. */
    az_deploymentmanager_step_create_command_builder.prototype.step = function (value) {
        this.setFlag("--step", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_step_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_deploymentmanager_step_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_deploymentmanager_step_create_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_step_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_step_delete_command_builder, _super);
    function az_deploymentmanager_step_delete_command_builder(commandPath, resultDataTypeName, stepName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.stepName(stepName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the step. */
    az_deploymentmanager_step_delete_command_builder.prototype.stepName = function (value) {
        this.setFlag("--step-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_step_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_step_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deploymentmanager_step_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_step_list_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_step_list_command_builder, _super);
    function az_deploymentmanager_step_list_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_step_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deploymentmanager_step_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_step_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deploymentmanager_step_list_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_step_show_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_step_show_command_builder, _super);
    function az_deploymentmanager_step_show_command_builder(commandPath, resultDataTypeName, stepName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.stepName(stepName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the step. */
    az_deploymentmanager_step_show_command_builder.prototype.stepName = function (value) {
        this.setFlag("--step-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_step_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_deploymentmanager_step_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_step_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_deploymentmanager_step_show_command_builder;
}(base_1.CommandBuilder));
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
var az_deploymentmanager_step_update_command_builder = /** @class */ (function (_super) {
    __extends(az_deploymentmanager_step_update_command_builder, _super);
    function az_deploymentmanager_step_update_command_builder(commandPath, resultDataTypeName, stepName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.stepName(stepName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the step. */
    az_deploymentmanager_step_update_command_builder.prototype.stepName = function (value) {
        this.setFlag("--step-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_deploymentmanager_step_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_deploymentmanager_step_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The duration of the wait step in ISO 8601 format. */
    az_deploymentmanager_step_update_command_builder.prototype.duration = function (value) {
        this.setFlag("--duration", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_deploymentmanager_step_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_deploymentmanager_step_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_deploymentmanager_step_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** The step object, specify either the path to a json file or provide a json string that forms the step resource. The json is expected to be of the same format as the output of the relevant `az deploymentmanager step show` command. */
    az_deploymentmanager_step_update_command_builder.prototype.step = function (value) {
        this.setFlag("--step", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_deploymentmanager_step_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_deploymentmanager_step_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_deploymentmanager_step_update_command_builder;
}(base_1.CommandBuilder));
