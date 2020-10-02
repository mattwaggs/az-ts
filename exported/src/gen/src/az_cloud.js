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
exports.az_cloud = void 0;
var base_1 = require("../base");
/** Manage registered Azure clouds. */
var az_cloud = /** @class */ (function () {
    function az_cloud() {
    }
    /**
     * List registered clouds.
     *
     * Syntax:
     * ```
     * az cloud list [--query-examples]
     * ```
     */
    az_cloud.list = function () {
        return new az_cloud_list_command_builder("az cloud list", 'az_cloud_list_command_result');
    };
    /**
     * List the supported profiles for a cloud.
     *
     * Syntax:
     * ```
     * az cloud list-profiles [--name]
     *                        [--show-all]
     * ```
     */
    az_cloud.list_profiles = function () {
        return new az_cloud_list_profiles_command_builder("az cloud list-profiles", 'az_cloud_list_profiles_command_result');
    };
    /**
     * Register a cloud.
     *
     * Syntax:
     * ```
     * az cloud register --name
     *                   [--cloud-config]
     *                   [--endpoint-active-directory]
     *                   [--endpoint-active-directory-data-lake-resource-id]
     *                   [--endpoint-active-directory-graph-resource-id]
     *                   [--endpoint-active-directory-resource-id]
     *                   [--endpoint-gallery]
     *                   [--endpoint-management]
     *                   [--endpoint-resource-manager]
     *                   [--endpoint-sql-management]
     *                   [--endpoint-vm-image-alias-doc]
     *                   [--profile {2017-03-09-profile, 2018-03-01-hybrid, 2019-03-01-hybrid, latest}]
     *                   [--suffix-acr-login-server-endpoint]
     *                   [--suffix-azure-datalake-analytics-catalog-and-job-endpoint]
     *                   [--suffix-azure-datalake-store-file-system-endpoint]
     *                   [--suffix-keyvault-dns]
     *                   [--suffix-sql-server-hostname]
     *                   [--suffix-storage-endpoint]
     * ```
     *
     * @param {string} name Name of a registered cloud.
     */
    az_cloud.register = function (name) {
        return new az_cloud_register_command_builder("az cloud register", 'az_cloud_register_command_result', name);
    };
    /**
     * Set the active cloud.
     *
     * Syntax:
     * ```
     * az cloud set --name
     *              [--profile {2017-03-09-profile, 2018-03-01-hybrid, 2019-03-01-hybrid, latest}]
     * ```
     *
     * @param {string} name Name of a registered cloud.
     */
    az_cloud.set = function (name) {
        return new az_cloud_set_command_builder("az cloud set", 'az_cloud_set_command_result', name);
    };
    /**
     * Get the details of a registered cloud.
     *
     * Syntax:
     * ```
     * az cloud show [--name]
     *               [--query-examples]
     * ```
     */
    az_cloud.show = function () {
        return new az_cloud_show_command_builder("az cloud show", 'az_cloud_show_command_result');
    };
    /**
     * Unregister a cloud.
     *
     * Syntax:
     * ```
     * az cloud unregister --name
     * ```
     *
     * @param {string} name Name of a registered cloud.
     */
    az_cloud.unregister = function (name) {
        return new az_cloud_unregister_command_builder("az cloud unregister", 'az_cloud_unregister_command_result', name);
    };
    /**
     * Update the configuration of a cloud.
     *
     * Syntax:
     * ```
     * az cloud update [--cloud-config]
     *                 [--endpoint-active-directory]
     *                 [--endpoint-active-directory-data-lake-resource-id]
     *                 [--endpoint-active-directory-graph-resource-id]
     *                 [--endpoint-active-directory-resource-id]
     *                 [--endpoint-gallery]
     *                 [--endpoint-management]
     *                 [--endpoint-resource-manager]
     *                 [--endpoint-sql-management]
     *                 [--endpoint-vm-image-alias-doc]
     *                 [--name]
     *                 [--profile {2017-03-09-profile, 2018-03-01-hybrid, 2019-03-01-hybrid, latest}]
     *                 [--suffix-acr-login-server-endpoint]
     *                 [--suffix-azure-datalake-analytics-catalog-and-job-endpoint]
     *                 [--suffix-azure-datalake-store-file-system-endpoint]
     *                 [--suffix-keyvault-dns]
     *                 [--suffix-sql-server-hostname]
     *                 [--suffix-storage-endpoint]
     * ```
     */
    az_cloud.update = function () {
        return new az_cloud_update_command_builder("az cloud update", 'az_cloud_update_command_result');
    };
    return az_cloud;
}());
exports.az_cloud = az_cloud;
/**
 * List registered clouds.
 *
 * Syntax:
 * ```
 * az cloud list [--query-examples]
 * ```
 */
var az_cloud_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cloud_list_command_builder, _super);
    function az_cloud_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cloud_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    return az_cloud_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List the supported profiles for a cloud.
 *
 * Syntax:
 * ```
 * az cloud list-profiles [--name]
 *                        [--show-all]
 * ```
 */
var az_cloud_list_profiles_command_builder = /** @class */ (function (_super) {
    __extends(az_cloud_list_profiles_command_builder, _super);
    function az_cloud_list_profiles_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of a registered cloud. */
    az_cloud_list_profiles_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Show all available profiles supported in the CLI. */
    az_cloud_list_profiles_command_builder.prototype.showAll = function (value) {
        this.setFlag("--show-all", value);
        return this;
    };
    return az_cloud_list_profiles_command_builder;
}(base_1.CommandBuilder));
/**
 * Register a cloud.
 *
 * Syntax:
 * ```
 * az cloud register --name
 *                   [--cloud-config]
 *                   [--endpoint-active-directory]
 *                   [--endpoint-active-directory-data-lake-resource-id]
 *                   [--endpoint-active-directory-graph-resource-id]
 *                   [--endpoint-active-directory-resource-id]
 *                   [--endpoint-gallery]
 *                   [--endpoint-management]
 *                   [--endpoint-resource-manager]
 *                   [--endpoint-sql-management]
 *                   [--endpoint-vm-image-alias-doc]
 *                   [--profile {2017-03-09-profile, 2018-03-01-hybrid, 2019-03-01-hybrid, latest}]
 *                   [--suffix-acr-login-server-endpoint]
 *                   [--suffix-azure-datalake-analytics-catalog-and-job-endpoint]
 *                   [--suffix-azure-datalake-store-file-system-endpoint]
 *                   [--suffix-keyvault-dns]
 *                   [--suffix-sql-server-hostname]
 *                   [--suffix-storage-endpoint]
 * ```
 *
 * @param {string} name Name of a registered cloud.
 */
var az_cloud_register_command_builder = /** @class */ (function (_super) {
    __extends(az_cloud_register_command_builder, _super);
    function az_cloud_register_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of a registered cloud. */
    az_cloud_register_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** JSON encoded cloud configuration. Use @{file} to load from a file. */
    az_cloud_register_command_builder.prototype.cloudConfig = function (value) {
        this.setFlag("--cloud-config", value);
        return this;
    };
    /** The Active Directory login endpoint. */
    az_cloud_register_command_builder.prototype.endpointActiveDirectory = function (value) {
        this.setFlag("--endpoint-active-directory", value);
        return this;
    };
    /** The Active Directory resource ID for data lake services. */
    az_cloud_register_command_builder.prototype.endpointActiveDirectoryDataLakeResourceId = function (value) {
        this.setFlag("--endpoint-active-directory-data-lake-resource-id", value);
        return this;
    };
    /** The Active Directory resource ID. */
    az_cloud_register_command_builder.prototype.endpointActiveDirectoryGraphResourceId = function (value) {
        this.setFlag("--endpoint-active-directory-graph-resource-id", value);
        return this;
    };
    /** The resource ID to obtain AD tokens for. */
    az_cloud_register_command_builder.prototype.endpointActiveDirectoryResourceId = function (value) {
        this.setFlag("--endpoint-active-directory-resource-id", value);
        return this;
    };
    /** The template gallery endpoint. */
    az_cloud_register_command_builder.prototype.endpointGallery = function (value) {
        this.setFlag("--endpoint-gallery", value);
        return this;
    };
    /** The management service endpoint. */
    az_cloud_register_command_builder.prototype.endpointManagement = function (value) {
        this.setFlag("--endpoint-management", value);
        return this;
    };
    /** The resource management endpoint. */
    az_cloud_register_command_builder.prototype.endpointResourceManager = function (value) {
        this.setFlag("--endpoint-resource-manager", value);
        return this;
    };
    /** The sql server management endpoint. */
    az_cloud_register_command_builder.prototype.endpointSqlManagement = function (value) {
        this.setFlag("--endpoint-sql-management", value);
        return this;
    };
    /** The uri of the document which caches commonly used virtual machine images. */
    az_cloud_register_command_builder.prototype.endpointVmImageAliasDoc = function (value) {
        this.setFlag("--endpoint-vm-image-alias-doc", value);
        return this;
    };
    /** Profile to use for this cloud. */
    az_cloud_register_command_builder.prototype.profile = function (value) {
        this.setFlag("--profile", value);
        return this;
    };
    /** The Azure Container Registry login server suffix. */
    az_cloud_register_command_builder.prototype.suffixAcrLoginServerEndpoint = function (value) {
        this.setFlag("--suffix-acr-login-server-endpoint", value);
        return this;
    };
    /** The Data Lake analytics job and catalog service dns suffix. */
    az_cloud_register_command_builder.prototype.suffixAzureDatalakeAnalyticsCatalogAndJobEndpoint = function (value) {
        this.setFlag("--suffix-azure-datalake-analytics-catalog-and-job-endpoint", value);
        return this;
    };
    /** The Data Lake store filesystem service dns suffix. */
    az_cloud_register_command_builder.prototype.suffixAzureDatalakeStoreFileSystemEndpoint = function (value) {
        this.setFlag("--suffix-azure-datalake-store-file-system-endpoint", value);
        return this;
    };
    /** The Key Vault service dns suffix. */
    az_cloud_register_command_builder.prototype.suffixKeyvaultDns = function (value) {
        this.setFlag("--suffix-keyvault-dns", value);
        return this;
    };
    /** The dns suffix for sql servers. */
    az_cloud_register_command_builder.prototype.suffixSqlServerHostname = function (value) {
        this.setFlag("--suffix-sql-server-hostname", value);
        return this;
    };
    /** The endpoint suffix for storage accounts. */
    az_cloud_register_command_builder.prototype.suffixStorageEndpoint = function (value) {
        this.setFlag("--suffix-storage-endpoint", value);
        return this;
    };
    return az_cloud_register_command_builder;
}(base_1.CommandBuilder));
/**
 * Set the active cloud.
 *
 * Syntax:
 * ```
 * az cloud set --name
 *              [--profile {2017-03-09-profile, 2018-03-01-hybrid, 2019-03-01-hybrid, latest}]
 * ```
 *
 * @param {string} name Name of a registered cloud.
 */
var az_cloud_set_command_builder = /** @class */ (function (_super) {
    __extends(az_cloud_set_command_builder, _super);
    function az_cloud_set_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of a registered cloud. */
    az_cloud_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Profile to use for this cloud. */
    az_cloud_set_command_builder.prototype.profile = function (value) {
        this.setFlag("--profile", value);
        return this;
    };
    return az_cloud_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a registered cloud.
 *
 * Syntax:
 * ```
 * az cloud show [--name]
 *               [--query-examples]
 * ```
 */
var az_cloud_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cloud_show_command_builder, _super);
    function az_cloud_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of a registered cloud. */
    az_cloud_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cloud_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    return az_cloud_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Unregister a cloud.
 *
 * Syntax:
 * ```
 * az cloud unregister --name
 * ```
 *
 * @param {string} name Name of a registered cloud.
 */
var az_cloud_unregister_command_builder = /** @class */ (function (_super) {
    __extends(az_cloud_unregister_command_builder, _super);
    function az_cloud_unregister_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of a registered cloud. */
    az_cloud_unregister_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    return az_cloud_unregister_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the configuration of a cloud.
 *
 * Syntax:
 * ```
 * az cloud update [--cloud-config]
 *                 [--endpoint-active-directory]
 *                 [--endpoint-active-directory-data-lake-resource-id]
 *                 [--endpoint-active-directory-graph-resource-id]
 *                 [--endpoint-active-directory-resource-id]
 *                 [--endpoint-gallery]
 *                 [--endpoint-management]
 *                 [--endpoint-resource-manager]
 *                 [--endpoint-sql-management]
 *                 [--endpoint-vm-image-alias-doc]
 *                 [--name]
 *                 [--profile {2017-03-09-profile, 2018-03-01-hybrid, 2019-03-01-hybrid, latest}]
 *                 [--suffix-acr-login-server-endpoint]
 *                 [--suffix-azure-datalake-analytics-catalog-and-job-endpoint]
 *                 [--suffix-azure-datalake-store-file-system-endpoint]
 *                 [--suffix-keyvault-dns]
 *                 [--suffix-sql-server-hostname]
 *                 [--suffix-storage-endpoint]
 * ```
 */
var az_cloud_update_command_builder = /** @class */ (function (_super) {
    __extends(az_cloud_update_command_builder, _super);
    function az_cloud_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** JSON encoded cloud configuration. Use @{file} to load from a file. */
    az_cloud_update_command_builder.prototype.cloudConfig = function (value) {
        this.setFlag("--cloud-config", value);
        return this;
    };
    /** The Active Directory login endpoint. */
    az_cloud_update_command_builder.prototype.endpointActiveDirectory = function (value) {
        this.setFlag("--endpoint-active-directory", value);
        return this;
    };
    /** The Active Directory resource ID for data lake services. */
    az_cloud_update_command_builder.prototype.endpointActiveDirectoryDataLakeResourceId = function (value) {
        this.setFlag("--endpoint-active-directory-data-lake-resource-id", value);
        return this;
    };
    /** The Active Directory resource ID. */
    az_cloud_update_command_builder.prototype.endpointActiveDirectoryGraphResourceId = function (value) {
        this.setFlag("--endpoint-active-directory-graph-resource-id", value);
        return this;
    };
    /** The resource ID to obtain AD tokens for. */
    az_cloud_update_command_builder.prototype.endpointActiveDirectoryResourceId = function (value) {
        this.setFlag("--endpoint-active-directory-resource-id", value);
        return this;
    };
    /** The template gallery endpoint. */
    az_cloud_update_command_builder.prototype.endpointGallery = function (value) {
        this.setFlag("--endpoint-gallery", value);
        return this;
    };
    /** The management service endpoint. */
    az_cloud_update_command_builder.prototype.endpointManagement = function (value) {
        this.setFlag("--endpoint-management", value);
        return this;
    };
    /** The resource management endpoint. */
    az_cloud_update_command_builder.prototype.endpointResourceManager = function (value) {
        this.setFlag("--endpoint-resource-manager", value);
        return this;
    };
    /** The sql server management endpoint. */
    az_cloud_update_command_builder.prototype.endpointSqlManagement = function (value) {
        this.setFlag("--endpoint-sql-management", value);
        return this;
    };
    /** The uri of the document which caches commonly used virtual machine images. */
    az_cloud_update_command_builder.prototype.endpointVmImageAliasDoc = function (value) {
        this.setFlag("--endpoint-vm-image-alias-doc", value);
        return this;
    };
    /** Name of a registered cloud. */
    az_cloud_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Profile to use for this cloud. */
    az_cloud_update_command_builder.prototype.profile = function (value) {
        this.setFlag("--profile", value);
        return this;
    };
    /** The Azure Container Registry login server suffix. */
    az_cloud_update_command_builder.prototype.suffixAcrLoginServerEndpoint = function (value) {
        this.setFlag("--suffix-acr-login-server-endpoint", value);
        return this;
    };
    /** The Data Lake analytics job and catalog service dns suffix. */
    az_cloud_update_command_builder.prototype.suffixAzureDatalakeAnalyticsCatalogAndJobEndpoint = function (value) {
        this.setFlag("--suffix-azure-datalake-analytics-catalog-and-job-endpoint", value);
        return this;
    };
    /** The Data Lake store filesystem service dns suffix. */
    az_cloud_update_command_builder.prototype.suffixAzureDatalakeStoreFileSystemEndpoint = function (value) {
        this.setFlag("--suffix-azure-datalake-store-file-system-endpoint", value);
        return this;
    };
    /** The Key Vault service dns suffix. */
    az_cloud_update_command_builder.prototype.suffixKeyvaultDns = function (value) {
        this.setFlag("--suffix-keyvault-dns", value);
        return this;
    };
    /** The dns suffix for sql servers. */
    az_cloud_update_command_builder.prototype.suffixSqlServerHostname = function (value) {
        this.setFlag("--suffix-sql-server-hostname", value);
        return this;
    };
    /** The endpoint suffix for storage accounts. */
    az_cloud_update_command_builder.prototype.suffixStorageEndpoint = function (value) {
        this.setFlag("--suffix-storage-endpoint", value);
        return this;
    };
    return az_cloud_update_command_builder;
}(base_1.CommandBuilder));
