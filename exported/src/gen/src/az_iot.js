"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_1 = require("../base");
/** Manage IoT Central applications. */
var az_iot_central_app = /** @class */ (function () {
    function az_iot_central_app() {
    }
    /**
     * Create an IoT Central application.
     *
     * Syntax:
     * ```
     * az iot central app create --name
     *                           --resource-group
     *                           --subdomain
     *                           [--display-name]
     *                           [--location]
     *                           [--no-wait]
     *                           [--sku {F1, S1, ST0, ST1, ST2}]
     *                           [--subscription]
     *                           [--template]
     * ```
     *
     * @param {string} name Give your IoT Central app a unique name so you can find it later.This will be used as the resource name in the Azure portal and CLI.Avoid special characters `-` instead, use lower case letters (a-z), numbers (0-9), and dashes (-).
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} subdomain Enter a unique URL. Your app will be accessible via https://<subdomain>.azureiotcentral.com/. Avoid special characters `-` instead, use lower case letters (a-z), numbers (0-9), and dashes (-).
     */
    az_iot_central_app.create = function (name, resourceGroup, subdomain) {
        return new az_iot_central_app_create_command_builder("az iot central app create", 'az_iot_central_app_create_command_result', name, resourceGroup, subdomain);
    };
    /**
     * Delete an IoT Central application.
     *
     * Syntax:
     * ```
     * az iot central app delete --name
     *                           --resource-group
     *                           [--no-wait]
     *                           [--subscription]
     *                           [--yes]
     * ```
     *
     * @param {string} name IoT Central application name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_iot_central_app["delete"] = function (name, resourceGroup) {
        return new az_iot_central_app_delete_command_builder("az iot central app delete", 'az_iot_central_app_delete_command_result', name, resourceGroup);
    };
    /**
     * List IoT Central applications.
     *
     * Syntax:
     * ```
     * az iot central app list [--query-examples]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    az_iot_central_app.list = function () {
        return new az_iot_central_app_list_command_builder("az iot central app list", 'az_iot_central_app_list_command_result');
    };
    /**
     * Get the details of an IoT Central application.
     *
     * Syntax:
     * ```
     * az iot central app show --name
     *                         [--query-examples]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     *
     * @param {string} name IoT Central application name.
     */
    az_iot_central_app.show = function (name) {
        return new az_iot_central_app_show_command_builder("az iot central app show", 'az_iot_central_app_show_command_result', name);
    };
    /**
     * Update metadata for an IoT Central application.
     *
     * Syntax:
     * ```
     * az iot central app update --name
     *                           --resource-group
     *                           [--add]
     *                           [--force-string]
     *                           [--remove]
     *                           [--set]
     *                           [--subscription]
     * ```
     *
     * @param {string} name IoT Central application name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_iot_central_app.update = function (name, resourceGroup) {
        return new az_iot_central_app_update_command_builder("az iot central app update", 'az_iot_central_app_update_command_result', name, resourceGroup);
    };
    return az_iot_central_app;
}());
exports.az_iot_central_app = az_iot_central_app;
/** Manage IoT Central resources. */
var az_iot_central = /** @class */ (function () {
    function az_iot_central() {
    }
    return az_iot_central;
}());
exports.az_iot_central = az_iot_central;
/** Manage Azure IoT Hub Device Provisioning Service access policies. */
var az_iot_dps_access_policy = /** @class */ (function () {
    function az_iot_dps_access_policy() {
    }
    /**
     * Create a new shared access policy in an Azure IoT Hub device provisioning service.
     *
     * Syntax:
     * ```
     * az iot dps access-policy create --access-policy-name
     *                                 --dps-name
     *                                 --resource-group
     *                                 --rights {DeviceConnect, EnrollmentRead, EnrollmentWrite, RegistrationStatusRead, RegistrationStatusWrite, ServiceConfig}
     *                                 [--no-wait]
     *                                 [--primary-key]
     *                                 [--secondary-key]
     *                                 [--subscription]
     * ```
     *
     * @param {string} accessPolicyName A friendly name for DPS access policy.
     * @param {string} dpsName IoT Provisioning Service name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'DeviceConnect' | 'EnrollmentRead' | 'EnrollmentWrite' | 'RegistrationStatusRead' | 'RegistrationStatusWrite' | 'ServiceConfig'} rights Access rights for the IoT provisioning service. Use space-separated list for multiple rights.
     */
    az_iot_dps_access_policy.create = function (accessPolicyName, dpsName, resourceGroup, rights) {
        return new az_iot_dps_access_policy_create_command_builder("az iot dps access-policy create", 'az_iot_dps_access_policy_create_command_result', accessPolicyName, dpsName, resourceGroup, rights);
    };
    /**
     * Delete a shared access policies in an Azure IoT Hub device provisioning service.
     *
     * Syntax:
     * ```
     * az iot dps access-policy delete --access-policy-name
     *                                 --dps-name
     *                                 --resource-group
     *                                 [--no-wait]
     *                                 [--subscription]
     * ```
     *
     * @param {string} accessPolicyName A friendly name for DPS access policy.
     * @param {string} dpsName IoT Provisioning Service name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_iot_dps_access_policy["delete"] = function (accessPolicyName, dpsName, resourceGroup) {
        return new az_iot_dps_access_policy_delete_command_builder("az iot dps access-policy delete", 'az_iot_dps_access_policy_delete_command_result', accessPolicyName, dpsName, resourceGroup);
    };
    /**
     * List all shared access policies in an Azure IoT Hub device provisioning service.
     *
     * Syntax:
     * ```
     * az iot dps access-policy list --dps-name
     *                               --resource-group
     *                               [--query-examples]
     *                               [--subscription]
     * ```
     *
     * @param {string} dpsName IoT Provisioning Service name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_iot_dps_access_policy.list = function (dpsName, resourceGroup) {
        return new az_iot_dps_access_policy_list_command_builder("az iot dps access-policy list", 'az_iot_dps_access_policy_list_command_result', dpsName, resourceGroup);
    };
    /**
     * Show details of a shared access policies in an Azure IoT Hub device provisioning service.
     *
     * Syntax:
     * ```
     * az iot dps access-policy show --access-policy-name
     *                               --dps-name
     *                               --resource-group
     *                               [--query-examples]
     *                               [--subscription]
     * ```
     *
     * @param {string} accessPolicyName A friendly name for DPS access policy.
     * @param {string} dpsName IoT Provisioning Service name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_iot_dps_access_policy.show = function (accessPolicyName, dpsName, resourceGroup) {
        return new az_iot_dps_access_policy_show_command_builder("az iot dps access-policy show", 'az_iot_dps_access_policy_show_command_result', accessPolicyName, dpsName, resourceGroup);
    };
    /**
     * Update a shared access policy in an Azure IoT Hub device provisioning service.
     *
     * Syntax:
     * ```
     * az iot dps access-policy update --access-policy-name
     *                                 --dps-name
     *                                 --resource-group
     *                                 [--no-wait]
     *                                 [--primary-key]
     *                                 [--rights {DeviceConnect, EnrollmentRead, EnrollmentWrite, RegistrationStatusRead, RegistrationStatusWrite, ServiceConfig}]
     *                                 [--secondary-key]
     *                                 [--subscription]
     * ```
     *
     * @param {string} accessPolicyName A friendly name for DPS access policy.
     * @param {string} dpsName IoT Provisioning Service name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_iot_dps_access_policy.update = function (accessPolicyName, dpsName, resourceGroup) {
        return new az_iot_dps_access_policy_update_command_builder("az iot dps access-policy update", 'az_iot_dps_access_policy_update_command_result', accessPolicyName, dpsName, resourceGroup);
    };
    return az_iot_dps_access_policy;
}());
exports.az_iot_dps_access_policy = az_iot_dps_access_policy;
/** Manage Azure IoT Hub Device Provisioning Service certificates. */
var az_iot_dps_certificate = /** @class */ (function () {
    function az_iot_dps_certificate() {
    }
    /**
     * Create/upload an Azure IoT Hub Device Provisioning Service certificate.
     *
     * Syntax:
     * ```
     * az iot dps certificate create --certificate-name
     *                               --dps-name
     *                               --path
     *                               --resource-group
     *                               [--subscription]
     * ```
     *
     * @param {string} certificateName A friendly name for the certificate.
     * @param {string} dpsName IoT Provisioning Service name.
     * @param {string} path The path to the file containing the certificate.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_iot_dps_certificate.create = function (certificateName, dpsName, path, resourceGroup) {
        return new az_iot_dps_certificate_create_command_builder("az iot dps certificate create", 'az_iot_dps_certificate_create_command_result', certificateName, dpsName, path, resourceGroup);
    };
    /**
     * Delete an Azure IoT Hub Device Provisioning Service certificate.
     *
     * Syntax:
     * ```
     * az iot dps certificate delete --certificate-name
     *                               --dps-name
     *                               --etag
     *                               --resource-group
     *                               [--subscription]
     * ```
     *
     * @param {string} certificateName A friendly name for the certificate.
     * @param {string} dpsName IoT Provisioning Service name.
     * @param {string} etag Entity Tag (etag) of the object.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_iot_dps_certificate["delete"] = function (certificateName, dpsName, etag, resourceGroup) {
        return new az_iot_dps_certificate_delete_command_builder("az iot dps certificate delete", 'az_iot_dps_certificate_delete_command_result', certificateName, dpsName, etag, resourceGroup);
    };
    /**
     * Generate a verification code for an Azure IoT Hub Device Provisioning Service certificate.
     *
     * Syntax:
     * ```
     * az iot dps certificate generate-verification-code --certificate-name
     *                                                   --dps-name
     *                                                   --etag
     *                                                   --resource-group
     *                                                   [--subscription]
     * ```
     *
     * @param {string} certificateName A friendly name for the certificate.
     * @param {string} dpsName IoT Provisioning Service name.
     * @param {string} etag Entity Tag (etag) of the object.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_iot_dps_certificate.generate_verification_code = function (certificateName, dpsName, etag, resourceGroup) {
        return new az_iot_dps_certificate_generate_verification_code_command_builder("az iot dps certificate generate-verification-code", 'az_iot_dps_certificate_generate_verification_code_command_result', certificateName, dpsName, etag, resourceGroup);
    };
    /**
     * List all certificates contained within an Azure IoT Hub device provisioning service.
     *
     * Syntax:
     * ```
     * az iot dps certificate list --dps-name
     *                             --resource-group
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     *
     * @param {string} dpsName IoT Provisioning Service name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_iot_dps_certificate.list = function (dpsName, resourceGroup) {
        return new az_iot_dps_certificate_list_command_builder("az iot dps certificate list", 'az_iot_dps_certificate_list_command_result', dpsName, resourceGroup);
    };
    /**
     * Show information about a particular Azure IoT Hub Device Provisioning Service certificate.
     *
     * Syntax:
     * ```
     * az iot dps certificate show --certificate-name
     *                             --dps-name
     *                             --resource-group
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     *
     * @param {string} certificateName A friendly name for the certificate.
     * @param {string} dpsName IoT Provisioning Service name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_iot_dps_certificate.show = function (certificateName, dpsName, resourceGroup) {
        return new az_iot_dps_certificate_show_command_builder("az iot dps certificate show", 'az_iot_dps_certificate_show_command_result', certificateName, dpsName, resourceGroup);
    };
    /**
     * Update an Azure IoT Hub Device Provisioning Service certificate.
     *
     * Syntax:
     * ```
     * az iot dps certificate update --certificate-name
     *                               --dps-name
     *                               --etag
     *                               --path
     *                               --resource-group
     *                               [--subscription]
     * ```
     *
     * @param {string} certificateName A friendly name for the certificate.
     * @param {string} dpsName IoT Provisioning Service name.
     * @param {string} etag Entity Tag (etag) of the object.
     * @param {string} path The path to the file containing the certificate.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_iot_dps_certificate.update = function (certificateName, dpsName, etag, path, resourceGroup) {
        return new az_iot_dps_certificate_update_command_builder("az iot dps certificate update", 'az_iot_dps_certificate_update_command_result', certificateName, dpsName, etag, path, resourceGroup);
    };
    /**
     * Verify an Azure IoT Hub Device Provisioning Service certificate.
     *
     * Syntax:
     * ```
     * az iot dps certificate verify --certificate-name
     *                               --dps-name
     *                               --etag
     *                               --path
     *                               --resource-group
     *                               [--subscription]
     * ```
     *
     * @param {string} certificateName A friendly name for the certificate.
     * @param {string} dpsName IoT Provisioning Service name.
     * @param {string} etag Entity Tag (etag) of the object.
     * @param {string} path The path to the file containing the certificate.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_iot_dps_certificate.verify = function (certificateName, dpsName, etag, path, resourceGroup) {
        return new az_iot_dps_certificate_verify_command_builder("az iot dps certificate verify", 'az_iot_dps_certificate_verify_command_result', certificateName, dpsName, etag, path, resourceGroup);
    };
    return az_iot_dps_certificate;
}());
exports.az_iot_dps_certificate = az_iot_dps_certificate;
/** Manage Azure IoT Hub Device Provisioning Service linked IoT hubs. */
var az_iot_dps_linked_hub = /** @class */ (function () {
    function az_iot_dps_linked_hub() {
    }
    /**
     * Create a linked IoT hub in an Azure IoT Hub device provisioning service.
     *
     * Syntax:
     * ```
     * az iot dps linked-hub create --connection-string
     *                              --dps-name
     *                              --location
     *                              --resource-group
     *                              [--allocation-weight]
     *                              [--apply-allocation-policy {false, true}]
     *                              [--no-wait]
     *                              [--subscription]
     * ```
     *
     * @param {string} connectionString Connection string of the IoT hub.
     * @param {string} dpsName IoT Provisioning Service name.
     * @param {string} location Location of the IoT hub.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_iot_dps_linked_hub.create = function (connectionString, dpsName, location, resourceGroup) {
        return new az_iot_dps_linked_hub_create_command_builder("az iot dps linked-hub create", 'az_iot_dps_linked_hub_create_command_result', connectionString, dpsName, location, resourceGroup);
    };
    /**
     * Update a linked IoT hub in an Azure IoT Hub device provisioning service.
     *
     * Syntax:
     * ```
     * az iot dps linked-hub delete --dps-name
     *                              --linked-hub
     *                              --resource-group
     *                              [--no-wait]
     *                              [--subscription]
     * ```
     *
     * @param {string} dpsName IoT Provisioning Service name.
     * @param {string} linkedHub Host name of linked IoT Hub.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_iot_dps_linked_hub["delete"] = function (dpsName, linkedHub, resourceGroup) {
        return new az_iot_dps_linked_hub_delete_command_builder("az iot dps linked-hub delete", 'az_iot_dps_linked_hub_delete_command_result', dpsName, linkedHub, resourceGroup);
    };
    /**
     * List all linked IoT hubs in an Azure IoT Hub device provisioning service.
     *
     * Syntax:
     * ```
     * az iot dps linked-hub list --dps-name
     *                            --resource-group
     *                            [--query-examples]
     *                            [--subscription]
     * ```
     *
     * @param {string} dpsName IoT Provisioning Service name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_iot_dps_linked_hub.list = function (dpsName, resourceGroup) {
        return new az_iot_dps_linked_hub_list_command_builder("az iot dps linked-hub list", 'az_iot_dps_linked_hub_list_command_result', dpsName, resourceGroup);
    };
    /**
     * Show details of a linked IoT hub in an Azure IoT Hub device provisioning service.
     *
     * Syntax:
     * ```
     * az iot dps linked-hub show --dps-name
     *                            --linked-hub
     *                            --resource-group
     *                            [--query-examples]
     *                            [--subscription]
     * ```
     *
     * @param {string} dpsName IoT Provisioning Service name.
     * @param {string} linkedHub Host name of linked IoT Hub.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_iot_dps_linked_hub.show = function (dpsName, linkedHub, resourceGroup) {
        return new az_iot_dps_linked_hub_show_command_builder("az iot dps linked-hub show", 'az_iot_dps_linked_hub_show_command_result', dpsName, linkedHub, resourceGroup);
    };
    /**
     * Update a linked IoT hub in an Azure IoT Hub device provisioning service.
     *
     * Syntax:
     * ```
     * az iot dps linked-hub update --dps-name
     *                              --linked-hub
     *                              --resource-group
     *                              [--allocation-weight]
     *                              [--apply-allocation-policy {false, true}]
     *                              [--no-wait]
     *                              [--subscription]
     * ```
     *
     * @param {string} dpsName IoT Provisioning Service name.
     * @param {string} linkedHub Host name of linked IoT Hub.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_iot_dps_linked_hub.update = function (dpsName, linkedHub, resourceGroup) {
        return new az_iot_dps_linked_hub_update_command_builder("az iot dps linked-hub update", 'az_iot_dps_linked_hub_update_command_result', dpsName, linkedHub, resourceGroup);
    };
    return az_iot_dps_linked_hub;
}());
exports.az_iot_dps_linked_hub = az_iot_dps_linked_hub;
/** Manage Azure IoT Hub Device Provisioning Service. */
var az_iot_dps = /** @class */ (function () {
    function az_iot_dps() {
    }
    /**
     * Create an Azure IoT Hub device provisioning service.
     *
     * Syntax:
     * ```
     * az iot dps create --name
     *                   --resource-group
     *                   [--location]
     *                   [--sku {S1}]
     *                   [--subscription]
     *                   [--unit]
     * ```
     *
     * @param {string} name IoT Provisioning Service name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_iot_dps.create = function (name, resourceGroup) {
        return new az_iot_dps_create_command_builder("az iot dps create", 'az_iot_dps_create_command_result', name, resourceGroup);
    };
    /**
     * Delete an Azure IoT Hub device provisioning service.
     *
     * Syntax:
     * ```
     * az iot dps delete [--ids]
     *                   [--name]
     *                   [--resource-group]
     *                   [--subscription]
     * ```
     */
    az_iot_dps["delete"] = function () {
        return new az_iot_dps_delete_command_builder("az iot dps delete", 'az_iot_dps_delete_command_result');
    };
    /**
     * List Azure IoT Hub device provisioning services.
     *
     * Syntax:
     * ```
     * az iot dps list [--query-examples]
     *                 [--resource-group]
     *                 [--subscription]
     * ```
     */
    az_iot_dps.list = function () {
        return new az_iot_dps_list_command_builder("az iot dps list", 'az_iot_dps_list_command_result');
    };
    /**
     * Get the details of an Azure IoT Hub device provisioning service.
     *
     * Syntax:
     * ```
     * az iot dps show [--ids]
     *                 [--name]
     *                 [--query-examples]
     *                 [--resource-group]
     *                 [--subscription]
     * ```
     */
    az_iot_dps.show = function () {
        return new az_iot_dps_show_command_builder("az iot dps show", 'az_iot_dps_show_command_result');
    };
    /**
     * Update an Azure IoT Hub device provisioning service.
     *
     * Syntax:
     * ```
     * az iot dps update [--add]
     *                   [--force-string]
     *                   [--ids]
     *                   [--name]
     *                   [--remove]
     *                   [--resource-group]
     *                   [--set]
     *                   [--subscription]
     * ```
     */
    az_iot_dps.update = function () {
        return new az_iot_dps_update_command_builder("az iot dps update", 'az_iot_dps_update_command_result');
    };
    return az_iot_dps;
}());
exports.az_iot_dps = az_iot_dps;
/** Manage IoT Hub certificates. */
var az_iot_hub_certificate = /** @class */ (function () {
    function az_iot_hub_certificate() {
    }
    /**
     * Create/upload an Azure IoT Hub certificate.
     *
     * Syntax:
     * ```
     * az iot hub certificate create --hub-name
     *                               --name
     *                               --path
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     *
     * @param {string} hubName IoT Hub name.
     * @param {string} name A friendly name for the certificate.
     * @param {string} path The path to the file containing the certificate.
     */
    az_iot_hub_certificate.create = function (hubName, name, path) {
        return new az_iot_hub_certificate_create_command_builder("az iot hub certificate create", 'az_iot_hub_certificate_create_command_result', hubName, name, path);
    };
    /**
     * Deletes an Azure IoT Hub certificate.
     *
     * Syntax:
     * ```
     * az iot hub certificate delete --etag
     *                               --name
     *                               [--hub-name]
     *                               [--ids]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     *
     * @param {string} etag Entity Tag (etag) of the object.
     * @param {string} name A friendly name for the certificate.
     */
    az_iot_hub_certificate["delete"] = function (etag, name) {
        return new az_iot_hub_certificate_delete_command_builder("az iot hub certificate delete", 'az_iot_hub_certificate_delete_command_result', etag, name);
    };
    /**
     * Generates a verification code for an Azure IoT Hub certificate.
     *
     * Syntax:
     * ```
     * az iot hub certificate generate-verification-code --etag
     *                                                   --name
     *                                                   [--hub-name]
     *                                                   [--ids]
     *                                                   [--resource-group]
     *                                                   [--subscription]
     * ```
     *
     * @param {string} etag Entity Tag (etag) of the object.
     * @param {string} name A friendly name for the certificate.
     */
    az_iot_hub_certificate.generate_verification_code = function (etag, name) {
        return new az_iot_hub_certificate_generate_verification_code_command_builder("az iot hub certificate generate-verification-code", 'az_iot_hub_certificate_generate_verification_code_command_result', etag, name);
    };
    /**
     * Lists all certificates contained within an Azure IoT Hub.
     *
     * Syntax:
     * ```
     * az iot hub certificate list [--hub-name]
     *                             [--ids]
     *                             [--query-examples]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     */
    az_iot_hub_certificate.list = function () {
        return new az_iot_hub_certificate_list_command_builder("az iot hub certificate list", 'az_iot_hub_certificate_list_command_result');
    };
    /**
     * Shows information about a particular Azure IoT Hub certificate.
     *
     * Syntax:
     * ```
     * az iot hub certificate show --name
     *                             [--hub-name]
     *                             [--ids]
     *                             [--query-examples]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     *
     * @param {string} name A friendly name for the certificate.
     */
    az_iot_hub_certificate.show = function (name) {
        return new az_iot_hub_certificate_show_command_builder("az iot hub certificate show", 'az_iot_hub_certificate_show_command_result', name);
    };
    /**
     * Update an Azure IoT Hub certificate.
     *
     * Syntax:
     * ```
     * az iot hub certificate update --etag
     *                               --name
     *                               --path
     *                               [--hub-name]
     *                               [--ids]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     *
     * @param {string} etag Entity Tag (etag) of the object.
     * @param {string} name A friendly name for the certificate.
     * @param {string} path The path to the file containing the certificate.
     */
    az_iot_hub_certificate.update = function (etag, name, path) {
        return new az_iot_hub_certificate_update_command_builder("az iot hub certificate update", 'az_iot_hub_certificate_update_command_result', etag, name, path);
    };
    /**
     * Verifies an Azure IoT Hub certificate.
     *
     * Syntax:
     * ```
     * az iot hub certificate verify --etag
     *                               --name
     *                               --path
     *                               [--hub-name]
     *                               [--ids]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     *
     * @param {string} etag Entity Tag (etag) of the object.
     * @param {string} name A friendly name for the certificate.
     * @param {string} path The path to the file containing the certificate.
     */
    az_iot_hub_certificate.verify = function (etag, name, path) {
        return new az_iot_hub_certificate_verify_command_builder("az iot hub certificate verify", 'az_iot_hub_certificate_verify_command_result', etag, name, path);
    };
    return az_iot_hub_certificate;
}());
exports.az_iot_hub_certificate = az_iot_hub_certificate;
/** Manage the event hub consumer groups of an IoT hub. */
var az_iot_hub_consumer_group = /** @class */ (function () {
    function az_iot_hub_consumer_group() {
    }
    /**
     * Create an event hub consumer group.
     *
     * Syntax:
     * ```
     * az iot hub consumer-group create --hub-name
     *                                  --name
     *                                  [--event-hub-name]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     *
     * @param {string} hubName IoT Hub name.
     * @param {string} name Event hub consumer group name.
     */
    az_iot_hub_consumer_group.create = function (hubName, name) {
        return new az_iot_hub_consumer_group_create_command_builder("az iot hub consumer-group create", 'az_iot_hub_consumer_group_create_command_result', hubName, name);
    };
    /**
     * Delete an event hub consumer group.
     *
     * Syntax:
     * ```
     * az iot hub consumer-group delete [--event-hub-name]
     *                                  [--hub-name]
     *                                  [--ids]
     *                                  [--name]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     */
    az_iot_hub_consumer_group["delete"] = function () {
        return new az_iot_hub_consumer_group_delete_command_builder("az iot hub consumer-group delete", 'az_iot_hub_consumer_group_delete_command_result');
    };
    /**
     * List event hub consumer groups.
     *
     * Syntax:
     * ```
     * az iot hub consumer-group list [--event-hub-name]
     *                                [--hub-name]
     *                                [--ids]
     *                                [--query-examples]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     */
    az_iot_hub_consumer_group.list = function () {
        return new az_iot_hub_consumer_group_list_command_builder("az iot hub consumer-group list", 'az_iot_hub_consumer_group_list_command_result');
    };
    /**
     * Get the details for an event hub consumer group.
     *
     * Syntax:
     * ```
     * az iot hub consumer-group show [--event-hub-name]
     *                                [--hub-name]
     *                                [--ids]
     *                                [--name]
     *                                [--query-examples]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     */
    az_iot_hub_consumer_group.show = function () {
        return new az_iot_hub_consumer_group_show_command_builder("az iot hub consumer-group show", 'az_iot_hub_consumer_group_show_command_result');
    };
    return az_iot_hub_consumer_group;
}());
exports.az_iot_hub_consumer_group = az_iot_hub_consumer_group;
/** Manage device streams of an IoT hub. */
var az_iot_hub_devicestream = /** @class */ (function () {
    function az_iot_hub_devicestream() {
    }
    /**
     * Get IoT Hub's device streams endpoints.
     *
     * Syntax:
     * ```
     * az iot hub devicestream show [--ids]
     *                              [--name]
     *                              [--query-examples]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     */
    az_iot_hub_devicestream.show = function () {
        return new az_iot_hub_devicestream_show_command_builder("az iot hub devicestream show", 'az_iot_hub_devicestream_show_command_result');
    };
    return az_iot_hub_devicestream;
}());
exports.az_iot_hub_devicestream = az_iot_hub_devicestream;
/** Manage message enrichments for endpoints of an IoT Hub. */
var az_iot_hub_message_enrichment = /** @class */ (function () {
    function az_iot_hub_message_enrichment() {
    }
    /**
     * Create a message enrichment for chosen endpoints in your IoT Hub.
     *
     * Syntax:
     * ```
     * az iot hub message-enrichment create --endpoints
     *                                      --key
     *                                      --name
     *                                      --value
     *                                      [--resource-group]
     *                                      [--subscription]
     * ```
     *
     * @param {string} endpoints Endpoint(s) to apply enrichments to. Use a space-separated list for multiple endpoints.
     * @param {string} key The enrichment's key.
     * @param {string} name IoT Hub name.
     * @param {string} value The enrichment's value.
     */
    az_iot_hub_message_enrichment.create = function (endpoints, key, name, value) {
        return new az_iot_hub_message_enrichment_create_command_builder("az iot hub message-enrichment create", 'az_iot_hub_message_enrichment_create_command_result', endpoints, key, name, value);
    };
    /**
     * Delete a message enrichment in your IoT hub (by key).
     *
     * Syntax:
     * ```
     * az iot hub message-enrichment delete --key
     *                                      [--ids]
     *                                      [--name]
     *                                      [--resource-group]
     *                                      [--subscription]
     * ```
     *
     * @param {string} key The enrichment's key.
     */
    az_iot_hub_message_enrichment["delete"] = function (key) {
        return new az_iot_hub_message_enrichment_delete_command_builder("az iot hub message-enrichment delete", 'az_iot_hub_message_enrichment_delete_command_result', key);
    };
    /**
     * Get information on all message enrichments for your IoT Hub.
     *
     * Syntax:
     * ```
     * az iot hub message-enrichment list [--ids]
     *                                    [--name]
     *                                    [--query-examples]
     *                                    [--resource-group]
     *                                    [--subscription]
     * ```
     */
    az_iot_hub_message_enrichment.list = function () {
        return new az_iot_hub_message_enrichment_list_command_builder("az iot hub message-enrichment list", 'az_iot_hub_message_enrichment_list_command_result');
    };
    /**
     * Update a message enrichment in your IoT hub (by key).
     *
     * Syntax:
     * ```
     * az iot hub message-enrichment update --endpoints
     *                                      --key
     *                                      --value
     *                                      [--ids]
     *                                      [--name]
     *                                      [--resource-group]
     *                                      [--subscription]
     * ```
     *
     * @param {string} endpoints Endpoint(s) to apply enrichments to. Use a space-separated list for multiple endpoints.
     * @param {string} key The enrichment's key.
     * @param {string} value The enrichment's value.
     */
    az_iot_hub_message_enrichment.update = function (endpoints, key, value) {
        return new az_iot_hub_message_enrichment_update_command_builder("az iot hub message-enrichment update", 'az_iot_hub_message_enrichment_update_command_result', endpoints, key, value);
    };
    return az_iot_hub_message_enrichment;
}());
exports.az_iot_hub_message_enrichment = az_iot_hub_message_enrichment;
/** Manage shared access policies of an IoT hub. */
var az_iot_hub_policy = /** @class */ (function () {
    function az_iot_hub_policy() {
    }
    /**
     * Create a new shared access policy in an IoT hub.
     *
     * Syntax:
     * ```
     * az iot hub policy create --hub-name
     *                          --name
     *                          --permissions
     *                          [--resource-group]
     *                          [--subscription]
     * ```
     *
     * @param {string} hubName IoT Hub name.
     * @param {string} name Shared access policy name.
     * @param {string} permissions Permissions of shared access policy. Use space-separated list for multiple permissions. Possible values: RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect.
     */
    az_iot_hub_policy.create = function (hubName, name, permissions) {
        return new az_iot_hub_policy_create_command_builder("az iot hub policy create", 'az_iot_hub_policy_create_command_result', hubName, name, permissions);
    };
    /**
     * Delete a shared access policy from an IoT hub.
     *
     * Syntax:
     * ```
     * az iot hub policy delete [--hub-name]
     *                          [--ids]
     *                          [--name]
     *                          [--resource-group]
     *                          [--subscription]
     * ```
     */
    az_iot_hub_policy["delete"] = function () {
        return new az_iot_hub_policy_delete_command_builder("az iot hub policy delete", 'az_iot_hub_policy_delete_command_result');
    };
    /**
     * List shared access policies of an IoT hub.
     *
     * Syntax:
     * ```
     * az iot hub policy list [--hub-name]
     *                        [--ids]
     *                        [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     */
    az_iot_hub_policy.list = function () {
        return new az_iot_hub_policy_list_command_builder("az iot hub policy list", 'az_iot_hub_policy_list_command_result');
    };
    /**
     * Regenerate keys of a shared access policy of an IoT hub.
     *
     * Syntax:
     * ```
     * az iot hub policy renew-key --renew-key {primary, secondary, swap}
     *                             [--hub-name]
     *                             [--ids]
     *                             [--name]
     *                             [--no-wait]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     *
     * @param {'primary' | 'secondary' | 'swap'} renewKey Regenerate keys.
     */
    az_iot_hub_policy.renew_key = function (renewKey) {
        return new az_iot_hub_policy_renew_key_command_builder("az iot hub policy renew-key", 'az_iot_hub_policy_renew_key_command_result', renewKey);
    };
    /**
     * Get the details of a shared access policy of an IoT hub.
     *
     * Syntax:
     * ```
     * az iot hub policy show [--hub-name]
     *                        [--ids]
     *                        [--name]
     *                        [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     */
    az_iot_hub_policy.show = function () {
        return new az_iot_hub_policy_show_command_builder("az iot hub policy show", 'az_iot_hub_policy_show_command_result');
    };
    return az_iot_hub_policy;
}());
exports.az_iot_hub_policy = az_iot_hub_policy;
/** Manage routes of an IoT hub. */
var az_iot_hub_route = /** @class */ (function () {
    function az_iot_hub_route() {
    }
    /**
     * Create a route in IoT Hub.
     *
     * Syntax:
     * ```
     * az iot hub route create --en
     *                         --hub-name
     *                         --name
     *                         --source {devicejoblifecycleevents, devicelifecycleevents, devicemessages, digitaltwinchangeevents, invalid, twinchangeevents}
     *                         [--condition]
     *                         [--enabled {false, true}]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     *
     * @param {string} endpointName Name of the routing endpoint.
     * @param {string} hubName IoT Hub name.
     * @param {string} routeName Name of the Route.
     * @param {'devicejoblifecycleevents' | 'devicelifecycleevents' | 'devicemessages' | 'digitaltwinchangeevents' | 'invalid' | 'twinchangeevents'} sourceType Source of the route.
     */
    az_iot_hub_route.create = function (endpointName, hubName, routeName, sourceType) {
        return new az_iot_hub_route_create_command_builder("az iot hub route create", 'az_iot_hub_route_create_command_result', endpointName, hubName, routeName, sourceType);
    };
    /**
     * Delete all or mentioned route for your IoT Hub.
     *
     * Syntax:
     * ```
     * az iot hub route delete [--hub-name]
     *                         [--ids]
     *                         [--name]
     *                         [--resource-group]
     *                         [--source {devicejoblifecycleevents, devicelifecycleevents, devicemessages, digitaltwinchangeevents, invalid, twinchangeevents}]
     *                         [--subscription]
     * ```
     */
    az_iot_hub_route["delete"] = function () {
        return new az_iot_hub_route_delete_command_builder("az iot hub route delete", 'az_iot_hub_route_delete_command_result');
    };
    /**
     * Get all the routes in IoT Hub.
     *
     * Syntax:
     * ```
     * az iot hub route list [--hub-name]
     *                       [--ids]
     *                       [--query-examples]
     *                       [--resource-group]
     *                       [--source {devicejoblifecycleevents, devicelifecycleevents, devicemessages, digitaltwinchangeevents, invalid, twinchangeevents}]
     *                       [--subscription]
     * ```
     */
    az_iot_hub_route.list = function () {
        return new az_iot_hub_route_list_command_builder("az iot hub route list", 'az_iot_hub_route_list_command_result');
    };
    /**
     * Get information about the route in IoT Hub.
     *
     * Syntax:
     * ```
     * az iot hub route show --name
     *                       [--hub-name]
     *                       [--ids]
     *                       [--query-examples]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     *
     * @param {string} routeName Name of the Route.
     */
    az_iot_hub_route.show = function (routeName) {
        return new az_iot_hub_route_show_command_builder("az iot hub route show", 'az_iot_hub_route_show_command_result', routeName);
    };
    /**
     * Test all routes or mentioned route in IoT Hub.
     *
     * Syntax:
     * ```
     * az iot hub route test [--ap]
     *                       [--body]
     *                       [--hub-name]
     *                       [--ids]
     *                       [--name]
     *                       [--resource-group]
     *                       [--source {devicejoblifecycleevents, devicelifecycleevents, devicemessages, digitaltwinchangeevents, invalid, twinchangeevents}]
     *                       [--sp]
     *                       [--subscription]
     * ```
     */
    az_iot_hub_route.test = function () {
        return new az_iot_hub_route_test_command_builder("az iot hub route test", 'az_iot_hub_route_test_command_result');
    };
    /**
     * Update a route in IoT Hub.
     *
     * Syntax:
     * ```
     * az iot hub route update --name
     *                         [--condition]
     *                         [--en]
     *                         [--enabled {false, true}]
     *                         [--hub-name]
     *                         [--ids]
     *                         [--resource-group]
     *                         [--source {devicejoblifecycleevents, devicelifecycleevents, devicemessages, digitaltwinchangeevents, invalid, twinchangeevents}]
     *                         [--subscription]
     * ```
     *
     * @param {string} routeName Name of the Route.
     */
    az_iot_hub_route.update = function (routeName) {
        return new az_iot_hub_route_update_command_builder("az iot hub route update", 'az_iot_hub_route_update_command_result', routeName);
    };
    return az_iot_hub_route;
}());
exports.az_iot_hub_route = az_iot_hub_route;
/** Manage custom endpoints of an IoT hub. */
var az_iot_hub_routing_endpoint = /** @class */ (function () {
    function az_iot_hub_routing_endpoint() {
    }
    /**
     * Add an endpoint to your IoT Hub.
     *
     * Syntax:
     * ```
     * az iot hub routing-endpoint create --endpoint-name
     *                                    --endpoint-resource-group
     *                                    --endpoint-subscription-id
     *                                    --endpoint-type {azurestoragecontainer, eventhub, servicebusqueue, servicebustopic}
     *                                    --hub-name
     *                                    [--auth-type {identitybased, keybased}]
     *                                    [--batch-frequency]
     *                                    [--chunk-size]
     *                                    [--connection-string]
     *                                    [--container]
     *                                    [--encoding {avro, json}]
     *                                    [--endpoint-uri]
     *                                    [--entity-path]
     *                                    [--ff]
     *                                    [--resource-group]
     *                                    [--subscription]
     * ```
     *
     * @param {string} endpointName Name of the Routing Endpoint.
     * @param {string} endpointResourceGroup Resource group of the Endpoint resoure.
     * @param {string} endpointSubscriptionId SubscriptionId of the Endpoint resource.
     * @param {'azurestoragecontainer' | 'eventhub' | 'servicebusqueue' | 'servicebustopic'} endpointType Type of the Routing Endpoint.
     * @param {string} hubName IoT Hub name.
     */
    az_iot_hub_routing_endpoint.create = function (endpointName, endpointResourceGroup, endpointSubscriptionId, endpointType, hubName) {
        return new az_iot_hub_routing_endpoint_create_command_builder("az iot hub routing-endpoint create", 'az_iot_hub_routing_endpoint_create_command_result', endpointName, endpointResourceGroup, endpointSubscriptionId, endpointType, hubName);
    };
    /**
     * Delete all or mentioned endpoint for your IoT Hub.
     *
     * Syntax:
     * ```
     * az iot hub routing-endpoint delete [--endpoint-name]
     *                                    [--endpoint-type {azurestoragecontainer, eventhub, servicebusqueue, servicebustopic}]
     *                                    [--hub-name]
     *                                    [--ids]
     *                                    [--resource-group]
     *                                    [--subscription]
     * ```
     */
    az_iot_hub_routing_endpoint["delete"] = function () {
        return new az_iot_hub_routing_endpoint_delete_command_builder("az iot hub routing-endpoint delete", 'az_iot_hub_routing_endpoint_delete_command_result');
    };
    /**
     * Get information on all the endpoints for your IoT Hub.
     *
     * Syntax:
     * ```
     * az iot hub routing-endpoint list [--endpoint-type {azurestoragecontainer, eventhub, servicebusqueue, servicebustopic}]
     *                                  [--hub-name]
     *                                  [--ids]
     *                                  [--query-examples]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     */
    az_iot_hub_routing_endpoint.list = function () {
        return new az_iot_hub_routing_endpoint_list_command_builder("az iot hub routing-endpoint list", 'az_iot_hub_routing_endpoint_list_command_result');
    };
    /**
     * Get information on mentioned endpoint for your IoT Hub.
     *
     * Syntax:
     * ```
     * az iot hub routing-endpoint show --endpoint-name
     *                                  [--hub-name]
     *                                  [--ids]
     *                                  [--query-examples]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     *
     * @param {string} endpointName Name of the Routing Endpoint.
     */
    az_iot_hub_routing_endpoint.show = function (endpointName) {
        return new az_iot_hub_routing_endpoint_show_command_builder("az iot hub routing-endpoint show", 'az_iot_hub_routing_endpoint_show_command_result', endpointName);
    };
    return az_iot_hub_routing_endpoint;
}());
exports.az_iot_hub_routing_endpoint = az_iot_hub_routing_endpoint;
/** Manage Azure IoT hubs. */
var az_iot_hub = /** @class */ (function () {
    function az_iot_hub() {
    }
    /**
     * Create an Azure IoT hub.
     *
     * Syntax:
     * ```
     * az iot hub create --name
     *                   --resource-group
     *                   [--c2d-max-delivery-count]
     *                   [--c2d-ttl]
     *                   [--fc]
     *                   [--fcs]
     *                   [--fcu]
     *                   [--fd]
     *                   [--feedback-lock-duration]
     *                   [--feedback-ttl]
     *                   [--fileupload-notification-max-delivery-count]
     *                   [--fileupload-notification-ttl]
     *                   [--fileupload-notifications {false, true}]
     *                   [--fileupload-sas-ttl]
     *                   [--fileupload-storage-auth-type]
     *                   [--location]
     *                   [--min-tls-version]
     *                   [--partition-count]
     *                   [--rd]
     *                   [--sku {B1, B2, B3, F1, S1, S2, S3}]
     *                   [--subscription]
     *                   [--unit]
     * ```
     *
     * @param {string} name IoT Hub name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_iot_hub.create = function (name, resourceGroup) {
        return new az_iot_hub_create_command_builder("az iot hub create", 'az_iot_hub_create_command_result', name, resourceGroup);
    };
    /**
     * Delete an IoT hub.
     *
     * Syntax:
     * ```
     * az iot hub delete [--ids]
     *                   [--name]
     *                   [--resource-group]
     *                   [--subscription]
     * ```
     */
    az_iot_hub["delete"] = function () {
        return new az_iot_hub_delete_command_builder("az iot hub delete", 'az_iot_hub_delete_command_result');
    };
    /**
     * List IoT hubs.
     *
     * Syntax:
     * ```
     * az iot hub list [--query-examples]
     *                 [--resource-group]
     *                 [--subscription]
     * ```
     */
    az_iot_hub.list = function () {
        return new az_iot_hub_list_command_builder("az iot hub list", 'az_iot_hub_list_command_result');
    };
    /**
     * List available pricing tiers.
     *
     * Syntax:
     * ```
     * az iot hub list-skus [--ids]
     *                      [--name]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    az_iot_hub.list_skus = function () {
        return new az_iot_hub_list_skus_command_builder("az iot hub list-skus", 'az_iot_hub_list_skus_command_result');
    };
    /**
     * Initiate a manual failover for the IoT Hub to the geo-paired disaster recovery region.
     *
     * Syntax:
     * ```
     * az iot hub manual-failover [--ids]
     *                            [--name]
     *                            [--no-wait]
     *                            [--resource-group]
     *                            [--subscription]
     * ```
     */
    az_iot_hub.manual_failover = function () {
        return new az_iot_hub_manual_failover_command_builder("az iot hub manual-failover", 'az_iot_hub_manual_failover_command_result');
    };
    /**
     * Get the details of an IoT hub.
     *
     * Syntax:
     * ```
     * az iot hub show [--ids]
     *                 [--name]
     *                 [--query-examples]
     *                 [--resource-group]
     *                 [--subscription]
     * ```
     */
    az_iot_hub.show = function () {
        return new az_iot_hub_show_command_builder("az iot hub show", 'az_iot_hub_show_command_result');
    };
    /**
     * Show the connection strings for an IoT hub.
     *
     * Syntax:
     * ```
     * az iot hub show-connection-string [--all]
     *                                   [--hub-name]
     *                                   [--ids]
     *                                   [--key {primary, secondary}]
     *                                   [--policy-name]
     *                                   [--resource-group]
     *                                   [--subscription]
     * ```
     */
    az_iot_hub.show_connection_string = function () {
        return new az_iot_hub_show_connection_string_command_builder("az iot hub show-connection-string", 'az_iot_hub_show_connection_string_command_result');
    };
    /**
     * Get the quota metrics for an IoT hub.
     *
     * Syntax:
     * ```
     * az iot hub show-quota-metrics [--ids]
     *                               [--name]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     */
    az_iot_hub.show_quota_metrics = function () {
        return new az_iot_hub_show_quota_metrics_command_builder("az iot hub show-quota-metrics", 'az_iot_hub_show_quota_metrics_command_result');
    };
    /**
     * Get the statistics for an IoT hub.
     *
     * Syntax:
     * ```
     * az iot hub show-stats [--ids]
     *                       [--name]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    az_iot_hub.show_stats = function () {
        return new az_iot_hub_show_stats_command_builder("az iot hub show-stats", 'az_iot_hub_show_stats_command_result');
    };
    /**
     * Update metadata for an IoT hub.
     *
     * Syntax:
     * ```
     * az iot hub update [--add]
     *                   [--c2d-max-delivery-count]
     *                   [--c2d-ttl]
     *                   [--fc]
     *                   [--fcs]
     *                   [--fcu]
     *                   [--fd]
     *                   [--feedback-lock-duration]
     *                   [--feedback-ttl]
     *                   [--fileupload-notification-max-delivery-count]
     *                   [--fileupload-notification-ttl]
     *                   [--fileupload-notifications {false, true}]
     *                   [--fileupload-sas-ttl]
     *                   [--fileupload-storage-auth-type]
     *                   [--force-string]
     *                   [--ids]
     *                   [--name]
     *                   [--rd]
     *                   [--remove]
     *                   [--resource-group]
     *                   [--set]
     *                   [--sku {B1, B2, B3, F1, S1, S2, S3}]
     *                   [--subscription]
     *                   [--unit]
     * ```
     */
    az_iot_hub.update = function () {
        return new az_iot_hub_update_command_builder("az iot hub update", 'az_iot_hub_update_command_result');
    };
    return az_iot_hub;
}());
exports.az_iot_hub = az_iot_hub;
/** Manage Internet of Things (IoT) assets. */
var az_iot = /** @class */ (function () {
    function az_iot() {
    }
    return az_iot;
}());
exports.az_iot = az_iot;
/**
 * Create an IoT Central application.
 *
 * Syntax:
 * ```
 * az iot central app create --name
 *                           --resource-group
 *                           --subdomain
 *                           [--display-name]
 *                           [--location]
 *                           [--no-wait]
 *                           [--sku {F1, S1, ST0, ST1, ST2}]
 *                           [--subscription]
 *                           [--template]
 * ```
 *
 * @param {string} name Give your IoT Central app a unique name so you can find it later.This will be used as the resource name in the Azure portal and CLI.Avoid special characters `-` instead, use lower case letters (a-z), numbers (0-9), and dashes (-).
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} subdomain Enter a unique URL. Your app will be accessible via https://<subdomain>.azureiotcentral.com/. Avoid special characters `-` instead, use lower case letters (a-z), numbers (0-9), and dashes (-).
 */
var az_iot_central_app_create_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_central_app_create_command_builder, _super);
    function az_iot_central_app_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, subdomain) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.subdomain(subdomain);
        return _this;
    }
    /** Give your IoT Central app a unique name so you can find it later.This will be used as the resource name in the Azure portal and CLI.Avoid special characters `-` instead, use lower case letters (a-z), numbers (0-9), and dashes (-). */
    az_iot_central_app_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_central_app_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Enter a unique URL. Your app will be accessible via https://<subdomain>.azureiotcentral.com/. Avoid special characters `-` instead, use lower case letters (a-z), numbers (0-9), and dashes (-). */
    az_iot_central_app_create_command_builder.prototype.subdomain = function (value) {
        this.setFlag("--subdomain", value);
        return this;
    };
    /** Custom display name for the IoT Central app. This will be used in the IoT Central application manager to help you identify your app. Default value is the resource name. */
    az_iot_central_app_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Where your app's info and resources are stored. We will default to the location of the target resource group. See documentation for a full list of supported locations. */
    az_iot_central_app_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_iot_central_app_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Pricing plan for IoT Central application. */
    az_iot_central_app_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_central_app_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** IoT Central application template name. Default is "Custom application". See documentation for a list of available templates. */
    az_iot_central_app_create_command_builder.prototype.template = function (value) {
        this.setFlag("--template", value);
        return this;
    };
    return az_iot_central_app_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an IoT Central application.
 *
 * Syntax:
 * ```
 * az iot central app delete --name
 *                           --resource-group
 *                           [--no-wait]
 *                           [--subscription]
 *                           [--yes]
 * ```
 *
 * @param {string} name IoT Central application name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_iot_central_app_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_central_app_delete_command_builder, _super);
    function az_iot_central_app_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** IoT Central application name. */
    az_iot_central_app_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_central_app_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_iot_central_app_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_central_app_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_iot_central_app_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_iot_central_app_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List IoT Central applications.
 *
 * Syntax:
 * ```
 * az iot central app list [--query-examples]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
var az_iot_central_app_list_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_central_app_list_command_builder, _super);
    function az_iot_central_app_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iot_central_app_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_central_app_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_central_app_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_central_app_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of an IoT Central application.
 *
 * Syntax:
 * ```
 * az iot central app show --name
 *                         [--query-examples]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 *
 * @param {string} name IoT Central application name.
 */
var az_iot_central_app_show_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_central_app_show_command_builder, _super);
    function az_iot_central_app_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** IoT Central application name. */
    az_iot_central_app_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iot_central_app_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_central_app_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_central_app_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_central_app_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update metadata for an IoT Central application.
 *
 * Syntax:
 * ```
 * az iot central app update --name
 *                           --resource-group
 *                           [--add]
 *                           [--force-string]
 *                           [--remove]
 *                           [--set]
 *                           [--subscription]
 * ```
 *
 * @param {string} name IoT Central application name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_iot_central_app_update_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_central_app_update_command_builder, _super);
    function az_iot_central_app_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** IoT Central application name. */
    az_iot_central_app_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_central_app_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_iot_central_app_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_iot_central_app_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_iot_central_app_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_iot_central_app_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_central_app_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_central_app_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new shared access policy in an Azure IoT Hub device provisioning service.
 *
 * Syntax:
 * ```
 * az iot dps access-policy create --access-policy-name
 *                                 --dps-name
 *                                 --resource-group
 *                                 --rights {DeviceConnect, EnrollmentRead, EnrollmentWrite, RegistrationStatusRead, RegistrationStatusWrite, ServiceConfig}
 *                                 [--no-wait]
 *                                 [--primary-key]
 *                                 [--secondary-key]
 *                                 [--subscription]
 * ```
 *
 * @param {string} accessPolicyName A friendly name for DPS access policy.
 * @param {string} dpsName IoT Provisioning Service name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'DeviceConnect' | 'EnrollmentRead' | 'EnrollmentWrite' | 'RegistrationStatusRead' | 'RegistrationStatusWrite' | 'ServiceConfig'} rights Access rights for the IoT provisioning service. Use space-separated list for multiple rights.
 */
var az_iot_dps_access_policy_create_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_dps_access_policy_create_command_builder, _super);
    function az_iot_dps_access_policy_create_command_builder(commandPath, resultDataTypeName, accessPolicyName, dpsName, resourceGroup, rights) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accessPolicyName(accessPolicyName);
        _this.dpsName(dpsName);
        _this.resourceGroup(resourceGroup);
        _this.rights(rights);
        return _this;
    }
    /** A friendly name for DPS access policy. */
    az_iot_dps_access_policy_create_command_builder.prototype.accessPolicyName = function (value) {
        this.setFlag("--access-policy-name", value);
        return this;
    };
    /** IoT Provisioning Service name. */
    az_iot_dps_access_policy_create_command_builder.prototype.dpsName = function (value) {
        this.setFlag("--dps-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_dps_access_policy_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Access rights for the IoT provisioning service. Use space-separated list for multiple rights. */
    az_iot_dps_access_policy_create_command_builder.prototype.rights = function (value) {
        this.setFlag("--rights", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_iot_dps_access_policy_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Primary SAS key value. */
    az_iot_dps_access_policy_create_command_builder.prototype.primaryKey = function (value) {
        this.setFlag("--primary-key", value);
        return this;
    };
    /** Secondary SAS key value. */
    az_iot_dps_access_policy_create_command_builder.prototype.secondaryKey = function (value) {
        this.setFlag("--secondary-key", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_dps_access_policy_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_dps_access_policy_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a shared access policies in an Azure IoT Hub device provisioning service.
 *
 * Syntax:
 * ```
 * az iot dps access-policy delete --access-policy-name
 *                                 --dps-name
 *                                 --resource-group
 *                                 [--no-wait]
 *                                 [--subscription]
 * ```
 *
 * @param {string} accessPolicyName A friendly name for DPS access policy.
 * @param {string} dpsName IoT Provisioning Service name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_iot_dps_access_policy_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_dps_access_policy_delete_command_builder, _super);
    function az_iot_dps_access_policy_delete_command_builder(commandPath, resultDataTypeName, accessPolicyName, dpsName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accessPolicyName(accessPolicyName);
        _this.dpsName(dpsName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** A friendly name for DPS access policy. */
    az_iot_dps_access_policy_delete_command_builder.prototype.accessPolicyName = function (value) {
        this.setFlag("--access-policy-name", value);
        return this;
    };
    /** IoT Provisioning Service name. */
    az_iot_dps_access_policy_delete_command_builder.prototype.dpsName = function (value) {
        this.setFlag("--dps-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_dps_access_policy_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_iot_dps_access_policy_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_dps_access_policy_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_dps_access_policy_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all shared access policies in an Azure IoT Hub device provisioning service.
 *
 * Syntax:
 * ```
 * az iot dps access-policy list --dps-name
 *                               --resource-group
 *                               [--query-examples]
 *                               [--subscription]
 * ```
 *
 * @param {string} dpsName IoT Provisioning Service name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_iot_dps_access_policy_list_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_dps_access_policy_list_command_builder, _super);
    function az_iot_dps_access_policy_list_command_builder(commandPath, resultDataTypeName, dpsName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.dpsName(dpsName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** IoT Provisioning Service name. */
    az_iot_dps_access_policy_list_command_builder.prototype.dpsName = function (value) {
        this.setFlag("--dps-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_dps_access_policy_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iot_dps_access_policy_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_dps_access_policy_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_dps_access_policy_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show details of a shared access policies in an Azure IoT Hub device provisioning service.
 *
 * Syntax:
 * ```
 * az iot dps access-policy show --access-policy-name
 *                               --dps-name
 *                               --resource-group
 *                               [--query-examples]
 *                               [--subscription]
 * ```
 *
 * @param {string} accessPolicyName A friendly name for DPS access policy.
 * @param {string} dpsName IoT Provisioning Service name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_iot_dps_access_policy_show_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_dps_access_policy_show_command_builder, _super);
    function az_iot_dps_access_policy_show_command_builder(commandPath, resultDataTypeName, accessPolicyName, dpsName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accessPolicyName(accessPolicyName);
        _this.dpsName(dpsName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** A friendly name for DPS access policy. */
    az_iot_dps_access_policy_show_command_builder.prototype.accessPolicyName = function (value) {
        this.setFlag("--access-policy-name", value);
        return this;
    };
    /** IoT Provisioning Service name. */
    az_iot_dps_access_policy_show_command_builder.prototype.dpsName = function (value) {
        this.setFlag("--dps-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_dps_access_policy_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iot_dps_access_policy_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_dps_access_policy_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_dps_access_policy_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a shared access policy in an Azure IoT Hub device provisioning service.
 *
 * Syntax:
 * ```
 * az iot dps access-policy update --access-policy-name
 *                                 --dps-name
 *                                 --resource-group
 *                                 [--no-wait]
 *                                 [--primary-key]
 *                                 [--rights {DeviceConnect, EnrollmentRead, EnrollmentWrite, RegistrationStatusRead, RegistrationStatusWrite, ServiceConfig}]
 *                                 [--secondary-key]
 *                                 [--subscription]
 * ```
 *
 * @param {string} accessPolicyName A friendly name for DPS access policy.
 * @param {string} dpsName IoT Provisioning Service name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_iot_dps_access_policy_update_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_dps_access_policy_update_command_builder, _super);
    function az_iot_dps_access_policy_update_command_builder(commandPath, resultDataTypeName, accessPolicyName, dpsName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accessPolicyName(accessPolicyName);
        _this.dpsName(dpsName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** A friendly name for DPS access policy. */
    az_iot_dps_access_policy_update_command_builder.prototype.accessPolicyName = function (value) {
        this.setFlag("--access-policy-name", value);
        return this;
    };
    /** IoT Provisioning Service name. */
    az_iot_dps_access_policy_update_command_builder.prototype.dpsName = function (value) {
        this.setFlag("--dps-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_dps_access_policy_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_iot_dps_access_policy_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Primary SAS key value. */
    az_iot_dps_access_policy_update_command_builder.prototype.primaryKey = function (value) {
        this.setFlag("--primary-key", value);
        return this;
    };
    /** Access rights for the IoT provisioning service. Use space-separated list for multiple rights. */
    az_iot_dps_access_policy_update_command_builder.prototype.rights = function (value) {
        this.setFlag("--rights", value);
        return this;
    };
    /** Secondary SAS key value. */
    az_iot_dps_access_policy_update_command_builder.prototype.secondaryKey = function (value) {
        this.setFlag("--secondary-key", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_dps_access_policy_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_dps_access_policy_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create/upload an Azure IoT Hub Device Provisioning Service certificate.
 *
 * Syntax:
 * ```
 * az iot dps certificate create --certificate-name
 *                               --dps-name
 *                               --path
 *                               --resource-group
 *                               [--subscription]
 * ```
 *
 * @param {string} certificateName A friendly name for the certificate.
 * @param {string} dpsName IoT Provisioning Service name.
 * @param {string} path The path to the file containing the certificate.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_iot_dps_certificate_create_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_dps_certificate_create_command_builder, _super);
    function az_iot_dps_certificate_create_command_builder(commandPath, resultDataTypeName, certificateName, dpsName, path, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.certificateName(certificateName);
        _this.dpsName(dpsName);
        _this.path(path);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** A friendly name for the certificate. */
    az_iot_dps_certificate_create_command_builder.prototype.certificateName = function (value) {
        this.setFlag("--certificate-name", value);
        return this;
    };
    /** IoT Provisioning Service name. */
    az_iot_dps_certificate_create_command_builder.prototype.dpsName = function (value) {
        this.setFlag("--dps-name", value);
        return this;
    };
    /** The path to the file containing the certificate. */
    az_iot_dps_certificate_create_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_dps_certificate_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_dps_certificate_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_dps_certificate_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an Azure IoT Hub Device Provisioning Service certificate.
 *
 * Syntax:
 * ```
 * az iot dps certificate delete --certificate-name
 *                               --dps-name
 *                               --etag
 *                               --resource-group
 *                               [--subscription]
 * ```
 *
 * @param {string} certificateName A friendly name for the certificate.
 * @param {string} dpsName IoT Provisioning Service name.
 * @param {string} etag Entity Tag (etag) of the object.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_iot_dps_certificate_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_dps_certificate_delete_command_builder, _super);
    function az_iot_dps_certificate_delete_command_builder(commandPath, resultDataTypeName, certificateName, dpsName, etag, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.certificateName(certificateName);
        _this.dpsName(dpsName);
        _this.etag(etag);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** A friendly name for the certificate. */
    az_iot_dps_certificate_delete_command_builder.prototype.certificateName = function (value) {
        this.setFlag("--certificate-name", value);
        return this;
    };
    /** IoT Provisioning Service name. */
    az_iot_dps_certificate_delete_command_builder.prototype.dpsName = function (value) {
        this.setFlag("--dps-name", value);
        return this;
    };
    /** Entity Tag (etag) of the object. */
    az_iot_dps_certificate_delete_command_builder.prototype.etag = function (value) {
        this.setFlag("--etag", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_dps_certificate_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_dps_certificate_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_dps_certificate_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Generate a verification code for an Azure IoT Hub Device Provisioning Service certificate.
 *
 * Syntax:
 * ```
 * az iot dps certificate generate-verification-code --certificate-name
 *                                                   --dps-name
 *                                                   --etag
 *                                                   --resource-group
 *                                                   [--subscription]
 * ```
 *
 * @param {string} certificateName A friendly name for the certificate.
 * @param {string} dpsName IoT Provisioning Service name.
 * @param {string} etag Entity Tag (etag) of the object.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_iot_dps_certificate_generate_verification_code_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_dps_certificate_generate_verification_code_command_builder, _super);
    function az_iot_dps_certificate_generate_verification_code_command_builder(commandPath, resultDataTypeName, certificateName, dpsName, etag, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.certificateName(certificateName);
        _this.dpsName(dpsName);
        _this.etag(etag);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** A friendly name for the certificate. */
    az_iot_dps_certificate_generate_verification_code_command_builder.prototype.certificateName = function (value) {
        this.setFlag("--certificate-name", value);
        return this;
    };
    /** IoT Provisioning Service name. */
    az_iot_dps_certificate_generate_verification_code_command_builder.prototype.dpsName = function (value) {
        this.setFlag("--dps-name", value);
        return this;
    };
    /** Entity Tag (etag) of the object. */
    az_iot_dps_certificate_generate_verification_code_command_builder.prototype.etag = function (value) {
        this.setFlag("--etag", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_dps_certificate_generate_verification_code_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_dps_certificate_generate_verification_code_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_dps_certificate_generate_verification_code_command_builder;
}(base_1.CommandBuilder));
/**
 * List all certificates contained within an Azure IoT Hub device provisioning service.
 *
 * Syntax:
 * ```
 * az iot dps certificate list --dps-name
 *                             --resource-group
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 *
 * @param {string} dpsName IoT Provisioning Service name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_iot_dps_certificate_list_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_dps_certificate_list_command_builder, _super);
    function az_iot_dps_certificate_list_command_builder(commandPath, resultDataTypeName, dpsName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.dpsName(dpsName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** IoT Provisioning Service name. */
    az_iot_dps_certificate_list_command_builder.prototype.dpsName = function (value) {
        this.setFlag("--dps-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_dps_certificate_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iot_dps_certificate_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_dps_certificate_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_dps_certificate_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show information about a particular Azure IoT Hub Device Provisioning Service certificate.
 *
 * Syntax:
 * ```
 * az iot dps certificate show --certificate-name
 *                             --dps-name
 *                             --resource-group
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 *
 * @param {string} certificateName A friendly name for the certificate.
 * @param {string} dpsName IoT Provisioning Service name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_iot_dps_certificate_show_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_dps_certificate_show_command_builder, _super);
    function az_iot_dps_certificate_show_command_builder(commandPath, resultDataTypeName, certificateName, dpsName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.certificateName(certificateName);
        _this.dpsName(dpsName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** A friendly name for the certificate. */
    az_iot_dps_certificate_show_command_builder.prototype.certificateName = function (value) {
        this.setFlag("--certificate-name", value);
        return this;
    };
    /** IoT Provisioning Service name. */
    az_iot_dps_certificate_show_command_builder.prototype.dpsName = function (value) {
        this.setFlag("--dps-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_dps_certificate_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iot_dps_certificate_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_dps_certificate_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_dps_certificate_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update an Azure IoT Hub Device Provisioning Service certificate.
 *
 * Syntax:
 * ```
 * az iot dps certificate update --certificate-name
 *                               --dps-name
 *                               --etag
 *                               --path
 *                               --resource-group
 *                               [--subscription]
 * ```
 *
 * @param {string} certificateName A friendly name for the certificate.
 * @param {string} dpsName IoT Provisioning Service name.
 * @param {string} etag Entity Tag (etag) of the object.
 * @param {string} path The path to the file containing the certificate.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_iot_dps_certificate_update_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_dps_certificate_update_command_builder, _super);
    function az_iot_dps_certificate_update_command_builder(commandPath, resultDataTypeName, certificateName, dpsName, etag, path, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.certificateName(certificateName);
        _this.dpsName(dpsName);
        _this.etag(etag);
        _this.path(path);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** A friendly name for the certificate. */
    az_iot_dps_certificate_update_command_builder.prototype.certificateName = function (value) {
        this.setFlag("--certificate-name", value);
        return this;
    };
    /** IoT Provisioning Service name. */
    az_iot_dps_certificate_update_command_builder.prototype.dpsName = function (value) {
        this.setFlag("--dps-name", value);
        return this;
    };
    /** Entity Tag (etag) of the object. */
    az_iot_dps_certificate_update_command_builder.prototype.etag = function (value) {
        this.setFlag("--etag", value);
        return this;
    };
    /** The path to the file containing the certificate. */
    az_iot_dps_certificate_update_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_dps_certificate_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_dps_certificate_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_dps_certificate_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Verify an Azure IoT Hub Device Provisioning Service certificate.
 *
 * Syntax:
 * ```
 * az iot dps certificate verify --certificate-name
 *                               --dps-name
 *                               --etag
 *                               --path
 *                               --resource-group
 *                               [--subscription]
 * ```
 *
 * @param {string} certificateName A friendly name for the certificate.
 * @param {string} dpsName IoT Provisioning Service name.
 * @param {string} etag Entity Tag (etag) of the object.
 * @param {string} path The path to the file containing the certificate.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_iot_dps_certificate_verify_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_dps_certificate_verify_command_builder, _super);
    function az_iot_dps_certificate_verify_command_builder(commandPath, resultDataTypeName, certificateName, dpsName, etag, path, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.certificateName(certificateName);
        _this.dpsName(dpsName);
        _this.etag(etag);
        _this.path(path);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** A friendly name for the certificate. */
    az_iot_dps_certificate_verify_command_builder.prototype.certificateName = function (value) {
        this.setFlag("--certificate-name", value);
        return this;
    };
    /** IoT Provisioning Service name. */
    az_iot_dps_certificate_verify_command_builder.prototype.dpsName = function (value) {
        this.setFlag("--dps-name", value);
        return this;
    };
    /** Entity Tag (etag) of the object. */
    az_iot_dps_certificate_verify_command_builder.prototype.etag = function (value) {
        this.setFlag("--etag", value);
        return this;
    };
    /** The path to the file containing the certificate. */
    az_iot_dps_certificate_verify_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_dps_certificate_verify_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_dps_certificate_verify_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_dps_certificate_verify_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a linked IoT hub in an Azure IoT Hub device provisioning service.
 *
 * Syntax:
 * ```
 * az iot dps linked-hub create --connection-string
 *                              --dps-name
 *                              --location
 *                              --resource-group
 *                              [--allocation-weight]
 *                              [--apply-allocation-policy {false, true}]
 *                              [--no-wait]
 *                              [--subscription]
 * ```
 *
 * @param {string} connectionString Connection string of the IoT hub.
 * @param {string} dpsName IoT Provisioning Service name.
 * @param {string} location Location of the IoT hub.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_iot_dps_linked_hub_create_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_dps_linked_hub_create_command_builder, _super);
    function az_iot_dps_linked_hub_create_command_builder(commandPath, resultDataTypeName, connectionString, dpsName, location, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.connectionString(connectionString);
        _this.dpsName(dpsName);
        _this.location(location);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Connection string of the IoT hub. */
    az_iot_dps_linked_hub_create_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** IoT Provisioning Service name. */
    az_iot_dps_linked_hub_create_command_builder.prototype.dpsName = function (value) {
        this.setFlag("--dps-name", value);
        return this;
    };
    /** Location of the IoT hub. */
    az_iot_dps_linked_hub_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_dps_linked_hub_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Allocation weight of the IoT hub. */
    az_iot_dps_linked_hub_create_command_builder.prototype.allocationWeight = function (value) {
        this.setFlag("--allocation-weight", value);
        return this;
    };
    /** A boolean indicating whether to apply allocation policy to the IoT hub. */
    az_iot_dps_linked_hub_create_command_builder.prototype.applyAllocationPolicy = function (value) {
        this.setFlag("--apply-allocation-policy", value.toString());
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_iot_dps_linked_hub_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_dps_linked_hub_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_dps_linked_hub_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a linked IoT hub in an Azure IoT Hub device provisioning service.
 *
 * Syntax:
 * ```
 * az iot dps linked-hub delete --dps-name
 *                              --linked-hub
 *                              --resource-group
 *                              [--no-wait]
 *                              [--subscription]
 * ```
 *
 * @param {string} dpsName IoT Provisioning Service name.
 * @param {string} linkedHub Host name of linked IoT Hub.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_iot_dps_linked_hub_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_dps_linked_hub_delete_command_builder, _super);
    function az_iot_dps_linked_hub_delete_command_builder(commandPath, resultDataTypeName, dpsName, linkedHub, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.dpsName(dpsName);
        _this.linkedHub(linkedHub);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** IoT Provisioning Service name. */
    az_iot_dps_linked_hub_delete_command_builder.prototype.dpsName = function (value) {
        this.setFlag("--dps-name", value);
        return this;
    };
    /** Host name of linked IoT Hub. */
    az_iot_dps_linked_hub_delete_command_builder.prototype.linkedHub = function (value) {
        this.setFlag("--linked-hub", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_dps_linked_hub_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_iot_dps_linked_hub_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_dps_linked_hub_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_dps_linked_hub_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all linked IoT hubs in an Azure IoT Hub device provisioning service.
 *
 * Syntax:
 * ```
 * az iot dps linked-hub list --dps-name
 *                            --resource-group
 *                            [--query-examples]
 *                            [--subscription]
 * ```
 *
 * @param {string} dpsName IoT Provisioning Service name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_iot_dps_linked_hub_list_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_dps_linked_hub_list_command_builder, _super);
    function az_iot_dps_linked_hub_list_command_builder(commandPath, resultDataTypeName, dpsName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.dpsName(dpsName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** IoT Provisioning Service name. */
    az_iot_dps_linked_hub_list_command_builder.prototype.dpsName = function (value) {
        this.setFlag("--dps-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_dps_linked_hub_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iot_dps_linked_hub_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_dps_linked_hub_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_dps_linked_hub_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show details of a linked IoT hub in an Azure IoT Hub device provisioning service.
 *
 * Syntax:
 * ```
 * az iot dps linked-hub show --dps-name
 *                            --linked-hub
 *                            --resource-group
 *                            [--query-examples]
 *                            [--subscription]
 * ```
 *
 * @param {string} dpsName IoT Provisioning Service name.
 * @param {string} linkedHub Host name of linked IoT Hub.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_iot_dps_linked_hub_show_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_dps_linked_hub_show_command_builder, _super);
    function az_iot_dps_linked_hub_show_command_builder(commandPath, resultDataTypeName, dpsName, linkedHub, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.dpsName(dpsName);
        _this.linkedHub(linkedHub);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** IoT Provisioning Service name. */
    az_iot_dps_linked_hub_show_command_builder.prototype.dpsName = function (value) {
        this.setFlag("--dps-name", value);
        return this;
    };
    /** Host name of linked IoT Hub. */
    az_iot_dps_linked_hub_show_command_builder.prototype.linkedHub = function (value) {
        this.setFlag("--linked-hub", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_dps_linked_hub_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iot_dps_linked_hub_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_dps_linked_hub_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_dps_linked_hub_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a linked IoT hub in an Azure IoT Hub device provisioning service.
 *
 * Syntax:
 * ```
 * az iot dps linked-hub update --dps-name
 *                              --linked-hub
 *                              --resource-group
 *                              [--allocation-weight]
 *                              [--apply-allocation-policy {false, true}]
 *                              [--no-wait]
 *                              [--subscription]
 * ```
 *
 * @param {string} dpsName IoT Provisioning Service name.
 * @param {string} linkedHub Host name of linked IoT Hub.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_iot_dps_linked_hub_update_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_dps_linked_hub_update_command_builder, _super);
    function az_iot_dps_linked_hub_update_command_builder(commandPath, resultDataTypeName, dpsName, linkedHub, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.dpsName(dpsName);
        _this.linkedHub(linkedHub);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** IoT Provisioning Service name. */
    az_iot_dps_linked_hub_update_command_builder.prototype.dpsName = function (value) {
        this.setFlag("--dps-name", value);
        return this;
    };
    /** Host name of linked IoT Hub. */
    az_iot_dps_linked_hub_update_command_builder.prototype.linkedHub = function (value) {
        this.setFlag("--linked-hub", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_dps_linked_hub_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Allocation weight of the IoT hub. */
    az_iot_dps_linked_hub_update_command_builder.prototype.allocationWeight = function (value) {
        this.setFlag("--allocation-weight", value);
        return this;
    };
    /** A boolean indicating whether to apply allocation policy to the Iot hub. */
    az_iot_dps_linked_hub_update_command_builder.prototype.applyAllocationPolicy = function (value) {
        this.setFlag("--apply-allocation-policy", value.toString());
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_iot_dps_linked_hub_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_dps_linked_hub_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_dps_linked_hub_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create an Azure IoT Hub device provisioning service.
 *
 * Syntax:
 * ```
 * az iot dps create --name
 *                   --resource-group
 *                   [--location]
 *                   [--sku {S1}]
 *                   [--subscription]
 *                   [--unit]
 * ```
 *
 * @param {string} name IoT Provisioning Service name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_iot_dps_create_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_dps_create_command_builder, _super);
    function az_iot_dps_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** IoT Provisioning Service name. */
    az_iot_dps_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_dps_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Location of your IoT Provisioning Service. Default is the location of target resource group. */
    az_iot_dps_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Pricing tier for the IoT provisioning service. */
    az_iot_dps_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_dps_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Units in your IoT Provisioning Service. */
    az_iot_dps_create_command_builder.prototype.unit = function (value) {
        this.setFlag("--unit", value);
        return this;
    };
    return az_iot_dps_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an Azure IoT Hub device provisioning service.
 *
 * Syntax:
 * ```
 * az iot dps delete [--ids]
 *                   [--name]
 *                   [--resource-group]
 *                   [--subscription]
 * ```
 */
var az_iot_dps_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_dps_delete_command_builder, _super);
    function az_iot_dps_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_dps_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** IoT Provisioning Service name. */
    az_iot_dps_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_dps_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_dps_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_dps_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List Azure IoT Hub device provisioning services.
 *
 * Syntax:
 * ```
 * az iot dps list [--query-examples]
 *                 [--resource-group]
 *                 [--subscription]
 * ```
 */
var az_iot_dps_list_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_dps_list_command_builder, _super);
    function az_iot_dps_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iot_dps_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_dps_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_dps_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_dps_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of an Azure IoT Hub device provisioning service.
 *
 * Syntax:
 * ```
 * az iot dps show [--ids]
 *                 [--name]
 *                 [--query-examples]
 *                 [--resource-group]
 *                 [--subscription]
 * ```
 */
var az_iot_dps_show_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_dps_show_command_builder, _super);
    function az_iot_dps_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_dps_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** IoT Provisioning Service name. */
    az_iot_dps_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iot_dps_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_dps_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_dps_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_dps_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update an Azure IoT Hub device provisioning service.
 *
 * Syntax:
 * ```
 * az iot dps update [--add]
 *                   [--force-string]
 *                   [--ids]
 *                   [--name]
 *                   [--remove]
 *                   [--resource-group]
 *                   [--set]
 *                   [--subscription]
 * ```
 */
var az_iot_dps_update_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_dps_update_command_builder, _super);
    function az_iot_dps_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_iot_dps_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_iot_dps_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_dps_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** IoT Provisioning Service name. */
    az_iot_dps_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_iot_dps_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_dps_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_iot_dps_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_dps_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_dps_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create/upload an Azure IoT Hub certificate.
 *
 * Syntax:
 * ```
 * az iot hub certificate create --hub-name
 *                               --name
 *                               --path
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 *
 * @param {string} hubName IoT Hub name.
 * @param {string} name A friendly name for the certificate.
 * @param {string} path The path to the file containing the certificate.
 */
var az_iot_hub_certificate_create_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_certificate_create_command_builder, _super);
    function az_iot_hub_certificate_create_command_builder(commandPath, resultDataTypeName, hubName, name, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.hubName(hubName);
        _this.name(name);
        _this.path(path);
        return _this;
    }
    /** IoT Hub name. */
    az_iot_hub_certificate_create_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** A friendly name for the certificate. */
    az_iot_hub_certificate_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The path to the file containing the certificate. */
    az_iot_hub_certificate_create_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_certificate_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_certificate_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_certificate_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes an Azure IoT Hub certificate.
 *
 * Syntax:
 * ```
 * az iot hub certificate delete --etag
 *                               --name
 *                               [--hub-name]
 *                               [--ids]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 *
 * @param {string} etag Entity Tag (etag) of the object.
 * @param {string} name A friendly name for the certificate.
 */
var az_iot_hub_certificate_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_certificate_delete_command_builder, _super);
    function az_iot_hub_certificate_delete_command_builder(commandPath, resultDataTypeName, etag, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.etag(etag);
        _this.name(name);
        return _this;
    }
    /** Entity Tag (etag) of the object. */
    az_iot_hub_certificate_delete_command_builder.prototype.etag = function (value) {
        this.setFlag("--etag", value);
        return this;
    };
    /** A friendly name for the certificate. */
    az_iot_hub_certificate_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_certificate_delete_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_certificate_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_certificate_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_certificate_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_certificate_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Generates a verification code for an Azure IoT Hub certificate.
 *
 * Syntax:
 * ```
 * az iot hub certificate generate-verification-code --etag
 *                                                   --name
 *                                                   [--hub-name]
 *                                                   [--ids]
 *                                                   [--resource-group]
 *                                                   [--subscription]
 * ```
 *
 * @param {string} etag Entity Tag (etag) of the object.
 * @param {string} name A friendly name for the certificate.
 */
var az_iot_hub_certificate_generate_verification_code_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_certificate_generate_verification_code_command_builder, _super);
    function az_iot_hub_certificate_generate_verification_code_command_builder(commandPath, resultDataTypeName, etag, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.etag(etag);
        _this.name(name);
        return _this;
    }
    /** Entity Tag (etag) of the object. */
    az_iot_hub_certificate_generate_verification_code_command_builder.prototype.etag = function (value) {
        this.setFlag("--etag", value);
        return this;
    };
    /** A friendly name for the certificate. */
    az_iot_hub_certificate_generate_verification_code_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_certificate_generate_verification_code_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_certificate_generate_verification_code_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_certificate_generate_verification_code_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_certificate_generate_verification_code_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_certificate_generate_verification_code_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists all certificates contained within an Azure IoT Hub.
 *
 * Syntax:
 * ```
 * az iot hub certificate list [--hub-name]
 *                             [--ids]
 *                             [--query-examples]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 */
var az_iot_hub_certificate_list_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_certificate_list_command_builder, _super);
    function az_iot_hub_certificate_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** IoT Hub name. */
    az_iot_hub_certificate_list_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_certificate_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iot_hub_certificate_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_certificate_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_certificate_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_certificate_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows information about a particular Azure IoT Hub certificate.
 *
 * Syntax:
 * ```
 * az iot hub certificate show --name
 *                             [--hub-name]
 *                             [--ids]
 *                             [--query-examples]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 *
 * @param {string} name A friendly name for the certificate.
 */
var az_iot_hub_certificate_show_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_certificate_show_command_builder, _super);
    function az_iot_hub_certificate_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** A friendly name for the certificate. */
    az_iot_hub_certificate_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_certificate_show_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_certificate_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iot_hub_certificate_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_certificate_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_certificate_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_certificate_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update an Azure IoT Hub certificate.
 *
 * Syntax:
 * ```
 * az iot hub certificate update --etag
 *                               --name
 *                               --path
 *                               [--hub-name]
 *                               [--ids]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 *
 * @param {string} etag Entity Tag (etag) of the object.
 * @param {string} name A friendly name for the certificate.
 * @param {string} path The path to the file containing the certificate.
 */
var az_iot_hub_certificate_update_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_certificate_update_command_builder, _super);
    function az_iot_hub_certificate_update_command_builder(commandPath, resultDataTypeName, etag, name, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.etag(etag);
        _this.name(name);
        _this.path(path);
        return _this;
    }
    /** Entity Tag (etag) of the object. */
    az_iot_hub_certificate_update_command_builder.prototype.etag = function (value) {
        this.setFlag("--etag", value);
        return this;
    };
    /** A friendly name for the certificate. */
    az_iot_hub_certificate_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The path to the file containing the certificate. */
    az_iot_hub_certificate_update_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_certificate_update_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_certificate_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_certificate_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_certificate_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_certificate_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Verifies an Azure IoT Hub certificate.
 *
 * Syntax:
 * ```
 * az iot hub certificate verify --etag
 *                               --name
 *                               --path
 *                               [--hub-name]
 *                               [--ids]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 *
 * @param {string} etag Entity Tag (etag) of the object.
 * @param {string} name A friendly name for the certificate.
 * @param {string} path The path to the file containing the certificate.
 */
var az_iot_hub_certificate_verify_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_certificate_verify_command_builder, _super);
    function az_iot_hub_certificate_verify_command_builder(commandPath, resultDataTypeName, etag, name, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.etag(etag);
        _this.name(name);
        _this.path(path);
        return _this;
    }
    /** Entity Tag (etag) of the object. */
    az_iot_hub_certificate_verify_command_builder.prototype.etag = function (value) {
        this.setFlag("--etag", value);
        return this;
    };
    /** A friendly name for the certificate. */
    az_iot_hub_certificate_verify_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The path to the file containing the certificate. */
    az_iot_hub_certificate_verify_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_certificate_verify_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_certificate_verify_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_certificate_verify_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_certificate_verify_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_certificate_verify_command_builder;
}(base_1.CommandBuilder));
/**
 * Create an event hub consumer group.
 *
 * Syntax:
 * ```
 * az iot hub consumer-group create --hub-name
 *                                  --name
 *                                  [--event-hub-name]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 *
 * @param {string} hubName IoT Hub name.
 * @param {string} name Event hub consumer group name.
 */
var az_iot_hub_consumer_group_create_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_consumer_group_create_command_builder, _super);
    function az_iot_hub_consumer_group_create_command_builder(commandPath, resultDataTypeName, hubName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.hubName(hubName);
        _this.name(name);
        return _this;
    }
    /** IoT Hub name. */
    az_iot_hub_consumer_group_create_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** Event hub consumer group name. */
    az_iot_hub_consumer_group_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Event hub endpoint name. */
    az_iot_hub_consumer_group_create_command_builder.prototype.eventHubName = function (value) {
        this.setFlag("--event-hub-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_consumer_group_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_consumer_group_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_consumer_group_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an event hub consumer group.
 *
 * Syntax:
 * ```
 * az iot hub consumer-group delete [--event-hub-name]
 *                                  [--hub-name]
 *                                  [--ids]
 *                                  [--name]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 */
var az_iot_hub_consumer_group_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_consumer_group_delete_command_builder, _super);
    function az_iot_hub_consumer_group_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Event hub endpoint name. */
    az_iot_hub_consumer_group_delete_command_builder.prototype.eventHubName = function (value) {
        this.setFlag("--event-hub-name", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_consumer_group_delete_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_consumer_group_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Event hub consumer group name. */
    az_iot_hub_consumer_group_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_consumer_group_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_consumer_group_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_consumer_group_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List event hub consumer groups.
 *
 * Syntax:
 * ```
 * az iot hub consumer-group list [--event-hub-name]
 *                                [--hub-name]
 *                                [--ids]
 *                                [--query-examples]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 */
var az_iot_hub_consumer_group_list_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_consumer_group_list_command_builder, _super);
    function az_iot_hub_consumer_group_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Event hub endpoint name. */
    az_iot_hub_consumer_group_list_command_builder.prototype.eventHubName = function (value) {
        this.setFlag("--event-hub-name", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_consumer_group_list_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_consumer_group_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iot_hub_consumer_group_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_consumer_group_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_consumer_group_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_consumer_group_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details for an event hub consumer group.
 *
 * Syntax:
 * ```
 * az iot hub consumer-group show [--event-hub-name]
 *                                [--hub-name]
 *                                [--ids]
 *                                [--name]
 *                                [--query-examples]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 */
var az_iot_hub_consumer_group_show_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_consumer_group_show_command_builder, _super);
    function az_iot_hub_consumer_group_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Event hub endpoint name. */
    az_iot_hub_consumer_group_show_command_builder.prototype.eventHubName = function (value) {
        this.setFlag("--event-hub-name", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_consumer_group_show_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_consumer_group_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Event hub consumer group name. */
    az_iot_hub_consumer_group_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iot_hub_consumer_group_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_consumer_group_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_consumer_group_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_consumer_group_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Get IoT Hub's device streams endpoints.
 *
 * Syntax:
 * ```
 * az iot hub devicestream show [--ids]
 *                              [--name]
 *                              [--query-examples]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 */
var az_iot_hub_devicestream_show_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_devicestream_show_command_builder, _super);
    function az_iot_hub_devicestream_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_devicestream_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_devicestream_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iot_hub_devicestream_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_devicestream_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_devicestream_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_devicestream_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a message enrichment for chosen endpoints in your IoT Hub.
 *
 * Syntax:
 * ```
 * az iot hub message-enrichment create --endpoints
 *                                      --key
 *                                      --name
 *                                      --value
 *                                      [--resource-group]
 *                                      [--subscription]
 * ```
 *
 * @param {string} endpoints Endpoint(s) to apply enrichments to. Use a space-separated list for multiple endpoints.
 * @param {string} key The enrichment's key.
 * @param {string} name IoT Hub name.
 * @param {string} value The enrichment's value.
 */
var az_iot_hub_message_enrichment_create_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_message_enrichment_create_command_builder, _super);
    function az_iot_hub_message_enrichment_create_command_builder(commandPath, resultDataTypeName, endpoints, key, name, value) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.endpoints(endpoints);
        _this.key(key);
        _this.name(name);
        _this.value(value);
        return _this;
    }
    /** Endpoint(s) to apply enrichments to. Use a space-separated list for multiple endpoints. */
    az_iot_hub_message_enrichment_create_command_builder.prototype.endpoints = function (value) {
        this.setFlag("--endpoints", value);
        return this;
    };
    /** The enrichment's key. */
    az_iot_hub_message_enrichment_create_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_message_enrichment_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The enrichment's value. */
    az_iot_hub_message_enrichment_create_command_builder.prototype.value = function (value) {
        this.setFlag("--value", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_message_enrichment_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_message_enrichment_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_message_enrichment_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a message enrichment in your IoT hub (by key).
 *
 * Syntax:
 * ```
 * az iot hub message-enrichment delete --key
 *                                      [--ids]
 *                                      [--name]
 *                                      [--resource-group]
 *                                      [--subscription]
 * ```
 *
 * @param {string} key The enrichment's key.
 */
var az_iot_hub_message_enrichment_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_message_enrichment_delete_command_builder, _super);
    function az_iot_hub_message_enrichment_delete_command_builder(commandPath, resultDataTypeName, key) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.key(key);
        return _this;
    }
    /** The enrichment's key. */
    az_iot_hub_message_enrichment_delete_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_message_enrichment_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_message_enrichment_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_message_enrichment_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_message_enrichment_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_message_enrichment_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Get information on all message enrichments for your IoT Hub.
 *
 * Syntax:
 * ```
 * az iot hub message-enrichment list [--ids]
 *                                    [--name]
 *                                    [--query-examples]
 *                                    [--resource-group]
 *                                    [--subscription]
 * ```
 */
var az_iot_hub_message_enrichment_list_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_message_enrichment_list_command_builder, _super);
    function az_iot_hub_message_enrichment_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_message_enrichment_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_message_enrichment_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iot_hub_message_enrichment_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_message_enrichment_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_message_enrichment_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_message_enrichment_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a message enrichment in your IoT hub (by key).
 *
 * Syntax:
 * ```
 * az iot hub message-enrichment update --endpoints
 *                                      --key
 *                                      --value
 *                                      [--ids]
 *                                      [--name]
 *                                      [--resource-group]
 *                                      [--subscription]
 * ```
 *
 * @param {string} endpoints Endpoint(s) to apply enrichments to. Use a space-separated list for multiple endpoints.
 * @param {string} key The enrichment's key.
 * @param {string} value The enrichment's value.
 */
var az_iot_hub_message_enrichment_update_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_message_enrichment_update_command_builder, _super);
    function az_iot_hub_message_enrichment_update_command_builder(commandPath, resultDataTypeName, endpoints, key, value) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.endpoints(endpoints);
        _this.key(key);
        _this.value(value);
        return _this;
    }
    /** Endpoint(s) to apply enrichments to. Use a space-separated list for multiple endpoints. */
    az_iot_hub_message_enrichment_update_command_builder.prototype.endpoints = function (value) {
        this.setFlag("--endpoints", value);
        return this;
    };
    /** The enrichment's key. */
    az_iot_hub_message_enrichment_update_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** The enrichment's value. */
    az_iot_hub_message_enrichment_update_command_builder.prototype.value = function (value) {
        this.setFlag("--value", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_message_enrichment_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_message_enrichment_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_message_enrichment_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_message_enrichment_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_message_enrichment_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new shared access policy in an IoT hub.
 *
 * Syntax:
 * ```
 * az iot hub policy create --hub-name
 *                          --name
 *                          --permissions
 *                          [--resource-group]
 *                          [--subscription]
 * ```
 *
 * @param {string} hubName IoT Hub name.
 * @param {string} name Shared access policy name.
 * @param {string} permissions Permissions of shared access policy. Use space-separated list for multiple permissions. Possible values: RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect.
 */
var az_iot_hub_policy_create_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_policy_create_command_builder, _super);
    function az_iot_hub_policy_create_command_builder(commandPath, resultDataTypeName, hubName, name, permissions) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.hubName(hubName);
        _this.name(name);
        _this.permissions(permissions);
        return _this;
    }
    /** IoT Hub name. */
    az_iot_hub_policy_create_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** Shared access policy name. */
    az_iot_hub_policy_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Permissions of shared access policy. Use space-separated list for multiple permissions. Possible values: RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect. */
    az_iot_hub_policy_create_command_builder.prototype.permissions = function (value) {
        this.setFlag("--permissions", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_policy_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_policy_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_policy_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a shared access policy from an IoT hub.
 *
 * Syntax:
 * ```
 * az iot hub policy delete [--hub-name]
 *                          [--ids]
 *                          [--name]
 *                          [--resource-group]
 *                          [--subscription]
 * ```
 */
var az_iot_hub_policy_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_policy_delete_command_builder, _super);
    function az_iot_hub_policy_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** IoT Hub name. */
    az_iot_hub_policy_delete_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_policy_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Shared access policy name. */
    az_iot_hub_policy_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_policy_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_policy_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_policy_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List shared access policies of an IoT hub.
 *
 * Syntax:
 * ```
 * az iot hub policy list [--hub-name]
 *                        [--ids]
 *                        [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 */
var az_iot_hub_policy_list_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_policy_list_command_builder, _super);
    function az_iot_hub_policy_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** IoT Hub name. */
    az_iot_hub_policy_list_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_policy_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iot_hub_policy_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_policy_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_policy_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_policy_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Regenerate keys of a shared access policy of an IoT hub.
 *
 * Syntax:
 * ```
 * az iot hub policy renew-key --renew-key {primary, secondary, swap}
 *                             [--hub-name]
 *                             [--ids]
 *                             [--name]
 *                             [--no-wait]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 *
 * @param {'primary' | 'secondary' | 'swap'} renewKey Regenerate keys.
 */
var az_iot_hub_policy_renew_key_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_policy_renew_key_command_builder, _super);
    function az_iot_hub_policy_renew_key_command_builder(commandPath, resultDataTypeName, renewKey) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.renewKey(renewKey);
        return _this;
    }
    /** Regenerate keys. */
    az_iot_hub_policy_renew_key_command_builder.prototype.renewKey = function (value) {
        this.setFlag("--renew-key", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_policy_renew_key_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_policy_renew_key_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Shared access policy name. */
    az_iot_hub_policy_renew_key_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_iot_hub_policy_renew_key_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_policy_renew_key_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_policy_renew_key_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_policy_renew_key_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a shared access policy of an IoT hub.
 *
 * Syntax:
 * ```
 * az iot hub policy show [--hub-name]
 *                        [--ids]
 *                        [--name]
 *                        [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 */
var az_iot_hub_policy_show_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_policy_show_command_builder, _super);
    function az_iot_hub_policy_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** IoT Hub name. */
    az_iot_hub_policy_show_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_policy_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Shared access policy name. */
    az_iot_hub_policy_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iot_hub_policy_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_policy_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_policy_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_policy_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a route in IoT Hub.
 *
 * Syntax:
 * ```
 * az iot hub route create --en
 *                         --hub-name
 *                         --name
 *                         --source {devicejoblifecycleevents, devicelifecycleevents, devicemessages, digitaltwinchangeevents, invalid, twinchangeevents}
 *                         [--condition]
 *                         [--enabled {false, true}]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 *
 * @param {string} endpointName Name of the routing endpoint.
 * @param {string} hubName IoT Hub name.
 * @param {string} routeName Name of the Route.
 * @param {'devicejoblifecycleevents' | 'devicelifecycleevents' | 'devicemessages' | 'digitaltwinchangeevents' | 'invalid' | 'twinchangeevents'} sourceType Source of the route.
 */
var az_iot_hub_route_create_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_route_create_command_builder, _super);
    function az_iot_hub_route_create_command_builder(commandPath, resultDataTypeName, endpointName, hubName, routeName, sourceType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.endpointName(endpointName);
        _this.hubName(hubName);
        _this.routeName(routeName);
        _this.sourceType(sourceType);
        return _this;
    }
    /** Name of the routing endpoint. */
    az_iot_hub_route_create_command_builder.prototype.endpointName = function (value) {
        this.setFlag("--endpoint-name", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_route_create_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** Name of the Route. */
    az_iot_hub_route_create_command_builder.prototype.routeName = function (value) {
        this.setFlag("--route-name", value);
        return this;
    };
    /** Source of the route. */
    az_iot_hub_route_create_command_builder.prototype.sourceType = function (value) {
        this.setFlag("--source-type", value);
        return this;
    };
    /** Condition that is evaluated to apply the routing rule. */
    az_iot_hub_route_create_command_builder.prototype.condition = function (value) {
        this.setFlag("--condition", value);
        return this;
    };
    /** A boolean indicating whether to enable route to the Iot hub. */
    az_iot_hub_route_create_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_route_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_route_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_route_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete all or mentioned route for your IoT Hub.
 *
 * Syntax:
 * ```
 * az iot hub route delete [--hub-name]
 *                         [--ids]
 *                         [--name]
 *                         [--resource-group]
 *                         [--source {devicejoblifecycleevents, devicelifecycleevents, devicemessages, digitaltwinchangeevents, invalid, twinchangeevents}]
 *                         [--subscription]
 * ```
 */
var az_iot_hub_route_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_route_delete_command_builder, _super);
    function az_iot_hub_route_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** IoT Hub name. */
    az_iot_hub_route_delete_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_route_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Route. */
    az_iot_hub_route_delete_command_builder.prototype.routeName = function (value) {
        this.setFlag("--route-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_route_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Source of the route. */
    az_iot_hub_route_delete_command_builder.prototype.sourceType = function (value) {
        this.setFlag("--source-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_route_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_route_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Get all the routes in IoT Hub.
 *
 * Syntax:
 * ```
 * az iot hub route list [--hub-name]
 *                       [--ids]
 *                       [--query-examples]
 *                       [--resource-group]
 *                       [--source {devicejoblifecycleevents, devicelifecycleevents, devicemessages, digitaltwinchangeevents, invalid, twinchangeevents}]
 *                       [--subscription]
 * ```
 */
var az_iot_hub_route_list_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_route_list_command_builder, _super);
    function az_iot_hub_route_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** IoT Hub name. */
    az_iot_hub_route_list_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_route_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iot_hub_route_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_route_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Source of the route. */
    az_iot_hub_route_list_command_builder.prototype.sourceType = function (value) {
        this.setFlag("--source-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_route_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_route_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get information about the route in IoT Hub.
 *
 * Syntax:
 * ```
 * az iot hub route show --name
 *                       [--hub-name]
 *                       [--ids]
 *                       [--query-examples]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 *
 * @param {string} routeName Name of the Route.
 */
var az_iot_hub_route_show_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_route_show_command_builder, _super);
    function az_iot_hub_route_show_command_builder(commandPath, resultDataTypeName, routeName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.routeName(routeName);
        return _this;
    }
    /** Name of the Route. */
    az_iot_hub_route_show_command_builder.prototype.routeName = function (value) {
        this.setFlag("--route-name", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_route_show_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_route_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iot_hub_route_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_route_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_route_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_route_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Test all routes or mentioned route in IoT Hub.
 *
 * Syntax:
 * ```
 * az iot hub route test [--ap]
 *                       [--body]
 *                       [--hub-name]
 *                       [--ids]
 *                       [--name]
 *                       [--resource-group]
 *                       [--source {devicejoblifecycleevents, devicelifecycleevents, devicemessages, digitaltwinchangeevents, invalid, twinchangeevents}]
 *                       [--sp]
 *                       [--subscription]
 * ```
 */
var az_iot_hub_route_test_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_route_test_command_builder, _super);
    function az_iot_hub_route_test_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** App properties of the route message. */
    az_iot_hub_route_test_command_builder.prototype.appProperties = function (value) {
        this.setFlag("--app-properties", value);
        return this;
    };
    /** Body of the route message. */
    az_iot_hub_route_test_command_builder.prototype.body = function (value) {
        this.setFlag("--body", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_route_test_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_route_test_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Route. */
    az_iot_hub_route_test_command_builder.prototype.routeName = function (value) {
        this.setFlag("--route-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_route_test_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Source of the route. */
    az_iot_hub_route_test_command_builder.prototype.sourceType = function (value) {
        this.setFlag("--source-type", value);
        return this;
    };
    /** System properties of the route message. */
    az_iot_hub_route_test_command_builder.prototype.systemProperties = function (value) {
        this.setFlag("--system-properties", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_route_test_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_route_test_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a route in IoT Hub.
 *
 * Syntax:
 * ```
 * az iot hub route update --name
 *                         [--condition]
 *                         [--en]
 *                         [--enabled {false, true}]
 *                         [--hub-name]
 *                         [--ids]
 *                         [--resource-group]
 *                         [--source {devicejoblifecycleevents, devicelifecycleevents, devicemessages, digitaltwinchangeevents, invalid, twinchangeevents}]
 *                         [--subscription]
 * ```
 *
 * @param {string} routeName Name of the Route.
 */
var az_iot_hub_route_update_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_route_update_command_builder, _super);
    function az_iot_hub_route_update_command_builder(commandPath, resultDataTypeName, routeName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.routeName(routeName);
        return _this;
    }
    /** Name of the Route. */
    az_iot_hub_route_update_command_builder.prototype.routeName = function (value) {
        this.setFlag("--route-name", value);
        return this;
    };
    /** Condition that is evaluated to apply the routing rule. */
    az_iot_hub_route_update_command_builder.prototype.condition = function (value) {
        this.setFlag("--condition", value);
        return this;
    };
    /** Name of the routing endpoint. */
    az_iot_hub_route_update_command_builder.prototype.endpointName = function (value) {
        this.setFlag("--endpoint-name", value);
        return this;
    };
    /** A boolean indicating whether to enable route to the Iot hub. */
    az_iot_hub_route_update_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_route_update_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_route_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_route_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Source of the route. */
    az_iot_hub_route_update_command_builder.prototype.sourceType = function (value) {
        this.setFlag("--source-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_route_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_route_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Add an endpoint to your IoT Hub.
 *
 * Syntax:
 * ```
 * az iot hub routing-endpoint create --endpoint-name
 *                                    --endpoint-resource-group
 *                                    --endpoint-subscription-id
 *                                    --endpoint-type {azurestoragecontainer, eventhub, servicebusqueue, servicebustopic}
 *                                    --hub-name
 *                                    [--auth-type {identitybased, keybased}]
 *                                    [--batch-frequency]
 *                                    [--chunk-size]
 *                                    [--connection-string]
 *                                    [--container]
 *                                    [--encoding {avro, json}]
 *                                    [--endpoint-uri]
 *                                    [--entity-path]
 *                                    [--ff]
 *                                    [--resource-group]
 *                                    [--subscription]
 * ```
 *
 * @param {string} endpointName Name of the Routing Endpoint.
 * @param {string} endpointResourceGroup Resource group of the Endpoint resoure.
 * @param {string} endpointSubscriptionId SubscriptionId of the Endpoint resource.
 * @param {'azurestoragecontainer' | 'eventhub' | 'servicebusqueue' | 'servicebustopic'} endpointType Type of the Routing Endpoint.
 * @param {string} hubName IoT Hub name.
 */
var az_iot_hub_routing_endpoint_create_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_routing_endpoint_create_command_builder, _super);
    function az_iot_hub_routing_endpoint_create_command_builder(commandPath, resultDataTypeName, endpointName, endpointResourceGroup, endpointSubscriptionId, endpointType, hubName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.endpointName(endpointName);
        _this.endpointResourceGroup(endpointResourceGroup);
        _this.endpointSubscriptionId(endpointSubscriptionId);
        _this.endpointType(endpointType);
        _this.hubName(hubName);
        return _this;
    }
    /** Name of the Routing Endpoint. */
    az_iot_hub_routing_endpoint_create_command_builder.prototype.endpointName = function (value) {
        this.setFlag("--endpoint-name", value);
        return this;
    };
    /** Resource group of the Endpoint resoure. */
    az_iot_hub_routing_endpoint_create_command_builder.prototype.endpointResourceGroup = function (value) {
        this.setFlag("--endpoint-resource-group", value);
        return this;
    };
    /** SubscriptionId of the Endpoint resource. */
    az_iot_hub_routing_endpoint_create_command_builder.prototype.endpointSubscriptionId = function (value) {
        this.setFlag("--endpoint-subscription-id", value);
        return this;
    };
    /** Type of the Routing Endpoint. */
    az_iot_hub_routing_endpoint_create_command_builder.prototype.endpointType = function (value) {
        this.setFlag("--endpoint-type", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_routing_endpoint_create_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** Authentication type for the endpoint. The default is keyBased. */
    az_iot_hub_routing_endpoint_create_command_builder.prototype.authType = function (value) {
        this.setFlag("--auth-type", value);
        return this;
    };
    /** Request batch frequency in seconds. The maximum amount of time that can elapse before data is written to a blob, between 60 and 720 seconds. */
    az_iot_hub_routing_endpoint_create_command_builder.prototype.batchFrequency = function (value) {
        this.setFlag("--batch-frequency", value);
        return this;
    };
    /** Request chunk size in megabytes(MB). The maximum size of blobs, between 10 and 500 MB. */
    az_iot_hub_routing_endpoint_create_command_builder.prototype.chunkSize = function (value) {
        this.setFlag("--chunk-size", value);
        return this;
    };
    /** Connection string of the Routing Endpoint. */
    az_iot_hub_routing_endpoint_create_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** Name of the storage container. */
    az_iot_hub_routing_endpoint_create_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Encoding format for the container. The default is AVRO. Note that this field is applicable only for blob container endpoints. */
    az_iot_hub_routing_endpoint_create_command_builder.prototype.encoding = function (value) {
        this.setFlag("--encoding", value);
        return this;
    };
    /** The uri of the endpoint resource. */
    az_iot_hub_routing_endpoint_create_command_builder.prototype.endpointUri = function (value) {
        this.setFlag("--endpoint-uri", value);
        return this;
    };
    /** The entity path of the endpoint resource. */
    az_iot_hub_routing_endpoint_create_command_builder.prototype.entityPath = function (value) {
        this.setFlag("--entity-path", value);
        return this;
    };
    /** File name format for the blob. The file name format must contain {iothub}, {partition}, {YYYY}, {MM}, {DD}, {HH} and {mm} fields. All parameters are mandatory but can be reordered with or without delimiters. */
    az_iot_hub_routing_endpoint_create_command_builder.prototype.fileNameFormat = function (value) {
        this.setFlag("--file-name-format", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_routing_endpoint_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_routing_endpoint_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_routing_endpoint_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete all or mentioned endpoint for your IoT Hub.
 *
 * Syntax:
 * ```
 * az iot hub routing-endpoint delete [--endpoint-name]
 *                                    [--endpoint-type {azurestoragecontainer, eventhub, servicebusqueue, servicebustopic}]
 *                                    [--hub-name]
 *                                    [--ids]
 *                                    [--resource-group]
 *                                    [--subscription]
 * ```
 */
var az_iot_hub_routing_endpoint_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_routing_endpoint_delete_command_builder, _super);
    function az_iot_hub_routing_endpoint_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Routing Endpoint. */
    az_iot_hub_routing_endpoint_delete_command_builder.prototype.endpointName = function (value) {
        this.setFlag("--endpoint-name", value);
        return this;
    };
    /** Type of the Routing Endpoint. */
    az_iot_hub_routing_endpoint_delete_command_builder.prototype.endpointType = function (value) {
        this.setFlag("--endpoint-type", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_routing_endpoint_delete_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_routing_endpoint_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_routing_endpoint_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_routing_endpoint_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_routing_endpoint_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Get information on all the endpoints for your IoT Hub.
 *
 * Syntax:
 * ```
 * az iot hub routing-endpoint list [--endpoint-type {azurestoragecontainer, eventhub, servicebusqueue, servicebustopic}]
 *                                  [--hub-name]
 *                                  [--ids]
 *                                  [--query-examples]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 */
var az_iot_hub_routing_endpoint_list_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_routing_endpoint_list_command_builder, _super);
    function az_iot_hub_routing_endpoint_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Type of the Routing Endpoint. */
    az_iot_hub_routing_endpoint_list_command_builder.prototype.endpointType = function (value) {
        this.setFlag("--endpoint-type", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_routing_endpoint_list_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_routing_endpoint_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iot_hub_routing_endpoint_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_routing_endpoint_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_routing_endpoint_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_routing_endpoint_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get information on mentioned endpoint for your IoT Hub.
 *
 * Syntax:
 * ```
 * az iot hub routing-endpoint show --endpoint-name
 *                                  [--hub-name]
 *                                  [--ids]
 *                                  [--query-examples]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 *
 * @param {string} endpointName Name of the Routing Endpoint.
 */
var az_iot_hub_routing_endpoint_show_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_routing_endpoint_show_command_builder, _super);
    function az_iot_hub_routing_endpoint_show_command_builder(commandPath, resultDataTypeName, endpointName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.endpointName(endpointName);
        return _this;
    }
    /** Name of the Routing Endpoint. */
    az_iot_hub_routing_endpoint_show_command_builder.prototype.endpointName = function (value) {
        this.setFlag("--endpoint-name", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_routing_endpoint_show_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_routing_endpoint_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iot_hub_routing_endpoint_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_routing_endpoint_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_routing_endpoint_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_routing_endpoint_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create an Azure IoT hub.
 *
 * Syntax:
 * ```
 * az iot hub create --name
 *                   --resource-group
 *                   [--c2d-max-delivery-count]
 *                   [--c2d-ttl]
 *                   [--fc]
 *                   [--fcs]
 *                   [--fcu]
 *                   [--fd]
 *                   [--feedback-lock-duration]
 *                   [--feedback-ttl]
 *                   [--fileupload-notification-max-delivery-count]
 *                   [--fileupload-notification-ttl]
 *                   [--fileupload-notifications {false, true}]
 *                   [--fileupload-sas-ttl]
 *                   [--fileupload-storage-auth-type]
 *                   [--location]
 *                   [--min-tls-version]
 *                   [--partition-count]
 *                   [--rd]
 *                   [--sku {B1, B2, B3, F1, S1, S2, S3}]
 *                   [--subscription]
 *                   [--unit]
 * ```
 *
 * @param {string} name IoT Hub name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_iot_hub_create_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_create_command_builder, _super);
    function az_iot_hub_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** IoT Hub name. */
    az_iot_hub_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The number of times the IoT hub will attempt to deliver a cloud-to-device message to a device, between 1 and 100. */
    az_iot_hub_create_command_builder.prototype.c2DMaxDeliveryCount = function (value) {
        this.setFlag("--c2d-max-delivery-count", value);
        return this;
    };
    /** The amount of time a message is available for the device to consume before it is expired by IoT Hub, between 1 and 48 hours. */
    az_iot_hub_create_command_builder.prototype.c2DTtl = function (value) {
        this.setFlag("--c2d-ttl", value);
        return this;
    };
    /** The name of the root container where you upload files. The container need not exist but should be creatable using the connectionString specified. */
    az_iot_hub_create_command_builder.prototype.fileuploadStorageContainerName = function (value) {
        this.setFlag("--fileupload-storage-container-name", value);
        return this;
    };
    /** The connection string for the Azure Storage account to which files are uploaded. */
    az_iot_hub_create_command_builder.prototype.fileuploadStorageConnectionstring = function (value) {
        this.setFlag("--fileupload-storage-connectionstring", value);
        return this;
    };
    /** The container URI for the Azure Storage account to which files are uploaded. */
    az_iot_hub_create_command_builder.prototype.fileuploadStorageContainerUri = function (value) {
        this.setFlag("--fileupload-storage-container-uri", value);
        return this;
    };
    /** The number of times the IoT hub attempts to deliver a message on the feedback queue, between 1 and 100. */
    az_iot_hub_create_command_builder.prototype.feedbackMaxDeliveryCount = function (value) {
        this.setFlag("--feedback-max-delivery-count", value);
        return this;
    };
    /** The lock duration for the feedback queue, between 5 and 300 seconds. */
    az_iot_hub_create_command_builder.prototype.feedbackLockDuration = function (value) {
        this.setFlag("--feedback-lock-duration", value);
        return this;
    };
    /** The period of time for which the IoT hub will maintain the feedback for expiration or delivery of cloud-to-device messages, between 1 and 48 hours. */
    az_iot_hub_create_command_builder.prototype.feedbackTtl = function (value) {
        this.setFlag("--feedback-ttl", value);
        return this;
    };
    /** The number of times the IoT hub will attempt to deliver a file notification message, between 1 and 100. */
    az_iot_hub_create_command_builder.prototype.fileuploadNotificationMaxDeliveryCount = function (value) {
        this.setFlag("--fileupload-notification-max-delivery-count", value);
        return this;
    };
    /** The amount of time a file upload notification is available for the service to consume before it is expired by IoT Hub, between 1 and 48 hours. */
    az_iot_hub_create_command_builder.prototype.fileuploadNotificationTtl = function (value) {
        this.setFlag("--fileupload-notification-ttl", value);
        return this;
    };
    /** A boolean indicating whether to log information about uploaded files to the messages/servicebound/filenotifications IoT Hub endpoint. */
    az_iot_hub_create_command_builder.prototype.fileuploadNotifications = function (value) {
        this.setFlag("--fileupload-notifications", value.toString());
        return this;
    };
    /** The amount of time a SAS URI generated by IoT Hub is valid before it expires, between 1 and 24 hours. */
    az_iot_hub_create_command_builder.prototype.fileuploadSasTtl = function (value) {
        this.setFlag("--fileupload-sas-ttl", value);
        return this;
    };
    /** The authentication type for the Azure Storage account to which files are uploaded.Possible values are keyBased and identityBased. */
    az_iot_hub_create_command_builder.prototype.fileuploadStorageAuthType = function (value) {
        this.setFlag("--fileupload-storage-auth-type", value);
        return this;
    };
    /** Location of your IoT Hub. Default is the location of target resource group. */
    az_iot_hub_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Specify the minimum TLS version to support for this hub. Can be set to "1.2" to have clients that use a TLS version below 1.2 to be rejected. */
    az_iot_hub_create_command_builder.prototype.minTlsVersion = function (value) {
        this.setFlag("--min-tls-version", value);
        return this;
    };
    /** The number of partitions of the backing Event Hub for device-to-cloud messages. */
    az_iot_hub_create_command_builder.prototype.partitionCount = function (value) {
        this.setFlag("--partition-count", value);
        return this;
    };
    /** Specifies how long this IoT hub will maintain device-to-cloud events, between 1 and 7 days. */
    az_iot_hub_create_command_builder.prototype.retentionDay = function (value) {
        this.setFlag("--retention-day", value);
        return this;
    };
    /** Pricing tier for Azure IoT Hub. Note that only one free IoT hub instance (F1) is allowed in each subscription. Exception will be thrown if free instances exceed one. */
    az_iot_hub_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Units in your IoT Hub. */
    az_iot_hub_create_command_builder.prototype.unit = function (value) {
        this.setFlag("--unit", value);
        return this;
    };
    return az_iot_hub_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an IoT hub.
 *
 * Syntax:
 * ```
 * az iot hub delete [--ids]
 *                   [--name]
 *                   [--resource-group]
 *                   [--subscription]
 * ```
 */
var az_iot_hub_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_delete_command_builder, _super);
    function az_iot_hub_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List IoT hubs.
 *
 * Syntax:
 * ```
 * az iot hub list [--query-examples]
 *                 [--resource-group]
 *                 [--subscription]
 * ```
 */
var az_iot_hub_list_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_list_command_builder, _super);
    function az_iot_hub_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iot_hub_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List available pricing tiers.
 *
 * Syntax:
 * ```
 * az iot hub list-skus [--ids]
 *                      [--name]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
var az_iot_hub_list_skus_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_list_skus_command_builder, _super);
    function az_iot_hub_list_skus_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_list_skus_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_list_skus_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_list_skus_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_list_skus_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_list_skus_command_builder;
}(base_1.CommandBuilder));
/**
 * Initiate a manual failover for the IoT Hub to the geo-paired disaster recovery region.
 *
 * Syntax:
 * ```
 * az iot hub manual-failover [--ids]
 *                            [--name]
 *                            [--no-wait]
 *                            [--resource-group]
 *                            [--subscription]
 * ```
 */
var az_iot_hub_manual_failover_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_manual_failover_command_builder, _super);
    function az_iot_hub_manual_failover_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_manual_failover_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_manual_failover_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_iot_hub_manual_failover_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_manual_failover_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_manual_failover_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_manual_failover_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of an IoT hub.
 *
 * Syntax:
 * ```
 * az iot hub show [--ids]
 *                 [--name]
 *                 [--query-examples]
 *                 [--resource-group]
 *                 [--subscription]
 * ```
 */
var az_iot_hub_show_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_show_command_builder, _super);
    function az_iot_hub_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iot_hub_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the connection strings for an IoT hub.
 *
 * Syntax:
 * ```
 * az iot hub show-connection-string [--all]
 *                                   [--hub-name]
 *                                   [--ids]
 *                                   [--key {primary, secondary}]
 *                                   [--policy-name]
 *                                   [--resource-group]
 *                                   [--subscription]
 * ```
 */
var az_iot_hub_show_connection_string_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_show_connection_string_command_builder, _super);
    function az_iot_hub_show_connection_string_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Allow to show all shared access policies. */
    az_iot_hub_show_connection_string_command_builder.prototype.all = function (value) {
        this.setFlag("--all", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_show_connection_string_command_builder.prototype.hubName = function (value) {
        this.setFlag("--hub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_show_connection_string_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The key to use. */
    az_iot_hub_show_connection_string_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** Shared access policy to use. */
    az_iot_hub_show_connection_string_command_builder.prototype.policyName = function (value) {
        this.setFlag("--policy-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_show_connection_string_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_show_connection_string_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_show_connection_string_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the quota metrics for an IoT hub.
 *
 * Syntax:
 * ```
 * az iot hub show-quota-metrics [--ids]
 *                               [--name]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 */
var az_iot_hub_show_quota_metrics_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_show_quota_metrics_command_builder, _super);
    function az_iot_hub_show_quota_metrics_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_show_quota_metrics_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_show_quota_metrics_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_show_quota_metrics_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_show_quota_metrics_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_show_quota_metrics_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the statistics for an IoT hub.
 *
 * Syntax:
 * ```
 * az iot hub show-stats [--ids]
 *                       [--name]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
var az_iot_hub_show_stats_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_show_stats_command_builder, _super);
    function az_iot_hub_show_stats_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_show_stats_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_show_stats_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_show_stats_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_show_stats_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iot_hub_show_stats_command_builder;
}(base_1.CommandBuilder));
/**
 * Update metadata for an IoT hub.
 *
 * Syntax:
 * ```
 * az iot hub update [--add]
 *                   [--c2d-max-delivery-count]
 *                   [--c2d-ttl]
 *                   [--fc]
 *                   [--fcs]
 *                   [--fcu]
 *                   [--fd]
 *                   [--feedback-lock-duration]
 *                   [--feedback-ttl]
 *                   [--fileupload-notification-max-delivery-count]
 *                   [--fileupload-notification-ttl]
 *                   [--fileupload-notifications {false, true}]
 *                   [--fileupload-sas-ttl]
 *                   [--fileupload-storage-auth-type]
 *                   [--force-string]
 *                   [--ids]
 *                   [--name]
 *                   [--rd]
 *                   [--remove]
 *                   [--resource-group]
 *                   [--set]
 *                   [--sku {B1, B2, B3, F1, S1, S2, S3}]
 *                   [--subscription]
 *                   [--unit]
 * ```
 */
var az_iot_hub_update_command_builder = /** @class */ (function (_super) {
    __extends(az_iot_hub_update_command_builder, _super);
    function az_iot_hub_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_iot_hub_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The number of times the IoT hub will attempt to deliver a cloud-to-device message to a device, between 1 and 100. */
    az_iot_hub_update_command_builder.prototype.c2DMaxDeliveryCount = function (value) {
        this.setFlag("--c2d-max-delivery-count", value);
        return this;
    };
    /** The amount of time a message is available for the device to consume before it is expired by IoT Hub, between 1 and 48 hours. */
    az_iot_hub_update_command_builder.prototype.c2DTtl = function (value) {
        this.setFlag("--c2d-ttl", value);
        return this;
    };
    /** The name of the root container where you upload files. The container need not exist but should be creatable using the connectionString specified. */
    az_iot_hub_update_command_builder.prototype.fileuploadStorageContainerName = function (value) {
        this.setFlag("--fileupload-storage-container-name", value);
        return this;
    };
    /** The connection string for the Azure Storage account to which files are uploaded. */
    az_iot_hub_update_command_builder.prototype.fileuploadStorageConnectionstring = function (value) {
        this.setFlag("--fileupload-storage-connectionstring", value);
        return this;
    };
    /** The container URI for the Azure Storage account to which files are uploaded. */
    az_iot_hub_update_command_builder.prototype.fileuploadStorageContainerUri = function (value) {
        this.setFlag("--fileupload-storage-container-uri", value);
        return this;
    };
    /** The number of times the IoT hub attempts to deliver a message on the feedback queue, between 1 and 100. */
    az_iot_hub_update_command_builder.prototype.feedbackMaxDeliveryCount = function (value) {
        this.setFlag("--feedback-max-delivery-count", value);
        return this;
    };
    /** The lock duration for the feedback queue, between 5 and 300 seconds. */
    az_iot_hub_update_command_builder.prototype.feedbackLockDuration = function (value) {
        this.setFlag("--feedback-lock-duration", value);
        return this;
    };
    /** The period of time for which the IoT hub will maintain the feedback for expiration or delivery of cloud-to-device messages, between 1 and 48 hours. */
    az_iot_hub_update_command_builder.prototype.feedbackTtl = function (value) {
        this.setFlag("--feedback-ttl", value);
        return this;
    };
    /** The number of times the IoT hub will attempt to deliver a file notification message, between 1 and 100. */
    az_iot_hub_update_command_builder.prototype.fileuploadNotificationMaxDeliveryCount = function (value) {
        this.setFlag("--fileupload-notification-max-delivery-count", value);
        return this;
    };
    /** The amount of time a file upload notification is available for the service to consume before it is expired by IoT Hub, between 1 and 48 hours. */
    az_iot_hub_update_command_builder.prototype.fileuploadNotificationTtl = function (value) {
        this.setFlag("--fileupload-notification-ttl", value);
        return this;
    };
    /** A boolean indicating whether to log information about uploaded files to the messages/servicebound/filenotifications IoT Hub endpoint. */
    az_iot_hub_update_command_builder.prototype.fileuploadNotifications = function (value) {
        this.setFlag("--fileupload-notifications", value.toString());
        return this;
    };
    /** The amount of time a SAS URI generated by IoT Hub is valid before it expires, between 1 and 24 hours. */
    az_iot_hub_update_command_builder.prototype.fileuploadSasTtl = function (value) {
        this.setFlag("--fileupload-sas-ttl", value);
        return this;
    };
    /** The authentication type for the Azure Storage account to which files are uploaded.Possible values are keyBased and identityBased. */
    az_iot_hub_update_command_builder.prototype.fileuploadStorageAuthType = function (value) {
        this.setFlag("--fileupload-storage-auth-type", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_iot_hub_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_iot_hub_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** IoT Hub name. */
    az_iot_hub_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Specifies how long this IoT hub will maintain device-to-cloud events, between 1 and 7 days. */
    az_iot_hub_update_command_builder.prototype.retentionDay = function (value) {
        this.setFlag("--retention-day", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_iot_hub_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iot_hub_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_iot_hub_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Pricing tier for Azure IoT Hub. Note that only one free IoT hub instance (F1) is allowed in each subscription. Exception will be thrown if free instances exceed one. */
    az_iot_hub_update_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iot_hub_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Units in your IoT Hub. */
    az_iot_hub_update_command_builder.prototype.unit = function (value) {
        this.setFlag("--unit", value);
        return this;
    };
    return az_iot_hub_update_command_builder;
}(base_1.CommandBuilder));
