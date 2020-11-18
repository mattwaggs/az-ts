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
exports.az_apim = exports.az_apim_product = exports.az_apim_product_api = exports.az_apim_nv = exports.az_apim_api = exports.az_apim_api_versionset = exports.az_apim_api_revision = exports.az_apim_api_release = exports.az_apim_api_operation = void 0;
var base_1 = require("../base");
/** Manage Azure API Management API Operations. */
var az_apim_api_operation = /** @class */ (function () {
    function az_apim_api_operation() {
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
    az_apim_api_operation.create = function (apiId, displayName, method, resourceGroup, serviceName, urlTemplate) {
        return new az_apim_api_operation_create_command_builder("az apim api operation create", 'az_apim_api_operation_create_command_result', apiId, displayName, method, resourceGroup, serviceName, urlTemplate);
    };
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
    az_apim_api_operation["delete"] = function (apiId, operationId, resourceGroup, serviceName) {
        return new az_apim_api_operation_delete_command_builder("az apim api operation delete", 'az_apim_api_operation_delete_command_result', apiId, operationId, resourceGroup, serviceName);
    };
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
    az_apim_api_operation.list = function (apiId, resourceGroup, serviceName) {
        return new az_apim_api_operation_list_command_builder("az apim api operation list", 'az_apim_api_operation_list_command_result', apiId, resourceGroup, serviceName);
    };
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
    az_apim_api_operation.show = function (apiId, operationId, resourceGroup, serviceName) {
        return new az_apim_api_operation_show_command_builder("az apim api operation show", 'az_apim_api_operation_show_command_result', apiId, operationId, resourceGroup, serviceName);
    };
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
    az_apim_api_operation.update = function (apiId, operationId, resourceGroup, serviceName) {
        return new az_apim_api_operation_update_command_builder("az apim api operation update", 'az_apim_api_operation_update_command_result', apiId, operationId, resourceGroup, serviceName);
    };
    return az_apim_api_operation;
}());
exports.az_apim_api_operation = az_apim_api_operation;
/** Manage Azure API Management API Release. */
var az_apim_api_release = /** @class */ (function () {
    function az_apim_api_release() {
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
    az_apim_api_release.create = function (apiId, apiRevision, resourceGroup, serviceName) {
        return new az_apim_api_release_create_command_builder("az apim api release create", 'az_apim_api_release_create_command_result', apiId, apiRevision, resourceGroup, serviceName);
    };
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
    az_apim_api_release["delete"] = function (apiId, releaseId, resourceGroup, serviceName) {
        return new az_apim_api_release_delete_command_builder("az apim api release delete", 'az_apim_api_release_delete_command_result', apiId, releaseId, resourceGroup, serviceName);
    };
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
    az_apim_api_release.list = function (apiId, resourceGroup, serviceName) {
        return new az_apim_api_release_list_command_builder("az apim api release list", 'az_apim_api_release_list_command_result', apiId, resourceGroup, serviceName);
    };
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
    az_apim_api_release.show = function (apiId, releaseId, resourceGroup, serviceName) {
        return new az_apim_api_release_show_command_builder("az apim api release show", 'az_apim_api_release_show_command_result', apiId, releaseId, resourceGroup, serviceName);
    };
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
    az_apim_api_release.update = function (apiId, releaseId, resourceGroup, serviceName) {
        return new az_apim_api_release_update_command_builder("az apim api release update", 'az_apim_api_release_update_command_result', apiId, releaseId, resourceGroup, serviceName);
    };
    return az_apim_api_release;
}());
exports.az_apim_api_release = az_apim_api_release;
/** Manage Azure API Management API Revision. */
var az_apim_api_revision = /** @class */ (function () {
    function az_apim_api_revision() {
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
    az_apim_api_revision.create = function (apiId, apiRevision, resourceGroup, serviceName) {
        return new az_apim_api_revision_create_command_builder("az apim api revision create", 'az_apim_api_revision_create_command_result', apiId, apiRevision, resourceGroup, serviceName);
    };
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
    az_apim_api_revision.list = function (apiId, resourceGroup, serviceName) {
        return new az_apim_api_revision_list_command_builder("az apim api revision list", 'az_apim_api_revision_list_command_result', apiId, resourceGroup, serviceName);
    };
    return az_apim_api_revision;
}());
exports.az_apim_api_revision = az_apim_api_revision;
/** Manage Azure API Management API Version Set. */
var az_apim_api_versionset = /** @class */ (function () {
    function az_apim_api_versionset() {
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
    az_apim_api_versionset.create = function (displayName, resourceGroup, serviceName, versioningScheme) {
        return new az_apim_api_versionset_create_command_builder("az apim api versionset create", 'az_apim_api_versionset_create_command_result', displayName, resourceGroup, serviceName, versioningScheme);
    };
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
    az_apim_api_versionset["delete"] = function (resourceGroup, serviceName, versionSetId) {
        return new az_apim_api_versionset_delete_command_builder("az apim api versionset delete", 'az_apim_api_versionset_delete_command_result', resourceGroup, serviceName, versionSetId);
    };
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
    az_apim_api_versionset.list = function (resourceGroup, serviceName) {
        return new az_apim_api_versionset_list_command_builder("az apim api versionset list", 'az_apim_api_versionset_list_command_result', resourceGroup, serviceName);
    };
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
    az_apim_api_versionset.show = function (resourceGroup, serviceName, versionSetId) {
        return new az_apim_api_versionset_show_command_builder("az apim api versionset show", 'az_apim_api_versionset_show_command_result', resourceGroup, serviceName, versionSetId);
    };
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
    az_apim_api_versionset.update = function (resourceGroup, serviceName, versionSetId) {
        return new az_apim_api_versionset_update_command_builder("az apim api versionset update", 'az_apim_api_versionset_update_command_result', resourceGroup, serviceName, versionSetId);
    };
    return az_apim_api_versionset;
}());
exports.az_apim_api_versionset = az_apim_api_versionset;
/** Manage Azure API Management API's. */
var az_apim_api = /** @class */ (function () {
    function az_apim_api() {
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
    az_apim_api.create = function (apiId, displayName, path, resourceGroup, serviceName) {
        return new az_apim_api_create_command_builder("az apim api create", 'az_apim_api_create_command_result', apiId, displayName, path, resourceGroup, serviceName);
    };
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
    az_apim_api["delete"] = function (apiId, resourceGroup, serviceName) {
        return new az_apim_api_delete_command_builder("az apim api delete", 'az_apim_api_delete_command_result', apiId, resourceGroup, serviceName);
    };
    /**
     * Import an API Management API.
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
    az_apim_api["import"] = function (path, resourceGroup, serviceName) {
        return new az_apim_api_import_command_builder("az apim api import", 'az_apim_api_import_command_result', path, resourceGroup, serviceName);
    };
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
    az_apim_api.list = function (resourceGroup, serviceName) {
        return new az_apim_api_list_command_builder("az apim api list", 'az_apim_api_list_command_result', resourceGroup, serviceName);
    };
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
    az_apim_api.show = function (apiId, resourceGroup, serviceName) {
        return new az_apim_api_show_command_builder("az apim api show", 'az_apim_api_show_command_result', apiId, resourceGroup, serviceName);
    };
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
    az_apim_api.update = function (apiId, resourceGroup, serviceName) {
        return new az_apim_api_update_command_builder("az apim api update", 'az_apim_api_update_command_result', apiId, resourceGroup, serviceName);
    };
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
    az_apim_api.wait = function (apiId, name, resourceGroup) {
        return new az_apim_api_wait_command_builder("az apim api wait", 'az_apim_api_wait_command_result', apiId, name, resourceGroup);
    };
    return az_apim_api;
}());
exports.az_apim_api = az_apim_api;
/** Manage Azure API Management Named Values. */
var az_apim_nv = /** @class */ (function () {
    function az_apim_nv() {
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
    az_apim_nv.create = function (displayName, namedValueId, resourceGroup, serviceName) {
        return new az_apim_nv_create_command_builder("az apim nv create", 'az_apim_nv_create_command_result', displayName, namedValueId, resourceGroup, serviceName);
    };
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
    az_apim_nv["delete"] = function (namedValueId, resourceGroup, serviceName) {
        return new az_apim_nv_delete_command_builder("az apim nv delete", 'az_apim_nv_delete_command_result', namedValueId, resourceGroup, serviceName);
    };
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
    az_apim_nv.list = function (resourceGroup, serviceName) {
        return new az_apim_nv_list_command_builder("az apim nv list", 'az_apim_nv_list_command_result', resourceGroup, serviceName);
    };
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
    az_apim_nv.show = function (namedValueId, resourceGroup, serviceName) {
        return new az_apim_nv_show_command_builder("az apim nv show", 'az_apim_nv_show_command_result', namedValueId, resourceGroup, serviceName);
    };
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
    az_apim_nv.show_secret = function (namedValueId, resourceGroup, serviceName) {
        return new az_apim_nv_show_secret_command_builder("az apim nv show-secret", 'az_apim_nv_show_secret_command_result', namedValueId, resourceGroup, serviceName);
    };
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
    az_apim_nv.update = function (namedValueId, resourceGroup, serviceName) {
        return new az_apim_nv_update_command_builder("az apim nv update", 'az_apim_nv_update_command_result', namedValueId, resourceGroup, serviceName);
    };
    return az_apim_nv;
}());
exports.az_apim_nv = az_apim_nv;
/** Manage Azure API Management Product's APIs. */
var az_apim_product_api = /** @class */ (function () {
    function az_apim_product_api() {
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
    az_apim_product_api.add = function (apiId, productId, resourceGroup, serviceName) {
        return new az_apim_product_api_add_command_builder("az apim product api add", 'az_apim_product_api_add_command_result', apiId, productId, resourceGroup, serviceName);
    };
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
    az_apim_product_api.check = function (apiId, productId, resourceGroup, serviceName) {
        return new az_apim_product_api_check_command_builder("az apim product api check", 'az_apim_product_api_check_command_result', apiId, productId, resourceGroup, serviceName);
    };
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
    az_apim_product_api["delete"] = function (apiId, productId, resourceGroup, serviceName) {
        return new az_apim_product_api_delete_command_builder("az apim product api delete", 'az_apim_product_api_delete_command_result', apiId, productId, resourceGroup, serviceName);
    };
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
    az_apim_product_api.list = function (productId, resourceGroup, serviceName) {
        return new az_apim_product_api_list_command_builder("az apim product api list", 'az_apim_product_api_list_command_result', productId, resourceGroup, serviceName);
    };
    return az_apim_product_api;
}());
exports.az_apim_product_api = az_apim_product_api;
/** Manage Azure API Management Product's. */
var az_apim_product = /** @class */ (function () {
    function az_apim_product() {
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
    az_apim_product.create = function (productName, resourceGroup, serviceName) {
        return new az_apim_product_create_command_builder("az apim product create", 'az_apim_product_create_command_result', productName, resourceGroup, serviceName);
    };
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
    az_apim_product["delete"] = function (productId, resourceGroup, serviceName) {
        return new az_apim_product_delete_command_builder("az apim product delete", 'az_apim_product_delete_command_result', productId, resourceGroup, serviceName);
    };
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
    az_apim_product.list = function (resourceGroup, serviceName) {
        return new az_apim_product_list_command_builder("az apim product list", 'az_apim_product_list_command_result', resourceGroup, serviceName);
    };
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
    az_apim_product.show = function (productId, resourceGroup, serviceName) {
        return new az_apim_product_show_command_builder("az apim product show", 'az_apim_product_show_command_result', productId, resourceGroup, serviceName);
    };
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
    az_apim_product.update = function (productId, resourceGroup, serviceName) {
        return new az_apim_product_update_command_builder("az apim product update", 'az_apim_product_update_command_result', productId, resourceGroup, serviceName);
    };
    return az_apim_product;
}());
exports.az_apim_product = az_apim_product;
/** Manage Azure API Management services. */
var az_apim = /** @class */ (function () {
    function az_apim() {
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
    az_apim.apply_network_updates = function (name, resourceGroup) {
        return new az_apim_apply_network_updates_command_builder("az apim apply-network-updates", 'az_apim_apply_network_updates_command_result', name, resourceGroup);
    };
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
    az_apim.backup = function (backupName, name, resourceGroup, storageAccountContainer, storageAccountKey, storageAccountName) {
        return new az_apim_backup_command_builder("az apim backup", 'az_apim_backup_command_result', backupName, name, resourceGroup, storageAccountContainer, storageAccountKey, storageAccountName);
    };
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
    az_apim.check_name = function (name) {
        return new az_apim_check_name_command_builder("az apim check-name", 'az_apim_check_name_command_result', name);
    };
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
    az_apim.create = function (name, publisherEmail, publisherName, resourceGroup) {
        return new az_apim_create_command_builder("az apim create", 'az_apim_create_command_result', name, publisherEmail, publisherName, resourceGroup);
    };
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
    az_apim["delete"] = function (name, resourceGroup) {
        return new az_apim_delete_command_builder("az apim delete", 'az_apim_delete_command_result', name, resourceGroup);
    };
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
    az_apim.list = function () {
        return new az_apim_list_command_builder("az apim list", 'az_apim_list_command_result');
    };
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
    az_apim.show = function (name, resourceGroup) {
        return new az_apim_show_command_builder("az apim show", 'az_apim_show_command_result', name, resourceGroup);
    };
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
    az_apim.update = function (name, resourceGroup) {
        return new az_apim_update_command_builder("az apim update", 'az_apim_update_command_result', name, resourceGroup);
    };
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
    az_apim.wait = function (name, resourceGroup) {
        return new az_apim_wait_command_builder("az apim wait", 'az_apim_wait_command_result', name, resourceGroup);
    };
    return az_apim;
}());
exports.az_apim = az_apim;
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
var az_apim_api_operation_create_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_api_operation_create_command_builder, _super);
    function az_apim_api_operation_create_command_builder(commandPath, resultDataTypeName, apiId, displayName, method, resourceGroup, serviceName, urlTemplate) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.apiId(apiId);
        _this.displayName(displayName);
        _this.method(method);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        _this.urlTemplate(urlTemplate);
        return _this;
    }
    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    az_apim_api_operation_create_command_builder.prototype.apiId = function (value) {
        this.setFlag("--api-id", value);
        return this;
    };
    /** Required. Operation Name. */
    az_apim_api_operation_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Required. A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them. */
    az_apim_api_operation_create_command_builder.prototype.method = function (value) {
        this.setFlag("--method", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_api_operation_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_api_operation_create_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Relative URL template identifying the target resource for this operation. May include parameters. */
    az_apim_api_operation_create_command_builder.prototype.urlTemplate = function (value) {
        this.setFlag("--url-template", value);
        return this;
    };
    /** Description of the operation. May include HTML formatting tags. */
    az_apim_api_operation_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** ETag of the Entity. */
    az_apim_api_operation_create_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** Operation identifier within an API. Must be unique in the current API Management service instance. */
    az_apim_api_operation_create_command_builder.prototype.operationId = function (value) {
        this.setFlag("--operation-id", value);
        return this;
    };
    /** Collection of URL template parameters. */
    az_apim_api_operation_create_command_builder.prototype.templateParameters = function (value) {
        this.setFlag("--template-parameters", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_api_operation_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_api_operation_create_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_api_operation_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_api_operation_delete_command_builder, _super);
    function az_apim_api_operation_delete_command_builder(commandPath, resultDataTypeName, apiId, operationId, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.apiId(apiId);
        _this.operationId(operationId);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    az_apim_api_operation_delete_command_builder.prototype.apiId = function (value) {
        this.setFlag("--api-id", value);
        return this;
    };
    /** Operation identifier within an API. Must be unique in the current API Management service instance. */
    az_apim_api_operation_delete_command_builder.prototype.operationId = function (value) {
        this.setFlag("--operation-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_api_operation_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_api_operation_delete_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** ETag of the Entity. */
    az_apim_api_operation_delete_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_api_operation_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_api_operation_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_api_operation_list_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_api_operation_list_command_builder, _super);
    function az_apim_api_operation_list_command_builder(commandPath, resultDataTypeName, apiId, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.apiId(apiId);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    az_apim_api_operation_list_command_builder.prototype.apiId = function (value) {
        this.setFlag("--api-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_api_operation_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_api_operation_list_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_apim_api_operation_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_api_operation_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_api_operation_list_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_api_operation_show_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_api_operation_show_command_builder, _super);
    function az_apim_api_operation_show_command_builder(commandPath, resultDataTypeName, apiId, operationId, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.apiId(apiId);
        _this.operationId(operationId);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    az_apim_api_operation_show_command_builder.prototype.apiId = function (value) {
        this.setFlag("--api-id", value);
        return this;
    };
    /** Operation identifier within an API. Must be unique in the current API Management service instance. */
    az_apim_api_operation_show_command_builder.prototype.operationId = function (value) {
        this.setFlag("--operation-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_api_operation_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_api_operation_show_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_apim_api_operation_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_api_operation_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_api_operation_show_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_api_operation_update_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_api_operation_update_command_builder, _super);
    function az_apim_api_operation_update_command_builder(commandPath, resultDataTypeName, apiId, operationId, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.apiId(apiId);
        _this.operationId(operationId);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    az_apim_api_operation_update_command_builder.prototype.apiId = function (value) {
        this.setFlag("--api-id", value);
        return this;
    };
    /** Operation identifier within an API. Must be unique in the current API Management service instance. */
    az_apim_api_operation_update_command_builder.prototype.operationId = function (value) {
        this.setFlag("--operation-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_api_operation_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_api_operation_update_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_apim_api_operation_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Description of the operation. May include HTML formatting tags. */
    az_apim_api_operation_update_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Required. Operation Name. */
    az_apim_api_operation_update_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_apim_api_operation_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** ETag of the Entity. */
    az_apim_api_operation_update_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** Required. A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them. */
    az_apim_api_operation_update_command_builder.prototype.method = function (value) {
        this.setFlag("--method", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_apim_api_operation_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_apim_api_operation_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_api_operation_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Relative URL template identifying the target resource for this operation. May include parameters. */
    az_apim_api_operation_update_command_builder.prototype.urlTemplate = function (value) {
        this.setFlag("--url-template", value);
        return this;
    };
    return az_apim_api_operation_update_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_api_release_create_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_api_release_create_command_builder, _super);
    function az_apim_api_release_create_command_builder(commandPath, resultDataTypeName, apiId, apiRevision, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.apiId(apiId);
        _this.apiRevision(apiRevision);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    az_apim_api_release_create_command_builder.prototype.apiId = function (value) {
        this.setFlag("--api-id", value);
        return this;
    };
    /** API revision number. */
    az_apim_api_release_create_command_builder.prototype.apiRevision = function (value) {
        this.setFlag("--api-revision", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_api_release_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_api_release_create_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** ETag of the Entity. */
    az_apim_api_release_create_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** Release Notes. */
    az_apim_api_release_create_command_builder.prototype.notes = function (value) {
        this.setFlag("--notes", value);
        return this;
    };
    /** Release identifier within an API. Must be unique in the current API Management service instance. */
    az_apim_api_release_create_command_builder.prototype.releaseId = function (value) {
        this.setFlag("--release-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_api_release_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_api_release_create_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_api_release_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_api_release_delete_command_builder, _super);
    function az_apim_api_release_delete_command_builder(commandPath, resultDataTypeName, apiId, releaseId, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.apiId(apiId);
        _this.releaseId(releaseId);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    az_apim_api_release_delete_command_builder.prototype.apiId = function (value) {
        this.setFlag("--api-id", value);
        return this;
    };
    /** Release identifier within an API. Must be unique in the current API Management service instance. */
    az_apim_api_release_delete_command_builder.prototype.releaseId = function (value) {
        this.setFlag("--release-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_api_release_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_api_release_delete_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** ETag of the Entity. */
    az_apim_api_release_delete_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_api_release_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_api_release_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_api_release_list_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_api_release_list_command_builder, _super);
    function az_apim_api_release_list_command_builder(commandPath, resultDataTypeName, apiId, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.apiId(apiId);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    az_apim_api_release_list_command_builder.prototype.apiId = function (value) {
        this.setFlag("--api-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_api_release_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_api_release_list_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_apim_api_release_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_api_release_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_api_release_list_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_api_release_show_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_api_release_show_command_builder, _super);
    function az_apim_api_release_show_command_builder(commandPath, resultDataTypeName, apiId, releaseId, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.apiId(apiId);
        _this.releaseId(releaseId);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    az_apim_api_release_show_command_builder.prototype.apiId = function (value) {
        this.setFlag("--api-id", value);
        return this;
    };
    /** Release identifier within an API. Must be unique in the current API Management service instance. */
    az_apim_api_release_show_command_builder.prototype.releaseId = function (value) {
        this.setFlag("--release-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_api_release_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_api_release_show_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_apim_api_release_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_api_release_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_api_release_show_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_api_release_update_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_api_release_update_command_builder, _super);
    function az_apim_api_release_update_command_builder(commandPath, resultDataTypeName, apiId, releaseId, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.apiId(apiId);
        _this.releaseId(releaseId);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    az_apim_api_release_update_command_builder.prototype.apiId = function (value) {
        this.setFlag("--api-id", value);
        return this;
    };
    /** Release identifier within an API. Must be unique in the current API Management service instance. */
    az_apim_api_release_update_command_builder.prototype.releaseId = function (value) {
        this.setFlag("--release-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_api_release_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_api_release_update_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_apim_api_release_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Identifier of the API the release belongs to. */
    az_apim_api_release_update_command_builder.prototype.apiId1 = function (value) {
        this.setFlag("--api-id1", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_apim_api_release_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** ETag of the Entity. */
    az_apim_api_release_update_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** Release Notes. */
    az_apim_api_release_update_command_builder.prototype.notes = function (value) {
        this.setFlag("--notes", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_apim_api_release_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_apim_api_release_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_api_release_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_api_release_update_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_api_revision_create_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_api_revision_create_command_builder, _super);
    function az_apim_api_revision_create_command_builder(commandPath, resultDataTypeName, apiId, apiRevision, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.apiId(apiId);
        _this.apiRevision(apiRevision);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    az_apim_api_revision_create_command_builder.prototype.apiId = function (value) {
        this.setFlag("--api-id", value);
        return this;
    };
    /** Describes the Revision of the Api. */
    az_apim_api_revision_create_command_builder.prototype.apiRevision = function (value) {
        this.setFlag("--api-revision", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_api_revision_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_api_revision_create_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Description of the Api Revision. */
    az_apim_api_revision_create_command_builder.prototype.apiRevisionDescription = function (value) {
        this.setFlag("--api-revision-description", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_api_revision_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_api_revision_create_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_api_revision_list_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_api_revision_list_command_builder, _super);
    function az_apim_api_revision_list_command_builder(commandPath, resultDataTypeName, apiId, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.apiId(apiId);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    az_apim_api_revision_list_command_builder.prototype.apiId = function (value) {
        this.setFlag("--api-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_api_revision_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_api_revision_list_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_apim_api_revision_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_api_revision_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_api_revision_list_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_api_versionset_create_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_api_versionset_create_command_builder, _super);
    function az_apim_api_versionset_create_command_builder(commandPath, resultDataTypeName, displayName, resourceGroup, serviceName, versioningScheme) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.displayName(displayName);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        _this.versioningScheme(versioningScheme);
        return _this;
    }
    /** Required. Name of API Version Set. */
    az_apim_api_versionset_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_api_versionset_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_api_versionset_create_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Required. An value that determines where the API Version identifer will be located in a HTTP request. */
    az_apim_api_versionset_create_command_builder.prototype.versioningScheme = function (value) {
        this.setFlag("--versioning-scheme", value);
        return this;
    };
    /** Description of API Version Set. */
    az_apim_api_versionset_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** ETag of the Entity. */
    az_apim_api_versionset_create_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_api_versionset_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`. */
    az_apim_api_versionset_create_command_builder.prototype.versionHeaderName = function (value) {
        this.setFlag("--version-header-name", value);
        return this;
    };
    /** Name of query parameter that indicates the API Version if versioningScheme is set to `query`. */
    az_apim_api_versionset_create_command_builder.prototype.versionQueryName = function (value) {
        this.setFlag("--version-query-name", value);
        return this;
    };
    /** A resource identifier for the related ApiVersionSet. */
    az_apim_api_versionset_create_command_builder.prototype.versionSetId = function (value) {
        this.setFlag("--version-set-id", value);
        return this;
    };
    return az_apim_api_versionset_create_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_api_versionset_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_api_versionset_delete_command_builder, _super);
    function az_apim_api_versionset_delete_command_builder(commandPath, resultDataTypeName, resourceGroup, serviceName, versionSetId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        _this.versionSetId(versionSetId);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_api_versionset_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_api_versionset_delete_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** A resource identifier for the related ApiVersionSet. */
    az_apim_api_versionset_delete_command_builder.prototype.versionSetId = function (value) {
        this.setFlag("--version-set-id", value);
        return this;
    };
    /** ETag of the Entity. */
    az_apim_api_versionset_delete_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_api_versionset_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_api_versionset_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_api_versionset_list_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_api_versionset_list_command_builder, _super);
    function az_apim_api_versionset_list_command_builder(commandPath, resultDataTypeName, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_api_versionset_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_api_versionset_list_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_apim_api_versionset_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_api_versionset_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_api_versionset_list_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_api_versionset_show_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_api_versionset_show_command_builder, _super);
    function az_apim_api_versionset_show_command_builder(commandPath, resultDataTypeName, resourceGroup, serviceName, versionSetId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        _this.versionSetId(versionSetId);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_api_versionset_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_api_versionset_show_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** A resource identifier for the related ApiVersionSet. */
    az_apim_api_versionset_show_command_builder.prototype.versionSetId = function (value) {
        this.setFlag("--version-set-id", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_apim_api_versionset_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_api_versionset_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_api_versionset_show_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_api_versionset_update_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_api_versionset_update_command_builder, _super);
    function az_apim_api_versionset_update_command_builder(commandPath, resultDataTypeName, resourceGroup, serviceName, versionSetId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        _this.versionSetId(versionSetId);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_api_versionset_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_api_versionset_update_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** A resource identifier for the related ApiVersionSet. */
    az_apim_api_versionset_update_command_builder.prototype.versionSetId = function (value) {
        this.setFlag("--version-set-id", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_apim_api_versionset_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Description of API Version Set. */
    az_apim_api_versionset_update_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Required. Name of API Version Set. */
    az_apim_api_versionset_update_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_apim_api_versionset_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** ETag of the Entity. */
    az_apim_api_versionset_update_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_apim_api_versionset_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_apim_api_versionset_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_api_versionset_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`. */
    az_apim_api_versionset_update_command_builder.prototype.versionHeaderName = function (value) {
        this.setFlag("--version-header-name", value);
        return this;
    };
    /** Name of query parameter that indicates the API Version if versioningScheme is set to `query`. */
    az_apim_api_versionset_update_command_builder.prototype.versionQueryName = function (value) {
        this.setFlag("--version-query-name", value);
        return this;
    };
    /** Required. An value that determines where the API Version identifer will be located in a HTTP request. */
    az_apim_api_versionset_update_command_builder.prototype.versioningScheme = function (value) {
        this.setFlag("--versioning-scheme", value);
        return this;
    };
    return az_apim_api_versionset_update_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_api_create_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_api_create_command_builder, _super);
    function az_apim_api_create_command_builder(commandPath, resultDataTypeName, apiId, displayName, path, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.apiId(apiId);
        _this.displayName(displayName);
        _this.path(path);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** Unique name of the api to be created. */
    az_apim_api_create_command_builder.prototype.apiId = function (value) {
        this.setFlag("--api-id", value);
        return this;
    };
    /** Display name of the API to be created. */
    az_apim_api_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Path to the API. */
    az_apim_api_create_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_api_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_api_create_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** The type of the API. */
    az_apim_api_create_command_builder.prototype.apiType = function (value) {
        this.setFlag("--api-type", value);
        return this;
    };
    /** Specifies the OAuth operations scope. */
    az_apim_api_create_command_builder.prototype.authorizationScope = function (value) {
        this.setFlag("--authorization-scope", value);
        return this;
    };
    /** Specifies the OAuth authorization server ID. */
    az_apim_api_create_command_builder.prototype.authorizationServerId = function (value) {
        this.setFlag("--authorization-server-id", value);
        return this;
    };
    /** Specifies the sending methods for bearer token. */
    az_apim_api_create_command_builder.prototype.bearerTokenSendingMethods = function (value) {
        this.setFlag("--bearer-token-sending-methods", value);
        return this;
    };
    /** Description of the API. May include HTML formatting tags. */
    az_apim_api_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_apim_api_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Specifies the openid in the authentication setting. */
    az_apim_api_create_command_builder.prototype.openIdProviderId = function (value) {
        this.setFlag("--open-id-provider-id", value);
        return this;
    };
    /** Describes on which protocols the operations in this API can be invoked. */
    az_apim_api_create_command_builder.prototype.protocols = function (value) {
        this.setFlag("--protocols", value);
        return this;
    };
    /** Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long. */
    az_apim_api_create_command_builder.prototype.serviceUrl = function (value) {
        this.setFlag("--service-url", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_api_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Specifies the subscription key header name. */
    az_apim_api_create_command_builder.prototype.subscriptionKeyHeaderName = function (value) {
        this.setFlag("--subscription-key-header-name", value);
        return this;
    };
    /** Specifies the subscription key query string parameter name. */
    az_apim_api_create_command_builder.prototype.subscriptionKeyQueryParamName = function (value) {
        this.setFlag("--subscription-key-query-param-name", value);
        return this;
    };
    /** Specifies whether subscription key is required during call to this API, true - API is included into closed products only, false - API is included into open products alone, null - there is a mix of products. */
    az_apim_api_create_command_builder.prototype.subscriptionKeyRequired = function (value) {
        this.setFlag("--subscription-key-required", value);
        return this;
    };
    /** If true, the API requires a subscription key on requests. */
    az_apim_api_create_command_builder.prototype.subscriptionRequired = function (value) {
        this.setFlag("--subscription-required", value.toString());
        return this;
    };
    return az_apim_api_create_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_api_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_api_delete_command_builder, _super);
    function az_apim_api_delete_command_builder(commandPath, resultDataTypeName, apiId, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.apiId(apiId);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    az_apim_api_delete_command_builder.prototype.apiId = function (value) {
        this.setFlag("--api-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_api_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_api_delete_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Delete all revisions of the Api. */
    az_apim_api_delete_command_builder.prototype.deleteRevisions = function (value) {
        this.setFlag("--delete-revisions", value);
        return this;
    };
    /** ETag of the Entity. */
    az_apim_api_delete_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_apim_api_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_api_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_apim_api_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_apim_api_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Import an API Management API.
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
var az_apim_api_import_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_api_import_command_builder, _super);
    function az_apim_api_import_command_builder(commandPath, resultDataTypeName, path, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** Required. Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. */
    az_apim_api_import_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_api_import_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the api management service instance. */
    az_apim_api_import_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    az_apim_api_import_command_builder.prototype.apiId = function (value) {
        this.setFlag("--api-id", value);
        return this;
    };
    /** Describes the Revision of the Api. If no value is provided, default revision 1 is created. */
    az_apim_api_import_command_builder.prototype.apiRevision = function (value) {
        this.setFlag("--api-revision", value);
        return this;
    };
    /** The type of the API. */
    az_apim_api_import_command_builder.prototype.apiType = function (value) {
        this.setFlag("--api-type", value);
        return this;
    };
    /** Description of the API. May include HTML formatting tags. */
    az_apim_api_import_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Display name of this API. */
    az_apim_api_import_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_apim_api_import_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Describes on which protocols the operations in this API can be invoked. */
    az_apim_api_import_command_builder.prototype.protocols = function (value) {
        this.setFlag("--protocols", value);
        return this;
    };
    /** Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long. */
    az_apim_api_import_command_builder.prototype.serviceUrl = function (value) {
        this.setFlag("--service-url", value);
        return this;
    };
    /** The type of API when file format is WSDL. */
    az_apim_api_import_command_builder.prototype.soapApiType = function (value) {
        this.setFlag("--soap-api-type", value);
        return this;
    };
    /** Specify the format of the imported API. */
    az_apim_api_import_command_builder.prototype.specificationFormat = function (value) {
        this.setFlag("--specification-format", value);
        return this;
    };
    /** File path specified to import the API. */
    az_apim_api_import_command_builder.prototype.specificationPath = function (value) {
        this.setFlag("--specification-path", value);
        return this;
    };
    /** Url specified to import the API. */
    az_apim_api_import_command_builder.prototype.specificationUrl = function (value) {
        this.setFlag("--specification-url", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_api_import_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Specifies the subscription key header name. */
    az_apim_api_import_command_builder.prototype.subscriptionKeyHeaderName = function (value) {
        this.setFlag("--subscription-key-header-name", value);
        return this;
    };
    /** Specifies the subscription key query string parameter name. */
    az_apim_api_import_command_builder.prototype.subscriptionKeyQueryParamName = function (value) {
        this.setFlag("--subscription-key-query-param-name", value);
        return this;
    };
    /** If true, the API requires a subscription key on requests. */
    az_apim_api_import_command_builder.prototype.subscriptionRequired = function (value) {
        this.setFlag("--subscription-required", value.toString());
        return this;
    };
    /** Local name of WSDL Endpoint (port) to be imported. */
    az_apim_api_import_command_builder.prototype.wsdlEndpointName = function (value) {
        this.setFlag("--wsdl-endpoint-name", value);
        return this;
    };
    /** Local name of WSDL Service to be imported. */
    az_apim_api_import_command_builder.prototype.wsdlServiceName = function (value) {
        this.setFlag("--wsdl-service-name", value);
        return this;
    };
    return az_apim_api_import_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_api_list_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_api_list_command_builder, _super);
    function az_apim_api_list_command_builder(commandPath, resultDataTypeName, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_api_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_api_list_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Filter of APIs by displayName. */
    az_apim_api_list_command_builder.prototype.filterDisplayName = function (value) {
        this.setFlag("--filter-display-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_apim_api_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Number of records to skip. */
    az_apim_api_list_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_api_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Number of records to return. */
    az_apim_api_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_apim_api_list_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_api_show_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_api_show_command_builder, _super);
    function az_apim_api_show_command_builder(commandPath, resultDataTypeName, apiId, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.apiId(apiId);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    az_apim_api_show_command_builder.prototype.apiId = function (value) {
        this.setFlag("--api-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_api_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_api_show_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_apim_api_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_api_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_api_show_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_api_update_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_api_update_command_builder, _super);
    function az_apim_api_update_command_builder(commandPath, resultDataTypeName, apiId, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.apiId(apiId);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** Unique name of the api to be created. */
    az_apim_api_update_command_builder.prototype.apiId = function (value) {
        this.setFlag("--api-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_api_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_api_update_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_apim_api_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The type of the API. */
    az_apim_api_update_command_builder.prototype.apiType = function (value) {
        this.setFlag("--api-type", value);
        return this;
    };
    /** Description of the API. May include HTML formatting tags. */
    az_apim_api_update_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** API name. Must be 1 to 300 characters long. */
    az_apim_api_update_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_apim_api_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** ETag of the Entity. Not required when creating an entity, but required when updating an entity. */
    az_apim_api_update_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_apim_api_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Required. Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. */
    az_apim_api_update_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Describes on which protocols the operations in this API can be invoked. */
    az_apim_api_update_command_builder.prototype.protocols = function (value) {
        this.setFlag("--protocols", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_apim_api_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long. */
    az_apim_api_update_command_builder.prototype.serviceUrl = function (value) {
        this.setFlag("--service-url", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_apim_api_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_api_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Specifies the subscription key header name. */
    az_apim_api_update_command_builder.prototype.subscriptionKeyHeaderName = function (value) {
        this.setFlag("--subscription-key-header-name", value);
        return this;
    };
    /** Specifies the subscription key query string parameter name. */
    az_apim_api_update_command_builder.prototype.subscriptionKeyQueryParamName = function (value) {
        this.setFlag("--subscription-key-query-param-name", value);
        return this;
    };
    /** If true, the API requires a subscription key on requests. */
    az_apim_api_update_command_builder.prototype.subscriptionRequired = function (value) {
        this.setFlag("--subscription-required", value.toString());
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_apim_api_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_apim_api_update_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_api_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_api_wait_command_builder, _super);
    function az_apim_api_wait_command_builder(commandPath, resultDataTypeName, apiId, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.apiId(apiId);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    az_apim_api_wait_command_builder.prototype.apiId = function (value) {
        this.setFlag("--api-id", value);
        return this;
    };
    /** The name of the api management service instance. */
    az_apim_api_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_api_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_apim_api_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_apim_api_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_apim_api_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_apim_api_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_apim_api_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_api_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_apim_api_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_apim_api_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_apim_api_wait_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_nv_create_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_nv_create_command_builder, _super);
    function az_apim_nv_create_command_builder(commandPath, resultDataTypeName, displayName, namedValueId, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.displayName(displayName);
        _this.namedValueId(namedValueId);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** The Display name of the Named Value. */
    az_apim_nv_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Unique name for the Named Value to be created. */
    az_apim_nv_create_command_builder.prototype.namedValueId = function (value) {
        this.setFlag("--named-value-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_nv_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_nv_create_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Determines whether the value is a secret and should be encrypted or not. Default value is false. */
    az_apim_nv_create_command_builder.prototype.secret = function (value) {
        this.setFlag("--secret", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_nv_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_apim_nv_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The value of the Named Value. */
    az_apim_nv_create_command_builder.prototype.value = function (value) {
        this.setFlag("--value", value);
        return this;
    };
    return az_apim_nv_create_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_nv_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_nv_delete_command_builder, _super);
    function az_apim_nv_delete_command_builder(commandPath, resultDataTypeName, namedValueId, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namedValueId(namedValueId);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** Identifier of the NamedValue. */
    az_apim_nv_delete_command_builder.prototype.namedValueId = function (value) {
        this.setFlag("--named-value-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_nv_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_nv_delete_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_nv_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_apim_nv_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_apim_nv_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_nv_list_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_nv_list_command_builder, _super);
    function az_apim_nv_list_command_builder(commandPath, resultDataTypeName, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_nv_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_nv_list_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_apim_nv_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_nv_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_nv_list_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_nv_show_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_nv_show_command_builder, _super);
    function az_apim_nv_show_command_builder(commandPath, resultDataTypeName, namedValueId, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namedValueId(namedValueId);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** Identifier of the NamedValue. */
    az_apim_nv_show_command_builder.prototype.namedValueId = function (value) {
        this.setFlag("--named-value-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_nv_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_nv_show_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_apim_nv_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_nv_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_nv_show_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_nv_show_secret_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_nv_show_secret_command_builder, _super);
    function az_apim_nv_show_secret_command_builder(commandPath, resultDataTypeName, namedValueId, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namedValueId(namedValueId);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** Identifier of the NamedValue. */
    az_apim_nv_show_secret_command_builder.prototype.namedValueId = function (value) {
        this.setFlag("--named-value-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_nv_show_secret_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_nv_show_secret_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_nv_show_secret_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_nv_show_secret_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_nv_update_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_nv_update_command_builder, _super);
    function az_apim_nv_update_command_builder(commandPath, resultDataTypeName, namedValueId, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namedValueId(namedValueId);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** Unique name of the api to be created. */
    az_apim_nv_update_command_builder.prototype.namedValueId = function (value) {
        this.setFlag("--named-value-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_nv_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the API Management service instance. */
    az_apim_nv_update_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_apim_nv_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_apim_nv_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** ETag of the Entity. Not required when creating an entity, but required when updating an entity. */
    az_apim_nv_update_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_apim_nv_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Determines whether the value is a secret and should be encrypted or not. Default value is false. */
    az_apim_nv_update_command_builder.prototype.secret = function (value) {
        this.setFlag("--secret", value.toString());
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_apim_nv_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_nv_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_apim_nv_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The value of the Named Value. */
    az_apim_nv_update_command_builder.prototype.value = function (value) {
        this.setFlag("--value", value);
        return this;
    };
    return az_apim_nv_update_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_product_api_add_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_product_api_add_command_builder, _super);
    function az_apim_product_api_add_command_builder(commandPath, resultDataTypeName, apiId, productId, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.apiId(apiId);
        _this.productId(productId);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    az_apim_product_api_add_command_builder.prototype.apiId = function (value) {
        this.setFlag("--api-id", value);
        return this;
    };
    /** Product identifier. Must be unique in the current API Management service instance. */
    az_apim_product_api_add_command_builder.prototype.productId = function (value) {
        this.setFlag("--product-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_product_api_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the api management service instance. */
    az_apim_product_api_add_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_product_api_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_product_api_add_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_product_api_check_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_product_api_check_command_builder, _super);
    function az_apim_product_api_check_command_builder(commandPath, resultDataTypeName, apiId, productId, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.apiId(apiId);
        _this.productId(productId);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    az_apim_product_api_check_command_builder.prototype.apiId = function (value) {
        this.setFlag("--api-id", value);
        return this;
    };
    /** Product identifier. Must be unique in the current API Management service instance. */
    az_apim_product_api_check_command_builder.prototype.productId = function (value) {
        this.setFlag("--product-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_product_api_check_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the api management service instance. */
    az_apim_product_api_check_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_product_api_check_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_product_api_check_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_product_api_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_product_api_delete_command_builder, _super);
    function az_apim_product_api_delete_command_builder(commandPath, resultDataTypeName, apiId, productId, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.apiId(apiId);
        _this.productId(productId);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
    az_apim_product_api_delete_command_builder.prototype.apiId = function (value) {
        this.setFlag("--api-id", value);
        return this;
    };
    /** Product identifier. Must be unique in the current API Management service instance. */
    az_apim_product_api_delete_command_builder.prototype.productId = function (value) {
        this.setFlag("--product-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_product_api_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the api management service instance. */
    az_apim_product_api_delete_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_product_api_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_product_api_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_product_api_list_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_product_api_list_command_builder, _super);
    function az_apim_product_api_list_command_builder(commandPath, resultDataTypeName, productId, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.productId(productId);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** Product identifier. Must be unique in the current API Management service instance. */
    az_apim_product_api_list_command_builder.prototype.productId = function (value) {
        this.setFlag("--product-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_product_api_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the api management service instance. */
    az_apim_product_api_list_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_apim_product_api_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_product_api_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_product_api_list_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_product_create_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_product_create_command_builder, _super);
    function az_apim_product_create_command_builder(commandPath, resultDataTypeName, productName, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.productName(productName);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** Product name. */
    az_apim_product_create_command_builder.prototype.productName = function (value) {
        this.setFlag("--product-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_product_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the api management service instance. */
    az_apim_product_create_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of false. */
    az_apim_product_create_command_builder.prototype.approvalRequired = function (value) {
        this.setFlag("--approval-required", value);
        return this;
    };
    /** Product description. May include HTML formatting tags. */
    az_apim_product_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process. */
    az_apim_product_create_command_builder.prototype.legalTerms = function (value) {
        this.setFlag("--legal-terms", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_apim_product_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Product identifier. Must be unique in the current API Management service instance. */
    az_apim_product_create_command_builder.prototype.productId = function (value) {
        this.setFlag("--product-id", value);
        return this;
    };
    /** Whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished. */
    az_apim_product_create_command_builder.prototype.state = function (value) {
        this.setFlag("--state", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_product_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Whether a product subscription is required for accessing APIs included in this product. */
    az_apim_product_create_command_builder.prototype.subscriptionRequired = function (value) {
        this.setFlag("--subscription-required", value);
        return this;
    };
    /** Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of false. */
    az_apim_product_create_command_builder.prototype.subscriptionsLimit = function (value) {
        this.setFlag("--subscriptions-limit", value);
        return this;
    };
    return az_apim_product_create_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_product_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_product_delete_command_builder, _super);
    function az_apim_product_delete_command_builder(commandPath, resultDataTypeName, productId, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.productId(productId);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** Product identifier. Must be unique in the current API Management service instance. */
    az_apim_product_delete_command_builder.prototype.productId = function (value) {
        this.setFlag("--product-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_product_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the api management service instance. */
    az_apim_product_delete_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Delete existing subscriptions associated with the product or not. */
    az_apim_product_delete_command_builder.prototype.deleteSubscriptions = function (value) {
        this.setFlag("--delete-subscriptions", value);
        return this;
    };
    /** ETag of the Entity. */
    az_apim_product_delete_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_apim_product_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_product_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_apim_product_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_apim_product_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_product_list_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_product_list_command_builder, _super);
    function az_apim_product_list_command_builder(commandPath, resultDataTypeName, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_product_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the api management service instance. */
    az_apim_product_list_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_apim_product_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_product_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_product_list_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_product_show_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_product_show_command_builder, _super);
    function az_apim_product_show_command_builder(commandPath, resultDataTypeName, productId, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.productId(productId);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** Product identifier. Must be unique in the current API Management service instance. */
    az_apim_product_show_command_builder.prototype.productId = function (value) {
        this.setFlag("--product-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_product_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the api management service instance. */
    az_apim_product_show_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_apim_product_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_product_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_product_show_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_product_update_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_product_update_command_builder, _super);
    function az_apim_product_update_command_builder(commandPath, resultDataTypeName, productId, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.productId(productId);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** Product identifier. Must be unique in the current API Management service instance. */
    az_apim_product_update_command_builder.prototype.productId = function (value) {
        this.setFlag("--product-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_product_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the api management service instance. */
    az_apim_product_update_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_apim_product_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of false. */
    az_apim_product_update_command_builder.prototype.approvalRequired = function (value) {
        this.setFlag("--approval-required", value);
        return this;
    };
    /** Product description. May include HTML formatting tags. */
    az_apim_product_update_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_apim_product_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** ETag of the Entity. */
    az_apim_product_update_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process. */
    az_apim_product_update_command_builder.prototype.legalTerms = function (value) {
        this.setFlag("--legal-terms", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_apim_product_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Product name. */
    az_apim_product_update_command_builder.prototype.productName = function (value) {
        this.setFlag("--product-name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_apim_product_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_apim_product_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished. */
    az_apim_product_update_command_builder.prototype.state = function (value) {
        this.setFlag("--state", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_product_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Whether a product subscription is required for accessing APIs included in this product. */
    az_apim_product_update_command_builder.prototype.subscriptionRequired = function (value) {
        this.setFlag("--subscription-required", value);
        return this;
    };
    /** Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of false. */
    az_apim_product_update_command_builder.prototype.subscriptionsLimit = function (value) {
        this.setFlag("--subscriptions-limit", value);
        return this;
    };
    return az_apim_product_update_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_apply_network_updates_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_apply_network_updates_command_builder, _super);
    function az_apim_apply_network_updates_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the api management service instance. */
    az_apim_apply_network_updates_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_apply_network_updates_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_apim_apply_network_updates_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_apim_apply_network_updates_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_apply_network_updates_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_apply_network_updates_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_backup_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_backup_command_builder, _super);
    function az_apim_backup_command_builder(commandPath, resultDataTypeName, backupName, name, resourceGroup, storageAccountContainer, storageAccountKey, storageAccountName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.backupName(backupName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.storageAccountContainer(storageAccountContainer);
        _this.storageAccountKey(storageAccountKey);
        _this.storageAccountName(storageAccountName);
        return _this;
    }
    /** The name of the backup file to create. */
    az_apim_backup_command_builder.prototype.backupName = function (value) {
        this.setFlag("--backup-name", value);
        return this;
    };
    /** The name of the api management service instance. */
    az_apim_backup_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_backup_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the storage account container used to place the backup. */
    az_apim_backup_command_builder.prototype.storageAccountContainer = function (value) {
        this.setFlag("--storage-account-container", value);
        return this;
    };
    /** The access key of the storage account used to place the backup. */
    az_apim_backup_command_builder.prototype.storageAccountKey = function (value) {
        this.setFlag("--storage-account-key", value);
        return this;
    };
    /** The name of the storage account used to place the backup. */
    az_apim_backup_command_builder.prototype.storageAccountName = function (value) {
        this.setFlag("--storage-account-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_apim_backup_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_backup_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_backup_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_check_name_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_check_name_command_builder, _super);
    function az_apim_check_name_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the api management service instance. */
    az_apim_check_name_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_check_name_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_check_name_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_create_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_create_command_builder, _super);
    function az_apim_create_command_builder(commandPath, resultDataTypeName, name, publisherEmail, publisherName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.publisherEmail(publisherEmail);
        _this.publisherName(publisherName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Unique name of the service instance to be created. */
    az_apim_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The e-mail address to receive all system notifications. */
    az_apim_create_command_builder.prototype.publisherEmail = function (value) {
        this.setFlag("--publisher-email", value);
        return this;
    };
    /** The name of your organization for use in the developer portal and e-mail notifications. */
    az_apim_create_command_builder.prototype.publisherName = function (value) {
        this.setFlag("--publisher-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Enforces a client certificate to be presented on each request to the gateway and also enables the ability to authenticate the certificate in the policy on the gateway. */
    az_apim_create_command_builder.prototype.enableClientCertificate = function (value) {
        this.setFlag("--enable-client-certificate", value.toString());
        return this;
    };
    /** Create a managed identity for the API Management service to access other Azure resources. */
    az_apim_create_command_builder.prototype.enableManagedIdentity = function (value) {
        this.setFlag("--enable-managed-identity", value.toString());
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_apim_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_apim_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The number of deployed units of the SKU. */
    az_apim_create_command_builder.prototype.skuCapacity = function (value) {
        this.setFlag("--sku-capacity", value);
        return this;
    };
    /** The sku of the api management instance. */
    az_apim_create_command_builder.prototype.skuName = function (value) {
        this.setFlag("--sku-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_apim_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The virtual network type. */
    az_apim_create_command_builder.prototype.virtualNetwork = function (value) {
        this.setFlag("--virtual-network", value);
        return this;
    };
    return az_apim_create_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_delete_command_builder, _super);
    function az_apim_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the api management service instance. */
    az_apim_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_apim_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_apim_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_apim_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_list_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_list_command_builder, _super);
    function az_apim_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_apim_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_list_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_show_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_show_command_builder, _super);
    function az_apim_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the api management service instance. */
    az_apim_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_apim_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_apim_show_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_update_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_update_command_builder, _super);
    function az_apim_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the api management service instance. */
    az_apim_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_apim_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Enforces a client certificate to be presented on each request to the gateway and also enables the ability to authenticate the certificate in the policy on the gateway. */
    az_apim_update_command_builder.prototype.enableClientCertificate = function (value) {
        this.setFlag("--enable-client-certificate", value.toString());
        return this;
    };
    /** Create a managed identity for the API Management service to access other Azure resources. */
    az_apim_update_command_builder.prototype.enableManagedIdentity = function (value) {
        this.setFlag("--enable-managed-identity", value.toString());
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_apim_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_apim_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The e-mail address to receive all system notifications. */
    az_apim_update_command_builder.prototype.publisherEmail = function (value) {
        this.setFlag("--publisher-email", value);
        return this;
    };
    /** The name of your organization for use in the developer portal and e-mail notifications. */
    az_apim_update_command_builder.prototype.publisherName = function (value) {
        this.setFlag("--publisher-name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_apim_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_apim_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** The number of deployed units of the SKU. */
    az_apim_update_command_builder.prototype.skuCapacity = function (value) {
        this.setFlag("--sku-capacity", value);
        return this;
    };
    /** The sku of the api management instance. */
    az_apim_update_command_builder.prototype.skuName = function (value) {
        this.setFlag("--sku-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_apim_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The virtual network type. */
    az_apim_update_command_builder.prototype.virtualNetwork = function (value) {
        this.setFlag("--virtual-network", value);
        return this;
    };
    return az_apim_update_command_builder;
}(base_1.CommandBuilder));
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
var az_apim_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_apim_wait_command_builder, _super);
    function az_apim_wait_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the api management service instance. */
    az_apim_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_apim_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_apim_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_apim_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_apim_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_apim_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_apim_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_apim_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_apim_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_apim_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_apim_wait_command_builder;
}(base_1.CommandBuilder));
