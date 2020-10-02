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
/** Manage webapp authentication and authorization. */
var az_webapp_auth = /** @class */ (function () {
    function az_webapp_auth() {
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
    az_webapp_auth.show = function () {
        return new az_webapp_auth_show_command_builder("az webapp auth show", 'az_webapp_auth_show_command_result');
    };
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
    az_webapp_auth.update = function () {
        return new az_webapp_auth_update_command_builder("az webapp auth update", 'az_webapp_auth_update_command_result');
    };
    return az_webapp_auth;
}());
exports.az_webapp_auth = az_webapp_auth;
/** Methods that show, set, add, and remove access restrictions on a webapp. */
var az_webapp_config_access_restriction = /** @class */ (function () {
    function az_webapp_config_access_restriction() {
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
    az_webapp_config_access_restriction.add = function (priority) {
        return new az_webapp_config_access_restriction_add_command_builder("az webapp config access-restriction add", 'az_webapp_config_access_restriction_add_command_result', priority);
    };
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
    az_webapp_config_access_restriction.remove = function () {
        return new az_webapp_config_access_restriction_remove_command_builder("az webapp config access-restriction remove", 'az_webapp_config_access_restriction_remove_command_result');
    };
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
    az_webapp_config_access_restriction.set = function (useSameRestrictionsForScmSite) {
        return new az_webapp_config_access_restriction_set_command_builder("az webapp config access-restriction set", 'az_webapp_config_access_restriction_set_command_result', useSameRestrictionsForScmSite);
    };
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
    az_webapp_config_access_restriction.show = function () {
        return new az_webapp_config_access_restriction_show_command_builder("az webapp config access-restriction show", 'az_webapp_config_access_restriction_show_command_result');
    };
    return az_webapp_config_access_restriction;
}());
exports.az_webapp_config_access_restriction = az_webapp_config_access_restriction;
/** Configure web app settings. Updating or removing application settings will cause an app recycle. */
var az_webapp_config_appsettings = /** @class */ (function () {
    function az_webapp_config_appsettings() {
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
    az_webapp_config_appsettings["delete"] = function (settingNames) {
        return new az_webapp_config_appsettings_delete_command_builder("az webapp config appsettings delete", 'az_webapp_config_appsettings_delete_command_result', settingNames);
    };
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
    az_webapp_config_appsettings.list = function (name, resourceGroup) {
        return new az_webapp_config_appsettings_list_command_builder("az webapp config appsettings list", 'az_webapp_config_appsettings_list_command_result', name, resourceGroup);
    };
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
    az_webapp_config_appsettings.set = function () {
        return new az_webapp_config_appsettings_set_command_builder("az webapp config appsettings set", 'az_webapp_config_appsettings_set_command_result');
    };
    return az_webapp_config_appsettings;
}());
exports.az_webapp_config_appsettings = az_webapp_config_appsettings;
/** Manage backups for web apps. */
var az_webapp_config_backup = /** @class */ (function () {
    function az_webapp_config_backup() {
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
    az_webapp_config_backup.create = function (containerUrl, resourceGroup, webappName) {
        return new az_webapp_config_backup_create_command_builder("az webapp config backup create", 'az_webapp_config_backup_create_command_result', containerUrl, resourceGroup, webappName);
    };
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
    az_webapp_config_backup.list = function (resourceGroup, webappName) {
        return new az_webapp_config_backup_list_command_builder("az webapp config backup list", 'az_webapp_config_backup_list_command_result', resourceGroup, webappName);
    };
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
    az_webapp_config_backup.restore = function (backupName, containerUrl, resourceGroup, webappName) {
        return new az_webapp_config_backup_restore_command_builder("az webapp config backup restore", 'az_webapp_config_backup_restore_command_result', backupName, containerUrl, resourceGroup, webappName);
    };
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
    az_webapp_config_backup.show = function (resourceGroup, webappName) {
        return new az_webapp_config_backup_show_command_builder("az webapp config backup show", 'az_webapp_config_backup_show_command_result', resourceGroup, webappName);
    };
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
    az_webapp_config_backup.update = function (resourceGroup, webappName) {
        return new az_webapp_config_backup_update_command_builder("az webapp config backup update", 'az_webapp_config_backup_update_command_result', resourceGroup, webappName);
    };
    return az_webapp_config_backup;
}());
exports.az_webapp_config_backup = az_webapp_config_backup;
/** Manage a web app's connection strings. */
var az_webapp_config_connection_string = /** @class */ (function () {
    function az_webapp_config_connection_string() {
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
    az_webapp_config_connection_string["delete"] = function (settingNames) {
        return new az_webapp_config_connection_string_delete_command_builder("az webapp config connection-string delete", 'az_webapp_config_connection_string_delete_command_result', settingNames);
    };
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
    az_webapp_config_connection_string.list = function (name, resourceGroup) {
        return new az_webapp_config_connection_string_list_command_builder("az webapp config connection-string list", 'az_webapp_config_connection_string_list_command_result', name, resourceGroup);
    };
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
    az_webapp_config_connection_string.set = function (connectionStringType) {
        return new az_webapp_config_connection_string_set_command_builder("az webapp config connection-string set", 'az_webapp_config_connection_string_set_command_result', connectionStringType);
    };
    return az_webapp_config_connection_string;
}());
exports.az_webapp_config_connection_string = az_webapp_config_connection_string;
/** Manage web app container settings. */
var az_webapp_config_container = /** @class */ (function () {
    function az_webapp_config_container() {
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
    az_webapp_config_container["delete"] = function () {
        return new az_webapp_config_container_delete_command_builder("az webapp config container delete", 'az_webapp_config_container_delete_command_result');
    };
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
    az_webapp_config_container.set = function () {
        return new az_webapp_config_container_set_command_builder("az webapp config container set", 'az_webapp_config_container_set_command_result');
    };
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
    az_webapp_config_container.show = function () {
        return new az_webapp_config_container_show_command_builder("az webapp config container show", 'az_webapp_config_container_show_command_result');
    };
    return az_webapp_config_container;
}());
exports.az_webapp_config_container = az_webapp_config_container;
/** Configure hostnames for a web app. */
var az_webapp_config_hostname = /** @class */ (function () {
    function az_webapp_config_hostname() {
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
    az_webapp_config_hostname.add = function () {
        return new az_webapp_config_hostname_add_command_builder("az webapp config hostname add", 'az_webapp_config_hostname_add_command_result');
    };
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
    az_webapp_config_hostname["delete"] = function () {
        return new az_webapp_config_hostname_delete_command_builder("az webapp config hostname delete", 'az_webapp_config_hostname_delete_command_result');
    };
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
    az_webapp_config_hostname.get_external_ip = function () {
        return new az_webapp_config_hostname_get_external_ip_command_builder("az webapp config hostname get-external-ip", 'az_webapp_config_hostname_get_external_ip_command_result');
    };
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
    az_webapp_config_hostname.list = function (resourceGroup, webappName) {
        return new az_webapp_config_hostname_list_command_builder("az webapp config hostname list", 'az_webapp_config_hostname_list_command_result', resourceGroup, webappName);
    };
    return az_webapp_config_hostname;
}());
exports.az_webapp_config_hostname = az_webapp_config_hostname;
/** Manage web app snapshots. */
var az_webapp_config_snapshot = /** @class */ (function () {
    function az_webapp_config_snapshot() {
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
    az_webapp_config_snapshot.list = function (name, resourceGroup) {
        return new az_webapp_config_snapshot_list_command_builder("az webapp config snapshot list", 'az_webapp_config_snapshot_list_command_result', name, resourceGroup);
    };
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
    az_webapp_config_snapshot.restore = function (time) {
        return new az_webapp_config_snapshot_restore_command_builder("az webapp config snapshot restore", 'az_webapp_config_snapshot_restore_command_result', time);
    };
    return az_webapp_config_snapshot;
}());
exports.az_webapp_config_snapshot = az_webapp_config_snapshot;
/** Configure SSL certificates for web apps. */
var az_webapp_config_ssl = /** @class */ (function () {
    function az_webapp_config_ssl() {
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
    az_webapp_config_ssl.bind = function (certificateThumbprint, sslType) {
        return new az_webapp_config_ssl_bind_command_builder("az webapp config ssl bind", 'az_webapp_config_ssl_bind_command_result', certificateThumbprint, sslType);
    };
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
    az_webapp_config_ssl.create = function (hostname, name, resourceGroup) {
        return new az_webapp_config_ssl_create_command_builder("az webapp config ssl create", 'az_webapp_config_ssl_create_command_result', hostname, name, resourceGroup);
    };
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
    az_webapp_config_ssl["delete"] = function (certificateThumbprint, resourceGroup) {
        return new az_webapp_config_ssl_delete_command_builder("az webapp config ssl delete", 'az_webapp_config_ssl_delete_command_result', certificateThumbprint, resourceGroup);
    };
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
    az_webapp_config_ssl["import"] = function (keyVault, keyVaultCertificateName) {
        return new az_webapp_config_ssl_import_command_builder("az webapp config ssl import", 'az_webapp_config_ssl_import_command_result', keyVault, keyVaultCertificateName);
    };
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
    az_webapp_config_ssl.list = function (resourceGroup) {
        return new az_webapp_config_ssl_list_command_builder("az webapp config ssl list", 'az_webapp_config_ssl_list_command_result', resourceGroup);
    };
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
    az_webapp_config_ssl.unbind = function (certificateThumbprint) {
        return new az_webapp_config_ssl_unbind_command_builder("az webapp config ssl unbind", 'az_webapp_config_ssl_unbind_command_result', certificateThumbprint);
    };
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
    az_webapp_config_ssl.upload = function (certificateFile, certificatePassword) {
        return new az_webapp_config_ssl_upload_command_builder("az webapp config ssl upload", 'az_webapp_config_ssl_upload_command_result', certificateFile, certificatePassword);
    };
    return az_webapp_config_ssl;
}());
exports.az_webapp_config_ssl = az_webapp_config_ssl;
/** Manage a web app's Azure storage account configurations. (Linux Web Apps and Windows Containers Web Apps Only). */
var az_webapp_config_storage_account = /** @class */ (function () {
    function az_webapp_config_storage_account() {
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
    az_webapp_config_storage_account.add = function (accessKey, accountName, customId, shareName, storageType) {
        return new az_webapp_config_storage_account_add_command_builder("az webapp config storage-account add", 'az_webapp_config_storage_account_add_command_result', accessKey, accountName, customId, shareName, storageType);
    };
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
    az_webapp_config_storage_account["delete"] = function (customId) {
        return new az_webapp_config_storage_account_delete_command_builder("az webapp config storage-account delete", 'az_webapp_config_storage_account_delete_command_result', customId);
    };
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
    az_webapp_config_storage_account.list = function (name, resourceGroup) {
        return new az_webapp_config_storage_account_list_command_builder("az webapp config storage-account list", 'az_webapp_config_storage_account_list_command_result', name, resourceGroup);
    };
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
    az_webapp_config_storage_account.update = function (customId) {
        return new az_webapp_config_storage_account_update_command_builder("az webapp config storage-account update", 'az_webapp_config_storage_account_update_command_result', customId);
    };
    return az_webapp_config_storage_account;
}());
exports.az_webapp_config_storage_account = az_webapp_config_storage_account;
/** Configure a web app. */
var az_webapp_config = /** @class */ (function () {
    function az_webapp_config() {
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
    az_webapp_config.set = function () {
        return new az_webapp_config_set_command_builder("az webapp config set", 'az_webapp_config_set_command_result');
    };
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
    az_webapp_config.show = function () {
        return new az_webapp_config_show_command_builder("az webapp config show", 'az_webapp_config_show_command_result');
    };
    return az_webapp_config;
}());
exports.az_webapp_config = az_webapp_config;
/** Manage Cross-Origin Resource Sharing (CORS). */
var az_webapp_cors = /** @class */ (function () {
    function az_webapp_cors() {
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
    az_webapp_cors.add = function (allowedOrigins) {
        return new az_webapp_cors_add_command_builder("az webapp cors add", 'az_webapp_cors_add_command_result', allowedOrigins);
    };
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
    az_webapp_cors.remove = function (allowedOrigins) {
        return new az_webapp_cors_remove_command_builder("az webapp cors remove", 'az_webapp_cors_remove_command_result', allowedOrigins);
    };
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
    az_webapp_cors.show = function () {
        return new az_webapp_cors_show_command_builder("az webapp cors show", 'az_webapp_cors_show_command_result');
    };
    return az_webapp_cors;
}());
exports.az_webapp_cors = az_webapp_cors;
/** Manage deleted web apps. */
var az_webapp_deleted = /** @class */ (function () {
    function az_webapp_deleted() {
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
    az_webapp_deleted.list = function () {
        return new az_webapp_deleted_list_command_builder("az webapp deleted list", 'az_webapp_deleted_list_command_result');
    };
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
    az_webapp_deleted.restore = function (deletedId) {
        return new az_webapp_deleted_restore_command_builder("az webapp deleted restore", 'az_webapp_deleted_restore_command_result', deletedId);
    };
    return az_webapp_deleted;
}());
exports.az_webapp_deleted = az_webapp_deleted;
/** Manage container-based continuous deployment. */
var az_webapp_deployment_container = /** @class */ (function () {
    function az_webapp_deployment_container() {
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
    az_webapp_deployment_container.config = function (enableCd) {
        return new az_webapp_deployment_container_config_command_builder("az webapp deployment container config", 'az_webapp_deployment_container_config_command_result', enableCd);
    };
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
    az_webapp_deployment_container.show_cd_url = function () {
        return new az_webapp_deployment_container_show_cd_url_command_builder("az webapp deployment container show-cd-url", 'az_webapp_deployment_container_show_cd_url_command_result');
    };
    return az_webapp_deployment_container;
}());
exports.az_webapp_deployment_container = az_webapp_deployment_container;
/** Manage web app deployment slots. */
var az_webapp_deployment_slot = /** @class */ (function () {
    function az_webapp_deployment_slot() {
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
    az_webapp_deployment_slot.auto_swap = function (slot) {
        return new az_webapp_deployment_slot_auto_swap_command_builder("az webapp deployment slot auto-swap", 'az_webapp_deployment_slot_auto_swap_command_result', slot);
    };
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
    az_webapp_deployment_slot.create = function (name, resourceGroup, slot) {
        return new az_webapp_deployment_slot_create_command_builder("az webapp deployment slot create", 'az_webapp_deployment_slot_create_command_result', name, resourceGroup, slot);
    };
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
    az_webapp_deployment_slot["delete"] = function (slot) {
        return new az_webapp_deployment_slot_delete_command_builder("az webapp deployment slot delete", 'az_webapp_deployment_slot_delete_command_result', slot);
    };
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
    az_webapp_deployment_slot.list = function () {
        return new az_webapp_deployment_slot_list_command_builder("az webapp deployment slot list", 'az_webapp_deployment_slot_list_command_result');
    };
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
    az_webapp_deployment_slot.swap = function (slot) {
        return new az_webapp_deployment_slot_swap_command_builder("az webapp deployment slot swap", 'az_webapp_deployment_slot_swap_command_result', slot);
    };
    return az_webapp_deployment_slot;
}());
exports.az_webapp_deployment_slot = az_webapp_deployment_slot;
/** Manage web app deployment via source control. */
var az_webapp_deployment_source = /** @class */ (function () {
    function az_webapp_deployment_source() {
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
    az_webapp_deployment_source.config = function (repoUrl) {
        return new az_webapp_deployment_source_config_command_builder("az webapp deployment source config", 'az_webapp_deployment_source_config_command_result', repoUrl);
    };
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
    az_webapp_deployment_source.config_local_git = function () {
        return new az_webapp_deployment_source_config_local_git_command_builder("az webapp deployment source config-local-git", 'az_webapp_deployment_source_config_local_git_command_result');
    };
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
    az_webapp_deployment_source.config_zip = function (src) {
        return new az_webapp_deployment_source_config_zip_command_builder("az webapp deployment source config-zip", 'az_webapp_deployment_source_config_zip_command_result', src);
    };
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
    az_webapp_deployment_source["delete"] = function () {
        return new az_webapp_deployment_source_delete_command_builder("az webapp deployment source delete", 'az_webapp_deployment_source_delete_command_result');
    };
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
    az_webapp_deployment_source.show = function () {
        return new az_webapp_deployment_source_show_command_builder("az webapp deployment source show", 'az_webapp_deployment_source_show_command_result');
    };
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
    az_webapp_deployment_source.sync = function () {
        return new az_webapp_deployment_source_sync_command_builder("az webapp deployment source sync", 'az_webapp_deployment_source_sync_command_result');
    };
    /**
     * Update source control token cached in Azure app service.
     *
     * Syntax:
     * ```
     * az webapp deployment source update-token [--git-token]
     *                                          [--subscription]
     * ```
     */
    az_webapp_deployment_source.update_token = function () {
        return new az_webapp_deployment_source_update_token_command_builder("az webapp deployment source update-token", 'az_webapp_deployment_source_update_token_command_result');
    };
    return az_webapp_deployment_source;
}());
exports.az_webapp_deployment_source = az_webapp_deployment_source;
/** Manage user credentials for deployment. */
var az_webapp_deployment_user = /** @class */ (function () {
    function az_webapp_deployment_user() {
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
    az_webapp_deployment_user.set = function (userName) {
        return new az_webapp_deployment_user_set_command_builder("az webapp deployment user set", 'az_webapp_deployment_user_set_command_result', userName);
    };
    /**
     * Get deployment publishing user.
     *
     * Syntax:
     * ```
     * az webapp deployment user show [--query-examples]
     *                                [--subscription]
     * ```
     */
    az_webapp_deployment_user.show = function () {
        return new az_webapp_deployment_user_show_command_builder("az webapp deployment user show", 'az_webapp_deployment_user_show_command_result');
    };
    return az_webapp_deployment_user;
}());
exports.az_webapp_deployment_user = az_webapp_deployment_user;
/** Manage web app deployments. */
var az_webapp_deployment = /** @class */ (function () {
    function az_webapp_deployment() {
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
    az_webapp_deployment.list_publishing_credentials = function () {
        return new az_webapp_deployment_list_publishing_credentials_command_builder("az webapp deployment list-publishing-credentials", 'az_webapp_deployment_list_publishing_credentials_command_result');
    };
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
    az_webapp_deployment.list_publishing_profiles = function () {
        return new az_webapp_deployment_list_publishing_profiles_command_builder("az webapp deployment list-publishing-profiles", 'az_webapp_deployment_list_publishing_profiles_command_result');
    };
    return az_webapp_deployment;
}());
exports.az_webapp_deployment = az_webapp_deployment;
/** Methods that list, add and remove hybrid-connections from webapps. */
var az_webapp_hybrid_connection = /** @class */ (function () {
    function az_webapp_hybrid_connection() {
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
    az_webapp_hybrid_connection.add = function (hybridConnection, name, namespace, resourceGroup) {
        return new az_webapp_hybrid_connection_add_command_builder("az webapp hybrid-connection add", 'az_webapp_hybrid_connection_add_command_result', hybridConnection, name, namespace, resourceGroup);
    };
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
    az_webapp_hybrid_connection.list = function (name, resourceGroup) {
        return new az_webapp_hybrid_connection_list_command_builder("az webapp hybrid-connection list", 'az_webapp_hybrid_connection_list_command_result', name, resourceGroup);
    };
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
    az_webapp_hybrid_connection.remove = function (hybridConnection, name, namespace, resourceGroup) {
        return new az_webapp_hybrid_connection_remove_command_builder("az webapp hybrid-connection remove", 'az_webapp_hybrid_connection_remove_command_result', hybridConnection, name, namespace, resourceGroup);
    };
    return az_webapp_hybrid_connection;
}());
exports.az_webapp_hybrid_connection = az_webapp_hybrid_connection;
/** Manage web app's managed service identity. */
var az_webapp_identity = /** @class */ (function () {
    function az_webapp_identity() {
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
    az_webapp_identity.assign = function () {
        return new az_webapp_identity_assign_command_builder("az webapp identity assign", 'az_webapp_identity_assign_command_result');
    };
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
    az_webapp_identity.remove = function () {
        return new az_webapp_identity_remove_command_builder("az webapp identity remove", 'az_webapp_identity_remove_command_result');
    };
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
    az_webapp_identity.show = function () {
        return new az_webapp_identity_show_command_builder("az webapp identity show", 'az_webapp_identity_show_command_result');
    };
    return az_webapp_identity;
}());
exports.az_webapp_identity = az_webapp_identity;
/** Manage web app deployment logs. */
var az_webapp_log_deployment = /** @class */ (function () {
    function az_webapp_log_deployment() {
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
    az_webapp_log_deployment.list = function (name, resourceGroup) {
        return new az_webapp_log_deployment_list_command_builder("az webapp log deployment list", 'az_webapp_log_deployment_list_command_result', name, resourceGroup);
    };
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
    az_webapp_log_deployment.show = function (name, resourceGroup) {
        return new az_webapp_log_deployment_show_command_builder("az webapp log deployment show", 'az_webapp_log_deployment_show_command_result', name, resourceGroup);
    };
    return az_webapp_log_deployment;
}());
exports.az_webapp_log_deployment = az_webapp_log_deployment;
/** Manage web app logs. */
var az_webapp_log = /** @class */ (function () {
    function az_webapp_log() {
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
    az_webapp_log.config = function () {
        return new az_webapp_log_config_command_builder("az webapp log config", 'az_webapp_log_config_command_result');
    };
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
    az_webapp_log.download = function () {
        return new az_webapp_log_download_command_builder("az webapp log download", 'az_webapp_log_download_command_result');
    };
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
    az_webapp_log.show = function () {
        return new az_webapp_log_show_command_builder("az webapp log show", 'az_webapp_log_show_command_result');
    };
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
    az_webapp_log.tail = function () {
        return new az_webapp_log_tail_command_builder("az webapp log tail", 'az_webapp_log_tail_command_result');
    };
    return az_webapp_log;
}());
exports.az_webapp_log = az_webapp_log;
/** Manage traffic routing for web apps. */
var az_webapp_traffic_routing = /** @class */ (function () {
    function az_webapp_traffic_routing() {
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
    az_webapp_traffic_routing.clear = function () {
        return new az_webapp_traffic_routing_clear_command_builder("az webapp traffic-routing clear", 'az_webapp_traffic_routing_clear_command_result');
    };
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
    az_webapp_traffic_routing.set = function (distribution) {
        return new az_webapp_traffic_routing_set_command_builder("az webapp traffic-routing set", 'az_webapp_traffic_routing_set_command_result', distribution);
    };
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
    az_webapp_traffic_routing.show = function () {
        return new az_webapp_traffic_routing_show_command_builder("az webapp traffic-routing show", 'az_webapp_traffic_routing_show_command_result');
    };
    return az_webapp_traffic_routing;
}());
exports.az_webapp_traffic_routing = az_webapp_traffic_routing;
/** Methods that list, add, and remove virtual network integrations from a webapp. */
var az_webapp_vnet_integration = /** @class */ (function () {
    function az_webapp_vnet_integration() {
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
    az_webapp_vnet_integration.add = function (name, resourceGroup, subnet, vnet) {
        return new az_webapp_vnet_integration_add_command_builder("az webapp vnet-integration add", 'az_webapp_vnet_integration_add_command_result', name, resourceGroup, subnet, vnet);
    };
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
    az_webapp_vnet_integration.list = function (name, resourceGroup) {
        return new az_webapp_vnet_integration_list_command_builder("az webapp vnet-integration list", 'az_webapp_vnet_integration_list_command_result', name, resourceGroup);
    };
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
    az_webapp_vnet_integration.remove = function (name, resourceGroup) {
        return new az_webapp_vnet_integration_remove_command_builder("az webapp vnet-integration remove", 'az_webapp_vnet_integration_remove_command_result', name, resourceGroup);
    };
    return az_webapp_vnet_integration;
}());
exports.az_webapp_vnet_integration = az_webapp_vnet_integration;
/** Allows management operations of continuous webjobs on a web app. */
var az_webapp_webjob_continuous = /** @class */ (function () {
    function az_webapp_webjob_continuous() {
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
    az_webapp_webjob_continuous.list = function (name, resourceGroup) {
        return new az_webapp_webjob_continuous_list_command_builder("az webapp webjob continuous list", 'az_webapp_webjob_continuous_list_command_result', name, resourceGroup);
    };
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
    az_webapp_webjob_continuous.remove = function (webjobName) {
        return new az_webapp_webjob_continuous_remove_command_builder("az webapp webjob continuous remove", 'az_webapp_webjob_continuous_remove_command_result', webjobName);
    };
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
    az_webapp_webjob_continuous.start = function (webjobName) {
        return new az_webapp_webjob_continuous_start_command_builder("az webapp webjob continuous start", 'az_webapp_webjob_continuous_start_command_result', webjobName);
    };
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
    az_webapp_webjob_continuous.stop = function (webjobName) {
        return new az_webapp_webjob_continuous_stop_command_builder("az webapp webjob continuous stop", 'az_webapp_webjob_continuous_stop_command_result', webjobName);
    };
    return az_webapp_webjob_continuous;
}());
exports.az_webapp_webjob_continuous = az_webapp_webjob_continuous;
/** Allows management operations of triggered webjobs on a web app. */
var az_webapp_webjob_triggered = /** @class */ (function () {
    function az_webapp_webjob_triggered() {
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
    az_webapp_webjob_triggered.list = function (name, resourceGroup) {
        return new az_webapp_webjob_triggered_list_command_builder("az webapp webjob triggered list", 'az_webapp_webjob_triggered_list_command_result', name, resourceGroup);
    };
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
    az_webapp_webjob_triggered.log = function (webjobName) {
        return new az_webapp_webjob_triggered_log_command_builder("az webapp webjob triggered log", 'az_webapp_webjob_triggered_log_command_result', webjobName);
    };
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
    az_webapp_webjob_triggered.remove = function (webjobName) {
        return new az_webapp_webjob_triggered_remove_command_builder("az webapp webjob triggered remove", 'az_webapp_webjob_triggered_remove_command_result', webjobName);
    };
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
    az_webapp_webjob_triggered.run = function (webjobName) {
        return new az_webapp_webjob_triggered_run_command_builder("az webapp webjob triggered run", 'az_webapp_webjob_triggered_run_command_result', webjobName);
    };
    return az_webapp_webjob_triggered;
}());
exports.az_webapp_webjob_triggered = az_webapp_webjob_triggered;
/** Allows management operations for webjobs on a web app. */
var az_webapp_webjob = /** @class */ (function () {
    function az_webapp_webjob() {
    }
    return az_webapp_webjob;
}());
exports.az_webapp_webjob = az_webapp_webjob;
/** Manage web apps. */
var az_webapp = /** @class */ (function () {
    function az_webapp() {
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
    az_webapp.browse = function () {
        return new az_webapp_browse_command_builder("az webapp browse", 'az_webapp_browse_command_result');
    };
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
    az_webapp.create = function (name, plan, resourceGroup) {
        return new az_webapp_create_command_builder("az webapp create", 'az_webapp_create_command_result', name, plan, resourceGroup);
    };
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
    az_webapp.create_remote_connection = function () {
        return new az_webapp_create_remote_connection_command_builder("az webapp create-remote-connection", 'az_webapp_create_remote_connection_command_result');
    };
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
    az_webapp["delete"] = function () {
        return new az_webapp_delete_command_builder("az webapp delete", 'az_webapp_delete_command_result');
    };
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
    az_webapp.list = function () {
        return new az_webapp_list_command_builder("az webapp list", 'az_webapp_list_command_result');
    };
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
    az_webapp.list_instances = function (name, resourceGroup) {
        return new az_webapp_list_instances_command_builder("az webapp list-instances", 'az_webapp_list_instances_command_result', name, resourceGroup);
    };
    /**
     * List available built-in stacks which can be used for web apps.
     *
     * Syntax:
     * ```
     * az webapp list-runtimes [--linux]
     *                         [--subscription]
     * ```
     */
    az_webapp.list_runtimes = function () {
        return new az_webapp_list_runtimes_command_builder("az webapp list-runtimes", 'az_webapp_list_runtimes_command_result');
    };
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
    az_webapp.restart = function () {
        return new az_webapp_restart_command_builder("az webapp restart", 'az_webapp_restart_command_result');
    };
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
    az_webapp.show = function () {
        return new az_webapp_show_command_builder("az webapp show", 'az_webapp_show_command_result');
    };
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
    az_webapp.ssh = function () {
        return new az_webapp_ssh_command_builder("az webapp ssh", 'az_webapp_ssh_command_result');
    };
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
    az_webapp.start = function () {
        return new az_webapp_start_command_builder("az webapp start", 'az_webapp_start_command_result');
    };
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
    az_webapp.stop = function () {
        return new az_webapp_stop_command_builder("az webapp stop", 'az_webapp_stop_command_result');
    };
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
    az_webapp.up = function () {
        return new az_webapp_up_command_builder("az webapp up", 'az_webapp_up_command_result');
    };
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
    az_webapp.update = function () {
        return new az_webapp_update_command_builder("az webapp update", 'az_webapp_update_command_result');
    };
    return az_webapp;
}());
exports.az_webapp = az_webapp;
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
var az_webapp_auth_show_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_auth_show_command_builder, _super);
    function az_webapp_auth_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_auth_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_auth_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_auth_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_auth_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_auth_show_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_auth_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_auth_show_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_auth_update_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_auth_update_command_builder, _super);
    function az_webapp_auth_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more token audiences (space-delimited). */
    az_webapp_auth_update_command_builder.prototype.aadAllowedTokenAudiences = function (value) {
        this.setFlag("--aad-allowed-token-audiences", value);
        return this;
    };
    /** Application ID to integrate AAD organization account Sign-in into your web app. */
    az_webapp_auth_update_command_builder.prototype.aadClientId = function (value) {
        this.setFlag("--aad-client-id", value);
        return this;
    };
    /** AAD application secret. */
    az_webapp_auth_update_command_builder.prototype.aadClientSecret = function (value) {
        this.setFlag("--aad-client-secret", value);
        return this;
    };
    /** Alternative to AAD Client Secret, thumbprint of a certificate used for signing purposes. */
    az_webapp_auth_update_command_builder.prototype.aadClientSecretCertificateThumbprint = function (value) {
        this.setFlag("--aad-client-secret-certificate-thumbprint", value);
        return this;
    };
    /** This url can be found in the JSON output returned from your active directory endpoint using your tenantID. The endpoint can be queried from `az cloud show` at "endpoints.activeDirectory". The tenantID can be found using `az account show`. Get the "issuer" from the JSON at <active directory endpoint>/<tenantId>/.well-known/openid-configuration. */
    az_webapp_auth_update_command_builder.prototype.aadTokenIssuerUrl = function (value) {
        this.setFlag("--aad-token-issuer-url", value);
        return this;
    };
    /** */
    az_webapp_auth_update_command_builder.prototype.action = function (value) {
        this.setFlag("--action", value);
        return this;
    };
    /** One or more urls (space-delimited). */
    az_webapp_auth_update_command_builder.prototype.allowedExternalRedirectUrls = function (value) {
        this.setFlag("--allowed-external-redirect-urls", value);
        return this;
    };
    /** */
    az_webapp_auth_update_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Application ID to integrate Facebook Sign-in into your web app. */
    az_webapp_auth_update_command_builder.prototype.facebookAppId = function (value) {
        this.setFlag("--facebook-app-id", value);
        return this;
    };
    /** Facebook Application client secret. */
    az_webapp_auth_update_command_builder.prototype.facebookAppSecret = function (value) {
        this.setFlag("--facebook-app-secret", value);
        return this;
    };
    /** One or more facebook authentication scopes (space-delimited). */
    az_webapp_auth_update_command_builder.prototype.facebookOauthScopes = function (value) {
        this.setFlag("--facebook-oauth-scopes", value);
        return this;
    };
    /** Application ID to integrate Google Sign-in into your web app. */
    az_webapp_auth_update_command_builder.prototype.googleClientId = function (value) {
        this.setFlag("--google-client-id", value);
        return this;
    };
    /** Google Application client secret. */
    az_webapp_auth_update_command_builder.prototype.googleClientSecret = function (value) {
        this.setFlag("--google-client-secret", value);
        return this;
    };
    /** One or more Google authentication scopes (space-delimited). */
    az_webapp_auth_update_command_builder.prototype.googleOauthScopes = function (value) {
        this.setFlag("--google-oauth-scopes", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_auth_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** AAD V2 Application ID to integrate Microsoft account Sign-in into your web app. */
    az_webapp_auth_update_command_builder.prototype.microsoftAccountClientId = function (value) {
        this.setFlag("--microsoft-account-client-id", value);
        return this;
    };
    /** AAD V2 Application client secret. */
    az_webapp_auth_update_command_builder.prototype.microsoftAccountClientSecret = function (value) {
        this.setFlag("--microsoft-account-client-secret", value);
        return this;
    };
    /** One or more Microsoft authentification scopes (space-delimited). */
    az_webapp_auth_update_command_builder.prototype.microsoftAccountOauthScopes = function (value) {
        this.setFlag("--microsoft-account-oauth-scopes", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_auth_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_auth_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Runtime version of the Authentication/Authorization feature in use for the current app. */
    az_webapp_auth_update_command_builder.prototype.runtimeVersion = function (value) {
        this.setFlag("--runtime-version", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_auth_update_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_auth_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Hours, must be formattable into a float. */
    az_webapp_auth_update_command_builder.prototype.tokenRefreshExtensionHours = function (value) {
        this.setFlag("--token-refresh-extension-hours", value);
        return this;
    };
    /** Use App Service Token Store. */
    az_webapp_auth_update_command_builder.prototype.tokenStore = function (value) {
        this.setFlag("--token-store", value.toString());
        return this;
    };
    /** Application ID to integrate Twitter Sign-in into your web app. */
    az_webapp_auth_update_command_builder.prototype.twitterConsumerKey = function (value) {
        this.setFlag("--twitter-consumer-key", value);
        return this;
    };
    /** Twitter Application client secret. */
    az_webapp_auth_update_command_builder.prototype.twitterConsumerSecret = function (value) {
        this.setFlag("--twitter-consumer-secret", value);
        return this;
    };
    return az_webapp_auth_update_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_access_restriction_add_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_access_restriction_add_command_builder, _super);
    function az_webapp_config_access_restriction_add_command_builder(commandPath, resultDataTypeName, priority) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.priority(priority);
        return _this;
    }
    /** Priority of the access restriction rule. */
    az_webapp_config_access_restriction_add_command_builder.prototype.priority = function (value) {
        this.setFlag("--priority", value);
        return this;
    };
    /** Allow or deny access. */
    az_webapp_config_access_restriction_add_command_builder.prototype.action = function (value) {
        this.setFlag("--action", value);
        return this;
    };
    /** Description of the access restriction rule. */
    az_webapp_config_access_restriction_add_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_config_access_restriction_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Create access restriction rule with checking if the subnet has Microsoft.Web service endpoint enabled. */
    az_webapp_config_access_restriction_add_command_builder.prototype.ignoreMissingEndpoint = function (value) {
        this.setFlag("--ignore-missing-endpoint", value.toString());
        return this;
    };
    /** IP address or CIDR range. */
    az_webapp_config_access_restriction_add_command_builder.prototype.ipAddress = function (value) {
        this.setFlag("--ip-address", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_access_restriction_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_access_restriction_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the access restriction rule to add. */
    az_webapp_config_access_restriction_add_command_builder.prototype.ruleName = function (value) {
        this.setFlag("--rule-name", value);
        return this;
    };
    /** True if access restrictions is added for scm site. */
    az_webapp_config_access_restriction_add_command_builder.prototype.scmSite = function (value) {
        this.setFlag("--scm-site", value.toString());
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_access_restriction_add_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Subnet name (requires vNet name) or subnet resource id. */
    az_webapp_config_access_restriction_add_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_access_restriction_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** VNet name. */
    az_webapp_config_access_restriction_add_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_webapp_config_access_restriction_add_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_access_restriction_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_access_restriction_remove_command_builder, _super);
    function az_webapp_config_access_restriction_remove_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Allow or deny access. */
    az_webapp_config_access_restriction_remove_command_builder.prototype.action = function (value) {
        this.setFlag("--action", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_config_access_restriction_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** IP address or CIDR range. */
    az_webapp_config_access_restriction_remove_command_builder.prototype.ipAddress = function (value) {
        this.setFlag("--ip-address", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_access_restriction_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_access_restriction_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the access restriction to remove. */
    az_webapp_config_access_restriction_remove_command_builder.prototype.ruleName = function (value) {
        this.setFlag("--rule-name", value);
        return this;
    };
    /** True if access restriction should be removed from scm site. */
    az_webapp_config_access_restriction_remove_command_builder.prototype.scmSite = function (value) {
        this.setFlag("--scm-site", value.toString());
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_access_restriction_remove_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Subnet name (requires vNet name) or subnet resource id. */
    az_webapp_config_access_restriction_remove_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_access_restriction_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** VNet name. */
    az_webapp_config_access_restriction_remove_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_webapp_config_access_restriction_remove_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_access_restriction_set_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_access_restriction_set_command_builder, _super);
    function az_webapp_config_access_restriction_set_command_builder(commandPath, resultDataTypeName, useSameRestrictionsForScmSite) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.useSameRestrictionsForScmSite(useSameRestrictionsForScmSite);
        return _this;
    }
    /** Use same access restrictions for scm site. */
    az_webapp_config_access_restriction_set_command_builder.prototype.useSameRestrictionsForScmSite = function (value) {
        this.setFlag("--use-same-restrictions-for-scm-site", value.toString());
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_config_access_restriction_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_access_restriction_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_access_restriction_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_access_restriction_set_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_access_restriction_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_access_restriction_set_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_access_restriction_show_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_access_restriction_show_command_builder, _super);
    function az_webapp_config_access_restriction_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_config_access_restriction_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_access_restriction_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_config_access_restriction_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_access_restriction_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_access_restriction_show_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_access_restriction_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_access_restriction_show_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_appsettings_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_appsettings_delete_command_builder, _super);
    function az_webapp_config_appsettings_delete_command_builder(commandPath, resultDataTypeName, settingNames) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.settingNames(settingNames);
        return _this;
    }
    /** Space-separated appsettings names. */
    az_webapp_config_appsettings_delete_command_builder.prototype.settingNames = function (value) {
        this.setFlag("--setting-names", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_config_appsettings_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_appsettings_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_appsettings_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_appsettings_delete_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_appsettings_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_appsettings_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_appsettings_list_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_appsettings_list_command_builder, _super);
    function az_webapp_config_appsettings_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_appsettings_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_appsettings_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_config_appsettings_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_appsettings_list_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_appsettings_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_appsettings_list_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_appsettings_set_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_appsettings_set_command_builder, _super);
    function az_webapp_config_appsettings_set_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_config_appsettings_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_appsettings_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_appsettings_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated appsettings in KEY=VALUE format. Use @{file} to load from a file. */
    az_webapp_config_appsettings_set_command_builder.prototype.settings = function (value) {
        this.setFlag("--settings", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_appsettings_set_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Space-separated slot appsettings in KEY=VALUE format. Use @{file} to load from a file. */
    az_webapp_config_appsettings_set_command_builder.prototype.slotSettings = function (value) {
        this.setFlag("--slot-settings", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_appsettings_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_appsettings_set_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_backup_create_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_backup_create_command_builder, _super);
    function az_webapp_config_backup_create_command_builder(commandPath, resultDataTypeName, containerUrl, resourceGroup, webappName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.containerUrl(containerUrl);
        _this.resourceGroup(resourceGroup);
        _this.webappName(webappName);
        return _this;
    }
    /** URL with SAS token to the blob storage container. */
    az_webapp_config_backup_create_command_builder.prototype.containerUrl = function (value) {
        this.setFlag("--container-url", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_backup_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the web app. */
    az_webapp_config_backup_create_command_builder.prototype.webappName = function (value) {
        this.setFlag("--webapp-name", value);
        return this;
    };
    /** Name of the backup. If unspecified, the backup will be named with the web app name and a timestamp. */
    az_webapp_config_backup_create_command_builder.prototype.backupName = function (value) {
        this.setFlag("--backup-name", value);
        return this;
    };
    /** Connection string for the database in the backup. */
    az_webapp_config_backup_create_command_builder.prototype.dbConnectionString = function (value) {
        this.setFlag("--db-connection-string", value);
        return this;
    };
    /** Name of the database in the backup. */
    az_webapp_config_backup_create_command_builder.prototype.dbName = function (value) {
        this.setFlag("--db-name", value);
        return this;
    };
    /** Type of database in the backup. */
    az_webapp_config_backup_create_command_builder.prototype.dbType = function (value) {
        this.setFlag("--db-type", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_backup_create_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_backup_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_backup_create_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_backup_list_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_backup_list_command_builder, _super);
    function az_webapp_config_backup_list_command_builder(commandPath, resultDataTypeName, resourceGroup, webappName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.webappName(webappName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_backup_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the web app. */
    az_webapp_config_backup_list_command_builder.prototype.webappName = function (value) {
        this.setFlag("--webapp-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_config_backup_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_backup_list_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_backup_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_backup_list_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_backup_restore_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_backup_restore_command_builder, _super);
    function az_webapp_config_backup_restore_command_builder(commandPath, resultDataTypeName, backupName, containerUrl, resourceGroup, webappName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.backupName(backupName);
        _this.containerUrl(containerUrl);
        _this.resourceGroup(resourceGroup);
        _this.webappName(webappName);
        return _this;
    }
    /** Name of the backup to restore. */
    az_webapp_config_backup_restore_command_builder.prototype.backupName = function (value) {
        this.setFlag("--backup-name", value);
        return this;
    };
    /** URL with SAS token to the blob storage container. */
    az_webapp_config_backup_restore_command_builder.prototype.containerUrl = function (value) {
        this.setFlag("--container-url", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_backup_restore_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the web app. */
    az_webapp_config_backup_restore_command_builder.prototype.webappName = function (value) {
        this.setFlag("--webapp-name", value);
        return this;
    };
    /** Connection string for the database in the backup. */
    az_webapp_config_backup_restore_command_builder.prototype.dbConnectionString = function (value) {
        this.setFlag("--db-connection-string", value);
        return this;
    };
    /** Name of the database in the backup. */
    az_webapp_config_backup_restore_command_builder.prototype.dbName = function (value) {
        this.setFlag("--db-name", value);
        return this;
    };
    /** Type of database in the backup. */
    az_webapp_config_backup_restore_command_builder.prototype.dbType = function (value) {
        this.setFlag("--db-type", value);
        return this;
    };
    /** Ignores custom hostnames stored in the backup. */
    az_webapp_config_backup_restore_command_builder.prototype.ignoreHostnameConflict = function (value) {
        this.setFlag("--ignore-hostname-conflict", value);
        return this;
    };
    /** Overwrite the source web app, if --target-name is not specified. */
    az_webapp_config_backup_restore_command_builder.prototype.overwrite = function (value) {
        this.setFlag("--overwrite", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_backup_restore_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_backup_restore_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The name to use for the restored web app. If unspecified, will default to the name that was used when the backup was created. */
    az_webapp_config_backup_restore_command_builder.prototype.targetName = function (value) {
        this.setFlag("--target-name", value);
        return this;
    };
    return az_webapp_config_backup_restore_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_backup_show_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_backup_show_command_builder, _super);
    function az_webapp_config_backup_show_command_builder(commandPath, resultDataTypeName, resourceGroup, webappName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.webappName(webappName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_backup_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the web app. */
    az_webapp_config_backup_show_command_builder.prototype.webappName = function (value) {
        this.setFlag("--webapp-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_config_backup_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_backup_show_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_backup_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_backup_show_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_backup_update_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_backup_update_command_builder, _super);
    function az_webapp_config_backup_update_command_builder(commandPath, resultDataTypeName, resourceGroup, webappName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.webappName(webappName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_backup_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the web app. */
    az_webapp_config_backup_update_command_builder.prototype.webappName = function (value) {
        this.setFlag("--webapp-name", value);
        return this;
    };
    /** Name of the backup. If unspecified, the backup will be named with the web app name and a timestamp. */
    az_webapp_config_backup_update_command_builder.prototype.backupName = function (value) {
        this.setFlag("--backup-name", value);
        return this;
    };
    /** URL with SAS token to the blob storage container. */
    az_webapp_config_backup_update_command_builder.prototype.containerUrl = function (value) {
        this.setFlag("--container-url", value);
        return this;
    };
    /** Connection string for the database in the backup. */
    az_webapp_config_backup_update_command_builder.prototype.dbConnectionString = function (value) {
        this.setFlag("--db-connection-string", value);
        return this;
    };
    /** Name of the database in the backup. */
    az_webapp_config_backup_update_command_builder.prototype.dbName = function (value) {
        this.setFlag("--db-name", value);
        return this;
    };
    /** Type of database in the backup. */
    az_webapp_config_backup_update_command_builder.prototype.dbType = function (value) {
        this.setFlag("--db-type", value);
        return this;
    };
    /** How often to backup. Use a number followed by d or h, e.g. 5d = 5 days, 2h = 2 hours. */
    az_webapp_config_backup_update_command_builder.prototype.frequency = function (value) {
        this.setFlag("--frequency", value);
        return this;
    };
    /** Always keep one backup, regardless of how old it is. */
    az_webapp_config_backup_update_command_builder.prototype.retainOne = function (value) {
        this.setFlag("--retain-one", value.toString());
        return this;
    };
    /** How many days to keep a backup before automatically deleting it. Set to 0 for indefinite retention. */
    az_webapp_config_backup_update_command_builder.prototype.retention = function (value) {
        this.setFlag("--retention", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_backup_update_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_backup_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_backup_update_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_connection_string_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_connection_string_delete_command_builder, _super);
    function az_webapp_config_connection_string_delete_command_builder(commandPath, resultDataTypeName, settingNames) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.settingNames(settingNames);
        return _this;
    }
    /** Space-separated connection-string names. */
    az_webapp_config_connection_string_delete_command_builder.prototype.settingNames = function (value) {
        this.setFlag("--setting-names", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_config_connection_string_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. If `--ids` is provided this should NOT be specified. */
    az_webapp_config_connection_string_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_connection_string_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_connection_string_delete_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_connection_string_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_connection_string_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_connection_string_list_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_connection_string_list_command_builder, _super);
    function az_webapp_config_connection_string_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_connection_string_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_connection_string_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_config_connection_string_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_connection_string_list_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_connection_string_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_connection_string_list_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_connection_string_set_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_connection_string_set_command_builder, _super);
    function az_webapp_config_connection_string_set_command_builder(commandPath, resultDataTypeName, connectionStringType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.connectionStringType(connectionStringType);
        return _this;
    }
    /** Connection string type. */
    az_webapp_config_connection_string_set_command_builder.prototype.connectionStringType = function (value) {
        this.setFlag("--connection-string-type", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_config_connection_string_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. If `--ids` is provided this should NOT be specified. */
    az_webapp_config_connection_string_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_connection_string_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated connection-string in a format of `<name>=<value>`. */
    az_webapp_config_connection_string_set_command_builder.prototype.settings = function (value) {
        this.setFlag("--settings", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_connection_string_set_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Space-separated slot connection-string in a format of either `<name>=<value>` or `@<json_file>`. */
    az_webapp_config_connection_string_set_command_builder.prototype.slotSettings = function (value) {
        this.setFlag("--slot-settings", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_connection_string_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_connection_string_set_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_container_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_container_delete_command_builder, _super);
    function az_webapp_config_container_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_config_container_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_container_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_container_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_container_delete_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_container_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_container_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_container_set_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_container_set_command_builder, _super);
    function az_webapp_config_container_set_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The container custom image name and optionally the tag name. */
    az_webapp_config_container_set_command_builder.prototype.dockerCustomImageName = function (value) {
        this.setFlag("--docker-custom-image-name", value);
        return this;
    };
    /** The container registry server password. */
    az_webapp_config_container_set_command_builder.prototype.dockerRegistryServerPassword = function (value) {
        this.setFlag("--docker-registry-server-password", value);
        return this;
    };
    /** The container registry server url. */
    az_webapp_config_container_set_command_builder.prototype.dockerRegistryServerUrl = function (value) {
        this.setFlag("--docker-registry-server-url", value);
        return this;
    };
    /** The container registry server username. */
    az_webapp_config_container_set_command_builder.prototype.dockerRegistryServerUser = function (value) {
        this.setFlag("--docker-registry-server-user", value);
        return this;
    };
    /** Enables platform storage (custom container only). */
    az_webapp_config_container_set_command_builder.prototype.enableAppServiceStorage = function (value) {
        this.setFlag("--enable-app-service-storage", value.toString());
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_config_container_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Config file for multicontainer apps. */
    az_webapp_config_container_set_command_builder.prototype.multicontainerConfigFile = function (value) {
        this.setFlag("--multicontainer-config-file", value);
        return this;
    };
    /** Config type. */
    az_webapp_config_container_set_command_builder.prototype.multicontainerConfigType = function (value) {
        this.setFlag("--multicontainer-config-type", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_container_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_container_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_container_set_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_container_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_container_set_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_container_show_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_container_show_command_builder, _super);
    function az_webapp_config_container_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_config_container_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_container_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_config_container_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_container_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Shows decoded config if a multicontainer config is set. */
    az_webapp_config_container_show_command_builder.prototype.showMulticontainerConfig = function (value) {
        this.setFlag("--show-multicontainer-config", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_container_show_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_container_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_container_show_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_hostname_add_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_hostname_add_command_builder, _super);
    function az_webapp_config_hostname_add_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Hostname assigned to the site, such as custom domains. */
    az_webapp_config_hostname_add_command_builder.prototype.hostname = function (value) {
        this.setFlag("--hostname", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_config_hostname_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_hostname_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_hostname_add_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_hostname_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Webapp name. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_hostname_add_command_builder.prototype.webappName = function (value) {
        this.setFlag("--webapp-name", value);
        return this;
    };
    return az_webapp_config_hostname_add_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_hostname_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_hostname_delete_command_builder, _super);
    function az_webapp_config_hostname_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Hostname assigned to the site, such as custom domains. */
    az_webapp_config_hostname_delete_command_builder.prototype.hostname = function (value) {
        this.setFlag("--hostname", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_config_hostname_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_hostname_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_hostname_delete_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_hostname_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Webapp name. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_hostname_delete_command_builder.prototype.webappName = function (value) {
        this.setFlag("--webapp-name", value);
        return this;
    };
    return az_webapp_config_hostname_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_hostname_get_external_ip_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_hostname_get_external_ip_command_builder, _super);
    function az_webapp_config_hostname_get_external_ip_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_config_hostname_get_external_ip_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_hostname_get_external_ip_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_hostname_get_external_ip_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Webapp name. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_hostname_get_external_ip_command_builder.prototype.webappName = function (value) {
        this.setFlag("--webapp-name", value);
        return this;
    };
    return az_webapp_config_hostname_get_external_ip_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_hostname_list_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_hostname_list_command_builder, _super);
    function az_webapp_config_hostname_list_command_builder(commandPath, resultDataTypeName, resourceGroup, webappName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.webappName(webappName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_hostname_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_hostname_list_command_builder.prototype.webappName = function (value) {
        this.setFlag("--webapp-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_config_hostname_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_hostname_list_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_hostname_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_hostname_list_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_snapshot_list_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_snapshot_list_command_builder, _super);
    function az_webapp_config_snapshot_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_snapshot_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_snapshot_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_config_snapshot_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The name of the slot. */
    az_webapp_config_snapshot_list_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_snapshot_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_snapshot_list_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_snapshot_restore_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_snapshot_restore_command_builder, _super);
    function az_webapp_config_snapshot_restore_command_builder(commandPath, resultDataTypeName, time) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.time(time);
        return _this;
    }
    /** Timestamp of the snapshot to restore. */
    az_webapp_config_snapshot_restore_command_builder.prototype.time = function (value) {
        this.setFlag("--time", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_config_snapshot_restore_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_snapshot_restore_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_snapshot_restore_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Restore the web app files without restoring the settings. */
    az_webapp_config_snapshot_restore_command_builder.prototype.restoreContentOnly = function (value) {
        this.setFlag("--restore-content-only", value);
        return this;
    };
    /** The name of the slot. */
    az_webapp_config_snapshot_restore_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name of the web app to retrieve snapshot from. */
    az_webapp_config_snapshot_restore_command_builder.prototype.sourceName = function (value) {
        this.setFlag("--source-name", value);
        return this;
    };
    /** Name of the resource group to retrieve snapshot from. */
    az_webapp_config_snapshot_restore_command_builder.prototype.sourceResourceGroup = function (value) {
        this.setFlag("--source-resource-group", value);
        return this;
    };
    /** Name of the web app slot to retrieve snapshot from. */
    az_webapp_config_snapshot_restore_command_builder.prototype.sourceSlot = function (value) {
        this.setFlag("--source-slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_snapshot_restore_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_snapshot_restore_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_ssl_bind_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_ssl_bind_command_builder, _super);
    function az_webapp_config_ssl_bind_command_builder(commandPath, resultDataTypeName, certificateThumbprint, sslType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.certificateThumbprint(certificateThumbprint);
        _this.sslType(sslType);
        return _this;
    }
    /** The ssl cert thumbprint. */
    az_webapp_config_ssl_bind_command_builder.prototype.certificateThumbprint = function (value) {
        this.setFlag("--certificate-thumbprint", value);
        return this;
    };
    /** The ssl cert type. */
    az_webapp_config_ssl_bind_command_builder.prototype.sslType = function (value) {
        this.setFlag("--ssl-type", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_config_ssl_bind_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_ssl_bind_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_ssl_bind_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_ssl_bind_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_ssl_bind_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_ssl_bind_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_ssl_create_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_ssl_create_command_builder, _super);
    function az_webapp_config_ssl_create_command_builder(commandPath, resultDataTypeName, hostname, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.hostname(hostname);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The custom domain name. */
    az_webapp_config_ssl_create_command_builder.prototype.hostname = function (value) {
        this.setFlag("--hostname", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_ssl_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_ssl_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_ssl_create_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_ssl_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_ssl_create_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_ssl_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_ssl_delete_command_builder, _super);
    function az_webapp_config_ssl_delete_command_builder(commandPath, resultDataTypeName, certificateThumbprint, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.certificateThumbprint(certificateThumbprint);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The ssl cert thumbprint. */
    az_webapp_config_ssl_delete_command_builder.prototype.certificateThumbprint = function (value) {
        this.setFlag("--certificate-thumbprint", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_ssl_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_ssl_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_ssl_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_ssl_import_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_ssl_import_command_builder, _super);
    function az_webapp_config_ssl_import_command_builder(commandPath, resultDataTypeName, keyVault, keyVaultCertificateName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.keyVault(keyVault);
        _this.keyVaultCertificateName(keyVaultCertificateName);
        return _this;
    }
    /** The name or resource ID of the Key Vault. */
    az_webapp_config_ssl_import_command_builder.prototype.keyVault = function (value) {
        this.setFlag("--key-vault", value);
        return this;
    };
    /** The name of the certificate in Key Vault. */
    az_webapp_config_ssl_import_command_builder.prototype.keyVaultCertificateName = function (value) {
        this.setFlag("--key-vault-certificate-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_config_ssl_import_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_ssl_import_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_ssl_import_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_ssl_import_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_ssl_import_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_ssl_list_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_ssl_list_command_builder, _super);
    function az_webapp_config_ssl_list_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_ssl_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_config_ssl_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_ssl_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_ssl_list_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_ssl_unbind_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_ssl_unbind_command_builder, _super);
    function az_webapp_config_ssl_unbind_command_builder(commandPath, resultDataTypeName, certificateThumbprint) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.certificateThumbprint(certificateThumbprint);
        return _this;
    }
    /** The ssl cert thumbprint. */
    az_webapp_config_ssl_unbind_command_builder.prototype.certificateThumbprint = function (value) {
        this.setFlag("--certificate-thumbprint", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_config_ssl_unbind_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_ssl_unbind_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_ssl_unbind_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_ssl_unbind_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_ssl_unbind_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_ssl_unbind_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_ssl_upload_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_ssl_upload_command_builder, _super);
    function az_webapp_config_ssl_upload_command_builder(commandPath, resultDataTypeName, certificateFile, certificatePassword) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.certificateFile(certificateFile);
        _this.certificatePassword(certificatePassword);
        return _this;
    }
    /** The filepath for the .pfx file. */
    az_webapp_config_ssl_upload_command_builder.prototype.certificateFile = function (value) {
        this.setFlag("--certificate-file", value);
        return this;
    };
    /** The ssl cert password. */
    az_webapp_config_ssl_upload_command_builder.prototype.certificatePassword = function (value) {
        this.setFlag("--certificate-password", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_config_ssl_upload_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_ssl_upload_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_ssl_upload_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_ssl_upload_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_ssl_upload_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_ssl_upload_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_storage_account_add_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_storage_account_add_command_builder, _super);
    function az_webapp_config_storage_account_add_command_builder(commandPath, resultDataTypeName, accessKey, accountName, customId, shareName, storageType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accessKey(accessKey);
        _this.accountName(accountName);
        _this.customId(customId);
        _this.shareName(shareName);
        _this.storageType(storageType);
        return _this;
    }
    /** Storage account access key. */
    az_webapp_config_storage_account_add_command_builder.prototype.accessKey = function (value) {
        this.setFlag("--access-key", value);
        return this;
    };
    /** Storage account name. */
    az_webapp_config_storage_account_add_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Custom identifier. */
    az_webapp_config_storage_account_add_command_builder.prototype.customId = function (value) {
        this.setFlag("--custom-id", value);
        return this;
    };
    /** Share name (Azure Files) or container name (Azure Blob Storage). */
    az_webapp_config_storage_account_add_command_builder.prototype.shareName = function (value) {
        this.setFlag("--share-name", value);
        return this;
    };
    /** Storage type. */
    az_webapp_config_storage_account_add_command_builder.prototype.storageType = function (value) {
        this.setFlag("--storage-type", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_config_storage_account_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Path to mount storage volume within web app. */
    az_webapp_config_storage_account_add_command_builder.prototype.mountPath = function (value) {
        this.setFlag("--mount-path", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_storage_account_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_storage_account_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_storage_account_add_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Slot setting. */
    az_webapp_config_storage_account_add_command_builder.prototype.slotSetting = function (value) {
        this.setFlag("--slot-setting", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_storage_account_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_storage_account_add_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_storage_account_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_storage_account_delete_command_builder, _super);
    function az_webapp_config_storage_account_delete_command_builder(commandPath, resultDataTypeName, customId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.customId(customId);
        return _this;
    }
    /** Custom identifier. */
    az_webapp_config_storage_account_delete_command_builder.prototype.customId = function (value) {
        this.setFlag("--custom-id", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_config_storage_account_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_storage_account_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_storage_account_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_storage_account_delete_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_storage_account_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_storage_account_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_storage_account_list_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_storage_account_list_command_builder, _super);
    function az_webapp_config_storage_account_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_storage_account_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_storage_account_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_config_storage_account_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_storage_account_list_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_storage_account_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_storage_account_list_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_storage_account_update_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_storage_account_update_command_builder, _super);
    function az_webapp_config_storage_account_update_command_builder(commandPath, resultDataTypeName, customId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.customId(customId);
        return _this;
    }
    /** Custom identifier. */
    az_webapp_config_storage_account_update_command_builder.prototype.customId = function (value) {
        this.setFlag("--custom-id", value);
        return this;
    };
    /** Storage account access key. */
    az_webapp_config_storage_account_update_command_builder.prototype.accessKey = function (value) {
        this.setFlag("--access-key", value);
        return this;
    };
    /** Storage account name. */
    az_webapp_config_storage_account_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_config_storage_account_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Path to mount storage volume within web app. */
    az_webapp_config_storage_account_update_command_builder.prototype.mountPath = function (value) {
        this.setFlag("--mount-path", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_storage_account_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_storage_account_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Share name (Azure Files) or container name (Azure Blob Storage). */
    az_webapp_config_storage_account_update_command_builder.prototype.shareName = function (value) {
        this.setFlag("--share-name", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_storage_account_update_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Slot setting. */
    az_webapp_config_storage_account_update_command_builder.prototype.slotSetting = function (value) {
        this.setFlag("--slot-setting", value);
        return this;
    };
    /** Storage type. */
    az_webapp_config_storage_account_update_command_builder.prototype.storageType = function (value) {
        this.setFlag("--storage-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_storage_account_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_storage_account_update_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_set_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_set_command_builder, _super);
    function az_webapp_config_set_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Ensure web app gets loaded all the time, rather unloaded after been idle. Recommended when you have continuous web jobs running. */
    az_webapp_config_set_command_builder.prototype.alwaysOn = function (value) {
        this.setFlag("--always-on", value.toString());
        return this;
    };
    /** Enable or disable auto heal. */
    az_webapp_config_set_command_builder.prototype.autoHealEnabled = function (value) {
        this.setFlag("--auto-heal-enabled", value.toString());
        return this;
    };
    /** Set the Ftps state value for an app. Default value is 'AllAllowed'. */
    az_webapp_config_set_command_builder.prototype.ftpsState = function (value) {
        this.setFlag("--ftps-state", value);
        return this;
    };
    /** Provide site configuration list in a format of either `key=value` pair or `@<json_file>`. */
    az_webapp_config_set_command_builder.prototype.genericConfigurations = function (value) {
        this.setFlag("--generic-configurations", value);
        return this;
    };
    /** Configures a web site to allow clients to connect over http2.0. */
    az_webapp_config_set_command_builder.prototype.http20Enabled = function (value) {
        this.setFlag("--http20-enabled", value.toString());
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_config_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The java container, e.g., Tomcat, Jetty. */
    az_webapp_config_set_command_builder.prototype.javaContainer = function (value) {
        this.setFlag("--java-container", value);
        return this;
    };
    /** The version of the java container, e.g., '8.0.23' for Tomcat. */
    az_webapp_config_set_command_builder.prototype.javaContainerVersion = function (value) {
        this.setFlag("--java-container-version", value);
        return this;
    };
    /** The version used to run your web app if using Java, e.g., '1.7' for Java 7, '1.8' for Java 8. */
    az_webapp_config_set_command_builder.prototype.javaVersion = function (value) {
        this.setFlag("--java-version", value);
        return this;
    };
    /** The runtime stack used for your linux-based webapp, e.g., "RUBY|2.5.5", "NODE|10.14", "PHP|7.2", "DOTNETCORE|2.1". See <a href="https://aka.ms/linux-stacks">https://aka.ms/linux-stacks</a> for more info. */
    az_webapp_config_set_command_builder.prototype.linuxFxVersion = function (value) {
        this.setFlag("--linux-fx-version", value);
        return this;
    };
    /** The minimum version of TLS required for SSL requests, e.g., '1.0', '1.1', '1.2'. */
    az_webapp_config_set_command_builder.prototype.minTlsVersion = function (value) {
        this.setFlag("--min-tls-version", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The version used to run your web app if using .NET Framework, e.g., 'v4.0' for .NET 4.6 and 'v3.0' for .NET 3.5. */
    az_webapp_config_set_command_builder.prototype.netFrameworkVersion = function (value) {
        this.setFlag("--net-framework-version", value);
        return this;
    };
    /** The number of workers to be allocated. */
    az_webapp_config_set_command_builder.prototype.numberOfWorkers = function (value) {
        this.setFlag("--number-of-workers", value);
        return this;
    };
    /** The version used to run your web app if using PHP, e.g., 5.5, 5.6, 7.0. */
    az_webapp_config_set_command_builder.prototype.phpVersion = function (value) {
        this.setFlag("--php-version", value);
        return this;
    };
    /** Number of pre-warmed instances a function app has. */
    az_webapp_config_set_command_builder.prototype.prewarmedInstanceCount = function (value) {
        this.setFlag("--prewarmed-instance-count", value);
        return this;
    };
    /** The version used to run your web app if using Python, e.g., 2.7, 3.4. */
    az_webapp_config_set_command_builder.prototype.pythonVersion = function (value) {
        this.setFlag("--python-version", value);
        return this;
    };
    /** Enable or disable remote debugging. */
    az_webapp_config_set_command_builder.prototype.remoteDebuggingEnabled = function (value) {
        this.setFlag("--remote-debugging-enabled", value.toString());
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_set_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** The startup file for linux hosted web apps, e.g. 'process.json' for Node.js web. */
    az_webapp_config_set_command_builder.prototype.startupFile = function (value) {
        this.setFlag("--startup-file", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Use 32 bits worker process or not. */
    az_webapp_config_set_command_builder.prototype.use32BitWorkerProcess = function (value) {
        this.setFlag("--use-32bit-worker-process", value.toString());
        return this;
    };
    /** Enable or disable web sockets. */
    az_webapp_config_set_command_builder.prototype.webSocketsEnabled = function (value) {
        this.setFlag("--web-sockets-enabled", value.toString());
        return this;
    };
    /** A docker image name used for your windows container web app, e.g., microsoft/nanoserver:ltsc2016. */
    az_webapp_config_set_command_builder.prototype.windowsFxVersion = function (value) {
        this.setFlag("--windows-fx-version", value);
        return this;
    };
    return az_webapp_config_set_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_config_show_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_config_show_command_builder, _super);
    function az_webapp_config_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_config_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_config_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_config_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_config_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_config_show_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_config_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_config_show_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_cors_add_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_cors_add_command_builder, _super);
    function az_webapp_cors_add_command_builder(commandPath, resultDataTypeName, allowedOrigins) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.allowedOrigins(allowedOrigins);
        return _this;
    }
    /** Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*" and remove all other origins from the list. */
    az_webapp_cors_add_command_builder.prototype.allowedOrigins = function (value) {
        this.setFlag("--allowed-origins", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_cors_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_cors_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_cors_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_cors_add_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_cors_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_cors_add_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_cors_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_cors_remove_command_builder, _super);
    function az_webapp_cors_remove_command_builder(commandPath, resultDataTypeName, allowedOrigins) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.allowedOrigins(allowedOrigins);
        return _this;
    }
    /** Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*" and remove all other origins from the list. */
    az_webapp_cors_remove_command_builder.prototype.allowedOrigins = function (value) {
        this.setFlag("--allowed-origins", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_cors_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_cors_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_cors_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_cors_remove_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_cors_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_cors_remove_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_cors_show_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_cors_show_command_builder, _super);
    function az_webapp_cors_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_cors_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_cors_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_cors_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_cors_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_cors_show_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_cors_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_cors_show_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_deleted_list_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_deleted_list_command_builder, _super);
    function az_webapp_deleted_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_deleted_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_deleted_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_deleted_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the deleted web app slot. */
    az_webapp_deleted_list_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_deleted_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_deleted_list_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_deleted_restore_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_deleted_restore_command_builder, _super);
    function az_webapp_deleted_restore_command_builder(commandPath, resultDataTypeName, deletedId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.deletedId(deletedId);
        return _this;
    }
    /** Resource ID of the deleted web app. */
    az_webapp_deleted_restore_command_builder.prototype.deletedId = function (value) {
        this.setFlag("--deleted-id", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_deleted_restore_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app to restore the deleted content to. */
    az_webapp_deleted_restore_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_deleted_restore_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Restore only deleted files without web app settings. */
    az_webapp_deleted_restore_command_builder.prototype.restoreContentOnly = function (value) {
        this.setFlag("--restore-content-only", value);
        return this;
    };
    /** Slot to restore the deleted content to. */
    az_webapp_deleted_restore_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_deleted_restore_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_deleted_restore_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_deployment_container_config_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_deployment_container_config_command_builder, _super);
    function az_webapp_deployment_container_config_command_builder(commandPath, resultDataTypeName, enableCd) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.enableCd(enableCd);
        return _this;
    }
    /** Enable/disable continuous deployment. */
    az_webapp_deployment_container_config_command_builder.prototype.enableCd = function (value) {
        this.setFlag("--enable-cd", value.toString());
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_deployment_container_config_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_deployment_container_config_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_deployment_container_config_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_deployment_container_config_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_deployment_container_config_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_deployment_container_config_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_deployment_container_show_cd_url_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_deployment_container_show_cd_url_command_builder, _super);
    function az_webapp_deployment_container_show_cd_url_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_deployment_container_show_cd_url_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_deployment_container_show_cd_url_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_deployment_container_show_cd_url_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_deployment_container_show_cd_url_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_deployment_container_show_cd_url_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_deployment_container_show_cd_url_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_deployment_slot_auto_swap_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_deployment_slot_auto_swap_command_builder, _super);
    function az_webapp_deployment_slot_auto_swap_command_builder(commandPath, resultDataTypeName, slot) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.slot(slot);
        return _this;
    }
    /** The name of the slot. */
    az_webapp_deployment_slot_auto_swap_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Target slot to auto swap. */
    az_webapp_deployment_slot_auto_swap_command_builder.prototype.autoSwapSlot = function (value) {
        this.setFlag("--auto-swap-slot", value);
        return this;
    };
    /** Disable auto swap. */
    az_webapp_deployment_slot_auto_swap_command_builder.prototype.disable = function (value) {
        this.setFlag("--disable", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_deployment_slot_auto_swap_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the webapp. */
    az_webapp_deployment_slot_auto_swap_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_deployment_slot_auto_swap_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_deployment_slot_auto_swap_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_deployment_slot_auto_swap_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_deployment_slot_create_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_deployment_slot_create_command_builder, _super);
    function az_webapp_deployment_slot_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, slot) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.slot(slot);
        return _this;
    }
    /** Name of the webapp. */
    az_webapp_deployment_slot_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_deployment_slot_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. */
    az_webapp_deployment_slot_create_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Source slot to clone configurations from. Use web app's name to refer to the production slot. */
    az_webapp_deployment_slot_create_command_builder.prototype.configurationSource = function (value) {
        this.setFlag("--configuration-source", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_deployment_slot_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_deployment_slot_create_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_deployment_slot_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_deployment_slot_delete_command_builder, _super);
    function az_webapp_deployment_slot_delete_command_builder(commandPath, resultDataTypeName, slot) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.slot(slot);
        return _this;
    }
    /** The name of the slot. */
    az_webapp_deployment_slot_delete_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_deployment_slot_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the webapp. */
    az_webapp_deployment_slot_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_deployment_slot_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_deployment_slot_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_deployment_slot_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_deployment_slot_list_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_deployment_slot_list_command_builder, _super);
    function az_webapp_deployment_slot_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_deployment_slot_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the webapp. */
    az_webapp_deployment_slot_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_deployment_slot_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_deployment_slot_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_deployment_slot_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_deployment_slot_list_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_deployment_slot_swap_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_deployment_slot_swap_command_builder, _super);
    function az_webapp_deployment_slot_swap_command_builder(commandPath, resultDataTypeName, slot) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.slot(slot);
        return _this;
    }
    /** The name of the slot. */
    az_webapp_deployment_slot_swap_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Swap types. use 'preview' to apply target slot's settings on the source slot first; use 'swap' to complete it; use 'reset' to reset the swap. */
    az_webapp_deployment_slot_swap_command_builder.prototype.action = function (value) {
        this.setFlag("--action", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_deployment_slot_swap_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the webapp. */
    az_webapp_deployment_slot_swap_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_deployment_slot_swap_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_deployment_slot_swap_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Target slot to swap, default to 'production'. */
    az_webapp_deployment_slot_swap_command_builder.prototype.targetSlot = function (value) {
        this.setFlag("--target-slot", value);
        return this;
    };
    return az_webapp_deployment_slot_swap_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_deployment_source_config_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_deployment_source_config_command_builder, _super);
    function az_webapp_deployment_source_config_command_builder(commandPath, resultDataTypeName, repoUrl) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.repoUrl(repoUrl);
        return _this;
    }
    /** Repository url to pull the latest source from, e.g. <a href="https://github.com/foo/foo-web">https://github.com/foo/foo-web</a>. */
    az_webapp_deployment_source_config_command_builder.prototype.repoUrl = function (value) {
        this.setFlag("--repo-url", value);
        return this;
    };
    /** Working directory of the application. Default will be root of the repo. */
    az_webapp_deployment_source_config_command_builder.prototype.appWorkingDir = function (value) {
        this.setFlag("--app-working-dir", value);
        return this;
    };
    /** The branch name of the repository. */
    az_webapp_deployment_source_config_command_builder.prototype.branch = function (value) {
        this.setFlag("--branch", value);
        return this;
    };
    /** To create a new Visual Studio Team Services (VSTS) account if it doesn't exist already. */
    az_webapp_deployment_source_config_command_builder.prototype.cdAccountCreate = function (value) {
        this.setFlag("--cd-account-create", value);
        return this;
    };
    /** Web application framework you used to develop your app. Default is AspNet. */
    az_webapp_deployment_source_config_command_builder.prototype.cdAppType = function (value) {
        this.setFlag("--cd-app-type", value);
        return this;
    };
    /** URL of the Visual Studio Team Services (VSTS) project to use for continuous delivery. URL should be in format `https://<accountname>.visualstudio.com/<projectname>`. */
    az_webapp_deployment_source_config_command_builder.prototype.cdProjectUrl = function (value) {
        this.setFlag("--cd-project-url", value);
        return this;
    };
    /** Git access token required for auto sync. */
    az_webapp_deployment_source_config_command_builder.prototype.gitToken = function (value) {
        this.setFlag("--git-token", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_deployment_source_config_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Disable automatic sync between source control and web. */
    az_webapp_deployment_source_config_command_builder.prototype.manualIntegration = function (value) {
        this.setFlag("--manual-integration", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_deployment_source_config_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Task runner for nodejs. Default is None. */
    az_webapp_deployment_source_config_command_builder.prototype.nodejsTaskRunner = function (value) {
        this.setFlag("--nodejs-task-runner", value);
        return this;
    };
    /** Password for the private repository. */
    az_webapp_deployment_source_config_command_builder.prototype.privateRepoPassword = function (value) {
        this.setFlag("--private-repo-password", value);
        return this;
    };
    /** Username for the private repository. */
    az_webapp_deployment_source_config_command_builder.prototype.privateRepoUsername = function (value) {
        this.setFlag("--private-repo-username", value);
        return this;
    };
    /** Framework used for Python application. Default is Django. */
    az_webapp_deployment_source_config_command_builder.prototype.pythonFramework = function (value) {
        this.setFlag("--python-framework", value);
        return this;
    };
    /** Python version used for application. Default is Python 3.5.3 x86. */
    az_webapp_deployment_source_config_command_builder.prototype.pythonVersion = function (value) {
        this.setFlag("--python-version", value);
        return this;
    };
    /** Repository type. */
    az_webapp_deployment_source_config_command_builder.prototype.repositoryType = function (value) {
        this.setFlag("--repository-type", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_deployment_source_config_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_deployment_source_config_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name of the slot to be used for deployment and later promote to production. If slot is not available, it will be created. Default: Not configured. */
    az_webapp_deployment_source_config_command_builder.prototype.slotSwap = function (value) {
        this.setFlag("--slot-swap", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_deployment_source_config_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the web app to be used for load testing. If web app is not available, it will be created. Default: Disable. */
    az_webapp_deployment_source_config_command_builder.prototype.test = function (value) {
        this.setFlag("--test", value);
        return this;
    };
    return az_webapp_deployment_source_config_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_deployment_source_config_local_git_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_deployment_source_config_local_git_command_builder, _super);
    function az_webapp_deployment_source_config_local_git_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_deployment_source_config_local_git_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_deployment_source_config_local_git_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_deployment_source_config_local_git_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_deployment_source_config_local_git_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_deployment_source_config_local_git_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_deployment_source_config_local_git_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_deployment_source_config_zip_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_deployment_source_config_zip_command_builder, _super);
    function az_webapp_deployment_source_config_zip_command_builder(commandPath, resultDataTypeName, src) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.src(src);
        return _this;
    }
    /** A zip file path for deployment. */
    az_webapp_deployment_source_config_zip_command_builder.prototype.src = function (value) {
        this.setFlag("--src", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_deployment_source_config_zip_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_deployment_source_config_zip_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_deployment_source_config_zip_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_deployment_source_config_zip_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_deployment_source_config_zip_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Configurable timeout in seconds for checking the status of deployment. */
    az_webapp_deployment_source_config_zip_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    return az_webapp_deployment_source_config_zip_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_deployment_source_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_deployment_source_delete_command_builder, _super);
    function az_webapp_deployment_source_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_deployment_source_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_deployment_source_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_deployment_source_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_deployment_source_delete_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_deployment_source_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_deployment_source_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_deployment_source_show_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_deployment_source_show_command_builder, _super);
    function az_webapp_deployment_source_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_deployment_source_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_deployment_source_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_deployment_source_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_deployment_source_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_deployment_source_show_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_deployment_source_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_deployment_source_show_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_deployment_source_sync_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_deployment_source_sync_command_builder, _super);
    function az_webapp_deployment_source_sync_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_deployment_source_sync_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_deployment_source_sync_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_deployment_source_sync_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_deployment_source_sync_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_deployment_source_sync_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_deployment_source_sync_command_builder;
}(base_1.CommandBuilder));
/**
 * Update source control token cached in Azure app service.
 *
 * Syntax:
 * ```
 * az webapp deployment source update-token [--git-token]
 *                                          [--subscription]
 * ```
 */
var az_webapp_deployment_source_update_token_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_deployment_source_update_token_command_builder, _super);
    function az_webapp_deployment_source_update_token_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Git access token required for auto sync. */
    az_webapp_deployment_source_update_token_command_builder.prototype.gitToken = function (value) {
        this.setFlag("--git-token", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_deployment_source_update_token_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_deployment_source_update_token_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_deployment_user_set_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_deployment_user_set_command_builder, _super);
    function az_webapp_deployment_user_set_command_builder(commandPath, resultDataTypeName, userName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.userName(userName);
        return _this;
    }
    /** User name. */
    az_webapp_deployment_user_set_command_builder.prototype.userName = function (value) {
        this.setFlag("--user-name", value);
        return this;
    };
    /** Password, will prompt if not specified. */
    az_webapp_deployment_user_set_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_deployment_user_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_deployment_user_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Get deployment publishing user.
 *
 * Syntax:
 * ```
 * az webapp deployment user show [--query-examples]
 *                                [--subscription]
 * ```
 */
var az_webapp_deployment_user_show_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_deployment_user_show_command_builder, _super);
    function az_webapp_deployment_user_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_deployment_user_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_deployment_user_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_deployment_user_show_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_deployment_list_publishing_credentials_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_deployment_list_publishing_credentials_command_builder, _super);
    function az_webapp_deployment_list_publishing_credentials_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_deployment_list_publishing_credentials_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_deployment_list_publishing_credentials_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_deployment_list_publishing_credentials_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_deployment_list_publishing_credentials_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_deployment_list_publishing_credentials_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_deployment_list_publishing_credentials_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_deployment_list_publishing_profiles_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_deployment_list_publishing_profiles_command_builder, _super);
    function az_webapp_deployment_list_publishing_profiles_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_deployment_list_publishing_profiles_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_deployment_list_publishing_profiles_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_deployment_list_publishing_profiles_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_deployment_list_publishing_profiles_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_deployment_list_publishing_profiles_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Retrieves the publishing profile details in XML format. */
    az_webapp_deployment_list_publishing_profiles_command_builder.prototype.xml = function (value) {
        this.setFlag("--xml", value);
        return this;
    };
    return az_webapp_deployment_list_publishing_profiles_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_hybrid_connection_add_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_hybrid_connection_add_command_builder, _super);
    function az_webapp_hybrid_connection_add_command_builder(commandPath, resultDataTypeName, hybridConnection, name, namespace, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.hybridConnection(hybridConnection);
        _this.name(name);
        _this.namespace(namespace);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Hybrid connection name. */
    az_webapp_hybrid_connection_add_command_builder.prototype.hybridConnection = function (value) {
        this.setFlag("--hybrid-connection", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_hybrid_connection_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Hybrid connection namespace. */
    az_webapp_hybrid_connection_add_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_hybrid_connection_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_hybrid_connection_add_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_hybrid_connection_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_hybrid_connection_add_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_hybrid_connection_list_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_hybrid_connection_list_command_builder, _super);
    function az_webapp_hybrid_connection_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_hybrid_connection_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_hybrid_connection_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_hybrid_connection_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_hybrid_connection_list_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_hybrid_connection_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_hybrid_connection_list_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_hybrid_connection_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_hybrid_connection_remove_command_builder, _super);
    function az_webapp_hybrid_connection_remove_command_builder(commandPath, resultDataTypeName, hybridConnection, name, namespace, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.hybridConnection(hybridConnection);
        _this.name(name);
        _this.namespace(namespace);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Hybrid connection name. */
    az_webapp_hybrid_connection_remove_command_builder.prototype.hybridConnection = function (value) {
        this.setFlag("--hybrid-connection", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_hybrid_connection_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Hybrid connection namespace. */
    az_webapp_hybrid_connection_remove_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_hybrid_connection_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_hybrid_connection_remove_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_hybrid_connection_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_hybrid_connection_remove_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_identity_assign_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_identity_assign_command_builder, _super);
    function az_webapp_identity_assign_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'. */
    az_webapp_identity_assign_command_builder.prototype.identities = function (value) {
        this.setFlag("--identities", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_identity_assign_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_identity_assign_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_identity_assign_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Role name or id the managed identity will be assigned. */
    az_webapp_identity_assign_command_builder.prototype.role = function (value) {
        this.setFlag("--role", value);
        return this;
    };
    /** The scope the managed identity has access to. */
    az_webapp_identity_assign_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_identity_assign_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_identity_assign_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_identity_assign_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_identity_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_identity_remove_command_builder, _super);
    function az_webapp_identity_remove_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'. */
    az_webapp_identity_remove_command_builder.prototype.identities = function (value) {
        this.setFlag("--identities", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_identity_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_identity_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_identity_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_identity_remove_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_identity_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_identity_remove_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_identity_show_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_identity_show_command_builder, _super);
    function az_webapp_identity_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_identity_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_identity_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_identity_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_identity_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_identity_show_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_identity_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_identity_show_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_log_deployment_list_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_log_deployment_list_command_builder, _super);
    function az_webapp_log_deployment_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_log_deployment_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_log_deployment_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_log_deployment_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_log_deployment_list_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_log_deployment_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_log_deployment_list_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_log_deployment_show_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_log_deployment_show_command_builder, _super);
    function az_webapp_log_deployment_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_log_deployment_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_log_deployment_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Deployment ID. If none specified, returns the deployment logs of the latest deployment. */
    az_webapp_log_deployment_show_command_builder.prototype.deploymentId = function (value) {
        this.setFlag("--deployment-id", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_log_deployment_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_log_deployment_show_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_log_deployment_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_log_deployment_show_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_log_config_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_log_config_command_builder, _super);
    function az_webapp_log_config_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Configure application logging. */
    az_webapp_log_config_command_builder.prototype.applicationLogging = function (value) {
        this.setFlag("--application-logging", value);
        return this;
    };
    /** Configure detailed error messages. */
    az_webapp_log_config_command_builder.prototype.detailedErrorMessages = function (value) {
        this.setFlag("--detailed-error-messages", value.toString());
        return this;
    };
    /** Configure gathering STDOUT and STDERR output from container. */
    az_webapp_log_config_command_builder.prototype.dockerContainerLogging = function (value) {
        this.setFlag("--docker-container-logging", value);
        return this;
    };
    /** Configure failed request tracing. */
    az_webapp_log_config_command_builder.prototype.failedRequestTracing = function (value) {
        this.setFlag("--failed-request-tracing", value.toString());
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_log_config_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Logging level. */
    az_webapp_log_config_command_builder.prototype.level = function (value) {
        this.setFlag("--level", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_log_config_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_log_config_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_log_config_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_log_config_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Configure Web server logging. */
    az_webapp_log_config_command_builder.prototype.webServerLogging = function (value) {
        this.setFlag("--web-server-logging", value);
        return this;
    };
    return az_webapp_log_config_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_log_download_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_log_download_command_builder, _super);
    function az_webapp_log_download_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_log_download_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The downloaded zipped log file path. */
    az_webapp_log_download_command_builder.prototype.logFile = function (value) {
        this.setFlag("--log-file", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_log_download_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_log_download_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_log_download_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_log_download_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_log_download_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_log_show_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_log_show_command_builder, _super);
    function az_webapp_log_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_log_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_log_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_log_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_log_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_log_show_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_log_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_log_show_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_log_tail_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_log_tail_command_builder, _super);
    function az_webapp_log_tail_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_log_tail_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_log_tail_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** By default all live traces configured by `az webapp log config` will be shown, but you can scope to certain providers/folders, e.g. 'application', 'http', etc. For details, check out <a href="https://github.com/projectkudu/kudu/wiki/Diagnostic-Log-Stream">https://github.com/projectkudu/kudu/wiki/Diagnostic-Log-Stream</a>. */
    az_webapp_log_tail_command_builder.prototype.provider = function (value) {
        this.setFlag("--provider", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_log_tail_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_log_tail_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_log_tail_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_log_tail_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_traffic_routing_clear_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_traffic_routing_clear_command_builder, _super);
    function az_webapp_traffic_routing_clear_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_traffic_routing_clear_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_traffic_routing_clear_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_traffic_routing_clear_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_traffic_routing_clear_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_traffic_routing_clear_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_traffic_routing_set_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_traffic_routing_set_command_builder, _super);
    function az_webapp_traffic_routing_set_command_builder(commandPath, resultDataTypeName, distribution) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.distribution(distribution);
        return _this;
    }
    /** Space-separated slot routings in a format of `<slot-name>=<percentage>` e.g. staging=50. Unused traffic percentage will go to the Production slot. */
    az_webapp_traffic_routing_set_command_builder.prototype.distribution = function (value) {
        this.setFlag("--distribution", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_traffic_routing_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_traffic_routing_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_traffic_routing_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_traffic_routing_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_traffic_routing_set_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_traffic_routing_show_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_traffic_routing_show_command_builder, _super);
    function az_webapp_traffic_routing_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_traffic_routing_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_traffic_routing_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_traffic_routing_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_traffic_routing_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_traffic_routing_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_traffic_routing_show_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_vnet_integration_add_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_vnet_integration_add_command_builder, _super);
    function az_webapp_vnet_integration_add_command_builder(commandPath, resultDataTypeName, name, resourceGroup, subnet, vnet) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.subnet(subnet);
        _this.vnet(vnet);
        return _this;
    }
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_vnet_integration_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_vnet_integration_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the subnet. */
    az_webapp_vnet_integration_add_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** The name or resource ID of the Vnet. */
    az_webapp_vnet_integration_add_command_builder.prototype.vnet = function (value) {
        this.setFlag("--vnet", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_vnet_integration_add_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_vnet_integration_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_vnet_integration_add_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_vnet_integration_list_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_vnet_integration_list_command_builder, _super);
    function az_webapp_vnet_integration_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_vnet_integration_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_vnet_integration_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_vnet_integration_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_vnet_integration_list_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_vnet_integration_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_vnet_integration_list_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_vnet_integration_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_vnet_integration_remove_command_builder, _super);
    function az_webapp_vnet_integration_remove_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_vnet_integration_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_vnet_integration_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_vnet_integration_remove_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_vnet_integration_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_vnet_integration_remove_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_webjob_continuous_list_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_webjob_continuous_list_command_builder, _super);
    function az_webapp_webjob_continuous_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_webjob_continuous_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_webjob_continuous_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_webjob_continuous_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_webjob_continuous_list_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_webjob_continuous_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_webjob_continuous_list_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_webjob_continuous_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_webjob_continuous_remove_command_builder, _super);
    function az_webapp_webjob_continuous_remove_command_builder(commandPath, resultDataTypeName, webjobName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.webjobName(webjobName);
        return _this;
    }
    /** The name of the webjob. */
    az_webapp_webjob_continuous_remove_command_builder.prototype.webjobName = function (value) {
        this.setFlag("--webjob-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_webjob_continuous_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_webjob_continuous_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_webjob_continuous_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_webjob_continuous_remove_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_webjob_continuous_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_webjob_continuous_remove_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_webjob_continuous_start_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_webjob_continuous_start_command_builder, _super);
    function az_webapp_webjob_continuous_start_command_builder(commandPath, resultDataTypeName, webjobName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.webjobName(webjobName);
        return _this;
    }
    /** The name of the webjob. */
    az_webapp_webjob_continuous_start_command_builder.prototype.webjobName = function (value) {
        this.setFlag("--webjob-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_webjob_continuous_start_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_webjob_continuous_start_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_webjob_continuous_start_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_webjob_continuous_start_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_webjob_continuous_start_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_webjob_continuous_start_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_webjob_continuous_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_webjob_continuous_stop_command_builder, _super);
    function az_webapp_webjob_continuous_stop_command_builder(commandPath, resultDataTypeName, webjobName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.webjobName(webjobName);
        return _this;
    }
    /** The name of the webjob. */
    az_webapp_webjob_continuous_stop_command_builder.prototype.webjobName = function (value) {
        this.setFlag("--webjob-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_webjob_continuous_stop_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_webjob_continuous_stop_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_webjob_continuous_stop_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_webjob_continuous_stop_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_webjob_continuous_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_webjob_continuous_stop_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_webjob_triggered_list_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_webjob_triggered_list_command_builder, _super);
    function az_webapp_webjob_triggered_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_webjob_triggered_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_webjob_triggered_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_webjob_triggered_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_webjob_triggered_list_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_webjob_triggered_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_webjob_triggered_list_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_webjob_triggered_log_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_webjob_triggered_log_command_builder, _super);
    function az_webapp_webjob_triggered_log_command_builder(commandPath, resultDataTypeName, webjobName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.webjobName(webjobName);
        return _this;
    }
    /** The name of the webjob. */
    az_webapp_webjob_triggered_log_command_builder.prototype.webjobName = function (value) {
        this.setFlag("--webjob-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_webjob_triggered_log_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_webjob_triggered_log_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_webjob_triggered_log_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_webjob_triggered_log_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_webjob_triggered_log_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_webjob_triggered_log_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_webjob_triggered_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_webjob_triggered_remove_command_builder, _super);
    function az_webapp_webjob_triggered_remove_command_builder(commandPath, resultDataTypeName, webjobName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.webjobName(webjobName);
        return _this;
    }
    /** The name of the webjob. */
    az_webapp_webjob_triggered_remove_command_builder.prototype.webjobName = function (value) {
        this.setFlag("--webjob-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_webjob_triggered_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_webjob_triggered_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_webjob_triggered_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_webjob_triggered_remove_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_webjob_triggered_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_webjob_triggered_remove_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_webjob_triggered_run_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_webjob_triggered_run_command_builder, _super);
    function az_webapp_webjob_triggered_run_command_builder(commandPath, resultDataTypeName, webjobName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.webjobName(webjobName);
        return _this;
    }
    /** The name of the webjob. */
    az_webapp_webjob_triggered_run_command_builder.prototype.webjobName = function (value) {
        this.setFlag("--webjob-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_webjob_triggered_run_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_webjob_triggered_run_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_webjob_triggered_run_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_webjob_triggered_run_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_webjob_triggered_run_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_webjob_triggered_run_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_browse_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_browse_command_builder, _super);
    function az_webapp_browse_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_browse_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Enable viewing the log stream immediately after launching the web app. */
    az_webapp_browse_command_builder.prototype.logs = function (value) {
        this.setFlag("--logs", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_browse_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_browse_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_browse_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_browse_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_browse_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_create_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_create_command_builder, _super);
    function az_webapp_create_command_builder(commandPath, resultDataTypeName, name, plan, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.plan(plan);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the new web app. */
    az_webapp_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or resource id of the app service plan. Use 'appservice plan create' to get one. */
    az_webapp_create_command_builder.prototype.plan = function (value) {
        this.setFlag("--plan", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Accept system or user assigned identities separated by spaces. Use '[system]' to refer system assigned identity, or a resource id to refer user assigned identity. Check out help for more examples. */
    az_webapp_create_command_builder.prototype.assignIdentity = function (value) {
        this.setFlag("--assign-identity", value);
        return this;
    };
    /** Linux only. Container image name from Docker Hub, e.g. publisher/image-name:tag. */
    az_webapp_create_command_builder.prototype.deploymentContainerImageName = function (value) {
        this.setFlag("--deployment-container-image-name", value);
        return this;
    };
    /** Enable local git. */
    az_webapp_create_command_builder.prototype.deploymentLocalGit = function (value) {
        this.setFlag("--deployment-local-git", value);
        return this;
    };
    /** The branch to deploy. */
    az_webapp_create_command_builder.prototype.deploymentSourceBranch = function (value) {
        this.setFlag("--deployment-source-branch", value);
        return this;
    };
    /** Git repository URL to link with manual integration. */
    az_webapp_create_command_builder.prototype.deploymentSourceUrl = function (value) {
        this.setFlag("--deployment-source-url", value);
        return this;
    };
    /** The container registry server password. Required for private registries. */
    az_webapp_create_command_builder.prototype.dockerRegistryServerPassword = function (value) {
        this.setFlag("--docker-registry-server-password", value);
        return this;
    };
    /** The container registry server username. */
    az_webapp_create_command_builder.prototype.dockerRegistryServerUser = function (value) {
        this.setFlag("--docker-registry-server-user", value);
        return this;
    };
    /** Linux only. Config file for multicontainer apps. (local or remote). */
    az_webapp_create_command_builder.prototype.multicontainerConfigFile = function (value) {
        this.setFlag("--multicontainer-config-file", value);
        return this;
    };
    /** Linux only. */
    az_webapp_create_command_builder.prototype.multicontainerConfigType = function (value) {
        this.setFlag("--multicontainer-config-type", value);
        return this;
    };
    /** Role name or id the system assigned identity will have. */
    az_webapp_create_command_builder.prototype.role = function (value) {
        this.setFlag("--role", value);
        return this;
    };
    /** Canonicalized web runtime in the format of Framework|Version, e.g. "PHP|7.2". Use `az webapp list-runtimes` for available list. */
    az_webapp_create_command_builder.prototype.runtime = function (value) {
        this.setFlag("--runtime", value);
        return this;
    };
    /** Scope that the system assigned identity can access. */
    az_webapp_create_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** Linux only. The web's startup file. */
    az_webapp_create_command_builder.prototype.startupFile = function (value) {
        this.setFlag("--startup-file", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_webapp_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_webapp_create_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_create_remote_connection_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_create_remote_connection_command_builder, _super);
    function az_webapp_create_remote_connection_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_create_remote_connection_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Webapp instance to connect to. Defaults to none. */
    az_webapp_create_remote_connection_command_builder.prototype.instance = function (value) {
        this.setFlag("--instance", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_create_remote_connection_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Port for the remote connection. Default: Random available port. */
    az_webapp_create_remote_connection_command_builder.prototype.port = function (value) {
        this.setFlag("--port", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_create_remote_connection_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_create_remote_connection_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_create_remote_connection_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Timeout in seconds. Defaults to none. */
    az_webapp_create_remote_connection_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    return az_webapp_create_remote_connection_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_delete_command_builder, _super);
    function az_webapp_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Keep DNS registration. */
    az_webapp_delete_command_builder.prototype.keepDnsRegistration = function (value) {
        this.setFlag("--keep-dns-registration", value);
        return this;
    };
    /** Keep empty app service plan. */
    az_webapp_delete_command_builder.prototype.keepEmptyPlan = function (value) {
        this.setFlag("--keep-empty-plan", value);
        return this;
    };
    /** Keep app metrics. */
    az_webapp_delete_command_builder.prototype.keepMetrics = function (value) {
        this.setFlag("--keep-metrics", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_delete_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_list_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_list_command_builder, _super);
    function az_webapp_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_list_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_list_instances_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_list_instances_command_builder, _super);
    function az_webapp_list_instances_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_list_instances_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_list_instances_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the web app slot. Default to the productions slot if not specified. */
    az_webapp_list_instances_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_list_instances_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_list_instances_command_builder;
}(base_1.CommandBuilder));
/**
 * List available built-in stacks which can be used for web apps.
 *
 * Syntax:
 * ```
 * az webapp list-runtimes [--linux]
 *                         [--subscription]
 * ```
 */
var az_webapp_list_runtimes_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_list_runtimes_command_builder, _super);
    function az_webapp_list_runtimes_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** List runtime stacks for linux based web apps. */
    az_webapp_list_runtimes_command_builder.prototype.linux = function (value) {
        this.setFlag("--linux", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_list_runtimes_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_list_runtimes_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_restart_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_restart_command_builder, _super);
    function az_webapp_restart_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_restart_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_restart_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_restart_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_restart_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_restart_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_restart_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_show_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_show_command_builder, _super);
    function az_webapp_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_webapp_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_show_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_show_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_ssh_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_ssh_command_builder, _super);
    function az_webapp_ssh_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_ssh_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Webapp instance to connect to. Defaults to none. */
    az_webapp_ssh_command_builder.prototype.instance = function (value) {
        this.setFlag("--instance", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_ssh_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Port for the remote connection. Default: Random available port. */
    az_webapp_ssh_command_builder.prototype.port = function (value) {
        this.setFlag("--port", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_ssh_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_ssh_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_ssh_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Timeout in seconds. Defaults to none. */
    az_webapp_ssh_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    return az_webapp_ssh_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_start_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_start_command_builder, _super);
    function az_webapp_start_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_start_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_start_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_start_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_start_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_start_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_start_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_stop_command_builder, _super);
    function az_webapp_stop_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_stop_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_stop_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_stop_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_stop_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_stop_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_up_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_up_command_builder, _super);
    function az_webapp_up_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Show summary of the create and deploy operation instead of executing it. */
    az_webapp_up_command_builder.prototype.dryrun = function (value) {
        this.setFlag("--dryrun", value);
        return this;
    };
    /** Ignore app detection and deploy as an html app. */
    az_webapp_up_command_builder.prototype.html = function (value) {
        this.setFlag("--html", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_up_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Launch the created app using the default browser. */
    az_webapp_up_command_builder.prototype.launchBrowser = function (value) {
        this.setFlag("--launch-browser", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_webapp_up_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Configure default logging required to enable viewing log stream immediately after launching the webapp. */
    az_webapp_up_command_builder.prototype.logs = function (value) {
        this.setFlag("--logs", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_up_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the appserviceplan associated with the webapp. */
    az_webapp_up_command_builder.prototype.plan = function (value) {
        this.setFlag("--plan", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_up_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The pricing tiers, e.g., F1(Free), D1(Shared), B1(Basic Small), B2(Basic Medium), B3(Basic Large), S1(Standard Small), P1V2(Premium V2 Small), P1V3(Premium V3 Small), P2V3(Premium V3 Medium), P3V3(Premium V3 Large), PC2 (Premium Container Small), PC3 (Premium Container Medium), PC4 (Premium Container Large), I1 (Isolated Small), I2 (Isolated Medium), I3 (Isolated Large). */
    az_webapp_up_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_up_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_webapp_up_command_builder;
}(base_1.CommandBuilder));
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
var az_webapp_update_command_builder = /** @class */ (function (_super) {
    __extends(az_webapp_update_command_builder, _super);
    function az_webapp_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_webapp_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Enables sending session affinity cookies. */
    az_webapp_update_command_builder.prototype.clientAffinityEnabled = function (value) {
        this.setFlag("--client-affinity-enabled", value.toString());
        return this;
    };
    /** If true, web app hostname is force registered with DNS. */
    az_webapp_update_command_builder.prototype.forceDnsRegistration = function (value) {
        this.setFlag("--force-dns-registration", value.toString());
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_webapp_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Redirect all traffic made to an app using HTTP to HTTPS. */
    az_webapp_update_command_builder.prototype.httpsOnly = function (value) {
        this.setFlag("--https-only", value.toString());
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_webapp_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_webapp_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_webapp_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_webapp_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_webapp_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** If true, custom (non \*.azurewebsites.net) domains associated with web app are not verified. */
    az_webapp_update_command_builder.prototype.skipCustomDomainVerification = function (value) {
        this.setFlag("--skip-custom-domain-verification", value.toString());
        return this;
    };
    /** If true web app hostname is not registered with DNS on creation. */
    az_webapp_update_command_builder.prototype.skipDnsRegistration = function (value) {
        this.setFlag("--skip-dns-registration", value.toString());
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_webapp_update_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_webapp_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Time to live in seconds for web app's default domain name. */
    az_webapp_update_command_builder.prototype.ttlInSeconds = function (value) {
        this.setFlag("--ttl-in-seconds", value.toString());
        return this;
    };
    return az_webapp_update_command_builder;
}(base_1.CommandBuilder));
