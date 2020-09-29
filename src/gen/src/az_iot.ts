import { CommandBuilder } from '../base';
import { az_iot_central_app_create_command_result } from './models/az_iot_central_app_create_command_result'
import { az_iot_central_app_delete_command_result } from './models/az_iot_central_app_delete_command_result'
import { az_iot_central_app_list_command_result } from './models/az_iot_central_app_list_command_result'
import { az_iot_central_app_show_command_result } from './models/az_iot_central_app_show_command_result'
import { az_iot_central_app_update_command_result } from './models/az_iot_central_app_update_command_result'
import { az_iot_dps_access_policy_create_command_result } from './models/az_iot_dps_access_policy_create_command_result'
import { az_iot_dps_access_policy_delete_command_result } from './models/az_iot_dps_access_policy_delete_command_result'
import { az_iot_dps_access_policy_list_command_result } from './models/az_iot_dps_access_policy_list_command_result'
import { az_iot_dps_access_policy_show_command_result } from './models/az_iot_dps_access_policy_show_command_result'
import { az_iot_dps_access_policy_update_command_result } from './models/az_iot_dps_access_policy_update_command_result'
import { az_iot_dps_certificate_create_command_result } from './models/az_iot_dps_certificate_create_command_result'
import { az_iot_dps_certificate_delete_command_result } from './models/az_iot_dps_certificate_delete_command_result'
import { az_iot_dps_certificate_generate_verification_code_command_result } from './models/az_iot_dps_certificate_generate_verification_code_command_result'
import { az_iot_dps_certificate_list_command_result } from './models/az_iot_dps_certificate_list_command_result'
import { az_iot_dps_certificate_show_command_result } from './models/az_iot_dps_certificate_show_command_result'
import { az_iot_dps_certificate_update_command_result } from './models/az_iot_dps_certificate_update_command_result'
import { az_iot_dps_certificate_verify_command_result } from './models/az_iot_dps_certificate_verify_command_result'
import { az_iot_dps_linked_hub_create_command_result } from './models/az_iot_dps_linked_hub_create_command_result'
import { az_iot_dps_linked_hub_delete_command_result } from './models/az_iot_dps_linked_hub_delete_command_result'
import { az_iot_dps_linked_hub_list_command_result } from './models/az_iot_dps_linked_hub_list_command_result'
import { az_iot_dps_linked_hub_show_command_result } from './models/az_iot_dps_linked_hub_show_command_result'
import { az_iot_dps_linked_hub_update_command_result } from './models/az_iot_dps_linked_hub_update_command_result'
import { az_iot_dps_create_command_result } from './models/az_iot_dps_create_command_result'
import { az_iot_dps_delete_command_result } from './models/az_iot_dps_delete_command_result'
import { az_iot_dps_list_command_result } from './models/az_iot_dps_list_command_result'
import { az_iot_dps_show_command_result } from './models/az_iot_dps_show_command_result'
import { az_iot_dps_update_command_result } from './models/az_iot_dps_update_command_result'
import { az_iot_hub_certificate_create_command_result } from './models/az_iot_hub_certificate_create_command_result'
import { az_iot_hub_certificate_delete_command_result } from './models/az_iot_hub_certificate_delete_command_result'
import { az_iot_hub_certificate_generate_verification_code_command_result } from './models/az_iot_hub_certificate_generate_verification_code_command_result'
import { az_iot_hub_certificate_list_command_result } from './models/az_iot_hub_certificate_list_command_result'
import { az_iot_hub_certificate_show_command_result } from './models/az_iot_hub_certificate_show_command_result'
import { az_iot_hub_certificate_update_command_result } from './models/az_iot_hub_certificate_update_command_result'
import { az_iot_hub_certificate_verify_command_result } from './models/az_iot_hub_certificate_verify_command_result'
import { az_iot_hub_consumer_group_create_command_result } from './models/az_iot_hub_consumer_group_create_command_result'
import { az_iot_hub_consumer_group_delete_command_result } from './models/az_iot_hub_consumer_group_delete_command_result'
import { az_iot_hub_consumer_group_list_command_result } from './models/az_iot_hub_consumer_group_list_command_result'
import { az_iot_hub_consumer_group_show_command_result } from './models/az_iot_hub_consumer_group_show_command_result'
import { az_iot_hub_devicestream_show_command_result } from './models/az_iot_hub_devicestream_show_command_result'
import { az_iot_hub_message_enrichment_create_command_result } from './models/az_iot_hub_message_enrichment_create_command_result'
import { az_iot_hub_message_enrichment_delete_command_result } from './models/az_iot_hub_message_enrichment_delete_command_result'
import { az_iot_hub_message_enrichment_list_command_result } from './models/az_iot_hub_message_enrichment_list_command_result'
import { az_iot_hub_message_enrichment_update_command_result } from './models/az_iot_hub_message_enrichment_update_command_result'
import { az_iot_hub_policy_create_command_result } from './models/az_iot_hub_policy_create_command_result'
import { az_iot_hub_policy_delete_command_result } from './models/az_iot_hub_policy_delete_command_result'
import { az_iot_hub_policy_list_command_result } from './models/az_iot_hub_policy_list_command_result'
import { az_iot_hub_policy_renew_key_command_result } from './models/az_iot_hub_policy_renew_key_command_result'
import { az_iot_hub_policy_show_command_result } from './models/az_iot_hub_policy_show_command_result'
import { az_iot_hub_route_create_command_result } from './models/az_iot_hub_route_create_command_result'
import { az_iot_hub_route_delete_command_result } from './models/az_iot_hub_route_delete_command_result'
import { az_iot_hub_route_list_command_result } from './models/az_iot_hub_route_list_command_result'
import { az_iot_hub_route_show_command_result } from './models/az_iot_hub_route_show_command_result'
import { az_iot_hub_route_test_command_result } from './models/az_iot_hub_route_test_command_result'
import { az_iot_hub_route_update_command_result } from './models/az_iot_hub_route_update_command_result'
import { az_iot_hub_routing_endpoint_create_command_result } from './models/az_iot_hub_routing_endpoint_create_command_result'
import { az_iot_hub_routing_endpoint_delete_command_result } from './models/az_iot_hub_routing_endpoint_delete_command_result'
import { az_iot_hub_routing_endpoint_list_command_result } from './models/az_iot_hub_routing_endpoint_list_command_result'
import { az_iot_hub_routing_endpoint_show_command_result } from './models/az_iot_hub_routing_endpoint_show_command_result'
import { az_iot_hub_create_command_result } from './models/az_iot_hub_create_command_result'
import { az_iot_hub_delete_command_result } from './models/az_iot_hub_delete_command_result'
import { az_iot_hub_list_command_result } from './models/az_iot_hub_list_command_result'
import { az_iot_hub_list_skus_command_result } from './models/az_iot_hub_list_skus_command_result'
import { az_iot_hub_manual_failover_command_result } from './models/az_iot_hub_manual_failover_command_result'
import { az_iot_hub_show_command_result } from './models/az_iot_hub_show_command_result'
import { az_iot_hub_show_connection_string_command_result } from './models/az_iot_hub_show_connection_string_command_result'
import { az_iot_hub_show_quota_metrics_command_result } from './models/az_iot_hub_show_quota_metrics_command_result'
import { az_iot_hub_show_stats_command_result } from './models/az_iot_hub_show_stats_command_result'
import { az_iot_hub_update_command_result } from './models/az_iot_hub_update_command_result'

/** Manage IoT Central applications. */
export class az_iot_central_app {
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
    static create(name: string, resourceGroup: string, subdomain: string): az_iot_central_app_create_command_builder {
        return new az_iot_central_app_create_command_builder("az iot central app create", name, resourceGroup, subdomain);
    }

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
    static delete(name: string, resourceGroup: string): az_iot_central_app_delete_command_builder {
        return new az_iot_central_app_delete_command_builder("az iot central app delete", name, resourceGroup);
    }

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
    static list(): az_iot_central_app_list_command_builder {
        return new az_iot_central_app_list_command_builder("az iot central app list");
    }

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
    static show(name: string): az_iot_central_app_show_command_builder {
        return new az_iot_central_app_show_command_builder("az iot central app show", name);
    }

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
    static update(name: string, resourceGroup: string): az_iot_central_app_update_command_builder {
        return new az_iot_central_app_update_command_builder("az iot central app update", name, resourceGroup);
    }
}

/** Manage IoT Central resources. */
export class az_iot_central {
}

/** Manage Azure IoT Hub Device Provisioning Service access policies. */
export class az_iot_dps_access_policy {
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
    static create(accessPolicyName: string, dpsName: string, resourceGroup: string, rights: 'DeviceConnect' | 'EnrollmentRead' | 'EnrollmentWrite' | 'RegistrationStatusRead' | 'RegistrationStatusWrite' | 'ServiceConfig'): az_iot_dps_access_policy_create_command_builder {
        return new az_iot_dps_access_policy_create_command_builder("az iot dps access-policy create", accessPolicyName, dpsName, resourceGroup, rights);
    }

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
    static delete(accessPolicyName: string, dpsName: string, resourceGroup: string): az_iot_dps_access_policy_delete_command_builder {
        return new az_iot_dps_access_policy_delete_command_builder("az iot dps access-policy delete", accessPolicyName, dpsName, resourceGroup);
    }

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
    static list(dpsName: string, resourceGroup: string): az_iot_dps_access_policy_list_command_builder {
        return new az_iot_dps_access_policy_list_command_builder("az iot dps access-policy list", dpsName, resourceGroup);
    }

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
    static show(accessPolicyName: string, dpsName: string, resourceGroup: string): az_iot_dps_access_policy_show_command_builder {
        return new az_iot_dps_access_policy_show_command_builder("az iot dps access-policy show", accessPolicyName, dpsName, resourceGroup);
    }

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
    static update(accessPolicyName: string, dpsName: string, resourceGroup: string): az_iot_dps_access_policy_update_command_builder {
        return new az_iot_dps_access_policy_update_command_builder("az iot dps access-policy update", accessPolicyName, dpsName, resourceGroup);
    }
}

/** Manage Azure IoT Hub Device Provisioning Service certificates. */
export class az_iot_dps_certificate {
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
    static create(certificateName: string, dpsName: string, path: string, resourceGroup: string): az_iot_dps_certificate_create_command_builder {
        return new az_iot_dps_certificate_create_command_builder("az iot dps certificate create", certificateName, dpsName, path, resourceGroup);
    }

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
    static delete(certificateName: string, dpsName: string, etag: string, resourceGroup: string): az_iot_dps_certificate_delete_command_builder {
        return new az_iot_dps_certificate_delete_command_builder("az iot dps certificate delete", certificateName, dpsName, etag, resourceGroup);
    }

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
    static generate_verification_code(certificateName: string, dpsName: string, etag: string, resourceGroup: string): az_iot_dps_certificate_generate_verification_code_command_builder {
        return new az_iot_dps_certificate_generate_verification_code_command_builder("az iot dps certificate generate-verification-code", certificateName, dpsName, etag, resourceGroup);
    }

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
    static list(dpsName: string, resourceGroup: string): az_iot_dps_certificate_list_command_builder {
        return new az_iot_dps_certificate_list_command_builder("az iot dps certificate list", dpsName, resourceGroup);
    }

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
    static show(certificateName: string, dpsName: string, resourceGroup: string): az_iot_dps_certificate_show_command_builder {
        return new az_iot_dps_certificate_show_command_builder("az iot dps certificate show", certificateName, dpsName, resourceGroup);
    }

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
    static update(certificateName: string, dpsName: string, etag: string, path: string, resourceGroup: string): az_iot_dps_certificate_update_command_builder {
        return new az_iot_dps_certificate_update_command_builder("az iot dps certificate update", certificateName, dpsName, etag, path, resourceGroup);
    }

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
    static verify(certificateName: string, dpsName: string, etag: string, path: string, resourceGroup: string): az_iot_dps_certificate_verify_command_builder {
        return new az_iot_dps_certificate_verify_command_builder("az iot dps certificate verify", certificateName, dpsName, etag, path, resourceGroup);
    }
}

/** Manage Azure IoT Hub Device Provisioning Service linked IoT hubs. */
export class az_iot_dps_linked_hub {
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
    static create(connectionString: string, dpsName: string, location: string, resourceGroup: string): az_iot_dps_linked_hub_create_command_builder {
        return new az_iot_dps_linked_hub_create_command_builder("az iot dps linked-hub create", connectionString, dpsName, location, resourceGroup);
    }

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
    static delete(dpsName: string, linkedHub: string, resourceGroup: string): az_iot_dps_linked_hub_delete_command_builder {
        return new az_iot_dps_linked_hub_delete_command_builder("az iot dps linked-hub delete", dpsName, linkedHub, resourceGroup);
    }

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
    static list(dpsName: string, resourceGroup: string): az_iot_dps_linked_hub_list_command_builder {
        return new az_iot_dps_linked_hub_list_command_builder("az iot dps linked-hub list", dpsName, resourceGroup);
    }

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
    static show(dpsName: string, linkedHub: string, resourceGroup: string): az_iot_dps_linked_hub_show_command_builder {
        return new az_iot_dps_linked_hub_show_command_builder("az iot dps linked-hub show", dpsName, linkedHub, resourceGroup);
    }

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
    static update(dpsName: string, linkedHub: string, resourceGroup: string): az_iot_dps_linked_hub_update_command_builder {
        return new az_iot_dps_linked_hub_update_command_builder("az iot dps linked-hub update", dpsName, linkedHub, resourceGroup);
    }
}

/** Manage Azure IoT Hub Device Provisioning Service. */
export class az_iot_dps {
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
    static create(name: string, resourceGroup: string): az_iot_dps_create_command_builder {
        return new az_iot_dps_create_command_builder("az iot dps create", name, resourceGroup);
    }

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
    static delete(): az_iot_dps_delete_command_builder {
        return new az_iot_dps_delete_command_builder("az iot dps delete");
    }

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
    static list(): az_iot_dps_list_command_builder {
        return new az_iot_dps_list_command_builder("az iot dps list");
    }

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
    static show(): az_iot_dps_show_command_builder {
        return new az_iot_dps_show_command_builder("az iot dps show");
    }

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
    static update(): az_iot_dps_update_command_builder {
        return new az_iot_dps_update_command_builder("az iot dps update");
    }
}

/** Manage IoT Hub certificates. */
export class az_iot_hub_certificate {
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
    static create(hubName: string, name: string, path: string): az_iot_hub_certificate_create_command_builder {
        return new az_iot_hub_certificate_create_command_builder("az iot hub certificate create", hubName, name, path);
    }

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
    static delete(etag: string, name: string): az_iot_hub_certificate_delete_command_builder {
        return new az_iot_hub_certificate_delete_command_builder("az iot hub certificate delete", etag, name);
    }

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
    static generate_verification_code(etag: string, name: string): az_iot_hub_certificate_generate_verification_code_command_builder {
        return new az_iot_hub_certificate_generate_verification_code_command_builder("az iot hub certificate generate-verification-code", etag, name);
    }

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
    static list(): az_iot_hub_certificate_list_command_builder {
        return new az_iot_hub_certificate_list_command_builder("az iot hub certificate list");
    }

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
    static show(name: string): az_iot_hub_certificate_show_command_builder {
        return new az_iot_hub_certificate_show_command_builder("az iot hub certificate show", name);
    }

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
    static update(etag: string, name: string, path: string): az_iot_hub_certificate_update_command_builder {
        return new az_iot_hub_certificate_update_command_builder("az iot hub certificate update", etag, name, path);
    }

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
    static verify(etag: string, name: string, path: string): az_iot_hub_certificate_verify_command_builder {
        return new az_iot_hub_certificate_verify_command_builder("az iot hub certificate verify", etag, name, path);
    }
}

/** Manage the event hub consumer groups of an IoT hub. */
export class az_iot_hub_consumer_group {
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
    static create(hubName: string, name: string): az_iot_hub_consumer_group_create_command_builder {
        return new az_iot_hub_consumer_group_create_command_builder("az iot hub consumer-group create", hubName, name);
    }

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
    static delete(): az_iot_hub_consumer_group_delete_command_builder {
        return new az_iot_hub_consumer_group_delete_command_builder("az iot hub consumer-group delete");
    }

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
    static list(): az_iot_hub_consumer_group_list_command_builder {
        return new az_iot_hub_consumer_group_list_command_builder("az iot hub consumer-group list");
    }

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
    static show(): az_iot_hub_consumer_group_show_command_builder {
        return new az_iot_hub_consumer_group_show_command_builder("az iot hub consumer-group show");
    }
}

/** Manage device streams of an IoT hub. */
export class az_iot_hub_devicestream {
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
    static show(): az_iot_hub_devicestream_show_command_builder {
        return new az_iot_hub_devicestream_show_command_builder("az iot hub devicestream show");
    }
}

/** Manage message enrichments for endpoints of an IoT Hub. */
export class az_iot_hub_message_enrichment {
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
    static create(endpoints: string, key: string, name: string, value: string): az_iot_hub_message_enrichment_create_command_builder {
        return new az_iot_hub_message_enrichment_create_command_builder("az iot hub message-enrichment create", endpoints, key, name, value);
    }

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
    static delete(key: string): az_iot_hub_message_enrichment_delete_command_builder {
        return new az_iot_hub_message_enrichment_delete_command_builder("az iot hub message-enrichment delete", key);
    }

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
    static list(): az_iot_hub_message_enrichment_list_command_builder {
        return new az_iot_hub_message_enrichment_list_command_builder("az iot hub message-enrichment list");
    }

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
    static update(endpoints: string, key: string, value: string): az_iot_hub_message_enrichment_update_command_builder {
        return new az_iot_hub_message_enrichment_update_command_builder("az iot hub message-enrichment update", endpoints, key, value);
    }
}

/** Manage shared access policies of an IoT hub. */
export class az_iot_hub_policy {
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
    static create(hubName: string, name: string, permissions: string): az_iot_hub_policy_create_command_builder {
        return new az_iot_hub_policy_create_command_builder("az iot hub policy create", hubName, name, permissions);
    }

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
    static delete(): az_iot_hub_policy_delete_command_builder {
        return new az_iot_hub_policy_delete_command_builder("az iot hub policy delete");
    }

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
    static list(): az_iot_hub_policy_list_command_builder {
        return new az_iot_hub_policy_list_command_builder("az iot hub policy list");
    }

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
    static renew_key(renewKey: 'primary' | 'secondary' | 'swap'): az_iot_hub_policy_renew_key_command_builder {
        return new az_iot_hub_policy_renew_key_command_builder("az iot hub policy renew-key", renewKey);
    }

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
    static show(): az_iot_hub_policy_show_command_builder {
        return new az_iot_hub_policy_show_command_builder("az iot hub policy show");
    }
}

/** Manage routes of an IoT hub. */
export class az_iot_hub_route {
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
    static create(endpointName: string, hubName: string, routeName: string, sourceType: 'devicejoblifecycleevents' | 'devicelifecycleevents' | 'devicemessages' | 'digitaltwinchangeevents' | 'invalid' | 'twinchangeevents'): az_iot_hub_route_create_command_builder {
        return new az_iot_hub_route_create_command_builder("az iot hub route create", endpointName, hubName, routeName, sourceType);
    }

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
    static delete(): az_iot_hub_route_delete_command_builder {
        return new az_iot_hub_route_delete_command_builder("az iot hub route delete");
    }

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
    static list(): az_iot_hub_route_list_command_builder {
        return new az_iot_hub_route_list_command_builder("az iot hub route list");
    }

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
    static show(routeName: string): az_iot_hub_route_show_command_builder {
        return new az_iot_hub_route_show_command_builder("az iot hub route show", routeName);
    }

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
    static test(): az_iot_hub_route_test_command_builder {
        return new az_iot_hub_route_test_command_builder("az iot hub route test");
    }

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
    static update(routeName: string): az_iot_hub_route_update_command_builder {
        return new az_iot_hub_route_update_command_builder("az iot hub route update", routeName);
    }
}

/** Manage custom endpoints of an IoT hub. */
export class az_iot_hub_routing_endpoint {
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
    static create(endpointName: string, endpointResourceGroup: string, endpointSubscriptionId: string, endpointType: 'azurestoragecontainer' | 'eventhub' | 'servicebusqueue' | 'servicebustopic', hubName: string): az_iot_hub_routing_endpoint_create_command_builder {
        return new az_iot_hub_routing_endpoint_create_command_builder("az iot hub routing-endpoint create", endpointName, endpointResourceGroup, endpointSubscriptionId, endpointType, hubName);
    }

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
    static delete(): az_iot_hub_routing_endpoint_delete_command_builder {
        return new az_iot_hub_routing_endpoint_delete_command_builder("az iot hub routing-endpoint delete");
    }

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
    static list(): az_iot_hub_routing_endpoint_list_command_builder {
        return new az_iot_hub_routing_endpoint_list_command_builder("az iot hub routing-endpoint list");
    }

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
    static show(endpointName: string): az_iot_hub_routing_endpoint_show_command_builder {
        return new az_iot_hub_routing_endpoint_show_command_builder("az iot hub routing-endpoint show", endpointName);
    }
}

/** Manage Azure IoT hubs. */
export class az_iot_hub {
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
    static create(name: string, resourceGroup: string): az_iot_hub_create_command_builder {
        return new az_iot_hub_create_command_builder("az iot hub create", name, resourceGroup);
    }

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
    static delete(): az_iot_hub_delete_command_builder {
        return new az_iot_hub_delete_command_builder("az iot hub delete");
    }

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
    static list(): az_iot_hub_list_command_builder {
        return new az_iot_hub_list_command_builder("az iot hub list");
    }

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
    static list_skus(): az_iot_hub_list_skus_command_builder {
        return new az_iot_hub_list_skus_command_builder("az iot hub list-skus");
    }

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
    static manual_failover(): az_iot_hub_manual_failover_command_builder {
        return new az_iot_hub_manual_failover_command_builder("az iot hub manual-failover");
    }

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
    static show(): az_iot_hub_show_command_builder {
        return new az_iot_hub_show_command_builder("az iot hub show");
    }

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
    static show_connection_string(): az_iot_hub_show_connection_string_command_builder {
        return new az_iot_hub_show_connection_string_command_builder("az iot hub show-connection-string");
    }

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
    static show_quota_metrics(): az_iot_hub_show_quota_metrics_command_builder {
        return new az_iot_hub_show_quota_metrics_command_builder("az iot hub show-quota-metrics");
    }

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
    static show_stats(): az_iot_hub_show_stats_command_builder {
        return new az_iot_hub_show_stats_command_builder("az iot hub show-stats");
    }

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
    static update(): az_iot_hub_update_command_builder {
        return new az_iot_hub_update_command_builder("az iot hub update");
    }
}

/** Manage Internet of Things (IoT) assets. */
export class az_iot {
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
class az_iot_central_app_create_command_builder extends CommandBuilder<az_iot_central_app_create_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string, subdomain: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.subdomain(subdomain)
    }

    /** Give your IoT Central app a unique name so you can find it later.This will be used as the resource name in the Azure portal and CLI.Avoid special characters `-` instead, use lower case letters (a-z), numbers (0-9), and dashes (-). */
    name(value: string): az_iot_central_app_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_central_app_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Enter a unique URL. Your app will be accessible via https://<subdomain>.azureiotcentral.com/. Avoid special characters `-` instead, use lower case letters (a-z), numbers (0-9), and dashes (-). */
    subdomain(value: string): az_iot_central_app_create_command_builder {
        this.setFlag("--subdomain", value);
        return this;
    }

    /** Custom display name for the IoT Central app. This will be used in the IoT Central application manager to help you identify your app. Default value is the resource name. */
    displayName(value: string): az_iot_central_app_create_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Where your app's info and resources are stored. We will default to the location of the target resource group. See documentation for a full list of supported locations. */
    location(value: string): az_iot_central_app_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_iot_central_app_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Pricing plan for IoT Central application. */
    sku(value: 'F1' | 'S1' | 'ST0' | 'ST1' | 'ST2'): az_iot_central_app_create_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_central_app_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** IoT Central application template name. Default is "Custom application". See documentation for a list of available templates. */
    template(value: string): az_iot_central_app_create_command_builder {
        this.setFlag("--template", value);
        return this;
    }
}

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
class az_iot_central_app_delete_command_builder extends CommandBuilder<az_iot_central_app_delete_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** IoT Central application name. */
    name(value: string): az_iot_central_app_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_central_app_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_iot_central_app_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_central_app_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_iot_central_app_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_iot_central_app_list_command_builder extends CommandBuilder<az_iot_central_app_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iot_central_app_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_central_app_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_central_app_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_central_app_show_command_builder extends CommandBuilder<az_iot_central_app_show_command_result> {
    constructor(commandPath: string, name: string) {
        super(commandPath);
        this.name(name)
    }

    /** IoT Central application name. */
    name(value: string): az_iot_central_app_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iot_central_app_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_central_app_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_central_app_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_central_app_update_command_builder extends CommandBuilder<az_iot_central_app_update_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** IoT Central application name. */
    name(value: string): az_iot_central_app_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_central_app_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_iot_central_app_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_iot_central_app_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_iot_central_app_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_iot_central_app_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_central_app_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_iot_dps_access_policy_create_command_builder extends CommandBuilder<az_iot_dps_access_policy_create_command_result> {
    constructor(commandPath: string, accessPolicyName: string, dpsName: string, resourceGroup: string, rights: 'DeviceConnect' | 'EnrollmentRead' | 'EnrollmentWrite' | 'RegistrationStatusRead' | 'RegistrationStatusWrite' | 'ServiceConfig') {
        super(commandPath);
        this.accessPolicyName(accessPolicyName)
        this.dpsName(dpsName)
        this.resourceGroup(resourceGroup)
        this.rights(rights)
    }

    /** A friendly name for DPS access policy. */
    accessPolicyName(value: string): az_iot_dps_access_policy_create_command_builder {
        this.setFlag("--access-policy-name", value);
        return this;
    }

    /** IoT Provisioning Service name. */
    dpsName(value: string): az_iot_dps_access_policy_create_command_builder {
        this.setFlag("--dps-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_dps_access_policy_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Access rights for the IoT provisioning service. Use space-separated list for multiple rights. */
    rights(value: 'DeviceConnect' | 'EnrollmentRead' | 'EnrollmentWrite' | 'RegistrationStatusRead' | 'RegistrationStatusWrite' | 'ServiceConfig'): az_iot_dps_access_policy_create_command_builder {
        this.setFlag("--rights", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_iot_dps_access_policy_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Primary SAS key value. */
    primaryKey(value: string): az_iot_dps_access_policy_create_command_builder {
        this.setFlag("--primary-key", value);
        return this;
    }

    /** Secondary SAS key value. */
    secondaryKey(value: string): az_iot_dps_access_policy_create_command_builder {
        this.setFlag("--secondary-key", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_dps_access_policy_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_dps_access_policy_delete_command_builder extends CommandBuilder<az_iot_dps_access_policy_delete_command_result> {
    constructor(commandPath: string, accessPolicyName: string, dpsName: string, resourceGroup: string) {
        super(commandPath);
        this.accessPolicyName(accessPolicyName)
        this.dpsName(dpsName)
        this.resourceGroup(resourceGroup)
    }

    /** A friendly name for DPS access policy. */
    accessPolicyName(value: string): az_iot_dps_access_policy_delete_command_builder {
        this.setFlag("--access-policy-name", value);
        return this;
    }

    /** IoT Provisioning Service name. */
    dpsName(value: string): az_iot_dps_access_policy_delete_command_builder {
        this.setFlag("--dps-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_dps_access_policy_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_iot_dps_access_policy_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_dps_access_policy_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_dps_access_policy_list_command_builder extends CommandBuilder<az_iot_dps_access_policy_list_command_result> {
    constructor(commandPath: string, dpsName: string, resourceGroup: string) {
        super(commandPath);
        this.dpsName(dpsName)
        this.resourceGroup(resourceGroup)
    }

    /** IoT Provisioning Service name. */
    dpsName(value: string): az_iot_dps_access_policy_list_command_builder {
        this.setFlag("--dps-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_dps_access_policy_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iot_dps_access_policy_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_dps_access_policy_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_dps_access_policy_show_command_builder extends CommandBuilder<az_iot_dps_access_policy_show_command_result> {
    constructor(commandPath: string, accessPolicyName: string, dpsName: string, resourceGroup: string) {
        super(commandPath);
        this.accessPolicyName(accessPolicyName)
        this.dpsName(dpsName)
        this.resourceGroup(resourceGroup)
    }

    /** A friendly name for DPS access policy. */
    accessPolicyName(value: string): az_iot_dps_access_policy_show_command_builder {
        this.setFlag("--access-policy-name", value);
        return this;
    }

    /** IoT Provisioning Service name. */
    dpsName(value: string): az_iot_dps_access_policy_show_command_builder {
        this.setFlag("--dps-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_dps_access_policy_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iot_dps_access_policy_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_dps_access_policy_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_dps_access_policy_update_command_builder extends CommandBuilder<az_iot_dps_access_policy_update_command_result> {
    constructor(commandPath: string, accessPolicyName: string, dpsName: string, resourceGroup: string) {
        super(commandPath);
        this.accessPolicyName(accessPolicyName)
        this.dpsName(dpsName)
        this.resourceGroup(resourceGroup)
    }

    /** A friendly name for DPS access policy. */
    accessPolicyName(value: string): az_iot_dps_access_policy_update_command_builder {
        this.setFlag("--access-policy-name", value);
        return this;
    }

    /** IoT Provisioning Service name. */
    dpsName(value: string): az_iot_dps_access_policy_update_command_builder {
        this.setFlag("--dps-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_dps_access_policy_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_iot_dps_access_policy_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Primary SAS key value. */
    primaryKey(value: string): az_iot_dps_access_policy_update_command_builder {
        this.setFlag("--primary-key", value);
        return this;
    }

    /** Access rights for the IoT provisioning service. Use space-separated list for multiple rights. */
    rights(value: 'DeviceConnect' | 'EnrollmentRead' | 'EnrollmentWrite' | 'RegistrationStatusRead' | 'RegistrationStatusWrite' | 'ServiceConfig'): az_iot_dps_access_policy_update_command_builder {
        this.setFlag("--rights", value);
        return this;
    }

    /** Secondary SAS key value. */
    secondaryKey(value: string): az_iot_dps_access_policy_update_command_builder {
        this.setFlag("--secondary-key", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_dps_access_policy_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_iot_dps_certificate_create_command_builder extends CommandBuilder<az_iot_dps_certificate_create_command_result> {
    constructor(commandPath: string, certificateName: string, dpsName: string, path: string, resourceGroup: string) {
        super(commandPath);
        this.certificateName(certificateName)
        this.dpsName(dpsName)
        this.path(path)
        this.resourceGroup(resourceGroup)
    }

    /** A friendly name for the certificate. */
    certificateName(value: string): az_iot_dps_certificate_create_command_builder {
        this.setFlag("--certificate-name", value);
        return this;
    }

    /** IoT Provisioning Service name. */
    dpsName(value: string): az_iot_dps_certificate_create_command_builder {
        this.setFlag("--dps-name", value);
        return this;
    }

    /** The path to the file containing the certificate. */
    path(value: string): az_iot_dps_certificate_create_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_dps_certificate_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_dps_certificate_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_dps_certificate_delete_command_builder extends CommandBuilder<az_iot_dps_certificate_delete_command_result> {
    constructor(commandPath: string, certificateName: string, dpsName: string, etag: string, resourceGroup: string) {
        super(commandPath);
        this.certificateName(certificateName)
        this.dpsName(dpsName)
        this.etag(etag)
        this.resourceGroup(resourceGroup)
    }

    /** A friendly name for the certificate. */
    certificateName(value: string): az_iot_dps_certificate_delete_command_builder {
        this.setFlag("--certificate-name", value);
        return this;
    }

    /** IoT Provisioning Service name. */
    dpsName(value: string): az_iot_dps_certificate_delete_command_builder {
        this.setFlag("--dps-name", value);
        return this;
    }

    /** Entity Tag (etag) of the object. */
    etag(value: string): az_iot_dps_certificate_delete_command_builder {
        this.setFlag("--etag", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_dps_certificate_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_dps_certificate_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_dps_certificate_generate_verification_code_command_builder extends CommandBuilder<az_iot_dps_certificate_generate_verification_code_command_result> {
    constructor(commandPath: string, certificateName: string, dpsName: string, etag: string, resourceGroup: string) {
        super(commandPath);
        this.certificateName(certificateName)
        this.dpsName(dpsName)
        this.etag(etag)
        this.resourceGroup(resourceGroup)
    }

    /** A friendly name for the certificate. */
    certificateName(value: string): az_iot_dps_certificate_generate_verification_code_command_builder {
        this.setFlag("--certificate-name", value);
        return this;
    }

    /** IoT Provisioning Service name. */
    dpsName(value: string): az_iot_dps_certificate_generate_verification_code_command_builder {
        this.setFlag("--dps-name", value);
        return this;
    }

    /** Entity Tag (etag) of the object. */
    etag(value: string): az_iot_dps_certificate_generate_verification_code_command_builder {
        this.setFlag("--etag", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_dps_certificate_generate_verification_code_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_dps_certificate_generate_verification_code_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_dps_certificate_list_command_builder extends CommandBuilder<az_iot_dps_certificate_list_command_result> {
    constructor(commandPath: string, dpsName: string, resourceGroup: string) {
        super(commandPath);
        this.dpsName(dpsName)
        this.resourceGroup(resourceGroup)
    }

    /** IoT Provisioning Service name. */
    dpsName(value: string): az_iot_dps_certificate_list_command_builder {
        this.setFlag("--dps-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_dps_certificate_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iot_dps_certificate_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_dps_certificate_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_dps_certificate_show_command_builder extends CommandBuilder<az_iot_dps_certificate_show_command_result> {
    constructor(commandPath: string, certificateName: string, dpsName: string, resourceGroup: string) {
        super(commandPath);
        this.certificateName(certificateName)
        this.dpsName(dpsName)
        this.resourceGroup(resourceGroup)
    }

    /** A friendly name for the certificate. */
    certificateName(value: string): az_iot_dps_certificate_show_command_builder {
        this.setFlag("--certificate-name", value);
        return this;
    }

    /** IoT Provisioning Service name. */
    dpsName(value: string): az_iot_dps_certificate_show_command_builder {
        this.setFlag("--dps-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_dps_certificate_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iot_dps_certificate_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_dps_certificate_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_dps_certificate_update_command_builder extends CommandBuilder<az_iot_dps_certificate_update_command_result> {
    constructor(commandPath: string, certificateName: string, dpsName: string, etag: string, path: string, resourceGroup: string) {
        super(commandPath);
        this.certificateName(certificateName)
        this.dpsName(dpsName)
        this.etag(etag)
        this.path(path)
        this.resourceGroup(resourceGroup)
    }

    /** A friendly name for the certificate. */
    certificateName(value: string): az_iot_dps_certificate_update_command_builder {
        this.setFlag("--certificate-name", value);
        return this;
    }

    /** IoT Provisioning Service name. */
    dpsName(value: string): az_iot_dps_certificate_update_command_builder {
        this.setFlag("--dps-name", value);
        return this;
    }

    /** Entity Tag (etag) of the object. */
    etag(value: string): az_iot_dps_certificate_update_command_builder {
        this.setFlag("--etag", value);
        return this;
    }

    /** The path to the file containing the certificate. */
    path(value: string): az_iot_dps_certificate_update_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_dps_certificate_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_dps_certificate_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_dps_certificate_verify_command_builder extends CommandBuilder<az_iot_dps_certificate_verify_command_result> {
    constructor(commandPath: string, certificateName: string, dpsName: string, etag: string, path: string, resourceGroup: string) {
        super(commandPath);
        this.certificateName(certificateName)
        this.dpsName(dpsName)
        this.etag(etag)
        this.path(path)
        this.resourceGroup(resourceGroup)
    }

    /** A friendly name for the certificate. */
    certificateName(value: string): az_iot_dps_certificate_verify_command_builder {
        this.setFlag("--certificate-name", value);
        return this;
    }

    /** IoT Provisioning Service name. */
    dpsName(value: string): az_iot_dps_certificate_verify_command_builder {
        this.setFlag("--dps-name", value);
        return this;
    }

    /** Entity Tag (etag) of the object. */
    etag(value: string): az_iot_dps_certificate_verify_command_builder {
        this.setFlag("--etag", value);
        return this;
    }

    /** The path to the file containing the certificate. */
    path(value: string): az_iot_dps_certificate_verify_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_dps_certificate_verify_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_dps_certificate_verify_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_iot_dps_linked_hub_create_command_builder extends CommandBuilder<az_iot_dps_linked_hub_create_command_result> {
    constructor(commandPath: string, connectionString: string, dpsName: string, location: string, resourceGroup: string) {
        super(commandPath);
        this.connectionString(connectionString)
        this.dpsName(dpsName)
        this.location(location)
        this.resourceGroup(resourceGroup)
    }

    /** Connection string of the IoT hub. */
    connectionString(value: string): az_iot_dps_linked_hub_create_command_builder {
        this.setFlag("--connection-string", value);
        return this;
    }

    /** IoT Provisioning Service name. */
    dpsName(value: string): az_iot_dps_linked_hub_create_command_builder {
        this.setFlag("--dps-name", value);
        return this;
    }

    /** Location of the IoT hub. */
    location(value: string): az_iot_dps_linked_hub_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_dps_linked_hub_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Allocation weight of the IoT hub. */
    allocationWeight(value: string): az_iot_dps_linked_hub_create_command_builder {
        this.setFlag("--allocation-weight", value);
        return this;
    }

    /** A boolean indicating whether to apply allocation policy to the IoT hub. */
    applyAllocationPolicy(value: boolean): az_iot_dps_linked_hub_create_command_builder {
        this.setFlag("--apply-allocation-policy", value.toString());
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_iot_dps_linked_hub_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_dps_linked_hub_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_dps_linked_hub_delete_command_builder extends CommandBuilder<az_iot_dps_linked_hub_delete_command_result> {
    constructor(commandPath: string, dpsName: string, linkedHub: string, resourceGroup: string) {
        super(commandPath);
        this.dpsName(dpsName)
        this.linkedHub(linkedHub)
        this.resourceGroup(resourceGroup)
    }

    /** IoT Provisioning Service name. */
    dpsName(value: string): az_iot_dps_linked_hub_delete_command_builder {
        this.setFlag("--dps-name", value);
        return this;
    }

    /** Host name of linked IoT Hub. */
    linkedHub(value: string): az_iot_dps_linked_hub_delete_command_builder {
        this.setFlag("--linked-hub", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_dps_linked_hub_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_iot_dps_linked_hub_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_dps_linked_hub_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_dps_linked_hub_list_command_builder extends CommandBuilder<az_iot_dps_linked_hub_list_command_result> {
    constructor(commandPath: string, dpsName: string, resourceGroup: string) {
        super(commandPath);
        this.dpsName(dpsName)
        this.resourceGroup(resourceGroup)
    }

    /** IoT Provisioning Service name. */
    dpsName(value: string): az_iot_dps_linked_hub_list_command_builder {
        this.setFlag("--dps-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_dps_linked_hub_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iot_dps_linked_hub_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_dps_linked_hub_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_dps_linked_hub_show_command_builder extends CommandBuilder<az_iot_dps_linked_hub_show_command_result> {
    constructor(commandPath: string, dpsName: string, linkedHub: string, resourceGroup: string) {
        super(commandPath);
        this.dpsName(dpsName)
        this.linkedHub(linkedHub)
        this.resourceGroup(resourceGroup)
    }

    /** IoT Provisioning Service name. */
    dpsName(value: string): az_iot_dps_linked_hub_show_command_builder {
        this.setFlag("--dps-name", value);
        return this;
    }

    /** Host name of linked IoT Hub. */
    linkedHub(value: string): az_iot_dps_linked_hub_show_command_builder {
        this.setFlag("--linked-hub", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_dps_linked_hub_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iot_dps_linked_hub_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_dps_linked_hub_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_dps_linked_hub_update_command_builder extends CommandBuilder<az_iot_dps_linked_hub_update_command_result> {
    constructor(commandPath: string, dpsName: string, linkedHub: string, resourceGroup: string) {
        super(commandPath);
        this.dpsName(dpsName)
        this.linkedHub(linkedHub)
        this.resourceGroup(resourceGroup)
    }

    /** IoT Provisioning Service name. */
    dpsName(value: string): az_iot_dps_linked_hub_update_command_builder {
        this.setFlag("--dps-name", value);
        return this;
    }

    /** Host name of linked IoT Hub. */
    linkedHub(value: string): az_iot_dps_linked_hub_update_command_builder {
        this.setFlag("--linked-hub", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_dps_linked_hub_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Allocation weight of the IoT hub. */
    allocationWeight(value: string): az_iot_dps_linked_hub_update_command_builder {
        this.setFlag("--allocation-weight", value);
        return this;
    }

    /** A boolean indicating whether to apply allocation policy to the Iot hub. */
    applyAllocationPolicy(value: boolean): az_iot_dps_linked_hub_update_command_builder {
        this.setFlag("--apply-allocation-policy", value.toString());
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_iot_dps_linked_hub_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_dps_linked_hub_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_iot_dps_create_command_builder extends CommandBuilder<az_iot_dps_create_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** IoT Provisioning Service name. */
    name(value: string): az_iot_dps_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_dps_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Location of your IoT Provisioning Service. Default is the location of target resource group. */
    location(value: string): az_iot_dps_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Pricing tier for the IoT provisioning service. */
    sku(value: 'S1'): az_iot_dps_create_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_dps_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Units in your IoT Provisioning Service. */
    unit(value: string): az_iot_dps_create_command_builder {
        this.setFlag("--unit", value);
        return this;
    }
}

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
class az_iot_dps_delete_command_builder extends CommandBuilder<az_iot_dps_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_dps_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** IoT Provisioning Service name. */
    name(value: string): az_iot_dps_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_dps_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_dps_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_dps_list_command_builder extends CommandBuilder<az_iot_dps_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iot_dps_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_dps_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_dps_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_dps_show_command_builder extends CommandBuilder<az_iot_dps_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_dps_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** IoT Provisioning Service name. */
    name(value: string): az_iot_dps_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iot_dps_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_dps_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_dps_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_dps_update_command_builder extends CommandBuilder<az_iot_dps_update_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_iot_dps_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_iot_dps_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_dps_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** IoT Provisioning Service name. */
    name(value: string): az_iot_dps_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_iot_dps_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_dps_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_iot_dps_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_dps_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_iot_hub_certificate_create_command_builder extends CommandBuilder<az_iot_hub_certificate_create_command_result> {
    constructor(commandPath: string, hubName: string, name: string, path: string) {
        super(commandPath);
        this.hubName(hubName)
        this.name(name)
        this.path(path)
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_certificate_create_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** A friendly name for the certificate. */
    name(value: string): az_iot_hub_certificate_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The path to the file containing the certificate. */
    path(value: string): az_iot_hub_certificate_create_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_certificate_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_certificate_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_certificate_delete_command_builder extends CommandBuilder<az_iot_hub_certificate_delete_command_result> {
    constructor(commandPath: string, etag: string, name: string) {
        super(commandPath);
        this.etag(etag)
        this.name(name)
    }

    /** Entity Tag (etag) of the object. */
    etag(value: string): az_iot_hub_certificate_delete_command_builder {
        this.setFlag("--etag", value);
        return this;
    }

    /** A friendly name for the certificate. */
    name(value: string): az_iot_hub_certificate_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_certificate_delete_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_certificate_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_certificate_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_certificate_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_certificate_generate_verification_code_command_builder extends CommandBuilder<az_iot_hub_certificate_generate_verification_code_command_result> {
    constructor(commandPath: string, etag: string, name: string) {
        super(commandPath);
        this.etag(etag)
        this.name(name)
    }

    /** Entity Tag (etag) of the object. */
    etag(value: string): az_iot_hub_certificate_generate_verification_code_command_builder {
        this.setFlag("--etag", value);
        return this;
    }

    /** A friendly name for the certificate. */
    name(value: string): az_iot_hub_certificate_generate_verification_code_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_certificate_generate_verification_code_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_certificate_generate_verification_code_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_certificate_generate_verification_code_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_certificate_generate_verification_code_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_certificate_list_command_builder extends CommandBuilder<az_iot_hub_certificate_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_certificate_list_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_certificate_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iot_hub_certificate_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_certificate_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_certificate_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_certificate_show_command_builder extends CommandBuilder<az_iot_hub_certificate_show_command_result> {
    constructor(commandPath: string, name: string) {
        super(commandPath);
        this.name(name)
    }

    /** A friendly name for the certificate. */
    name(value: string): az_iot_hub_certificate_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_certificate_show_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_certificate_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iot_hub_certificate_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_certificate_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_certificate_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_certificate_update_command_builder extends CommandBuilder<az_iot_hub_certificate_update_command_result> {
    constructor(commandPath: string, etag: string, name: string, path: string) {
        super(commandPath);
        this.etag(etag)
        this.name(name)
        this.path(path)
    }

    /** Entity Tag (etag) of the object. */
    etag(value: string): az_iot_hub_certificate_update_command_builder {
        this.setFlag("--etag", value);
        return this;
    }

    /** A friendly name for the certificate. */
    name(value: string): az_iot_hub_certificate_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The path to the file containing the certificate. */
    path(value: string): az_iot_hub_certificate_update_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_certificate_update_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_certificate_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_certificate_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_certificate_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_certificate_verify_command_builder extends CommandBuilder<az_iot_hub_certificate_verify_command_result> {
    constructor(commandPath: string, etag: string, name: string, path: string) {
        super(commandPath);
        this.etag(etag)
        this.name(name)
        this.path(path)
    }

    /** Entity Tag (etag) of the object. */
    etag(value: string): az_iot_hub_certificate_verify_command_builder {
        this.setFlag("--etag", value);
        return this;
    }

    /** A friendly name for the certificate. */
    name(value: string): az_iot_hub_certificate_verify_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The path to the file containing the certificate. */
    path(value: string): az_iot_hub_certificate_verify_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_certificate_verify_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_certificate_verify_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_certificate_verify_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_certificate_verify_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_iot_hub_consumer_group_create_command_builder extends CommandBuilder<az_iot_hub_consumer_group_create_command_result> {
    constructor(commandPath: string, hubName: string, name: string) {
        super(commandPath);
        this.hubName(hubName)
        this.name(name)
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_consumer_group_create_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** Event hub consumer group name. */
    name(value: string): az_iot_hub_consumer_group_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Event hub endpoint name. */
    eventHubName(value: string): az_iot_hub_consumer_group_create_command_builder {
        this.setFlag("--event-hub-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_consumer_group_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_consumer_group_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_consumer_group_delete_command_builder extends CommandBuilder<az_iot_hub_consumer_group_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Event hub endpoint name. */
    eventHubName(value: string): az_iot_hub_consumer_group_delete_command_builder {
        this.setFlag("--event-hub-name", value);
        return this;
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_consumer_group_delete_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_consumer_group_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Event hub consumer group name. */
    name(value: string): az_iot_hub_consumer_group_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_consumer_group_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_consumer_group_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_consumer_group_list_command_builder extends CommandBuilder<az_iot_hub_consumer_group_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Event hub endpoint name. */
    eventHubName(value: string): az_iot_hub_consumer_group_list_command_builder {
        this.setFlag("--event-hub-name", value);
        return this;
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_consumer_group_list_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_consumer_group_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iot_hub_consumer_group_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_consumer_group_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_consumer_group_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_consumer_group_show_command_builder extends CommandBuilder<az_iot_hub_consumer_group_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Event hub endpoint name. */
    eventHubName(value: string): az_iot_hub_consumer_group_show_command_builder {
        this.setFlag("--event-hub-name", value);
        return this;
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_consumer_group_show_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_consumer_group_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Event hub consumer group name. */
    name(value: string): az_iot_hub_consumer_group_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iot_hub_consumer_group_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_consumer_group_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_consumer_group_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_iot_hub_devicestream_show_command_builder extends CommandBuilder<az_iot_hub_devicestream_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_devicestream_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** IoT Hub name. */
    name(value: string): az_iot_hub_devicestream_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iot_hub_devicestream_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_devicestream_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_devicestream_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_iot_hub_message_enrichment_create_command_builder extends CommandBuilder<az_iot_hub_message_enrichment_create_command_result> {
    constructor(commandPath: string, endpoints: string, key: string, name: string, value: string) {
        super(commandPath);
        this.endpoints(endpoints)
        this.key(key)
        this.name(name)
        this.value(value)
    }

    /** Endpoint(s) to apply enrichments to. Use a space-separated list for multiple endpoints. */
    endpoints(value: string): az_iot_hub_message_enrichment_create_command_builder {
        this.setFlag("--endpoints", value);
        return this;
    }

    /** The enrichment's key. */
    key(value: string): az_iot_hub_message_enrichment_create_command_builder {
        this.setFlag("--key", value);
        return this;
    }

    /** IoT Hub name. */
    name(value: string): az_iot_hub_message_enrichment_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The enrichment's value. */
    value(value: string): az_iot_hub_message_enrichment_create_command_builder {
        this.setFlag("--value", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_message_enrichment_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_message_enrichment_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_message_enrichment_delete_command_builder extends CommandBuilder<az_iot_hub_message_enrichment_delete_command_result> {
    constructor(commandPath: string, key: string) {
        super(commandPath);
        this.key(key)
    }

    /** The enrichment's key. */
    key(value: string): az_iot_hub_message_enrichment_delete_command_builder {
        this.setFlag("--key", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_message_enrichment_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** IoT Hub name. */
    name(value: string): az_iot_hub_message_enrichment_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_message_enrichment_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_message_enrichment_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_message_enrichment_list_command_builder extends CommandBuilder<az_iot_hub_message_enrichment_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_message_enrichment_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** IoT Hub name. */
    name(value: string): az_iot_hub_message_enrichment_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iot_hub_message_enrichment_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_message_enrichment_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_message_enrichment_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_message_enrichment_update_command_builder extends CommandBuilder<az_iot_hub_message_enrichment_update_command_result> {
    constructor(commandPath: string, endpoints: string, key: string, value: string) {
        super(commandPath);
        this.endpoints(endpoints)
        this.key(key)
        this.value(value)
    }

    /** Endpoint(s) to apply enrichments to. Use a space-separated list for multiple endpoints. */
    endpoints(value: string): az_iot_hub_message_enrichment_update_command_builder {
        this.setFlag("--endpoints", value);
        return this;
    }

    /** The enrichment's key. */
    key(value: string): az_iot_hub_message_enrichment_update_command_builder {
        this.setFlag("--key", value);
        return this;
    }

    /** The enrichment's value. */
    value(value: string): az_iot_hub_message_enrichment_update_command_builder {
        this.setFlag("--value", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_message_enrichment_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** IoT Hub name. */
    name(value: string): az_iot_hub_message_enrichment_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_message_enrichment_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_message_enrichment_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_iot_hub_policy_create_command_builder extends CommandBuilder<az_iot_hub_policy_create_command_result> {
    constructor(commandPath: string, hubName: string, name: string, permissions: string) {
        super(commandPath);
        this.hubName(hubName)
        this.name(name)
        this.permissions(permissions)
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_policy_create_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** Shared access policy name. */
    name(value: string): az_iot_hub_policy_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Permissions of shared access policy. Use space-separated list for multiple permissions. Possible values: RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect. */
    permissions(value: string): az_iot_hub_policy_create_command_builder {
        this.setFlag("--permissions", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_policy_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_policy_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_policy_delete_command_builder extends CommandBuilder<az_iot_hub_policy_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_policy_delete_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_policy_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Shared access policy name. */
    name(value: string): az_iot_hub_policy_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_policy_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_policy_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_policy_list_command_builder extends CommandBuilder<az_iot_hub_policy_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_policy_list_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_policy_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iot_hub_policy_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_policy_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_policy_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_policy_renew_key_command_builder extends CommandBuilder<az_iot_hub_policy_renew_key_command_result> {
    constructor(commandPath: string, renewKey: 'primary' | 'secondary' | 'swap') {
        super(commandPath);
        this.renewKey(renewKey)
    }

    /** Regenerate keys. */
    renewKey(value: 'primary' | 'secondary' | 'swap'): az_iot_hub_policy_renew_key_command_builder {
        this.setFlag("--renew-key", value);
        return this;
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_policy_renew_key_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_policy_renew_key_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Shared access policy name. */
    name(value: string): az_iot_hub_policy_renew_key_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_iot_hub_policy_renew_key_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_policy_renew_key_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_policy_renew_key_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_policy_show_command_builder extends CommandBuilder<az_iot_hub_policy_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_policy_show_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_policy_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Shared access policy name. */
    name(value: string): az_iot_hub_policy_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iot_hub_policy_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_policy_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_policy_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_iot_hub_route_create_command_builder extends CommandBuilder<az_iot_hub_route_create_command_result> {
    constructor(commandPath: string, endpointName: string, hubName: string, routeName: string, sourceType: 'devicejoblifecycleevents' | 'devicelifecycleevents' | 'devicemessages' | 'digitaltwinchangeevents' | 'invalid' | 'twinchangeevents') {
        super(commandPath);
        this.endpointName(endpointName)
        this.hubName(hubName)
        this.routeName(routeName)
        this.sourceType(sourceType)
    }

    /** Name of the routing endpoint. */
    endpointName(value: string): az_iot_hub_route_create_command_builder {
        this.setFlag("--endpoint-name", value);
        return this;
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_route_create_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** Name of the Route. */
    routeName(value: string): az_iot_hub_route_create_command_builder {
        this.setFlag("--route-name", value);
        return this;
    }

    /** Source of the route. */
    sourceType(value: 'devicejoblifecycleevents' | 'devicelifecycleevents' | 'devicemessages' | 'digitaltwinchangeevents' | 'invalid' | 'twinchangeevents'): az_iot_hub_route_create_command_builder {
        this.setFlag("--source-type", value);
        return this;
    }

    /** Condition that is evaluated to apply the routing rule. */
    condition(value: string): az_iot_hub_route_create_command_builder {
        this.setFlag("--condition", value);
        return this;
    }

    /** A boolean indicating whether to enable route to the Iot hub. */
    enabled(value: boolean): az_iot_hub_route_create_command_builder {
        this.setFlag("--enabled", value.toString());
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_route_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_route_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_route_delete_command_builder extends CommandBuilder<az_iot_hub_route_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_route_delete_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_route_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Route. */
    routeName(value: string): az_iot_hub_route_delete_command_builder {
        this.setFlag("--route-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_route_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Source of the route. */
    sourceType(value: 'devicejoblifecycleevents' | 'devicelifecycleevents' | 'devicemessages' | 'digitaltwinchangeevents' | 'invalid' | 'twinchangeevents'): az_iot_hub_route_delete_command_builder {
        this.setFlag("--source-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_route_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_route_list_command_builder extends CommandBuilder<az_iot_hub_route_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_route_list_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_route_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iot_hub_route_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_route_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Source of the route. */
    sourceType(value: 'devicejoblifecycleevents' | 'devicelifecycleevents' | 'devicemessages' | 'digitaltwinchangeevents' | 'invalid' | 'twinchangeevents'): az_iot_hub_route_list_command_builder {
        this.setFlag("--source-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_route_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_route_show_command_builder extends CommandBuilder<az_iot_hub_route_show_command_result> {
    constructor(commandPath: string, routeName: string) {
        super(commandPath);
        this.routeName(routeName)
    }

    /** Name of the Route. */
    routeName(value: string): az_iot_hub_route_show_command_builder {
        this.setFlag("--route-name", value);
        return this;
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_route_show_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_route_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iot_hub_route_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_route_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_route_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_route_test_command_builder extends CommandBuilder<az_iot_hub_route_test_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** App properties of the route message. */
    appProperties(value: string): az_iot_hub_route_test_command_builder {
        this.setFlag("--app-properties", value);
        return this;
    }

    /** Body of the route message. */
    body(value: string): az_iot_hub_route_test_command_builder {
        this.setFlag("--body", value);
        return this;
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_route_test_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_route_test_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the Route. */
    routeName(value: string): az_iot_hub_route_test_command_builder {
        this.setFlag("--route-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_route_test_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Source of the route. */
    sourceType(value: 'devicejoblifecycleevents' | 'devicelifecycleevents' | 'devicemessages' | 'digitaltwinchangeevents' | 'invalid' | 'twinchangeevents'): az_iot_hub_route_test_command_builder {
        this.setFlag("--source-type", value);
        return this;
    }

    /** System properties of the route message. */
    systemProperties(value: string): az_iot_hub_route_test_command_builder {
        this.setFlag("--system-properties", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_route_test_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_route_update_command_builder extends CommandBuilder<az_iot_hub_route_update_command_result> {
    constructor(commandPath: string, routeName: string) {
        super(commandPath);
        this.routeName(routeName)
    }

    /** Name of the Route. */
    routeName(value: string): az_iot_hub_route_update_command_builder {
        this.setFlag("--route-name", value);
        return this;
    }

    /** Condition that is evaluated to apply the routing rule. */
    condition(value: string): az_iot_hub_route_update_command_builder {
        this.setFlag("--condition", value);
        return this;
    }

    /** Name of the routing endpoint. */
    endpointName(value: string): az_iot_hub_route_update_command_builder {
        this.setFlag("--endpoint-name", value);
        return this;
    }

    /** A boolean indicating whether to enable route to the Iot hub. */
    enabled(value: boolean): az_iot_hub_route_update_command_builder {
        this.setFlag("--enabled", value.toString());
        return this;
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_route_update_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_route_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_route_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Source of the route. */
    sourceType(value: 'devicejoblifecycleevents' | 'devicelifecycleevents' | 'devicemessages' | 'digitaltwinchangeevents' | 'invalid' | 'twinchangeevents'): az_iot_hub_route_update_command_builder {
        this.setFlag("--source-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_route_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_iot_hub_routing_endpoint_create_command_builder extends CommandBuilder<az_iot_hub_routing_endpoint_create_command_result> {
    constructor(commandPath: string, endpointName: string, endpointResourceGroup: string, endpointSubscriptionId: string, endpointType: 'azurestoragecontainer' | 'eventhub' | 'servicebusqueue' | 'servicebustopic', hubName: string) {
        super(commandPath);
        this.endpointName(endpointName)
        this.endpointResourceGroup(endpointResourceGroup)
        this.endpointSubscriptionId(endpointSubscriptionId)
        this.endpointType(endpointType)
        this.hubName(hubName)
    }

    /** Name of the Routing Endpoint. */
    endpointName(value: string): az_iot_hub_routing_endpoint_create_command_builder {
        this.setFlag("--endpoint-name", value);
        return this;
    }

    /** Resource group of the Endpoint resoure. */
    endpointResourceGroup(value: string): az_iot_hub_routing_endpoint_create_command_builder {
        this.setFlag("--endpoint-resource-group", value);
        return this;
    }

    /** SubscriptionId of the Endpoint resource. */
    endpointSubscriptionId(value: string): az_iot_hub_routing_endpoint_create_command_builder {
        this.setFlag("--endpoint-subscription-id", value);
        return this;
    }

    /** Type of the Routing Endpoint. */
    endpointType(value: 'azurestoragecontainer' | 'eventhub' | 'servicebusqueue' | 'servicebustopic'): az_iot_hub_routing_endpoint_create_command_builder {
        this.setFlag("--endpoint-type", value);
        return this;
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_routing_endpoint_create_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** Authentication type for the endpoint. The default is keyBased. */
    authType(value: 'identitybased' | 'keybased'): az_iot_hub_routing_endpoint_create_command_builder {
        this.setFlag("--auth-type", value);
        return this;
    }

    /** Request batch frequency in seconds. The maximum amount of time that can elapse before data is written to a blob, between 60 and 720 seconds. */
    batchFrequency(value: string): az_iot_hub_routing_endpoint_create_command_builder {
        this.setFlag("--batch-frequency", value);
        return this;
    }

    /** Request chunk size in megabytes(MB). The maximum size of blobs, between 10 and 500 MB. */
    chunkSize(value: string): az_iot_hub_routing_endpoint_create_command_builder {
        this.setFlag("--chunk-size", value);
        return this;
    }

    /** Connection string of the Routing Endpoint. */
    connectionString(value: string): az_iot_hub_routing_endpoint_create_command_builder {
        this.setFlag("--connection-string", value);
        return this;
    }

    /** Name of the storage container. */
    containerName(value: string): az_iot_hub_routing_endpoint_create_command_builder {
        this.setFlag("--container-name", value);
        return this;
    }

    /** Encoding format for the container. The default is AVRO. Note that this field is applicable only for blob container endpoints. */
    encoding(value: 'avro' | 'json'): az_iot_hub_routing_endpoint_create_command_builder {
        this.setFlag("--encoding", value);
        return this;
    }

    /** The uri of the endpoint resource. */
    endpointUri(value: string): az_iot_hub_routing_endpoint_create_command_builder {
        this.setFlag("--endpoint-uri", value);
        return this;
    }

    /** The entity path of the endpoint resource. */
    entityPath(value: string): az_iot_hub_routing_endpoint_create_command_builder {
        this.setFlag("--entity-path", value);
        return this;
    }

    /** File name format for the blob. The file name format must contain {iothub}, {partition}, {YYYY}, {MM}, {DD}, {HH} and {mm} fields. All parameters are mandatory but can be reordered with or without delimiters. */
    fileNameFormat(value: string): az_iot_hub_routing_endpoint_create_command_builder {
        this.setFlag("--file-name-format", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_routing_endpoint_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_routing_endpoint_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_routing_endpoint_delete_command_builder extends CommandBuilder<az_iot_hub_routing_endpoint_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of the Routing Endpoint. */
    endpointName(value: string): az_iot_hub_routing_endpoint_delete_command_builder {
        this.setFlag("--endpoint-name", value);
        return this;
    }

    /** Type of the Routing Endpoint. */
    endpointType(value: 'azurestoragecontainer' | 'eventhub' | 'servicebusqueue' | 'servicebustopic'): az_iot_hub_routing_endpoint_delete_command_builder {
        this.setFlag("--endpoint-type", value);
        return this;
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_routing_endpoint_delete_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_routing_endpoint_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_routing_endpoint_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_routing_endpoint_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_routing_endpoint_list_command_builder extends CommandBuilder<az_iot_hub_routing_endpoint_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Type of the Routing Endpoint. */
    endpointType(value: 'azurestoragecontainer' | 'eventhub' | 'servicebusqueue' | 'servicebustopic'): az_iot_hub_routing_endpoint_list_command_builder {
        this.setFlag("--endpoint-type", value);
        return this;
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_routing_endpoint_list_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_routing_endpoint_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iot_hub_routing_endpoint_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_routing_endpoint_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_routing_endpoint_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_routing_endpoint_show_command_builder extends CommandBuilder<az_iot_hub_routing_endpoint_show_command_result> {
    constructor(commandPath: string, endpointName: string) {
        super(commandPath);
        this.endpointName(endpointName)
    }

    /** Name of the Routing Endpoint. */
    endpointName(value: string): az_iot_hub_routing_endpoint_show_command_builder {
        this.setFlag("--endpoint-name", value);
        return this;
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_routing_endpoint_show_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_routing_endpoint_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iot_hub_routing_endpoint_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_routing_endpoint_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_routing_endpoint_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_iot_hub_create_command_builder extends CommandBuilder<az_iot_hub_create_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** IoT Hub name. */
    name(value: string): az_iot_hub_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The number of times the IoT hub will attempt to deliver a cloud-to-device message to a device, between 1 and 100. */
    c2DMaxDeliveryCount(value: string): az_iot_hub_create_command_builder {
        this.setFlag("--c2d-max-delivery-count", value);
        return this;
    }

    /** The amount of time a message is available for the device to consume before it is expired by IoT Hub, between 1 and 48 hours. */
    c2DTtl(value: string): az_iot_hub_create_command_builder {
        this.setFlag("--c2d-ttl", value);
        return this;
    }

    /** The name of the root container where you upload files. The container need not exist but should be creatable using the connectionString specified. */
    fileuploadStorageContainerName(value: string): az_iot_hub_create_command_builder {
        this.setFlag("--fileupload-storage-container-name", value);
        return this;
    }

    /** The connection string for the Azure Storage account to which files are uploaded. */
    fileuploadStorageConnectionstring(value: string): az_iot_hub_create_command_builder {
        this.setFlag("--fileupload-storage-connectionstring", value);
        return this;
    }

    /** The container URI for the Azure Storage account to which files are uploaded. */
    fileuploadStorageContainerUri(value: string): az_iot_hub_create_command_builder {
        this.setFlag("--fileupload-storage-container-uri", value);
        return this;
    }

    /** The number of times the IoT hub attempts to deliver a message on the feedback queue, between 1 and 100. */
    feedbackMaxDeliveryCount(value: string): az_iot_hub_create_command_builder {
        this.setFlag("--feedback-max-delivery-count", value);
        return this;
    }

    /** The lock duration for the feedback queue, between 5 and 300 seconds. */
    feedbackLockDuration(value: string): az_iot_hub_create_command_builder {
        this.setFlag("--feedback-lock-duration", value);
        return this;
    }

    /** The period of time for which the IoT hub will maintain the feedback for expiration or delivery of cloud-to-device messages, between 1 and 48 hours. */
    feedbackTtl(value: string): az_iot_hub_create_command_builder {
        this.setFlag("--feedback-ttl", value);
        return this;
    }

    /** The number of times the IoT hub will attempt to deliver a file notification message, between 1 and 100. */
    fileuploadNotificationMaxDeliveryCount(value: string): az_iot_hub_create_command_builder {
        this.setFlag("--fileupload-notification-max-delivery-count", value);
        return this;
    }

    /** The amount of time a file upload notification is available for the service to consume before it is expired by IoT Hub, between 1 and 48 hours. */
    fileuploadNotificationTtl(value: string): az_iot_hub_create_command_builder {
        this.setFlag("--fileupload-notification-ttl", value);
        return this;
    }

    /** A boolean indicating whether to log information about uploaded files to the messages/servicebound/filenotifications IoT Hub endpoint. */
    fileuploadNotifications(value: boolean): az_iot_hub_create_command_builder {
        this.setFlag("--fileupload-notifications", value.toString());
        return this;
    }

    /** The amount of time a SAS URI generated by IoT Hub is valid before it expires, between 1 and 24 hours. */
    fileuploadSasTtl(value: string): az_iot_hub_create_command_builder {
        this.setFlag("--fileupload-sas-ttl", value);
        return this;
    }

    /** The authentication type for the Azure Storage account to which files are uploaded.Possible values are keyBased and identityBased. */
    fileuploadStorageAuthType(value: string): az_iot_hub_create_command_builder {
        this.setFlag("--fileupload-storage-auth-type", value);
        return this;
    }

    /** Location of your IoT Hub. Default is the location of target resource group. */
    location(value: string): az_iot_hub_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Specify the minimum TLS version to support for this hub. Can be set to "1.2" to have clients that use a TLS version below 1.2 to be rejected. */
    minTlsVersion(value: string): az_iot_hub_create_command_builder {
        this.setFlag("--min-tls-version", value);
        return this;
    }

    /** The number of partitions of the backing Event Hub for device-to-cloud messages. */
    partitionCount(value: string): az_iot_hub_create_command_builder {
        this.setFlag("--partition-count", value);
        return this;
    }

    /** Specifies how long this IoT hub will maintain device-to-cloud events, between 1 and 7 days. */
    retentionDay(value: string): az_iot_hub_create_command_builder {
        this.setFlag("--retention-day", value);
        return this;
    }

    /** Pricing tier for Azure IoT Hub. Note that only one free IoT hub instance (F1) is allowed in each subscription. Exception will be thrown if free instances exceed one. */
    sku(value: 'B1' | 'B2' | 'B3' | 'F1' | 'S1' | 'S2' | 'S3'): az_iot_hub_create_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Units in your IoT Hub. */
    unit(value: string): az_iot_hub_create_command_builder {
        this.setFlag("--unit", value);
        return this;
    }
}

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
class az_iot_hub_delete_command_builder extends CommandBuilder<az_iot_hub_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** IoT Hub name. */
    name(value: string): az_iot_hub_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_list_command_builder extends CommandBuilder<az_iot_hub_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iot_hub_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_list_skus_command_builder extends CommandBuilder<az_iot_hub_list_skus_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_list_skus_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** IoT Hub name. */
    name(value: string): az_iot_hub_list_skus_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_list_skus_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_list_skus_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_manual_failover_command_builder extends CommandBuilder<az_iot_hub_manual_failover_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_manual_failover_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** IoT Hub name. */
    name(value: string): az_iot_hub_manual_failover_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_iot_hub_manual_failover_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_manual_failover_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_manual_failover_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_show_command_builder extends CommandBuilder<az_iot_hub_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** IoT Hub name. */
    name(value: string): az_iot_hub_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iot_hub_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_show_connection_string_command_builder extends CommandBuilder<az_iot_hub_show_connection_string_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Allow to show all shared access policies. */
    all(value: string): az_iot_hub_show_connection_string_command_builder {
        this.setFlag("--all", value);
        return this;
    }

    /** IoT Hub name. */
    hubName(value: string): az_iot_hub_show_connection_string_command_builder {
        this.setFlag("--hub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_show_connection_string_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The key to use. */
    key(value: 'primary' | 'secondary'): az_iot_hub_show_connection_string_command_builder {
        this.setFlag("--key", value);
        return this;
    }

    /** Shared access policy to use. */
    policyName(value: string): az_iot_hub_show_connection_string_command_builder {
        this.setFlag("--policy-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_show_connection_string_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_show_connection_string_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_show_quota_metrics_command_builder extends CommandBuilder<az_iot_hub_show_quota_metrics_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_show_quota_metrics_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** IoT Hub name. */
    name(value: string): az_iot_hub_show_quota_metrics_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_show_quota_metrics_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_show_quota_metrics_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_show_stats_command_builder extends CommandBuilder<az_iot_hub_show_stats_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_show_stats_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** IoT Hub name. */
    name(value: string): az_iot_hub_show_stats_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_show_stats_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_show_stats_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_iot_hub_update_command_builder extends CommandBuilder<az_iot_hub_update_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_iot_hub_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The number of times the IoT hub will attempt to deliver a cloud-to-device message to a device, between 1 and 100. */
    c2DMaxDeliveryCount(value: string): az_iot_hub_update_command_builder {
        this.setFlag("--c2d-max-delivery-count", value);
        return this;
    }

    /** The amount of time a message is available for the device to consume before it is expired by IoT Hub, between 1 and 48 hours. */
    c2DTtl(value: string): az_iot_hub_update_command_builder {
        this.setFlag("--c2d-ttl", value);
        return this;
    }

    /** The name of the root container where you upload files. The container need not exist but should be creatable using the connectionString specified. */
    fileuploadStorageContainerName(value: string): az_iot_hub_update_command_builder {
        this.setFlag("--fileupload-storage-container-name", value);
        return this;
    }

    /** The connection string for the Azure Storage account to which files are uploaded. */
    fileuploadStorageConnectionstring(value: string): az_iot_hub_update_command_builder {
        this.setFlag("--fileupload-storage-connectionstring", value);
        return this;
    }

    /** The container URI for the Azure Storage account to which files are uploaded. */
    fileuploadStorageContainerUri(value: string): az_iot_hub_update_command_builder {
        this.setFlag("--fileupload-storage-container-uri", value);
        return this;
    }

    /** The number of times the IoT hub attempts to deliver a message on the feedback queue, between 1 and 100. */
    feedbackMaxDeliveryCount(value: string): az_iot_hub_update_command_builder {
        this.setFlag("--feedback-max-delivery-count", value);
        return this;
    }

    /** The lock duration for the feedback queue, between 5 and 300 seconds. */
    feedbackLockDuration(value: string): az_iot_hub_update_command_builder {
        this.setFlag("--feedback-lock-duration", value);
        return this;
    }

    /** The period of time for which the IoT hub will maintain the feedback for expiration or delivery of cloud-to-device messages, between 1 and 48 hours. */
    feedbackTtl(value: string): az_iot_hub_update_command_builder {
        this.setFlag("--feedback-ttl", value);
        return this;
    }

    /** The number of times the IoT hub will attempt to deliver a file notification message, between 1 and 100. */
    fileuploadNotificationMaxDeliveryCount(value: string): az_iot_hub_update_command_builder {
        this.setFlag("--fileupload-notification-max-delivery-count", value);
        return this;
    }

    /** The amount of time a file upload notification is available for the service to consume before it is expired by IoT Hub, between 1 and 48 hours. */
    fileuploadNotificationTtl(value: string): az_iot_hub_update_command_builder {
        this.setFlag("--fileupload-notification-ttl", value);
        return this;
    }

    /** A boolean indicating whether to log information about uploaded files to the messages/servicebound/filenotifications IoT Hub endpoint. */
    fileuploadNotifications(value: boolean): az_iot_hub_update_command_builder {
        this.setFlag("--fileupload-notifications", value.toString());
        return this;
    }

    /** The amount of time a SAS URI generated by IoT Hub is valid before it expires, between 1 and 24 hours. */
    fileuploadSasTtl(value: string): az_iot_hub_update_command_builder {
        this.setFlag("--fileupload-sas-ttl", value);
        return this;
    }

    /** The authentication type for the Azure Storage account to which files are uploaded.Possible values are keyBased and identityBased. */
    fileuploadStorageAuthType(value: string): az_iot_hub_update_command_builder {
        this.setFlag("--fileupload-storage-auth-type", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_iot_hub_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_iot_hub_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** IoT Hub name. */
    name(value: string): az_iot_hub_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Specifies how long this IoT hub will maintain device-to-cloud events, between 1 and 7 days. */
    retentionDay(value: string): az_iot_hub_update_command_builder {
        this.setFlag("--retention-day", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_iot_hub_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iot_hub_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_iot_hub_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Pricing tier for Azure IoT Hub. Note that only one free IoT hub instance (F1) is allowed in each subscription. Exception will be thrown if free instances exceed one. */
    sku(value: 'B1' | 'B2' | 'B3' | 'F1' | 'S1' | 'S2' | 'S3'): az_iot_hub_update_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iot_hub_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Units in your IoT Hub. */
    unit(value: string): az_iot_hub_update_command_builder {
        this.setFlag("--unit", value);
        return this;
    }
}
