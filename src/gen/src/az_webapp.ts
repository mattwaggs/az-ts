import { CommandBuilder } from '../base';

/** Manage webapp authentication and authorization. */
export class az_webapp_auth {
    /**
     * Show the authentification settings for the webapp.
     *
     * Syntax:
     * ```
     * az webapp auth show [--ids]
     *                     [--name]
     *                     [--query-examples]
     *                     [--resource-group]
     *                     [--slot]
     *                     [--subscription]
     * ```
     */
    static show(): az_webapp_auth_show_command_builder {
        return new az_webapp_auth_show_command_builder("az webapp auth show");
    }

    /**
     * Update the authentication settings for the webapp.
     *
     * Syntax:
     * ```
     * az webapp auth update [--aad-allowed-token-audiences]
     *                       [--aad-client-id]
     *                       [--aad-client-secret]
     *                       [--aad-client-secret-certificate-thumbprint]
     *                       [--aad-token-issuer-url]
     *                       [--action {AllowAnonymous, LoginWithAzureActiveDirectory, LoginWithFacebook, LoginWithGoogle, LoginWithMicrosoftAccount, LoginWithTwitter}]
     *                       [--allowed-external-redirect-urls]
     *                       [--enabled {false, true}]
     *                       [--facebook-app-id]
     *                       [--facebook-app-secret]
     *                       [--facebook-oauth-scopes]
     *                       [--google-client-id]
     *                       [--google-client-secret]
     *                       [--google-oauth-scopes]
     *                       [--ids]
     *                       [--microsoft-account-client-id]
     *                       [--microsoft-account-client-secret]
     *                       [--microsoft-account-oauth-scopes]
     *                       [--name]
     *                       [--resource-group]
     *                       [--runtime-version]
     *                       [--slot]
     *                       [--subscription]
     *                       [--token-refresh-extension-hours]
     *                       [--token-store {false, true}]
     *                       [--twitter-consumer-key]
     *                       [--twitter-consumer-secret]
     * ```
     */
    static update(): az_webapp_auth_update_command_builder {
        return new az_webapp_auth_update_command_builder("az webapp auth update");
    }
}

/** Methods that show, set, add, and remove access restrictions on a webapp. */
export class az_webapp_config_access_restriction {
    /**
     * Adds an Access Restriction to the webapp.
     *
     * Syntax:
     * ```
     * az webapp config access-restriction add --priority
     *                                         [--action {Allow, Deny}]
     *                                         [--description]
     *                                         [--ids]
     *                                         [--ignore-missing-endpoint {false, true}]
     *                                         [--ip-address]
     *                                         [--name]
     *                                         [--resource-group]
     *                                         [--rule-name]
     *                                         [--scm-site {false, true}]
     *                                         [--slot]
     *                                         [--subnet]
     *                                         [--subscription]
     *                                         [--vnet-name]
     * ```
     *
     * @param {string} priority Priority of the access restriction rule.
     */
    static add(priority: string): az_webapp_config_access_restriction_add_command_builder {
        return new az_webapp_config_access_restriction_add_command_builder("az webapp config access-restriction add", priority);
    }

    /**
     * Removes an Access Restriction from the webapp.
     *
     * Syntax:
     * ```
     * az webapp config access-restriction remove [--action {Allow, Deny}]
     *                                            [--ids]
     *                                            [--ip-address]
     *                                            [--name]
     *                                            [--resource-group]
     *                                            [--rule-name]
     *                                            [--scm-site {false, true}]
     *                                            [--slot]
     *                                            [--subnet]
     *                                            [--subscription]
     *                                            [--vnet-name]
     * ```
     */
    static remove(): az_webapp_config_access_restriction_remove_command_builder {
        return new az_webapp_config_access_restriction_remove_command_builder("az webapp config access-restriction remove");
    }

    /**
     * Sets if SCM site is using the same restrictions as the main site.
     *
     * Syntax:
     * ```
     * az webapp config access-restriction set --use-same-restrictions-for-scm-site {false, true}
     *                                         [--ids]
     *                                         [--name]
     *                                         [--resource-group]
     *                                         [--slot]
     *                                         [--subscription]
     * ```
     *
     * @param {boolean} useSameRestrictionsForScmSite Use same access restrictions for scm site.
     */
    static set(useSameRestrictionsForScmSite: boolean): az_webapp_config_access_restriction_set_command_builder {
        return new az_webapp_config_access_restriction_set_command_builder("az webapp config access-restriction set", useSameRestrictionsForScmSite);
    }

    /**
     * Show Access Restriction settings for webapp.
     *
     * Syntax:
     * ```
     * az webapp config access-restriction show [--ids]
     *                                          [--name]
     *                                          [--query-examples]
     *                                          [--resource-group]
     *                                          [--slot]
     *                                          [--subscription]
     * ```
     */
    static show(): az_webapp_config_access_restriction_show_command_builder {
        return new az_webapp_config_access_restriction_show_command_builder("az webapp config access-restriction show");
    }
}

/** Configure web app settings. Updating or removing application settings will cause an app recycle. */
export class az_webapp_config_appsettings {
    /**
     * Delete web app settings.
     *
     * Syntax:
     * ```
     * az webapp config appsettings delete --setting-names
     *                                     [--ids]
     *                                     [--name]
     *                                     [--resource-group]
     *                                     [--slot]
     *                                     [--subscription]
     * ```
     *
     * @param {string} settingNames Space-separated appsettings names.
     */
    static delete(settingNames: string): az_webapp_config_appsettings_delete_command_builder {
        return new az_webapp_config_appsettings_delete_command_builder("az webapp config appsettings delete", settingNames);
    }

    /**
     * Get the details of a web app's settings.
     *
     * Syntax:
     * ```
     * az webapp config appsettings list --name
     *                                   --resource-group
     *                                   [--query-examples]
     *                                   [--slot]
     *                                   [--subscription]
     * ```
     *
     * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, resourceGroup: string): az_webapp_config_appsettings_list_command_builder {
        return new az_webapp_config_appsettings_list_command_builder("az webapp config appsettings list", name, resourceGroup);
    }

    /**
     * Set a web app's settings.
     *
     * Syntax:
     * ```
     * az webapp config appsettings set [--ids]
     *                                  [--name]
     *                                  [--resource-group]
     *                                  [--settings]
     *                                  [--slot]
     *                                  [--slot-settings]
     *                                  [--subscription]
     * ```
     */
    static set(): az_webapp_config_appsettings_set_command_builder {
        return new az_webapp_config_appsettings_set_command_builder("az webapp config appsettings set");
    }
}

/** Manage backups for web apps. */
export class az_webapp_config_backup {
    /**
     * Create a backup of a web app.
     *
     * Syntax:
     * ```
     * az webapp config backup create --container-url
     *                                --resource-group
     *                                --webapp-name
     *                                [--backup-name]
     *                                [--db-connection-string]
     *                                [--db-name]
     *                                [--db-type {LocalMySql, MySql, PostgreSql, SqlAzure}]
     *                                [--slot]
     *                                [--subscription]
     * ```
     *
     * @param {string} containerUrl URL with SAS token to the blob storage container.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} webappName The name of the web app.
     */
    static create(containerUrl: string, resourceGroup: string, webappName: string): az_webapp_config_backup_create_command_builder {
        return new az_webapp_config_backup_create_command_builder("az webapp config backup create", containerUrl, resourceGroup, webappName);
    }

    /**
     * List backups of a web app.
     *
     * Syntax:
     * ```
     * az webapp config backup list --resource-group
     *                              --webapp-name
     *                              [--query-examples]
     *                              [--slot]
     *                              [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} webappName The name of the web app.
     */
    static list(resourceGroup: string, webappName: string): az_webapp_config_backup_list_command_builder {
        return new az_webapp_config_backup_list_command_builder("az webapp config backup list", resourceGroup, webappName);
    }

    /**
     * Restore a web app from a backup.
     *
     * Syntax:
     * ```
     * az webapp config backup restore --backup-name
     *                                 --container-url
     *                                 --resource-group
     *                                 --webapp-name
     *                                 [--db-connection-string]
     *                                 [--db-name]
     *                                 [--db-type {LocalMySql, MySql, PostgreSql, SqlAzure}]
     *                                 [--ignore-hostname-conflict]
     *                                 [--overwrite]
     *                                 [--slot]
     *                                 [--subscription]
     *                                 [--target-name]
     * ```
     *
     * @param {string} backupName Name of the backup to restore.
     * @param {string} containerUrl URL with SAS token to the blob storage container.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} webappName The name of the web app.
     */
    static restore(backupName: string, containerUrl: string, resourceGroup: string, webappName: string): az_webapp_config_backup_restore_command_builder {
        return new az_webapp_config_backup_restore_command_builder("az webapp config backup restore", backupName, containerUrl, resourceGroup, webappName);
    }

    /**
     * Show the backup schedule for a web app.
     *
     * Syntax:
     * ```
     * az webapp config backup show --resource-group
     *                              --webapp-name
     *                              [--query-examples]
     *                              [--slot]
     *                              [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} webappName The name of the web app.
     */
    static show(resourceGroup: string, webappName: string): az_webapp_config_backup_show_command_builder {
        return new az_webapp_config_backup_show_command_builder("az webapp config backup show", resourceGroup, webappName);
    }

    /**
     * Configure a new backup schedule for a web app.
     *
     * Syntax:
     * ```
     * az webapp config backup update --resource-group
     *                                --webapp-name
     *                                [--backup-name]
     *                                [--container-url]
     *                                [--db-connection-string]
     *                                [--db-name]
     *                                [--db-type {LocalMySql, MySql, PostgreSql, SqlAzure}]
     *                                [--frequency]
     *                                [--retain-one {false, true}]
     *                                [--retention]
     *                                [--slot]
     *                                [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} webappName The name of the web app.
     */
    static update(resourceGroup: string, webappName: string): az_webapp_config_backup_update_command_builder {
        return new az_webapp_config_backup_update_command_builder("az webapp config backup update", resourceGroup, webappName);
    }
}

/** Manage a web app's connection strings. */
export class az_webapp_config_connection_string {
    /**
     * Delete a web app's connection strings.
     *
     * Syntax:
     * ```
     * az webapp config connection-string delete --setting-names
     *                                           [--ids]
     *                                           [--name]
     *                                           [--resource-group]
     *                                           [--slot]
     *                                           [--subscription]
     * ```
     *
     * @param {string} settingNames Space-separated connection-string names.
     */
    static delete(settingNames: string): az_webapp_config_connection_string_delete_command_builder {
        return new az_webapp_config_connection_string_delete_command_builder("az webapp config connection-string delete", settingNames);
    }

    /**
     * Get a web app's connection strings.
     *
     * Syntax:
     * ```
     * az webapp config connection-string list --name
     *                                         --resource-group
     *                                         [--query-examples]
     *                                         [--slot]
     *                                         [--subscription]
     * ```
     *
     * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, resourceGroup: string): az_webapp_config_connection_string_list_command_builder {
        return new az_webapp_config_connection_string_list_command_builder("az webapp config connection-string list", name, resourceGroup);
    }

    /**
     * Update a web app's connection strings.
     *
     * Syntax:
     * ```
     * az webapp config connection-string set --connection-string-type {ApiHub, Custom, DocDb, EventHub, MySql, NotificationHub, PostgreSQL, RedisCache, SQLAzure, SQLServer, ServiceBus}
     *                                        [--ids]
     *                                        [--name]
     *                                        [--resource-group]
     *                                        [--settings]
     *                                        [--slot]
     *                                        [--slot-settings]
     *                                        [--subscription]
     * ```
     *
     * @param {'ApiHub' | 'Custom' | 'DocDb' | 'EventHub' | 'MySql' | 'NotificationHub' | 'PostgreSQL' | 'RedisCache' | 'SQLAzure' | 'SQLServer' | 'ServiceBus'} connectionStringType Connection string type.
     */
    static set(connectionStringType: 'ApiHub' | 'Custom' | 'DocDb' | 'EventHub' | 'MySql' | 'NotificationHub' | 'PostgreSQL' | 'RedisCache' | 'SQLAzure' | 'SQLServer' | 'ServiceBus'): az_webapp_config_connection_string_set_command_builder {
        return new az_webapp_config_connection_string_set_command_builder("az webapp config connection-string set", connectionStringType);
    }
}

/** Manage web app container settings. */
export class az_webapp_config_container {
    /**
     * Delete a web app container's settings.
     *
     * Syntax:
     * ```
     * az webapp config container delete [--ids]
     *                                   [--name]
     *                                   [--resource-group]
     *                                   [--slot]
     *                                   [--subscription]
     * ```
     */
    static delete(): az_webapp_config_container_delete_command_builder {
        return new az_webapp_config_container_delete_command_builder("az webapp config container delete");
    }

    /**
     * Set a web app container's settings.
     *
     * Syntax:
     * ```
     * az webapp config container set [--docker-custom-image-name]
     *                                [--docker-registry-server-password]
     *                                [--docker-registry-server-url]
     *                                [--docker-registry-server-user]
     *                                [--enable-app-service-storage {false, true}]
     *                                [--ids]
     *                                [--multicontainer-config-file]
     *                                [--multicontainer-config-type {COMPOSE, KUBE}]
     *                                [--name]
     *                                [--resource-group]
     *                                [--slot]
     *                                [--subscription]
     * ```
     */
    static set(): az_webapp_config_container_set_command_builder {
        return new az_webapp_config_container_set_command_builder("az webapp config container set");
    }

    /**
     * Get details of a web app container's settings.
     *
     * Syntax:
     * ```
     * az webapp config container show [--ids]
     *                                 [--name]
     *                                 [--query-examples]
     *                                 [--resource-group]
     *                                 [--show-multicontainer-config]
     *                                 [--slot]
     *                                 [--subscription]
     * ```
     */
    static show(): az_webapp_config_container_show_command_builder {
        return new az_webapp_config_container_show_command_builder("az webapp config container show");
    }
}

/** Configure hostnames for a web app. */
export class az_webapp_config_hostname {
    /**
     * Bind a hostname to a web app.
     *
     * Syntax:
     * ```
     * az webapp config hostname add [--hostname]
     *                               [--ids]
     *                               [--resource-group]
     *                               [--slot]
     *                               [--subscription]
     *                               [--webapp-name]
     * ```
     */
    static add(): az_webapp_config_hostname_add_command_builder {
        return new az_webapp_config_hostname_add_command_builder("az webapp config hostname add");
    }

    /**
     * Unbind a hostname from a web app.
     *
     * Syntax:
     * ```
     * az webapp config hostname delete [--hostname]
     *                                  [--ids]
     *                                  [--resource-group]
     *                                  [--slot]
     *                                  [--subscription]
     *                                  [--webapp-name]
     * ```
     */
    static delete(): az_webapp_config_hostname_delete_command_builder {
        return new az_webapp_config_hostname_delete_command_builder("az webapp config hostname delete");
    }

    /**
     * Get the external-facing IP address for a web app.
     *
     * Syntax:
     * ```
     * az webapp config hostname get-external-ip [--ids]
     *                                           [--resource-group]
     *                                           [--subscription]
     *                                           [--webapp-name]
     * ```
     */
    static get_external_ip(): az_webapp_config_hostname_get_external_ip_command_builder {
        return new az_webapp_config_hostname_get_external_ip_command_builder("az webapp config hostname get-external-ip");
    }

    /**
     * List all hostname bindings for a web app.
     *
     * Syntax:
     * ```
     * az webapp config hostname list --resource-group
     *                                --webapp-name
     *                                [--query-examples]
     *                                [--slot]
     *                                [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} webappName Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
     */
    static list(resourceGroup: string, webappName: string): az_webapp_config_hostname_list_command_builder {
        return new az_webapp_config_hostname_list_command_builder("az webapp config hostname list", resourceGroup, webappName);
    }
}

/** Manage web app snapshots. */
export class az_webapp_config_snapshot {
    /**
     * List the restorable snapshots for a web app.
     *
     * Syntax:
     * ```
     * az webapp config snapshot list --name
     *                                --resource-group
     *                                [--query-examples]
     *                                [--slot]
     *                                [--subscription]
     * ```
     *
     * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, resourceGroup: string): az_webapp_config_snapshot_list_command_builder {
        return new az_webapp_config_snapshot_list_command_builder("az webapp config snapshot list", name, resourceGroup);
    }

    /**
     * Restore a web app snapshot.
     *
     * Syntax:
     * ```
     * az webapp config snapshot restore --time
     *                                   [--ids]
     *                                   [--name]
     *                                   [--resource-group]
     *                                   [--restore-content-only]
     *                                   [--slot]
     *                                   [--source-name]
     *                                   [--source-resource-group]
     *                                   [--source-slot]
     *                                   [--subscription]
     * ```
     *
     * @param {string} time Timestamp of the snapshot to restore.
     */
    static restore(time: string): az_webapp_config_snapshot_restore_command_builder {
        return new az_webapp_config_snapshot_restore_command_builder("az webapp config snapshot restore", time);
    }
}

/** Configure SSL certificates for web apps. */
export class az_webapp_config_ssl {
    /**
     * Bind an SSL certificate to a web app.
     *
     * Syntax:
     * ```
     * az webapp config ssl bind --certificate-thumbprint
     *                           --ssl-type {IP, SNI}
     *                           [--ids]
     *                           [--name]
     *                           [--resource-group]
     *                           [--slot]
     *                           [--subscription]
     * ```
     *
     * @param {string} certificateThumbprint The ssl cert thumbprint.
     * @param {'IP' | 'SNI'} sslType The ssl cert type.
     */
    static bind(certificateThumbprint: string, sslType: 'IP' | 'SNI'): az_webapp_config_ssl_bind_command_builder {
        return new az_webapp_config_ssl_bind_command_builder("az webapp config ssl bind", certificateThumbprint, sslType);
    }

    /**
     * Create a Managed Certificate for a hostname in a webapp app.
     *
     * Syntax:
     * ```
     * az webapp config ssl create --hostname
     *                             --name
     *                             --resource-group
     *                             [--slot]
     *                             [--subscription]
     * ```
     *
     * @param {string} hostname The custom domain name.
     * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(hostname: string, name: string, resourceGroup: string): az_webapp_config_ssl_create_command_builder {
        return new az_webapp_config_ssl_create_command_builder("az webapp config ssl create", hostname, name, resourceGroup);
    }

    /**
     * Delete an SSL certificate from a web app.
     *
     * Syntax:
     * ```
     * az webapp config ssl delete --certificate-thumbprint
     *                             --resource-group
     *                             [--subscription]
     * ```
     *
     * @param {string} certificateThumbprint The ssl cert thumbprint.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(certificateThumbprint: string, resourceGroup: string): az_webapp_config_ssl_delete_command_builder {
        return new az_webapp_config_ssl_delete_command_builder("az webapp config ssl delete", certificateThumbprint, resourceGroup);
    }

    /**
     * Import an SSL certificate to a web app from Key Vault.
     *
     * Syntax:
     * ```
     * az webapp config ssl import --key-vault
     *                             --key-vault-certificate-name
     *                             [--ids]
     *                             [--name]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     *
     * @param {string} keyVault The name or resource ID of the Key Vault.
     * @param {string} keyVaultCertificateName The name of the certificate in Key Vault.
     */
    static import(keyVault: string, keyVaultCertificateName: string): az_webapp_config_ssl_import_command_builder {
        return new az_webapp_config_ssl_import_command_builder("az webapp config ssl import", keyVault, keyVaultCertificateName);
    }

    /**
     * List SSL certificates for a web app.
     *
     * Syntax:
     * ```
     * az webapp config ssl list --resource-group
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(resourceGroup: string): az_webapp_config_ssl_list_command_builder {
        return new az_webapp_config_ssl_list_command_builder("az webapp config ssl list", resourceGroup);
    }

    /**
     * Unbind an SSL certificate from a web app.
     *
     * Syntax:
     * ```
     * az webapp config ssl unbind --certificate-thumbprint
     *                             [--ids]
     *                             [--name]
     *                             [--resource-group]
     *                             [--slot]
     *                             [--subscription]
     * ```
     *
     * @param {string} certificateThumbprint The ssl cert thumbprint.
     */
    static unbind(certificateThumbprint: string): az_webapp_config_ssl_unbind_command_builder {
        return new az_webapp_config_ssl_unbind_command_builder("az webapp config ssl unbind", certificateThumbprint);
    }

    /**
     * Upload an SSL certificate to a web app.
     *
     * Syntax:
     * ```
     * az webapp config ssl upload --certificate-file
     *                             --certificate-password
     *                             [--ids]
     *                             [--name]
     *                             [--resource-group]
     *                             [--slot]
     *                             [--subscription]
     * ```
     *
     * @param {string} certificateFile The filepath for the .pfx file.
     * @param {string} certificatePassword The ssl cert password.
     */
    static upload(certificateFile: string, certificatePassword: string): az_webapp_config_ssl_upload_command_builder {
        return new az_webapp_config_ssl_upload_command_builder("az webapp config ssl upload", certificateFile, certificatePassword);
    }
}

/** Manage a web app's Azure storage account configurations. (Linux Web Apps and Windows Containers Web Apps Only). */
export class az_webapp_config_storage_account {
    /**
     * Add an Azure storage account configuration to a web app. (Linux Web Apps and Windows Containers Web Apps Only).
     *
     * Syntax:
     * ```
     * az webapp config storage-account add --access-key
     *                                      --account-name
     *                                      --custom-id
     *                                      --share-name
     *                                      --storage-type {AzureBlob, AzureFiles}
     *                                      [--ids]
     *                                      [--mount-path]
     *                                      [--name]
     *                                      [--resource-group]
     *                                      [--slot]
     *                                      [--slot-setting]
     *                                      [--subscription]
     * ```
     *
     * @param {string} accessKey Storage account access key.
     * @param {string} accountName Storage account name.
     * @param {string} customId Custom identifier.
     * @param {string} shareName Share name (Azure Files) or container name (Azure Blob Storage).
     * @param {'AzureBlob' | 'AzureFiles'} storageType Storage type.
     */
    static add(accessKey: string, accountName: string, customId: string, shareName: string, storageType: 'AzureBlob' | 'AzureFiles'): az_webapp_config_storage_account_add_command_builder {
        return new az_webapp_config_storage_account_add_command_builder("az webapp config storage-account add", accessKey, accountName, customId, shareName, storageType);
    }

    /**
     * Delete a web app's Azure storage account configuration. (Linux Web Apps and Windows Containers Web Apps Only).
     *
     * Syntax:
     * ```
     * az webapp config storage-account delete --custom-id
     *                                         [--ids]
     *                                         [--name]
     *                                         [--resource-group]
     *                                         [--slot]
     *                                         [--subscription]
     * ```
     *
     * @param {string} customId Custom identifier.
     */
    static delete(customId: string): az_webapp_config_storage_account_delete_command_builder {
        return new az_webapp_config_storage_account_delete_command_builder("az webapp config storage-account delete", customId);
    }

    /**
     * Get a web app's Azure storage account configurations. (Linux Web Apps and Windows Containers Web Apps Only).
     *
     * Syntax:
     * ```
     * az webapp config storage-account list --name
     *                                       --resource-group
     *                                       [--query-examples]
     *                                       [--slot]
     *                                       [--subscription]
     * ```
     *
     * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, resourceGroup: string): az_webapp_config_storage_account_list_command_builder {
        return new az_webapp_config_storage_account_list_command_builder("az webapp config storage-account list", name, resourceGroup);
    }

    /**
     * Update an existing Azure storage account configuration on a web app. (Linux Web Apps and Windows Containers Web Apps Only).
     *
     * Syntax:
     * ```
     * az webapp config storage-account update --custom-id
     *                                         [--access-key]
     *                                         [--account-name]
     *                                         [--ids]
     *                                         [--mount-path]
     *                                         [--name]
     *                                         [--resource-group]
     *                                         [--share-name]
     *                                         [--slot]
     *                                         [--slot-setting]
     *                                         [--storage-type {AzureBlob, AzureFiles}]
     *                                         [--subscription]
     * ```
     *
     * @param {string} customId Custom identifier.
     */
    static update(customId: string): az_webapp_config_storage_account_update_command_builder {
        return new az_webapp_config_storage_account_update_command_builder("az webapp config storage-account update", customId);
    }
}

/** Configure a web app. */
export class az_webapp_config {
    /**
     * Set a web app's configuration.
     *
     * Syntax:
     * ```
     * az webapp config set [--always-on {false, true}]
     *                      [--auto-heal-enabled {false, true}]
     *                      [--ftps-state {AllAllowed, Disabled, FtpsOnly}]
     *                      [--generic-configurations]
     *                      [--http20-enabled {false, true}]
     *                      [--ids]
     *                      [--java-container]
     *                      [--java-container-version]
     *                      [--java-version]
     *                      [--linux-fx-version]
     *                      [--min-tls-version]
     *                      [--name]
     *                      [--net-framework-version]
     *                      [--number-of-workers]
     *                      [--php-version]
     *                      [--prewarmed-instance-count]
     *                      [--python-version]
     *                      [--remote-debugging-enabled {false, true}]
     *                      [--resource-group]
     *                      [--slot]
     *                      [--startup-file]
     *                      [--subscription]
     *                      [--use-32bit-worker-process {false, true}]
     *                      [--web-sockets-enabled {false, true}]
     *                      [--windows-fx-version]
     * ```
     */
    static set(): az_webapp_config_set_command_builder {
        return new az_webapp_config_set_command_builder("az webapp config set");
    }

    /**
     * Get the details of a web app's configuration.
     *
     * Syntax:
     * ```
     * az webapp config show [--ids]
     *                       [--name]
     *                       [--query-examples]
     *                       [--resource-group]
     *                       [--slot]
     *                       [--subscription]
     * ```
     */
    static show(): az_webapp_config_show_command_builder {
        return new az_webapp_config_show_command_builder("az webapp config show");
    }
}

/** Manage Cross-Origin Resource Sharing (CORS). */
export class az_webapp_cors {
    /**
     * Add allowed origins.
     *
     * Syntax:
     * ```
     * az webapp cors add --allowed-origins
     *                    [--ids]
     *                    [--name]
     *                    [--resource-group]
     *                    [--slot]
     *                    [--subscription]
     * ```
     *
     * @param {string} allowedOrigins Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*" and remove all other origins from the list.
     */
    static add(allowedOrigins: string): az_webapp_cors_add_command_builder {
        return new az_webapp_cors_add_command_builder("az webapp cors add", allowedOrigins);
    }

    /**
     * Remove allowed origins.
     *
     * Syntax:
     * ```
     * az webapp cors remove --allowed-origins
     *                       [--ids]
     *                       [--name]
     *                       [--resource-group]
     *                       [--slot]
     *                       [--subscription]
     * ```
     *
     * @param {string} allowedOrigins Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*" and remove all other origins from the list.
     */
    static remove(allowedOrigins: string): az_webapp_cors_remove_command_builder {
        return new az_webapp_cors_remove_command_builder("az webapp cors remove", allowedOrigins);
    }

    /**
     * Show allowed origins.
     *
     * Syntax:
     * ```
     * az webapp cors show [--ids]
     *                     [--name]
     *                     [--query-examples]
     *                     [--resource-group]
     *                     [--slot]
     *                     [--subscription]
     * ```
     */
    static show(): az_webapp_cors_show_command_builder {
        return new az_webapp_cors_show_command_builder("az webapp cors show");
    }
}

/** Manage deleted web apps. */
export class az_webapp_deleted {
    /**
     * List web apps that have been deleted.
     *
     * Syntax:
     * ```
     * az webapp deleted list [--name]
     *                        [--query-examples]
     *                        [--resource-group]
     *                        [--slot]
     *                        [--subscription]
     * ```
     */
    static list(): az_webapp_deleted_list_command_builder {
        return new az_webapp_deleted_list_command_builder("az webapp deleted list");
    }

    /**
     * Restore a deleted web app.
     *
     * Syntax:
     * ```
     * az webapp deleted restore --deleted-id
     *                           [--ids]
     *                           [--name]
     *                           [--resource-group]
     *                           [--restore-content-only]
     *                           [--slot]
     *                           [--subscription]
     * ```
     *
     * @param {string} deletedId Resource ID of the deleted web app.
     */
    static restore(deletedId: string): az_webapp_deleted_restore_command_builder {
        return new az_webapp_deleted_restore_command_builder("az webapp deleted restore", deletedId);
    }
}

/** Manage container-based continuous deployment. */
export class az_webapp_deployment_container {
    /**
     * Configure continuous deployment via containers.
     *
     * Syntax:
     * ```
     * az webapp deployment container config --enable-cd {false, true}
     *                                       [--ids]
     *                                       [--name]
     *                                       [--resource-group]
     *                                       [--slot]
     *                                       [--subscription]
     * ```
     *
     * @param {boolean} enableCd Enable/disable continuous deployment.
     */
    static config(enableCd: boolean): az_webapp_deployment_container_config_command_builder {
        return new az_webapp_deployment_container_config_command_builder("az webapp deployment container config", enableCd);
    }

    /**
     * Get the URL which can be used to configure webhooks for continuous deployment.
     *
     * Syntax:
     * ```
     * az webapp deployment container show-cd-url [--ids]
     *                                            [--name]
     *                                            [--resource-group]
     *                                            [--slot]
     *                                            [--subscription]
     * ```
     */
    static show_cd_url(): az_webapp_deployment_container_show_cd_url_command_builder {
        return new az_webapp_deployment_container_show_cd_url_command_builder("az webapp deployment container show-cd-url");
    }
}

/** Manage web app deployment slots. */
export class az_webapp_deployment_slot {
    /**
     * Configure deployment slot auto swap.
     *
     * Syntax:
     * ```
     * az webapp deployment slot auto-swap --slot
     *                                     [--auto-swap-slot]
     *                                     [--disable]
     *                                     [--ids]
     *                                     [--name]
     *                                     [--resource-group]
     *                                     [--subscription]
     * ```
     *
     * @param {string} slot The name of the slot.
     */
    static auto_swap(slot: string): az_webapp_deployment_slot_auto_swap_command_builder {
        return new az_webapp_deployment_slot_auto_swap_command_builder("az webapp deployment slot auto-swap", slot);
    }

    /**
     * Create a deployment slot.
     *
     * Syntax:
     * ```
     * az webapp deployment slot create --name
     *                                  --resource-group
     *                                  --slot
     *                                  [--configuration-source]
     *                                  [--subscription]
     * ```
     *
     * @param {string} name Name of the webapp.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} slot The name of the slot.
     */
    static create(name: string, resourceGroup: string, slot: string): az_webapp_deployment_slot_create_command_builder {
        return new az_webapp_deployment_slot_create_command_builder("az webapp deployment slot create", name, resourceGroup, slot);
    }

    /**
     * Delete a deployment slot.
     *
     * Syntax:
     * ```
     * az webapp deployment slot delete --slot
     *                                  [--ids]
     *                                  [--name]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     *
     * @param {string} slot The name of the slot.
     */
    static delete(slot: string): az_webapp_deployment_slot_delete_command_builder {
        return new az_webapp_deployment_slot_delete_command_builder("az webapp deployment slot delete", slot);
    }

    /**
     * List all deployment slots.
     *
     * Syntax:
     * ```
     * az webapp deployment slot list [--ids]
     *                                [--name]
     *                                [--query-examples]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     */
    static list(): az_webapp_deployment_slot_list_command_builder {
        return new az_webapp_deployment_slot_list_command_builder("az webapp deployment slot list");
    }

    /**
     * Change deployment slots for a web app.
     *
     * Syntax:
     * ```
     * az webapp deployment slot swap --slot
     *                                [--action {preview, reset, swap}]
     *                                [--ids]
     *                                [--name]
     *                                [--resource-group]
     *                                [--subscription]
     *                                [--target-slot]
     * ```
     *
     * @param {string} slot The name of the slot.
     */
    static swap(slot: string): az_webapp_deployment_slot_swap_command_builder {
        return new az_webapp_deployment_slot_swap_command_builder("az webapp deployment slot swap", slot);
    }
}

/** Manage web app deployment via source control. */
export class az_webapp_deployment_source {
    /**
     * Manage deployment from git or Mercurial repositories.
     *
     * Syntax:
     * ```
     * az webapp deployment source config --repo-url
     *                                    [--app-working-dir]
     *                                    [--branch]
     *                                    [--cd-account-create]
     *                                    [--cd-app-type {AspNet, AspNetCore, NodeJS, PHP, Python}]
     *                                    [--cd-project-url]
     *                                    [--git-token]
     *                                    [--ids]
     *                                    [--manual-integration]
     *                                    [--name]
     *                                    [--nodejs-task-runner {Grunt, Gulp, None}]
     *                                    [--private-repo-password]
     *                                    [--private-repo-username]
     *                                    [--python-framework {Bottle, Django, Flask}]
     *                                    [--python-version {Python 2.7.12 x64, Python 2.7.12 x86, Python 2.7.13 x64, Python 2.7.13 x86, Python 3.5.3 x64, Python 3.5.3 x86, Python 3.6.0 x64, Python 3.6.0 x86, Python 3.6.1 x86, Python 3.6.2 x64}]
     *                                    [--repository-type {externalgit, git, github, localgit, mercurial, vsts}]
     *                                    [--resource-group]
     *                                    [--slot]
     *                                    [--slot-swap]
     *                                    [--subscription]
     *                                    [--test]
     * ```
     *
     * @param {string} repoUrl Repository url to pull the latest source from, e.g. <a href="https://github.com/foo/foo-web">https://github.com/foo/foo-web</a>.
     */
    static config(repoUrl: string): az_webapp_deployment_source_config_command_builder {
        return new az_webapp_deployment_source_config_command_builder("az webapp deployment source config", repoUrl);
    }

    /**
     * Get a URL for a git repository endpoint to clone and push to for web app deployment.
     *
     * Syntax:
     * ```
     * az webapp deployment source config-local-git [--ids]
     *                                              [--name]
     *                                              [--resource-group]
     *                                              [--slot]
     *                                              [--subscription]
     * ```
     */
    static config_local_git(): az_webapp_deployment_source_config_local_git_command_builder {
        return new az_webapp_deployment_source_config_local_git_command_builder("az webapp deployment source config-local-git");
    }

    /**
     * Perform deployment using the kudu zip push deployment for a web app.
     *
     * Syntax:
     * ```
     * az webapp deployment source config-zip --src
     *                                        [--ids]
     *                                        [--name]
     *                                        [--resource-group]
     *                                        [--slot]
     *                                        [--subscription]
     *                                        [--timeout]
     * ```
     *
     * @param {string} src A zip file path for deployment.
     */
    static config_zip(src: string): az_webapp_deployment_source_config_zip_command_builder {
        return new az_webapp_deployment_source_config_zip_command_builder("az webapp deployment source config-zip", src);
    }

    /**
     * Delete a source control deployment configuration.
     *
     * Syntax:
     * ```
     * az webapp deployment source delete [--ids]
     *                                    [--name]
     *                                    [--resource-group]
     *                                    [--slot]
     *                                    [--subscription]
     * ```
     */
    static delete(): az_webapp_deployment_source_delete_command_builder {
        return new az_webapp_deployment_source_delete_command_builder("az webapp deployment source delete");
    }

    /**
     * Get the details of a source control deployment configuration.
     *
     * Syntax:
     * ```
     * az webapp deployment source show [--ids]
     *                                  [--name]
     *                                  [--query-examples]
     *                                  [--resource-group]
     *                                  [--slot]
     *                                  [--subscription]
     * ```
     */
    static show(): az_webapp_deployment_source_show_command_builder {
        return new az_webapp_deployment_source_show_command_builder("az webapp deployment source show");
    }

    /**
     * Synchronize from the repository. Only needed under manual integration mode.
     *
     * Syntax:
     * ```
     * az webapp deployment source sync [--ids]
     *                                  [--name]
     *                                  [--resource-group]
     *                                  [--slot]
     *                                  [--subscription]
     * ```
     */
    static sync(): az_webapp_deployment_source_sync_command_builder {
        return new az_webapp_deployment_source_sync_command_builder("az webapp deployment source sync");
    }

    /**
     * Update source control token cached in Azure app service.
     *
     * Syntax:
     * ```
     * az webapp deployment source update-token [--git-token]
     *                                          [--subscription]
     * ```
     */
    static update_token(): az_webapp_deployment_source_update_token_command_builder {
        return new az_webapp_deployment_source_update_token_command_builder("az webapp deployment source update-token");
    }
}

/** Manage user credentials for deployment. */
export class az_webapp_deployment_user {
    /**
     * Update deployment credentials.
     *
     * Syntax:
     * ```
     * az webapp deployment user set --user-name
     *                               [--password]
     *                               [--subscription]
     * ```
     *
     * @param {string} userName User name.
     */
    static set(userName: string): az_webapp_deployment_user_set_command_builder {
        return new az_webapp_deployment_user_set_command_builder("az webapp deployment user set", userName);
    }

    /**
     * Get deployment publishing user.
     *
     * Syntax:
     * ```
     * az webapp deployment user show [--query-examples]
     *                                [--subscription]
     * ```
     */
    static show(): az_webapp_deployment_user_show_command_builder {
        return new az_webapp_deployment_user_show_command_builder("az webapp deployment user show");
    }
}

/** Manage web app deployments. */
export class az_webapp_deployment {
    /**
     * Get the details for available web app publishing credentials.
     *
     * Syntax:
     * ```
     * az webapp deployment list-publishing-credentials [--ids]
     *                                                  [--name]
     *                                                  [--resource-group]
     *                                                  [--slot]
     *                                                  [--subscription]
     * ```
     */
    static list_publishing_credentials(): az_webapp_deployment_list_publishing_credentials_command_builder {
        return new az_webapp_deployment_list_publishing_credentials_command_builder("az webapp deployment list-publishing-credentials");
    }

    /**
     * Get the details for available web app deployment profiles.
     *
     * Syntax:
     * ```
     * az webapp deployment list-publishing-profiles [--ids]
     *                                               [--name]
     *                                               [--resource-group]
     *                                               [--slot]
     *                                               [--subscription]
     *                                               [--xml]
     * ```
     */
    static list_publishing_profiles(): az_webapp_deployment_list_publishing_profiles_command_builder {
        return new az_webapp_deployment_list_publishing_profiles_command_builder("az webapp deployment list-publishing-profiles");
    }
}

/** Methods that list, add and remove hybrid-connections from webapps. */
export class az_webapp_hybrid_connection {
    /**
     * Add a hybrid-connection to a webapp.
     *
     * Syntax:
     * ```
     * az webapp hybrid-connection add --hybrid-connection
     *                                 --name
     *                                 --namespace
     *                                 --resource-group
     *                                 [--slot]
     *                                 [--subscription]
     * ```
     *
     * @param {string} hybridConnection Hybrid connection name.
     * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
     * @param {string} namespace Hybrid connection namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static add(hybridConnection: string, name: string, namespace: string, resourceGroup: string): az_webapp_hybrid_connection_add_command_builder {
        return new az_webapp_hybrid_connection_add_command_builder("az webapp hybrid-connection add", hybridConnection, name, namespace, resourceGroup);
    }

    /**
     * List the hybrid-connections on a webapp.
     *
     * Syntax:
     * ```
     * az webapp hybrid-connection list --name
     *                                  --resource-group
     *                                  [--query-examples]
     *                                  [--slot]
     *                                  [--subscription]
     * ```
     *
     * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, resourceGroup: string): az_webapp_hybrid_connection_list_command_builder {
        return new az_webapp_hybrid_connection_list_command_builder("az webapp hybrid-connection list", name, resourceGroup);
    }

    /**
     * Remove a hybrid-connection from a webapp.
     *
     * Syntax:
     * ```
     * az webapp hybrid-connection remove --hybrid-connection
     *                                    --name
     *                                    --namespace
     *                                    --resource-group
     *                                    [--slot]
     *                                    [--subscription]
     * ```
     *
     * @param {string} hybridConnection Hybrid connection name.
     * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
     * @param {string} namespace Hybrid connection namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static remove(hybridConnection: string, name: string, namespace: string, resourceGroup: string): az_webapp_hybrid_connection_remove_command_builder {
        return new az_webapp_hybrid_connection_remove_command_builder("az webapp hybrid-connection remove", hybridConnection, name, namespace, resourceGroup);
    }
}

/** Manage web app's managed service identity. */
export class az_webapp_identity {
    /**
     * Assign managed service identity to the web app.
     *
     * Syntax:
     * ```
     * az webapp identity assign [--identities]
     *                           [--ids]
     *                           [--name]
     *                           [--resource-group]
     *                           [--role]
     *                           [--scope]
     *                           [--slot]
     *                           [--subscription]
     * ```
     */
    static assign(): az_webapp_identity_assign_command_builder {
        return new az_webapp_identity_assign_command_builder("az webapp identity assign");
    }

    /**
     * Disable web app's managed service identity.
     *
     * Syntax:
     * ```
     * az webapp identity remove [--identities]
     *                           [--ids]
     *                           [--name]
     *                           [--resource-group]
     *                           [--slot]
     *                           [--subscription]
     * ```
     */
    static remove(): az_webapp_identity_remove_command_builder {
        return new az_webapp_identity_remove_command_builder("az webapp identity remove");
    }

    /**
     * Display web app's managed service identity.
     *
     * Syntax:
     * ```
     * az webapp identity show [--ids]
     *                         [--name]
     *                         [--query-examples]
     *                         [--resource-group]
     *                         [--slot]
     *                         [--subscription]
     * ```
     */
    static show(): az_webapp_identity_show_command_builder {
        return new az_webapp_identity_show_command_builder("az webapp identity show");
    }
}

/** Manage web app deployment logs. */
export class az_webapp_log_deployment {
    /**
     * List deployments associated with web app.
     *
     * Syntax:
     * ```
     * az webapp log deployment list --name
     *                               --resource-group
     *                               [--query-examples]
     *                               [--slot]
     *                               [--subscription]
     * ```
     *
     * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, resourceGroup: string): az_webapp_log_deployment_list_command_builder {
        return new az_webapp_log_deployment_list_command_builder("az webapp log deployment list", name, resourceGroup);
    }

    /**
     * Show deployment logs of the latest deployment, or a specific deployment if deployment-id is specified.
     *
     * Syntax:
     * ```
     * az webapp log deployment show --name
     *                               --resource-group
     *                               [--deployment-id]
     *                               [--query-examples]
     *                               [--slot]
     *                               [--subscription]
     * ```
     *
     * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static show(name: string, resourceGroup: string): az_webapp_log_deployment_show_command_builder {
        return new az_webapp_log_deployment_show_command_builder("az webapp log deployment show", name, resourceGroup);
    }
}

/** Manage web app logs. */
export class az_webapp_log {
    /**
     * Configure logging for a web app.
     *
     * Syntax:
     * ```
     * az webapp log config [--application-logging {azureblobstorage, filesystem, off}]
     *                      [--detailed-error-messages {false, true}]
     *                      [--docker-container-logging {filesystem, off}]
     *                      [--failed-request-tracing {false, true}]
     *                      [--ids]
     *                      [--level {error, information, verbose, warning}]
     *                      [--name]
     *                      [--resource-group]
     *                      [--slot]
     *                      [--subscription]
     *                      [--web-server-logging {filesystem, off}]
     * ```
     */
    static config(): az_webapp_log_config_command_builder {
        return new az_webapp_log_config_command_builder("az webapp log config");
    }

    /**
     * Download a web app's log history as a zip file.
     *
     * Syntax:
     * ```
     * az webapp log download [--ids]
     *                        [--log-file]
     *                        [--name]
     *                        [--resource-group]
     *                        [--slot]
     *                        [--subscription]
     * ```
     */
    static download(): az_webapp_log_download_command_builder {
        return new az_webapp_log_download_command_builder("az webapp log download");
    }

    /**
     * Get the details of a web app's logging configuration.
     *
     * Syntax:
     * ```
     * az webapp log show [--ids]
     *                    [--name]
     *                    [--query-examples]
     *                    [--resource-group]
     *                    [--slot]
     *                    [--subscription]
     * ```
     */
    static show(): az_webapp_log_show_command_builder {
        return new az_webapp_log_show_command_builder("az webapp log show");
    }

    /**
     * Start live log tracing for a web app.
     *
     * Syntax:
     * ```
     * az webapp log tail [--ids]
     *                    [--name]
     *                    [--provider]
     *                    [--resource-group]
     *                    [--slot]
     *                    [--subscription]
     * ```
     */
    static tail(): az_webapp_log_tail_command_builder {
        return new az_webapp_log_tail_command_builder("az webapp log tail");
    }
}

/** Manage traffic routing for web apps. */
export class az_webapp_traffic_routing {
    /**
     * Clear the routing rules and send all traffic to production.
     *
     * Syntax:
     * ```
     * az webapp traffic-routing clear [--ids]
     *                                 [--name]
     *                                 [--resource-group]
     *                                 [--subscription]
     * ```
     */
    static clear(): az_webapp_traffic_routing_clear_command_builder {
        return new az_webapp_traffic_routing_clear_command_builder("az webapp traffic-routing clear");
    }

    /**
     * Configure routing traffic to deployment slots.
     *
     * Syntax:
     * ```
     * az webapp traffic-routing set --distribution
     *                               [--ids]
     *                               [--name]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     *
     * @param {string} distribution Space-separated slot routings in a format of `<slot-name>=<percentage>` e.g. staging=50. Unused traffic percentage will go to the Production slot.
     */
    static set(distribution: string): az_webapp_traffic_routing_set_command_builder {
        return new az_webapp_traffic_routing_set_command_builder("az webapp traffic-routing set", distribution);
    }

    /**
     * Display the current distribution of traffic across slots.
     *
     * Syntax:
     * ```
     * az webapp traffic-routing show [--ids]
     *                                [--name]
     *                                [--query-examples]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     */
    static show(): az_webapp_traffic_routing_show_command_builder {
        return new az_webapp_traffic_routing_show_command_builder("az webapp traffic-routing show");
    }
}

/** Methods that list, add, and remove virtual network integrations from a webapp. */
export class az_webapp_vnet_integration {
    /**
     * Add a regional virtual network integration to a webapp.
     *
     * Syntax:
     * ```
     * az webapp vnet-integration add --name
     *                                --resource-group
     *                                --subnet
     *                                --vnet
     *                                [--slot]
     *                                [--subscription]
     * ```
     *
     * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} subnet The name of the subnet.
     * @param {string} vnet The name or resource ID of the Vnet.
     */
    static add(name: string, resourceGroup: string, subnet: string, vnet: string): az_webapp_vnet_integration_add_command_builder {
        return new az_webapp_vnet_integration_add_command_builder("az webapp vnet-integration add", name, resourceGroup, subnet, vnet);
    }

    /**
     * List the virtual network integrations on a webapp.
     *
     * Syntax:
     * ```
     * az webapp vnet-integration list --name
     *                                 --resource-group
     *                                 [--query-examples]
     *                                 [--slot]
     *                                 [--subscription]
     * ```
     *
     * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, resourceGroup: string): az_webapp_vnet_integration_list_command_builder {
        return new az_webapp_vnet_integration_list_command_builder("az webapp vnet-integration list", name, resourceGroup);
    }

    /**
     * Remove a regional virtual network integration from webapp.
     *
     * Syntax:
     * ```
     * az webapp vnet-integration remove --name
     *                                   --resource-group
     *                                   [--slot]
     *                                   [--subscription]
     * ```
     *
     * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static remove(name: string, resourceGroup: string): az_webapp_vnet_integration_remove_command_builder {
        return new az_webapp_vnet_integration_remove_command_builder("az webapp vnet-integration remove", name, resourceGroup);
    }
}

/** Allows management operations of continuous webjobs on a web app. */
export class az_webapp_webjob_continuous {
    /**
     * List all continuous webjobs on a selected web app.
     *
     * Syntax:
     * ```
     * az webapp webjob continuous list --name
     *                                  --resource-group
     *                                  [--query-examples]
     *                                  [--slot]
     *                                  [--subscription]
     * ```
     *
     * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, resourceGroup: string): az_webapp_webjob_continuous_list_command_builder {
        return new az_webapp_webjob_continuous_list_command_builder("az webapp webjob continuous list", name, resourceGroup);
    }

    /**
     * Delete a specific continuous webjob.
     *
     * Syntax:
     * ```
     * az webapp webjob continuous remove --webjob-name
     *                                    [--ids]
     *                                    [--name]
     *                                    [--resource-group]
     *                                    [--slot]
     *                                    [--subscription]
     * ```
     *
     * @param {string} webjobName The name of the webjob.
     */
    static remove(webjobName: string): az_webapp_webjob_continuous_remove_command_builder {
        return new az_webapp_webjob_continuous_remove_command_builder("az webapp webjob continuous remove", webjobName);
    }

    /**
     * Start a specific continuous webjob on a selected web app.
     *
     * Syntax:
     * ```
     * az webapp webjob continuous start --webjob-name
     *                                   [--ids]
     *                                   [--name]
     *                                   [--resource-group]
     *                                   [--slot]
     *                                   [--subscription]
     * ```
     *
     * @param {string} webjobName The name of the webjob.
     */
    static start(webjobName: string): az_webapp_webjob_continuous_start_command_builder {
        return new az_webapp_webjob_continuous_start_command_builder("az webapp webjob continuous start", webjobName);
    }

    /**
     * Stop a specific continuous webjob.
     *
     * Syntax:
     * ```
     * az webapp webjob continuous stop --webjob-name
     *                                  [--ids]
     *                                  [--name]
     *                                  [--resource-group]
     *                                  [--slot]
     *                                  [--subscription]
     * ```
     *
     * @param {string} webjobName The name of the webjob.
     */
    static stop(webjobName: string): az_webapp_webjob_continuous_stop_command_builder {
        return new az_webapp_webjob_continuous_stop_command_builder("az webapp webjob continuous stop", webjobName);
    }
}

/** Allows management operations of triggered webjobs on a web app. */
export class az_webapp_webjob_triggered {
    /**
     * List all triggered webjobs hosted on a web app.
     *
     * Syntax:
     * ```
     * az webapp webjob triggered list --name
     *                                 --resource-group
     *                                 [--query-examples]
     *                                 [--slot]
     *                                 [--subscription]
     * ```
     *
     * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, resourceGroup: string): az_webapp_webjob_triggered_list_command_builder {
        return new az_webapp_webjob_triggered_list_command_builder("az webapp webjob triggered list", name, resourceGroup);
    }

    /**
     * Get history of a specific triggered webjob hosted on a web app.
     *
     * Syntax:
     * ```
     * az webapp webjob triggered log --webjob-name
     *                                [--ids]
     *                                [--name]
     *                                [--resource-group]
     *                                [--slot]
     *                                [--subscription]
     * ```
     *
     * @param {string} webjobName The name of the webjob.
     */
    static log(webjobName: string): az_webapp_webjob_triggered_log_command_builder {
        return new az_webapp_webjob_triggered_log_command_builder("az webapp webjob triggered log", webjobName);
    }

    /**
     * Delete a specific triggered webjob hosted on a web app.
     *
     * Syntax:
     * ```
     * az webapp webjob triggered remove --webjob-name
     *                                   [--ids]
     *                                   [--name]
     *                                   [--resource-group]
     *                                   [--slot]
     *                                   [--subscription]
     * ```
     *
     * @param {string} webjobName The name of the webjob.
     */
    static remove(webjobName: string): az_webapp_webjob_triggered_remove_command_builder {
        return new az_webapp_webjob_triggered_remove_command_builder("az webapp webjob triggered remove", webjobName);
    }

    /**
     * Run a specific triggered webjob hosted on a web app.
     *
     * Syntax:
     * ```
     * az webapp webjob triggered run --webjob-name
     *                                [--ids]
     *                                [--name]
     *                                [--resource-group]
     *                                [--slot]
     *                                [--subscription]
     * ```
     *
     * @param {string} webjobName The name of the webjob.
     */
    static run(webjobName: string): az_webapp_webjob_triggered_run_command_builder {
        return new az_webapp_webjob_triggered_run_command_builder("az webapp webjob triggered run", webjobName);
    }
}

/** Allows management operations for webjobs on a web app. */
export class az_webapp_webjob {
}

/** Manage web apps. */
export class az_webapp {
    /**
     * Open a web app in a browser.
     *
     * Syntax:
     * ```
     * az webapp browse [--ids]
     *                  [--logs]
     *                  [--name]
     *                  [--resource-group]
     *                  [--slot]
     *                  [--subscription]
     * ```
     */
    static browse(): az_webapp_browse_command_builder {
        return new az_webapp_browse_command_builder("az webapp browse");
    }

    /**
     * Create a web app.
     *
     * Syntax:
     * ```
     * az webapp create --name
     *                  --plan
     *                  --resource-group
     *                  [--assign-identity]
     *                  [--deployment-container-image-name]
     *                  [--deployment-local-git]
     *                  [--deployment-source-branch]
     *                  [--deployment-source-url]
     *                  [--docker-registry-server-password]
     *                  [--docker-registry-server-user]
     *                  [--multicontainer-config-file]
     *                  [--multicontainer-config-type {COMPOSE, KUBE}]
     *                  [--role]
     *                  [--runtime]
     *                  [--scope]
     *                  [--startup-file]
     *                  [--subscription]
     *                  [--tags]
     * ```
     *
     * @param {string} name Name of the new web app.
     * @param {string} plan Name or resource id of the app service plan. Use 'appservice plan create' to get one.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(name: string, plan: string, resourceGroup: string): az_webapp_create_command_builder {
        return new az_webapp_create_command_builder("az webapp create", name, plan, resourceGroup);
    }

    /**
     * Creates a remote connection using a tcp tunnel to your web app.
     *
     * Syntax:
     * ```
     * az webapp create-remote-connection [--ids]
     *                                    [--instance]
     *                                    [--name]
     *                                    [--port]
     *                                    [--resource-group]
     *                                    [--slot]
     *                                    [--subscription]
     *                                    [--timeout]
     * ```
     */
    static create_remote_connection(): az_webapp_create_remote_connection_command_builder {
        return new az_webapp_create_remote_connection_command_builder("az webapp create-remote-connection");
    }

    /**
     * Delete a web app.
     *
     * Syntax:
     * ```
     * az webapp delete [--ids]
     *                  [--keep-dns-registration]
     *                  [--keep-empty-plan]
     *                  [--keep-metrics]
     *                  [--name]
     *                  [--resource-group]
     *                  [--slot]
     *                  [--subscription]
     * ```
     */
    static delete(): az_webapp_delete_command_builder {
        return new az_webapp_delete_command_builder("az webapp delete");
    }

    /**
     * List web apps.
     *
     * Syntax:
     * ```
     * az webapp list [--query-examples]
     *                [--resource-group]
     *                [--subscription]
     * ```
     */
    static list(): az_webapp_list_command_builder {
        return new az_webapp_list_command_builder("az webapp list");
    }

    /**
     * List all scaled out instances of a web app or web app slot.
     *
     * Syntax:
     * ```
     * az webapp list-instances --name
     *                          --resource-group
     *                          [--slot]
     *                          [--subscription]
     * ```
     *
     * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list_instances(name: string, resourceGroup: string): az_webapp_list_instances_command_builder {
        return new az_webapp_list_instances_command_builder("az webapp list-instances", name, resourceGroup);
    }

    /**
     * List available built-in stacks which can be used for web apps.
     *
     * Syntax:
     * ```
     * az webapp list-runtimes [--linux]
     *                         [--subscription]
     * ```
     */
    static list_runtimes(): az_webapp_list_runtimes_command_builder {
        return new az_webapp_list_runtimes_command_builder("az webapp list-runtimes");
    }

    /**
     * Restart a web app.
     *
     * Syntax:
     * ```
     * az webapp restart [--ids]
     *                   [--name]
     *                   [--resource-group]
     *                   [--slot]
     *                   [--subscription]
     * ```
     */
    static restart(): az_webapp_restart_command_builder {
        return new az_webapp_restart_command_builder("az webapp restart");
    }

    /**
     * Get the details of a web app.
     *
     * Syntax:
     * ```
     * az webapp show [--ids]
     *                [--name]
     *                [--query-examples]
     *                [--resource-group]
     *                [--slot]
     *                [--subscription]
     * ```
     */
    static show(): az_webapp_show_command_builder {
        return new az_webapp_show_command_builder("az webapp show");
    }

    /**
     * SSH command establishes a ssh session to the web container and developer would get a shell terminal remotely.
     *
     * Syntax:
     * ```
     * az webapp ssh [--ids]
     *               [--instance]
     *               [--name]
     *               [--port]
     *               [--resource-group]
     *               [--slot]
     *               [--subscription]
     *               [--timeout]
     * ```
     */
    static ssh(): az_webapp_ssh_command_builder {
        return new az_webapp_ssh_command_builder("az webapp ssh");
    }

    /**
     * Start a web app.
     *
     * Syntax:
     * ```
     * az webapp start [--ids]
     *                 [--name]
     *                 [--resource-group]
     *                 [--slot]
     *                 [--subscription]
     * ```
     */
    static start(): az_webapp_start_command_builder {
        return new az_webapp_start_command_builder("az webapp start");
    }

    /**
     * Stop a web app.
     *
     * Syntax:
     * ```
     * az webapp stop [--ids]
     *                [--name]
     *                [--resource-group]
     *                [--slot]
     *                [--subscription]
     * ```
     */
    static stop(): az_webapp_stop_command_builder {
        return new az_webapp_stop_command_builder("az webapp stop");
    }

    /**
     * Create a webapp and deploy code from a local workspace to the app. The command is required to run from the folder where the code is present. Current support includes Node, Python, .NET Core and ASP.NET. Node, Python apps are created as Linux apps. .Net Core, ASP.NET, and static HTML apps are created as Windows apps. Append the html flag to deploy as a static HTML app.
     *
     * Syntax:
     * ```
     * az webapp up [--dryrun]
     *              [--html]
     *              [--ids]
     *              [--launch-browser]
     *              [--location]
     *              [--logs]
     *              [--name]
     *              [--plan]
     *              [--resource-group]
     *              [--sku {B1, B2, B3, D1, F1, FREE, I1, I2, I3, P1V2, P1V3, P2V2, P2V3, P3V2, P3V3, PC2, PC3, PC4, S1, S2, S3, SHARED}]
     *              [--subscription]
     * ```
     */
    static up(): az_webapp_up_command_builder {
        return new az_webapp_up_command_builder("az webapp up");
    }

    /**
     * Update a web app.
     *
     * Syntax:
     * ```
     * az webapp update [--add]
     *                  [--client-affinity-enabled {false, true}]
     *                  [--force-dns-registration {false, true}]
     *                  [--force-string]
     *                  [--https-only {false, true}]
     *                  [--ids]
     *                  [--name]
     *                  [--remove]
     *                  [--resource-group]
     *                  [--set]
     *                  [--skip-custom-domain-verification {false, true}]
     *                  [--skip-dns-registration {false, true}]
     *                  [--slot]
     *                  [--subscription]
     *                  [--ttl-in-seconds {false, true}]
     * ```
     */
    static update(): az_webapp_update_command_builder {
        return new az_webapp_update_command_builder("az webapp update");
    }
}

/**
 * Show the authentification settings for the webapp.
 *
 * Syntax:
 * ```
 * az webapp auth show [--ids]
 *                     [--name]
 *                     [--query-examples]
 *                     [--resource-group]
 *                     [--slot]
 *                     [--subscription]
 * ```
 */
class az_webapp_auth_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_auth_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_auth_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_auth_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_auth_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_auth_show_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_auth_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update the authentication settings for the webapp.
 *
 * Syntax:
 * ```
 * az webapp auth update [--aad-allowed-token-audiences]
 *                       [--aad-client-id]
 *                       [--aad-client-secret]
 *                       [--aad-client-secret-certificate-thumbprint]
 *                       [--aad-token-issuer-url]
 *                       [--action {AllowAnonymous, LoginWithAzureActiveDirectory, LoginWithFacebook, LoginWithGoogle, LoginWithMicrosoftAccount, LoginWithTwitter}]
 *                       [--allowed-external-redirect-urls]
 *                       [--enabled {false, true}]
 *                       [--facebook-app-id]
 *                       [--facebook-app-secret]
 *                       [--facebook-oauth-scopes]
 *                       [--google-client-id]
 *                       [--google-client-secret]
 *                       [--google-oauth-scopes]
 *                       [--ids]
 *                       [--microsoft-account-client-id]
 *                       [--microsoft-account-client-secret]
 *                       [--microsoft-account-oauth-scopes]
 *                       [--name]
 *                       [--resource-group]
 *                       [--runtime-version]
 *                       [--slot]
 *                       [--subscription]
 *                       [--token-refresh-extension-hours]
 *                       [--token-store {false, true}]
 *                       [--twitter-consumer-key]
 *                       [--twitter-consumer-secret]
 * ```
 */
class az_webapp_auth_update_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more token audiences (space-delimited). */
    aadAllowedTokenAudiences(value: string): az_webapp_auth_update_command_builder {
        this.setFlag("--aad-allowed-token-audiences", value);
        return this;
    }

    /** Application ID to integrate AAD organization account Sign-in into your web app. */
    aadClientId(value: string): az_webapp_auth_update_command_builder {
        this.setFlag("--aad-client-id", value);
        return this;
    }

    /** AAD application secret. */
    aadClientSecret(value: string): az_webapp_auth_update_command_builder {
        this.setFlag("--aad-client-secret", value);
        return this;
    }

    /** Alternative to AAD Client Secret, thumbprint of a certificate used for signing purposes. */
    aadClientSecretCertificateThumbprint(value: string): az_webapp_auth_update_command_builder {
        this.setFlag("--aad-client-secret-certificate-thumbprint", value);
        return this;
    }

    /** This url can be found in the JSON output returned from your active directory endpoint using your tenantID. The endpoint can be queried from `az cloud show` at "endpoints.activeDirectory". The tenantID can be found using `az account show`. Get the "issuer" from the JSON at <active directory endpoint>/<tenantId>/.well-known/openid-configuration. */
    aadTokenIssuerUrl(value: string): az_webapp_auth_update_command_builder {
        this.setFlag("--aad-token-issuer-url", value);
        return this;
    }

    /** */
    action(value: 'AllowAnonymous' | 'LoginWithAzureActiveDirectory' | 'LoginWithFacebook' | 'LoginWithGoogle' | 'LoginWithMicrosoftAccount' | 'LoginWithTwitter'): az_webapp_auth_update_command_builder {
        this.setFlag("--action", value);
        return this;
    }

    /** One or more urls (space-delimited). */
    allowedExternalRedirectUrls(value: string): az_webapp_auth_update_command_builder {
        this.setFlag("--allowed-external-redirect-urls", value);
        return this;
    }

    /** */
    enabled(value: boolean): az_webapp_auth_update_command_builder {
        this.setFlag("--enabled", value.toString());
        return this;
    }

    /** Application ID to integrate Facebook Sign-in into your web app. */
    facebookAppId(value: string): az_webapp_auth_update_command_builder {
        this.setFlag("--facebook-app-id", value);
        return this;
    }

    /** Facebook Application client secret. */
    facebookAppSecret(value: string): az_webapp_auth_update_command_builder {
        this.setFlag("--facebook-app-secret", value);
        return this;
    }

    /** One or more facebook authentication scopes (space-delimited). */
    facebookOauthScopes(value: string): az_webapp_auth_update_command_builder {
        this.setFlag("--facebook-oauth-scopes", value);
        return this;
    }

    /** Application ID to integrate Google Sign-in into your web app. */
    googleClientId(value: string): az_webapp_auth_update_command_builder {
        this.setFlag("--google-client-id", value);
        return this;
    }

    /** Google Application client secret. */
    googleClientSecret(value: string): az_webapp_auth_update_command_builder {
        this.setFlag("--google-client-secret", value);
        return this;
    }

    /** One or more Google authentication scopes (space-delimited). */
    googleOauthScopes(value: string): az_webapp_auth_update_command_builder {
        this.setFlag("--google-oauth-scopes", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_auth_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** AAD V2 Application ID to integrate Microsoft account Sign-in into your web app. */
    microsoftAccountClientId(value: string): az_webapp_auth_update_command_builder {
        this.setFlag("--microsoft-account-client-id", value);
        return this;
    }

    /** AAD V2 Application client secret. */
    microsoftAccountClientSecret(value: string): az_webapp_auth_update_command_builder {
        this.setFlag("--microsoft-account-client-secret", value);
        return this;
    }

    /** One or more Microsoft authentification scopes (space-delimited). */
    microsoftAccountOauthScopes(value: string): az_webapp_auth_update_command_builder {
        this.setFlag("--microsoft-account-oauth-scopes", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_auth_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_auth_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Runtime version of the Authentication/Authorization feature in use for the current app. */
    runtimeVersion(value: string): az_webapp_auth_update_command_builder {
        this.setFlag("--runtime-version", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_auth_update_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_auth_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Hours, must be formattable into a float. */
    tokenRefreshExtensionHours(value: string): az_webapp_auth_update_command_builder {
        this.setFlag("--token-refresh-extension-hours", value);
        return this;
    }

    /** Use App Service Token Store. */
    tokenStore(value: boolean): az_webapp_auth_update_command_builder {
        this.setFlag("--token-store", value.toString());
        return this;
    }

    /** Application ID to integrate Twitter Sign-in into your web app. */
    twitterConsumerKey(value: string): az_webapp_auth_update_command_builder {
        this.setFlag("--twitter-consumer-key", value);
        return this;
    }

    /** Twitter Application client secret. */
    twitterConsumerSecret(value: string): az_webapp_auth_update_command_builder {
        this.setFlag("--twitter-consumer-secret", value);
        return this;
    }
}

/**
 * Adds an Access Restriction to the webapp.
 *
 * Syntax:
 * ```
 * az webapp config access-restriction add --priority
 *                                         [--action {Allow, Deny}]
 *                                         [--description]
 *                                         [--ids]
 *                                         [--ignore-missing-endpoint {false, true}]
 *                                         [--ip-address]
 *                                         [--name]
 *                                         [--resource-group]
 *                                         [--rule-name]
 *                                         [--scm-site {false, true}]
 *                                         [--slot]
 *                                         [--subnet]
 *                                         [--subscription]
 *                                         [--vnet-name]
 * ```
 *
 * @param {string} priority Priority of the access restriction rule.
 */
class az_webapp_config_access_restriction_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, priority: string) {
        super(commandPath);
        this.priority(priority)
    }

    /** Priority of the access restriction rule. */
    priority(value: string): az_webapp_config_access_restriction_add_command_builder {
        this.setFlag("--priority", value);
        return this;
    }

    /** Allow or deny access. */
    action(value: 'Allow' | 'Deny'): az_webapp_config_access_restriction_add_command_builder {
        this.setFlag("--action", value);
        return this;
    }

    /** Description of the access restriction rule. */
    description(value: string): az_webapp_config_access_restriction_add_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_config_access_restriction_add_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Create access restriction rule with checking if the subnet has Microsoft.Web service endpoint enabled. */
    ignoreMissingEndpoint(value: boolean): az_webapp_config_access_restriction_add_command_builder {
        this.setFlag("--ignore-missing-endpoint", value.toString());
        return this;
    }

    /** IP address or CIDR range. */
    ipAddress(value: string): az_webapp_config_access_restriction_add_command_builder {
        this.setFlag("--ip-address", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_config_access_restriction_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_access_restriction_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the access restriction rule to add. */
    ruleName(value: string): az_webapp_config_access_restriction_add_command_builder {
        this.setFlag("--rule-name", value);
        return this;
    }

    /** True if access restrictions is added for scm site. */
    scmSite(value: boolean): az_webapp_config_access_restriction_add_command_builder {
        this.setFlag("--scm-site", value.toString());
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_access_restriction_add_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Subnet name (requires vNet name) or subnet resource id. */
    subnet(value: string): az_webapp_config_access_restriction_add_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_access_restriction_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** VNet name. */
    vnetName(value: string): az_webapp_config_access_restriction_add_command_builder {
        this.setFlag("--vnet-name", value);
        return this;
    }
}

/**
 * Removes an Access Restriction from the webapp.
 *
 * Syntax:
 * ```
 * az webapp config access-restriction remove [--action {Allow, Deny}]
 *                                            [--ids]
 *                                            [--ip-address]
 *                                            [--name]
 *                                            [--resource-group]
 *                                            [--rule-name]
 *                                            [--scm-site {false, true}]
 *                                            [--slot]
 *                                            [--subnet]
 *                                            [--subscription]
 *                                            [--vnet-name]
 * ```
 */
class az_webapp_config_access_restriction_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Allow or deny access. */
    action(value: 'Allow' | 'Deny'): az_webapp_config_access_restriction_remove_command_builder {
        this.setFlag("--action", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_config_access_restriction_remove_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** IP address or CIDR range. */
    ipAddress(value: string): az_webapp_config_access_restriction_remove_command_builder {
        this.setFlag("--ip-address", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_config_access_restriction_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_access_restriction_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the access restriction to remove. */
    ruleName(value: string): az_webapp_config_access_restriction_remove_command_builder {
        this.setFlag("--rule-name", value);
        return this;
    }

    /** True if access restriction should be removed from scm site. */
    scmSite(value: boolean): az_webapp_config_access_restriction_remove_command_builder {
        this.setFlag("--scm-site", value.toString());
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_access_restriction_remove_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Subnet name (requires vNet name) or subnet resource id. */
    subnet(value: string): az_webapp_config_access_restriction_remove_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_access_restriction_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** VNet name. */
    vnetName(value: string): az_webapp_config_access_restriction_remove_command_builder {
        this.setFlag("--vnet-name", value);
        return this;
    }
}

/**
 * Sets if SCM site is using the same restrictions as the main site.
 *
 * Syntax:
 * ```
 * az webapp config access-restriction set --use-same-restrictions-for-scm-site {false, true}
 *                                         [--ids]
 *                                         [--name]
 *                                         [--resource-group]
 *                                         [--slot]
 *                                         [--subscription]
 * ```
 *
 * @param {boolean} useSameRestrictionsForScmSite Use same access restrictions for scm site.
 */
class az_webapp_config_access_restriction_set_command_builder extends CommandBuilder {
    constructor(commandPath: string, useSameRestrictionsForScmSite: boolean) {
        super(commandPath);
        this.useSameRestrictionsForScmSite(useSameRestrictionsForScmSite)
    }

    /** Use same access restrictions for scm site. */
    useSameRestrictionsForScmSite(value: boolean): az_webapp_config_access_restriction_set_command_builder {
        this.setFlag("--use-same-restrictions-for-scm-site", value.toString());
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_config_access_restriction_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_config_access_restriction_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_access_restriction_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_access_restriction_set_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_access_restriction_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show Access Restriction settings for webapp.
 *
 * Syntax:
 * ```
 * az webapp config access-restriction show [--ids]
 *                                          [--name]
 *                                          [--query-examples]
 *                                          [--resource-group]
 *                                          [--slot]
 *                                          [--subscription]
 * ```
 */
class az_webapp_config_access_restriction_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_config_access_restriction_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_config_access_restriction_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_config_access_restriction_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_access_restriction_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_access_restriction_show_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_access_restriction_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete web app settings.
 *
 * Syntax:
 * ```
 * az webapp config appsettings delete --setting-names
 *                                     [--ids]
 *                                     [--name]
 *                                     [--resource-group]
 *                                     [--slot]
 *                                     [--subscription]
 * ```
 *
 * @param {string} settingNames Space-separated appsettings names.
 */
class az_webapp_config_appsettings_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, settingNames: string) {
        super(commandPath);
        this.settingNames(settingNames)
    }

    /** Space-separated appsettings names. */
    settingNames(value: string): az_webapp_config_appsettings_delete_command_builder {
        this.setFlag("--setting-names", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_config_appsettings_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_config_appsettings_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_appsettings_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_appsettings_delete_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_appsettings_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the details of a web app's settings.
 *
 * Syntax:
 * ```
 * az webapp config appsettings list --name
 *                                   --resource-group
 *                                   [--query-examples]
 *                                   [--slot]
 *                                   [--subscription]
 * ```
 *
 * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_webapp_config_appsettings_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_config_appsettings_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_appsettings_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_config_appsettings_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_appsettings_list_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_appsettings_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Set a web app's settings.
 *
 * Syntax:
 * ```
 * az webapp config appsettings set [--ids]
 *                                  [--name]
 *                                  [--resource-group]
 *                                  [--settings]
 *                                  [--slot]
 *                                  [--slot-settings]
 *                                  [--subscription]
 * ```
 */
class az_webapp_config_appsettings_set_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_config_appsettings_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_config_appsettings_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_appsettings_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Space-separated appsettings in KEY=VALUE format. Use @{file} to load from a file. */
    settings(value: string): az_webapp_config_appsettings_set_command_builder {
        this.setFlag("--settings", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_appsettings_set_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Space-separated slot appsettings in KEY=VALUE format. Use @{file} to load from a file. */
    slotSettings(value: string): az_webapp_config_appsettings_set_command_builder {
        this.setFlag("--slot-settings", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_appsettings_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create a backup of a web app.
 *
 * Syntax:
 * ```
 * az webapp config backup create --container-url
 *                                --resource-group
 *                                --webapp-name
 *                                [--backup-name]
 *                                [--db-connection-string]
 *                                [--db-name]
 *                                [--db-type {LocalMySql, MySql, PostgreSql, SqlAzure}]
 *                                [--slot]
 *                                [--subscription]
 * ```
 *
 * @param {string} containerUrl URL with SAS token to the blob storage container.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} webappName The name of the web app.
 */
class az_webapp_config_backup_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, containerUrl: string, resourceGroup: string, webappName: string) {
        super(commandPath);
        this.containerUrl(containerUrl)
        this.resourceGroup(resourceGroup)
        this.webappName(webappName)
    }

    /** URL with SAS token to the blob storage container. */
    containerUrl(value: string): az_webapp_config_backup_create_command_builder {
        this.setFlag("--container-url", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_backup_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the web app. */
    webappName(value: string): az_webapp_config_backup_create_command_builder {
        this.setFlag("--webapp-name", value);
        return this;
    }

    /** Name of the backup. If unspecified, the backup will be named with the web app name and a timestamp. */
    backupName(value: string): az_webapp_config_backup_create_command_builder {
        this.setFlag("--backup-name", value);
        return this;
    }

    /** Connection string for the database in the backup. */
    dbConnectionString(value: string): az_webapp_config_backup_create_command_builder {
        this.setFlag("--db-connection-string", value);
        return this;
    }

    /** Name of the database in the backup. */
    dbName(value: string): az_webapp_config_backup_create_command_builder {
        this.setFlag("--db-name", value);
        return this;
    }

    /** Type of database in the backup. */
    dbType(value: 'LocalMySql' | 'MySql' | 'PostgreSql' | 'SqlAzure'): az_webapp_config_backup_create_command_builder {
        this.setFlag("--db-type", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_backup_create_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_backup_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List backups of a web app.
 *
 * Syntax:
 * ```
 * az webapp config backup list --resource-group
 *                              --webapp-name
 *                              [--query-examples]
 *                              [--slot]
 *                              [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} webappName The name of the web app.
 */
class az_webapp_config_backup_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, resourceGroup: string, webappName: string) {
        super(commandPath);
        this.resourceGroup(resourceGroup)
        this.webappName(webappName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_backup_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the web app. */
    webappName(value: string): az_webapp_config_backup_list_command_builder {
        this.setFlag("--webapp-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_config_backup_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_backup_list_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_backup_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Restore a web app from a backup.
 *
 * Syntax:
 * ```
 * az webapp config backup restore --backup-name
 *                                 --container-url
 *                                 --resource-group
 *                                 --webapp-name
 *                                 [--db-connection-string]
 *                                 [--db-name]
 *                                 [--db-type {LocalMySql, MySql, PostgreSql, SqlAzure}]
 *                                 [--ignore-hostname-conflict]
 *                                 [--overwrite]
 *                                 [--slot]
 *                                 [--subscription]
 *                                 [--target-name]
 * ```
 *
 * @param {string} backupName Name of the backup to restore.
 * @param {string} containerUrl URL with SAS token to the blob storage container.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} webappName The name of the web app.
 */
class az_webapp_config_backup_restore_command_builder extends CommandBuilder {
    constructor(commandPath: string, backupName: string, containerUrl: string, resourceGroup: string, webappName: string) {
        super(commandPath);
        this.backupName(backupName)
        this.containerUrl(containerUrl)
        this.resourceGroup(resourceGroup)
        this.webappName(webappName)
    }

    /** Name of the backup to restore. */
    backupName(value: string): az_webapp_config_backup_restore_command_builder {
        this.setFlag("--backup-name", value);
        return this;
    }

    /** URL with SAS token to the blob storage container. */
    containerUrl(value: string): az_webapp_config_backup_restore_command_builder {
        this.setFlag("--container-url", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_backup_restore_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the web app. */
    webappName(value: string): az_webapp_config_backup_restore_command_builder {
        this.setFlag("--webapp-name", value);
        return this;
    }

    /** Connection string for the database in the backup. */
    dbConnectionString(value: string): az_webapp_config_backup_restore_command_builder {
        this.setFlag("--db-connection-string", value);
        return this;
    }

    /** Name of the database in the backup. */
    dbName(value: string): az_webapp_config_backup_restore_command_builder {
        this.setFlag("--db-name", value);
        return this;
    }

    /** Type of database in the backup. */
    dbType(value: 'LocalMySql' | 'MySql' | 'PostgreSql' | 'SqlAzure'): az_webapp_config_backup_restore_command_builder {
        this.setFlag("--db-type", value);
        return this;
    }

    /** Ignores custom hostnames stored in the backup. */
    ignoreHostnameConflict(value: string): az_webapp_config_backup_restore_command_builder {
        this.setFlag("--ignore-hostname-conflict", value);
        return this;
    }

    /** Overwrite the source web app, if --target-name is not specified. */
    overwrite(value: string): az_webapp_config_backup_restore_command_builder {
        this.setFlag("--overwrite", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_backup_restore_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_backup_restore_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The name to use for the restored web app. If unspecified, will default to the name that was used when the backup was created. */
    targetName(value: string): az_webapp_config_backup_restore_command_builder {
        this.setFlag("--target-name", value);
        return this;
    }
}

/**
 * Show the backup schedule for a web app.
 *
 * Syntax:
 * ```
 * az webapp config backup show --resource-group
 *                              --webapp-name
 *                              [--query-examples]
 *                              [--slot]
 *                              [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} webappName The name of the web app.
 */
class az_webapp_config_backup_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, resourceGroup: string, webappName: string) {
        super(commandPath);
        this.resourceGroup(resourceGroup)
        this.webappName(webappName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_backup_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the web app. */
    webappName(value: string): az_webapp_config_backup_show_command_builder {
        this.setFlag("--webapp-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_config_backup_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_backup_show_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_backup_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Configure a new backup schedule for a web app.
 *
 * Syntax:
 * ```
 * az webapp config backup update --resource-group
 *                                --webapp-name
 *                                [--backup-name]
 *                                [--container-url]
 *                                [--db-connection-string]
 *                                [--db-name]
 *                                [--db-type {LocalMySql, MySql, PostgreSql, SqlAzure}]
 *                                [--frequency]
 *                                [--retain-one {false, true}]
 *                                [--retention]
 *                                [--slot]
 *                                [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} webappName The name of the web app.
 */
class az_webapp_config_backup_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, resourceGroup: string, webappName: string) {
        super(commandPath);
        this.resourceGroup(resourceGroup)
        this.webappName(webappName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_backup_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the web app. */
    webappName(value: string): az_webapp_config_backup_update_command_builder {
        this.setFlag("--webapp-name", value);
        return this;
    }

    /** Name of the backup. If unspecified, the backup will be named with the web app name and a timestamp. */
    backupName(value: string): az_webapp_config_backup_update_command_builder {
        this.setFlag("--backup-name", value);
        return this;
    }

    /** URL with SAS token to the blob storage container. */
    containerUrl(value: string): az_webapp_config_backup_update_command_builder {
        this.setFlag("--container-url", value);
        return this;
    }

    /** Connection string for the database in the backup. */
    dbConnectionString(value: string): az_webapp_config_backup_update_command_builder {
        this.setFlag("--db-connection-string", value);
        return this;
    }

    /** Name of the database in the backup. */
    dbName(value: string): az_webapp_config_backup_update_command_builder {
        this.setFlag("--db-name", value);
        return this;
    }

    /** Type of database in the backup. */
    dbType(value: 'LocalMySql' | 'MySql' | 'PostgreSql' | 'SqlAzure'): az_webapp_config_backup_update_command_builder {
        this.setFlag("--db-type", value);
        return this;
    }

    /** How often to backup. Use a number followed by d or h, e.g. 5d = 5 days, 2h = 2 hours. */
    frequency(value: string): az_webapp_config_backup_update_command_builder {
        this.setFlag("--frequency", value);
        return this;
    }

    /** Always keep one backup, regardless of how old it is. */
    retainOne(value: boolean): az_webapp_config_backup_update_command_builder {
        this.setFlag("--retain-one", value.toString());
        return this;
    }

    /** How many days to keep a backup before automatically deleting it. Set to 0 for indefinite retention. */
    retention(value: string): az_webapp_config_backup_update_command_builder {
        this.setFlag("--retention", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_backup_update_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_backup_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete a web app's connection strings.
 *
 * Syntax:
 * ```
 * az webapp config connection-string delete --setting-names
 *                                           [--ids]
 *                                           [--name]
 *                                           [--resource-group]
 *                                           [--slot]
 *                                           [--subscription]
 * ```
 *
 * @param {string} settingNames Space-separated connection-string names.
 */
class az_webapp_config_connection_string_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, settingNames: string) {
        super(commandPath);
        this.settingNames(settingNames)
    }

    /** Space-separated connection-string names. */
    settingNames(value: string): az_webapp_config_connection_string_delete_command_builder {
        this.setFlag("--setting-names", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_config_connection_string_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. If `--ids` is provided this should NOT be specified. */
    name(value: string): az_webapp_config_connection_string_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_connection_string_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_connection_string_delete_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_connection_string_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get a web app's connection strings.
 *
 * Syntax:
 * ```
 * az webapp config connection-string list --name
 *                                         --resource-group
 *                                         [--query-examples]
 *                                         [--slot]
 *                                         [--subscription]
 * ```
 *
 * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_webapp_config_connection_string_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_config_connection_string_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_connection_string_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_config_connection_string_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_connection_string_list_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_connection_string_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update a web app's connection strings.
 *
 * Syntax:
 * ```
 * az webapp config connection-string set --connection-string-type {ApiHub, Custom, DocDb, EventHub, MySql, NotificationHub, PostgreSQL, RedisCache, SQLAzure, SQLServer, ServiceBus}
 *                                        [--ids]
 *                                        [--name]
 *                                        [--resource-group]
 *                                        [--settings]
 *                                        [--slot]
 *                                        [--slot-settings]
 *                                        [--subscription]
 * ```
 *
 * @param {'ApiHub' | 'Custom' | 'DocDb' | 'EventHub' | 'MySql' | 'NotificationHub' | 'PostgreSQL' | 'RedisCache' | 'SQLAzure' | 'SQLServer' | 'ServiceBus'} connectionStringType Connection string type.
 */
class az_webapp_config_connection_string_set_command_builder extends CommandBuilder {
    constructor(commandPath: string, connectionStringType: 'ApiHub' | 'Custom' | 'DocDb' | 'EventHub' | 'MySql' | 'NotificationHub' | 'PostgreSQL' | 'RedisCache' | 'SQLAzure' | 'SQLServer' | 'ServiceBus') {
        super(commandPath);
        this.connectionStringType(connectionStringType)
    }

    /** Connection string type. */
    connectionStringType(value: 'ApiHub' | 'Custom' | 'DocDb' | 'EventHub' | 'MySql' | 'NotificationHub' | 'PostgreSQL' | 'RedisCache' | 'SQLAzure' | 'SQLServer' | 'ServiceBus'): az_webapp_config_connection_string_set_command_builder {
        this.setFlag("--connection-string-type", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_config_connection_string_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. If `--ids` is provided this should NOT be specified. */
    name(value: string): az_webapp_config_connection_string_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_connection_string_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Space-separated connection-string in a format of `<name>=<value>`. */
    settings(value: string): az_webapp_config_connection_string_set_command_builder {
        this.setFlag("--settings", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_connection_string_set_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Space-separated slot connection-string in a format of either `<name>=<value>` or `@<json_file>`. */
    slotSettings(value: string): az_webapp_config_connection_string_set_command_builder {
        this.setFlag("--slot-settings", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_connection_string_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete a web app container's settings.
 *
 * Syntax:
 * ```
 * az webapp config container delete [--ids]
 *                                   [--name]
 *                                   [--resource-group]
 *                                   [--slot]
 *                                   [--subscription]
 * ```
 */
class az_webapp_config_container_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_config_container_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_config_container_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_container_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_container_delete_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_container_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Set a web app container's settings.
 *
 * Syntax:
 * ```
 * az webapp config container set [--docker-custom-image-name]
 *                                [--docker-registry-server-password]
 *                                [--docker-registry-server-url]
 *                                [--docker-registry-server-user]
 *                                [--enable-app-service-storage {false, true}]
 *                                [--ids]
 *                                [--multicontainer-config-file]
 *                                [--multicontainer-config-type {COMPOSE, KUBE}]
 *                                [--name]
 *                                [--resource-group]
 *                                [--slot]
 *                                [--subscription]
 * ```
 */
class az_webapp_config_container_set_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The container custom image name and optionally the tag name. */
    dockerCustomImageName(value: string): az_webapp_config_container_set_command_builder {
        this.setFlag("--docker-custom-image-name", value);
        return this;
    }

    /** The container registry server password. */
    dockerRegistryServerPassword(value: string): az_webapp_config_container_set_command_builder {
        this.setFlag("--docker-registry-server-password", value);
        return this;
    }

    /** The container registry server url. */
    dockerRegistryServerUrl(value: string): az_webapp_config_container_set_command_builder {
        this.setFlag("--docker-registry-server-url", value);
        return this;
    }

    /** The container registry server username. */
    dockerRegistryServerUser(value: string): az_webapp_config_container_set_command_builder {
        this.setFlag("--docker-registry-server-user", value);
        return this;
    }

    /** Enables platform storage (custom container only). */
    enableAppServiceStorage(value: boolean): az_webapp_config_container_set_command_builder {
        this.setFlag("--enable-app-service-storage", value.toString());
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_config_container_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Config file for multicontainer apps. */
    multicontainerConfigFile(value: string): az_webapp_config_container_set_command_builder {
        this.setFlag("--multicontainer-config-file", value);
        return this;
    }

    /** Config type. */
    multicontainerConfigType(value: 'COMPOSE' | 'KUBE'): az_webapp_config_container_set_command_builder {
        this.setFlag("--multicontainer-config-type", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_config_container_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_container_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_container_set_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_container_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get details of a web app container's settings.
 *
 * Syntax:
 * ```
 * az webapp config container show [--ids]
 *                                 [--name]
 *                                 [--query-examples]
 *                                 [--resource-group]
 *                                 [--show-multicontainer-config]
 *                                 [--slot]
 *                                 [--subscription]
 * ```
 */
class az_webapp_config_container_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_config_container_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_config_container_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_config_container_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_container_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Shows decoded config if a multicontainer config is set. */
    showMulticontainerConfig(value: string): az_webapp_config_container_show_command_builder {
        this.setFlag("--show-multicontainer-config", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_container_show_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_container_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Bind a hostname to a web app.
 *
 * Syntax:
 * ```
 * az webapp config hostname add [--hostname]
 *                               [--ids]
 *                               [--resource-group]
 *                               [--slot]
 *                               [--subscription]
 *                               [--webapp-name]
 * ```
 */
class az_webapp_config_hostname_add_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Hostname assigned to the site, such as custom domains. */
    hostname(value: string): az_webapp_config_hostname_add_command_builder {
        this.setFlag("--hostname", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_config_hostname_add_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_hostname_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_hostname_add_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_hostname_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Webapp name. You can configure the default using `az configure --defaults web=<name>`. */
    webappName(value: string): az_webapp_config_hostname_add_command_builder {
        this.setFlag("--webapp-name", value);
        return this;
    }
}

/**
 * Unbind a hostname from a web app.
 *
 * Syntax:
 * ```
 * az webapp config hostname delete [--hostname]
 *                                  [--ids]
 *                                  [--resource-group]
 *                                  [--slot]
 *                                  [--subscription]
 *                                  [--webapp-name]
 * ```
 */
class az_webapp_config_hostname_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Hostname assigned to the site, such as custom domains. */
    hostname(value: string): az_webapp_config_hostname_delete_command_builder {
        this.setFlag("--hostname", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_config_hostname_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_hostname_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_hostname_delete_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_hostname_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Webapp name. You can configure the default using `az configure --defaults web=<name>`. */
    webappName(value: string): az_webapp_config_hostname_delete_command_builder {
        this.setFlag("--webapp-name", value);
        return this;
    }
}

/**
 * Get the external-facing IP address for a web app.
 *
 * Syntax:
 * ```
 * az webapp config hostname get-external-ip [--ids]
 *                                           [--resource-group]
 *                                           [--subscription]
 *                                           [--webapp-name]
 * ```
 */
class az_webapp_config_hostname_get_external_ip_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_config_hostname_get_external_ip_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_hostname_get_external_ip_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_hostname_get_external_ip_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Webapp name. You can configure the default using `az configure --defaults web=<name>`. */
    webappName(value: string): az_webapp_config_hostname_get_external_ip_command_builder {
        this.setFlag("--webapp-name", value);
        return this;
    }
}

/**
 * List all hostname bindings for a web app.
 *
 * Syntax:
 * ```
 * az webapp config hostname list --resource-group
 *                                --webapp-name
 *                                [--query-examples]
 *                                [--slot]
 *                                [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} webappName Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
 */
class az_webapp_config_hostname_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, resourceGroup: string, webappName: string) {
        super(commandPath);
        this.resourceGroup(resourceGroup)
        this.webappName(webappName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_hostname_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    webappName(value: string): az_webapp_config_hostname_list_command_builder {
        this.setFlag("--webapp-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_config_hostname_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_hostname_list_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_hostname_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the restorable snapshots for a web app.
 *
 * Syntax:
 * ```
 * az webapp config snapshot list --name
 *                                --resource-group
 *                                [--query-examples]
 *                                [--slot]
 *                                [--subscription]
 * ```
 *
 * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_webapp_config_snapshot_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_config_snapshot_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_snapshot_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_config_snapshot_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The name of the slot. */
    slot(value: string): az_webapp_config_snapshot_list_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_snapshot_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Restore a web app snapshot.
 *
 * Syntax:
 * ```
 * az webapp config snapshot restore --time
 *                                   [--ids]
 *                                   [--name]
 *                                   [--resource-group]
 *                                   [--restore-content-only]
 *                                   [--slot]
 *                                   [--source-name]
 *                                   [--source-resource-group]
 *                                   [--source-slot]
 *                                   [--subscription]
 * ```
 *
 * @param {string} time Timestamp of the snapshot to restore.
 */
class az_webapp_config_snapshot_restore_command_builder extends CommandBuilder {
    constructor(commandPath: string, time: string) {
        super(commandPath);
        this.time(time)
    }

    /** Timestamp of the snapshot to restore. */
    time(value: string): az_webapp_config_snapshot_restore_command_builder {
        this.setFlag("--time", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_config_snapshot_restore_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_config_snapshot_restore_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_snapshot_restore_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Restore the web app files without restoring the settings. */
    restoreContentOnly(value: string): az_webapp_config_snapshot_restore_command_builder {
        this.setFlag("--restore-content-only", value);
        return this;
    }

    /** The name of the slot. */
    slot(value: string): az_webapp_config_snapshot_restore_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name of the web app to retrieve snapshot from. */
    sourceName(value: string): az_webapp_config_snapshot_restore_command_builder {
        this.setFlag("--source-name", value);
        return this;
    }

    /** Name of the resource group to retrieve snapshot from. */
    sourceResourceGroup(value: string): az_webapp_config_snapshot_restore_command_builder {
        this.setFlag("--source-resource-group", value);
        return this;
    }

    /** Name of the web app slot to retrieve snapshot from. */
    sourceSlot(value: string): az_webapp_config_snapshot_restore_command_builder {
        this.setFlag("--source-slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_snapshot_restore_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Bind an SSL certificate to a web app.
 *
 * Syntax:
 * ```
 * az webapp config ssl bind --certificate-thumbprint
 *                           --ssl-type {IP, SNI}
 *                           [--ids]
 *                           [--name]
 *                           [--resource-group]
 *                           [--slot]
 *                           [--subscription]
 * ```
 *
 * @param {string} certificateThumbprint The ssl cert thumbprint.
 * @param {'IP' | 'SNI'} sslType The ssl cert type.
 */
class az_webapp_config_ssl_bind_command_builder extends CommandBuilder {
    constructor(commandPath: string, certificateThumbprint: string, sslType: 'IP' | 'SNI') {
        super(commandPath);
        this.certificateThumbprint(certificateThumbprint)
        this.sslType(sslType)
    }

    /** The ssl cert thumbprint. */
    certificateThumbprint(value: string): az_webapp_config_ssl_bind_command_builder {
        this.setFlag("--certificate-thumbprint", value);
        return this;
    }

    /** The ssl cert type. */
    sslType(value: 'IP' | 'SNI'): az_webapp_config_ssl_bind_command_builder {
        this.setFlag("--ssl-type", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_config_ssl_bind_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_config_ssl_bind_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_ssl_bind_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_ssl_bind_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_ssl_bind_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create a Managed Certificate for a hostname in a webapp app.
 *
 * Syntax:
 * ```
 * az webapp config ssl create --hostname
 *                             --name
 *                             --resource-group
 *                             [--slot]
 *                             [--subscription]
 * ```
 *
 * @param {string} hostname The custom domain name.
 * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_webapp_config_ssl_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, hostname: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.hostname(hostname)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The custom domain name. */
    hostname(value: string): az_webapp_config_ssl_create_command_builder {
        this.setFlag("--hostname", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_config_ssl_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_ssl_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_ssl_create_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_ssl_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete an SSL certificate from a web app.
 *
 * Syntax:
 * ```
 * az webapp config ssl delete --certificate-thumbprint
 *                             --resource-group
 *                             [--subscription]
 * ```
 *
 * @param {string} certificateThumbprint The ssl cert thumbprint.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_webapp_config_ssl_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, certificateThumbprint: string, resourceGroup: string) {
        super(commandPath);
        this.certificateThumbprint(certificateThumbprint)
        this.resourceGroup(resourceGroup)
    }

    /** The ssl cert thumbprint. */
    certificateThumbprint(value: string): az_webapp_config_ssl_delete_command_builder {
        this.setFlag("--certificate-thumbprint", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_ssl_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_ssl_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Import an SSL certificate to a web app from Key Vault.
 *
 * Syntax:
 * ```
 * az webapp config ssl import --key-vault
 *                             --key-vault-certificate-name
 *                             [--ids]
 *                             [--name]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 *
 * @param {string} keyVault The name or resource ID of the Key Vault.
 * @param {string} keyVaultCertificateName The name of the certificate in Key Vault.
 */
class az_webapp_config_ssl_import_command_builder extends CommandBuilder {
    constructor(commandPath: string, keyVault: string, keyVaultCertificateName: string) {
        super(commandPath);
        this.keyVault(keyVault)
        this.keyVaultCertificateName(keyVaultCertificateName)
    }

    /** The name or resource ID of the Key Vault. */
    keyVault(value: string): az_webapp_config_ssl_import_command_builder {
        this.setFlag("--key-vault", value);
        return this;
    }

    /** The name of the certificate in Key Vault. */
    keyVaultCertificateName(value: string): az_webapp_config_ssl_import_command_builder {
        this.setFlag("--key-vault-certificate-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_config_ssl_import_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_config_ssl_import_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_ssl_import_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_ssl_import_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List SSL certificates for a web app.
 *
 * Syntax:
 * ```
 * az webapp config ssl list --resource-group
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_webapp_config_ssl_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, resourceGroup: string) {
        super(commandPath);
        this.resourceGroup(resourceGroup)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_ssl_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_config_ssl_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_ssl_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Unbind an SSL certificate from a web app.
 *
 * Syntax:
 * ```
 * az webapp config ssl unbind --certificate-thumbprint
 *                             [--ids]
 *                             [--name]
 *                             [--resource-group]
 *                             [--slot]
 *                             [--subscription]
 * ```
 *
 * @param {string} certificateThumbprint The ssl cert thumbprint.
 */
class az_webapp_config_ssl_unbind_command_builder extends CommandBuilder {
    constructor(commandPath: string, certificateThumbprint: string) {
        super(commandPath);
        this.certificateThumbprint(certificateThumbprint)
    }

    /** The ssl cert thumbprint. */
    certificateThumbprint(value: string): az_webapp_config_ssl_unbind_command_builder {
        this.setFlag("--certificate-thumbprint", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_config_ssl_unbind_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_config_ssl_unbind_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_ssl_unbind_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_ssl_unbind_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_ssl_unbind_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Upload an SSL certificate to a web app.
 *
 * Syntax:
 * ```
 * az webapp config ssl upload --certificate-file
 *                             --certificate-password
 *                             [--ids]
 *                             [--name]
 *                             [--resource-group]
 *                             [--slot]
 *                             [--subscription]
 * ```
 *
 * @param {string} certificateFile The filepath for the .pfx file.
 * @param {string} certificatePassword The ssl cert password.
 */
class az_webapp_config_ssl_upload_command_builder extends CommandBuilder {
    constructor(commandPath: string, certificateFile: string, certificatePassword: string) {
        super(commandPath);
        this.certificateFile(certificateFile)
        this.certificatePassword(certificatePassword)
    }

    /** The filepath for the .pfx file. */
    certificateFile(value: string): az_webapp_config_ssl_upload_command_builder {
        this.setFlag("--certificate-file", value);
        return this;
    }

    /** The ssl cert password. */
    certificatePassword(value: string): az_webapp_config_ssl_upload_command_builder {
        this.setFlag("--certificate-password", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_config_ssl_upload_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_config_ssl_upload_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_ssl_upload_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_ssl_upload_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_ssl_upload_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Add an Azure storage account configuration to a web app. (Linux Web Apps and Windows Containers Web Apps Only).
 *
 * Syntax:
 * ```
 * az webapp config storage-account add --access-key
 *                                      --account-name
 *                                      --custom-id
 *                                      --share-name
 *                                      --storage-type {AzureBlob, AzureFiles}
 *                                      [--ids]
 *                                      [--mount-path]
 *                                      [--name]
 *                                      [--resource-group]
 *                                      [--slot]
 *                                      [--slot-setting]
 *                                      [--subscription]
 * ```
 *
 * @param {string} accessKey Storage account access key.
 * @param {string} accountName Storage account name.
 * @param {string} customId Custom identifier.
 * @param {string} shareName Share name (Azure Files) or container name (Azure Blob Storage).
 * @param {'AzureBlob' | 'AzureFiles'} storageType Storage type.
 */
class az_webapp_config_storage_account_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, accessKey: string, accountName: string, customId: string, shareName: string, storageType: 'AzureBlob' | 'AzureFiles') {
        super(commandPath);
        this.accessKey(accessKey)
        this.accountName(accountName)
        this.customId(customId)
        this.shareName(shareName)
        this.storageType(storageType)
    }

    /** Storage account access key. */
    accessKey(value: string): az_webapp_config_storage_account_add_command_builder {
        this.setFlag("--access-key", value);
        return this;
    }

    /** Storage account name. */
    accountName(value: string): az_webapp_config_storage_account_add_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Custom identifier. */
    customId(value: string): az_webapp_config_storage_account_add_command_builder {
        this.setFlag("--custom-id", value);
        return this;
    }

    /** Share name (Azure Files) or container name (Azure Blob Storage). */
    shareName(value: string): az_webapp_config_storage_account_add_command_builder {
        this.setFlag("--share-name", value);
        return this;
    }

    /** Storage type. */
    storageType(value: 'AzureBlob' | 'AzureFiles'): az_webapp_config_storage_account_add_command_builder {
        this.setFlag("--storage-type", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_config_storage_account_add_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Path to mount storage volume within web app. */
    mountPath(value: string): az_webapp_config_storage_account_add_command_builder {
        this.setFlag("--mount-path", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_config_storage_account_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_storage_account_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_storage_account_add_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Slot setting. */
    slotSetting(value: string): az_webapp_config_storage_account_add_command_builder {
        this.setFlag("--slot-setting", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_storage_account_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete a web app's Azure storage account configuration. (Linux Web Apps and Windows Containers Web Apps Only).
 *
 * Syntax:
 * ```
 * az webapp config storage-account delete --custom-id
 *                                         [--ids]
 *                                         [--name]
 *                                         [--resource-group]
 *                                         [--slot]
 *                                         [--subscription]
 * ```
 *
 * @param {string} customId Custom identifier.
 */
class az_webapp_config_storage_account_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, customId: string) {
        super(commandPath);
        this.customId(customId)
    }

    /** Custom identifier. */
    customId(value: string): az_webapp_config_storage_account_delete_command_builder {
        this.setFlag("--custom-id", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_config_storage_account_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_config_storage_account_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_storage_account_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_storage_account_delete_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_storage_account_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get a web app's Azure storage account configurations. (Linux Web Apps and Windows Containers Web Apps Only).
 *
 * Syntax:
 * ```
 * az webapp config storage-account list --name
 *                                       --resource-group
 *                                       [--query-examples]
 *                                       [--slot]
 *                                       [--subscription]
 * ```
 *
 * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_webapp_config_storage_account_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_config_storage_account_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_storage_account_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_config_storage_account_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_storage_account_list_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_storage_account_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update an existing Azure storage account configuration on a web app. (Linux Web Apps and Windows Containers Web Apps Only).
 *
 * Syntax:
 * ```
 * az webapp config storage-account update --custom-id
 *                                         [--access-key]
 *                                         [--account-name]
 *                                         [--ids]
 *                                         [--mount-path]
 *                                         [--name]
 *                                         [--resource-group]
 *                                         [--share-name]
 *                                         [--slot]
 *                                         [--slot-setting]
 *                                         [--storage-type {AzureBlob, AzureFiles}]
 *                                         [--subscription]
 * ```
 *
 * @param {string} customId Custom identifier.
 */
class az_webapp_config_storage_account_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, customId: string) {
        super(commandPath);
        this.customId(customId)
    }

    /** Custom identifier. */
    customId(value: string): az_webapp_config_storage_account_update_command_builder {
        this.setFlag("--custom-id", value);
        return this;
    }

    /** Storage account access key. */
    accessKey(value: string): az_webapp_config_storage_account_update_command_builder {
        this.setFlag("--access-key", value);
        return this;
    }

    /** Storage account name. */
    accountName(value: string): az_webapp_config_storage_account_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_config_storage_account_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Path to mount storage volume within web app. */
    mountPath(value: string): az_webapp_config_storage_account_update_command_builder {
        this.setFlag("--mount-path", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_config_storage_account_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_storage_account_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Share name (Azure Files) or container name (Azure Blob Storage). */
    shareName(value: string): az_webapp_config_storage_account_update_command_builder {
        this.setFlag("--share-name", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_storage_account_update_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Slot setting. */
    slotSetting(value: string): az_webapp_config_storage_account_update_command_builder {
        this.setFlag("--slot-setting", value);
        return this;
    }

    /** Storage type. */
    storageType(value: 'AzureBlob' | 'AzureFiles'): az_webapp_config_storage_account_update_command_builder {
        this.setFlag("--storage-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_storage_account_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Set a web app's configuration.
 *
 * Syntax:
 * ```
 * az webapp config set [--always-on {false, true}]
 *                      [--auto-heal-enabled {false, true}]
 *                      [--ftps-state {AllAllowed, Disabled, FtpsOnly}]
 *                      [--generic-configurations]
 *                      [--http20-enabled {false, true}]
 *                      [--ids]
 *                      [--java-container]
 *                      [--java-container-version]
 *                      [--java-version]
 *                      [--linux-fx-version]
 *                      [--min-tls-version]
 *                      [--name]
 *                      [--net-framework-version]
 *                      [--number-of-workers]
 *                      [--php-version]
 *                      [--prewarmed-instance-count]
 *                      [--python-version]
 *                      [--remote-debugging-enabled {false, true}]
 *                      [--resource-group]
 *                      [--slot]
 *                      [--startup-file]
 *                      [--subscription]
 *                      [--use-32bit-worker-process {false, true}]
 *                      [--web-sockets-enabled {false, true}]
 *                      [--windows-fx-version]
 * ```
 */
class az_webapp_config_set_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Ensure web app gets loaded all the time, rather unloaded after been idle. Recommended when you have continuous web jobs running. */
    alwaysOn(value: boolean): az_webapp_config_set_command_builder {
        this.setFlag("--always-on", value.toString());
        return this;
    }

    /** Enable or disable auto heal. */
    autoHealEnabled(value: boolean): az_webapp_config_set_command_builder {
        this.setFlag("--auto-heal-enabled", value.toString());
        return this;
    }

    /** Set the Ftps state value for an app. Default value is 'AllAllowed'. */
    ftpsState(value: 'AllAllowed' | 'Disabled' | 'FtpsOnly'): az_webapp_config_set_command_builder {
        this.setFlag("--ftps-state", value);
        return this;
    }

    /** Provide site configuration list in a format of either `key=value` pair or `@<json_file>`. */
    genericConfigurations(value: string): az_webapp_config_set_command_builder {
        this.setFlag("--generic-configurations", value);
        return this;
    }

    /** Configures a web site to allow clients to connect over http2.0. */
    http20Enabled(value: boolean): az_webapp_config_set_command_builder {
        this.setFlag("--http20-enabled", value.toString());
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_config_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The java container, e.g., Tomcat, Jetty. */
    javaContainer(value: string): az_webapp_config_set_command_builder {
        this.setFlag("--java-container", value);
        return this;
    }

    /** The version of the java container, e.g., '8.0.23' for Tomcat. */
    javaContainerVersion(value: string): az_webapp_config_set_command_builder {
        this.setFlag("--java-container-version", value);
        return this;
    }

    /** The version used to run your web app if using Java, e.g., '1.7' for Java 7, '1.8' for Java 8. */
    javaVersion(value: string): az_webapp_config_set_command_builder {
        this.setFlag("--java-version", value);
        return this;
    }

    /** The runtime stack used for your linux-based webapp, e.g., "RUBY|2.5.5", "NODE|10.14", "PHP|7.2", "DOTNETCORE|2.1". See <a href="https://aka.ms/linux-stacks">https://aka.ms/linux-stacks</a> for more info. */
    linuxFxVersion(value: string): az_webapp_config_set_command_builder {
        this.setFlag("--linux-fx-version", value);
        return this;
    }

    /** The minimum version of TLS required for SSL requests, e.g., '1.0', '1.1', '1.2'. */
    minTlsVersion(value: string): az_webapp_config_set_command_builder {
        this.setFlag("--min-tls-version", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_config_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The version used to run your web app if using .NET Framework, e.g., 'v4.0' for .NET 4.6 and 'v3.0' for .NET 3.5. */
    netFrameworkVersion(value: string): az_webapp_config_set_command_builder {
        this.setFlag("--net-framework-version", value);
        return this;
    }

    /** The number of workers to be allocated. */
    numberOfWorkers(value: string): az_webapp_config_set_command_builder {
        this.setFlag("--number-of-workers", value);
        return this;
    }

    /** The version used to run your web app if using PHP, e.g., 5.5, 5.6, 7.0. */
    phpVersion(value: string): az_webapp_config_set_command_builder {
        this.setFlag("--php-version", value);
        return this;
    }

    /** Number of pre-warmed instances a function app has. */
    prewarmedInstanceCount(value: string): az_webapp_config_set_command_builder {
        this.setFlag("--prewarmed-instance-count", value);
        return this;
    }

    /** The version used to run your web app if using Python, e.g., 2.7, 3.4. */
    pythonVersion(value: string): az_webapp_config_set_command_builder {
        this.setFlag("--python-version", value);
        return this;
    }

    /** Enable or disable remote debugging. */
    remoteDebuggingEnabled(value: boolean): az_webapp_config_set_command_builder {
        this.setFlag("--remote-debugging-enabled", value.toString());
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_set_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** The startup file for linux hosted web apps, e.g. 'process.json' for Node.js web. */
    startupFile(value: string): az_webapp_config_set_command_builder {
        this.setFlag("--startup-file", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Use 32 bits worker process or not. */
    use32BitWorkerProcess(value: boolean): az_webapp_config_set_command_builder {
        this.setFlag("--use-32bit-worker-process", value.toString());
        return this;
    }

    /** Enable or disable web sockets. */
    webSocketsEnabled(value: boolean): az_webapp_config_set_command_builder {
        this.setFlag("--web-sockets-enabled", value.toString());
        return this;
    }

    /** A docker image name used for your windows container web app, e.g., microsoft/nanoserver:ltsc2016. */
    windowsFxVersion(value: string): az_webapp_config_set_command_builder {
        this.setFlag("--windows-fx-version", value);
        return this;
    }
}

/**
 * Get the details of a web app's configuration.
 *
 * Syntax:
 * ```
 * az webapp config show [--ids]
 *                       [--name]
 *                       [--query-examples]
 *                       [--resource-group]
 *                       [--slot]
 *                       [--subscription]
 * ```
 */
class az_webapp_config_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_config_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_config_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_config_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_config_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_config_show_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_config_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Add allowed origins.
 *
 * Syntax:
 * ```
 * az webapp cors add --allowed-origins
 *                    [--ids]
 *                    [--name]
 *                    [--resource-group]
 *                    [--slot]
 *                    [--subscription]
 * ```
 *
 * @param {string} allowedOrigins Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*" and remove all other origins from the list.
 */
class az_webapp_cors_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, allowedOrigins: string) {
        super(commandPath);
        this.allowedOrigins(allowedOrigins)
    }

    /** Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*" and remove all other origins from the list. */
    allowedOrigins(value: string): az_webapp_cors_add_command_builder {
        this.setFlag("--allowed-origins", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_cors_add_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_cors_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_cors_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_cors_add_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_cors_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Remove allowed origins.
 *
 * Syntax:
 * ```
 * az webapp cors remove --allowed-origins
 *                       [--ids]
 *                       [--name]
 *                       [--resource-group]
 *                       [--slot]
 *                       [--subscription]
 * ```
 *
 * @param {string} allowedOrigins Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*" and remove all other origins from the list.
 */
class az_webapp_cors_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string, allowedOrigins: string) {
        super(commandPath);
        this.allowedOrigins(allowedOrigins)
    }

    /** Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*" and remove all other origins from the list. */
    allowedOrigins(value: string): az_webapp_cors_remove_command_builder {
        this.setFlag("--allowed-origins", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_cors_remove_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_cors_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_cors_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_cors_remove_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_cors_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show allowed origins.
 *
 * Syntax:
 * ```
 * az webapp cors show [--ids]
 *                     [--name]
 *                     [--query-examples]
 *                     [--resource-group]
 *                     [--slot]
 *                     [--subscription]
 * ```
 */
class az_webapp_cors_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_cors_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_cors_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_cors_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_cors_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_cors_show_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_cors_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List web apps that have been deleted.
 *
 * Syntax:
 * ```
 * az webapp deleted list [--name]
 *                        [--query-examples]
 *                        [--resource-group]
 *                        [--slot]
 *                        [--subscription]
 * ```
 */
class az_webapp_deleted_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_deleted_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_deleted_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_deleted_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the deleted web app slot. */
    slot(value: string): az_webapp_deleted_list_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_deleted_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Restore a deleted web app.
 *
 * Syntax:
 * ```
 * az webapp deleted restore --deleted-id
 *                           [--ids]
 *                           [--name]
 *                           [--resource-group]
 *                           [--restore-content-only]
 *                           [--slot]
 *                           [--subscription]
 * ```
 *
 * @param {string} deletedId Resource ID of the deleted web app.
 */
class az_webapp_deleted_restore_command_builder extends CommandBuilder {
    constructor(commandPath: string, deletedId: string) {
        super(commandPath);
        this.deletedId(deletedId)
    }

    /** Resource ID of the deleted web app. */
    deletedId(value: string): az_webapp_deleted_restore_command_builder {
        this.setFlag("--deleted-id", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_deleted_restore_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app to restore the deleted content to. */
    name(value: string): az_webapp_deleted_restore_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_deleted_restore_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Restore only deleted files without web app settings. */
    restoreContentOnly(value: string): az_webapp_deleted_restore_command_builder {
        this.setFlag("--restore-content-only", value);
        return this;
    }

    /** Slot to restore the deleted content to. */
    slot(value: string): az_webapp_deleted_restore_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_deleted_restore_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Configure continuous deployment via containers.
 *
 * Syntax:
 * ```
 * az webapp deployment container config --enable-cd {false, true}
 *                                       [--ids]
 *                                       [--name]
 *                                       [--resource-group]
 *                                       [--slot]
 *                                       [--subscription]
 * ```
 *
 * @param {boolean} enableCd Enable/disable continuous deployment.
 */
class az_webapp_deployment_container_config_command_builder extends CommandBuilder {
    constructor(commandPath: string, enableCd: boolean) {
        super(commandPath);
        this.enableCd(enableCd)
    }

    /** Enable/disable continuous deployment. */
    enableCd(value: boolean): az_webapp_deployment_container_config_command_builder {
        this.setFlag("--enable-cd", value.toString());
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_deployment_container_config_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_deployment_container_config_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_deployment_container_config_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_deployment_container_config_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_deployment_container_config_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the URL which can be used to configure webhooks for continuous deployment.
 *
 * Syntax:
 * ```
 * az webapp deployment container show-cd-url [--ids]
 *                                            [--name]
 *                                            [--resource-group]
 *                                            [--slot]
 *                                            [--subscription]
 * ```
 */
class az_webapp_deployment_container_show_cd_url_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_deployment_container_show_cd_url_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_deployment_container_show_cd_url_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_deployment_container_show_cd_url_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_deployment_container_show_cd_url_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_deployment_container_show_cd_url_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Configure deployment slot auto swap.
 *
 * Syntax:
 * ```
 * az webapp deployment slot auto-swap --slot
 *                                     [--auto-swap-slot]
 *                                     [--disable]
 *                                     [--ids]
 *                                     [--name]
 *                                     [--resource-group]
 *                                     [--subscription]
 * ```
 *
 * @param {string} slot The name of the slot.
 */
class az_webapp_deployment_slot_auto_swap_command_builder extends CommandBuilder {
    constructor(commandPath: string, slot: string) {
        super(commandPath);
        this.slot(slot)
    }

    /** The name of the slot. */
    slot(value: string): az_webapp_deployment_slot_auto_swap_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Target slot to auto swap. */
    autoSwapSlot(value: string): az_webapp_deployment_slot_auto_swap_command_builder {
        this.setFlag("--auto-swap-slot", value);
        return this;
    }

    /** Disable auto swap. */
    disable(value: string): az_webapp_deployment_slot_auto_swap_command_builder {
        this.setFlag("--disable", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_deployment_slot_auto_swap_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the webapp. */
    name(value: string): az_webapp_deployment_slot_auto_swap_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_deployment_slot_auto_swap_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_deployment_slot_auto_swap_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create a deployment slot.
 *
 * Syntax:
 * ```
 * az webapp deployment slot create --name
 *                                  --resource-group
 *                                  --slot
 *                                  [--configuration-source]
 *                                  [--subscription]
 * ```
 *
 * @param {string} name Name of the webapp.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} slot The name of the slot.
 */
class az_webapp_deployment_slot_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string, slot: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.slot(slot)
    }

    /** Name of the webapp. */
    name(value: string): az_webapp_deployment_slot_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_deployment_slot_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. */
    slot(value: string): az_webapp_deployment_slot_create_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Source slot to clone configurations from. Use web app's name to refer to the production slot. */
    configurationSource(value: string): az_webapp_deployment_slot_create_command_builder {
        this.setFlag("--configuration-source", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_deployment_slot_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete a deployment slot.
 *
 * Syntax:
 * ```
 * az webapp deployment slot delete --slot
 *                                  [--ids]
 *                                  [--name]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 *
 * @param {string} slot The name of the slot.
 */
class az_webapp_deployment_slot_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, slot: string) {
        super(commandPath);
        this.slot(slot)
    }

    /** The name of the slot. */
    slot(value: string): az_webapp_deployment_slot_delete_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_deployment_slot_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the webapp. */
    name(value: string): az_webapp_deployment_slot_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_deployment_slot_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_deployment_slot_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List all deployment slots.
 *
 * Syntax:
 * ```
 * az webapp deployment slot list [--ids]
 *                                [--name]
 *                                [--query-examples]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 */
class az_webapp_deployment_slot_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_deployment_slot_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the webapp. */
    name(value: string): az_webapp_deployment_slot_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_deployment_slot_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_deployment_slot_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_deployment_slot_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Change deployment slots for a web app.
 *
 * Syntax:
 * ```
 * az webapp deployment slot swap --slot
 *                                [--action {preview, reset, swap}]
 *                                [--ids]
 *                                [--name]
 *                                [--resource-group]
 *                                [--subscription]
 *                                [--target-slot]
 * ```
 *
 * @param {string} slot The name of the slot.
 */
class az_webapp_deployment_slot_swap_command_builder extends CommandBuilder {
    constructor(commandPath: string, slot: string) {
        super(commandPath);
        this.slot(slot)
    }

    /** The name of the slot. */
    slot(value: string): az_webapp_deployment_slot_swap_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Swap types. use 'preview' to apply target slot's settings on the source slot first; use 'swap' to complete it; use 'reset' to reset the swap. */
    action(value: 'preview' | 'reset' | 'swap'): az_webapp_deployment_slot_swap_command_builder {
        this.setFlag("--action", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_deployment_slot_swap_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the webapp. */
    name(value: string): az_webapp_deployment_slot_swap_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_deployment_slot_swap_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_deployment_slot_swap_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Target slot to swap, default to 'production'. */
    targetSlot(value: string): az_webapp_deployment_slot_swap_command_builder {
        this.setFlag("--target-slot", value);
        return this;
    }
}

/**
 * Manage deployment from git or Mercurial repositories.
 *
 * Syntax:
 * ```
 * az webapp deployment source config --repo-url
 *                                    [--app-working-dir]
 *                                    [--branch]
 *                                    [--cd-account-create]
 *                                    [--cd-app-type {AspNet, AspNetCore, NodeJS, PHP, Python}]
 *                                    [--cd-project-url]
 *                                    [--git-token]
 *                                    [--ids]
 *                                    [--manual-integration]
 *                                    [--name]
 *                                    [--nodejs-task-runner {Grunt, Gulp, None}]
 *                                    [--private-repo-password]
 *                                    [--private-repo-username]
 *                                    [--python-framework {Bottle, Django, Flask}]
 *                                    [--python-version {Python 2.7.12 x64, Python 2.7.12 x86, Python 2.7.13 x64, Python 2.7.13 x86, Python 3.5.3 x64, Python 3.5.3 x86, Python 3.6.0 x64, Python 3.6.0 x86, Python 3.6.1 x86, Python 3.6.2 x64}]
 *                                    [--repository-type {externalgit, git, github, localgit, mercurial, vsts}]
 *                                    [--resource-group]
 *                                    [--slot]
 *                                    [--slot-swap]
 *                                    [--subscription]
 *                                    [--test]
 * ```
 *
 * @param {string} repoUrl Repository url to pull the latest source from, e.g. <a href="https://github.com/foo/foo-web">https://github.com/foo/foo-web</a>.
 */
class az_webapp_deployment_source_config_command_builder extends CommandBuilder {
    constructor(commandPath: string, repoUrl: string) {
        super(commandPath);
        this.repoUrl(repoUrl)
    }

    /** Repository url to pull the latest source from, e.g. <a href="https://github.com/foo/foo-web">https://github.com/foo/foo-web</a>. */
    repoUrl(value: string): az_webapp_deployment_source_config_command_builder {
        this.setFlag("--repo-url", value);
        return this;
    }

    /** Working directory of the application. Default will be root of the repo. */
    appWorkingDir(value: string): az_webapp_deployment_source_config_command_builder {
        this.setFlag("--app-working-dir", value);
        return this;
    }

    /** The branch name of the repository. */
    branch(value: string): az_webapp_deployment_source_config_command_builder {
        this.setFlag("--branch", value);
        return this;
    }

    /** To create a new Visual Studio Team Services (VSTS) account if it doesn't exist already. */
    cdAccountCreate(value: string): az_webapp_deployment_source_config_command_builder {
        this.setFlag("--cd-account-create", value);
        return this;
    }

    /** Web application framework you used to develop your app. Default is AspNet. */
    cdAppType(value: 'AspNet' | 'AspNetCore' | 'NodeJS' | 'PHP' | 'Python'): az_webapp_deployment_source_config_command_builder {
        this.setFlag("--cd-app-type", value);
        return this;
    }

    /** URL of the Visual Studio Team Services (VSTS) project to use for continuous delivery. URL should be in format `https://<accountname>.visualstudio.com/<projectname>`. */
    cdProjectUrl(value: string): az_webapp_deployment_source_config_command_builder {
        this.setFlag("--cd-project-url", value);
        return this;
    }

    /** Git access token required for auto sync. */
    gitToken(value: string): az_webapp_deployment_source_config_command_builder {
        this.setFlag("--git-token", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_deployment_source_config_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Disable automatic sync between source control and web. */
    manualIntegration(value: string): az_webapp_deployment_source_config_command_builder {
        this.setFlag("--manual-integration", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_deployment_source_config_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Task runner for nodejs. Default is None. */
    nodejsTaskRunner(value: 'Grunt' | 'Gulp' | 'None'): az_webapp_deployment_source_config_command_builder {
        this.setFlag("--nodejs-task-runner", value);
        return this;
    }

    /** Password for the private repository. */
    privateRepoPassword(value: string): az_webapp_deployment_source_config_command_builder {
        this.setFlag("--private-repo-password", value);
        return this;
    }

    /** Username for the private repository. */
    privateRepoUsername(value: string): az_webapp_deployment_source_config_command_builder {
        this.setFlag("--private-repo-username", value);
        return this;
    }

    /** Framework used for Python application. Default is Django. */
    pythonFramework(value: 'Bottle' | 'Django' | 'Flask'): az_webapp_deployment_source_config_command_builder {
        this.setFlag("--python-framework", value);
        return this;
    }

    /** Python version used for application. Default is Python 3.5.3 x86. */
    pythonVersion(value: 'Python 2.7.12 x64' | 'Python 2.7.12 x86' | 'Python 2.7.13 x64' | 'Python 2.7.13 x86' | 'Python 3.5.3 x64' | 'Python 3.5.3 x86' | 'Python 3.6.0 x64' | 'Python 3.6.0 x86' | 'Python 3.6.1 x86' | 'Python 3.6.2 x64'): az_webapp_deployment_source_config_command_builder {
        this.setFlag("--python-version", value);
        return this;
    }

    /** Repository type. */
    repositoryType(value: 'externalgit' | 'git' | 'github' | 'localgit' | 'mercurial' | 'vsts'): az_webapp_deployment_source_config_command_builder {
        this.setFlag("--repository-type", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_deployment_source_config_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_deployment_source_config_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name of the slot to be used for deployment and later promote to production. If slot is not available, it will be created. Default: Not configured. */
    slotSwap(value: string): az_webapp_deployment_source_config_command_builder {
        this.setFlag("--slot-swap", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_deployment_source_config_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the web app to be used for load testing. If web app is not available, it will be created. Default: Disable. */
    test(value: string): az_webapp_deployment_source_config_command_builder {
        this.setFlag("--test", value);
        return this;
    }
}

/**
 * Get a URL for a git repository endpoint to clone and push to for web app deployment.
 *
 * Syntax:
 * ```
 * az webapp deployment source config-local-git [--ids]
 *                                              [--name]
 *                                              [--resource-group]
 *                                              [--slot]
 *                                              [--subscription]
 * ```
 */
class az_webapp_deployment_source_config_local_git_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_deployment_source_config_local_git_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_deployment_source_config_local_git_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_deployment_source_config_local_git_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_deployment_source_config_local_git_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_deployment_source_config_local_git_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Perform deployment using the kudu zip push deployment for a web app.
 *
 * Syntax:
 * ```
 * az webapp deployment source config-zip --src
 *                                        [--ids]
 *                                        [--name]
 *                                        [--resource-group]
 *                                        [--slot]
 *                                        [--subscription]
 *                                        [--timeout]
 * ```
 *
 * @param {string} src A zip file path for deployment.
 */
class az_webapp_deployment_source_config_zip_command_builder extends CommandBuilder {
    constructor(commandPath: string, src: string) {
        super(commandPath);
        this.src(src)
    }

    /** A zip file path for deployment. */
    src(value: string): az_webapp_deployment_source_config_zip_command_builder {
        this.setFlag("--src", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_deployment_source_config_zip_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_deployment_source_config_zip_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_deployment_source_config_zip_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_deployment_source_config_zip_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_deployment_source_config_zip_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Configurable timeout in seconds for checking the status of deployment. */
    timeout(value: string): az_webapp_deployment_source_config_zip_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }
}

/**
 * Delete a source control deployment configuration.
 *
 * Syntax:
 * ```
 * az webapp deployment source delete [--ids]
 *                                    [--name]
 *                                    [--resource-group]
 *                                    [--slot]
 *                                    [--subscription]
 * ```
 */
class az_webapp_deployment_source_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_deployment_source_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_deployment_source_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_deployment_source_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_deployment_source_delete_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_deployment_source_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the details of a source control deployment configuration.
 *
 * Syntax:
 * ```
 * az webapp deployment source show [--ids]
 *                                  [--name]
 *                                  [--query-examples]
 *                                  [--resource-group]
 *                                  [--slot]
 *                                  [--subscription]
 * ```
 */
class az_webapp_deployment_source_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_deployment_source_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_deployment_source_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_deployment_source_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_deployment_source_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_deployment_source_show_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_deployment_source_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Synchronize from the repository. Only needed under manual integration mode.
 *
 * Syntax:
 * ```
 * az webapp deployment source sync [--ids]
 *                                  [--name]
 *                                  [--resource-group]
 *                                  [--slot]
 *                                  [--subscription]
 * ```
 */
class az_webapp_deployment_source_sync_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_deployment_source_sync_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_deployment_source_sync_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_deployment_source_sync_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_deployment_source_sync_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_deployment_source_sync_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update source control token cached in Azure app service.
 *
 * Syntax:
 * ```
 * az webapp deployment source update-token [--git-token]
 *                                          [--subscription]
 * ```
 */
class az_webapp_deployment_source_update_token_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Git access token required for auto sync. */
    gitToken(value: string): az_webapp_deployment_source_update_token_command_builder {
        this.setFlag("--git-token", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_deployment_source_update_token_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update deployment credentials.
 *
 * Syntax:
 * ```
 * az webapp deployment user set --user-name
 *                               [--password]
 *                               [--subscription]
 * ```
 *
 * @param {string} userName User name.
 */
class az_webapp_deployment_user_set_command_builder extends CommandBuilder {
    constructor(commandPath: string, userName: string) {
        super(commandPath);
        this.userName(userName)
    }

    /** User name. */
    userName(value: string): az_webapp_deployment_user_set_command_builder {
        this.setFlag("--user-name", value);
        return this;
    }

    /** Password, will prompt if not specified. */
    password(value: string): az_webapp_deployment_user_set_command_builder {
        this.setFlag("--password", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_deployment_user_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get deployment publishing user.
 *
 * Syntax:
 * ```
 * az webapp deployment user show [--query-examples]
 *                                [--subscription]
 * ```
 */
class az_webapp_deployment_user_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_deployment_user_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_deployment_user_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the details for available web app publishing credentials.
 *
 * Syntax:
 * ```
 * az webapp deployment list-publishing-credentials [--ids]
 *                                                  [--name]
 *                                                  [--resource-group]
 *                                                  [--slot]
 *                                                  [--subscription]
 * ```
 */
class az_webapp_deployment_list_publishing_credentials_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_deployment_list_publishing_credentials_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_deployment_list_publishing_credentials_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_deployment_list_publishing_credentials_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_deployment_list_publishing_credentials_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_deployment_list_publishing_credentials_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the details for available web app deployment profiles.
 *
 * Syntax:
 * ```
 * az webapp deployment list-publishing-profiles [--ids]
 *                                               [--name]
 *                                               [--resource-group]
 *                                               [--slot]
 *                                               [--subscription]
 *                                               [--xml]
 * ```
 */
class az_webapp_deployment_list_publishing_profiles_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_deployment_list_publishing_profiles_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_deployment_list_publishing_profiles_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_deployment_list_publishing_profiles_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_deployment_list_publishing_profiles_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_deployment_list_publishing_profiles_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Retrieves the publishing profile details in XML format. */
    xml(value: string): az_webapp_deployment_list_publishing_profiles_command_builder {
        this.setFlag("--xml", value);
        return this;
    }
}

/**
 * Add a hybrid-connection to a webapp.
 *
 * Syntax:
 * ```
 * az webapp hybrid-connection add --hybrid-connection
 *                                 --name
 *                                 --namespace
 *                                 --resource-group
 *                                 [--slot]
 *                                 [--subscription]
 * ```
 *
 * @param {string} hybridConnection Hybrid connection name.
 * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
 * @param {string} namespace Hybrid connection namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_webapp_hybrid_connection_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, hybridConnection: string, name: string, namespace: string, resourceGroup: string) {
        super(commandPath);
        this.hybridConnection(hybridConnection)
        this.name(name)
        this.namespace(namespace)
        this.resourceGroup(resourceGroup)
    }

    /** Hybrid connection name. */
    hybridConnection(value: string): az_webapp_hybrid_connection_add_command_builder {
        this.setFlag("--hybrid-connection", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_hybrid_connection_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Hybrid connection namespace. */
    namespace(value: string): az_webapp_hybrid_connection_add_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_hybrid_connection_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_hybrid_connection_add_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_hybrid_connection_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the hybrid-connections on a webapp.
 *
 * Syntax:
 * ```
 * az webapp hybrid-connection list --name
 *                                  --resource-group
 *                                  [--query-examples]
 *                                  [--slot]
 *                                  [--subscription]
 * ```
 *
 * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_webapp_hybrid_connection_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_hybrid_connection_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_hybrid_connection_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_hybrid_connection_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_hybrid_connection_list_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_hybrid_connection_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Remove a hybrid-connection from a webapp.
 *
 * Syntax:
 * ```
 * az webapp hybrid-connection remove --hybrid-connection
 *                                    --name
 *                                    --namespace
 *                                    --resource-group
 *                                    [--slot]
 *                                    [--subscription]
 * ```
 *
 * @param {string} hybridConnection Hybrid connection name.
 * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
 * @param {string} namespace Hybrid connection namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_webapp_hybrid_connection_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string, hybridConnection: string, name: string, namespace: string, resourceGroup: string) {
        super(commandPath);
        this.hybridConnection(hybridConnection)
        this.name(name)
        this.namespace(namespace)
        this.resourceGroup(resourceGroup)
    }

    /** Hybrid connection name. */
    hybridConnection(value: string): az_webapp_hybrid_connection_remove_command_builder {
        this.setFlag("--hybrid-connection", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_hybrid_connection_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Hybrid connection namespace. */
    namespace(value: string): az_webapp_hybrid_connection_remove_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_hybrid_connection_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_hybrid_connection_remove_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_hybrid_connection_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Assign managed service identity to the web app.
 *
 * Syntax:
 * ```
 * az webapp identity assign [--identities]
 *                           [--ids]
 *                           [--name]
 *                           [--resource-group]
 *                           [--role]
 *                           [--scope]
 *                           [--slot]
 *                           [--subscription]
 * ```
 */
class az_webapp_identity_assign_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'. */
    identities(value: string): az_webapp_identity_assign_command_builder {
        this.setFlag("--identities", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_identity_assign_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_identity_assign_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_identity_assign_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Role name or id the managed identity will be assigned. */
    role(value: string): az_webapp_identity_assign_command_builder {
        this.setFlag("--role", value);
        return this;
    }

    /** The scope the managed identity has access to. */
    scope(value: string): az_webapp_identity_assign_command_builder {
        this.setFlag("--scope", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_identity_assign_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_identity_assign_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Disable web app's managed service identity.
 *
 * Syntax:
 * ```
 * az webapp identity remove [--identities]
 *                           [--ids]
 *                           [--name]
 *                           [--resource-group]
 *                           [--slot]
 *                           [--subscription]
 * ```
 */
class az_webapp_identity_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'. */
    identities(value: string): az_webapp_identity_remove_command_builder {
        this.setFlag("--identities", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_identity_remove_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_identity_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_identity_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_identity_remove_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_identity_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Display web app's managed service identity.
 *
 * Syntax:
 * ```
 * az webapp identity show [--ids]
 *                         [--name]
 *                         [--query-examples]
 *                         [--resource-group]
 *                         [--slot]
 *                         [--subscription]
 * ```
 */
class az_webapp_identity_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_identity_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_identity_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_identity_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_identity_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_identity_show_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_identity_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List deployments associated with web app.
 *
 * Syntax:
 * ```
 * az webapp log deployment list --name
 *                               --resource-group
 *                               [--query-examples]
 *                               [--slot]
 *                               [--subscription]
 * ```
 *
 * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_webapp_log_deployment_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_log_deployment_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_log_deployment_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_log_deployment_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_log_deployment_list_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_log_deployment_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show deployment logs of the latest deployment, or a specific deployment if deployment-id is specified.
 *
 * Syntax:
 * ```
 * az webapp log deployment show --name
 *                               --resource-group
 *                               [--deployment-id]
 *                               [--query-examples]
 *                               [--slot]
 *                               [--subscription]
 * ```
 *
 * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_webapp_log_deployment_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_log_deployment_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_log_deployment_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Deployment ID. If none specified, returns the deployment logs of the latest deployment. */
    deploymentId(value: string): az_webapp_log_deployment_show_command_builder {
        this.setFlag("--deployment-id", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_log_deployment_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_log_deployment_show_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_log_deployment_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Configure logging for a web app.
 *
 * Syntax:
 * ```
 * az webapp log config [--application-logging {azureblobstorage, filesystem, off}]
 *                      [--detailed-error-messages {false, true}]
 *                      [--docker-container-logging {filesystem, off}]
 *                      [--failed-request-tracing {false, true}]
 *                      [--ids]
 *                      [--level {error, information, verbose, warning}]
 *                      [--name]
 *                      [--resource-group]
 *                      [--slot]
 *                      [--subscription]
 *                      [--web-server-logging {filesystem, off}]
 * ```
 */
class az_webapp_log_config_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Configure application logging. */
    applicationLogging(value: 'azureblobstorage' | 'filesystem' | 'off'): az_webapp_log_config_command_builder {
        this.setFlag("--application-logging", value);
        return this;
    }

    /** Configure detailed error messages. */
    detailedErrorMessages(value: boolean): az_webapp_log_config_command_builder {
        this.setFlag("--detailed-error-messages", value.toString());
        return this;
    }

    /** Configure gathering STDOUT and STDERR output from container. */
    dockerContainerLogging(value: 'filesystem' | 'off'): az_webapp_log_config_command_builder {
        this.setFlag("--docker-container-logging", value);
        return this;
    }

    /** Configure failed request tracing. */
    failedRequestTracing(value: boolean): az_webapp_log_config_command_builder {
        this.setFlag("--failed-request-tracing", value.toString());
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_log_config_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Logging level. */
    level(value: 'error' | 'information' | 'verbose' | 'warning'): az_webapp_log_config_command_builder {
        this.setFlag("--level", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_log_config_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_log_config_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_log_config_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_log_config_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Configure Web server logging. */
    webServerLogging(value: 'filesystem' | 'off'): az_webapp_log_config_command_builder {
        this.setFlag("--web-server-logging", value);
        return this;
    }
}

/**
 * Download a web app's log history as a zip file.
 *
 * Syntax:
 * ```
 * az webapp log download [--ids]
 *                        [--log-file]
 *                        [--name]
 *                        [--resource-group]
 *                        [--slot]
 *                        [--subscription]
 * ```
 */
class az_webapp_log_download_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_log_download_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The downloaded zipped log file path. */
    logFile(value: string): az_webapp_log_download_command_builder {
        this.setFlag("--log-file", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_log_download_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_log_download_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_log_download_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_log_download_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the details of a web app's logging configuration.
 *
 * Syntax:
 * ```
 * az webapp log show [--ids]
 *                    [--name]
 *                    [--query-examples]
 *                    [--resource-group]
 *                    [--slot]
 *                    [--subscription]
 * ```
 */
class az_webapp_log_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_log_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_log_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_log_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_log_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_log_show_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_log_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Start live log tracing for a web app.
 *
 * Syntax:
 * ```
 * az webapp log tail [--ids]
 *                    [--name]
 *                    [--provider]
 *                    [--resource-group]
 *                    [--slot]
 *                    [--subscription]
 * ```
 */
class az_webapp_log_tail_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_log_tail_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_log_tail_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** By default all live traces configured by `az webapp log config` will be shown, but you can scope to certain providers/folders, e.g. 'application', 'http', etc. For details, check out <a href="https://github.com/projectkudu/kudu/wiki/Diagnostic-Log-Stream">https://github.com/projectkudu/kudu/wiki/Diagnostic-Log-Stream</a>. */
    provider(value: string): az_webapp_log_tail_command_builder {
        this.setFlag("--provider", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_log_tail_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_log_tail_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_log_tail_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Clear the routing rules and send all traffic to production.
 *
 * Syntax:
 * ```
 * az webapp traffic-routing clear [--ids]
 *                                 [--name]
 *                                 [--resource-group]
 *                                 [--subscription]
 * ```
 */
class az_webapp_traffic_routing_clear_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_traffic_routing_clear_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_traffic_routing_clear_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_traffic_routing_clear_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_traffic_routing_clear_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Configure routing traffic to deployment slots.
 *
 * Syntax:
 * ```
 * az webapp traffic-routing set --distribution
 *                               [--ids]
 *                               [--name]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 *
 * @param {string} distribution Space-separated slot routings in a format of `<slot-name>=<percentage>` e.g. staging=50. Unused traffic percentage will go to the Production slot.
 */
class az_webapp_traffic_routing_set_command_builder extends CommandBuilder {
    constructor(commandPath: string, distribution: string) {
        super(commandPath);
        this.distribution(distribution)
    }

    /** Space-separated slot routings in a format of `<slot-name>=<percentage>` e.g. staging=50. Unused traffic percentage will go to the Production slot. */
    distribution(value: string): az_webapp_traffic_routing_set_command_builder {
        this.setFlag("--distribution", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_traffic_routing_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_traffic_routing_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_traffic_routing_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_traffic_routing_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Display the current distribution of traffic across slots.
 *
 * Syntax:
 * ```
 * az webapp traffic-routing show [--ids]
 *                                [--name]
 *                                [--query-examples]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 */
class az_webapp_traffic_routing_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_traffic_routing_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_traffic_routing_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_traffic_routing_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_traffic_routing_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_traffic_routing_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Add a regional virtual network integration to a webapp.
 *
 * Syntax:
 * ```
 * az webapp vnet-integration add --name
 *                                --resource-group
 *                                --subnet
 *                                --vnet
 *                                [--slot]
 *                                [--subscription]
 * ```
 *
 * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} subnet The name of the subnet.
 * @param {string} vnet The name or resource ID of the Vnet.
 */
class az_webapp_vnet_integration_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string, subnet: string, vnet: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.subnet(subnet)
        this.vnet(vnet)
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_vnet_integration_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_vnet_integration_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the subnet. */
    subnet(value: string): az_webapp_vnet_integration_add_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** The name or resource ID of the Vnet. */
    vnet(value: string): az_webapp_vnet_integration_add_command_builder {
        this.setFlag("--vnet", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_vnet_integration_add_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_vnet_integration_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the virtual network integrations on a webapp.
 *
 * Syntax:
 * ```
 * az webapp vnet-integration list --name
 *                                 --resource-group
 *                                 [--query-examples]
 *                                 [--slot]
 *                                 [--subscription]
 * ```
 *
 * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_webapp_vnet_integration_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_vnet_integration_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_vnet_integration_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_vnet_integration_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_vnet_integration_list_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_vnet_integration_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Remove a regional virtual network integration from webapp.
 *
 * Syntax:
 * ```
 * az webapp vnet-integration remove --name
 *                                   --resource-group
 *                                   [--slot]
 *                                   [--subscription]
 * ```
 *
 * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_webapp_vnet_integration_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_vnet_integration_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_vnet_integration_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_vnet_integration_remove_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_vnet_integration_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List all continuous webjobs on a selected web app.
 *
 * Syntax:
 * ```
 * az webapp webjob continuous list --name
 *                                  --resource-group
 *                                  [--query-examples]
 *                                  [--slot]
 *                                  [--subscription]
 * ```
 *
 * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_webapp_webjob_continuous_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_webjob_continuous_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_webjob_continuous_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_webjob_continuous_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_webjob_continuous_list_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_webjob_continuous_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete a specific continuous webjob.
 *
 * Syntax:
 * ```
 * az webapp webjob continuous remove --webjob-name
 *                                    [--ids]
 *                                    [--name]
 *                                    [--resource-group]
 *                                    [--slot]
 *                                    [--subscription]
 * ```
 *
 * @param {string} webjobName The name of the webjob.
 */
class az_webapp_webjob_continuous_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string, webjobName: string) {
        super(commandPath);
        this.webjobName(webjobName)
    }

    /** The name of the webjob. */
    webjobName(value: string): az_webapp_webjob_continuous_remove_command_builder {
        this.setFlag("--webjob-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_webjob_continuous_remove_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_webjob_continuous_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_webjob_continuous_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_webjob_continuous_remove_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_webjob_continuous_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Start a specific continuous webjob on a selected web app.
 *
 * Syntax:
 * ```
 * az webapp webjob continuous start --webjob-name
 *                                   [--ids]
 *                                   [--name]
 *                                   [--resource-group]
 *                                   [--slot]
 *                                   [--subscription]
 * ```
 *
 * @param {string} webjobName The name of the webjob.
 */
class az_webapp_webjob_continuous_start_command_builder extends CommandBuilder {
    constructor(commandPath: string, webjobName: string) {
        super(commandPath);
        this.webjobName(webjobName)
    }

    /** The name of the webjob. */
    webjobName(value: string): az_webapp_webjob_continuous_start_command_builder {
        this.setFlag("--webjob-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_webjob_continuous_start_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_webjob_continuous_start_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_webjob_continuous_start_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_webjob_continuous_start_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_webjob_continuous_start_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Stop a specific continuous webjob.
 *
 * Syntax:
 * ```
 * az webapp webjob continuous stop --webjob-name
 *                                  [--ids]
 *                                  [--name]
 *                                  [--resource-group]
 *                                  [--slot]
 *                                  [--subscription]
 * ```
 *
 * @param {string} webjobName The name of the webjob.
 */
class az_webapp_webjob_continuous_stop_command_builder extends CommandBuilder {
    constructor(commandPath: string, webjobName: string) {
        super(commandPath);
        this.webjobName(webjobName)
    }

    /** The name of the webjob. */
    webjobName(value: string): az_webapp_webjob_continuous_stop_command_builder {
        this.setFlag("--webjob-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_webjob_continuous_stop_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_webjob_continuous_stop_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_webjob_continuous_stop_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_webjob_continuous_stop_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_webjob_continuous_stop_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List all triggered webjobs hosted on a web app.
 *
 * Syntax:
 * ```
 * az webapp webjob triggered list --name
 *                                 --resource-group
 *                                 [--query-examples]
 *                                 [--slot]
 *                                 [--subscription]
 * ```
 *
 * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_webapp_webjob_triggered_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_webjob_triggered_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_webjob_triggered_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_webjob_triggered_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_webjob_triggered_list_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_webjob_triggered_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get history of a specific triggered webjob hosted on a web app.
 *
 * Syntax:
 * ```
 * az webapp webjob triggered log --webjob-name
 *                                [--ids]
 *                                [--name]
 *                                [--resource-group]
 *                                [--slot]
 *                                [--subscription]
 * ```
 *
 * @param {string} webjobName The name of the webjob.
 */
class az_webapp_webjob_triggered_log_command_builder extends CommandBuilder {
    constructor(commandPath: string, webjobName: string) {
        super(commandPath);
        this.webjobName(webjobName)
    }

    /** The name of the webjob. */
    webjobName(value: string): az_webapp_webjob_triggered_log_command_builder {
        this.setFlag("--webjob-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_webjob_triggered_log_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_webjob_triggered_log_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_webjob_triggered_log_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_webjob_triggered_log_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_webjob_triggered_log_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete a specific triggered webjob hosted on a web app.
 *
 * Syntax:
 * ```
 * az webapp webjob triggered remove --webjob-name
 *                                   [--ids]
 *                                   [--name]
 *                                   [--resource-group]
 *                                   [--slot]
 *                                   [--subscription]
 * ```
 *
 * @param {string} webjobName The name of the webjob.
 */
class az_webapp_webjob_triggered_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string, webjobName: string) {
        super(commandPath);
        this.webjobName(webjobName)
    }

    /** The name of the webjob. */
    webjobName(value: string): az_webapp_webjob_triggered_remove_command_builder {
        this.setFlag("--webjob-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_webjob_triggered_remove_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_webjob_triggered_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_webjob_triggered_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_webjob_triggered_remove_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_webjob_triggered_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Run a specific triggered webjob hosted on a web app.
 *
 * Syntax:
 * ```
 * az webapp webjob triggered run --webjob-name
 *                                [--ids]
 *                                [--name]
 *                                [--resource-group]
 *                                [--slot]
 *                                [--subscription]
 * ```
 *
 * @param {string} webjobName The name of the webjob.
 */
class az_webapp_webjob_triggered_run_command_builder extends CommandBuilder {
    constructor(commandPath: string, webjobName: string) {
        super(commandPath);
        this.webjobName(webjobName)
    }

    /** The name of the webjob. */
    webjobName(value: string): az_webapp_webjob_triggered_run_command_builder {
        this.setFlag("--webjob-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_webjob_triggered_run_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_webjob_triggered_run_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_webjob_triggered_run_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_webjob_triggered_run_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_webjob_triggered_run_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Open a web app in a browser.
 *
 * Syntax:
 * ```
 * az webapp browse [--ids]
 *                  [--logs]
 *                  [--name]
 *                  [--resource-group]
 *                  [--slot]
 *                  [--subscription]
 * ```
 */
class az_webapp_browse_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_browse_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Enable viewing the log stream immediately after launching the web app. */
    logs(value: string): az_webapp_browse_command_builder {
        this.setFlag("--logs", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_browse_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_browse_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_browse_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_browse_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create a web app.
 *
 * Syntax:
 * ```
 * az webapp create --name
 *                  --plan
 *                  --resource-group
 *                  [--assign-identity]
 *                  [--deployment-container-image-name]
 *                  [--deployment-local-git]
 *                  [--deployment-source-branch]
 *                  [--deployment-source-url]
 *                  [--docker-registry-server-password]
 *                  [--docker-registry-server-user]
 *                  [--multicontainer-config-file]
 *                  [--multicontainer-config-type {COMPOSE, KUBE}]
 *                  [--role]
 *                  [--runtime]
 *                  [--scope]
 *                  [--startup-file]
 *                  [--subscription]
 *                  [--tags]
 * ```
 *
 * @param {string} name Name of the new web app.
 * @param {string} plan Name or resource id of the app service plan. Use 'appservice plan create' to get one.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_webapp_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, plan: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.plan(plan)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the new web app. */
    name(value: string): az_webapp_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or resource id of the app service plan. Use 'appservice plan create' to get one. */
    plan(value: string): az_webapp_create_command_builder {
        this.setFlag("--plan", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Accept system or user assigned identities separated by spaces. Use '[system]' to refer system assigned identity, or a resource id to refer user assigned identity. Check out help for more examples. */
    assignIdentity(value: string): az_webapp_create_command_builder {
        this.setFlag("--assign-identity", value);
        return this;
    }

    /** Linux only. Container image name from Docker Hub, e.g. publisher/image-name:tag. */
    deploymentContainerImageName(value: string): az_webapp_create_command_builder {
        this.setFlag("--deployment-container-image-name", value);
        return this;
    }

    /** Enable local git. */
    deploymentLocalGit(value: string): az_webapp_create_command_builder {
        this.setFlag("--deployment-local-git", value);
        return this;
    }

    /** The branch to deploy. */
    deploymentSourceBranch(value: string): az_webapp_create_command_builder {
        this.setFlag("--deployment-source-branch", value);
        return this;
    }

    /** Git repository URL to link with manual integration. */
    deploymentSourceUrl(value: string): az_webapp_create_command_builder {
        this.setFlag("--deployment-source-url", value);
        return this;
    }

    /** The container registry server password. Required for private registries. */
    dockerRegistryServerPassword(value: string): az_webapp_create_command_builder {
        this.setFlag("--docker-registry-server-password", value);
        return this;
    }

    /** The container registry server username. */
    dockerRegistryServerUser(value: string): az_webapp_create_command_builder {
        this.setFlag("--docker-registry-server-user", value);
        return this;
    }

    /** Linux only. Config file for multicontainer apps. (local or remote). */
    multicontainerConfigFile(value: string): az_webapp_create_command_builder {
        this.setFlag("--multicontainer-config-file", value);
        return this;
    }

    /** Linux only. */
    multicontainerConfigType(value: 'COMPOSE' | 'KUBE'): az_webapp_create_command_builder {
        this.setFlag("--multicontainer-config-type", value);
        return this;
    }

    /** Role name or id the system assigned identity will have. */
    role(value: string): az_webapp_create_command_builder {
        this.setFlag("--role", value);
        return this;
    }

    /** Canonicalized web runtime in the format of Framework|Version, e.g. "PHP|7.2". Use `az webapp list-runtimes` for available list. */
    runtime(value: string): az_webapp_create_command_builder {
        this.setFlag("--runtime", value);
        return this;
    }

    /** Scope that the system assigned identity can access. */
    scope(value: string): az_webapp_create_command_builder {
        this.setFlag("--scope", value);
        return this;
    }

    /** Linux only. The web's startup file. */
    startupFile(value: string): az_webapp_create_command_builder {
        this.setFlag("--startup-file", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_webapp_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

/**
 * Creates a remote connection using a tcp tunnel to your web app.
 *
 * Syntax:
 * ```
 * az webapp create-remote-connection [--ids]
 *                                    [--instance]
 *                                    [--name]
 *                                    [--port]
 *                                    [--resource-group]
 *                                    [--slot]
 *                                    [--subscription]
 *                                    [--timeout]
 * ```
 */
class az_webapp_create_remote_connection_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_create_remote_connection_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Webapp instance to connect to. Defaults to none. */
    instance(value: string): az_webapp_create_remote_connection_command_builder {
        this.setFlag("--instance", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_create_remote_connection_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Port for the remote connection. Default: Random available port. */
    port(value: string): az_webapp_create_remote_connection_command_builder {
        this.setFlag("--port", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_create_remote_connection_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_create_remote_connection_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_create_remote_connection_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Timeout in seconds. Defaults to none. */
    timeout(value: string): az_webapp_create_remote_connection_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }
}

/**
 * Delete a web app.
 *
 * Syntax:
 * ```
 * az webapp delete [--ids]
 *                  [--keep-dns-registration]
 *                  [--keep-empty-plan]
 *                  [--keep-metrics]
 *                  [--name]
 *                  [--resource-group]
 *                  [--slot]
 *                  [--subscription]
 * ```
 */
class az_webapp_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Keep DNS registration. */
    keepDnsRegistration(value: string): az_webapp_delete_command_builder {
        this.setFlag("--keep-dns-registration", value);
        return this;
    }

    /** Keep empty app service plan. */
    keepEmptyPlan(value: string): az_webapp_delete_command_builder {
        this.setFlag("--keep-empty-plan", value);
        return this;
    }

    /** Keep app metrics. */
    keepMetrics(value: string): az_webapp_delete_command_builder {
        this.setFlag("--keep-metrics", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_delete_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List web apps.
 *
 * Syntax:
 * ```
 * az webapp list [--query-examples]
 *                [--resource-group]
 *                [--subscription]
 * ```
 */
class az_webapp_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List all scaled out instances of a web app or web app slot.
 *
 * Syntax:
 * ```
 * az webapp list-instances --name
 *                          --resource-group
 *                          [--slot]
 *                          [--subscription]
 * ```
 *
 * @param {string} name Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_webapp_list_instances_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_list_instances_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_list_instances_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the web app slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_list_instances_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_list_instances_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List available built-in stacks which can be used for web apps.
 *
 * Syntax:
 * ```
 * az webapp list-runtimes [--linux]
 *                         [--subscription]
 * ```
 */
class az_webapp_list_runtimes_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** List runtime stacks for linux based web apps. */
    linux(value: string): az_webapp_list_runtimes_command_builder {
        this.setFlag("--linux", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_list_runtimes_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Restart a web app.
 *
 * Syntax:
 * ```
 * az webapp restart [--ids]
 *                   [--name]
 *                   [--resource-group]
 *                   [--slot]
 *                   [--subscription]
 * ```
 */
class az_webapp_restart_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_restart_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_restart_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_restart_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_restart_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_restart_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the details of a web app.
 *
 * Syntax:
 * ```
 * az webapp show [--ids]
 *                [--name]
 *                [--query-examples]
 *                [--resource-group]
 *                [--slot]
 *                [--subscription]
 * ```
 */
class az_webapp_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_webapp_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_show_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * SSH command establishes a ssh session to the web container and developer would get a shell terminal remotely.
 *
 * Syntax:
 * ```
 * az webapp ssh [--ids]
 *               [--instance]
 *               [--name]
 *               [--port]
 *               [--resource-group]
 *               [--slot]
 *               [--subscription]
 *               [--timeout]
 * ```
 */
class az_webapp_ssh_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_ssh_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Webapp instance to connect to. Defaults to none. */
    instance(value: string): az_webapp_ssh_command_builder {
        this.setFlag("--instance", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_ssh_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Port for the remote connection. Default: Random available port. */
    port(value: string): az_webapp_ssh_command_builder {
        this.setFlag("--port", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_ssh_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_ssh_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_ssh_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Timeout in seconds. Defaults to none. */
    timeout(value: string): az_webapp_ssh_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }
}

/**
 * Start a web app.
 *
 * Syntax:
 * ```
 * az webapp start [--ids]
 *                 [--name]
 *                 [--resource-group]
 *                 [--slot]
 *                 [--subscription]
 * ```
 */
class az_webapp_start_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_start_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_start_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_start_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_start_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_start_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Stop a web app.
 *
 * Syntax:
 * ```
 * az webapp stop [--ids]
 *                [--name]
 *                [--resource-group]
 *                [--slot]
 *                [--subscription]
 * ```
 */
class az_webapp_stop_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_stop_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_stop_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_stop_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_stop_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_stop_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create a webapp and deploy code from a local workspace to the app. The command is required to run from the folder where the code is present. Current support includes Node, Python, .NET Core and ASP.NET. Node, Python apps are created as Linux apps. .Net Core, ASP.NET, and static HTML apps are created as Windows apps. Append the html flag to deploy as a static HTML app.
 *
 * Syntax:
 * ```
 * az webapp up [--dryrun]
 *              [--html]
 *              [--ids]
 *              [--launch-browser]
 *              [--location]
 *              [--logs]
 *              [--name]
 *              [--plan]
 *              [--resource-group]
 *              [--sku {B1, B2, B3, D1, F1, FREE, I1, I2, I3, P1V2, P1V3, P2V2, P2V3, P3V2, P3V3, PC2, PC3, PC4, S1, S2, S3, SHARED}]
 *              [--subscription]
 * ```
 */
class az_webapp_up_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Show summary of the create and deploy operation instead of executing it. */
    dryrun(value: string): az_webapp_up_command_builder {
        this.setFlag("--dryrun", value);
        return this;
    }

    /** Ignore app detection and deploy as an html app. */
    html(value: string): az_webapp_up_command_builder {
        this.setFlag("--html", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_up_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Launch the created app using the default browser. */
    launchBrowser(value: string): az_webapp_up_command_builder {
        this.setFlag("--launch-browser", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_webapp_up_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Configure default logging required to enable viewing log stream immediately after launching the webapp. */
    logs(value: string): az_webapp_up_command_builder {
        this.setFlag("--logs", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_up_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the appserviceplan associated with the webapp. */
    plan(value: string): az_webapp_up_command_builder {
        this.setFlag("--plan", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_up_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The pricing tiers, e.g., F1(Free), D1(Shared), B1(Basic Small), B2(Basic Medium), B3(Basic Large), S1(Standard Small), P1V2(Premium V2 Small), P1V3(Premium V3 Small), P2V3(Premium V3 Medium), P3V3(Premium V3 Large), PC2 (Premium Container Small), PC3 (Premium Container Medium), PC4 (Premium Container Large), I1 (Isolated Small), I2 (Isolated Medium), I3 (Isolated Large). */
    sku(value: 'B1' | 'B2' | 'B3' | 'D1' | 'F1' | 'FREE' | 'I1' | 'I2' | 'I3' | 'P1V2' | 'P1V3' | 'P2V2' | 'P2V3' | 'P3V2' | 'P3V3' | 'PC2' | 'PC3' | 'PC4' | 'S1' | 'S2' | 'S3' | 'SHARED'): az_webapp_up_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_up_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update a web app.
 *
 * Syntax:
 * ```
 * az webapp update [--add]
 *                  [--client-affinity-enabled {false, true}]
 *                  [--force-dns-registration {false, true}]
 *                  [--force-string]
 *                  [--https-only {false, true}]
 *                  [--ids]
 *                  [--name]
 *                  [--remove]
 *                  [--resource-group]
 *                  [--set]
 *                  [--skip-custom-domain-verification {false, true}]
 *                  [--skip-dns-registration {false, true}]
 *                  [--slot]
 *                  [--subscription]
 *                  [--ttl-in-seconds {false, true}]
 * ```
 */
class az_webapp_update_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_webapp_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** Enables sending session affinity cookies. */
    clientAffinityEnabled(value: boolean): az_webapp_update_command_builder {
        this.setFlag("--client-affinity-enabled", value.toString());
        return this;
    }

    /** If true, web app hostname is force registered with DNS. */
    forceDnsRegistration(value: boolean): az_webapp_update_command_builder {
        this.setFlag("--force-dns-registration", value.toString());
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_webapp_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Redirect all traffic made to an app using HTTP to HTTPS. */
    httpsOnly(value: boolean): az_webapp_update_command_builder {
        this.setFlag("--https-only", value.toString());
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_webapp_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    name(value: string): az_webapp_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_webapp_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_webapp_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_webapp_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** If true, custom (non \*.azurewebsites.net) domains associated with web app are not verified. */
    skipCustomDomainVerification(value: boolean): az_webapp_update_command_builder {
        this.setFlag("--skip-custom-domain-verification", value.toString());
        return this;
    }

    /** If true web app hostname is not registered with DNS on creation. */
    skipDnsRegistration(value: boolean): az_webapp_update_command_builder {
        this.setFlag("--skip-dns-registration", value.toString());
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_webapp_update_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_webapp_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Time to live in seconds for web app's default domain name. */
    ttlInSeconds(value: boolean): az_webapp_update_command_builder {
        this.setFlag("--ttl-in-seconds", value.toString());
        return this;
    }
}
