import { CommandBuilder } from '../base';

/** Manage the certificate of an application. */
export class az_sf_application_certificate {
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
    static az_sf_application_certificate_add(clusterName: string, resourceGroup: string): az_sf_application_certificate_add_command_builder {
        return new az_sf_application_certificate_add_command_builder("az sf application certificate add", clusterName, resourceGroup);
    }
}

/** Manage application type versions on an Azure Service Fabric cluster. */
export class az_sf_application_type_version {
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
    static az_sf_application_type_version_create(applicationTypeName: string, applicationTypeVersion: string, clusterName: string, packageUrl: string, resourceGroup: string): az_sf_application_type_version_create_command_builder {
        return new az_sf_application_type_version_create_command_builder("az sf application-type version create", applicationTypeName, applicationTypeVersion, clusterName, packageUrl, resourceGroup);
    }

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
    static az_sf_application_type_version_delete(applicationTypeName: string, applicationTypeVersion: string, clusterName: string, resourceGroup: string): az_sf_application_type_version_delete_command_builder {
        return new az_sf_application_type_version_delete_command_builder("az sf application-type version delete", applicationTypeName, applicationTypeVersion, clusterName, resourceGroup);
    }

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
    static az_sf_application_type_version_list(applicationTypeName: string, clusterName: string, resourceGroup: string): az_sf_application_type_version_list_command_builder {
        return new az_sf_application_type_version_list_command_builder("az sf application-type version list", applicationTypeName, clusterName, resourceGroup);
    }

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
    static az_sf_application_type_version_show(applicationTypeName: string, applicationTypeVersion: string, clusterName: string, resourceGroup: string): az_sf_application_type_version_show_command_builder {
        return new az_sf_application_type_version_show_command_builder("az sf application-type version show", applicationTypeName, applicationTypeVersion, clusterName, resourceGroup);
    }
}

/** Manage application types on an Azure Service Fabric cluster. */
export class az_sf_application_type {
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
    static az_sf_application_type_create(applicationTypeName: string, clusterName: string, resourceGroup: string): az_sf_application_type_create_command_builder {
        return new az_sf_application_type_create_command_builder("az sf application-type create", applicationTypeName, clusterName, resourceGroup);
    }

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
    static az_sf_application_type_delete(applicationTypeName: string, clusterName: string, resourceGroup: string): az_sf_application_type_delete_command_builder {
        return new az_sf_application_type_delete_command_builder("az sf application-type delete", applicationTypeName, clusterName, resourceGroup);
    }

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
    static az_sf_application_type_list(clusterName: string, resourceGroup: string): az_sf_application_type_list_command_builder {
        return new az_sf_application_type_list_command_builder("az sf application-type list", clusterName, resourceGroup);
    }

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
    static az_sf_application_type_show(applicationTypeName: string, clusterName: string, resourceGroup: string): az_sf_application_type_show_command_builder {
        return new az_sf_application_type_show_command_builder("az sf application-type show", applicationTypeName, clusterName, resourceGroup);
    }
}

/** Manage applications running on an Azure Service Fabric cluster. */
export class az_sf_application {
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
    static az_sf_application_create(applicationName: string, applicationTypeName: string, applicationTypeVersion: string, clusterName: string, resourceGroup: string): az_sf_application_create_command_builder {
        return new az_sf_application_create_command_builder("az sf application create", applicationName, applicationTypeName, applicationTypeVersion, clusterName, resourceGroup);
    }

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
    static az_sf_application_delete(applicationName: string, clusterName: string, resourceGroup: string): az_sf_application_delete_command_builder {
        return new az_sf_application_delete_command_builder("az sf application delete", applicationName, clusterName, resourceGroup);
    }

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
    static az_sf_application_list(clusterName: string, resourceGroup: string): az_sf_application_list_command_builder {
        return new az_sf_application_list_command_builder("az sf application list", clusterName, resourceGroup);
    }

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
    static az_sf_application_show(applicationName: string, clusterName: string, resourceGroup: string): az_sf_application_show_command_builder {
        return new az_sf_application_show_command_builder("az sf application show", applicationName, clusterName, resourceGroup);
    }

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
    static az_sf_application_update(applicationName: string, clusterName: string, resourceGroup: string): az_sf_application_update_command_builder {
        return new az_sf_application_update_command_builder("az sf application update", applicationName, clusterName, resourceGroup);
    }
}

/** Manage a cluster certificate. */
export class az_sf_cluster_certificate {
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
    static az_sf_cluster_certificate_add(clusterName: string, resourceGroup: string): az_sf_cluster_certificate_add_command_builder {
        return new az_sf_cluster_certificate_add_command_builder("az sf cluster certificate add", clusterName, resourceGroup);
    }

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
    static az_sf_cluster_certificate_remove(clusterName: string, resourceGroup: string, thumbprint: string): az_sf_cluster_certificate_remove_command_builder {
        return new az_sf_cluster_certificate_remove_command_builder("az sf cluster certificate remove", clusterName, resourceGroup, thumbprint);
    }
}

/** Manage the client certificate of a cluster. */
export class az_sf_cluster_client_certificate {
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
    static az_sf_cluster_client_certificate_add(clusterName: string, resourceGroup: string): az_sf_cluster_client_certificate_add_command_builder {
        return new az_sf_cluster_client_certificate_add_command_builder("az sf cluster client-certificate add", clusterName, resourceGroup);
    }

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
    static az_sf_cluster_client_certificate_remove(clusterName: string, resourceGroup: string): az_sf_cluster_client_certificate_remove_command_builder {
        return new az_sf_cluster_client_certificate_remove_command_builder("az sf cluster client-certificate remove", clusterName, resourceGroup);
    }
}

/** Manage the durability of a cluster. */
export class az_sf_cluster_durability {
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
    static az_sf_cluster_durability_update(clusterName: string, durabilityLevel: 'Bronze' | 'Gold' | 'Silver', nodeType: string, resourceGroup: string): az_sf_cluster_durability_update_command_builder {
        return new az_sf_cluster_durability_update_command_builder("az sf cluster durability update", clusterName, durabilityLevel, nodeType, resourceGroup);
    }
}

/** Manage the node-type of a cluster. */
export class az_sf_cluster_node_type {
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
    static az_sf_cluster_node_type_add(capacity: string, clusterName: string, nodeType: string, resourceGroup: string, vmPassword: string, vmUserName: string): az_sf_cluster_node_type_add_command_builder {
        return new az_sf_cluster_node_type_add_command_builder("az sf cluster node-type add", capacity, clusterName, nodeType, resourceGroup, vmPassword, vmUserName);
    }
}

/** Manage the node instance of a cluster. */
export class az_sf_cluster_node {
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
    static az_sf_cluster_node_add(clusterName: string, nodeType: string, numberOfNodesToAdd: string, resourceGroup: string): az_sf_cluster_node_add_command_builder {
        return new az_sf_cluster_node_add_command_builder("az sf cluster node add", clusterName, nodeType, numberOfNodesToAdd, resourceGroup);
    }

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
    static az_sf_cluster_node_remove(clusterName: string, nodeType: string, numberOfNodesToRemove: string, resourceGroup: string): az_sf_cluster_node_remove_command_builder {
        return new az_sf_cluster_node_remove_command_builder("az sf cluster node remove", clusterName, nodeType, numberOfNodesToRemove, resourceGroup);
    }
}

/** Manage the reliability of a cluster. */
export class az_sf_cluster_reliability {
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
    static az_sf_cluster_reliability_update(clusterName: string, reliabilityLevel: 'Bronze' | 'Gold' | 'Platinum' | 'Silver', resourceGroup: string): az_sf_cluster_reliability_update_command_builder {
        return new az_sf_cluster_reliability_update_command_builder("az sf cluster reliability update", clusterName, reliabilityLevel, resourceGroup);
    }
}

/** Manage a cluster's settings. */
export class az_sf_cluster_setting {
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
    static az_sf_cluster_setting_remove(clusterName: string, resourceGroup: string): az_sf_cluster_setting_remove_command_builder {
        return new az_sf_cluster_setting_remove_command_builder("az sf cluster setting remove", clusterName, resourceGroup);
    }

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
    static az_sf_cluster_setting_set(clusterName: string, resourceGroup: string): az_sf_cluster_setting_set_command_builder {
        return new az_sf_cluster_setting_set_command_builder("az sf cluster setting set", clusterName, resourceGroup);
    }
}

/** Manage the upgrade type of a cluster. */
export class az_sf_cluster_upgrade_type {
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
    static az_sf_cluster_upgrade_type_set(clusterName: string, resourceGroup: string, upgradeMode: 'automatic' | 'manual'): az_sf_cluster_upgrade_type_set_command_builder {
        return new az_sf_cluster_upgrade_type_set_command_builder("az sf cluster upgrade-type set", clusterName, resourceGroup, upgradeMode);
    }
}

/** Manage an Azure Service Fabric cluster. */
export class az_sf_cluster {
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
    static az_sf_cluster_create(location: string, resourceGroup: string): az_sf_cluster_create_command_builder {
        return new az_sf_cluster_create_command_builder("az sf cluster create", location, resourceGroup);
    }

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
    static az_sf_cluster_list(): az_sf_cluster_list_command_builder {
        return new az_sf_cluster_list_command_builder("az sf cluster list");
    }

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
    static az_sf_cluster_show(clusterName: string, resourceGroup: string): az_sf_cluster_show_command_builder {
        return new az_sf_cluster_show_command_builder("az sf cluster show", clusterName, resourceGroup);
    }
}

/** Manage client certificates of a manged cluster. */
export class az_sf_managed_cluster_client_certificate {
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
    static az_sf_managed_cluster_client_certificate_add(clusterName: string, resourceGroup: string): az_sf_managed_cluster_client_certificate_add_command_builder {
        return new az_sf_managed_cluster_client_certificate_add_command_builder("az sf managed-cluster client-certificate add", clusterName, resourceGroup);
    }

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
    static az_sf_managed_cluster_client_certificate_delete(clusterName: string, resourceGroup: string): az_sf_managed_cluster_client_certificate_delete_command_builder {
        return new az_sf_managed_cluster_client_certificate_delete_command_builder("az sf managed-cluster client-certificate delete", clusterName, resourceGroup);
    }
}

/** Manage an Azure Service Fabric managed cluster. */
export class az_sf_managed_cluster {
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
    static az_sf_managed_cluster_create(adminPassword: string, clusterName: string, resourceGroup: string): az_sf_managed_cluster_create_command_builder {
        return new az_sf_managed_cluster_create_command_builder("az sf managed-cluster create", adminPassword, clusterName, resourceGroup);
    }

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
    static az_sf_managed_cluster_delete(clusterName: string, resourceGroup: string): az_sf_managed_cluster_delete_command_builder {
        return new az_sf_managed_cluster_delete_command_builder("az sf managed-cluster delete", clusterName, resourceGroup);
    }

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
    static az_sf_managed_cluster_list(): az_sf_managed_cluster_list_command_builder {
        return new az_sf_managed_cluster_list_command_builder("az sf managed-cluster list");
    }

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
    static az_sf_managed_cluster_show(clusterName: string, resourceGroup: string): az_sf_managed_cluster_show_command_builder {
        return new az_sf_managed_cluster_show_command_builder("az sf managed-cluster show", clusterName, resourceGroup);
    }

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
    static az_sf_managed_cluster_update(clusterName: string, resourceGroup: string): az_sf_managed_cluster_update_command_builder {
        return new az_sf_managed_cluster_update_command_builder("az sf managed-cluster update", clusterName, resourceGroup);
    }
}

/** Perform operations on nodes of a node type on managed clusters. */
export class az_sf_managed_node_type_node {
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
    static az_sf_managed_node_type_node_delete(clusterName: string, nodeTypeName: string, nodeName: string, resourceGroup: string): az_sf_managed_node_type_node_delete_command_builder {
        return new az_sf_managed_node_type_node_delete_command_builder("az sf managed-node-type node delete", clusterName, nodeTypeName, nodeName, resourceGroup);
    }

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
    static az_sf_managed_node_type_node_reimage(clusterName: string, nodeTypeName: string, nodeName: string, resourceGroup: string): az_sf_managed_node_type_node_reimage_command_builder {
        return new az_sf_managed_node_type_node_reimage_command_builder("az sf managed-node-type node reimage", clusterName, nodeTypeName, nodeName, resourceGroup);
    }

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
    static az_sf_managed_node_type_node_restart(clusterName: string, nodeTypeName: string, nodeName: string, resourceGroup: string): az_sf_managed_node_type_node_restart_command_builder {
        return new az_sf_managed_node_type_node_restart_command_builder("az sf managed-node-type node restart", clusterName, nodeTypeName, nodeName, resourceGroup);
    }
}

/** Managed vm extension on a node type on managed clusters. */
export class az_sf_managed_node_type_vm_extension {
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
    static az_sf_managed_node_type_vm_extension_add(clusterName: string, extensionName: string, extensionType: string, nodeTypeName: string, publisher: string, resourceGroup: string, typeHandlerVersion: string): az_sf_managed_node_type_vm_extension_add_command_builder {
        return new az_sf_managed_node_type_vm_extension_add_command_builder("az sf managed-node-type vm-extension add", clusterName, extensionName, extensionType, nodeTypeName, publisher, resourceGroup, typeHandlerVersion);
    }

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
    static az_sf_managed_node_type_vm_extension_delete(clusterName: string, extensionName: string, nodeTypeName: string, resourceGroup: string): az_sf_managed_node_type_vm_extension_delete_command_builder {
        return new az_sf_managed_node_type_vm_extension_delete_command_builder("az sf managed-node-type vm-extension delete", clusterName, extensionName, nodeTypeName, resourceGroup);
    }
}

/** Managed vm secrets on a node type on managed clusters. */
export class az_sf_managed_node_type_vm_secret {
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
    static az_sf_managed_node_type_vm_secret_add(certificateStore: string, certificateUrl: string, clusterName: string, nodeTypeName: string, resourceGroup: string, sourceVaultId: string): az_sf_managed_node_type_vm_secret_add_command_builder {
        return new az_sf_managed_node_type_vm_secret_add_command_builder("az sf managed-node-type vm-secret add", certificateStore, certificateUrl, clusterName, nodeTypeName, resourceGroup, sourceVaultId);
    }
}

/** Manage a node type of an Azure Service Fabric managed cluster. */
export class az_sf_managed_node_type {
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
    static az_sf_managed_node_type_create(clusterName: string, instanceCount: string, nodeTypeName: string, resourceGroup: string): az_sf_managed_node_type_create_command_builder {
        return new az_sf_managed_node_type_create_command_builder("az sf managed-node-type create", clusterName, instanceCount, nodeTypeName, resourceGroup);
    }

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
    static az_sf_managed_node_type_delete(clusterName: string, nodeTypeName: string, resourceGroup: string): az_sf_managed_node_type_delete_command_builder {
        return new az_sf_managed_node_type_delete_command_builder("az sf managed-node-type delete", clusterName, nodeTypeName, resourceGroup);
    }

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
    static az_sf_managed_node_type_list(clusterName: string, resourceGroup: string): az_sf_managed_node_type_list_command_builder {
        return new az_sf_managed_node_type_list_command_builder("az sf managed-node-type list", clusterName, resourceGroup);
    }

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
    static az_sf_managed_node_type_show(clusterName: string, nodeTypeName: string, resourceGroup: string): az_sf_managed_node_type_show_command_builder {
        return new az_sf_managed_node_type_show_command_builder("az sf managed-node-type show", clusterName, nodeTypeName, resourceGroup);
    }

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
    static az_sf_managed_node_type_update(clusterName: string, nodeTypeName: string, resourceGroup: string): az_sf_managed_node_type_update_command_builder {
        return new az_sf_managed_node_type_update_command_builder("az sf managed-node-type update", clusterName, nodeTypeName, resourceGroup);
    }
}

/** Manage services running on an Azure Service Fabric cluster. */
export class az_sf_service {
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
    static az_sf_service_create(applicationName: string, clusterName: string, serviceName: string, resourceGroup: string, serviceType: string, state: 'stateful' | 'stateless'): az_sf_service_create_command_builder {
        return new az_sf_service_create_command_builder("az sf service create", applicationName, clusterName, serviceName, resourceGroup, serviceType, state);
    }

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
    static az_sf_service_delete(applicationName: string, clusterName: string, serviceName: string, resourceGroup: string): az_sf_service_delete_command_builder {
        return new az_sf_service_delete_command_builder("az sf service delete", applicationName, clusterName, serviceName, resourceGroup);
    }

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
    static az_sf_service_list(applicationName: string, clusterName: string, resourceGroup: string): az_sf_service_list_command_builder {
        return new az_sf_service_list_command_builder("az sf service list", applicationName, clusterName, resourceGroup);
    }

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
    static az_sf_service_show(applicationName: string, clusterName: string, serviceName: string, resourceGroup: string): az_sf_service_show_command_builder {
        return new az_sf_service_show_command_builder("az sf service show", applicationName, clusterName, serviceName, resourceGroup);
    }
}

/** Manage and administer Azure Service Fabric clusters. */
export class az_sf {
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
class az_sf_application_certificate_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_application_certificate_add_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_application_certificate_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The folder of the new certificate file to be created. */
    certificateOutputFolder(value: string): az_sf_application_certificate_add_command_builder {
        this.setFlag("--certificate-output-folder", value);
        return this;
    }

    /** The subject name of the certificate to be created. */
    certificateSubjectName(value: string): az_sf_application_certificate_add_command_builder {
        this.setFlag("--certificate-subject-name", value);
        return this;
    }

    /** The existing certificate file path for the primary cluster certificate. */
    certificateFile(value: string): az_sf_application_certificate_add_command_builder {
        this.setFlag("--certificate-file", value);
        return this;
    }

    /** The password of the certificate file. */
    certificatePassword(value: string): az_sf_application_certificate_add_command_builder {
        this.setFlag("--certificate-password", value);
        return this;
    }

    /** The existing Azure key vault secret URL. */
    secretIdentifier(value: string): az_sf_application_certificate_add_command_builder {
        this.setFlag("--secret-identifier", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_application_certificate_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Azure key vault name, it not given it will be the cluster resource group name. */
    vaultName(value: string): az_sf_application_certificate_add_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Key vault resource group name, if not given it will be cluster resource group name. */
    vaultResourceGroup(value: string): az_sf_application_certificate_add_command_builder {
        this.setFlag("--vault-resource-group", value);
        return this;
    }
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
class az_sf_application_type_version_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, applicationTypeName: string, applicationTypeVersion: string, clusterName: string, packageUrl: string, resourceGroup: string) {
        super(commandParent);
        this.applicationTypeName(applicationTypeName)
        this.applicationTypeVersion(applicationTypeVersion)
        this.clusterName(clusterName)
        this.packageUrl(packageUrl)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the application type name. */
    applicationTypeName(value: string): az_sf_application_type_version_create_command_builder {
        this.setFlag("--application-type-name", value);
        return this;
    }

    /** Specify the application type version. */
    applicationTypeVersion(value: string): az_sf_application_type_version_create_command_builder {
        this.setFlag("--application-type-version", value);
        return this;
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_application_type_version_create_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the url of the application package sfpkg file. */
    packageUrl(value: string): az_sf_application_type_version_create_command_builder {
        this.setFlag("--package-url", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_application_type_version_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_application_type_version_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sf_application_type_version_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, applicationTypeName: string, applicationTypeVersion: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.applicationTypeName(applicationTypeName)
        this.applicationTypeVersion(applicationTypeVersion)
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the application type name. */
    applicationTypeName(value: string): az_sf_application_type_version_delete_command_builder {
        this.setFlag("--application-type-name", value);
        return this;
    }

    /** Specify the application type version. */
    applicationTypeVersion(value: string): az_sf_application_type_version_delete_command_builder {
        this.setFlag("--application-type-version", value);
        return this;
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_application_type_version_delete_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_application_type_version_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_application_type_version_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sf_application_type_version_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, applicationTypeName: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.applicationTypeName(applicationTypeName)
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the application type name. */
    applicationTypeName(value: string): az_sf_application_type_version_list_command_builder {
        this.setFlag("--application-type-name", value);
        return this;
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_application_type_version_list_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_application_type_version_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sf_application_type_version_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_application_type_version_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sf_application_type_version_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, applicationTypeName: string, applicationTypeVersion: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.applicationTypeName(applicationTypeName)
        this.applicationTypeVersion(applicationTypeVersion)
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the application type name. */
    applicationTypeName(value: string): az_sf_application_type_version_show_command_builder {
        this.setFlag("--application-type-name", value);
        return this;
    }

    /** Specify the application type version. */
    applicationTypeVersion(value: string): az_sf_application_type_version_show_command_builder {
        this.setFlag("--application-type-version", value);
        return this;
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_application_type_version_show_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_application_type_version_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sf_application_type_version_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_application_type_version_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sf_application_type_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, applicationTypeName: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.applicationTypeName(applicationTypeName)
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the application type name. */
    applicationTypeName(value: string): az_sf_application_type_create_command_builder {
        this.setFlag("--application-type-name", value);
        return this;
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_application_type_create_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_application_type_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_application_type_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sf_application_type_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, applicationTypeName: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.applicationTypeName(applicationTypeName)
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the application type name. */
    applicationTypeName(value: string): az_sf_application_type_delete_command_builder {
        this.setFlag("--application-type-name", value);
        return this;
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_application_type_delete_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_application_type_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_application_type_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sf_application_type_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_application_type_list_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_application_type_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sf_application_type_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_application_type_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sf_application_type_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, applicationTypeName: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.applicationTypeName(applicationTypeName)
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the application type name. */
    applicationTypeName(value: string): az_sf_application_type_show_command_builder {
        this.setFlag("--application-type-name", value);
        return this;
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_application_type_show_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_application_type_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sf_application_type_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_application_type_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sf_application_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, applicationName: string, applicationTypeName: string, applicationTypeVersion: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.applicationName(applicationName)
        this.applicationTypeName(applicationTypeName)
        this.applicationTypeVersion(applicationTypeVersion)
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the application name. */
    applicationName(value: string): az_sf_application_create_command_builder {
        this.setFlag("--application-name", value);
        return this;
    }

    /** Specify the application type name. */
    applicationTypeName(value: string): az_sf_application_create_command_builder {
        this.setFlag("--application-type-name", value);
        return this;
    }

    /** Specify the application type version. */
    applicationTypeVersion(value: string): az_sf_application_create_command_builder {
        this.setFlag("--application-type-version", value);
        return this;
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_application_create_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_application_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Specify the application parameters as key/value pairs. These parameters must exist in the application manifest. for example: --application-parameters param1=value1 param2=value2. */
    applicationParameters(value: string): az_sf_application_create_command_builder {
        this.setFlag("--application-parameters", value);
        return this;
    }

    /** Specify the maximum number of nodes on which to place an application. The value of this parameter must be a non-negative integer. The default value is 0, which indicates the application can be placed on any number of nodes in the cluster. */
    maximumNodes(value: string): az_sf_application_create_command_builder {
        this.setFlag("--maximum-nodes", value);
        return this;
    }

    /** Specify the minimum number of nodes where Service Fabric will reserve capacity for this application, this does not mean that the application is guaranteed to have replicas on all those nodes. The value of this parameter must be a non-negative integer. Default value for this is zero, which means no capacity is reserved for the application. */
    minimumNodes(value: string): az_sf_application_create_command_builder {
        this.setFlag("--minimum-nodes", value);
        return this;
    }

    /** Specify the url of the application package sfpkg file. */
    packageUrl(value: string): az_sf_application_create_command_builder {
        this.setFlag("--package-url", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_application_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sf_application_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, applicationName: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.applicationName(applicationName)
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the application name. */
    applicationName(value: string): az_sf_application_delete_command_builder {
        this.setFlag("--application-name", value);
        return this;
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_application_delete_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_application_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_application_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sf_application_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_application_list_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_application_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sf_application_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_application_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sf_application_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, applicationName: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.applicationName(applicationName)
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the application name. */
    applicationName(value: string): az_sf_application_show_command_builder {
        this.setFlag("--application-name", value);
        return this;
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_application_show_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_application_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sf_application_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_application_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sf_application_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, applicationName: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.applicationName(applicationName)
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the application name. */
    applicationName(value: string): az_sf_application_update_command_builder {
        this.setFlag("--application-name", value);
        return this;
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_application_update_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_application_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Specify the application parameters as key/value pairs. These parameters must exist in the application manifest. for example: --application-parameters param1=value1 param2=value2. */
    applicationParameters(value: string): az_sf_application_update_command_builder {
        this.setFlag("--application-parameters", value);
        return this;
    }

    /** Specify the application type version. */
    applicationTypeVersion(value: string): az_sf_application_update_command_builder {
        this.setFlag("--application-type-version", value);
        return this;
    }

    /** Indicates whether to treat a warning health event as an error event during health evaluation. */
    considerWarningAsError(value: boolean): az_sf_application_update_command_builder {
        this.setFlag("--consider-warning-as-error", value.toString());
        return this;
    }

    /** Specify the action to take if the monitored upgrade fails. The acceptable values for this parameter are Rollback or Manual. */
    failureAction(value: 'Manual' | 'Rollback'): az_sf_application_update_command_builder {
        this.setFlag("--failure-action", value);
        return this;
    }

    /** Indicates that the service host restarts even if the upgrade is a configuration-only change. */
    forceRestart(value: boolean): az_sf_application_update_command_builder {
        this.setFlag("--force-restart", value.toString());
        return this;
    }

    /** Specify the duration, in seconds, after which Service Fabric retries the health check if the previous health check fails. */
    healthCheckRetryTimeout(value: string): az_sf_application_update_command_builder {
        this.setFlag("--health-check-retry-timeout", value);
        return this;
    }

    /** Specify the duration, in seconds, that Service Fabric waits in order to verify that the application is stable before moving to the next upgrade domain or completing the upgrade. This wait duration prevents undetected changes of health right after the health check is performed. */
    healthCheckStableDuration(value: string): az_sf_application_update_command_builder {
        this.setFlag("--health-check-stable-duration", value);
        return this;
    }

    /** Specify the duration, in seconds, that Service Fabric waits before it performs the initial health check after it finishes the upgrade on the upgrade domain. */
    healthCheckWaitDuration(value: string): az_sf_application_update_command_builder {
        this.setFlag("--health-check-wait-duration", value);
        return this;
    }

    /** Specify the maximum number of nodes on which to place an application. The value of this parameter must be a non-negative integer. The default value is 0, which indicates the application can be placed on any number of nodes in the cluster. */
    maximumNodes(value: string): az_sf_application_update_command_builder {
        this.setFlag("--maximum-nodes", value);
        return this;
    }

    /** Specify the maximum percentage of the application instances deployed on the nodes in the cluster that have a health state of error before the application health state for the cluster is error. Allowed values are form 0 to 100. */
    maxPorcentUnhealthyApps(value: string): az_sf_application_update_command_builder {
        this.setFlag("--max-porcent-unhealthy-apps", value);
        return this;
    }

    /** Specify the maximum percent of unhelthy partitions per service allowed by the health policy for the default service type to use for the monitored upgrade. Allowed values are form 0 to 100. */
    maxPorcentUnhealthyPartitions(value: string): az_sf_application_update_command_builder {
        this.setFlag("--max-porcent-unhealthy-partitions", value);
        return this;
    }

    /** Specify the maximum percent of unhelthy replicas per service allowed by the health policy for the default service type to use for the monitored upgrade. Allowed values are form 0 to 100. */
    maxPorcentUnhealthyReplicas(value: string): az_sf_application_update_command_builder {
        this.setFlag("--max-porcent-unhealthy-replicas", value);
        return this;
    }

    /** Specify the maximum percent of unhelthy services allowed by the health policy for the default service type to use for the monitored upgrade. Allowed values are form 0 to 100. */
    maxPorcentUnhealthyServices(value: string): az_sf_application_update_command_builder {
        this.setFlag("--max-porcent-unhealthy-services", value);
        return this;
    }

    /** Specify the minimum number of nodes where Service Fabric will reserve capacity for this application, this does not mean that the application is guaranteed to have replicas on all those nodes. The value of this parameter must be a non-negative integer. Default value for this is zero, which means no capacity is reserved for the application. */
    minimumNodes(value: string): az_sf_application_update_command_builder {
        this.setFlag("--minimum-nodes", value);
        return this;
    }

    /** Specify the maximum time, in seconds, that Service Fabric waits for a service to reconfigure into a safe state, if not already in a safe state, before Service Fabric proceeds with the upgrade. */
    upgradeReplicaSetCheckTimeout(value: string): az_sf_application_update_command_builder {
        this.setFlag("--upgrade-replica-set-check-timeout", value);
        return this;
    }

    /** Specify the map of the health policy to use for different service types as a hash table in the following format: {"ServiceTypeName" : "MaxPercentUnhealthyPartitionsPerService,MaxPercentUnhealthyReplicasPerPartition,MaxPercentUnhealthyServices"}. For example: @{ "ServiceTypeName01" = "5,10,5"; "ServiceTypeName02" = "5,5,5" }. */
    serviceTypeHealthPolicyMap(value: string): az_sf_application_update_command_builder {
        this.setFlag("--service-type-health-policy-map", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_application_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Specify the maximum time, in seconds, that Service Fabric takes to upgrade a single upgrade domain. After this period, the upgrade fails. */
    upgradeDomainTimeout(value: string): az_sf_application_update_command_builder {
        this.setFlag("--upgrade-domain-timeout", value);
        return this;
    }

    /** Specify the maximum time, in seconds, that Service Fabric takes for the entire upgrade. After this period, the upgrade fails. */
    upgradeTimeout(value: string): az_sf_application_update_command_builder {
        this.setFlag("--upgrade-timeout", value);
        return this;
    }
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
class az_sf_cluster_certificate_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_cluster_certificate_add_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_cluster_certificate_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The folder of the new certificate file to be created. */
    certificateOutputFolder(value: string): az_sf_cluster_certificate_add_command_builder {
        this.setFlag("--certificate-output-folder", value);
        return this;
    }

    /** The subject name of the certificate to be created. */
    certificateSubjectName(value: string): az_sf_cluster_certificate_add_command_builder {
        this.setFlag("--certificate-subject-name", value);
        return this;
    }

    /** The existing certificate file path for the primary cluster certificate. */
    certificateFile(value: string): az_sf_cluster_certificate_add_command_builder {
        this.setFlag("--certificate-file", value);
        return this;
    }

    /** The password of the certificate file. */
    certificatePassword(value: string): az_sf_cluster_certificate_add_command_builder {
        this.setFlag("--certificate-password", value);
        return this;
    }

    /** The existing Azure key vault secret URL. */
    secretIdentifier(value: string): az_sf_cluster_certificate_add_command_builder {
        this.setFlag("--secret-identifier", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_cluster_certificate_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Azure key vault name, it not given it will be the cluster resource group name. */
    vaultName(value: string): az_sf_cluster_certificate_add_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Key vault resource group name, if not given it will be cluster resource group name. */
    vaultResourceGroup(value: string): az_sf_cluster_certificate_add_command_builder {
        this.setFlag("--vault-resource-group", value);
        return this;
    }
}

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
class az_sf_cluster_certificate_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, resourceGroup: string, thumbprint: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
        this.thumbprint(thumbprint)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_cluster_certificate_remove_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_cluster_certificate_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The cluster certificate thumbprint to be removed. */
    thumbprint(value: string): az_sf_cluster_certificate_remove_command_builder {
        this.setFlag("--thumbprint", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_cluster_certificate_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sf_cluster_client_certificate_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_cluster_client_certificate_add_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_cluster_client_certificate_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Client certificate thumbprint that only has admin permission. */
    adminClientThumbprints(value: string): az_sf_cluster_client_certificate_add_command_builder {
        this.setFlag("--admin-client-thumbprints", value);
        return this;
    }

    /** Client certificate common name. */
    certificateCommonName(value: string): az_sf_cluster_client_certificate_add_command_builder {
        this.setFlag("--certificate-common-name", value);
        return this;
    }

    /** Client certificate issuer thumbprint. */
    certificateIssuerThumbprint(value: string): az_sf_cluster_client_certificate_add_command_builder {
        this.setFlag("--certificate-issuer-thumbprint", value);
        return this;
    }

    /** JSON encoded parameters configuration. Use @{file} to load from a file. For example: [{"isAdmin":true, "certificateCommonName": "test.com", "certificateIssuerThumbprint": "22B4AE296B504E512DF880A77A2CAE20200FF922"}]. */
    clientCertificateCommonNames(value: string): az_sf_cluster_client_certificate_add_command_builder {
        this.setFlag("--client-certificate-common-names", value);
        return this;
    }

    /** Client authentication type. */
    isAdmin(value: string): az_sf_cluster_client_certificate_add_command_builder {
        this.setFlag("--is-admin", value);
        return this;
    }

    /** Space-separated list of client certificate thumbprint that has read only permission. */
    readonlyClientThumbprints(value: string): az_sf_cluster_client_certificate_add_command_builder {
        this.setFlag("--readonly-client-thumbprints", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_cluster_client_certificate_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Client certificate thumbprint. */
    thumbprint(value: string): az_sf_cluster_client_certificate_add_command_builder {
        this.setFlag("--thumbprint", value);
        return this;
    }
}

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
class az_sf_cluster_client_certificate_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_cluster_client_certificate_remove_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_cluster_client_certificate_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Client certificate common name. */
    certificateCommonName(value: string): az_sf_cluster_client_certificate_remove_command_builder {
        this.setFlag("--certificate-common-name", value);
        return this;
    }

    /** Client certificate issuer thumbprint. */
    certificateIssuerThumbprint(value: string): az_sf_cluster_client_certificate_remove_command_builder {
        this.setFlag("--certificate-issuer-thumbprint", value);
        return this;
    }

    /** JSON encoded parameters configuration. Use @{file} to load from a file. For example: [{"certificateCommonName": "test.com","certificateIssuerThumbprint": "22B4AE296B504E512DF880A77A2CAE20200FF922"}]. */
    clientCertificateCommonNames(value: string): az_sf_cluster_client_certificate_remove_command_builder {
        this.setFlag("--client-certificate-common-names", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_cluster_client_certificate_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** A single or Space-separated list of client certificate thumbprint(s) to be remove. */
    thumbprints(value: string): az_sf_cluster_client_certificate_remove_command_builder {
        this.setFlag("--thumbprints", value);
        return this;
    }
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
class az_sf_cluster_durability_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, durabilityLevel: 'Bronze' | 'Gold' | 'Silver', nodeType: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.durabilityLevel(durabilityLevel)
        this.nodeType(nodeType)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_cluster_durability_update_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Durability level. */
    durabilityLevel(value: 'Bronze' | 'Gold' | 'Silver'): az_sf_cluster_durability_update_command_builder {
        this.setFlag("--durability-level", value);
        return this;
    }

    /** The Node type name. */
    nodeType(value: string): az_sf_cluster_durability_update_command_builder {
        this.setFlag("--node-type", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_cluster_durability_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_cluster_durability_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sf_cluster_node_type_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, capacity: string, clusterName: string, nodeType: string, resourceGroup: string, vmPassword: string, vmUserName: string) {
        super(commandParent);
        this.capacity(capacity)
        this.clusterName(clusterName)
        this.nodeType(nodeType)
        this.resourceGroup(resourceGroup)
        this.vmPassword(vmPassword)
        this.vmUserName(vmUserName)
    }

    /** The capacity tag applied to nodes in the node type. The cluster resource manager uses these tags to understand how much capacity a node has. */
    capacity(value: string): az_sf_cluster_node_type_add_command_builder {
        this.setFlag("--capacity", value);
        return this;
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_cluster_node_type_add_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** The Node type name. */
    nodeType(value: string): az_sf_cluster_node_type_add_command_builder {
        this.setFlag("--node-type", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_cluster_node_type_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The password of the Vm. */
    vmPassword(value: string): az_sf_cluster_node_type_add_command_builder {
        this.setFlag("--vm-password", value);
        return this;
    }

    /** The user name for logging to Vm. Default will be adminuser. */
    vmUserName(value: string): az_sf_cluster_node_type_add_command_builder {
        this.setFlag("--vm-user-name", value);
        return this;
    }

    /** Durability level. */
    durabilityLevel(value: 'Bronze' | 'Gold' | 'Silver'): az_sf_cluster_node_type_add_command_builder {
        this.setFlag("--durability-level", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_cluster_node_type_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** VM Sku. */
    vmSku(value: string): az_sf_cluster_node_type_add_command_builder {
        this.setFlag("--vm-sku", value);
        return this;
    }

    /** VM tier. */
    vmTier(value: string): az_sf_cluster_node_type_add_command_builder {
        this.setFlag("--vm-tier", value);
        return this;
    }
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
class az_sf_cluster_node_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, nodeType: string, numberOfNodesToAdd: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.nodeType(nodeType)
        this.numberOfNodesToAdd(numberOfNodesToAdd)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_cluster_node_add_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** The Node type name. */
    nodeType(value: string): az_sf_cluster_node_add_command_builder {
        this.setFlag("--node-type", value);
        return this;
    }

    /** Number of nodes to add. */
    numberOfNodesToAdd(value: string): az_sf_cluster_node_add_command_builder {
        this.setFlag("--number-of-nodes-to-add", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_cluster_node_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_cluster_node_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sf_cluster_node_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, nodeType: string, numberOfNodesToRemove: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.nodeType(nodeType)
        this.numberOfNodesToRemove(numberOfNodesToRemove)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_cluster_node_remove_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** The Node type name. */
    nodeType(value: string): az_sf_cluster_node_remove_command_builder {
        this.setFlag("--node-type", value);
        return this;
    }

    /** Number of nodes to remove. */
    numberOfNodesToRemove(value: string): az_sf_cluster_node_remove_command_builder {
        this.setFlag("--number-of-nodes-to-remove", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_cluster_node_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_cluster_node_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sf_cluster_reliability_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, reliabilityLevel: 'Bronze' | 'Gold' | 'Platinum' | 'Silver', resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.reliabilityLevel(reliabilityLevel)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_cluster_reliability_update_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Durability level. */
    reliabilityLevel(value: 'Bronze' | 'Gold' | 'Platinum' | 'Silver'): az_sf_cluster_reliability_update_command_builder {
        this.setFlag("--reliability-level", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_cluster_reliability_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Add node count automatically when changing reliability. */
    autoAddNode(value: string): az_sf_cluster_reliability_update_command_builder {
        this.setFlag("--auto-add-node", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_cluster_reliability_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sf_cluster_setting_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_cluster_setting_remove_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_cluster_setting_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Parameter name. */
    parameter(value: string): az_sf_cluster_setting_remove_command_builder {
        this.setFlag("--parameter", value);
        return this;
    }

    /** Section name. */
    section(value: string): az_sf_cluster_setting_remove_command_builder {
        this.setFlag("--section", value);
        return this;
    }

    /** JSON encoded parameters configuration. Use @{file} to load from a file. For example: [{"section": "NamingService","parameter": "MaxOperationTimeout"}]. */
    settingsSectionDescription(value: string): az_sf_cluster_setting_remove_command_builder {
        this.setFlag("--settings-section-description", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_cluster_setting_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sf_cluster_setting_set_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_cluster_setting_set_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_cluster_setting_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Parameter name. */
    parameter(value: string): az_sf_cluster_setting_set_command_builder {
        this.setFlag("--parameter", value);
        return this;
    }

    /** Section name. */
    section(value: string): az_sf_cluster_setting_set_command_builder {
        this.setFlag("--section", value);
        return this;
    }

    /** JSON encoded parameters configuration. Use @{file} to load from a file. For example: [{"section": "NamingService","parameter": "MaxOperationTimeout","value": 1000},{"section": "MaxFileOperationTimeout","parameter": "Max2","value": 1000]. */
    settingsSectionDescription(value: string): az_sf_cluster_setting_set_command_builder {
        this.setFlag("--settings-section-description", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_cluster_setting_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Specify the value. */
    value(value: string): az_sf_cluster_setting_set_command_builder {
        this.setFlag("--value", value);
        return this;
    }
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
class az_sf_cluster_upgrade_type_set_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, resourceGroup: string, upgradeMode: 'automatic' | 'manual') {
        super(commandParent);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
        this.upgradeMode(upgradeMode)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_cluster_upgrade_type_set_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_cluster_upgrade_type_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Cluster upgrade mode. */
    upgradeMode(value: 'automatic' | 'manual'): az_sf_cluster_upgrade_type_set_command_builder {
        this.setFlag("--upgrade-mode", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_cluster_upgrade_type_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Cluster code version. */
    version(value: string): az_sf_cluster_upgrade_type_set_command_builder {
        this.setFlag("--version", value);
        return this;
    }
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
class az_sf_cluster_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, location: string, resourceGroup: string) {
        super(commandParent);
        this.location(location)
        this.resourceGroup(resourceGroup)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_sf_cluster_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_cluster_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The folder of the new certificate file to be created. */
    certificateOutputFolder(value: string): az_sf_cluster_create_command_builder {
        this.setFlag("--certificate-output-folder", value);
        return this;
    }

    /** The subject name of the certificate to be created. */
    certificateSubjectName(value: string): az_sf_cluster_create_command_builder {
        this.setFlag("--certificate-subject-name", value);
        return this;
    }

    /** The existing certificate file path for the primary cluster certificate. */
    certificateFile(value: string): az_sf_cluster_create_command_builder {
        this.setFlag("--certificate-file", value);
        return this;
    }

    /** The password of the certificate file. */
    certificatePassword(value: string): az_sf_cluster_create_command_builder {
        this.setFlag("--certificate-password", value);
        return this;
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_cluster_create_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** The number of nodes in the cluster. Default are 5 nodes. */
    clusterSize(value: string): az_sf_cluster_create_command_builder {
        this.setFlag("--cluster-size", value);
        return this;
    }

    /** The Operating System of the VMs that make up the cluster. */
    vmOs(value: 'UbuntuServer1604' | 'WindowsServer1709' | 'WindowsServer1709withContainers' | 'WindowsServer1803withContainers' | 'WindowsServer1809withContainers' | 'WindowsServer2012R2Datacenter' | 'WindowsServer2016Datacenter' | 'WindowsServer2016DatacenterwithContainers' | 'WindowsServer2019Datacenter' | 'WindowsServer2019DatacenterwithContainers'): az_sf_cluster_create_command_builder {
        this.setFlag("--vm-os", value);
        return this;
    }

    /** The path to the template parameter file. */
    parameterFile(value: string): az_sf_cluster_create_command_builder {
        this.setFlag("--parameter-file", value);
        return this;
    }

    /** The existing Azure key vault secret URL. */
    secretIdentifier(value: string): az_sf_cluster_create_command_builder {
        this.setFlag("--secret-identifier", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_cluster_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The path to the template file. */
    templateFile(value: string): az_sf_cluster_create_command_builder {
        this.setFlag("--template-file", value);
        return this;
    }

    /** Azure key vault name, it not given it will be the cluster resource group name. */
    vaultName(value: string): az_sf_cluster_create_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Key vault resource group name, if not given it will be cluster resource group name. */
    vaultResourceGroup(value: string): az_sf_cluster_create_command_builder {
        this.setFlag("--vault-resource-group", value);
        return this;
    }

    /** The password of the Vm. */
    vmPassword(value: string): az_sf_cluster_create_command_builder {
        this.setFlag("--vm-password", value);
        return this;
    }

    /** VM Sku. */
    vmSku(value: string): az_sf_cluster_create_command_builder {
        this.setFlag("--vm-sku", value);
        return this;
    }

    /** The user name for logging to Vm. Default will be adminuser. */
    vmUserName(value: string): az_sf_cluster_create_command_builder {
        this.setFlag("--vm-user-name", value);
        return this;
    }
}

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
class az_sf_cluster_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sf_cluster_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The resource group name. */
    resourceGroup(value: string): az_sf_cluster_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_cluster_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sf_cluster_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_cluster_show_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_cluster_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sf_cluster_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_cluster_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sf_managed_cluster_client_certificate_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_managed_cluster_client_certificate_add_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_managed_cluster_client_certificate_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Client certificate common name. */
    commonName(value: string): az_sf_managed_cluster_client_certificate_add_command_builder {
        this.setFlag("--common-name", value);
        return this;
    }

    /** Client authentication type. */
    isAdmin(value: boolean): az_sf_managed_cluster_client_certificate_add_command_builder {
        this.setFlag("--is-admin", value.toString());
        return this;
    }

    /** Space-separated list of issuer thumbprints. */
    issuerThumbprint(value: string): az_sf_managed_cluster_client_certificate_add_command_builder {
        this.setFlag("--issuer-thumbprint", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_managed_cluster_client_certificate_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Client certificate thumbprint. */
    thumbprint(value: string): az_sf_managed_cluster_client_certificate_add_command_builder {
        this.setFlag("--thumbprint", value);
        return this;
    }
}

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
class az_sf_managed_cluster_client_certificate_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_managed_cluster_client_certificate_delete_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_managed_cluster_client_certificate_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** A single or Space-separated list of client certificate common name(s) to be remove. */
    commonName(value: string): az_sf_managed_cluster_client_certificate_delete_command_builder {
        this.setFlag("--common-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_managed_cluster_client_certificate_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** A single or Space-separated list of client certificate thumbprint(s) to be remove. */
    thumbprint(value: string): az_sf_managed_cluster_client_certificate_delete_command_builder {
        this.setFlag("--thumbprint", value);
        return this;
    }
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
class az_sf_managed_cluster_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, adminPassword: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.adminPassword(adminPassword)
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Admin password used for the virtual machines. */
    adminPassword(value: string): az_sf_managed_cluster_create_command_builder {
        this.setFlag("--admin-password", value);
        return this;
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_managed_cluster_create_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_managed_cluster_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Admin user used for the virtual machines. */
    adminUserName(value: string): az_sf_managed_cluster_create_command_builder {
        this.setFlag("--admin-user-name", value);
        return this;
    }

    /** Client certificate common name. */
    clientCertCommonName(value: string): az_sf_managed_cluster_create_command_builder {
        this.setFlag("--client-cert-common-name", value);
        return this;
    }

    /** Client authentication type. */
    clientCertIsAdmin(value: boolean): az_sf_managed_cluster_create_command_builder {
        this.setFlag("--client-cert-is-admin", value.toString());
        return this;
    }

    /** Space-separated list of issuer thumbprints. */
    clientCertIssuerThumbprint(value: string): az_sf_managed_cluster_create_command_builder {
        this.setFlag("--client-cert-issuer-thumbprint", value);
        return this;
    }

    /** Client certificate thumbprint. */
    clientCertThumbprint(value: string): az_sf_managed_cluster_create_command_builder {
        this.setFlag("--client-cert-thumbprint", value);
        return this;
    }

    /** Port used for client connections to the cluster. */
    clientConnectionPort(value: string): az_sf_managed_cluster_create_command_builder {
        this.setFlag("--client-connection-port", value);
        return this;
    }

    /** Cluster's dns name. */
    dnsName(value: string): az_sf_managed_cluster_create_command_builder {
        this.setFlag("--dns-name", value);
        return this;
    }

    /** Port used for http connections to the cluster. */
    gatewayConnectionPort(value: string): az_sf_managed_cluster_create_command_builder {
        this.setFlag("--gateway-connection-port", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_sf_managed_cluster_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Cluster's Sku, the options are Basic: it will have a minimum of 3 seed nodes and only allows 1 node type and Standard: it will have a minimum of 5 seed nodes and allows multiple node types. */
    sku(value: string): az_sf_managed_cluster_create_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_managed_cluster_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_sf_managed_cluster_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

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
class az_sf_managed_cluster_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_managed_cluster_delete_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_managed_cluster_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_managed_cluster_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sf_managed_cluster_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sf_managed_cluster_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_managed_cluster_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_managed_cluster_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sf_managed_cluster_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_managed_cluster_show_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_managed_cluster_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sf_managed_cluster_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_managed_cluster_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sf_managed_cluster_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_managed_cluster_update_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_managed_cluster_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Port used for client connections to the cluster. */
    clientConnectionPort(value: string): az_sf_managed_cluster_update_command_builder {
        this.setFlag("--client-connection-port", value);
        return this;
    }

    /** Cluster's dns name. */
    dnsName(value: string): az_sf_managed_cluster_update_command_builder {
        this.setFlag("--dns-name", value);
        return this;
    }

    /** Port used for http connections to the cluster. */
    gatewayConnectionPort(value: string): az_sf_managed_cluster_update_command_builder {
        this.setFlag("--gateway-connection-port", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_managed_cluster_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_sf_managed_cluster_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
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
class az_sf_managed_node_type_node_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, nodeTypeName: string, nodeName: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.nodeTypeName(nodeTypeName)
        this.nodeName(nodeName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_managed_node_type_node_delete_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Node type name. */
    nodeTypeName(value: string): az_sf_managed_node_type_node_delete_command_builder {
        this.setFlag("--node-type-name", value);
        return this;
    }

    /** List of target nodes to perform the operation. */
    nodeName(value: string): az_sf_managed_node_type_node_delete_command_builder {
        this.setFlag("--node-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_managed_node_type_node_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Using this flag will force the operation even if service fabric is unable to disable the nodes. Use with caution as this might cause data loss if stateful workloads are running on the node. */
    force(value: boolean): az_sf_managed_node_type_node_delete_command_builder {
        this.setFlag("--force", value.toString());
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_managed_node_type_node_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sf_managed_node_type_node_reimage_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, nodeTypeName: string, nodeName: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.nodeTypeName(nodeTypeName)
        this.nodeName(nodeName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_managed_node_type_node_reimage_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Node type name. */
    nodeTypeName(value: string): az_sf_managed_node_type_node_reimage_command_builder {
        this.setFlag("--node-type-name", value);
        return this;
    }

    /** List of target nodes to perform the operation. */
    nodeName(value: string): az_sf_managed_node_type_node_reimage_command_builder {
        this.setFlag("--node-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_managed_node_type_node_reimage_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Using this flag will force the operation even if service fabric is unable to disable the nodes. Use with caution as this might cause data loss if stateful workloads are running on the node. */
    force(value: boolean): az_sf_managed_node_type_node_reimage_command_builder {
        this.setFlag("--force", value.toString());
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_managed_node_type_node_reimage_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sf_managed_node_type_node_restart_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, nodeTypeName: string, nodeName: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.nodeTypeName(nodeTypeName)
        this.nodeName(nodeName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_managed_node_type_node_restart_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Node type name. */
    nodeTypeName(value: string): az_sf_managed_node_type_node_restart_command_builder {
        this.setFlag("--node-type-name", value);
        return this;
    }

    /** List of target nodes to perform the operation. */
    nodeName(value: string): az_sf_managed_node_type_node_restart_command_builder {
        this.setFlag("--node-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_managed_node_type_node_restart_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Using this flag will force the operation even if service fabric is unable to disable the nodes. Use with caution as this might cause data loss if stateful workloads are running on the node. */
    force(value: boolean): az_sf_managed_node_type_node_restart_command_builder {
        this.setFlag("--force", value.toString());
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_managed_node_type_node_restart_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sf_managed_node_type_vm_extension_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, extensionName: string, extensionType: string, nodeTypeName: string, publisher: string, resourceGroup: string, typeHandlerVersion: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.extensionName(extensionName)
        this.extensionType(extensionType)
        this.nodeTypeName(nodeTypeName)
        this.publisher(publisher)
        this.resourceGroup(resourceGroup)
        this.typeHandlerVersion(typeHandlerVersion)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_managed_node_type_vm_extension_add_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Extension name. */
    extensionName(value: string): az_sf_managed_node_type_vm_extension_add_command_builder {
        this.setFlag("--extension-name", value);
        return this;
    }

    /** Specifies the type of the extension; an example is "CustomScriptExtension". */
    extensionType(value: string): az_sf_managed_node_type_vm_extension_add_command_builder {
        this.setFlag("--extension-type", value);
        return this;
    }

    /** Node type name. */
    nodeTypeName(value: string): az_sf_managed_node_type_vm_extension_add_command_builder {
        this.setFlag("--node-type-name", value);
        return this;
    }

    /** The name of the extension handler publisher. */
    publisher(value: string): az_sf_managed_node_type_vm_extension_add_command_builder {
        this.setFlag("--publisher", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_managed_node_type_vm_extension_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Specifies the version of the script handler. */
    typeHandlerVersion(value: string): az_sf_managed_node_type_vm_extension_add_command_builder {
        this.setFlag("--type-handler-version", value);
        return this;
    }

    /** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
    autoUpgradeMinorVersion(value: boolean): az_sf_managed_node_type_vm_extension_add_command_builder {
        this.setFlag("--auto-upgrade-minor-version", value.toString());
        return this;
    }

    /** If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed. */
    forceUpdateTag(value: string): az_sf_managed_node_type_vm_extension_add_command_builder {
        this.setFlag("--force-update-tag", value);
        return this;
    }

    /** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
    protectedSetting(value: string): az_sf_managed_node_type_vm_extension_add_command_builder {
        this.setFlag("--protected-setting", value);
        return this;
    }

    /** Collection of extension names after which this extension needs to be provisioned. */
    provisionAfterExtension(value: string): az_sf_managed_node_type_vm_extension_add_command_builder {
        this.setFlag("--provision-after-extension", value);
        return this;
    }

    /** Json formatted public settings for the extension. */
    setting(value: string): az_sf_managed_node_type_vm_extension_add_command_builder {
        this.setFlag("--setting", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_managed_node_type_vm_extension_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sf_managed_node_type_vm_extension_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, extensionName: string, nodeTypeName: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.extensionName(extensionName)
        this.nodeTypeName(nodeTypeName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_managed_node_type_vm_extension_delete_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Extension name. */
    extensionName(value: string): az_sf_managed_node_type_vm_extension_delete_command_builder {
        this.setFlag("--extension-name", value);
        return this;
    }

    /** Node type name. */
    nodeTypeName(value: string): az_sf_managed_node_type_vm_extension_delete_command_builder {
        this.setFlag("--node-type-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_managed_node_type_vm_extension_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_managed_node_type_vm_extension_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sf_managed_node_type_vm_secret_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, certificateStore: string, certificateUrl: string, clusterName: string, nodeTypeName: string, resourceGroup: string, sourceVaultId: string) {
        super(commandParent);
        this.certificateStore(certificateStore)
        this.certificateUrl(certificateUrl)
        this.clusterName(clusterName)
        this.nodeTypeName(nodeTypeName)
        this.resourceGroup(resourceGroup)
        this.sourceVaultId(sourceVaultId)
    }

    /** Specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. */
    certificateStore(value: string): az_sf_managed_node_type_vm_secret_add_command_builder {
        this.setFlag("--certificate-store", value);
        return this;
    }

    /** This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](<a href="https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add">https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add</a>). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>}/. */
    certificateUrl(value: string): az_sf_managed_node_type_vm_secret_add_command_builder {
        this.setFlag("--certificate-url", value);
        return this;
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_managed_node_type_vm_secret_add_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Node type name. */
    nodeTypeName(value: string): az_sf_managed_node_type_vm_secret_add_command_builder {
        this.setFlag("--node-type-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_managed_node_type_vm_secret_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Key Vault resource id containing the certificates. */
    sourceVaultId(value: string): az_sf_managed_node_type_vm_secret_add_command_builder {
        this.setFlag("--source-vault-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_managed_node_type_vm_secret_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sf_managed_node_type_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, instanceCount: string, nodeTypeName: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.instanceCount(instanceCount)
        this.nodeTypeName(nodeTypeName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_managed_node_type_create_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Essage = "The number of nodes in the node type. */
    instanceCount(value: string): az_sf_managed_node_type_create_command_builder {
        this.setFlag("--instance-count", value);
        return this;
    }

    /** Node type name. */
    nodeTypeName(value: string): az_sf_managed_node_type_create_command_builder {
        this.setFlag("--node-type-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_managed_node_type_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Application End port of a range of ports. */
    applicationEndPort(value: string): az_sf_managed_node_type_create_command_builder {
        this.setFlag("--application-end-port", value);
        return this;
    }

    /** Application start port of a range of ports. */
    applicationStartPort(value: string): az_sf_managed_node_type_create_command_builder {
        this.setFlag("--application-start-port", value);
        return this;
    }

    /** Capacity tags applied to the nodes in the node type as key/value pairs, the cluster resource manager uses these tags to understand how much resource a node has. Updating this will override the current values.for example: --capacity ClientConnections=65536 param2=value2. */
    capacity(value: string): az_sf_managed_node_type_create_command_builder {
        this.setFlag("--capacity", value);
        return this;
    }

    /** Disk size for each vm in the node type in GBs. */
    diskSize(value: string): az_sf_managed_node_type_create_command_builder {
        this.setFlag("--disk-size", value);
        return this;
    }

    /** Ephemeral end port of a range of ports. */
    ephemeralEndPort(value: string): az_sf_managed_node_type_create_command_builder {
        this.setFlag("--ephemeral-end-port", value);
        return this;
    }

    /** Ephemeral start port of a range of ports. */
    ephemeralStartPort(value: string): az_sf_managed_node_type_create_command_builder {
        this.setFlag("--ephemeral-start-port", value);
        return this;
    }

    /** Placement tags applied to nodes in the node type as key/value pairs, which can be used to indicate where certain services (workload) should run. Updating this will override the current values.for example: --placement-property NodeColor=Green SomeProperty=5. */
    placementProperty(value: string): az_sf_managed_node_type_create_command_builder {
        this.setFlag("--placement-property", value);
        return this;
    }

    /** Specify if the node type is primary. On this node type will run system services. Only one node type should be marked as primary. Primary node type cannot be deleted or changed for existing clusters. */
    primary(value: boolean): az_sf_managed_node_type_create_command_builder {
        this.setFlag("--primary", value.toString());
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_managed_node_type_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The offer type of the Azure Virtual Machines Marketplace image. */
    vmImageOffer(value: string): az_sf_managed_node_type_create_command_builder {
        this.setFlag("--vm-image-offer", value);
        return this;
    }

    /** The publisher of the Azure Virtual Machines Marketplace image. */
    vmImagePublisher(value: string): az_sf_managed_node_type_create_command_builder {
        this.setFlag("--vm-image-publisher", value);
        return this;
    }

    /** The SKU of the Azure Virtual Machines Marketplace image. */
    vmImageSku(value: string): az_sf_managed_node_type_create_command_builder {
        this.setFlag("--vm-image-sku", value);
        return this;
    }

    /** The version of the Azure Virtual Machines Marketplace image. */
    vmImageVersion(value: string): az_sf_managed_node_type_create_command_builder {
        this.setFlag("--vm-image-version", value);
        return this;
    }

    /** The size of virtual machines in the pool. All virtual machines in a pool are the same size. */
    vmSize(value: string): az_sf_managed_node_type_create_command_builder {
        this.setFlag("--vm-size", value);
        return this;
    }
}

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
class az_sf_managed_node_type_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, nodeTypeName: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.nodeTypeName(nodeTypeName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_managed_node_type_delete_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Node type name. */
    nodeTypeName(value: string): az_sf_managed_node_type_delete_command_builder {
        this.setFlag("--node-type-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_managed_node_type_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_managed_node_type_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sf_managed_node_type_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_managed_node_type_list_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_managed_node_type_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sf_managed_node_type_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_managed_node_type_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sf_managed_node_type_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, nodeTypeName: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.nodeTypeName(nodeTypeName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_managed_node_type_show_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Node type name. */
    nodeTypeName(value: string): az_sf_managed_node_type_show_command_builder {
        this.setFlag("--node-type-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_managed_node_type_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sf_managed_node_type_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_managed_node_type_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sf_managed_node_type_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, clusterName: string, nodeTypeName: string, resourceGroup: string) {
        super(commandParent);
        this.clusterName(clusterName)
        this.nodeTypeName(nodeTypeName)
        this.resourceGroup(resourceGroup)
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_managed_node_type_update_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Node type name. */
    nodeTypeName(value: string): az_sf_managed_node_type_update_command_builder {
        this.setFlag("--node-type-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_managed_node_type_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Application End port of a range of ports. */
    applicationEndPort(value: string): az_sf_managed_node_type_update_command_builder {
        this.setFlag("--application-end-port", value);
        return this;
    }

    /** Application start port of a range of ports. */
    applicationStartPort(value: string): az_sf_managed_node_type_update_command_builder {
        this.setFlag("--application-start-port", value);
        return this;
    }

    /** Capacity tags applied to the nodes in the node type as key/value pairs, the cluster resource manager uses these tags to understand how much resource a node has. Updating this will override the current values.for example: --capacity ClientConnections=65536 param2=value2. */
    capacity(value: string): az_sf_managed_node_type_update_command_builder {
        this.setFlag("--capacity", value);
        return this;
    }

    /** Ephemeral end port of a range of ports. */
    ephemeralEndPort(value: string): az_sf_managed_node_type_update_command_builder {
        this.setFlag("--ephemeral-end-port", value);
        return this;
    }

    /** Ephemeral start port of a range of ports. */
    ephemeralStartPort(value: string): az_sf_managed_node_type_update_command_builder {
        this.setFlag("--ephemeral-start-port", value);
        return this;
    }

    /** Essage = "The number of nodes in the node type. */
    instanceCount(value: string): az_sf_managed_node_type_update_command_builder {
        this.setFlag("--instance-count", value);
        return this;
    }

    /** Placement tags applied to nodes in the node type as key/value pairs, which can be used to indicate where certain services (workload) should run. Updating this will override the current values.for example: --placement-property NodeColor=Green SomeProperty=5. */
    placementProperty(value: string): az_sf_managed_node_type_update_command_builder {
        this.setFlag("--placement-property", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_managed_node_type_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sf_service_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, applicationName: string, clusterName: string, serviceName: string, resourceGroup: string, serviceType: string, state: 'stateful' | 'stateless') {
        super(commandParent);
        this.applicationName(applicationName)
        this.clusterName(clusterName)
        this.serviceName(serviceName)
        this.resourceGroup(resourceGroup)
        this.serviceType(serviceType)
        this.state(state)
    }

    /** Specify the name of the service. The application name must be a prefix of the service name, for example: appName~serviceName. */
    applicationName(value: string): az_sf_service_create_command_builder {
        this.setFlag("--application-name", value);
        return this;
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_service_create_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the name of the service. The application name must be a prefix of the service name, for example: appName~serviceName. */
    serviceName(value: string): az_sf_service_create_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_service_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Specify the service type name of the application, it should exist in the application manifest. */
    serviceType(value: string): az_sf_service_create_command_builder {
        this.setFlag("--service-type", value);
        return this;
    }

    /** Specify if the service is stateless or stateful. */
    state(value: 'stateful' | 'stateless'): az_sf_service_create_command_builder {
        this.setFlag("--state", value);
        return this;
    }

    /** Specify the default cost for a move. Higher costs make it less likely that the Cluster Resource Manager will move the replica when trying to balance the cluster. */
    defaultMoveCost(value: 'High' | 'Low' | 'Medium' | 'Zero'): az_sf_service_create_command_builder {
        this.setFlag("--default-move-cost", value);
        return this;
    }

    /** Specify the instance count for the stateless service. If -1 is used, it means it will run on all the nodes. */
    instanceCount(value: string): az_sf_service_create_command_builder {
        this.setFlag("--instance-count", value);
        return this;
    }

    /** Specify the min replica set size for the stateful service. */
    minReplicaSetSize(value: string): az_sf_service_create_command_builder {
        this.setFlag("--min-replica-set-size", value);
        return this;
    }

    /** Specify what partition scheme to use. Singleton partitions are typically used when the service does not require any additional routing. UniformInt64 means that each partition owns a range of int64 keys. Named is usually for services with data that can be bucketed, within a bounded set. Some common examples of data fields used as named partition keys would be regions, postal codes, customer groups, or other business boundaries. */
    partitionScheme(value: 'named' | 'singleton' | 'uniformInt64'): az_sf_service_create_command_builder {
        this.setFlag("--partition-scheme", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_service_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Specify the target replica set size for the stateful service. */
    targetReplicaSetSize(value: string): az_sf_service_create_command_builder {
        this.setFlag("--target-replica-set-size", value);
        return this;
    }
}

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
class az_sf_service_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, applicationName: string, clusterName: string, serviceName: string, resourceGroup: string) {
        super(commandParent);
        this.applicationName(applicationName)
        this.clusterName(clusterName)
        this.serviceName(serviceName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the application resource. */
    applicationName(value: string): az_sf_service_delete_command_builder {
        this.setFlag("--application-name", value);
        return this;
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_service_delete_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the name of the service. The application name must be a prefix of the service name, for example: appName~serviceName. */
    serviceName(value: string): az_sf_service_delete_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_service_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_service_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sf_service_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, applicationName: string, clusterName: string, resourceGroup: string) {
        super(commandParent);
        this.applicationName(applicationName)
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the application resource. */
    applicationName(value: string): az_sf_service_list_command_builder {
        this.setFlag("--application-name", value);
        return this;
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_service_list_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_service_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sf_service_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_service_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_sf_service_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, applicationName: string, clusterName: string, serviceName: string, resourceGroup: string) {
        super(commandParent);
        this.applicationName(applicationName)
        this.clusterName(clusterName)
        this.serviceName(serviceName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the application resource. */
    applicationName(value: string): az_sf_service_show_command_builder {
        this.setFlag("--application-name", value);
        return this;
    }

    /** Specify the name of the cluster, if not given it will be same as resource group name. */
    clusterName(value: string): az_sf_service_show_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Specify the name of the service. The application name must be a prefix of the service name, for example: appName~serviceName. */
    serviceName(value: string): az_sf_service_show_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Specify the resource group name. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sf_service_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sf_service_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sf_service_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
