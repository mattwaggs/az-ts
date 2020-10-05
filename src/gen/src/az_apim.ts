import { CommandBuilder } from '../base';
import { az_apim_api_operation_create_command_result } from './models/az_apim_api_operation_create_command_result'
import { az_apim_api_operation_delete_command_result } from './models/az_apim_api_operation_delete_command_result'
import { az_apim_api_operation_list_command_result } from './models/az_apim_api_operation_list_command_result'
import { az_apim_api_operation_show_command_result } from './models/az_apim_api_operation_show_command_result'
import { az_apim_api_operation_update_command_result } from './models/az_apim_api_operation_update_command_result'
import { az_apim_api_release_create_command_result } from './models/az_apim_api_release_create_command_result'
import { az_apim_api_release_delete_command_result } from './models/az_apim_api_release_delete_command_result'
import { az_apim_api_release_list_command_result } from './models/az_apim_api_release_list_command_result'
import { az_apim_api_release_show_command_result } from './models/az_apim_api_release_show_command_result'
import { az_apim_api_release_update_command_result } from './models/az_apim_api_release_update_command_result'
import { az_apim_api_revision_create_command_result } from './models/az_apim_api_revision_create_command_result'
import { az_apim_api_revision_list_command_result } from './models/az_apim_api_revision_list_command_result'
import { az_apim_api_versionset_create_command_result } from './models/az_apim_api_versionset_create_command_result'
import { az_apim_api_versionset_delete_command_result } from './models/az_apim_api_versionset_delete_command_result'
import { az_apim_api_versionset_list_command_result } from './models/az_apim_api_versionset_list_command_result'
import { az_apim_api_versionset_show_command_result } from './models/az_apim_api_versionset_show_command_result'
import { az_apim_api_versionset_update_command_result } from './models/az_apim_api_versionset_update_command_result'
import { az_apim_api_create_command_result } from './models/az_apim_api_create_command_result'
import { az_apim_api_delete_command_result } from './models/az_apim_api_delete_command_result'
import { az_apim_api_import_command_result } from './models/az_apim_api_import_command_result'
import { az_apim_api_list_command_result } from './models/az_apim_api_list_command_result'
import { az_apim_api_show_command_result } from './models/az_apim_api_show_command_result'
import { az_apim_api_update_command_result } from './models/az_apim_api_update_command_result'
import { az_apim_api_wait_command_result } from './models/az_apim_api_wait_command_result'
import { az_apim_nv_create_command_result } from './models/az_apim_nv_create_command_result'
import { az_apim_nv_delete_command_result } from './models/az_apim_nv_delete_command_result'
import { az_apim_nv_list_command_result } from './models/az_apim_nv_list_command_result'
import { az_apim_nv_show_command_result } from './models/az_apim_nv_show_command_result'
import { az_apim_nv_show_secret_command_result } from './models/az_apim_nv_show_secret_command_result'
import { az_apim_nv_update_command_result } from './models/az_apim_nv_update_command_result'
import { az_apim_product_api_add_command_result } from './models/az_apim_product_api_add_command_result'
import { az_apim_product_api_check_command_result } from './models/az_apim_product_api_check_command_result'
import { az_apim_product_api_delete_command_result } from './models/az_apim_product_api_delete_command_result'
import { az_apim_product_api_list_command_result } from './models/az_apim_product_api_list_command_result'
import { az_apim_product_create_command_result } from './models/az_apim_product_create_command_result'
import { az_apim_product_delete_command_result } from './models/az_apim_product_delete_command_result'
import { az_apim_product_list_command_result } from './models/az_apim_product_list_command_result'
import { az_apim_product_show_command_result } from './models/az_apim_product_show_command_result'
import { az_apim_product_update_command_result } from './models/az_apim_product_update_command_result'
import { az_apim_apply_network_updates_command_result } from './models/az_apim_apply_network_updates_command_result'
import { az_apim_backup_command_result } from './models/az_apim_backup_command_result'
import { az_apim_check_name_command_result } from './models/az_apim_check_name_command_result'
import { az_apim_create_command_result } from './models/az_apim_create_command_result'
import { az_apim_delete_command_result } from './models/az_apim_delete_command_result'
import { az_apim_list_command_result } from './models/az_apim_list_command_result'
import { az_apim_show_command_result } from './models/az_apim_show_command_result'
import { az_apim_update_command_result } from './models/az_apim_update_command_result'
import { az_apim_wait_command_result } from './models/az_apim_wait_command_result'

/** Manage Azure API Management API Operations. */
export class az_apim_api_operation {
    /**
     * Creates a new operation in the API.
     *
     * Syntax:
     * ```
     * az apim api operation create --api-id
     *                              --display-name
     *                              --method
     *                              --resource-group
     *                              --service-name
     *                              --url-template
     *                              [--description]
     *                              [--if-match]
     *                              [--operation-id]
     *                              [--params]
     *                              [--subscription]
     * ```
     *
     * @param {string} apiId API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     * @param {string} displayName Required. Operation Name.
     * @param {string} method Required. A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     * @param {string} urlTemplate Relative URL template identifying the target resource for this operation. May include parameters.
     */
    static create(apiId: string, displayName: string, method: string, resourceGroup: string, serviceName: string, urlTemplate: string): az_apim_api_operation_create_command_builder {
        return new az_apim_api_operation_create_command_builder("az apim api operation create", 'az_apim_api_operation_create_command_result', apiId, displayName, method, resourceGroup, serviceName, urlTemplate);
    }

    /**
     * Deletes the specified operation in the API.
     *
     * Syntax:
     * ```
     * az apim api operation delete --api-id
     *                              --operation-id
     *                              --resource-group
     *                              --service-name
     *                              [--if-match]
     *                              [--subscription]
     * ```
     *
     * @param {string} apiId API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     * @param {string} operationId Operation identifier within an API. Must be unique in the current API Management service instance.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     */
    static delete(apiId: string, operationId: string, resourceGroup: string, serviceName: string): az_apim_api_operation_delete_command_builder {
        return new az_apim_api_operation_delete_command_builder("az apim api operation delete", 'az_apim_api_operation_delete_command_result', apiId, operationId, resourceGroup, serviceName);
    }

    /**
     * List a collection of the operations for the specified API.
     *
     * Syntax:
     * ```
     * az apim api operation list --api-id
     *                            --resource-group
     *                            --service-name
     *                            [--query-examples]
     *                            [--subscription]
     * ```
     *
     * @param {string} apiId API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     */
    static list(apiId: string, resourceGroup: string, serviceName: string): az_apim_api_operation_list_command_builder {
        return new az_apim_api_operation_list_command_builder("az apim api operation list", 'az_apim_api_operation_list_command_result', apiId, resourceGroup, serviceName);
    }

    /**
     * Gets the details of the API Operation specified by its identifier.
     *
     * Syntax:
     * ```
     * az apim api operation show --api-id
     *                            --operation-id
     *                            --resource-group
     *                            --service-name
     *                            [--query-examples]
     *                            [--subscription]
     * ```
     *
     * @param {string} apiId API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     * @param {string} operationId Operation identifier within an API. Must be unique in the current API Management service instance.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     */
    static show(apiId: string, operationId: string, resourceGroup: string, serviceName: string): az_apim_api_operation_show_command_builder {
        return new az_apim_api_operation_show_command_builder("az apim api operation show", 'az_apim_api_operation_show_command_result', apiId, operationId, resourceGroup, serviceName);
    }

    /**
     * Updates the details of the operation in the API specified by its identifier.
     *
     * Syntax:
     * ```
     * az apim api operation update --api-id
     *                              --operation-id
     *                              --resource-group
     *                              --service-name
     *                              [--add]
     *                              [--description]
     *                              [--display-name]
     *                              [--force-string]
     *                              [--if-match]
     *                              [--method]
     *                              [--remove]
     *                              [--set]
     *                              [--subscription]
     *                              [--url-template]
     * ```
     *
     * @param {string} apiId API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     * @param {string} operationId Operation identifier within an API. Must be unique in the current API Management service instance.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     */
    static update(apiId: string, operationId: string, resourceGroup: string, serviceName: string): az_apim_api_operation_update_command_builder {
        return new az_apim_api_operation_update_command_builder("az apim api operation update", 'az_apim_api_operation_update_command_result', apiId, operationId, resourceGroup, serviceName);
    }
}

/** Manage Azure API Management API Release. */
export class az_apim_api_release {
    /**
     * Creates a new Release for the API.
     *
     * Syntax:
     * ```
     * az apim api release create --api-id
     *                            --api-revision
     *                            --resource-group
     *                            --service-name
     *                            [--if-match]
     *                            [--notes]
     *                            [--release-id]
     *                            [--subscription]
     * ```
     *
     * @param {string} apiId API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     * @param {string} apiRevision API revision number.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     */
    static create(apiId: string, apiRevision: string, resourceGroup: string, serviceName: string): az_apim_api_release_create_command_builder {
        return new az_apim_api_release_create_command_builder("az apim api release create", 'az_apim_api_release_create_command_result', apiId, apiRevision, resourceGroup, serviceName);
    }

    /**
     * Deletes the specified release in the API.
     *
     * Syntax:
     * ```
     * az apim api release delete --api-id
     *                            --release-id
     *                            --resource-group
     *                            --service-name
     *                            [--if-match]
     *                            [--subscription]
     * ```
     *
     * @param {string} apiId API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     * @param {string} releaseId Release identifier within an API. Must be unique in the current API Management service instance.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     */
    static delete(apiId: string, releaseId: string, resourceGroup: string, serviceName: string): az_apim_api_release_delete_command_builder {
        return new az_apim_api_release_delete_command_builder("az apim api release delete", 'az_apim_api_release_delete_command_result', apiId, releaseId, resourceGroup, serviceName);
    }

    /**
     * Lists all releases of an API.
     *
     * Syntax:
     * ```
     * az apim api release list --api-id
     *                          --resource-group
     *                          --service-name
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} apiId API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     */
    static list(apiId: string, resourceGroup: string, serviceName: string): az_apim_api_release_list_command_builder {
        return new az_apim_api_release_list_command_builder("az apim api release list", 'az_apim_api_release_list_command_result', apiId, resourceGroup, serviceName);
    }

    /**
     * Returns the details of an API release.
     *
     * Syntax:
     * ```
     * az apim api release show --api-id
     *                          --release-id
     *                          --resource-group
     *                          --service-name
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} apiId API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     * @param {string} releaseId Release identifier within an API. Must be unique in the current API Management service instance.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     */
    static show(apiId: string, releaseId: string, resourceGroup: string, serviceName: string): az_apim_api_release_show_command_builder {
        return new az_apim_api_release_show_command_builder("az apim api release show", 'az_apim_api_release_show_command_result', apiId, releaseId, resourceGroup, serviceName);
    }

    /**
     * Updates the details of the release of the API specified by its identifier.
     *
     * Syntax:
     * ```
     * az apim api release update --api-id
     *                            --release-id
     *                            --resource-group
     *                            --service-name
     *                            [--add]
     *                            [--api-id1]
     *                            [--force-string]
     *                            [--if-match]
     *                            [--notes]
     *                            [--remove]
     *                            [--set]
     *                            [--subscription]
     * ```
     *
     * @param {string} apiId API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     * @param {string} releaseId Release identifier within an API. Must be unique in the current API Management service instance.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     */
    static update(apiId: string, releaseId: string, resourceGroup: string, serviceName: string): az_apim_api_release_update_command_builder {
        return new az_apim_api_release_update_command_builder("az apim api release update", 'az_apim_api_release_update_command_result', apiId, releaseId, resourceGroup, serviceName);
    }
}

/** Manage Azure API Management API Revision. */
export class az_apim_api_revision {
    /**
     * Create API revision.
     *
     * Syntax:
     * ```
     * az apim api revision create --api-id
     *                             --api-revision
     *                             --resource-group
     *                             --service-name
     *                             [--api-revision-description]
     *                             [--subscription]
     * ```
     *
     * @param {string} apiId API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     * @param {string} apiRevision Describes the Revision of the Api.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     */
    static create(apiId: string, apiRevision: string, resourceGroup: string, serviceName: string): az_apim_api_revision_create_command_builder {
        return new az_apim_api_revision_create_command_builder("az apim api revision create", 'az_apim_api_revision_create_command_result', apiId, apiRevision, resourceGroup, serviceName);
    }

    /**
     * Lists all revisions of an API.
     *
     * Syntax:
     * ```
     * az apim api revision list --api-id
     *                           --resource-group
     *                           --service-name
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} apiId API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     */
    static list(apiId: string, resourceGroup: string, serviceName: string): az_apim_api_revision_list_command_builder {
        return new az_apim_api_revision_list_command_builder("az apim api revision list", 'az_apim_api_revision_list_command_result', apiId, resourceGroup, serviceName);
    }
}

/** Manage Azure API Management API Version Set. */
export class az_apim_api_versionset {
    /**
     * Creates a Api Version Set.
     *
     * Syntax:
     * ```
     * az apim api versionset create --display-name
     *                               --resource-group
     *                               --service-name
     *                               --versioning-scheme
     *                               [--description]
     *                               [--if-match]
     *                               [--subscription]
     *                               [--version-header-name]
     *                               [--version-query-name]
     *                               [--version-set-id]
     * ```
     *
     * @param {string} displayName Required. Name of API Version Set.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     * @param {string} versioningScheme Required. An value that determines where the API Version identifer will be located in a HTTP request.
     */
    static create(displayName: string, resourceGroup: string, serviceName: string, versioningScheme: string): az_apim_api_versionset_create_command_builder {
        return new az_apim_api_versionset_create_command_builder("az apim api versionset create", 'az_apim_api_versionset_create_command_result', displayName, resourceGroup, serviceName, versioningScheme);
    }

    /**
     * Deletes specific Api Version Set.
     *
     * Syntax:
     * ```
     * az apim api versionset delete --resource-group
     *                               --service-name
     *                               --version-set-id
     *                               [--if-match]
     *                               [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     * @param {string} versionSetId A resource identifier for the related ApiVersionSet.
     */
    static delete(resourceGroup: string, serviceName: string, versionSetId: string): az_apim_api_versionset_delete_command_builder {
        return new az_apim_api_versionset_delete_command_builder("az apim api versionset delete", 'az_apim_api_versionset_delete_command_result', resourceGroup, serviceName, versionSetId);
    }

    /**
     * Lists a collection of API Version Sets in the specified service instance.
     *
     * Syntax:
     * ```
     * az apim api versionset list --resource-group
     *                             --service-name
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     */
    static list(resourceGroup: string, serviceName: string): az_apim_api_versionset_list_command_builder {
        return new az_apim_api_versionset_list_command_builder("az apim api versionset list", 'az_apim_api_versionset_list_command_result', resourceGroup, serviceName);
    }

    /**
     * Gets the details of the Api Version Set specified by its identifier.
     *
     * Syntax:
     * ```
     * az apim api versionset show --resource-group
     *                             --service-name
     *                             --version-set-id
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     * @param {string} versionSetId A resource identifier for the related ApiVersionSet.
     */
    static show(resourceGroup: string, serviceName: string, versionSetId: string): az_apim_api_versionset_show_command_builder {
        return new az_apim_api_versionset_show_command_builder("az apim api versionset show", 'az_apim_api_versionset_show_command_result', resourceGroup, serviceName, versionSetId);
    }

    /**
     * Updates the details of the Api VersionSet specified by its identifier.
     *
     * Syntax:
     * ```
     * az apim api versionset update --resource-group
     *                               --service-name
     *                               --version-set-id
     *                               [--add]
     *                               [--description]
     *                               [--display-name]
     *                               [--force-string]
     *                               [--if-match]
     *                               [--remove]
     *                               [--set]
     *                               [--subscription]
     *                               [--version-header-name]
     *                               [--version-query-name]
     *                               [--versioning-scheme]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     * @param {string} versionSetId A resource identifier for the related ApiVersionSet.
     */
    static update(resourceGroup: string, serviceName: string, versionSetId: string): az_apim_api_versionset_update_command_builder {
        return new az_apim_api_versionset_update_command_builder("az apim api versionset update", 'az_apim_api_versionset_update_command_result', resourceGroup, serviceName, versionSetId);
    }
}

/** Manage Azure API Management API's. */
export class az_apim_api {
    /**
     * Create an API Management API.
     *
     * Syntax:
     * ```
     * az apim api create --api-id
     *                    --display-name
     *                    --path
     *                    --resource-group
     *                    --service-name
     *                    [--api-type {http, soap}]
     *                    [--authorization-scope]
     *                    [--authorization-server-id]
     *                    [--bearer-token-sending-methods]
     *                    [--description]
     *                    [--no-wait]
     *                    [--open-id-provider-id]
     *                    [--protocols {http, https}]
     *                    [--service-url]
     *                    [--subscription]
     *                    [--subscription-key-header-name]
     *                    [--subscription-key-query-param-name]
     *                    [--subscription-key-required]
     *                    [--subscription-required {false, true}]
     * ```
     *
     * @param {string} apiId Unique name of the api to be created.
     * @param {string} displayName Display name of the API to be created.
     * @param {string} path Path to the API.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     */
    static create(apiId: string, displayName: string, path: string, resourceGroup: string, serviceName: string): az_apim_api_create_command_builder {
        return new az_apim_api_create_command_builder("az apim api create", 'az_apim_api_create_command_result', apiId, displayName, path, resourceGroup, serviceName);
    }

    /**
     * Delete an API Management API.
     *
     * Syntax:
     * ```
     * az apim api delete --api-id
     *                    --resource-group
     *                    --service-name
     *                    [--delete-revisions]
     *                    [--if-match]
     *                    [--no-wait]
     *                    [--subscription]
     *                    [--yes]
     * ```
     *
     * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     */
    static delete(apiId: string, resourceGroup: string, serviceName: string): az_apim_api_delete_command_builder {
        return new az_apim_api_delete_command_builder("az apim api delete", 'az_apim_api_delete_command_result', apiId, resourceGroup, serviceName);
    }

    /**
     * Import an API Management service instance.
     *
     * Syntax:
     * ```
     * az apim api import --path
     *                    --resource-group
     *                    --service-name
     *                    [--api-id]
     *                    [--api-revision]
     *                    [--api-type {http, soap}]
     *                    [--description]
     *                    [--display-name]
     *                    [--no-wait]
     *                    [--protocols {http, https}]
     *                    [--service-url]
     *                    [--soap-api-type]
     *                    [--specification-format {OpenApi, OpenApiJson, Swagger, Wadl, Wsdl}]
     *                    [--specification-path]
     *                    [--specification-url]
     *                    [--subscription]
     *                    [--subscription-key-header-name]
     *                    [--subscription-key-query-param-name]
     *                    [--subscription-required {false, true}]
     *                    [--wsdl-endpoint-name]
     *                    [--wsdl-service-name]
     * ```
     *
     * @param {string} path Required. Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the api management service instance.
     */
    static import(path: string, resourceGroup: string, serviceName: string): az_apim_api_import_command_builder {
        return new az_apim_api_import_command_builder("az apim api import", 'az_apim_api_import_command_result', path, resourceGroup, serviceName);
    }

    /**
     * List API Management API's.
     *
     * Syntax:
     * ```
     * az apim api list --resource-group
     *                  --service-name
     *                  [--filter-display-name]
     *                  [--query-examples]
     *                  [--skip]
     *                  [--subscription]
     *                  [--top]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     */
    static list(resourceGroup: string, serviceName: string): az_apim_api_list_command_builder {
        return new az_apim_api_list_command_builder("az apim api list", 'az_apim_api_list_command_result', resourceGroup, serviceName);
    }

    /**
     * Show details of an API Management API.
     *
     * Syntax:
     * ```
     * az apim api show --api-id
     *                  --resource-group
     *                  --service-name
     *                  [--query-examples]
     *                  [--subscription]
     * ```
     *
     * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     */
    static show(apiId: string, resourceGroup: string, serviceName: string): az_apim_api_show_command_builder {
        return new az_apim_api_show_command_builder("az apim api show", 'az_apim_api_show_command_result', apiId, resourceGroup, serviceName);
    }

    /**
     * Update an API Management API.
     *
     * Syntax:
     * ```
     * az apim api update --api-id
     *                    --resource-group
     *                    --service-name
     *                    [--add]
     *                    [--api-type {http, soap}]
     *                    [--description]
     *                    [--display-name]
     *                    [--force-string]
     *                    [--if-match]
     *                    [--no-wait]
     *                    [--path]
     *                    [--protocols {http, https}]
     *                    [--remove]
     *                    [--service-url]
     *                    [--set]
     *                    [--subscription]
     *                    [--subscription-key-header-name]
     *                    [--subscription-key-query-param-name]
     *                    [--subscription-required {false, true}]
     *                    [--tags]
     * ```
     *
     * @param {string} apiId Unique name of the api to be created.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     */
    static update(apiId: string, resourceGroup: string, serviceName: string): az_apim_api_update_command_builder {
        return new az_apim_api_update_command_builder("az apim api update", 'az_apim_api_update_command_result', apiId, resourceGroup, serviceName);
    }

    /**
     * Place the CLI in a waiting state until a condition of an apim api is met.
     *
     * Syntax:
     * ```
     * az apim api wait --api-id
     *                  --name
     *                  --resource-group
     *                  [--created]
     *                  [--custom]
     *                  [--deleted]
     *                  [--exists]
     *                  [--interval]
     *                  [--subscription]
     *                  [--timeout]
     *                  [--updated]
     * ```
     *
     * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     * @param {string} name The name of the api management service instance.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static wait(apiId: string, name: string, resourceGroup: string): az_apim_api_wait_command_builder {
        return new az_apim_api_wait_command_builder("az apim api wait", 'az_apim_api_wait_command_result', apiId, name, resourceGroup);
    }
}

/** Manage Azure API Management Named Values. */
export class az_apim_nv {
    /**
     * Create an API Management Named Value.
     *
     * Syntax:
     * ```
     * az apim nv create --display-name
     *                   --named-value-id
     *                   --resource-group
     *                   --service-name
     *                   [--secret {false, true}]
     *                   [--subscription]
     *                   [--tags]
     *                   [--value]
     * ```
     *
     * @param {string} displayName The Display name of the Named Value.
     * @param {string} namedValueId Unique name for the Named Value to be created.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     */
    static create(displayName: string, namedValueId: string, resourceGroup: string, serviceName: string): az_apim_nv_create_command_builder {
        return new az_apim_nv_create_command_builder("az apim nv create", 'az_apim_nv_create_command_result', displayName, namedValueId, resourceGroup, serviceName);
    }

    /**
     * Delete an API Management Named Value.
     *
     * Syntax:
     * ```
     * az apim nv delete --named-value-id
     *                   --resource-group
     *                   --service-name
     *                   [--subscription]
     *                   [--yes]
     * ```
     *
     * @param {string} namedValueId Identifier of the NamedValue.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     */
    static delete(namedValueId: string, resourceGroup: string, serviceName: string): az_apim_nv_delete_command_builder {
        return new az_apim_nv_delete_command_builder("az apim nv delete", 'az_apim_nv_delete_command_result', namedValueId, resourceGroup, serviceName);
    }

    /**
     * List API Management Named Values.
     *
     * Syntax:
     * ```
     * az apim nv list --resource-group
     *                 --service-name
     *                 [--query-examples]
     *                 [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     */
    static list(resourceGroup: string, serviceName: string): az_apim_nv_list_command_builder {
        return new az_apim_nv_list_command_builder("az apim nv list", 'az_apim_nv_list_command_result', resourceGroup, serviceName);
    }

    /**
     * Show details of an API Management Named Value.
     *
     * Syntax:
     * ```
     * az apim nv show --named-value-id
     *                 --resource-group
     *                 --service-name
     *                 [--query-examples]
     *                 [--subscription]
     * ```
     *
     * @param {string} namedValueId Identifier of the NamedValue.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     */
    static show(namedValueId: string, resourceGroup: string, serviceName: string): az_apim_nv_show_command_builder {
        return new az_apim_nv_show_command_builder("az apim nv show", 'az_apim_nv_show_command_result', namedValueId, resourceGroup, serviceName);
    }

    /**
     * Gets the secret of an API Management Named Value.
     *
     * Syntax:
     * ```
     * az apim nv show-secret --named-value-id
     *                        --resource-group
     *                        --service-name
     *                        [--subscription]
     * ```
     *
     * @param {string} namedValueId Identifier of the NamedValue.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     */
    static show_secret(namedValueId: string, resourceGroup: string, serviceName: string): az_apim_nv_show_secret_command_builder {
        return new az_apim_nv_show_secret_command_builder("az apim nv show-secret", 'az_apim_nv_show_secret_command_result', namedValueId, resourceGroup, serviceName);
    }

    /**
     * Update an API Management Named Value.
     *
     * Syntax:
     * ```
     * az apim nv update --named-value-id
     *                   --resource-group
     *                   --service-name
     *                   [--add]
     *                   [--force-string]
     *                   [--if-match]
     *                   [--remove]
     *                   [--secret {false, true}]
     *                   [--set]
     *                   [--subscription]
     *                   [--tags]
     *                   [--value]
     * ```
     *
     * @param {string} namedValueId Unique name of the api to be created.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the API Management service instance.
     */
    static update(namedValueId: string, resourceGroup: string, serviceName: string): az_apim_nv_update_command_builder {
        return new az_apim_nv_update_command_builder("az apim nv update", 'az_apim_nv_update_command_result', namedValueId, resourceGroup, serviceName);
    }
}

/** Manage Azure API Management Product's APIs. */
export class az_apim_product_api {
    /**
     * Add an API to the specified product.
     *
     * Syntax:
     * ```
     * az apim product api add --api-id
     *                         --product-id
     *                         --resource-group
     *                         --service-name
     *                         [--subscription]
     * ```
     *
     * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     * @param {string} productId Product identifier. Must be unique in the current API Management service instance.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the api management service instance.
     */
    static add(apiId: string, productId: string, resourceGroup: string, serviceName: string): az_apim_product_api_add_command_builder {
        return new az_apim_product_api_add_command_builder("az apim product api add", 'az_apim_product_api_add_command_result', apiId, productId, resourceGroup, serviceName);
    }

    /**
     * Checks that API entity specified by identifier is associated with the Product entity.
     *
     * Syntax:
     * ```
     * az apim product api check --api-id
     *                           --product-id
     *                           --resource-group
     *                           --service-name
     *                           [--subscription]
     * ```
     *
     * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     * @param {string} productId Product identifier. Must be unique in the current API Management service instance.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the api management service instance.
     */
    static check(apiId: string, productId: string, resourceGroup: string, serviceName: string): az_apim_product_api_check_command_builder {
        return new az_apim_product_api_check_command_builder("az apim product api check", 'az_apim_product_api_check_command_result', apiId, productId, resourceGroup, serviceName);
    }

    /**
     * Deletes the specified API from the specified product.
     *
     * Syntax:
     * ```
     * az apim product api delete --api-id
     *                            --product-id
     *                            --resource-group
     *                            --service-name
     *                            [--subscription]
     * ```
     *
     * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     * @param {string} productId Product identifier. Must be unique in the current API Management service instance.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the api management service instance.
     */
    static delete(apiId: string, productId: string, resourceGroup: string, serviceName: string): az_apim_product_api_delete_command_builder {
        return new az_apim_product_api_delete_command_builder("az apim product api delete", 'az_apim_product_api_delete_command_result', apiId, productId, resourceGroup, serviceName);
    }

    /**
     * Lists a collection of the APIs associated with a product.
     *
     * Syntax:
     * ```
     * az apim product api list --product-id
     *                          --resource-group
     *                          --service-name
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} productId Product identifier. Must be unique in the current API Management service instance.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the api management service instance.
     */
    static list(productId: string, resourceGroup: string, serviceName: string): az_apim_product_api_list_command_builder {
        return new az_apim_product_api_list_command_builder("az apim product api list", 'az_apim_product_api_list_command_result', productId, resourceGroup, serviceName);
    }
}

/** Manage Azure API Management Product's. */
export class az_apim_product {
    /**
     * Creates a product.
     *
     * Syntax:
     * ```
     * az apim product create --product-name
     *                        --resource-group
     *                        --service-name
     *                        [--approval-required]
     *                        [--description]
     *                        [--legal-terms]
     *                        [--no-wait]
     *                        [--product-id]
     *                        [--state {notPublished, published}]
     *                        [--subscription]
     *                        [--subscription-required]
     *                        [--subscriptions-limit]
     * ```
     *
     * @param {string} productName Product name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the api management service instance.
     */
    static create(productName: string, resourceGroup: string, serviceName: string): az_apim_product_create_command_builder {
        return new az_apim_product_create_command_builder("az apim product create", 'az_apim_product_create_command_result', productName, resourceGroup, serviceName);
    }

    /**
     * Delete product.
     *
     * Syntax:
     * ```
     * az apim product delete --product-id
     *                        --resource-group
     *                        --service-name
     *                        [--delete-subscriptions]
     *                        [--if-match]
     *                        [--no-wait]
     *                        [--subscription]
     *                        [--yes]
     * ```
     *
     * @param {string} productId Product identifier. Must be unique in the current API Management service instance.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the api management service instance.
     */
    static delete(productId: string, resourceGroup: string, serviceName: string): az_apim_product_delete_command_builder {
        return new az_apim_product_delete_command_builder("az apim product delete", 'az_apim_product_delete_command_result', productId, resourceGroup, serviceName);
    }

    /**
     * Lists a collection of products in the specified service instance.
     *
     * Syntax:
     * ```
     * az apim product list --resource-group
     *                      --service-name
     *                      [--query-examples]
     *                      [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the api management service instance.
     */
    static list(resourceGroup: string, serviceName: string): az_apim_product_list_command_builder {
        return new az_apim_product_list_command_builder("az apim product list", 'az_apim_product_list_command_result', resourceGroup, serviceName);
    }

    /**
     * Gets the details of the product specified by its identifier.
     *
     * Syntax:
     * ```
     * az apim product show --product-id
     *                      --resource-group
     *                      --service-name
     *                      [--query-examples]
     *                      [--subscription]
     * ```
     *
     * @param {string} productId Product identifier. Must be unique in the current API Management service instance.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the api management service instance.
     */
    static show(productId: string, resourceGroup: string, serviceName: string): az_apim_product_show_command_builder {
        return new az_apim_product_show_command_builder("az apim product show", 'az_apim_product_show_command_result', productId, resourceGroup, serviceName);
    }

    /**
     * Update existing product details.
     *
     * Syntax:
     * ```
     * az apim product update --product-id
     *                        --resource-group
     *                        --service-name
     *                        [--add]
     *                        [--approval-required]
     *                        [--description]
     *                        [--force-string]
     *                        [--if-match]
     *                        [--legal-terms]
     *                        [--no-wait]
     *                        [--product-name]
     *                        [--remove]
     *                        [--set]
     *                        [--state {notPublished, published}]
     *                        [--subscription]
     *                        [--subscription-required]
     *                        [--subscriptions-limit]
     * ```
     *
     * @param {string} productId Product identifier. Must be unique in the current API Management service instance.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the api management service instance.
     */
    static update(productId: string, resourceGroup: string, serviceName: string): az_apim_product_update_command_builder {
        return new az_apim_product_update_command_builder("az apim product update", 'az_apim_product_update_command_result', productId, resourceGroup, serviceName);
    }
}

/** Manage Azure API Management services. */
export class az_apim {
    /**
     * Back up an API Management service to the configured storage account.
     *
     * Syntax:
     * ```
     * az apim apply-network-updates --name
     *                               --resource-group
     *                               [--location]
     *                               [--no-wait]
     *                               [--subscription]
     * ```
     *
     * @param {string} name The name of the api management service instance.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static apply_network_updates(name: string, resourceGroup: string): az_apim_apply_network_updates_command_builder {
        return new az_apim_apply_network_updates_command_builder("az apim apply-network-updates", 'az_apim_apply_network_updates_command_result', name, resourceGroup);
    }

    /**
     * Creates a backup of the API Management service to the given Azure Storage Account. This is long running operation and could take several minutes to complete.
     *
     * Syntax:
     * ```
     * az apim backup --backup-name
     *                --name
     *                --resource-group
     *                --storage-account-container
     *                --storage-account-key
     *                --storage-account-name
     *                [--no-wait]
     *                [--subscription]
     * ```
     *
     * @param {string} backupName The name of the backup file to create.
     * @param {string} name The name of the api management service instance.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} storageAccountContainer The name of the storage account container used to place the backup.
     * @param {string} storageAccountKey The access key of the storage account used to place the backup.
     * @param {string} storageAccountName The name of the storage account used to place the backup.
     */
    static backup(backupName: string, name: string, resourceGroup: string, storageAccountContainer: string, storageAccountKey: string, storageAccountName: string): az_apim_backup_command_builder {
        return new az_apim_backup_command_builder("az apim backup", 'az_apim_backup_command_result', backupName, name, resourceGroup, storageAccountContainer, storageAccountKey, storageAccountName);
    }

    /**
     * Checks to see if a service name is available to use.
     *
     * Syntax:
     * ```
     * az apim check-name --name
     *                    [--subscription]
     * ```
     *
     * @param {string} name The name of the api management service instance.
     */
    static check_name(name: string): az_apim_check_name_command_builder {
        return new az_apim_check_name_command_builder("az apim check-name", 'az_apim_check_name_command_result', name);
    }

    /**
     * Create an API Management service instance.
     *
     * Syntax:
     * ```
     * az apim create --name
     *                --publisher-email
     *                --publisher-name
     *                --resource-group
     *                [--enable-client-certificate {false, true}]
     *                [--enable-managed-identity {false, true}]
     *                [--location]
     *                [--no-wait]
     *                [--sku-capacity]
     *                [--sku-name {Basic, Consumption, Developer, Premium, Standard}]
     *                [--subscription]
     *                [--tags]
     *                [--virtual-network {External, Internal, None}]
     * ```
     *
     * @param {string} name Unique name of the service instance to be created.
     * @param {string} publisherEmail The e-mail address to receive all system notifications.
     * @param {string} publisherName The name of your organization for use in the developer portal and e-mail notifications.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(name: string, publisherEmail: string, publisherName: string, resourceGroup: string): az_apim_create_command_builder {
        return new az_apim_create_command_builder("az apim create", 'az_apim_create_command_result', name, publisherEmail, publisherName, resourceGroup);
    }

    /**
     * Deletes an API Management service.
     *
     * Syntax:
     * ```
     * az apim delete --name
     *                --resource-group
     *                [--no-wait]
     *                [--subscription]
     *                [--yes]
     * ```
     *
     * @param {string} name The name of the api management service instance.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(name: string, resourceGroup: string): az_apim_delete_command_builder {
        return new az_apim_delete_command_builder("az apim delete", 'az_apim_delete_command_result', name, resourceGroup);
    }

    /**
     * List API Management service instances.
     *
     * Syntax:
     * ```
     * az apim list [--query-examples]
     *              [--resource-group]
     *              [--subscription]
     * ```
     */
    static list(): az_apim_list_command_builder {
        return new az_apim_list_command_builder("az apim list", 'az_apim_list_command_result');
    }

    /**
     * Show details of an API Management service instance.
     *
     * Syntax:
     * ```
     * az apim show --name
     *              --resource-group
     *              [--query-examples]
     *              [--subscription]
     * ```
     *
     * @param {string} name The name of the api management service instance.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static show(name: string, resourceGroup: string): az_apim_show_command_builder {
        return new az_apim_show_command_builder("az apim show", 'az_apim_show_command_result', name, resourceGroup);
    }

    /**
     * Update an API Management service instance.
     *
     * Syntax:
     * ```
     * az apim update --name
     *                --resource-group
     *                [--add]
     *                [--enable-client-certificate {false, true}]
     *                [--enable-managed-identity {false, true}]
     *                [--force-string]
     *                [--no-wait]
     *                [--publisher-email]
     *                [--publisher-name]
     *                [--remove]
     *                [--set]
     *                [--sku-capacity]
     *                [--sku-name {Basic, Consumption, Developer, Premium, Standard}]
     *                [--subscription]
     *                [--tags]
     *                [--virtual-network {External, Internal, None}]
     * ```
     *
     * @param {string} name The name of the api management service instance.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static update(name: string, resourceGroup: string): az_apim_update_command_builder {
        return new az_apim_update_command_builder("az apim update", 'az_apim_update_command_result', name, resourceGroup);
    }

    /**
     * Place the CLI in a waiting state until a condition of an apim is met.
     *
     * Syntax:
     * ```
     * az apim wait --name
     *              --resource-group
     *              [--created]
     *              [--custom]
     *              [--deleted]
     *              [--exists]
     *              [--interval]
     *              [--subscription]
     *              [--timeout]
     *              [--updated]
     * ```
     *
     * @param {string} name The name of the api management service instance.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static wait(name: string, resourceGroup: string): az_apim_wait_command_builder {
        return new az_apim_wait_command_builder("az apim wait", 'az_apim_wait_command_result', name, resourceGroup);
    }
}

/**
 * Creates a new operation in the API.
 *
 * Syntax:
 * ```
 * az apim api operation create --api-id
 *                              --display-name
 *                              --method
 *                              --resource-group
 *                              --service-name
 *                              --url-template
 *                              [--description]
 *                              [--if-match]
 *                              [--operation-id]
 *                              [--params]
 *                              [--subscription]
 * ```
 *
 * @param {string} apiId API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
 * @param {string} displayName Required. Operation Name.
 * @param {string} method Required. A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 * @param {string} urlTemplate Relative URL template identifying the target resource for this operation. May include parameters.
 */
class az_apim_api_operation_create_command_builder extends CommandBuilder<az_apim_api_operation_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, displayName: string, method: string, resourceGroup: string, serviceName: string, urlTemplate: string) {
        super(commandPath, resultDataTypeName);
        this.apiId(apiId)
        this.displayName(displayName)
        this.method(method)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
        this.urlTemplate(urlTemplate)
    }

    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_operation_create_command_builder {
        this.setFlag("--api-id", value);
        return this;
    }

    /** Required. Operation Name. */
    displayName(value: string): az_apim_api_operation_create_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Required. A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them. */
    method(value: string): az_apim_api_operation_create_command_builder {
        this.setFlag("--method", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_operation_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_operation_create_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Relative URL template identifying the target resource for this operation. May include parameters. */
    urlTemplate(value: string): az_apim_api_operation_create_command_builder {
        this.setFlag("--url-template", value);
        return this;
    }

    /** Description of the operation. May include HTML formatting tags. */
    description(value: string): az_apim_api_operation_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** ETag of the Entity. */
    ifMatch(value: string): az_apim_api_operation_create_command_builder {
        this.setFlag("--if-match", value);
        return this;
    }

    /** Operation identifier within an API. Must be unique in the current API Management service instance. */
    operationId(value: string): az_apim_api_operation_create_command_builder {
        this.setFlag("--operation-id", value);
        return this;
    }

    /** Collection of URL template parameters. */
    templateParameters(value: string): az_apim_api_operation_create_command_builder {
        this.setFlag("--template-parameters", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_operation_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Deletes the specified operation in the API.
 *
 * Syntax:
 * ```
 * az apim api operation delete --api-id
 *                              --operation-id
 *                              --resource-group
 *                              --service-name
 *                              [--if-match]
 *                              [--subscription]
 * ```
 *
 * @param {string} apiId API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
 * @param {string} operationId Operation identifier within an API. Must be unique in the current API Management service instance.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 */
class az_apim_api_operation_delete_command_builder extends CommandBuilder<az_apim_api_operation_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, operationId: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.apiId(apiId)
        this.operationId(operationId)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_operation_delete_command_builder {
        this.setFlag("--api-id", value);
        return this;
    }

    /** Operation identifier within an API. Must be unique in the current API Management service instance. */
    operationId(value: string): az_apim_api_operation_delete_command_builder {
        this.setFlag("--operation-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_operation_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_operation_delete_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** ETag of the Entity. */
    ifMatch(value: string): az_apim_api_operation_delete_command_builder {
        this.setFlag("--if-match", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_operation_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List a collection of the operations for the specified API.
 *
 * Syntax:
 * ```
 * az apim api operation list --api-id
 *                            --resource-group
 *                            --service-name
 *                            [--query-examples]
 *                            [--subscription]
 * ```
 *
 * @param {string} apiId API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 */
class az_apim_api_operation_list_command_builder extends CommandBuilder<az_apim_api_operation_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.apiId(apiId)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_operation_list_command_builder {
        this.setFlag("--api-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_operation_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_operation_list_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_api_operation_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_operation_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Gets the details of the API Operation specified by its identifier.
 *
 * Syntax:
 * ```
 * az apim api operation show --api-id
 *                            --operation-id
 *                            --resource-group
 *                            --service-name
 *                            [--query-examples]
 *                            [--subscription]
 * ```
 *
 * @param {string} apiId API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
 * @param {string} operationId Operation identifier within an API. Must be unique in the current API Management service instance.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 */
class az_apim_api_operation_show_command_builder extends CommandBuilder<az_apim_api_operation_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, operationId: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.apiId(apiId)
        this.operationId(operationId)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_operation_show_command_builder {
        this.setFlag("--api-id", value);
        return this;
    }

    /** Operation identifier within an API. Must be unique in the current API Management service instance. */
    operationId(value: string): az_apim_api_operation_show_command_builder {
        this.setFlag("--operation-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_operation_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_operation_show_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_api_operation_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_operation_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Updates the details of the operation in the API specified by its identifier.
 *
 * Syntax:
 * ```
 * az apim api operation update --api-id
 *                              --operation-id
 *                              --resource-group
 *                              --service-name
 *                              [--add]
 *                              [--description]
 *                              [--display-name]
 *                              [--force-string]
 *                              [--if-match]
 *                              [--method]
 *                              [--remove]
 *                              [--set]
 *                              [--subscription]
 *                              [--url-template]
 * ```
 *
 * @param {string} apiId API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
 * @param {string} operationId Operation identifier within an API. Must be unique in the current API Management service instance.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 */
class az_apim_api_operation_update_command_builder extends CommandBuilder<az_apim_api_operation_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, operationId: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.apiId(apiId)
        this.operationId(operationId)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_operation_update_command_builder {
        this.setFlag("--api-id", value);
        return this;
    }

    /** Operation identifier within an API. Must be unique in the current API Management service instance. */
    operationId(value: string): az_apim_api_operation_update_command_builder {
        this.setFlag("--operation-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_operation_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_operation_update_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_apim_api_operation_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** Description of the operation. May include HTML formatting tags. */
    description(value: string): az_apim_api_operation_update_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Required. Operation Name. */
    displayName(value: string): az_apim_api_operation_update_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_apim_api_operation_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** ETag of the Entity. */
    ifMatch(value: string): az_apim_api_operation_update_command_builder {
        this.setFlag("--if-match", value);
        return this;
    }

    /** Required. A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them. */
    method(value: string): az_apim_api_operation_update_command_builder {
        this.setFlag("--method", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_apim_api_operation_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_apim_api_operation_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_operation_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Relative URL template identifying the target resource for this operation. May include parameters. */
    urlTemplate(value: string): az_apim_api_operation_update_command_builder {
        this.setFlag("--url-template", value);
        return this;
    }
}

/**
 * Creates a new Release for the API.
 *
 * Syntax:
 * ```
 * az apim api release create --api-id
 *                            --api-revision
 *                            --resource-group
 *                            --service-name
 *                            [--if-match]
 *                            [--notes]
 *                            [--release-id]
 *                            [--subscription]
 * ```
 *
 * @param {string} apiId API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
 * @param {string} apiRevision API revision number.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 */
class az_apim_api_release_create_command_builder extends CommandBuilder<az_apim_api_release_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, apiRevision: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.apiId(apiId)
        this.apiRevision(apiRevision)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_release_create_command_builder {
        this.setFlag("--api-id", value);
        return this;
    }

    /** API revision number. */
    apiRevision(value: string): az_apim_api_release_create_command_builder {
        this.setFlag("--api-revision", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_release_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_release_create_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** ETag of the Entity. */
    ifMatch(value: string): az_apim_api_release_create_command_builder {
        this.setFlag("--if-match", value);
        return this;
    }

    /** Release Notes. */
    notes(value: string): az_apim_api_release_create_command_builder {
        this.setFlag("--notes", value);
        return this;
    }

    /** Release identifier within an API. Must be unique in the current API Management service instance. */
    releaseId(value: string): az_apim_api_release_create_command_builder {
        this.setFlag("--release-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_release_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Deletes the specified release in the API.
 *
 * Syntax:
 * ```
 * az apim api release delete --api-id
 *                            --release-id
 *                            --resource-group
 *                            --service-name
 *                            [--if-match]
 *                            [--subscription]
 * ```
 *
 * @param {string} apiId API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
 * @param {string} releaseId Release identifier within an API. Must be unique in the current API Management service instance.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 */
class az_apim_api_release_delete_command_builder extends CommandBuilder<az_apim_api_release_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, releaseId: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.apiId(apiId)
        this.releaseId(releaseId)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_release_delete_command_builder {
        this.setFlag("--api-id", value);
        return this;
    }

    /** Release identifier within an API. Must be unique in the current API Management service instance. */
    releaseId(value: string): az_apim_api_release_delete_command_builder {
        this.setFlag("--release-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_release_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_release_delete_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** ETag of the Entity. */
    ifMatch(value: string): az_apim_api_release_delete_command_builder {
        this.setFlag("--if-match", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_release_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Lists all releases of an API.
 *
 * Syntax:
 * ```
 * az apim api release list --api-id
 *                          --resource-group
 *                          --service-name
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} apiId API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 */
class az_apim_api_release_list_command_builder extends CommandBuilder<az_apim_api_release_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.apiId(apiId)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_release_list_command_builder {
        this.setFlag("--api-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_release_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_release_list_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_api_release_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_release_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Returns the details of an API release.
 *
 * Syntax:
 * ```
 * az apim api release show --api-id
 *                          --release-id
 *                          --resource-group
 *                          --service-name
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} apiId API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
 * @param {string} releaseId Release identifier within an API. Must be unique in the current API Management service instance.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 */
class az_apim_api_release_show_command_builder extends CommandBuilder<az_apim_api_release_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, releaseId: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.apiId(apiId)
        this.releaseId(releaseId)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_release_show_command_builder {
        this.setFlag("--api-id", value);
        return this;
    }

    /** Release identifier within an API. Must be unique in the current API Management service instance. */
    releaseId(value: string): az_apim_api_release_show_command_builder {
        this.setFlag("--release-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_release_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_release_show_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_api_release_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_release_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Updates the details of the release of the API specified by its identifier.
 *
 * Syntax:
 * ```
 * az apim api release update --api-id
 *                            --release-id
 *                            --resource-group
 *                            --service-name
 *                            [--add]
 *                            [--api-id1]
 *                            [--force-string]
 *                            [--if-match]
 *                            [--notes]
 *                            [--remove]
 *                            [--set]
 *                            [--subscription]
 * ```
 *
 * @param {string} apiId API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
 * @param {string} releaseId Release identifier within an API. Must be unique in the current API Management service instance.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 */
class az_apim_api_release_update_command_builder extends CommandBuilder<az_apim_api_release_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, releaseId: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.apiId(apiId)
        this.releaseId(releaseId)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_release_update_command_builder {
        this.setFlag("--api-id", value);
        return this;
    }

    /** Release identifier within an API. Must be unique in the current API Management service instance. */
    releaseId(value: string): az_apim_api_release_update_command_builder {
        this.setFlag("--release-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_release_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_release_update_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_apim_api_release_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** Identifier of the API the release belongs to. */
    apiId1(value: string): az_apim_api_release_update_command_builder {
        this.setFlag("--api-id1", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_apim_api_release_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** ETag of the Entity. */
    ifMatch(value: string): az_apim_api_release_update_command_builder {
        this.setFlag("--if-match", value);
        return this;
    }

    /** Release Notes. */
    notes(value: string): az_apim_api_release_update_command_builder {
        this.setFlag("--notes", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_apim_api_release_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_apim_api_release_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_release_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create API revision.
 *
 * Syntax:
 * ```
 * az apim api revision create --api-id
 *                             --api-revision
 *                             --resource-group
 *                             --service-name
 *                             [--api-revision-description]
 *                             [--subscription]
 * ```
 *
 * @param {string} apiId API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
 * @param {string} apiRevision Describes the Revision of the Api.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 */
class az_apim_api_revision_create_command_builder extends CommandBuilder<az_apim_api_revision_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, apiRevision: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.apiId(apiId)
        this.apiRevision(apiRevision)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_revision_create_command_builder {
        this.setFlag("--api-id", value);
        return this;
    }

    /** Describes the Revision of the Api. */
    apiRevision(value: string): az_apim_api_revision_create_command_builder {
        this.setFlag("--api-revision", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_revision_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_revision_create_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Description of the Api Revision. */
    apiRevisionDescription(value: string): az_apim_api_revision_create_command_builder {
        this.setFlag("--api-revision-description", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_revision_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Lists all revisions of an API.
 *
 * Syntax:
 * ```
 * az apim api revision list --api-id
 *                           --resource-group
 *                           --service-name
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} apiId API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 */
class az_apim_api_revision_list_command_builder extends CommandBuilder<az_apim_api_revision_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.apiId(apiId)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_revision_list_command_builder {
        this.setFlag("--api-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_revision_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_revision_list_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_api_revision_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_revision_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Creates a Api Version Set.
 *
 * Syntax:
 * ```
 * az apim api versionset create --display-name
 *                               --resource-group
 *                               --service-name
 *                               --versioning-scheme
 *                               [--description]
 *                               [--if-match]
 *                               [--subscription]
 *                               [--version-header-name]
 *                               [--version-query-name]
 *                               [--version-set-id]
 * ```
 *
 * @param {string} displayName Required. Name of API Version Set.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 * @param {string} versioningScheme Required. An value that determines where the API Version identifer will be located in a HTTP request.
 */
class az_apim_api_versionset_create_command_builder extends CommandBuilder<az_apim_api_versionset_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, displayName: string, resourceGroup: string, serviceName: string, versioningScheme: string) {
        super(commandPath, resultDataTypeName);
        this.displayName(displayName)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
        this.versioningScheme(versioningScheme)
    }

    /** Required. Name of API Version Set. */
    displayName(value: string): az_apim_api_versionset_create_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_versionset_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_versionset_create_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Required. An value that determines where the API Version identifer will be located in a HTTP request. */
    versioningScheme(value: string): az_apim_api_versionset_create_command_builder {
        this.setFlag("--versioning-scheme", value);
        return this;
    }

    /** Description of API Version Set. */
    description(value: string): az_apim_api_versionset_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** ETag of the Entity. */
    ifMatch(value: string): az_apim_api_versionset_create_command_builder {
        this.setFlag("--if-match", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_versionset_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`. */
    versionHeaderName(value: string): az_apim_api_versionset_create_command_builder {
        this.setFlag("--version-header-name", value);
        return this;
    }

    /** Name of query parameter that indicates the API Version if versioningScheme is set to `query`. */
    versionQueryName(value: string): az_apim_api_versionset_create_command_builder {
        this.setFlag("--version-query-name", value);
        return this;
    }

    /** A resource identifier for the related ApiVersionSet. */
    versionSetId(value: string): az_apim_api_versionset_create_command_builder {
        this.setFlag("--version-set-id", value);
        return this;
    }
}

/**
 * Deletes specific Api Version Set.
 *
 * Syntax:
 * ```
 * az apim api versionset delete --resource-group
 *                               --service-name
 *                               --version-set-id
 *                               [--if-match]
 *                               [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 * @param {string} versionSetId A resource identifier for the related ApiVersionSet.
 */
class az_apim_api_versionset_delete_command_builder extends CommandBuilder<az_apim_api_versionset_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, serviceName: string, versionSetId: string) {
        super(commandPath, resultDataTypeName);
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
        this.versionSetId(versionSetId)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_versionset_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_versionset_delete_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** A resource identifier for the related ApiVersionSet. */
    versionSetId(value: string): az_apim_api_versionset_delete_command_builder {
        this.setFlag("--version-set-id", value);
        return this;
    }

    /** ETag of the Entity. */
    ifMatch(value: string): az_apim_api_versionset_delete_command_builder {
        this.setFlag("--if-match", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_versionset_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Lists a collection of API Version Sets in the specified service instance.
 *
 * Syntax:
 * ```
 * az apim api versionset list --resource-group
 *                             --service-name
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 */
class az_apim_api_versionset_list_command_builder extends CommandBuilder<az_apim_api_versionset_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_versionset_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_versionset_list_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_api_versionset_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_versionset_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Gets the details of the Api Version Set specified by its identifier.
 *
 * Syntax:
 * ```
 * az apim api versionset show --resource-group
 *                             --service-name
 *                             --version-set-id
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 * @param {string} versionSetId A resource identifier for the related ApiVersionSet.
 */
class az_apim_api_versionset_show_command_builder extends CommandBuilder<az_apim_api_versionset_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, serviceName: string, versionSetId: string) {
        super(commandPath, resultDataTypeName);
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
        this.versionSetId(versionSetId)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_versionset_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_versionset_show_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** A resource identifier for the related ApiVersionSet. */
    versionSetId(value: string): az_apim_api_versionset_show_command_builder {
        this.setFlag("--version-set-id", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_api_versionset_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_versionset_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Updates the details of the Api VersionSet specified by its identifier.
 *
 * Syntax:
 * ```
 * az apim api versionset update --resource-group
 *                               --service-name
 *                               --version-set-id
 *                               [--add]
 *                               [--description]
 *                               [--display-name]
 *                               [--force-string]
 *                               [--if-match]
 *                               [--remove]
 *                               [--set]
 *                               [--subscription]
 *                               [--version-header-name]
 *                               [--version-query-name]
 *                               [--versioning-scheme]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 * @param {string} versionSetId A resource identifier for the related ApiVersionSet.
 */
class az_apim_api_versionset_update_command_builder extends CommandBuilder<az_apim_api_versionset_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, serviceName: string, versionSetId: string) {
        super(commandPath, resultDataTypeName);
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
        this.versionSetId(versionSetId)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_versionset_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_versionset_update_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** A resource identifier for the related ApiVersionSet. */
    versionSetId(value: string): az_apim_api_versionset_update_command_builder {
        this.setFlag("--version-set-id", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_apim_api_versionset_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** Description of API Version Set. */
    description(value: string): az_apim_api_versionset_update_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Required. Name of API Version Set. */
    displayName(value: string): az_apim_api_versionset_update_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_apim_api_versionset_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** ETag of the Entity. */
    ifMatch(value: string): az_apim_api_versionset_update_command_builder {
        this.setFlag("--if-match", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_apim_api_versionset_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_apim_api_versionset_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_versionset_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`. */
    versionHeaderName(value: string): az_apim_api_versionset_update_command_builder {
        this.setFlag("--version-header-name", value);
        return this;
    }

    /** Name of query parameter that indicates the API Version if versioningScheme is set to `query`. */
    versionQueryName(value: string): az_apim_api_versionset_update_command_builder {
        this.setFlag("--version-query-name", value);
        return this;
    }

    /** Required. An value that determines where the API Version identifer will be located in a HTTP request. */
    versioningScheme(value: string): az_apim_api_versionset_update_command_builder {
        this.setFlag("--versioning-scheme", value);
        return this;
    }
}

/**
 * Create an API Management API.
 *
 * Syntax:
 * ```
 * az apim api create --api-id
 *                    --display-name
 *                    --path
 *                    --resource-group
 *                    --service-name
 *                    [--api-type {http, soap}]
 *                    [--authorization-scope]
 *                    [--authorization-server-id]
 *                    [--bearer-token-sending-methods]
 *                    [--description]
 *                    [--no-wait]
 *                    [--open-id-provider-id]
 *                    [--protocols {http, https}]
 *                    [--service-url]
 *                    [--subscription]
 *                    [--subscription-key-header-name]
 *                    [--subscription-key-query-param-name]
 *                    [--subscription-key-required]
 *                    [--subscription-required {false, true}]
 * ```
 *
 * @param {string} apiId Unique name of the api to be created.
 * @param {string} displayName Display name of the API to be created.
 * @param {string} path Path to the API.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 */
class az_apim_api_create_command_builder extends CommandBuilder<az_apim_api_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, displayName: string, path: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.apiId(apiId)
        this.displayName(displayName)
        this.path(path)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** Unique name of the api to be created. */
    apiId(value: string): az_apim_api_create_command_builder {
        this.setFlag("--api-id", value);
        return this;
    }

    /** Display name of the API to be created. */
    displayName(value: string): az_apim_api_create_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Path to the API. */
    path(value: string): az_apim_api_create_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_create_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** The type of the API. */
    apiType(value: 'http' | 'soap'): az_apim_api_create_command_builder {
        this.setFlag("--api-type", value);
        return this;
    }

    /** Specifies the OAuth operations scope. */
    authorizationScope(value: string): az_apim_api_create_command_builder {
        this.setFlag("--authorization-scope", value);
        return this;
    }

    /** Specifies the OAuth authorization server ID. */
    authorizationServerId(value: string): az_apim_api_create_command_builder {
        this.setFlag("--authorization-server-id", value);
        return this;
    }

    /** Specifies the sending methods for bearer token. */
    bearerTokenSendingMethods(value: string): az_apim_api_create_command_builder {
        this.setFlag("--bearer-token-sending-methods", value);
        return this;
    }

    /** Description of the API. May include HTML formatting tags. */
    description(value: string): az_apim_api_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_apim_api_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Specifies the openid in the authentication setting. */
    openIdProviderId(value: string): az_apim_api_create_command_builder {
        this.setFlag("--open-id-provider-id", value);
        return this;
    }

    /** Describes on which protocols the operations in this API can be invoked. */
    protocols(value: 'http' | 'https'): az_apim_api_create_command_builder {
        this.setFlag("--protocols", value);
        return this;
    }

    /** Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long. */
    serviceUrl(value: string): az_apim_api_create_command_builder {
        this.setFlag("--service-url", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Specifies the subscription key header name. */
    subscriptionKeyHeaderName(value: string): az_apim_api_create_command_builder {
        this.setFlag("--subscription-key-header-name", value);
        return this;
    }

    /** Specifies the subscription key query string parameter name. */
    subscriptionKeyQueryParamName(value: string): az_apim_api_create_command_builder {
        this.setFlag("--subscription-key-query-param-name", value);
        return this;
    }

    /** Specifies whether subscription key is required during call to this API, true - API is included into closed products only, false - API is included into open products alone, null - there is a mix of products. */
    subscriptionKeyRequired(value: string): az_apim_api_create_command_builder {
        this.setFlag("--subscription-key-required", value);
        return this;
    }

    /** If true, the API requires a subscription key on requests. */
    subscriptionRequired(value: boolean): az_apim_api_create_command_builder {
        this.setFlag("--subscription-required", value.toString());
        return this;
    }
}

/**
 * Delete an API Management API.
 *
 * Syntax:
 * ```
 * az apim api delete --api-id
 *                    --resource-group
 *                    --service-name
 *                    [--delete-revisions]
 *                    [--if-match]
 *                    [--no-wait]
 *                    [--subscription]
 *                    [--yes]
 * ```
 *
 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 */
class az_apim_api_delete_command_builder extends CommandBuilder<az_apim_api_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.apiId(apiId)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_delete_command_builder {
        this.setFlag("--api-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_delete_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Delete all revisions of the Api. */
    deleteRevisions(value: string): az_apim_api_delete_command_builder {
        this.setFlag("--delete-revisions", value);
        return this;
    }

    /** ETag of the Entity. */
    ifMatch(value: string): az_apim_api_delete_command_builder {
        this.setFlag("--if-match", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_apim_api_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_apim_api_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * Import an API Management service instance.
 *
 * Syntax:
 * ```
 * az apim api import --path
 *                    --resource-group
 *                    --service-name
 *                    [--api-id]
 *                    [--api-revision]
 *                    [--api-type {http, soap}]
 *                    [--description]
 *                    [--display-name]
 *                    [--no-wait]
 *                    [--protocols {http, https}]
 *                    [--service-url]
 *                    [--soap-api-type]
 *                    [--specification-format {OpenApi, OpenApiJson, Swagger, Wadl, Wsdl}]
 *                    [--specification-path]
 *                    [--specification-url]
 *                    [--subscription]
 *                    [--subscription-key-header-name]
 *                    [--subscription-key-query-param-name]
 *                    [--subscription-required {false, true}]
 *                    [--wsdl-endpoint-name]
 *                    [--wsdl-service-name]
 * ```
 *
 * @param {string} path Required. Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the api management service instance.
 */
class az_apim_api_import_command_builder extends CommandBuilder<az_apim_api_import_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.path(path)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** Required. Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. */
    path(value: string): az_apim_api_import_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_import_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the api management service instance. */
    serviceName(value: string): az_apim_api_import_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_import_command_builder {
        this.setFlag("--api-id", value);
        return this;
    }

    /** Describes the Revision of the Api. If no value is provided, default revision 1 is created. */
    apiRevision(value: string): az_apim_api_import_command_builder {
        this.setFlag("--api-revision", value);
        return this;
    }

    /** The type of the API. */
    apiType(value: 'http' | 'soap'): az_apim_api_import_command_builder {
        this.setFlag("--api-type", value);
        return this;
    }

    /** Description of the API. May include HTML formatting tags. */
    description(value: string): az_apim_api_import_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Display name of this API. */
    displayName(value: string): az_apim_api_import_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_apim_api_import_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Describes on which protocols the operations in this API can be invoked. */
    protocols(value: 'http' | 'https'): az_apim_api_import_command_builder {
        this.setFlag("--protocols", value);
        return this;
    }

    /** Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long. */
    serviceUrl(value: string): az_apim_api_import_command_builder {
        this.setFlag("--service-url", value);
        return this;
    }

    /** The type of API when file format is WSDL. */
    soapApiType(value: string): az_apim_api_import_command_builder {
        this.setFlag("--soap-api-type", value);
        return this;
    }

    /** Specify the format of the imported API. */
    specificationFormat(value: 'OpenApi' | 'OpenApiJson' | 'Swagger' | 'Wadl' | 'Wsdl'): az_apim_api_import_command_builder {
        this.setFlag("--specification-format", value);
        return this;
    }

    /** File path specified to import the API. */
    specificationPath(value: string): az_apim_api_import_command_builder {
        this.setFlag("--specification-path", value);
        return this;
    }

    /** Url specified to import the API. */
    specificationUrl(value: string): az_apim_api_import_command_builder {
        this.setFlag("--specification-url", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_import_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Specifies the subscription key header name. */
    subscriptionKeyHeaderName(value: string): az_apim_api_import_command_builder {
        this.setFlag("--subscription-key-header-name", value);
        return this;
    }

    /** Specifies the subscription key query string parameter name. */
    subscriptionKeyQueryParamName(value: string): az_apim_api_import_command_builder {
        this.setFlag("--subscription-key-query-param-name", value);
        return this;
    }

    /** If true, the API requires a subscription key on requests. */
    subscriptionRequired(value: boolean): az_apim_api_import_command_builder {
        this.setFlag("--subscription-required", value.toString());
        return this;
    }

    /** Local name of WSDL Endpoint (port) to be imported. */
    wsdlEndpointName(value: string): az_apim_api_import_command_builder {
        this.setFlag("--wsdl-endpoint-name", value);
        return this;
    }

    /** Local name of WSDL Service to be imported. */
    wsdlServiceName(value: string): az_apim_api_import_command_builder {
        this.setFlag("--wsdl-service-name", value);
        return this;
    }
}

/**
 * List API Management API's.
 *
 * Syntax:
 * ```
 * az apim api list --resource-group
 *                  --service-name
 *                  [--filter-display-name]
 *                  [--query-examples]
 *                  [--skip]
 *                  [--subscription]
 *                  [--top]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 */
class az_apim_api_list_command_builder extends CommandBuilder<az_apim_api_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_list_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Filter of APIs by displayName. */
    filterDisplayName(value: string): az_apim_api_list_command_builder {
        this.setFlag("--filter-display-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_api_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Number of records to skip. */
    skip(value: string): az_apim_api_list_command_builder {
        this.setFlag("--skip", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Number of records to return. */
    top(value: string): az_apim_api_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
}

/**
 * Show details of an API Management API.
 *
 * Syntax:
 * ```
 * az apim api show --api-id
 *                  --resource-group
 *                  --service-name
 *                  [--query-examples]
 *                  [--subscription]
 * ```
 *
 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 */
class az_apim_api_show_command_builder extends CommandBuilder<az_apim_api_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.apiId(apiId)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_show_command_builder {
        this.setFlag("--api-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_show_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_api_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update an API Management API.
 *
 * Syntax:
 * ```
 * az apim api update --api-id
 *                    --resource-group
 *                    --service-name
 *                    [--add]
 *                    [--api-type {http, soap}]
 *                    [--description]
 *                    [--display-name]
 *                    [--force-string]
 *                    [--if-match]
 *                    [--no-wait]
 *                    [--path]
 *                    [--protocols {http, https}]
 *                    [--remove]
 *                    [--service-url]
 *                    [--set]
 *                    [--subscription]
 *                    [--subscription-key-header-name]
 *                    [--subscription-key-query-param-name]
 *                    [--subscription-required {false, true}]
 *                    [--tags]
 * ```
 *
 * @param {string} apiId Unique name of the api to be created.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 */
class az_apim_api_update_command_builder extends CommandBuilder<az_apim_api_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.apiId(apiId)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** Unique name of the api to be created. */
    apiId(value: string): az_apim_api_update_command_builder {
        this.setFlag("--api-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_update_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_apim_api_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The type of the API. */
    apiType(value: 'http' | 'soap'): az_apim_api_update_command_builder {
        this.setFlag("--api-type", value);
        return this;
    }

    /** Description of the API. May include HTML formatting tags. */
    description(value: string): az_apim_api_update_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** API name. Must be 1 to 300 characters long. */
    displayName(value: string): az_apim_api_update_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_apim_api_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** ETag of the Entity. Not required when creating an entity, but required when updating an entity. */
    ifMatch(value: string): az_apim_api_update_command_builder {
        this.setFlag("--if-match", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_apim_api_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Required. Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. */
    path(value: string): az_apim_api_update_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Describes on which protocols the operations in this API can be invoked. */
    protocols(value: 'http' | 'https'): az_apim_api_update_command_builder {
        this.setFlag("--protocols", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_apim_api_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long. */
    serviceUrl(value: string): az_apim_api_update_command_builder {
        this.setFlag("--service-url", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_apim_api_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Specifies the subscription key header name. */
    subscriptionKeyHeaderName(value: string): az_apim_api_update_command_builder {
        this.setFlag("--subscription-key-header-name", value);
        return this;
    }

    /** Specifies the subscription key query string parameter name. */
    subscriptionKeyQueryParamName(value: string): az_apim_api_update_command_builder {
        this.setFlag("--subscription-key-query-param-name", value);
        return this;
    }

    /** If true, the API requires a subscription key on requests. */
    subscriptionRequired(value: boolean): az_apim_api_update_command_builder {
        this.setFlag("--subscription-required", value.toString());
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_apim_api_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

/**
 * Place the CLI in a waiting state until a condition of an apim api is met.
 *
 * Syntax:
 * ```
 * az apim api wait --api-id
 *                  --name
 *                  --resource-group
 *                  [--created]
 *                  [--custom]
 *                  [--deleted]
 *                  [--exists]
 *                  [--interval]
 *                  [--subscription]
 *                  [--timeout]
 *                  [--updated]
 * ```
 *
 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
 * @param {string} name The name of the api management service instance.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_apim_api_wait_command_builder extends CommandBuilder<az_apim_api_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.apiId(apiId)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_wait_command_builder {
        this.setFlag("--api-id", value);
        return this;
    }

    /** The name of the api management service instance. */
    name(value: string): az_apim_api_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_apim_api_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_apim_api_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_apim_api_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_apim_api_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_apim_api_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_apim_api_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_apim_api_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
}

/**
 * Create an API Management Named Value.
 *
 * Syntax:
 * ```
 * az apim nv create --display-name
 *                   --named-value-id
 *                   --resource-group
 *                   --service-name
 *                   [--secret {false, true}]
 *                   [--subscription]
 *                   [--tags]
 *                   [--value]
 * ```
 *
 * @param {string} displayName The Display name of the Named Value.
 * @param {string} namedValueId Unique name for the Named Value to be created.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 */
class az_apim_nv_create_command_builder extends CommandBuilder<az_apim_nv_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, displayName: string, namedValueId: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.displayName(displayName)
        this.namedValueId(namedValueId)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** The Display name of the Named Value. */
    displayName(value: string): az_apim_nv_create_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Unique name for the Named Value to be created. */
    namedValueId(value: string): az_apim_nv_create_command_builder {
        this.setFlag("--named-value-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_nv_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_nv_create_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Determines whether the value is a secret and should be encrypted or not. Default value is false. */
    secret(value: boolean): az_apim_nv_create_command_builder {
        this.setFlag("--secret", value.toString());
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_nv_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_apim_nv_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The value of the Named Value. */
    value(value: string): az_apim_nv_create_command_builder {
        this.setFlag("--value", value);
        return this;
    }
}

/**
 * Delete an API Management Named Value.
 *
 * Syntax:
 * ```
 * az apim nv delete --named-value-id
 *                   --resource-group
 *                   --service-name
 *                   [--subscription]
 *                   [--yes]
 * ```
 *
 * @param {string} namedValueId Identifier of the NamedValue.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 */
class az_apim_nv_delete_command_builder extends CommandBuilder<az_apim_nv_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namedValueId: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.namedValueId(namedValueId)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** Identifier of the NamedValue. */
    namedValueId(value: string): az_apim_nv_delete_command_builder {
        this.setFlag("--named-value-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_nv_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_nv_delete_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_nv_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_apim_nv_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * List API Management Named Values.
 *
 * Syntax:
 * ```
 * az apim nv list --resource-group
 *                 --service-name
 *                 [--query-examples]
 *                 [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 */
class az_apim_nv_list_command_builder extends CommandBuilder<az_apim_nv_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_nv_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_nv_list_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_nv_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_nv_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show details of an API Management Named Value.
 *
 * Syntax:
 * ```
 * az apim nv show --named-value-id
 *                 --resource-group
 *                 --service-name
 *                 [--query-examples]
 *                 [--subscription]
 * ```
 *
 * @param {string} namedValueId Identifier of the NamedValue.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 */
class az_apim_nv_show_command_builder extends CommandBuilder<az_apim_nv_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namedValueId: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.namedValueId(namedValueId)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** Identifier of the NamedValue. */
    namedValueId(value: string): az_apim_nv_show_command_builder {
        this.setFlag("--named-value-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_nv_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_nv_show_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_nv_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_nv_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Gets the secret of an API Management Named Value.
 *
 * Syntax:
 * ```
 * az apim nv show-secret --named-value-id
 *                        --resource-group
 *                        --service-name
 *                        [--subscription]
 * ```
 *
 * @param {string} namedValueId Identifier of the NamedValue.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 */
class az_apim_nv_show_secret_command_builder extends CommandBuilder<az_apim_nv_show_secret_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namedValueId: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.namedValueId(namedValueId)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** Identifier of the NamedValue. */
    namedValueId(value: string): az_apim_nv_show_secret_command_builder {
        this.setFlag("--named-value-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_nv_show_secret_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_nv_show_secret_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_nv_show_secret_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update an API Management Named Value.
 *
 * Syntax:
 * ```
 * az apim nv update --named-value-id
 *                   --resource-group
 *                   --service-name
 *                   [--add]
 *                   [--force-string]
 *                   [--if-match]
 *                   [--remove]
 *                   [--secret {false, true}]
 *                   [--set]
 *                   [--subscription]
 *                   [--tags]
 *                   [--value]
 * ```
 *
 * @param {string} namedValueId Unique name of the api to be created.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the API Management service instance.
 */
class az_apim_nv_update_command_builder extends CommandBuilder<az_apim_nv_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namedValueId: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.namedValueId(namedValueId)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** Unique name of the api to be created. */
    namedValueId(value: string): az_apim_nv_update_command_builder {
        this.setFlag("--named-value-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_nv_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_nv_update_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_apim_nv_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_apim_nv_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** ETag of the Entity. Not required when creating an entity, but required when updating an entity. */
    ifMatch(value: string): az_apim_nv_update_command_builder {
        this.setFlag("--if-match", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_apim_nv_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Determines whether the value is a secret and should be encrypted or not. Default value is false. */
    secret(value: boolean): az_apim_nv_update_command_builder {
        this.setFlag("--secret", value.toString());
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_apim_nv_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_nv_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_apim_nv_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The value of the Named Value. */
    value(value: string): az_apim_nv_update_command_builder {
        this.setFlag("--value", value);
        return this;
    }
}

/**
 * Add an API to the specified product.
 *
 * Syntax:
 * ```
 * az apim product api add --api-id
 *                         --product-id
 *                         --resource-group
 *                         --service-name
 *                         [--subscription]
 * ```
 *
 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
 * @param {string} productId Product identifier. Must be unique in the current API Management service instance.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the api management service instance.
 */
class az_apim_product_api_add_command_builder extends CommandBuilder<az_apim_product_api_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, productId: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.apiId(apiId)
        this.productId(productId)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_product_api_add_command_builder {
        this.setFlag("--api-id", value);
        return this;
    }

    /** Product identifier. Must be unique in the current API Management service instance. */
    productId(value: string): az_apim_product_api_add_command_builder {
        this.setFlag("--product-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_product_api_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the api management service instance. */
    serviceName(value: string): az_apim_product_api_add_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_product_api_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Checks that API entity specified by identifier is associated with the Product entity.
 *
 * Syntax:
 * ```
 * az apim product api check --api-id
 *                           --product-id
 *                           --resource-group
 *                           --service-name
 *                           [--subscription]
 * ```
 *
 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
 * @param {string} productId Product identifier. Must be unique in the current API Management service instance.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the api management service instance.
 */
class az_apim_product_api_check_command_builder extends CommandBuilder<az_apim_product_api_check_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, productId: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.apiId(apiId)
        this.productId(productId)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_product_api_check_command_builder {
        this.setFlag("--api-id", value);
        return this;
    }

    /** Product identifier. Must be unique in the current API Management service instance. */
    productId(value: string): az_apim_product_api_check_command_builder {
        this.setFlag("--product-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_product_api_check_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the api management service instance. */
    serviceName(value: string): az_apim_product_api_check_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_product_api_check_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Deletes the specified API from the specified product.
 *
 * Syntax:
 * ```
 * az apim product api delete --api-id
 *                            --product-id
 *                            --resource-group
 *                            --service-name
 *                            [--subscription]
 * ```
 *
 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
 * @param {string} productId Product identifier. Must be unique in the current API Management service instance.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the api management service instance.
 */
class az_apim_product_api_delete_command_builder extends CommandBuilder<az_apim_product_api_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, productId: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.apiId(apiId)
        this.productId(productId)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_product_api_delete_command_builder {
        this.setFlag("--api-id", value);
        return this;
    }

    /** Product identifier. Must be unique in the current API Management service instance. */
    productId(value: string): az_apim_product_api_delete_command_builder {
        this.setFlag("--product-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_product_api_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the api management service instance. */
    serviceName(value: string): az_apim_product_api_delete_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_product_api_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Lists a collection of the APIs associated with a product.
 *
 * Syntax:
 * ```
 * az apim product api list --product-id
 *                          --resource-group
 *                          --service-name
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} productId Product identifier. Must be unique in the current API Management service instance.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the api management service instance.
 */
class az_apim_product_api_list_command_builder extends CommandBuilder<az_apim_product_api_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, productId: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.productId(productId)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** Product identifier. Must be unique in the current API Management service instance. */
    productId(value: string): az_apim_product_api_list_command_builder {
        this.setFlag("--product-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_product_api_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the api management service instance. */
    serviceName(value: string): az_apim_product_api_list_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_product_api_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_product_api_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Creates a product.
 *
 * Syntax:
 * ```
 * az apim product create --product-name
 *                        --resource-group
 *                        --service-name
 *                        [--approval-required]
 *                        [--description]
 *                        [--legal-terms]
 *                        [--no-wait]
 *                        [--product-id]
 *                        [--state {notPublished, published}]
 *                        [--subscription]
 *                        [--subscription-required]
 *                        [--subscriptions-limit]
 * ```
 *
 * @param {string} productName Product name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the api management service instance.
 */
class az_apim_product_create_command_builder extends CommandBuilder<az_apim_product_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, productName: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.productName(productName)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** Product name. */
    productName(value: string): az_apim_product_create_command_builder {
        this.setFlag("--product-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_product_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the api management service instance. */
    serviceName(value: string): az_apim_product_create_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of false. */
    approvalRequired(value: string): az_apim_product_create_command_builder {
        this.setFlag("--approval-required", value);
        return this;
    }

    /** Product description. May include HTML formatting tags. */
    description(value: string): az_apim_product_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process. */
    legalTerms(value: string): az_apim_product_create_command_builder {
        this.setFlag("--legal-terms", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_apim_product_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Product identifier. Must be unique in the current API Management service instance. */
    productId(value: string): az_apim_product_create_command_builder {
        this.setFlag("--product-id", value);
        return this;
    }

    /** Whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished. */
    state(value: 'notPublished' | 'published'): az_apim_product_create_command_builder {
        this.setFlag("--state", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_product_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Whether a product subscription is required for accessing APIs included in this product. */
    subscriptionRequired(value: string): az_apim_product_create_command_builder {
        this.setFlag("--subscription-required", value);
        return this;
    }

    /** Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of false. */
    subscriptionsLimit(value: string): az_apim_product_create_command_builder {
        this.setFlag("--subscriptions-limit", value);
        return this;
    }
}

/**
 * Delete product.
 *
 * Syntax:
 * ```
 * az apim product delete --product-id
 *                        --resource-group
 *                        --service-name
 *                        [--delete-subscriptions]
 *                        [--if-match]
 *                        [--no-wait]
 *                        [--subscription]
 *                        [--yes]
 * ```
 *
 * @param {string} productId Product identifier. Must be unique in the current API Management service instance.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the api management service instance.
 */
class az_apim_product_delete_command_builder extends CommandBuilder<az_apim_product_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, productId: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.productId(productId)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** Product identifier. Must be unique in the current API Management service instance. */
    productId(value: string): az_apim_product_delete_command_builder {
        this.setFlag("--product-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_product_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the api management service instance. */
    serviceName(value: string): az_apim_product_delete_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Delete existing subscriptions associated with the product or not. */
    deleteSubscriptions(value: string): az_apim_product_delete_command_builder {
        this.setFlag("--delete-subscriptions", value);
        return this;
    }

    /** ETag of the Entity. */
    ifMatch(value: string): az_apim_product_delete_command_builder {
        this.setFlag("--if-match", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_apim_product_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_product_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_apim_product_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * Lists a collection of products in the specified service instance.
 *
 * Syntax:
 * ```
 * az apim product list --resource-group
 *                      --service-name
 *                      [--query-examples]
 *                      [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the api management service instance.
 */
class az_apim_product_list_command_builder extends CommandBuilder<az_apim_product_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_product_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the api management service instance. */
    serviceName(value: string): az_apim_product_list_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_product_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_product_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Gets the details of the product specified by its identifier.
 *
 * Syntax:
 * ```
 * az apim product show --product-id
 *                      --resource-group
 *                      --service-name
 *                      [--query-examples]
 *                      [--subscription]
 * ```
 *
 * @param {string} productId Product identifier. Must be unique in the current API Management service instance.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the api management service instance.
 */
class az_apim_product_show_command_builder extends CommandBuilder<az_apim_product_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, productId: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.productId(productId)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** Product identifier. Must be unique in the current API Management service instance. */
    productId(value: string): az_apim_product_show_command_builder {
        this.setFlag("--product-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_product_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the api management service instance. */
    serviceName(value: string): az_apim_product_show_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_product_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_product_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update existing product details.
 *
 * Syntax:
 * ```
 * az apim product update --product-id
 *                        --resource-group
 *                        --service-name
 *                        [--add]
 *                        [--approval-required]
 *                        [--description]
 *                        [--force-string]
 *                        [--if-match]
 *                        [--legal-terms]
 *                        [--no-wait]
 *                        [--product-name]
 *                        [--remove]
 *                        [--set]
 *                        [--state {notPublished, published}]
 *                        [--subscription]
 *                        [--subscription-required]
 *                        [--subscriptions-limit]
 * ```
 *
 * @param {string} productId Product identifier. Must be unique in the current API Management service instance.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the api management service instance.
 */
class az_apim_product_update_command_builder extends CommandBuilder<az_apim_product_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, productId: string, resourceGroup: string, serviceName: string) {
        super(commandPath, resultDataTypeName);
        this.productId(productId)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** Product identifier. Must be unique in the current API Management service instance. */
    productId(value: string): az_apim_product_update_command_builder {
        this.setFlag("--product-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_product_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the api management service instance. */
    serviceName(value: string): az_apim_product_update_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_apim_product_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** Whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of false. */
    approvalRequired(value: string): az_apim_product_update_command_builder {
        this.setFlag("--approval-required", value);
        return this;
    }

    /** Product description. May include HTML formatting tags. */
    description(value: string): az_apim_product_update_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_apim_product_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** ETag of the Entity. */
    ifMatch(value: string): az_apim_product_update_command_builder {
        this.setFlag("--if-match", value);
        return this;
    }

    /** Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process. */
    legalTerms(value: string): az_apim_product_update_command_builder {
        this.setFlag("--legal-terms", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_apim_product_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Product name. */
    productName(value: string): az_apim_product_update_command_builder {
        this.setFlag("--product-name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_apim_product_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_apim_product_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished. */
    state(value: 'notPublished' | 'published'): az_apim_product_update_command_builder {
        this.setFlag("--state", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_product_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Whether a product subscription is required for accessing APIs included in this product. */
    subscriptionRequired(value: string): az_apim_product_update_command_builder {
        this.setFlag("--subscription-required", value);
        return this;
    }

    /** Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of false. */
    subscriptionsLimit(value: string): az_apim_product_update_command_builder {
        this.setFlag("--subscriptions-limit", value);
        return this;
    }
}

/**
 * Back up an API Management service to the configured storage account.
 *
 * Syntax:
 * ```
 * az apim apply-network-updates --name
 *                               --resource-group
 *                               [--location]
 *                               [--no-wait]
 *                               [--subscription]
 * ```
 *
 * @param {string} name The name of the api management service instance.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_apim_apply_network_updates_command_builder extends CommandBuilder<az_apim_apply_network_updates_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the api management service instance. */
    name(value: string): az_apim_apply_network_updates_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_apply_network_updates_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_apim_apply_network_updates_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_apim_apply_network_updates_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_apply_network_updates_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Creates a backup of the API Management service to the given Azure Storage Account. This is long running operation and could take several minutes to complete.
 *
 * Syntax:
 * ```
 * az apim backup --backup-name
 *                --name
 *                --resource-group
 *                --storage-account-container
 *                --storage-account-key
 *                --storage-account-name
 *                [--no-wait]
 *                [--subscription]
 * ```
 *
 * @param {string} backupName The name of the backup file to create.
 * @param {string} name The name of the api management service instance.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} storageAccountContainer The name of the storage account container used to place the backup.
 * @param {string} storageAccountKey The access key of the storage account used to place the backup.
 * @param {string} storageAccountName The name of the storage account used to place the backup.
 */
class az_apim_backup_command_builder extends CommandBuilder<az_apim_backup_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, backupName: string, name: string, resourceGroup: string, storageAccountContainer: string, storageAccountKey: string, storageAccountName: string) {
        super(commandPath, resultDataTypeName);
        this.backupName(backupName)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.storageAccountContainer(storageAccountContainer)
        this.storageAccountKey(storageAccountKey)
        this.storageAccountName(storageAccountName)
    }

    /** The name of the backup file to create. */
    backupName(value: string): az_apim_backup_command_builder {
        this.setFlag("--backup-name", value);
        return this;
    }

    /** The name of the api management service instance. */
    name(value: string): az_apim_backup_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_backup_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the storage account container used to place the backup. */
    storageAccountContainer(value: string): az_apim_backup_command_builder {
        this.setFlag("--storage-account-container", value);
        return this;
    }

    /** The access key of the storage account used to place the backup. */
    storageAccountKey(value: string): az_apim_backup_command_builder {
        this.setFlag("--storage-account-key", value);
        return this;
    }

    /** The name of the storage account used to place the backup. */
    storageAccountName(value: string): az_apim_backup_command_builder {
        this.setFlag("--storage-account-name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_apim_backup_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_backup_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Checks to see if a service name is available to use.
 *
 * Syntax:
 * ```
 * az apim check-name --name
 *                    [--subscription]
 * ```
 *
 * @param {string} name The name of the api management service instance.
 */
class az_apim_check_name_command_builder extends CommandBuilder<az_apim_check_name_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** The name of the api management service instance. */
    name(value: string): az_apim_check_name_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_check_name_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create an API Management service instance.
 *
 * Syntax:
 * ```
 * az apim create --name
 *                --publisher-email
 *                --publisher-name
 *                --resource-group
 *                [--enable-client-certificate {false, true}]
 *                [--enable-managed-identity {false, true}]
 *                [--location]
 *                [--no-wait]
 *                [--sku-capacity]
 *                [--sku-name {Basic, Consumption, Developer, Premium, Standard}]
 *                [--subscription]
 *                [--tags]
 *                [--virtual-network {External, Internal, None}]
 * ```
 *
 * @param {string} name Unique name of the service instance to be created.
 * @param {string} publisherEmail The e-mail address to receive all system notifications.
 * @param {string} publisherName The name of your organization for use in the developer portal and e-mail notifications.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_apim_create_command_builder extends CommandBuilder<az_apim_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, publisherEmail: string, publisherName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.publisherEmail(publisherEmail)
        this.publisherName(publisherName)
        this.resourceGroup(resourceGroup)
    }

    /** Unique name of the service instance to be created. */
    name(value: string): az_apim_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The e-mail address to receive all system notifications. */
    publisherEmail(value: string): az_apim_create_command_builder {
        this.setFlag("--publisher-email", value);
        return this;
    }

    /** The name of your organization for use in the developer portal and e-mail notifications. */
    publisherName(value: string): az_apim_create_command_builder {
        this.setFlag("--publisher-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Enforces a client certificate to be presented on each request to the gateway and also enables the ability to authenticate the certificate in the policy on the gateway. */
    enableClientCertificate(value: boolean): az_apim_create_command_builder {
        this.setFlag("--enable-client-certificate", value.toString());
        return this;
    }

    /** Create a managed identity for the API Management service to access other Azure resources. */
    enableManagedIdentity(value: boolean): az_apim_create_command_builder {
        this.setFlag("--enable-managed-identity", value.toString());
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_apim_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_apim_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The number of deployed units of the SKU. */
    skuCapacity(value: string): az_apim_create_command_builder {
        this.setFlag("--sku-capacity", value);
        return this;
    }

    /** The sku of the api management instance. */
    skuName(value: 'Basic' | 'Consumption' | 'Developer' | 'Premium' | 'Standard'): az_apim_create_command_builder {
        this.setFlag("--sku-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_apim_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The virtual network type. */
    virtualNetwork(value: 'External' | 'Internal' | 'None'): az_apim_create_command_builder {
        this.setFlag("--virtual-network", value);
        return this;
    }
}

/**
 * Deletes an API Management service.
 *
 * Syntax:
 * ```
 * az apim delete --name
 *                --resource-group
 *                [--no-wait]
 *                [--subscription]
 *                [--yes]
 * ```
 *
 * @param {string} name The name of the api management service instance.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_apim_delete_command_builder extends CommandBuilder<az_apim_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the api management service instance. */
    name(value: string): az_apim_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_apim_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_apim_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * List API Management service instances.
 *
 * Syntax:
 * ```
 * az apim list [--query-examples]
 *              [--resource-group]
 *              [--subscription]
 * ```
 */
class az_apim_list_command_builder extends CommandBuilder<az_apim_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show details of an API Management service instance.
 *
 * Syntax:
 * ```
 * az apim show --name
 *              --resource-group
 *              [--query-examples]
 *              [--subscription]
 * ```
 *
 * @param {string} name The name of the api management service instance.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_apim_show_command_builder extends CommandBuilder<az_apim_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the api management service instance. */
    name(value: string): az_apim_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update an API Management service instance.
 *
 * Syntax:
 * ```
 * az apim update --name
 *                --resource-group
 *                [--add]
 *                [--enable-client-certificate {false, true}]
 *                [--enable-managed-identity {false, true}]
 *                [--force-string]
 *                [--no-wait]
 *                [--publisher-email]
 *                [--publisher-name]
 *                [--remove]
 *                [--set]
 *                [--sku-capacity]
 *                [--sku-name {Basic, Consumption, Developer, Premium, Standard}]
 *                [--subscription]
 *                [--tags]
 *                [--virtual-network {External, Internal, None}]
 * ```
 *
 * @param {string} name The name of the api management service instance.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_apim_update_command_builder extends CommandBuilder<az_apim_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the api management service instance. */
    name(value: string): az_apim_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_apim_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** Enforces a client certificate to be presented on each request to the gateway and also enables the ability to authenticate the certificate in the policy on the gateway. */
    enableClientCertificate(value: boolean): az_apim_update_command_builder {
        this.setFlag("--enable-client-certificate", value.toString());
        return this;
    }

    /** Create a managed identity for the API Management service to access other Azure resources. */
    enableManagedIdentity(value: boolean): az_apim_update_command_builder {
        this.setFlag("--enable-managed-identity", value.toString());
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_apim_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_apim_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The e-mail address to receive all system notifications. */
    publisherEmail(value: string): az_apim_update_command_builder {
        this.setFlag("--publisher-email", value);
        return this;
    }

    /** The name of your organization for use in the developer portal and e-mail notifications. */
    publisherName(value: string): az_apim_update_command_builder {
        this.setFlag("--publisher-name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_apim_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_apim_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** The number of deployed units of the SKU. */
    skuCapacity(value: string): az_apim_update_command_builder {
        this.setFlag("--sku-capacity", value);
        return this;
    }

    /** The sku of the api management instance. */
    skuName(value: 'Basic' | 'Consumption' | 'Developer' | 'Premium' | 'Standard'): az_apim_update_command_builder {
        this.setFlag("--sku-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_apim_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The virtual network type. */
    virtualNetwork(value: 'External' | 'Internal' | 'None'): az_apim_update_command_builder {
        this.setFlag("--virtual-network", value);
        return this;
    }
}

/**
 * Place the CLI in a waiting state until a condition of an apim is met.
 *
 * Syntax:
 * ```
 * az apim wait --name
 *              --resource-group
 *              [--created]
 *              [--custom]
 *              [--deleted]
 *              [--exists]
 *              [--interval]
 *              [--subscription]
 *              [--timeout]
 *              [--updated]
 * ```
 *
 * @param {string} name The name of the api management service instance.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_apim_wait_command_builder extends CommandBuilder<az_apim_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the api management service instance. */
    name(value: string): az_apim_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_apim_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_apim_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_apim_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_apim_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_apim_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_apim_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_apim_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
}
