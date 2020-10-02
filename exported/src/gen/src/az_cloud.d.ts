import { CommandBuilder } from '../base';
import { az_cloud_list_command_result } from './models/az_cloud_list_command_result';
import { az_cloud_list_profiles_command_result } from './models/az_cloud_list_profiles_command_result';
import { az_cloud_register_command_result } from './models/az_cloud_register_command_result';
import { az_cloud_set_command_result } from './models/az_cloud_set_command_result';
import { az_cloud_show_command_result } from './models/az_cloud_show_command_result';
import { az_cloud_unregister_command_result } from './models/az_cloud_unregister_command_result';
import { az_cloud_update_command_result } from './models/az_cloud_update_command_result';
/** Manage registered Azure clouds. */
export declare class az_cloud {
    /**
     * List registered clouds.
     *
     * Syntax:
     * ```
     * az cloud list [--query-examples]
     * ```
     */
    static list(): az_cloud_list_command_builder;
    /**
     * List the supported profiles for a cloud.
     *
     * Syntax:
     * ```
     * az cloud list-profiles [--name]
     *                        [--show-all]
     * ```
     */
    static list_profiles(): az_cloud_list_profiles_command_builder;
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
    static register(name: string): az_cloud_register_command_builder;
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
    static set(name: string): az_cloud_set_command_builder;
    /**
     * Get the details of a registered cloud.
     *
     * Syntax:
     * ```
     * az cloud show [--name]
     *               [--query-examples]
     * ```
     */
    static show(): az_cloud_show_command_builder;
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
    static unregister(name: string): az_cloud_unregister_command_builder;
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
    static update(): az_cloud_update_command_builder;
}
/**
 * List registered clouds.
 *
 * Syntax:
 * ```
 * az cloud list [--query-examples]
 * ```
 */
declare class az_cloud_list_command_builder extends CommandBuilder<az_cloud_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cloud_list_command_builder;
}
/**
 * List the supported profiles for a cloud.
 *
 * Syntax:
 * ```
 * az cloud list-profiles [--name]
 *                        [--show-all]
 * ```
 */
declare class az_cloud_list_profiles_command_builder extends CommandBuilder<az_cloud_list_profiles_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of a registered cloud. */
    name(value: string): az_cloud_list_profiles_command_builder;
    /** Show all available profiles supported in the CLI. */
    showAll(value: string): az_cloud_list_profiles_command_builder;
}
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
declare class az_cloud_register_command_builder extends CommandBuilder<az_cloud_register_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of a registered cloud. */
    name(value: string): az_cloud_register_command_builder;
    /** JSON encoded cloud configuration. Use @{file} to load from a file. */
    cloudConfig(value: string): az_cloud_register_command_builder;
    /** The Active Directory login endpoint. */
    endpointActiveDirectory(value: string): az_cloud_register_command_builder;
    /** The Active Directory resource ID for data lake services. */
    endpointActiveDirectoryDataLakeResourceId(value: string): az_cloud_register_command_builder;
    /** The Active Directory resource ID. */
    endpointActiveDirectoryGraphResourceId(value: string): az_cloud_register_command_builder;
    /** The resource ID to obtain AD tokens for. */
    endpointActiveDirectoryResourceId(value: string): az_cloud_register_command_builder;
    /** The template gallery endpoint. */
    endpointGallery(value: string): az_cloud_register_command_builder;
    /** The management service endpoint. */
    endpointManagement(value: string): az_cloud_register_command_builder;
    /** The resource management endpoint. */
    endpointResourceManager(value: string): az_cloud_register_command_builder;
    /** The sql server management endpoint. */
    endpointSqlManagement(value: string): az_cloud_register_command_builder;
    /** The uri of the document which caches commonly used virtual machine images. */
    endpointVmImageAliasDoc(value: string): az_cloud_register_command_builder;
    /** Profile to use for this cloud. */
    profile(value: '2017-03-09-profile' | '2018-03-01-hybrid' | '2019-03-01-hybrid' | 'latest'): az_cloud_register_command_builder;
    /** The Azure Container Registry login server suffix. */
    suffixAcrLoginServerEndpoint(value: string): az_cloud_register_command_builder;
    /** The Data Lake analytics job and catalog service dns suffix. */
    suffixAzureDatalakeAnalyticsCatalogAndJobEndpoint(value: string): az_cloud_register_command_builder;
    /** The Data Lake store filesystem service dns suffix. */
    suffixAzureDatalakeStoreFileSystemEndpoint(value: string): az_cloud_register_command_builder;
    /** The Key Vault service dns suffix. */
    suffixKeyvaultDns(value: string): az_cloud_register_command_builder;
    /** The dns suffix for sql servers. */
    suffixSqlServerHostname(value: string): az_cloud_register_command_builder;
    /** The endpoint suffix for storage accounts. */
    suffixStorageEndpoint(value: string): az_cloud_register_command_builder;
}
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
declare class az_cloud_set_command_builder extends CommandBuilder<az_cloud_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of a registered cloud. */
    name(value: string): az_cloud_set_command_builder;
    /** Profile to use for this cloud. */
    profile(value: '2017-03-09-profile' | '2018-03-01-hybrid' | '2019-03-01-hybrid' | 'latest'): az_cloud_set_command_builder;
}
/**
 * Get the details of a registered cloud.
 *
 * Syntax:
 * ```
 * az cloud show [--name]
 *               [--query-examples]
 * ```
 */
declare class az_cloud_show_command_builder extends CommandBuilder<az_cloud_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of a registered cloud. */
    name(value: string): az_cloud_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cloud_show_command_builder;
}
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
declare class az_cloud_unregister_command_builder extends CommandBuilder<az_cloud_unregister_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of a registered cloud. */
    name(value: string): az_cloud_unregister_command_builder;
}
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
declare class az_cloud_update_command_builder extends CommandBuilder<az_cloud_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** JSON encoded cloud configuration. Use @{file} to load from a file. */
    cloudConfig(value: string): az_cloud_update_command_builder;
    /** The Active Directory login endpoint. */
    endpointActiveDirectory(value: string): az_cloud_update_command_builder;
    /** The Active Directory resource ID for data lake services. */
    endpointActiveDirectoryDataLakeResourceId(value: string): az_cloud_update_command_builder;
    /** The Active Directory resource ID. */
    endpointActiveDirectoryGraphResourceId(value: string): az_cloud_update_command_builder;
    /** The resource ID to obtain AD tokens for. */
    endpointActiveDirectoryResourceId(value: string): az_cloud_update_command_builder;
    /** The template gallery endpoint. */
    endpointGallery(value: string): az_cloud_update_command_builder;
    /** The management service endpoint. */
    endpointManagement(value: string): az_cloud_update_command_builder;
    /** The resource management endpoint. */
    endpointResourceManager(value: string): az_cloud_update_command_builder;
    /** The sql server management endpoint. */
    endpointSqlManagement(value: string): az_cloud_update_command_builder;
    /** The uri of the document which caches commonly used virtual machine images. */
    endpointVmImageAliasDoc(value: string): az_cloud_update_command_builder;
    /** Name of a registered cloud. */
    name(value: string): az_cloud_update_command_builder;
    /** Profile to use for this cloud. */
    profile(value: '2017-03-09-profile' | '2018-03-01-hybrid' | '2019-03-01-hybrid' | 'latest'): az_cloud_update_command_builder;
    /** The Azure Container Registry login server suffix. */
    suffixAcrLoginServerEndpoint(value: string): az_cloud_update_command_builder;
    /** The Data Lake analytics job and catalog service dns suffix. */
    suffixAzureDatalakeAnalyticsCatalogAndJobEndpoint(value: string): az_cloud_update_command_builder;
    /** The Data Lake store filesystem service dns suffix. */
    suffixAzureDatalakeStoreFileSystemEndpoint(value: string): az_cloud_update_command_builder;
    /** The Key Vault service dns suffix. */
    suffixKeyvaultDns(value: string): az_cloud_update_command_builder;
    /** The dns suffix for sql servers. */
    suffixSqlServerHostname(value: string): az_cloud_update_command_builder;
    /** The endpoint suffix for storage accounts. */
    suffixStorageEndpoint(value: string): az_cloud_update_command_builder;
}
export {};
