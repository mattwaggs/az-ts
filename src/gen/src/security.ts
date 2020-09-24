import { CommandBuilder, ICommandParent } from '../base';

/** Enable control which applications can run on your Azure and non-Azure machines (Windows and Linux). */
export class az_security_adaptive_application_controls implements ICommandParent<any> {
    commandPath = "az security adaptive-application-controls";

    /**
     * Adaptive Application Controls - List.
     *
     * Syntax:
     * ```
     * az security adaptive-application-controls list [--query-examples]
     *                                                [--subscription]
     * ```
     */
    az_security_adaptive_application_controls_list(): az_security_adaptive_application_controls_list_command_builder {
        return new az_security_adaptive_application_controls_list_command_builder(this);
    }

    /**
     * Adaptive Application Controls - Get.
     *
     * Syntax:
     * ```
     * az security adaptive-application-controls show --group-name
     *                                                [--query-examples]
     *                                                [--subscription]
     * ```
     *
     * @param {string} groupName Name of an application control VM/server group.
     */
    az_security_adaptive_application_controls_show(groupName: string): az_security_adaptive_application_controls_show_command_builder {
        return new az_security_adaptive_application_controls_show_command_builder(this, groupName);
    }
}

/** View all Adaptive Network Hardening resources. */
export class az_security_adaptive_network_hardenings implements ICommandParent<any> {
    commandPath = "az security adaptive_network_hardenings";

    /**
     * Gets a list of Adaptive Network Hardenings resources in scope of an extended resource.
     *
     * Syntax:
     * ```
     * az security adaptive_network_hardenings list --resource-group
     *                                              --resource-name
     *                                              --resource-namespace
     *                                              --resource-type
     *                                              [--query-examples]
     *                                              [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} resourceName Name of the resource.
     * @param {string} resourceNamespace The Namespace of the resource.
     * @param {string} resourceType The type of the resource.
     */
    az_security_adaptive_network_hardenings_list(resourceGroup: string, resourceName: string, resourceNamespace: string, resourceType: string): az_security_adaptive_network_hardenings_list_command_builder {
        return new az_security_adaptive_network_hardenings_list_command_builder(this, resourceGroup, resourceName, resourceNamespace, resourceType);
    }

    /**
     * Gets a single Adaptive Network Hardening resource.
     *
     * Syntax:
     * ```
     * az security adaptive_network_hardenings show --adaptive-network-hardenings-resource-name
     *                                              --resource-group
     *                                              --resource-name
     *                                              --resource-namespace
     *                                              --resource-type
     *                                              [--query-examples]
     *                                              [--subscription]
     * ```
     *
     * @param {string} adaptiveNetworkHardeningsResourceName Adaptive Network Hardening resource name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} resourceName Name of the resource.
     * @param {string} resourceNamespace The Namespace of the resource.
     * @param {string} resourceType The type of the resource.
     */
    az_security_adaptive_network_hardenings_show(adaptiveNetworkHardeningsResourceName: string, resourceGroup: string, resourceName: string, resourceNamespace: string, resourceType: string): az_security_adaptive_network_hardenings_show_command_builder {
        return new az_security_adaptive_network_hardenings_show_command_builder(this, adaptiveNetworkHardeningsResourceName, resourceGroup, resourceName, resourceNamespace, resourceType);
    }
}

/** View security alerts. */
export class az_security_alert implements ICommandParent<any> {
    commandPath = "az security alert";

    /**
     * List security alerts.
     *
     * Syntax:
     * ```
     * az security alert list [--location]
     *                        [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     */
    az_security_alert_list(): az_security_alert_list_command_builder {
        return new az_security_alert_list_command_builder(this);
    }

    /**
     * Shows a security alert.
     *
     * Syntax:
     * ```
     * az security alert show --location
     *                        --name
     *                        [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     *
     * @param {string} location Location of the resource.
     * @param {string} name Name of the resource to be fetched.
     */
    az_security_alert_show(location: string, name: string): az_security_alert_show_command_builder {
        return new az_security_alert_show_command_builder(this, location, name);
    }

    /**
     * Updates a security alert status.
     *
     * Syntax:
     * ```
     * az security alert update --location
     *                          --name
     *                          --status
     *                          [--resource-group]
     *                          [--subscription]
     * ```
     *
     * @param {string} location Location of the resource.
     * @param {string} name Name of the resource to be fetched.
     * @param {string} status Target status of the alert. possible values are "dismiss" and "activate".
     */
    az_security_alert_update(location: string, name: string, status: string): az_security_alert_update_command_builder {
        return new az_security_alert_update_command_builder(this, location, name, status);
    }
}

/** View all possible traffic between resources for the subscription and location, based on connection type. */
export class az_security_allowed_connections implements ICommandParent<any> {
    commandPath = "az security allowed_connections";

    /**
     * List of all possible traffic between resources for the subscription.
     *
     * Syntax:
     * ```
     * az security allowed_connections list [--query-examples]
     *                                      [--subscription]
     * ```
     */
    az_security_allowed_connections_list(): az_security_allowed_connections_list_command_builder {
        return new az_security_allowed_connections_list_command_builder(this);
    }

    /**
     * List all possible traffic between resources for the subscription and location, based on connection type.
     *
     * Syntax:
     * ```
     * az security allowed_connections show --name
     *                                      --resource-group
     *                                      [--query-examples]
     *                                      [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_security_allowed_connections_show(name: string, resourceGroup: string): az_security_allowed_connections_show_command_builder {
        return new az_security_allowed_connections_show_command_builder(this, name, resourceGroup);
    }
}

/** View your security assessment metadata. */
export class az_security_assessment_metadata implements ICommandParent<any> {
    commandPath = "az security assessment-metadata";

    /**
     * Creates a customer managed security assessment type.
     *
     * Syntax:
     * ```
     * az security assessment-metadata create --description
     *                                        --display-name
     *                                        --name
     *                                        --severity
     *                                        [--remediation-description]
     *                                        [--subscription]
     * ```
     *
     * @param {string} description Detailed string that will help users to understand the assessment and how it is calculated.
     * @param {string} displayName Human readable title for this object.
     * @param {string} name Name of the resource to be fetched.
     * @param {string} severity Indicates the importance of the security risk if the assessment is unhealthy.
     */
    az_security_assessment_metadata_create(description: string, displayName: string, name: string, severity: string): az_security_assessment_metadata_create_command_builder {
        return new az_security_assessment_metadata_create_command_builder(this, description, displayName, name, severity);
    }

    /**
     * Deletes a security assessment type and all it's assessment results.
     *
     * Syntax:
     * ```
     * az security assessment-metadata delete --name
     *                                        [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     */
    az_security_assessment_metadata_delete(name: string): az_security_assessment_metadata_delete_command_builder {
        return new az_security_assessment_metadata_delete_command_builder(this, name);
    }

    /**
     * List all security assessment results.
     *
     * Syntax:
     * ```
     * az security assessment-metadata list [--query-examples]
     *                                      [--subscription]
     * ```
     */
    az_security_assessment_metadata_list(): az_security_assessment_metadata_list_command_builder {
        return new az_security_assessment_metadata_list_command_builder(this);
    }

    /**
     * Shows a security assessment.
     *
     * Syntax:
     * ```
     * az security assessment-metadata show --name
     *                                      [--query-examples]
     *                                      [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     */
    az_security_assessment_metadata_show(name: string): az_security_assessment_metadata_show_command_builder {
        return new az_security_assessment_metadata_show_command_builder(this, name);
    }
}

/** View your security assessment results. */
export class az_security_assessment implements ICommandParent<any> {
    commandPath = "az security assessment";

    /**
     * Creates a customer managed security assessment.
     *
     * Syntax:
     * ```
     * az security assessment create --name
     *                               --status-code
     *                               [--additional-data]
     *                               [--assessed-resource-id]
     *                               [--status-cause]
     *                               [--status-description]
     *                               [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     * @param {string} statusCode Progremmatic code for the result of the assessment. can be "Healthy", "Unhealthy" or "NotApplicable".
     */
    az_security_assessment_create(name: string, statusCode: string): az_security_assessment_create_command_builder {
        return new az_security_assessment_create_command_builder(this, name, statusCode);
    }

    /**
     * Deletes a security assessment.
     *
     * Syntax:
     * ```
     * az security assessment delete --name
     *                               [--assessed-resource-id]
     *                               [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     */
    az_security_assessment_delete(name: string): az_security_assessment_delete_command_builder {
        return new az_security_assessment_delete_command_builder(this, name);
    }

    /**
     * List all security assessment results.
     *
     * Syntax:
     * ```
     * az security assessment list [--query-examples]
     *                             [--subscription]
     * ```
     */
    az_security_assessment_list(): az_security_assessment_list_command_builder {
        return new az_security_assessment_list_command_builder(this);
    }

    /**
     * Shows a security assessment.
     *
     * Syntax:
     * ```
     * az security assessment show --name
     *                             [--assessed-resource-id]
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     */
    az_security_assessment_show(name: string): az_security_assessment_show_command_builder {
        return new az_security_assessment_show_command_builder(this, name);
    }
}

/** View and manage Advanced Threat Protection settings for storage accounts. */
export class az_security_atp_storage implements ICommandParent<any> {
    commandPath = "az security atp storage";

    /**
     * Display Advanced Threat Protection settings for a storage account.
     *
     * Syntax:
     * ```
     * az security atp storage show --resource-group
     *                              --storage-account
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} storageAccount Name of an existing storage account.
     */
    az_security_atp_storage_show(resourceGroup: string, storageAccount: string): az_security_atp_storage_show_command_builder {
        return new az_security_atp_storage_show_command_builder(this, resourceGroup, storageAccount);
    }

    /**
     * Toggle status of Advanced Threat Protection for a storage account.
     *
     * Syntax:
     * ```
     * az security atp storage update --is-enabled {false, true}
     *                                --resource-group
     *                                --storage-account
     *                                [--subscription]
     * ```
     *
     * @param {boolean} isEnabled Enable or disable Advanced Threat Protection for a received storage account.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} storageAccount Name of an existing storage account.
     */
    az_security_atp_storage_update(isEnabled: boolean, resourceGroup: string, storageAccount: string): az_security_atp_storage_update_command_builder {
        return new az_security_atp_storage_update_command_builder(this, isEnabled, resourceGroup, storageAccount);
    }
}

/** View and manage Advanced Threat Protection settings. */
export class az_security_atp {
}

/** View your auto provisioning settings. */
export class az_security_auto_provisioning_setting implements ICommandParent<any> {
    commandPath = "az security auto-provisioning-setting";

    /**
     * List the auto provisioning settings.
     *
     * Syntax:
     * ```
     * az security auto-provisioning-setting list [--query-examples]
     *                                            [--subscription]
     * ```
     */
    az_security_auto_provisioning_setting_list(): az_security_auto_provisioning_setting_list_command_builder {
        return new az_security_auto_provisioning_setting_list_command_builder(this);
    }

    /**
     * Shows an auto provisioning setting.
     *
     * Syntax:
     * ```
     * az security auto-provisioning-setting show --name
     *                                            [--query-examples]
     *                                            [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     */
    az_security_auto_provisioning_setting_show(name: string): az_security_auto_provisioning_setting_show_command_builder {
        return new az_security_auto_provisioning_setting_show_command_builder(this, name);
    }

    /**
     * Updates your automatic provisioning settings on the subscription.
     *
     * Syntax:
     * ```
     * az security auto-provisioning-setting update --auto-provision
     *                                              --name
     *                                              [--subscription]
     * ```
     *
     * @param {string} autoProvision Automatic provisioning toggle. possible values are "On" or "Off".
     * @param {string} name Name of the resource to be fetched.
     */
    az_security_auto_provisioning_setting_update(autoProvision: string, name: string): az_security_auto_provisioning_setting_update_command_builder {
        return new az_security_auto_provisioning_setting_update_command_builder(this, autoProvision, name);
    }
}

/** View your security contacts. */
export class az_security_contact implements ICommandParent<any> {
    commandPath = "az security contact";

    /**
     * Creates a security contact.
     *
     * Syntax:
     * ```
     * az security contact create --email
     *                            --name
     *                            [--alert-notifications]
     *                            [--alerts-admins]
     *                            [--phone]
     *                            [--subscription]
     * ```
     *
     * @param {string} email E-mail of the security contact.
     * @param {string} name Name of the resource to be fetched.
     */
    az_security_contact_create(email: string, name: string): az_security_contact_create_command_builder {
        return new az_security_contact_create_command_builder(this, email, name);
    }

    /**
     * Deletes a security contact.
     *
     * Syntax:
     * ```
     * az security contact delete --name
     *                            [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     */
    az_security_contact_delete(name: string): az_security_contact_delete_command_builder {
        return new az_security_contact_delete_command_builder(this, name);
    }

    /**
     * List security contact.
     *
     * Syntax:
     * ```
     * az security contact list [--query-examples]
     *                          [--subscription]
     * ```
     */
    az_security_contact_list(): az_security_contact_list_command_builder {
        return new az_security_contact_list_command_builder(this);
    }

    /**
     * Shows a security contact.
     *
     * Syntax:
     * ```
     * az security contact show --name
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     */
    az_security_contact_show(name: string): az_security_contact_show_command_builder {
        return new az_security_contact_show_command_builder(this, name);
    }
}

/** View your discovered security solutions. */
export class az_security_discovered_security_solution implements ICommandParent<any> {
    commandPath = "az security discovered-security-solution";

    /**
     * List the discovered security solutions.
     *
     * Syntax:
     * ```
     * az security discovered-security-solution list [--query-examples]
     *                                               [--subscription]
     * ```
     */
    az_security_discovered_security_solution_list(): az_security_discovered_security_solution_list_command_builder {
        return new az_security_discovered_security_solution_list_command_builder(this);
    }

    /**
     * Shows a discovered security solution.
     *
     * Syntax:
     * ```
     * az security discovered-security-solution show --name
     *                                               --resource-group
     *                                               [--query-examples]
     *                                               [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_security_discovered_security_solution_show(name: string, resourceGroup: string): az_security_discovered_security_solution_show_command_builder {
        return new az_security_discovered_security_solution_show_command_builder(this, name, resourceGroup);
    }
}

/** View your external security solutions. */
export class az_security_external_security_solution implements ICommandParent<any> {
    commandPath = "az security external-security-solution";

    /**
     * List the external security solutions.
     *
     * Syntax:
     * ```
     * az security external-security-solution list [--query-examples]
     *                                             [--subscription]
     * ```
     */
    az_security_external_security_solution_list(): az_security_external_security_solution_list_command_builder {
        return new az_security_external_security_solution_list_command_builder(this);
    }

    /**
     * Shows an external security solution.
     *
     * Syntax:
     * ```
     * az security external-security-solution show --name
     *                                             --resource-group
     *                                             [--query-examples]
     *                                             [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_security_external_security_solution_show(name: string, resourceGroup: string): az_security_external_security_solution_show_command_builder {
        return new az_security_external_security_solution_show_command_builder(this, name, resourceGroup);
    }
}

/** View IoT Security aggregated alerts. */
export class az_security_iot_alerts implements ICommandParent<any> {
    commandPath = "az security iot-alerts";

    /**
     * Dismiss an aggregated IoT Security Alert.
     *
     * Syntax:
     * ```
     * az security iot-alerts delete --name
     *                               --resource-group
     *                               --solution-name
     *                               [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} solutionName Name of the IoT Security solution.
     */
    az_security_iot_alerts_delete(name: string, resourceGroup: string, solutionName: string): az_security_iot_alerts_delete_command_builder {
        return new az_security_iot_alerts_delete_command_builder(this, name, resourceGroup, solutionName);
    }

    /**
     * List all yours IoT Security solution aggregated alerts.
     *
     * Syntax:
     * ```
     * az security iot-alerts list --resource-group
     *                             --solution-name
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} solutionName Name of the IoT Security solution.
     */
    az_security_iot_alerts_list(resourceGroup: string, solutionName: string): az_security_iot_alerts_list_command_builder {
        return new az_security_iot_alerts_list_command_builder(this, resourceGroup, solutionName);
    }

    /**
     * Shows a single aggregated alert of yours IoT Security solution.
     *
     * Syntax:
     * ```
     * az security iot-alerts show --name
     *                             --resource-group
     *                             --solution-name
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} solutionName Name of the IoT Security solution.
     */
    az_security_iot_alerts_show(name: string, resourceGroup: string, solutionName: string): az_security_iot_alerts_show_command_builder {
        return new az_security_iot_alerts_show_command_builder(this, name, resourceGroup, solutionName);
    }
}

/** View IoT Security Analytics metrics. */
export class az_security_iot_analytics implements ICommandParent<any> {
    commandPath = "az security iot-analytics";

    /**
     * List all IoT security Analytics metrics.
     *
     * Syntax:
     * ```
     * az security iot-analytics list --resource-group
     *                                --solution-name
     *                                [--query-examples]
     *                                [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} solutionName Name of the IoT Security solution.
     */
    az_security_iot_analytics_list(resourceGroup: string, solutionName: string): az_security_iot_analytics_list_command_builder {
        return new az_security_iot_analytics_list_command_builder(this, resourceGroup, solutionName);
    }

    /**
     * Shows IoT Security Analytics metrics.
     *
     * Syntax:
     * ```
     * az security iot-analytics show --resource-group
     *                                --solution-name
     *                                [--query-examples]
     *                                [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} solutionName Name of the IoT Security solution.
     */
    az_security_iot_analytics_show(resourceGroup: string, solutionName: string): az_security_iot_analytics_show_command_builder {
        return new az_security_iot_analytics_show_command_builder(this, resourceGroup, solutionName);
    }
}

/** View IoT Security aggregated recommendations. */
export class az_security_iot_recommendations implements ICommandParent<any> {
    commandPath = "az security iot-recommendations";

    /**
     * List all yours IoT Security solution aggregated recommendations.
     *
     * Syntax:
     * ```
     * az security iot-recommendations list --resource-group
     *                                      --solution-name
     *                                      [--query-examples]
     *                                      [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} solutionName Name of the IoT Security solution.
     */
    az_security_iot_recommendations_list(resourceGroup: string, solutionName: string): az_security_iot_recommendations_list_command_builder {
        return new az_security_iot_recommendations_list_command_builder(this, resourceGroup, solutionName);
    }

    /**
     * Shows a single aggregated recommendation of yours IoT Security solution.
     *
     * Syntax:
     * ```
     * az security iot-recommendations show --name
     *                                      --resource-group
     *                                      --solution-name
     *                                      [--query-examples]
     *                                      [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} solutionName Name of the IoT Security solution.
     */
    az_security_iot_recommendations_show(name: string, resourceGroup: string, solutionName: string): az_security_iot_recommendations_show_command_builder {
        return new az_security_iot_recommendations_show_command_builder(this, name, resourceGroup, solutionName);
    }
}

/** Manage your IoT Security solution. */
export class az_security_iot_solution implements ICommandParent<any> {
    commandPath = "az security iot-solution";

    /**
     * Create your IoT Security solution.
     *
     * Syntax:
     * ```
     * az security iot-solution create --display-name
     *                                 --iot-hubs
     *                                 --location
     *                                 --resource-group
     *                                 --solution-name
     *                                 [--subscription]
     * ```
     *
     * @param {string} displayName Resource display name.
     * @param {string} iotHubs IoT Hub resource IDs.
     * @param {string} location Location of the resource.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} solutionName Name of the IoT Security solution.
     */
    az_security_iot_solution_create(displayName: string, iotHubs: string, location: string, resourceGroup: string, solutionName: string): az_security_iot_solution_create_command_builder {
        return new az_security_iot_solution_create_command_builder(this, displayName, iotHubs, location, resourceGroup, solutionName);
    }

    /**
     * Delete your IoT Security solution.
     *
     * Syntax:
     * ```
     * az security iot-solution delete --resource-group
     *                                 --solution-name
     *                                 [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} solutionName Name of the IoT Security solution.
     */
    az_security_iot_solution_delete(resourceGroup: string, solutionName: string): az_security_iot_solution_delete_command_builder {
        return new az_security_iot_solution_delete_command_builder(this, resourceGroup, solutionName);
    }

    /**
     * List all IoT Security solutions.
     *
     * Syntax:
     * ```
     * az security iot-solution list [--query-examples]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     */
    az_security_iot_solution_list(): az_security_iot_solution_list_command_builder {
        return new az_security_iot_solution_list_command_builder(this);
    }

    /**
     * Shows a IoT Security solution.
     *
     * Syntax:
     * ```
     * az security iot-solution show --resource-group
     *                               --solution-name
     *                               [--query-examples]
     *                               [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} solutionName Name of the IoT Security solution.
     */
    az_security_iot_solution_show(resourceGroup: string, solutionName: string): az_security_iot_solution_show_command_builder {
        return new az_security_iot_solution_show_command_builder(this, resourceGroup, solutionName);
    }

    /**
     * Update your IoT Security solution.
     *
     * Syntax:
     * ```
     * az security iot-solution update --resource-group
     *                                 --solution-name
     *                                 [--display-name]
     *                                 [--iot-hubs]
     *                                 [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} solutionName Name of the IoT Security solution.
     */
    az_security_iot_solution_update(resourceGroup: string, solutionName: string): az_security_iot_solution_update_command_builder {
        return new az_security_iot_solution_update_command_builder(this, resourceGroup, solutionName);
    }
}

/** Manage your Just in Time network access policies. */
export class az_security_jit_policy implements ICommandParent<any> {
    commandPath = "az security jit-policy";

    /**
     * List your Just in Time network access policies.
     *
     * Syntax:
     * ```
     * az security jit-policy list [--location]
     *                             [--query-examples]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     */
    az_security_jit_policy_list(): az_security_jit_policy_list_command_builder {
        return new az_security_jit_policy_list_command_builder(this);
    }

    /**
     * Shows a Just in Time network access policy.
     *
     * Syntax:
     * ```
     * az security jit-policy show --location
     *                             --name
     *                             --resource-group
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     *
     * @param {string} location Location of the resource.
     * @param {string} name Name of the resource to be fetched.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_security_jit_policy_show(location: string, name: string, resourceGroup: string): az_security_jit_policy_show_command_builder {
        return new az_security_jit_policy_show_command_builder(this, location, name, resourceGroup);
    }
}

/** Shows the Azure Security Center Home region location. */
export class az_security_location implements ICommandParent<any> {
    commandPath = "az security location";

    /**
     * Shows the Azure Security Center Home region location.
     *
     * Syntax:
     * ```
     * az security location list [--query-examples]
     *                           [--subscription]
     * ```
     */
    az_security_location_list(): az_security_location_list_command_builder {
        return new az_security_location_list_command_builder(this);
    }

    /**
     * Shows the Azure Security Center Home region location.
     *
     * Syntax:
     * ```
     * az security location show --name
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     */
    az_security_location_show(name: string): az_security_location_show_command_builder {
        return new az_security_location_show_command_builder(this, name);
    }
}

/** Shows the Azure Security Center Pricing tier for the subscription. */
export class az_security_pricing implements ICommandParent<any> {
    commandPath = "az security pricing";

    /**
     * Updates the Azure Security Center Pricing tier for the subscription.
     *
     * Syntax:
     * ```
     * az security pricing create --name
     *                            --tier
     *                            [--resource-group]
     *                            [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     * @param {string} tier Pricing tier type.
     */
    az_security_pricing_create(name: string, tier: string): az_security_pricing_create_command_builder {
        return new az_security_pricing_create_command_builder(this, name, tier);
    }

    /**
     * Shows the Azure Security Center Pricing tier for the subscription.
     *
     * Syntax:
     * ```
     * az security pricing list [--query-examples]
     *                          [--subscription]
     * ```
     */
    az_security_pricing_list(): az_security_pricing_list_command_builder {
        return new az_security_pricing_list_command_builder(this);
    }

    /**
     * Shows the Azure Security Center Pricing tier for the subscription.
     *
     * Syntax:
     * ```
     * az security pricing show --name
     *                          [--query-examples]
     *                          [--resource-group]
     *                          [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     */
    az_security_pricing_show(name: string): az_security_pricing_show_command_builder {
        return new az_security_pricing_show_command_builder(this, name);
    }
}

/** Regulatory compliance assessments. */
export class az_security_regulatory_compliance_assessments implements ICommandParent<any> {
    commandPath = "az security regulatory-compliance-assessments";

    /**
     * Get details and state of assessments mapped to selected regulatory compliance control.
     *
     * Syntax:
     * ```
     * az security regulatory-compliance-assessments list --control-name
     *                                                    --standard-name
     *                                                    [--query-examples]
     *                                                    [--subscription]
     * ```
     *
     * @param {string} controlName The compliance control name.
     * @param {string} standardName The compliance standard name.
     */
    az_security_regulatory_compliance_assessments_list(controlName: string, standardName: string): az_security_regulatory_compliance_assessments_list_command_builder {
        return new az_security_regulatory_compliance_assessments_list_command_builder(this, controlName, standardName);
    }

    /**
     * Shows supported regulatory compliance details and state for selected assessment.
     *
     * Syntax:
     * ```
     * az security regulatory-compliance-assessments show --control-name
     *                                                    --name
     *                                                    --standard-name
     *                                                    [--query-examples]
     *                                                    [--subscription]
     * ```
     *
     * @param {string} controlName The compliance control name.
     * @param {string} name Name of the resource to be fetched.
     * @param {string} standardName The compliance standard name.
     */
    az_security_regulatory_compliance_assessments_show(controlName: string, name: string, standardName: string): az_security_regulatory_compliance_assessments_show_command_builder {
        return new az_security_regulatory_compliance_assessments_show_command_builder(this, controlName, name, standardName);
    }
}

/** Regulatory compliance controls. */
export class az_security_regulatory_compliance_controls implements ICommandParent<any> {
    commandPath = "az security regulatory-compliance-controls";

    /**
     * List supported of regulatory compliance controls details and state for selected standard.
     *
     * Syntax:
     * ```
     * az security regulatory-compliance-controls list --standard-name
     *                                                 [--query-examples]
     *                                                 [--subscription]
     * ```
     *
     * @param {string} standardName The compliance standard name.
     */
    az_security_regulatory_compliance_controls_list(standardName: string): az_security_regulatory_compliance_controls_list_command_builder {
        return new az_security_regulatory_compliance_controls_list_command_builder(this, standardName);
    }

    /**
     * Shows a regulatory compliance details state for selected standard.
     *
     * Syntax:
     * ```
     * az security regulatory-compliance-controls show --name
     *                                                 --standard-name
     *                                                 [--query-examples]
     *                                                 [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     * @param {string} standardName The compliance standard name.
     */
    az_security_regulatory_compliance_controls_show(name: string, standardName: string): az_security_regulatory_compliance_controls_show_command_builder {
        return new az_security_regulatory_compliance_controls_show_command_builder(this, name, standardName);
    }
}

/** Regulatory compliance standards. */
export class az_security_regulatory_compliance_standards implements ICommandParent<any> {
    commandPath = "az security regulatory-compliance-standards";

    /**
     * List supported regulatory compliance standards details and state results.
     *
     * Syntax:
     * ```
     * az security regulatory-compliance-standards list [--query-examples]
     *                                                  [--subscription]
     * ```
     */
    az_security_regulatory_compliance_standards_list(): az_security_regulatory_compliance_standards_list_command_builder {
        return new az_security_regulatory_compliance_standards_list_command_builder(this);
    }

    /**
     * Shows a regulatory compliance details state for selected standard.
     *
     * Syntax:
     * ```
     * az security regulatory-compliance-standards show --name
     *                                                  [--query-examples]
     *                                                  [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     */
    az_security_regulatory_compliance_standards_show(name: string): az_security_regulatory_compliance_standards_show_command_builder {
        return new az_security_regulatory_compliance_standards_show_command_builder(this, name);
    }
}

/** View your security settings. */
export class az_security_setting implements ICommandParent<any> {
    commandPath = "az security setting";

    /**
     * List security settings.
     *
     * Syntax:
     * ```
     * az security setting list [--query-examples]
     *                          [--subscription]
     * ```
     */
    az_security_setting_list(): az_security_setting_list_command_builder {
        return new az_security_setting_list_command_builder(this);
    }

    /**
     * Shows a security setting.
     *
     * Syntax:
     * ```
     * az security setting show --name
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     */
    az_security_setting_show(name: string): az_security_setting_show_command_builder {
        return new az_security_setting_show_command_builder(this, name);
    }
}

/** View your security sub assessments. */
export class az_security_sub_assessment implements ICommandParent<any> {
    commandPath = "az security sub-assessment";

    /**
     * List all security sub assessment results.
     *
     * Syntax:
     * ```
     * az security sub-assessment list [--assessed-resource-id]
     *                                 [--assessment-name]
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     */
    az_security_sub_assessment_list(): az_security_sub_assessment_list_command_builder {
        return new az_security_sub_assessment_list_command_builder(this);
    }

    /**
     * Shows a security sub assessment.
     *
     * Syntax:
     * ```
     * az security sub-assessment show --assessment-name
     *                                 --name
     *                                 [--assessed-resource-id]
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     *
     * @param {string} assessmentName Name of the assessment resource.
     * @param {string} name Name of the resource to be fetched.
     */
    az_security_sub_assessment_show(assessmentName: string, name: string): az_security_sub_assessment_show_command_builder {
        return new az_security_sub_assessment_show_command_builder(this, assessmentName, name);
    }
}

/** View security tasks (recommendations). */
export class az_security_task implements ICommandParent<any> {
    commandPath = "az security task";

    /**
     * List security tasks (recommendations).
     *
     * Syntax:
     * ```
     * az security task list [--query-examples]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    az_security_task_list(): az_security_task_list_command_builder {
        return new az_security_task_list_command_builder(this);
    }

    /**
     * Shows a security task (recommendation).
     *
     * Syntax:
     * ```
     * az security task show --name
     *                       [--query-examples]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     */
    az_security_task_show(name: string): az_security_task_show_command_builder {
        return new az_security_task_show_command_builder(this, name);
    }
}

/** Shows the network topology in your subscription. */
export class az_security_topology implements ICommandParent<any> {
    commandPath = "az security topology";

    /**
     * Shows the network topology in your subscription.
     *
     * Syntax:
     * ```
     * az security topology list [--query-examples]
     *                           [--subscription]
     * ```
     */
    az_security_topology_list(): az_security_topology_list_command_builder {
        return new az_security_topology_list_command_builder(this);
    }

    /**
     * Shows the network topology in your subscription.
     *
     * Syntax:
     * ```
     * az security topology show --name
     *                           --resource-group
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_security_topology_show(name: string, resourceGroup: string): az_security_topology_show_command_builder {
        return new az_security_topology_show_command_builder(this, name, resourceGroup);
    }
}

/** Shows the workspace settings in your subscription - these settings let you control which workspace will hold your security data. */
export class az_security_workspace_setting implements ICommandParent<any> {
    commandPath = "az security workspace-setting";

    /**
     * Creates a workspace settings in your subscription - these settings let you control which workspace will hold your security data.
     *
     * Syntax:
     * ```
     * az security workspace-setting create --name
     *                                      --target-workspace
     *                                      [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     * @param {string} targetWorkspace An ID of the workspace resource that will hold the security data.
     */
    az_security_workspace_setting_create(name: string, targetWorkspace: string): az_security_workspace_setting_create_command_builder {
        return new az_security_workspace_setting_create_command_builder(this, name, targetWorkspace);
    }

    /**
     * Deletes the workspace settings in your subscription - this will make the security events on the subscription be reported to the default workspace.
     *
     * Syntax:
     * ```
     * az security workspace-setting delete --name
     *                                      [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     */
    az_security_workspace_setting_delete(name: string): az_security_workspace_setting_delete_command_builder {
        return new az_security_workspace_setting_delete_command_builder(this, name);
    }

    /**
     * Shows the workspace settings in your subscription - these settings let you control which workspace will hold your security data.
     *
     * Syntax:
     * ```
     * az security workspace-setting list [--query-examples]
     *                                    [--subscription]
     * ```
     */
    az_security_workspace_setting_list(): az_security_workspace_setting_list_command_builder {
        return new az_security_workspace_setting_list_command_builder(this);
    }

    /**
     * Shows the workspace settings in your subscription - these settings let you control which workspace will hold your security data.
     *
     * Syntax:
     * ```
     * az security workspace-setting show --name
     *                                    [--query-examples]
     *                                    [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     */
    az_security_workspace_setting_show(name: string): az_security_workspace_setting_show_command_builder {
        return new az_security_workspace_setting_show_command_builder(this, name);
    }
}

/** Manage your security posture with Azure Security Center. */
export class az_security {
}

/**
 * Adaptive Application Controls - List.
 *
 * Syntax:
 * ```
 * az security adaptive-application-controls list [--query-examples]
 *                                                [--subscription]
 * ```
 */
class az_security_adaptive_application_controls_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_adaptive_application_controls_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_adaptive_application_controls_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Adaptive Application Controls - Get.
 *
 * Syntax:
 * ```
 * az security adaptive-application-controls show --group-name
 *                                                [--query-examples]
 *                                                [--subscription]
 * ```
 *
 * @param {string} groupName Name of an application control VM/server group.
 */
class az_security_adaptive_application_controls_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, groupName: string) {
        super(commandParent);
        this.groupName(groupName)
    }

    /** Name of an application control VM/server group. */
    groupName(value: string): az_security_adaptive_application_controls_show_command_builder {
        this.setFlag("--group-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_adaptive_application_controls_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_adaptive_application_controls_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Gets a list of Adaptive Network Hardenings resources in scope of an extended resource.
 *
 * Syntax:
 * ```
 * az security adaptive_network_hardenings list --resource-group
 *                                              --resource-name
 *                                              --resource-namespace
 *                                              --resource-type
 *                                              [--query-examples]
 *                                              [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} resourceName Name of the resource.
 * @param {string} resourceNamespace The Namespace of the resource.
 * @param {string} resourceType The type of the resource.
 */
class az_security_adaptive_network_hardenings_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string, resourceName: string, resourceNamespace: string, resourceType: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.resourceName(resourceName)
        this.resourceNamespace(resourceNamespace)
        this.resourceType(resourceType)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_adaptive_network_hardenings_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the resource. */
    resourceName(value: string): az_security_adaptive_network_hardenings_list_command_builder {
        this.setFlag("--resource-name", value);
        return this;
    }

    /** The Namespace of the resource. */
    resourceNamespace(value: string): az_security_adaptive_network_hardenings_list_command_builder {
        this.setFlag("--resource-namespace", value);
        return this;
    }

    /** The type of the resource. */
    resourceType(value: string): az_security_adaptive_network_hardenings_list_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_adaptive_network_hardenings_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_adaptive_network_hardenings_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Gets a single Adaptive Network Hardening resource.
 *
 * Syntax:
 * ```
 * az security adaptive_network_hardenings show --adaptive-network-hardenings-resource-name
 *                                              --resource-group
 *                                              --resource-name
 *                                              --resource-namespace
 *                                              --resource-type
 *                                              [--query-examples]
 *                                              [--subscription]
 * ```
 *
 * @param {string} adaptiveNetworkHardeningsResourceName Adaptive Network Hardening resource name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} resourceName Name of the resource.
 * @param {string} resourceNamespace The Namespace of the resource.
 * @param {string} resourceType The type of the resource.
 */
class az_security_adaptive_network_hardenings_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, adaptiveNetworkHardeningsResourceName: string, resourceGroup: string, resourceName: string, resourceNamespace: string, resourceType: string) {
        super(commandParent);
        this.adaptiveNetworkHardeningsResourceName(adaptiveNetworkHardeningsResourceName)
        this.resourceGroup(resourceGroup)
        this.resourceName(resourceName)
        this.resourceNamespace(resourceNamespace)
        this.resourceType(resourceType)
    }

    /** Adaptive Network Hardening resource name. */
    adaptiveNetworkHardeningsResourceName(value: string): az_security_adaptive_network_hardenings_show_command_builder {
        this.setFlag("--adaptive-network-hardenings-resource-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_adaptive_network_hardenings_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the resource. */
    resourceName(value: string): az_security_adaptive_network_hardenings_show_command_builder {
        this.setFlag("--resource-name", value);
        return this;
    }

    /** The Namespace of the resource. */
    resourceNamespace(value: string): az_security_adaptive_network_hardenings_show_command_builder {
        this.setFlag("--resource-namespace", value);
        return this;
    }

    /** The type of the resource. */
    resourceType(value: string): az_security_adaptive_network_hardenings_show_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_adaptive_network_hardenings_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_adaptive_network_hardenings_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List security alerts.
 *
 * Syntax:
 * ```
 * az security alert list [--location]
 *                        [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 */
class az_security_alert_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Location of the resource. */
    location(value: string): az_security_alert_list_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_alert_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_alert_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_alert_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows a security alert.
 *
 * Syntax:
 * ```
 * az security alert show --location
 *                        --name
 *                        [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 *
 * @param {string} location Location of the resource.
 * @param {string} name Name of the resource to be fetched.
 */
class az_security_alert_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, location: string, name: string) {
        super(commandParent);
        this.location(location)
        this.name(name)
    }

    /** Location of the resource. */
    location(value: string): az_security_alert_show_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_alert_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_alert_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_alert_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_alert_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Updates a security alert status.
 *
 * Syntax:
 * ```
 * az security alert update --location
 *                          --name
 *                          --status
 *                          [--resource-group]
 *                          [--subscription]
 * ```
 *
 * @param {string} location Location of the resource.
 * @param {string} name Name of the resource to be fetched.
 * @param {string} status Target status of the alert. possible values are "dismiss" and "activate".
 */
class az_security_alert_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, location: string, name: string, status: string) {
        super(commandParent);
        this.location(location)
        this.name(name)
        this.status(status)
    }

    /** Location of the resource. */
    location(value: string): az_security_alert_update_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_alert_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Target status of the alert. possible values are "dismiss" and "activate". */
    status(value: string): az_security_alert_update_command_builder {
        this.setFlag("--status", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_alert_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_alert_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List of all possible traffic between resources for the subscription.
 *
 * Syntax:
 * ```
 * az security allowed_connections list [--query-examples]
 *                                      [--subscription]
 * ```
 */
class az_security_allowed_connections_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_allowed_connections_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_allowed_connections_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List all possible traffic between resources for the subscription and location, based on connection type.
 *
 * Syntax:
 * ```
 * az security allowed_connections show --name
 *                                      --resource-group
 *                                      [--query-examples]
 *                                      [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_security_allowed_connections_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_allowed_connections_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_allowed_connections_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_allowed_connections_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_allowed_connections_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Creates a customer managed security assessment type.
 *
 * Syntax:
 * ```
 * az security assessment-metadata create --description
 *                                        --display-name
 *                                        --name
 *                                        --severity
 *                                        [--remediation-description]
 *                                        [--subscription]
 * ```
 *
 * @param {string} description Detailed string that will help users to understand the assessment and how it is calculated.
 * @param {string} displayName Human readable title for this object.
 * @param {string} name Name of the resource to be fetched.
 * @param {string} severity Indicates the importance of the security risk if the assessment is unhealthy.
 */
class az_security_assessment_metadata_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, description: string, displayName: string, name: string, severity: string) {
        super(commandParent);
        this.description(description)
        this.displayName(displayName)
        this.name(name)
        this.severity(severity)
    }

    /** Detailed string that will help users to understand the assessment and how it is calculated. */
    description(value: string): az_security_assessment_metadata_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Human readable title for this object. */
    displayName(value: string): az_security_assessment_metadata_create_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_assessment_metadata_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Indicates the importance of the security risk if the assessment is unhealthy. */
    severity(value: string): az_security_assessment_metadata_create_command_builder {
        this.setFlag("--severity", value);
        return this;
    }

    /** Detailed string that will help users to understand the different ways to mitigate or fix the security issue. */
    remediationDescription(value: string): az_security_assessment_metadata_create_command_builder {
        this.setFlag("--remediation-description", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_assessment_metadata_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Deletes a security assessment type and all it's assessment results.
 *
 * Syntax:
 * ```
 * az security assessment-metadata delete --name
 *                                        [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 */
class az_security_assessment_metadata_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_assessment_metadata_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_assessment_metadata_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List all security assessment results.
 *
 * Syntax:
 * ```
 * az security assessment-metadata list [--query-examples]
 *                                      [--subscription]
 * ```
 */
class az_security_assessment_metadata_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_assessment_metadata_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_assessment_metadata_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows a security assessment.
 *
 * Syntax:
 * ```
 * az security assessment-metadata show --name
 *                                      [--query-examples]
 *                                      [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 */
class az_security_assessment_metadata_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_assessment_metadata_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_assessment_metadata_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_assessment_metadata_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Creates a customer managed security assessment.
 *
 * Syntax:
 * ```
 * az security assessment create --name
 *                               --status-code
 *                               [--additional-data]
 *                               [--assessed-resource-id]
 *                               [--status-cause]
 *                               [--status-description]
 *                               [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 * @param {string} statusCode Progremmatic code for the result of the assessment. can be "Healthy", "Unhealthy" or "NotApplicable".
 */
class az_security_assessment_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, statusCode: string) {
        super(commandParent);
        this.name(name)
        this.statusCode(statusCode)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_assessment_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Progremmatic code for the result of the assessment. can be "Healthy", "Unhealthy" or "NotApplicable". */
    statusCode(value: string): az_security_assessment_create_command_builder {
        this.setFlag("--status-code", value);
        return this;
    }

    /** Data that is attached to the assessment result for better investigations or status clarity. */
    additionalData(value: string): az_security_assessment_create_command_builder {
        this.setFlag("--additional-data", value);
        return this;
    }

    /** The target resource for this assessment. */
    assessedResourceId(value: string): az_security_assessment_create_command_builder {
        this.setFlag("--assessed-resource-id", value);
        return this;
    }

    /** Progremmatic code for the cause of the assessment result. */
    statusCause(value: string): az_security_assessment_create_command_builder {
        this.setFlag("--status-cause", value);
        return this;
    }

    /** Human readable description of the cause of the assessment result. */
    statusDescription(value: string): az_security_assessment_create_command_builder {
        this.setFlag("--status-description", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_assessment_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Deletes a security assessment.
 *
 * Syntax:
 * ```
 * az security assessment delete --name
 *                               [--assessed-resource-id]
 *                               [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 */
class az_security_assessment_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_assessment_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The target resource for this assessment. */
    assessedResourceId(value: string): az_security_assessment_delete_command_builder {
        this.setFlag("--assessed-resource-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_assessment_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List all security assessment results.
 *
 * Syntax:
 * ```
 * az security assessment list [--query-examples]
 *                             [--subscription]
 * ```
 */
class az_security_assessment_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_assessment_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_assessment_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows a security assessment.
 *
 * Syntax:
 * ```
 * az security assessment show --name
 *                             [--assessed-resource-id]
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 */
class az_security_assessment_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_assessment_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The target resource for this assessment. */
    assessedResourceId(value: string): az_security_assessment_show_command_builder {
        this.setFlag("--assessed-resource-id", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_assessment_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_assessment_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Display Advanced Threat Protection settings for a storage account.
 *
 * Syntax:
 * ```
 * az security atp storage show --resource-group
 *                              --storage-account
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} storageAccount Name of an existing storage account.
 */
class az_security_atp_storage_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string, storageAccount: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.storageAccount(storageAccount)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_atp_storage_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of an existing storage account. */
    storageAccount(value: string): az_security_atp_storage_show_command_builder {
        this.setFlag("--storage-account", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_atp_storage_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_atp_storage_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Toggle status of Advanced Threat Protection for a storage account.
 *
 * Syntax:
 * ```
 * az security atp storage update --is-enabled {false, true}
 *                                --resource-group
 *                                --storage-account
 *                                [--subscription]
 * ```
 *
 * @param {boolean} isEnabled Enable or disable Advanced Threat Protection for a received storage account.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} storageAccount Name of an existing storage account.
 */
class az_security_atp_storage_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, isEnabled: boolean, resourceGroup: string, storageAccount: string) {
        super(commandParent);
        this.isEnabled(isEnabled)
        this.resourceGroup(resourceGroup)
        this.storageAccount(storageAccount)
    }

    /** Enable or disable Advanced Threat Protection for a received storage account. */
    isEnabled(value: boolean): az_security_atp_storage_update_command_builder {
        this.setFlag("--is-enabled", value.toString());
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_atp_storage_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of an existing storage account. */
    storageAccount(value: string): az_security_atp_storage_update_command_builder {
        this.setFlag("--storage-account", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_atp_storage_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the auto provisioning settings.
 *
 * Syntax:
 * ```
 * az security auto-provisioning-setting list [--query-examples]
 *                                            [--subscription]
 * ```
 */
class az_security_auto_provisioning_setting_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_auto_provisioning_setting_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_auto_provisioning_setting_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows an auto provisioning setting.
 *
 * Syntax:
 * ```
 * az security auto-provisioning-setting show --name
 *                                            [--query-examples]
 *                                            [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 */
class az_security_auto_provisioning_setting_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_auto_provisioning_setting_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_auto_provisioning_setting_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_auto_provisioning_setting_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Updates your automatic provisioning settings on the subscription.
 *
 * Syntax:
 * ```
 * az security auto-provisioning-setting update --auto-provision
 *                                              --name
 *                                              [--subscription]
 * ```
 *
 * @param {string} autoProvision Automatic provisioning toggle. possible values are "On" or "Off".
 * @param {string} name Name of the resource to be fetched.
 */
class az_security_auto_provisioning_setting_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, autoProvision: string, name: string) {
        super(commandParent);
        this.autoProvision(autoProvision)
        this.name(name)
    }

    /** Automatic provisioning toggle. possible values are "On" or "Off". */
    autoProvision(value: string): az_security_auto_provisioning_setting_update_command_builder {
        this.setFlag("--auto-provision", value);
        return this;
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_auto_provisioning_setting_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_auto_provisioning_setting_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Creates a security contact.
 *
 * Syntax:
 * ```
 * az security contact create --email
 *                            --name
 *                            [--alert-notifications]
 *                            [--alerts-admins]
 *                            [--phone]
 *                            [--subscription]
 * ```
 *
 * @param {string} email E-mail of the security contact.
 * @param {string} name Name of the resource to be fetched.
 */
class az_security_contact_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, email: string, name: string) {
        super(commandParent);
        this.email(email)
        this.name(name)
    }

    /** E-mail of the security contact. */
    email(value: string): az_security_contact_create_command_builder {
        this.setFlag("--email", value);
        return this;
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_contact_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Whether to send mail notifications to the security contacts. */
    alertNotifications(value: string): az_security_contact_create_command_builder {
        this.setFlag("--alert-notifications", value);
        return this;
    }

    /** Whether to send mail notifications to the subscription administrators. */
    alertsAdmins(value: string): az_security_contact_create_command_builder {
        this.setFlag("--alerts-admins", value);
        return this;
    }

    /** Phone of the security contact. */
    phone(value: string): az_security_contact_create_command_builder {
        this.setFlag("--phone", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_contact_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Deletes a security contact.
 *
 * Syntax:
 * ```
 * az security contact delete --name
 *                            [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 */
class az_security_contact_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_contact_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_contact_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List security contact.
 *
 * Syntax:
 * ```
 * az security contact list [--query-examples]
 *                          [--subscription]
 * ```
 */
class az_security_contact_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_contact_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_contact_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows a security contact.
 *
 * Syntax:
 * ```
 * az security contact show --name
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 */
class az_security_contact_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_contact_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_contact_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_contact_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the discovered security solutions.
 *
 * Syntax:
 * ```
 * az security discovered-security-solution list [--query-examples]
 *                                               [--subscription]
 * ```
 */
class az_security_discovered_security_solution_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_discovered_security_solution_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_discovered_security_solution_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows a discovered security solution.
 *
 * Syntax:
 * ```
 * az security discovered-security-solution show --name
 *                                               --resource-group
 *                                               [--query-examples]
 *                                               [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_security_discovered_security_solution_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_discovered_security_solution_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_discovered_security_solution_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_discovered_security_solution_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_discovered_security_solution_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the external security solutions.
 *
 * Syntax:
 * ```
 * az security external-security-solution list [--query-examples]
 *                                             [--subscription]
 * ```
 */
class az_security_external_security_solution_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_external_security_solution_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_external_security_solution_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows an external security solution.
 *
 * Syntax:
 * ```
 * az security external-security-solution show --name
 *                                             --resource-group
 *                                             [--query-examples]
 *                                             [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_security_external_security_solution_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_external_security_solution_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_external_security_solution_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_external_security_solution_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_external_security_solution_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Dismiss an aggregated IoT Security Alert.
 *
 * Syntax:
 * ```
 * az security iot-alerts delete --name
 *                               --resource-group
 *                               --solution-name
 *                               [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} solutionName Name of the IoT Security solution.
 */
class az_security_iot_alerts_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string, solutionName: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.solutionName(solutionName)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_iot_alerts_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_iot_alerts_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the IoT Security solution. */
    solutionName(value: string): az_security_iot_alerts_delete_command_builder {
        this.setFlag("--solution-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_iot_alerts_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List all yours IoT Security solution aggregated alerts.
 *
 * Syntax:
 * ```
 * az security iot-alerts list --resource-group
 *                             --solution-name
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} solutionName Name of the IoT Security solution.
 */
class az_security_iot_alerts_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string, solutionName: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.solutionName(solutionName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_iot_alerts_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the IoT Security solution. */
    solutionName(value: string): az_security_iot_alerts_list_command_builder {
        this.setFlag("--solution-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_iot_alerts_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_iot_alerts_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows a single aggregated alert of yours IoT Security solution.
 *
 * Syntax:
 * ```
 * az security iot-alerts show --name
 *                             --resource-group
 *                             --solution-name
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} solutionName Name of the IoT Security solution.
 */
class az_security_iot_alerts_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string, solutionName: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.solutionName(solutionName)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_iot_alerts_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_iot_alerts_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the IoT Security solution. */
    solutionName(value: string): az_security_iot_alerts_show_command_builder {
        this.setFlag("--solution-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_iot_alerts_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_iot_alerts_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List all IoT security Analytics metrics.
 *
 * Syntax:
 * ```
 * az security iot-analytics list --resource-group
 *                                --solution-name
 *                                [--query-examples]
 *                                [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} solutionName Name of the IoT Security solution.
 */
class az_security_iot_analytics_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string, solutionName: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.solutionName(solutionName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_iot_analytics_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the IoT Security solution. */
    solutionName(value: string): az_security_iot_analytics_list_command_builder {
        this.setFlag("--solution-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_iot_analytics_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_iot_analytics_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows IoT Security Analytics metrics.
 *
 * Syntax:
 * ```
 * az security iot-analytics show --resource-group
 *                                --solution-name
 *                                [--query-examples]
 *                                [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} solutionName Name of the IoT Security solution.
 */
class az_security_iot_analytics_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string, solutionName: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.solutionName(solutionName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_iot_analytics_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the IoT Security solution. */
    solutionName(value: string): az_security_iot_analytics_show_command_builder {
        this.setFlag("--solution-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_iot_analytics_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_iot_analytics_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List all yours IoT Security solution aggregated recommendations.
 *
 * Syntax:
 * ```
 * az security iot-recommendations list --resource-group
 *                                      --solution-name
 *                                      [--query-examples]
 *                                      [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} solutionName Name of the IoT Security solution.
 */
class az_security_iot_recommendations_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string, solutionName: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.solutionName(solutionName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_iot_recommendations_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the IoT Security solution. */
    solutionName(value: string): az_security_iot_recommendations_list_command_builder {
        this.setFlag("--solution-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_iot_recommendations_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_iot_recommendations_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows a single aggregated recommendation of yours IoT Security solution.
 *
 * Syntax:
 * ```
 * az security iot-recommendations show --name
 *                                      --resource-group
 *                                      --solution-name
 *                                      [--query-examples]
 *                                      [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} solutionName Name of the IoT Security solution.
 */
class az_security_iot_recommendations_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string, solutionName: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.solutionName(solutionName)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_iot_recommendations_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_iot_recommendations_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the IoT Security solution. */
    solutionName(value: string): az_security_iot_recommendations_show_command_builder {
        this.setFlag("--solution-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_iot_recommendations_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_iot_recommendations_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create your IoT Security solution.
 *
 * Syntax:
 * ```
 * az security iot-solution create --display-name
 *                                 --iot-hubs
 *                                 --location
 *                                 --resource-group
 *                                 --solution-name
 *                                 [--subscription]
 * ```
 *
 * @param {string} displayName Resource display name.
 * @param {string} iotHubs IoT Hub resource IDs.
 * @param {string} location Location of the resource.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} solutionName Name of the IoT Security solution.
 */
class az_security_iot_solution_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, displayName: string, iotHubs: string, location: string, resourceGroup: string, solutionName: string) {
        super(commandParent);
        this.displayName(displayName)
        this.iotHubs(iotHubs)
        this.location(location)
        this.resourceGroup(resourceGroup)
        this.solutionName(solutionName)
    }

    /** Resource display name. */
    displayName(value: string): az_security_iot_solution_create_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** IoT Hub resource IDs. */
    iotHubs(value: string): az_security_iot_solution_create_command_builder {
        this.setFlag("--iot-hubs", value);
        return this;
    }

    /** Location of the resource. */
    location(value: string): az_security_iot_solution_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_iot_solution_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the IoT Security solution. */
    solutionName(value: string): az_security_iot_solution_create_command_builder {
        this.setFlag("--solution-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_iot_solution_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete your IoT Security solution.
 *
 * Syntax:
 * ```
 * az security iot-solution delete --resource-group
 *                                 --solution-name
 *                                 [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} solutionName Name of the IoT Security solution.
 */
class az_security_iot_solution_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string, solutionName: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.solutionName(solutionName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_iot_solution_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the IoT Security solution. */
    solutionName(value: string): az_security_iot_solution_delete_command_builder {
        this.setFlag("--solution-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_iot_solution_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List all IoT Security solutions.
 *
 * Syntax:
 * ```
 * az security iot-solution list [--query-examples]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 */
class az_security_iot_solution_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_iot_solution_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_iot_solution_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_iot_solution_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows a IoT Security solution.
 *
 * Syntax:
 * ```
 * az security iot-solution show --resource-group
 *                               --solution-name
 *                               [--query-examples]
 *                               [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} solutionName Name of the IoT Security solution.
 */
class az_security_iot_solution_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string, solutionName: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.solutionName(solutionName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_iot_solution_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the IoT Security solution. */
    solutionName(value: string): az_security_iot_solution_show_command_builder {
        this.setFlag("--solution-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_iot_solution_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_iot_solution_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update your IoT Security solution.
 *
 * Syntax:
 * ```
 * az security iot-solution update --resource-group
 *                                 --solution-name
 *                                 [--display-name]
 *                                 [--iot-hubs]
 *                                 [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} solutionName Name of the IoT Security solution.
 */
class az_security_iot_solution_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string, solutionName: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.solutionName(solutionName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_iot_solution_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the IoT Security solution. */
    solutionName(value: string): az_security_iot_solution_update_command_builder {
        this.setFlag("--solution-name", value);
        return this;
    }

    /** Resource display name. */
    displayName(value: string): az_security_iot_solution_update_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** IoT Hub resource IDs. */
    iotHubs(value: string): az_security_iot_solution_update_command_builder {
        this.setFlag("--iot-hubs", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_iot_solution_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List your Just in Time network access policies.
 *
 * Syntax:
 * ```
 * az security jit-policy list [--location]
 *                             [--query-examples]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 */
class az_security_jit_policy_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Location of the resource. */
    location(value: string): az_security_jit_policy_list_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_jit_policy_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_jit_policy_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_jit_policy_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows a Just in Time network access policy.
 *
 * Syntax:
 * ```
 * az security jit-policy show --location
 *                             --name
 *                             --resource-group
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 *
 * @param {string} location Location of the resource.
 * @param {string} name Name of the resource to be fetched.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_security_jit_policy_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, location: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.location(location)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Location of the resource. */
    location(value: string): az_security_jit_policy_show_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_jit_policy_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_jit_policy_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_jit_policy_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_jit_policy_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows the Azure Security Center Home region location.
 *
 * Syntax:
 * ```
 * az security location list [--query-examples]
 *                           [--subscription]
 * ```
 */
class az_security_location_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_location_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_location_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows the Azure Security Center Home region location.
 *
 * Syntax:
 * ```
 * az security location show --name
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 */
class az_security_location_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_location_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_location_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_location_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Updates the Azure Security Center Pricing tier for the subscription.
 *
 * Syntax:
 * ```
 * az security pricing create --name
 *                            --tier
 *                            [--resource-group]
 *                            [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 * @param {string} tier Pricing tier type.
 */
class az_security_pricing_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, tier: string) {
        super(commandParent);
        this.name(name)
        this.tier(tier)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_pricing_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Pricing tier type. */
    tier(value: string): az_security_pricing_create_command_builder {
        this.setFlag("--tier", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_pricing_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_pricing_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows the Azure Security Center Pricing tier for the subscription.
 *
 * Syntax:
 * ```
 * az security pricing list [--query-examples]
 *                          [--subscription]
 * ```
 */
class az_security_pricing_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_pricing_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_pricing_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows the Azure Security Center Pricing tier for the subscription.
 *
 * Syntax:
 * ```
 * az security pricing show --name
 *                          [--query-examples]
 *                          [--resource-group]
 *                          [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 */
class az_security_pricing_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_pricing_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_pricing_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_pricing_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_pricing_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get details and state of assessments mapped to selected regulatory compliance control.
 *
 * Syntax:
 * ```
 * az security regulatory-compliance-assessments list --control-name
 *                                                    --standard-name
 *                                                    [--query-examples]
 *                                                    [--subscription]
 * ```
 *
 * @param {string} controlName The compliance control name.
 * @param {string} standardName The compliance standard name.
 */
class az_security_regulatory_compliance_assessments_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, controlName: string, standardName: string) {
        super(commandParent);
        this.controlName(controlName)
        this.standardName(standardName)
    }

    /** The compliance control name. */
    controlName(value: string): az_security_regulatory_compliance_assessments_list_command_builder {
        this.setFlag("--control-name", value);
        return this;
    }

    /** The compliance standard name. */
    standardName(value: string): az_security_regulatory_compliance_assessments_list_command_builder {
        this.setFlag("--standard-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_regulatory_compliance_assessments_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_regulatory_compliance_assessments_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows supported regulatory compliance details and state for selected assessment.
 *
 * Syntax:
 * ```
 * az security regulatory-compliance-assessments show --control-name
 *                                                    --name
 *                                                    --standard-name
 *                                                    [--query-examples]
 *                                                    [--subscription]
 * ```
 *
 * @param {string} controlName The compliance control name.
 * @param {string} name Name of the resource to be fetched.
 * @param {string} standardName The compliance standard name.
 */
class az_security_regulatory_compliance_assessments_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, controlName: string, name: string, standardName: string) {
        super(commandParent);
        this.controlName(controlName)
        this.name(name)
        this.standardName(standardName)
    }

    /** The compliance control name. */
    controlName(value: string): az_security_regulatory_compliance_assessments_show_command_builder {
        this.setFlag("--control-name", value);
        return this;
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_regulatory_compliance_assessments_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The compliance standard name. */
    standardName(value: string): az_security_regulatory_compliance_assessments_show_command_builder {
        this.setFlag("--standard-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_regulatory_compliance_assessments_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_regulatory_compliance_assessments_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List supported of regulatory compliance controls details and state for selected standard.
 *
 * Syntax:
 * ```
 * az security regulatory-compliance-controls list --standard-name
 *                                                 [--query-examples]
 *                                                 [--subscription]
 * ```
 *
 * @param {string} standardName The compliance standard name.
 */
class az_security_regulatory_compliance_controls_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, standardName: string) {
        super(commandParent);
        this.standardName(standardName)
    }

    /** The compliance standard name. */
    standardName(value: string): az_security_regulatory_compliance_controls_list_command_builder {
        this.setFlag("--standard-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_regulatory_compliance_controls_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_regulatory_compliance_controls_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows a regulatory compliance details state for selected standard.
 *
 * Syntax:
 * ```
 * az security regulatory-compliance-controls show --name
 *                                                 --standard-name
 *                                                 [--query-examples]
 *                                                 [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 * @param {string} standardName The compliance standard name.
 */
class az_security_regulatory_compliance_controls_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, standardName: string) {
        super(commandParent);
        this.name(name)
        this.standardName(standardName)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_regulatory_compliance_controls_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The compliance standard name. */
    standardName(value: string): az_security_regulatory_compliance_controls_show_command_builder {
        this.setFlag("--standard-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_regulatory_compliance_controls_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_regulatory_compliance_controls_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List supported regulatory compliance standards details and state results.
 *
 * Syntax:
 * ```
 * az security regulatory-compliance-standards list [--query-examples]
 *                                                  [--subscription]
 * ```
 */
class az_security_regulatory_compliance_standards_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_regulatory_compliance_standards_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_regulatory_compliance_standards_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows a regulatory compliance details state for selected standard.
 *
 * Syntax:
 * ```
 * az security regulatory-compliance-standards show --name
 *                                                  [--query-examples]
 *                                                  [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 */
class az_security_regulatory_compliance_standards_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_regulatory_compliance_standards_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_regulatory_compliance_standards_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_regulatory_compliance_standards_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List security settings.
 *
 * Syntax:
 * ```
 * az security setting list [--query-examples]
 *                          [--subscription]
 * ```
 */
class az_security_setting_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_setting_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_setting_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows a security setting.
 *
 * Syntax:
 * ```
 * az security setting show --name
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 */
class az_security_setting_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_setting_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_setting_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_setting_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List all security sub assessment results.
 *
 * Syntax:
 * ```
 * az security sub-assessment list [--assessed-resource-id]
 *                                 [--assessment-name]
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 */
class az_security_sub_assessment_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** The target resource for this assessment. */
    assessedResourceId(value: string): az_security_sub_assessment_list_command_builder {
        this.setFlag("--assessed-resource-id", value);
        return this;
    }

    /** Name of the assessment resource. */
    assessmentName(value: string): az_security_sub_assessment_list_command_builder {
        this.setFlag("--assessment-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_sub_assessment_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_sub_assessment_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows a security sub assessment.
 *
 * Syntax:
 * ```
 * az security sub-assessment show --assessment-name
 *                                 --name
 *                                 [--assessed-resource-id]
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 *
 * @param {string} assessmentName Name of the assessment resource.
 * @param {string} name Name of the resource to be fetched.
 */
class az_security_sub_assessment_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, assessmentName: string, name: string) {
        super(commandParent);
        this.assessmentName(assessmentName)
        this.name(name)
    }

    /** Name of the assessment resource. */
    assessmentName(value: string): az_security_sub_assessment_show_command_builder {
        this.setFlag("--assessment-name", value);
        return this;
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_sub_assessment_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The target resource for this assessment. */
    assessedResourceId(value: string): az_security_sub_assessment_show_command_builder {
        this.setFlag("--assessed-resource-id", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_sub_assessment_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_sub_assessment_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List security tasks (recommendations).
 *
 * Syntax:
 * ```
 * az security task list [--query-examples]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
class az_security_task_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_task_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_task_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_task_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows a security task (recommendation).
 *
 * Syntax:
 * ```
 * az security task show --name
 *                       [--query-examples]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 */
class az_security_task_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_task_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_task_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_task_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_task_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows the network topology in your subscription.
 *
 * Syntax:
 * ```
 * az security topology list [--query-examples]
 *                           [--subscription]
 * ```
 */
class az_security_topology_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_topology_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_topology_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows the network topology in your subscription.
 *
 * Syntax:
 * ```
 * az security topology show --name
 *                           --resource-group
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_security_topology_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_topology_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_security_topology_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_topology_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_topology_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Creates a workspace settings in your subscription - these settings let you control which workspace will hold your security data.
 *
 * Syntax:
 * ```
 * az security workspace-setting create --name
 *                                      --target-workspace
 *                                      [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 * @param {string} targetWorkspace An ID of the workspace resource that will hold the security data.
 */
class az_security_workspace_setting_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, targetWorkspace: string) {
        super(commandParent);
        this.name(name)
        this.targetWorkspace(targetWorkspace)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_workspace_setting_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** An ID of the workspace resource that will hold the security data. */
    targetWorkspace(value: string): az_security_workspace_setting_create_command_builder {
        this.setFlag("--target-workspace", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_workspace_setting_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Deletes the workspace settings in your subscription - this will make the security events on the subscription be reported to the default workspace.
 *
 * Syntax:
 * ```
 * az security workspace-setting delete --name
 *                                      [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 */
class az_security_workspace_setting_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_workspace_setting_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_workspace_setting_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows the workspace settings in your subscription - these settings let you control which workspace will hold your security data.
 *
 * Syntax:
 * ```
 * az security workspace-setting list [--query-examples]
 *                                    [--subscription]
 * ```
 */
class az_security_workspace_setting_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_workspace_setting_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_workspace_setting_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Shows the workspace settings in your subscription - these settings let you control which workspace will hold your security data.
 *
 * Syntax:
 * ```
 * az security workspace-setting show --name
 *                                    [--query-examples]
 *                                    [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 */
class az_security_workspace_setting_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the resource to be fetched. */
    name(value: string): az_security_workspace_setting_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_security_workspace_setting_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_security_workspace_setting_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
