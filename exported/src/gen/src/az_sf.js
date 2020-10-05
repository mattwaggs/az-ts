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
exports.az_sf = exports.az_sf_service = exports.az_sf_managed_node_type = exports.az_sf_managed_node_type_vm_secret = exports.az_sf_managed_node_type_vm_extension = exports.az_sf_managed_node_type_node = exports.az_sf_managed_cluster = exports.az_sf_managed_cluster_client_certificate = exports.az_sf_cluster = exports.az_sf_cluster_upgrade_type = exports.az_sf_cluster_setting = exports.az_sf_cluster_reliability = exports.az_sf_cluster_node = exports.az_sf_cluster_node_type = exports.az_sf_cluster_durability = exports.az_sf_cluster_client_certificate = exports.az_sf_cluster_certificate = exports.az_sf_application = exports.az_sf_application_type = exports.az_sf_application_type_version = exports.az_sf_application_certificate = void 0;
var base_1 = require("../base");
/** Manage the certificate of an application. */
var az_sf_application_certificate = /** @class */ (function () {
    function az_sf_application_certificate() {
    }
    /**
     * Add a new certificate to the Virtual Machine Scale Sets that make up the cluster to be used by hosted applications.
     *
     * Syntax:
     * ```
     * az sf application certificate add --cluster-name
     *                                   --resource-group
     *                                   [--cert-out-folder]
     *                                   [--cert-subject-name]
     *                                   [--certificate-file]
     *                                   [--certificate-password]
     *                                   [--secret-identifier]
     *                                   [--subscription]
     *                                   [--vault-name]
     *                                   [--vault-resource-group]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_application_certificate.add = function (clusterName, resourceGroup) {
        return new az_sf_application_certificate_add_command_builder("az sf application certificate add", 'az_sf_application_certificate_add_command_result', clusterName, resourceGroup);
    };
    return az_sf_application_certificate;
}());
exports.az_sf_application_certificate = az_sf_application_certificate;
/** Manage application type versions on an Azure Service Fabric cluster. */
var az_sf_application_type_version = /** @class */ (function () {
    function az_sf_application_type_version() {
    }
    /**
     * Create a new application type on an Azure Service Fabric cluster.
     *
     * Syntax:
     * ```
     * az sf application-type version create --application-type-name
     *                                       --application-type-version
     *                                       --cluster-name
     *                                       --package-url
     *                                       --resource-group
     *                                       [--subscription]
     * ```
     *
     * @param {string} applicationTypeName Specify the application type name.
     * @param {string} applicationTypeVersion Specify the application type version.
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} packageUrl Specify the url of the application package sfpkg file.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_application_type_version.create = function (applicationTypeName, applicationTypeVersion, clusterName, packageUrl, resourceGroup) {
        return new az_sf_application_type_version_create_command_builder("az sf application-type version create", 'az_sf_application_type_version_create_command_result', applicationTypeName, applicationTypeVersion, clusterName, packageUrl, resourceGroup);
    };
    /**
     * Delete an application type version.
     *
     * Syntax:
     * ```
     * az sf application-type version delete --application-type-name
     *                                       --application-type-version
     *                                       --cluster-name
     *                                       --resource-group
     *                                       [--subscription]
     * ```
     *
     * @param {string} applicationTypeName Specify the application type name.
     * @param {string} applicationTypeVersion Specify the application type version.
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_application_type_version["delete"] = function (applicationTypeName, applicationTypeVersion, clusterName, resourceGroup) {
        return new az_sf_application_type_version_delete_command_builder("az sf application-type version delete", 'az_sf_application_type_version_delete_command_result', applicationTypeName, applicationTypeVersion, clusterName, resourceGroup);
    };
    /**
     * List version of a given application type.
     *
     * Syntax:
     * ```
     * az sf application-type version list --application-type-name
     *                                     --cluster-name
     *                                     --resource-group
     *                                     [--query-examples]
     *                                     [--subscription]
     * ```
     *
     * @param {string} applicationTypeName Specify the application type name.
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_application_type_version.list = function (applicationTypeName, clusterName, resourceGroup) {
        return new az_sf_application_type_version_list_command_builder("az sf application-type version list", 'az_sf_application_type_version_list_command_result', applicationTypeName, clusterName, resourceGroup);
    };
    /**
     * Show the properties of an application type version on an Azure Service Fabric cluster.
     *
     * Syntax:
     * ```
     * az sf application-type version show --application-type-name
     *                                     --application-type-version
     *                                     --cluster-name
     *                                     --resource-group
     *                                     [--query-examples]
     *                                     [--subscription]
     * ```
     *
     * @param {string} applicationTypeName Specify the application type name.
     * @param {string} applicationTypeVersion Specify the application type version.
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_application_type_version.show = function (applicationTypeName, applicationTypeVersion, clusterName, resourceGroup) {
        return new az_sf_application_type_version_show_command_builder("az sf application-type version show", 'az_sf_application_type_version_show_command_result', applicationTypeName, applicationTypeVersion, clusterName, resourceGroup);
    };
    return az_sf_application_type_version;
}());
exports.az_sf_application_type_version = az_sf_application_type_version;
/** Manage application types on an Azure Service Fabric cluster. */
var az_sf_application_type = /** @class */ (function () {
    function az_sf_application_type() {
    }
    /**
     * Create a new application type on an Azure Service Fabric cluster.
     *
     * Syntax:
     * ```
     * az sf application-type create --application-type-name
     *                               --cluster-name
     *                               --resource-group
     *                               [--subscription]
     * ```
     *
     * @param {string} applicationTypeName Specify the application type name.
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_application_type.create = function (applicationTypeName, clusterName, resourceGroup) {
        return new az_sf_application_type_create_command_builder("az sf application-type create", 'az_sf_application_type_create_command_result', applicationTypeName, clusterName, resourceGroup);
    };
    /**
     * Delete an application type.
     *
     * Syntax:
     * ```
     * az sf application-type delete --application-type-name
     *                               --cluster-name
     *                               --resource-group
     *                               [--subscription]
     * ```
     *
     * @param {string} applicationTypeName Specify the application type name.
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_application_type["delete"] = function (applicationTypeName, clusterName, resourceGroup) {
        return new az_sf_application_type_delete_command_builder("az sf application-type delete", 'az_sf_application_type_delete_command_result', applicationTypeName, clusterName, resourceGroup);
    };
    /**
     * List application types of a given cluster.
     *
     * Syntax:
     * ```
     * az sf application-type list --cluster-name
     *                             --resource-group
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_application_type.list = function (clusterName, resourceGroup) {
        return new az_sf_application_type_list_command_builder("az sf application-type list", 'az_sf_application_type_list_command_result', clusterName, resourceGroup);
    };
    /**
     * Show the properties of an application type on an Azure Service Fabric cluster.
     *
     * Syntax:
     * ```
     * az sf application-type show --application-type-name
     *                             --cluster-name
     *                             --resource-group
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     *
     * @param {string} applicationTypeName Specify the application type name.
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_application_type.show = function (applicationTypeName, clusterName, resourceGroup) {
        return new az_sf_application_type_show_command_builder("az sf application-type show", 'az_sf_application_type_show_command_result', applicationTypeName, clusterName, resourceGroup);
    };
    return az_sf_application_type;
}());
exports.az_sf_application_type = az_sf_application_type;
/** Manage applications running on an Azure Service Fabric cluster. */
var az_sf_application = /** @class */ (function () {
    function az_sf_application() {
    }
    /**
     * Create a new application on an Azure Service Fabric cluster.
     *
     * Syntax:
     * ```
     * az sf application create --application-name
     *                          --application-type-name
     *                          --application-type-version
     *                          --cluster-name
     *                          --resource-group
     *                          [--application-parameters]
     *                          [--max-nodes]
     *                          [--min-nodes]
     *                          [--package-url]
     *                          [--subscription]
     * ```
     *
     * @param {string} applicationName Specify the application name.
     * @param {string} applicationTypeName Specify the application type name.
     * @param {string} applicationTypeVersion Specify the application type version.
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_application.create = function (applicationName, applicationTypeName, applicationTypeVersion, clusterName, resourceGroup) {
        return new az_sf_application_create_command_builder("az sf application create", 'az_sf_application_create_command_result', applicationName, applicationTypeName, applicationTypeVersion, clusterName, resourceGroup);
    };
    /**
     * Delete an application.
     *
     * Syntax:
     * ```
     * az sf application delete --application-name
     *                          --cluster-name
     *                          --resource-group
     *                          [--subscription]
     * ```
     *
     * @param {string} applicationName Specify the application name.
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_application["delete"] = function (applicationName, clusterName, resourceGroup) {
        return new az_sf_application_delete_command_builder("az sf application delete", 'az_sf_application_delete_command_result', applicationName, clusterName, resourceGroup);
    };
    /**
     * List applications of a given cluster.
     *
     * Syntax:
     * ```
     * az sf application list --cluster-name
     *                        --resource-group
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_application.list = function (clusterName, resourceGroup) {
        return new az_sf_application_list_command_builder("az sf application list", 'az_sf_application_list_command_result', clusterName, resourceGroup);
    };
    /**
     * Show the properties of an application on an Azure Service Fabric cluster.
     *
     * Syntax:
     * ```
     * az sf application show --application-name
     *                        --cluster-name
     *                        --resource-group
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} applicationName Specify the application name.
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_application.show = function (applicationName, clusterName, resourceGroup) {
        return new az_sf_application_show_command_builder("az sf application show", 'az_sf_application_show_command_result', applicationName, clusterName, resourceGroup);
    };
    /**
     * Update a Azure Service Fabric application. This allows updating the application parameters and/or upgrade the application type version which will trigger an application upgrade.
     *
     * Syntax:
     * ```
     * az sf application update --application-name
     *                          --cluster-name
     *                          --resource-group
     *                          [--application-parameters]
     *                          [--application-type-version]
     *                          [--consider-warning-as-error {false, true}]
     *                          [--failure-action {Manual, Rollback}]
     *                          [--force-restart {false, true}]
     *                          [--hc-retry-timeout]
     *                          [--hc-stable-duration]
     *                          [--hc-wait-duration]
     *                          [--max-nodes]
     *                          [--max-porcent-unhealthy-apps]
     *                          [--max-porcent-unhealthy-partitions]
     *                          [--max-porcent-unhealthy-replicas]
     *                          [--max-porcent-unhealthy-services]
     *                          [--min-nodes]
     *                          [--rep-check-timeout]
     *                          [--service-type-health-policy-map]
     *                          [--subscription]
     *                          [--ud-timeout]
     *                          [--upgrade-timeout]
     * ```
     *
     * @param {string} applicationName Specify the application name.
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_application.update = function (applicationName, clusterName, resourceGroup) {
        return new az_sf_application_update_command_builder("az sf application update", 'az_sf_application_update_command_result', applicationName, clusterName, resourceGroup);
    };
    return az_sf_application;
}());
exports.az_sf_application = az_sf_application;
/** Manage a cluster certificate. */
var az_sf_cluster_certificate = /** @class */ (function () {
    function az_sf_cluster_certificate() {
    }
    /**
     * Add a secondary cluster certificate to the cluster.
     *
     * Syntax:
     * ```
     * az sf cluster certificate add --cluster-name
     *                               --resource-group
     *                               [--cert-out-folder]
     *                               [--cert-subject-name]
     *                               [--certificate-file]
     *                               [--certificate-password]
     *                               [--secret-identifier]
     *                               [--subscription]
     *                               [--vault-name]
     *                               [--vault-resource-group]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_cluster_certificate.add = function (clusterName, resourceGroup) {
        return new az_sf_cluster_certificate_add_command_builder("az sf cluster certificate add", 'az_sf_cluster_certificate_add_command_result', clusterName, resourceGroup);
    };
    /**
     * Remove a certificate from a cluster.
     *
     * Syntax:
     * ```
     * az sf cluster certificate remove --cluster-name
     *                                  --resource-group
     *                                  --thumbprint
     *                                  [--subscription]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} thumbprint The cluster certificate thumbprint to be removed.
     */
    az_sf_cluster_certificate.remove = function (clusterName, resourceGroup, thumbprint) {
        return new az_sf_cluster_certificate_remove_command_builder("az sf cluster certificate remove", 'az_sf_cluster_certificate_remove_command_result', clusterName, resourceGroup, thumbprint);
    };
    return az_sf_cluster_certificate;
}());
exports.az_sf_cluster_certificate = az_sf_cluster_certificate;
/** Manage the client certificate of a cluster. */
var az_sf_cluster_client_certificate = /** @class */ (function () {
    function az_sf_cluster_client_certificate() {
    }
    /**
     * Add a common name or certificate thumbprint to the cluster for client authentication.
     *
     * Syntax:
     * ```
     * az sf cluster client-certificate add --cluster-name
     *                                      --resource-group
     *                                      [--admin-client-thumbprints]
     *                                      [--cert-common-name]
     *                                      [--cert-issuer-tp]
     *                                      [--client-cert-cn]
     *                                      [--is-admin]
     *                                      [--readonly-client-thumbprints]
     *                                      [--subscription]
     *                                      [--thumbprint]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_cluster_client_certificate.add = function (clusterName, resourceGroup) {
        return new az_sf_cluster_client_certificate_add_command_builder("az sf cluster client-certificate add", 'az_sf_cluster_client_certificate_add_command_result', clusterName, resourceGroup);
    };
    /**
     * Remove client certificates or subject names used for authentication.
     *
     * Syntax:
     * ```
     * az sf cluster client-certificate remove --cluster-name
     *                                         --resource-group
     *                                         [--cert-common-name]
     *                                         [--cert-issuer-tp]
     *                                         [--client-cert-cn]
     *                                         [--subscription]
     *                                         [--thumbprints]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_cluster_client_certificate.remove = function (clusterName, resourceGroup) {
        return new az_sf_cluster_client_certificate_remove_command_builder("az sf cluster client-certificate remove", 'az_sf_cluster_client_certificate_remove_command_result', clusterName, resourceGroup);
    };
    return az_sf_cluster_client_certificate;
}());
exports.az_sf_cluster_client_certificate = az_sf_cluster_client_certificate;
/** Manage the durability of a cluster. */
var az_sf_cluster_durability = /** @class */ (function () {
    function az_sf_cluster_durability() {
    }
    /**
     * Update the durability tier or VM SKU of a node type in the cluster.
     *
     * Syntax:
     * ```
     * az sf cluster durability update --cluster-name
     *                                 --durability-level {Bronze, Gold, Silver}
     *                                 --node-type
     *                                 --resource-group
     *                                 [--subscription]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {'Bronze' | 'Gold' | 'Silver'} durabilityLevel Durability level.
     * @param {string} nodeType The Node type name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_cluster_durability.update = function (clusterName, durabilityLevel, nodeType, resourceGroup) {
        return new az_sf_cluster_durability_update_command_builder("az sf cluster durability update", 'az_sf_cluster_durability_update_command_result', clusterName, durabilityLevel, nodeType, resourceGroup);
    };
    return az_sf_cluster_durability;
}());
exports.az_sf_cluster_durability = az_sf_cluster_durability;
/** Manage the node-type of a cluster. */
var az_sf_cluster_node_type = /** @class */ (function () {
    function az_sf_cluster_node_type() {
    }
    /**
     * Add a new node type to a cluster.
     *
     * Syntax:
     * ```
     * az sf cluster node-type add --capacity
     *                             --cluster-name
     *                             --node-type
     *                             --resource-group
     *                             --vm-password
     *                             --vm-user-name
     *                             [--durability-level {Bronze, Gold, Silver}]
     *                             [--subscription]
     *                             [--vm-sku]
     *                             [--vm-tier]
     * ```
     *
     * @param {string} capacity The capacity tag applied to nodes in the node type. The cluster resource manager uses these tags to understand how much capacity a node has.
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} nodeType The Node type name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vmPassword The password of the Vm.
     * @param {string} vmUserName The user name for logging to Vm. Default will be adminuser.
     */
    az_sf_cluster_node_type.add = function (capacity, clusterName, nodeType, resourceGroup, vmPassword, vmUserName) {
        return new az_sf_cluster_node_type_add_command_builder("az sf cluster node-type add", 'az_sf_cluster_node_type_add_command_result', capacity, clusterName, nodeType, resourceGroup, vmPassword, vmUserName);
    };
    return az_sf_cluster_node_type;
}());
exports.az_sf_cluster_node_type = az_sf_cluster_node_type;
/** Manage the node instance of a cluster. */
var az_sf_cluster_node = /** @class */ (function () {
    function az_sf_cluster_node() {
    }
    /**
     * Add nodes to a node type in a cluster.
     *
     * Syntax:
     * ```
     * az sf cluster node add --cluster-name
     *                        --node-type
     *                        --nodes-to-add
     *                        --resource-group
     *                        [--subscription]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} nodeType The Node type name.
     * @param {string} numberOfNodesToAdd Number of nodes to add.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_cluster_node.add = function (clusterName, nodeType, numberOfNodesToAdd, resourceGroup) {
        return new az_sf_cluster_node_add_command_builder("az sf cluster node add", 'az_sf_cluster_node_add_command_result', clusterName, nodeType, numberOfNodesToAdd, resourceGroup);
    };
    /**
     * Remove nodes from a node type in a cluster.
     *
     * Syntax:
     * ```
     * az sf cluster node remove --cluster-name
     *                           --node-type
     *                           --nodes-to-remove
     *                           --resource-group
     *                           [--subscription]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} nodeType The Node type name.
     * @param {string} numberOfNodesToRemove Number of nodes to remove.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_cluster_node.remove = function (clusterName, nodeType, numberOfNodesToRemove, resourceGroup) {
        return new az_sf_cluster_node_remove_command_builder("az sf cluster node remove", 'az_sf_cluster_node_remove_command_result', clusterName, nodeType, numberOfNodesToRemove, resourceGroup);
    };
    return az_sf_cluster_node;
}());
exports.az_sf_cluster_node = az_sf_cluster_node;
/** Manage the reliability of a cluster. */
var az_sf_cluster_reliability = /** @class */ (function () {
    function az_sf_cluster_reliability() {
    }
    /**
     * Update the reliability tier for the primary node in a cluster.
     *
     * Syntax:
     * ```
     * az sf cluster reliability update --cluster-name
     *                                  --reliability-level {Bronze, Gold, Platinum, Silver}
     *                                  --resource-group
     *                                  [--auto-add-node]
     *                                  [--subscription]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {'Bronze' | 'Gold' | 'Platinum' | 'Silver'} reliabilityLevel Durability level.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_cluster_reliability.update = function (clusterName, reliabilityLevel, resourceGroup) {
        return new az_sf_cluster_reliability_update_command_builder("az sf cluster reliability update", 'az_sf_cluster_reliability_update_command_result', clusterName, reliabilityLevel, resourceGroup);
    };
    return az_sf_cluster_reliability;
}());
exports.az_sf_cluster_reliability = az_sf_cluster_reliability;
/** Manage a cluster's settings. */
var az_sf_cluster_setting = /** @class */ (function () {
    function az_sf_cluster_setting() {
    }
    /**
     * Remove settings from a cluster.
     *
     * Syntax:
     * ```
     * az sf cluster setting remove --cluster-name
     *                              --resource-group
     *                              [--parameter]
     *                              [--section]
     *                              [--settings-section]
     *                              [--subscription]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_cluster_setting.remove = function (clusterName, resourceGroup) {
        return new az_sf_cluster_setting_remove_command_builder("az sf cluster setting remove", 'az_sf_cluster_setting_remove_command_result', clusterName, resourceGroup);
    };
    /**
     * Update the settings of a cluster.
     *
     * Syntax:
     * ```
     * az sf cluster setting set --cluster-name
     *                           --resource-group
     *                           [--parameter]
     *                           [--section]
     *                           [--settings-section]
     *                           [--subscription]
     *                           [--value]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_cluster_setting.set = function (clusterName, resourceGroup) {
        return new az_sf_cluster_setting_set_command_builder("az sf cluster setting set", 'az_sf_cluster_setting_set_command_result', clusterName, resourceGroup);
    };
    return az_sf_cluster_setting;
}());
exports.az_sf_cluster_setting = az_sf_cluster_setting;
/** Manage the upgrade type of a cluster. */
var az_sf_cluster_upgrade_type = /** @class */ (function () {
    function az_sf_cluster_upgrade_type() {
    }
    /**
     * Change the  upgrade type for a cluster.
     *
     * Syntax:
     * ```
     * az sf cluster upgrade-type set --cluster-name
     *                                --resource-group
     *                                --upgrade-mode {automatic, manual}
     *                                [--subscription]
     *                                [--version]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'automatic' | 'manual'} upgradeMode Cluster upgrade mode.
     */
    az_sf_cluster_upgrade_type.set = function (clusterName, resourceGroup, upgradeMode) {
        return new az_sf_cluster_upgrade_type_set_command_builder("az sf cluster upgrade-type set", 'az_sf_cluster_upgrade_type_set_command_result', clusterName, resourceGroup, upgradeMode);
    };
    return az_sf_cluster_upgrade_type;
}());
exports.az_sf_cluster_upgrade_type = az_sf_cluster_upgrade_type;
/** Manage an Azure Service Fabric cluster. */
var az_sf_cluster = /** @class */ (function () {
    function az_sf_cluster() {
    }
    /**
     * Create a new Azure Service Fabric cluster.
     *
     * Syntax:
     * ```
     * az sf cluster create --location
     *                      --resource-group
     *                      [--cert-out-folder]
     *                      [--cert-subject-name]
     *                      [--certificate-file]
     *                      [--certificate-password]
     *                      [--cluster-name]
     *                      [--cluster-size]
     *                      [--os {UbuntuServer1604, WindowsServer1709, WindowsServer1709withContainers, WindowsServer1803withContainers, WindowsServer1809withContainers, WindowsServer2012R2Datacenter, WindowsServer2016Datacenter, WindowsServer2016DatacenterwithContainers, WindowsServer2019Datacenter, WindowsServer2019DatacenterwithContainers}]
     *                      [--parameter-file]
     *                      [--secret-identifier]
     *                      [--subscription]
     *                      [--template-file]
     *                      [--vault-name]
     *                      [--vault-resource-group]
     *                      [--vm-password]
     *                      [--vm-sku]
     *                      [--vm-user-name]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_cluster.create = function (location, resourceGroup) {
        return new az_sf_cluster_create_command_builder("az sf cluster create", 'az_sf_cluster_create_command_result', location, resourceGroup);
    };
    /**
     * List cluster resources.
     *
     * Syntax:
     * ```
     * az sf cluster list [--query-examples]
     *                    [--resource-group]
     *                    [--subscription]
     * ```
     */
    az_sf_cluster.list = function () {
        return new az_sf_cluster_list_command_builder("az sf cluster list", 'az_sf_cluster_list_command_result');
    };
    /**
     * Gets a Service Fabric cluster resource.
     *
     * Syntax:
     * ```
     * az sf cluster show --cluster-name
     *                    --resource-group
     *                    [--query-examples]
     *                    [--subscription]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_cluster.show = function (clusterName, resourceGroup) {
        return new az_sf_cluster_show_command_builder("az sf cluster show", 'az_sf_cluster_show_command_result', clusterName, resourceGroup);
    };
    return az_sf_cluster;
}());
exports.az_sf_cluster = az_sf_cluster;
/** Manage client certificates of a manged cluster. */
var az_sf_managed_cluster_client_certificate = /** @class */ (function () {
    function az_sf_managed_cluster_client_certificate() {
    }
    /**
     * Add a new client certificate to the managed cluster.
     *
     * Syntax:
     * ```
     * az sf managed-cluster client-certificate add --cluster-name
     *                                              --resource-group
     *                                              [--common-name]
     *                                              [--is-admin {false, true}]
     *                                              [--issuer-thumbprint]
     *                                              [--subscription]
     *                                              [--thumbprint]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_managed_cluster_client_certificate.add = function (clusterName, resourceGroup) {
        return new az_sf_managed_cluster_client_certificate_add_command_builder("az sf managed-cluster client-certificate add", 'az_sf_managed_cluster_client_certificate_add_command_result', clusterName, resourceGroup);
    };
    /**
     * Delete a client certificate from the managed cluster.
     *
     * Syntax:
     * ```
     * az sf managed-cluster client-certificate delete --cluster-name
     *                                                 --resource-group
     *                                                 [--common-name]
     *                                                 [--subscription]
     *                                                 [--thumbprint]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_managed_cluster_client_certificate["delete"] = function (clusterName, resourceGroup) {
        return new az_sf_managed_cluster_client_certificate_delete_command_builder("az sf managed-cluster client-certificate delete", 'az_sf_managed_cluster_client_certificate_delete_command_result', clusterName, resourceGroup);
    };
    return az_sf_managed_cluster_client_certificate;
}());
exports.az_sf_managed_cluster_client_certificate = az_sf_managed_cluster_client_certificate;
/** Manage an Azure Service Fabric managed cluster. */
var az_sf_managed_cluster = /** @class */ (function () {
    function az_sf_managed_cluster() {
    }
    /**
     * Delete a managed cluster.
     *
     * Syntax:
     * ```
     * az sf managed-cluster create --admin-password
     *                              --cluster-name
     *                              --resource-group
     *                              [--admin-user-name]
     *                              [--cert-common-name]
     *                              [--cert-is-admin {false, true}]
     *                              [--cert-issuer-thumbprint]
     *                              [--cert-thumbprint]
     *                              [--client-connection-port]
     *                              [--dns-name]
     *                              [--gateway-connection-port]
     *                              [--location]
     *                              [--sku]
     *                              [--subscription]
     *                              [--tags]
     * ```
     *
     * @param {string} adminPassword Admin password used for the virtual machines.
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_managed_cluster.create = function (adminPassword, clusterName, resourceGroup) {
        return new az_sf_managed_cluster_create_command_builder("az sf managed-cluster create", 'az_sf_managed_cluster_create_command_result', adminPassword, clusterName, resourceGroup);
    };
    /**
     * Delete a managed cluster.
     *
     * Syntax:
     * ```
     * az sf managed-cluster delete --cluster-name
     *                              --resource-group
     *                              [--subscription]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_managed_cluster["delete"] = function (clusterName, resourceGroup) {
        return new az_sf_managed_cluster_delete_command_builder("az sf managed-cluster delete", 'az_sf_managed_cluster_delete_command_result', clusterName, resourceGroup);
    };
    /**
     * List managed clusters.
     *
     * Syntax:
     * ```
     * az sf managed-cluster list [--query-examples]
     *                            [--resource-group]
     *                            [--subscription]
     * ```
     */
    az_sf_managed_cluster.list = function () {
        return new az_sf_managed_cluster_list_command_builder("az sf managed-cluster list", 'az_sf_managed_cluster_list_command_result');
    };
    /**
     * Show the properties of an Azure Service Fabric managed cluster.
     *
     * Syntax:
     * ```
     * az sf managed-cluster show --cluster-name
     *                            --resource-group
     *                            [--query-examples]
     *                            [--subscription]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_managed_cluster.show = function (clusterName, resourceGroup) {
        return new az_sf_managed_cluster_show_command_builder("az sf managed-cluster show", 'az_sf_managed_cluster_show_command_result', clusterName, resourceGroup);
    };
    /**
     * Update a managed cluster.
     *
     * Syntax:
     * ```
     * az sf managed-cluster update --cluster-name
     *                              --resource-group
     *                              [--client-connection-port]
     *                              [--dns-name]
     *                              [--gateway-connection-port]
     *                              [--subscription]
     *                              [--tags]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_managed_cluster.update = function (clusterName, resourceGroup) {
        return new az_sf_managed_cluster_update_command_builder("az sf managed-cluster update", 'az_sf_managed_cluster_update_command_result', clusterName, resourceGroup);
    };
    return az_sf_managed_cluster;
}());
exports.az_sf_managed_cluster = az_sf_managed_cluster;
/** Perform operations on nodes of a node type on managed clusters. */
var az_sf_managed_node_type_node = /** @class */ (function () {
    function az_sf_managed_node_type_node() {
    }
    /**
     * Delete nodes of a node type.
     *
     * Syntax:
     * ```
     * az sf managed-node-type node delete --cluster-name
     *                                     --name
     *                                     --node-name
     *                                     --resource-group
     *                                     [--force {false, true}]
     *                                     [--subscription]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} nodeTypeName Node type name.
     * @param {string} nodeName List of target nodes to perform the operation.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_managed_node_type_node["delete"] = function (clusterName, nodeTypeName, nodeName, resourceGroup) {
        return new az_sf_managed_node_type_node_delete_command_builder("az sf managed-node-type node delete", 'az_sf_managed_node_type_node_delete_command_result', clusterName, nodeTypeName, nodeName, resourceGroup);
    };
    /**
     * Reimage nodes of a node type.
     *
     * Syntax:
     * ```
     * az sf managed-node-type node reimage --cluster-name
     *                                      --name
     *                                      --node-name
     *                                      --resource-group
     *                                      [--force {false, true}]
     *                                      [--subscription]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} nodeTypeName Node type name.
     * @param {string} nodeName List of target nodes to perform the operation.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_managed_node_type_node.reimage = function (clusterName, nodeTypeName, nodeName, resourceGroup) {
        return new az_sf_managed_node_type_node_reimage_command_builder("az sf managed-node-type node reimage", 'az_sf_managed_node_type_node_reimage_command_result', clusterName, nodeTypeName, nodeName, resourceGroup);
    };
    /**
     * Restart nodes of a node type.
     *
     * Syntax:
     * ```
     * az sf managed-node-type node restart --cluster-name
     *                                      --name
     *                                      --node-name
     *                                      --resource-group
     *                                      [--force {false, true}]
     *                                      [--subscription]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} nodeTypeName Node type name.
     * @param {string} nodeName List of target nodes to perform the operation.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_managed_node_type_node.restart = function (clusterName, nodeTypeName, nodeName, resourceGroup) {
        return new az_sf_managed_node_type_node_restart_command_builder("az sf managed-node-type node restart", 'az_sf_managed_node_type_node_restart_command_result', clusterName, nodeTypeName, nodeName, resourceGroup);
    };
    return az_sf_managed_node_type_node;
}());
exports.az_sf_managed_node_type_node = az_sf_managed_node_type_node;
/** Managed vm extension on a node type on managed clusters. */
var az_sf_managed_node_type_vm_extension = /** @class */ (function () {
    function az_sf_managed_node_type_vm_extension() {
    }
    /**
     * Add an extension to the node type.
     *
     * Syntax:
     * ```
     * az sf managed-node-type vm-extension add --cluster-name
     *                                          --extension-name
     *                                          --extension-type
     *                                          --name
     *                                          --publisher
     *                                          --resource-group
     *                                          --type-handler-version
     *                                          [--auto-upgrade {false, true}]
     *                                          [--force-update-tag]
     *                                          [--protected-setting]
     *                                          [--provision-after]
     *                                          [--setting]
     *                                          [--subscription]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} extensionName Extension name.
     * @param {string} extensionType Specifies the type of the extension; an example is "CustomScriptExtension".
     * @param {string} nodeTypeName Node type name.
     * @param {string} publisher The name of the extension handler publisher.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} typeHandlerVersion Specifies the version of the script handler.
     */
    az_sf_managed_node_type_vm_extension.add = function (clusterName, extensionName, extensionType, nodeTypeName, publisher, resourceGroup, typeHandlerVersion) {
        return new az_sf_managed_node_type_vm_extension_add_command_builder("az sf managed-node-type vm-extension add", 'az_sf_managed_node_type_vm_extension_add_command_result', clusterName, extensionName, extensionType, nodeTypeName, publisher, resourceGroup, typeHandlerVersion);
    };
    /**
     * Delete an extension to the node type.
     *
     * Syntax:
     * ```
     * az sf managed-node-type vm-extension delete --cluster-name
     *                                             --extension-name
     *                                             --name
     *                                             --resource-group
     *                                             [--subscription]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} extensionName Extension name.
     * @param {string} nodeTypeName Node type name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_managed_node_type_vm_extension["delete"] = function (clusterName, extensionName, nodeTypeName, resourceGroup) {
        return new az_sf_managed_node_type_vm_extension_delete_command_builder("az sf managed-node-type vm-extension delete", 'az_sf_managed_node_type_vm_extension_delete_command_result', clusterName, extensionName, nodeTypeName, resourceGroup);
    };
    return az_sf_managed_node_type_vm_extension;
}());
exports.az_sf_managed_node_type_vm_extension = az_sf_managed_node_type_vm_extension;
/** Managed vm secrets on a node type on managed clusters. */
var az_sf_managed_node_type_vm_secret = /** @class */ (function () {
    function az_sf_managed_node_type_vm_secret() {
    }
    /**
     * Add a secret to the node type.
     *
     * Syntax:
     * ```
     * az sf managed-node-type vm-secret add --certificate-store
     *                                       --certificate-url
     *                                       --cluster-name
     *                                       --name
     *                                       --resource-group
     *                                       --source-vault-id
     *                                       [--subscription]
     * ```
     *
     * @param {string} certificateStore Specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account.
     * @param {string} certificateUrl This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](<a href="https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add">https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add</a>). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>}/.
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} nodeTypeName Node type name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} sourceVaultId Key Vault resource id containing the certificates.
     */
    az_sf_managed_node_type_vm_secret.add = function (certificateStore, certificateUrl, clusterName, nodeTypeName, resourceGroup, sourceVaultId) {
        return new az_sf_managed_node_type_vm_secret_add_command_builder("az sf managed-node-type vm-secret add", 'az_sf_managed_node_type_vm_secret_add_command_result', certificateStore, certificateUrl, clusterName, nodeTypeName, resourceGroup, sourceVaultId);
    };
    return az_sf_managed_node_type_vm_secret;
}());
exports.az_sf_managed_node_type_vm_secret = az_sf_managed_node_type_vm_secret;
/** Manage a node type of an Azure Service Fabric managed cluster. */
var az_sf_managed_node_type = /** @class */ (function () {
    function az_sf_managed_node_type() {
    }
    /**
     * Delete a managed cluster.
     *
     * Syntax:
     * ```
     * az sf managed-node-type create --cluster-name
     *                                --instance-count
     *                                --name
     *                                --resource-group
     *                                [--app-end-port]
     *                                [--app-start-port]
     *                                [--capacity]
     *                                [--disk-size]
     *                                [--ephemeral-end-port]
     *                                [--ephemeral-start-port]
     *                                [--placement-property]
     *                                [--primary {false, true}]
     *                                [--subscription]
     *                                [--vm-image-offer]
     *                                [--vm-image-publisher]
     *                                [--vm-image-sku]
     *                                [--vm-image-version]
     *                                [--vm-size]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} instanceCount Essage = "The number of nodes in the node type.
     * @param {string} nodeTypeName Node type name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_managed_node_type.create = function (clusterName, instanceCount, nodeTypeName, resourceGroup) {
        return new az_sf_managed_node_type_create_command_builder("az sf managed-node-type create", 'az_sf_managed_node_type_create_command_result', clusterName, instanceCount, nodeTypeName, resourceGroup);
    };
    /**
     * Delete node type from a cluster.
     *
     * Syntax:
     * ```
     * az sf managed-node-type delete --cluster-name
     *                                --name
     *                                --resource-group
     *                                [--subscription]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} nodeTypeName Node type name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_managed_node_type["delete"] = function (clusterName, nodeTypeName, resourceGroup) {
        return new az_sf_managed_node_type_delete_command_builder("az sf managed-node-type delete", 'az_sf_managed_node_type_delete_command_result', clusterName, nodeTypeName, resourceGroup);
    };
    /**
     * List node types of a managed cluster.
     *
     * Syntax:
     * ```
     * az sf managed-node-type list --cluster-name
     *                              --resource-group
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_managed_node_type.list = function (clusterName, resourceGroup) {
        return new az_sf_managed_node_type_list_command_builder("az sf managed-node-type list", 'az_sf_managed_node_type_list_command_result', clusterName, resourceGroup);
    };
    /**
     * Show the properties of a node type.
     *
     * Syntax:
     * ```
     * az sf managed-node-type show --cluster-name
     *                              --name
     *                              --resource-group
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} nodeTypeName Node type name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_managed_node_type.show = function (clusterName, nodeTypeName, resourceGroup) {
        return new az_sf_managed_node_type_show_command_builder("az sf managed-node-type show", 'az_sf_managed_node_type_show_command_result', clusterName, nodeTypeName, resourceGroup);
    };
    /**
     * Update a managed cluster.
     *
     * Syntax:
     * ```
     * az sf managed-node-type update --cluster-name
     *                                --name
     *                                --resource-group
     *                                [--app-end-port]
     *                                [--app-start-port]
     *                                [--capacity]
     *                                [--ephemeral-end-port]
     *                                [--ephemeral-start-port]
     *                                [--instance-count]
     *                                [--placement-property]
     *                                [--subscription]
     * ```
     *
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} nodeTypeName Node type name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_managed_node_type.update = function (clusterName, nodeTypeName, resourceGroup) {
        return new az_sf_managed_node_type_update_command_builder("az sf managed-node-type update", 'az_sf_managed_node_type_update_command_result', clusterName, nodeTypeName, resourceGroup);
    };
    return az_sf_managed_node_type;
}());
exports.az_sf_managed_node_type = az_sf_managed_node_type;
/** Manage services running on an Azure Service Fabric cluster. */
var az_sf_service = /** @class */ (function () {
    function az_sf_service() {
    }
    /**
     * Create a new service on an Azure Service Fabric cluster.
     *
     * Syntax:
     * ```
     * az sf service create --application
     *                      --cluster-name
     *                      --name
     *                      --resource-group
     *                      --service-type
     *                      --state {stateful, stateless}
     *                      [--default-move-cost {High, Low, Medium, Zero}]
     *                      [--instance-count]
     *                      [--min-replica]
     *                      [--partition-scheme {named, singleton, uniformInt64}]
     *                      [--subscription]
     *                      [--target-replica]
     * ```
     *
     * @param {string} applicationName Specify the name of the service. The application name must be a prefix of the service name, for example: appName~serviceName.
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} serviceName Specify the name of the service. The application name must be a prefix of the service name, for example: appName~serviceName.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceType Specify the service type name of the application, it should exist in the application manifest.
     * @param {'stateful' | 'stateless'} state Specify if the service is stateless or stateful.
     */
    az_sf_service.create = function (applicationName, clusterName, serviceName, resourceGroup, serviceType, state) {
        return new az_sf_service_create_command_builder("az sf service create", 'az_sf_service_create_command_result', applicationName, clusterName, serviceName, resourceGroup, serviceType, state);
    };
    /**
     * Delete a service.
     *
     * Syntax:
     * ```
     * az sf service delete --application-name
     *                      --cluster-name
     *                      --name
     *                      --resource-group
     *                      [--subscription]
     * ```
     *
     * @param {string} applicationName The name of the application resource.
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} serviceName Specify the name of the service. The application name must be a prefix of the service name, for example: appName~serviceName.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_service["delete"] = function (applicationName, clusterName, serviceName, resourceGroup) {
        return new az_sf_service_delete_command_builder("az sf service delete", 'az_sf_service_delete_command_result', applicationName, clusterName, serviceName, resourceGroup);
    };
    /**
     * List services of a given application.
     *
     * Syntax:
     * ```
     * az sf service list --application-name
     *                    --cluster-name
     *                    --resource-group
     *                    [--query-examples]
     *                    [--subscription]
     * ```
     *
     * @param {string} applicationName The name of the application resource.
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_service.list = function (applicationName, clusterName, resourceGroup) {
        return new az_sf_service_list_command_builder("az sf service list", 'az_sf_service_list_command_result', applicationName, clusterName, resourceGroup);
    };
    /**
     * Get a service.
     *
     * Syntax:
     * ```
     * az sf service show --application-name
     *                    --cluster-name
     *                    --name
     *                    --resource-group
     *                    [--query-examples]
     *                    [--subscription]
     * ```
     *
     * @param {string} applicationName The name of the application resource.
     * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
     * @param {string} serviceName Specify the name of the service. The application name must be a prefix of the service name, for example: appName~serviceName.
     * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sf_service.show = function (applicationName, clusterName, serviceName, resourceGroup) {
        return new az_sf_service_show_command_builder("az sf service show", 'az_sf_service_show_command_result', applicationName, clusterName, serviceName, resourceGroup);
    };
    return az_sf_service;
}());
exports.az_sf_service = az_sf_service;
/** Manage and administer Azure Service Fabric clusters. */
var az_sf = /** @class */ (function () {
    function az_sf() {
    }
    return az_sf;
}());
exports.az_sf = az_sf;
/**
 * Add a new certificate to the Virtual Machine Scale Sets that make up the cluster to be used by hosted applications.
 *
 * Syntax:
 * ```
 * az sf application certificate add --cluster-name
 *                                   --resource-group
 *                                   [--cert-out-folder]
 *                                   [--cert-subject-name]
 *                                   [--certificate-file]
 *                                   [--certificate-password]
 *                                   [--secret-identifier]
 *                                   [--subscription]
 *                                   [--vault-name]
 *                                   [--vault-resource-group]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_application_certificate_add_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_application_certificate_add_command_builder, _super);
    function az_sf_application_certificate_add_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_application_certificate_add_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_application_certificate_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The folder of the new certificate file to be created. */
    az_sf_application_certificate_add_command_builder.prototype.certificateOutputFolder = function (value) {
        this.setFlag("--certificate-output-folder", value);
        return this;
    };
    /** The subject name of the certificate to be created. */
    az_sf_application_certificate_add_command_builder.prototype.certificateSubjectName = function (value) {
        this.setFlag("--certificate-subject-name", value);
        return this;
    };
    /** The existing certificate file path for the primary cluster certificate. */
    az_sf_application_certificate_add_command_builder.prototype.certificateFile = function (value) {
        this.setFlag("--certificate-file", value);
        return this;
    };
    /** The password of the certificate file. */
    az_sf_application_certificate_add_command_builder.prototype.certificatePassword = function (value) {
        this.setFlag("--certificate-password", value);
        return this;
    };
    /** The existing Azure key vault secret URL. */
    az_sf_application_certificate_add_command_builder.prototype.secretIdentifier = function (value) {
        this.setFlag("--secret-identifier", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_application_certificate_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Azure key vault name, it not given it will be the cluster resource group name. */
    az_sf_application_certificate_add_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Key vault resource group name, if not given it will be cluster resource group name. */
    az_sf_application_certificate_add_command_builder.prototype.vaultResourceGroup = function (value) {
        this.setFlag("--vault-resource-group", value);
        return this;
    };
    return az_sf_application_certificate_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new application type on an Azure Service Fabric cluster.
 *
 * Syntax:
 * ```
 * az sf application-type version create --application-type-name
 *                                       --application-type-version
 *                                       --cluster-name
 *                                       --package-url
 *                                       --resource-group
 *                                       [--subscription]
 * ```
 *
 * @param {string} applicationTypeName Specify the application type name.
 * @param {string} applicationTypeVersion Specify the application type version.
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} packageUrl Specify the url of the application package sfpkg file.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_application_type_version_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_application_type_version_create_command_builder, _super);
    function az_sf_application_type_version_create_command_builder(commandPath, resultDataTypeName, applicationTypeName, applicationTypeVersion, clusterName, packageUrl, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationTypeName(applicationTypeName);
        _this.applicationTypeVersion(applicationTypeVersion);
        _this.clusterName(clusterName);
        _this.packageUrl(packageUrl);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the application type name. */
    az_sf_application_type_version_create_command_builder.prototype.applicationTypeName = function (value) {
        this.setFlag("--application-type-name", value);
        return this;
    };
    /** Specify the application type version. */
    az_sf_application_type_version_create_command_builder.prototype.applicationTypeVersion = function (value) {
        this.setFlag("--application-type-version", value);
        return this;
    };
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_application_type_version_create_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the url of the application package sfpkg file. */
    az_sf_application_type_version_create_command_builder.prototype.packageUrl = function (value) {
        this.setFlag("--package-url", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_application_type_version_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_application_type_version_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_application_type_version_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an application type version.
 *
 * Syntax:
 * ```
 * az sf application-type version delete --application-type-name
 *                                       --application-type-version
 *                                       --cluster-name
 *                                       --resource-group
 *                                       [--subscription]
 * ```
 *
 * @param {string} applicationTypeName Specify the application type name.
 * @param {string} applicationTypeVersion Specify the application type version.
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_application_type_version_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_application_type_version_delete_command_builder, _super);
    function az_sf_application_type_version_delete_command_builder(commandPath, resultDataTypeName, applicationTypeName, applicationTypeVersion, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationTypeName(applicationTypeName);
        _this.applicationTypeVersion(applicationTypeVersion);
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the application type name. */
    az_sf_application_type_version_delete_command_builder.prototype.applicationTypeName = function (value) {
        this.setFlag("--application-type-name", value);
        return this;
    };
    /** Specify the application type version. */
    az_sf_application_type_version_delete_command_builder.prototype.applicationTypeVersion = function (value) {
        this.setFlag("--application-type-version", value);
        return this;
    };
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_application_type_version_delete_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_application_type_version_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_application_type_version_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_application_type_version_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List version of a given application type.
 *
 * Syntax:
 * ```
 * az sf application-type version list --application-type-name
 *                                     --cluster-name
 *                                     --resource-group
 *                                     [--query-examples]
 *                                     [--subscription]
 * ```
 *
 * @param {string} applicationTypeName Specify the application type name.
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_application_type_version_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_application_type_version_list_command_builder, _super);
    function az_sf_application_type_version_list_command_builder(commandPath, resultDataTypeName, applicationTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationTypeName(applicationTypeName);
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the application type name. */
    az_sf_application_type_version_list_command_builder.prototype.applicationTypeName = function (value) {
        this.setFlag("--application-type-name", value);
        return this;
    };
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_application_type_version_list_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_application_type_version_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sf_application_type_version_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_application_type_version_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_application_type_version_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the properties of an application type version on an Azure Service Fabric cluster.
 *
 * Syntax:
 * ```
 * az sf application-type version show --application-type-name
 *                                     --application-type-version
 *                                     --cluster-name
 *                                     --resource-group
 *                                     [--query-examples]
 *                                     [--subscription]
 * ```
 *
 * @param {string} applicationTypeName Specify the application type name.
 * @param {string} applicationTypeVersion Specify the application type version.
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_application_type_version_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_application_type_version_show_command_builder, _super);
    function az_sf_application_type_version_show_command_builder(commandPath, resultDataTypeName, applicationTypeName, applicationTypeVersion, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationTypeName(applicationTypeName);
        _this.applicationTypeVersion(applicationTypeVersion);
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the application type name. */
    az_sf_application_type_version_show_command_builder.prototype.applicationTypeName = function (value) {
        this.setFlag("--application-type-name", value);
        return this;
    };
    /** Specify the application type version. */
    az_sf_application_type_version_show_command_builder.prototype.applicationTypeVersion = function (value) {
        this.setFlag("--application-type-version", value);
        return this;
    };
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_application_type_version_show_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_application_type_version_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sf_application_type_version_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_application_type_version_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_application_type_version_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new application type on an Azure Service Fabric cluster.
 *
 * Syntax:
 * ```
 * az sf application-type create --application-type-name
 *                               --cluster-name
 *                               --resource-group
 *                               [--subscription]
 * ```
 *
 * @param {string} applicationTypeName Specify the application type name.
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_application_type_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_application_type_create_command_builder, _super);
    function az_sf_application_type_create_command_builder(commandPath, resultDataTypeName, applicationTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationTypeName(applicationTypeName);
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the application type name. */
    az_sf_application_type_create_command_builder.prototype.applicationTypeName = function (value) {
        this.setFlag("--application-type-name", value);
        return this;
    };
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_application_type_create_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_application_type_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_application_type_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_application_type_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an application type.
 *
 * Syntax:
 * ```
 * az sf application-type delete --application-type-name
 *                               --cluster-name
 *                               --resource-group
 *                               [--subscription]
 * ```
 *
 * @param {string} applicationTypeName Specify the application type name.
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_application_type_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_application_type_delete_command_builder, _super);
    function az_sf_application_type_delete_command_builder(commandPath, resultDataTypeName, applicationTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationTypeName(applicationTypeName);
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the application type name. */
    az_sf_application_type_delete_command_builder.prototype.applicationTypeName = function (value) {
        this.setFlag("--application-type-name", value);
        return this;
    };
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_application_type_delete_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_application_type_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_application_type_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_application_type_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List application types of a given cluster.
 *
 * Syntax:
 * ```
 * az sf application-type list --cluster-name
 *                             --resource-group
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_application_type_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_application_type_list_command_builder, _super);
    function az_sf_application_type_list_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_application_type_list_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_application_type_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sf_application_type_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_application_type_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_application_type_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the properties of an application type on an Azure Service Fabric cluster.
 *
 * Syntax:
 * ```
 * az sf application-type show --application-type-name
 *                             --cluster-name
 *                             --resource-group
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 *
 * @param {string} applicationTypeName Specify the application type name.
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_application_type_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_application_type_show_command_builder, _super);
    function az_sf_application_type_show_command_builder(commandPath, resultDataTypeName, applicationTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationTypeName(applicationTypeName);
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the application type name. */
    az_sf_application_type_show_command_builder.prototype.applicationTypeName = function (value) {
        this.setFlag("--application-type-name", value);
        return this;
    };
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_application_type_show_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_application_type_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sf_application_type_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_application_type_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_application_type_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new application on an Azure Service Fabric cluster.
 *
 * Syntax:
 * ```
 * az sf application create --application-name
 *                          --application-type-name
 *                          --application-type-version
 *                          --cluster-name
 *                          --resource-group
 *                          [--application-parameters]
 *                          [--max-nodes]
 *                          [--min-nodes]
 *                          [--package-url]
 *                          [--subscription]
 * ```
 *
 * @param {string} applicationName Specify the application name.
 * @param {string} applicationTypeName Specify the application type name.
 * @param {string} applicationTypeVersion Specify the application type version.
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_application_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_application_create_command_builder, _super);
    function az_sf_application_create_command_builder(commandPath, resultDataTypeName, applicationName, applicationTypeName, applicationTypeVersion, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationName(applicationName);
        _this.applicationTypeName(applicationTypeName);
        _this.applicationTypeVersion(applicationTypeVersion);
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the application name. */
    az_sf_application_create_command_builder.prototype.applicationName = function (value) {
        this.setFlag("--application-name", value);
        return this;
    };
    /** Specify the application type name. */
    az_sf_application_create_command_builder.prototype.applicationTypeName = function (value) {
        this.setFlag("--application-type-name", value);
        return this;
    };
    /** Specify the application type version. */
    az_sf_application_create_command_builder.prototype.applicationTypeVersion = function (value) {
        this.setFlag("--application-type-version", value);
        return this;
    };
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_application_create_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_application_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify the application parameters as key/value pairs. These parameters must exist in the application manifest. for example: --application-parameters param1=value1 param2=value2. */
    az_sf_application_create_command_builder.prototype.applicationParameters = function (value) {
        this.setFlag("--application-parameters", value);
        return this;
    };
    /** Specify the maximum number of nodes on which to place an application. The value of this parameter must be a non-negative integer. The default value is 0, which indicates the application can be placed on any number of nodes in the cluster. */
    az_sf_application_create_command_builder.prototype.maximumNodes = function (value) {
        this.setFlag("--maximum-nodes", value);
        return this;
    };
    /** Specify the minimum number of nodes where Service Fabric will reserve capacity for this application, this does not mean that the application is guaranteed to have replicas on all those nodes. The value of this parameter must be a non-negative integer. Default value for this is zero, which means no capacity is reserved for the application. */
    az_sf_application_create_command_builder.prototype.minimumNodes = function (value) {
        this.setFlag("--minimum-nodes", value);
        return this;
    };
    /** Specify the url of the application package sfpkg file. */
    az_sf_application_create_command_builder.prototype.packageUrl = function (value) {
        this.setFlag("--package-url", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_application_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_application_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an application.
 *
 * Syntax:
 * ```
 * az sf application delete --application-name
 *                          --cluster-name
 *                          --resource-group
 *                          [--subscription]
 * ```
 *
 * @param {string} applicationName Specify the application name.
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_application_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_application_delete_command_builder, _super);
    function az_sf_application_delete_command_builder(commandPath, resultDataTypeName, applicationName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationName(applicationName);
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the application name. */
    az_sf_application_delete_command_builder.prototype.applicationName = function (value) {
        this.setFlag("--application-name", value);
        return this;
    };
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_application_delete_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_application_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_application_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_application_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List applications of a given cluster.
 *
 * Syntax:
 * ```
 * az sf application list --cluster-name
 *                        --resource-group
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_application_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_application_list_command_builder, _super);
    function az_sf_application_list_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_application_list_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_application_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sf_application_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_application_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_application_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the properties of an application on an Azure Service Fabric cluster.
 *
 * Syntax:
 * ```
 * az sf application show --application-name
 *                        --cluster-name
 *                        --resource-group
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} applicationName Specify the application name.
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_application_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_application_show_command_builder, _super);
    function az_sf_application_show_command_builder(commandPath, resultDataTypeName, applicationName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationName(applicationName);
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the application name. */
    az_sf_application_show_command_builder.prototype.applicationName = function (value) {
        this.setFlag("--application-name", value);
        return this;
    };
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_application_show_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_application_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sf_application_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_application_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_application_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a Azure Service Fabric application. This allows updating the application parameters and/or upgrade the application type version which will trigger an application upgrade.
 *
 * Syntax:
 * ```
 * az sf application update --application-name
 *                          --cluster-name
 *                          --resource-group
 *                          [--application-parameters]
 *                          [--application-type-version]
 *                          [--consider-warning-as-error {false, true}]
 *                          [--failure-action {Manual, Rollback}]
 *                          [--force-restart {false, true}]
 *                          [--hc-retry-timeout]
 *                          [--hc-stable-duration]
 *                          [--hc-wait-duration]
 *                          [--max-nodes]
 *                          [--max-porcent-unhealthy-apps]
 *                          [--max-porcent-unhealthy-partitions]
 *                          [--max-porcent-unhealthy-replicas]
 *                          [--max-porcent-unhealthy-services]
 *                          [--min-nodes]
 *                          [--rep-check-timeout]
 *                          [--service-type-health-policy-map]
 *                          [--subscription]
 *                          [--ud-timeout]
 *                          [--upgrade-timeout]
 * ```
 *
 * @param {string} applicationName Specify the application name.
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_application_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_application_update_command_builder, _super);
    function az_sf_application_update_command_builder(commandPath, resultDataTypeName, applicationName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationName(applicationName);
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the application name. */
    az_sf_application_update_command_builder.prototype.applicationName = function (value) {
        this.setFlag("--application-name", value);
        return this;
    };
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_application_update_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_application_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify the application parameters as key/value pairs. These parameters must exist in the application manifest. for example: --application-parameters param1=value1 param2=value2. */
    az_sf_application_update_command_builder.prototype.applicationParameters = function (value) {
        this.setFlag("--application-parameters", value);
        return this;
    };
    /** Specify the application type version. */
    az_sf_application_update_command_builder.prototype.applicationTypeVersion = function (value) {
        this.setFlag("--application-type-version", value);
        return this;
    };
    /** Indicates whether to treat a warning health event as an error event during health evaluation. */
    az_sf_application_update_command_builder.prototype.considerWarningAsError = function (value) {
        this.setFlag("--consider-warning-as-error", value.toString());
        return this;
    };
    /** Specify the action to take if the monitored upgrade fails. The acceptable values for this parameter are Rollback or Manual. */
    az_sf_application_update_command_builder.prototype.failureAction = function (value) {
        this.setFlag("--failure-action", value);
        return this;
    };
    /** Indicates that the service host restarts even if the upgrade is a configuration-only change. */
    az_sf_application_update_command_builder.prototype.forceRestart = function (value) {
        this.setFlag("--force-restart", value.toString());
        return this;
    };
    /** Specify the duration, in seconds, after which Service Fabric retries the health check if the previous health check fails. */
    az_sf_application_update_command_builder.prototype.healthCheckRetryTimeout = function (value) {
        this.setFlag("--health-check-retry-timeout", value);
        return this;
    };
    /** Specify the duration, in seconds, that Service Fabric waits in order to verify that the application is stable before moving to the next upgrade domain or completing the upgrade. This wait duration prevents undetected changes of health right after the health check is performed. */
    az_sf_application_update_command_builder.prototype.healthCheckStableDuration = function (value) {
        this.setFlag("--health-check-stable-duration", value);
        return this;
    };
    /** Specify the duration, in seconds, that Service Fabric waits before it performs the initial health check after it finishes the upgrade on the upgrade domain. */
    az_sf_application_update_command_builder.prototype.healthCheckWaitDuration = function (value) {
        this.setFlag("--health-check-wait-duration", value);
        return this;
    };
    /** Specify the maximum number of nodes on which to place an application. The value of this parameter must be a non-negative integer. The default value is 0, which indicates the application can be placed on any number of nodes in the cluster. */
    az_sf_application_update_command_builder.prototype.maximumNodes = function (value) {
        this.setFlag("--maximum-nodes", value);
        return this;
    };
    /** Specify the maximum percentage of the application instances deployed on the nodes in the cluster that have a health state of error before the application health state for the cluster is error. Allowed values are form 0 to 100. */
    az_sf_application_update_command_builder.prototype.maxPorcentUnhealthyApps = function (value) {
        this.setFlag("--max-porcent-unhealthy-apps", value);
        return this;
    };
    /** Specify the maximum percent of unhelthy partitions per service allowed by the health policy for the default service type to use for the monitored upgrade. Allowed values are form 0 to 100. */
    az_sf_application_update_command_builder.prototype.maxPorcentUnhealthyPartitions = function (value) {
        this.setFlag("--max-porcent-unhealthy-partitions", value);
        return this;
    };
    /** Specify the maximum percent of unhelthy replicas per service allowed by the health policy for the default service type to use for the monitored upgrade. Allowed values are form 0 to 100. */
    az_sf_application_update_command_builder.prototype.maxPorcentUnhealthyReplicas = function (value) {
        this.setFlag("--max-porcent-unhealthy-replicas", value);
        return this;
    };
    /** Specify the maximum percent of unhelthy services allowed by the health policy for the default service type to use for the monitored upgrade. Allowed values are form 0 to 100. */
    az_sf_application_update_command_builder.prototype.maxPorcentUnhealthyServices = function (value) {
        this.setFlag("--max-porcent-unhealthy-services", value);
        return this;
    };
    /** Specify the minimum number of nodes where Service Fabric will reserve capacity for this application, this does not mean that the application is guaranteed to have replicas on all those nodes. The value of this parameter must be a non-negative integer. Default value for this is zero, which means no capacity is reserved for the application. */
    az_sf_application_update_command_builder.prototype.minimumNodes = function (value) {
        this.setFlag("--minimum-nodes", value);
        return this;
    };
    /** Specify the maximum time, in seconds, that Service Fabric waits for a service to reconfigure into a safe state, if not already in a safe state, before Service Fabric proceeds with the upgrade. */
    az_sf_application_update_command_builder.prototype.upgradeReplicaSetCheckTimeout = function (value) {
        this.setFlag("--upgrade-replica-set-check-timeout", value);
        return this;
    };
    /** Specify the map of the health policy to use for different service types as a hash table in the following format: {"ServiceTypeName" : "MaxPercentUnhealthyPartitionsPerService,MaxPercentUnhealthyReplicasPerPartition,MaxPercentUnhealthyServices"}. For example: @{ "ServiceTypeName01" = "5,10,5"; "ServiceTypeName02" = "5,5,5" }. */
    az_sf_application_update_command_builder.prototype.serviceTypeHealthPolicyMap = function (value) {
        this.setFlag("--service-type-health-policy-map", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_application_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Specify the maximum time, in seconds, that Service Fabric takes to upgrade a single upgrade domain. After this period, the upgrade fails. */
    az_sf_application_update_command_builder.prototype.upgradeDomainTimeout = function (value) {
        this.setFlag("--upgrade-domain-timeout", value);
        return this;
    };
    /** Specify the maximum time, in seconds, that Service Fabric takes for the entire upgrade. After this period, the upgrade fails. */
    az_sf_application_update_command_builder.prototype.upgradeTimeout = function (value) {
        this.setFlag("--upgrade-timeout", value);
        return this;
    };
    return az_sf_application_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a secondary cluster certificate to the cluster.
 *
 * Syntax:
 * ```
 * az sf cluster certificate add --cluster-name
 *                               --resource-group
 *                               [--cert-out-folder]
 *                               [--cert-subject-name]
 *                               [--certificate-file]
 *                               [--certificate-password]
 *                               [--secret-identifier]
 *                               [--subscription]
 *                               [--vault-name]
 *                               [--vault-resource-group]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_cluster_certificate_add_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_cluster_certificate_add_command_builder, _super);
    function az_sf_cluster_certificate_add_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_cluster_certificate_add_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_cluster_certificate_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The folder of the new certificate file to be created. */
    az_sf_cluster_certificate_add_command_builder.prototype.certificateOutputFolder = function (value) {
        this.setFlag("--certificate-output-folder", value);
        return this;
    };
    /** The subject name of the certificate to be created. */
    az_sf_cluster_certificate_add_command_builder.prototype.certificateSubjectName = function (value) {
        this.setFlag("--certificate-subject-name", value);
        return this;
    };
    /** The existing certificate file path for the primary cluster certificate. */
    az_sf_cluster_certificate_add_command_builder.prototype.certificateFile = function (value) {
        this.setFlag("--certificate-file", value);
        return this;
    };
    /** The password of the certificate file. */
    az_sf_cluster_certificate_add_command_builder.prototype.certificatePassword = function (value) {
        this.setFlag("--certificate-password", value);
        return this;
    };
    /** The existing Azure key vault secret URL. */
    az_sf_cluster_certificate_add_command_builder.prototype.secretIdentifier = function (value) {
        this.setFlag("--secret-identifier", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_cluster_certificate_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Azure key vault name, it not given it will be the cluster resource group name. */
    az_sf_cluster_certificate_add_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Key vault resource group name, if not given it will be cluster resource group name. */
    az_sf_cluster_certificate_add_command_builder.prototype.vaultResourceGroup = function (value) {
        this.setFlag("--vault-resource-group", value);
        return this;
    };
    return az_sf_cluster_certificate_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove a certificate from a cluster.
 *
 * Syntax:
 * ```
 * az sf cluster certificate remove --cluster-name
 *                                  --resource-group
 *                                  --thumbprint
 *                                  [--subscription]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} thumbprint The cluster certificate thumbprint to be removed.
 */
var az_sf_cluster_certificate_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_cluster_certificate_remove_command_builder, _super);
    function az_sf_cluster_certificate_remove_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup, thumbprint) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        _this.thumbprint(thumbprint);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_cluster_certificate_remove_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_cluster_certificate_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The cluster certificate thumbprint to be removed. */
    az_sf_cluster_certificate_remove_command_builder.prototype.thumbprint = function (value) {
        this.setFlag("--thumbprint", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_cluster_certificate_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_cluster_certificate_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a common name or certificate thumbprint to the cluster for client authentication.
 *
 * Syntax:
 * ```
 * az sf cluster client-certificate add --cluster-name
 *                                      --resource-group
 *                                      [--admin-client-thumbprints]
 *                                      [--cert-common-name]
 *                                      [--cert-issuer-tp]
 *                                      [--client-cert-cn]
 *                                      [--is-admin]
 *                                      [--readonly-client-thumbprints]
 *                                      [--subscription]
 *                                      [--thumbprint]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_cluster_client_certificate_add_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_cluster_client_certificate_add_command_builder, _super);
    function az_sf_cluster_client_certificate_add_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_cluster_client_certificate_add_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_cluster_client_certificate_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Client certificate thumbprint that only has admin permission. */
    az_sf_cluster_client_certificate_add_command_builder.prototype.adminClientThumbprints = function (value) {
        this.setFlag("--admin-client-thumbprints", value);
        return this;
    };
    /** Client certificate common name. */
    az_sf_cluster_client_certificate_add_command_builder.prototype.certificateCommonName = function (value) {
        this.setFlag("--certificate-common-name", value);
        return this;
    };
    /** Client certificate issuer thumbprint. */
    az_sf_cluster_client_certificate_add_command_builder.prototype.certificateIssuerThumbprint = function (value) {
        this.setFlag("--certificate-issuer-thumbprint", value);
        return this;
    };
    /** JSON encoded parameters configuration. Use @{file} to load from a file. For example: [{"isAdmin":true, "certificateCommonName": "test.com", "certificateIssuerThumbprint": "22B4AE296B504E512DF880A77A2CAE20200FF922"}]. */
    az_sf_cluster_client_certificate_add_command_builder.prototype.clientCertificateCommonNames = function (value) {
        this.setFlag("--client-certificate-common-names", value);
        return this;
    };
    /** Client authentication type. */
    az_sf_cluster_client_certificate_add_command_builder.prototype.isAdmin = function (value) {
        this.setFlag("--is-admin", value);
        return this;
    };
    /** Space-separated list of client certificate thumbprint that has read only permission. */
    az_sf_cluster_client_certificate_add_command_builder.prototype.readonlyClientThumbprints = function (value) {
        this.setFlag("--readonly-client-thumbprints", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_cluster_client_certificate_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Client certificate thumbprint. */
    az_sf_cluster_client_certificate_add_command_builder.prototype.thumbprint = function (value) {
        this.setFlag("--thumbprint", value);
        return this;
    };
    return az_sf_cluster_client_certificate_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove client certificates or subject names used for authentication.
 *
 * Syntax:
 * ```
 * az sf cluster client-certificate remove --cluster-name
 *                                         --resource-group
 *                                         [--cert-common-name]
 *                                         [--cert-issuer-tp]
 *                                         [--client-cert-cn]
 *                                         [--subscription]
 *                                         [--thumbprints]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_cluster_client_certificate_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_cluster_client_certificate_remove_command_builder, _super);
    function az_sf_cluster_client_certificate_remove_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_cluster_client_certificate_remove_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_cluster_client_certificate_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Client certificate common name. */
    az_sf_cluster_client_certificate_remove_command_builder.prototype.certificateCommonName = function (value) {
        this.setFlag("--certificate-common-name", value);
        return this;
    };
    /** Client certificate issuer thumbprint. */
    az_sf_cluster_client_certificate_remove_command_builder.prototype.certificateIssuerThumbprint = function (value) {
        this.setFlag("--certificate-issuer-thumbprint", value);
        return this;
    };
    /** JSON encoded parameters configuration. Use @{file} to load from a file. For example: [{"certificateCommonName": "test.com","certificateIssuerThumbprint": "22B4AE296B504E512DF880A77A2CAE20200FF922"}]. */
    az_sf_cluster_client_certificate_remove_command_builder.prototype.clientCertificateCommonNames = function (value) {
        this.setFlag("--client-certificate-common-names", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_cluster_client_certificate_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** A single or Space-separated list of client certificate thumbprint(s) to be remove. */
    az_sf_cluster_client_certificate_remove_command_builder.prototype.thumbprints = function (value) {
        this.setFlag("--thumbprints", value);
        return this;
    };
    return az_sf_cluster_client_certificate_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the durability tier or VM SKU of a node type in the cluster.
 *
 * Syntax:
 * ```
 * az sf cluster durability update --cluster-name
 *                                 --durability-level {Bronze, Gold, Silver}
 *                                 --node-type
 *                                 --resource-group
 *                                 [--subscription]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {'Bronze' | 'Gold' | 'Silver'} durabilityLevel Durability level.
 * @param {string} nodeType The Node type name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_cluster_durability_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_cluster_durability_update_command_builder, _super);
    function az_sf_cluster_durability_update_command_builder(commandPath, resultDataTypeName, clusterName, durabilityLevel, nodeType, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.durabilityLevel(durabilityLevel);
        _this.nodeType(nodeType);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_cluster_durability_update_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Durability level. */
    az_sf_cluster_durability_update_command_builder.prototype.durabilityLevel = function (value) {
        this.setFlag("--durability-level", value);
        return this;
    };
    /** The Node type name. */
    az_sf_cluster_durability_update_command_builder.prototype.nodeType = function (value) {
        this.setFlag("--node-type", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_cluster_durability_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_cluster_durability_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_cluster_durability_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a new node type to a cluster.
 *
 * Syntax:
 * ```
 * az sf cluster node-type add --capacity
 *                             --cluster-name
 *                             --node-type
 *                             --resource-group
 *                             --vm-password
 *                             --vm-user-name
 *                             [--durability-level {Bronze, Gold, Silver}]
 *                             [--subscription]
 *                             [--vm-sku]
 *                             [--vm-tier]
 * ```
 *
 * @param {string} capacity The capacity tag applied to nodes in the node type. The cluster resource manager uses these tags to understand how much capacity a node has.
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} nodeType The Node type name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vmPassword The password of the Vm.
 * @param {string} vmUserName The user name for logging to Vm. Default will be adminuser.
 */
var az_sf_cluster_node_type_add_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_cluster_node_type_add_command_builder, _super);
    function az_sf_cluster_node_type_add_command_builder(commandPath, resultDataTypeName, capacity, clusterName, nodeType, resourceGroup, vmPassword, vmUserName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.capacity(capacity);
        _this.clusterName(clusterName);
        _this.nodeType(nodeType);
        _this.resourceGroup(resourceGroup);
        _this.vmPassword(vmPassword);
        _this.vmUserName(vmUserName);
        return _this;
    }
    /** The capacity tag applied to nodes in the node type. The cluster resource manager uses these tags to understand how much capacity a node has. */
    az_sf_cluster_node_type_add_command_builder.prototype.capacity = function (value) {
        this.setFlag("--capacity", value);
        return this;
    };
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_cluster_node_type_add_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** The Node type name. */
    az_sf_cluster_node_type_add_command_builder.prototype.nodeType = function (value) {
        this.setFlag("--node-type", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_cluster_node_type_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The password of the Vm. */
    az_sf_cluster_node_type_add_command_builder.prototype.vmPassword = function (value) {
        this.setFlag("--vm-password", value);
        return this;
    };
    /** The user name for logging to Vm. Default will be adminuser. */
    az_sf_cluster_node_type_add_command_builder.prototype.vmUserName = function (value) {
        this.setFlag("--vm-user-name", value);
        return this;
    };
    /** Durability level. */
    az_sf_cluster_node_type_add_command_builder.prototype.durabilityLevel = function (value) {
        this.setFlag("--durability-level", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_cluster_node_type_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** VM Sku. */
    az_sf_cluster_node_type_add_command_builder.prototype.vmSku = function (value) {
        this.setFlag("--vm-sku", value);
        return this;
    };
    /** VM tier. */
    az_sf_cluster_node_type_add_command_builder.prototype.vmTier = function (value) {
        this.setFlag("--vm-tier", value);
        return this;
    };
    return az_sf_cluster_node_type_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Add nodes to a node type in a cluster.
 *
 * Syntax:
 * ```
 * az sf cluster node add --cluster-name
 *                        --node-type
 *                        --nodes-to-add
 *                        --resource-group
 *                        [--subscription]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} nodeType The Node type name.
 * @param {string} numberOfNodesToAdd Number of nodes to add.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_cluster_node_add_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_cluster_node_add_command_builder, _super);
    function az_sf_cluster_node_add_command_builder(commandPath, resultDataTypeName, clusterName, nodeType, numberOfNodesToAdd, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.nodeType(nodeType);
        _this.numberOfNodesToAdd(numberOfNodesToAdd);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_cluster_node_add_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** The Node type name. */
    az_sf_cluster_node_add_command_builder.prototype.nodeType = function (value) {
        this.setFlag("--node-type", value);
        return this;
    };
    /** Number of nodes to add. */
    az_sf_cluster_node_add_command_builder.prototype.numberOfNodesToAdd = function (value) {
        this.setFlag("--number-of-nodes-to-add", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_cluster_node_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_cluster_node_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_cluster_node_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove nodes from a node type in a cluster.
 *
 * Syntax:
 * ```
 * az sf cluster node remove --cluster-name
 *                           --node-type
 *                           --nodes-to-remove
 *                           --resource-group
 *                           [--subscription]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} nodeType The Node type name.
 * @param {string} numberOfNodesToRemove Number of nodes to remove.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_cluster_node_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_cluster_node_remove_command_builder, _super);
    function az_sf_cluster_node_remove_command_builder(commandPath, resultDataTypeName, clusterName, nodeType, numberOfNodesToRemove, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.nodeType(nodeType);
        _this.numberOfNodesToRemove(numberOfNodesToRemove);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_cluster_node_remove_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** The Node type name. */
    az_sf_cluster_node_remove_command_builder.prototype.nodeType = function (value) {
        this.setFlag("--node-type", value);
        return this;
    };
    /** Number of nodes to remove. */
    az_sf_cluster_node_remove_command_builder.prototype.numberOfNodesToRemove = function (value) {
        this.setFlag("--number-of-nodes-to-remove", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_cluster_node_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_cluster_node_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_cluster_node_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the reliability tier for the primary node in a cluster.
 *
 * Syntax:
 * ```
 * az sf cluster reliability update --cluster-name
 *                                  --reliability-level {Bronze, Gold, Platinum, Silver}
 *                                  --resource-group
 *                                  [--auto-add-node]
 *                                  [--subscription]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {'Bronze' | 'Gold' | 'Platinum' | 'Silver'} reliabilityLevel Durability level.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_cluster_reliability_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_cluster_reliability_update_command_builder, _super);
    function az_sf_cluster_reliability_update_command_builder(commandPath, resultDataTypeName, clusterName, reliabilityLevel, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.reliabilityLevel(reliabilityLevel);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_cluster_reliability_update_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Durability level. */
    az_sf_cluster_reliability_update_command_builder.prototype.reliabilityLevel = function (value) {
        this.setFlag("--reliability-level", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_cluster_reliability_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add node count automatically when changing reliability. */
    az_sf_cluster_reliability_update_command_builder.prototype.autoAddNode = function (value) {
        this.setFlag("--auto-add-node", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_cluster_reliability_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_cluster_reliability_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove settings from a cluster.
 *
 * Syntax:
 * ```
 * az sf cluster setting remove --cluster-name
 *                              --resource-group
 *                              [--parameter]
 *                              [--section]
 *                              [--settings-section]
 *                              [--subscription]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_cluster_setting_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_cluster_setting_remove_command_builder, _super);
    function az_sf_cluster_setting_remove_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_cluster_setting_remove_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_cluster_setting_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Parameter name. */
    az_sf_cluster_setting_remove_command_builder.prototype.parameter = function (value) {
        this.setFlag("--parameter", value);
        return this;
    };
    /** Section name. */
    az_sf_cluster_setting_remove_command_builder.prototype.section = function (value) {
        this.setFlag("--section", value);
        return this;
    };
    /** JSON encoded parameters configuration. Use @{file} to load from a file. For example: [{"section": "NamingService","parameter": "MaxOperationTimeout"}]. */
    az_sf_cluster_setting_remove_command_builder.prototype.settingsSectionDescription = function (value) {
        this.setFlag("--settings-section-description", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_cluster_setting_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_cluster_setting_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the settings of a cluster.
 *
 * Syntax:
 * ```
 * az sf cluster setting set --cluster-name
 *                           --resource-group
 *                           [--parameter]
 *                           [--section]
 *                           [--settings-section]
 *                           [--subscription]
 *                           [--value]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_cluster_setting_set_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_cluster_setting_set_command_builder, _super);
    function az_sf_cluster_setting_set_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_cluster_setting_set_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_cluster_setting_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Parameter name. */
    az_sf_cluster_setting_set_command_builder.prototype.parameter = function (value) {
        this.setFlag("--parameter", value);
        return this;
    };
    /** Section name. */
    az_sf_cluster_setting_set_command_builder.prototype.section = function (value) {
        this.setFlag("--section", value);
        return this;
    };
    /** JSON encoded parameters configuration. Use @{file} to load from a file. For example: [{"section": "NamingService","parameter": "MaxOperationTimeout","value": 1000},{"section": "MaxFileOperationTimeout","parameter": "Max2","value": 1000]. */
    az_sf_cluster_setting_set_command_builder.prototype.settingsSectionDescription = function (value) {
        this.setFlag("--settings-section-description", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_cluster_setting_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Specify the value. */
    az_sf_cluster_setting_set_command_builder.prototype.value = function (value) {
        this.setFlag("--value", value);
        return this;
    };
    return az_sf_cluster_setting_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Change the  upgrade type for a cluster.
 *
 * Syntax:
 * ```
 * az sf cluster upgrade-type set --cluster-name
 *                                --resource-group
 *                                --upgrade-mode {automatic, manual}
 *                                [--subscription]
 *                                [--version]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'automatic' | 'manual'} upgradeMode Cluster upgrade mode.
 */
var az_sf_cluster_upgrade_type_set_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_cluster_upgrade_type_set_command_builder, _super);
    function az_sf_cluster_upgrade_type_set_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup, upgradeMode) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        _this.upgradeMode(upgradeMode);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_cluster_upgrade_type_set_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_cluster_upgrade_type_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Cluster upgrade mode. */
    az_sf_cluster_upgrade_type_set_command_builder.prototype.upgradeMode = function (value) {
        this.setFlag("--upgrade-mode", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_cluster_upgrade_type_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Cluster code version. */
    az_sf_cluster_upgrade_type_set_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_sf_cluster_upgrade_type_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new Azure Service Fabric cluster.
 *
 * Syntax:
 * ```
 * az sf cluster create --location
 *                      --resource-group
 *                      [--cert-out-folder]
 *                      [--cert-subject-name]
 *                      [--certificate-file]
 *                      [--certificate-password]
 *                      [--cluster-name]
 *                      [--cluster-size]
 *                      [--os {UbuntuServer1604, WindowsServer1709, WindowsServer1709withContainers, WindowsServer1803withContainers, WindowsServer1809withContainers, WindowsServer2012R2Datacenter, WindowsServer2016Datacenter, WindowsServer2016DatacenterwithContainers, WindowsServer2019Datacenter, WindowsServer2019DatacenterwithContainers}]
 *                      [--parameter-file]
 *                      [--secret-identifier]
 *                      [--subscription]
 *                      [--template-file]
 *                      [--vault-name]
 *                      [--vault-resource-group]
 *                      [--vm-password]
 *                      [--vm-sku]
 *                      [--vm-user-name]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_cluster_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_cluster_create_command_builder, _super);
    function az_sf_cluster_create_command_builder(commandPath, resultDataTypeName, location, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_sf_cluster_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_cluster_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The folder of the new certificate file to be created. */
    az_sf_cluster_create_command_builder.prototype.certificateOutputFolder = function (value) {
        this.setFlag("--certificate-output-folder", value);
        return this;
    };
    /** The subject name of the certificate to be created. */
    az_sf_cluster_create_command_builder.prototype.certificateSubjectName = function (value) {
        this.setFlag("--certificate-subject-name", value);
        return this;
    };
    /** The existing certificate file path for the primary cluster certificate. */
    az_sf_cluster_create_command_builder.prototype.certificateFile = function (value) {
        this.setFlag("--certificate-file", value);
        return this;
    };
    /** The password of the certificate file. */
    az_sf_cluster_create_command_builder.prototype.certificatePassword = function (value) {
        this.setFlag("--certificate-password", value);
        return this;
    };
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_cluster_create_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** The number of nodes in the cluster. Default are 5 nodes. */
    az_sf_cluster_create_command_builder.prototype.clusterSize = function (value) {
        this.setFlag("--cluster-size", value);
        return this;
    };
    /** The Operating System of the VMs that make up the cluster. */
    az_sf_cluster_create_command_builder.prototype.vmOs = function (value) {
        this.setFlag("--vm-os", value);
        return this;
    };
    /** The path to the template parameter file. */
    az_sf_cluster_create_command_builder.prototype.parameterFile = function (value) {
        this.setFlag("--parameter-file", value);
        return this;
    };
    /** The existing Azure key vault secret URL. */
    az_sf_cluster_create_command_builder.prototype.secretIdentifier = function (value) {
        this.setFlag("--secret-identifier", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_cluster_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The path to the template file. */
    az_sf_cluster_create_command_builder.prototype.templateFile = function (value) {
        this.setFlag("--template-file", value);
        return this;
    };
    /** Azure key vault name, it not given it will be the cluster resource group name. */
    az_sf_cluster_create_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Key vault resource group name, if not given it will be cluster resource group name. */
    az_sf_cluster_create_command_builder.prototype.vaultResourceGroup = function (value) {
        this.setFlag("--vault-resource-group", value);
        return this;
    };
    /** The password of the Vm. */
    az_sf_cluster_create_command_builder.prototype.vmPassword = function (value) {
        this.setFlag("--vm-password", value);
        return this;
    };
    /** VM Sku. */
    az_sf_cluster_create_command_builder.prototype.vmSku = function (value) {
        this.setFlag("--vm-sku", value);
        return this;
    };
    /** The user name for logging to Vm. Default will be adminuser. */
    az_sf_cluster_create_command_builder.prototype.vmUserName = function (value) {
        this.setFlag("--vm-user-name", value);
        return this;
    };
    return az_sf_cluster_create_command_builder;
}(base_1.CommandBuilder));
/**
 * List cluster resources.
 *
 * Syntax:
 * ```
 * az sf cluster list [--query-examples]
 *                    [--resource-group]
 *                    [--subscription]
 * ```
 */
var az_sf_cluster_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_cluster_list_command_builder, _super);
    function az_sf_cluster_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sf_cluster_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The resource group name. */
    az_sf_cluster_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_cluster_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_cluster_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a Service Fabric cluster resource.
 *
 * Syntax:
 * ```
 * az sf cluster show --cluster-name
 *                    --resource-group
 *                    [--query-examples]
 *                    [--subscription]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_cluster_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_cluster_show_command_builder, _super);
    function az_sf_cluster_show_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_cluster_show_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_cluster_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sf_cluster_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_cluster_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_cluster_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a new client certificate to the managed cluster.
 *
 * Syntax:
 * ```
 * az sf managed-cluster client-certificate add --cluster-name
 *                                              --resource-group
 *                                              [--common-name]
 *                                              [--is-admin {false, true}]
 *                                              [--issuer-thumbprint]
 *                                              [--subscription]
 *                                              [--thumbprint]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_managed_cluster_client_certificate_add_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_managed_cluster_client_certificate_add_command_builder, _super);
    function az_sf_managed_cluster_client_certificate_add_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_managed_cluster_client_certificate_add_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_managed_cluster_client_certificate_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Client certificate common name. */
    az_sf_managed_cluster_client_certificate_add_command_builder.prototype.commonName = function (value) {
        this.setFlag("--common-name", value);
        return this;
    };
    /** Client authentication type. */
    az_sf_managed_cluster_client_certificate_add_command_builder.prototype.isAdmin = function (value) {
        this.setFlag("--is-admin", value.toString());
        return this;
    };
    /** Space-separated list of issuer thumbprints. */
    az_sf_managed_cluster_client_certificate_add_command_builder.prototype.issuerThumbprint = function (value) {
        this.setFlag("--issuer-thumbprint", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_managed_cluster_client_certificate_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Client certificate thumbprint. */
    az_sf_managed_cluster_client_certificate_add_command_builder.prototype.thumbprint = function (value) {
        this.setFlag("--thumbprint", value);
        return this;
    };
    return az_sf_managed_cluster_client_certificate_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a client certificate from the managed cluster.
 *
 * Syntax:
 * ```
 * az sf managed-cluster client-certificate delete --cluster-name
 *                                                 --resource-group
 *                                                 [--common-name]
 *                                                 [--subscription]
 *                                                 [--thumbprint]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_managed_cluster_client_certificate_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_managed_cluster_client_certificate_delete_command_builder, _super);
    function az_sf_managed_cluster_client_certificate_delete_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_managed_cluster_client_certificate_delete_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_managed_cluster_client_certificate_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** A single or Space-separated list of client certificate common name(s) to be remove. */
    az_sf_managed_cluster_client_certificate_delete_command_builder.prototype.commonName = function (value) {
        this.setFlag("--common-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_managed_cluster_client_certificate_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** A single or Space-separated list of client certificate thumbprint(s) to be remove. */
    az_sf_managed_cluster_client_certificate_delete_command_builder.prototype.thumbprint = function (value) {
        this.setFlag("--thumbprint", value);
        return this;
    };
    return az_sf_managed_cluster_client_certificate_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a managed cluster.
 *
 * Syntax:
 * ```
 * az sf managed-cluster create --admin-password
 *                              --cluster-name
 *                              --resource-group
 *                              [--admin-user-name]
 *                              [--cert-common-name]
 *                              [--cert-is-admin {false, true}]
 *                              [--cert-issuer-thumbprint]
 *                              [--cert-thumbprint]
 *                              [--client-connection-port]
 *                              [--dns-name]
 *                              [--gateway-connection-port]
 *                              [--location]
 *                              [--sku]
 *                              [--subscription]
 *                              [--tags]
 * ```
 *
 * @param {string} adminPassword Admin password used for the virtual machines.
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_managed_cluster_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_managed_cluster_create_command_builder, _super);
    function az_sf_managed_cluster_create_command_builder(commandPath, resultDataTypeName, adminPassword, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.adminPassword(adminPassword);
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Admin password used for the virtual machines. */
    az_sf_managed_cluster_create_command_builder.prototype.adminPassword = function (value) {
        this.setFlag("--admin-password", value);
        return this;
    };
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_managed_cluster_create_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_managed_cluster_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Admin user used for the virtual machines. */
    az_sf_managed_cluster_create_command_builder.prototype.adminUserName = function (value) {
        this.setFlag("--admin-user-name", value);
        return this;
    };
    /** Client certificate common name. */
    az_sf_managed_cluster_create_command_builder.prototype.clientCertCommonName = function (value) {
        this.setFlag("--client-cert-common-name", value);
        return this;
    };
    /** Client authentication type. */
    az_sf_managed_cluster_create_command_builder.prototype.clientCertIsAdmin = function (value) {
        this.setFlag("--client-cert-is-admin", value.toString());
        return this;
    };
    /** Space-separated list of issuer thumbprints. */
    az_sf_managed_cluster_create_command_builder.prototype.clientCertIssuerThumbprint = function (value) {
        this.setFlag("--client-cert-issuer-thumbprint", value);
        return this;
    };
    /** Client certificate thumbprint. */
    az_sf_managed_cluster_create_command_builder.prototype.clientCertThumbprint = function (value) {
        this.setFlag("--client-cert-thumbprint", value);
        return this;
    };
    /** Port used for client connections to the cluster. */
    az_sf_managed_cluster_create_command_builder.prototype.clientConnectionPort = function (value) {
        this.setFlag("--client-connection-port", value);
        return this;
    };
    /** Cluster's dns name. */
    az_sf_managed_cluster_create_command_builder.prototype.dnsName = function (value) {
        this.setFlag("--dns-name", value);
        return this;
    };
    /** Port used for http connections to the cluster. */
    az_sf_managed_cluster_create_command_builder.prototype.gatewayConnectionPort = function (value) {
        this.setFlag("--gateway-connection-port", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_sf_managed_cluster_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Cluster's Sku, the options are Basic: it will have a minimum of 3 seed nodes and only allows 1 node type and Standard: it will have a minimum of 5 seed nodes and allows multiple node types. */
    az_sf_managed_cluster_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_managed_cluster_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_sf_managed_cluster_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_sf_managed_cluster_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a managed cluster.
 *
 * Syntax:
 * ```
 * az sf managed-cluster delete --cluster-name
 *                              --resource-group
 *                              [--subscription]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_managed_cluster_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_managed_cluster_delete_command_builder, _super);
    function az_sf_managed_cluster_delete_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_managed_cluster_delete_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_managed_cluster_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_managed_cluster_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_managed_cluster_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List managed clusters.
 *
 * Syntax:
 * ```
 * az sf managed-cluster list [--query-examples]
 *                            [--resource-group]
 *                            [--subscription]
 * ```
 */
var az_sf_managed_cluster_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_managed_cluster_list_command_builder, _super);
    function az_sf_managed_cluster_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sf_managed_cluster_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_managed_cluster_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_managed_cluster_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_managed_cluster_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the properties of an Azure Service Fabric managed cluster.
 *
 * Syntax:
 * ```
 * az sf managed-cluster show --cluster-name
 *                            --resource-group
 *                            [--query-examples]
 *                            [--subscription]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_managed_cluster_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_managed_cluster_show_command_builder, _super);
    function az_sf_managed_cluster_show_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_managed_cluster_show_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_managed_cluster_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sf_managed_cluster_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_managed_cluster_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_managed_cluster_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a managed cluster.
 *
 * Syntax:
 * ```
 * az sf managed-cluster update --cluster-name
 *                              --resource-group
 *                              [--client-connection-port]
 *                              [--dns-name]
 *                              [--gateway-connection-port]
 *                              [--subscription]
 *                              [--tags]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_managed_cluster_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_managed_cluster_update_command_builder, _super);
    function az_sf_managed_cluster_update_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_managed_cluster_update_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_managed_cluster_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Port used for client connections to the cluster. */
    az_sf_managed_cluster_update_command_builder.prototype.clientConnectionPort = function (value) {
        this.setFlag("--client-connection-port", value);
        return this;
    };
    /** Cluster's dns name. */
    az_sf_managed_cluster_update_command_builder.prototype.dnsName = function (value) {
        this.setFlag("--dns-name", value);
        return this;
    };
    /** Port used for http connections to the cluster. */
    az_sf_managed_cluster_update_command_builder.prototype.gatewayConnectionPort = function (value) {
        this.setFlag("--gateway-connection-port", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_managed_cluster_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_sf_managed_cluster_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_sf_managed_cluster_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete nodes of a node type.
 *
 * Syntax:
 * ```
 * az sf managed-node-type node delete --cluster-name
 *                                     --name
 *                                     --node-name
 *                                     --resource-group
 *                                     [--force {false, true}]
 *                                     [--subscription]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} nodeTypeName Node type name.
 * @param {string} nodeName List of target nodes to perform the operation.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_managed_node_type_node_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_managed_node_type_node_delete_command_builder, _super);
    function az_sf_managed_node_type_node_delete_command_builder(commandPath, resultDataTypeName, clusterName, nodeTypeName, nodeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.nodeTypeName(nodeTypeName);
        _this.nodeName(nodeName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_managed_node_type_node_delete_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Node type name. */
    az_sf_managed_node_type_node_delete_command_builder.prototype.nodeTypeName = function (value) {
        this.setFlag("--node-type-name", value);
        return this;
    };
    /** List of target nodes to perform the operation. */
    az_sf_managed_node_type_node_delete_command_builder.prototype.nodeName = function (value) {
        this.setFlag("--node-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_managed_node_type_node_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Using this flag will force the operation even if service fabric is unable to disable the nodes. Use with caution as this might cause data loss if stateful workloads are running on the node. */
    az_sf_managed_node_type_node_delete_command_builder.prototype.force = function (value) {
        this.setFlag("--force", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_managed_node_type_node_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_managed_node_type_node_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Reimage nodes of a node type.
 *
 * Syntax:
 * ```
 * az sf managed-node-type node reimage --cluster-name
 *                                      --name
 *                                      --node-name
 *                                      --resource-group
 *                                      [--force {false, true}]
 *                                      [--subscription]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} nodeTypeName Node type name.
 * @param {string} nodeName List of target nodes to perform the operation.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_managed_node_type_node_reimage_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_managed_node_type_node_reimage_command_builder, _super);
    function az_sf_managed_node_type_node_reimage_command_builder(commandPath, resultDataTypeName, clusterName, nodeTypeName, nodeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.nodeTypeName(nodeTypeName);
        _this.nodeName(nodeName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_managed_node_type_node_reimage_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Node type name. */
    az_sf_managed_node_type_node_reimage_command_builder.prototype.nodeTypeName = function (value) {
        this.setFlag("--node-type-name", value);
        return this;
    };
    /** List of target nodes to perform the operation. */
    az_sf_managed_node_type_node_reimage_command_builder.prototype.nodeName = function (value) {
        this.setFlag("--node-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_managed_node_type_node_reimage_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Using this flag will force the operation even if service fabric is unable to disable the nodes. Use with caution as this might cause data loss if stateful workloads are running on the node. */
    az_sf_managed_node_type_node_reimage_command_builder.prototype.force = function (value) {
        this.setFlag("--force", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_managed_node_type_node_reimage_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_managed_node_type_node_reimage_command_builder;
}(base_1.CommandBuilder));
/**
 * Restart nodes of a node type.
 *
 * Syntax:
 * ```
 * az sf managed-node-type node restart --cluster-name
 *                                      --name
 *                                      --node-name
 *                                      --resource-group
 *                                      [--force {false, true}]
 *                                      [--subscription]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} nodeTypeName Node type name.
 * @param {string} nodeName List of target nodes to perform the operation.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_managed_node_type_node_restart_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_managed_node_type_node_restart_command_builder, _super);
    function az_sf_managed_node_type_node_restart_command_builder(commandPath, resultDataTypeName, clusterName, nodeTypeName, nodeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.nodeTypeName(nodeTypeName);
        _this.nodeName(nodeName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_managed_node_type_node_restart_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Node type name. */
    az_sf_managed_node_type_node_restart_command_builder.prototype.nodeTypeName = function (value) {
        this.setFlag("--node-type-name", value);
        return this;
    };
    /** List of target nodes to perform the operation. */
    az_sf_managed_node_type_node_restart_command_builder.prototype.nodeName = function (value) {
        this.setFlag("--node-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_managed_node_type_node_restart_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Using this flag will force the operation even if service fabric is unable to disable the nodes. Use with caution as this might cause data loss if stateful workloads are running on the node. */
    az_sf_managed_node_type_node_restart_command_builder.prototype.force = function (value) {
        this.setFlag("--force", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_managed_node_type_node_restart_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_managed_node_type_node_restart_command_builder;
}(base_1.CommandBuilder));
/**
 * Add an extension to the node type.
 *
 * Syntax:
 * ```
 * az sf managed-node-type vm-extension add --cluster-name
 *                                          --extension-name
 *                                          --extension-type
 *                                          --name
 *                                          --publisher
 *                                          --resource-group
 *                                          --type-handler-version
 *                                          [--auto-upgrade {false, true}]
 *                                          [--force-update-tag]
 *                                          [--protected-setting]
 *                                          [--provision-after]
 *                                          [--setting]
 *                                          [--subscription]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} extensionName Extension name.
 * @param {string} extensionType Specifies the type of the extension; an example is "CustomScriptExtension".
 * @param {string} nodeTypeName Node type name.
 * @param {string} publisher The name of the extension handler publisher.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} typeHandlerVersion Specifies the version of the script handler.
 */
var az_sf_managed_node_type_vm_extension_add_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_managed_node_type_vm_extension_add_command_builder, _super);
    function az_sf_managed_node_type_vm_extension_add_command_builder(commandPath, resultDataTypeName, clusterName, extensionName, extensionType, nodeTypeName, publisher, resourceGroup, typeHandlerVersion) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.extensionName(extensionName);
        _this.extensionType(extensionType);
        _this.nodeTypeName(nodeTypeName);
        _this.publisher(publisher);
        _this.resourceGroup(resourceGroup);
        _this.typeHandlerVersion(typeHandlerVersion);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_managed_node_type_vm_extension_add_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Extension name. */
    az_sf_managed_node_type_vm_extension_add_command_builder.prototype.extensionName = function (value) {
        this.setFlag("--extension-name", value);
        return this;
    };
    /** Specifies the type of the extension; an example is "CustomScriptExtension". */
    az_sf_managed_node_type_vm_extension_add_command_builder.prototype.extensionType = function (value) {
        this.setFlag("--extension-type", value);
        return this;
    };
    /** Node type name. */
    az_sf_managed_node_type_vm_extension_add_command_builder.prototype.nodeTypeName = function (value) {
        this.setFlag("--node-type-name", value);
        return this;
    };
    /** The name of the extension handler publisher. */
    az_sf_managed_node_type_vm_extension_add_command_builder.prototype.publisher = function (value) {
        this.setFlag("--publisher", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_managed_node_type_vm_extension_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specifies the version of the script handler. */
    az_sf_managed_node_type_vm_extension_add_command_builder.prototype.typeHandlerVersion = function (value) {
        this.setFlag("--type-handler-version", value);
        return this;
    };
    /** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
    az_sf_managed_node_type_vm_extension_add_command_builder.prototype.autoUpgradeMinorVersion = function (value) {
        this.setFlag("--auto-upgrade-minor-version", value.toString());
        return this;
    };
    /** If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed. */
    az_sf_managed_node_type_vm_extension_add_command_builder.prototype.forceUpdateTag = function (value) {
        this.setFlag("--force-update-tag", value);
        return this;
    };
    /** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
    az_sf_managed_node_type_vm_extension_add_command_builder.prototype.protectedSetting = function (value) {
        this.setFlag("--protected-setting", value);
        return this;
    };
    /** Collection of extension names after which this extension needs to be provisioned. */
    az_sf_managed_node_type_vm_extension_add_command_builder.prototype.provisionAfterExtension = function (value) {
        this.setFlag("--provision-after-extension", value);
        return this;
    };
    /** Json formatted public settings for the extension. */
    az_sf_managed_node_type_vm_extension_add_command_builder.prototype.setting = function (value) {
        this.setFlag("--setting", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_managed_node_type_vm_extension_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_managed_node_type_vm_extension_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an extension to the node type.
 *
 * Syntax:
 * ```
 * az sf managed-node-type vm-extension delete --cluster-name
 *                                             --extension-name
 *                                             --name
 *                                             --resource-group
 *                                             [--subscription]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} extensionName Extension name.
 * @param {string} nodeTypeName Node type name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_managed_node_type_vm_extension_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_managed_node_type_vm_extension_delete_command_builder, _super);
    function az_sf_managed_node_type_vm_extension_delete_command_builder(commandPath, resultDataTypeName, clusterName, extensionName, nodeTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.extensionName(extensionName);
        _this.nodeTypeName(nodeTypeName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_managed_node_type_vm_extension_delete_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Extension name. */
    az_sf_managed_node_type_vm_extension_delete_command_builder.prototype.extensionName = function (value) {
        this.setFlag("--extension-name", value);
        return this;
    };
    /** Node type name. */
    az_sf_managed_node_type_vm_extension_delete_command_builder.prototype.nodeTypeName = function (value) {
        this.setFlag("--node-type-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_managed_node_type_vm_extension_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_managed_node_type_vm_extension_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_managed_node_type_vm_extension_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a secret to the node type.
 *
 * Syntax:
 * ```
 * az sf managed-node-type vm-secret add --certificate-store
 *                                       --certificate-url
 *                                       --cluster-name
 *                                       --name
 *                                       --resource-group
 *                                       --source-vault-id
 *                                       [--subscription]
 * ```
 *
 * @param {string} certificateStore Specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account.
 * @param {string} certificateUrl This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](<a href="https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add">https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add</a>). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>}/.
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} nodeTypeName Node type name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} sourceVaultId Key Vault resource id containing the certificates.
 */
var az_sf_managed_node_type_vm_secret_add_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_managed_node_type_vm_secret_add_command_builder, _super);
    function az_sf_managed_node_type_vm_secret_add_command_builder(commandPath, resultDataTypeName, certificateStore, certificateUrl, clusterName, nodeTypeName, resourceGroup, sourceVaultId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.certificateStore(certificateStore);
        _this.certificateUrl(certificateUrl);
        _this.clusterName(clusterName);
        _this.nodeTypeName(nodeTypeName);
        _this.resourceGroup(resourceGroup);
        _this.sourceVaultId(sourceVaultId);
        return _this;
    }
    /** Specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. */
    az_sf_managed_node_type_vm_secret_add_command_builder.prototype.certificateStore = function (value) {
        this.setFlag("--certificate-store", value);
        return this;
    };
    /** This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](<a href="https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add">https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add</a>). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>}/. */
    az_sf_managed_node_type_vm_secret_add_command_builder.prototype.certificateUrl = function (value) {
        this.setFlag("--certificate-url", value);
        return this;
    };
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_managed_node_type_vm_secret_add_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Node type name. */
    az_sf_managed_node_type_vm_secret_add_command_builder.prototype.nodeTypeName = function (value) {
        this.setFlag("--node-type-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_managed_node_type_vm_secret_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Key Vault resource id containing the certificates. */
    az_sf_managed_node_type_vm_secret_add_command_builder.prototype.sourceVaultId = function (value) {
        this.setFlag("--source-vault-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_managed_node_type_vm_secret_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_managed_node_type_vm_secret_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a managed cluster.
 *
 * Syntax:
 * ```
 * az sf managed-node-type create --cluster-name
 *                                --instance-count
 *                                --name
 *                                --resource-group
 *                                [--app-end-port]
 *                                [--app-start-port]
 *                                [--capacity]
 *                                [--disk-size]
 *                                [--ephemeral-end-port]
 *                                [--ephemeral-start-port]
 *                                [--placement-property]
 *                                [--primary {false, true}]
 *                                [--subscription]
 *                                [--vm-image-offer]
 *                                [--vm-image-publisher]
 *                                [--vm-image-sku]
 *                                [--vm-image-version]
 *                                [--vm-size]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} instanceCount Essage = "The number of nodes in the node type.
 * @param {string} nodeTypeName Node type name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_managed_node_type_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_managed_node_type_create_command_builder, _super);
    function az_sf_managed_node_type_create_command_builder(commandPath, resultDataTypeName, clusterName, instanceCount, nodeTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.instanceCount(instanceCount);
        _this.nodeTypeName(nodeTypeName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_managed_node_type_create_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Essage = "The number of nodes in the node type. */
    az_sf_managed_node_type_create_command_builder.prototype.instanceCount = function (value) {
        this.setFlag("--instance-count", value);
        return this;
    };
    /** Node type name. */
    az_sf_managed_node_type_create_command_builder.prototype.nodeTypeName = function (value) {
        this.setFlag("--node-type-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_managed_node_type_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Application End port of a range of ports. */
    az_sf_managed_node_type_create_command_builder.prototype.applicationEndPort = function (value) {
        this.setFlag("--application-end-port", value);
        return this;
    };
    /** Application start port of a range of ports. */
    az_sf_managed_node_type_create_command_builder.prototype.applicationStartPort = function (value) {
        this.setFlag("--application-start-port", value);
        return this;
    };
    /** Capacity tags applied to the nodes in the node type as key/value pairs, the cluster resource manager uses these tags to understand how much resource a node has. Updating this will override the current values.for example: --capacity ClientConnections=65536 param2=value2. */
    az_sf_managed_node_type_create_command_builder.prototype.capacity = function (value) {
        this.setFlag("--capacity", value);
        return this;
    };
    /** Disk size for each vm in the node type in GBs. */
    az_sf_managed_node_type_create_command_builder.prototype.diskSize = function (value) {
        this.setFlag("--disk-size", value);
        return this;
    };
    /** Ephemeral end port of a range of ports. */
    az_sf_managed_node_type_create_command_builder.prototype.ephemeralEndPort = function (value) {
        this.setFlag("--ephemeral-end-port", value);
        return this;
    };
    /** Ephemeral start port of a range of ports. */
    az_sf_managed_node_type_create_command_builder.prototype.ephemeralStartPort = function (value) {
        this.setFlag("--ephemeral-start-port", value);
        return this;
    };
    /** Placement tags applied to nodes in the node type as key/value pairs, which can be used to indicate where certain services (workload) should run. Updating this will override the current values.for example: --placement-property NodeColor=Green SomeProperty=5. */
    az_sf_managed_node_type_create_command_builder.prototype.placementProperty = function (value) {
        this.setFlag("--placement-property", value);
        return this;
    };
    /** Specify if the node type is primary. On this node type will run system services. Only one node type should be marked as primary. Primary node type cannot be deleted or changed for existing clusters. */
    az_sf_managed_node_type_create_command_builder.prototype.primary = function (value) {
        this.setFlag("--primary", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_managed_node_type_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The offer type of the Azure Virtual Machines Marketplace image. */
    az_sf_managed_node_type_create_command_builder.prototype.vmImageOffer = function (value) {
        this.setFlag("--vm-image-offer", value);
        return this;
    };
    /** The publisher of the Azure Virtual Machines Marketplace image. */
    az_sf_managed_node_type_create_command_builder.prototype.vmImagePublisher = function (value) {
        this.setFlag("--vm-image-publisher", value);
        return this;
    };
    /** The SKU of the Azure Virtual Machines Marketplace image. */
    az_sf_managed_node_type_create_command_builder.prototype.vmImageSku = function (value) {
        this.setFlag("--vm-image-sku", value);
        return this;
    };
    /** The version of the Azure Virtual Machines Marketplace image. */
    az_sf_managed_node_type_create_command_builder.prototype.vmImageVersion = function (value) {
        this.setFlag("--vm-image-version", value);
        return this;
    };
    /** The size of virtual machines in the pool. All virtual machines in a pool are the same size. */
    az_sf_managed_node_type_create_command_builder.prototype.vmSize = function (value) {
        this.setFlag("--vm-size", value);
        return this;
    };
    return az_sf_managed_node_type_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete node type from a cluster.
 *
 * Syntax:
 * ```
 * az sf managed-node-type delete --cluster-name
 *                                --name
 *                                --resource-group
 *                                [--subscription]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} nodeTypeName Node type name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_managed_node_type_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_managed_node_type_delete_command_builder, _super);
    function az_sf_managed_node_type_delete_command_builder(commandPath, resultDataTypeName, clusterName, nodeTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.nodeTypeName(nodeTypeName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_managed_node_type_delete_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Node type name. */
    az_sf_managed_node_type_delete_command_builder.prototype.nodeTypeName = function (value) {
        this.setFlag("--node-type-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_managed_node_type_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_managed_node_type_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_managed_node_type_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List node types of a managed cluster.
 *
 * Syntax:
 * ```
 * az sf managed-node-type list --cluster-name
 *                              --resource-group
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_managed_node_type_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_managed_node_type_list_command_builder, _super);
    function az_sf_managed_node_type_list_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_managed_node_type_list_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_managed_node_type_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sf_managed_node_type_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_managed_node_type_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_managed_node_type_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the properties of a node type.
 *
 * Syntax:
 * ```
 * az sf managed-node-type show --cluster-name
 *                              --name
 *                              --resource-group
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} nodeTypeName Node type name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_managed_node_type_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_managed_node_type_show_command_builder, _super);
    function az_sf_managed_node_type_show_command_builder(commandPath, resultDataTypeName, clusterName, nodeTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.nodeTypeName(nodeTypeName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_managed_node_type_show_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Node type name. */
    az_sf_managed_node_type_show_command_builder.prototype.nodeTypeName = function (value) {
        this.setFlag("--node-type-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_managed_node_type_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sf_managed_node_type_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_managed_node_type_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_managed_node_type_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a managed cluster.
 *
 * Syntax:
 * ```
 * az sf managed-node-type update --cluster-name
 *                                --name
 *                                --resource-group
 *                                [--app-end-port]
 *                                [--app-start-port]
 *                                [--capacity]
 *                                [--ephemeral-end-port]
 *                                [--ephemeral-start-port]
 *                                [--instance-count]
 *                                [--placement-property]
 *                                [--subscription]
 * ```
 *
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} nodeTypeName Node type name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_managed_node_type_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_managed_node_type_update_command_builder, _super);
    function az_sf_managed_node_type_update_command_builder(commandPath, resultDataTypeName, clusterName, nodeTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.nodeTypeName(nodeTypeName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_managed_node_type_update_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Node type name. */
    az_sf_managed_node_type_update_command_builder.prototype.nodeTypeName = function (value) {
        this.setFlag("--node-type-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_managed_node_type_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Application End port of a range of ports. */
    az_sf_managed_node_type_update_command_builder.prototype.applicationEndPort = function (value) {
        this.setFlag("--application-end-port", value);
        return this;
    };
    /** Application start port of a range of ports. */
    az_sf_managed_node_type_update_command_builder.prototype.applicationStartPort = function (value) {
        this.setFlag("--application-start-port", value);
        return this;
    };
    /** Capacity tags applied to the nodes in the node type as key/value pairs, the cluster resource manager uses these tags to understand how much resource a node has. Updating this will override the current values.for example: --capacity ClientConnections=65536 param2=value2. */
    az_sf_managed_node_type_update_command_builder.prototype.capacity = function (value) {
        this.setFlag("--capacity", value);
        return this;
    };
    /** Ephemeral end port of a range of ports. */
    az_sf_managed_node_type_update_command_builder.prototype.ephemeralEndPort = function (value) {
        this.setFlag("--ephemeral-end-port", value);
        return this;
    };
    /** Ephemeral start port of a range of ports. */
    az_sf_managed_node_type_update_command_builder.prototype.ephemeralStartPort = function (value) {
        this.setFlag("--ephemeral-start-port", value);
        return this;
    };
    /** Essage = "The number of nodes in the node type. */
    az_sf_managed_node_type_update_command_builder.prototype.instanceCount = function (value) {
        this.setFlag("--instance-count", value);
        return this;
    };
    /** Placement tags applied to nodes in the node type as key/value pairs, which can be used to indicate where certain services (workload) should run. Updating this will override the current values.for example: --placement-property NodeColor=Green SomeProperty=5. */
    az_sf_managed_node_type_update_command_builder.prototype.placementProperty = function (value) {
        this.setFlag("--placement-property", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_managed_node_type_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_managed_node_type_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new service on an Azure Service Fabric cluster.
 *
 * Syntax:
 * ```
 * az sf service create --application
 *                      --cluster-name
 *                      --name
 *                      --resource-group
 *                      --service-type
 *                      --state {stateful, stateless}
 *                      [--default-move-cost {High, Low, Medium, Zero}]
 *                      [--instance-count]
 *                      [--min-replica]
 *                      [--partition-scheme {named, singleton, uniformInt64}]
 *                      [--subscription]
 *                      [--target-replica]
 * ```
 *
 * @param {string} applicationName Specify the name of the service. The application name must be a prefix of the service name, for example: appName~serviceName.
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} serviceName Specify the name of the service. The application name must be a prefix of the service name, for example: appName~serviceName.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceType Specify the service type name of the application, it should exist in the application manifest.
 * @param {'stateful' | 'stateless'} state Specify if the service is stateless or stateful.
 */
var az_sf_service_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_service_create_command_builder, _super);
    function az_sf_service_create_command_builder(commandPath, resultDataTypeName, applicationName, clusterName, serviceName, resourceGroup, serviceType, state) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationName(applicationName);
        _this.clusterName(clusterName);
        _this.serviceName(serviceName);
        _this.resourceGroup(resourceGroup);
        _this.serviceType(serviceType);
        _this.state(state);
        return _this;
    }
    /** Specify the name of the service. The application name must be a prefix of the service name, for example: appName~serviceName. */
    az_sf_service_create_command_builder.prototype.applicationName = function (value) {
        this.setFlag("--application-name", value);
        return this;
    };
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_service_create_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the name of the service. The application name must be a prefix of the service name, for example: appName~serviceName. */
    az_sf_service_create_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_service_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify the service type name of the application, it should exist in the application manifest. */
    az_sf_service_create_command_builder.prototype.serviceType = function (value) {
        this.setFlag("--service-type", value);
        return this;
    };
    /** Specify if the service is stateless or stateful. */
    az_sf_service_create_command_builder.prototype.state = function (value) {
        this.setFlag("--state", value);
        return this;
    };
    /** Specify the default cost for a move. Higher costs make it less likely that the Cluster Resource Manager will move the replica when trying to balance the cluster. */
    az_sf_service_create_command_builder.prototype.defaultMoveCost = function (value) {
        this.setFlag("--default-move-cost", value);
        return this;
    };
    /** Specify the instance count for the stateless service. If -1 is used, it means it will run on all the nodes. */
    az_sf_service_create_command_builder.prototype.instanceCount = function (value) {
        this.setFlag("--instance-count", value);
        return this;
    };
    /** Specify the min replica set size for the stateful service. */
    az_sf_service_create_command_builder.prototype.minReplicaSetSize = function (value) {
        this.setFlag("--min-replica-set-size", value);
        return this;
    };
    /** Specify what partition scheme to use. Singleton partitions are typically used when the service does not require any additional routing. UniformInt64 means that each partition owns a range of int64 keys. Named is usually for services with data that can be bucketed, within a bounded set. Some common examples of data fields used as named partition keys would be regions, postal codes, customer groups, or other business boundaries. */
    az_sf_service_create_command_builder.prototype.partitionScheme = function (value) {
        this.setFlag("--partition-scheme", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_service_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Specify the target replica set size for the stateful service. */
    az_sf_service_create_command_builder.prototype.targetReplicaSetSize = function (value) {
        this.setFlag("--target-replica-set-size", value);
        return this;
    };
    return az_sf_service_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a service.
 *
 * Syntax:
 * ```
 * az sf service delete --application-name
 *                      --cluster-name
 *                      --name
 *                      --resource-group
 *                      [--subscription]
 * ```
 *
 * @param {string} applicationName The name of the application resource.
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} serviceName Specify the name of the service. The application name must be a prefix of the service name, for example: appName~serviceName.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_service_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_service_delete_command_builder, _super);
    function az_sf_service_delete_command_builder(commandPath, resultDataTypeName, applicationName, clusterName, serviceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationName(applicationName);
        _this.clusterName(clusterName);
        _this.serviceName(serviceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the application resource. */
    az_sf_service_delete_command_builder.prototype.applicationName = function (value) {
        this.setFlag("--application-name", value);
        return this;
    };
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_service_delete_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the name of the service. The application name must be a prefix of the service name, for example: appName~serviceName. */
    az_sf_service_delete_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_service_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_service_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_service_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List services of a given application.
 *
 * Syntax:
 * ```
 * az sf service list --application-name
 *                    --cluster-name
 *                    --resource-group
 *                    [--query-examples]
 *                    [--subscription]
 * ```
 *
 * @param {string} applicationName The name of the application resource.
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_service_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_service_list_command_builder, _super);
    function az_sf_service_list_command_builder(commandPath, resultDataTypeName, applicationName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationName(applicationName);
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the application resource. */
    az_sf_service_list_command_builder.prototype.applicationName = function (value) {
        this.setFlag("--application-name", value);
        return this;
    };
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_service_list_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_service_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sf_service_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_service_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_service_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a service.
 *
 * Syntax:
 * ```
 * az sf service show --application-name
 *                    --cluster-name
 *                    --name
 *                    --resource-group
 *                    [--query-examples]
 *                    [--subscription]
 * ```
 *
 * @param {string} applicationName The name of the application resource.
 * @param {string} clusterName Specify the name of the cluster, if not given it will be same as resource group name.
 * @param {string} serviceName Specify the name of the service. The application name must be a prefix of the service name, for example: appName~serviceName.
 * @param {string} resourceGroup Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sf_service_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sf_service_show_command_builder, _super);
    function az_sf_service_show_command_builder(commandPath, resultDataTypeName, applicationName, clusterName, serviceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationName(applicationName);
        _this.clusterName(clusterName);
        _this.serviceName(serviceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the application resource. */
    az_sf_service_show_command_builder.prototype.applicationName = function (value) {
        this.setFlag("--application-name", value);
        return this;
    };
    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    az_sf_service_show_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Specify the name of the service. The application name must be a prefix of the service name, for example: appName~serviceName. */
    az_sf_service_show_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sf_service_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sf_service_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sf_service_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sf_service_show_command_builder;
}(base_1.CommandBuilder));
