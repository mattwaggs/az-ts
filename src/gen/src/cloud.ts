import { CommandBuilder, ICommandParent } from '../base';

/** Manage registered Azure clouds. */
export class az_cloud implements ICommandParent<any> {
    commandPath = "az cloud";

    /**
     * List registered clouds.
     *
     * Syntax:
     * ```
     * az cloud list [--query-examples]
     * ```
     */
    az_cloud_list(): az_cloud_list_command_builder {
        return new az_cloud_list_command_builder(this);
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
    az_cloud_list_profiles(): az_cloud_list_profiles_command_builder {
        return new az_cloud_list_profiles_command_builder(this);
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
    az_cloud_register(name: string): az_cloud_register_command_builder {
        return new az_cloud_register_command_builder(this, name);
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
    az_cloud_set(name: string): az_cloud_set_command_builder {
        return new az_cloud_set_command_builder(this, name);
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
    az_cloud_show(): az_cloud_show_command_builder {
        return new az_cloud_show_command_builder(this);
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
    az_cloud_unregister(name: string): az_cloud_unregister_command_builder {
        return new az_cloud_unregister_command_builder(this, name);
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
    az_cloud_update(): az_cloud_update_command_builder {
        return new az_cloud_update_command_builder(this);
    }
}

/**
 * List registered clouds.
 *
 * Syntax:
 * ```
 * az cloud list [--query-examples]
 * ```
 */
class az_cloud_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cloud_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }
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
class az_cloud_list_profiles_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of a registered cloud. */
    name(value: string): az_cloud_list_profiles_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Show all available profiles supported in the CLI. */
    showAll(value: string): az_cloud_list_profiles_command_builder {
        this.setFlag("--show-all", value);
        return this;
    }
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
class az_cloud_register_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of a registered cloud. */
    name(value: string): az_cloud_register_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** JSON encoded cloud configuration. Use @{file} to load from a file. */
    cloudConfig(value: string): az_cloud_register_command_builder {
        this.setFlag("--cloud-config", value);
        return this;
    }

    /** The Active Directory login endpoint. */
    endpointActiveDirectory(value: string): az_cloud_register_command_builder {
        this.setFlag("--endpoint-active-directory", value);
        return this;
    }

    /** The Active Directory resource ID for data lake services. */
    endpointActiveDirectoryDataLakeResourceId(value: string): az_cloud_register_command_builder {
        this.setFlag("--endpoint-active-directory-data-lake-resource-id", value);
        return this;
    }

    /** The Active Directory resource ID. */
    endpointActiveDirectoryGraphResourceId(value: string): az_cloud_register_command_builder {
        this.setFlag("--endpoint-active-directory-graph-resource-id", value);
        return this;
    }

    /** The resource ID to obtain AD tokens for. */
    endpointActiveDirectoryResourceId(value: string): az_cloud_register_command_builder {
        this.setFlag("--endpoint-active-directory-resource-id", value);
        return this;
    }

    /** The template gallery endpoint. */
    endpointGallery(value: string): az_cloud_register_command_builder {
        this.setFlag("--endpoint-gallery", value);
        return this;
    }

    /** The management service endpoint. */
    endpointManagement(value: string): az_cloud_register_command_builder {
        this.setFlag("--endpoint-management", value);
        return this;
    }

    /** The resource management endpoint. */
    endpointResourceManager(value: string): az_cloud_register_command_builder {
        this.setFlag("--endpoint-resource-manager", value);
        return this;
    }

    /** The sql server management endpoint. */
    endpointSqlManagement(value: string): az_cloud_register_command_builder {
        this.setFlag("--endpoint-sql-management", value);
        return this;
    }

    /** The uri of the document which caches commonly used virtual machine images. */
    endpointVmImageAliasDoc(value: string): az_cloud_register_command_builder {
        this.setFlag("--endpoint-vm-image-alias-doc", value);
        return this;
    }

    /** Profile to use for this cloud. */
    profile(value: '2017-03-09-profile' | '2018-03-01-hybrid' | '2019-03-01-hybrid' | 'latest'): az_cloud_register_command_builder {
        this.setFlag("--profile", value);
        return this;
    }

    /** The Azure Container Registry login server suffix. */
    suffixAcrLoginServerEndpoint(value: string): az_cloud_register_command_builder {
        this.setFlag("--suffix-acr-login-server-endpoint", value);
        return this;
    }

    /** The Data Lake analytics job and catalog service dns suffix. */
    suffixAzureDatalakeAnalyticsCatalogAndJobEndpoint(value: string): az_cloud_register_command_builder {
        this.setFlag("--suffix-azure-datalake-analytics-catalog-and-job-endpoint", value);
        return this;
    }

    /** The Data Lake store filesystem service dns suffix. */
    suffixAzureDatalakeStoreFileSystemEndpoint(value: string): az_cloud_register_command_builder {
        this.setFlag("--suffix-azure-datalake-store-file-system-endpoint", value);
        return this;
    }

    /** The Key Vault service dns suffix. */
    suffixKeyvaultDns(value: string): az_cloud_register_command_builder {
        this.setFlag("--suffix-keyvault-dns", value);
        return this;
    }

    /** The dns suffix for sql servers. */
    suffixSqlServerHostname(value: string): az_cloud_register_command_builder {
        this.setFlag("--suffix-sql-server-hostname", value);
        return this;
    }

    /** The endpoint suffix for storage accounts. */
    suffixStorageEndpoint(value: string): az_cloud_register_command_builder {
        this.setFlag("--suffix-storage-endpoint", value);
        return this;
    }
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
class az_cloud_set_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of a registered cloud. */
    name(value: string): az_cloud_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Profile to use for this cloud. */
    profile(value: '2017-03-09-profile' | '2018-03-01-hybrid' | '2019-03-01-hybrid' | 'latest'): az_cloud_set_command_builder {
        this.setFlag("--profile", value);
        return this;
    }
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
class az_cloud_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of a registered cloud. */
    name(value: string): az_cloud_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cloud_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }
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
class az_cloud_unregister_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of a registered cloud. */
    name(value: string): az_cloud_unregister_command_builder {
        this.setFlag("--name", value);
        return this;
    }
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
class az_cloud_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** JSON encoded cloud configuration. Use @{file} to load from a file. */
    cloudConfig(value: string): az_cloud_update_command_builder {
        this.setFlag("--cloud-config", value);
        return this;
    }

    /** The Active Directory login endpoint. */
    endpointActiveDirectory(value: string): az_cloud_update_command_builder {
        this.setFlag("--endpoint-active-directory", value);
        return this;
    }

    /** The Active Directory resource ID for data lake services. */
    endpointActiveDirectoryDataLakeResourceId(value: string): az_cloud_update_command_builder {
        this.setFlag("--endpoint-active-directory-data-lake-resource-id", value);
        return this;
    }

    /** The Active Directory resource ID. */
    endpointActiveDirectoryGraphResourceId(value: string): az_cloud_update_command_builder {
        this.setFlag("--endpoint-active-directory-graph-resource-id", value);
        return this;
    }

    /** The resource ID to obtain AD tokens for. */
    endpointActiveDirectoryResourceId(value: string): az_cloud_update_command_builder {
        this.setFlag("--endpoint-active-directory-resource-id", value);
        return this;
    }

    /** The template gallery endpoint. */
    endpointGallery(value: string): az_cloud_update_command_builder {
        this.setFlag("--endpoint-gallery", value);
        return this;
    }

    /** The management service endpoint. */
    endpointManagement(value: string): az_cloud_update_command_builder {
        this.setFlag("--endpoint-management", value);
        return this;
    }

    /** The resource management endpoint. */
    endpointResourceManager(value: string): az_cloud_update_command_builder {
        this.setFlag("--endpoint-resource-manager", value);
        return this;
    }

    /** The sql server management endpoint. */
    endpointSqlManagement(value: string): az_cloud_update_command_builder {
        this.setFlag("--endpoint-sql-management", value);
        return this;
    }

    /** The uri of the document which caches commonly used virtual machine images. */
    endpointVmImageAliasDoc(value: string): az_cloud_update_command_builder {
        this.setFlag("--endpoint-vm-image-alias-doc", value);
        return this;
    }

    /** Name of a registered cloud. */
    name(value: string): az_cloud_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Profile to use for this cloud. */
    profile(value: '2017-03-09-profile' | '2018-03-01-hybrid' | '2019-03-01-hybrid' | 'latest'): az_cloud_update_command_builder {
        this.setFlag("--profile", value);
        return this;
    }

    /** The Azure Container Registry login server suffix. */
    suffixAcrLoginServerEndpoint(value: string): az_cloud_update_command_builder {
        this.setFlag("--suffix-acr-login-server-endpoint", value);
        return this;
    }

    /** The Data Lake analytics job and catalog service dns suffix. */
    suffixAzureDatalakeAnalyticsCatalogAndJobEndpoint(value: string): az_cloud_update_command_builder {
        this.setFlag("--suffix-azure-datalake-analytics-catalog-and-job-endpoint", value);
        return this;
    }

    /** The Data Lake store filesystem service dns suffix. */
    suffixAzureDatalakeStoreFileSystemEndpoint(value: string): az_cloud_update_command_builder {
        this.setFlag("--suffix-azure-datalake-store-file-system-endpoint", value);
        return this;
    }

    /** The Key Vault service dns suffix. */
    suffixKeyvaultDns(value: string): az_cloud_update_command_builder {
        this.setFlag("--suffix-keyvault-dns", value);
        return this;
    }

    /** The dns suffix for sql servers. */
    suffixSqlServerHostname(value: string): az_cloud_update_command_builder {
        this.setFlag("--suffix-sql-server-hostname", value);
        return this;
    }

    /** The endpoint suffix for storage accounts. */
    suffixStorageEndpoint(value: string): az_cloud_update_command_builder {
        this.setFlag("--suffix-storage-endpoint", value);
        return this;
    }
}
