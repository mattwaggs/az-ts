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
exports.az_security = exports.az_security_workspace_setting = exports.az_security_topology = exports.az_security_task = exports.az_security_sub_assessment = exports.az_security_setting = exports.az_security_regulatory_compliance_standards = exports.az_security_regulatory_compliance_controls = exports.az_security_regulatory_compliance_assessments = exports.az_security_pricing = exports.az_security_location = exports.az_security_jit_policy = exports.az_security_iot_solution = exports.az_security_iot_recommendations = exports.az_security_iot_analytics = exports.az_security_iot_alerts = exports.az_security_external_security_solution = exports.az_security_discovered_security_solution = exports.az_security_contact = exports.az_security_auto_provisioning_setting = exports.az_security_atp = exports.az_security_atp_storage = exports.az_security_assessment = exports.az_security_assessment_metadata = exports.az_security_allowed_connections = exports.az_security_alert = exports.az_security_adaptive_network_hardenings = exports.az_security_adaptive_application_controls = void 0;
var base_1 = require("../base");
/** Enable control which applications can run on your Azure and non-Azure machines (Windows and Linux). */
var az_security_adaptive_application_controls = /** @class */ (function () {
    function az_security_adaptive_application_controls() {
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
    az_security_adaptive_application_controls.list = function () {
        return new az_security_adaptive_application_controls_list_command_builder("az security adaptive-application-controls list", 'az_security_adaptive_application_controls_list_command_result');
    };
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
    az_security_adaptive_application_controls.show = function (groupName) {
        return new az_security_adaptive_application_controls_show_command_builder("az security adaptive-application-controls show", 'az_security_adaptive_application_controls_show_command_result', groupName);
    };
    return az_security_adaptive_application_controls;
}());
exports.az_security_adaptive_application_controls = az_security_adaptive_application_controls;
/** View all Adaptive Network Hardening resources. */
var az_security_adaptive_network_hardenings = /** @class */ (function () {
    function az_security_adaptive_network_hardenings() {
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
    az_security_adaptive_network_hardenings.list = function (resourceGroup, resourceName, resourceNamespace, resourceType) {
        return new az_security_adaptive_network_hardenings_list_command_builder("az security adaptive_network_hardenings list", 'az_security_adaptive_network_hardenings_list_command_result', resourceGroup, resourceName, resourceNamespace, resourceType);
    };
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
    az_security_adaptive_network_hardenings.show = function (adaptiveNetworkHardeningsResourceName, resourceGroup, resourceName, resourceNamespace, resourceType) {
        return new az_security_adaptive_network_hardenings_show_command_builder("az security adaptive_network_hardenings show", 'az_security_adaptive_network_hardenings_show_command_result', adaptiveNetworkHardeningsResourceName, resourceGroup, resourceName, resourceNamespace, resourceType);
    };
    return az_security_adaptive_network_hardenings;
}());
exports.az_security_adaptive_network_hardenings = az_security_adaptive_network_hardenings;
/** View security alerts. */
var az_security_alert = /** @class */ (function () {
    function az_security_alert() {
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
    az_security_alert.list = function () {
        return new az_security_alert_list_command_builder("az security alert list", 'az_security_alert_list_command_result');
    };
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
    az_security_alert.show = function (location, name) {
        return new az_security_alert_show_command_builder("az security alert show", 'az_security_alert_show_command_result', location, name);
    };
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
    az_security_alert.update = function (location, name, status) {
        return new az_security_alert_update_command_builder("az security alert update", 'az_security_alert_update_command_result', location, name, status);
    };
    return az_security_alert;
}());
exports.az_security_alert = az_security_alert;
/** View all possible traffic between resources for the subscription and location, based on connection type. */
var az_security_allowed_connections = /** @class */ (function () {
    function az_security_allowed_connections() {
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
    az_security_allowed_connections.list = function () {
        return new az_security_allowed_connections_list_command_builder("az security allowed_connections list", 'az_security_allowed_connections_list_command_result');
    };
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
    az_security_allowed_connections.show = function (name, resourceGroup) {
        return new az_security_allowed_connections_show_command_builder("az security allowed_connections show", 'az_security_allowed_connections_show_command_result', name, resourceGroup);
    };
    return az_security_allowed_connections;
}());
exports.az_security_allowed_connections = az_security_allowed_connections;
/** View your security assessment metadata. */
var az_security_assessment_metadata = /** @class */ (function () {
    function az_security_assessment_metadata() {
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
    az_security_assessment_metadata.create = function (description, displayName, name, severity) {
        return new az_security_assessment_metadata_create_command_builder("az security assessment-metadata create", 'az_security_assessment_metadata_create_command_result', description, displayName, name, severity);
    };
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
    az_security_assessment_metadata["delete"] = function (name) {
        return new az_security_assessment_metadata_delete_command_builder("az security assessment-metadata delete", 'az_security_assessment_metadata_delete_command_result', name);
    };
    /**
     * List all security assessment results.
     *
     * Syntax:
     * ```
     * az security assessment-metadata list [--query-examples]
     *                                      [--subscription]
     * ```
     */
    az_security_assessment_metadata.list = function () {
        return new az_security_assessment_metadata_list_command_builder("az security assessment-metadata list", 'az_security_assessment_metadata_list_command_result');
    };
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
    az_security_assessment_metadata.show = function (name) {
        return new az_security_assessment_metadata_show_command_builder("az security assessment-metadata show", 'az_security_assessment_metadata_show_command_result', name);
    };
    return az_security_assessment_metadata;
}());
exports.az_security_assessment_metadata = az_security_assessment_metadata;
/** View your security assessment results. */
var az_security_assessment = /** @class */ (function () {
    function az_security_assessment() {
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
    az_security_assessment.create = function (name, statusCode) {
        return new az_security_assessment_create_command_builder("az security assessment create", 'az_security_assessment_create_command_result', name, statusCode);
    };
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
    az_security_assessment["delete"] = function (name) {
        return new az_security_assessment_delete_command_builder("az security assessment delete", 'az_security_assessment_delete_command_result', name);
    };
    /**
     * List all security assessment results.
     *
     * Syntax:
     * ```
     * az security assessment list [--query-examples]
     *                             [--subscription]
     * ```
     */
    az_security_assessment.list = function () {
        return new az_security_assessment_list_command_builder("az security assessment list", 'az_security_assessment_list_command_result');
    };
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
    az_security_assessment.show = function (name) {
        return new az_security_assessment_show_command_builder("az security assessment show", 'az_security_assessment_show_command_result', name);
    };
    return az_security_assessment;
}());
exports.az_security_assessment = az_security_assessment;
/** View and manage Advanced Threat Protection settings for storage accounts. */
var az_security_atp_storage = /** @class */ (function () {
    function az_security_atp_storage() {
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
    az_security_atp_storage.show = function (resourceGroup, storageAccount) {
        return new az_security_atp_storage_show_command_builder("az security atp storage show", 'az_security_atp_storage_show_command_result', resourceGroup, storageAccount);
    };
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
    az_security_atp_storage.update = function (isEnabled, resourceGroup, storageAccount) {
        return new az_security_atp_storage_update_command_builder("az security atp storage update", 'az_security_atp_storage_update_command_result', isEnabled, resourceGroup, storageAccount);
    };
    return az_security_atp_storage;
}());
exports.az_security_atp_storage = az_security_atp_storage;
/** View and manage Advanced Threat Protection settings. */
var az_security_atp = /** @class */ (function () {
    function az_security_atp() {
    }
    return az_security_atp;
}());
exports.az_security_atp = az_security_atp;
/** View your auto provisioning settings. */
var az_security_auto_provisioning_setting = /** @class */ (function () {
    function az_security_auto_provisioning_setting() {
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
    az_security_auto_provisioning_setting.list = function () {
        return new az_security_auto_provisioning_setting_list_command_builder("az security auto-provisioning-setting list", 'az_security_auto_provisioning_setting_list_command_result');
    };
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
    az_security_auto_provisioning_setting.show = function (name) {
        return new az_security_auto_provisioning_setting_show_command_builder("az security auto-provisioning-setting show", 'az_security_auto_provisioning_setting_show_command_result', name);
    };
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
    az_security_auto_provisioning_setting.update = function (autoProvision, name) {
        return new az_security_auto_provisioning_setting_update_command_builder("az security auto-provisioning-setting update", 'az_security_auto_provisioning_setting_update_command_result', autoProvision, name);
    };
    return az_security_auto_provisioning_setting;
}());
exports.az_security_auto_provisioning_setting = az_security_auto_provisioning_setting;
/** View your security contacts. */
var az_security_contact = /** @class */ (function () {
    function az_security_contact() {
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
    az_security_contact.create = function (email, name) {
        return new az_security_contact_create_command_builder("az security contact create", 'az_security_contact_create_command_result', email, name);
    };
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
    az_security_contact["delete"] = function (name) {
        return new az_security_contact_delete_command_builder("az security contact delete", 'az_security_contact_delete_command_result', name);
    };
    /**
     * List security contact.
     *
     * Syntax:
     * ```
     * az security contact list [--query-examples]
     *                          [--subscription]
     * ```
     */
    az_security_contact.list = function () {
        return new az_security_contact_list_command_builder("az security contact list", 'az_security_contact_list_command_result');
    };
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
    az_security_contact.show = function (name) {
        return new az_security_contact_show_command_builder("az security contact show", 'az_security_contact_show_command_result', name);
    };
    return az_security_contact;
}());
exports.az_security_contact = az_security_contact;
/** View your discovered security solutions. */
var az_security_discovered_security_solution = /** @class */ (function () {
    function az_security_discovered_security_solution() {
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
    az_security_discovered_security_solution.list = function () {
        return new az_security_discovered_security_solution_list_command_builder("az security discovered-security-solution list", 'az_security_discovered_security_solution_list_command_result');
    };
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
    az_security_discovered_security_solution.show = function (name, resourceGroup) {
        return new az_security_discovered_security_solution_show_command_builder("az security discovered-security-solution show", 'az_security_discovered_security_solution_show_command_result', name, resourceGroup);
    };
    return az_security_discovered_security_solution;
}());
exports.az_security_discovered_security_solution = az_security_discovered_security_solution;
/** View your external security solutions. */
var az_security_external_security_solution = /** @class */ (function () {
    function az_security_external_security_solution() {
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
    az_security_external_security_solution.list = function () {
        return new az_security_external_security_solution_list_command_builder("az security external-security-solution list", 'az_security_external_security_solution_list_command_result');
    };
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
    az_security_external_security_solution.show = function (name, resourceGroup) {
        return new az_security_external_security_solution_show_command_builder("az security external-security-solution show", 'az_security_external_security_solution_show_command_result', name, resourceGroup);
    };
    return az_security_external_security_solution;
}());
exports.az_security_external_security_solution = az_security_external_security_solution;
/** View IoT Security aggregated alerts. */
var az_security_iot_alerts = /** @class */ (function () {
    function az_security_iot_alerts() {
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
    az_security_iot_alerts["delete"] = function (name, resourceGroup, solutionName) {
        return new az_security_iot_alerts_delete_command_builder("az security iot-alerts delete", 'az_security_iot_alerts_delete_command_result', name, resourceGroup, solutionName);
    };
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
    az_security_iot_alerts.list = function (resourceGroup, solutionName) {
        return new az_security_iot_alerts_list_command_builder("az security iot-alerts list", 'az_security_iot_alerts_list_command_result', resourceGroup, solutionName);
    };
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
    az_security_iot_alerts.show = function (name, resourceGroup, solutionName) {
        return new az_security_iot_alerts_show_command_builder("az security iot-alerts show", 'az_security_iot_alerts_show_command_result', name, resourceGroup, solutionName);
    };
    return az_security_iot_alerts;
}());
exports.az_security_iot_alerts = az_security_iot_alerts;
/** View IoT Security Analytics metrics. */
var az_security_iot_analytics = /** @class */ (function () {
    function az_security_iot_analytics() {
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
    az_security_iot_analytics.list = function (resourceGroup, solutionName) {
        return new az_security_iot_analytics_list_command_builder("az security iot-analytics list", 'az_security_iot_analytics_list_command_result', resourceGroup, solutionName);
    };
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
    az_security_iot_analytics.show = function (resourceGroup, solutionName) {
        return new az_security_iot_analytics_show_command_builder("az security iot-analytics show", 'az_security_iot_analytics_show_command_result', resourceGroup, solutionName);
    };
    return az_security_iot_analytics;
}());
exports.az_security_iot_analytics = az_security_iot_analytics;
/** View IoT Security aggregated recommendations. */
var az_security_iot_recommendations = /** @class */ (function () {
    function az_security_iot_recommendations() {
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
    az_security_iot_recommendations.list = function (resourceGroup, solutionName) {
        return new az_security_iot_recommendations_list_command_builder("az security iot-recommendations list", 'az_security_iot_recommendations_list_command_result', resourceGroup, solutionName);
    };
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
    az_security_iot_recommendations.show = function (name, resourceGroup, solutionName) {
        return new az_security_iot_recommendations_show_command_builder("az security iot-recommendations show", 'az_security_iot_recommendations_show_command_result', name, resourceGroup, solutionName);
    };
    return az_security_iot_recommendations;
}());
exports.az_security_iot_recommendations = az_security_iot_recommendations;
/** Manage your IoT Security solution. */
var az_security_iot_solution = /** @class */ (function () {
    function az_security_iot_solution() {
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
    az_security_iot_solution.create = function (displayName, iotHubs, location, resourceGroup, solutionName) {
        return new az_security_iot_solution_create_command_builder("az security iot-solution create", 'az_security_iot_solution_create_command_result', displayName, iotHubs, location, resourceGroup, solutionName);
    };
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
    az_security_iot_solution["delete"] = function (resourceGroup, solutionName) {
        return new az_security_iot_solution_delete_command_builder("az security iot-solution delete", 'az_security_iot_solution_delete_command_result', resourceGroup, solutionName);
    };
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
    az_security_iot_solution.list = function () {
        return new az_security_iot_solution_list_command_builder("az security iot-solution list", 'az_security_iot_solution_list_command_result');
    };
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
    az_security_iot_solution.show = function (resourceGroup, solutionName) {
        return new az_security_iot_solution_show_command_builder("az security iot-solution show", 'az_security_iot_solution_show_command_result', resourceGroup, solutionName);
    };
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
    az_security_iot_solution.update = function (resourceGroup, solutionName) {
        return new az_security_iot_solution_update_command_builder("az security iot-solution update", 'az_security_iot_solution_update_command_result', resourceGroup, solutionName);
    };
    return az_security_iot_solution;
}());
exports.az_security_iot_solution = az_security_iot_solution;
/** Manage your Just in Time network access policies. */
var az_security_jit_policy = /** @class */ (function () {
    function az_security_jit_policy() {
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
    az_security_jit_policy.list = function () {
        return new az_security_jit_policy_list_command_builder("az security jit-policy list", 'az_security_jit_policy_list_command_result');
    };
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
    az_security_jit_policy.show = function (location, name, resourceGroup) {
        return new az_security_jit_policy_show_command_builder("az security jit-policy show", 'az_security_jit_policy_show_command_result', location, name, resourceGroup);
    };
    return az_security_jit_policy;
}());
exports.az_security_jit_policy = az_security_jit_policy;
/** Shows the Azure Security Center Home region location. */
var az_security_location = /** @class */ (function () {
    function az_security_location() {
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
    az_security_location.list = function () {
        return new az_security_location_list_command_builder("az security location list", 'az_security_location_list_command_result');
    };
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
    az_security_location.show = function (name) {
        return new az_security_location_show_command_builder("az security location show", 'az_security_location_show_command_result', name);
    };
    return az_security_location;
}());
exports.az_security_location = az_security_location;
/** Enables managing the Azure Defender plan for the subscription. */
var az_security_pricing = /** @class */ (function () {
    function az_security_pricing() {
    }
    /**
     * Updates the Azure defender plan for the subscription.
     *
     * Syntax:
     * ```
     * az security pricing create --name
     *                            --tier
     *                            [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     * @param {string} tier Pricing tier type.
     */
    az_security_pricing.create = function (name, tier) {
        return new az_security_pricing_create_command_builder("az security pricing create", 'az_security_pricing_create_command_result', name, tier);
    };
    /**
     * Shows the Azure Defender plans for the subscription.
     *
     * Syntax:
     * ```
     * az security pricing list [--query-examples]
     *                          [--subscription]
     * ```
     */
    az_security_pricing.list = function () {
        return new az_security_pricing_list_command_builder("az security pricing list", 'az_security_pricing_list_command_result');
    };
    /**
     * Shows the Azure Defender plan for the subscription.
     *
     * Syntax:
     * ```
     * az security pricing show --name
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} name Name of the resource to be fetched.
     */
    az_security_pricing.show = function (name) {
        return new az_security_pricing_show_command_builder("az security pricing show", 'az_security_pricing_show_command_result', name);
    };
    return az_security_pricing;
}());
exports.az_security_pricing = az_security_pricing;
/** Regulatory compliance assessments. */
var az_security_regulatory_compliance_assessments = /** @class */ (function () {
    function az_security_regulatory_compliance_assessments() {
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
    az_security_regulatory_compliance_assessments.list = function (controlName, standardName) {
        return new az_security_regulatory_compliance_assessments_list_command_builder("az security regulatory-compliance-assessments list", 'az_security_regulatory_compliance_assessments_list_command_result', controlName, standardName);
    };
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
    az_security_regulatory_compliance_assessments.show = function (controlName, name, standardName) {
        return new az_security_regulatory_compliance_assessments_show_command_builder("az security regulatory-compliance-assessments show", 'az_security_regulatory_compliance_assessments_show_command_result', controlName, name, standardName);
    };
    return az_security_regulatory_compliance_assessments;
}());
exports.az_security_regulatory_compliance_assessments = az_security_regulatory_compliance_assessments;
/** Regulatory compliance controls. */
var az_security_regulatory_compliance_controls = /** @class */ (function () {
    function az_security_regulatory_compliance_controls() {
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
    az_security_regulatory_compliance_controls.list = function (standardName) {
        return new az_security_regulatory_compliance_controls_list_command_builder("az security regulatory-compliance-controls list", 'az_security_regulatory_compliance_controls_list_command_result', standardName);
    };
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
    az_security_regulatory_compliance_controls.show = function (name, standardName) {
        return new az_security_regulatory_compliance_controls_show_command_builder("az security regulatory-compliance-controls show", 'az_security_regulatory_compliance_controls_show_command_result', name, standardName);
    };
    return az_security_regulatory_compliance_controls;
}());
exports.az_security_regulatory_compliance_controls = az_security_regulatory_compliance_controls;
/** Regulatory compliance standards. */
var az_security_regulatory_compliance_standards = /** @class */ (function () {
    function az_security_regulatory_compliance_standards() {
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
    az_security_regulatory_compliance_standards.list = function () {
        return new az_security_regulatory_compliance_standards_list_command_builder("az security regulatory-compliance-standards list", 'az_security_regulatory_compliance_standards_list_command_result');
    };
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
    az_security_regulatory_compliance_standards.show = function (name) {
        return new az_security_regulatory_compliance_standards_show_command_builder("az security regulatory-compliance-standards show", 'az_security_regulatory_compliance_standards_show_command_result', name);
    };
    return az_security_regulatory_compliance_standards;
}());
exports.az_security_regulatory_compliance_standards = az_security_regulatory_compliance_standards;
/** View your security settings. */
var az_security_setting = /** @class */ (function () {
    function az_security_setting() {
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
    az_security_setting.list = function () {
        return new az_security_setting_list_command_builder("az security setting list", 'az_security_setting_list_command_result');
    };
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
    az_security_setting.show = function (name) {
        return new az_security_setting_show_command_builder("az security setting show", 'az_security_setting_show_command_result', name);
    };
    return az_security_setting;
}());
exports.az_security_setting = az_security_setting;
/** View your security sub assessments. */
var az_security_sub_assessment = /** @class */ (function () {
    function az_security_sub_assessment() {
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
    az_security_sub_assessment.list = function () {
        return new az_security_sub_assessment_list_command_builder("az security sub-assessment list", 'az_security_sub_assessment_list_command_result');
    };
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
    az_security_sub_assessment.show = function (assessmentName, name) {
        return new az_security_sub_assessment_show_command_builder("az security sub-assessment show", 'az_security_sub_assessment_show_command_result', assessmentName, name);
    };
    return az_security_sub_assessment;
}());
exports.az_security_sub_assessment = az_security_sub_assessment;
/** View security tasks (recommendations). */
var az_security_task = /** @class */ (function () {
    function az_security_task() {
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
    az_security_task.list = function () {
        return new az_security_task_list_command_builder("az security task list", 'az_security_task_list_command_result');
    };
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
    az_security_task.show = function (name) {
        return new az_security_task_show_command_builder("az security task show", 'az_security_task_show_command_result', name);
    };
    return az_security_task;
}());
exports.az_security_task = az_security_task;
/** Shows the network topology in your subscription. */
var az_security_topology = /** @class */ (function () {
    function az_security_topology() {
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
    az_security_topology.list = function () {
        return new az_security_topology_list_command_builder("az security topology list", 'az_security_topology_list_command_result');
    };
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
    az_security_topology.show = function (name, resourceGroup) {
        return new az_security_topology_show_command_builder("az security topology show", 'az_security_topology_show_command_result', name, resourceGroup);
    };
    return az_security_topology;
}());
exports.az_security_topology = az_security_topology;
/** Shows the workspace settings in your subscription - these settings let you control which workspace will hold your security data. */
var az_security_workspace_setting = /** @class */ (function () {
    function az_security_workspace_setting() {
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
    az_security_workspace_setting.create = function (name, targetWorkspace) {
        return new az_security_workspace_setting_create_command_builder("az security workspace-setting create", 'az_security_workspace_setting_create_command_result', name, targetWorkspace);
    };
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
    az_security_workspace_setting["delete"] = function (name) {
        return new az_security_workspace_setting_delete_command_builder("az security workspace-setting delete", 'az_security_workspace_setting_delete_command_result', name);
    };
    /**
     * Shows the workspace settings in your subscription - these settings let you control which workspace will hold your security data.
     *
     * Syntax:
     * ```
     * az security workspace-setting list [--query-examples]
     *                                    [--subscription]
     * ```
     */
    az_security_workspace_setting.list = function () {
        return new az_security_workspace_setting_list_command_builder("az security workspace-setting list", 'az_security_workspace_setting_list_command_result');
    };
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
    az_security_workspace_setting.show = function (name) {
        return new az_security_workspace_setting_show_command_builder("az security workspace-setting show", 'az_security_workspace_setting_show_command_result', name);
    };
    return az_security_workspace_setting;
}());
exports.az_security_workspace_setting = az_security_workspace_setting;
/** Manage your security posture with Azure Security Center. */
var az_security = /** @class */ (function () {
    function az_security() {
    }
    return az_security;
}());
exports.az_security = az_security;
/**
 * Adaptive Application Controls - List.
 *
 * Syntax:
 * ```
 * az security adaptive-application-controls list [--query-examples]
 *                                                [--subscription]
 * ```
 */
var az_security_adaptive_application_controls_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_adaptive_application_controls_list_command_builder, _super);
    function az_security_adaptive_application_controls_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_adaptive_application_controls_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_adaptive_application_controls_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_adaptive_application_controls_list_command_builder;
}(base_1.CommandBuilder));
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
var az_security_adaptive_application_controls_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_adaptive_application_controls_show_command_builder, _super);
    function az_security_adaptive_application_controls_show_command_builder(commandPath, resultDataTypeName, groupName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.groupName(groupName);
        return _this;
    }
    /** Name of an application control VM/server group. */
    az_security_adaptive_application_controls_show_command_builder.prototype.groupName = function (value) {
        this.setFlag("--group-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_adaptive_application_controls_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_adaptive_application_controls_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_adaptive_application_controls_show_command_builder;
}(base_1.CommandBuilder));
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
var az_security_adaptive_network_hardenings_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_adaptive_network_hardenings_list_command_builder, _super);
    function az_security_adaptive_network_hardenings_list_command_builder(commandPath, resultDataTypeName, resourceGroup, resourceName, resourceNamespace, resourceType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.resourceName(resourceName);
        _this.resourceNamespace(resourceNamespace);
        _this.resourceType(resourceType);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_adaptive_network_hardenings_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the resource. */
    az_security_adaptive_network_hardenings_list_command_builder.prototype.resourceName = function (value) {
        this.setFlag("--resource-name", value);
        return this;
    };
    /** The Namespace of the resource. */
    az_security_adaptive_network_hardenings_list_command_builder.prototype.resourceNamespace = function (value) {
        this.setFlag("--resource-namespace", value);
        return this;
    };
    /** The type of the resource. */
    az_security_adaptive_network_hardenings_list_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_adaptive_network_hardenings_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_adaptive_network_hardenings_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_adaptive_network_hardenings_list_command_builder;
}(base_1.CommandBuilder));
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
var az_security_adaptive_network_hardenings_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_adaptive_network_hardenings_show_command_builder, _super);
    function az_security_adaptive_network_hardenings_show_command_builder(commandPath, resultDataTypeName, adaptiveNetworkHardeningsResourceName, resourceGroup, resourceName, resourceNamespace, resourceType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.adaptiveNetworkHardeningsResourceName(adaptiveNetworkHardeningsResourceName);
        _this.resourceGroup(resourceGroup);
        _this.resourceName(resourceName);
        _this.resourceNamespace(resourceNamespace);
        _this.resourceType(resourceType);
        return _this;
    }
    /** Adaptive Network Hardening resource name. */
    az_security_adaptive_network_hardenings_show_command_builder.prototype.adaptiveNetworkHardeningsResourceName = function (value) {
        this.setFlag("--adaptive-network-hardenings-resource-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_adaptive_network_hardenings_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the resource. */
    az_security_adaptive_network_hardenings_show_command_builder.prototype.resourceName = function (value) {
        this.setFlag("--resource-name", value);
        return this;
    };
    /** The Namespace of the resource. */
    az_security_adaptive_network_hardenings_show_command_builder.prototype.resourceNamespace = function (value) {
        this.setFlag("--resource-namespace", value);
        return this;
    };
    /** The type of the resource. */
    az_security_adaptive_network_hardenings_show_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_adaptive_network_hardenings_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_adaptive_network_hardenings_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_adaptive_network_hardenings_show_command_builder;
}(base_1.CommandBuilder));
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
var az_security_alert_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_alert_list_command_builder, _super);
    function az_security_alert_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Location of the resource. */
    az_security_alert_list_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_alert_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_alert_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_alert_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_alert_list_command_builder;
}(base_1.CommandBuilder));
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
var az_security_alert_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_alert_show_command_builder, _super);
    function az_security_alert_show_command_builder(commandPath, resultDataTypeName, location, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.name(name);
        return _this;
    }
    /** Location of the resource. */
    az_security_alert_show_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the resource to be fetched. */
    az_security_alert_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_alert_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_alert_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_alert_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_alert_show_command_builder;
}(base_1.CommandBuilder));
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
var az_security_alert_update_command_builder = /** @class */ (function (_super) {
    __extends(az_security_alert_update_command_builder, _super);
    function az_security_alert_update_command_builder(commandPath, resultDataTypeName, location, name, status) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.name(name);
        _this.status(status);
        return _this;
    }
    /** Location of the resource. */
    az_security_alert_update_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the resource to be fetched. */
    az_security_alert_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Target status of the alert. possible values are "dismiss" and "activate". */
    az_security_alert_update_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_alert_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_alert_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_alert_update_command_builder;
}(base_1.CommandBuilder));
/**
 * List of all possible traffic between resources for the subscription.
 *
 * Syntax:
 * ```
 * az security allowed_connections list [--query-examples]
 *                                      [--subscription]
 * ```
 */
var az_security_allowed_connections_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_allowed_connections_list_command_builder, _super);
    function az_security_allowed_connections_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_allowed_connections_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_allowed_connections_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_allowed_connections_list_command_builder;
}(base_1.CommandBuilder));
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
var az_security_allowed_connections_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_allowed_connections_show_command_builder, _super);
    function az_security_allowed_connections_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_allowed_connections_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_allowed_connections_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_allowed_connections_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_allowed_connections_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_allowed_connections_show_command_builder;
}(base_1.CommandBuilder));
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
var az_security_assessment_metadata_create_command_builder = /** @class */ (function (_super) {
    __extends(az_security_assessment_metadata_create_command_builder, _super);
    function az_security_assessment_metadata_create_command_builder(commandPath, resultDataTypeName, description, displayName, name, severity) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.description(description);
        _this.displayName(displayName);
        _this.name(name);
        _this.severity(severity);
        return _this;
    }
    /** Detailed string that will help users to understand the assessment and how it is calculated. */
    az_security_assessment_metadata_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Human readable title for this object. */
    az_security_assessment_metadata_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Name of the resource to be fetched. */
    az_security_assessment_metadata_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Indicates the importance of the security risk if the assessment is unhealthy. */
    az_security_assessment_metadata_create_command_builder.prototype.severity = function (value) {
        this.setFlag("--severity", value);
        return this;
    };
    /** Detailed string that will help users to understand the different ways to mitigate or fix the security issue. */
    az_security_assessment_metadata_create_command_builder.prototype.remediationDescription = function (value) {
        this.setFlag("--remediation-description", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_assessment_metadata_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_assessment_metadata_create_command_builder;
}(base_1.CommandBuilder));
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
var az_security_assessment_metadata_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_security_assessment_metadata_delete_command_builder, _super);
    function az_security_assessment_metadata_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_assessment_metadata_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_assessment_metadata_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_assessment_metadata_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all security assessment results.
 *
 * Syntax:
 * ```
 * az security assessment-metadata list [--query-examples]
 *                                      [--subscription]
 * ```
 */
var az_security_assessment_metadata_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_assessment_metadata_list_command_builder, _super);
    function az_security_assessment_metadata_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_assessment_metadata_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_assessment_metadata_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_assessment_metadata_list_command_builder;
}(base_1.CommandBuilder));
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
var az_security_assessment_metadata_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_assessment_metadata_show_command_builder, _super);
    function az_security_assessment_metadata_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_assessment_metadata_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_assessment_metadata_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_assessment_metadata_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_assessment_metadata_show_command_builder;
}(base_1.CommandBuilder));
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
var az_security_assessment_create_command_builder = /** @class */ (function (_super) {
    __extends(az_security_assessment_create_command_builder, _super);
    function az_security_assessment_create_command_builder(commandPath, resultDataTypeName, name, statusCode) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.statusCode(statusCode);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_assessment_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Progremmatic code for the result of the assessment. can be "Healthy", "Unhealthy" or "NotApplicable". */
    az_security_assessment_create_command_builder.prototype.statusCode = function (value) {
        this.setFlag("--status-code", value);
        return this;
    };
    /** Data that is attached to the assessment result for better investigations or status clarity. */
    az_security_assessment_create_command_builder.prototype.additionalData = function (value) {
        this.setFlag("--additional-data", value);
        return this;
    };
    /** The target resource for this assessment. */
    az_security_assessment_create_command_builder.prototype.assessedResourceId = function (value) {
        this.setFlag("--assessed-resource-id", value);
        return this;
    };
    /** Progremmatic code for the cause of the assessment result. */
    az_security_assessment_create_command_builder.prototype.statusCause = function (value) {
        this.setFlag("--status-cause", value);
        return this;
    };
    /** Human readable description of the cause of the assessment result. */
    az_security_assessment_create_command_builder.prototype.statusDescription = function (value) {
        this.setFlag("--status-description", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_assessment_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_assessment_create_command_builder;
}(base_1.CommandBuilder));
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
var az_security_assessment_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_security_assessment_delete_command_builder, _super);
    function az_security_assessment_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_assessment_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The target resource for this assessment. */
    az_security_assessment_delete_command_builder.prototype.assessedResourceId = function (value) {
        this.setFlag("--assessed-resource-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_assessment_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_assessment_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all security assessment results.
 *
 * Syntax:
 * ```
 * az security assessment list [--query-examples]
 *                             [--subscription]
 * ```
 */
var az_security_assessment_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_assessment_list_command_builder, _super);
    function az_security_assessment_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_assessment_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_assessment_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_assessment_list_command_builder;
}(base_1.CommandBuilder));
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
var az_security_assessment_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_assessment_show_command_builder, _super);
    function az_security_assessment_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_assessment_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The target resource for this assessment. */
    az_security_assessment_show_command_builder.prototype.assessedResourceId = function (value) {
        this.setFlag("--assessed-resource-id", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_assessment_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_assessment_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_assessment_show_command_builder;
}(base_1.CommandBuilder));
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
var az_security_atp_storage_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_atp_storage_show_command_builder, _super);
    function az_security_atp_storage_show_command_builder(commandPath, resultDataTypeName, resourceGroup, storageAccount) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.storageAccount(storageAccount);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_atp_storage_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of an existing storage account. */
    az_security_atp_storage_show_command_builder.prototype.storageAccount = function (value) {
        this.setFlag("--storage-account", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_atp_storage_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_atp_storage_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_atp_storage_show_command_builder;
}(base_1.CommandBuilder));
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
var az_security_atp_storage_update_command_builder = /** @class */ (function (_super) {
    __extends(az_security_atp_storage_update_command_builder, _super);
    function az_security_atp_storage_update_command_builder(commandPath, resultDataTypeName, isEnabled, resourceGroup, storageAccount) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.isEnabled(isEnabled);
        _this.resourceGroup(resourceGroup);
        _this.storageAccount(storageAccount);
        return _this;
    }
    /** Enable or disable Advanced Threat Protection for a received storage account. */
    az_security_atp_storage_update_command_builder.prototype.isEnabled = function (value) {
        this.setFlag("--is-enabled", value.toString());
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_atp_storage_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of an existing storage account. */
    az_security_atp_storage_update_command_builder.prototype.storageAccount = function (value) {
        this.setFlag("--storage-account", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_atp_storage_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_atp_storage_update_command_builder;
}(base_1.CommandBuilder));
/**
 * List the auto provisioning settings.
 *
 * Syntax:
 * ```
 * az security auto-provisioning-setting list [--query-examples]
 *                                            [--subscription]
 * ```
 */
var az_security_auto_provisioning_setting_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_auto_provisioning_setting_list_command_builder, _super);
    function az_security_auto_provisioning_setting_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_auto_provisioning_setting_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_auto_provisioning_setting_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_auto_provisioning_setting_list_command_builder;
}(base_1.CommandBuilder));
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
var az_security_auto_provisioning_setting_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_auto_provisioning_setting_show_command_builder, _super);
    function az_security_auto_provisioning_setting_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_auto_provisioning_setting_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_auto_provisioning_setting_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_auto_provisioning_setting_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_auto_provisioning_setting_show_command_builder;
}(base_1.CommandBuilder));
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
var az_security_auto_provisioning_setting_update_command_builder = /** @class */ (function (_super) {
    __extends(az_security_auto_provisioning_setting_update_command_builder, _super);
    function az_security_auto_provisioning_setting_update_command_builder(commandPath, resultDataTypeName, autoProvision, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.autoProvision(autoProvision);
        _this.name(name);
        return _this;
    }
    /** Automatic provisioning toggle. possible values are "On" or "Off". */
    az_security_auto_provisioning_setting_update_command_builder.prototype.autoProvision = function (value) {
        this.setFlag("--auto-provision", value);
        return this;
    };
    /** Name of the resource to be fetched. */
    az_security_auto_provisioning_setting_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_auto_provisioning_setting_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_auto_provisioning_setting_update_command_builder;
}(base_1.CommandBuilder));
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
var az_security_contact_create_command_builder = /** @class */ (function (_super) {
    __extends(az_security_contact_create_command_builder, _super);
    function az_security_contact_create_command_builder(commandPath, resultDataTypeName, email, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.email(email);
        _this.name(name);
        return _this;
    }
    /** E-mail of the security contact. */
    az_security_contact_create_command_builder.prototype.email = function (value) {
        this.setFlag("--email", value);
        return this;
    };
    /** Name of the resource to be fetched. */
    az_security_contact_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Whether to send mail notifications to the security contacts. */
    az_security_contact_create_command_builder.prototype.alertNotifications = function (value) {
        this.setFlag("--alert-notifications", value);
        return this;
    };
    /** Whether to send mail notifications to the subscription administrators. */
    az_security_contact_create_command_builder.prototype.alertsAdmins = function (value) {
        this.setFlag("--alerts-admins", value);
        return this;
    };
    /** Phone of the security contact. */
    az_security_contact_create_command_builder.prototype.phone = function (value) {
        this.setFlag("--phone", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_contact_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_contact_create_command_builder;
}(base_1.CommandBuilder));
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
var az_security_contact_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_security_contact_delete_command_builder, _super);
    function az_security_contact_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_contact_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_contact_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_contact_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List security contact.
 *
 * Syntax:
 * ```
 * az security contact list [--query-examples]
 *                          [--subscription]
 * ```
 */
var az_security_contact_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_contact_list_command_builder, _super);
    function az_security_contact_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_contact_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_contact_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_contact_list_command_builder;
}(base_1.CommandBuilder));
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
var az_security_contact_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_contact_show_command_builder, _super);
    function az_security_contact_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_contact_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_contact_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_contact_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_contact_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List the discovered security solutions.
 *
 * Syntax:
 * ```
 * az security discovered-security-solution list [--query-examples]
 *                                               [--subscription]
 * ```
 */
var az_security_discovered_security_solution_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_discovered_security_solution_list_command_builder, _super);
    function az_security_discovered_security_solution_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_discovered_security_solution_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_discovered_security_solution_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_discovered_security_solution_list_command_builder;
}(base_1.CommandBuilder));
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
var az_security_discovered_security_solution_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_discovered_security_solution_show_command_builder, _super);
    function az_security_discovered_security_solution_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_discovered_security_solution_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_discovered_security_solution_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_discovered_security_solution_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_discovered_security_solution_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_discovered_security_solution_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List the external security solutions.
 *
 * Syntax:
 * ```
 * az security external-security-solution list [--query-examples]
 *                                             [--subscription]
 * ```
 */
var az_security_external_security_solution_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_external_security_solution_list_command_builder, _super);
    function az_security_external_security_solution_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_external_security_solution_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_external_security_solution_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_external_security_solution_list_command_builder;
}(base_1.CommandBuilder));
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
var az_security_external_security_solution_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_external_security_solution_show_command_builder, _super);
    function az_security_external_security_solution_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_external_security_solution_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_external_security_solution_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_external_security_solution_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_external_security_solution_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_external_security_solution_show_command_builder;
}(base_1.CommandBuilder));
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
var az_security_iot_alerts_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_security_iot_alerts_delete_command_builder, _super);
    function az_security_iot_alerts_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup, solutionName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.solutionName(solutionName);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_iot_alerts_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_iot_alerts_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the IoT Security solution. */
    az_security_iot_alerts_delete_command_builder.prototype.solutionName = function (value) {
        this.setFlag("--solution-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_iot_alerts_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_iot_alerts_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_security_iot_alerts_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_iot_alerts_list_command_builder, _super);
    function az_security_iot_alerts_list_command_builder(commandPath, resultDataTypeName, resourceGroup, solutionName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.solutionName(solutionName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_iot_alerts_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the IoT Security solution. */
    az_security_iot_alerts_list_command_builder.prototype.solutionName = function (value) {
        this.setFlag("--solution-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_iot_alerts_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_iot_alerts_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_iot_alerts_list_command_builder;
}(base_1.CommandBuilder));
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
var az_security_iot_alerts_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_iot_alerts_show_command_builder, _super);
    function az_security_iot_alerts_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup, solutionName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.solutionName(solutionName);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_iot_alerts_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_iot_alerts_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the IoT Security solution. */
    az_security_iot_alerts_show_command_builder.prototype.solutionName = function (value) {
        this.setFlag("--solution-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_iot_alerts_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_iot_alerts_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_iot_alerts_show_command_builder;
}(base_1.CommandBuilder));
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
var az_security_iot_analytics_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_iot_analytics_list_command_builder, _super);
    function az_security_iot_analytics_list_command_builder(commandPath, resultDataTypeName, resourceGroup, solutionName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.solutionName(solutionName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_iot_analytics_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the IoT Security solution. */
    az_security_iot_analytics_list_command_builder.prototype.solutionName = function (value) {
        this.setFlag("--solution-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_iot_analytics_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_iot_analytics_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_iot_analytics_list_command_builder;
}(base_1.CommandBuilder));
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
var az_security_iot_analytics_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_iot_analytics_show_command_builder, _super);
    function az_security_iot_analytics_show_command_builder(commandPath, resultDataTypeName, resourceGroup, solutionName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.solutionName(solutionName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_iot_analytics_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the IoT Security solution. */
    az_security_iot_analytics_show_command_builder.prototype.solutionName = function (value) {
        this.setFlag("--solution-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_iot_analytics_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_iot_analytics_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_iot_analytics_show_command_builder;
}(base_1.CommandBuilder));
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
var az_security_iot_recommendations_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_iot_recommendations_list_command_builder, _super);
    function az_security_iot_recommendations_list_command_builder(commandPath, resultDataTypeName, resourceGroup, solutionName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.solutionName(solutionName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_iot_recommendations_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the IoT Security solution. */
    az_security_iot_recommendations_list_command_builder.prototype.solutionName = function (value) {
        this.setFlag("--solution-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_iot_recommendations_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_iot_recommendations_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_iot_recommendations_list_command_builder;
}(base_1.CommandBuilder));
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
var az_security_iot_recommendations_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_iot_recommendations_show_command_builder, _super);
    function az_security_iot_recommendations_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup, solutionName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.solutionName(solutionName);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_iot_recommendations_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_iot_recommendations_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the IoT Security solution. */
    az_security_iot_recommendations_show_command_builder.prototype.solutionName = function (value) {
        this.setFlag("--solution-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_iot_recommendations_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_iot_recommendations_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_iot_recommendations_show_command_builder;
}(base_1.CommandBuilder));
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
var az_security_iot_solution_create_command_builder = /** @class */ (function (_super) {
    __extends(az_security_iot_solution_create_command_builder, _super);
    function az_security_iot_solution_create_command_builder(commandPath, resultDataTypeName, displayName, iotHubs, location, resourceGroup, solutionName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.displayName(displayName);
        _this.iotHubs(iotHubs);
        _this.location(location);
        _this.resourceGroup(resourceGroup);
        _this.solutionName(solutionName);
        return _this;
    }
    /** Resource display name. */
    az_security_iot_solution_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** IoT Hub resource IDs. */
    az_security_iot_solution_create_command_builder.prototype.iotHubs = function (value) {
        this.setFlag("--iot-hubs", value);
        return this;
    };
    /** Location of the resource. */
    az_security_iot_solution_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_iot_solution_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the IoT Security solution. */
    az_security_iot_solution_create_command_builder.prototype.solutionName = function (value) {
        this.setFlag("--solution-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_iot_solution_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_iot_solution_create_command_builder;
}(base_1.CommandBuilder));
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
var az_security_iot_solution_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_security_iot_solution_delete_command_builder, _super);
    function az_security_iot_solution_delete_command_builder(commandPath, resultDataTypeName, resourceGroup, solutionName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.solutionName(solutionName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_iot_solution_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the IoT Security solution. */
    az_security_iot_solution_delete_command_builder.prototype.solutionName = function (value) {
        this.setFlag("--solution-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_iot_solution_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_iot_solution_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_security_iot_solution_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_iot_solution_list_command_builder, _super);
    function az_security_iot_solution_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_iot_solution_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_iot_solution_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_iot_solution_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_iot_solution_list_command_builder;
}(base_1.CommandBuilder));
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
var az_security_iot_solution_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_iot_solution_show_command_builder, _super);
    function az_security_iot_solution_show_command_builder(commandPath, resultDataTypeName, resourceGroup, solutionName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.solutionName(solutionName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_iot_solution_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the IoT Security solution. */
    az_security_iot_solution_show_command_builder.prototype.solutionName = function (value) {
        this.setFlag("--solution-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_iot_solution_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_iot_solution_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_iot_solution_show_command_builder;
}(base_1.CommandBuilder));
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
var az_security_iot_solution_update_command_builder = /** @class */ (function (_super) {
    __extends(az_security_iot_solution_update_command_builder, _super);
    function az_security_iot_solution_update_command_builder(commandPath, resultDataTypeName, resourceGroup, solutionName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.solutionName(solutionName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_iot_solution_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the IoT Security solution. */
    az_security_iot_solution_update_command_builder.prototype.solutionName = function (value) {
        this.setFlag("--solution-name", value);
        return this;
    };
    /** Resource display name. */
    az_security_iot_solution_update_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** IoT Hub resource IDs. */
    az_security_iot_solution_update_command_builder.prototype.iotHubs = function (value) {
        this.setFlag("--iot-hubs", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_iot_solution_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_iot_solution_update_command_builder;
}(base_1.CommandBuilder));
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
var az_security_jit_policy_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_jit_policy_list_command_builder, _super);
    function az_security_jit_policy_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Location of the resource. */
    az_security_jit_policy_list_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_jit_policy_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_jit_policy_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_jit_policy_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_jit_policy_list_command_builder;
}(base_1.CommandBuilder));
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
var az_security_jit_policy_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_jit_policy_show_command_builder, _super);
    function az_security_jit_policy_show_command_builder(commandPath, resultDataTypeName, location, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Location of the resource. */
    az_security_jit_policy_show_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the resource to be fetched. */
    az_security_jit_policy_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_jit_policy_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_jit_policy_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_jit_policy_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_jit_policy_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the Azure Security Center Home region location.
 *
 * Syntax:
 * ```
 * az security location list [--query-examples]
 *                           [--subscription]
 * ```
 */
var az_security_location_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_location_list_command_builder, _super);
    function az_security_location_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_location_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_location_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_location_list_command_builder;
}(base_1.CommandBuilder));
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
var az_security_location_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_location_show_command_builder, _super);
    function az_security_location_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_location_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_location_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_location_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_location_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates the Azure defender plan for the subscription.
 *
 * Syntax:
 * ```
 * az security pricing create --name
 *                            --tier
 *                            [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 * @param {string} tier Pricing tier type.
 */
var az_security_pricing_create_command_builder = /** @class */ (function (_super) {
    __extends(az_security_pricing_create_command_builder, _super);
    function az_security_pricing_create_command_builder(commandPath, resultDataTypeName, name, tier) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.tier(tier);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_pricing_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Pricing tier type. */
    az_security_pricing_create_command_builder.prototype.tier = function (value) {
        this.setFlag("--tier", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_pricing_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_pricing_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the Azure Defender plans for the subscription.
 *
 * Syntax:
 * ```
 * az security pricing list [--query-examples]
 *                          [--subscription]
 * ```
 */
var az_security_pricing_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_pricing_list_command_builder, _super);
    function az_security_pricing_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_pricing_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_pricing_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_pricing_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the Azure Defender plan for the subscription.
 *
 * Syntax:
 * ```
 * az security pricing show --name
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} name Name of the resource to be fetched.
 */
var az_security_pricing_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_pricing_show_command_builder, _super);
    function az_security_pricing_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_pricing_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_pricing_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_pricing_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_pricing_show_command_builder;
}(base_1.CommandBuilder));
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
var az_security_regulatory_compliance_assessments_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_regulatory_compliance_assessments_list_command_builder, _super);
    function az_security_regulatory_compliance_assessments_list_command_builder(commandPath, resultDataTypeName, controlName, standardName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.controlName(controlName);
        _this.standardName(standardName);
        return _this;
    }
    /** The compliance control name. */
    az_security_regulatory_compliance_assessments_list_command_builder.prototype.controlName = function (value) {
        this.setFlag("--control-name", value);
        return this;
    };
    /** The compliance standard name. */
    az_security_regulatory_compliance_assessments_list_command_builder.prototype.standardName = function (value) {
        this.setFlag("--standard-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_regulatory_compliance_assessments_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_regulatory_compliance_assessments_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_regulatory_compliance_assessments_list_command_builder;
}(base_1.CommandBuilder));
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
var az_security_regulatory_compliance_assessments_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_regulatory_compliance_assessments_show_command_builder, _super);
    function az_security_regulatory_compliance_assessments_show_command_builder(commandPath, resultDataTypeName, controlName, name, standardName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.controlName(controlName);
        _this.name(name);
        _this.standardName(standardName);
        return _this;
    }
    /** The compliance control name. */
    az_security_regulatory_compliance_assessments_show_command_builder.prototype.controlName = function (value) {
        this.setFlag("--control-name", value);
        return this;
    };
    /** Name of the resource to be fetched. */
    az_security_regulatory_compliance_assessments_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The compliance standard name. */
    az_security_regulatory_compliance_assessments_show_command_builder.prototype.standardName = function (value) {
        this.setFlag("--standard-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_regulatory_compliance_assessments_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_regulatory_compliance_assessments_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_regulatory_compliance_assessments_show_command_builder;
}(base_1.CommandBuilder));
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
var az_security_regulatory_compliance_controls_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_regulatory_compliance_controls_list_command_builder, _super);
    function az_security_regulatory_compliance_controls_list_command_builder(commandPath, resultDataTypeName, standardName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.standardName(standardName);
        return _this;
    }
    /** The compliance standard name. */
    az_security_regulatory_compliance_controls_list_command_builder.prototype.standardName = function (value) {
        this.setFlag("--standard-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_regulatory_compliance_controls_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_regulatory_compliance_controls_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_regulatory_compliance_controls_list_command_builder;
}(base_1.CommandBuilder));
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
var az_security_regulatory_compliance_controls_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_regulatory_compliance_controls_show_command_builder, _super);
    function az_security_regulatory_compliance_controls_show_command_builder(commandPath, resultDataTypeName, name, standardName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.standardName(standardName);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_regulatory_compliance_controls_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The compliance standard name. */
    az_security_regulatory_compliance_controls_show_command_builder.prototype.standardName = function (value) {
        this.setFlag("--standard-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_regulatory_compliance_controls_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_regulatory_compliance_controls_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_regulatory_compliance_controls_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List supported regulatory compliance standards details and state results.
 *
 * Syntax:
 * ```
 * az security regulatory-compliance-standards list [--query-examples]
 *                                                  [--subscription]
 * ```
 */
var az_security_regulatory_compliance_standards_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_regulatory_compliance_standards_list_command_builder, _super);
    function az_security_regulatory_compliance_standards_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_regulatory_compliance_standards_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_regulatory_compliance_standards_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_regulatory_compliance_standards_list_command_builder;
}(base_1.CommandBuilder));
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
var az_security_regulatory_compliance_standards_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_regulatory_compliance_standards_show_command_builder, _super);
    function az_security_regulatory_compliance_standards_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_regulatory_compliance_standards_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_regulatory_compliance_standards_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_regulatory_compliance_standards_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_regulatory_compliance_standards_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List security settings.
 *
 * Syntax:
 * ```
 * az security setting list [--query-examples]
 *                          [--subscription]
 * ```
 */
var az_security_setting_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_setting_list_command_builder, _super);
    function az_security_setting_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_setting_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_setting_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_setting_list_command_builder;
}(base_1.CommandBuilder));
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
var az_security_setting_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_setting_show_command_builder, _super);
    function az_security_setting_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_setting_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_setting_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_setting_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_setting_show_command_builder;
}(base_1.CommandBuilder));
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
var az_security_sub_assessment_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_sub_assessment_list_command_builder, _super);
    function az_security_sub_assessment_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The target resource for this assessment. */
    az_security_sub_assessment_list_command_builder.prototype.assessedResourceId = function (value) {
        this.setFlag("--assessed-resource-id", value);
        return this;
    };
    /** Name of the assessment resource. */
    az_security_sub_assessment_list_command_builder.prototype.assessmentName = function (value) {
        this.setFlag("--assessment-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_sub_assessment_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_sub_assessment_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_sub_assessment_list_command_builder;
}(base_1.CommandBuilder));
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
var az_security_sub_assessment_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_sub_assessment_show_command_builder, _super);
    function az_security_sub_assessment_show_command_builder(commandPath, resultDataTypeName, assessmentName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.assessmentName(assessmentName);
        _this.name(name);
        return _this;
    }
    /** Name of the assessment resource. */
    az_security_sub_assessment_show_command_builder.prototype.assessmentName = function (value) {
        this.setFlag("--assessment-name", value);
        return this;
    };
    /** Name of the resource to be fetched. */
    az_security_sub_assessment_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The target resource for this assessment. */
    az_security_sub_assessment_show_command_builder.prototype.assessedResourceId = function (value) {
        this.setFlag("--assessed-resource-id", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_sub_assessment_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_sub_assessment_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_sub_assessment_show_command_builder;
}(base_1.CommandBuilder));
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
var az_security_task_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_task_list_command_builder, _super);
    function az_security_task_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_task_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_task_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_task_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_task_list_command_builder;
}(base_1.CommandBuilder));
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
var az_security_task_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_task_show_command_builder, _super);
    function az_security_task_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_task_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_task_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_task_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_task_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_task_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the network topology in your subscription.
 *
 * Syntax:
 * ```
 * az security topology list [--query-examples]
 *                           [--subscription]
 * ```
 */
var az_security_topology_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_topology_list_command_builder, _super);
    function az_security_topology_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_topology_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_topology_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_topology_list_command_builder;
}(base_1.CommandBuilder));
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
var az_security_topology_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_topology_show_command_builder, _super);
    function az_security_topology_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_topology_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_security_topology_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_topology_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_topology_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_topology_show_command_builder;
}(base_1.CommandBuilder));
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
var az_security_workspace_setting_create_command_builder = /** @class */ (function (_super) {
    __extends(az_security_workspace_setting_create_command_builder, _super);
    function az_security_workspace_setting_create_command_builder(commandPath, resultDataTypeName, name, targetWorkspace) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.targetWorkspace(targetWorkspace);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_workspace_setting_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** An ID of the workspace resource that will hold the security data. */
    az_security_workspace_setting_create_command_builder.prototype.targetWorkspace = function (value) {
        this.setFlag("--target-workspace", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_workspace_setting_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_workspace_setting_create_command_builder;
}(base_1.CommandBuilder));
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
var az_security_workspace_setting_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_security_workspace_setting_delete_command_builder, _super);
    function az_security_workspace_setting_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_workspace_setting_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_workspace_setting_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_workspace_setting_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the workspace settings in your subscription - these settings let you control which workspace will hold your security data.
 *
 * Syntax:
 * ```
 * az security workspace-setting list [--query-examples]
 *                                    [--subscription]
 * ```
 */
var az_security_workspace_setting_list_command_builder = /** @class */ (function (_super) {
    __extends(az_security_workspace_setting_list_command_builder, _super);
    function az_security_workspace_setting_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_workspace_setting_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_workspace_setting_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_workspace_setting_list_command_builder;
}(base_1.CommandBuilder));
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
var az_security_workspace_setting_show_command_builder = /** @class */ (function (_super) {
    __extends(az_security_workspace_setting_show_command_builder, _super);
    function az_security_workspace_setting_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the resource to be fetched. */
    az_security_workspace_setting_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_security_workspace_setting_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_security_workspace_setting_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_security_workspace_setting_show_command_builder;
}(base_1.CommandBuilder));
