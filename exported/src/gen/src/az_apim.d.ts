import { CommandBuilder } from '../base';
import { az_apim_api_operation_create_command_result } from './models/az_apim_api_operation_create_command_result';
import { az_apim_api_operation_delete_command_result } from './models/az_apim_api_operation_delete_command_result';
import { az_apim_api_operation_list_command_result } from './models/az_apim_api_operation_list_command_result';
import { az_apim_api_operation_show_command_result } from './models/az_apim_api_operation_show_command_result';
import { az_apim_api_operation_update_command_result } from './models/az_apim_api_operation_update_command_result';
import { az_apim_api_release_create_command_result } from './models/az_apim_api_release_create_command_result';
import { az_apim_api_release_delete_command_result } from './models/az_apim_api_release_delete_command_result';
import { az_apim_api_release_list_command_result } from './models/az_apim_api_release_list_command_result';
import { az_apim_api_release_show_command_result } from './models/az_apim_api_release_show_command_result';
import { az_apim_api_release_update_command_result } from './models/az_apim_api_release_update_command_result';
import { az_apim_api_revision_create_command_result } from './models/az_apim_api_revision_create_command_result';
import { az_apim_api_revision_list_command_result } from './models/az_apim_api_revision_list_command_result';
import { az_apim_api_versionset_create_command_result } from './models/az_apim_api_versionset_create_command_result';
import { az_apim_api_versionset_delete_command_result } from './models/az_apim_api_versionset_delete_command_result';
import { az_apim_api_versionset_list_command_result } from './models/az_apim_api_versionset_list_command_result';
import { az_apim_api_versionset_show_command_result } from './models/az_apim_api_versionset_show_command_result';
import { az_apim_api_versionset_update_command_result } from './models/az_apim_api_versionset_update_command_result';
import { az_apim_api_create_command_result } from './models/az_apim_api_create_command_result';
import { az_apim_api_delete_command_result } from './models/az_apim_api_delete_command_result';
import { az_apim_api_import_command_result } from './models/az_apim_api_import_command_result';
import { az_apim_api_list_command_result } from './models/az_apim_api_list_command_result';
import { az_apim_api_show_command_result } from './models/az_apim_api_show_command_result';
import { az_apim_api_update_command_result } from './models/az_apim_api_update_command_result';
import { az_apim_api_wait_command_result } from './models/az_apim_api_wait_command_result';
import { az_apim_nv_create_command_result } from './models/az_apim_nv_create_command_result';
import { az_apim_nv_delete_command_result } from './models/az_apim_nv_delete_command_result';
import { az_apim_nv_list_command_result } from './models/az_apim_nv_list_command_result';
import { az_apim_nv_show_command_result } from './models/az_apim_nv_show_command_result';
import { az_apim_nv_show_secret_command_result } from './models/az_apim_nv_show_secret_command_result';
import { az_apim_nv_update_command_result } from './models/az_apim_nv_update_command_result';
import { az_apim_product_api_add_command_result } from './models/az_apim_product_api_add_command_result';
import { az_apim_product_api_check_command_result } from './models/az_apim_product_api_check_command_result';
import { az_apim_product_api_delete_command_result } from './models/az_apim_product_api_delete_command_result';
import { az_apim_product_api_list_command_result } from './models/az_apim_product_api_list_command_result';
import { az_apim_product_create_command_result } from './models/az_apim_product_create_command_result';
import { az_apim_product_delete_command_result } from './models/az_apim_product_delete_command_result';
import { az_apim_product_list_command_result } from './models/az_apim_product_list_command_result';
import { az_apim_product_show_command_result } from './models/az_apim_product_show_command_result';
import { az_apim_product_update_command_result } from './models/az_apim_product_update_command_result';
import { az_apim_apply_network_updates_command_result } from './models/az_apim_apply_network_updates_command_result';
import { az_apim_backup_command_result } from './models/az_apim_backup_command_result';
import { az_apim_check_name_command_result } from './models/az_apim_check_name_command_result';
import { az_apim_create_command_result } from './models/az_apim_create_command_result';
import { az_apim_delete_command_result } from './models/az_apim_delete_command_result';
import { az_apim_list_command_result } from './models/az_apim_list_command_result';
import { az_apim_show_command_result } from './models/az_apim_show_command_result';
import { az_apim_update_command_result } from './models/az_apim_update_command_result';
import { az_apim_wait_command_result } from './models/az_apim_wait_command_result';
/** Manage Azure API Management API Operations. */
export declare class az_apim_api_operation {
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
    static create(apiId: string, displayName: string, method: string, resourceGroup: string, serviceName: string, urlTemplate: string): az_apim_api_operation_create_command_builder;
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
    static delete(apiId: string, operationId: string, resourceGroup: string, serviceName: string): az_apim_api_operation_delete_command_builder;
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
    static list(apiId: string, resourceGroup: string, serviceName: string): az_apim_api_operation_list_command_builder;
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
    static show(apiId: string, operationId: string, resourceGroup: string, serviceName: string): az_apim_api_operation_show_command_builder;
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
    static update(apiId: string, operationId: string, resourceGroup: string, serviceName: string): az_apim_api_operation_update_command_builder;
}
/** Manage Azure API Management API Release. */
export declare class az_apim_api_release {
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
    static create(apiId: string, apiRevision: string, resourceGroup: string, serviceName: string): az_apim_api_release_create_command_builder;
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
    static delete(apiId: string, releaseId: string, resourceGroup: string, serviceName: string): az_apim_api_release_delete_command_builder;
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
    static list(apiId: string, resourceGroup: string, serviceName: string): az_apim_api_release_list_command_builder;
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
    static show(apiId: string, releaseId: string, resourceGroup: string, serviceName: string): az_apim_api_release_show_command_builder;
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
    static update(apiId: string, releaseId: string, resourceGroup: string, serviceName: string): az_apim_api_release_update_command_builder;
}
/** Manage Azure API Management API Revision. */
export declare class az_apim_api_revision {
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
    static create(apiId: string, apiRevision: string, resourceGroup: string, serviceName: string): az_apim_api_revision_create_command_builder;
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
    static list(apiId: string, resourceGroup: string, serviceName: string): az_apim_api_revision_list_command_builder;
}
/** Manage Azure API Management API Version Set. */
export declare class az_apim_api_versionset {
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
    static create(displayName: string, resourceGroup: string, serviceName: string, versioningScheme: string): az_apim_api_versionset_create_command_builder;
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
    static delete(resourceGroup: string, serviceName: string, versionSetId: string): az_apim_api_versionset_delete_command_builder;
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
    static list(resourceGroup: string, serviceName: string): az_apim_api_versionset_list_command_builder;
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
    static show(resourceGroup: string, serviceName: string, versionSetId: string): az_apim_api_versionset_show_command_builder;
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
    static update(resourceGroup: string, serviceName: string, versionSetId: string): az_apim_api_versionset_update_command_builder;
}
/** Manage Azure API Management API's. */
export declare class az_apim_api {
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
    static create(apiId: string, displayName: string, path: string, resourceGroup: string, serviceName: string): az_apim_api_create_command_builder;
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
    static delete(apiId: string, resourceGroup: string, serviceName: string): az_apim_api_delete_command_builder;
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
    static import(path: string, resourceGroup: string, serviceName: string): az_apim_api_import_command_builder;
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
    static list(resourceGroup: string, serviceName: string): az_apim_api_list_command_builder;
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
    static show(apiId: string, resourceGroup: string, serviceName: string): az_apim_api_show_command_builder;
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
    static update(apiId: string, resourceGroup: string, serviceName: string): az_apim_api_update_command_builder;
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
    static wait(apiId: string, name: string, resourceGroup: string): az_apim_api_wait_command_builder;
}
/** Manage Azure API Management Named Values. */
export declare class az_apim_nv {
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
    static create(displayName: string, namedValueId: string, resourceGroup: string, serviceName: string): az_apim_nv_create_command_builder;
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
    static delete(namedValueId: string, resourceGroup: string, serviceName: string): az_apim_nv_delete_command_builder;
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
    static list(resourceGroup: string, serviceName: string): az_apim_nv_list_command_builder;
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
    static show(namedValueId: string, resourceGroup: string, serviceName: string): az_apim_nv_show_command_builder;
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
    static show_secret(namedValueId: string, resourceGroup: string, serviceName: string): az_apim_nv_show_secret_command_builder;
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
    static update(namedValueId: string, resourceGroup: string, serviceName: string): az_apim_nv_update_command_builder;
}
/** Manage Azure API Management Product's APIs. */
export declare class az_apim_product_api {
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
    static add(apiId: string, productId: string, resourceGroup: string, serviceName: string): az_apim_product_api_add_command_builder;
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
    static check(apiId: string, productId: string, resourceGroup: string, serviceName: string): az_apim_product_api_check_command_builder;
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
    static delete(apiId: string, productId: string, resourceGroup: string, serviceName: string): az_apim_product_api_delete_command_builder;
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
    static list(productId: string, resourceGroup: string, serviceName: string): az_apim_product_api_list_command_builder;
}
/** Manage Azure API Management Product's. */
export declare class az_apim_product {
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
    static create(productName: string, resourceGroup: string, serviceName: string): az_apim_product_create_command_builder;
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
    static delete(productId: string, resourceGroup: string, serviceName: string): az_apim_product_delete_command_builder;
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
    static list(resourceGroup: string, serviceName: string): az_apim_product_list_command_builder;
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
    static show(productId: string, resourceGroup: string, serviceName: string): az_apim_product_show_command_builder;
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
    static update(productId: string, resourceGroup: string, serviceName: string): az_apim_product_update_command_builder;
}
/** Manage Azure API Management services. */
export declare class az_apim {
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
    static apply_network_updates(name: string, resourceGroup: string): az_apim_apply_network_updates_command_builder;
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
    static backup(backupName: string, name: string, resourceGroup: string, storageAccountContainer: string, storageAccountKey: string, storageAccountName: string): az_apim_backup_command_builder;
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
    static check_name(name: string): az_apim_check_name_command_builder;
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
    static create(name: string, publisherEmail: string, publisherName: string, resourceGroup: string): az_apim_create_command_builder;
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
    static delete(name: string, resourceGroup: string): az_apim_delete_command_builder;
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
    static list(): az_apim_list_command_builder;
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
    static show(name: string, resourceGroup: string): az_apim_show_command_builder;
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
    static update(name: string, resourceGroup: string): az_apim_update_command_builder;
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
    static wait(name: string, resourceGroup: string): az_apim_wait_command_builder;
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
declare class az_apim_api_operation_create_command_builder extends CommandBuilder<az_apim_api_operation_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, displayName: string, method: string, resourceGroup: string, serviceName: string, urlTemplate: string);
    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_operation_create_command_builder;
    /** Required. Operation Name. */
    displayName(value: string): az_apim_api_operation_create_command_builder;
    /** Required. A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them. */
    method(value: string): az_apim_api_operation_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_operation_create_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_operation_create_command_builder;
    /** Relative URL template identifying the target resource for this operation. May include parameters. */
    urlTemplate(value: string): az_apim_api_operation_create_command_builder;
    /** Description of the operation. May include HTML formatting tags. */
    description(value: string): az_apim_api_operation_create_command_builder;
    /** ETag of the Entity. */
    ifMatch(value: string): az_apim_api_operation_create_command_builder;
    /** Operation identifier within an API. Must be unique in the current API Management service instance. */
    operationId(value: string): az_apim_api_operation_create_command_builder;
    /** Collection of URL template parameters. */
    templateParameters(value: string): az_apim_api_operation_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_operation_create_command_builder;
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
declare class az_apim_api_operation_delete_command_builder extends CommandBuilder<az_apim_api_operation_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, operationId: string, resourceGroup: string, serviceName: string);
    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_operation_delete_command_builder;
    /** Operation identifier within an API. Must be unique in the current API Management service instance. */
    operationId(value: string): az_apim_api_operation_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_operation_delete_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_operation_delete_command_builder;
    /** ETag of the Entity. */
    ifMatch(value: string): az_apim_api_operation_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_operation_delete_command_builder;
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
declare class az_apim_api_operation_list_command_builder extends CommandBuilder<az_apim_api_operation_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, resourceGroup: string, serviceName: string);
    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_operation_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_operation_list_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_operation_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_api_operation_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_operation_list_command_builder;
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
declare class az_apim_api_operation_show_command_builder extends CommandBuilder<az_apim_api_operation_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, operationId: string, resourceGroup: string, serviceName: string);
    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_operation_show_command_builder;
    /** Operation identifier within an API. Must be unique in the current API Management service instance. */
    operationId(value: string): az_apim_api_operation_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_operation_show_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_operation_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_api_operation_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_operation_show_command_builder;
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
declare class az_apim_api_operation_update_command_builder extends CommandBuilder<az_apim_api_operation_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, operationId: string, resourceGroup: string, serviceName: string);
    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_operation_update_command_builder;
    /** Operation identifier within an API. Must be unique in the current API Management service instance. */
    operationId(value: string): az_apim_api_operation_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_operation_update_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_operation_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_apim_api_operation_update_command_builder;
    /** Description of the operation. May include HTML formatting tags. */
    description(value: string): az_apim_api_operation_update_command_builder;
    /** Required. Operation Name. */
    displayName(value: string): az_apim_api_operation_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_apim_api_operation_update_command_builder;
    /** ETag of the Entity. */
    ifMatch(value: string): az_apim_api_operation_update_command_builder;
    /** Required. A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them. */
    method(value: string): az_apim_api_operation_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_apim_api_operation_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_apim_api_operation_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_operation_update_command_builder;
    /** Relative URL template identifying the target resource for this operation. May include parameters. */
    urlTemplate(value: string): az_apim_api_operation_update_command_builder;
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
declare class az_apim_api_release_create_command_builder extends CommandBuilder<az_apim_api_release_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, apiRevision: string, resourceGroup: string, serviceName: string);
    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_release_create_command_builder;
    /** API revision number. */
    apiRevision(value: string): az_apim_api_release_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_release_create_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_release_create_command_builder;
    /** ETag of the Entity. */
    ifMatch(value: string): az_apim_api_release_create_command_builder;
    /** Release Notes. */
    notes(value: string): az_apim_api_release_create_command_builder;
    /** Release identifier within an API. Must be unique in the current API Management service instance. */
    releaseId(value: string): az_apim_api_release_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_release_create_command_builder;
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
declare class az_apim_api_release_delete_command_builder extends CommandBuilder<az_apim_api_release_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, releaseId: string, resourceGroup: string, serviceName: string);
    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_release_delete_command_builder;
    /** Release identifier within an API. Must be unique in the current API Management service instance. */
    releaseId(value: string): az_apim_api_release_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_release_delete_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_release_delete_command_builder;
    /** ETag of the Entity. */
    ifMatch(value: string): az_apim_api_release_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_release_delete_command_builder;
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
declare class az_apim_api_release_list_command_builder extends CommandBuilder<az_apim_api_release_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, resourceGroup: string, serviceName: string);
    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_release_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_release_list_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_release_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_api_release_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_release_list_command_builder;
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
declare class az_apim_api_release_show_command_builder extends CommandBuilder<az_apim_api_release_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, releaseId: string, resourceGroup: string, serviceName: string);
    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_release_show_command_builder;
    /** Release identifier within an API. Must be unique in the current API Management service instance. */
    releaseId(value: string): az_apim_api_release_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_release_show_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_release_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_api_release_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_release_show_command_builder;
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
declare class az_apim_api_release_update_command_builder extends CommandBuilder<az_apim_api_release_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, releaseId: string, resourceGroup: string, serviceName: string);
    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_release_update_command_builder;
    /** Release identifier within an API. Must be unique in the current API Management service instance. */
    releaseId(value: string): az_apim_api_release_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_release_update_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_release_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_apim_api_release_update_command_builder;
    /** Identifier of the API the release belongs to. */
    apiId1(value: string): az_apim_api_release_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_apim_api_release_update_command_builder;
    /** ETag of the Entity. */
    ifMatch(value: string): az_apim_api_release_update_command_builder;
    /** Release Notes. */
    notes(value: string): az_apim_api_release_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_apim_api_release_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_apim_api_release_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_release_update_command_builder;
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
declare class az_apim_api_revision_create_command_builder extends CommandBuilder<az_apim_api_revision_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, apiRevision: string, resourceGroup: string, serviceName: string);
    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_revision_create_command_builder;
    /** Describes the Revision of the Api. */
    apiRevision(value: string): az_apim_api_revision_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_revision_create_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_revision_create_command_builder;
    /** Description of the Api Revision. */
    apiRevisionDescription(value: string): az_apim_api_revision_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_revision_create_command_builder;
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
declare class az_apim_api_revision_list_command_builder extends CommandBuilder<az_apim_api_revision_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, resourceGroup: string, serviceName: string);
    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_revision_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_revision_list_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_revision_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_api_revision_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_revision_list_command_builder;
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
declare class az_apim_api_versionset_create_command_builder extends CommandBuilder<az_apim_api_versionset_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, displayName: string, resourceGroup: string, serviceName: string, versioningScheme: string);
    /** Required. Name of API Version Set. */
    displayName(value: string): az_apim_api_versionset_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_versionset_create_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_versionset_create_command_builder;
    /** Required. An value that determines where the API Version identifer will be located in a HTTP request. */
    versioningScheme(value: string): az_apim_api_versionset_create_command_builder;
    /** Description of API Version Set. */
    description(value: string): az_apim_api_versionset_create_command_builder;
    /** ETag of the Entity. */
    ifMatch(value: string): az_apim_api_versionset_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_versionset_create_command_builder;
    /** Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`. */
    versionHeaderName(value: string): az_apim_api_versionset_create_command_builder;
    /** Name of query parameter that indicates the API Version if versioningScheme is set to `query`. */
    versionQueryName(value: string): az_apim_api_versionset_create_command_builder;
    /** A resource identifier for the related ApiVersionSet. */
    versionSetId(value: string): az_apim_api_versionset_create_command_builder;
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
declare class az_apim_api_versionset_delete_command_builder extends CommandBuilder<az_apim_api_versionset_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, serviceName: string, versionSetId: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_versionset_delete_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_versionset_delete_command_builder;
    /** A resource identifier for the related ApiVersionSet. */
    versionSetId(value: string): az_apim_api_versionset_delete_command_builder;
    /** ETag of the Entity. */
    ifMatch(value: string): az_apim_api_versionset_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_versionset_delete_command_builder;
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
declare class az_apim_api_versionset_list_command_builder extends CommandBuilder<az_apim_api_versionset_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, serviceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_versionset_list_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_versionset_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_api_versionset_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_versionset_list_command_builder;
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
declare class az_apim_api_versionset_show_command_builder extends CommandBuilder<az_apim_api_versionset_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, serviceName: string, versionSetId: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_versionset_show_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_versionset_show_command_builder;
    /** A resource identifier for the related ApiVersionSet. */
    versionSetId(value: string): az_apim_api_versionset_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_api_versionset_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_versionset_show_command_builder;
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
declare class az_apim_api_versionset_update_command_builder extends CommandBuilder<az_apim_api_versionset_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, serviceName: string, versionSetId: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_versionset_update_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_versionset_update_command_builder;
    /** A resource identifier for the related ApiVersionSet. */
    versionSetId(value: string): az_apim_api_versionset_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_apim_api_versionset_update_command_builder;
    /** Description of API Version Set. */
    description(value: string): az_apim_api_versionset_update_command_builder;
    /** Required. Name of API Version Set. */
    displayName(value: string): az_apim_api_versionset_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_apim_api_versionset_update_command_builder;
    /** ETag of the Entity. */
    ifMatch(value: string): az_apim_api_versionset_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_apim_api_versionset_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_apim_api_versionset_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_versionset_update_command_builder;
    /** Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`. */
    versionHeaderName(value: string): az_apim_api_versionset_update_command_builder;
    /** Name of query parameter that indicates the API Version if versioningScheme is set to `query`. */
    versionQueryName(value: string): az_apim_api_versionset_update_command_builder;
    /** Required. An value that determines where the API Version identifer will be located in a HTTP request. */
    versioningScheme(value: string): az_apim_api_versionset_update_command_builder;
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
declare class az_apim_api_create_command_builder extends CommandBuilder<az_apim_api_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, displayName: string, path: string, resourceGroup: string, serviceName: string);
    /** Unique name of the api to be created. */
    apiId(value: string): az_apim_api_create_command_builder;
    /** Display name of the API to be created. */
    displayName(value: string): az_apim_api_create_command_builder;
    /** Path to the API. */
    path(value: string): az_apim_api_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_create_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_create_command_builder;
    /** The type of the API. */
    apiType(value: 'http' | 'soap'): az_apim_api_create_command_builder;
    /** Specifies the OAuth operations scope. */
    authorizationScope(value: string): az_apim_api_create_command_builder;
    /** Specifies the OAuth authorization server ID. */
    authorizationServerId(value: string): az_apim_api_create_command_builder;
    /** Specifies the sending methods for bearer token. */
    bearerTokenSendingMethods(value: string): az_apim_api_create_command_builder;
    /** Description of the API. May include HTML formatting tags. */
    description(value: string): az_apim_api_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_apim_api_create_command_builder;
    /** Specifies the openid in the authentication setting. */
    openIdProviderId(value: string): az_apim_api_create_command_builder;
    /** Describes on which protocols the operations in this API can be invoked. */
    protocols(value: 'http' | 'https'): az_apim_api_create_command_builder;
    /** Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long. */
    serviceUrl(value: string): az_apim_api_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_create_command_builder;
    /** Specifies the subscription key header name. */
    subscriptionKeyHeaderName(value: string): az_apim_api_create_command_builder;
    /** Specifies the subscription key query string parameter name. */
    subscriptionKeyQueryParamName(value: string): az_apim_api_create_command_builder;
    /** Specifies whether subscription key is required during call to this API, true - API is included into closed products only, false - API is included into open products alone, null - there is a mix of products. */
    subscriptionKeyRequired(value: string): az_apim_api_create_command_builder;
    /** If true, the API requires a subscription key on requests. */
    subscriptionRequired(value: boolean): az_apim_api_create_command_builder;
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
declare class az_apim_api_delete_command_builder extends CommandBuilder<az_apim_api_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, resourceGroup: string, serviceName: string);
    /** API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_delete_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_delete_command_builder;
    /** Delete all revisions of the Api. */
    deleteRevisions(value: string): az_apim_api_delete_command_builder;
    /** ETag of the Entity. */
    ifMatch(value: string): az_apim_api_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_apim_api_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_apim_api_delete_command_builder;
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
declare class az_apim_api_import_command_builder extends CommandBuilder<az_apim_api_import_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string, resourceGroup: string, serviceName: string);
    /** Required. Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. */
    path(value: string): az_apim_api_import_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_import_command_builder;
    /** The name of the api management service instance. */
    serviceName(value: string): az_apim_api_import_command_builder;
    /** API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_import_command_builder;
    /** Describes the Revision of the Api. If no value is provided, default revision 1 is created. */
    apiRevision(value: string): az_apim_api_import_command_builder;
    /** The type of the API. */
    apiType(value: 'http' | 'soap'): az_apim_api_import_command_builder;
    /** Description of the API. May include HTML formatting tags. */
    description(value: string): az_apim_api_import_command_builder;
    /** Display name of this API. */
    displayName(value: string): az_apim_api_import_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_apim_api_import_command_builder;
    /** Describes on which protocols the operations in this API can be invoked. */
    protocols(value: 'http' | 'https'): az_apim_api_import_command_builder;
    /** Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long. */
    serviceUrl(value: string): az_apim_api_import_command_builder;
    /** The type of API when file format is WSDL. */
    soapApiType(value: string): az_apim_api_import_command_builder;
    /** Specify the format of the imported API. */
    specificationFormat(value: 'OpenApi' | 'OpenApiJson' | 'Swagger' | 'Wadl' | 'Wsdl'): az_apim_api_import_command_builder;
    /** File path specified to import the API. */
    specificationPath(value: string): az_apim_api_import_command_builder;
    /** Url specified to import the API. */
    specificationUrl(value: string): az_apim_api_import_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_import_command_builder;
    /** Specifies the subscription key header name. */
    subscriptionKeyHeaderName(value: string): az_apim_api_import_command_builder;
    /** Specifies the subscription key query string parameter name. */
    subscriptionKeyQueryParamName(value: string): az_apim_api_import_command_builder;
    /** If true, the API requires a subscription key on requests. */
    subscriptionRequired(value: boolean): az_apim_api_import_command_builder;
    /** Local name of WSDL Endpoint (port) to be imported. */
    wsdlEndpointName(value: string): az_apim_api_import_command_builder;
    /** Local name of WSDL Service to be imported. */
    wsdlServiceName(value: string): az_apim_api_import_command_builder;
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
declare class az_apim_api_list_command_builder extends CommandBuilder<az_apim_api_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, serviceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_list_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_list_command_builder;
    /** Filter of APIs by displayName. */
    filterDisplayName(value: string): az_apim_api_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_api_list_command_builder;
    /** Number of records to skip. */
    skip(value: string): az_apim_api_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_list_command_builder;
    /** Number of records to return. */
    top(value: string): az_apim_api_list_command_builder;
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
declare class az_apim_api_show_command_builder extends CommandBuilder<az_apim_api_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, resourceGroup: string, serviceName: string);
    /** API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_show_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_api_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_show_command_builder;
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
declare class az_apim_api_update_command_builder extends CommandBuilder<az_apim_api_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, resourceGroup: string, serviceName: string);
    /** Unique name of the api to be created. */
    apiId(value: string): az_apim_api_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_update_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_api_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_apim_api_update_command_builder;
    /** The type of the API. */
    apiType(value: 'http' | 'soap'): az_apim_api_update_command_builder;
    /** Description of the API. May include HTML formatting tags. */
    description(value: string): az_apim_api_update_command_builder;
    /** API name. Must be 1 to 300 characters long. */
    displayName(value: string): az_apim_api_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_apim_api_update_command_builder;
    /** ETag of the Entity. Not required when creating an entity, but required when updating an entity. */
    ifMatch(value: string): az_apim_api_update_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_apim_api_update_command_builder;
    /** Required. Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. */
    path(value: string): az_apim_api_update_command_builder;
    /** Describes on which protocols the operations in this API can be invoked. */
    protocols(value: 'http' | 'https'): az_apim_api_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_apim_api_update_command_builder;
    /** Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long. */
    serviceUrl(value: string): az_apim_api_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_apim_api_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_update_command_builder;
    /** Specifies the subscription key header name. */
    subscriptionKeyHeaderName(value: string): az_apim_api_update_command_builder;
    /** Specifies the subscription key query string parameter name. */
    subscriptionKeyQueryParamName(value: string): az_apim_api_update_command_builder;
    /** If true, the API requires a subscription key on requests. */
    subscriptionRequired(value: boolean): az_apim_api_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_apim_api_update_command_builder;
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
declare class az_apim_api_wait_command_builder extends CommandBuilder<az_apim_api_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, name: string, resourceGroup: string);
    /** API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_api_wait_command_builder;
    /** The name of the api management service instance. */
    name(value: string): az_apim_api_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_api_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_apim_api_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_apim_api_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_apim_api_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_apim_api_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_apim_api_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_api_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_apim_api_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_apim_api_wait_command_builder;
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
declare class az_apim_nv_create_command_builder extends CommandBuilder<az_apim_nv_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, displayName: string, namedValueId: string, resourceGroup: string, serviceName: string);
    /** The Display name of the Named Value. */
    displayName(value: string): az_apim_nv_create_command_builder;
    /** Unique name for the Named Value to be created. */
    namedValueId(value: string): az_apim_nv_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_nv_create_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_nv_create_command_builder;
    /** Determines whether the value is a secret and should be encrypted or not. Default value is false. */
    secret(value: boolean): az_apim_nv_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_nv_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_apim_nv_create_command_builder;
    /** The value of the Named Value. */
    value(value: string): az_apim_nv_create_command_builder;
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
declare class az_apim_nv_delete_command_builder extends CommandBuilder<az_apim_nv_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namedValueId: string, resourceGroup: string, serviceName: string);
    /** Identifier of the NamedValue. */
    namedValueId(value: string): az_apim_nv_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_nv_delete_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_nv_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_nv_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_apim_nv_delete_command_builder;
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
declare class az_apim_nv_list_command_builder extends CommandBuilder<az_apim_nv_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, serviceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_nv_list_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_nv_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_nv_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_nv_list_command_builder;
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
declare class az_apim_nv_show_command_builder extends CommandBuilder<az_apim_nv_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namedValueId: string, resourceGroup: string, serviceName: string);
    /** Identifier of the NamedValue. */
    namedValueId(value: string): az_apim_nv_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_nv_show_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_nv_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_nv_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_nv_show_command_builder;
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
declare class az_apim_nv_show_secret_command_builder extends CommandBuilder<az_apim_nv_show_secret_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namedValueId: string, resourceGroup: string, serviceName: string);
    /** Identifier of the NamedValue. */
    namedValueId(value: string): az_apim_nv_show_secret_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_nv_show_secret_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_nv_show_secret_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_nv_show_secret_command_builder;
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
declare class az_apim_nv_update_command_builder extends CommandBuilder<az_apim_nv_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namedValueId: string, resourceGroup: string, serviceName: string);
    /** Unique name of the api to be created. */
    namedValueId(value: string): az_apim_nv_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_nv_update_command_builder;
    /** The name of the API Management service instance. */
    serviceName(value: string): az_apim_nv_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_apim_nv_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_apim_nv_update_command_builder;
    /** ETag of the Entity. Not required when creating an entity, but required when updating an entity. */
    ifMatch(value: string): az_apim_nv_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_apim_nv_update_command_builder;
    /** Determines whether the value is a secret and should be encrypted or not. Default value is false. */
    secret(value: boolean): az_apim_nv_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_apim_nv_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_nv_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_apim_nv_update_command_builder;
    /** The value of the Named Value. */
    value(value: string): az_apim_nv_update_command_builder;
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
declare class az_apim_product_api_add_command_builder extends CommandBuilder<az_apim_product_api_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, productId: string, resourceGroup: string, serviceName: string);
    /** API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_product_api_add_command_builder;
    /** Product identifier. Must be unique in the current API Management service instance. */
    productId(value: string): az_apim_product_api_add_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_product_api_add_command_builder;
    /** The name of the api management service instance. */
    serviceName(value: string): az_apim_product_api_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_product_api_add_command_builder;
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
declare class az_apim_product_api_check_command_builder extends CommandBuilder<az_apim_product_api_check_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, productId: string, resourceGroup: string, serviceName: string);
    /** API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_product_api_check_command_builder;
    /** Product identifier. Must be unique in the current API Management service instance. */
    productId(value: string): az_apim_product_api_check_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_product_api_check_command_builder;
    /** The name of the api management service instance. */
    serviceName(value: string): az_apim_product_api_check_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_product_api_check_command_builder;
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
declare class az_apim_product_api_delete_command_builder extends CommandBuilder<az_apim_product_api_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, apiId: string, productId: string, resourceGroup: string, serviceName: string);
    /** API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    apiId(value: string): az_apim_product_api_delete_command_builder;
    /** Product identifier. Must be unique in the current API Management service instance. */
    productId(value: string): az_apim_product_api_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_product_api_delete_command_builder;
    /** The name of the api management service instance. */
    serviceName(value: string): az_apim_product_api_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_product_api_delete_command_builder;
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
declare class az_apim_product_api_list_command_builder extends CommandBuilder<az_apim_product_api_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, productId: string, resourceGroup: string, serviceName: string);
    /** Product identifier. Must be unique in the current API Management service instance. */
    productId(value: string): az_apim_product_api_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_product_api_list_command_builder;
    /** The name of the api management service instance. */
    serviceName(value: string): az_apim_product_api_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_product_api_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_product_api_list_command_builder;
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
declare class az_apim_product_create_command_builder extends CommandBuilder<az_apim_product_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, productName: string, resourceGroup: string, serviceName: string);
    /** Product name. */
    productName(value: string): az_apim_product_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_product_create_command_builder;
    /** The name of the api management service instance. */
    serviceName(value: string): az_apim_product_create_command_builder;
    /** Whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of false. */
    approvalRequired(value: string): az_apim_product_create_command_builder;
    /** Product description. May include HTML formatting tags. */
    description(value: string): az_apim_product_create_command_builder;
    /** Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process. */
    legalTerms(value: string): az_apim_product_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_apim_product_create_command_builder;
    /** Product identifier. Must be unique in the current API Management service instance. */
    productId(value: string): az_apim_product_create_command_builder;
    /** Whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished. */
    state(value: 'notPublished' | 'published'): az_apim_product_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_product_create_command_builder;
    /** Whether a product subscription is required for accessing APIs included in this product. */
    subscriptionRequired(value: string): az_apim_product_create_command_builder;
    /** Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of false. */
    subscriptionsLimit(value: string): az_apim_product_create_command_builder;
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
declare class az_apim_product_delete_command_builder extends CommandBuilder<az_apim_product_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, productId: string, resourceGroup: string, serviceName: string);
    /** Product identifier. Must be unique in the current API Management service instance. */
    productId(value: string): az_apim_product_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_product_delete_command_builder;
    /** The name of the api management service instance. */
    serviceName(value: string): az_apim_product_delete_command_builder;
    /** Delete existing subscriptions associated with the product or not. */
    deleteSubscriptions(value: string): az_apim_product_delete_command_builder;
    /** ETag of the Entity. */
    ifMatch(value: string): az_apim_product_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_apim_product_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_product_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_apim_product_delete_command_builder;
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
declare class az_apim_product_list_command_builder extends CommandBuilder<az_apim_product_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, serviceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_product_list_command_builder;
    /** The name of the api management service instance. */
    serviceName(value: string): az_apim_product_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_product_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_product_list_command_builder;
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
declare class az_apim_product_show_command_builder extends CommandBuilder<az_apim_product_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, productId: string, resourceGroup: string, serviceName: string);
    /** Product identifier. Must be unique in the current API Management service instance. */
    productId(value: string): az_apim_product_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_product_show_command_builder;
    /** The name of the api management service instance. */
    serviceName(value: string): az_apim_product_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_product_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_product_show_command_builder;
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
declare class az_apim_product_update_command_builder extends CommandBuilder<az_apim_product_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, productId: string, resourceGroup: string, serviceName: string);
    /** Product identifier. Must be unique in the current API Management service instance. */
    productId(value: string): az_apim_product_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_product_update_command_builder;
    /** The name of the api management service instance. */
    serviceName(value: string): az_apim_product_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_apim_product_update_command_builder;
    /** Whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of false. */
    approvalRequired(value: string): az_apim_product_update_command_builder;
    /** Product description. May include HTML formatting tags. */
    description(value: string): az_apim_product_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_apim_product_update_command_builder;
    /** ETag of the Entity. */
    ifMatch(value: string): az_apim_product_update_command_builder;
    /** Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process. */
    legalTerms(value: string): az_apim_product_update_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_apim_product_update_command_builder;
    /** Product name. */
    productName(value: string): az_apim_product_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_apim_product_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_apim_product_update_command_builder;
    /** Whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished. */
    state(value: 'notPublished' | 'published'): az_apim_product_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_product_update_command_builder;
    /** Whether a product subscription is required for accessing APIs included in this product. */
    subscriptionRequired(value: string): az_apim_product_update_command_builder;
    /** Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of false. */
    subscriptionsLimit(value: string): az_apim_product_update_command_builder;
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
declare class az_apim_apply_network_updates_command_builder extends CommandBuilder<az_apim_apply_network_updates_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the api management service instance. */
    name(value: string): az_apim_apply_network_updates_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_apply_network_updates_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_apim_apply_network_updates_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_apim_apply_network_updates_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_apply_network_updates_command_builder;
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
declare class az_apim_backup_command_builder extends CommandBuilder<az_apim_backup_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, backupName: string, name: string, resourceGroup: string, storageAccountContainer: string, storageAccountKey: string, storageAccountName: string);
    /** The name of the backup file to create. */
    backupName(value: string): az_apim_backup_command_builder;
    /** The name of the api management service instance. */
    name(value: string): az_apim_backup_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_backup_command_builder;
    /** The name of the storage account container used to place the backup. */
    storageAccountContainer(value: string): az_apim_backup_command_builder;
    /** The access key of the storage account used to place the backup. */
    storageAccountKey(value: string): az_apim_backup_command_builder;
    /** The name of the storage account used to place the backup. */
    storageAccountName(value: string): az_apim_backup_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_apim_backup_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_backup_command_builder;
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
declare class az_apim_check_name_command_builder extends CommandBuilder<az_apim_check_name_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The name of the api management service instance. */
    name(value: string): az_apim_check_name_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_check_name_command_builder;
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
declare class az_apim_create_command_builder extends CommandBuilder<az_apim_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, publisherEmail: string, publisherName: string, resourceGroup: string);
    /** Unique name of the service instance to be created. */
    name(value: string): az_apim_create_command_builder;
    /** The e-mail address to receive all system notifications. */
    publisherEmail(value: string): az_apim_create_command_builder;
    /** The name of your organization for use in the developer portal and e-mail notifications. */
    publisherName(value: string): az_apim_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_create_command_builder;
    /** Enforces a client certificate to be presented on each request to the gateway and also enables the ability to authenticate the certificate in the policy on the gateway. */
    enableClientCertificate(value: boolean): az_apim_create_command_builder;
    /** Create a managed identity for the API Management service to access other Azure resources. */
    enableManagedIdentity(value: boolean): az_apim_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_apim_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_apim_create_command_builder;
    /** The number of deployed units of the SKU. */
    skuCapacity(value: string): az_apim_create_command_builder;
    /** The sku of the api management instance. */
    skuName(value: 'Basic' | 'Consumption' | 'Developer' | 'Premium' | 'Standard'): az_apim_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_apim_create_command_builder;
    /** The virtual network type. */
    virtualNetwork(value: 'External' | 'Internal' | 'None'): az_apim_create_command_builder;
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
declare class az_apim_delete_command_builder extends CommandBuilder<az_apim_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the api management service instance. */
    name(value: string): az_apim_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_apim_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_apim_delete_command_builder;
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
declare class az_apim_list_command_builder extends CommandBuilder<az_apim_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_list_command_builder;
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
declare class az_apim_show_command_builder extends CommandBuilder<az_apim_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the api management service instance. */
    name(value: string): az_apim_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_apim_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_show_command_builder;
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
declare class az_apim_update_command_builder extends CommandBuilder<az_apim_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the api management service instance. */
    name(value: string): az_apim_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_apim_update_command_builder;
    /** Enforces a client certificate to be presented on each request to the gateway and also enables the ability to authenticate the certificate in the policy on the gateway. */
    enableClientCertificate(value: boolean): az_apim_update_command_builder;
    /** Create a managed identity for the API Management service to access other Azure resources. */
    enableManagedIdentity(value: boolean): az_apim_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_apim_update_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_apim_update_command_builder;
    /** The e-mail address to receive all system notifications. */
    publisherEmail(value: string): az_apim_update_command_builder;
    /** The name of your organization for use in the developer portal and e-mail notifications. */
    publisherName(value: string): az_apim_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_apim_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_apim_update_command_builder;
    /** The number of deployed units of the SKU. */
    skuCapacity(value: string): az_apim_update_command_builder;
    /** The sku of the api management instance. */
    skuName(value: 'Basic' | 'Consumption' | 'Developer' | 'Premium' | 'Standard'): az_apim_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_apim_update_command_builder;
    /** The virtual network type. */
    virtualNetwork(value: 'External' | 'Internal' | 'None'): az_apim_update_command_builder;
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
declare class az_apim_wait_command_builder extends CommandBuilder<az_apim_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the api management service instance. */
    name(value: string): az_apim_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_apim_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_apim_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_apim_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_apim_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_apim_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_apim_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_apim_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_apim_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_apim_wait_command_builder;
}
export {};
